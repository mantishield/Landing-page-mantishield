export type Lang = "en" | "es";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.protocol": "Protocol",
    "nav.contact": "Contact",

    // Hero
    "hero.status": "SYSTEMS OPERATIONAL",
    "hero.line1": "DEFENDING THE",
    "hero.line2": "DECENTRALIZED",
    "hero.line3": "FABRIC.",
    "hero.subtitle": "AI-Powered Threat Intelligence & Automated Response for DeFi Protocols",
    "hero.cta1": "[INITIATE PROTOCOL]",
    "hero.cta2": "[REQUEST AUDIT]",
    "hero.scroll": "Scroll",

    // Stats bar
    "stats.response": "Threat Response",
    "stats.monitoring": "AI Monitoring",
    "stats.secured": "Value Secured",
    "stats.audited": "Contracts Audited",

    // Services (homepage)
    "services.label": "[Core Protocols]",
    "services.heading": "CORE PROTOCOLS",
    "services.viewAll": "View all capabilities",
    "services.01.title": "KILL CHAIN ONTOLOGY",
    "services.01.desc": "Semantic and kinetic modeling of the DeFi ecosystem. We map blockchain entities — liquidity pools, governance timelocks, MEV bots, flash loan vaults — as interconnected ontological objects. Our AI analyzes deployer behavior, transaction characteristics, and bytecode payloads to detect predatory intent in the mempool before execution. Detection rates exceed 80% with false positives below 2%.",
    "services.02.title": "AUTONOMOUS INTERVENTION",
    "services.02.desc": "White-hat rescue agents that front-run attackers in real-time. When our ontology classifies a mempool transaction as an imminent predatory threat, we synthesize a counter-transaction to preemptively drain at-risk assets into protocol-controlled safety vaults. Execution pipeline under 200ms via Flashbots private bundles. Operates under the SEAL Whitehat Safe Harbor Agreement adopted by major DeFi protocols.",
    "services.03.title": "ADVERSARIAL WAR-TESTING",
    "services.03.desc": "Multi-agent reinforcement learning swarms that stress-test your protocol beyond static audits. We simulate coordinated economic crashes, governance hijacks via flash loan voting, and oracle denial-of-service attacks simultaneously. Trust-weighted signal aggregation reduces maximum parity deviation by over 50% under adversarial conditions. Your protocol survives the dark forest before deployment.",

    // Why section
    "why.label": "[Why MantisShield]",
    "why.heading1": "SECURITY AT",
    "why.heading2": "MACHINE SPEED",
    "why.subtitle": "Traditional security audits are slow, manual, and incomplete. MantisShield deploys autonomous AI agents that monitor, detect, and respond to threats in real-time. No human latency. No gaps in coverage.",
    "why.01.title": "Autonomous Detection",
    "why.01.desc": "AI agents powered by multilayer perceptron models continuously analyze smart contract state transitions, deployer history, and bytecode opcodes. We detect zero-day vulnerabilities in freshly deployed contracts — the same class of threats that frontier AI models exploit autonomously at $1.22 per execution.",
    "why.02.title": "Zero-Latency Response",
    "why.02.desc": "Full decision pipeline from mempool ingestion to rescue bundle transmission in under 200 milliseconds. Rust-native execution engine with FPGA-accelerated EVM emulation achieving 99% latency reduction versus CPU-based interpreters. Private transaction routing through MEV-Boost relay infrastructure ensures pre-trade privacy.",
    "why.03.title": "Formal Verification",
    "why.03.desc": "Mathematical proofs ensure critical protocol functions are secure by design. Collaborative zk-SNARKs enable confidential threat intelligence sharing across the ecosystem — proving vulnerability existence and severity to peers without revealing exploitation mechanics. Powered by scalable HyperPlonk++ framework across distributed prover networks.",

    // CTA section
    "cta.heading": "INITIATE PROTOCOL",
    "cta.subtitle": "Join the protocols that trust MantisShield to defend their infrastructure.",
    "cta.btn1": "[VIEW PROTOCOL]",
    "cta.btn2": "[REQUEST AUDIT]",

    // Footer
    "footer.heading1": "READY TO SECURE",
    "footer.heading2": "YOUR PROTOCOL?",
    "footer.subtitle": "Join the leading Web3 projects that trust MantisShield for their security needs.",
    "footer.cta": "[INITIATE CONTACT]",
    "footer.brand.desc": "Advanced application security and Web3 threat intelligence. Protecting the future of decentralized finance.",
    "footer.connect": "[Connect]",
    "footer.contactLabel": "[Contact]",
    "footer.copyright": "© 2026 MANTISSHIELD. ALL RIGHTS RESERVED.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",

    // Services page
    "servicesPage.label": "[Capabilities]",
    "servicesPage.heading1": "THREAT INTELLIGENCE",
    "servicesPage.heading2": "AT MACHINE SCALE",
    "servicesPage.subtitle": "Autonomous AI agents monitoring the decentralized fabric 24/7. Zero-latency response to emerging threats across DeFi and Fintech protocols.",
    "servicesPage.readyHeading": "READY TO SECURE?",
    "servicesPage.readySubtitle": "Start with a comprehensive security assessment",
    "servicesPage.requestAudit": "[REQUEST AUDIT]",
    "servicesPage.mcp.title": "MCP Agents",
    "servicesPage.mcp.desc": "Autonomous monitoring agents with real-time anomaly detection. Continuously scanning smart contracts for vulnerabilities and suspicious behavior patterns.",
    "servicesPage.audit.title": "Smart Contract Audits",
    "servicesPage.audit.desc": "Formal verification combined with AI-driven vulnerability detection. Mathematical proofs for critical protocol functions ensure security by design.",
    "servicesPage.threat.title": "Threat Intelligence",
    "servicesPage.threat.desc": "Predictive analysis for emerging attack vectors. Machine learning models trained on historical exploit patterns across DeFi ecosystems.",
    "servicesPage.auto.title": "Auto-Mitigation",
    "servicesPage.auto.desc": "Automated response protocols that pause contracts, trigger circuit breakers, or front-run malicious transactions before damage occurs.",
    "servicesPage.token.title": "Tokenization Security",
    "servicesPage.token.desc": "Comprehensive fraud mitigation for RWA and tokenized assets. Supply chain verification and regulatory compliance monitoring.",
    "servicesPage.incident.title": "Incident Response",
    "servicesPage.incident.desc": "24/7 emergency response team with forensic analysis capabilities. Rapid containment and recovery protocols for active threats.",

    // Contact page
    "contact.label": "[Contact]",
    "contact.heading": "INITIATE CONTACT",
    "contact.subtitle": "Join the leading Web3 projects that trust MantisShield for their security needs.",
    "contact.directChannel": "[Direct Channel]",
    "contact.responseTime": "[Response Time]",
    "contact.responseTimeText": "24-48 hours for initial assessment",
    "contact.encryption": "[Encryption]",
    "contact.encryptionText": "All communications are end-to-end encrypted",
    "contact.servicesLabel": "[Services]",
    "contact.service1": "Smart Contract Audits",
    "contact.service2": "AI Threat Monitoring",
    "contact.service3": "Incident Response",
    "contact.service4": "Penetration Testing",

    // Contact form
    "form.name": "[Name]",
    "form.namePlaceholder": "John Doe",
    "form.email": "[Contact Email]",
    "form.emailPlaceholder": "security@protocol.xyz",
    "form.protocol": "[Protocol / Company]",
    "form.protocolPlaceholder": "DeFi Protocol Name",
    "form.message": "[Security Requirements]",
    "form.messagePlaceholder": "Describe your security needs...",
    "form.submit": "[INITIATE TRANSMISSION]",
    "form.sending": "[TRANSMITTING...]",
    "form.success": "MESSAGE TRANSMITTED SUCCESSFULLY. WE WILL RESPOND WITHIN 24-48 HOURS.",
    "form.error": "TRANSMISSION FAILED. CONTACT US DIRECTLY AT contact@mantishield.io",

    // Protocol / Terminal
    "protocol.label": "[Live Protocol]",
    "protocol.heading": "REAL-TIME ANALYSIS",
    "protocol.restart": "[RESTART]",
    "protocol.contractsAudited": "Contracts Audited",
    "protocol.vulnsFound": "Vulnerabilities Found",
    "protocol.criticalIssues": "Critical Issues",
    "protocol.securedValue": "Secured Value",
  },

  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.protocol": "Protocolo",
    "nav.contact": "Contacto",

    // Hero
    "hero.status": "SISTEMAS OPERATIVOS",
    "hero.line1": "DEFENDIENDO EL",
    "hero.line2": "TEJIDO",
    "hero.line3": "DESCENTRALIZADO.",
    "hero.subtitle": "Inteligencia de Amenazas impulsada por IA y Respuesta Automatizada para Protocolos DeFi",
    "hero.cta1": "[INICIAR PROTOCOLO]",
    "hero.cta2": "[SOLICITAR AUDITORÍA]",
    "hero.scroll": "Deslizar",

    // Stats bar
    "stats.response": "Respuesta a Amenazas",
    "stats.monitoring": "Monitoreo IA",
    "stats.secured": "Valor Asegurado",
    "stats.audited": "Contratos Auditados",

    // Services (homepage)
    "services.label": "[Protocolos Centrales]",
    "services.heading": "PROTOCOLOS CENTRALES",
    "services.viewAll": "Ver todas las capacidades",
    "services.01.title": "ONTOLOGÍA KILL CHAIN",
    "services.01.desc": "Modelado semántico y cinético del ecosistema DeFi. Mapeamos entidades blockchain — pools de liquidez, timelocks de gobernanza, bots MEV, bóvedas de préstamos flash — como objetos ontológicos interconectados. Nuestra IA analiza el comportamiento del desplegador, características de transacciones y payloads de bytecode para detectar intención depredadora en el mempool antes de la ejecución. Tasas de detección superiores al 80% con falsos positivos por debajo del 2%.",
    "services.02.title": "INTERVENCIÓN AUTÓNOMA",
    "services.02.desc": "Agentes de rescate white-hat que anticipan a los atacantes en tiempo real. Cuando nuestra ontología clasifica una transacción del mempool como amenaza depredadora inminente, sintetizamos una contra-transacción para drenar preventivamente los activos en riesgo hacia bóvedas de seguridad controladas por el protocolo. Pipeline de ejecución bajo 200ms vía bundles privados de Flashbots. Opera bajo el Acuerdo SEAL Whitehat Safe Harbor adoptado por los principales protocolos DeFi.",
    "services.03.title": "PRUEBAS DE GUERRA ADVERSARIAS",
    "services.03.desc": "Enjambres de aprendizaje por refuerzo multi-agente que estresan tu protocolo más allá de auditorías estáticas. Simulamos crashes económicos coordinados, secuestros de gobernanza vía votación con préstamos flash y ataques de denegación de servicio a oráculos simultáneamente. La agregación de señales ponderada por confianza reduce la desviación máxima de paridad en más del 50% bajo condiciones adversarias. Tu protocolo sobrevive el bosque oscuro antes del despliegue.",

    // Why section
    "why.label": "[Por qué MantisShield]",
    "why.heading1": "SEGURIDAD A",
    "why.heading2": "VELOCIDAD MÁQUINA",
    "why.subtitle": "Las auditorías de seguridad tradicionales son lentas, manuales e incompletas. MantisShield despliega agentes de IA autónomos que monitorean, detectan y responden a amenazas en tiempo real. Sin latencia humana. Sin brechas en la cobertura.",
    "why.01.title": "Detección Autónoma",
    "why.01.desc": "Agentes de IA impulsados por modelos de perceptrón multicapa analizan continuamente las transiciones de estado de contratos inteligentes, historial de desplegadores y opcodes de bytecode. Detectamos vulnerabilidades zero-day en contratos recién desplegados — la misma clase de amenazas que los modelos de IA de frontera explotan autónomamente a $1.22 por ejecución.",
    "why.02.title": "Respuesta Zero-Latencia",
    "why.02.desc": "Pipeline de decisión completo desde la ingestión del mempool hasta la transmisión del bundle de rescate en menos de 200 milisegundos. Motor de ejecución nativo en Rust con emulación EVM acelerada por FPGA logrando 99% de reducción de latencia versus intérpretes basados en CPU. Enrutamiento privado de transacciones a través de infraestructura de relay MEV-Boost asegura privacidad pre-trade.",
    "why.03.title": "Verificación Formal",
    "why.03.desc": "Las pruebas matemáticas aseguran que las funciones críticas del protocolo sean seguras por diseño. Los zk-SNARKs colaborativos permiten compartir inteligencia de amenazas confidencial a través del ecosistema — demostrando la existencia y severidad de vulnerabilidades a pares sin revelar mecánicas de explotación. Impulsado por el framework escalable HyperPlonk++ a través de redes de probadores distribuidos.",

    // CTA section
    "cta.heading": "INICIAR PROTOCOLO",
    "cta.subtitle": "Únete a los protocolos que confían en MantisShield para defender su infraestructura.",
    "cta.btn1": "[VER PROTOCOLO]",
    "cta.btn2": "[SOLICITAR AUDITORÍA]",

    // Footer
    "footer.heading1": "¿LISTO PARA ASEGURAR",
    "footer.heading2": "TU PROTOCOLO?",
    "footer.subtitle": "Únete a los proyectos Web3 líderes que confían en MantisShield para sus necesidades de seguridad.",
    "footer.cta": "[INICIAR CONTACTO]",
    "footer.brand.desc": "Seguridad avanzada de aplicaciones e inteligencia de amenazas Web3. Protegiendo el futuro de las finanzas descentralizadas.",
    "footer.connect": "[Conectar]",
    "footer.contactLabel": "[Contacto]",
    "footer.copyright": "© 2026 MANTISSHIELD. TODOS LOS DERECHOS RESERVADOS.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",

    // Services page
    "servicesPage.label": "[Capacidades]",
    "servicesPage.heading1": "INTELIGENCIA DE AMENAZAS",
    "servicesPage.heading2": "A ESCALA MÁQUINA",
    "servicesPage.subtitle": "Agentes de IA autónomos monitoreando el tejido descentralizado 24/7. Respuesta zero-latencia a amenazas emergentes en protocolos DeFi y Fintech.",
    "servicesPage.readyHeading": "¿LISTO PARA ASEGURAR?",
    "servicesPage.readySubtitle": "Comienza con una evaluación de seguridad integral",
    "servicesPage.requestAudit": "[SOLICITAR AUDITORÍA]",
    "servicesPage.mcp.title": "Agentes MCP",
    "servicesPage.mcp.desc": "Agentes de monitoreo autónomos con detección de anomalías en tiempo real. Escaneando continuamente contratos inteligentes en busca de vulnerabilidades y patrones de comportamiento sospechoso.",
    "servicesPage.audit.title": "Auditorías de Contratos Inteligentes",
    "servicesPage.audit.desc": "Verificación formal combinada con detección de vulnerabilidades impulsada por IA. Pruebas matemáticas para funciones críticas del protocolo aseguran seguridad por diseño.",
    "servicesPage.threat.title": "Inteligencia de Amenazas",
    "servicesPage.threat.desc": "Análisis predictivo para vectores de ataque emergentes. Modelos de aprendizaje automático entrenados en patrones de exploits históricos en ecosistemas DeFi.",
    "servicesPage.auto.title": "Auto-Mitigación",
    "servicesPage.auto.desc": "Protocolos de respuesta automatizada que pausan contratos, activan circuit breakers o anticipan transacciones maliciosas antes de que ocurra el daño.",
    "servicesPage.token.title": "Seguridad de Tokenización",
    "servicesPage.token.desc": "Mitigación integral de fraude para activos RWA y tokenizados. Verificación de cadena de suministro y monitoreo de cumplimiento regulatorio.",
    "servicesPage.incident.title": "Respuesta a Incidentes",
    "servicesPage.incident.desc": "Equipo de respuesta de emergencia 24/7 con capacidades de análisis forense. Protocolos de contención y recuperación rápida para amenazas activas.",

    // Contact page
    "contact.label": "[Contacto]",
    "contact.heading": "INICIAR CONTACTO",
    "contact.subtitle": "Únete a los proyectos Web3 líderes que confían en MantisShield para sus necesidades de seguridad.",
    "contact.directChannel": "[Canal Directo]",
    "contact.responseTime": "[Tiempo de Respuesta]",
    "contact.responseTimeText": "24-48 horas para evaluación inicial",
    "contact.encryption": "[Encriptación]",
    "contact.encryptionText": "Todas las comunicaciones son cifradas de extremo a extremo",
    "contact.servicesLabel": "[Servicios]",
    "contact.service1": "Auditorías de Contratos Inteligentes",
    "contact.service2": "Monitoreo de Amenazas IA",
    "contact.service3": "Respuesta a Incidentes",
    "contact.service4": "Pruebas de Penetración",

    // Contact form
    "form.name": "[Nombre]",
    "form.namePlaceholder": "Juan Pérez",
    "form.email": "[Correo de Contacto]",
    "form.emailPlaceholder": "seguridad@protocolo.xyz",
    "form.protocol": "[Protocolo / Empresa]",
    "form.protocolPlaceholder": "Nombre del Protocolo DeFi",
    "form.message": "[Requisitos de Seguridad]",
    "form.messagePlaceholder": "Describe tus necesidades de seguridad...",
    "form.submit": "[INICIAR TRANSMISIÓN]",
    "form.sending": "[TRANSMITIENDO...]",
    "form.success": "MENSAJE TRANSMITIDO EXITOSAMENTE. RESPONDEREMOS EN 24-48 HORAS.",
    "form.error": "TRANSMISIÓN FALLIDA. CONTÁCTENOS DIRECTAMENTE EN contact@mantishield.io",

    // Protocol / Terminal
    "protocol.label": "[Protocolo en Vivo]",
    "protocol.heading": "ANÁLISIS EN TIEMPO REAL",
    "protocol.restart": "[REINICIAR]",
    "protocol.contractsAudited": "Contratos Auditados",
    "protocol.vulnsFound": "Vulnerabilidades Encontradas",
    "protocol.criticalIssues": "Problemas Críticos",
    "protocol.securedValue": "Valor Asegurado",
  },
};
