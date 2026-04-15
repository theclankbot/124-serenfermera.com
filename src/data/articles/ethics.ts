import type { AuthoredArticle } from "../article-types";
import { createArticle } from "./shared";

export const ethicsArticles: AuthoredArticle[] = [
  createArticle("principios-eticos-en-enfermeria", {
    title: "7 principios eticos de enfermeria explicados con ejemplos clinicos | Serenfermera",
    description:
      "Principios eticos de enfermeria explicados con lenguaje claro, ejemplos clinicos y pautas para documentar mejor las decisiones complejas.",
    eyebrow: "Etica y liderazgo",
    intro:
      "Los principios eticos de enfermeria son una guia para decidir bien cuando la practica se complica: ayudan a respetar a la persona, reducir dano evitable, actuar con justicia y dejar trazabilidad profesional cuando aparece un conflicto.",
    pills: ["Lectura: 8 min", "Nivel: estudiantes y profesionales", "Lectura orientativa"],
    summary: [
      {
        label: "Sirve para",
        text: "Tomar decisiones con mas criterio cuando hay conflicto, presion o incertidumbre."
      },
      {
        label: "No sustituye",
        text: "Protocolos locales, normativa interna ni consulta con el equipo responsable."
      },
      {
        label: "Idea clave",
        text: "La etica no es un tema academico aislado: aparece en turno, en registros y en pases."
      }
    ],
    sections: [
      {
        id: "base",
        title: "Que son y por que importan",
        tocLabel: "Que son",
        blocks: [
          {
            type: "paragraph",
            text:
              "En enfermeria, los principios eticos ayudan a traducir valores y deberes profesionales a decisiones concretas. No resuelven por arte de magia todos los dilemas, pero obligan a mirar la situacion desde varios angulos: la voluntad de la persona, el beneficio esperado, el riesgo, la equidad y la responsabilidad profesional."
          },
          {
            type: "quote",
            text:
              "Cuanto mas compleja es una situacion, mas importante es pensar en etica antes de actuar y documentar despues lo que se ha valorado."
          },
          {
            type: "paragraph",
            text:
              "El Codigo de Etica del Consejo Internacional de Enfermeras insiste en que la enfermera mantiene responsabilidades con las personas atendidas, con la practica, con la profesion y con la salud global. Esa mirada amplia evita reducir la etica a ser buena persona."
          }
        ]
      },
      {
        id: "principios",
        title: "Los 7 principios que merece la pena dominar",
        tocLabel: "Los 7 principios",
        blocks: [
          {
            type: "table",
            columns: ["Principio", "Que significa", "Como se ve en la practica"],
            rows: [
              [
                "Autonomia",
                "Respetar la capacidad de la persona para decidir informada.",
                "Explicar opciones con claridad y verificar comprension antes de obtener consentimiento."
              ],
              [
                "Beneficencia",
                "Buscar el mayor beneficio clinico y humano posible.",
                "Priorizar intervenciones que mejoren seguridad, confort o evolucion."
              ],
              [
                "No maleficencia",
                "Evitar dano evitable o riesgos innecesarios.",
                "Confirmar identidades, dosis, dispositivos y signos de alarma antes de actuar."
              ],
              [
                "Justicia",
                "Tratar con equidad y sin discriminacion.",
                "Distribuir tiempo, atencion y recursos segun necesidad clinica y no segun afinidades."
              ],
              [
                "Veracidad",
                "Comunicar de forma honesta y comprensible.",
                "No ocultar informacion relevante ni maquillar incidencias en el registro."
              ],
              [
                "Fidelidad",
                "Cumplir compromisos y proteger la confianza depositada.",
                "Dar seguimiento a lo prometido y transmitir correctamente pendientes o incidencias."
              ],
              [
                "Confidencialidad",
                "Proteger datos e intimidad de la persona.",
                "No comentar casos fuera del contexto asistencial ni exponer informacion sin necesidad."
              ]
            ]
          }
        ]
      },
      {
        id: "casos",
        title: "Como bajarlos a casos reales",
        tocLabel: "Casos clinicos",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Caso 1: rechazo de un procedimiento",
                body:
                  "Si una persona rechaza una tecnica despues de recibir informacion comprensible, la autonomia pesa mucho. Tu papel es aclarar dudas, valorar riesgos y dejar registro de lo explicado y de la decision tomada."
              },
              {
                title: "Caso 2: error detectado a tiempo",
                tone: "warning",
                body:
                  "Si detectas una dosis incorrecta antes de administrarla, la no maleficencia obliga a frenar, verificar y escalar. La veracidad entra despues: el incidente se comunica y se registra con rigor."
              },
              {
                title: "Caso 3: reparto desigual de tiempo",
                body:
                  "En un turno tenso, la justicia recuerda que las prioridades deben decidirse por necesidad asistencial, no por simpatia, insistencia o costumbre."
              },
              {
                title: "Caso 4: comentario improcedente",
                tone: "alert",
                body:
                  "Hablar de un caso en un ascensor o un grupo informal vulnera confidencialidad aunque no haya mala intencion. La etica tambien vive en lo cotidiano."
              }
            ]
          }
        ]
      },
      {
        id: "registro",
        title: "Que documentar cuando hay dilema",
        tocLabel: "Que documentar",
        blocks: [
          {
            type: "bullets",
            items: [
              "La situacion clinica concreta y los hechos observables.",
              "La informacion proporcionada a la persona o familia.",
              "La decision tomada y quien participo en ella.",
              "Las medidas de seguridad adoptadas y la respuesta posterior.",
              "Las comunicaciones realizadas al equipo o a la supervisora."
            ]
          },
          {
            type: "callout",
            title: "Regla util",
            body:
              "Documenta hechos, valoracion profesional y acciones. Evita opiniones vagas, juicios sobre la persona o frases defensivas que no aportan trazabilidad clinica."
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
                href: "https://www.icn.ch/system/files/documents/2020-10/CoE_Version%20for%20Consultation_October%202020_EN.pdf",
                label: "ICN Code of Ethics for Nurses"
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
        href: "/valores-profesionales-de-enfermeria/",
        chip: "Relacionado",
        title: "Valores profesionales de enfermeria",
        description: "La capa de conducta diaria que hace visible la etica."
      },
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "SBAR en enfermeria",
        description: "Comunicar bien tambien es una forma de cuidar con responsabilidad."
      },
      {
        href: "/etica-y-liderazgo/",
        chip: "Hub",
        title: "Volver a Etica y liderazgo",
        description: "Mas piezas sobre liderazgo, equipo y seguridad del paciente."
      }
    ]
  }),
  createArticle("valores-profesionales-de-enfermeria", {
    title: "Valores profesionales de enfermeria: cuales son y como se demuestran | Serenfermera",
    description:
      "Valores profesionales de enfermeria explicados con ejemplos concretos de conducta, trabajo en equipo, seguridad y trato a la persona.",
    eyebrow: "Etica y liderazgo",
    intro:
      "Los valores profesionales en enfermeria no valen por como suenan, sino por como se convierten en conducta: respeto, integridad, responsabilidad, empatia, trabajo en equipo y compromiso con la seguridad del paciente.",
    pills: ["Lectura: 7 min", "Enfoque: practico", "Ideal para estudiantes y equipo"],
    summary: [
      {
        label: "Sirve para",
        text: "Traducir valores abstractos a comportamientos observables en turno y consulta."
      },
      {
        label: "Error habitual",
        text: "Confundir valores con listas bonitas que no cambian la forma de trabajar."
      },
      {
        label: "Idea clave",
        text: "Un valor profesional es creible cuando se nota incluso con prisa y cansancio."
      }
    ],
    sections: [
      {
        id: "que-son",
        title: "Que entendemos por valores profesionales",
        tocLabel: "Que son",
        blocks: [
          {
            type: "paragraph",
            text:
              "Son principios que orientan la forma de cuidar, colaborar, decidir y responder por lo que se hace. Mientras la etica ofrece un marco para pensar, los valores se vuelven visibles en la conducta diaria: como hablas a una persona, como registras, como corriges un error o como apoyas a una companera en un turno duro."
          },
          {
            type: "quote",
            text:
              "Si un valor no cambia una accion concreta, todavia no se ha aterrizado bien en la practica."
          }
        ]
      },
      {
        id: "tabla",
        title: "Valores nucleares y su expresion practica",
        tocLabel: "Tabla de valores",
        blocks: [
          {
            type: "table",
            columns: ["Valor", "Como se demuestra", "Lo que lo debilita"],
            rows: [
              [
                "Respeto",
                "Escuchar, explicar con dignidad, cuidar intimidad y lenguaje.",
                "Hablar con prisa, infantilizar o decidir sin contar con la persona."
              ],
              [
                "Responsabilidad",
                "Verificar, priorizar, registrar y asumir seguimiento de lo iniciado.",
                "Dejar cabos sueltos o no comunicar incidencias relevantes."
              ],
              [
                "Integridad",
                "Actuar con coherencia aunque nadie mire y reconocer limites propios.",
                "Ocultar fallos, maquillar registros o prometer mas de lo que puedes hacer."
              ],
              [
                "Empatia",
                "Comprender el impacto humano de la enfermedad sin perder juicio clinico.",
                "Trato mecanico o frases automaticas vacias."
              ],
              [
                "Compromiso",
                "Actualizarse, colaborar y sostener una practica segura y de calidad.",
                "Caer en rutina sin revisar procesos ni aprender de los incidentes."
              ],
              [
                "Trabajo en equipo",
                "Pasar informacion clara, pedir ayuda a tiempo y dar feedback util.",
                "Competitividad defensiva, rumores o pases ambiguos."
              ]
            ]
          }
        ]
      },
      {
        id: "conductas",
        title: "Conductas que delatan una buena cultura profesional",
        tocLabel: "Conductas clave",
        blocks: [
          {
            type: "bullets",
            items: [
              "Comprobar antes de suponer, incluso en tareas frecuentes.",
              "Reconocer una duda a tiempo en lugar de improvisar.",
              "Nombrar un error sin dramatizarlo ni ocultarlo.",
              "Hablar de forma clara con personas y familias, sin tecnicismo vacio.",
              "Respetar a companeras y auxiliares como parte del cuidado seguro."
            ]
          },
          {
            type: "callout",
            title: "Pista util",
            body:
              "Si un valor no se puede observar en una accion concreta, aun no esta bien aterrizado."
          }
        ]
      },
      {
        id: "desarrollo",
        title: "Como se desarrollan de verdad",
        tocLabel: "Como se desarrollan",
        blocks: [
          {
            type: "paragraph",
            text:
              "Los valores no aparecen solo por leerlos. Se entrenan con reflexion de casos, feedback, referentes profesionales, cultura de equipo y buenos habitos de trabajo. La forma de hacer un pase, contestar una pregunta o pedir una segunda verificacion educa tanto como una clase."
          },
          {
            type: "callout-grid",
            items: [
              {
                title: "En estudiantes",
                body: "Se fortalecen cuando entienden el sentido de cada gesto, no solo el protocolo."
              },
              {
                title: "En profesionales",
                tone: "warning",
                body: "Se deterioran si la rutina, la fatiga o el cinismo se normalizan demasiado."
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
                href: "https://www.icn.ch/system/files/documents/2021-10/ICN_Code-of-Ethics_EN_Web_0.pdf",
                label: "ICN Code of Ethics for Nurses"
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
        href: "/principios-eticos-en-enfermeria/",
        chip: "Etica",
        title: "Principios eticos de enfermeria",
        description: "El marco que sostiene estos valores cuando la situacion se complica."
      },
      {
        href: "/trabajo-en-equipo-en-enfermeria/",
        chip: "Equipo",
        title: "Trabajo en equipo en enfermeria",
        description: "Muchos valores solo se hacen visibles de verdad en coordinacion con otras personas."
      },
      {
        href: "/etica-y-liderazgo/",
        chip: "Hub",
        title: "Volver a Etica y liderazgo",
        description: "Mas piezas sobre criterio profesional, comunicacion y seguridad."
      }
    ]
  }),
  createArticle("estilos-de-liderazgo-en-enfermeria", {
    title: "Estilos de liderazgo en enfermeria: tipos, ejemplos y cuando usar cada uno | Serenfermera",
    description:
      "Tipos de liderazgo en enfermeria, ventajas, riesgos y situaciones donde un estilo funciona mejor que otro.",
    eyebrow: "Etica y liderazgo",
    intro:
      "No existe un unico estilo de liderazgo valido para todos los turnos y equipos. En enfermeria, liderar bien consiste en leer la situacion, ajustar el tono y sostener el cuidado sin generar dependencia, caos ni rigidez inutil.",
    pills: ["Lectura: 8 min", "Enfoque situacional", "Comparativa rapida"],
    summary: [
      {
        label: "Punto de partida",
        text: "Un buen liderazgo no se mide por mandar mucho, sino por ayudar al equipo a cuidar mejor."
      },
      {
        label: "Lo que cambia todo",
        text: "Urgencia, madurez del equipo y claridad de roles obligan a ajustar el estilo."
      },
      {
        label: "Riesgo habitual",
        text: "Cronificar un estilo directivo o dejar vacio de liderazgo cuando hace falta cerrar decisiones."
      }
    ],
    sections: [
      {
        id: "tipos",
        title: "Los estilos que mas suelen aparecer",
        tocLabel: "Tipos",
        blocks: [
          {
            type: "table",
            columns: ["Estilo", "Aporta", "Riesgo"],
            rows: [
              [
                "Democratico",
                "Escucha, reparte criterio y mejora implicacion del equipo.",
                "Puede ralentizar si nadie cierra decisiones."
              ],
              [
                "Transformacional",
                "Moviliza, inspira y da sentido al trabajo.",
                "Fracasa si se queda en discurso y no aterriza en sistema."
              ],
              [
                "Situacional",
                "Se adapta segun urgencia, experiencia y contexto.",
                "Exige mucha lectura real del equipo."
              ],
              [
                "Directivo",
                "Ordena rapido en crisis o escenarios muy protocolizados.",
                "Si se cronifica, infantiliza y apaga iniciativa."
              ],
              [
                "Laissez-faire",
                "Puede dar autonomia a equipos muy maduros.",
                "Con frecuencia deriva en ambiguedad y vacio de liderazgo."
              ]
            ]
          }
        ]
      },
      {
        id: "cuando",
        title: "Cuando suele funcionar mejor cada uno",
        tocLabel: "Cuando usar cada uno",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Turno complejo pero estable",
                body:
                  "El enfoque democratico o situacional suele funcionar mejor para sostener criterio compartido."
              },
              {
                title: "Deterioro o crisis",
                tone: "warning",
                body: "Hace falta mas direccion, mensajes cortos y reparto muy claro de tareas."
              },
              {
                title: "Equipo nuevo o inseguro",
                body: "Hace falta una guia mas visible, pero sin anular autonomia progresiva."
              },
              {
                title: "Equipo experto y cohesionado",
                body: "Se puede abrir mas participacion sin perder velocidad ni responsabilidad."
              }
            ]
          }
        ]
      },
      {
        id: "buen-lider",
        title: "Lo que hace reconocible a un buen liderazgo",
        tocLabel: "Buen liderazgo",
        blocks: [
          {
            type: "bullets",
            items: [
              "Prioriza con claridad y no transmite nerviosismo innecesario.",
              "Protege la seguridad sin humillar a nadie.",
              "Pide feedback y tambien corrige cuando hace falta.",
              "Da contexto, no solo ordenes.",
              "Se hace cargo del clima del equipo, no solo de la tarea."
            ]
          }
        ]
      },
      {
        id: "errores",
        title: "Errores que debilitan el liderazgo",
        tocLabel: "Errores",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Mandar sin explicar",
                body: "Reduce aprendizaje y convierte al equipo en ejecutor pasivo."
              },
              {
                title: "Dejar todo abierto",
                tone: "warning",
                body: "Escuchar no significa evitar decisiones cuando el turno necesita cierre claro."
              },
              {
                title: "Corregir humillando",
                tone: "alert",
                body: "Rompe confianza y empeora la seguridad porque la gente deja de avisar a tiempo."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/trabajo-en-equipo-en-enfermeria/",
        chip: "Equipo",
        title: "Trabajo en equipo en enfermeria",
        description: "El liderazgo se nota especialmente en como se coordina el turno."
      },
      {
        href: "/valores-profesionales-de-enfermeria/",
        chip: "Valores",
        title: "Valores profesionales de enfermeria",
        description: "Sin integridad, respeto y responsabilidad no hay liderazgo creible."
      },
      {
        href: "/etica-y-liderazgo/",
        chip: "Hub",
        title: "Mas etica y liderazgo",
        description: "Comunicacion, seguridad y decisiones complejas dentro del mismo bloque."
      }
    ]
  }),
  createArticle("trabajo-en-equipo-en-enfermeria", {
    title: "Trabajo en equipo en enfermeria: por que importa y como mejorarlo | Serenfermera",
    description:
      "Importancia del trabajo en equipo en enfermeria, errores frecuentes, claves para mejorar la coordinacion y senales de un equipo sano.",
    eyebrow: "Etica y liderazgo",
    intro:
      "En enfermeria, trabajar bien en equipo no es un extra agradable: es una condicion de seguridad, continuidad y calidad del cuidado. Cuando la coordinacion falla, aparecen errores, retrasos, dobles tareas, roces y desgaste innecesario.",
    pills: ["Lectura: 7 min", "Aplicacion en turno", "Con checklist de mejora"],
    summary: [
      {
        label: "Idea base",
        text: "El trabajo en equipo no es llevarse bien; es compartir informacion util y coordinar acciones."
      },
      {
        label: "Lo que mas dano hace",
        text: "Pases vagos, no pedir ayuda a tiempo y corregir mal deterioran seguridad y clima."
      },
      {
        label: "Meta realista",
        text: "Un equipo sano prioriza en comun, se avisa antes y corrige procesos sin humillar."
      }
    ],
    sections: [
      {
        id: "importa",
        title: "Por que importa tanto",
        tocLabel: "Por que importa",
        blocks: [
          {
            type: "paragraph",
            text:
              "La enfermeria rara vez se ejerce en solitario. Hay relevos, prioridades cambiantes, dispositivos, familias, auxiliares, medicos, supervisiones y pacientes con necesidades muy diferentes. Sin trabajo en equipo, el cuidado se fragmenta y el entorno se vuelve mas reactivo y menos seguro."
          },
          {
            type: "callout",
            title: "Idea clave",
            body:
              'El trabajo en equipo no es "llevarse bien". Es compartir informacion util, pedir ayuda a tiempo, coordinar acciones y sostener un lenguaje comun.'
          }
        ]
      },
      {
        id: "fallos",
        title: "Los fallos de equipo que mas dano hacen",
        tocLabel: "Fallos frecuentes",
        blocks: [
          {
            type: "table",
            columns: ["Fallo", "Como se nota", "Riesgo"],
            rows: [
              [
                "Pases vagos",
                "Falta contexto, prioridades o cambios recientes.",
                "Omisiones, retrasos o actuaciones incoherentes."
              ],
              [
                "No pedir ayuda",
                "La persona aguanta sola hasta saturarse.",
                "Errores por prisa, cansancio o sobrecarga."
              ],
              [
                "Mal reparto",
                "Unas cargan siempre mas y otras quedan descoordinadas.",
                "Desgaste, resentimiento y peor cobertura."
              ],
              [
                "Feedback torpe",
                "Se corrige tarde, mal o con tono defensivo.",
                "Aprendizaje pobre y clima tenso."
              ]
            ]
          }
        ]
      },
      {
        id: "mejorar",
        title: "5 formas realistas de mejorarlo",
        tocLabel: "Como mejorarlo",
        blocks: [
          {
            type: "bullets",
            items: [
              "Hacer pases cortos, claros y con prioridades visibles.",
              "Usar estructuras de comunicacion como SBAR cuando el caso lo pida.",
              "Nombrar antes los problemas que ya son evidentes para todas.",
              "Pedir segunda mirada sin vivirlo como derrota personal.",
              "Corregir procesos, no solo personas."
            ]
          }
        ]
      },
      {
        id: "checklist",
        title: "Checklist de equipo sano",
        tocLabel: "Checklist",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Si",
                body: "Se prioriza en comun, se avisa a tiempo y se habla con respeto incluso con prisa."
              },
              {
                title: "Alerta",
                tone: "warning",
                body: 'Rumores, ironias, silencios largos en incidencias o cultura de "apanatelas".'
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "SBAR en enfermeria",
        description: "Una de las herramientas mas utiles para que el equipo hable con menos ruido."
      },
      {
        href: "/estilos-de-liderazgo-en-enfermeria/",
        chip: "Liderazgo",
        title: "Estilos de liderazgo en enfermeria",
        description: "Coordinar bien el turno depende mucho de como se lidera."
      },
      {
        href: "/etica-y-liderazgo/",
        chip: "Hub",
        title: "Volver a Etica y liderazgo",
        description: "Mas piezas sobre decision, cultura de equipo y seguridad del paciente."
      }
    ]
  }),
  createArticle("ejemplos-de-enfermeria-sbar", {
    title: "SBAR en enfermeria: ejemplos practicos y plantilla | Serenfermera",
    description:
      "Que es SBAR en enfermeria, cuando usarlo, plantilla simple y ejemplos practicos para cambio de turno y escalada clinica.",
    eyebrow: "Recursos y comunicacion",
    intro:
      "SBAR es una estructura breve para transmitir una situacion clinica de forma clara: situacion, antecedentes, valoracion y recomendacion. Sirve para escalar, pasar informacion y reducir mensajes ambiguos, especialmente en momentos de presion.",
    pills: ["Lectura: 6 min", "Herramienta de comunicacion", "Con plantilla"],
    summary: [
      {
        label: "Para que sirve",
        text: "Ordenar mensajes clinicos para que la otra persona entienda rapido que pasa y que necesitas."
      },
      {
        label: "Error tipico",
        text: "Dar mucha historia y terminar sin una peticion concreta."
      },
      {
        label: "Cuando destaca",
        text: "Escaladas clinicas, cambios de turno y llamadas donde el tiempo importa."
      }
    ],
    sections: [
      {
        id: "estructura",
        title: "Como se estructura SBAR",
        tocLabel: "Estructura",
        blocks: [
          {
            type: "table",
            columns: ["Bloque", "Que dices", "Error tipico"],
            rows: [
              [
                "S: Situacion",
                "Que esta pasando ahora y por que llamas.",
                "Dar rodeos y no nombrar el problema de entrada."
              ],
              [
                "B: Background",
                "Datos previos que ayudan a entender el caso.",
                "Contar toda la historia clinica sin filtrar."
              ],
              [
                "A: Assessment",
                "Tu valoracion actual basada en lo observado.",
                "Limitarse a repetir datos sin interpretar nada."
              ],
              [
                "R: Recommendation",
                "Que necesitas, propones o esperas que ocurra.",
                "Terminar sin una peticion concreta."
              ]
            ]
          }
        ]
      },
      {
        id: "plantilla",
        title: "Plantilla rapida",
        tocLabel: "Plantilla",
        blocks: [
          {
            type: "callout",
            title: "SBAR breve",
            body:
              "S: Soy [rol], llamo por [persona/cama] porque presenta [problema actual]. B: Tiene como antecedentes o contexto relevante [dato breve]. A: Ahora observo [signos, sintomas, constantes, cambios]. R: Necesito [valoracion, indicacion, presencia] y propongo [accion concreta si procede]."
          }
        ]
      },
      {
        id: "ejemplos",
        title: "Dos ejemplos utiles",
        tocLabel: "Ejemplos",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Cambio de turno",
                body:
                  "Situacion: paciente con dolor no controlado. Background: postoperatorio reciente. Assessment: dolor 7/10, movilizacion limitada. Recommendation: reevaluar analgesia y vigilar respuesta tras la siguiente pauta."
              },
              {
                title: "Escalada clinica",
                tone: "warning",
                body:
                  "Situacion: descenso de saturacion y aumento de trabajo respiratorio. Background: infeccion respiratoria. Assessment: empeoramiento respecto a una hora antes. Recommendation: valoracion medica inmediata y nuevas instrucciones."
              }
            ]
          }
        ]
      },
      {
        id: "cuando",
        title: "Cuando usarlo",
        tocLabel: "Cuando usarlo",
        blocks: [
          {
            type: "bullets",
            items: [
              "Escalada clinica por deterioro.",
              "Pases de turno o de unidad con informacion compleja.",
              "Llamadas a otro profesional cuando necesitas una respuesta concreta.",
              "Situaciones donde hay riesgo de mensajes largos, vagos o incompletos."
            ]
          }
        ]
      },
      {
        id: "fuentes",
        title: "Fuente base",
        tocLabel: "Fuente",
        blocks: [
          {
            type: "links",
            items: [
              {
                href: "https://www.ahrq.gov/teamstepps-tools/teamstepps/instructor/reference/sbar.html",
                label: "AHRQ TeamSTEPPS: SBAR"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/trabajo-en-equipo-en-enfermeria/",
        chip: "Equipo",
        title: "Trabajo en equipo en enfermeria",
        description: "SBAR gana valor cuando el equipo comparte lenguaje y prioridades."
      },
      {
        href: "/recursos/",
        chip: "Hub",
        title: "Mas recursos de enfermeria",
        description: "Plantillas, ejemplos y apoyos breves para estudiar o trabajar mejor."
      },
      {
        href: "/etica-y-liderazgo/",
        chip: "Comunicacion",
        title: "Etica y liderazgo",
        description: "Comunicar bien tambien forma parte del cuidado seguro y responsable."
      }
    ]
  }),
  createArticle("negligencia-en-ejemplos-de-enfermeria", {
    title: "Negligencia en enfermeria: ejemplos frecuentes y como prevenirla | Serenfermera",
    description:
      "Ejemplos comunes de negligencia en enfermeria, diferencia con error y mala praxis, y claves para prevenir omisiones y fallos graves.",
    eyebrow: "Etica y seguridad",
    intro:
      "Hablar de negligencia no va de buscar culpables rapido, sino de entender donde una omision, una falta clara de diligencia o una respuesta profesional insuficiente puede causar dano serio. Distinguirla de un error o de una mala praxis ayuda a prevenir mejor.",
    pills: ["Lectura: 8 min", "Seguridad del paciente", "Con enfoque preventivo"],
    summary: [
      {
        label: "No es lo mismo que error",
        text: "La negligencia apunta a una falta relevante de cuidado esperable, no solo a que algo salio mal."
      },
      {
        label: "Donde aparece",
        text: "Omisiones de vigilancia, verificaciones basicas no hechas o deterioros no escalados a tiempo."
      },
      {
        label: "Prevencion real",
        text: "Procesos claros, cultura de ayuda y revisiones de sistema pesan mas que el miedo."
      }
    ],
    sections: [
      {
        id: "diferencia",
        title: "Error, mala praxis y negligencia no son exactamente lo mismo",
        tocLabel: "Diferencia",
        blocks: [
          {
            type: "paragraph",
            text:
              "Un error puede producirse incluso en profesionales diligentes dentro de sistemas complejos. La negligencia apunta a una falta relevante de cuidado esperado, como omitir vigilancia basica, ignorar signos claros de alarma o no realizar comprobaciones elementales que si eran exigibles."
          }
        ]
      },
      {
        id: "ejemplos",
        title: "Ejemplos que suelen repetirse",
        tocLabel: "Ejemplos",
        blocks: [
          {
            type: "table",
            columns: ["Situacion", "Que falla", "Como prevenir"],
            rows: [
              [
                "No vigilar un acceso o una herida",
                "Omision de seguimiento minimo esperable.",
                "Checklists, pases claros y reevaluacion programada."
              ],
              [
                "Error de medicacion por no verificar",
                "Fallo en comprobaciones basicas.",
                "Dobles verificaciones y lectura consciente, no automatica."
              ],
              [
                "No escalar un deterioro evidente",
                "Infravaloracion de signos de alarma.",
                "Criterios claros de escalada y cultura de pedir ayuda."
              ],
              [
                "Registro insuficiente tras una incidencia",
                "Falta trazabilidad clinica.",
                "Documentar hechos, acciones y respuesta."
              ]
            ]
          }
        ]
      },
      {
        id: "prevencion",
        title: "La mejor prevencion no es el miedo, es el sistema",
        tocLabel: "Prevencion",
        blocks: [
          {
            type: "bullets",
            items: [
              "Reducir omisiones con procesos simples y visibles.",
              "Hacer pases de turno con prioridades claras.",
              "Escalar antes, no despues.",
              "Registrar con rigor y sin maquillaje narrativo.",
              "Revisar fallos como problemas de sistema y no solo individuales."
            ]
          }
        ]
      },
      {
        id: "casos",
        title: "Que mirar antes de etiquetar una situacion",
        tocLabel: "Antes de etiquetar",
        blocks: [
          {
            type: "callout-grid",
            items: [
              {
                title: "Habia protocolo claro?",
                body: "Ayuda a distinguir entre fallo individual, ambiguedad de proceso o ambos."
              },
              {
                title: "Se detecto el riesgo?",
                body: "No es igual no ver un deterioro complejo que ignorar un signo evidente."
              },
              {
                title: "Se pidio ayuda?",
                tone: "warning",
                body: "La ausencia de escalada a tiempo suele ser una pieza importante en incidentes graves."
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
                href: "https://www.ahrq.gov/topics/medical-errors.html",
                label: "AHRQ: Medical Errors"
              },
              {
                href: "https://www.icn.ch/nursing-policy/icn-code-ethics-nurses",
                label: "ICN Code of Ethics for Nurses"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/trabajo-en-equipo-en-enfermeria/",
        chip: "Equipo",
        title: "Trabajo en equipo en enfermeria",
        description: "Muchos incidentes prevenibles mejoran cuando el equipo se coordina y escala antes."
      },
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "SBAR en enfermeria",
        description: "Una herramienta muy util para evitar omisiones y escaladas mal hechas."
      },
      {
        href: "/etica-y-liderazgo/",
        chip: "Hub",
        title: "Mas etica y liderazgo",
        description: "Seguridad, responsabilidad profesional y cultura de equipo dentro del mismo bloque."
      }
    ]
  }),
  createArticle("competencia-cultural-en-enfermeria", {
    title: "Competencia cultural en enfermeria: que es y por que importa | Serenfermera",
    description:
      "Que es la competencia cultural en enfermeria, como se aplica en la practica y que errores evita en la comunicacion y en la calidad del cuidado.",
    eyebrow: "Etica y profesionalismo",
    intro:
      "La competencia cultural consiste en cuidar con respeto, curiosidad profesional y capacidad de adaptacion. No significa saberlo todo sobre todas las culturas, sino evitar suposiciones torpes, comunicarse mejor y ofrecer un cuidado que tenga en cuenta idioma, valores, creencias, contexto social y experiencia vital.",
    pills: ["Etica asistencial", "Comunicacion", "Equidad"],
    summary: [
      {
        label: "No va de saberlo todo",
        text: "Va de preguntar antes de asumir y adaptar mejor la comunicacion y el plan."
      },
      {
        label: "Lo que mejora",
        text: "Comprension, adherencia, confianza y calidad del cuidado en contextos diversos."
      },
      {
        label: "Error comun",
        text: "Confundir cultura con estereotipo o dar por entendido lo que nunca se ha comprobado."
      }
    ],
    sections: [
      {
        id: "que-es",
        title: "Que implica en la practica",
        tocLabel: "Que implica",
        blocks: [
          {
            type: "paragraph",
            text:
              "Implica preguntar antes de asumir, explicar antes de exigir y comprobar antes de dar por entendido. Una enfermera culturalmente competente adapta la informacion, identifica barreras de idioma, reconoce que la enfermedad se interpreta de forma distinta segun la persona y evita tratar a todos los pacientes como si compartieran las mismas necesidades o apoyos familiares."
          }
        ]
      },
      {
        id: "por-que",
        title: "Por que mejora el cuidado",
        tocLabel: "Por que importa",
        blocks: [
          {
            type: "bullets",
            items: [
              "Reduce malentendidos sobre diagnostico, tratamiento y autocuidado.",
              "Mejora la adherencia cuando la informacion resulta comprensible y realista.",
              "Disminuye el riesgo de respuestas frias, paternalistas o estigmatizantes.",
              "Favorece una relacion terapeutica mas segura, especialmente en situaciones vulnerables."
            ]
          }
        ]
      },
      {
        id: "ejemplos",
        title: "Ejemplos concretos",
        tocLabel: "Ejemplos",
        blocks: [
          {
            type: "table",
            columns: ["Situacion", "Respuesta pobre", "Respuesta mejor"],
            rows: [
              [
                "Barrera de idioma",
                "Hablar mas alto o mas deprisa.",
                "Buscar interprete o apoyo adecuado y confirmar comprension."
              ],
              [
                "Creencias sobre tratamiento",
                "Etiquetar al paciente como no colaborador.",
                "Explorar miedos, expectativas y razones de rechazo o duda."
              ],
              [
                "Familia muy presente",
                "Suponer que decide por el paciente.",
                "Aclarar roles, autonomia y preferencias de cada persona."
              ],
              [
                "Diferencias en expresion del dolor",
                "Minimizar o exagerar segun sesgos propios.",
                "Valorar con herramientas y escuchar el relato del paciente."
              ]
            ]
          },
          {
            type: "callout",
            title: "No es un detalle blando",
            body:
              "La competencia cultural afecta a la seguridad, a la confianza y a la calidad del resultado clinico. Cuando la comunicacion falla, tambien falla parte del cuidado."
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
              "Confundir cultura con estereotipo.",
              "Usar a familiares como interpretes en temas delicados sin valorar riesgos.",
              "Suponer que asentir significa haber entendido.",
              "Ignorar factores de clase social, migracion, discriminacion o alfabetizacion sanitaria.",
              "Pensar que basta con ser amable para comunicar bien."
            ]
          }
        ]
      },
      {
        id: "como-mejorarla",
        title: "Como se mejora",
        tocLabel: "Como mejorarla",
        blocks: [
          {
            type: "paragraph",
            text:
              "Se mejora con escucha activa, revision de sesgos, lenguaje claro, trabajo interdisciplinar y uso correcto de recursos del centro. Tambien ayuda hacerse preguntas simples: que sabe esta persona, que teme, que entiende, quien decide con ella y que barreras reales tiene para seguir el plan."
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
            lead: "Dudas habituales al hablar de diversidad, comunicacion y cuidados.",
            items: [
              {
                question: "Es lo mismo que aprender costumbres de cada pais?",
                answer:
                  "No. Conocer contextos ayuda, pero lo decisivo es no convertir esa informacion en estereotipos. La competencia cultural exige preguntar y adaptar, no etiquetar."
              },
              {
                question: "Tambien importa en urgencias o en hospitalizacion breve?",
                answer:
                  "Si. Cuanto menos tiempo hay, mas importante es comunicar de forma clara, detectar barreras rapido y no basarse en supuestos."
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
                href: "https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=2&lvlid=53",
                label: "HHS Office of Minority Health: cultural competency resources"
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/etica-y-liderazgo/",
        chip: "Hub",
        title: "Mas etica y liderazgo",
        description: "Seguridad, comunicacion y criterio profesional tambien pasan por aqui."
      },
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "SBAR en enfermeria",
        description: "Ordenar mejor la comunicacion ayuda especialmente cuando hay barreras y alta presion."
      },
      {
        href: "/valores-profesionales-de-enfermeria/",
        chip: "Valores",
        title: "Valores profesionales de enfermeria",
        description: "Respeto, equidad y trato digno son la base visible de esta competencia."
      }
    ]
  }),
  createArticle("cuidado-humanizado-en-enfermeria", {
    title: "Cuidado humanizado en enfermeria: que es y como se nota de verdad | Serenfermera",
    description:
      "Cuidado humanizado en enfermeria: en que consiste, como se aplica y por que no es un adorno del discurso asistencial.",
    eyebrow: "Etica y liderazgo",
    intro:
      "Hablar de cuidado humanizado solo tiene sentido cuando se convierte en decisiones visibles: respetar tiempos y preferencias, proteger dignidad e intimidad, explicar con claridad y no reducir a la persona a una cama, un diagnostico o una tarea mas. Si se queda en una frase bonita, no cambia nada.",
    pills: ["Dignidad", "Persona", "Trato respetuoso"],
    summary: [
      {
        label: "Idea central",
        text: "Estos conceptos valen cuando se convierten en conducta observable."
      },
      {
        label: "Donde se ve",
        text: "En la comunicacion, en el relevo, en el trato y en la forma de decidir."
      },
      {
        label: "Riesgo",
        text: "Si queda como teoria bonita, pierde fuerza profesional."
      }
    ],
    sections: [
      {
        id: "incluye",
        title: "Que incluye un cuidado realmente humanizado",
        tocLabel: "Que incluye",
        blocks: [
          {
            type: "paragraph",
            text:
              "No consiste solo en ser amable. Implica reconocer a la persona detras del problema de salud, proteger autonomia e intimidad, adaptar la comunicacion al momento y evitar un trato mecanico que ignora miedo, cansancio o preferencias basicas."
          },
          {
            type: "bullets",
            items: [
              "Reconocer a la persona detras del diagnostico.",
              "Proteger intimidad, autonomia y capacidad de decidir cuando sea posible.",
              "Adaptar la comunicacion al momento, al miedo y a la comprension del paciente."
            ]
          }
        ]
      },
      {
        id: "ejemplos",
        title: "Ejemplos muy concretos",
        tocLabel: "Ejemplos",
        blocks: [
          {
            type: "bullets",
            items: [
              "Explicar antes de tocar, movilizar o realizar una tecnica.",
              "Preguntar por dolor, descanso y preferencias basicas antes de intervenir.",
              "Evitar conversaciones impersonales sobre el paciente delante de el.",
              "Dejar registradas necesidades o preferencias que ayuden al siguiente turno."
            ]
          },
          {
            type: "callout",
            title: "Para bajarlo a tierra",
            body:
              "Un valor profesional esta bien entendido cuando ayuda a decidir mejor en un turno real, no solo cuando suena bien en clase o en un documento."
          }
        ]
      },
      {
        id: "barreras",
        title: "Barreras habituales",
        tocLabel: "Barreras",
        blocks: [
          {
            type: "bullets",
            items: [
              "Sobrecarga asistencial y trabajo demasiado fragmentado.",
              "Rutinas que se repiten sin revisar como impactan en la persona.",
              "Uso de tecnicismos o prisas que despersonalizan la relacion.",
              "Cultura de servicio que prioriza la tarea por encima de la experiencia del paciente."
            ]
          }
        ]
      },
      {
        id: "sostener",
        title: "Como sostenerlo incluso en dias dificiles",
        tocLabel: "Como sostenerlo",
        blocks: [
          {
            type: "paragraph",
            text:
              "No siempre se puede hacer todo, pero si se puede cuidar como se hace. Incluso en dias tensos, una comunicacion clara, un lenguaje respetuoso y un registro que preserve preferencias o necesidades del paciente cambian mucho la calidad percibida y real del cuidado."
          }
        ]
      },
      {
        id: "practica",
        title: "Como trabajarlo en la practica diaria",
        tocLabel: "Practica diaria",
        blocks: [
          {
            type: "bullets",
            items: [
              "Revisar como se expresa en el lenguaje, el trato y el registro.",
              "Detectar habitos del servicio que lo favorecen o lo debilitan.",
              "Usarlo como criterio al priorizar, comunicar o resolver conflictos.",
              "Dar feedback entre companeras cuando la rutina empieza a despersonalizar el cuidado."
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
            lead: "Dudas habituales al estudiar o aplicar este enfoque en la practica.",
            items: [
              {
                question: "Por que este tema importa tanto en enfermeria?",
                answer:
                  "Porque sostiene decisiones seguras, relaciones de confianza y una practica mas seria y mas humana."
              },
              {
                question: "Como saber si no se esta quedando en teoria?",
                answer:
                  "Si no cambia la forma de actuar, comunicar o registrar, todavia no esta integrado de verdad en la practica."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/valores-profesionales-de-enfermeria/",
        chip: "Valores",
        title: "Valores profesionales de enfermeria",
        description: "La base visible que convierte dignidad y respeto en conducta diaria."
      },
      {
        href: "/cuidados-de-enfermeria-oms/",
        chip: "Persona",
        title: "Cuidados de enfermeria segun la OMS",
        description: "Otra pieza clave para conectar cuidado humanizado con atencion centrada en la persona."
      },
      {
        href: "/etica-y-liderazgo/",
        chip: "Hub",
        title: "Mas etica y liderazgo",
        description: "Mas piezas sobre criterio profesional, comunicacion y seguridad."
      }
    ]
  }),
  createArticle("veracidad-en-la-enfermeria", {
    title: "Veracidad en la enfermeria | Serenfermera",
    description:
      "Veracidad en la enfermeria: decir la verdad con criterio, registrar con fidelidad y no confundir prudencia con ocultacion.",
    eyebrow: "Etica y liderazgo",
    intro:
      "La veracidad en enfermeria no consiste en soltar informacion de cualquier manera. Consiste en comunicar con honestidad, registrar con fidelidad y sostener la confianza del paciente sin maquillajes, medias verdades ni silencios comodos. Bien entendida, no choca con el trato humano: lo fortalece.",
    pills: ["Etica asistencial", "Comunicacion", "Registro"],
    summary: [
      {
        label: "Que implica",
        text: "Honestidad al informar, claridad al explicar y rigor al documentar."
      },
      {
        label: "No es crudeza",
        text: "Decir la verdad con criterio no equivale a hacerlo sin tacto ni contexto."
      },
      {
        label: "Donde suele fallar",
        text: "En omisiones por incomodidad, en registros maquillados o en mensajes ambiguos."
      }
    ],
    sections: [
      {
        id: "practica",
        title: "Que implica en la practica",
        tocLabel: "Que implica",
        blocks: [
          {
            type: "paragraph",
            text:
              "La veracidad aparece cuando explicas una tecnica, cuando reconoces una limitacion, cuando informas de una incidencia y cuando dejas trazabilidad en el registro. No es un valor abstracto: se nota en como hablas, que omites, que prometes y que dejas escrito."
          }
        ]
      },
      {
        id: "humano",
        title: "Veracidad y trato humano no se contradicen",
        tocLabel: "Veracidad y trato humano",
        blocks: [
          {
            type: "paragraph",
            text:
              "Decir la verdad con sensibilidad no significa esconderla. Significa adaptarla al momento, al nivel de comprension y al contexto emocional sin convertir la comunicacion en tecnicismo frio ni en paternalismo. La confianza del paciente suele sufrir mas por la ambiguedad que por una verdad bien explicada."
          },
          {
            type: "callout",
            title: "Punto fino",
            body:
              "La prudencia puede ordenar como y cuando se informa, pero no justificar un relato falso o un registro incompleto."
          }
        ]
      },
      {
        id: "fallos",
        title: "Situaciones en las que suele fallar",
        tocLabel: "Situaciones de fallo",
        blocks: [
          {
            type: "bullets",
            items: [
              "Prometer resultados o tiempos que nadie puede garantizar.",
              "Ocultar una incidencia menor pensando que asi se evita conflicto.",
              "Suavizar demasiado un mensaje hasta dejarlo inutil.",
              "Registrar de forma vaga para cubrirse en lugar de describir hechos."
            ]
          }
        ]
      },
      {
        id: "clinico",
        title: "Por que es un valor clinico y no solo moral",
        tocLabel: "Por que es clinico",
        blocks: [
          {
            type: "paragraph",
            text:
              "Porque afecta seguridad, consentimiento, continuidad y toma de decisiones. Si la informacion se deforma, el paciente entiende peor, el equipo coordina peor y el registro deja de ser fiable. La veracidad protege tanto la relacion terapeutica como la calidad asistencial."
          }
        ]
      },
      {
        id: "cultivar",
        title: "Como cultivarla en el dia a dia",
        tocLabel: "Como cultivarla",
        blocks: [
          {
            type: "bullets",
            items: [
              "Hablar con claridad y no esconderte detras de formulas ambiguas.",
              "Reconocer dudas o limites antes de improvisar respuestas seguras en falso.",
              "Documentar hechos, acciones y respuestas sin maquillaje narrativo.",
              "Pedir ayuda cuando el contenido de la informacion supera tu marco de responsabilidad."
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
            lead: "Dudas comunes al hablar de veracidad en la practica asistencial.",
            items: [
              {
                question: "Decir la verdad puede aumentar ansiedad?",
                answer:
                  "Depende de como se diga. La forma importa mucho, pero la solucion no es sustituir verdad por confusion."
              },
              {
                question: "La veracidad tambien afecta al registro?",
                answer:
                  "Si. Un registro incompleto, vago o maquillado rompe este valor tanto como una explicacion poco honesta."
              }
            ]
          }
        ]
      }
    ],
    related: [
      {
        href: "/principios-eticos-en-enfermeria/",
        chip: "Etica",
        title: "Principios eticos de enfermeria",
        description: "La veracidad se entiende mejor dentro del marco general de decision etica."
      },
      {
        href: "/valores-profesionales-de-enfermeria/",
        chip: "Valores",
        title: "Valores profesionales de enfermeria",
        description: "Muy relacionada porque honestidad y responsabilidad se hacen visibles juntas."
      },
      {
        href: "/etica-y-liderazgo/",
        chip: "Hub",
        title: "Mas etica y liderazgo",
        description: "Mas contenido sobre criterio profesional, comunicacion y seguridad."
      }
    ]
  })
];
