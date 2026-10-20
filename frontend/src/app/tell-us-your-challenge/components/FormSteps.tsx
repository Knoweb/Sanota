import React, { useRef } from 'react';
import Link from 'next/link';
import { ChallengeFormData, CoreRequirementId } from '../types';
import { UploadCloud } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { challengeES } from '@/locales/es/challenge';
import { challengeDE } from '@/locales/de/challenge';
import { challengeJA } from '@/locales/ja/challenge';
import { challengeAR } from '@/locales/ar/challenge';

interface StepProps {
  data: ChallengeFormData;
  updateData: (fields: Partial<ChallengeFormData>) => void;
  showErrors?: boolean;
}

// ---------------------------------------------------------
// STEP 1
// ---------------------------------------------------------

export function Step1({ data, updateData, showErrors }: StepProps) {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ch = isAr ? challengeAR : isJa ? challengeJA : isDe ? challengeDE : isEs ? challengeES : null;

  const defaultOptions: { id: CoreRequirementId; title: string; desc: string }[] = [
    { id: "modernize", title: "Modernize or Repair a Machine", desc: "Improve the reliability, productivity, safety or performance of existing machinery." },
    { id: "automate", title: "Automate a Process", desc: "Reduce manual work, improve consistency or introduce automated control into an operation." },
    { id: "new_machine", title: "Develop a New Machine", desc: "Design and build machinery or equipment around a specific production or operational requirement." },
    { id: "complete_system", title: "Develop a Complete System", desc: "Create or integrate a production line, processing system, facility solution or multi-technology project." },
    { id: "iot", title: "Introduce IoT or Digital Monitoring", desc: "Connect machinery, equipment or facilities to sensors, dashboards, alerts, reports or software applications." },
    { id: "product", title: "Develop a Product or Prototype", desc: "Transform an idea or operational requirement into a designed, tested and practical product." },
    { id: "amc", title: "Arrange AMC or Maintenance Support", desc: "Obtain planned maintenance and technical support for Sanota-built or eligible third-party systems." },
    { id: "consultation", title: "Request Engineering Consultation", desc: "Discuss an operational concern, opportunity or concept when the appropriate solution is not yet clear." },
  ];

  const options: { id: CoreRequirementId; title: string; desc: string }[] = ch ? [
    { id: "modernize", title: ch.steps.step1.options[0].title, desc: ch.steps.step1.options[0].desc },
    { id: "automate", title: ch.steps.step1.options[1].title, desc: ch.steps.step1.options[1].desc },
    { id: "new_machine", title: ch.steps.step1.options[2].title, desc: ch.steps.step1.options[2].desc },
    { id: "complete_system", title: ch.steps.step1.options[3].title, desc: ch.steps.step1.options[3].desc },
    { id: "iot", title: ch.steps.step1.options[4].title, desc: ch.steps.step1.options[4].desc },
    { id: "product", title: ch.steps.step1.options[5].title, desc: ch.steps.step1.options[5].desc },
    { id: "amc", title: ch.steps.step1.options[6].title, desc: ch.steps.step1.options[6].desc },
    { id: "consultation", title: ch.steps.step1.options[7].title, desc: ch.steps.step1.options[7].desc },
  ] : defaultOptions;

  const toggleOption = (id: CoreRequirementId) => {
    if (data.coreRequirements.includes(id)) {
      updateData({ coreRequirements: data.coreRequirements.filter(req => req !== id) });
    } else {
      updateData({ coreRequirements: [...data.coreRequirements, id] });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#17135B] dark:text-white mb-4">
        {ch ? ch.steps.step1.title : "What would you like help with?"}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        {ch ? ch.steps.step1.subtitle : "Select the option that most closely matches your requirement. You may select more than one."}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {options.map((opt) => {
          const isSelected = data.coreRequirements.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              className={`w-full text-left p-5 rounded-xl border transition-all ${
                isSelected 
                  ? 'border-[#C59B27] dark:border-[#E8B84B] bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 shadow-sm dark:shadow-[0_0_15px_rgba(232,184,75,0.15)]' 
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0B1220] hover:border-[#2E5EAA] hover:bg-blue-50/40 dark:hover:bg-[#2E5EAA]/5 shadow-sm dark:shadow-none'
              }`}
            >
              <div className="flex items-start">
                <div className={`w-5 h-5 mt-0.5 rounded border flex items-center justify-center mr-3 flex-shrink-0 transition-colors ${isSelected ? 'border-[#C59B27] dark:border-[#E8B84B] bg-[#C59B27] dark:bg-[#E8B84B]' : 'border-slate-300 dark:border-slate-500 bg-white dark:bg-[#131C2E]'}`}>
                  {isSelected && <svg className="w-3.5 h-3.5 text-white dark:text-[#0B1220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 ${isSelected ? 'text-[#17135B] dark:text-white' : 'text-slate-800 dark:text-slate-300'}`}>{opt.title}</h4>
                  <p className={`text-sm leading-relaxed ${isSelected ? 'text-[#C59B27] dark:text-[#E8B84B]/80 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>{opt.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {showErrors && data.coreRequirements.length === 0 && (
        <p className="text-red-500 text-sm mb-8 font-medium">
          {ch ? ch.systemMessages.requiredField : "Please complete this field before continuing."}
        </p>
      )}

      <div className="bg-blue-50 dark:bg-[#2E5EAA]/10 border border-blue-200 dark:border-[#2E5EAA]/20 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300 flex items-start shadow-sm">
        <svg className="w-5 h-5 text-[#2E5EAA] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p>
          {isAr ? (
            <>
              <span className="font-semibold text-[#17135B] dark:text-white">لست متأكداً من الخيار الذي يجب اختياره؟</span> اختر «طلب استشارة هندسية»، وسيقوم فريقنا بمساعدتك في تحديد المتطلبات بدقة.
            </>
          ) : isJa ? (
            <>
              <span className="font-semibold text-[#17135B] dark:text-white">どのオプションを選択すればよいかご不明ですか？</span> 「エンジニアリング相談を依頼する」をお選びいただければ、サノタの専門チームが要件定義をサポートいたします。
            </>
          ) : isDe ? (
            <>
              <span className="font-semibold text-[#17135B] dark:text-white">Sie sind sich nicht sicher, welche Option Sie wählen sollen?</span> Wählen Sie „Ingenieurberatung anfordern“, und unser Team hilft Ihnen bei der Definition der Anforderungen.
            </>
          ) : isEs ? (
            <>
              <span className="font-semibold text-[#17135B] dark:text-white">¿No está seguro de qué opción seleccionar?</span> Elija 'Solicitar consulta de ingeniería' y nuestro equipo le ayudará a definir los requisitos.
            </>
          ) : (
            <>
              <span className="font-semibold text-[#17135B] dark:text-white">Not sure which option to select?</span> Choose Request Engineering Consultation, and our team will help define the requirement.
            </>
          )}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// STEP 2
// ---------------------------------------------------------

export function Step2({ data, updateData, showErrors }: StepProps) {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ch = isAr ? challengeAR : isJa ? challengeJA : isDe ? challengeDE : isEs ? challengeES : null;

  const industries = [
    { label: isAr ? "التصنيع والأتمتة الصناعية" : isJa ? "製造業" : isDe ? "Fertigung" : isEs ? "Fabricación" : "Manufacturing", value: "Manufacturing" },
    { label: isAr ? "الزراعة الذكية" : isJa ? "農業" : isDe ? "Landwirtschaft" : isEs ? "Agricultura" : "Agriculture", value: "Agriculture" },
    { label: isAr ? "معالجة الأغذية والمشروبات" : isJa ? "食品・飲料加工" : isDe ? "Lebensmittel- und Getränkeverarbeitung" : isEs ? "Procesamiento de alimentos y bebidas" : "Food and beverage processing", value: "Food and beverage processing" },
    { label: isAr ? "صناعة الشاي" : isJa ? "製茶" : isDe ? "Tee" : isEs ? "Té" : "Tea", value: "Tea" },
    { label: isAr ? "الخدمات اللوجستية والتخزين" : isJa ? "物流・倉庫管理" : isDe ? "Logistik oder Lagerhaltung" : isEs ? "Logística o almacenamiento" : "Logistics or warehousing", value: "Logistics or warehousing" },
    { label: isAr ? "إدارة الطاقة والموارد" : isJa ? "エネルギー・資源管理" : isDe ? "Energie- oder Ressourcenmanagement" : isEs ? "Gestión de energía o recursos" : "Energy or resource management", value: "Energy or resource management" },
    { label: isAr ? "الإدارة البيئية ومعالجة النفايات" : isJa ? "環境・廃棄物管理" : isDe ? "Umwelt- oder Abfallmanagement" : isEs ? "Gestión ambiental o de residuos" : "Environmental or waste management", value: "Environmental or waste management" },
    { label: isAr ? "البنية التحتية والمرافق الذكية" : isJa ? "インフラ・スマート施設" : isDe ? "Infrastruktur oder Anlagen" : isEs ? "Infraestructura o instalaciones" : "Infrastructure or facilities", value: "Infrastructure or facilities" },
    { label: isAr ? "الرعاية الصحية والهندسة الطبية الحيوية" : isJa ? "医療・バイオメディカル" : isDe ? "Gesundheitswesen oder Biomedizin" : isEs ? "Atención sanitaria o biomédica" : "Healthcare or biomedical", value: "Healthcare or biomedical" },
    { label: isAr ? "البحث والابتكار وتطوير المنتجات" : isJa ? "研究・製品開発" : isDe ? "Forschung oder Produktentwicklung" : isEs ? "Investigación o desarrollo de productos" : "Research or product development", value: "Research or product development" },
    { label: isAr ? "أخرى" : isJa ? "その他" : isDe ? "Sonstiges" : isEs ? "Otros" : "Other", value: "Other" }
  ];

  const urgencies = [
    { label: isAr ? "مشكلة تشغيلية عاجلة" : isJa ? "緊急の運用上の問題" : isDe ? "Sofortiges operatives Problem" : isEs ? "Problema operativo inmediato" : "Immediate operational issue", value: "Immediate operational issue" },
    { label: isAr ? "مطلوب خلال شهر واحد" : isJa ? "1ヶ月以内に必要" : isDe ? "Benötigt innerhalb eines Monats" : isEs ? "Requerido en un mes" : "Required within one month", value: "Required within one month" },
    { label: isAr ? "مطلوب خلال ثلاثة أشهر" : isJa ? "3ヶ月以内に必要" : isDe ? "Benötigt innerhalb von drei Monaten" : isEs ? "Requerido en tres meses" : "Required within three months", value: "Required within three months" },
    { label: isAr ? "مشروع مستقبلي مخطط له" : isJa ? "将来的な計画プロジェクト" : isDe ? "Geplantes zukünftiges Projekt" : isEs ? "Proyecto futuro planificado" : "Planned future project", value: "Planned future project" },
    { label: isAr ? "لم يتم تحديد الجدول الزمني بعد" : isJa ? "スケジュール未定" : isDe ? "Zeitplan noch nicht festgelegt" : isEs ? "Plazo aún no definido" : "Timeline not yet decided", value: "Timeline not yet decided" }
  ];

  const toggleArrayItem = (field: keyof ChallengeFormData, val: string) => {
    const current = data[field] as string[];
    if (current.includes(val)) {
      updateData({ [field]: current.filter(x => x !== val) } as any);
    } else {
      updateData({ [field]: [...current, val] } as any);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#17135B] dark:text-white mb-8">
        {ch ? ch.steps.step2.title : "Tell Us About the Requirement"}
      </h2>

      <div className="space-y-8">
        
        {/* Core questions */}
        <div className="space-y-4">
          <label className="block text-[#17135B] dark:text-white font-bold text-lg mb-1">
            {isAr ? "ما الذي يحدث الآن؟ (الوضع الحالي أو التحدي) *" : isJa ? "現在何が起きていますか？（現状または課題） *" : isDe ? "Was geschieht jetzt? (Aktuelle Situation oder Herausforderung) *" : isEs ? "¿Qué está pasando ahora? (Situación o desafío actual) *" : "What is happening now? *"}
          </label>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
            {isAr ? "صف بإيجاز الوضع الحالي أو المشكلة أو فرصة التحسين." : isJa ? "現在の状況、問題点、または改善の機会について簡潔にご記入ください。" : isDe ? "Beschreiben Sie kurz die aktuelle Situation, das Problem oder die Chance." : isEs ? "Describa brevemente la situación actual, el problema o la oportunidad." : "Briefly describe the current situation, problem or opportunity."}
          </p>
          <textarea 
            value={data.currentSituation}
            onChange={(e) => updateData({ currentSituation: e.target.value })}
            placeholder={ch ? ch.steps.step2.fields.situation.placeholder : "For example: “This process is currently completed manually and causes production delays.”"}
            className={`w-full bg-white dark:bg-[#0B1220] rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors min-h-[100px] ${showErrors && data.currentSituation.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-300 dark:border-slate-700 focus:border-[#C59B27] dark:focus:border-[#E8B84B] shadow-sm'}`}
          />
          {showErrors && data.currentSituation.trim() === "" && (
            <p className="text-red-500 text-sm font-medium">
              {ch ? ch.systemMessages.requiredField : "Please complete this field before continuing."}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <label className="block text-[#17135B] dark:text-white font-bold text-lg mb-1">
            {isAr ? "ما الذي ترغب في تحقيقه؟ (النتيجة المرجوة) *" : isJa ? "何を達成したいとお考えですか？（期待される成果） *" : isDe ? "Was möchten Sie erreichen? (Gewünschtes Ergebnis) *" : isEs ? "¿Qué te gustaría lograr? (Resultado deseado) *" : "What would you like to achieve? *"}
          </label>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
            {isAr ? "أخبرنا بما يجب أن يعمل بشكل أفضل أو مختلف أو أكثر كفاءة." : isJa ? "何がより良く、どのように改善され、効率化されるべきかをお知らせください。" : isDe ? "Sagen Sie uns, was besser, anders oder effizienter funktionieren sollte." : isEs ? "Díganos qué debería funcionar mejor, de forma diferente o más eficiente." : "Tell us what should work better, differently or more efficiently."}
          </p>
          <textarea 
            value={data.desiredOutcome}
            onChange={(e) => updateData({ desiredOutcome: e.target.value })}
            placeholder={ch ? ch.steps.step2.fields.outcome.placeholder : "For example: “We want to automate the process, reduce handling time and monitor production.”"}
            className={`w-full bg-white dark:bg-[#0B1220] rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors min-h-[100px] ${showErrors && data.desiredOutcome.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-300 dark:border-slate-700 focus:border-[#C59B27] dark:focus:border-[#E8B84B] shadow-sm'}`}
          />
          {showErrors && data.desiredOutcome.trim() === "" && (
            <p className="text-red-500 text-sm font-medium">
              {ch ? ch.systemMessages.requiredField : "Please complete this field before continuing."}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="block text-[#17135B] dark:text-white font-bold text-lg">
              {ch ? ch.steps.step2.fields.industry.label : "Which industry or sector is this related to?"}
            </label>
            <select 
              value={data.industry}
              onChange={(e) => updateData({ industry: e.target.value })}
              className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-[#17135B] dark:text-white focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm"
            >
              <option value="">{isAr ? "اختر القطاع الصناعي" : isJa ? "業界・産業分野を選択" : isDe ? "Branche auswählen" : isEs ? "Seleccionar sector / industria" : "Select industry"}</option>
              {industries.map(i => <option key={i.value} value={i.value}>{i.label}</option>)}
            </select>
          </div>

          <div className="space-y-3">
            <label className="block text-[#17135B] dark:text-white font-bold text-lg">
              {ch ? ch.steps.step2.fields.location.label : "Where is the requirement located?"}
            </label>
            <input 
              type="text" 
              value={data.location}
              onChange={(e) => updateData({ location: e.target.value })}
              placeholder={ch ? ch.steps.step2.fields.location.placeholder : "City, district and country"}
              className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-[#17135B] dark:text-white font-bold text-lg mb-2">
            {ch ? ch.steps.step2.fields.urgency.label : "How urgent is the requirement?"}
          </label>
          <div className="flex flex-wrap gap-3">
            {urgencies.map((u) => (
              <label key={u.value} className={`cursor-pointer px-4 py-2 rounded-full border transition-all text-sm ${data.urgency === u.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-[#E8B84B] font-semibold' : 'bg-slate-50 dark:bg-[#0B1220] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#2E5EAA]'}`}>
                <input type="radio" className="hidden" checked={data.urgency === u.value} onChange={() => updateData({ urgency: u.value })} />
                {u.label}
              </label>
            ))}
          </div>
        </div>

        {/* --- CONDITIONAL QUESTIONS --- */}
        {data.coreRequirements.some(req => req !== 'consultation') && (
           <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-12">
             <h3 className="text-xl font-bold text-[#17135B] dark:text-white mb-6">
               {isAr ? "تفاصيل محددة" : isJa ? "具体的な詳細情報" : isDe ? "Spezifische Details" : isEs ? "Detalles Específicos" : "Specific Details"}
             </h3>
             
             {data.coreRequirements.includes("modernize") && (
               <div className="glowing-card space-y-6 bg-slate-50/80 dark:bg-[#0B1220]/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
                 <h4 className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">
                   {isAr ? "فيما يتعلق بـ: تحديث أو إصلاح الآلات" : isJa ? "該当項目：機械の近代化・修理" : isDe ? "In Bezug auf: Eine Maschine modernisieren oder reparieren" : isEs ? "Con respecto a: Modernizar o reparar una máquina" : "Regarding: Modernize or Repair a Machine"}
                 </h4>
                 
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold">
                     {ch ? ch.steps.step2.conditionals.modernize.machineType : "What type of machine or equipment is involved?"}
                   </label>
                   <input type="text" value={data.mod_machineType} onChange={e => updateData({ mod_machineType: e.target.value })} className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.modernize.problemLabel : "What problem are you experiencing?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "أعطال متكررة وتوقفات مفاجئة" : isJa ? "頻繁な故障" : isDe ? "Häufige Ausfälle" : isEs ? "Averías frecuentes" : "Frequent breakdowns", value: "Frequent breakdowns" },
                       { label: isAr ? "انخفاض الأداء ومعدل الإنتاج" : isJa ? "性能低下・処理能力の低下" : isDe ? "Verminderte Leistung" : isEs ? "Rendimiento reducido" : "Reduced performance", value: "Reduced performance" },
                       { label: isAr ? "أجهزة تحكم أو مكونات قديمة ومهترئة" : isJa ? "旧式制御盤または部品の老朽化" : isDe ? "Veraltete Steuerungen oder Komponenten" : isEs ? "Controles o componentes obsoletos" : "Obsolete controls or components", value: "Obsolete controls or components" },
                       { label: isAr ? "مخاوف تتعلق بالسلامة الصناعية" : isJa ? "安全性・労働環境の懸念" : isDe ? "Sicherheitsbedenken" : isEs ? "Problemas de seguridad" : "Safety concerns", value: "Safety concerns" },
                       { label: isAr ? "ارتفاع تكلفة الطاقة أو التشغيل" : isJa ? "高いエネルギー・運用コスト" : isDe ? "Hohe Energie- oder Betriebskosten" : isEs ? "Altos costos de energía u operación" : "High energy or operating cost", value: "High energy or operating cost" },
                       { label: isAr ? "صعوبة الحصول على قطع الغيار" : isJa ? "交換部品の調達困難" : isDe ? "Schwierigkeiten bei der Ersatzteilbeschaffung" : isEs ? "Dificultad para obtener repuestos" : "Spare-parts difficulty", value: "Spare-parts difficulty" },
                       { label: isAr ? "الحاجة إلى زيادة السعة الإنتاجية" : isJa ? "生産能力増強の必要性" : isDe ? "Bedarf an erhöhter Kapazität" : isEs ? "Necesidad de mayor capacidad" : "Need for increased capacity", value: "Need for increased capacity" },
                       { label: isAr ? "أخرى" : isJa ? "その他" : isDe ? "Sonstiges" : isEs ? "Otro" : "Other", value: "Other" }
                     ].map(opt => (
                       <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.mod_problem === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.mod_problem === opt.value} onChange={() => updateData({ mod_problem: opt.value })} /> {opt.label}
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.modernize.operatingStatus : "Is the machine currently operating?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "نعم" : isJa ? "はい" : isDe ? "Ja" : isEs ? "Sí" : "Yes", value: "Yes" },
                       { label: isAr ? "تعمل ضمن قيود ومشاكل" : isJa ? "制限付きで稼働中" : isDe ? "Betrieb mit Einschränkungen" : isEs ? "Funcionamiento con limitaciones" : "Operating with limitations", value: "Operating with limitations" },
                       { label: isAr ? "لا" : isJa ? "いいえ" : isDe ? "Nein" : isEs ? "No" : "No", value: "No" },
                       { label: isAr ? "لست متأكداً" : isJa ? "不明 / 相談したい" : isDe ? "Nicht sicher" : isEs ? "No estoy seguro" : "Not sure", value: "Not sure" }
                     ].map(opt => (
                       <label key={opt.value} className={`cursor-pointer px-4 py-1.5 rounded-lg border text-sm ${data.mod_isOperating === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.mod_isOperating === opt.value} onChange={() => updateData({ mod_isOperating: opt.value })} /> {opt.label}
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("automate") && (
               <div className="glowing-card space-y-6 bg-slate-50/80 dark:bg-[#0B1220]/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
                 <h4 className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">
                   {isAr ? "فيما يتعلق بـ: أتمتة عملية صناعية" : isJa ? "該当項目：プロセスの自動化" : isDe ? "In Bezug auf: Einen Prozess automatisieren" : isEs ? "Con respecto a: Automatizar un proceso" : "Regarding: Automate a Process"}
                 </h4>
                 
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold">
                     {ch ? ch.steps.step2.conditionals.automate.processName : "Which process would you like to automate?"}
                   </label>
                   <input type="text" value={data.auto_process} onChange={e => updateData({ auto_process: e.target.value })} className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.automate.currentMethod : "How is the process currently completed?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "يدوية بالكامل" : isJa ? "完全手作業" : isDe ? "Vollständig manuell" : isEs ? "Totalmente manual" : "Fully manual", value: "Fully manual" },
                       { label: isAr ? "مؤتمتة جزئياً" : isJa ? "部分的に自動化" : isDe ? "Teilautomatisiert" : isEs ? "Parcialmente automatizado" : "Partly automated", value: "Partly automated" },
                       { label: isAr ? "الأتمتة الحالية بحاجة إلى تحسين" : isJa ? "既存の自動化設備の改善が必要" : isDe ? "Bestehende Automatisierung verbesserungsbedürftig" : isEs ? "La automatización existente requiere mejoras" : "Existing automation requires improvement", value: "Existing automation requires improvement" },
                       { label: isAr ? "عملية جديدة كلياً" : isJa ? "新しい工程・プロセス" : isDe ? "Neuer Prozess" : isEs ? "Nuevo proceso" : "New process", value: "New process" },
                       { label: isAr ? "غير متأكد" : isJa ? "不明 / 相談したい" : isDe ? "Nicht sicher" : isEs ? "No estoy seguro" : "Not sure", value: "Not sure" }
                     ].map(opt => (
                       <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.auto_currentState === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.auto_currentState === opt.value} onChange={() => updateData({ auto_currentState: opt.value })} /> {opt.label}
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.automate.improvement : "What is the main expected improvement?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "زيادة الإنتاجية" : isJa ? "生産性の向上" : isDe ? "Höhere Produktivität" : isEs ? "Mayor productividad" : "Higher productivity", value: "Higher productivity" },
                       { label: isAr ? "تحسين الاتساق والجودة" : isJa ? "品質・精度の安定化" : isDe ? "Bessere Konsistenz" : isEs ? "Mayor consistencia" : "Better consistency", value: "Better consistency" },
                       { label: isAr ? "تقليل المناولة اليدوية" : isJa ? "手作業・身体的負担の削減" : isDe ? "Weniger manuelle Handhabung" : isEs ? "Menor manipulación manual" : "Reduced manual handling", value: "Reduced manual handling" },
                       { label: isAr ? "تحسين السلامة" : isJa ? "安全性の向上" : isDe ? "Verbesserte Sicherheit" : isEs ? "Mayor seguridad" : "Improved safety", value: "Improved safety" },
                       { label: isAr ? "تقليل الهدر" : isJa ? "歩留まり向上・ロスの削減" : isDe ? "Weniger Abfall" : isEs ? "Menor desperdicio" : "Reduced waste", value: "Reduced waste" },
                       { label: isAr ? "تحسين المراقبة والإبلاغ" : isJa ? "監視とデータ収集の強化" : isDe ? "Verbesserte Überwachung und Berichterstattung" : isEs ? "Mejor seguimiento e informes" : "Better monitoring and reporting", value: "Better monitoring and reporting" },
                       { label: isAr ? "أخرى" : isJa ? "その他" : isDe ? "Sonstiges" : isEs ? "Otro" : "Other", value: "Other" }
                     ].map(opt => (
                       <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.auto_expectedImprovement === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.auto_expectedImprovement === opt.value} onChange={() => updateData({ auto_expectedImprovement: opt.value })} /> {opt.label}
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("new_machine") && (
               <div className="glowing-card space-y-6 bg-slate-50/80 dark:bg-[#0B1220]/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
                 <h4 className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">
                   {isAr ? "فيما يتعلق بـ: تطوير تصميم آلة جديدة" : isJa ? "該当項目：新規機械の開発・設計" : isDe ? "In Bezug auf: Ein neues Maschinendesign entwickeln" : isEs ? "Con respecto a: Desarrollar una nueva máquina" : "Regarding: Develop a New Machine"}
                 </h4>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold">
                     {ch ? ch.steps.step2.conditionals.newMachine.purpose : "What should the machine do?"}
                   </label>
                   <input type="text" value={data.new_whatShouldItDo} onChange={e => updateData({ new_whatShouldItDo: e.target.value })} className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold">
                     {ch ? ch.steps.step2.conditionals.newMachine.material : "What material or product will it handle?"}
                   </label>
                   <input type="text" value={data.new_material} onChange={e => updateData({ new_material: e.target.value })} className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.newMachine.hasConcept : "Do you have an existing concept, drawing or reference?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "نعم" : isJa ? "はい" : isDe ? "Ja" : isEs ? "Sí" : "Yes", value: "Yes" },
                       { label: isAr ? "لا" : isJa ? "いいえ" : isDe ? "Nein" : isEs ? "No" : "No", value: "No" },
                       { label: isAr ? "تم تطويره جزئياً" : isJa ? "一部策定済み" : isDe ? "Teilweise entwickelt" : isEs ? "Parcialmente desarrollado" : "Partly developed", value: "Partly developed" }
                     ].map(opt => (
                       <label key={opt.value} className={`cursor-pointer px-4 py-1.5 rounded-lg border text-sm ${data.new_hasConcept === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.new_hasConcept === opt.value} onChange={() => updateData({ new_hasConcept: opt.value })} /> {opt.label}
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("complete_system") && (
               <div className="glowing-card space-y-6 bg-slate-50/80 dark:bg-[#0B1220]/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
                 <h4 className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">
                   {isAr ? "فيما يتعلق بـ: تطوير نظام متكامل كامل" : isJa ? "該当項目：統合システムの開発" : isDe ? "In Bezug auf: Ein vollständiges System entwickeln" : isEs ? "Con respecto a: Desarrollar un sistema completo" : "Regarding: Develop a Complete System"}
                 </h4>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold">
                     {ch ? ch.steps.step2.conditionals.completeSystem.systemType : "What type of system or facility is required?"}
                   </label>
                   <input type="text" value={data.sys_type} onChange={e => updateData({ sys_type: e.target.value })} className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.completeSystem.capabilities : "Which capabilities may be involved? (Select all that apply)"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "الهندسة الميكانيكية" : isJa ? "機械工学設計" : isDe ? "Maschinenbau" : isEs ? "Ingeniería mecánica" : "Mechanical engineering", value: "Mechanical engineering" },
                       { label: isAr ? "الهندسة الكهربائية" : isJa ? "電気・電子工学" : isDe ? "Elektrotechnik" : isEs ? "Ingeniería eléctrica" : "Electrical engineering", value: "Electrical engineering" },
                       { label: isAr ? "أنظمة الأتمتة والتحكم" : isJa ? "制御・オートメーション" : isDe ? "Automatisierung und Steuerungstechnik" : isEs ? "Automatización y control" : "Automation and controls", value: "Automation and controls" },
                       { label: isAr ? "إنترنت الأشياء والمراقبة" : isJa ? "IoT・モニタリング" : isDe ? "IoT und Überwachung" : isEs ? "IoT y monitorización" : "IoT and monitoring", value: "IoT and monitoring" },
                       { label: isAr ? "البرمجيات" : isJa ? "ソフトウェア開発" : isDe ? "Software" : isEs ? "Software" : "Software", value: "Software" },
                       { label: isAr ? "التصنيع والتجميع" : isJa ? "高精度機械加工・製缶" : isDe ? "Fertigung" : isEs ? "Fabricación" : "Fabrication", value: "Fabrication" },
                       { label: isAr ? "التركيب والتشغيل" : isJa ? "据付・試運転" : isDe ? "Installation und Inbetriebnahme" : isEs ? "Instalación y puesta en marcha" : "Installation and commissioning", value: "Installation and commissioning" },
                       { label: isAr ? "دعم الصيانة المستمر" : isJa ? "保守・メンテナンス支援" : isDe ? "Wartungsunterstützung" : isEs ? "Soporte de mantenimiento" : "Maintenance support", value: "Maintenance support" },
                       { label: isAr ? "لست متأكداً" : isJa ? "不明 / 相談したい" : isDe ? "Nicht sicher" : isEs ? "No estoy seguro" : "Not sure", value: "Not sure" }
                     ].map(opt => {
                       const isSelected = data.sys_capabilities.includes(opt.value);
                       return (
                         <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${isSelected ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                           <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleArrayItem("sys_capabilities", opt.value)} /> {opt.label}
                         </label>
                       );
                     })}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("iot") && (
               <div className="glowing-card space-y-6 bg-slate-50/80 dark:bg-[#0B1220]/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
                 <h4 className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">
                   {isAr ? "فيما يتعلق بـ: إدخال إنترنت الأشياء أو المراقبة الرقمية" : isJa ? "該当項目：IoT・デジタル監視の導入" : isDe ? "In Bezug auf: IoT oder digitale Überwachung einführen" : isEs ? "Con respecto a: Introducir IoT o monitorización digital" : "Regarding: Introduce IoT or Digital Monitoring"}
                 </h4>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.iot.whatToMonitor : "What would you like to monitor or control?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "الآلات والمعدات" : isJa ? "産業機械" : isDe ? "Maschinen" : isEs ? "Maquinaria" : "Machinery", value: "Machinery" },
                       { label: isAr ? "الإنتاج وسير العمل" : isJa ? "生産ライン" : isDe ? "Produktion" : isEs ? "Producción" : "Production", value: "Production" },
                       { label: isAr ? "الطاقة أو المرافق" : isJa ? "エネルギー・ユーティリティ設備" : isDe ? "Energie oder Versorgung" : isEs ? "Energía o servicios públicos" : "Energy or utilities", value: "Energy or utilities" },
                       { label: isAr ? "درجة الحرارة أو البيئة" : isJa ? "温度・湿度・環境監視" : isDe ? "Temperatur oder Umgebung" : isEs ? "Temperatura o entorno" : "Temperature or environment", value: "Temperature or environment" },
                       { label: isAr ? "الظروف الزراعية" : isJa ? "農業・土壌環境" : isDe ? "Landwirtschaftliche Bedingungen" : isEs ? "Condiciones agrícolas" : "Agricultural conditions", value: "Agricultural conditions" },
                       { label: isAr ? "الموقع أو حركة الأصول" : isJa ? "位置情報・動線追跡" : isDe ? "Standort oder Bewegung" : isEs ? "Ubicación o movimiento" : "Location or movement", value: "Location or movement" },
                       { label: isAr ? "حالة المعدات الفنية" : isJa ? "機器の健康状態・振動監視" : isDe ? "Gerätezustand" : isEs ? "Estado del equipo" : "Equipment condition", value: "Equipment condition" },
                       { label: isAr ? "معيار تشغيلي آخر" : isJa ? "その他運用パラメータ" : isDe ? "Weiterer Betriebsparameter" : isEs ? "Otro parámetro operativo" : "Another operational parameter", value: "Another operational parameter" }
                     ].map(opt => {
                       const isSelected = data.iot_whatToMonitor.includes(opt.value);
                       return (
                         <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${isSelected ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                           <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleArrayItem("iot_whatToMonitor", opt.value)} /> {opt.label}
                         </label>
                       );
                     })}
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.iot.howToAccess : "How would you like to access the information?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "لوحة تحكم الويب" : isJa ? "Webダッシュボード" : isDe ? "Web-Dashboard" : isEs ? "Panel de control web" : "Web dashboard", value: "Web dashboard" },
                       { label: isAr ? "تطبيق جوال" : isJa ? "モバイルアプリケーション" : isDe ? "Mobile Anwendung" : isEs ? "Aplicación móvil" : "Mobile application", value: "Mobile application" },
                       { label: isAr ? "تنبيهات وإشعارات ذكية" : isJa ? "アラート・自動通知" : isDe ? "Warnungen und Benachrichtigungen" : isEs ? "Alertas y notificaciones" : "Alerts and notifications", value: "Alerts and notifications" },
                       { label: isAr ? "تقارير رقمية آلية" : isJa ? "自動レポート生成" : isDe ? "Automatisierte Berichte" : isEs ? "Informes automatizados" : "Automated reports", value: "Automated reports" },
                       { label: isAr ? "التكامل مع نظام قائم" : isJa ? "既存システムとの統合" : isDe ? "Integration in ein bestehendes System" : isEs ? "Integración con un sistema existente" : "Integration with an existing system", value: "Integration with an existing system" },
                       { label: isAr ? "لست متأكداً" : isJa ? "不明 / 相談したい" : isDe ? "Nicht sicher" : isEs ? "No estoy seguro" : "Not sure", value: "Not sure" }
                     ].map(opt => {
                       const isSelected = data.iot_howToAccess.includes(opt.value);
                       return (
                         <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${isSelected ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                           <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleArrayItem("iot_howToAccess", opt.value)} /> {opt.label}
                         </label>
                       );
                     })}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("product") && (
               <div className="glowing-card space-y-6 bg-slate-50/80 dark:bg-[#0B1220]/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
                 <h4 className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">
                   {isAr ? "فيما يتعلق بـ: تطوير منتج أو نموذج أولي" : isJa ? "該当項目：製品または試作品の開発" : isDe ? "In Bezug auf: Ein Produkt oder einen Prototyp entwickeln" : isEs ? "Con respecto a: Desarrollar un producto o prototipo" : "Regarding: Develop a Product or Prototype"}
                 </h4>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold">
                     {ch ? ch.steps.step2.conditionals.product.description : "Briefly describe the idea or product requirement."}
                   </label>
                   <textarea value={data.prod_description} onChange={e => updateData({ prod_description: e.target.value })} className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors h-24 shadow-sm" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.product.stage : "What stage has the project reached?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "الفكرة الأولية" : isJa ? "初期構想・アイデア段階" : isDe ? "Erste Idee" : isEs ? "Idea inicial" : "Initial idea", value: "Initial idea" },
                       { label: isAr ? "تم تطوير المفهوم" : isJa ? "基本概念策定済み" : isDe ? "Konzept entwickelt" : isEs ? "Concepto desarrollado" : "Concept developed", value: "Concept developed" },
                       { label: isAr ? "رسومات أو التصميم متوفر" : isJa ? "設計図面・3Dデータあり" : isDe ? "Zeichnungen oder Design vorhanden" : isEs ? "Dibujos o diseño disponibles" : "Drawings or design available", value: "Drawings or design available" },
                       { label: isAr ? "النموذج الأولي متوفر" : isJa ? "プロトタイプ（試作機）あり" : isDe ? "Prototyp vorhanden" : isEs ? "Prototipo disponible" : "Prototype available", value: "Prototype available" },
                       { label: isAr ? "المنتج الحالي يحتاج إلى تحسين" : isJa ? "既存製品の改良が必要" : isDe ? "Bestehendes Produkt verbesserungsbedürftig" : isEs ? "El producto existente requiere mejoras" : "Existing product requires improvement", value: "Existing product requires improvement" },
                       { label: isAr ? "غير متأكد" : isJa ? "不明 / 相談したい" : isDe ? "Nicht sicher" : isEs ? "No estoy seguro" : "Not sure", value: "Not sure" }
                     ].map(opt => (
                       <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.prod_stage === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.prod_stage === opt.value} onChange={() => updateData({ mod_isOperating: opt.value, prod_stage: opt.value })} /> {opt.label}
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {data.coreRequirements.includes("amc") && (
               <div className="glowing-card space-y-6 bg-slate-50/80 dark:bg-[#0B1220]/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
                 <h4 className="text-[#C59B27] dark:text-[#E8B84B] font-bold uppercase tracking-wider text-sm mb-4">
                   {isAr ? "فيما يتعلق بـ: ترتيب عقد صيانة أو دعم صيانة (AMC)" : isJa ? "該当項目：保守契約（AMC）またはメンテナンス支援" : isDe ? "In Bezug auf: Wartungsverträge oder Wartungsunterstützung vereinbaren" : isEs ? "Con respecto a: Contratar AMC o soporte de mantenimiento" : "Regarding: Arrange AMC or Maintenance Support"}
                 </h4>
                 
                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.amc.whatRequiresSupport : "What requires maintenance support?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "الآلات ومعدات المعالجة" : isJa ? "産業機械" : isDe ? "Maschinen" : isEs ? "Maquinaria" : "Machinery", value: "Machinery" },
                       { label: isAr ? "أنظمة الأتمتة أو التحكم" : isJa ? "自動化・制御システム" : isDe ? "Automatisierungs- oder Steuerungssysteme" : isEs ? "Sistema de automatización o control" : "Automation or control system", value: "Automation or control system" },
                       { label: isAr ? "الأنظمة الكهربائية والإلكترونية" : isJa ? "電気設備・制御盤" : isDe ? "Elektrische Systeme" : isEs ? "Sistema eléctrico" : "Electrical system", value: "Electrical system" },
                       { label: isAr ? "أنظمة إنترنت الأشياء أو المراقبة" : isJa ? "IoT・遠隔監視システム" : isDe ? "IoT- oder Überwachungssysteme" : isEs ? "Sistema de IoT o monitorización" : "IoT or monitoring system", value: "IoT or monitoring system" },
                       { label: isAr ? "الأنظمة البرمجية" : isJa ? "ソフトウェアシステム" : isDe ? "Softwaresysteme" : isEs ? "Sistema de software" : "Software system", value: "Software system" },
                       { label: isAr ? "نظام متكامل للمنشأة أو الإنتاج" : isJa ? "複合施設・生産ライン" : isDe ? "Integrierte Anlagen oder Produktionssysteme" : isEs ? "Instalación integrada o sistema de producción" : "Integrated facility or production system", value: "Integrated facility or production system" },
                       { label: isAr ? "أصول متعددة" : isJa ? "複数の設備資産" : isDe ? "Mehrere Anlagen" : isEs ? "Múltiples activos" : "Multiple assets", value: "Multiple assets" }
                     ].map(opt => {
                       const isSelected = data.amc_whatRequiresSupport.includes(opt.value);
                       return (
                         <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${isSelected ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                           <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleArrayItem("amc_whatRequiresSupport", opt.value)} /> {opt.label}
                         </label>
                       );
                     })}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.amc.whoDeveloped : "Who originally developed or supplied the system?"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "سانوتا" : isJa ? "Sanota（サノタ）" : isDe ? "Sanota" : isEs ? "Sanota" : "Sanota", value: "Sanota" },
                       { label: isAr ? "مورد آخر" : isJa ? "他社メーカー" : isDe ? "Ein anderer Lieferant" : isEs ? "Otro proveedor" : "Another supplier", value: "Another supplier" },
                       { label: isAr ? "موردون متعددون" : isJa ? "複数メーカー" : isDe ? "Mehrere Lieferanten" : isEs ? "Varios proveedores" : "Multiple suppliers", value: "Multiple suppliers" },
                       { label: isAr ? "غير معروف" : isJa ? "不明" : isDe ? "Unbekannt" : isEs ? "Desconocido" : "Not known", value: "Not known" }
                     ].map(opt => (
                       <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.amc_whoDeveloped === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.amc_whoDeveloped === opt.value} onChange={() => updateData({ amc_whoDeveloped: opt.value })} /> {opt.label}
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[#17135B] dark:text-white font-semibold block mb-2">
                     {ch ? ch.steps.step2.conditionals.amc.preferredArrangement : "Preferred support arrangement"}
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {[
                       { label: isAr ? "الصيانة الوقائية الدورية" : isJa ? "予防保全・定期メンテナンス" : isDe ? "Vorbeugende Wartung" : isEs ? "Mantenimiento preventivo" : "Preventive maintenance", value: "Preventive maintenance" },
                       { label: isAr ? "دعم الأعطال الطارئة" : isJa ? "緊急トラブル対応・復旧支援" : isDe ? "Unterstützung bei Störungen" : isEs ? "Asistencia en caso de averías" : "Breakdown support", value: "Breakdown support" },
                       { label: isAr ? "عمليات فحص دورية" : isJa ? "定期法定点検・状態診断" : isDe ? "Regelmäßige Inspektionen" : isEs ? "Inspecciones periódicas" : "Periodic inspections", value: "Periodic inspections" },
                       { label: isAr ? "مراقبة الأداء وتحليله" : isJa ? "稼働性能モニタリング" : isDe ? "Leistungsüberwachung" : isEs ? "Seguimiento del rendimiento" : "Performance monitoring", value: "Performance monitoring" },
                       { label: isAr ? "دعم قطع الغيار والتقادم" : isJa ? "予備品調達・陳腐化対策支援" : isDe ? "Ersatzteil- und Obsoleszenzunterstützung" : isEs ? "Asistencia en repuestos y obsolescencia" : "Spare-parts and obsolescence support", value: "Spare-parts and obsolescence support" },
                       { label: isAr ? "عقد صيانة شامل (AMC)" : isJa ? "包括的年間保守契約（AMC）" : isDe ? "Umfassender Wartungsvertrag (AMC)" : isEs ? "Contrato de mantenimiento integral (AMC)" : "Complete AMC", value: "Complete AMC" },
                       { label: isAr ? "يلزم إجراء تقييم فني قبل اتخاذ القرار" : isJa ? "契約決定前の現場診断を希望" : isDe ? "Bewertung vor Entscheidung erforderlich" : isEs ? "Se requiere evaluación antes de decidir" : "Assessment required before deciding", value: "Assessment required before deciding" }
                     ].map(opt => (
                       <label key={opt.value} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm ${data.amc_preferredArrangement === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131C2E]'}`}>
                         <input type="radio" className="hidden" checked={data.amc_preferredArrangement === opt.value} onChange={() => updateData({ amc_preferredArrangement: opt.value })} /> {opt.label}
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="bg-amber-50 dark:bg-[#E8B84B]/10 border border-amber-200 dark:border-[#E8B84B]/30 rounded-lg p-4 mt-4">
                   <p className="text-[#C59B27] dark:text-[#E8B84B] text-sm">
                     <strong className="font-bold">{isAr ? "ملاحظة هامة:" : isJa ? "重要事項：" : isDe ? "Wichtiger Hinweis:" : isEs ? "Nota importante:" : "Important note:"}</strong> {ch ? ch.steps.step2.conditionals.amc.note : "AMC support for third-party systems is offered following an initial technical assessment."}
                   </p>
                 </div>
               </div>
             )}

           </div>
        )}

      </div>
    </div>
  );
}

// ---------------------------------------------------------
// STEP 3
// ---------------------------------------------------------

export function Step3({ data, updateData }: StepProps) {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ch = isAr ? challengeAR : isJa ? challengeJA : isDe ? challengeDE : isEs ? challengeES : null;
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#17135B] dark:text-white mb-2">
        {ch ? ch.steps.step3.title : "Supporting Information"}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        {ch ? ch.steps.step3.subtitle : "Help Us Understand the Requirement"}
      </p>

      <div className="space-y-8">
        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[#C59B27] dark:hover:border-[#E8B84B] rounded-2xl p-10 text-center transition-colors bg-slate-50/80 dark:bg-[#0B1220]/50 cursor-pointer shadow-sm dark:shadow-none" onClick={() => fileInputRef.current?.click()}>
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            multiple 
            accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx,.mp4"
            onChange={(e) => {
              if (e.target.files) {
                updateData({ supportingFiles: Array.from(e.target.files) });
              }
            }}
          />
          <UploadCloud className="w-12 h-12 text-[#2E5EAA] mx-auto mb-4" />
          <button type="button" className="px-6 py-2 bg-white dark:bg-[#131C2E] border border-slate-300 dark:border-slate-700 hover:border-[#C59B27] dark:hover:border-[#E8B84B] text-[#17135B] dark:text-white rounded-lg font-semibold mb-4 transition-colors shadow-sm">
            {data.supportingFiles && data.supportingFiles.length > 0 
              ? (isAr ? `تم تحديد ${data.supportingFiles.length} ملف (ملفات)` : isJa ? `${data.supportingFiles.length} 件のファイルが選択されました` : isDe ? `${data.supportingFiles.length} Datei(en) ausgewählt` : isEs ? `${data.supportingFiles.length} archivo(s) seleccionado(s)` : `${data.supportingFiles.length} File(s) Selected`) 
              : (ch ? ch.steps.step3.uploadButton : 'Add Files')}
          </button>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
            {ch ? ch.steps.step3.uploadPrompt : "You may upload photographs, videos, drawings, equipment information, reports or other documents that will help our team understand the requirement."}
          </p>
          <p className="text-slate-500 text-xs">
            {ch ? ch.steps.step3.fileTypes : "Accepted file types: JPG, PNG, PDF, DOCX, XLSX and MP4."}
          </p>
          {data.supportingFiles && data.supportingFiles.length > 0 && (
            <div className="mt-4 text-left inline-block max-w-sm">
              <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                {data.supportingFiles.map((f, i) => (
                  <li key={i} className="truncate">{f.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300">
          <p>
            {isAr ? (
              <>يرجى <span className="font-semibold text-red-600 dark:text-red-400">عدم تحميل</span> كلمات المرور، أو بيانات الاعتماد، أو المستندات السرية التي لا تملك صلاحية مشاركتها.</>
            ) : isJa ? (
              <>パスワード、アクセス認証情報、または共有を許可されていない文書は<span className="font-semibold text-red-600 dark:text-red-400">アップロードしないでください</span>。</>
            ) : isDe ? (
              <>Bitte laden Sie <span className="font-semibold text-red-600 dark:text-red-400">keine</span> Passwörter, Zugangsdaten oder Dokumente hoch, zu deren Weitergabe Sie nicht berechtigt sind.</>
            ) : isEs ? (
              <>Por favor, <span className="font-semibold text-red-600 dark:text-red-400">no subas</span> contraseñas, credenciales de acceso ni documentos que no estés autorizado a compartir.</>
            ) : (
              <>Please <span className="font-semibold text-red-600 dark:text-red-400">do not upload</span> passwords, access credentials or documents that you are not authorized to share.</>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {ch ? ch.steps.step3.optionalFields.makeModel : "Equipment make, model or reference number (Optional)"}
            </label>
            <input 
              type="text" 
              value={data.eq_makeModel}
              onChange={(e) => updateData({ eq_makeModel: e.target.value })}
              className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {ch ? ch.steps.step3.optionalFields.supplierInfo : "Existing supplier or system information (Optional)"}
            </label>
            <input 
              type="text" 
              value={data.eq_supplierInfo}
              onChange={(e) => updateData({ eq_supplierInfo: e.target.value })}
              className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {ch ? ch.steps.step3.optionalFields.quantity : "Estimated number of machines, assets or locations (Optional)"}
            </label>
            <input 
              type="text" 
              value={data.eq_estimatedQuantity}
              onChange={(e) => updateData({ eq_estimatedQuantity: e.target.value })}
              className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// STEP 4
// ---------------------------------------------------------

export function Step4({ data, updateData, showErrors }: StepProps) {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ch = isAr ? challengeAR : isJa ? challengeJA : isDe ? challengeDE : isEs ? challengeES : null;

  const methods = [
    { label: isAr ? "مكالمة هاتفية" : isJa ? "電話" : isDe ? "Telefonanruf" : isEs ? "Llamada telefónica" : "Telephone call", value: "Telephone call" },
    { label: isAr ? "البريد الإلكتروني" : isJa ? "Eメール" : isDe ? "E-Mail" : isEs ? "Correo electrónico" : "Email", value: "Email" },
    { label: isAr ? "اجتماع عبر الإنترنت" : isJa ? "オンライン会議" : isDe ? "Online-Meeting" : isEs ? "Reunión virtual" : "Online meeting", value: "Online meeting" },
    { label: isAr ? "مناقشة زيارة الموقع" : isJa ? "現地訪問・対面相談" : isDe ? "Besprechung vor Ort" : isEs ? "Discusión sobre visita a planta" : "Site visit discussion", value: "Site visit discussion" },
    { label: isAr ? "لا تفضيل محدد" : isJa ? "特に希望なし（いずれでも可）" : isDe ? "Keine Präferenz" : isEs ? "Sin preferencia" : "No preference", value: "No preference" }
  ];

  const times = [
    { label: isAr ? "صباحاً" : isJa ? "午前中" : isDe ? "Morgen" : isEs ? "Mañana" : "Morning", value: "Morning" },
    { label: isAr ? "بعد الظهر" : isJa ? "午後" : isDe ? "Nachmittag" : isEs ? "Tarde" : "Afternoon", value: "Afternoon" },
    { label: isAr ? "مساءً" : isJa ? "夕方・夜間" : isDe ? "Abend" : isEs ? "Noche" : "Evening", value: "Evening" },
    { label: isAr ? "في أي وقت خلال ساعات العمل" : isJa ? "営業時間中いつでも可" : isDe ? "Jederzeit während der Geschäftszeiten" : isEs ? "Cualquier momento durante horario comercial" : "Any time during business hours", value: "Any time during business hours" }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#17135B] dark:text-white mb-2">
        {ch ? ch.steps.step4.title : "Your Contact Information"}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        {ch ? ch.steps.step4.subtitle : "How Can We Contact You?"}
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {ch ? ch.steps.step4.fields.fullName : "Full name"} *
            </label>
            <input type="text" value={data.name} onChange={(e) => updateData({ name: e.target.value })} className={`w-full bg-white dark:bg-[#0B1220] rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors shadow-sm ${showErrors && data.name.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-300 dark:border-slate-700 focus:border-[#C59B27] dark:focus:border-[#E8B84B]'}`} />
            {showErrors && data.name.trim() === "" && <p className="text-red-500 text-sm font-medium">{ch ? ch.systemMessages.requiredField : "Please complete this field before continuing."}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {ch ? ch.steps.step4.fields.company : "Company or organization"} *
            </label>
            <input type="text" value={data.company} onChange={(e) => updateData({ company: e.target.value })} className={`w-full bg-white dark:bg-[#0B1220] rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors shadow-sm ${showErrors && data.company.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-300 dark:border-slate-700 focus:border-[#C59B27] dark:focus:border-[#E8B84B]'}`} />
            {showErrors && data.company.trim() === "" && <p className="text-red-500 text-sm font-medium">{ch ? ch.systemMessages.requiredField : "Please complete this field before continuing."}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {ch ? ch.steps.step4.fields.jobTitle : "Job title"}
            </label>
            <input type="text" value={data.jobTitle} onChange={(e) => updateData({ jobTitle: e.target.value })} className="w-full bg-white dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {ch ? ch.steps.step4.fields.phone : "Telephone number"} *
            </label>
            <input type="tel" value={data.phone} onChange={(e) => updateData({ phone: e.target.value })} className={`w-full bg-white dark:bg-[#0B1220] rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors shadow-sm ${showErrors && data.phone.trim() === '' && data.email.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-300 dark:border-slate-700 focus:border-[#C59B27] dark:focus:border-[#E8B84B]'}`} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {ch ? ch.steps.step4.fields.email : "Email address"} *
            </label>
            <input type="email" value={data.email} onChange={(e) => updateData({ email: e.target.value })} className={`w-full bg-white dark:bg-[#0B1220] rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors shadow-sm ${showErrors && data.phone.trim() === '' && data.email.trim() === '' ? 'border-2 border-red-500/50' : 'border border-slate-300 dark:border-slate-700 focus:border-[#C59B27] dark:focus:border-[#E8B84B]'}`} />
          </div>
          {showErrors && data.email.trim() === "" && data.phone.trim() === "" && (
             <p className="text-red-500 text-sm font-medium sm:col-span-2 mt-[-10px]">
               {ch ? ch.systemMessages.contactMethodMissing : "Please provide at least one valid contact method."}
             </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="space-y-3">
            <label className="block text-[#17135B] dark:text-white font-semibold text-sm">
              {ch ? ch.steps.step4.fields.preferredMethod : "Preferred contact method"}
            </label>
            <div className="flex flex-col gap-2">
              {methods.map(opt => (
                <label key={opt.value} className={`cursor-pointer px-4 py-2.5 rounded-lg border text-sm flex items-center transition-all ${data.preferredContactMethod === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'bg-slate-50 dark:bg-[#0B1220] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-500'}`}>
                  <input type="radio" className="mr-3" checked={data.preferredContactMethod === opt.value} onChange={() => updateData({ preferredContactMethod: opt.value })} /> {opt.label}
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-[#17135B] dark:text-white font-semibold text-sm">
              {ch ? ch.steps.step4.fields.preferredTime : "Preferred contact time"}
            </label>
            <div className="flex flex-col gap-2">
              {times.map(opt => (
                <label key={opt.value} className={`cursor-pointer px-4 py-2.5 rounded-lg border text-sm flex items-center transition-all ${data.preferredContactTime === opt.value ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border-[#C59B27] dark:border-[#E8B84B] text-[#17135B] dark:text-white font-semibold' : 'bg-slate-50 dark:bg-[#0B1220] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-500'}`}>
                  <input type="radio" className="mr-3" checked={data.preferredContactTime === opt.value} onChange={() => updateData({ preferredContactTime: opt.value })} /> {opt.label}
                </label>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ---------------------------------------------------------
// STEP 5
// ---------------------------------------------------------

export function Step5({ data, updateData, showErrors }: StepProps) {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ch = isAr ? challengeAR : isJa ? challengeJA : isDe ? challengeDE : isEs ? challengeES : null;

  const notProvided = isAr ? "لم يتم التحديد" : isJa ? "未指定" : isDe ? "Nicht angegeben" : isEs ? "No proporcionado" : "Not provided";

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#17135B] dark:text-white mb-2">
        {ch ? ch.steps.step5.title : "Review and Submit"}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        {ch ? ch.steps.step5.subtitle : "Please review the information before submitting it to Sanota."}
      </p>

      <div className="bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-8 text-sm text-slate-700 dark:text-slate-300 space-y-4 shadow-sm">
        <p><strong className="text-[#17135B] dark:text-white">{isAr ? "المتطلب:" : isJa ? "ご要望・要件：" : isDe ? "Anforderung:" : isEs ? "Requisito:" : "Requirement:"}</strong> {data.currentSituation || notProvided}</p>
        <p><strong className="text-[#17135B] dark:text-white">{isAr ? "النتيجة المرجوة:" : isJa ? "期待される成果：" : isDe ? "Gewünschtes Ergebnis:" : isEs ? "Resultado deseado:" : "Desired Outcome:"}</strong> {data.desiredOutcome || notProvided}</p>
        <p><strong className="text-[#17135B] dark:text-white">{isAr ? "القطاع / الصناعة:" : isJa ? "業界・産業分野：" : isDe ? "Branche / Sektor:" : isEs ? "Sector / Industria:" : "Industry:"}</strong> {data.industry || notProvided}</p>
        <p><strong className="text-[#17135B] dark:text-white">{isAr ? "معلومات الاتصال:" : isJa ? "連絡先情報：" : isDe ? "Kontakt:" : isEs ? "Contacto:" : "Contact:"}</strong> {data.name} ({data.company}) - {data.email || data.phone}</p>
      </div>

      <div className="space-y-4 mb-6">
        <label className="flex items-start cursor-pointer group">
          <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center mr-3 shrink-0 transition-colors ${data.consentAccurate ? 'bg-[#C59B27] dark:bg-[#E8B84B] border-[#C59B27] dark:border-[#E8B84B]' : 'bg-white dark:bg-[#131C2E] border-slate-300 dark:border-slate-600 group-hover:border-[#C59B27] dark:group-hover:border-[#E8B84B]'}`}>
            <input type="checkbox" className="hidden" checked={data.consentAccurate} onChange={(e) => updateData({ consentAccurate: e.target.checked })} />
            {data.consentAccurate && <svg className="w-3.5 h-3.5 text-white dark:text-[#0B1220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          </div>
          <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {ch ? ch.steps.step5.consentAccuracy : "I confirm that the information submitted is accurate to the best of my knowledge and that I am authorized to share the attached material. *"}
          </span>
        </label>

        <label className="flex items-start cursor-pointer group">
          <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center mr-3 shrink-0 transition-colors ${data.consentNoObligation ? 'bg-[#C59B27] dark:bg-[#E8B84B] border-[#C59B27] dark:border-[#E8B84B]' : 'bg-white dark:bg-[#131C2E] border-slate-300 dark:border-slate-600 group-hover:border-[#C59B27] dark:group-hover:border-[#E8B84B]'}`}>
            <input type="checkbox" className="hidden" checked={data.consentNoObligation} onChange={(e) => updateData({ consentNoObligation: e.target.checked })} />
            {data.consentNoObligation && <svg className="w-3.5 h-3.5 text-white dark:text-[#0B1220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          </div>
          <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {ch ? ch.steps.step5.consentNoObligation : "I understand that submitting this enquiry does not create a contractual obligation. Sanota may request further information or conduct an assessment before recommending a solution. *"}
          </span>
        </label>
      </div>
      
      {showErrors && (!data.consentAccurate || !data.consentNoObligation) && (
        <p className="text-red-500 text-sm font-medium mb-6">
          {ch ? ch.systemMessages.requiredField : "Please complete this field before continuing."}
        </p>
      )}

      <div className="flex items-center text-sm">
        <Link href="/privacy" className="text-[#2E5EAA] hover:text-[#17135B] dark:hover:text-white transition-colors underline underline-offset-4">
          {ch ? ch.steps.step5.privacyLink : "View Privacy Notice"}
        </Link>
      </div>
    </div>
  );
}
