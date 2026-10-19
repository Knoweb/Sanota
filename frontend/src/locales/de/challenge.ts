export const challengeDE = {
  meta: {
    title: "Schildern Sie uns Ihre technische Herausforderung | Sanota",
    description: "Schildern Sie Sanota, was nicht funktioniert, was verbessert werden muss oder was Sie entwickeln möchten. Unser Team unterstützt Sie bei der Entwicklung der passenden integrierten Engineering-Lösung."
  },
  hero: {
    heading: "Schildern Sie uns Ihre Herausforderung",
    subheading: "Sie müssen die technische Lösung nicht kennen. Beschreiben Sie uns zunächst, was Sie erreichen möchten.",
    description: "Ob Sie eine Maschine verbessern, einen Prozess automatisieren, ein neues System entwickeln, IoT und Software einführen oder langfristige Wartungsunterstützung organisieren möchten - Sanota kann Ihnen helfen, den richtigen Weg zu finden. Unser Team wird Ihre Anforderungen prüfen und die notwendigen Kompetenzen in den Bereichen Engineering, Automatisierung, Digitalisierung und technischer Support dafür bereitstellen.",
    primaryButton: "Ihre Anfrage starten",
    secondaryButton: "Mit Sanota sprechen",
    supportLine: "Engineering • Automatisierung • IoT • Software • Implementierung • Lebenszyklusbetreuung"
  },
  steps: {
    step1: {
      title: "Wobei möchten Sie Hilfe?",
      subtitle: "Wählen Sie die Option, die Ihren Anforderungen am besten entspricht. Sie können mehrere Optionen auswählen.",
      helper: "Sie sind sich nicht sicher, welche Option Sie wählen sollen? Wählen Sie „Ingenieurberatung anfordern“, und unser Team hilft Ihnen bei der Definition der Anforderungen.",
      continueButton: "Weiter",
      options: [
        {
          id: "modernize",
          title: "Eine Maschine modernisieren oder reparieren",
          desc: "Die Zuverlässigkeit, Produktivität, Sicherheit oder Leistung bestehender Maschinen verbessern."
        },
        {
          id: "automate",
          title: "Einen Prozess automatisieren",
          desc: "Reduzieren Sie manuelle Arbeit, verbessern Sie die Konsistenz oder führen Sie eine automatisierte Steuerung in einen Betrieb ein."
        },
        {
          id: "new_machine",
          title: "Entwickeln Sie ein neues Maschinendesign",
          desc: "Entwurf und Bau von Maschinen oder Anlagen, die auf eine spezifische Produktions- oder Betriebsanforderung zugeschnitten sind."
        },
        {
          id: "complete_system",
          title: "Entwickeln Sie ein vollständiges System",
          desc: "Entwicklung oder Integration einer Produktionslinie, eines Verarbeitungssystems, einer Anlagenlösung oder eines Multitechnologieprojekts."
        },
        {
          id: "iot",
          title: "Einführung von IoT oder Digital Monitoring",
          desc: "Maschinen, Geräte oder Anlagen werden mit Sensoren, Dashboards, Warnmeldungen, Berichten oder Softwareanwendungen verbunden."
        },
        {
          id: "product_prototype",
          title: "Ein Produkt oder einen Prototyp entwickeln",
          desc: "Eine Idee oder betriebliche Anforderung in ein entworfenes, getestetes und praktisches Produkt umsetzen."
        },
        {
          id: "amc",
          title: "Vereinbaren Sie Wartungsverträge oder Wartungsunterstützung",
          desc: "Erhalten Sie geplante Wartungs- und technische Unterstützung für von Sanota hergestellte oder berechtigte Drittanbietersysteme."
        },
        {
          id: "consultation",
          title: "Ingenieurberatung anfordern",
          desc: "Besprechen Sie ein betriebliches Problem, eine Chance oder ein Konzept, wenn die geeignete Lösung noch nicht klar ist."
        }
      ]
    },
    step2: {
      title: "Beschreiben Sie uns Ihre Anforderung",
      subtitle: "Geben Sie Einzelheiten zur aktuellen Situation, den gewünschten Ergebnissen und Ihrer Branche an.",
      fields: {
        situation: {
          label: "Was geschieht jetzt? (Aktuelle Situation oder Herausforderung)",
          placeholder: "Zum Beispiel: „Dieser Prozess wird derzeit manuell durchgeführt und verursacht Produktionsverzögerungen.“"
        },
        outcome: {
          label: "Was möchten Sie erreichen? (Gewünschtes Ergebnis)",
          placeholder: "Zum Beispiel: „Wir möchten den Prozess automatisieren, die Bearbeitungszeit reduzieren und die Produktion überwachen.“"
        },
        industry: {
          label: "Zu welcher Branche oder welchem Sektor gehört das?",
          options: [
            "Fertigung",
            "Landwirtschaft",
            "Lebensmittel- und Getränkeverarbeitung",
            "Tee",
            "Logistik oder Lagerhaltung",
            "Energie- oder Ressourcenmanagement",
            "Umwelt- oder Abfallmanagement",
            "Infrastruktur oder Anlagen",
            "Gesundheitswesen oder Biomedizin",
            "Forschung oder Produktentwicklung",
            "Sonstiges"
          ]
        },
        location: {
          label: "Wo ist die Anforderung festgelegt? (Projektstandort)",
          placeholder: "Stadt, Bezirk und Land"
        },
        urgency: {
          label: "Wie dringend ist der Bedarf?",
          options: [
            "Sofortiges operatives Problem",
            "Benötigt innerhalb eines Monats",
            "Benötigt innerhalb von drei Monaten",
            "Geplantes zukünftiges Projekt",
            "Zeitplan noch nicht festgelegt"
          ]
        }
      },
      conditionals: {
        modernize: {
          machineType: "Um welche Art von Maschine oder Gerät handelt es sich?",
          problemLabel: "Welches Problem haben Sie?",
          problems: [
            "Häufige Ausfälle",
            "Verminderte Leistung",
            "Veraltete Steuerungen oder Komponenten",
            "Sicherheitsbedenken",
            "Hohe Energie- oder Betriebskosten",
            "Schwierigkeiten bei der Ersatzteilbeschaffung",
            "Bedarf an erhöhter Kapazität",
            "Sonstiges"
          ],
          operatingStatus: "Ist die Maschine derzeit in Betrieb?",
          operatingOptions: ["Ja", "Betrieb mit Einschränkungen", "Nein", "Nicht sicher"]
        },
        automate: {
          processName: "Welchen Prozess möchten Sie automatisieren?",
          currentMethod: "Wie wird der Prozess aktuell abgewickelt?",
          methodOptions: ["Vollständig manuell", "Teilautomatisiert", "Bestehende Automatisierung verbesserungsbedürftig", "Neuer Prozess", "Unklar"],
          improvement: "Welche Hauptverbesserung wird erwartet?",
          improvementOptions: ["Höhere Produktivität", "Bessere Konsistenz", "Weniger manuelle Handhabung", "Verbesserte Sicherheit", "Weniger Abfall", "Verbesserte Überwachung und Berichterstattung", "Sonstiges"]
        },
        newMachine: {
          purpose: "Was soll die Maschine tun?",
          material: "Welches Material oder Produkt kann es verarbeiten?",
          hasConcept: "Haben Sie bereits ein Konzept, eine Zeichnung oder eine Referenz?",
          conceptOptions: ["Ja", "Nein", "Teilweise entwickelt"]
        },
        completeSystem: {
          systemType: "Welche Art von System oder Anlage wird benötigt?",
          capabilities: "Welche Kompetenzen könnten relevant sein?",
          capabilitiesList: [
            "Maschinenbau", "Elektrotechnik", "Automatisierung und Steuerungstechnik",
            "IoT und Überwachung", "Software", "Fertigung", "Installation und Inbetriebnahme",
            "Wartungsunterstützung", "Nicht sicher"
          ]
        },
        iot: {
          whatToMonitor: "Was möchten Sie überwachen oder steuern?",
          monitorOptions: [
            "Maschinen", "Produktion", "Energie oder Versorgung",
            "Temperatur oder Umgebung", "Landwirtschaftliche Bedingungen", "Standort oder Bewegung",
            "Gerätezustand", "Ein weiterer Betriebsparameter"
          ],
          howToAccess: "Wie möchten Sie auf die Informationen zugreifen?",
          accessOptions: [
            "Web-Dashboard", "Mobile Anwendung", "Warnungen und Benachrichtigungen",
            "Automatisierte Berichte", "Integration in ein bestehendes System", "Nicht sicher"
          ]
        },
        product: {
          description: "Beschreiben Sie kurz die Idee oder die Produktanforderung:",
          stage: "Welche Phase hat das Projekt erreicht?",
          stageOptions: [
            "Erste Idee", "Konzept entwickelt", "Zeichnungen oder Design vorhanden",
            "Prototyp vorhanden", "Bestehendes Produkt verbesserungsbedürftig", "Unsicher"
          ]
        },
        amc: {
          whatRequiresSupport: "Was benötigt Wartungsunterstützung?",
          supportOptions: [
            "Maschinen", "Automatisierungs- oder Steuerungssysteme", "Elektrische Systeme",
            "IoT- oder Überwachungssysteme", "Softwaresysteme",
            "Integrierte Anlagen oder Produktionssysteme", "Mehrere Anlagen"
          ],
          whoDeveloped: "Wer hat das System ursprünglich entwickelt oder geliefert?",
          developerOptions: ["Sanota", "Ein anderer Lieferant", "Mehrere Lieferanten", "Unbekannt"],
          preferredArrangement: "Bevorzugte Supportvereinbarung:",
          arrangements: [
            "Vorbeugende Wartung", "Unterstützung bei Störungen", "Regelmäßige Inspektionen",
            "Leistungsüberwachung", "Ersatzteil- und Obsoleszenzunterstützung",
            "Umfassender Wartungsvertrag", "Bewertung vor Entscheidung erforderlich"
          ],
          note: "Wichtiger Hinweis: Die Wartung von Systemen von Drittanbietern wird nach einer ersten technischen Bewertung angeboten."
        }
      }
    },
    step3: {
      title: "Zusätzliche Informationen",
      subtitle: "Helfen Sie uns, die Anforderungen zu verstehen. Sie können Dateien und Gerätedaten hochladen.",
      uploadPrompt: "Sie können Fotos, Videos, Zeichnungen, Geräteinformationen, Berichte oder andere Dokumente hochladen, die unserem Team helfen, die Anforderungen zu verstehen.",
      uploadButton: "Dateien hinzufügen",
      fileTypes: "Akzeptierte Dateitypen: JPG, PNG, PDF, DOCX, XLSX und MP4.",
      securityNote: "Bitte laden Sie keine Passwörter, Zugangsdaten oder Dokumente hoch, zu deren Weitergabe Sie nicht berechtigt sind.",
      optionalFields: {
        makeModel: "Gerätehersteller, Modell oder Referenznummer (optional)",
        supplierInfo: "Informationen zu bestehenden Lieferanten oder Systemen (optional)",
        quantity: "Geschätzte Anzahl von Maschinen, Anlagen oder Standorten (optional)"
      }
    },
    step4: {
      title: "Ihre Kontaktinformationen",
      subtitle: "Wie können wir Sie kontaktieren?",
      fields: {
        fullName: "Vollständiger Name",
        company: "Unternehmen oder Organisation",
        jobTitle: "Berufsbezeichnung",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        preferredMethod: "Bevorzugte Kontaktmethode",
        methods: ["Telefonanruf", "E-Mail", "Online-Meeting", "Besprechung vor Ort", "Keine Präferenz"],
        preferredTime: "Bevorzugte Kontaktzeit",
        times: ["Morgen", "Nachmittag", "Abend", "Jederzeit während der Geschäftszeiten"]
      }
    },
    step5: {
      title: "Überprüfen und absenden",
      subtitle: "Bitte überprüfen Sie die Informationen, bevor Sie sie an Sanota senden.",
      consentAccuracy: "Ich bestätige, dass die gemachten Angaben nach bestem Wissen und Gewissen richtig sind und dass ich berechtigt bin, das beigefügte Material weiterzugeben.",
      consentNoObligation: "Mir ist bekannt, dass die Einreichung dieser Anfrage keine vertragliche Verpflichtung begründet. Sanota kann weitere Informationen anfordern oder eine Bewertung durchführen, bevor eine Lösung empfohlen wird.",
      submitButton: "Meine Herausforderung einreichen",
      saveButton: "Speichern und später fortfahren",
      privacyLink: "Datenschutzhinweise ansehen"
    }
  },
  whatHappensNext: {
    heading: "Was passiert als Nächstes?",
    subheading: "Ein praktischer Testbericht vom richtigen Team.",
    steps: [
      {
        num: "1",
        title: "Wir prüfen Ihre Anfrage",
        desc: "Ihre Anfrage wird geprüft, um den betrieblichen Bedarf und die gegebenenfalls erforderlichen technischen Fähigkeiten zu verstehen."
      },
      {
        num: "2",
        title: "Wir bringen die richtigen Spezialisten zusammen",
        desc: "Sanota wird die Anfrage an das zuständige Engineering-, Automatisierungs-, IoT-, Software-, Projekt- oder Wartungsteam weiterleiten."
      },
      {
        num: "3",
        title: "Wir kontaktieren Sie",
        desc: "Ein Mitarbeiter wird sich mit Ihnen in Verbindung setzen, um die Anforderungen zu klären und das weitere Vorgehen abzustimmen."
      },
      {
        num: "4",
        title: "Wir bewerten die Möglichkeiten",
        desc: "Je nach Anforderung kann der nächste Schritt eine Online-Diskussion, eine Dokumentenprüfung, ein Vor-Ort-Besuch oder eine technische Bewertung sein."
      },
      {
        num: "5",
        title: "Wir empfehlen das weitere Vorgehen",
        desc: "Nach der ersten Bewertung wird Sanota den geeigneten Ansatz, Umfang oder Entwicklungspfad vorschlagen."
      }
    ],
    assurance: "Jede Anforderung ist individuell. Sanota wird keine Standardlösung empfehlen, bevor die jeweilige betriebliche Herausforderung verstanden wurde."
  },
  alternativeContact: {
    heading: "Möchten Sie lieber direkt mit jemandem sprechen?",
    subheading: "Sie können Sanota auf dem für Sie bequemsten Weg kontaktieren.",
    callButton: "Rückruf anfordern",
    emailButton: "E-Mail senden",
    contactButton: "Sanota kontaktieren",
    urgentNote: "Bei dringenden betrieblichen Angelegenheiten kennzeichnen Sie Ihre Anfrage bitte als „Dringender technischer Support“, wenn Sie uns kontaktieren."
  },
  confirmation: {
    heading: "Vielen Dank. Ihre Anfrage ist eingegangen.",
    refText: "Ihre Referenznummer lautet",
    body: "Das Sanota-Team wird die Informationen prüfen und an das zuständige technische Team weiterleiten. Ein Mitarbeiter wird sich über den von Ihnen bevorzugten Kontaktweg mit Ihnen in Verbindung setzen.",
    homeButton: "Zurück zur Startseite",
    workButton: "Abgeschlossene Arbeiten ansehen"
  },
  systemMessages: {
    requiredField: "Bitte füllen Sie dieses Feld aus, bevor Sie fortfahren.",
    contactMethodMissing: "Bitte geben Sie mindestens eine gültige Kontaktmöglichkeit an.",
    uploadError: "Die Datei konnte nicht hochgeladen werden. Bitte überprüfen Sie Dateityp und -größe und versuchen Sie es erneut.",
    connectionError: "Ihre Anfrage konnte aufgrund eines Verbindungsproblems nicht übermittelt werden. Ihre eingegebenen Daten wurden gespeichert. Bitte versuchen Sie es erneut.",
    savedMessage: "Ihre Anfrage wurde gespeichert. Nutzen Sie den sicheren Link in der E-Mail, um später fortzufahren."
  }
};
