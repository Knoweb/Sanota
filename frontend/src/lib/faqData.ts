export interface FaqItem {
  q: string;
  a: string;
  link: string;
  linkText: string;
}

export interface FaqSectionData {
  badge: string;
  heading: string;
  description: string;
  items: FaqItem[];
}

export const servicesFaqData: Record<string, FaqSectionData> = {
  en: {
    badge: "Technical Questions & Answers",
    heading: "Industrial Engineering & Retrofitting FAQ",
    description: "Direct answers to common questions asked by plant managers, maintenance heads, and operational directors before commissioning machinery retrofits and automation projects.",
    items: [
      {
        q: "Can Sanota replace obsolete PLC panels without replacing mechanical machinery?",
        a: "Yes. Sanota specializes in obsolete PLC panel replacement service for factories. We upgrade legacy, discontinued, or failing PLCs (such as older Siemens S5/S7-300, Omron, Mitsubishi, and Allen-Bradley units) with modern controllers and touch HMIs while preserving your existing mechanical machinery, saving up to 70% compared to purchasing new machines.",
        link: "/tell-us-your-challenge",
        linkText: "Request an obsolete PLC assessment"
      },
      {
        q: "What does a custom industrial machinery retrofitting contractor do?",
        a: "As an industrial machinery retrofitting contractor, Sanota modernizes existing factory production lines by replacing obsolete electrical controls, rewiring power panels, integrating modern variable frequency drives (VFDs), adding automated safety interlocks, and installing IIoT monitoring sensors to extend operational life and boost productivity.",
        link: "/tell-us-your-challenge",
        linkText: "Discuss machinery retrofitting"
      },
      {
        q: "Can Sanota assemble custom PLC SCADA control panels for international standards?",
        a: "Yes. Sanota designs, fabricates, and rigorously tests custom PLC and SCADA control panels built to international electrical standards, featuring intuitive HMI touchscreen interfaces, industrial fieldbus protocols (Modbus, Profinet, EtherNet/IP), and cloud IoT integration for remote monitoring.",
        link: "/contact",
        linkText: "Inquire about control panel assembly"
      },
      {
        q: "How does predictive maintenance IIoT sensor integration prevent factory downtime?",
        a: "By retrofitting industrial vibration, temperature, current, and pressure sensors directly onto existing rotating assets and production lines, Sanota's IIoT platforms detect mechanical degradation and electrical anomalies before catastrophic failure occurs, reducing unplanned downtime by up to 45%.",
        link: "/contact",
        linkText: "Schedule an IIoT site review"
      }
    ]
  },
  de: {
    badge: "Technische Fragen & Antworten",
    heading: "Industrie-Engineering & Retrofit FAQ",
    description: "Direkte Antworten auf häufige Fragen von Betriebsleitern, Instandhaltungsleitern und technischen Direktoren vor der Beauftragung von Maschinen-Retrofits und Automatisierungsprojekten.",
    items: [
      {
        q: "Kann Sanota veraltete SPS-Steuerungen austauschen, ohne die mechanische Maschine zu ersetzen?",
        a: "Ja. Sanota ist auf den Austausch abgekündigter SPS-Steuerungen für Industrieanlagen spezialisiert. Wir modernisieren ältere Steuerungen (wie Siemens S5/S7-300, Omron, Mitsubishi und Allen-Bradley) durch moderne Steuerungen und Touch-HMIs, während die bewährte Mechanik erhalten bleibt. Dies spart bis zu 70 % gegenüber einer Neuanschaffung.",
        link: "/ihre-herausforderung",
        linkText: "SPS-Modernisierungsprüfung anfragen"
      },
      {
        q: "Welche Leistungen erbringt ein Auftragnehmer für Maschinen-Retrofit?",
        a: "Als Retrofit-Partner modernisiert Sanota bestehende Fertigungslinien: Wir erneuern elektrische Steuerungen, verdrahten Schaltschränke neu, integrieren moderne Frequenzumrichter (VFDs), rüsten Sicherheitsverriegelungen nach und installieren IIoT-Sensoren zur Verlängerung der Maschinenlebensdauer.",
        link: "/ihre-herausforderung",
        linkText: "Maschinen-Retrofit besprechen"
      },
      {
        q: "Baut Sanota maßgeschneiderte SPS- und SCADA-Schaltschränke nach internationalen Normen?",
        a: "Ja. Sanota plant, fertigt und prüft individuelle SPS- und SCADA-Schaltschränke nach europäischen und internationalen Normen (DIN EN 61439, CE) mit intuitiven HMI-Oberflächen, Feldbussen (Modbus, Profinet, EtherNet/IP) und sicherer Cloud-Anbindung.",
        link: "/kontakt",
        linkText: "Schaltschrankbau anfragen"
      },
      {
        q: "Wie verhindert die Integration von IIoT-Sensoren zur vorausschauenden Wartung Stillstände?",
        a: "Durch die Nachrüstung industrieller Schwingungs-, Temperatur- und Stromsensoren an Motoren und Antrieben erkennt die IIoT-Plattform von Sanota mechanischen Verschleiß frühzeitig. So werden ungeplante Ausfallzeiten um bis zu 45 % reduziert.",
        link: "/kontakt",
        linkText: "IIoT-Zustandsanalyse anfordern"
      }
    ]
  },
  es: {
    badge: "Preguntas y Respuestas Técnicas",
    heading: "Preguntas Frecuentes sobre Ingeniería Industrial y Modernización",
    description: "Respuestas directas a dudas habituales de directores de planta, jefes de mantenimiento e ingenieros antes de iniciar proyectos de automatización y modernización.",
    items: [
      {
        q: "¿Puede Sanota sustituir paneles PLC obsoletos sin cambiar la maquinaria mecánica?",
        a: "Sí. Sanota está especializada en la sustitución de paneles PLC obsoletos. Actualizamos controladores antiguos o descontinuados (como Siemens S5/S7-300, Omron, Mitsubishi y Allen-Bradley) con PLCs modernos y pantallas táctiles HMI, conservando su maquinaria mecánica y ahorrando hasta un 70% frente a la compra de una máquina nueva.",
        link: "/cuentanos-tu-desafio",
        linkText: "Solicitar evaluación de PLC obsoleto"
      },
      {
        q: "¿Qué hace un contratista especializado en reacondicionamiento (retrofit) de maquinaria?",
        a: "Sanota moderniza líneas de producción existentes renovando el cableado eléctrico, integrando variadores de frecuencia (VFD), agregando enclavamientos de seguridad y sensores de monitorización IIoT para prolongar la vida útil del equipo y maximizar la productividad.",
        link: "/cuentanos-tu-desafio",
        linkText: "Consultar sobre modernización de maquinaria"
      },
      {
        q: "¿Ensambla Sanota cuadros de control PLC y SCADA según normativas internacionales?",
        a: "Sí. Diseñamos, ensamblamos y certificamos cuadros eléctricos y paneles SCADA con interfaces HMI intuitivas, protocolos de comunicación industrial (Modbus, Profinet, EtherNet/IP) y conectividad en la nube para monitorización remota.",
        link: "/contacto",
        linkText: "Consultar sobre montaje de paneles"
      },
      {
        q: "¿Cómo previene paradas de fábrica la integración de sensores de mantenimiento predictivo IIoT?",
        a: "Instalando sensores industriales de vibración, temperatura y corriente en motores y bombas, nuestra plataforma IIoT detecta anomalías mecánicas antes de que ocurra una avería catastrófica, reduciendo las paradas no programadas hasta en un 45%.",
        link: "/contacto",
        linkText: "Programar revisión técnica IIoT"
      }
    ]
  },
  ja: {
    badge: "技術的な質問と回答",
    heading: "産業エンジニアリング＆レトロフィット FAQ",
    description: "機械の改修や自動化プロジェクトを発注する前に、工場長、保守責任者、技術責任者からよく寄せられる質問への回答です。",
    items: [
      {
        q: "機械本体を交換せずに、旧型PLCパネルのみを更新できますか？",
        a: "はい。サノタは工場の老朽化・生産終了したPLC更新を専門としています。機械本体を活用したまま、旧型シーケンサ（Siemens S5/S7-300、オムロン、三菱電機など）を最新コントローラとタッチパネルHMIに置き換え、新機導入に比べ最大70%のコストを削減します。",
        link: "/課題について相談する",
        linkText: "PLC更新の技術評価を依頼する"
      },
      {
        q: "カスタム機械レトロフィット（改修）ではどのような作業を行いますか？",
        a: "老朽化した制御盤の再配線、最新インバータ（VFD）の導入、安全インターロックの追加、稼働監視用IIoTセンサーの取り付けなど、既存生産ラインの延命と生産性向上を実現します。",
        link: "/課題について相談する",
        linkText: "機械レトロフィットについて相談する"
      },
      {
        q: "国際規格に準拠したPLC/SCADA制御盤の製作は可能ですか？",
        a: "はい。国際電気規格に準拠したカスタムPLC/SCADA盤の設計・製作・試験を行っており、直感的なタッチパネル操作、各種産業ネットワーク（Modbus、Profinet、EtherNet/IP）、遠隔監視用クラウド連携に対応しています。",
        link: "/お問い合わせ",
        linkText: "制御盤製作について問い合わせる"
      },
      {
        q: "予知保全IIoTセンサーの導入でどのように工場の停止を防げますか？",
        a: "振動、温度、電流センサーを重要機器に取り付けることで、故障の兆候や異常振動を早期に検知し、突発的なライン停止を最大45%削減します。",
        link: "/お問い合わせ",
        linkText: "IIoT現地診断を申し込む"
      }
    ]
  },
  ar: {
    badge: "أسئلة وأجوبة فنية",
    heading: "الأسئلة الشائعة حول الهندسة الصناعية وتحديث الآلات",
    description: "إجابات مباشرة على الأسئلة الشائعة التي يطرحها مديرو المصانع ورؤساء الصيانة قبل تنفيذ مشاريع تحديث الماكينات والأتمتة الصناعية.",
    items: [
      {
        q: "هل يمكن لسانوتا استبدال لوحات PLC القديمة دون استبدال الآلات الميكانيكية؟",
        a: "نعم. تتخصص سانوتا في استبدال وتحديث لوحات التحكم PLC القديمة والموقوفة من الإنتاج (مثل Siemens S5/S7-300 و Omron و Mitsubishi) مع الحفاظ الكامل على الهيكل الميكانيكي للآلة، مما يوفر ما يصل إلى 70% مقارنة بشراء ماكينات جديدة.",
        link: "/أخبرنا-عن-تحديك",
        linkText: "طلب تقييم لتحديث لوحة PLC"
      },
      {
        q: "ماذا يقدم مقاول التعديل التحديثي المخصص للآلات الصناعية؟",
        a: "تقوم سانوتا بتحديث خطوط الإنتاج القائمة عن طريق تجديد التوصيلات الكهربائية، وإدماج مغيرات السرعة (VFD)، وإضافة أقفال السلامة المؤتمتة، وتركيب مستشعرات إنترنت الأشياء الصناعي لزيادة الإنتاجية وإطالة العمر التشغيلي.",
        link: "/أخبرنا-عن-تحديك",
        linkText: "مناقشة تحديث خطوط الإنتاج"
      },
      {
        q: "هل تقوم سانوتا بتجميع لوحات التحكم PLC و SCADA وفق المعايير الدولية؟",
        a: "نعم. نقوم بتصميم وتصنيع واختبار لوحات التحكم PLC و SCADA وفق أعلى المعايير الكهربائية العالمية مع شاشات لمس HMI وبروتوكولات اتصالات صناعية مثل Modbus و Profinet وربط سحابي للمراقبة عن بُعد.",
        link: "/اتصل-بنا",
        linkText: "الاستفسار عن تجميع لوحات التحكم"
      },
      {
        q: "كيف تمنع مستشعرات الصيانة التنبؤية (IIoT) توقف المصانع غير المخطط له؟",
        a: "من خلال تركيب مستشعرات الاهتزاز والحرارة والتيار على المحركات والمضخات، ترصد منصات سانوتا أي تآكل ميكانيكي مبكر قبل حدوث العطل المفاجئ، مما يخفض فترات التوقف غير المخطط لها بنسبة تصل إلى 45%.",
        link: "/اتصل-بنا",
        linkText: "طلب فحص تقني لأنظمة IIoT"
      }
    ]
  }
};

