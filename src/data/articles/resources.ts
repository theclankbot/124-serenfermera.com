import type { AuthoredArticle } from "../article-types";
import { createArticle } from "./shared";

export const resourceArticles: AuthoredArticle[] = [
  createArticle("ejemplo-calculo-balance-hidrico-auxiliar-enfermeria", {
    title: "Ejemplo de calculo de balance hidrico en enfermeria | Serenfermera",
    description:
      "Ejemplo practico de calculo de balance hidrico en enfermeria, con entradas, salidas, interpretacion y errores habituales de registro.",
    eyebrow: "Recursos y ejemplos",
    intro:
      "El balance hidrico ayuda a vigilar si el paciente retiene, pierde o mantiene liquidos de forma acorde a su situacion clinica. La cifra final importa, pero importa mas si el registro esta completo y si se interpreta junto al estado general del paciente.",
    pills: ["Balance hidrico", "Registro clinico", "Ejemplo practico"],
    summary: [
      {
        label: "Que mide",
        text: "La diferencia entre entradas y salidas de liquidos en un periodo definido."
      },
      {
        label: "Error frecuente",
        text: "Pensar que el numero final basta si el registro esta incompleto o mal interpretado."
      },
      {
        label: "Lo importante",
        text: "Leer el balance junto al contexto clinico, no como una cifra aislada."
      }
    ],
    sections: [
      {
        id: "concepto",
        title: "Que se anota en un balance hidrico",
        tocLabel: "Que se anota",
        blocks: [
          {
            type: "paragraph",
            text:
              "Se registran todas las entradas y salidas de liquidos durante un periodo definido, muchas veces 24 horas. En las entradas pueden contarse sueros, medicacion diluida, agua, dieta liquida o nutricion enteral. En las salidas suelen registrarse diuresis, drenajes, vomitos, diarrea o aspirados cuando se pueden cuantificar."
          },
          {
            type: "paragraph",
            text:
              "El balance no sustituye la valoracion clinica. Debe relacionarse con tension arterial, frecuencia cardiaca, diuresis, peso, edema, mucosas, funcion renal y plan terapeutico."
          }
        ]
      },
      {
        id: "ejemplo",
        title: "Ejemplo paso a paso",
        tocLabel: "Ejemplo",
        blocks: [
          {
            type: "table",
            columns: ["Entradas en 24 horas", "ml"],
            rows: [
              ["Suero intravenoso", "1000"],
              ["Antibiotico diluido", "100"],
              ["Agua y dieta liquida", "700"],
              ["Total", "1800"]
            ]
          },
          {
            type: "table",
            columns: ["Salidas en 24 horas", "ml"],
            rows: [
              ["Diuresis", "1200"],
              ["Vomito", "150"],
              ["Drenaje", "200"],
              ["Total", "1550"]
            ]
          },
          {
            type: "callout",
            title: "Calculo final",
            body:
              "1800 ml - 1550 ml = +250 ml. El balance es positivo en 250 ml: en ese periodo el paciente elimino menos liquido del que recibio."
          }
        ]
      },
      {
        id: "lectura",
        title: "Como leer el resultado",
        tocLabel: "Interpretacion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Un balance ligeramente positivo puede encajar con la reposicion de liquidos o con determinados postoperatorios.",
              "Un balance muy positivo obliga a vigilar edema, aumento de peso, disnea o signos de sobrecarga.",
              "Un balance negativo puede ser aceptable si se busca eliminar liquidos, pero preocupa si aparece con hipotension, oliguria o empeoramiento renal.",
              "Lo correcto es leer el dato junto al contexto del paciente y no como una cifra aislada."
            ]
          },
          {
            type: "callout",
            title: "Error frecuente",
            body:
              "Dejar fuera pequenas entradas o perdidas que parecen menores. Un balance incompleto puede parecer exacto y aun asi estar mal."
          }
        ]
      },
      {
        id: "registro",
        title: "Claves para registrarlo bien",
        tocLabel: "Registro",
        blocks: [
          {
            type: "bullets",
            items: [
              "Usar siempre mililitros y anotar la hora o el turno.",
              "Diferenciar lo administrado de lo realmente tolerado.",
              "Medir bien diuresis, drenajes y perdidas visibles.",
              "Dejar constancia cuando una cantidad es estimada y no exacta.",
              "Registrar incidencias como fuga de sonda, rechazo de ingesta o vomitos repetidos."
            ]
          }
        ]
      },
      {
        id: "utilidad",
        title: "En que pacientes aporta mas",
        tocLabel: "Utilidad",
        blocks: [
          {
            type: "paragraph",
            text:
              "Resulta especialmente util en insuficiencia cardiaca, enfermedad renal, sepsis, grandes cirugias, nutricion enteral o parenteral, uso de diureticos y situaciones con riesgo de desequilibrio hidroelectrolitico. En esos escenarios, el balance forma parte de la vigilancia clinica cotidiana."
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
            lead: "Dudas habituales al empezar a registrar y revisar balances hidricos.",
            items: [
              {
                question: "Un balance positivo siempre es malo?",
                answer:
                  "No. Puede ser esperable segun la situacion clinica. Lo importante es valorar si el resultado encaja con el estado del paciente y con la pauta terapeutica."
              },
              {
                question: "Que hago si una perdida no puede medirse con exactitud?",
                answer:
                  "Debe estimarse del modo mas consistente posible y dejar claro que se trata de una aproximacion. Lo peor es omitirla o mezclarla con datos exactos sin aclararlo."
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
                href: "https://www.nice.org.uk/guidance/cg174/chapter/recommendations",
                label: "NICE: Intravenous fluid therapy in adults in hospital"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/recursos/",
        chip: "Hub",
        title: "Mas recursos de enfermeria",
        description: "Ejemplos, plantillas y apoyos practicos para estudiar o trabajar con menos ruido."
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        chip: "Valoracion",
        title: "Datos subjetivos y objetivos",
        description: "Muy util para distinguir hechos observables de interpretaciones cuando registras."
      },
      {
        href: "/cuidados-de-enfermeria-oms/",
        chip: "Contexto",
        title: "Cuidados de enfermeria segun la OMS",
        description: "Ayuda a no leer el balance como numero aislado, sino dentro del cuidado integral."
      }
    ]
  }),
  createArticle("temas-de-salud-de-enfermeria", {
    title: "Temas de salud en enfermeria para estudiar o preparar sesiones | Serenfermera",
    description:
      "Ideas utiles de temas de salud en enfermeria para estudiar, preparar clases, talleres o educacion sanitaria con criterio.",
    eyebrow: "Recursos y ejemplos",
    intro:
      "Elegir un tema de salud en enfermeria sirve de poco si no sabes para quien es, que problema intenta abordar y que accion esperas despues. Un buen tema no es el mas amplio ni el mas vistoso: es el que encaja con el publico, el tiempo y el objetivo educativo.",
    pills: ["Estudio", "Docencia", "Educacion sanitaria"],
    summary: [
      {
        label: "Sirve para",
        text: "Elegir temas utiles y evitar listas aleatorias sin foco."
      },
      {
        label: "Conviene pensar",
        text: "Quien recibira el contenido, que necesita y que deberia poder hacer despues."
      },
      {
        label: "Error tipico",
        text: "Escoger asuntos enormes sin adaptarlos al contexto ni al tiempo disponible."
      }
    ],
    sections: [
      {
        id: "categorias",
        title: "Bloques de temas que suelen funcionar bien",
        tocLabel: "Bloques tematicos",
        blocks: [
          {
            type: "table",
            columns: ["Bloque", "Ejemplos", "Donde encaja mejor"],
            rows: [
              [
                "Prevencion y promocion",
                "Higiene de manos, vacunacion, alimentacion, sueno, tabaco y salud sexual.",
                "Comunidad, escuela, centro de salud o empresa."
              ],
              [
                "Cronicidad",
                "Diabetes, hipertension, EPOC, adherencia y autocuidado.",
                "Primaria, consulta y educacion terapeutica."
              ],
              [
                "Seguridad del paciente",
                "Caidas, medicacion segura, signos de alarma y prevencion de infecciones.",
                "Hospitalizacion, practicas y docencia interna."
              ],
              [
                "Maternoinfantil",
                "Lactancia, puerperio, cuidados del recien nacido y fiebre infantil.",
                "Pediatria, matrona y comunidad."
              ],
              [
                "Salud mental y apoyo",
                "Ansiedad, afrontamiento, duelo y autocuidado del cuidador.",
                "Consulta, comunidad y programas educativos."
              ]
            ]
          }
        ]
      },
      {
        id: "elegir",
        title: "Como elegir un buen tema",
        tocLabel: "Como elegir",
        blocks: [
          {
            type: "bullets",
            items: [
              "Definir primero el publico: no es lo mismo alumnado, pacientes cronicos o familias.",
              "Plantear una necesidad concreta y no un tema enorme imposible de cerrar bien.",
              "Elegir un objetivo educativo observable: comprender, prevenir, reconocer o practicar algo.",
              "Adaptar lenguaje, profundidad y tiempo disponible."
            ]
          },
          {
            type: "callout",
            title: "Regla simple",
            body:
              "Un buen tema no es el mas amplio, sino el que deja una idea clara y una accion posible para quien lo recibe."
          }
        ]
      },
      {
        id: "ideas",
        title: "Ideas utiles segun el objetivo",
        tocLabel: "Ideas utiles",
        blocks: [
          {
            type: "bullets",
            items: [
              "Para una charla breve: signos de alerta, uso correcto de medicacion o prevencion de caidas.",
              "Para estudio: proceso enfermero, seguridad del paciente, comunicacion terapeutica o promocion de la salud.",
              "Para taller practico: higiene de manos, tecnica inhalatoria, autocontrol glucemico o cura basica.",
              "Para comunidad: alimentacion saludable, salud sexual, actividad fisica, sueno y vacunacion."
            ]
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes al plantearlo",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Hacer listas de temas sin relacionarlas con una necesidad real.",
              "Escoger asuntos demasiado generales como salud integral sin acotarlos.",
              "Hablar solo de teoria y no de aplicacion, prevencion o signos de alerta.",
              "No adaptar el tema al nivel de comprension del grupo."
            ]
          }
        ]
      },
      {
        id: "cierre",
        title: "Como saber si el tema esta bien planteado",
        tocLabel: "Como saber si funciona",
        blocks: [
          {
            type: "paragraph",
            text:
              "Si al terminar puedes resumir en una frase que deberia aprender o hacer el publico, vas bien. Si el contenido se abre cada vez mas y no aterriza en nada concreto, el tema sigue demasiado difuso."
          }
        ]
      }
    ],
    related: [
      {
        href: "/recursos/",
        chip: "Hub",
        title: "Mas recursos de enfermeria",
        description: "Ideas, ejemplos y materiales para estudiar o preparar sesiones con mas criterio."
      },
      {
        href: "/educacion-para-la-salud-en-enfermeria-formacion/",
        chip: "Educacion",
        title: "Educacion para la salud en enfermeria",
        description: "Muy relacionada si quieres convertir un tema general en una sesion educativa util."
      },
      {
        href: "/ejemplo-calculo-balance-hidrico-auxiliar-enfermeria/",
        chip: "Ejemplo",
        title: "Ejemplo de balance hidrico",
        description: "Un ejemplo de como un tema amplio mejora cuando se vuelve concreto y aplicable."
      }
    ]
  }),
  createArticle("9-divertidos-y-educativos-juegos-de-enfermeria", {
    title: "9 divertidos y educativos juegos de enfermeria | Serenfermera",
    description:
      "Nueve ideas de juegos de enfermeria para estudiar, practicar en clase o dinamizar talleres sin perder rigor clinico.",
    eyebrow: "Recursos y ejemplos",
    intro:
      "Un juego educativo en enfermeria solo merece la pena si ayuda a pensar mejor, comunicar con mas claridad o fijar conocimientos que luego importan en la practica. No se trata de hacer ruido en clase, sino de usar dinamicas que obliguen a priorizar, explicar, observar y tomar decisiones con cierto criterio.",
    pills: ["Docencia", "Dinamicas activas", "Aprendizaje practico"],
    summary: [
      {
        label: "Para que sirve",
        text: "Convertir teoria suelta en decisiones, comunicacion y recuerdo mas estable."
      },
      {
        label: "Mejor enfoque",
        text: "Usar juegos con objetivo concreto, tiempo corto y cierre para extraer aprendizaje."
      },
      {
        label: "Error frecuente",
        text: "Montar dinamicas divertidas que no aterrizan en nada util para estudiar o cuidar."
      }
    ],
    sections: [
      {
        id: "sentido",
        title: "Para que sirve realmente esta lista",
        tocLabel: "Para que sirve",
        blocks: [
          {
            type: "paragraph",
            text:
              "Estas ideas funcionan mejor en clases, talleres, academias o sesiones internas donde necesitas activar al grupo sin perder el foco. Un buen juego obliga a ordenar informacion, hablar con claridad o detectar errores. Si solo entretiene, se queda corto."
          }
        ]
      },
      {
        id: "juegos",
        title: "Nueve juegos que pueden aportar de verdad",
        tocLabel: "Los 9 juegos",
        blocks: [
          {
            type: "table",
            columns: ["Juego", "Como funciona", "Que entrena"],
            rows: [
              [
                "SBAR express",
                "Cada equipo recibe un caso breve y debe escalarlo en 30 segundos con estructura SBAR.",
                "Comunicacion clinica y priorizacion."
              ],
              [
                "Triage en tarjetas",
                "Se ordenan casos por prioridad y se justifica la decision.",
                "Juicio clinico y criterios de urgencia."
              ],
              [
                "Medicacion detective",
                "Se presentan errores ocultos en una pauta o administracion y hay que encontrarlos.",
                "Seguridad del paciente."
              ],
              [
                "Relevo imposible",
                "Una persona hace el pase con ruido y el grupo reconstruye lo esencial.",
                "Calidad del relevo y escucha activa."
              ],
              [
                "Pie diabetico en pistas",
                "Se resuelven preguntas encadenadas sobre valoracion, educacion y alertas.",
                "Prevencion y educacion sanitaria."
              ],
              [
                "Escape room de aislamiento",
                "El grupo debe elegir equipo, secuencia y medidas de seguridad para salir del caso.",
                "Prevencion de infecciones."
              ],
              [
                "Ordena el plan",
                "Se mezclan valoracion, objetivos, intervenciones y evaluacion y hay que recomponer el plan.",
                "Proceso enfermero."
              ],
              [
                "Teach-back challenge",
                "Una persona hace de paciente y otra explica cuidados hasta comprobar comprension real.",
                "Educacion para la salud."
              ],
              [
                "Lo que no debes olvidar",
                "Se muestran escenarios rapidos y gana quien detecta la alerta clinica clave.",
                "Observacion y deteccion precoz."
              ]
            ]
          }
        ]
      },
      {
        id: "practica",
        title: "Como llevar cada idea a la practica",
        tocLabel: "Como llevarlos a la practica",
        blocks: [
          {
            type: "bullets",
            items: [
              "Define una sola habilidad o concepto principal por dinamica.",
              "Pon un tiempo breve y reglas simples para no perder foco.",
              "Cierra siempre con una puesta en comun que nombre el aprendizaje.",
              "Adapta la dificultad al nivel del grupo y al tiempo disponible."
            ]
          },
          {
            type: "callout",
            title: "El cierre importa",
            body:
              "Sin una breve reflexion final, muchas dinamicas se recuerdan como actividad divertida pero no como aprendizaje util."
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes con este formato",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Cargar la dinamica con demasiadas reglas y perder tiempo en explicarla.",
              "Elegir juegos que no entrenan nada relevante para el objetivo del grupo.",
              "Confundir competitividad con aprendizaje y generar ruido innecesario.",
              "No adaptar la actividad a estudiantes noveles o a equipos ya avanzados."
            ]
          }
        ]
      },
      {
        id: "mejor",
        title: "Como aprovecharla mejor",
        tocLabel: "Como aprovecharla mejor",
        blocks: [
          {
            type: "paragraph",
            text:
              "La mejor manera de usar estas ideas es combinarlas con una explicacion breve antes y un cierre claro despues. Asi el juego no sustituye el contenido, sino que lo hace mas recordable y mas accionable."
          }
        ]
      }
    ],
    related: [
      {
        href: "/recursos/",
        chip: "Hub",
        title: "Mas recursos de enfermeria",
        description: "Plantillas, ejemplos y apoyos para estudiar o ensenar con mas sentido."
      },
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "SBAR en enfermeria",
        description: "Perfecto para convertir una dinamica en aprendizaje de comunicacion clinica real."
      },
      {
        href: "/temas-de-salud-de-enfermeria/",
        chip: "Docencia",
        title: "Temas de salud en enfermeria",
        description: "Ayuda a elegir sobre que contenidos tiene mas sentido montar una dinamica."
      }
    ]
  }),
  createArticle("practica-basada-en-evidencia-en-ejemplos-de-enfermeria", {
    title: "Practica basada en evidencia en ejemplos de enfermeria | Serenfermera",
    description:
      "Como entender la practica basada en evidencia en enfermeria con ejemplos claros, pasos utiles y errores frecuentes.",
    eyebrow: "Recursos y estudio",
    intro:
      "La practica basada en evidencia no significa obedecer articulos sin pensar. Significa combinar la mejor evidencia disponible con experiencia clinica, contexto y preferencias de la persona. En enfermeria, eso ayuda a dejar de repetir cosas porque siempre se hicieron asi y obliga a justificar mejor por que valoras, priorizas o educas de una determinada manera.",
    pills: ["Evidencia", "Ejemplos practicos", "Pensamiento critico"],
    summary: [
      {
        label: "No va de copiar papers",
        text: "Va de hacer mejores preguntas y tomar decisiones mas defendibles."
      },
      {
        label: "Que combina",
        text: "Evidencia, experiencia clinica y contexto real del paciente."
      },
      {
        label: "Error comun",
        text: "Usar la expresion como etiqueta moderna sin cambiar ninguna decision."
      }
    ],
    sections: [
      {
        id: "sirve",
        title: "Para que puede servir",
        tocLabel: "Para que sirve",
        blocks: [
          {
            type: "paragraph",
            text:
              "Sirve para revisar practicas que se hacen por costumbre, mejorar protocolos, afinar educacion al paciente y justificar cambios en cuidados, tecnicas o seguimiento. Tambien ayuda a estudiar mejor, porque obliga a pasar de la memorizacion a la pregunta clinica."
          }
        ]
      },
      {
        id: "pasos",
        title: "Como usarla sin perder contexto",
        tocLabel: "Como usarla",
        blocks: [
          {
            type: "table",
            columns: ["Paso", "Que haces", "Pregunta util"],
            rows: [
              [
                "Formular pregunta",
                "Acotar el problema clinico o educativo.",
                "Que quiero mejorar o aclarar exactamente?"
              ],
              [
                "Buscar evidencia",
                "Localizar revisiones, guias o estudios utiles.",
                "Que fuente tiene mas peso para esta duda?"
              ],
              [
                "Valorar calidad",
                "Revisar si la evidencia es solida y aplicable.",
                "Esto sirve para mi contexto real?"
              ],
              [
                "Aplicar",
                "Combinar la informacion con experiencia y preferencias del paciente.",
                "Como lo adapto sin perder rigor?"
              ],
              [
                "Evaluar",
                "Comprobar si el cambio ha mejorado algo.",
                "Que resultado estoy viendo?"
              ]
            ]
          }
        ]
      },
      {
        id: "ejemplos",
        title: "Ejemplos sencillos en enfermeria",
        tocLabel: "Ejemplos",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Educacion diabetologica",
                body: "No dar siempre la misma charla. Ajustar mensajes y tecnicas segun lo que sabemos que mejora adherencia y comprension."
              },
              {
                title: "Prevencion de caidas",
                body: "No basta con marcar riesgo. Hay que aplicar medidas proporcionales y revisar si realmente funcionan."
              },
              {
                title: "Cambio de tecnica o protocolo",
                tone: "warning",
                body: "Si una practica se sostiene solo en la costumbre, merece revisarse antes de perpetuarla."
              },
              {
                title: "Educacion al alta",
                body: "La evidencia empuja a comprobar comprension real, no solo a entregar instrucciones."
              }
            ]
          }
        ]
      },
      {
        id: "errores",
        title: "Errores frecuentes al apoyarse en la evidencia",
        tocLabel: "Errores frecuentes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Creer que basta con citar un articulo para justificar cualquier decision.",
              "Olvidar la experiencia clinica y el contexto concreto del paciente.",
              "Aplicar recomendaciones sin revisar recursos reales o barreras del entorno.",
              "No evaluar despues si el cambio realmente mejoro algo."
            ]
          }
        ]
      },
      {
        id: "despues",
        title: "Que hacer despues",
        tocLabel: "Que hacer despues",
        blocks: [
          {
            type: "paragraph",
            text:
              "El paso mas olvidado es volver a mirar. Si introduces una mejora basada en evidencia, conviene observar si cambia adherencia, resultados, seguridad o comprension. Sin esa segunda mirada, la practica basada en evidencia se queda a medias."
          }
        ]
      }
    ],
    related: [
      {
        href: "/recursos/",
        chip: "Hub",
        title: "Mas recursos de enfermeria",
        description: "Ejemplos y apoyos para estudiar o justificar mejor la practica."
      },
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Aplicacion",
        title: "SBAR en enfermeria",
        description: "Una herramienta practica que gana valor cuando se usa con criterio y no por inercia."
      },
      {
        href: "/educacion-para-la-salud-en-enfermeria-formacion/",
        chip: "Educacion",
        title: "Educacion para la salud",
        description: "Un buen campo para aterrizar evidencia, contexto y comunicacion real."
      }
    ]
  })
];
