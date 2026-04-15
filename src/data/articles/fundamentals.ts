import type { AuthoredArticle } from "../article-types";
import { createArticle } from "./shared";

export const fundamentalsArticles: AuthoredArticle[] = [
  createArticle("datos-de-enfermeria-subjetivos-vs-objetivo", {
    title: "Datos subjetivos y objetivos en enfermeria | Serenfermera",
    description:
      "Diferencia entre datos subjetivos y objetivos en enfermeria con ejemplos claros, errores frecuentes y utilidad real en la valoracion.",
    eyebrow: "Fundamentos de enfermeria",
    intro:
      "Los datos subjetivos provienen de lo que la persona expresa; los objetivos, de lo que puedes observar, medir o verificar. Entender bien esta diferencia mejora la valoracion, el plan de cuidados, el registro y la capacidad de argumentar por que una decision enfermera tiene sentido.",
    pills: ["Valoracion", "Fundamentos", "Ejemplos claros"],
    summary: [
      {
        label: "Dato subjetivo",
        text: "Lo que la persona siente, percibe o cuenta directamente."
      },
      {
        label: "Dato objetivo",
        text: "Lo que puedes observar, medir o verificar con criterios comparables."
      },
      {
        label: "Riesgo habitual",
        text: "Confundir interpretaciones con hechos o pensar que todo numero ya es objetivo."
      }
    ],
    sections: [
      {
        id: "diferencia",
        title: "Diferencia rapida",
        tocLabel: "Diferencia",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Subjetivos",
                body:
                  "Lo que la persona cuenta, siente o refiere: dolor, mareo, cansancio, miedo o nausea."
              },
              {
                title: "Objetivos",
                tone: "warning",
                body:
                  "Lo que se observa o mide: temperatura, edema, saturacion, conducta, diuresis o estado de la herida."
              }
            ]
          },
          {
            type: "paragraph",
            text:
              "Ambos tipos de datos son necesarios. El error aparece cuando uno sustituye al otro o cuando se registran interpretaciones personales como si fueran hechos observables."
          }
        ]
      },
      {
        id: "ejemplos",
        title: "Ejemplos claros",
        tocLabel: "Ejemplos",
        blocks: [
          {
            type: "table",
            columns: ["Dato", "Tipo", "Por que"],
            rows: [
              ['"Me duele al moverme"', "Subjetivo", "Lo expresa la persona."],
              ["Dolor 7/10 en escala numerica", "Subjetivo", "Sigue siendo percepcion reportada."],
              ["Herida con exudado", "Objetivo", "Es observable."],
              ["TA 150/95 mmHg", "Objetivo", "Es medible y verificable."]
            ]
          },
          {
            type: "callout",
            title: "Un matiz importante",
            body:
              "Que un dato lleve numero no lo convierte automaticamente en objetivo. Si el numero sale del relato del paciente, sigue siendo subjetivo."
          }
        ]
      },
      {
        id: "sirve",
        title: "Por que esta diferencia importa",
        tocLabel: "Por que importa",
        blocks: [
          {
            type: "paragraph",
            text:
              "Importa porque la valoracion enfermera necesita las dos miradas: lo que el paciente vive y lo que la profesional observa. Si se mezclan mal, se empobrece el diagnostico, el plan de cuidados se vuelve impreciso y el registro pierde valor clinico y legal."
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes",
        tocLabel: "Errores",
        blocks: [
          {
            type: "bullets",
            items: [
              "Pensar que todo lo numerico es objetivo.",
              "Registrar interpretaciones personales como si fueran hechos.",
              "Olvidar que ambos tipos de datos se complementan.",
              "Dar mas valor a lo medible y minusvalorar lo que la persona refiere."
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
            lead: "Dudas comunes al aprender valoracion enfermera.",
            items: [
              {
                question: "El dolor siempre es subjetivo?",
                answer:
                  "Si, porque el dolor lo refiere la persona. Lo que puede ser objetivo son conductas o signos asociados, pero no sustituyen a la experiencia del paciente."
              },
              {
                question: "Para que sirve distinguirlos en el plan de cuidados?",
                answer:
                  "Sirve para valorar mejor, justificar el problema, escribir objetivos mas claros y evaluar despues si hubo cambios reales."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/fundamentos-de-enfermeria/",
        chip: "Hub",
        title: "Mas fundamentos de enfermeria",
        description: "Conceptos base bien explicados para escribir y valorar con mas criterio."
      },
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Metodo",
        title: "Plan de cuidados paso a paso",
        description: "La diferencia entre dato subjetivo y objetivo tiene impacto directo en esta pieza."
      },
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "Ejemplos de enfermeria SBAR",
        description: "Otro recurso para ordenar informacion sin perder utilidad clinica."
      }
    ]
  }),
  createArticle("enfermeria-cuidado-integral-defiicion", {
    title: "Cuidado integral en enfermeria: definicion y aplicacion real | Serenfermera",
    description:
      "Que es el cuidado integral en enfermeria, que dimensiones incluye, como se aplica en la practica y por que no equivale a hacer mas tareas.",
    eyebrow: "Fundamentos de enfermeria",
    intro:
      "El cuidado integral en enfermeria significa atender a la persona completa, no solo al diagnostico o al procedimiento del momento. Eso obliga a mirar estado fisico, emociones, autonomia, entorno familiar, barreras sociales y continuidad del cuidado.",
    pills: ["Persona completa", "Continuidad", "Contexto"],
    summary: [
      {
        label: "Definicion corta",
        text: "No es hacer mas tareas, sino relacionar mejor lo clinico con lo humano y lo social."
      },
      {
        label: "En que se nota",
        text: "En la valoracion, en la educacion, en el plan de cuidados y en el relevo entre turnos."
      },
      {
        label: "Error tipico",
        text: "Usar la expresion como slogan sin cambiar la forma de observar, registrar y decidir."
      }
    ],
    sections: [
      {
        id: "definicion",
        title: "Que es exactamente el cuidado integral",
        tocLabel: "Definicion",
        blocks: [
          {
            type: "paragraph",
            text:
              "En enfermeria, hablar de cuidado integral significa que la atencion no se organiza solo alrededor de la enfermedad. Se mira tambien como vive la persona, que entiende de su proceso, que limitaciones tiene, quien la apoya y que riesgos pueden aparecer cuando sale de la consulta, de la planta o del quirofano."
          },
          {
            type: "paragraph",
            text:
              "La idea conecta muy bien con el enfoque de atencion centrada en la persona: el problema clinico importa, pero no se interpreta aislado del resto de la vida del paciente."
          }
        ]
      },
      {
        id: "dimensiones",
        title: "Dimensiones que incluye",
        tocLabel: "Dimensiones",
        blocks: [
          {
            type: "table",
            columns: ["Dimension", "Que mira enfermeria", "Que cambia en la practica"],
            rows: [
              [
                "Fisica",
                "Sintomas, signos, funcionalidad, riesgos y respuesta al tratamiento.",
                "Prioriza vigilancia, alivio y seguridad."
              ],
              [
                "Emocional",
                "Miedo, ansiedad, dolor percibido, afrontamiento y carga del proceso.",
                "Modifica comunicacion, educacion y acompanamiento."
              ],
              [
                "Social",
                "Apoyo familiar, vivienda, recursos, trabajo y barreras para cuidarse.",
                "Ayuda a prever adherencia y continuidad real."
              ],
              [
                "Cognitiva",
                "Comprension, memoria, capacidad para seguir indicaciones y detectar alertas.",
                "Obliga a adaptar lenguaje y objetivos."
              ],
              [
                "Etica y personal",
                "Preferencias, valores, intimidad, autonomia y decisiones informadas.",
                "Evita un cuidado correcto en lo tecnico pero pobre en lo humano."
              ]
            ]
          }
        ]
      },
      {
        id: "aplicacion",
        title: "Como se aplica de verdad",
        tocLabel: "Aplicacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Empezando por una valoracion que no se limite a la constante o al motivo de ingreso.",
              "Preguntando que preocupa al paciente y que barreras tiene para cuidarse fuera del centro.",
              "Relacionando el plan de cuidados con objetivos que si tengan sentido para esa persona.",
              "Coordinando informacion con familia, primaria, trabajo social u otros perfiles cuando haga falta.",
              "Dejando un registro que explique no solo lo que se hizo, sino por que se priorizo asi."
            ]
          },
          {
            type: "callout",
            title: "Idea clave",
            body:
              "El cuidado integral no vuelve a la enfermera omnipresente. Lo que hace es ordenar mejor la mirada para que el cuidado sea mas coherente y menos fragmentado."
          }
        ]
      },
      {
        id: "no-es",
        title: "Lo que no deberia confundirse con cuidado integral",
        tocLabel: "Lo que no es",
        blocks: [
          {
            type: "bullets",
            items: [
              "No es acumular tareas o intervenir en todo aunque no sea prioritario.",
              "No es sustituir a otros profesionales ni desdibujar los limites del rol.",
              "No es una forma elegante de decir trato amable sin contenido clinico.",
              "No es una plantilla fija; cambia segun el servicio, el paciente y el momento asistencial."
            ]
          }
        ]
      },
      {
        id: "por-que-importa",
        title: "Por que mejora la practica",
        tocLabel: "Por que importa",
        blocks: [
          {
            type: "paragraph",
            text:
              "Cuando se trabaja con este enfoque suele mejorar la continuidad, la comprension del plan, la adherencia y la deteccion de riesgos que no se ven si solo se mira la tecnica o el dato aislado. Tambien ayuda a que la documentacion tenga mas sentido y a que el relevo entre profesionales no pierda informacion importante."
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
                href: "https://www.who.int/health-topics/integrated-people-centered-care",
                label: "WHO: Integrated people-centred care"
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
        href: "/cuidados-de-enfermeria-oms/",
        chip: "Enfoque",
        title: "Cuidados de enfermeria segun la OMS",
        description: "Una pieza muy conectada con la idea de atencion integrada y centrada en la persona."
      },
      {
        href: "/fundamentos-de-enfermeria/",
        chip: "Hub",
        title: "Mas fundamentos de enfermeria",
        description: "Conceptos base para valorar, escribir y cuidar con mas coherencia."
      },
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Metodo",
        title: "Plan de cuidados paso a paso",
        description: "El cuidado integral se aterriza de verdad cuando ordena objetivos, intervenciones y continuidad."
      }
    ]
  }),
  createArticle("cuidados-en-la-adolescencia-cto-enfermeria", {
    title: "Cuidados en la adolescencia en enfermeria: claves de valoracion y acompanamiento | Serenfermera",
    description:
      "Cuidados de enfermeria en la adolescencia: comunicacion, confidencialidad, salud mental, habitos, educacion y deteccion de riesgos.",
    eyebrow: "Fundamentos y etapa vital",
    intro:
      "La adolescencia no es una infancia grande ni una adultez incompleta. Es una etapa con cambios fisicos, emocionales y sociales intensos, y eso obliga a ajustar el modo de cuidar, de preguntar y de educar. Una buena intervencion enfermera protege salud, favorece autonomia y detecta riesgos antes de que se conviertan en problemas serios.",
    pills: ["Adolescencia", "Prevencion", "Comunicacion"],
    summary: [
      {
        label: "Lo que cambia",
        text: "Equilibrar confidencialidad, autonomia progresiva y participacion familiar."
      },
      {
        label: "No conviene hacer",
        text: "Hablar con tono infantil o reducir la educacion a sermones generales."
      },
      {
        label: "Prioridad",
        text: "Detectar riesgos de salud mental, habitos y entorno antes de que se agraven."
      }
    ],
    sections: [
      {
        id: "que-cambia",
        title: "Que cambia al cuidar adolescentes",
        tocLabel: "Que cambia",
        blocks: [
          {
            type: "paragraph",
            text:
              "La relacion asistencial exige equilibrio entre confidencialidad, participacion familiar y lenguaje claro. El adolescente necesita sentirse escuchado sin ser tratado con tono infantil, pero tambien puede requerir apoyo para expresar dudas, reconocer conductas de riesgo o seguir un plan de salud que percibe como ajeno."
          }
        ]
      },
      {
        id: "valoracion",
        title: "Aspectos que merece la pena valorar",
        tocLabel: "Valoracion",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que explorar", "Por que importa"],
            rows: [
              [
                "Salud mental",
                "Estado de animo, ansiedad, aislamiento, autolesiones, ideacion suicida.",
                "Muchos problemas comienzan o se agravan en esta etapa."
              ],
              [
                "Habitos",
                "Sueno, actividad fisica, alimentacion, pantallas y consumo.",
                "Condicionan salud actual y futura."
              ],
              [
                "Entorno",
                "Familia, escuela, amistades, violencia, acoso o apoyo social.",
                "Ayuda a entender barreras y factores protectores."
              ],
              [
                "Sexualidad y autocuidado",
                "Informacion, dudas, proteccion y acceso a recursos.",
                "Favorece decisiones mas seguras y autonomas."
              ]
            ]
          }
        ]
      },
      {
        id: "comunicacion",
        title: "Como mejora la comunicacion",
        tocLabel: "Comunicacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Presentarte con claridad y explicar que parte de la entrevista es confidencial.",
              "Usar preguntas abiertas antes de entrar en temas sensibles.",
              "Evitar juicios morales o amenazas como recurso educativo.",
              "Confirmar que ha entendido lo esencial y que sabe que hacer despues.",
              "Dar espacio para hablar sin acompanantes cuando el contexto lo permita."
            ]
          },
          {
            type: "callout",
            title: "La confidencialidad bien explicada genera confianza",
            body:
              "Muchos adolescentes responden mejor cuando saben que pueden hablar con honestidad y que solo se rompera la confidencialidad si existe un riesgo serio para su seguridad o la de otras personas."
          }
        ]
      },
      {
        id: "educacion",
        title: "Educacion para la salud que suele tener mas impacto",
        tocLabel: "Educacion",
        blocks: [
          {
            type: "paragraph",
            text:
              "Funciona mejor la educacion concreta, breve y aplicable: higiene del sueno, alimentacion realista, ejercicio, salud sexual, prevencion de consumo, manejo del estres, uso saludable de pantallas y senales de alarma en salud mental. El tono importa tanto como el contenido: informar no es sermonear."
          }
        ]
      },
      {
        id: "alarma",
        title: "Senales que merecen mas atencion",
        tocLabel: "Senales de alarma",
        blocks: [
          {
            type: "bullets",
            items: [
              "Cambio brusco de conducta o aislamiento mantenido.",
              "Autolesiones, ideacion suicida o desesperanza marcada.",
              "Perdida de peso, trastornos de la imagen corporal o atracones y purgas.",
              "Consumo de sustancias, violencia o relaciones abusivas.",
              "Falta repetida de adherencia cuando puede esconder miedo, depresion o falta de apoyo."
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
            lead: "Dudas habituales en consulta, escuela, atencion primaria y urgencias.",
            items: [
              {
                question: "Siempre hay que hablar con la familia delante?",
                answer:
                  "No necesariamente. La participacion familiar es importante, pero muchos temas requieren un espacio privado para explorar riesgos y dudas con honestidad."
              },
              {
                question: "La salud mental debe preguntarse siempre?",
                answer:
                  "Si, al menos de forma basica. El malestar emocional, la ansiedad, la depresion y el riesgo suicida no pueden dejarse para el final ni esperar a que aparezcan solos en la conversacion."
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
                href: "https://www.who.int/health-topics/adolescent-health",
                label: "WHO: Adolescent health"
              },
              {
                href: "https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health",
                label: "WHO: Mental health of adolescents"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/fundamentos-de-enfermeria/",
        chip: "Hub",
        title: "Mas fundamentos de enfermeria",
        description: "Conceptos y piezas base para valorar mejor etapas vitales y necesidades reales."
      },
      {
        href: "/enfermeria-cuidado-integral-defiicion/",
        chip: "Integral",
        title: "Cuidado integral en enfermeria",
        description: "Muy conectado con una etapa donde contexto, autonomia y entorno cambian mucho el cuidado."
      },
      {
        href: "/cuidados-de-enfermeria-oms/",
        chip: "Persona",
        title: "Cuidados de enfermeria segun la OMS",
        description: "Otra forma de reforzar una atencion mas centrada en la persona y menos fragmentada."
      }
    ]
  }),
  createArticle("actividades-de-enfermeria-en-centro-de-salud", {
    title: "Actividades de enfermeria en centro de salud | Serenfermera",
    description:
      "Actividades de enfermeria en centro de salud: promocion, prevencion, seguimiento, educacion sanitaria, curas, triaje y trabajo comunitario.",
    eyebrow: "Atencion primaria",
    intro:
      "En un centro de salud, la enfermeria hace mucho mas que una cura puntual o una vacuna. Trabaja en prevencion, seguimiento de cronicidad, educacion sanitaria, atencion familiar, visitas domiciliarias y coordinacion con otros perfiles para sostener continuidad real, no solo resolver consultas sueltas.",
    pills: ["Atencion primaria", "Promocion y prevencion", "Trabajo comunitario"],
    summary: [
      {
        label: "Lo que aporta",
        text: "Contacto sostenido con la poblacion y capacidad para detectar problemas antes."
      },
      {
        label: "Error comun",
        text: "Reducir la consulta enfermera de primaria a tecnicas y tareas visibles."
      },
      {
        label: "Clave practica",
        text: "Combinar asistencia directa, seguimiento, educacion y coordinacion."
      }
    ],
    sections: [
      {
        id: "papel",
        title: "El papel de enfermeria en un centro de salud",
        tocLabel: "Papel en primaria",
        blocks: [
          {
            type: "paragraph",
            text:
              "La enfermera de atencion primaria suele ser uno de los profesionales con mas contacto sostenido con la poblacion. Eso permite detectar problemas antes, acompanar procesos largos y trabajar no solo sobre la enfermedad, sino tambien sobre habitos, entorno y adherencia."
          },
          {
            type: "paragraph",
            text:
              "Por eso el trabajo combina asistencia directa, seguimiento, educacion y coordinacion. Una buena consulta de enfermeria en primaria puede ahorrar complicaciones, mejorar autonomia y reducir visitas evitables a urgencias."
          }
        ]
      },
      {
        id: "actividades",
        title: "Actividades mas habituales",
        tocLabel: "Actividades",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que hace enfermeria", "Para que sirve"],
            rows: [
              [
                "Promocion de la salud",
                "Consejo sanitario, talleres, educacion en autocuidado y habitos saludables.",
                "Prevenir enfermedad y mejorar capacidad de autocuidado."
              ],
              [
                "Prevencion",
                "Vacunacion, cribados, control de factores de riesgo y deteccion precoz.",
                "Actuar antes de que aparezcan complicaciones."
              ],
              [
                "Cronicidad",
                "Seguimiento de diabetes, hipertension, EPOC, adherencia y educacion terapeutica.",
                "Mejorar control clinico y continuidad asistencial."
              ],
              [
                "Tecnicas y curas",
                "Curas, extracciones, control de constantes, medicacion y procedimientos del centro.",
                "Resolver necesidades asistenciales frecuentes."
              ],
              [
                "Atencion familiar y comunitaria",
                "Visitas domiciliarias, apoyo a cuidadores y coordinacion con recursos del entorno.",
                "Adaptar el cuidado a la realidad social y familiar."
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
              "Escuchar bien y detectar la necesidad real de la persona, no solo el motivo literal de consulta.",
              "Explicar con lenguaje claro y comprobar que la informacion se ha entendido.",
              "Priorizar segun riesgo, seguimiento y capacidad de autocuidado.",
              "Registrar con criterio para que el resto del equipo pueda continuar el proceso.",
              "Coordinarse con medicina, trabajo social, pediatria, matrona y recursos comunitarios."
            ]
          }
        ]
      },
      {
        id: "realidad",
        title: "La parte menos visible del trabajo",
        tocLabel: "Trabajo real",
        blocks: [
          {
            type: "paragraph",
            text:
              "Mucha gente asocia el centro de salud a tareas concretas, como poner vacunas o hacer curas, pero una parte importante del valor enfermero esta en el seguimiento longitudinal. Ahí se detectan cambios pequenos, barreras para el tratamiento y senales de que un problema va a complicarse si nadie lo acompana."
          },
          {
            type: "callout",
            title: "Lo invisible suele ser lo que mas sostiene",
            body:
              "Cuando primaria funciona bien, muchas complicaciones no llegan a ocurrir. Ese impacto cuesta verlo porque precisamente evita ruido y visitas evitables."
          }
        ]
      },
      {
        id: "fuente",
        title: "Fuente base",
        tocLabel: "Fuente base",
        blocks: [
          {
            type: "links",
            items: [
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
        href: "/fundamentos-de-enfermeria/",
        chip: "Hub",
        title: "Mas fundamentos de enfermeria",
        description: "Conceptos y contextos base para entender el trabajo enfermero mas alla de una tarea."
      },
      {
        href: "/educacion-para-la-salud-en-enfermeria-formacion/",
        chip: "Educacion",
        title: "Educacion para la salud",
        description: "Una de las actividades mas importantes dentro de la consulta enfermera en primaria."
      },
      {
        href: "/enfermeria-cuidado-integral-defiicion/",
        chip: "Integral",
        title: "Cuidado integral en enfermeria",
        description: "Muy relacionada porque primaria obliga a mirar sintomas, entorno, autocuidado y continuidad."
      }
    ]
  }),
  createArticle("proceso-salud-enfermedad-en-enfermeria", {
    title: "Proceso salud enfermedad en enfermeria | Serenfermera",
    description:
      "Que es el proceso salud enfermedad en enfermeria, como se interpreta y por que importa en la valoracion y el cuidado.",
    eyebrow: "Fundamentos de enfermeria",
    intro:
      "Hablar de proceso salud enfermedad en enfermeria obliga a dejar de mirar la enfermedad como un hecho aislado. La persona no enferma fuera de su historia, su entorno, sus recursos, sus habitos o sus barreras. Este concepto sirve para ampliar la valoracion y para entender por que el cuidado no deberia reducirse al diagnostico o al procedimiento del momento.",
    pills: ["Concepto base", "Valoracion", "Contexto"],
    summary: [
      {
        label: "Que recuerda",
        text: "La salud y la enfermedad forman parte de un proceso, no de una foto fija."
      },
      {
        label: "Que cambia",
        text: "Obliga a valorar persona, entorno, riesgos y recursos, no solo el sintoma."
      },
      {
        label: "Confusion frecuente",
        text: "Pensar que es teoria abstracta sin impacto en la practica clinica."
      }
    ],
    sections: [
      {
        id: "significa",
        title: "Que significa este concepto",
        tocLabel: "Que significa",
        blocks: [
          {
            type: "paragraph",
            text:
              "El proceso salud enfermedad plantea que el estado de salud cambia a lo largo del tiempo y esta influido por factores biologicos, emocionales, sociales, culturales y ambientales. La enfermedad no aparece en un vacio; se expresa en una persona concreta y en un contexto concreto."
          }
        ]
      },
      {
        id: "valoracion",
        title: "Como se aplica en la valoracion enfermera",
        tocLabel: "Como se aplica",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que conviene explorar", "Por que ayuda"],
            rows: [
              [
                "Situacion clinica",
                "Sintomas, signos, evolucion y riesgos inmediatos.",
                "Aporta la base asistencial del problema."
              ],
              [
                "Habitos y autocuidado",
                "Alimentacion, sueno, actividad, adherencia y capacidad funcional.",
                "Explica parte del mantenimiento o del deterioro."
              ],
              [
                "Entorno y apoyo",
                "Familia, vivienda, recursos, trabajo y barreras sociales.",
                "Condiciona continuidad y viabilidad del plan."
              ],
              [
                "Vivencia subjetiva",
                "Miedo, creencias, comprension y forma de interpretar lo que pasa.",
                "Ajusta comunicacion, educacion y acompanamiento."
              ]
            ]
          }
        ]
      },
      {
        id: "importancia",
        title: "Por que es importante en enfermeria",
        tocLabel: "Por que importa",
        blocks: [
          {
            type: "paragraph",
            text:
              "Importa porque la enfermeria trabaja mucho en transiciones: prevencion, inicio del problema, hospitalizacion, alta, cronicidad, deterioro funcional o recuperacion. Mirar el proceso ayuda a anticipar mejor y a no tratar solo el episodio agudo como si fuera toda la historia."
          },
          {
            type: "callout",
            title: "La idea practica",
            body:
              "Cuanto mejor entiendes el proceso, mejor eliges que vigilar, que educar y que apoyar para que el cuidado tenga continuidad."
          }
        ]
      },
      {
        id: "ejemplo",
        title: "Ejemplo de aplicacion practica",
        tocLabel: "Ejemplo",
        blocks: [
          {
            type: "paragraph",
            text:
              "Dos personas con la misma hiperglucemia pueden necesitar planes distintos. Una puede tener red familiar, experiencia en autocuidado y acceso a seguimiento. Otra puede vivir sola, no entender bien el tratamiento y tener barreras economicas. El dato clinico se parece, pero el proceso salud enfermedad no es el mismo y el cuidado tampoco deberia serlo."
          }
        ]
      },
      {
        id: "confusiones",
        title: "Confusiones frecuentes",
        tocLabel: "Confusiones frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Pensar que el concepto solo sirve para examenes y no para valorar mejor.",
              "Reducirlo a una definicion teorica sin relacion con la practica diaria.",
              "Hablar de contexto pero luego decidir igual para todos los pacientes."
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
            lead: "Dudas habituales al estudiar fundamentos y modelos de valoracion.",
            items: [
              {
                question: "Tiene relacion con el cuidado integral?",
                answer:
                  "Si. Ambos enfoques obligan a mirar mas alla del sintoma o del procedimiento aislado."
              },
              {
                question: "Sirve tambien en urgencias?",
                answer:
                  "Si, aunque el tiempo sea corto. Incluso en urgencias, entender contexto y barreras cambia decisiones de educacion, alta y seguimiento."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/fundamentos-de-enfermeria/",
        chip: "Hub",
        title: "Mas fundamentos de enfermeria",
        description: "Conceptos base para valorar mejor y cuidar con menos reduccionismo."
      },
      {
        href: "/enfermeria-cuidado-integral-defiicion/",
        chip: "Integral",
        title: "Cuidado integral en enfermeria",
        description: "Muy conectada con la idea de persona completa y continuidad del cuidado."
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        chip: "Valoracion",
        title: "Datos subjetivos y objetivos",
        description: "Otra base importante para no perder la complejidad del proceso al registrar."
      }
    ]
  })
];