export const industriesFaqData: Record<string, FaqSectionData> = {
  en: {
    badge: "Technical FAQ & Implementation Details",
    heading: "Tea Automation & Smart Agriculture FAQ",
    description: "Practical answers to questions regarding tea withering controls, dryer retrofits, commercial fertigation, and greenhouse climate automation.",
    items: [
      {
        q: "How does an automated tea trough withering humidity control system improve leaf quality?",
        a: "Sanota’s automated tea trough withering systems constantly measure wet-bulb and dry-bulb temperatures, ambient humidity, and leaf bed moisture. By modulating fan speeds, air damper actuators, and burner heating loops in real-time, the system achieves uniform physical and chemical withering across the entire trough, eliminating wet pockets and increasing black tea outturn quality by 12% to 18%.",
        link: "/tell-us-your-challenge",
        linkText: "Inquire about tea withering automation"
      },
      {
        q: "Can existing fluidized bed tea dryers be retrofitted with smart temperature controllers?",
        a: "Yes. We engineer complete temperature controller retrofits for existing fluidized bed tea dryers (FBDs) and conventional tea drying machinery. Our retrofits replace sluggish analog dials with PID loop controllers, modulating steam/radiator control valves, exhaust airflow dampers, and continuous moisture sensors to stabilize drying temperatures, prevent tea case-hardening, and reduce firewood or fuel consumption by up to 22%.",
        link: "/tell-us-your-challenge",
        linkText: "Request a tea dryer retrofit audit"
      },
      {
        q: "What components are included in a commercial smart fertigation dosing system integration?",
        a: "Our smart fertigation dosing skids integrate multi-channel venturi dosing injectors, industrial grade pH and EC probes with automatic temperature compensation, booster pumps, pulse flow meters, and PLC automation. The system dynamically mixes concentrated stock nutrients into irrigation water according to tailored recipe setpoints, ensuring precise nutrient delivery for hydroponics and substrate greenhouses.",
        link: "/contact",
        linkText: "Get smart fertigation system pricing"
      },
      {
        q: "What is the typical ROI and cost justification for an automated greenhouse climate control system?",
        a: "Commercial growers in tropical and arid climates typically achieve full capital payback within 9 to 14 months. Savings stem from automated top and side ridge ventilation, shade curtain deployment, misting foggers, and continuous vapor pressure deficit (VPD) regulation—which prevents heat stress, optimizes photosynthesis, lowers water loss, and produces 25% higher marketable crop yields.",
        link: "/contact",
        linkText: "Speak with an AgTech specialist"
      }
    ]
  },
  de: {
    badge: "Technische FAQ & Implementierungsdetails",
    heading: "Tee-Automatisierung & Smart Agriculture FAQ",
    description: "Praxisorientierte Antworten zu Feuchtigkeitssteuerungen für Teewelktröge, Trockner-Retrofits, gewerblicher Fertigation und Gewächshausklimasteuerung.",
    items: [
      {
        q: "Wie verbessert eine automatische Feuchtesteuerung für Teewelktröge die Blattqualität?",
        a: "Sanotas automatische Welksteuerungen messen Feucht- und Trockenkugeltemperatur, Luftfeuchte und Blattfeuchtigkeit kontinuierlich. Durch die automatische Regelung von Lüfterdrehzahlen und Luftklappen wird ein gleichmäßiges Welken im gesamten Trog sichergestellt, was Feuchtnester verhindert und die Teequalität um 12 % bis 18 % steigert.",
        link: "/ihre-herausforderung",
        linkText: "Teewelke-Automatisierung anfragen"
      },
      {
        q: "Können bestehende Wirbelschichttrockner (FBD) nachgerüstet werden?",
        a: "Ja. Wir rüsten bestehende Wirbelschichttrockner und Konvektionstrockner mit modernen PID-Temperaturreglern, modulierenden Ventilen und Abluftklappen aus. Das stabilisiert die Trocknungstemperaturen und senkt den Brennstoff- bzw. Energieverbrauch um bis zu 22 %.",
        link: "/ihre-herausforderung",
        linkText: "Trockner-Retrofit-Audit anfordern"
      },
      {
        q: "Welche Komponenten umfasst eine gewerbliche Fertigations-Dosieranlage?",
        a: "Unsere Fertigationsstationen enthalten Mehrkanal-Injektoren, industrietaugliche pH- und EC-Sonden mit automatischer Temperaturkompensation, Druckerhöhungspumpen, Durchflussmesser und SPS-Steuerung zur exakten Nährstoffmischung für Hydrokultur und Substratanbau.",
        link: "/kontakt",
        linkText: "Preise für Fertigationssysteme anfordern"
      },
      {
        q: "Wie hoch ist der typische ROI einer automatisierten Gewächshaus-Klimasteuerung?",
        a: "Gewerbliche Anbauer amortisieren die Investition typischerweise innerhalb von 9 bis 14 Monaten durch automatisierte Lüftungs- und Schattierungssteuerung, optimale VPD-Regulierung und bis zu 25 % höhere vermarktbare Ernteerträge.",
        link: "/kontakt",
        linkText: "Mit einem AgTech-Spezialisten sprechen"
      }
    ]
  },
  es: {
    badge: "Preguntas Frecuentes Técnicas",
    heading: "Automatización del Té y Agricultura Inteligente FAQ",
    description: "Respuestas prácticas sobre control de marchitamiento de té, modernización de secadores, fertirrigación comercial y automatización de invernaderos.",
    items: [
      {
        q: "¿Cómo mejora la calidad de la hoja un sistema automatizado de control de marchitamiento del té?",
        a: "El sistema de Sanota mide en tiempo real la temperatura de bulbo húmedo y seco, humedad ambiente y humedad de la hoja. Al modular la velocidad de los ventiladores y compuertas de aire, logra un marchitamiento uniforme eliminando bolsas de humedad y aumentando la calidad final del té negro entre un 12% y un 18%.",
        link: "/cuentanos-tu-desafio",
        linkText: "Consultar sobre automatización de marchitamiento"
      },
      {
        q: "¿Se pueden modernizar los secadores de té de lecho fluidizado existentes con controladores inteligentes?",
        a: "Sí. Diseñamos modernizaciones completas para secadores de té existentes, sustituyendo mandos analógicos por controladores PID, válvulas modulantes y compuertas motorizadas, estabilizando la temperatura y reduciendo el consumo de combustible hasta en un 22%.",
        link: "/cuentanos-tu-desafio",
        linkText: "Solicitar auditoría de secadores de té"
      },
      {
        q: "¿Qué componentes incluye un sistema comercial de dosificación y fertirrigación inteligente?",
        a: "Nuestros módulos de fertirrigación integran inyectores multicanal, sondas industriales de pH y conductividad eléctrica (EC) con compensación térmica, bombas de presión, caudalímetros y control PLC para dosificación precisa en hidroponía e invernaderos.",
        link: "/contacto",
        linkText: "Solicitar cotización de fertirrigación"
      },
      {
        q: "¿Cuál es el retorno de inversión (ROI) de un sistema automatizado de control de clima en invernaderos?",
        a: "Los productores comerciales amortizan la inversión en 9 a 14 meses gracias al control automatizado de ventilación cenital, mallas de sombreo, nebulización y regulación del déficit de presión de vapor (VPD), logrando hasta un 25% más de rendimiento comercializable.",
        link: "/contacto",
        linkText: "Hablar con un especialista en AgTech"
      }
    ]
  },
  ja: {
    badge: "技術的なFAQと導入実績",
    heading: "製茶オートメーション＆スマート農業 FAQ",
    description: "茶葉萎凋制御、乾燥機レトロフィット、商業用液肥混入システム、温室環境自動化に関するよくある質問への回答です。",
    items: [
      {
        q: "製茶萎凋（いちょう）湿度自動制御システムはどのように茶葉の品質を向上させますか？",
        a: "サノタの萎凋自動制御システムは乾湿球温度、外気湿度、葉の水分量をリアルタイム測定し、送風ファンの回転数やダンパーを自動調整します。槽全体の均一な物理的・化学的萎凋を実現し、品質歩留まりを12〜18%向上させます。",
        link: "/課題について相談する",
        linkText: "製茶萎凋自動化について問い合わせる"
      },
      {
        q: "既設の流動層茶葉乾燥機にスマート温度制御装置を後付けできますか？",
        a: "はい。既設の流動層乾燥機（FBD）や従来型乾燥機向けにPID制御ループ、蒸気バルブ制御、排気ダンパーを組み合わせたレトロフィットを行い、乾燥温度の安定化と燃料消費量最大22%削減を実現します。",
        link: "/課題について相談する",
        linkText: "乾燥機レトロフィット診断を依頼する"
      },
      {
        q: "商業用スマート養液土耕（ファーティゲーション）システムには何が含まれますか？",
        a: "高精度マルチチャンネル注入器、自動温度補償付き工業用pH・ECセンサー、加圧ポンプ、パルス流量計、PLC制御装置が一体となっており、設定された処方通りに培養液を自動調合・給液します。",
        link: "/お問い合わせ",
        linkText: "養液土耕システムの価格を問い合わせる"
      },
      {
        q: "温室環境自動制御システムの標準的な投資回収期間（ROI）はどのくらいですか？",
        a: "天窓・側窓換気、遮光カーテン、細霧冷房、飽差（VPD）の自動制御により、通常9〜14ヶ月で投資回収が可能です。作物の歩留まりが最大25%向上します。",
        link: "/お問い合わせ",
        linkText: "農業技術スペシャリストに相談する"
      }
    ]
  },
  ar: {
    badge: "الأسئلة الشائعة وتفاصيل التنفيذ",
    heading: "الأسئلة الشائعة حول أتمتة مصانع الشاي والزراعة الذكية",
    description: "إجابات عملية عن أنظمة تذبيح الشاي وتحديث المجففات وأجهزة التسميد الذكي والتحكم في مناخ البيوت المحمية.",
    items: [
      {
        q: "كيف يحسن نظام التحكم الآلي في رطوبة تذبيح أوراق الشاي جودة المنتج؟",
        a: "تقوم منظومة سانوتا بقياس درجات الحرارة والرطوبة ورطوبة الأوراق باستمرار، وتعديل سرعة المراوح وفتحات التهوية آلياً لضمان تجانس التذبيح عبر الحوض بالكامل، مما يرفع جودة إنتاج الشاي الأسود بنسبة 12% إلى 18%.",
        link: "/أخبرنا-عن-تحديك",
        linkText: "الاستفسار عن أتمتة تذبيح الشاي"
      },
      {
        q: "هل يمكن تعديل مجففات الشاي الحالية وتركيب وحدات تحكم ذكية في الحرارة؟",
        a: "نعم. نقوم بتحديث مجففات الشاي الحالية بوحدات تحكم PID متطورة وصمامات بخار مؤتمتة ومستشعرات رطوبة، مما يثبت درجة الحرارة ويقلل استهلاك الوقود والحطب بنسبة تصل إلى 22%.",
        link: "/أخبرنا-عن-تحديك",
        linkText: "طلب فحص لتحديث مجففات الشاي"
      },
      {
        q: "ما هي المكونات التي تتضمنها وحدة التسميد الذكي التجارية (Fertigation)؟",
        a: "تتضمن وحداتنا حواقن خلط متعددة القنوات، ومستشعرات صناعية لقياس الأس الهيدروجيني (pH) والناقلية الكهربائية (EC) مع تعويض حراري آلي، ومضخات ضغط ولوحة تحكم PLC لمزج المحاليل بدقة متناهية.",
        link: "/اتصل-بنا",
        linkText: "طلب تسعير نظام التسميد الذكي"
      },
      {
        q: "ما هي فترة استرداد الاستثمار (ROI) لنظام التحكم الآلي بمناخ البيوت المحمية؟",
        a: "يحقق المزارعون التجاريون عادة استرداداً كاملاً للاستثمار خلال 9 إلى 14 شهراً بفضل أتمتة التهوية والتظليل والضباب وتثبيت عجز ضغط البخار (VPD)، مما يزيد المحصول القابل للتسويق بنسبة تصل إلى 25%.",
        link: "/اتصل-بنا",
        linkText: "التحدث مع مهندس زراعي تقني"
      }
    ]
  }
};

