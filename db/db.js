export const cohort = [
    {
        id: "SBX-001",
        slug: "impulso-joven",
        cohort: "2026",
        status: "Selected · Cohort 2026",
        selectedBy: "ARCANA Sandbox",
        industry: "Employment Platform",
        stage: "Prototype · Initial Validation",
        location: "Jauja, Junín, Perú",
        investment: {
            type: "In-kind technology investment",
            amount: 10000,
            currency: "PEN",
            display: "Up to S/ 10,000",
            description: "Inversión en especie destinada a convertir el prototipo de Emprende Jauja en un producto tecnológico funcional mediante ingeniería, infraestructura, diseño, servicios y acompañamiento de ARCANA."
        },
        team: {
            name: "IMPULSO JOVEN",
            institution: "I.E. San Vicente de Paul",
            advisor: {
                name: "Jhon Salas",
                role: "Docente asesor"
            },
            mantra: "Jóvenes con fe, con ganas y con futuro.",
            description: "Equipo emprendedor formado por estudiantes de cuarto grado de secundaria de la I.E. San Vicente de Paul. Impulso Joven nace con la intención de generar iniciativas que contribuyan al desarrollo de su comunidad.",
            members: [
                {
                    name: "Juan Leonardo Zegarra Mayta",
                    originalRole: "Líder del equipo",
                    grade: "4to"
                },
                {
                    name: "Rafaela Batista Espinoza",
                    originalRole: "Colíder del equipo",
                    grade: "4to"
                },
                {
                    name: "Mayte de la Cruz Osorio",
                    originalRole: "Investigadora de recursos",
                    grade: "4to"
                },
                {
                    name: "Kiara Dávila Delgado",
                    originalRole: "Cohesionadora del equipo",
                    grade: "4to"
                },
                {
                    name: "Nathaniel Vasquez Flores",
                    originalRole: "Implementador del equipo",
                    grade: "4to"
                }
            ]
        },
        project: {
            name: "Emprende Jauja",
            fullName: "Emprende Jauja: Conectando jóvenes con oportunidades laborales locales",
            origin: {
                competition: "Concurso Nacional Crea y Emprende 2026",
                category: "C",
                startDate: "2026-07-13",
                originalEndDate: "2026-07-23"
            },
            tagline: "Conectando jóvenes con oportunidades laborales locales.",
            shortDescription: "Plataforma digital que busca conectar a jóvenes de Jauja con empresas, negocios y emprendimientos que ofrecen empleos, prácticas y capacitaciones.",
            description: "Emprende Jauja nace frente a una problemática identificada por sus propios integrantes: muchos jóvenes de la provincia tienen dificultades para conocer y acceder a oportunidades laborales locales. La propuesta centraliza empleos, prácticas y capacitaciones en una plataforma digital enfocada inicialmente en Jauja.",
            purpose: "Contribuir al desarrollo económico local facilitando el acceso de los jóvenes a oportunidades laborales dentro de su provincia.",
            methodology: "Design Thinking"
        },
        problem: {
            headline: "Las oportunidades existen. El problema es encontrarlas.",
            statement: "Los jóvenes tienen dificultades para encontrar oportunidades laborales locales debido a la falta de información organizada y accesible.",
            identifiedProblem: "Muchos jóvenes de Jauja migran a otras ciudades debido a la falta de oportunidades laborales y al desconocimiento de las vacantes existentes.",
            mainCause: "Escasa difusión de oportunidades laborales y falta de una plataforma que conecte a empresas con jóvenes.",
            consequences: [
                "Migración juvenil",
                "Desempleo",
                "Disminución del desarrollo económico local"
            ],
            affectedPeople: [
                "Jóvenes de 16 a 30 años en búsqueda de empleo",
                "Empresas locales",
                "Negocios",
                "Emprendedores"
            ],
            insights: [
                "Los jóvenes quieren encontrar trabajo cerca de casa.",
                "Existe interés por obtener experiencia laboral.",
                "Los usuarios buscan ofertas laborales seguras.",
                "La información sobre oportunidades se encuentra dispersa.",
                "Existen pocas oportunidades visibles para estudiantes y jóvenes sin experiencia.",
                "Los jóvenes necesitan mayor orientación para postular."
            ],
            pov: "Los jóvenes necesitan una forma sencilla de encontrar oportunidades laborales porque la información disponible está dispersa y muchas veces no es confiable.",
            challenge: "¿Cómo podríamos ayudar a los jóvenes a encontrar oportunidades laborales locales de forma rápida y segura?"
        },
        solution: {
            headline: "Una bolsa de oportunidades construida desde Jauja.",
            description: "Una plataforma digital donde empresas y negocios puedan publicar empleos, prácticas y capacitaciones, permitiendo que los jóvenes descubran oportunidades y postulen de manera sencilla.",
            channels: [
                "Aplicación móvil",
                "Página web",
                "Facebook",
                "Instagram",
                "TikTok",
                "WhatsApp"
            ],
            coreFeatures: [
                {
                    name: "Registro de usuarios",
                    description: "Creación de cuentas para jóvenes y empresas."
                },
                {
                    name: "Publicación de vacantes",
                    description: "Las empresas pueden registrar oportunidades laborales."
                },
                {
                    name: "Búsqueda de empleos",
                    description: "Los jóvenes pueden descubrir oportunidades disponibles."
                },
                {
                    name: "Filtros por categoría",
                    description: "Permiten encontrar oportunidades según rubro o tipo de trabajo."
                },
                {
                    name: "Postulaciones",
                    description: "Los jóvenes pueden postular enviando sus datos."
                },
                {
                    name: "Prácticas",
                    description: "Publicación y descubrimiento de oportunidades de prácticas."
                },
                {
                    name: "Capacitaciones",
                    description: "Difusión de oportunidades para mejorar la empleabilidad."
                },
                {
                    name: "Notificaciones",
                    description: "Avisos sobre nuevas vacantes relacionadas con los intereses del usuario."
                },
                {
                    name: "Chat",
                    description: "Comunicación entre empresa y postulante incorporada como mejora después de la validación."
                }
            ],
            expectedFlow: [
                "Registro del usuario",
                "Búsqueda de una oportunidad",
                "Selección de una vacante",
                "Postulación",
                "Contacto con la empresa",
                "Proceso de contratación",
                "Notificación de oportunidades similares"
            ]
        },
        audience: {
            primary: {
                name: "Jóvenes",
                ageRange: "16–30 años",
                location: "Provincia de Jauja",
                needs: [
                    "Encontrar empleo",
                    "Encontrar prácticas",
                    "Acceder a capacitaciones",
                    "Obtener experiencia laboral",
                    "Encontrar oportunidades cerca de casa"
                ]
            },
            secondary: {
                name: "Empresas y emprendimientos",
                location: "Provincia de Jauja",
                needs: [
                    "Encontrar trabajadores",
                    "Publicar vacantes",
                    "Conectar con talento joven",
                    "Difundir oportunidades"
                ]
            }
        },
        valueProposition: {
            statement: "Ayudamos a los jóvenes de Jauja que buscan empleo mediante una plataforma digital que reúne ofertas laborales locales, facilitando el contacto con empresas y reduciendo la necesidad de buscar oportunidades fuera de la provincia.",
            differentiators: [
                "Enfoque específico en Jauja",
                "Información laboral local organizada",
                "Experiencia sencilla para jóvenes",
                "Conexión directa entre empresas y postulantes",
                "Empleos, prácticas y capacitaciones en un mismo espacio"
            ]
        },
        businessModel: {
            userAccess: "Gratuito para jóvenes",
            revenueStreams: [
                "Planes de suscripción para empresas",
                "Publicaciones de ofertas laborales premium",
                "Publicidad de negocios dentro de la plataforma"
            ],
            originalPricing: {
                initialDocument: "S/ 15 mensuales",
                validationHypothesis: "S/ 30 mensuales",
                note: "La documentación presenta dos precios diferentes. El modelo comercial deberá validarse nuevamente antes del lanzamiento."
            },
            originalEstimatedDevelopmentCost: 2500,
            originalEstimatedDevelopmentCostDisplay: "S/ 2,500",
            channels: [
                "Web",
                "Aplicación móvil",
                "Facebook",
                "Instagram",
                "TikTok",
                "WhatsApp",
                "Instituciones educativas",
                "Municipalidades"
            ]
        },
        competition: {
            competitors: [
                {
                    name: "Facebook Empleos",
                    strength: "Gran cantidad de usuarios",
                    weakness: "Información desordenada",
                    differentiation: "Emprende Jauja busca organizar únicamente oportunidades locales."
                },
                {
                    name: "Computrabajo",
                    strength: "Presencia de múltiples empresas",
                    weakness: "Según el análisis del equipo, existen pocas vacantes específicas de Jauja.",
                    differentiation: "Emprende Jauja se enfoca exclusivamente en oportunidades de la provincia."
                }
            ],
            competitiveAdvantage: "Especialización local, experiencia sencilla y conexión directa entre jóvenes y empresas de Jauja."
        },
        research: {
            methodology: "Design Thinking",
            phases: [
                "Empatizar",
                "Definir",
                "Idear",
                "Prototipar",
                "Evaluar"
            ],
            researchQuestions: [
                "¿Qué dificultades tienes para encontrar trabajo en Jauja?",
                "¿Por qué crees que muchos jóvenes migran a otras ciudades?",
                "¿Cómo buscas empleo actualmente?",
                "¿Qué es lo más difícil del proceso?",
                "¿Usarías una aplicación que reúna todas las ofertas laborales de Jauja?",
                "¿Qué funciones debería tener esa aplicación?",
                "¿La recomendarías a otros jóvenes?"
            ],

            identifiedNeeds: [
                "Acceso rápido a ofertas laborales",
                "Información confiable sobre empresas",
                "Oportunidades para jóvenes sin experiencia",
                "Comunicación directa con empleadores",
                "Orientación para postular correctamente"
            ]
        },
        validation: {
            problem: "Validada",
            customer: "Validada",
            solution: "Validada parcialmente",
            price: "Validada parcialmente",
            hypotheses: [
                {
                    type: "Problema",
                    hypothesis: "Los jóvenes de Jauja tienen dificultades para encontrar oportunidades laborales y desconocen las vacantes disponibles.",
                    method: "Entrevistas",
                    successCriteria: "Al menos 8 de 10 jóvenes confirman dificultades para encontrar empleo."
                },
                {
                    type: "Cliente",
                    hypothesis: "Los principales usuarios son jóvenes de 16 a 30 años que buscan empleo en Jauja.",
                    method: "Encuestas y entrevistas",
                    successCriteria: "Al menos 80% muestra interés por la plataforma."
                },
                {
                    type: "Solución",
                    hypothesis: "Una plataforma que conecte jóvenes y empresas puede contribuir a resolver el problema.",
                    method: "Prueba del prototipo",
                    successCriteria: "Al menos 80% considera útil y fácil utilizar la aplicación."
                },
                {
                    type: "Precio",
                    hypothesis: "Las empresas estarían dispuestas a pagar por publicar oportunidades.",
                    method: "Intención de compra",
                    successCriteria: "7 de 10 empresas aceptarían pagar el plan propuesto."
                }
            ],
            findings: [
                "Los jóvenes entrevistados confirmaron que desconocen muchas de las vacantes disponibles.",
                "Los usuarios señalaron que actualmente buscan empleo mediante medios informales.",
                "Jóvenes y empresarios consideraron útil una plataforma exclusiva para Jauja.",
                "La solución recibió una solicitud para incorporar comunicación directa entre empresas y postulantes.",
                "El precio necesita continuar siendo validado."
            ]
        },
        productEvolution: [
            {
                stage: "Prototipo inicial",
                description: "Listado simple de oportunidades laborales.",
                problem: "Los usuarios no podían encontrar rápidamente vacantes relacionadas con sus intereses."
            },
            {
                stage: "PMV",
                description: "Se incorporaron filtros por categorías y notificaciones.",
                reason: "Mejorar la experiencia de búsqueda."
            },
            {
                stage: "PMV mejorado",
                description: "Se incorporó la propuesta de chat directo entre empresa y postulante.",
                reason: "Feedback obtenido durante las entrevistas de solución."
            },
            {
                stage: "ARCANA Sandbox",
                description: "Transformación del prototipo validado en un producto tecnológico funcional.",
                status: "Next"
            }
        ],
        prototype: {
            type: "Mockup navegable",
            designTool: "Canva",
            screens: [
                "Inicio",
                "Buscador de empleos por categoría",
                "Perfil de usuario",
                "Panel para empresas",
                "Publicación de vacantes"
            ],

            process: [
                "Bocetos iniciales en papel",
                "Diseño digital de interfaz",
                "Definición de colores y logotipo",
                "Carga de empresas y vacantes de prueba",
                "Simulación del proceso de búsqueda y postulación",
                "Evaluación con usuarios",
                "Incorporación de mejoras"
            ]
        },
        growth: {
            acquisition: [
                "Video publicitario",
                "Afiches digitales",
                "Instagram",
                "Facebook",
                "WhatsApp",
                "Visitas presenciales a negocios"
            ],
            retention: [
                "Mensaje de bienvenida",
                "Seguimiento a empresas",
                "Contenido sobre empleabilidad",
                "Beneficios para empresas que continúen utilizando la plataforma"
            ],
            earlySignals: [
                "Interés de jóvenes después de la difusión en redes.",
                "Incremento de consultas mediante Instagram.",
                "Primeras empresas interesadas después de visitas presenciales."
            ]
        },
        metrics: {
            keyMetrics: [
                "Jóvenes registrados",
                "Empresas afiliadas",
                "Ofertas publicadas",
                "Postulaciones realizadas",
                "Empleos conseguidos"
            ]
        },
        impact: {
            type: "Social · Economic",
            objectives: [
                "Facilitar el acceso al empleo juvenil",
                "Conectar talento joven con empresas locales",
                "Fortalecer la economía local",
                "Reducir la necesidad de migrar por falta de información laboral",
                "Mejorar la visibilidad de oportunidades locales",
                "Facilitar el acceso a prácticas y capacitaciones"
            ],
            beneficiaries: [
                "Jóvenes",
                "Empresas",
                "Negocios",
                "Emprendimientos de Jauja"
            ]
        },
        challenges: [
            {
                challenge:"Dificultad para contactar jóvenes durante las entrevistas.",
                response:"El equipo coordinó con el colegio para realizar entrevistas durante horarios de recreo y salida.",
                learning:"La planificación anticipada facilita la recolección de información."
            },
            {
                challenge:"Desconfianza inicial de empresas por tratarse de un proyecto escolar.",
                response:"El equipo explicó el propósito social y mostró el prototipo.",
                learning:"Mostrar resultados concretos genera más confianza que presentar solamente una idea."
            }
        ],
        sandbox: {
            selectionReason: "Impulso Joven demostró iniciativa para identificar un problema de su comunidad, investigar a sus usuarios, construir un prototipo, recibir feedback y continuar mejorando su propuesta.",
            thesis: "ARCANA Sandbox no selecciona únicamente Emprende Jauja. Selecciona a las personas detrás de él y su capacidad para aprender, construir y evolucionar.",
            quote: "No apostamos por el producto. Apostamos por ustedes.",
            objective: "Acompañar al equipo en la transición desde un proyecto escolar validado inicialmente hacia un MVP funcional capaz de operar con usuarios y empresas reales.",
            arcanaContribution: [
                {
                    area: "Product",
                    description: "Definición del MVP, priorización de funcionalidades y estrategia de producto."
                },
                {
                    area: "Engineering",
                    description: "Arquitectura, frontend, backend, APIs y construcción tecnológica."
                },
                {
                    area: "Design",
                    description: "Evolución del prototipo hacia una experiencia UI/UX preparada para usuarios reales."
                },
                {
                    area: "Infrastructure",
                    description: "Hosting, base de datos, despliegue, servicios y herramientas necesarias."
                },
                {
                    area: "Data",
                    description: "Definición de métricas y mecanismos para medir adopción, postulaciones y resultados."
                },
                {
                    area: "Mentorship",
                    description: "Acompañamiento técnico, de producto y empresarial durante el proceso."
                }
            ]
        },
        roadmap: [
            {
                phase: "01",
                name: "Validate",
                title: "Validar antes de construir",
                status: "Next",
                objectives: [
                    "Confirmar el problema con una muestra mayor de jóvenes.",
                    "Validar interés real de empresas.",
                    "Determinar qué empresas publicarían vacantes desde el lanzamiento.",
                    "Revalidar disposición de pago."
                ]
            },
            {
                phase: "02",
                name: "Define",
                title: "Definir el MVP",
                status: "Planned",
                objectives: [
                    "Reducir funcionalidades al núcleo esencial.",
                    "Definir experiencia para jóvenes.",
                    "Definir experiencia para empresas.",
                    "Diseñar métricas de éxito."
                ]
            },
            {
                phase: "03",
                name: "Build",
                title: "Construir el producto",
                status: "Planned",
                objectives: [
                    "Diseño UI/UX",
                    "Arquitectura",
                    "Desarrollo",
                    "Infraestructura",
                    "Pruebas"
                ]
            },
            {
                phase: "04",
                name: "Launch",
                title: "Salir al mercado",
                status: "Planned",
                objectives: [
                    "Incorporar primeras empresas.",
                    "Publicar primeras oportunidades reales.",
                    "Captar primeros usuarios.",
                    "Medir postulaciones."
                ]
            },
            {
                phase: "05",
                name: "Learn",
                title: "Medir y aprender",
                status: "Planned",
                objectives: [
                    "Analizar comportamiento de usuarios.",
                    "Medir empleos generados.",
                    "Validar monetización.",
                    "Decidir siguientes iteraciones."
                ]
            }
        ],
        story: {
            beforeSandbox: "Emprende Jauja comenzó como un proyecto desarrollado para Crea y Emprende 2026. El equipo investigó la problemática del empleo juvenil, entrevistó usuarios, diseñó alternativas, creó un prototipo y realizó una primera validación.",
            now: "Su selección para ARCANA Sandbox marca una nueva etapa. El objetivo deja de ser únicamente demostrar una propuesta y pasa a comprobar si puede convertirse en un producto utilizado por jóvenes y empresas reales.",
            future: "El siguiente desafío del equipo será validar sus hipótesis con mayor profundidad, construir un MVP y demostrar que una solución nacida desde estudiantes de Jauja puede generar impacto real en su comunidad."
        },
        reflection: {
            summary: "El equipo considera que emprender implica identificar problemas reales, escuchar a los usuarios, validar ideas, mejorar continuamente y trabajar de manera colaborativa.",
            commitment: "En su documentación, Impulso Joven manifiesta su intención de continuar desarrollando Emprende Jauja más allá de la evaluación del concurso."
        },
        social: {
            instagram: {
                handle: "@EmpredeJauja",
                status: "Needs verification"
            }
        },
        href: "/cohort-2026/impulso-joven"
    }
];