const mysql = require('../node_modules/mysql2/promise');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function genDocId() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 24; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function main() {
  const conn = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'sanota_db'
  });

  console.log('Connected to sanota_db...');

  // 1. Remove the 3 old legacy articles
  const oldSlugs = ['smart-drainage-system', 'nerve-stimulator', 'asmp-food-processing'];
  const [deleteResult] = await conn.query('DELETE FROM articles WHERE slug IN (?)', [oldSlugs]);
  console.log('Deleted old articles rows:', deleteResult.affectedRows);

  // 2. Read staticArticles from articlesData.ts
  // We can require it or parse it
  // Let's import or eval the articles
  const articlesFile = fs.readFileSync(path.join(__dirname, '../../frontend/src/data/articlesData.ts'), 'utf8');

  // Let's define the 4 articles data directly to be 100% accurate
  const articles = [
    {
      title: "Microgreen Greenhouse Monitoring: Detecting Microclimate Failures Before They Destroy Crops",
      slug: "microgreen-greenhouse-monitoring",
      category: "Smart Agriculture",
      date: "2026-03-15",
      author: "Sanota AgriTech Research",
      extractSnippet: "microgreen-greenhouse-monitoring"
    },
    {
      title: "Smart Manufacturing for Sri Lankan SMEs: A Practical, Low Risk Roadmap to Factory Automation",
      slug: "smart-manufacturing-sri-lankan-smes",
      category: "Automation",
      date: "2026-03-20",
      author: "Sanota Industrial Engineering",
      extractSnippet: "smart-manufacturing-sri-lankan-smes"
    },
    {
      title: "CNC Machining vs. 3D Printing: Choosing the Right Manufacturing Process",
      slug: "cnc-machining-vs-3d-printing",
      category: "Product Development",
      date: "2026-03-25",
      author: "Sanota Mechanical & R&D Team",
      extractSnippet: "cnc-machining-vs-3d-printing"
    },
    {
      title: "Thermal Imaging: Detecting Electrical Faults Before They Become Dangerous",
      slug: "thermal-imaging-electrical-faults",
      category: "Maintenance & Reliability",
      date: "2026-03-28",
      author: "Sanota Electrical & Maintenance Team",
      extractSnippet: "thermal-imaging-electrical-faults"
    }
  ];

  // We can transpile and get the full content from articlesData.ts
  const ts = require('../../frontend/node_modules/typescript');
  const transpiled = ts.transpileModule(articlesFile, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  
  // Create a sandbox to run transpiled module
  const moduleObj = { exports: {} };
  const fn = new Function('module', 'exports', 'require', transpiled.outputText);
  fn(moduleObj, moduleObj.exports, require);
  const staticArticles = moduleObj.exports.staticArticles;

  console.log(`Loaded ${staticArticles.length} articles from articlesData.ts`);

  const now = new Date();

  for (const art of staticArticles) {
    // Check if already exists in DB
    const [existing] = await conn.query('SELECT id, document_id FROM articles WHERE slug = ?', [art.slug]);
    if (existing.length > 0) {
      console.log(`Article "${art.slug}" already exists in DB, skipping or updating...`);
      continue;
    }

    const docId = genDocId();

    // In Strapi 5 with draftAndPublish:
    // Insert Draft row (published_at = null)
    await conn.query(
      `INSERT INTO articles (document_id, title, slug, category, date, author, content, created_at, updated_at, published_at, locale)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, NULL)`,
      [docId, art.title, art.slug, art.category, art.date, art.author, art.content, now, now]
    );

    // Insert Published row (published_at = now)
    await conn.query(
      `INSERT INTO articles (document_id, title, slug, category, date, author, content, created_at, updated_at, published_at, locale)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL)`,
      [docId, art.title, art.slug, art.category, art.date, art.author, art.content, now, now, now]
    );

    console.log(`Inserted article "${art.title}" (docId: ${docId}) into Strapi!`);
  }

  const [finalRows] = await conn.query('SELECT id, document_id, title, slug, published_at FROM articles');
  console.log('\nFinal articles in Strapi DB:');
  finalRows.forEach(r => console.log(` - ID: ${r.id} | Slug: ${r.slug} | Status: ${r.published_at ? 'Published' : 'Draft'}`));

  await conn.end();
  console.log('\nSync completed successfully!');
}

main().catch(console.error);
