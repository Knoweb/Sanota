export const challengeES = {
  meta: {
    title: "Cuéntanos tu reto de ingeniería | Sanota",
    description: "Cuéntale a Sanota qué no funciona, qué necesita mejorar o qué quieres desarrollar. Nuestro equipo te guiará hacia la solución de ingeniería integral adecuada."
  },
  hero: {
    heading: "Cuéntanos cuál es tu desafío",
    subheading: "No es necesario que conozcas la solución técnica. Empieza por contarnos qué necesitas conseguir.",
    description: "Tanto si necesita mejorar una máquina, automatizar un proceso, desarrollar un nuevo sistema, introducir IoT y software, como si necesita contratar un servicio de mantenimiento a largo plazo, Santota puede ayudarle a identificar el camino correcto a seguir. Nuestro equipo revisará sus requisitos y conectará las capacidades necesarias en torno a ellos.",
    primaryButton: "Iniciar su consulta",
    secondaryButton: "Hablar con Sanota",
    supportLine: "Ingeniería • Automatización • IoT • Software • Implementación • Soporte del ciclo de vida"
  },
  steps: {
    step1: {
      title: "¿En qué te gustaría recibir ayuda?",
      subtitle: "Seleccione la opción que mejor se ajuste a sus necesidades. Puede seleccionar más de una opción.",
      helper: "¿No está seguro de qué opción seleccionar? Elija 'Solicitar consulta de ingeniería' y nuestro equipo le ayudará a definir los requisitos.",
      continueButton: "Continuar",
      options: [
        {
          id: "modernize",
          title: "Modernizar o reparar una máquina",
          desc: "Mejorar la fiabilidad, la productividad, la seguridad o el rendimiento de la maquinaria existente."
        },
        {
          id: "automate",
          title: "Automatizar un proceso",
          desc: "Reduzca el trabajo manual, mejore la uniformidad o introduzca el control automatizado en una operación."
        },
        {
          id: "new_machine",
          title: "Desarrollar una nueva máquina",
          desc: "Diseño y construcción de maquinaria o equipos en función de un requisito específico de producción u operación."
        },
        {
          id: "complete_system",
          title: "Desarrollar un sistema completo",
          desc: "Crear o integrar una línea de producción, un sistema de procesamiento, una solución para instalaciones o un proyecto multitecnológico."
        },
        {
          id: "iot",
          title: "Introducir IoT o monitorización digital",
          desc: "Conecte maquinaria, equipos o instalaciones a sensores, paneles de control, alertas, informes o aplicaciones de software."
        },
        {
          id: "product_prototype",
          title: "Desarrollar un producto o prototipo",
          desc: "Transformar una idea o un requisito operativo en un producto diseñado, probado y práctico."
        },
        {
          id: "amc",
          title: "Contratar AMC o soporte de mantenimiento",
          desc: "Obtenga mantenimiento planificado y asistencia técnica para sistemas fabricados por Sanota o de terceros elegibles."
        },
        {
          id: "consultation",
          title: "Solicitar una consulta de ingeniería",
          desc: "Analice una inquietud operativa, una oportunidad o un concepto cuando la solución adecuada aún no esté clara."
        }
      ]
    },
    step2: {
      title: "Cuéntanos sobre el requisito",
      subtitle: "Proporcione detalles sobre la situación actual, los resultados deseados y su industria.",
      fields: {
        situation: {
          label: "¿Qué está pasando ahora? (Situación o desafío actual)",
          placeholder: "Por ejemplo: 'Este proceso se realiza actualmente de forma manual y provoca retrasos en la producción.'"
        },
        outcome: {
          label: "¿Qué te gustaría lograr? (Resultado deseado)",
          placeholder: "Por ejemplo: 'Queremos automatizar el proceso, reducir el tiempo de gestión y supervisar la producción.'"
        },
        industry: {
          label: "¿A qué industria o sector se refiere esto?",
          options: [
            "Fabricación",
            "Agricultura",
            "Procesamiento de alimentos y bebidas",
            "Té",
            "Logística o almacenamiento",
            "Gestión de energía o recursos",
            "Gestión ambiental o de residuos",
            "Infraestructura o instalaciones",
            "Atención sanitaria o biomédica",
            "Investigación o desarrollo de productos",
            "Otros"
          ]
        },
        location: {
          label: "¿Dónde se encuentra el requisito? (Ubicación del proyecto)",
          placeholder: "Ciudad, distrito y país"
        },
        urgency: {
          label: "¿Qué tan urgente es el requerimiento?",
          options: [
            "Problema operativo inmediato",
            "Requerido en un mes",
            "Requerido en tres meses",
            "Proyecto futuro planificado",
            "Plazo aún no definido"
          ]
        }
      },
      conditionals: {
        modernize: {
          machineType: "¿Qué tipo de máquina o equipo está involucrado?",
          problemLabel: "¿Qué problema está experimentando?",
          problems: [
            "Averías frecuentes",
            "Rendimiento reducido",
            "Controles o componentes obsoletos",
            "Problemas de seguridad",
            "Altos costos de energía u operación",
            "Dificultad para obtener repuestos",
            "Necesidad de mayor capacidad",
            "Otro"
          ],
          operatingStatus: "¿Está funcionando la máquina actualmente?",
          operatingOptions: ["Sí", "Funcionamiento con limitaciones", "No", "No estoy seguro"]
        },
        automate: {
          processName: "¿Qué proceso le gustaría automatizar?",
          currentMethod: "¿Cómo se completa actualmente el proceso?",
          methodOptions: ["Totalmente manual", "Parcialmente automatizado", "La automatización existente requiere mejoras", "Nuevo proceso", "No estoy seguro"],
          improvement: "¿Cuál es la principal mejora esperada?",
          improvementOptions: ["Mayor productividad", "Mayor consistencia", "Menor manipulación manual", "Mayor seguridad", "Menor desperdicio", "Mejor seguimiento e informes", "Otros"]
        },
        newMachine: {
          purpose: "¿Qué debería hacer la máquina?",
          material: "¿Qué material o producto podrá procesar?",
          hasConcept: "¿Ya tienes algún concepto, dibujo o referencia?",
          conceptOptions: ["Sí", "No", "Parcialmente desarrollado"]
        },
        completeSystem: {
          systemType: "¿Qué tipo de sistema o instalación se requiere?",
          capabilities: "¿Qué capacidades pueden estar involucradas?",
          capabilitiesList: [
            "Ingeniería mecánica", "Ingeniería eléctrica", "Automatización y control",
            "IoT y monitorización", "Software", "Fabricación", "Instalación y puesta en marcha",
            "Soporte de mantenimiento", "No estoy seguro"
          ]
        },
        iot: {
          whatToMonitor: "¿Qué le gustaría monitorizar o controlar?",
          monitorOptions: [
            "Maquinaria", "Producción", "Energía o servicios públicos",
            "Temperatura o entorno", "Condiciones agrícolas", "Ubicación o movimiento",
            "Estado del equipo", "Otro parámetro operativo"
          ],
          howToAccess: "¿Cómo le gustaría acceder a la información?",
          accessOptions: [
            "Panel de control web", "Aplicación móvil", "Alertas y notificaciones",
            "Informes automatizados", "Integración con un sistema existente", "No estoy seguro"
          ]
        },
        product: {
          description: "Describa brevemente la idea o el requisito del producto:",
          stage: "¿En qué fase se encuentra el proyecto?",
          stageOptions: [
            "Idea inicial", "Concepto desarrollado", "Dibujos o diseño disponibles",
            "Prototipo disponible", "El producto existente requiere mejoras", "No estoy seguro"
          ]
        },
        amc: {
          whatRequiresSupport: "¿Qué requiere soporte de mantenimiento?",
          supportOptions: [
            "Maquinaria", "Sistema de automatización o control", "Sistema eléctrico",
            "Sistema de IoT o de monitoreo", "Sistema de software",
            "Instalación integrada o sistema de producción", "Múltiples activos"
          ],
          whoDeveloped: "¿Quién desarrolló o suministró originalmente el sistema?",
          developerOptions: ["Sanota", "Otro proveedor", "Varios proveedores", "Desconocido"],
          preferredArrangement: "Acuerdo de soporte preferido:",
          arrangements: [
            "Mantenimiento preventivo", "Asistencia en caso de averías", "Inspecciones periódicas",
            "Seguimiento del rendimiento", "Asistencia en repuestos y obsolescencia",
            "Contrato de mantenimiento integral (AMC)", "Se requiere una evaluación antes de decidir"
          ],
          note: "Nota importante: La asistencia AMC para sistemas de terceros se ofrece tras una evaluación técnica inicial."
        }
      }
    },
    step3: {
      title: "Información de apoyo",
      subtitle: "Ayúdenos a comprender el requisito. Puede subir archivos y notas de equipo.",
      uploadPrompt: "Puede subir fotografías, vídeos, dibujos, información sobre equipos, informes u otros documentos que ayuden a nuestro equipo a comprender el requisito.",
      uploadButton: "Agregar archivos",
      fileTypes: "Tipos de archivo aceptados: JPG, PNG, PDF, DOCX, XLSX y MP4.",
      securityNote: "Por favor, no subas contraseñas, credenciales de acceso ni documentos que no estés autorizado a compartir.",
      optionalFields: {
        makeModel: "Marca, modelo o número de referencia del equipo (opcional)",
        supplierInfo: "Información del proveedor o del sistema existente (opcional)",
        quantity: "Número estimado de máquinas, activos o ubicaciones (opcional)"
      }
    },
    step4: {
      title: "Su información de contacto",
      subtitle: "¿Cómo podemos ponernos en contacto con usted?",
      fields: {
        fullName: "Nombre completo",
        company: "Empresa u organización",
        jobTitle: "Título profesional",
        email: "Dirección de correo electrónico",
        phone: "Número telefónico",
        preferredMethod: "Método de contacto preferido",
        methods: ["Llamada telefónica", "Correo electrónico", "Reunión en línea", "Discusión sobre la visita al sitio", "Sin preferencia"],
        preferredTime: "Horario de contacto preferido",
        times: ["Mañana", "Tarde", "Noche", "En cualquier momento durante el horario comercial"]
      }
    },
    step5: {
      title: "Revisar y enviar",
      subtitle: "Por favor, revise la información antes de enviarla a Sanota.",
      consentAccuracy: "Confirmo que la información proporcionada es precisa según mi leal saber y entender y que estoy autorizado a compartir el material adjunto.",
      consentNoObligation: "Entiendo que el envío de esta consulta no genera ninguna obligación contractual. Sanota podrá solicitar información adicional o realizar una evaluación antes de recomendar una solución.",
      submitButton: "Enviar mi desafío",
      saveButton: "Guardar y continuar más tarde",
      privacyLink: "Ver aviso de privacidad"
    }
  },
  whatHappensNext: {
    heading: "¿Qué pasará después?",
    subheading: "Una revisión práctica realizada por el equipo técnico adecuado.",
    steps: [
      {
        num: "1",
        title: "Revisamos sus requisitos",
        desc: "Su consulta será revisada para comprender la necesidad operativa y las capacidades técnicas requeridas."
      },
      {
        num: "2",
        title: "Conectamos a los especialistas",
        desc: "Sanota remitirá la consulta al equipo de ingeniería, automatización, IoT, software o mantenimiento correspondiente."
      },
      {
        num: "3",
        title: "Nos pondremos en contacto",
        desc: "Un representante se comunicará con usted para aclarar el requisito y acordar el siguiente paso."
      },
      {
        num: "4",
        title: "Evaluamos la oportunidad",
        desc: "Dependiendo de los requisitos, el siguiente paso puede ser una conversación en línea, revisión de documentos o visita técnica al sitio."
      },
      {
        num: "5",
        title: "Recomendamos un camino a seguir",
        desc: "Tras la evaluación inicial, Sanota propondrá el enfoque técnico, alcance y plan de desarrollo adecuados."
      }
    ],
    assurance: "Cada requisito es diferente. Santota no recomendará una solución estándar sin antes comprender el desafío operativo."
  },
  alternativeContact: {
    heading: "¿Prefieres hablar directamente con alguien?",
    subheading: "Puede ponerse en contacto con Sanota utilizando el método que le resulte más conveniente.",
    callButton: "Solicitar una llamada",
    emailButton: "Enviar correo electrónico",
    contactButton: "Contactar con Sanota",
    urgentNote: "Para asuntos operativos urgentes, indique en su consulta que se trata de una solicitud de soporte técnico urgente al contactarnos."
  },
  confirmation: {
    heading: "Gracias. Hemos recibido su consulta.",
    refText: "Su número de referencia es",
    body: "El equipo de Santota revisará la información y la remitirá al equipo técnico correspondiente. Un representante se pondrá en contacto con usted utilizando el método de contacto que prefiera.",
    homeButton: "Volver a la página principal",
    workButton: "Explorar trabajos terminados"
  },
  systemMessages: {
    requiredField: "Por favor, complete este campo antes de continuar.",
    contactMethodMissing: "Por favor, proporcione al menos un método de contacto válido.",
    uploadError: "No se pudo cargar el archivo. Por favor, compruebe el tipo y el tamaño del archivo e inténtelo de nuevo.",
    connectionError: "No se pudo enviar su consulta debido a un problema de conexión. La información que ingresó se ha guardado. Inténtelo de nuevo.",
    savedMessage: "Su consulta ha sido guardada. Utilice el enlace seguro que le enviamos a su correo electrónico para continuar más tarde."
  }
};
