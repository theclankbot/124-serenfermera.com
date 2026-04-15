import type { AuthoredArticle } from "../article-types";
import { createArticle } from "./shared";

export const clinicalCareArticles: AuthoredArticle[] = [
  createArticle("edema-cuidados-de-enfermeria", {
    title: "Edema: cuidados de enfermeria, valoracion y vigilancia | Serenfermera",
    description:
      "Guia practica de cuidados de enfermeria en edema: valoracion, vigilancia de piel, balance hidrico, movilidad y signos de alarma.",
    eyebrow: "Cuidados clinicos",
    intro:
      "El edema no es solo hinchazon. Puede avisar de cambios hemodinamicos, problemas renales, inmovilidad, inflamacion o mala tolerancia al tratamiento. Los cuidados de enfermeria se apoyan en una buena valoracion, vigilancia de piel y movilidad, balance hidrico y deteccion de signos de alarma que obligan a reevaluar rapido.",
    pills: ["Valoracion", "Balance hidrico", "Vigilancia"],
    summary: [
      {
        label: "Lo primero",
        text: "Localizarlo, comparar su evolucion y relacionarlo con funcionalidad, piel y contexto clinico."
      },
      {
        label: "Cuidados base",
        text: "Vigilancia, proteccion cutanea, movilizacion y seguimiento del balance cuando toca."
      },
      {
        label: "No perder de vista",
        text: "Asimetria brusca, empeoramiento rapido o cambios respiratorios obligan a reevaluar."
      }
    ],
    sections: [
      {
        id: "valorar",
        title: "Que valorar",
        tocLabel: "Valoracion",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que mirar", "Por que importa"],
            rows: [
              [
                "Distribucion",
                "Localizado o generalizado, simetria y progresion.",
                "Ayuda a orientar causa y gravedad."
              ],
              [
                "Piel",
                "Tension, brillo, integridad, color, dolor y temperatura.",
                "Permite prevenir lesiones y detectar complicaciones."
              ],
              [
                "Funcionalidad",
                "Movilidad, marcha, calzado, descanso y dolor.",
                "El edema puede limitar mucho mas de lo que parece."
              ],
              [
                "Balance",
                "Diuresis, ingesta, peso y respuesta al tratamiento.",
                "Da contexto a la evolucion."
              ]
            ]
          }
        ]
      },
      {
        id: "cuidados",
        title: "Cuidados que suelen ser utiles",
        tocLabel: "Cuidados",
        blocks: [
          {
            type: "bullets",
            items: [
              "Vigilar cambios de volumen, piel y tolerancia funcional.",
              "Favorecer posicionamiento, elevacion o movilizacion si procede.",
              "Cuidar la piel y evitar presiones mantenidas o roces innecesarios.",
              "Registrar balance hidrico y peso cuando sea relevante.",
              "Educar sobre signos de empeoramiento y adherencia al plan indicado."
            ]
          },
          {
            type: "callout",
            title: "Alerta",
            tone: "warning",
            body:
              "Empeoramiento rapido, dolor importante, cambios respiratorios, asimetria brusca o alteraciones cutaneas llamativas obligan a reevaluar y escalar."
          }
        ]
      },
      {
        id: "sentido",
        title: "Por que la vigilancia importa tanto",
        tocLabel: "Por que importa",
        blocks: [
          {
            type: "paragraph",
            text:
              "El edema puede empeorar de forma progresiva y silenciosa. Si se registra bien su evolucion, la enfermeria puede detectar antes problemas de perfusion, sobrecarga de liquidos, lesiones cutaneas o empeoramiento funcional. No es solo una observacion estetica: es una pista clinica."
          }
        ]
      },
      {
        id: "registro",
        title: "Que dejar claro en el registro",
        tocLabel: "Registro",
        blocks: [
          {
            type: "paragraph",
            text:
              "Es importante dejar descrita la localizacion, la intensidad o impresion clinica, los cambios respecto a turnos previos, el estado de la piel, la respuesta a elevacion o movilizacion y cualquier signo asociado como dolor, disnea o descenso de diuresis. Un registro vago hace perder comparacion entre turnos."
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
            lead: "Dudas comunes al valorar edema en planta o consulta.",
            items: [
              {
                question: "Todo edema se trata igual?",
                answer:
                  "No. La respuesta depende de la causa, del contexto clinico y de la gravedad. La enfermeria no trata solo la hinchazon, sino su impacto y sus signos asociados."
              },
              {
                question: "Que se deteriora antes si no se vigila bien?",
                answer:
                  "La piel, la movilidad y la tolerancia funcional suelen resentirse pronto, pero tambien pueden aparecer signos mas serios si hay sobrecarga o empeoramiento de base."
              }
            ]
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
                href: "https://medlineplus.gov/ency/article/003103.htm",
                label: "MedlinePlus: Swelling"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Valoracion, vigilancia y registro pensados para situaciones de planta y practica real."
      },
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Relacionado",
        title: "Cuidados al paciente con dolor",
        description: "Otra guia donde la reevaluacion y el registro bien hecho cambian mucho la calidad del cuidado."
      },
      {
        href: "/venoclisis-cuidados-de-enfermeria/",
        chip: "Tecnica",
        title: "Venoclisis y vigilancia del acceso",
        description: "Especialmente util si el edema convive con terapia intravenosa o problemas de perfusion."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-oms", {
    title: "Cuidados de enfermeria segun la OMS: principios y enfoque | Serenfermera",
    description:
      "Como entender los cuidados de enfermeria desde el enfoque de la OMS: atencion centrada en la persona, seguridad, continuidad y promocion de la salud.",
    eyebrow: "Cuidados clinicos",
    intro:
      "Cuando se habla de cuidados de enfermeria desde la perspectiva de la OMS, la idea central no es una lista unica de tareas. El foco esta en una atencion segura, integrada y centrada en la persona a lo largo del continuo de cuidados.",
    pills: ["Atencion centrada en la persona", "Seguridad", "Continuidad"],
    summary: [
      {
        label: "Mirada OMS",
        text: "Importa tanto el problema clinico como la experiencia y necesidades de la persona."
      },
      {
        label: "Papel enfermero",
        text: "Coordinar, educar, vigilar y sostener continuidad entre niveles y momentos asistenciales."
      },
      {
        label: "Clave practica",
        text: "No fragmentar el cuidado en tareas aisladas que pierden sentido fuera del contexto."
      }
    ],
    sections: [
      {
        id: "enfoque",
        title: "Que enfoque aparece detras de esta idea",
        tocLabel: "Enfoque",
        blocks: [
          {
            type: "paragraph",
            text:
              "La OMS insiste desde hace anos en modelos de atencion integrados y centrados en la persona. Eso implica que el sistema no deberia girar solo alrededor del procedimiento, sino alrededor de lo que la persona necesita a lo largo de su proceso de salud."
          },
          {
            type: "paragraph",
            text:
              "En enfermeria, ese enfoque se traduce en valorar mejor, conectar servicios, educar con claridad y evitar que cada profesional vea solo un fragmento del problema."
          }
        ]
      },
      {
        id: "principios",
        title: "Principios que encajan con unos cuidados bien planteados",
        tocLabel: "Principios",
        blocks: [
          {
            type: "table",
            columns: ["Principio", "Que significa", "Como se nota en enfermeria"],
            rows: [
              [
                "Centralidad de la persona",
                "Mirar preferencias, autonomia, informacion y experiencia de cuidado.",
                "Escuchar, adaptar comunicacion y respetar decisiones informadas."
              ],
              [
                "Integralidad",
                "No separar lo fisico de lo emocional, social y funcional.",
                "Valorar mas alla del sintoma o de la tecnica del momento."
              ],
              [
                "Continuidad",
                "Evitar rupturas entre turnos, servicios o niveles asistenciales.",
                "Registrar bien, educar y coordinar el relevo."
              ],
              [
                "Seguridad",
                "Reducir dano evitable y detectar riesgos de forma precoz.",
                "Verificar, reevaluar y escalar incidencias a tiempo."
              ],
              [
                "Promocion de la salud",
                "No limitar el cuidado al episodio agudo.",
                "Educar, prevenir y favorecer autocuidado sostenible."
              ]
            ]
          }
        ]
      },
      {
        id: "practica",
        title: "Como se traduce al trabajo diario",
        tocLabel: "Aplicacion practica",
        blocks: [
          {
            type: "bullets",
            items: [
              "Valorar que necesita la persona hoy y que necesitara al alta o en domicilio.",
              "Explicar con lenguaje util, no solo entregar instrucciones rapidas.",
              "Relacionar cuidados, riesgos y educacion con el contexto real del paciente.",
              "Coordinar informacion cuando el caso pasa a otro profesional o a otro nivel asistencial.",
              "Registrar de forma que el siguiente paso del cuidado no empiece desde cero."
            ]
          },
          {
            type: "callout",
            title: "Idea practica",
            body:
              "Un cuidado alineado con este enfoque no se mide solo por si la tarea se hizo, sino por si ayudo a la persona a avanzar con mas seguridad, comprension y continuidad."
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes al usar esta expresion",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Hablar de la OMS como si hubiera un listado cerrado de cuidados universal para todo.",
              "Reducir el enfoque a frases generales sin impacto en la valoracion o en el registro.",
              "Confundir atencion centrada en la persona con hacer todo lo que se pide sin priorizar.",
              "Olvidar promocion de la salud y continuidad cuando el episodio agudo ocupa toda la atencion."
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
        href: "/fundamentos-de-enfermeria/",
        chip: "Fundamentos",
        title: "Mas fundamentos de enfermeria",
        description: "Contexto teorico para entender por que el cuidado no deberia reducirse a tareas."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias que aterrizan valoracion, continuidad y seguridad en situaciones concretas."
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        chip: "Valoracion",
        title: "Datos subjetivos y objetivos",
        description: "La base para una atencion mas centrada en la persona y menos mecanica."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-al-paciente-con-dolor", {
    title: "Cuidados de enfermeria al paciente con dolor: valoracion, intervenciones y registro | Serenfermera",
    description:
      "Guia de cuidados de enfermeria al paciente con dolor: valoracion, escalas, intervenciones farmacologicas y no farmacologicas, reevaluacion y registro.",
    eyebrow: "Cuidados clinicos",
    intro:
      "Cuidar a una persona con dolor no consiste solo en administrar analgesia. Exige valorar bien la experiencia dolorosa, observar impacto funcional, intervenir de forma proporcionada, reevaluar respuesta y registrar con claridad lo que cambia.",
    pills: ["Lectura: 8 min", "Aplicable en hospital y consulta", "Con foco en valoracion"],
    summary: [
      {
        label: "Lo primero",
        text: "La persona sigue siendo la mejor fuente de informacion cuando puede comunicarse."
      },
      {
        label: "Error clasico",
        text: "Actuar y no volver a mirar si la intervencion realmente funciono."
      },
      {
        label: "Objetivo util",
        text: "Mejorar confort, funcion y comprension, no solo bajar un numero en la escala."
      }
    ],
    sections: [
      {
        id: "valorar",
        title: "Lo primero es valorar bien",
        tocLabel: "Valoracion",
        blocks: [
          {
            type: "paragraph",
            text:
              "El dolor es una experiencia subjetiva. La persona sigue siendo la mejor fuente de informacion cuando puede comunicarse, pero la valoracion no debe quedarse en un numero. Tambien importa localizacion, intensidad, caracter, duracion, factores desencadenantes, alivio, expresion conductual e impacto en descanso, movilidad o alimentacion."
          },
          {
            type: "table",
            columns: ["Aspecto", "Que preguntar u observar", "Por que importa"],
            rows: [
              [
                "Intensidad",
                "Escala numerica o herramienta adecuada al contexto.",
                "Permite comparar respuesta antes y despues."
              ],
              [
                "Localizacion",
                "Donde duele, si irradia o cambia.",
                "Orienta causa y vigilancia."
              ],
              [
                "Impacto funcional",
                "Si limita movimiento, descanso, tos, respiracion o ingesta.",
                "Ayuda a priorizar y fijar objetivos utiles."
              ],
              [
                "Respuesta al alivio",
                "Que ha funcionado antes y que no.",
                "Evita repetir estrategias poco efectivas."
              ]
            ]
          }
        ]
      },
      {
        id: "intervenciones",
        title: "Intervenciones de enfermeria que suelen aportar valor",
        tocLabel: "Intervenciones",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Farmacologicas",
                body: "Administrar segun pauta, verificar efecto, vigilar tolerancia y registrar respuesta clinica."
              },
              {
                title: "No farmacologicas",
                body: "Posicionamiento, ambiente calmado, explicacion, apoyo, frio o calor si procede y tecnicas de confort."
              },
              {
                title: "Educacion",
                tone: "warning",
                body:
                  "Explicar a la persona que se vigila, como pedir ayuda y por que es mejor avisar antes de que el dolor se dispare."
              },
              {
                title: "Coordinacion",
                body: "Escalar si el dolor cambia de patron, no cede o se acompana de signos de alarma."
              }
            ]
          }
        ]
      },
      {
        id: "reevaluar",
        title: "Reevaluar es tan importante como intervenir",
        tocLabel: "Reevaluacion",
        blocks: [
          {
            type: "paragraph",
            text:
              "El error clasico es actuar y no volver a mirar. La reevaluacion confirma si la intervencion funciona, si el objetivo era realista o si el dolor esta diciendo algo nuevo. Sin reevaluacion, el registro pierde valor y el plan de cuidados queda cojo."
          }
        ]
      },
      {
        id: "registro",
        title: "Que registrar",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Escala o descripcion basal del dolor.",
              "Localizacion, caracter y factores asociados.",
              "Intervenciones realizadas.",
              "Respuesta tras reevaluacion.",
              "Incidencias y comunicaciones al equipo."
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
                href: "https://effectivehealthcare.ahrq.gov/products/acute-pain-treatment/protocol",
                label: "AHRQ: Treatment of Acute Pain"
              },
              {
                href: "https://www.who.int/publications-detail-redirect/9789241550390",
                label: "WHO guideline on cancer pain management"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/edema-cuidados-de-enfermeria/",
        chip: "Cuidados",
        title: "Edema: cuidados de enfermeria",
        description: "Otra situacion donde valorar, vigilar y registrar bien cambia mucho el resultado."
      },
      {
        href: "/planes-de-cuidados/",
        chip: "Metodo",
        title: "Planes de cuidados",
        description: "Util para convertir la valoracion del dolor en objetivos e intervenciones coherentes."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias sobre valoracion, vigilancia y continuidad del cuidado en escenarios frecuentes."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-demencia", {
    title: "Cuidados de enfermeria en pacientes con demencia: seguridad, comunicacion y apoyo | Serenfermera",
    description:
      "Guia de cuidados de enfermeria en demencia con foco en seguridad, comunicacion, entorno, apoyo a la familia y registro.",
    eyebrow: "Cuidados clinicos",
    intro:
      "Cuidar a una persona con demencia exige mirar mas alla del diagnostico: seguridad, orientacion, dolor no verbalizado, conducta, carga familiar y entorno. La calidad del cuidado depende mucho de la forma de comunicar y de lo bien que se ajusta el ambiente.",
    pills: ["Lectura: 8 min", "Atencion centrada en la persona", "Con foco en familia y entorno"],
    summary: [
      {
        label: "Prioridad",
        text: "Seguridad, comunicacion, confort y apoyo familiar suelen pesar mas que la tecnica aislada."
      },
      {
        label: "Error tipico",
        text: "Interpretar toda conducta como problema de comportamiento sin buscar necesidades no cubiertas."
      },
      {
        label: "Clima util",
        text: "Rutina predecible, menos estimulos y comunicacion simple suelen mejorar mucho la respuesta."
      }
    ],
    sections: [
      {
        id: "claves",
        title: "Las prioridades suelen estar aqui",
        tocLabel: "Prioridades",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que vigilar", "Objetivo del cuidado"],
            rows: [
              [
                "Seguridad",
                "Caidas, desorientacion, deambulacion, dispositivos y entorno.",
                "Reducir dano evitable sin sobremedicalizar el ambiente."
              ],
              [
                "Comunicacion",
                "Comprension, tono, sobrecarga de estimulos y respuestas conductuales.",
                "Favorecer cooperacion y disminuir ansiedad."
              ],
              [
                "Confort",
                "Dolor, hambre, estrenimiento, sueno, sed o malestar no verbalizado.",
                "Detectar necesidades basicas que a veces se expresan como conducta."
              ],
              [
                "Familia y apoyo",
                "Sobrecarga, informacion y capacidad de sostener cuidados.",
                "Mejorar continuidad y disminuir desgaste."
              ]
            ]
          }
        ]
      },
      {
        id: "comunicacion",
        title: "Como suele ayudar una buena comunicacion",
        tocLabel: "Comunicacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Hablar despacio, con frases cortas y una idea cada vez.",
              "Reducir ruido y exceso de estimulos antes de pedir colaboracion.",
              "Validar emocion antes de corregir conducta.",
              "No discutir con la desorientacion si eso solo aumenta angustia.",
              "Observar lenguaje no verbal y cambios pequenos en expresion o movimiento."
            ]
          }
        ]
      },
      {
        id: "entorno",
        title: "El entorno tambien cuida",
        tocLabel: "Entorno",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Ayuda",
                body: "Rutina predecible, orientacion visible, luz adecuada y menos interrupciones."
              },
              {
                title: "Empeora",
                tone: "warning",
                body: "Ruido continuo, ordenes encadenadas, cambios bruscos y falta de referencias."
              }
            ]
          }
        ]
      },
      {
        id: "familia",
        title: "Apoyo a la familia y continuidad",
        tocLabel: "Familia",
        blocks: [
          {
            type: "paragraph",
            text:
              "La familia o persona cuidadora suele aportar informacion clave sobre rutinas, signos de alarma y formas utiles de tranquilizar. Tambien necesita orientacion clara para sostener el cuidado sin agotarse ni salir con instrucciones confusas."
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
                href: "https://www.who.int/news-room/fact-sheets/dementia",
                label: "WHO Dementia fact sheet"
              },
              {
                href: "https://www.who.int/publications/i/item/9789241514132",
                label: "WHO guide: Towards a dementia plan"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias pensadas para situaciones donde entorno, vigilancia y comunicacion cambian el cuidado."
      },
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Confort",
        title: "Cuidados al paciente con dolor",
        description: "Muy util porque en demencia el dolor a veces se expresa de forma no verbal."
      },
      {
        href: "/fundamentos-de-enfermeria/",
        chip: "Base",
        title: "Fundamentos de enfermeria",
        description: "Para reforzar valoracion, continuidad y mirada integral en el cuidado."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-heparina", {
    title: "Cuidados de enfermeria con heparina | Serenfermera",
    description:
      "Que vigilar antes, durante y despues de la administracion de heparina: sangrado, seguridad, educacion y registro.",
    eyebrow: "Cuidados clinicos",
    intro:
      "La heparina exige una vigilancia muy ordenada porque el objetivo terapeutico convive con un riesgo claro de sangrado. Enfermeria aporta valor al verificar la pauta, observar signos de hemorragia, educar al paciente y registrar cualquier incidencia de forma util.",
    pills: ["Anticoagulacion", "Seguridad", "Sangrado"],
    summary: [
      {
        label: "Antes",
        text: "Revisar pauta, via, riesgo de sangrado y antecedentes relevantes."
      },
      {
        label: "Durante",
        text: "Administrar con tecnica correcta y observar tolerancia clinica."
      },
      {
        label: "Despues",
        text: "Vigilar hemorragia, hematomas, cambios clinicos y educacion de seguridad."
      }
    ],
    sections: [
      {
        id: "previo",
        title: "Que conviene comprobar antes de administrar",
        tocLabel: "Antes de administrar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Medicamento correcto, dosis, horario y via indicada.",
              "Motivo de la anticoagulacion y situacion clinica general del paciente.",
              "Antecedentes de sangrado, alergias, trombocitopenia o caidas recientes.",
              "Tratamientos concomitantes que aumenten el riesgo hemorragico segun pauta y protocolo local."
            ]
          }
        ]
      },
      {
        id: "administracion",
        title: "Cuidados durante la administracion",
        tocLabel: "Administracion",
        blocks: [
          {
            type: "paragraph",
            text:
              "El detalle cambia segun si la heparina es subcutanea o se administra por otra via y segun el protocolo del centro, pero la logica de seguridad se repite."
          },
          {
            type: "bullets",
            items: [
              "Aplicar la tecnica prevista para evitar errores de preparacion o de dosis.",
              "No improvisar mezclas, cambios de horario o manipulaciones fuera de prescripcion.",
              "Valorar dolor local, hematoma o dificultad tecnica durante la administracion."
            ]
          },
          {
            type: "callout",
            title: "Punto sensible",
            body:
              "En anticoagulacion, una incidencia pequena puede ganar importancia rapido. Si algo no encaja con la pauta o con el estado del paciente, conviene parar y revisar."
          }
        ]
      },
      {
        id: "vigilancia",
        title: "Signos de sangrado y otros motivos de alerta",
        tocLabel: "Vigilancia",
        blocks: [
          {
            type: "table",
            columns: ["Que observar", "Ejemplos", "Que hacer"],
            rows: [
              [
                "Sangrado visible",
                "Encias, orina, heces oscuras, sangrado nasal o heridas que no ceden.",
                "Reevaluar y avisar segun protocolo."
              ],
              [
                "Hematomas o petequias",
                "Moretones extensos o nuevos sin explicacion clara.",
                "Documentar y comunicar si progresan o se multiplican."
              ],
              [
                "Deterioro general",
                "Mareo, debilidad, palidez, taquicardia o hipotension.",
                "Valorar gravedad y pedir ayuda sin retraso."
              ],
              [
                "Dolor o sintomas neurologicos",
                "Cefalea intensa, confusion o dolor no habitual.",
                "Considerar urgencia y escalar de inmediato."
              ]
            ]
          }
        ]
      },
      {
        id: "educacion",
        title: "Educacion al paciente",
        tocLabel: "Educacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Explicar por que recibe heparina y que signos de sangrado debe comunicar.",
              "Recordar que no debe automedicarse ni modificar pautas sin consultar.",
              "Si va a continuar tratamiento fuera del centro, comprobar comprension real de la tecnica y las alertas."
            ]
          }
        ]
      },
      {
        id: "registro",
        title: "Que debe quedar registrado",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Pauta administrada, hora, via y tolerancia.",
              "Hallazgos relevantes relacionados con sangrado o seguridad.",
              "Educacion dada y comunicaciones al equipo."
            ]
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
                href: "https://medlineplus.gov/druginfo/meds/a682826.html",
                label: "MedlinePlus: Heparin Injection"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias donde la vigilancia ordenada y el registro son parte central del cuidado."
      },
      {
        href: "/cuidados-de-enfermeria-en-cateteres/",
        chip: "Dispositivos",
        title: "Cuidados de enfermeria en cateteres",
        description: "Relacionada si la anticoagulacion convive con accesos o dispositivos que exigen control extra."
      },
      {
        href: "/venoclisis-cuidados-de-enfermeria/",
        chip: "Tecnica",
        title: "Venoclisis y vigilancia del acceso",
        description: "Util cuando la administracion o el seguimiento se apoya en accesos venosos."
      }
    ]
  }),
  createArticle("cuidados-enfermeria-pediatricos-en-cirugia", {
    title: "Cuidados de enfermeria pediatrica en cirugia | Serenfermera",
    description:
      "Cuidados de enfermeria pediatrica en cirugia: preparacion, seguridad, manejo del dolor, vigilancia postoperatoria y apoyo claro a la familia.",
    eyebrow: "Cuidados pediatricos",
    intro:
      "En cirugia pediatrica los cuidados combinan seguridad clinica, manejo del dolor, preparacion emocional y trabajo con la familia. La observacion continua y la comunicacion ajustada a la edad son especialmente importantes, porque el nino no siempre expresa el malestar igual que un adulto y la familia necesita instrucciones muy claras.",
    pills: ["Pediatria", "Perioperatorio", "Familia"],
    summary: [
      {
        label: "Antes",
        text: "Identificacion, ayuno, informacion y preparacion emocional cambian mucho la seguridad."
      },
      {
        label: "Despues",
        text: "Dolor, respiracion, herida, tolerancia y conducta exigen vigilancia adaptada a la edad."
      },
      {
        label: "Alta",
        text: "La familia debe irse sabiendo como cuidar y cuando consultar sin esperar."
      }
    ],
    sections: [
      {
        id: "fases",
        title: "Momentos clave del cuidado",
        tocLabel: "Fases",
        blocks: [
          {
            type: "table",
            columns: ["Momento", "Que se vigila", "Para que sirve"],
            rows: [
              [
                "Antes de la cirugia",
                "Identificacion, ayuno, informacion, ansiedad y preparacion.",
                "Reducir errores y llegar al procedimiento con mas calma."
              ],
              [
                "Postoperatorio inmediato",
                "Dolor, constantes, respiracion, herida, sangrado y tolerancia.",
                "Detectar complicaciones pronto."
              ],
              [
                "Alta o continuidad",
                "Curas, medicacion, alimentacion y signos de alarma.",
                "Que la familia sepa cuidar y consultar a tiempo."
              ]
            ]
          }
        ]
      },
      {
        id: "comunicacion",
        title: "Preparacion emocional y comunicacion",
        tocLabel: "Comunicacion",
        blocks: [
          {
            type: "paragraph",
            text:
              "En pediatria no basta con explicar el procedimiento a los adultos. El nino tambien necesita una comunicacion adaptada a su edad, con palabras sencillas y un entorno que reduzca miedo. Segun el caso, ayuda mucho anticipar que va a ver, quien estara con el y que puede notar despues de la cirugia."
          },
          {
            type: "paragraph",
            text:
              "La familia, por su parte, suele llegar con ansiedad alta. Informar bien reduce errores, mejora adherencia y evita que el alta se viva como una acumulacion de instrucciones confusas."
          },
          {
            type: "callout",
            title: "La familia forma parte del plan",
            body:
              "En cirugia pediatrica, explicar bien no es un extra. Es parte del cuidado y de la seguridad posterior al procedimiento."
          }
        ]
      },
      {
        id: "observacion",
        title: "Que observar con mas atencion",
        tocLabel: "Observacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Dolor, llanto inconsolable o cambios llamativos de comportamiento.",
              "Respiracion, coloracion y tolerancia al despertar.",
              "Herida, sangrado, drenajes o signos de infeccion.",
              "Tolerancia a liquidos, nausea, vomitos y eliminacion.",
              "Capacidad de la familia para repetir instrucciones y detectar signos de alarma."
            ]
          }
        ]
      },
      {
        id: "alta",
        title: "Que debe quedar claro antes del alta",
        tocLabel: "Alta",
        blocks: [
          {
            type: "paragraph",
            text:
              "La familia tiene que saber como dar la medicacion, cuando volver a comer o beber segun indicacion, como cuidar la herida y en que situaciones hay que consultar sin esperar. Los avisos mas habituales son fiebre, dolor que empeora, sangrado, dificultad respiratoria, vomitos persistentes o rechazo llamativo de liquidos."
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
            lead: "Dudas habituales en el cuidado perioperatorio pediatrico.",
            items: [
              {
                question: "El manejo del dolor cambia en ninos?",
                answer:
                  "Si. La expresion del dolor puede ser distinta y exige observar conducta, llanto, postura y respuesta al consuelo, no solo esperar una descripcion verbal clara."
              },
              {
                question: "La familia debe estar muy implicada?",
                answer:
                  "Si. En muchas cirugias pediatricas la familia se lleva buena parte del cuidado a casa, asi que entender bien las instrucciones es parte del resultado."
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
                href: "https://medlineplus.gov/ency/patientinstructions/000579.htm",
                label: "MedlinePlus: The day of surgery for your child"
              },
              {
                href: "https://www.who.int/teams/integrated-health-services/patient-safety/research/safe-surgery",
                label: "WHO: Safe Surgery"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/planes-de-cuidado-de-enfermeria-en-pediatria/",
        chip: "Plan",
        title: "Planes de cuidados en pediatria",
        description: "Muy relacionada cuando hay que ordenar valoracion, objetivos y continuidad con la familia."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias para valorar, vigilar y registrar situaciones asistenciales frecuentes."
      },
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Dolor",
        title: "Cuidados al paciente con dolor",
        description: "Util para reforzar la parte de reevaluacion y confort en el postoperatorio pediatrico."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-en-pacientes-con-cancer", {
    title: "Cuidados de enfermeria en pacientes con cancer | Serenfermera",
    description:
      "Guia practica de cuidados de enfermeria en pacientes con cancer: valoracion, control de sintomas, educacion y deteccion de complicaciones.",
    eyebrow: "Cuidados clinicos",
    intro:
      "La enfermeria oncologica acompana mucho mas que un tratamiento. Observa cambios sutiles, alivia sintomas, protege la funcion diaria, explica lo que ocurre y ayuda a sostener decisiones complejas. El plan de cuidados cambia segun el tipo de cancer, la fase de la enfermedad y el tratamiento, pero la mirada integral siempre es central.",
    pills: ["Oncologia", "Control de sintomas", "Acompanamiento"],
    summary: [
      {
        label: "Desde el inicio",
        text: "Valorar dolor, fatiga, nutricion, riesgo infeccioso, apoyo familiar y comprension del tratamiento."
      },
      {
        label: "Lo que mas pesa",
        text: "Detectar cambios sutiles y adelantarse al descontrol de sintomas frecuentes."
      },
      {
        label: "Clave de calidad",
        text: "Alinear el cuidado con la fase real del proceso: no es igual tratamiento activo que objetivo de confort."
      }
    ],
    sections: [
      {
        id: "valoracion",
        title: "Que valorar desde el primer contacto",
        tocLabel: "Valoracion",
        blocks: [
          {
            type: "paragraph",
            text:
              "La valoracion inicial debe ir mas alla del diagnostico oncologico. Interesa conocer dolor, fatiga, nausea, apetito, eliminacion, sueno, mucosas, integridad cutanea, movilidad, red de apoyo, estado emocional y grado de comprension del tratamiento. Tambien hay que revisar accesos venosos, analitica disponible, riesgo de infeccion y capacidad real del paciente para seguir indicaciones en casa."
          }
        ]
      },
      {
        id: "focos",
        title: "Focos frecuentes de cuidado",
        tocLabel: "Focos de cuidado",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que vigilar", "Objetivo enfermero"],
            rows: [
              [
                "Dolor",
                "Intensidad, localizacion, patron y respuesta a la analgesia.",
                "Mejorar confort y funcion."
              ],
              [
                "Fatiga",
                "Impacto en actividad, sueno, anemia y tolerancia al esfuerzo.",
                "Conservar energia y autonomia."
              ],
              [
                "Nutricion e hidratacion",
                "Ingesta, peso, nausea, mucositis, estrenimiento o diarrea.",
                "Reducir deterioro nutricional."
              ],
              [
                "Riesgo infeccioso",
                "Fiebre, neutropenia, cateteres, heridas o sintomas nuevos.",
                "Detectar complicaciones pronto."
              ],
              [
                "Impacto emocional",
                "Miedo, incertidumbre, cansancio familiar y aislamiento.",
                "Favorecer afrontamiento y continuidad."
              ]
            ]
          }
        ]
      },
      {
        id: "sintomas",
        title: "Sintomas que suelen exigir mas trabajo",
        tocLabel: "Sintomas",
        blocks: [
          {
            type: "paragraph",
            text:
              "Entre los problemas mas frecuentes estan el dolor, la fatiga, la nausea y los vomitos, los cambios en el apetito, el estrenimiento, la diarrea, la mucositis y las alteraciones cutaneas. No todos aparecen a la vez ni con la misma intensidad. Una buena rutina es preguntar de forma dirigida, registrar cambios y adelantar medidas de alivio antes de que el problema se descontrole."
          },
          {
            type: "paragraph",
            text:
              "Cuando la persona recibe quimioterapia, radioterapia, inmunoterapia o cuidados paliativos, la vigilancia debe adaptarse a los efectos esperables de esa fase. Un mismo sintoma puede tener varias causas y no hay que atribuirlo todo al cancer sin valorar el contexto."
          },
          {
            type: "callout",
            title: "Una diferencia importante",
            body:
              "No es lo mismo un paciente en tratamiento activo con intencion curativa que una persona con enfermedad avanzada y objetivo de confort. El cuidado mejora cuando las intervenciones se alinean con la situacion real."
          }
        ]
      },
      {
        id: "educacion",
        title: "Educacion y autocuidado",
        tocLabel: "Educacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Explicar signos de alarma y cuando consultar sin esperar.",
              "Ensenar a registrar sintomas, temperatura y tolerancia al tratamiento cuando haga falta.",
              "Reforzar higiene de manos, cuidado de accesos y prevencion de infeccion.",
              "Hablar de hidratacion, pequenos aportes de comida y descanso util.",
              "Asegurar que paciente y familia entienden medicacion, citas y telefono de referencia."
            ]
          }
        ]
      },
      {
        id: "alarma",
        title: "Senales de alarma que no se deben banalizar",
        tocLabel: "Senales de alarma",
        blocks: [
          {
            type: "bullets",
            items: [
              "Fiebre o escalofrios en pacientes inmunodeprimidos.",
              "Dolor que cambia bruscamente o deja de responder a la pauta habitual.",
              "Vomitos persistentes, imposibilidad para beber o signos de deshidratacion.",
              "Sangrado, hematomas extensos o dificultad respiratoria.",
              "Confusion, debilidad marcada o empeoramiento rapido del estado general."
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
            lead: "Dudas comunes en cuidados de oncologia, tanto en planta como en consultas y hospital de dia.",
            items: [
              {
                question: "Que suele pesar mas al inicio?",
                answer:
                  "Depende del estado del paciente, pero controlar sintomas, detectar complicaciones a tiempo y sostener la adherencia suelen ser tres ejes muy repetidos en la practica diaria."
              },
              {
                question: "La comunicacion forma parte del cuidado?",
                answer:
                  "Si. Explicar con claridad, escuchar sin prisa y confirmar que la informacion se ha entendido evita errores, reduce angustia y mejora el seguimiento del tratamiento."
              }
            ]
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
                href: "https://www.cancer.gov/about-cancer/treatment/side-effects",
                label: "NCI: Side Effects of Cancer Treatment"
              },
              {
                href: "https://www.cancer.gov/about-cancer/treatment/side-effects/fatigue",
                label: "NCI: Fatigue and Cancer"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias para valorar sintomas, vigilar riesgos y registrar mejor en situaciones complejas."
      },
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Sintomas",
        title: "Cuidados al paciente con dolor",
        description: "Muy relacionada porque el control del dolor es uno de los ejes centrales del cuidado oncologico."
      },
      {
        href: "/protocolo-cuidados-paliativos-enfermeria/",
        chip: "Continuidad",
        title: "Cuidados paliativos en enfermeria",
        description: "El siguiente paso natural cuando haya que profundizar en confort y objetivos de cuidado."
      }
    ]
  }),
  createArticle("histerectomia-cuidados-de-enfermeria-postoperatorios", {
    title: "Histerectomia: cuidados de enfermeria postoperatorios | Serenfermera",
    description:
      "Cuidados de enfermeria tras una histerectomia: dolor, sangrado, herida, eliminacion, movilizacion, apoyo emocional y alta segura.",
    eyebrow: "Cuidados clinicos",
    intro:
      "El postoperatorio de una histerectomia no se reduce a vigilar una herida. Hay que combinar control del dolor, observacion de sangrado, recuperacion de la eliminacion, movilizacion progresiva y una educacion muy clara para el alta. Ademas, algunas pacientes necesitan espacio para procesar lo que esta cirugia significa en su cuerpo y en su historia personal.",
    pills: ["Ginecologia", "Postoperatorio", "Alta segura"],
    summary: [
      {
        label: "Lo primero",
        text: "Comprobar dolor, sangrado, herida, estabilidad general y tolerancia a movilizarse."
      },
      {
        label: "Vigilancia clave",
        text: "Diuresis, estrenimiento, drenajes y signos de infeccion o hemorragia no deben pasarse por alto."
      },
      {
        label: "Alta segura",
        text: "La paciente debe saber que es esperable y cuando consultar sin esperar."
      }
    ],
    sections: [
      {
        id: "ejes",
        title: "Ejes del cuidado postoperatorio",
        tocLabel: "Ejes de cuidado",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que vigilar", "Objetivo enfermero"],
            rows: [
              [
                "Dolor",
                "Intensidad, localizacion, efecto de la analgesia y tolerancia a movilizarse.",
                "Favorecer confort y deambulacion segura."
              ],
              [
                "Sangrado y herida",
                "Vendaje, drenajes, sangrado vaginal, exudado, calor o enrojecimiento.",
                "Detectar complicaciones pronto."
              ],
              [
                "Eliminacion",
                "Diuresis, molestias urinarias, gases, estrenimiento y tolerancia digestiva.",
                "Recuperar funcion fisiologica y evitar retenciones."
              ],
              [
                "Movilidad",
                "Mareo, debilidad, capacidad para sentarse y caminar con apoyo.",
                "Reducir riesgo trombotico y recuperar autonomia."
              ]
            ]
          }
        ]
      },
      {
        id: "cuidados",
        title: "Cuidados de enfermeria que mas suelen aportar",
        tocLabel: "Cuidados",
        blocks: [
          {
            type: "bullets",
            items: [
              "Controlar constantes, dolor, herida, drenajes y aspecto del sangrado.",
              "Favorecer cambios posturales y movilizacion temprana segun tolerancia y seguridad.",
              "Prevenir estrenimiento con hidratacion, deambulacion y pauta indicada.",
              "Vigilar retencion urinaria o molestias relacionadas con sondaje previo.",
              "Explicar higiene, limites temporales de actividad y signos de alarma antes del alta."
            ]
          },
          {
            type: "callout",
            title: "El alta empieza antes de salir",
            body:
              "La paciente necesita saber que puede notar en los primeros dias, que molestias entran dentro de lo esperable y que cambios obligan a consultar sin demora."
          }
        ]
      },
      {
        id: "alta",
        title: "Que debe quedar claro al alta",
        tocLabel: "Educacion al alta",
        blocks: [
          {
            type: "paragraph",
            text:
              "Antes del alta conviene revisar dolor esperado, cuidado de la incision, actividad fisica progresiva, descanso, hidratacion, manejo del estrenimiento, relaciones sexuales segun indicacion y fecha de revision. La educacion debe ser util, no un bloque rapido de instrucciones dificil de recordar."
          },
          {
            type: "bullets",
            items: [
              "Fiebre, mal olor, dolor en aumento o sangrado abundante requieren valoracion.",
              "Dificultad para orinar, dolor toracico o hinchazon en piernas obligan a consultar sin esperar.",
              "La movilizacion progresiva suele ayudar, pero debe adaptarse a la tolerancia real de la paciente."
            ]
          }
        ]
      },
      {
        id: "emocional",
        title: "Acompanamiento emocional tambien es cuidado",
        tocLabel: "Acompanamiento",
        blocks: [
          {
            type: "paragraph",
            text:
              "No todas las pacientes viven la histerectomia igual. Para algunas es una solucion muy esperada; para otras puede implicar duelo, miedo o sensacion de perdida. Escuchar sin trivializar, validar preguntas y detectar sufrimiento relevante forma parte del cuidado tanto como controlar la herida."
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
            lead: "Dudas habituales durante los primeros dias tras la cirugia.",
            items: [
              {
                question: "Es normal un poco de sangrado?",
                answer:
                  "Un manchado leve puede ser esperable segun la tecnica y la evolucion, pero si aumenta, huele mal o se acompana de fiebre y dolor debe revisarse."
              },
              {
                question: "La movilizacion temprana empeora el dolor?",
                answer:
                  "Bien pautada y con apoyo suele ayudar a recuperarse mejor y a prevenir complicaciones. Lo importante es adaptar el ritmo a la situacion clinica."
              }
            ]
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
                href: "https://medlineplus.gov/ency/patientinstructions/000275.htm",
                label: "MedlinePlus: Hysterectomy - abdominal - discharge"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias para vigilar mejor el postoperatorio y registrar con criterio."
      },
      {
        href: "/cuidados-de-enfermeria-en-el-postoperatorio-inmediato/",
        chip: "Perioperatorio",
        title: "Postoperatorio inmediato",
        description: "La base general de vigilancia que luego se aterriza en cirugias concretas."
      },
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Sintomas",
        title: "Cuidados al paciente con dolor",
        description: "Muy util para reforzar valoracion, analgesia y reevaluacion en las primeras horas."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-en-el-postoperatorio-inmediato", {
    title: "Cuidados de enfermeria en el postoperatorio inmediato | Serenfermera",
    description:
      "Aspectos clave de enfermeria en el postoperatorio inmediato: via aerea, respiracion, sangrado, dolor, drenajes y deteccion precoz de complicaciones.",
    eyebrow: "Cuidados clinicos",
    intro:
      "En el postoperatorio inmediato la prioridad no es hacer muchas cosas a la vez, sino vigilar lo correcto en el orden correcto. Primero hay que confirmar que el paciente recupera de forma segura la via aerea, la respiracion, la estabilidad hemodinamica y el nivel de conciencia. A partir de ahi, dolor, sangrado, drenajes, nausea o hipotermia exigen una observacion dirigida y bien registrada.",
    pills: ["Perioperatorio", "Seguridad", "Vigilancia estrecha"],
    summary: [
      {
        label: "Prioridad absoluta",
        text: "ABC, conciencia y estabilidad general antes de centrarse en el resto."
      },
      {
        label: "Error frecuente",
        text: "Tomar constantes sin relacionarlas con sangrado, analgesia, drenajes o evolucion anestesica."
      },
      {
        label: "Clave real",
        text: "Mirar tendencias, registrar cambios y escalar pronto cuando algo no encaja."
      }
    ],
    sections: [
      {
        id: "inicial",
        title: "Vigilancia inicial que no se puede delegar al piloto automatico",
        tocLabel: "Vigilancia inicial",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que vigilar", "Por que importa"],
            rows: [
              [
                "Via aerea",
                "Permeabilidad, secreciones, sonidos anormales y necesidad de soporte.",
                "Un compromiso respiratorio requiere respuesta rapida."
              ],
              [
                "Respiracion",
                "Saturacion, frecuencia, esfuerzo respiratorio y coloracion.",
                "Permite detectar hipoventilacion, broncoaspiracion o sedacion excesiva."
              ],
              [
                "Circulacion",
                "Tension arterial, pulso, perfusion, sangrado y drenajes.",
                "Ayuda a reconocer hemorragia o inestabilidad hemodinamica."
              ],
              [
                "Conciencia",
                "Respuesta, orientacion, agitacion y recuperacion anestesica.",
                "Sirve para seguir la evolucion neurologica y la tolerancia al despertar."
              ]
            ]
          }
        ]
      },
      {
        id: "observacion",
        title: "Aspectos que no deben pasarse por alto",
        tocLabel: "Observacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Herida, vendajes y drenajes: cantidad, color y ritmo de salida.",
              "Dolor, nausea, vomitos y respuesta a la medicacion pautada.",
              "Temperatura, temblores e hipotermia.",
              "Diuresis, sondas, vias venosas y bombas de infusion.",
              "Posicion, comodidad y seguridad al movilizar o trasladar."
            ]
          },
          {
            type: "callout",
            title: "La vigilancia util es dirigida",
            body:
              "No basta con anotar constantes. Hay que relacionar sintomas, mirar tendencias y dejar claro que cambia y que se comunica al equipo."
          }
        ]
      },
      {
        id: "registro",
        title: "Que registrar con precision",
        tocLabel: "Registro",
        blocks: [
          {
            type: "paragraph",
            text:
              "El registro debe reflejar hora, constantes, nivel de conciencia, intensidad del dolor, estado de la herida, drenajes, respuesta al tratamiento y cualquier incidencia o aviso al equipo. En esta fase la documentacion no es burocracia: es continuidad asistencial y seguridad."
          }
        ]
      },
      {
        id: "complicaciones",
        title: "Complicaciones que deben detectarse pronto",
        tocLabel: "Complicaciones",
        blocks: [
          {
            type: "bullets",
            items: [
              "Obstruccion de via aerea, desaturacion o hipoventilacion.",
              "Hemorragia, empeoramiento hemodinamico o drenajes preocupantes.",
              "Depresion respiratoria relacionada con analgesia o sedacion.",
              "Delirio, agitacion intensa o descenso del nivel de conciencia.",
              "Nausea y vomitos persistentes con riesgo de broncoaspiracion."
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
            lead: "Dudas habituales al organizar la vigilancia tras la salida de quirofano o reanimacion.",
            items: [
              {
                question: "Que es lo primero: dolor o constantes?",
                answer:
                  "Lo primero es asegurar ABC y estabilidad general. El dolor debe valorarse y tratarse pronto, pero siempre despues de comprobar que el paciente ventila y perfunde bien."
              },
              {
                question: "Cada cuanto se vigila?",
                answer:
                  "Depende del protocolo del centro, del tipo de cirugia y de la evolucion. En las primeras fases la observacion debe ser mucho mas estrecha que en una planta convencional."
              }
            ]
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
                href: "https://iris.who.int/bitstream/handle/10665/44185/9789241598552_eng.pdf",
                label: "WHO Guidelines for Safe Surgery"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Otras guias donde la vigilancia, el registro y la reevaluacion son centrales."
      },
      {
        href: "/histerectomia-cuidados-de-enfermeria-postoperatorios/",
        chip: "Caso concreto",
        title: "Histerectomia y postoperatorio",
        description: "Aplicacion del enfoque general a una cirugia frecuente en ginecologia."
      },
      {
        href: "/cuidados-enfermeria-pediatricos-en-cirugia/",
        chip: "Pediatria",
        title: "Cuidados pediatrico-quirurgicos",
        description: "Util cuando la vigilancia perioperatoria debe adaptarse a edad y familia."
      }
    ]
  }),
  createArticle("protocolo-cuidados-paliativos-enfermeria", {
    title: "Protocolo de cuidados paliativos en enfermeria | Serenfermera",
    description:
      "Guia practica de cuidados paliativos en enfermeria: control de sintomas, comunicacion, apoyo familiar, continuidad y dignidad al final de la vida.",
    eyebrow: "Cuidados paliativos",
    intro:
      "Los cuidados paliativos no significan dejar de cuidar. Significan cuidar mejor aquello que mas pesa en ese momento: dolor, disnea, ansiedad, agotamiento familiar, decisiones dificiles y necesidad de claridad. En enfermeria eso se traduce en valorar sintomas con continuidad, ajustar el confort, escuchar sin esquivar preguntas y sostener un plan coherente con la dignidad de la persona.",
    pills: ["Paliativos", "Control de sintomas", "Acompanamiento"],
    summary: [
      {
        label: "No es solo dolor",
        text: "Tambien importan disnea, angustia, sueno, secreciones, eliminacion y desgaste familiar."
      },
      {
        label: "Lo que mas ayuda",
        text: "Valorar de forma repetida, comunicar con tacto y coordinar bien la continuidad."
      },
      {
        label: "Idea central",
        text: "El objetivo es aliviar sufrimiento evitable y proteger calidad de vida."
      }
    ],
    sections: [
      {
        id: "significa",
        title: "Que significa cuidar bien en paliativos",
        tocLabel: "Que significa",
        blocks: [
          {
            type: "paragraph",
            text:
              "No se trata solo de tratar dolor. Tambien hay que responder a disnea, ansiedad, nausea, insomnio, estrenimiento, miedo, agotamiento familiar y dudas sobre lo que va ocurriendo. El buen cuidado paliativo no acelera ni retrasa la muerte: acompana con alivio, claridad y presencia clinica."
          }
        ]
      },
      {
        id: "ejes",
        title: "Ejes del cuidado enfermero",
        tocLabel: "Ejes de cuidado",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que se valora", "Para que sirve"],
            rows: [
              [
                "Sintomas fisicos",
                "Dolor, disnea, nausea, sueno, secreciones y eliminacion.",
                "Reducir sufrimiento evitable."
              ],
              [
                "Estado emocional",
                "Miedo, angustia, confusion, cansancio o deseo de hablar.",
                "Ajustar acompanamiento y apoyo."
              ],
              [
                "Familia y cuidadores",
                "Sobrecarga, dudas, capacidad para cuidar y despedida.",
                "Sostener continuidad y reducir desbordamiento."
              ],
              [
                "Entorno y decisiones",
                "Preferencias, objetivos de cuidado y coordinacion asistencial.",
                "Respetar dignidad y coherencia del plan."
              ]
            ]
          }
        ]
      },
      {
        id: "practica",
        title: "Que suele hacer enfermeria en la practica",
        tocLabel: "Practica diaria",
        blocks: [
          {
            type: "bullets",
            items: [
              "Valorar sintomas de forma repetida y ajustar el plan segun respuesta.",
              "Observar malestar no verbal cuando la persona no puede explicarse.",
              "Educar a la familia sobre medicacion, hidratacion de confort y cambios esperables.",
              "Coordinar con el resto del equipo para evitar mensajes contradictorios.",
              "Crear un entorno de calma, intimidad y trato respetuoso."
            ]
          },
          {
            type: "callout",
            title: "El lenguaje tambien cuida",
            body:
              "Decir la verdad con tacto, no esquivar preguntas y no llenar de tecnicismos una situacion ya dificil mejora la confianza y reduce sufrimiento innecesario."
          }
        ]
      },
      {
        id: "familia",
        title: "Apoyo a la familia y a quienes cuidan",
        tocLabel: "Familia",
        blocks: [
          {
            type: "paragraph",
            text:
              "La familia no es solo acompanante. Muchas veces administra medicacion, vigila cambios, toma decisiones y sostiene emocionalmente al paciente. Por eso necesita informacion comprensible, margen para preguntar, indicaciones concretas y un espacio donde expresar miedo o cansancio sin culpa."
          }
        ]
      },
      {
        id: "continuidad",
        title: "Continuidad del cuidado",
        tocLabel: "Continuidad",
        blocks: [
          {
            type: "paragraph",
            text:
              "En paliativos, los fallos de coordinacion generan sufrimiento rapido. Un buen plan debe dejar claro quien sigue el caso, como contactar si cambia el estado del paciente, que medicacion esta disponible y que decisiones se han hablado previamente. La continuidad tambien es confort."
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
            lead: "Dudas habituales cuando se habla de cuidados paliativos desde enfermeria.",
            items: [
              {
                question: "Cuidados paliativos significa que ya no se hace nada?",
                answer:
                  "No. Significa que se sigue cuidando de forma activa, pero orientando el esfuerzo a aliviar sufrimiento y proteger calidad de vida."
              },
              {
                question: "Solo se usan en los ultimos dias?",
                answer:
                  "No necesariamente. Pueden empezar antes, incluso mientras existen otros tratamientos, cuando hay necesidades complejas de control de sintomas o apoyo."
              }
            ]
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
                href: "https://www.who.int/news-room/fact-sheets/detail/palliative-care",
                label: "WHO: Palliative care"
              },
              {
                href: "https://www.who.int/publications/i/item/WHO-HIS-SDS-2018.39",
                label: "WHO: Palliative care as an essential function of primary health care"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias para valorar, aliviar sintomas y ordenar mejor la continuidad asistencial."
      },
      {
        href: "/cuidados-de-enfermeria-en-pacientes-con-cancer/",
        chip: "Oncologia",
        title: "Cuidados en pacientes con cancer",
        description: "Muy relacionada cuando el foco pasa de tratamiento a confort o control de sintomas."
      },
      {
        href: "/plan-de-cuidados-enfermeria-duelo/",
        chip: "Apoyo emocional",
        title: "Plan de cuidados en duelo",
        description: "Complementa la parte de acompanamiento a familiares y personas en perdida."
      }
    ]
  }),
  createArticle("10-cuidados-de-enfermeria-en-diabetes", {
    title: "10 cuidados de enfermeria en diabetes | Serenfermera",
    description:
      "Diez focos de cuidado utiles en diabetes: glucemia, alimentacion, pie diabetico, educacion, adherencia y signos de alerta.",
    eyebrow: "Cuidados clinicos",
    intro:
      "Cuidar a una persona con diabetes no consiste solo en mirar una glucemia. Hace falta vigilar sintomas, reforzar autocuidado, prevenir complicaciones, revisar adherencia y detectar senales de descompensacion antes de que escalen. Estos diez focos sirven para ordenar el cuidado sin convertirlo en una lista mecanica.",
    pills: ["Diabetes", "Educacion", "Prevencion"],
    summary: [
      {
        label: "Lo central",
        text: "Control glucemico, educacion realista y deteccion precoz de complicaciones."
      },
      {
        label: "No olvidar",
        text: "Pie diabetico, adherencia, tecnica de administracion y signos de alerta."
      },
      {
        label: "Error tipico",
        text: "Reducir el cuidado a un numero sin mirar sintomas, barreras y continuidad."
      }
    ],
    sections: [
      {
        id: "lista",
        title: "Los 10 focos que mas suelen importar",
        tocLabel: "Los 10 focos",
        blocks: [
          {
            type: "table",
            columns: ["Foco de cuidado", "Que mirar", "Para que sirve"],
            rows: [
              ["1. Glucemia", "Valores, tendencia y contexto clinico.", "Orientar decisiones y detectar descompensaciones."],
              ["2. Sintomas", "Poliuria, polidipsia, cansancio, vision borrosa o cambios de conducta.", "Reconocer hiperglucemia o hipoglucemia a tiempo."],
              ["3. Alimentacion", "Patron de comidas, comprension del plan y dificultades reales.", "Ajustar autocuidado y adherencia."],
              ["4. Medicacion", "Toma correcta, horarios, tecnicas y olvidos.", "Prevenir errores y descontrol."],
              ["5. Pie diabetico", "Piel, lesiones, temperatura, sensibilidad y calzado.", "Evitar ulceras y complicaciones mayores."],
              ["6. Hidratacion", "Ingesta, mucosas y signos de deshidratacion.", "Detectar empeoramiento metabolico."],
              ["7. Actividad y movilidad", "Capacidad funcional, ejercicio y tolerancia.", "Relacionar control glucemico con vida diaria."],
              ["8. Educacion", "Que sabe, que teme y que entiende de su plan.", "Convertir informacion en autocuidado posible."],
              ["9. Adherencia y barreras", "Economia, apoyo, rutinas, acceso a material o seguimiento.", "Aterrizar el cuidado al contexto real."],
              ["10. Senales de alarma", "Infeccion, descompensacion, heridas o deterioro rapido.", "Escalar y prevenir complicaciones graves."]
            ]
          }
        ]
      },
      {
        id: "prioridades",
        title: "Que prioridades suelen cambiar mas el pronostico",
        tocLabel: "Prioridades",
        blocks: [
          {
            type: "bullets",
            items: [
              "Detectar antes hiperglucemia o hipoglucemia clinicamente relevantes.",
              "Reforzar tecnica, adherencia y comprension del tratamiento.",
              "Valorar pies y piel con constancia, no solo cuando ya hay lesion.",
              "Educar de forma sencilla sobre alimentacion, ejercicio y senales de consulta."
            ]
          },
          {
            type: "callout",
            title: "La educacion no es un extra",
            body:
              "En diabetes, una buena explicacion sobre que vigilar y como actuar puede cambiar tanto como una intervencion puntual."
          }
        ]
      },
      {
        id: "alertas",
        title: "Senales de alarma para reevaluar",
        tocLabel: "Senales de alarma",
        blocks: [
          {
            type: "bullets",
            items: [
              "Glucemias persistentemente muy altas o muy bajas con sintomas.",
              "Vomitos, dolor abdominal, somnolencia, confusion o signos de deshidratacion.",
              "Heridas en pies, infeccion, enrojecimiento o cambios de temperatura local.",
              "Dificultad clara para seguir el plan o ausencia total de comprension del tratamiento."
            ]
          }
        ]
      },
      {
        id: "registro",
        title: "Que merece la pena documentar",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Valores glucemicos y situacion clinica asociada.",
              "Sintomas, educacion dada y tecnica observada.",
              "Estado de pies o piel si se valora.",
              "Barreras detectadas, respuesta del paciente y comunicaciones al equipo."
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
                href: "https://www.cdc.gov/diabetes/php/toolkits/new-beginnings-overview.html",
                label: "CDC: diabetes education overview"
              },
              {
                href: "https://medlineplus.gov/spanish/ency/patientinstructions/000081.htm",
                label: "MedlinePlus: diabetes self-care"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados-de-enfermeria-hiperglucemia/",
        chip: "Agudo",
        title: "Cuidados en hiperglucemia",
        description: "La parte mas centrada en descompensacion y vigilancia aguda."
      },
      {
        href: "/educacion-para-la-salud-en-enfermeria-formacion/",
        chip: "Educacion",
        title: "Educacion para la salud en enfermeria",
        description: "Muy relacionada porque una gran parte del cuidado diabetologico pasa por aqui."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias para valorar, vigilar y educar mejor en escenarios frecuentes."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-en-deterioro-de-la-movilidad-fisica", {
    title: "Cuidados de enfermeria en deterioro de la movilidad fisica | Serenfermera",
    description:
      "Valoracion, prevencion de complicaciones, movilizacion segura y registro en pacientes con deterioro de la movilidad fisica.",
    eyebrow: "Cuidados clinicos",
    intro:
      "El deterioro de la movilidad fisica cambia mucho mas que la forma de caminar. Afecta seguridad, piel, dolor, autonomia, riesgo de caidas, eliminacion y estado emocional. El cuidado enfermero consiste en valorar bien el limite funcional, prevenir complicaciones y acompanar una movilizacion que sea segura y realista para la persona.",
    pills: ["Movilidad", "Seguridad", "Prevencion de complicaciones"],
    summary: [
      {
        label: "Lo primero",
        text: "Saber que puede hacer la persona, que no puede hacer y que riesgo asume al intentarlo."
      },
      {
        label: "Objetivo real",
        text: "Conservar o recuperar la maxima movilidad posible sin dano evitable."
      },
      {
        label: "No olvidar",
        text: "Piel, dolor, caidas, contracturas y impacto emocional."
      }
    ],
    sections: [
      {
        id: "valoracion",
        title: "Que valorar desde el inicio",
        tocLabel: "Valoracion",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que mirar", "Por que importa"],
            rows: [
              ["Capacidad funcional", "Si puede girarse, sentarse, ponerse de pie o caminar con ayuda.", "Define el punto de partida real."],
              ["Dolor y miedo", "Dolor al moverse, temor a caerse o inseguridad.", "Explica parte de la limitacion y de la colaboracion."],
              ["Riesgo de caidas", "Equilibrio, fuerza, mareos, entorno y antecedentes.", "Ayuda a prevenir eventos evitables."],
              ["Piel y complicaciones", "Presiones, roces, edema o signos de lesion.", "La inmovilidad deteriora rapido si no se vigila."]
            ]
          }
        ]
      },
      {
        id: "objetivos",
        title: "Objetivos de cuidado que suelen tener mas sentido",
        tocLabel: "Objetivos",
        blocks: [
          {
            type: "bullets",
            items: [
              "Mantener la maxima autonomia posible segun situacion y etapa.",
              "Prevenir caidas, lesiones cutaneas, dolor y rigidez.",
              "Favorecer movilizacion progresiva y segura.",
              "Ensenar al paciente y a la familia como ayudar sin generar mas riesgo."
            ]
          }
        ]
      },
      {
        id: "intervenciones",
        title: "Intervenciones que suelen aportar mas",
        tocLabel: "Intervenciones",
        blocks: [
          {
            type: "bullets",
            items: [
              "Cambios posturales y movilizacion pautada segun tolerancia.",
              "Ayudas tecnicas o apoyo humano adecuado para transferencias y marcha.",
              "Vigilancia de piel, puntos de presion y confort.",
              "Control del dolor antes de movilizar cuando procede.",
              "Reforzar ejercicios o pautas indicadas por el equipo de rehabilitacion."
            ]
          },
          {
            type: "callout",
            title: "Mover no es arrastrar",
            body:
              "La movilizacion segura exige tecnica, ritmo y lectura de tolerancia. Forzar o improvisar suele empeorar dolor, miedo y riesgo."
          }
        ]
      },
      {
        id: "alertas",
        title: "Senales para reevaluar el plan",
        tocLabel: "Senales para reevaluar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Dolor creciente o nueva incapacidad para movilizarse.",
              "Caidas, mareos o temor intenso al intento de ponerse en pie.",
              "Lesiones cutaneas, rigidez importante o signos de trombosis.",
              "Deterioro funcional rapido o cambios neurologicos."
            ]
          }
        ]
      },
      {
        id: "registro",
        title: "Que merece la pena dejar documentado",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Nivel de ayuda que necesita la persona para cada actividad.",
              "Dolor, tolerancia y respuesta a la movilizacion.",
              "Estado de la piel y medidas preventivas aplicadas.",
              "Incidencias, riesgos detectados y educacion a familia o cuidadores."
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
                href: "https://medlineplus.gov/ency/patientinstructions/000147.htm",
                label: "MedlinePlus: moving a patient safely"
              },
              {
                href: "https://medlineplus.gov/lab-tests/fall-risk-assessment/",
                label: "MedlinePlus: fall risk assessment"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Sintomas",
        title: "Cuidados al paciente con dolor",
        description: "Muy relacionada porque el dolor condiciona y limita mucho la movilizacion."
      },
      {
        href: "/cuidados-de-enfermeria-en-el-postoperatorio-inmediato/",
        chip: "Postoperatorio",
        title: "Postoperatorio inmediato",
        description: "Una situacion donde la movilizacion precoz y segura cambia bastante el pronostico."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias sobre vigilancia, autonomia y continuidad en contextos frecuentes."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-en-ninos-con-tdah", {
    title: "Cuidados de enfermeria en ninos con TDAH | Serenfermera",
    description:
      "Que puede aportar enfermeria en ninos con TDAH: estructura, educacion familiar, seguimiento y coordinacion con escuela y equipo.",
    eyebrow: "Cuidados pediatricos",
    intro:
      "En ninos con TDAH, la enfermeria no busca corregir una personalidad ni reducir todo a conducta. Su papel suele estar en valorar funcionamiento, apoyar a la familia, reforzar rutinas, detectar dificultades asociadas y ayudar a coordinar mensajes entre escuela, consulta y hogar.",
    pills: ["Pediatria", "TDAH", "Apoyo familiar"],
    summary: [
      {
        label: "Que aporta",
        text: "Estructura, seguimiento, educacion y deteccion de necesidades asociadas."
      },
      {
        label: "Error comun",
        text: "Tratar todo como mala conducta sin mirar entorno, sueno, aprendizaje o carga familiar."
      },
      {
        label: "Clave",
        text: "Trabajar con mensajes consistentes y realistas para familia y escuela."
      }
    ],
    sections: [
      {
        id: "valoracion",
        title: "Que valorar",
        tocLabel: "Que valorar",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que explorar", "Para que ayuda"],
            rows: [
              ["Funcionamiento diario", "Atencion, impulsividad, organizacion y respuesta a rutinas.", "Entender el impacto real del TDAH."],
              ["Sueno y habitos", "Descanso, pantallas, alimentacion y ejercicio.", "Detectar factores que empeoran sintomas."],
              ["Entorno familiar y escolar", "Carga, coherencia de normas, apoyos y dificultades de coordinacion.", "Ajustar mensajes y objetivos."],
              ["Comorbilidades y malestar", "Ansiedad, baja autoestima, problemas de aprendizaje o conducta asociada.", "Pedir reevaluacion o derivacion si hace falta."]
            ]
          }
        ]
      },
      {
        id: "intervenciones",
        title: "Intervenciones que suelen aportar mas",
        tocLabel: "Intervenciones",
        blocks: [
          {
            type: "bullets",
            items: [
              "Explicar a la familia que la estructura y la regularidad ayudan mas que el castigo repetido.",
              "Reforzar rutinas sencillas para sueno, estudio, medicacion y actividades diarias.",
              "Usar mensajes claros, breves y coherentes con el nivel del nino.",
              "Favorecer coordinacion entre quienes cuidan y quienes ensenan.",
              "Detectar signos de sobrecarga familiar o de malestar emocional mantenido."
            ]
          }
        ]
      },
      {
        id: "familia",
        title: "Mensajes utiles para la familia",
        tocLabel: "Mensajes para la familia",
        blocks: [
          {
            type: "paragraph",
            text:
              "Suele ayudar recordar que el TDAH no se maneja bien con improvisacion constante. Las familias necesitan indicaciones realistas, no culpabilizadoras: dividir tareas, mantener horarios, reforzar logros pequenos, anticipar cambios y saber cuando pedir ayuda si el funcionamiento empeora."
          },
          {
            type: "callout",
            title: "Un mensaje importante",
            body:
              "Culpar a la familia o al nino sin valorar contexto, rutina y apoyos no mejora el cuidado y suele empeorar la adherencia."
          }
        ]
      },
      {
        id: "alertas",
        title: "Cuando reevaluar o derivar",
        tocLabel: "Cuando reevaluar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Deterioro academico o funcional rapido.",
              "Insomnio persistente, ansiedad marcada o cambios llamativos de conducta.",
              "Conflicto familiar severo o agotamiento intenso del entorno.",
              "Sospecha de comorbilidades o problemas de aprendizaje no abordados."
            ]
          }
        ]
      },
      {
        id: "registro",
        title: "Que merece la pena registrar",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Hallazgos de funcionamiento diario y habitos relevantes.",
              "Mensajes educativos trabajados con familia o cuidadores.",
              "Problemas detectados en coordinacion, adherencia o sobrecarga.",
              "Derivaciones o comunicaciones realizadas al equipo."
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
                href: "https://www.cdc.gov/adhd/treatment/behavior-therapy.html",
                label: "CDC: behavior therapy for ADHD"
              },
              {
                href: "https://www.cdc.gov/adhd/articles/behavior-therapy-first-young-children.html",
                label: "CDC: behavior therapy first in young children"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/planes-de-cuidado-de-enfermeria-en-pediatria/",
        chip: "Pediatria",
        title: "Planes de cuidados en pediatria",
        description: "Muy relacionada cuando hay que ordenar objetivos e intervenciones con la familia."
      },
      {
        href: "/cuidados-en-la-adolescencia-cto-enfermeria/",
        chip: "Etapa vital",
        title: "Cuidados en la adolescencia",
        description: "Otra pieza util para pensar salud mental, contexto y acompanamiento."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Mas guias de valoracion, apoyo y seguimiento en contextos concretos."
      }
    ]
  }),
  createArticle("angioplastia-cuidados-de-enfermeria", {
    title: "Angioplastia: cuidados de enfermeria antes y despues | Serenfermera",
    description:
      "Cuidados de enfermeria en angioplastia: preparacion, vigilancia del punto de acceso, educacion al alta y signos de alarma.",
    eyebrow: "Cuidados clinicos",
    intro:
      "La angioplastia exige preparacion, vigilancia hemodinamica y control del punto de acceso, pero tambien educacion clara para el alta. La enfermeria aporta mucho en detectar sangrado, cambios de perfusion, dolor toracico recurrente o complicaciones locales antes de que el problema gane tiempo.",
    pills: ["Cardiologia", "Procedimiento", "Alta segura"],
    summary: [
      {
        label: "Antes",
        text: "Verificar preparacion, medicacion, acceso y comprension del procedimiento."
      },
      {
        label: "Despues",
        text: "Vigilar sangrado, perfusion distal, dolor, constantes y tolerancia a la movilizacion."
      },
      {
        label: "Alta",
        text: "Dejar claras medicacion, actividad, cuidado del acceso y alertas."
      }
    ],
    sections: [
      {
        id: "preparacion",
        title: "Preparacion previa",
        tocLabel: "Preparacion previa",
        blocks: [
          {
            type: "bullets",
            items: [
              "Confirmar identidad, procedimiento previsto y acceso vascular planificado.",
              "Revisar medicacion relevante, alergias y analitica disponible segun protocolo.",
              "Explicar de forma breve que puede notar y como sera la vigilancia posterior.",
              "Preparar el entorno y el material para una recepcion segura tras el procedimiento."
            ]
          }
        ]
      },
      {
        id: "vigilancia",
        title: "Que vigilar tras la angioplastia",
        tocLabel: "Que vigilar",
        blocks: [
          {
            type: "table",
            columns: ["Area", "Que observar", "Por que importa"],
            rows: [
              ["Punto de acceso", "Sangrado, hematoma, dolor o aumento de volumen.", "Permite detectar complicaciones locales pronto."],
              ["Perfusion distal", "Color, temperatura, pulso y sensibilidad del miembro.", "Ayuda a reconocer compromiso vascular."],
              ["Estado hemodinamico", "Tension, pulso, mareo y tolerancia general.", "Orienta estabilidad y seguridad del postprocedimiento."],
              ["Sintomas cardiacos", "Dolor toracico, disnea o malestar recurrente.", "Obliga a reevaluar de inmediato."]
            ]
          }
        ]
      },
      {
        id: "alta",
        title: "Educacion al alta",
        tocLabel: "Educacion al alta",
        blocks: [
          {
            type: "bullets",
            items: [
              "Explicar cuidado del acceso y limites iniciales de actividad segun la via utilizada.",
              "Reforzar la importancia de la medicacion pautada, especialmente antiagregacion si corresponde.",
              "Recordar signos de alarma y cuando consultar sin esperar.",
              "Asegurar que la persona sabe a quien dirigirse y cuando es la revision."
            ]
          },
          {
            type: "callout",
            title: "Un error muy serio",
            tone: "warning",
            body:
              "Suspender medicacion por cuenta propia o infravalorar dolor toracico de nuevo inicio puede comprometer mucho la evolucion."
          }
        ]
      },
      {
        id: "alertas",
        title: "Senales de alarma",
        tocLabel: "Senales de alarma",
        blocks: [
          {
            type: "bullets",
            items: [
              "Sangrado que no cede, hematoma en expansion o inflamacion llamativa.",
              "Miembro frio, palido, doloroso o sin pulso perceptible.",
              "Dolor toracico, disnea, mareo intenso o empeoramiento general.",
              "Enrojecimiento, secrecion o dolor progresivo en el punto de acceso."
            ]
          }
        ]
      },
      {
        id: "registro",
        title: "Que dejar documentado",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Via de acceso, estado local y perfusion distal.",
              "Constantes, sintomas y tolerancia a la movilizacion.",
              "Educacion proporcionada y comprension del paciente.",
              "Incidencias y comunicaciones al equipo."
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
                href: "https://medlineplus.gov/ency/patientinstructions/000091.htm",
                label: "MedlinePlus: angioplasty and stent - heart - discharge"
              },
              {
                href: "https://www.nhlbi.nih.gov/health/stents/recovery",
                label: "NHLBI: recovery after angioplasty and stent placement"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias de vigilancia y educacion para situaciones asistenciales frecuentes."
      },
      {
        href: "/cuidados-de-enfermeria-heparina/",
        chip: "Seguridad",
        title: "Cuidados con heparina",
        description: "Muy relacionada cuando hay anticoagulacion o riesgo hemorragico asociado."
      },
      {
        href: "/cuidados-de-enfermeria-en-el-postoperatorio-inmediato/",
        chip: "Monitorizacion",
        title: "Postoperatorio inmediato",
        description: "Comparte la logica de vigilancia estrecha y deteccion precoz de complicaciones."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-post-parto-cesarea", {
    title: "Cuidados de enfermeria postparto tras cesarea | Serenfermera",
    description:
      "Cuidados de enfermeria tras una cesarea: vigilancia materna, control del dolor, movilizacion, lactancia y signos de alarma.",
    eyebrow: "Cuidados clinicos",
    intro:
      "Tras una cesarea, la enfermeria acompana una doble recuperacion: la del postoperatorio y la del puerperio. Hay que vigilar sangrado, dolor, herida, eliminacion, movilizacion y lactancia, sin perder de vista el estado emocional y la capacidad real de la madre para cuidarse y cuidar al recien nacido.",
    pills: ["Cesarea", "Puerperio", "Alta segura"],
    summary: [
      {
        label: "Primeras horas",
        text: "Vigilar sangrado, dolor, constantes, herida y recuperacion funcional."
      },
      {
        label: "Mucho valor",
        text: "Ayuda en movilizacion, lactancia, eliminacion y educacion al alta."
      },
      {
        label: "No banalizar",
        text: "Fiebre, sangrado abundante, dolor creciente o malestar marcado requieren reevaluacion."
      }
    ],
    sections: [
      {
        id: "objetivos",
        title: "Objetivos principales durante la recuperacion",
        tocLabel: "Objetivos principales",
        blocks: [
          {
            type: "table",
            columns: ["Objetivo", "Que incluye", "Para que sirve"],
            rows: [
              ["Seguridad materna", "Constantes, sangrado, dolor y estado general.", "Detectar complicaciones pronto."],
              ["Recuperacion funcional", "Movilizacion, eliminacion y tolerancia progresiva.", "Reducir riesgos y ganar autonomia."],
              ["Apoyo al vinculo y lactancia", "Posturas, analgesia compatible y ayuda practica.", "Facilitar cuidado del bebe sin descuidar a la madre."],
              ["Alta preparada", "Senales de alarma, cuidados de herida y seguimiento.", "Evitar errores y consultas tardias."]
            ]
          }
        ]
      },
      {
        id: "vigilancia",
        title: "Que vigilar en las primeras horas",
        tocLabel: "Que vigilar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Sangrado vaginal, tono uterino y signos de inestabilidad.",
              "Dolor, herida quirurgica y tolerancia a la movilizacion.",
              "Diuresis, gases, estrenimiento y molestias urinarias si hubo sondaje.",
              "Nausea, mareo, cansancio extremo o dificultades para iniciar lactancia."
            ]
          }
        ]
      },
      {
        id: "intervenciones",
        title: "Intervenciones habituales de enfermeria",
        tocLabel: "Intervenciones",
        blocks: [
          {
            type: "bullets",
            items: [
              "Controlar dolor y reevaluar su impacto en movilidad y cuidado del bebe.",
              "Favorecer cambios posturales y deambulacion progresiva cuando sea seguro.",
              "Apoyar posturas de lactancia que no aumenten tanto la molestia de la incision.",
              "Explicar higiene, descanso, hidratacion y cuidados de la herida.",
              "Validar emociones y detectar signos de sobrecarga o tristeza intensa."
            ]
          },
          {
            type: "callout",
            title: "La cesarea no es solo una herida",
            body:
              "Hay que mirar postoperatorio, puerperio, vinculo, descanso y capacidad real de la madre para sostener el cuidado."
          }
        ]
      },
      {
        id: "alertas",
        title: "Signos de alarma que exigen reevaluacion",
        tocLabel: "Signos de alarma",
        blocks: [
          {
            type: "bullets",
            items: [
              "Fiebre, sangrado abundante o mal olor en loquios.",
              "Dolor en aumento, enrojecimiento o secrecion en la incision.",
              "Dolor toracico, disnea o hinchazon dolorosa en piernas.",
              "Tristeza intensa, desbordamiento o incapacidad marcada para autocuidado."
            ]
          }
        ]
      },
      {
        id: "alta",
        title: "Educacion antes del alta",
        tocLabel: "Educacion al alta",
        blocks: [
          {
            type: "paragraph",
            text:
              "Antes del alta debe quedar claro como cuidar la herida, como manejar el dolor, cuando movilizarse, que sangrado entra dentro de lo esperable, que signos obligan a consultar y donde pedir ayuda si aparecen dudas con lactancia o recuperacion emocional."
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
                href: "https://medlineplus.gov/ency/patientinstructions/000624.htm",
                label: "MedlinePlus: going home after a C-section"
              },
              {
                href: "https://www.who.int/publications/i/item/9789240045989",
                label: "WHO: recommendations on maternal and newborn care for a positive postnatal experience"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/histerectomia-cuidados-de-enfermeria-postoperatorios/",
        chip: "Postoperatorio",
        title: "Histerectomia y postoperatorio",
        description: "Comparte vigilancia quirurgica, movilizacion y educacion al alta."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias para valorar, vigilar y dar continuidad a situaciones frecuentes."
      },
      {
        href: "/planes-de-cuidado-de-enfermeria-en-pediatria/",
        chip: "Familia",
        title: "Planes de cuidados en pediatria",
        description: "Util para reforzar la parte de familia, educacion y continuidad domiciliaria."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-hiperglucemia", {
    title: "Cuidados de enfermeria en hiperglucemia | Serenfermera",
    description:
      "Cuidados de enfermeria en hiperglucemia: valoracion, vigilancia, hidratacion, tratamiento pautado y signos de alarma.",
    eyebrow: "Cuidados clinicos",
    intro:
      "La hiperglucemia no se interpreta solo con un numero. Hay que mirar sintomas, hidratacion, estado mental, ingesta, medicacion y contexto del paciente para saber si estas ante un desajuste leve, una mala adherencia o una descompensacion que exige respuesta mas rapida. La enfermeria aporta mucho en esa lectura inicial y en la vigilancia posterior.",
    pills: ["Hiperglucemia", "Vigilancia", "Descompensacion"],
    summary: [
      {
        label: "Valoracion inicial",
        text: "Glucemia, sintomas, hidratacion, conciencia y contexto terapeutico."
      },
      {
        label: "Lo importante",
        text: "Reevaluar respuesta al tratamiento y detectar deterioro sin retraso."
      },
      {
        label: "Cuando alarma",
        text: "Somnolencia, vomitos, dolor abdominal, deshidratacion o empeoramiento rapido."
      }
    ],
    sections: [
      {
        id: "valoracion",
        title: "Valoracion inicial que merece la pena hacer",
        tocLabel: "Valoracion inicial",
        blocks: [
          {
            type: "table",
            columns: ["Aspecto", "Que mirar", "Por que importa"],
            rows: [
              ["Glucemia y tendencia", "Valor actual y cambios recientes si se conocen.", "Da contexto pero no explica todo por si sola."],
              ["Sintomas", "Sed, poliuria, cansancio, vision borrosa, nausea o malestar.", "Ayuda a leer gravedad y tolerancia."],
              ["Hidratacion y estado general", "Mucosas, diuresis, debilidad, mareo o taquicardia.", "Orienta riesgo de deshidratacion."],
              ["Contexto terapeutico", "Medicacion, ingesta, infeccion, estres u omisiones.", "Explica parte del descontrol y de la respuesta esperable."]
            ]
          }
        ]
      },
      {
        id: "vigilancia",
        title: "Que vigilar mientras se corrige la hiperglucemia",
        tocLabel: "Que vigilar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Evolucion de la glucemia y sintomas asociados.",
              "Estado mental, tolerancia oral, nausea o vomitos.",
              "Hidratacion, diuresis y signos de empeoramiento clinico.",
              "Respuesta al tratamiento pautado y aparicion de nuevos riesgos."
            ]
          }
        ]
      },
      {
        id: "intervenciones",
        title: "Intervenciones habituales de enfermeria",
        tocLabel: "Intervenciones",
        blocks: [
          {
            type: "bullets",
            items: [
              "Aplicar el control glucemico y el tratamiento indicado segun pauta y protocolo.",
              "Favorecer hidratacion y seguimiento estrecho cuando corresponda.",
              "Revisar posibles causas inmediatas de descontrol como infeccion, omisiones o errores de tecnica.",
              "Educar de forma clara si la situacion permite reforzar autocuidado."
            ]
          },
          {
            type: "callout",
            title: "No todo se arregla con una cifra mejor",
            body:
              "Aunque el valor baje, si persisten somnolencia, dolor abdominal, vomitos o mal estado general la reevaluacion sigue siendo obligada."
          }
        ]
      },
      {
        id: "urgente",
        title: "Cuando pedir reevaluacion inmediata",
        tocLabel: "Cuando reevaluar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Somnolencia, confusion o deterioro neurologico.",
              "Vomitos persistentes, dolor abdominal o signos de deshidratacion importante.",
              "Glucemias muy elevadas con mala evolucion clinica.",
              "Sospecha de infeccion o descompensacion metabolica mayor."
            ]
          }
        ]
      },
      {
        id: "alta",
        title: "Que explicar antes del alta o del relevo",
        tocLabel: "Que explicar",
        blocks: [
          {
            type: "paragraph",
            text:
              "Conviene dejar claro que pudo favorecer la hiperglucemia, como continuar controles, cuando repetir medicacion segun pauta y que sintomas deben motivar consulta sin esperar. En el relevo, importa dejar registro de tendencia, sintomas y respuesta observada."
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
                href: "https://medlineplus.gov/hyperglycemia.html",
                label: "MedlinePlus: Hyperglycemia"
              },
              {
                href: "https://medlineplus.gov/ency/patientinstructions/000332.htm",
                label: "MedlinePlus: high blood sugar - self-care"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/10-cuidados-de-enfermeria-en-diabetes/",
        chip: "Base",
        title: "10 cuidados en diabetes",
        description: "La pieza mas amplia sobre seguimiento, educacion y prevencion en diabetes."
      },
      {
        href: "/ejemplo-calculo-balance-hidrico-auxiliar-enfermeria/",
        chip: "Registro",
        title: "Balance hidrico en enfermeria",
        description: "Util cuando la hiperglucemia obliga a vigilar hidratacion y diuresis con mas orden."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias para valorar sintomas, detectar descompensacion y registrar mejor."
      }
    ]
  }),
  createArticle("ketamina-cuidados-de-enfermeria", {
    title: "Ketamina: cuidados de enfermeria | Serenfermera",
    description:
      "Cuidados de enfermeria en pacientes que reciben ketamina: vigilancia, seguridad, efectos adversos y educacion.",
    eyebrow: "Cuidados clinicos",
    intro:
      "La ketamina exige una vigilancia ordenada porque puede cambiar rapidamente la respuesta del paciente. El papel de enfermeria se apoya en una buena preparacion, monitorizacion adecuada, deteccion de efectos adversos y registro claro de la respuesta. Como en otros farmacos con potencial de sedacion o efectos neuropsiquiatricos, el contexto y el protocolo local importan mucho.",
    pills: ["Farmacos", "Monitorizacion", "Seguridad"],
    summary: [
      {
        label: "Antes",
        text: "Revisar indicacion, contexto, monitorizacion y riesgos del paciente."
      },
      {
        label: "Durante y despues",
        text: "Vigilar conciencia, respiracion, hemodinamia y posibles reacciones adversas."
      },
      {
        label: "No banalizar",
        text: "Agitacion, alucinaciones, inestabilidad o depresion respiratoria requieren respuesta rapida."
      }
    ],
    sections: [
      {
        id: "antes",
        title: "Que revisar antes de la administracion",
        tocLabel: "Antes de la administracion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Indicacion concreta, dosis, via y objetivo de uso segun protocolo.",
              "Estado basal del paciente: conciencia, constantes y antecedentes relevantes.",
              "Disponibilidad de monitorizacion y de respuesta si aparecen efectos adversos.",
              "Informacion clara al paciente o familia cuando el contexto lo permita."
            ]
          }
        ]
      },
      {
        id: "monitorizacion",
        title: "Monitorizacion durante y despues",
        tocLabel: "Monitorizacion",
        blocks: [
          {
            type: "table",
            columns: ["Aspecto", "Que vigilar", "Por que importa"],
            rows: [
              ["Respiracion", "Patron respiratorio, saturacion y permeabilidad de via aerea.", "Permite detectar deterioro precoz."],
              ["Estado neurologico", "Conciencia, agitacion, confusion o reacciones emergentes.", "La respuesta puede cambiar rapido."],
              ["Hemodinamia", "Tension arterial, pulso y tolerancia general.", "Ayuda a valorar seguridad del procedimiento o tratamiento."],
              ["Confort y entorno", "Estimulos, ansiedad y percepcion del paciente.", "Reduce experiencias desagradables y mejora seguridad."]
            ]
          }
        ]
      },
      {
        id: "efectos",
        title: "Efectos adversos que merecen atencion",
        tocLabel: "Efectos adversos",
        blocks: [
          {
            type: "bullets",
            items: [
              "Confusion, agitacion o alucinaciones.",
              "Nausea, vomitos o malestar intenso.",
              "Cambios hemodinamicos relevantes segun el contexto clinico.",
              "Cualquier compromiso respiratorio o deterioro del nivel de conciencia."
            ]
          },
          {
            type: "callout",
            title: "Punto sensible",
            tone: "warning",
            body:
              "La ausencia de un problema al inicio no garantiza una evolucion tranquila. La monitorizacion debe mantenerse el tiempo que marque el protocolo y la respuesta del paciente."
          }
        ]
      },
      {
        id: "reevaluar",
        title: "Cuando pedir reevaluacion inmediata",
        tocLabel: "Cuando reevaluar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Dificultad respiratoria, desaturacion o compromiso de via aerea.",
              "Agitacion intensa, confusion marcada o cambios neurologicos preocupantes.",
              "Inestabilidad hemodinamica o malestar clinico progresivo.",
              "Respuesta inesperada respecto al objetivo de uso."
            ]
          }
        ]
      },
      {
        id: "registro",
        title: "Que registrar y explicar",
        tocLabel: "Registro y educacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Hora, dosis, via y contexto de administracion.",
              "Estado basal, monitorizacion aplicada y respuesta observada.",
              "Efectos adversos, incidencias y comunicaciones al equipo.",
              "Indicaciones posteriores si el paciente pasa a observacion o alta."
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
                href: "https://medlineplus.gov/druginfo/meds/a626003.html",
                label: "MedlinePlus: Ketamine Injection"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados-de-enfermeria-en-el-postoperatorio-inmediato/",
        chip: "Monitorizacion",
        title: "Postoperatorio inmediato",
        description: "Comparte la necesidad de vigilar respiracion, conciencia y estabilidad general."
      },
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Sintomas",
        title: "Cuidados al paciente con dolor",
        description: "Util para reforzar la parte de valoracion y reevaluacion clinica."
      },
      {
        href: "/cuidados/",
        chip: "Hub",
        title: "Mas cuidados clinicos",
        description: "Guias donde la vigilancia ordenada cambia bastante la seguridad del proceso."
      }
    ]
  })
];
