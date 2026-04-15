import type { AuthoredArticle } from "../article-types";
import { createArticle } from "./shared";

export const procedureArticles: AuthoredArticle[] = [
  createArticle("venoclisis-cuidados-de-enfermeria", {
    title: "Venoclisis: cuidados de enfermeria, vigilancia y complicaciones | Serenfermera",
    description:
      "Guia de venoclisis con preparacion, vigilancia del punto de insercion, complicaciones frecuentes y registro de enfermeria.",
    eyebrow: "Tecnicas y procedimientos",
    intro:
      "La venoclisis exige mas que una insercion correcta: requiere comprobar indicacion, vigilar el punto de acceso, detectar complicaciones pronto y registrar de forma precisa la respuesta y las incidencias. Esta guia es orientativa y debe adaptarse al protocolo local.",
    pills: ["Lectura: 9 min", "Procedimiento frecuente", "Seguir protocolo local"],
    summary: [
      {
        label: "Antes",
        text: "Verificar prescripcion, material, identidad, permeabilidad y condiciones del acceso."
      },
      {
        label: "Durante",
        text: "Vigilar dolor, flujo, fijacion, infiltracion, flebitis y signos de mala tolerancia."
      },
      {
        label: "Despues",
        text: "Registrar solucion, ritmo, acceso, incidencias, respuesta y medidas adoptadas."
      }
    ],
    sections: [
      {
        id: "preparacion",
        title: "Preparacion previa",
        tocLabel: "Preparacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Confirmar indicacion, solucion, ritmo y via prescrita.",
              "Verificar identidad de la persona y revisar alergias o antecedentes relevantes.",
              "Preparar material, higiene de manos y entorno seguro.",
              "Explicar brevemente que se va a hacer y que molestias debe avisar enseguida."
            ]
          },
          {
            type: "callout",
            title: "No se negocia",
            body:
              "La tecnica aseptica y la vigilancia del acceso son tan importantes como la insercion en si."
          }
        ]
      },
      {
        id: "vigilancia",
        title: "Que vigilar durante la venoclisis",
        tocLabel: "Que vigilar",
        blocks: [
          {
            type: "table",
            columns: ["Elemento", "Que observar", "Que hacer"],
            rows: [
              [
                "Punto de insercion",
                "Dolor, enrojecimiento, calor, edema o salida de liquido.",
                "Valorar si hay flebitis o infiltracion y actuar segun protocolo."
              ],
              [
                "Flujo",
                "Goteo lento, resistencia, alarmas o detencion del paso.",
                "Revisar posicion, permeabilidad y equipo antes de forzar nada."
              ],
              [
                "Persona atendida",
                "Molestia, ansiedad, cambio clinico o sintomas nuevos.",
                "Reevaluar, preguntar y escalar si aparecen signos de complicacion."
              ],
              [
                "Fijacion y equipo",
                "Desplazamiento, humedad, conexiones inseguras o suciedad.",
                "Reforzar fijacion, renovar material segun protocolo y registrar incidencias."
              ]
            ]
          }
        ]
      },
      {
        id: "complicaciones",
        title: "Complicaciones que hay que detectar pronto",
        tocLabel: "Complicaciones",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Flebitis",
                tone: "alert",
                body:
                  "Dolor, eritema, calor o trayecto venoso endurecido. No hay que minimizarla ni esperar a ver."
              },
              {
                title: "Infiltracion o extravasacion",
                tone: "alert",
                body:
                  "Edema, frialdad, palidez, dolor o mala perfusion del liquido fuera de la vena."
              },
              {
                title: "Infeccion",
                tone: "warning",
                body:
                  "Signos locales o sistemicos que obligan a reevaluar el acceso y seguir el protocolo institucional."
              },
              {
                title: "Obstruccion o desplazamiento",
                body:
                  "Problemas de flujo que nunca deben resolverse con prisas ni maniobras improvisadas."
              }
            ]
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
              "Fecha, hora y tipo de acceso si procede.",
              "Solucion, ritmo o dispositivo utilizado.",
              "Estado del punto de insercion y tolerancia de la persona.",
              "Incidencias detectadas y medidas aplicadas.",
              "Educacion dada sobre molestias o signos de aviso."
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
                href: "https://www.cdc.gov/infection-control/hcp/intravascular-catheter-related-infection/index.html",
                label: "CDC Guideline for the Prevention of Intravascular Catheter-Related Infections"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/tecnicas-y-procedimientos/",
        chip: "Hub",
        title: "Mas tecnicas y procedimientos",
        description: "Guias de tecnica con pasos claros, seguridad y errores frecuentes."
      },
      {
        href: "/tecnica-para-toma-de-papanicolaou-enfermeria/",
        chip: "Tecnica",
        title: "Toma de Papanicolaou",
        description: "Otro procedimiento donde preparacion, trato y registro cambian mucho el resultado."
      },
      {
        href: "/cuidados-de-enfermeria-en-cateteres/",
        chip: "Relacionado",
        title: "Cuidados de enfermeria en cateteres",
        description: "Continuidad, fijacion, permeabilidad y signos de complicacion."
      }
    ]
  }),
  createArticle("tecnica-para-toma-de-papanicolaou-enfermeria", {
    title: "Tecnica para toma de Papanicolaou en enfermeria | Serenfermera",
    description:
      "Guia de toma de Papanicolaou con preparacion, material, pasos generales, identificacion de muestra y errores frecuentes.",
    eyebrow: "Tecnicas y procedimientos",
    intro:
      "La toma de muestra requiere preparacion adecuada, identificacion rigurosa y una tecnica cuidadosa para evitar muestras invalidas. Esta guia resume pasos generales y siempre debe adaptarse al protocolo del centro y al sistema de cribado vigente.",
    pills: ["Lectura: 6 min", "Seguir protocolo local", "Enfoque practico"],
    summary: [
      {
        label: "Lo critico",
        text: "Preparacion, identificacion de la muestra y cuidado en la tecnica pesan tanto como la secuencia."
      },
      {
        label: "Error frecuente",
        text: "Explicar poco, aumentar tension y comprometer la colaboracion o la calidad de la muestra."
      },
      {
        label: "Regla basica",
        text: "Seguir siempre el protocolo del centro y el sistema de cribado vigente."
      }
    ],
    sections: [
      {
        id: "preparacion",
        title: "Preparacion general",
        tocLabel: "Preparacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Confirmar identidad y verificar indicacion del procedimiento.",
              "Explicar que se va a hacer y resolver dudas para reducir tension y mejorar colaboracion.",
              "Preparar material, rotulado y entorno que preserve intimidad.",
              "Aplicar higiene de manos y tecnica del centro."
            ]
          }
        ]
      },
      {
        id: "pasos",
        title: "Secuencia basica",
        tocLabel: "Secuencia",
        blocks: [
          {
            type: "table",
            columns: ["Momento", "Objetivo", "Detalle critico"],
            rows: [
              [
                "Posicion y visualizacion",
                "Exponer adecuadamente el cuello uterino.",
                "Hacerlo con delicadeza y explicando cada paso."
              ],
              [
                "Obtencion de muestra",
                "Recoger material representativo segun tecnica del centro.",
                "Evitar maniobras bruscas o contaminacion de la muestra."
              ],
              [
                "Conservacion o fijacion",
                "Preservar correctamente el material recogido.",
                "Seguir el sistema usado por el laboratorio."
              ],
              [
                "Identificacion",
                "Asegurar trazabilidad de la muestra.",
                "Rotulado correcto y documentacion completa."
              ]
            ]
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
              "No verificar bien la identificacion de la muestra.",
              "Explicar poco y aumentar tension o mala colaboracion.",
              "Alterar la calidad de la muestra por tecnica descuidada o conservacion incorrecta.",
              "Omitir la informacion posterior sobre resultados y seguimiento."
            ]
          }
        ]
      },
      {
        id: "cierre",
        title: "Despues de la toma",
        tocLabel: "Despues",
        blocks: [
          {
            type: "paragraph",
            text:
              "El cierre tambien importa: documentar bien, confirmar trazabilidad e indicar de forma clara como sera el circuito de resultados y seguimiento reduce errores y evita que la paciente se vaya con dudas innecesarias."
          }
        ]
      }
    ],
    related: [
      {
        href: "/tecnicas-y-procedimientos/",
        chip: "Hub",
        title: "Mas tecnicas y procedimientos",
        description: "Guias de procedimiento con foco en seguridad, preparacion y errores evitables."
      },
      {
        href: "/venoclisis-cuidados-de-enfermeria/",
        chip: "Tecnica",
        title: "Venoclisis: cuidados y vigilancia",
        description: "Otra tecnica donde la preparacion y el control posterior importan mucho."
      },
      {
        href: "/cuidados-de-enfermeria-oms/",
        chip: "Enfoque",
        title: "Cuidados de enfermeria segun la OMS",
        description: "Para conectar la tecnica con una atencion mas segura y centrada en la persona."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-en-cateteres", {
    title: "Cuidados de enfermeria en cateteres | Serenfermera",
    description:
      "Principios de cuidado en cateteres urinarios, venosos y otros dispositivos: asepsia, vigilancia, registro y signos de alerta.",
    eyebrow: "Tecnicas y procedimientos",
    intro:
      "El cuidado de un cateter no empieza ni termina en la insercion. Lo importante es mantener la indicacion bien revisada, manipular lo minimo imprescindible, vigilar el punto de acceso y detectar pronto signos de obstruccion, desplazamiento o infeccion.",
    pills: ["Dispositivos", "Asepsia", "Vigilancia"],
    summary: [
      {
        label: "Lo primero",
        text: "Distinguir que tipo de cateter es y que protocolo le corresponde."
      },
      {
        label: "Lo mas importante",
        text: "Reducir manipulaciones y revisar a diario si sigue siendo necesario."
      },
      {
        label: "Lo que alerta",
        text: "Dolor, edema, fiebre, mal funcionamiento, fuga o salida accidental."
      }
    ],
    sections: [
      {
        id: "tipos",
        title: "No todos los cateteres se cuidan igual",
        tocLabel: "Tipos de cateter",
        blocks: [
          {
            type: "paragraph",
            text:
              "El termino puede referirse a cateteres urinarios, venosos perifericos, venosos centrales, enterales u otros dispositivos. Por eso lo primero es identificar tipo, finalidad, fecha, via y protocolo especifico del centro."
          },
          {
            type: "table",
            columns: ["Tipo", "Lo que preocupa mas", "Que nunca deberia faltar"],
            rows: [
              [
                "Urinario",
                "Infeccion, obstruccion, fuga o traccion.",
                "Sistema cerrado y bolsa bien colocada."
              ],
              [
                "Venoso periferico",
                "Flebitis, dolor, infiltracion o extravasacion.",
                "Inspeccion del punto y fijacion segura."
              ],
              [
                "Venoso central",
                "Infeccion, mala posicion, trombosis o fallo del dispositivo.",
                "Asepsia estricta y manejo protocolizado."
              ],
              [
                "Otros",
                "Perdida de funcion, lesiones locales y errores de manipulacion.",
                "Seguir el protocolo especifico segun el dispositivo."
              ]
            ]
          }
        ]
      },
      {
        id: "principios",
        title: "Principios que se repiten casi siempre",
        tocLabel: "Principios comunes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Revisar a diario si el cateter sigue indicado o puede retirarse.",
              "Manipular solo cuando hace falta y con higiene de manos correcta.",
              "Mantener conexiones seguras, fijacion estable y entorno ordenado.",
              "Observar dolor, calor, edema, secrecion, fiebre, resistencia o flujo anormal.",
              "Registrar incidencias y no dejar dudas abiertas para el siguiente turno."
            ]
          },
          {
            type: "callout",
            title: "Regla util",
            body:
              "Cuanto mas tiempo permanece un dispositivo y mas veces se manipula sin necesidad, mayor suele ser el riesgo de complicaciones."
          }
        ]
      },
      {
        id: "alertas",
        title: "Senales de alarma que obligan a reevaluar",
        tocLabel: "Senales de alarma",
        blocks: [
          {
            type: "bullets",
            items: [
              "Dolor nuevo o aumento del dolor en el punto o en el trayecto.",
              "Edema, eritema, secrecion, mal olor o fiebre.",
              "Resistencia al uso, flujo ausente, fuga o sospecha de obstruccion.",
              "Salida parcial o total del cateter, fijacion deficiente o desplazamiento."
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
              "Tipo de dispositivo, estado actual y cuidados realizados.",
              "Incidencias, respuesta del paciente y medidas tomadas.",
              "Comunicaciones al equipo y decisiones sobre continuidad o retirada."
            ]
          }
        ]
      },
      {
        id: "fuentes",
        title: "Fuente base",
        tocLabel: "Fuentes",
        blocks: [
          {
            type: "links",
            items: [
              {
                href: "https://www.cdc.gov/infection-control/hcp/cauti/summary-of-recommendations.html",
                label: "CDC: CAUTI summary of recommendations"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/venoclisis-cuidados-de-enfermeria/",
        chip: "Via venosa",
        title: "Venoclisis: cuidados y vigilancia",
        description: "Especialmente relacionada cuando el cateter es periferico y requiere control estrecho."
      },
      {
        href: "/cuidados-de-enfermeria-heparina/",
        chip: "Seguridad",
        title: "Cuidados con heparina",
        description: "Util si el paciente anticoagulado lleva dispositivos o accesos que exigen mas vigilancia."
      },
      {
        href: "/tecnicas-y-procedimientos/",
        chip: "Hub",
        title: "Mas tecnicas y procedimientos",
        description: "Guias de procedimiento con foco en vigilancia posterior, seguridad y registro."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-para-nebulizaciones", {
    title: "Cuidados de enfermeria para nebulizaciones | Serenfermera",
    description:
      "Preparacion, vigilancia, limpieza del equipo, educacion y signos de alerta en nebulizaciones desde el punto de vista de enfermeria.",
    eyebrow: "Cuidados clinicos",
    intro:
      "Una nebulizacion bien indicada puede aliviar sintomas y facilitar la llegada del tratamiento a la via respiratoria, pero no deberia convertirse en un gesto automatico. Enfermeria aporta sobre todo en la preparacion, la vigilancia de la tolerancia y la educacion sobre el uso y la limpieza del equipo.",
    pills: ["Respiratorio", "Tecnica", "Educacion"],
    summary: [
      {
        label: "Antes",
        text: "Comprobar indicacion, medicacion, estado basal y capacidad para colaborar."
      },
      {
        label: "Durante",
        text: "Observar trabajo respiratorio, ansiedad, tolerancia y efecto esperado."
      },
      {
        label: "Despues",
        text: "Reevaluar, limpiar el equipo y reforzar instrucciones si el uso sigue en casa."
      }
    ],
    sections: [
      {
        id: "antes",
        title: "Que revisar antes de empezar",
        tocLabel: "Antes de empezar",
        blocks: [
          {
            type: "bullets",
            items: [
              "Medicacion, dosis, frecuencia y dispositivo que corresponde usar.",
              "Estado respiratorio basal: disnea, tos, sibilancias, saturacion y fatiga.",
              "Posicion del paciente y nivel de colaboracion para respirar por boquilla o mascarilla.",
              "Si el objetivo es broncodilatar, humidificar o ayudar en el aclaramiento de secreciones."
            ]
          },
          {
            type: "paragraph",
            text:
              "Una nebulizacion mal planteada puede hacer perder tiempo o dar una falsa sensacion de tratamiento suficiente cuando en realidad el paciente esta empeorando."
          }
        ]
      },
      {
        id: "durante",
        title: "Vigilancia durante la administracion",
        tocLabel: "Durante la administracion",
        blocks: [
          {
            type: "table",
            columns: ["Que observar", "Por que importa", "Que puede indicar"],
            rows: [
              [
                "Trabajo respiratorio",
                "Permite saber si la sesion ayuda o si el esfuerzo aumenta.",
                "Fatiga, empeoramiento o respuesta insuficiente."
              ],
              [
                "Tolerancia",
                "Algunas personas se agobian con la mascarilla o la sensacion del aerosol.",
                "Ansiedad, abandono precoz o uso ineficaz."
              ],
              [
                "Efectos del farmaco",
                "Broncodilatadores pueden producir temblor o taquicardia.",
                "Necesidad de reevaluar dosis, ritmo o respuesta."
              ],
              [
                "Funcion del equipo",
                "Si el aerosol sale mal o el sistema pierde sello, la administracion pierde eficacia.",
                "Fallo tecnico o mala tecnica de uso."
              ]
            ]
          }
        ]
      },
      {
        id: "despues",
        title: "Cuidados despues de la nebulizacion",
        tocLabel: "Cuidados posteriores",
        blocks: [
          {
            type: "bullets",
            items: [
              "Reevaluar respiracion, disnea subjetiva, tos y sensacion de alivio.",
              "Valorar si el paciente precisa aspiracion, fisioterapia respiratoria o nueva valoracion.",
              "Registrar medicamento administrado, tolerancia y efecto observado.",
              "Si el uso continua en domicilio, confirmar que la persona sabe montar, limpiar y secar el equipo."
            ]
          },
          {
            type: "callout",
            title: "Punto critico",
            body:
              "La limpieza del nebulizador importa tanto como la administracion. Un equipo mal mantenido favorece suciedad y puede terminar empeorando la seguridad del proceso."
          }
        ]
      },
      {
        id: "alertas",
        title: "Senales para pedir reevaluacion",
        tocLabel: "Senales de alerta",
        blocks: [
          {
            type: "bullets",
            items: [
              "Aumento de disnea, uso de musculatura accesoria o agotamiento.",
              "Broncoespasmo aparente, mareo, taquicardia intensa o malestar relevante.",
              "Falta de mejoria cuando se esperaba respuesta rapida segun el cuadro y el farmaco.",
              "Dudas sobre tecnica, equipo defectuoso o incapacidad para continuar el tratamiento de forma segura."
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
                href: "https://medlineplus.gov/spanish/ency/patientinstructions/000006.htm",
                label: "MedlinePlus: como usar un nebulizador"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/tecnicas-y-procedimientos/",
        chip: "Hub",
        title: "Mas tecnicas y procedimientos",
        description: "Guias donde preparacion, vigilancia y seguridad pesan tanto como la tecnica."
      },
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Cuidados",
        title: "Cuidados al paciente con dolor",
        description: "Otra guia donde la reevaluacion despues de intervenir cambia mucho la calidad del cuidado."
      },
      {
        href: "/cuidados-de-enfermeria-oms/",
        chip: "Enfoque",
        title: "Cuidados de enfermeria segun la OMS",
        description: "Util para no reducir la nebulizacion a un gesto tecnico despegado del contexto clinico."
      }
    ]
  }),
  createArticle("lavado-gastrico-tecnica-enfermeria", {
    title: "Lavado gastrico en enfermeria: tecnica, vigilancia y riesgos | Serenfermera",
    description:
      "Lavado gastrico en enfermeria: en que contexto se contempla, preparacion, vigilancia y riesgos que nunca deben banalizarse.",
    eyebrow: "Tecnicas y procedimientos",
    intro:
      "El lavado gastrico no es una tecnica rutinaria ni una respuesta automatica ante una ingesta. Si se contempla, suele ser en un contexto muy seleccionado, con criterio toxicologico y necesidad de vigilancia estrecha. El papel de enfermeria no es improvisarlo, sino sostener la seguridad del proceso, la monitorizacion y la coordinacion clinica.",
    pills: ["Urgencias", "Toxicologia", "Alta prudencia"],
    summary: [
      {
        label: "Idea clave",
        text: "No es un procedimiento para banalizar ni iniciar sin indicacion clara y soporte adecuado."
      },
      {
        label: "Lo que mas importa",
        text: "Seguridad de la via aerea, monitorizacion y lectura del riesgo real del paciente."
      },
      {
        label: "Rol enfermero",
        text: "Preparar, vigilar, registrar y escalar incidencias con rapidez."
      }
    ],
    sections: [
      {
        id: "contexto",
        title: "Cuando se contempla y cuando exige prudencia maxima",
        tocLabel: "Cuando se contempla",
        blocks: [
          {
            type: "paragraph",
            text:
              "La decision de realizar lavado gastrico depende del tipo de sustancia, el tiempo desde la ingesta, el estado del paciente y el criterio del equipo responsable. No todo envenenamiento o sobredosis lo justifica. De hecho, en muchos casos el riesgo puede superar el beneficio si no se selecciona muy bien."
          },
          {
            type: "callout",
            title: "No se improvisa",
            tone: "warning",
            body:
              "El procedimiento exige indicacion precisa, medios para proteger la via aerea cuando haga falta y un contexto clinico preparado para responder a complicaciones."
          }
        ]
      },
      {
        id: "papel",
        title: "Papel de enfermeria antes y durante",
        tocLabel: "Papel de enfermeria",
        blocks: [
          {
            type: "table",
            columns: ["Momento", "Que aporta enfermeria", "Por que importa"],
            rows: [
              [
                "Antes",
                "Preparar material, verificar indicacion, identidad y monitorizacion.",
                "Reduce errores y ordena el procedimiento."
              ],
              [
                "Durante",
                "Vigilar respiracion, conciencia, tolerancia y salida del contenido.",
                "Permite detectar deterioro o mala evolucion de inmediato."
              ],
              [
                "Despues",
                "Registrar, reevaluar y dejar continuidad clara.",
                "Evita que se pierdan hallazgos o incidencias criticas."
              ]
            ]
          },
          {
            type: "bullets",
            items: [
              "Comprobar que el entorno y el equipo estan preparados para una situacion potencialmente inestable.",
              "Vigilar signos respiratorios, nivel de conciencia, aspiracion o empeoramiento hemodinamico.",
              "Coordinar la documentacion de tiempos, contenido, incidencias y respuesta clinica."
            ]
          }
        ]
      },
      {
        id: "riesgos",
        title: "Riesgos y complicaciones que no deben banalizarse",
        tocLabel: "Riesgos y complicaciones",
        blocks: [
          {
            type: "bullets",
            items: [
              "Aspiracion y compromiso de la via aerea.",
              "Lesion o irritacion del tracto digestivo.",
              "Empeoramiento clinico si el procedimiento se realiza en un contexto inapropiado.",
              "Retraso en otras medidas mas utiles si se usa como reflejo en vez de con criterio."
            ]
          },
          {
            type: "callout",
            title: "La vigilancia manda",
            tone: "alert",
            body:
              "Si durante el procedimiento cambian conciencia, respiracion, saturacion o estabilidad general, la prioridad es reevaluar seguridad y escalar de inmediato."
          }
        ]
      },
      {
        id: "registro",
        title: "Que debe quedar documentado",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Contexto de realizacion, hora e indicacion del procedimiento.",
              "Estado basal del paciente y monitorizacion aplicada.",
              "Incidencias, tolerancia y respuesta durante y despues.",
              "Comunicaciones al equipo y medidas posteriores."
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
            lead: "Dudas habituales cuando se estudia este procedimiento.",
            items: [
              {
                question: "Se hace de forma rutinaria ante cualquier intoxicacion?",
                answer:
                  "No. Su uso es muy selectivo y depende del criterio del equipo y del riesgo-beneficio real."
              },
              {
                question: "Lo principal es la tecnica o la seguridad?",
                answer:
                  "La seguridad. Sin un contexto bien indicado y bien vigilado, la tecnica pierde sentido clinico."
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
                href: "https://pubmed.ncbi.nlm.nih.gov/15641639/",
                label: "PubMed: Position paper on gastric lavage"
              },
              {
                href: "https://medlineplus.gov/ency/article/007579.htm",
                label: "MedlinePlus: Poisoning first aid"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/tecnicas-y-procedimientos/",
        chip: "Hub",
        title: "Mas tecnicas y procedimientos",
        description: "Procedimientos donde la seguridad y la indicacion pesan mas que la mecanica pura."
      },
      {
        href: "/cuidados-de-enfermeria-en-el-postoperatorio-inmediato/",
        chip: "Vigilancia",
        title: "Postoperatorio inmediato",
        description: "Muy relacionada por la necesidad de monitorizar de forma dirigida y escalar rapido."
      },
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "SBAR en enfermeria",
        description: "Util para escalar cambios y riesgos de forma clara en situaciones tensas."
      }
    ]
  }),
  createArticle("cuidados-de-enfermeria-en-sonda-vesical", {
    title: "Cuidados de enfermeria en sonda vesical | Serenfermera",
    description:
      "Cuidados de enfermeria en sonda vesical: mantenimiento del sistema, vigilancia, prevencion de infecciones, registro y signos de alarma.",
    eyebrow: "Tecnicas y procedimientos",
    intro:
      "Cuidar una sonda vesical no consiste solo en vigilar si drena. Tambien implica mantener el sistema cerrado, reducir manipulaciones, prevenir infeccion, detectar obstrucciones y registrar bien cualquier incidencia. Gran parte del valor enfermero esta en los detalles diarios que evitan problemas evitables.",
    pills: ["Sonda vesical", "Prevencion de infecciones", "Vigilancia"],
    summary: [
      {
        label: "Objetivo base",
        text: "Mantener un drenaje seguro con el minimo riesgo de infeccion o traccion."
      },
      {
        label: "Lo que mas ayuda",
        text: "Sistema cerrado, bolsa bien posicionada, higiene y observacion ordenada."
      },
      {
        label: "No perder de vista",
        text: "Dolor, fiebre, mal drenaje, orina turbia o fugas exigen reevaluacion."
      }
    ],
    sections: [
      {
        id: "objetivos",
        title: "Objetivos del cuidado",
        tocLabel: "Objetivos del cuidado",
        blocks: [
          {
            type: "table",
            columns: ["Objetivo", "Que implica", "Para que sirve"],
            rows: [
              [
                "Mantener drenaje eficaz",
                "Evitar acodamientos, obstrucciones y posicion incorrecta de la bolsa.",
                "Favorecer salida continua de orina."
              ],
              [
                "Reducir riesgo infeccioso",
                "Manipular poco, mantener sistema cerrado e higiene adecuada.",
                "Prevenir complicaciones asociadas a sonda."
              ],
              [
                "Proteger al paciente",
                "Evitar tracciones, molestias y lesiones locales.",
                "Mejorar seguridad y confort."
              ]
            ]
          }
        ]
      },
      {
        id: "cuidados",
        title: "Cuidados diarios que si marcan diferencia",
        tocLabel: "Cuidados diarios",
        blocks: [
          {
            type: "bullets",
            items: [
              "Mantener la bolsa por debajo del nivel de la vejiga sin tocar el suelo.",
              "Comprobar que el tubo no esta pinzado, doblado ni en tension.",
              "Realizar higiene segun protocolo y despues de deposiciones si procede.",
              "Manipular solo cuando hace falta y con higiene de manos correcta.",
              "Vigilar volumen, color, olor y cambios llamativos de la orina."
            ]
          },
          {
            type: "callout",
            title: "Idea practica",
            body:
              "Una sonda puede parecer tranquila y aun asi estar mal cuidada. Lo que evita complicaciones suele estar en pequenos gestos repetidos con rigor."
          }
        ]
      },
      {
        id: "alertas",
        title: "Signos de alarma y motivos para reevaluar",
        tocLabel: "Signos de alarma",
        blocks: [
          {
            type: "bullets",
            items: [
              "Fiebre, escalofrios o malestar sin explicacion clara.",
              "Orina turbia, mal olor intenso, hematuria o cambios bruscos del aspecto.",
              "Dolor suprapubico, fugas, escasa diuresis o ausencia de drenaje.",
              "Salida accidental, traccion o sospecha de obstruccion."
            ]
          }
        ]
      },
      {
        id: "registro",
        title: "Que dejar registrado",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Aspecto de la orina, volumen si procede e incidencias relevantes.",
              "Estado del sistema, cuidados realizados y tolerancia del paciente.",
              "Alertas detectadas, comunicaciones al equipo y medidas adoptadas."
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
                href: "https://www.cdc.gov/infection-control/hcp/cauti/summary-of-recommendations.html",
                label: "CDC: CAUTI summary of recommendations"
              },
              {
                href: "https://medlineplus.gov/ency/patientinstructions/000140.htm",
                label: "MedlinePlus: Indwelling catheter care"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/cuidados-de-enfermeria-en-cateteres/",
        chip: "Dispositivos",
        title: "Cuidados de enfermeria en cateteres",
        description: "La base general para entender vigilancia, manipulacion minima y signos de riesgo."
      },
      {
        href: "/tecnicas-y-procedimientos/",
        chip: "Hub",
        title: "Mas tecnicas y procedimientos",
        description: "Guias de tecnica y seguimiento con foco en seguridad y registro."
      },
      {
        href: "/cuidados-de-enfermeria-en-el-postoperatorio-inmediato/",
        chip: "Continuidad",
        title: "Postoperatorio inmediato",
        description: "Muy relacionada cuando la sonda forma parte del control perioperatorio."
      }
    ]
  })
];
