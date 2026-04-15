import type { AuthoredArticle } from "../article-types";
import { createArticle } from "./shared";

export const careerArticles: AuthoredArticle[] = [
  createArticle("enfermeria-en-salud-ocupacional", {
    title: "Enfermeria en salud ocupacional: funciones, salidas y competencias | Serenfermera",
    description:
      "Que hace la enfermera del trabajo o de salud ocupacional, donde puede ejercer y que competencias necesita.",
    eyebrow: "Carrera en enfermeria",
    intro:
      "La enfermeria en salud ocupacional trabaja en la relacion entre salud y trabajo: previene riesgos, promueve bienestar, detecta problemas precozmente y participa en vigilancia de la salud dentro de equipos de prevencion y entornos laborales muy distintos.",
    pills: ["Lectura: 8 min", "Especialidad y salidas", "Contexto hispano"],
    summary: [
      {
        label: "Pregunta central",
        text: "No es solo pasar reconocimientos: su papel es preventivo, asistencial y de gestion."
      },
      {
        label: "Donde trabaja",
        text: "Servicios de prevencion, empresas, administracion, docencia e investigacion."
      },
      {
        label: "Competencias",
        text: "Prevencion, comunicacion, vigilancia de la salud, gestion y trabajo multidisciplinar."
      }
    ],
    sections: [
      {
        id: "que-es",
        title: "Que es exactamente la enfermeria en salud ocupacional",
        tocLabel: "Que es",
        blocks: [
          {
            type: "paragraph",
            text:
              "Es una especialidad centrada en proteger, promover y restaurar la salud de la poblacion trabajadora teniendo en cuenta tanto las caracteristicas de la persona como las del puesto y el entorno laboral. Su mirada es clinica, preventiva y comunitaria a la vez."
          },
          {
            type: "callout",
            title: "Idea importante",
            body:
              "El foco no es solo la enfermedad profesional. Tambien lo son la prevencion, la educacion, la vigilancia, la ergonomia, la adaptacion y la coordinacion."
          }
        ]
      },
      {
        id: "funciones",
        title: "Funciones principales",
        tocLabel: "Funciones",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que hace", "Por que aporta valor"],
            rows: [
              [
                "Preventiva",
                "Promocion de la salud, prevencion de riesgos, formacion y consejo.",
                "Reduce dano evitable y mejora cultura preventiva."
              ],
              [
                "Asistencial",
                "Atencion inicial, seguimiento, deteccion precoz y coordinacion con otros recursos.",
                "Acerca salud laboral y cuidado enfermero al entorno de trabajo."
              ],
              [
                "Gestion",
                "Protocolos, registros, programas, indicadores y planes de actuacion.",
                "Convierte la prevencion en sistema y no en acciones sueltas."
              ],
              [
                "Docencia e investigacion",
                "Formacion de trabajadores, evaluacion de programas y mejora continua.",
                "Permite que la especialidad evolucione con evidencia y experiencia real."
              ]
            ]
          }
        ]
      },
      {
        id: "donde",
        title: "Donde puede ejercer",
        tocLabel: "Donde trabaja",
        blocks: [
          {
            type: "bullets",
            items: [
              "Servicios de prevencion de riesgos laborales.",
              "Servicios medicos de empresa o unidades vinculadas a medios laborales concretos.",
              "Administraciones publicas con competencias en salud laboral.",
              "Centros docentes e investigadores.",
              "Entornos con fuerte componente preventivo, ambiental o de vigilancia."
            ]
          }
        ]
      },
      {
        id: "competencias",
        title: "Competencias que marcan la diferencia",
        tocLabel: "Competencias",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Clinicas",
                body: "Valorar, detectar precozmente, priorizar y orientar segun riesgo y contexto."
              },
              {
                title: "Preventivas",
                body: "Leer el trabajo como determinante de salud y disenar acciones proporcionadas."
              },
              {
                title: "Comunicacion",
                tone: "warning",
                body: "Explicar riesgos y medidas sin caer en tecnicismo seco o alarmismo."
              },
              {
                title: "Gestion",
                body: "Documentar, planificar, evaluar y trabajar con equipos multiprofesionales."
              }
            ]
          }
        ]
      },
      {
        id: "fuentes",
        title: "Fuentes base",
        tocLabel: "Fuentes",
        blocks: [
          {
            type: "links",
            items: [
              {
                href: "https://www.boe.es/boe/dias/2011/03/31/pdfs/BOE-A-2011-5804.pdf",
                label: "Programa Oficial de la Especialidad de Enfermeria del Trabajo (BOE)"
              },
              {
                href: "https://www.who.int/teams/health-workforce/nursing-and-midwifery",
                label: "WHO Nursing and Midwifery"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/carrera-en-enfermeria/",
        chip: "Hub",
        title: "Mas carrera en enfermeria",
        description: "Especialidades, salidas y decisiones profesionales con contexto real."
      },
      {
        href: "/15-cosas-que-todo-estudiante-de-enfermeria-debe-saber/",
        chip: "Estudiantes",
        title: "15 cosas que todo estudiante debe saber",
        description: "Pistas practicas para no empezar la carrera a ciegas."
      },
      {
        href: "/educacion-para-la-salud-en-enfermeria-formacion/",
        chip: "Formacion",
        title: "Educacion para la salud en enfermeria",
        description: "Otra pieza que conecta prevencion, comunicacion y desarrollo profesional."
      }
    ]
  }),
  createArticle("cualidades-de-una-buena-enfermera", {
    title: "Cualidades de una buena enfermera: habilidades humanas y clinicas esenciales | Serenfermera",
    description:
      "Cualidades de una buena enfermera explicadas sin topicos: observacion, criterio, comunicacion, precision, organizacion y empatia.",
    eyebrow: "Carrera y desarrollo",
    intro:
      "Una buena enfermera no destaca solo por saber hacer tecnicas. Tambien por como observa, se organiza, comunica, prioriza y sostiene el cuidado incluso cuando el turno aprieta.",
    pills: ["Lectura: 6 min", "Util para estudiantes y equipo", "Habilidades observables"],
    summary: [
      {
        label: "No va de topicos",
        text: "Las cualidades importan cuando se ven en decisiones, trato y seguridad, no en palabras bonitas."
      },
      {
        label: "Lo que mas pesa",
        text: "Observacion, criterio, comunicacion, precision, empatia y organizacion."
      },
      {
        label: "Se entrenan",
        text: "No son talentos fijos: mejoran con practica deliberada y buen feedback."
      }
    ],
    sections: [
      {
        id: "cualidades",
        title: "Las cualidades que mas se notan en la practica",
        tocLabel: "Cualidades",
        blocks: [
          {
            type: "table",
            columns: ["Cualidad", "Como se nota", "Por que importa"],
            rows: [
              [
                "Observacion",
                "Detecta cambios pequenos antes de que escalen.",
                "La seguridad depende mucho de ver a tiempo."
              ],
              [
                "Criterio",
                "Prioriza y filtra lo importante del ruido.",
                "Sin criterio, el turno manda sobre ti."
              ],
              [
                "Comunicacion",
                "Explica claro, pregunta bien y transmite sin ruido.",
                "Evita errores y mejora alianza con persona y equipo."
              ],
              [
                "Precision",
                "Comprueba detalles y no se mueve por automatismo.",
                "La tecnica segura se construye en los detalles."
              ],
              [
                "Empatia",
                "Comprende el impacto humano sin perder foco clinico.",
                "Humaniza el cuidado y mejora adherencia."
              ],
              [
                "Organizacion",
                "Ordena tareas y tiempos sin volverse rigida.",
                "Da aire mental y protege la calidad del trabajo."
              ]
            ]
          }
        ]
      },
      {
        id: "error",
        title: "El error de enfocarlo como una lista bonita",
        tocLabel: "Error comun",
        blocks: [
          {
            type: "paragraph",
            text:
              'Muchas listas sobre "ser buena enfermera" se quedan en palabras grandes. El problema es que esas palabras no ayudan si no se traducen a conducta concreta. La pregunta util no es si eres empatica, sino como se nota eso en una valoracion, una explicacion o una situacion de dolor.'
          }
        ]
      },
      {
        id: "desarrollo",
        title: "Como se entrenan en la realidad",
        tocLabel: "Como se entrenan",
        blocks: [
          {
            type: "bullets",
            items: [
              "Observar a profesionales solidas y fijarte en microconductas, no solo en tecnicas.",
              "Pedir feedback concreto sobre comunicacion, priorizacion y registro.",
              "Revisar errores o dudas sin vivirlos como ataque personal.",
              "Cuidar rutinas de preparacion y cierre de turno para ganar orden mental."
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/15-cosas-que-todo-estudiante-de-enfermeria-debe-saber/",
        chip: "Estudiantes",
        title: "15 cosas que toda estudiante debe saber",
        description: "Una pieza practica para empezar a entrenar estas cualidades en practicas."
      },
      {
        href: "/enfermeria-en-salud-ocupacional/",
        chip: "Carrera",
        title: "Enfermeria en salud ocupacional",
        description: "Otra salida donde comunicacion, criterio y prevencion se notan mucho."
      },
      {
        href: "/carrera-en-enfermeria/",
        chip: "Hub",
        title: "Volver a Carrera en enfermeria",
        description: "Mas contenido sobre salidas, habilidades y desarrollo profesional."
      }
    ]
  }),
  createArticle("15-cosas-que-todo-estudiante-de-enfermeria-debe-saber", {
    title: "15 cosas que toda estudiante de enfermeria debe saber antes de las practicas | Serenfermera",
    description:
      "Consejos realistas para estudiantes de enfermeria antes de practicas: organizacion, observacion, seguridad, registro y autocuidado.",
    eyebrow: "Carrera y estudiantes",
    intro:
      "Llegar a practicas con ganas ayuda, pero no basta. Lo que marca la diferencia es saber observar, preguntar bien, ordenar prioridades, registrar con criterio y asumir que no hace falta parecer segura de todo para aprender de verdad.",
    pills: ["Lectura: 7 min", "Pensado para practicas", "Nada de consejo vacio"],
    summary: [
      {
        label: "Te ayuda a",
        text: "Entrar en practicas con menos ruido mental y mejores habitos desde el principio."
      },
      {
        label: "No hace falta",
        text: "Parecer segura de todo. Hace falta aprender con honestidad y cuidar la base."
      },
      {
        label: "Lo mas util",
        text: "Observar, preguntar, registrar y no improvisar cuando no entiendes algo."
      }
    ],
    sections: [
      {
        id: "lista",
        title: "Las 15 claves",
        tocLabel: "Las 15 claves",
        blocks: [
          {
            type: "table",
            columns: ["Clave", "Por que importa"],
            rows: [
              ["Pregunta antes de improvisar", "La duda a tiempo protege aprendizaje y seguridad."],
              ["Observa mucho", "Gran parte de la practica consiste en mirar con criterio."],
              ["Entiende el sentido de cada tarea", "Sin contexto, la tecnica se vuelve mecanica."],
              ["Distingue urgencia de ruido", "Priorizar bien evita saturarte desde el inicio."],
              ["Cuida la higiene de manos", "La seguridad basica no es negociable."],
              ["Anota lo que aprendes", "Evita repetir errores y fija mejor procesos."],
              ["Escucha buenos pases de turno", "Aprendes lenguaje clinico y priorizacion real."],
              ["Habla claro y breve", "El tono y la claridad importan desde el primer dia."],
              ["No hagas una tecnica sin saber que vigilas", "Entender que puede fallar cambia la forma de cuidar."],
              ["Registrar bien es cuidar", "La continuidad depende tambien de lo que dejas escrito."],
              ["Pedir ayuda es una fortaleza", "Te protege a ti y al paciente."],
              ["Tu cara tambien comunica", "El gesto y la prisa afectan confianza y calma."],
              ["La tecnica no lo es todo", "El contexto clinico cambia el sentido del procedimiento."],
              ["El autocuidado importa", "Dormir mal y vivir a tension te hace aprender peor."],
              ["Profesionalidad no es frialdad", "No copies dureza pensando que eso te hace mas seria."]
            ]
          }
        ]
      },
      {
        id: "errores",
        title: "Errores que merece la pena cortar pronto",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Callarse por miedo",
                tone: "alert",
                body: "Genera mas riesgo que preguntar a tiempo y con honestidad."
              },
              {
                title: "Buscar solo tecnicas vistosas",
                tone: "warning",
                body: "La base esta en valorar, observar y entender el por que."
              },
              {
                title: "Compararse todo el rato",
                body: "Te quita foco y te hace aprender peor. Mira tu progresion, no solo la de otras."
              },
              {
                title: "Creer que practicar es solo hacer",
                body: "Gran parte de la practica consiste en ver, pensar, preguntar y registrar."
              }
            ]
          }
        ]
      },
      {
        id: "primer-dia",
        title: "Con que mentalidad compensa llegar",
        tocLabel: "Mentalidad util",
        blocks: [
          {
            type: "paragraph",
            text:
              "Llega con actitud abierta, libreta mental, disposicion a ayudar y tolerancia a no saberlo todo. Las practicas no premian aparentar; premian observar bien, preguntar con criterio y crecer sin convertir cada error en drama."
          }
        ]
      }
    ],
    related: [
      {
        href: "/cualidades-de-una-buena-enfermera/",
        chip: "Habilidades",
        title: "Cualidades de una buena enfermera",
        description: "Muchas de las cualidades utiles se empiezan a entrenar justamente aqui."
      },
      {
        href: "/carrera-en-enfermeria/",
        chip: "Hub",
        title: "Mas carrera en enfermeria",
        description: "Salidas, habilidades y orientacion para estudiantes y profesionales."
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        chip: "Fundamentos",
        title: "Datos subjetivos y objetivos",
        description: "Una base muy util para mejorar valoracion y registro desde practicas."
      }
    ]
  }),
  createArticle("educacion-para-la-salud-en-enfermeria-formacion", {
    title: "Educacion para la salud en enfermeria: formacion y competencias | Serenfermera",
    description:
      "Que es la educacion para la salud en enfermeria, que competencias requiere, que incluye la formacion y donde se aplica.",
    eyebrow: "Carrera y desarrollo",
    intro:
      "La educacion para la salud no es un extra bonito del trabajo enfermero. Es una parte central de la practica porque conecta prevencion, autocuidado, adherencia y comprension real del proceso de salud de cada persona.",
    pills: ["Promocion de la salud", "Competencias docentes", "Practica profesional"],
    summary: [
      {
        label: "No es solo informar",
        text: "Educar implica adaptar mensaje, contexto, lenguaje y seguimiento."
      },
      {
        label: "Donde se usa",
        text: "Primaria, hospital, comunidad, escuela, empresa y educacion terapeutica."
      },
      {
        label: "Que exige",
        text: "Base clinica, comunicacion clara y capacidad para convertir informacion en cambio posible."
      }
    ],
    sections: [
      {
        id: "que-es",
        title: "Que entendemos por educacion para la salud",
        tocLabel: "Que es",
        blocks: [
          {
            type: "paragraph",
            text:
              "Es el conjunto de intervenciones dirigidas a que personas, familias y comunidades entiendan mejor su salud, desarrollen habilidades de autocuidado y puedan tomar decisiones mas seguras y mas realistas en su vida diaria."
          },
          {
            type: "paragraph",
            text:
              "En enfermeria, esta funcion aparece tanto en una consulta breve como en programas mas estructurados de prevencion, cronicidad, maternidad, salud escolar o salud laboral."
          }
        ]
      },
      {
        id: "competencias",
        title: "Competencias que hacen falta",
        tocLabel: "Competencias",
        blocks: [
          {
            type: "table",
            columns: ["Competencia", "Para que sirve", "Ejemplo practico"],
            rows: [
              [
                "Comunicacion clara",
                "Evita tecnicismos vacios y mejora comprension.",
                "Explicar tratamiento con lenguaje adaptado al paciente."
              ],
              [
                "Valoracion educativa",
                "Permite saber que sabe, que teme y que barreras tiene la persona.",
                "Detectar si un plan de dieta es inviable por contexto social."
              ],
              [
                "Planificacion",
                "Ayuda a fijar objetivos y mensajes prioritarios.",
                "Elegir un objetivo pequeno y medible en vez de diez consejos a la vez."
              ],
              [
                "Evaluacion",
                "Comprueba si hubo comprension y cambio posible.",
                "Revisar tecnica inhalatoria o administracion de insulina."
              ]
            ]
          }
        ]
      },
      {
        id: "formacion",
        title: "Que suele incluir una buena formacion en este campo",
        tocLabel: "Formacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Promocion de la salud, prevencion y enfoque comunitario.",
              "Tecnicas de entrevista, educacion de adultos y comunicacion adaptada.",
              "Planificacion de sesiones, materiales y objetivos educativos.",
              "Evaluacion de resultados y deteccion de barreras reales para el cambio.",
              "Trabajo interdisciplinar y lectura critica de intervenciones basadas en evidencia."
            ]
          },
          {
            type: "callout",
            title: "Lo importante",
            body:
              "La formacion vale de verdad cuando no se queda en consejos generales, sino que ensena a detectar que mensaje necesita cada persona y como comprobar si lo entendio."
          }
        ]
      },
      {
        id: "salidas",
        title: "Donde puede aplicarse",
        tocLabel: "Aplicacion y salidas",
        blocks: [
          {
            type: "bullets",
            items: [
              "Atencion primaria y programas de cronicidad.",
              "Hospitalizacion, altas y preparacion del autocuidado en domicilio.",
              "Salud escolar, salud laboral y programas comunitarios.",
              "Consulta especializada y educacion terapeutica en procesos concretos."
            ]
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes al plantearla",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Dar demasiada informacion en muy poco tiempo.",
              "Confundir explicar con comprobar comprension.",
              "Proponer cambios imposibles para el contexto real de la persona.",
              "No revisar despues si el mensaje sirvio o quedo en teoria."
            ]
          }
        ]
      },
      {
        id: "fuentes",
        title: "Fuentes base",
        tocLabel: "Fuentes",
        blocks: [
          {
            type: "links",
            items: [
              {
                href: "https://www.who.int/teams/health-promotion/enhanced-wellbeing",
                label: "WHO: Health promotion"
              },
              {
                href: "https://www.who.int/teams/health-workforce/nursing-and-midwifery",
                label: "WHO: Nursing and Midwifery"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/carrera-en-enfermeria/",
        chip: "Hub",
        title: "Mas carrera en enfermeria",
        description: "Especialidades, competencias y decisiones profesionales con mas contexto."
      },
      {
        href: "/enfermeria-en-salud-ocupacional/",
        chip: "Prevencion",
        title: "Enfermeria en salud ocupacional",
        description: "Otra salida donde la educacion para la salud pesa mucho en la practica diaria."
      },
      {
        href: "/competencia-cultural-en-enfermeria/",
        chip: "Comunicacion",
        title: "Competencia cultural en enfermeria",
        description: "Muy relacionada si quieres que la educacion sea comprensible y util en contextos diversos."
      }
    ]
  }),
  createArticle("auxiliar-de-enfermeria-colombia", {
    title: "Auxiliar de enfermeria en Colombia | Serenfermera",
    description:
      "Auxiliar de enfermeria en Colombia: funciones habituales, formacion, salidas laborales y puntos que hay que verificar antes de ejercer.",
    eyebrow: "Carrera en enfermeria",
    intro:
      "Cuando se habla de auxiliar de enfermeria en Colombia, conviene separar tres cosas: funciones reales del puesto, formacion exigida y reglas concretas del centro o del territorio donde se pretende trabajar. El error mas comun es mezclar informacion de distintos paises o dar por universal algo que depende de normativa, habilitacion y alcance laboral.",
    pills: ["Colombia", "Formacion", "Salidas laborales"],
    summary: [
      {
        label: "Lo primero",
        text: "Verificar siempre el marco formativo y el alcance del rol en el contexto colombiano."
      },
      {
        label: "Trabajo habitual",
        text: "Apoyo asistencial, tecnicas basicas, registro y acompanamiento segun protocolo y supervision."
      },
      {
        label: "Error frecuente",
        text: "Copiar funciones o requisitos de otros paises y asumir que aplican igual."
      }
    ],
    sections: [
      {
        id: "funciones",
        title: "Funciones habituales del auxiliar de enfermeria",
        tocLabel: "Funciones habituales",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que suele hacer", "Que exige"],
            rows: [
              [
                "Apoyo asistencial",
                "Higiene, confort, movilizacion, toma de signos y observacion basica.",
                "Seguir indicaciones, protocolos y buen registro."
              ],
              [
                "Tecnicas frecuentes",
                "Procedimientos basicos autorizados en el servicio y segun formacion.",
                "Precision, seguridad y limites claros del rol."
              ],
              [
                "Acompanamiento",
                "Orientacion basica a pacientes y familias, apoyo en consultas y continuidad.",
                "Buena comunicacion y trato respetuoso."
              ],
              [
                "Registro y organizacion",
                "Anotar hallazgos, incidencias y tareas realizadas.",
                "Rigor documental y coordinacion con el equipo."
              ]
            ]
          }
        ]
      },
      {
        id: "formacion",
        title: "Formacion y habilitacion",
        tocLabel: "Formacion y habilitacion",
        blocks: [
          {
            type: "paragraph",
            text:
              "Antes de dar algo por sentado, hay que revisar la via formativa concreta, los requisitos institucionales y la documentacion exigida por las entidades o empleadores. En Colombia no conviene responder con plantillas importadas de otros sistemas sanitarios porque cambian denominaciones, alcances y criterios de contratacion."
          },
          {
            type: "bullets",
            items: [
              "Confirmar el programa formativo y la validez de la titulacion en el contexto local.",
              "Revisar procesos de registro, soporte documental y requisitos de contratacion.",
              "Comprobar que funciones concretas permite el puesto dentro del centro o la institucion."
            ]
          }
        ]
      },
      {
        id: "salidas",
        title: "Donde puede trabajar",
        tocLabel: "Donde puede trabajar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Hospitales y clinicas.",
              "Centros ambulatorios y consulta externa.",
              "Atencion domiciliaria o continuidad de cuidados segun servicio.",
              "Programas de promocion, prevencion y apoyo comunitario donde encaje el rol."
            ]
          }
        ]
      },
      {
        id: "prudencia",
        title: "Que conviene verificar antes de dar algo por hecho",
        tocLabel: "Que verificar",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Normativa y titulacion",
                body: "No des por universal una exigencia sin revisar la fuente aplicable al contexto colombiano."
              },
              {
                title: "Funciones concretas",
                body: "El alcance real del puesto puede variar segun centro, supervision y protocolo."
              },
              {
                title: "Oferta laboral",
                tone: "warning",
                body: "Las vacantes pueden pedir requisitos adicionales que no se deducen solo del nombre del rol."
              },
              {
                title: "Contexto internacional",
                body: "Evita mezclar informacion de Espana, Mexico u otros sistemas porque crea ruido y errores."
              }
            ]
          }
        ]
      },
      {
        id: "fuente",
        title: "Fuentes base",
        tocLabel: "Fuente base",
        blocks: [
          {
            type: "links",
            items: [
              {
                href: "https://normograma.sena.edu.co/compilacion/docs/concepto_sena_0021442_2025.htm",
                label: "SENA: concepto relacionado con formacion y cualificaciones"
              },
              {
                href: "https://www.mineducacion.gov.co/1621/articles-237704_Guia29.pdf",
                label: "Ministerio de Educacion de Colombia: Guia sobre formacion para el trabajo"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/carrera-en-enfermeria/",
        chip: "Hub",
        title: "Mas carrera en enfermeria",
        description: "Salidas, perfiles y decisiones profesionales con menos topico y mas contexto."
      },
      {
        href: "/cualidades-de-una-buena-enfermera/",
        chip: "Habilidades",
        title: "Cualidades de una buena enfermera",
        description: "Muchas tambien aplican al trabajo auxiliar cuando se hacen visibles en la practica."
      },
      {
        href: "/que-es-gestion-del-cuidado-de-enfermeria/",
        chip: "Contexto",
        title: "Gestion del cuidado",
        description: "Ayuda a entender como se coordinan roles, seguimiento y continuidad dentro del sistema."
      }
    ]
  }),
  createArticle("que-es-gestion-del-cuidado-de-enfermeria", {
    title: "Que es gestion del cuidado de enfermeria | Serenfermera",
    description:
      "Que es la gestion del cuidado de enfermeria, que implica en la practica y que competencias exige.",
    eyebrow: "Carrera y gestion",
    intro:
      "La gestion del cuidado no es solo organizar tareas ni repartir turnos. Consiste en coordinar valoracion, prioridades, recursos, continuidad y decisiones para que el cuidado tenga sentido clinico y no se fragmente en acciones sueltas. Cuando se entiende mal, se vuelve burocracia; cuando se entiende bien, mejora seguridad, seguimiento y experiencia del paciente.",
    pills: ["Gestion", "Continuidad", "Criterio clinico"],
    summary: [
      {
        label: "No es solo organizar",
        text: "Tambien implica priorizar, coordinar y sostener calidad del cuidado."
      },
      {
        label: "Donde se nota",
        text: "En los relevos, en la continuidad, en el uso de recursos y en la experiencia de la persona atendida."
      },
      {
        label: "Error habitual",
        text: "Confundirla con una funcion administrativa separada del juicio clinico."
      }
    ],
    sections: [
      {
        id: "consiste",
        title: "En que consiste realmente",
        tocLabel: "En que consiste",
        blocks: [
          {
            type: "paragraph",
            text:
              "Gestionar el cuidado significa asegurar que la valoracion, las prioridades, las intervenciones, el seguimiento y la coordinacion con otros profesionales se mantengan alineados con lo que necesita la persona y con los recursos disponibles. No se limita a ordenar pendientes: organiza el sentido del cuidado."
          }
        ]
      },
      {
        id: "dimensiones",
        title: "Dimensiones principales de la gestion del cuidado",
        tocLabel: "Dimensiones",
        blocks: [
          {
            type: "table",
            columns: ["Dimension", "Que incluye", "Para que sirve"],
            rows: [
              [
                "Clinica",
                "Valoracion, priorizacion, seguimiento y reevaluacion.",
                "Mantener el cuidado conectado con la situacion real del paciente."
              ],
              [
                "Organizativa",
                "Distribucion de trabajo, tiempos, circuitos y recursos.",
                "Evitar caos, duplicidades y omisiones."
              ],
              [
                "Comunicativa",
                "Relevos, coordinacion con equipo y educacion al paciente.",
                "Sostener continuidad y reducir errores."
              ],
              [
                "Etica y de calidad",
                "Seguridad, dignidad, trazabilidad y mejora continua.",
                "Proteger decisiones coherentes y profesionalmente solidas."
              ]
            ]
          }
        ]
      },
      {
        id: "competencias",
        title: "Competencias que exige este rol",
        tocLabel: "Competencias",
        blocks: [
          {
            type: "bullets",
            items: [
              "Lectura clinica para priorizar de verdad y no por inercia.",
              "Comunicacion clara con equipo, paciente y familia.",
              "Capacidad para ordenar trabajo sin perder el sentido asistencial.",
              "Registro util, trazable y orientado a continuidad.",
              "Criterio para anticipar riesgos, cuellos de botella y necesidades de apoyo."
            ]
          }
        ]
      },
      {
        id: "practica",
        title: "Donde se nota en la practica diaria",
        tocLabel: "Practica diaria",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "En un relevo bien hecho",
                body: "La informacion clave pasa limpia y el siguiente turno no empieza desde cero."
              },
              {
                title: "En una alta preparada",
                body: "La persona entiende cuidados, medicacion, citas y senales de alarma."
              },
              {
                title: "En la coordinacion interna",
                tone: "warning",
                body: "Se detectan antes las omisiones, las cargas mal distribuidas y los riesgos previsibles."
              },
              {
                title: "En la experiencia del paciente",
                body: "El cuidado se percibe menos fragmentado y mas coherente."
              }
            ]
          }
        ]
      },
      {
        id: "errores",
        title: "Errores habituales al entenderla mal",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Reducirla a papeles, checklists o tareas administrativas sin lectura clinica.",
              "Separarla del cuidado directo como si fueran mundos distintos.",
              "Usar la palabra gestion para justificar control sin apoyo ni criterio.",
              "Olvidar que continuidad, educacion y registro tambien forman parte del cuidado."
            ]
          }
        ]
      },
      {
        id: "faq",
        title: "Preguntas frecuentes",
        tocLabel: "Preguntas frecuentes",
        blocks: [
          {
            type: "faq",
            lead: "Dudas habituales cuando se estudia o se empieza a trabajar este concepto.",
            items: [
              {
                question: "Es lo mismo que gestionar personal o turnos?",
                answer:
                  "No. Eso puede formar parte, pero la gestion del cuidado va mas alla: organiza como se sostiene el proceso asistencial de forma coherente."
              },
              {
                question: "Hace falta estar en un cargo de supervision para ejercerla?",
                answer:
                  "No del todo. Toda enfermera gestiona cuidado cuando prioriza, coordina, registra y prepara continuidad, aunque algunos puestos lo hagan a otra escala."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/supervisora-enfermeria-gestion-de-cuidados/",
        chip: "Rol",
        title: "Supervisora en gestion de cuidados",
        description: "La aplicacion del concepto cuando se asume una responsabilidad mas amplia de coordinacion."
      },
      {
        href: "/enfermeria-cuidado-integral-defiicion/",
        chip: "Integral",
        title: "Cuidado integral en enfermeria",
        description: "Gestionar bien tambien significa que el cuidado no se rompa en tareas desconectadas."
      },
      {
        href: "/carrera-en-enfermeria/",
        chip: "Hub",
        title: "Mas carrera en enfermeria",
        description: "Mas contenido sobre desarrollo profesional, roles y organizacion del trabajo."
      }
    ]
  }),
  createArticle("supervisora-enfermeria-gestion-de-cuidados", {
    title: "Supervisora de enfermeria en gestion de cuidados | Serenfermera",
    description:
      "Que hace una supervisora de enfermeria en gestion de cuidados, que responsabilidades asume y que competencias necesita.",
    eyebrow: "Carrera y liderazgo",
    intro:
      "La supervisora de enfermeria no deberia ser solo quien apaga fuegos del turno. Su papel en gestion de cuidados consiste en ordenar recursos, sostener continuidad, apoyar al equipo, detectar riesgos y convertir la organizacion diaria en cuidado seguro. Cuando funciona bien, el servicio se vuelve mas legible para profesionales y pacientes.",
    pills: ["Supervision", "Liderazgo", "Organizacion asistencial"],
    summary: [
      {
        label: "Que hace",
        text: "Coordina personas, procesos y prioridades para sostener cuidado seguro y continuo."
      },
      {
        label: "Que no deberia ser",
        text: "Una figura puramente administrativa desconectada del pulso clinico del servicio."
      },
      {
        label: "Lo que mas pesa",
        text: "Lectura de equipo, criterio, comunicacion y capacidad de anticipacion."
      }
    ],
    sections: [
      {
        id: "que-hace",
        title: "Que hace realmente una supervisora",
        tocLabel: "Que hace realmente",
        blocks: [
          {
            type: "paragraph",
            text:
              "Supervisar en gestion de cuidados implica leer como esta funcionando el servicio, redistribuir recursos cuando hace falta, detectar riesgos de continuidad y ayudar a que las decisiones del equipo no se pierdan entre urgencias, cargas desiguales y relevos pobres."
          }
        ]
      },
      {
        id: "funciones",
        title: "Funciones mas habituales",
        tocLabel: "Funciones habituales",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que suele asumir", "Impacto esperado"],
            rows: [
              [
                "Organizacion",
                "Distribucion de cargas, incidencias, flujos y recursos del turno o unidad.",
                "Evitar cuellos de botella y omisiones previsibles."
              ],
              [
                "Calidad y seguridad",
                "Seguimiento de eventos, protocolos, trazabilidad y mejora.",
                "Reforzar una practica mas segura y menos reactiva."
              ],
              [
                "Soporte al equipo",
                "Acompanamiento, feedback, resolucion de conflictos y toma de decisiones.",
                "Mejorar cohesion y claridad operativa."
              ],
              [
                "Continuidad asistencial",
                "Velar por relevos, altas, coordinacion y puntos de transicion.",
                "Reducir perdida de informacion relevante."
              ]
            ]
          }
        ]
      },
      {
        id: "competencias",
        title: "Competencias que marcan diferencia",
        tocLabel: "Competencias",
        blocks: [
          {
            type: "bullets",
            items: [
              "Liderazgo claro sin caer en control vacio o rigidez innecesaria.",
              "Capacidad para leer clima de equipo y carga asistencial real.",
              "Comunicacion breve, firme y util en momentos tensos.",
              "Criterio para priorizar seguridad y continuidad sobre lo accesorio.",
              "Vision de sistema para corregir procesos y no solo personas."
            ]
          }
        ]
      },
      {
        id: "retos",
        title: "Retos habituales del puesto",
        tocLabel: "Retos habituales",
        blocks: [
          {
            type: "bullets",
            items: [
              "Equilibrar presion asistencial con calidad del cuidado.",
              "Resolver conflictos sin deteriorar el clima del equipo.",
              "Sostener criterio comun cuando la rotacion o la fatiga son altas.",
              "Traducir indicadores y protocolos a practicas realmente utiles."
            ]
          },
          {
            type: "callout",
            title: "Punto delicado",
            body:
              "Si la supervision se separa demasiado de lo clinico, corre el riesgo de gestionar papeles mientras el cuidado real se desordena."
          }
        ]
      },
      {
        id: "encaje",
        title: "Cuando encaja bien este perfil",
        tocLabel: "Cuando encaja",
        blocks: [
          {
            type: "paragraph",
            text:
              "Encaja especialmente bien en profesionales con buena lectura de servicio, capacidad de escucha, tolerancia a la complejidad y gusto por coordinar sin perder sensibilidad asistencial. No es un puesto para quien solo quiere autoridad formal; exige mucho trabajo de criterio, mediacion y apoyo."
          }
        ]
      },
      {
        id: "faq",
        title: "Preguntas frecuentes",
        tocLabel: "Preguntas frecuentes",
        blocks: [
          {
            type: "faq",
            lead: "Dudas frecuentes sobre supervision y gestion del cuidado.",
            items: [
              {
                question: "Es un rol mas administrativo que clinico?",
                answer:
                  "Tiene carga organizativa, pero pierde valor si deja de leer el cuidado real del servicio y sus riesgos."
              },
              {
                question: "Se parece al liderazgo de turno?",
                answer:
                  "Se relaciona con el liderazgo de turno, pero suele operar a una escala mas amplia: continuidad, procesos, equipo y calidad del servicio."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/que-es-gestion-del-cuidado-de-enfermeria/",
        chip: "Concepto",
        title: "Gestion del cuidado de enfermeria",
        description: "La base para entender por que este rol va mas alla de repartir tareas."
      },
      {
        href: "/estilos-de-liderazgo-en-enfermeria/",
        chip: "Liderazgo",
        title: "Estilos de liderazgo en enfermeria",
        description: "Muy relacionada porque la supervision depende mucho de como se lidera el servicio."
      },
      {
        href: "/carrera-en-enfermeria/",
        chip: "Hub",
        title: "Mas carrera en enfermeria",
        description: "Roles, salidas y crecimiento profesional dentro del sistema enfermero."
      }
    ]
  })
];