export const productsFaqData: Record<string, FaqSectionData> = {
  en: {
    badge: "Technical Capabilities FAQ",
    heading: "Machinery, SCADA & Automation FAQ",
    description: "Direct technical information on custom control panel assemblies, conveyor motor automation, data acquisition dashboards, and predictive maintenance sensors.",
    items: [
      {
        q: "What PLC brands and fieldbus protocols does Sanota support for custom control panel assembly?",
        a: "Sanota builds custom PLC SCADA control panel assemblies using leading global automation brands including Siemens, Allen-Bradley (Rockwell), Mitsubishi, Schneider Electric, and Omron. We support industrial communications including Profinet, Modbus TCP/RTU, EtherNet/IP, and MQTT for cloud IIoT.",
        link: "/tell-us-your-challenge",
        linkText: "Request custom control panel specifications"
      },
      {
        q: "How do industrial motor speed and conveyor automation controllers improve throughput?",
        a: "Our conveyor controllers integrate variable frequency drives (VFDs) and optical/proximity sensors to dynamically adjust line speeds, synchronize multi-stage transfer points, eliminate product bottlenecks, and reduce mechanical shock on conveyor belts and gearboxes.",
        link: "/tell-us-your-challenge",
        linkText: "Discuss conveyor line automation"
      },
      {
        q: "What data is gathered by smart manufacturing data acquisition dashboards?",
        a: "Sanota’s data acquisition dashboards collect real-time machine run-time, overall equipment effectiveness (OEE), cycle counts, downtime root causes, ambient temperature, humidity, and energy consumption, presented on responsive web and mobile displays with exportable audit reports.",
        link: "/contact",
        linkText: "Request a data acquisition demo"
      },
      {
        q: "Can Sanota manufacture special-purpose machinery tailored to custom factory footprints?",
        a: "Yes. Every special-purpose machine and automation station is engineered to fit your specific factory layout, throughput targets, and worker safety requirements, from 3D CAD modeling and precision machining to electrical wiring and on-site commissioning.",
        link: "/contact",
        linkText: "Consult with a machinery engineer"
      }
    ]
  },
  de: {
    badge: "Technische Fähigkeiten FAQ",
    heading: "Maschinen, SCADA & Automatisierung FAQ",
    description: "Detaillierte Informationen zu Schaltschrankbau, Förderband- und Antriebssteuerung, Betriebsdatenerfassungs-Dashboards und vorausschauender Wartung.",
    items: [
      {
        q: "Welche SPS-Marken und Feldbusprotokolle unterstützt Sanota für Schaltschrankbaugruppen?",
        a: "Sanota baut maßgeschneiderte SPS- und SCADA-Schaltschränke mit führenden Fabrikaten wie Siemens, Allen-Bradley, Mitsubishi, Schneider Electric und Omron. Wir unterstützen Feldbusse wie Profinet, Modbus TCP/RTU, EtherNet/IP und MQTT für Industrie 4.0.",
        link: "/ihre-herausforderung",
        linkText: "Schaltschrankspezifikation anfragen"
      },
      {
        q: "Wie verbessern Förderband- und Motorsteuerungen den Produktionsdurchsatz?",
        a: "Unsere Steuerungen nutzen Frequenzumrichter (VFDs) und optische Sensoren zur dynamischen Geschwindigkeitsanpassung, synchronisieren Übergabestationen, verhindern Staus und schonen Getriebe und Fördergurte.",
        link: "/ihre-herausforderung",
        linkText: "Fördertechnik-Automatisierung anfragen"
      },
      {
        q: "Welche Daten erfassen Dashboards zur Betriebsdatenerfassung (BDE)?",
        a: "Unsere Dashboards erfassen Maschinenlaufzeiten, Gesamtanlageneffektivität (OEE), Stückzahlen, Stillstandsursachen, Temperatur, Feuchte und Energieverbrauch in übersichtlichen Web- und Mobilansichten mit Exportfunktion.",
        link: "/kontakt",
        linkText: "BDE-Demo anfordern"
      },
      {
        q: "Fertigt Sanota Sondermaschinen passend für individuelle Fabrikhallen-Grundrisse?",
        a: "Ja. Jede Sondermaschine wird exakt auf Ihre Hallengeometrie, Durchsatzziele und Sicherheitsanforderungen maßgeschneidert – von der 3D-CAD-Konstruktion bis zur Inbetriebnahme vor Ort.",
        link: "/kontakt",
        linkText: "Maschinenbau-Ingenieur kontaktieren"
      }
    ]
  },
  es: {
    badge: "Preguntas Técnicas de Capacidades",
    heading: "Maquinaria, SCADA y Automatización FAQ",
    description: "Información técnica directa sobre montaje de cuadros eléctricos, automatización de transportadores, paneles de adquisición de datos y sensores predictivos.",
    items: [
      {
        q: "¿Qué marcas de PLC y protocolos industriales admite Sanota para el montaje de paneles de control?",
        a: "Sanota ensambla cuadros de control utilizando marcas líderes como Siemens, Allen-Bradley, Mitsubishi, Schneider Electric y Omron. Admitimos protocolos como Profinet, Modbus TCP/RTU, EtherNet/IP y MQTT para la nube.",
        link: "/cuentanos-tu-desafio",
        linkText: "Solicitar especificaciones de cuadros de control"
      },
      {
        q: "¿Cómo mejoran el rendimiento los controladores de velocidad de motor y cintas transportadoras?",
        a: "Integran variadores de frecuencia (VFD) y sensores de proximidad para sincronizar transferencias entre etapas, eliminar cuellos de botella y reducir el desgaste mecánico en cintas y engranajes.",
        link: "/cuentanos-tu-desafio",
        linkText: "Consultar sobre automatización de transportadores"
      },
      {
        q: "¿Qué datos recopilan los paneles de adquisición de datos para manufactura inteligente?",
        a: "Recopilan tiempo de actividad de máquinas, efectividad general del equipo (OEE), conteo de ciclos, causas de parada, temperatura, humedad y consumo energético en interfaces web y móviles.",
        link: "/contacto",
        linkText: "Solicitar demostración de software"
      },
      {
        q: "¿Puede Sanota fabricar maquinaria especial adaptada al espacio específico de una fábrica?",
        a: "Sí. Cada máquina especial y estación de automatización se diseña a medida para su distribución de planta, objetivos de producción y normativas de seguridad, desde el modelado 3D CAD hasta la puesta en marcha.",
        link: "/contacto",
        linkText: "Consultar con un ingeniero de maquinaria"
      }
    ]
  },
  ja: {
    badge: "技術能力に関するFAQ",
    heading: "産業機械・SCADA・自動化 FAQ",
    description: "特注制御盤の組み立て、コンベアモーター自動化、データ収集ダッシュボード、予知保全センサーに関する技術情報です。",
    items: [
      {
        q: "特注制御盤の組み立てで対応可能なPLCブランドとフィールドバス規格は何ですか？",
        a: "Siemens、Allen-Bradley（Rockwell）、三菱電機、Schneider Electric、オムロンなどの主要PLCに対応しています。Profinet、Modbus TCP/RTU、EtherNet/IP、MQTTなどの通信プロトコルをサポートします。",
        link: "/課題について相談する",
        linkText: "制御盤仕様について相談する"
      },
      {
        q: "コンベア自動化コントローラはどのように生産効率を向上させますか？",
        a: "インバータ（VFD）と光電センサーを連携させ、ライン速度の自動調整、工程間の同期、製品渋滞の解消、機械的摩耗の低減を実現します。",
        link: "/課題について相談する",
        linkText: "搬送ライン自動化について相談する"
      },
      {
        q: "製造データ収集ダッシュボードではどのようなデータを可視化できますか？",
        a: "設備の稼働時間、総合設備効率（OEE）、生産カウント、停止要因、環境温度・湿度、電力消費量などをリアルタイムでWebやスマートフォンに表示します。",
        link: "/お問い合わせ",
        linkText: "データ収集システムのデモを依頼する"
      },
      {
        q: "工場の設置スペースに合わせた専用機の設計・製作は可能ですか？",
        a: "はい。工場のフロア形状や生産目標、安全規格に合わせて、3D CADモデリング、精密加工、配線、現場試運転までオーダーメイドで製作します。",
        link: "/お問い合わせ",
        linkText: "機械エンジニアに相談する"
      }
    ]
  },
  ar: {
    badge: "الأسئلة الشائعة حول القدرات الفنية",
    heading: "الأسئلة الشائعة حول الآلات وأنظمة SCADA والأتمتة",
    description: "معلومات فنية مباشرة حول تجميع لوحات التحكم المخصصة، وأتمتة محركات السيور الناقلة، ولوحات جمع البيانات، ومستشعرات الصيانة التنبؤية.",
    items: [
      {
        q: "ما هي علامات PLC وبروتوكولات الاتصال التي تدعمها سانوتا في لوحات التحكم؟",
        a: "تقوم سانوتا ببناء لوحات تحكم PLC و SCADA باستخدام علامات عالمية رائدة مثل Siemens و Allen-Bradley و Mitsubishi و Schneider Electric و Omron مع دعم بروتوكولات Profinet و Modbus و EtherNet/IP و MQTT للربط السحابي.",
        link: "/أخبرنا-عن-تحديك",
        linkText: "طلب مواصفات لوحات التحكم المخصصة"
      },
      {
        q: "كيف تساعد وحدات التحكم في سرعة المحركات والسيور الناقلة على تحسين الإنتاجية؟",
        a: "تدمج أنظمتنا مغيرات السرعة (VFD) والمستشعرات الضوئية لضبط سرعة الخط ديناميكياً، ومزامنة نقاط النقل، ومنع الاختناقات وتخفيف الصدمات الميكانيكية على السيور والتروس.",
        link: "/أخبرنا-عن-تحديك",
        linkText: "مناقشة أتمتة خطوط النقل"
      },
      {
        q: "ما هي البيانات التي تجمعها لوحات المراقبة والاستحواذ على البيانات في المصانع الذكية؟",
        a: "تجمع لوحات سانوتا أوقات تشغيل الآلات، والفاعلية الكلية للمعدات (OEE)، وعدد الدورات، وأسباب التوقف، ودرجات الحرارة، والرطوبة، واستهلاك الطاقة مع إمكانية تصدير التقارير.",
        link: "/اتصل-بنا",
        linkText: "طلب عرض توضيحي للوحة البيانات"
      },
      {
        q: "هل تصنع سانوتا ماكينات ذات أغراض خاصة مخصصة لمساحة مصنع معينة؟",
        a: "نعم. يتم تصميم وتصنيع كل ماكينة خاصة ومحطة أتمتة لتلائم تماماً مساحة مصنعك وأهداف الإنتاج واشتراطات السلامة، بدءاً من النمذجة ثلاثية الأبعاد وحتى التشغيل الميداني.",
        link: "/اتصل-بنا",
        linkText: "استشارة مهندس ماكينات متخصص"
      }
    ]
  }
};
