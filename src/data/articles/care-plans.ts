import type { AuthoredArticle } from "../article-types";
import { createArticle } from "./shared";

export const carePlanArticles: AuthoredArticle[] = [
  createArticle("plan-de-cuidados-enfermeria-ejemplopaso-a-paso", {
    title: "Como hacer un plan de cuidados de enfermeria paso a paso | Serenfermera",
    description:
      "Plan de cuidados de enfermeria explicado paso a paso: valoracion, diagnostico, objetivos, intervenciones, evaluacion y ejemplo final.",
    eyebrow: "Planes de cuidados",
    intro:
      "Un buen plan de cuidados no es una plantilla llena de frases hechas: es una secuencia logica que parte de una valoracion clara, define problemas relevantes, fija objetivos concretos y deja intervenciones y criterios de evaluacion faciles de seguir.",
    pills: ["Lectura: 9 min", "Util para estudio y practica", "Con ejemplo resumido"],
    summary: [
      {
        label: "Punto de partida",
        text: "Sin una valoracion buena, el resto del plan se vuelve confuso o forzado."
      },
      {
        label: "Error frecuente",
        text: "Escribir objetivos vagos y repetir intervenciones sin relacion con el problema."
      },
      {
        label: "Meta",
        text: "Que cualquiera del equipo entienda que pasa, que se busca y como medir progreso."
      }
    ],
    sections: [
      {
        id: "pasos",
        title: "Los 5 pasos que ordenan todo",
        tocLabel: "Los 5 pasos",
        blocks: [
          {
            type: "table",
            columns: ["Paso", "Que haces", "Pregunta util"],
            rows: [
              [
                "Valoracion",
                "Recoger datos subjetivos y objetivos, contexto y prioridades.",
                "Que le pasa a esta persona y que me falta por saber."
              ],
              [
                "Diagnostico",
                "Nombrar el problema o respuesta humana relevante.",
                "Cual es el foco del cuidado ahora mismo."
              ],
              [
                "Objetivos",
                "Definir que cambio esperas observar en un tiempo razonable.",
                "Como sabre que la persona mejora o se estabiliza."
              ],
              [
                "Intervenciones",
                "Elegir acciones proporcionadas al problema y al contexto.",
                "Que voy a hacer y por que eso ayuda."
              ],
              [
                "Evaluacion",
                "Comprobar resultados y ajustar el plan si no funciona.",
                "Que ha cambiado y que debo modificar."
              ]
            ]
          }
        ]
      },
      {
        id: "valoracion",
        title: "1. Valoracion: donde se gana o se pierde el plan",
        tocLabel: "Valoracion",
        blocks: [
          {
            type: "paragraph",
            text:
              "La valoracion no es acumular datos porque si. Debe recoger aquello que explica el problema: sintomas, signos, funcionalidad, riesgos, apoyo familiar, capacidad de autocuidado, antecedentes y respuesta al tratamiento. Cuanto mas clara sea la fotografia inicial, mas facil sera escribir un plan coherente."
          }
        ]
      },
      {
        id: "objetivos",
        title: "2. Objetivos e intervenciones que realmente encajan",
        tocLabel: "Objetivos",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Objetivo malo",
                body: "Mejorar estado general."
              },
              {
                title: "Objetivo mejor",
                tone: "warning",
                body:
                  "La persona referira dolor menor de 3 sobre 10 y tolerara movilizacion basica en 24 horas."
              }
            ]
          },
          {
            type: "paragraph",
            text:
              "Las intervenciones deben guardar relacion directa con el objetivo. Si escribes tres paginas de acciones que no ayudan a medir avance, el plan pierde valor practico y docente."
          }
        ]
      },
      {
        id: "ejemplo",
        title: "3. Mini ejemplo resumido",
        tocLabel: "Mini ejemplo",
        blocks: [
          {
            type: "callout",
            title: "Situacion",
            body: "Paciente en postoperatorio inmediato con dolor, movilidad limitada y ansiedad."
          },
          {
            type: "bullets",
            items: [
              "Valoracion: dolor 7/10, rigidez al movilizarse, verbaliza miedo, constantes estables.",
              "Objetivo: reducir dolor, facilitar movilizacion segura y mejorar comprension del proceso.",
              "Intervenciones: valorar dolor con escala, administrar segun pauta, posicionar, educar y reevaluar.",
              "Evaluacion: dolor 3/10 tras intervencion, coopera mejor y verbaliza menos miedo."
            ]
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Copiar planes genericos sin mirar a la persona real.",
              "Confundir datos con diagnosticos.",
              "Escribir objetivos que no se pueden medir.",
              "No reevaluar el plan cuando cambia la situacion clinica."
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/planes-de-cuidados/",
        chip: "Hub",
        title: "Mas planes de cuidados",
        description: "Valoracion, objetivos e intervenciones sin convertir el metodo en relleno."
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        chip: "Fundamentos",
        title: "Datos subjetivos vs objetivos",
        description: "La base que sostiene una valoracion coherente antes de diagnosticar nada."
      },
      {
        href: "/cronograma-modelos-de-cuidados-enfermeria/",
        chip: "Recurso",
        title: "Cronograma de modelos de cuidados",
        description: "Un apoyo rapido para ordenar teoria y estudio."
      }
    ]
  }),
  createArticle("planes-de-cuidado-de-enfermeria-en-pediatria", {
    title: "Planes de cuidados de enfermeria en pediatria | Serenfermera",
    description:
      "Como plantear planes de cuidados de enfermeria en pediatria con valoracion por edad, familia, objetivos realistas e intervenciones utiles.",
    eyebrow: "Planes de cuidados",
    intro:
      "En pediatria, el plan de cuidados no se centra solo en el nino. Tambien integra a la familia, la etapa del desarrollo, la tolerancia a procedimientos, la comunicacion y la continuidad del cuidado fuera del entorno asistencial. Eso obliga a escribir objetivos y acciones mucho mas ajustados que en un plan generico de adulto.",
    pills: ["Pediatria", "Valoracion por edad", "Familia"],
    summary: [
      {
        label: "Que cambia",
        text: "La edad, el desarrollo y la familia condicionan valoracion, objetivos e intervenciones."
      },
      {
        label: "Error comun",
        text: "Copiar un plan de adulto sin adaptar contexto, expresion del malestar ni continuidad en casa."
      },
      {
        label: "Clave real",
        text: "Si la familia no entiende o no puede sostener cuidados, el plan sigue incompleto."
      }
    ],
    sections: [
      {
        id: "cambia",
        title: "Que cambia respecto a un plan general",
        tocLabel: "Que cambia",
        blocks: [
          {
            type: "bullets",
            items: [
              "La edad y el desarrollo condicionan signos, expresion del malestar y cooperacion.",
              "La familia forma parte del cuidado y de la educacion sanitaria.",
              "Los objetivos deben ser realistas para el contexto pediatrico y para el entorno de casa.",
              "El miedo al procedimiento, la separacion y el juego tambien influyen en la respuesta."
            ]
          }
        ]
      },
      {
        id: "estructura",
        title: "Estructura practica",
        tocLabel: "Estructura",
        blocks: [
          {
            type: "table",
            columns: ["Paso", "En que fijarte", "Pregunta util"],
            rows: [
              [
                "Valoracion",
                "Edad, dolor, hidratacion, conducta, sueno, apoyo familiar.",
                "Que necesita este nino y que puede sostener la familia."
              ],
              [
                "Objetivos",
                "Concretos, observables y ajustados al tiempo y a la etapa.",
                "Que mejora visible espero ver."
              ],
              [
                "Intervenciones",
                "Confort, informacion a familia, vigilancia y apoyo emocional.",
                "Que ayuda de forma realista."
              ],
              [
                "Evaluacion",
                "Respuesta del nino y capacidad de la familia para continuar cuidados.",
                "Que ha cambiado y que necesita ajuste."
              ]
            ]
          },
          {
            type: "callout",
            title: "La familia no es un anexo",
            body:
              "En muchos planes pediatricos, parte del resultado depende de que la familia entienda indicaciones, detecte senales de alarma y se sienta capaz de seguir el cuidado en casa."
          }
        ]
      },
      {
        id: "ejemplo",
        title: "Ejemplo rapido de plan",
        tocLabel: "Ejemplo",
        blocks: [
          {
            type: "paragraph",
            text:
              "Nino en postoperatorio con dolor, temor a movilizarse y familia ansiosa. Un plan util incluiria valoracion del dolor adaptada a la edad, medidas de confort, educacion breve a la familia, observacion de tolerancia a la movilizacion y reevaluacion tras cada intervencion. Si el nino mejora pero la familia sigue sin comprender el alta, el plan aun no esta completo."
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes al escribirlo",
        tocLabel: "Errores",
        blocks: [
          {
            type: "bullets",
            items: [
              "Copiar objetivos de adulto sin adaptar desarrollo y contexto.",
              "Olvidar que la familia necesita intervenciones concretas de educacion.",
              "Valorar solo lo fisico y dejar fuera miedo, juego, sueno o conducta.",
              "Usar palabras muy generales que luego no permiten evaluar nada."
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
            lead: "Dudas habituales al plantear planes pediatricos.",
            items: [
              {
                question: "Un plan pediatrico siempre debe incluir a la familia?",
                answer:
                  "Casi siempre si, porque la familia influye en la comprension del tratamiento, en el confort del nino y en la continuidad del cuidado al alta."
              },
              {
                question: "Que suele costar mas al evaluarlo?",
                answer:
                  "Traducir la respuesta del nino y el grado de autonomia de la familia en criterios observables. Por eso ayuda que los objetivos se escriban de forma muy concreta."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Base",
        title: "Plan de cuidados paso a paso",
        description: "La estructura general que luego se adapta al contexto pediatrico."
      },
      {
        href: "/cronograma-modelos-de-cuidados-enfermeria/",
        chip: "Estudio",
        title: "Cronograma de modelos de cuidados",
        description: "Util para fijar teoria y conectar modelos con el proceso enfermero."
      },
      {
        href: "/planes-de-cuidados/",
        chip: "Hub",
        title: "Mas planes de cuidados",
        description: "Valoracion, objetivos e intervenciones para distintos contextos clinicos."
      }
    ]
  }),
  createArticle("cronograma-modelos-de-cuidados-enfermeria", {
    title: "Cronograma de los modelos de cuidados en enfermeria | Serenfermera",
    description:
      "Cronograma claro de modelos y teorias de cuidados en enfermeria para estudiar autoras, ideas clave y relacionarlas con la practica.",
    eyebrow: "Recursos y estudio",
    intro:
      "Entender los modelos de cuidados se vuelve mucho mas facil cuando se ordenan cronologicamente y se resumen por idea central. Este recurso ayuda a situar autoras, reconocer diferencias y recordar para que sirve cada enfoque en la practica o en el estudio.",
    pills: ["Modelos teoricos", "Estudio", "Vision historica"],
    summary: [
      {
        label: "Sirve para",
        text: "Tener un mapa mental rapido de autoras, enfoques y utilidad practica."
      },
      {
        label: "Error tipico",
        text: "Intentar memorizar nombres sueltos sin asociarlos a una pregunta central."
      },
      {
        label: "Lo que ayuda mas",
        text: "Relacionar cada modelo con una idea simple y un ejemplo clinico o de plan."
      }
    ],
    sections: [
      {
        id: "cronograma",
        title: "Cronograma resumido",
        tocLabel: "Cronograma",
        blocks: [
          {
            type: "table",
            columns: ["Autora", "Periodo aproximado", "Idea clave"],
            rows: [
              [
                "Virginia Henderson",
                "Mitad del siglo XX",
                "Necesidades basicas y ayuda para ganar independencia."
              ],
              [
                "Dorothea Orem",
                "Mitad y final del siglo XX",
                "Autocuidado y sistemas de ayuda enfermera."
              ],
              [
                "Callista Roy",
                "Final del siglo XX",
                "Adaptacion como eje de la respuesta humana."
              ],
              [
                "Martha Rogers",
                "Final del siglo XX",
                "Vision holistica del ser humano y su entorno."
              ],
              [
                "Betty Neuman",
                "Final del siglo XX",
                "Sistema abierto, estresores y lineas de defensa."
              ],
              [
                "Otras teoricas contemporaneas",
                "Final del siglo XX y siglo XXI",
                "Profundizacion en persona, entorno, proceso y cuidado."
              ]
            ]
          }
        ]
      },
      {
        id: "leer",
        title: "Como leer este cronograma sin liarte",
        tocLabel: "Como leerlo",
        blocks: [
          {
            type: "paragraph",
            text:
              "Lo util no es memorizar listas de nombres, sino asociar cada modelo a una pregunta central. Henderson ayuda a pensar en necesidades basicas; Orem en autocuidado; Roy en adaptacion; Neuman en estresores y proteccion. Cuando haces esa relacion, estudiar deja de ser recitar apellidos y fechas."
          },
          {
            type: "callout",
            title: "Un truco que funciona",
            body:
              "Relaciona cada autora con una idea muy simple y con un ejemplo clinico. Esa combinacion se recuerda mucho mejor que una definicion literal."
          }
        ]
      },
      {
        id: "estudio",
        title: "Como estudiarlo mejor",
        tocLabel: "Como estudiarlo",
        blocks: [
          {
            type: "bullets",
            items: [
              "Asocia cada autora a una pregunta central, no a parrafos enteros.",
              "Relaciona teoria con un ejemplo de practica o de plan de cuidados.",
              "Agrupa modelos por similitudes para no memorizarlo todo de golpe.",
              "Vuelve despues a las diferencias finas cuando ya tengas el mapa general."
            ]
          }
        ]
      },
      {
        id: "uso",
        title: "Por que sigue sirviendo hoy",
        tocLabel: "Por que sirve",
        blocks: [
          {
            type: "paragraph",
            text:
              "Los modelos no se usan siempre de forma explicita en cada turno, pero ayudan a ordenar la valoracion, la mirada sobre la persona y la forma de justificar intervenciones. Entenderlos mejora la base del proceso enfermero, aunque luego el trabajo diario sea mucho mas practico que teorico."
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
            lead: "Dudas habituales al estudiar teoricas y modelos de cuidados.",
            items: [
              {
                question: "Hace falta memorizar todas las autoras con detalle?",
                answer:
                  "No siempre. Primero ayuda construir un mapa general con las principales y sus ideas centrales, y solo despues bajar a matices si el examen o la asignatura lo exige."
              },
              {
                question: "Sirven para la practica real o solo para estudiar?",
                answer:
                  "Sirven para ambas cosas. Aunque en planta no se nombren todo el tiempo, ayudan a pensar mejor la valoracion, el autocuidado, la adaptacion o las necesidades del paciente."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/planes-de-cuidados/",
        chip: "Hub",
        title: "Mas planes de cuidados",
        description: "Teoria y practica para pasar del concepto al plan bien escrito."
      },
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Metodo",
        title: "Plan de cuidados paso a paso",
        description: "Un buen complemento para conectar modelos teoricos con escritura clinica real."
      },
      {
        href: "/fundamentos-de-enfermeria/",
        chip: "Fundamentos",
        title: "Fundamentos de enfermeria",
        description: "Mas piezas para fijar teoria sin perder utilidad practica."
      }
    ]
  }),
  createArticle("plan-de-cuidados-enfermeria-duelo", {
    title: "Plan de cuidados de enfermeria en duelo | Serenfermera",
    description:
      "Plan de cuidados de enfermeria en duelo: valoracion, objetivos, intervenciones, apoyo emocional, educacion y signos de alarma.",
    eyebrow: "Planes de cuidados",
    intro:
      "El duelo no se cuida como si fuera una lista fija de fases. El trabajo enfermero consiste en valorar como esta viviendo la perdida la persona, detectar necesidades de apoyo, facilitar expresion emocional, sostener el autocuidado basico y reconocer cuando la situacion deja de ser un proceso esperable y necesita escalada clinica.",
    pills: ["Apoyo emocional", "Valoracion individual", "Escalada si hay riesgo"],
    summary: [
      {
        label: "Primero",
        text: "Valorar tipo de perdida, red de apoyo, impacto funcional y antecedentes de riesgo."
      },
      {
        label: "Objetivo realista",
        text: "Acompanar sin invadir y ayudar a sostener expresion emocional y autocuidado."
      },
      {
        label: "Cuando escalar",
        text: "Ideas de muerte, incapacidad marcada o deterioro progresivo exigen otro nivel de ayuda."
      }
    ],
    sections: [
      {
        id: "valoracion",
        title: "Que valorar primero",
        tocLabel: "Valoracion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Tipo de perdida, momento en que ocurre y red de apoyo disponible.",
              "Estado emocional, expresion del dolor, bloqueo, culpa o desesperanza intensa.",
              "Sueno, apetito, autocuidado y capacidad para actividades basicas.",
              "Antecedentes de ansiedad, depresion, consumo o riesgo autolesivo.",
              "Necesidades espirituales, culturales o familiares relevantes para la persona."
            ]
          }
        ]
      },
      {
        id: "objetivos",
        title: "Objetivos realistas del plan",
        tocLabel: "Objetivos",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Favorecer expresion emocional",
                body: "Que la persona pueda hablar, callar o preguntar sin sentirse juzgada."
              },
              {
                title: "Sostener el autocuidado",
                body: "Descanso, hidratacion, alimentacion y apoyo basico en un momento de alta carga."
              },
              {
                title: "Detectar riesgo",
                tone: "warning",
                body: "Identificar signos que obligan a derivacion o intervencion urgente."
              },
              {
                title: "Orientar recursos",
                body: "Conectar con familia, apoyo comunitario o atencion especializada cuando haga falta."
              }
            ]
          }
        ]
      },
      {
        id: "intervenciones",
        title: "Intervenciones de enfermeria que suelen ayudar",
        tocLabel: "Intervenciones",
        blocks: [
          {
            type: "bullets",
            items: [
              "Escuchar de forma activa sin precipitar consejos ni frases hechas.",
              "Validar emociones sin imponer una manera correcta de vivir la perdida.",
              "Explicar que el duelo puede expresarse con sintomas emocionales, fisicos y cognitivos.",
              "Favorecer apoyo familiar o social cuando la persona lo desea.",
              "Reforzar descanso, hidratacion y seguimiento si aparece deterioro funcional.",
              "Registrar cambios relevantes y avisar al equipo si la situacion se complica."
            ]
          }
        ]
      },
      {
        id: "alerta",
        title: "Senales de alarma que requieren escalada",
        tocLabel: "Senales de alarma",
        blocks: [
          {
            type: "paragraph",
            text:
              "Aunque el duelo es una respuesta humana esperable, no todo malestar entra dentro de una evolucion segura. Conviene pedir valoracion clinica o apoyo urgente si aparecen ideas de muerte, riesgo autolesivo, incapacidad marcada para el autocuidado, aislamiento extremo, consumo descontrolado o sintomas que empeoran sin red de apoyo."
          },
          {
            type: "callout",
            title: "Importante",
            tone: "alert",
            body:
              "Si hay riesgo inmediato para la seguridad de la persona, la prioridad deja de ser el acompanamiento general y pasa a ser la activacion de ayuda urgente segun el circuito del centro o del sistema sanitario."
          }
        ]
      },
      {
        id: "fuente",
        title: "Fuentes base",
        tocLabel: "Fuentes",
        blocks: [
          {
            type: "links",
            items: [
              {
                href: "https://medlineplus.gov/ency/article/001530.htm",
                label: "MedlinePlus: Grief"
              },
              {
                href: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-loss/",
                label: "NHS: Grief after bereavement or loss"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/planes-de-cuidados/",
        chip: "Hub",
        title: "Mas planes de cuidados",
        description: "Otros planes para ordenar valoracion, objetivos y seguimiento sin relleno."
      },
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Metodo",
        title: "Plan de cuidados paso a paso",
        description: "La estructura general para convertir un problema complejo en un plan claro."
      },
      {
        href: "/protocolo-cuidados-paliativos-enfermeria/",
        chip: "Continuidad",
        title: "Cuidados paliativos en enfermeria",
        description: "Complementa el acompanamiento cuando la perdida o el final de vida forman parte del contexto."
      }
    ]
  }),
  createArticle("como-hacer-una-hoja-de-cuidados-de-enfermeria", {
    title: "Como hacer una hoja de cuidados de enfermeria | Serenfermera",
    description:
      "Guia practica para elaborar una hoja de cuidados de enfermeria clara, util y ordenada, con campos clave y errores frecuentes.",
    eyebrow: "Planes de cuidados",
    intro:
      "Una hoja de cuidados sirve cuando ayuda a ver rapido que le pasa a la persona, que se esta vigilando, que se ha hecho y que no deberia perderse en el siguiente turno. Si se llena de frases genericas o de texto que nadie puede usar, deja de ser una herramienta y se vuelve decorado.",
    pills: ["Registro clinico", "Utilidad real", "Plantilla clara"],
    summary: [
      {
        label: "Objetivo",
        text: "Dejar una vision util del cuidado, no un texto largo y poco accionable."
      },
      {
        label: "Lo minimo",
        text: "Problemas clave, vigilancia, intervenciones, respuesta y pendientes."
      },
      {
        label: "Error frecuente",
        text: "Confundir orden con relleno y escribir demasiado sin dejar nada claro."
      }
    ],
    sections: [
      {
        id: "estructura",
        title: "Estructura minima que suele funcionar",
        tocLabel: "Estructura minima",
        blocks: [
          {
            type: "table",
            columns: ["Campo", "Que conviene incluir", "Para que sirve"],
            rows: [
              [
                "Identificacion y contexto",
                "Paciente, situacion clinica resumida y motivo de seguimiento.",
                "Ubicar rapido el caso."
              ],
              [
                "Problemas o focos",
                "Que preocupa hoy y que se esta vigilando.",
                "Evitar que lo relevante se diluya."
              ],
              [
                "Intervenciones",
                "Cuidados realizados o programados con sentido clinico.",
                "Dar continuidad real al trabajo."
              ],
              [
                "Respuesta y reevaluacion",
                "Que cambio, que no funciono y que se mantiene igual.",
                "Medir si el plan sirve."
              ],
              [
                "Pendientes y alertas",
                "Lo que debe vigilar el siguiente turno o el equipo.",
                "Reducir perdidas de informacion."
              ]
            ]
          }
        ]
      },
      {
        id: "pasos",
        title: "Pasos para elaborarla sin complicarla de mas",
        tocLabel: "Pasos",
        blocks: [
          {
            type: "bullets",
            items: [
              "Partir de una valoracion real y no de una plantilla ya escrita.",
              "Seleccionar solo los problemas o focos que importan de verdad hoy.",
              "Escribir intervenciones concretas y observables, no frases vacias.",
              "Anotar la respuesta del paciente y las dudas que siguen abiertas.",
              "Cerrar con pendientes utiles para la continuidad."
            ]
          },
          {
            type: "callout",
            title: "Regla practica",
            body:
              "Si otra enfermera no entiende en un minuto que pasa y que debe vigilar, la hoja aun no esta bien resuelta."
          }
        ]
      },
      {
        id: "ejemplo",
        title: "Ejemplo muy simple de redaccion util",
        tocLabel: "Ejemplo",
        blocks: [
          {
            type: "callout",
            title: "Ejemplo breve",
            body:
              "Postoperatorio inmediato. Focos: dolor, sangrado escaso, deambulacion inicial. Intervenciones: control de constantes, analgesia segun pauta, ayuda para sentarse y caminar, vigilancia de herida. Respuesta: dolor baja de 7 a 3 sobre 10, tolera sedestacion, sin cambios en herida. Pendiente: reevaluar tolerancia a la marcha y control del sangrado en siguiente turno."
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Copiar hojas antiguas sin adaptarlas al paciente real.",
              "Llenar de texto irrelevante y esconder lo importante.",
              "No dejar claro que se ha reevaluado y que resultado hubo.",
              "Escribir pendientes vagos que no orientan ninguna accion."
            ]
          }
        ]
      },
      {
        id: "uso",
        title: "Cuando una hoja esta bien hecha",
        tocLabel: "Cuando funciona",
        blocks: [
          {
            type: "paragraph",
            text:
              "Funciona cuando facilita trabajar mejor, no cuando impresiona por lo completa que parece. Una buena hoja ahorra preguntas innecesarias, mejora relevos y deja criterio clinico visible sin convertir el cuidado en literatura."
          }
        ]
      }
    ],
    related: [
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Base",
        title: "Plan de cuidados paso a paso",
        description: "La estructura general de la que sale una hoja util y no solo formalmente correcta."
      },
      {
        href: "/evaluacion-del-plan-de-cuidados-de-enfermeria/",
        chip: "Evaluacion",
        title: "Evaluacion del plan de cuidados",
        description: "Muy relacionada porque una hoja buena tiene que permitir reevaluar con claridad."
      },
      {
        href: "/planes-de-cuidados/",
        chip: "Hub",
        title: "Mas planes de cuidados",
        description: "Mas contenido para ordenar valoracion, objetivos e intervenciones con criterio."
      }
    ]
  }),
  createArticle("evaluacion-del-plan-de-cuidados-de-enfermeria", {
    title: "Evaluacion del plan de cuidados de enfermeria | Serenfermera",
    description:
      "Como evaluar un plan de cuidados de enfermeria: criterios utiles, preguntas clave, errores frecuentes y ejemplo practico.",
    eyebrow: "Planes de cuidados",
    intro:
      "Evaluar un plan no es marcar si se hizo o no se hizo. Es comprobar si las intervenciones estaban bien elegidas, si los objetivos tenian sentido y si la situacion del paciente ha cambiado como esperabas. Sin evaluacion, el plan parece ordenado pero no aprende nada de la realidad.",
    pills: ["Reevaluacion", "Resultados", "Ajuste del plan"],
    summary: [
      {
        label: "Que busca",
        text: "Saber si el plan funciona, si debe ajustarse o si estaba mal planteado."
      },
      {
        label: "No basta con",
        text: "Anotar que una intervencion se hizo. Hay que mirar resultado y contexto."
      },
      {
        label: "Error tipico",
        text: "Confundir actividad cumplida con objetivo alcanzado."
      }
    ],
    sections: [
      {
        id: "significa",
        title: "Que significa evaluar un plan",
        tocLabel: "Que significa",
        blocks: [
          {
            type: "paragraph",
            text:
              "Evaluar significa comparar la situacion actual con la fotografia inicial y con los objetivos previstos. A veces confirma mejoria, otras veces revela que el problema sigue igual o que el objetivo era poco realista. En ambos casos sirve, porque ayuda a decidir mejor el siguiente paso."
          }
        ]
      },
      {
        id: "criterios",
        title: "Criterios utiles para hacer una buena evaluacion",
        tocLabel: "Criterios utiles",
        blocks: [
          {
            type: "table",
            columns: ["Criterio", "Que miras", "Pregunta util"],
            rows: [
              [
                "Cambio clinico",
                "Si el estado del paciente mejora, empeora o se mantiene.",
                "Que ha cambiado desde la valoracion inicial?"
              ],
              [
                "Respuesta a intervenciones",
                "Si las acciones aplicadas aportaron algo o no.",
                "Lo que hice ayudo de verdad?"
              ],
              [
                "Adecuacion del objetivo",
                "Si el objetivo era claro, realista y medible.",
                "Pedia algo razonable para este contexto?"
              ],
              [
                "Necesidad de ajuste",
                "Si toca mantener, cambiar o retirar intervenciones.",
                "Que deberia hacer distinto ahora?"
              ]
            ]
          }
        ]
      },
      {
        id: "preguntas",
        title: "Preguntas que ayudan a reevaluar con criterio",
        tocLabel: "Preguntas clave",
        blocks: [
          {
            type: "bullets",
            items: [
              "El problema sigue igual o ha cambiado de forma relevante?",
              "La persona tolero y entendio las intervenciones planteadas?",
              "Hay datos nuevos que obligan a reformular el plan?",
              "Lo que escribi permite a otra profesional entender por que ajusto el plan?"
            ]
          }
        ]
      },
      {
        id: "ejemplo",
        title: "Ejemplo practico de evaluacion",
        tocLabel: "Ejemplo practico",
        blocks: [
          {
            type: "callout",
            title: "Ejemplo",
            body:
              "Objetivo inicial: reducir dolor postoperatorio y facilitar movilizacion en 24 horas. Evaluacion: tras analgesia, posicionamiento y apoyo para la deambulacion, el dolor baja de 7 a 3 sobre 10 y la persona tolera sentarse y caminar unos pasos. Resultado: el objetivo se cumple parcialmente y el plan se mantiene con reevaluacion posterior."
          }
        ]
      },
      {
        id: "errores",
        title: "Errores comunes al evaluar",
        tocLabel: "Errores comunes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Poner 'evolucion favorable' sin explicar en que se nota.",
              "No comparar con datos iniciales u objetivos concretos.",
              "Mantener un plan inercialmente aunque el contexto haya cambiado.",
              "No registrar por que ajustas o cierras una intervencion."
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
            lead: "Dudas habituales al estudiar o aplicar la evaluacion del plan.",
            items: [
              {
                question: "Evaluar es lo mismo que cerrar el plan?",
                answer:
                  "No. Evaluar puede confirmar cierre, continuidad o necesidad de reformularlo. Es un paso de analisis, no solo un cierre."
              },
              {
                question: "Y si el objetivo no se cumple?",
                answer:
                  "Tambien es informacion valiosa. Puede indicar que el objetivo era poco realista, que faltan datos o que hacen falta otras intervenciones."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/como-hacer-una-hoja-de-cuidados-de-enfermeria/",
        chip: "Registro",
        title: "Hoja de cuidados de enfermeria",
        description: "Una hoja bien hecha facilita evaluar sin perder informacion importante."
      },
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Metodo",
        title: "Plan de cuidados paso a paso",
        description: "La evaluacion cobra sentido cuando parte de una valoracion y unos objetivos claros."
      },
      {
        href: "/planes-de-cuidados/",
        chip: "Hub",
        title: "Mas planes de cuidados",
        description: "Mas piezas para escribir, revisar y ajustar planes con utilidad real."
      }
    ]
  })
];
