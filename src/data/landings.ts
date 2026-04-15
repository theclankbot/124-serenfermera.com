import type { AuthoredHomePage, AuthoredHubPage } from "./landing-types";

function createHub(slug: string, page: Omit<AuthoredHubPage, "slug" | "canonicalPath">): AuthoredHubPage {
  return {
    slug,
    canonicalPath: `/${slug}/`,
    ...page
  };
}

export const authoredHome: AuthoredHomePage = {
  title: "Serenfermera | Guias y recursos para estudiar, trabajar y cuidar mejor",
  description:
    "Contenido claro para enfermeria sobre cuidados clinicos, tecnicas, planes de cuidados, etica profesional, carrera y recursos practicos.",
  canonicalPath: "/",
  eyebrow: "Guias y recursos para enfermeria",
  heading: "Contenido claro para estudiar, trabajar y cuidar mejor.",
  lede:
    "Serenfermera reune articulos utiles sobre cuidados clinicos, tecnicas, planes de cuidados, etica profesional, formacion y recursos de apoyo. La idea es sencilla: encontrar rapido lo importante y entenderlo bien.",
  actions: [
    { href: "/cuidados/", label: "Explorar cuidados", variant: "primary" },
    { href: "/planes-de-cuidados/", label: "Ver planes", variant: "secondary" }
  ],
  stats: [
    {
      title: "Cuidados",
      text: "Guias para valorar, vigilar, registrar y actuar con criterio."
    },
    {
      title: "Tecnicas",
      text: "Procedimientos explicados paso a paso, con seguridad y errores frecuentes."
    },
    {
      title: "Recursos",
      text: "Plantillas, ejemplos y apoyos rapidos para estudio o practica diaria."
    }
  ],
  featurePanel: {
    label: "Lo que vas a encontrar",
    title: "Contenido pensado para uso real.",
    body:
      "Cada pagina busca resolver una duda concreta con lenguaje claro, estructura visual y enlaces a temas relacionados para que no tengas que empezar de cero en cada consulta.",
    items: [
      {
        title: "Clinico",
        text: "Valoracion, vigilancia, cuidados prioritarios y signos de alarma."
      },
      {
        title: "Academico",
        text: "Conceptos base, planes de cuidados y recursos para estudiar mejor."
      },
      {
        title: "Profesional",
        text: "Etica, liderazgo, trabajo en equipo y desarrollo de carrera."
      }
    ]
  },
  categories: [
    {
      href: "/cuidados/",
      chip: "Cuidados",
      title: "Guias clinicas por problema o situacion asistencial",
      description: "Dolor, edema, demencia, postoperatorio y otros escenarios frecuentes.",
      tone: "accent",
      pills: ["Que vigilar", "Registro"]
    },
    {
      href: "/tecnicas-y-procedimientos/",
      chip: "Tecnicas",
      title: "Procedimientos explicados con pasos claros",
      description: "Venoclisis, Papanicolaou, cateteres y otras tecnicas de uso habitual.",
      tone: "warm",
      pills: ["Seguridad", "Checklist"]
    },
    {
      href: "/planes-de-cuidados/",
      chip: "Planes",
      title: "Valoracion, objetivos, intervenciones y evaluacion",
      description: "Planes de cuidados bien explicados para estudiar y aplicar con mas orden.",
      pills: ["NANDA NIC NOC", "Ejemplos"]
    },
    {
      href: "/etica-y-liderazgo/",
      chip: "Etica",
      title: "Decision clinica, comunicacion y trabajo en equipo",
      description: "Principios eticos, SBAR, liderazgo y situaciones que exigen criterio profesional.",
      pills: ["Casos", "Comunicacion"]
    },
    {
      href: "/carrera-en-enfermeria/",
      chip: "Carrera",
      title: "Orientacion para estudiantes y profesionales",
      description: "Especialidades, competencias, habilidades y salidas dentro de enfermeria.",
      tone: "accent",
      pills: ["Estudiantes", "Desarrollo"]
    },
    {
      href: "/recursos/",
      chip: "Recursos",
      title: "Plantillas, cronogramas y ejemplos listos para consultar",
      description: "Material breve y practico para ahorrar tiempo en estudio o trabajo diario.",
      tone: "warm",
      pills: ["Apoyos rapidos", "Ejemplos"]
    }
  ],
  band: {
    eyebrow: "Empieza aqui",
    title: "Lecturas muy utiles para arrancar con buen pie.",
    body:
      "Si es tu primera visita, estas piezas resumen bien el tono de la web: contenido practico, bien ordenado y facil de aplicar en estudio o en entorno asistencial.",
    signals: [
      { title: "Etica", text: "Principios eticos en enfermeria" },
      { title: "Tecnica", text: "Venoclisis y cuidados de enfermeria" },
      { title: "Carrera", text: "Enfermeria en salud ocupacional" },
      { title: "Metodo", text: "Plan de cuidados paso a paso" }
    ]
  },
  recommended: [
    {
      href: "/principios-eticos-en-enfermeria/",
      chip: "Etica",
      title: "Principios eticos de enfermeria explicados con ejemplos clinicos",
      description: "Autonomia, justicia, veracidad y fidelidad explicadas con lenguaje claro."
    },
    {
      href: "/valores-profesionales-de-enfermeria/",
      chip: "Profesional",
      title: "Valores profesionales de enfermeria y como se ven en la practica",
      description: "Una lectura util para traducir valores abstractos a conductas concretas."
    },
    {
      href: "/enfermeria-en-salud-ocupacional/",
      chip: "Carrera",
      title: "Enfermeria en salud ocupacional: funciones y salidas",
      description: "Una especialidad con recorrido, prevencion y mucha coordinacion con empresa."
    },
    {
      href: "/venoclisis-cuidados-de-enfermeria/",
      chip: "Tecnica",
      title: "Venoclisis: cuidados, vigilancia y complicaciones",
      description: "Una referencia rapida para una tecnica frecuente donde los detalles importan."
    }
  ],
  quickLinks: {
    eyebrow: "Accesos rapidos",
    title: "Piezas para consultar sin rodeos.",
    body:
      "Si necesitas una respuesta corta o un apoyo visual, estos recursos suelen ser el mejor punto de entrada.",
    items: [
      { href: "/ejemplos-de-enfermeria-sbar/", label: "Plantilla y ejemplos de SBAR" },
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        label: "Plan de cuidados paso a paso"
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        label: "Datos subjetivos y objetivos"
      },
      { href: "/recursos/", label: "Cronogramas, ejemplos y hojas de trabajo" }
    ]
  },
  usage: {
    eyebrow: "Como aprovechar la web",
    title: "Contenido breve arriba y desarrollo cuando hace falta.",
    body:
      "La estructura esta pensada para leer de dos maneras: una lectura rapida para resolver la duda principal y una lectura mas completa cuando necesitas contexto o repasar.",
    steps: [
      {
        step: "1",
        title: "Respuesta clara",
        body: "Las ideas clave aparecen pronto para no perder tiempo buscando lo esencial."
      },
      {
        step: "2",
        title: "Tablas y esquemas",
        body: "Las comparativas y procesos importantes se muestran de forma visual cuando aporta valor."
      },
      {
        step: "3",
        title: "Enlaces relacionados",
        body: "Cada tema conecta con otros contenidos para ampliar sin repetir lo mismo en cada pagina."
      },
      {
        step: "4",
        title: "Lenguaje natural",
        body: "El tono busca ser claro, serio y facil de seguir tanto en clase como en consulta."
      }
    ]
  }
};

export const authoredHubs = [
  createHub("etica-y-liderazgo", {
    title: "Etica y liderazgo en enfermeria | Serenfermera",
    description:
      "Hub de etica y liderazgo en enfermeria con valores profesionales, toma de decisiones, trabajo en equipo, seguridad y comunicacion clinica.",
    eyebrow: "Etica y liderazgo",
    heading: "La parte profesional que sostiene el cuidado cuando la situacion deja de ser simple.",
    lede:
      "Este bloque reune contenidos sobre principios eticos, valores, liderazgo, comunicacion, seguridad del paciente y trabajo en equipo desde situaciones que se parecen a la practica real. No son temas abstractos: aparecen en cambios de turno, decisiones de cuidado, errores, conflictos y decisiones con impacto humano.",
    bannerLabel: "Aqui se trabaja",
    bannerBody:
      "Toma de decisiones, reparto justo de la atencion, comunicacion clara en escaladas clinicas, liderazgo de turno y formas de coordinarse mejor con pacientes, familias y equipo.",
    cards: [
      {
        href: "/principios-eticos-en-enfermeria/",
        chip: "Etica",
        title: "Principios eticos de enfermeria",
        description: "Autonomia, beneficencia, justicia y otros principios explicados con ejemplos de practica.",
        tone: "accent"
      },
      {
        href: "/valores-profesionales-de-enfermeria/",
        chip: "Valores",
        title: "Valores profesionales de enfermeria",
        description: "De conceptos abstractos a conductas observables en el trabajo diario.",
        tone: "warm"
      },
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "SBAR en enfermeria",
        description: "Plantilla, ejemplos y uso inteligente en cambio de turno o escalada clinica."
      },
      {
        href: "/trabajo-en-equipo-en-enfermeria/",
        chip: "Equipo",
        title: "Trabajo en equipo en enfermeria",
        description: "Coordinacion real, errores frecuentes y formas utiles de mejorar el turno."
      },
      {
        href: "/estilos-de-liderazgo-en-enfermeria/",
        chip: "Liderazgo",
        title: "Estilos de liderazgo en enfermeria",
        description: "Comparativa practica para saber cuando dirigir mas y cuando abrir juego."
      },
      {
        href: "/negligencia-en-ejemplos-de-enfermeria/",
        chip: "Seguridad",
        title: "Negligencia en enfermeria",
        description: "Ejemplos frecuentes, diferencia con error y claves de prevencion."
      },
      {
        href: "/competencia-cultural-en-enfermeria/",
        chip: "Diversidad",
        title: "Competencia cultural en enfermeria",
        description: "Escuchar mejor, reducir sesgos y adaptar la comunicacion al contexto del paciente."
      }
    ],
    sectionKicker: "Por que importa",
    sectionTitle: "Cuando el trabajo se complica, etica y liderazgo dejan de sonar teoricos",
    sectionBody:
      "Un turno con poco tiempo, una familia enfadada, una escalada mal hecha o un paciente vulnerable muestran rapido si hay valores profesionales y liderazgo real. Este hub esta pensado para conectar esos temas con el dia a dia, no para dejarlos en definiciones bonitas.",
    callouts: [
      {
        title: "Si estas estudiando",
        body: "Empieza por principios, valores y SBAR para unir teoria con situaciones concretas."
      },
      {
        title: "Si ya trabajas",
        body: "Te interesaran liderazgo, trabajo en equipo, negligencia y competencia cultural."
      },
      {
        title: "Si coordinas personas",
        body: "Te serviran las piezas sobre estilos de liderazgo y seguridad del paciente."
      }
    ]
  }),
  createHub("carrera-en-enfermeria", {
    title: "Carrera en enfermeria | Serenfermera",
    description:
      "Hub de carrera en enfermeria con salidas, funciones, habilidades, orientacion academica y articulos para estudiantes, auxiliares y profesionales.",
    eyebrow: "Carrera y desarrollo",
    heading: "Orientacion profesional para estudiar, trabajar y crecer en enfermeria con mas criterio.",
    lede:
      "Este bloque esta pensado para estudiantes, auxiliares y enfermeras que necesitan aclarar salidas, funciones, competencias, itinerarios formativos y decisiones de carrera. Aqui no se idealiza la profesion: se explica que hace cada perfil, que exige el trabajo real y que caminos suelen tener mas sentido segun el punto de partida.",
    bannerLabel: "Te puede ayudar si buscas",
    bannerBody:
      "Entender una especialidad, comparar perfiles, revisar funciones, ordenar tu formacion o tener una idea mas realista de lo que implica cada salida profesional.",
    cards: [
      {
        href: "/enfermeria-en-salud-ocupacional/",
        chip: "Especialidad",
        title: "Enfermeria en salud ocupacional",
        description: "Funciones, competencias y papel de esta salida dentro de empresas y servicios de prevencion.",
        tone: "accent"
      },
      {
        href: "/15-cosas-que-todo-estudiante-de-enfermeria-debe-saber/",
        chip: "Estudiantes",
        title: "15 cosas que toda estudiante debe saber",
        description: "Practicas, primeros turnos, organizacion y errores comunes del inicio.",
        tone: "warm"
      },
      {
        href: "/cualidades-de-una-buena-enfermera/",
        chip: "Habilidades",
        title: "Cualidades de una buena enfermera",
        description: "Fortalezas humanas y clinicas que se notan de verdad en la practica diaria."
      },
      {
        href: "/educacion-para-la-salud-en-enfermeria-formacion/",
        chip: "Promocion",
        title: "Educacion para la salud en enfermeria",
        description: "Una base util para trabajar adherencia, autocuidado y prevencion."
      },
      {
        href: "/auxiliar-de-enfermeria-definicion/",
        chip: "Auxiliares",
        title: "Que es una auxiliar de enfermeria",
        description: "Rol, limites, tareas de apoyo y diferencias con otros perfiles sanitarios."
      },
      {
        href: "/como-homologar-el-titulo-de-auxiliar-de-enfermeria-en-espana/",
        chip: "Acceso",
        title: "Homologacion y acceso profesional",
        description: "Informacion basica para ordenar tramites y no depender de promesas confusas."
      }
    ],
    sectionKicker: "Lectura orientada",
    sectionTitle: "No todos los lectores llegan con la misma duda",
    sectionBody:
      "Si estas empezando, te serviran mas los articulos de funciones, habilidades y estudios. Si ya trabajas, probablemente te interesen las piezas de especializacion, liderazgo y educacion para la salud. Este hub esta pensado para que puedas entrar por tu situacion real, no por un orden academico artificial.",
    callouts: [
      {
        title: "Si eres estudiante",
        body: "Empieza por salidas, cualidades y piezas de aterrizaje a practicas."
      },
      {
        title: "Si eres auxiliar",
        body: "Revisa funciones, requisitos, homologacion y opciones de crecimiento profesional."
      },
      {
        title: "Si ya ejerces",
        body: "Te interesaran liderazgo, trabajo en equipo, salud ocupacional y educacion sanitaria."
      }
    ]
  }),
  createHub("recursos", {
    title: "Recursos de enfermeria | Serenfermera",
    description:
      "Hub de recursos de enfermeria con plantillas, ejemplos, esquemas y apoyos practicos para estudiar o consultar durante el trabajo.",
    eyebrow: "Recursos y ejemplos",
    heading: "Material practico para estudiar mejor y resolver dudas sin perder tiempo.",
    lede:
      "Esta seccion reune plantillas, cronogramas, ejemplos y apoyos breves pensados para aclarar conceptos, ordenar registros y tener a mano estructuras utiles antes de un caso, una practica o un examen. No sustituye el razonamiento clinico, pero si lo hace mas rapido y mas claro.",
    bannerLabel: "Encontraras",
    bannerBody:
      "Esquemas de comunicacion, recursos de valoracion, ejemplos de calculo, guias de registro y materiales pensados para reutilizar sin ruido.",
    cards: [
      {
        href: "/ejemplos-de-enfermeria-sbar/",
        chip: "Comunicacion",
        title: "SBAR en enfermeria: ejemplos y plantilla",
        description: "Estructura operativa para comunicar mejor en cambios de turno y escaladas clinicas.",
        tone: "accent"
      },
      {
        href: "/ejemplo-calculo-balance-hidrico-auxiliar-enfermeria/",
        chip: "Calculo",
        title: "Ejemplo de balance hidrico",
        description: "Entradas, salidas e interpretacion basica explicadas sin rodeos."
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        chip: "Valoracion",
        title: "Datos subjetivos y objetivos",
        description: "Recurso rapido para ordenar mejor la valoracion enfermera."
      },
      {
        href: "/cronograma-modelos-de-cuidados-enfermeria/",
        chip: "Cronograma",
        title: "Modelos de cuidados",
        description: "Ayuda visual para estudiar autoras y enfoques sin mezclar conceptos.",
        tone: "warm"
      },
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Metodo",
        title: "Plan de cuidados paso a paso",
        description: "Puerta de entrada clara a la parte mas metodica del proceso enfermero."
      },
      {
        href: "/como-hacer-una-hoja-de-cuidados-de-enfermeria/",
        chip: "Registro",
        title: "Hoja de cuidados de enfermeria",
        description: "Que debe reflejar, como ordenar la informacion y que errores evitar."
      }
    ],
    sectionKicker: "Como aprovechar este bloque",
    sectionTitle: "No todos los recursos sirven para lo mismo",
    sectionBody:
      "Si necesitas estudiar, te ayudaran mas los cronogramas y comparativas. Si estas en practicas o trabajando, suelen resultar mas utiles las plantillas de comunicacion, los ejemplos de registro y las guias cortas de calculo o valoracion. La mejor forma de usar este hub es entrar con una pregunta concreta y elegir el recurso mas operativo para esa necesidad.",
    callouts: [
      {
        title: "Para estudiar",
        body: "Cronogramas, fundamentos y comparativas ayudan a fijar mapas mentales antes de memorizar detalles."
      },
      {
        title: "Para practicas",
        body: "Plantillas de comunicacion, ejemplos de balance o hojas de cuidados ayudan a no perderte en lo basico."
      },
      {
        title: "Para trabajar",
        body: "Los recursos breves valen mas cuando permiten decidir, registrar o comunicar mejor en poco tiempo."
      }
    ]
  }),
  createHub("cuidados", {
    title: "Cuidados de enfermeria | Serenfermera",
    description:
      "Guias clinicas de enfermeria sobre dolor, edema, demencia, postoperatorio y otros cuidados frecuentes.",
    eyebrow: "Cuidados clinicos",
    heading: "Guias de enfermeria para situaciones asistenciales frecuentes.",
    lede:
      "Aqui se agrupan contenidos sobre valoracion, vigilancia, intervenciones, educacion y registro en problemas clinicos habituales. La idea es localizar rapido que observar y que pasos ayudan mas en cada escenario.",
    bannerLabel: "Que encontraras",
    bannerBody:
      "Cuidados relacionados con dolor, edema, demencia, postoperatorio, medicacion sensible y otros cuadros donde la observacion continua cambia mucho la calidad del cuidado.",
    cards: [
      {
        href: "/edema-cuidados-de-enfermeria/",
        chip: "Guia",
        title: "Edema: cuidados de enfermeria y valoracion",
        description: "Vigilancia de piel, balance hidrico, funcionalidad y signos de alarma.",
        tone: "accent"
      },
      {
        href: "/venoclisis-cuidados-de-enfermeria/",
        chip: "Tecnica relacionada",
        title: "Venoclisis: cuidados, vigilancia y complicaciones",
        description: "Preparacion, monitorizacion del punto de insercion y deteccion precoz de problemas."
      },
      {
        href: "/cuidados-de-enfermeria-demencia/",
        chip: "Guia",
        title: "Cuidados en pacientes con demencia",
        description: "Seguridad, comunicacion, entorno y apoyo a la familia.",
        tone: "warm"
      },
      {
        href: "/cuidados-de-enfermeria-al-paciente-con-dolor/",
        chip: "Guia",
        title: "Cuidados al paciente con dolor",
        description: "Valoracion, intervenciones, reevaluacion y registro bien hecho."
      },
      {
        href: "/cuidados-de-enfermeria-heparina/",
        chip: "Medicacion",
        title: "Cuidados con heparina",
        description: "Administracion segura, vigilancia y signos de sangrado."
      },
      {
        href: "/cuidados-de-enfermeria-en-cateteres/",
        chip: "Dispositivos",
        title: "Cuidados de enfermeria en cateteres",
        description: "Fijacion, permeabilidad, signos de infeccion y continuidad del cuidado."
      }
    ],
    sectionKicker: "Como estan planteadas",
    sectionTitle: "Lectura rapida para ubicar prioridades y lectura amplia para profundizar.",
    sectionBody:
      "Las guias clinicas siguen una estructura sencilla: que valorar, que vigilar, que intervenciones suelen aportar mas y que datos registrar para dejar continuidad del cuidado.",
    callouts: [
      {
        title: "Valoracion inicial",
        body: "Sintomas, cambios respecto a la situacion basal y riesgos inmediatos."
      },
      {
        title: "Vigilancia",
        body: "Signos, parametros y respuestas al tratamiento que no deberian pasar desapercibidos."
      },
      {
        title: "Intervenciones",
        body: "Medidas de enfermeria con sentido clinico y explicadas con claridad."
      },
      {
        title: "Registro",
        body: "Documentacion util para continuidad, seguridad y comunicacion con el equipo."
      }
    ]
  }),
  createHub("fundamentos-de-enfermeria", {
    title: "Fundamentos de enfermeria | Serenfermera",
    description:
      "Hub de fundamentos de enfermeria con conceptos base, valoracion, etica, marcos teoricos y piezas para entender mejor la logica del cuidado.",
    eyebrow: "Fundamentos de enfermeria",
    heading: "Conceptos base explicados con claridad para que la teoria sirva en la practica.",
    lede:
      "Este bloque reune definiciones, marcos basicos y piezas que ayudan a valorar mejor, escribir con mas precision y entender la logica del cuidado enfermero. Son contenidos utiles para estudiar, pero tambien para corregir errores de enfoque que en la practica se arrastran durante anos si nadie los aclara bien.",
    bannerLabel: "Te servira si quieres",
    bannerBody:
      "Aclarar diferencias que suelen confundirse, conectar teoria con situaciones reales y reforzar la base que sostiene la valoracion, el juicio clinico y la comunicacion profesional.",
    cards: [
      {
        href: "/enfermeria-cuidado-integral-defiicion/",
        chip: "Concepto",
        title: "Cuidado integral en enfermeria",
        description: "Que significa de verdad y como cambia la mirada cuando se aplica con coherencia.",
        tone: "accent"
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        chip: "Valoracion",
        title: "Datos subjetivos y objetivos",
        description: "Una diferencia basica que sigue generando errores en valoracion y en planes.",
        tone: "warm"
      },
      {
        href: "/principios-eticos-en-enfermeria/",
        chip: "Etica",
        title: "Principios eticos de enfermeria",
        description: "Fundamentos que ordenan decisiones concretas en la practica diaria."
      },
      {
        href: "/cuidados-de-enfermeria-oms/",
        chip: "Marco general",
        title: "Cuidados de enfermeria segun la OMS",
        description: "Una referencia para entender el papel de enfermeria dentro de la atencion en salud."
      },
      {
        href: "/proceso-salud-enfermedad-en-enfermeria/",
        chip: "Proceso",
        title: "Proceso salud enfermedad",
        description: "Como mirar al paciente mas alla del diagnostico y del sintoma aislado."
      },
      {
        href: "/cuidados-en-la-adolescencia-cto-enfermeria/",
        chip: "Etapa vital",
        title: "Cuidados en la adolescencia",
        description: "Comunicacion, prevencion y acompanamiento en una etapa con necesidades propias."
      }
    ],
    sectionKicker: "Una recomendacion simple",
    sectionTitle: "Si algo se estudia demasiado abstracto, luego cuesta usarlo",
    sectionBody:
      "Por eso este hub mezcla articulos conceptuales con piezas que aterrizan la teoria en ejemplos, comparativas y situaciones de cuidado. La combinacion de ambos niveles ayuda mas que aprender definiciones sueltas y deja una base mas util para valorar, registrar y justificar intervenciones.",
    callouts: [
      {
        title: "Si estas empezando",
        body: "Empieza por cuidado integral y por la diferencia entre datos subjetivos y objetivos."
      },
      {
        title: "Si haces practicas",
        body: "Te ayudaran mas las piezas que conectan teoria con observacion, registro y proceso enfermero."
      },
      {
        title: "Si preparas examen",
        body: "Combina este hub con recursos y planes para pasar de la definicion al caso."
      }
    ]
  }),
  createHub("planes-de-cuidados", {
    title: "Planes de cuidados de enfermeria | Serenfermera",
    description:
      "Hub de planes de cuidados de enfermeria con ejemplos, valoracion, objetivos, intervenciones y articulos para escribir planes mas claros y utiles.",
    eyebrow: "Planes de cuidados",
    heading: "Todo lo necesario para pasar de la valoracion a un plan de cuidados claro y util.",
    lede:
      "Este hub reune guias, ejemplos y apoyos para entender mejor la secuencia del proceso enfermero: recogida de datos, formulacion del problema, definicion de objetivos, intervenciones y evaluacion. La idea no es rellenar plantillas, sino ordenar el pensamiento clinico y escribir planes que realmente sirvan.",
    bannerLabel: "Aqui encontraras",
    bannerBody:
      "Explicaciones basicas, ejemplos paso a paso, articulos por contexto clinico y recursos para estudiar sin mezclar conceptos que suelen confundirse.",
    cards: [
      {
        href: "/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/",
        chip: "Empezar aqui",
        title: "Plan de cuidados paso a paso",
        description: "Una guia completa para entender como se construye un plan desde el primer dato hasta la evaluacion final.",
        tone: "accent"
      },
      {
        href: "/evaluacion-del-plan-de-cuidados-de-enfermeria/",
        chip: "Evaluacion",
        title: "Como evaluar un plan de cuidados",
        description: "Claves para saber si las intervenciones funcionan y que cambiar cuando el resultado no avanza."
      },
      {
        href: "/planes-de-cuidado-de-enfermeria-en-pediatria/",
        chip: "Pediatria",
        title: "Planes de cuidados en pediatria",
        description: "Valoracion adaptada por edad, participacion de la familia y objetivos realistas.",
        tone: "warm"
      },
      {
        href: "/plan-de-cuidados-enfermeria-duelo/",
        chip: "Salud emocional",
        title: "Plan de cuidados en duelo",
        description: "Necesidades emocionales, acompanamiento y seguimiento respetuoso."
      },
      {
        href: "/cronograma-modelos-de-cuidados-enfermeria/",
        chip: "Recurso",
        title: "Cronograma de modelos de cuidados",
        description: "Ayuda visual para estudiar teoricas, autoras y enfoques sin perder el hilo."
      },
      {
        href: "/datos-de-enfermeria-subjetivos-vs-objetivo/",
        chip: "Valoracion",
        title: "Datos subjetivos y objetivos",
        description: "Una base imprescindible para no construir planes sobre informacion mal clasificada."
      }
    ],
    sectionKicker: "Como usar este bloque",
    sectionTitle: "Si estudias o trabajas, no te sirve entrar por cualquier sitio",
    sectionBody:
      "La mejor forma de aprovechar este hub es empezar por el articulo general, seguir con valoracion y evaluacion, y despues bajar a ejemplos clinicos concretos. Asi evitas repetir frases hechas y entiendes mejor por que una intervencion encaja o no en un caso.",
    callouts: [
      {
        title: "Si estas empezando",
        body: "Empieza por el paso a paso y por la diferencia entre datos subjetivos y objetivos."
      },
      {
        title: "Si ya haces practicas",
        body: "Te ayudara revisar evaluacion del plan y ejemplos por contexto para escribir con mas criterio."
      },
      {
        title: "Si preparas examen",
        body: "Usa los cronogramas y piezas de fundamentos para fijar conceptos sin memorizar de forma ciega."
      }
    ]
  }),
  createHub("tecnicas-y-procedimientos", {
    title: "Tecnicas y procedimientos de enfermeria | Serenfermera",
    description:
      "Hub de tecnicas y procedimientos de enfermeria con preparacion, pasos clave, vigilancia posterior, seguridad y articulos practicos.",
    eyebrow: "Tecnicas y procedimientos",
    heading: "Pasos claros para realizar procedimientos con mas seguridad y mejor criterio.",
    lede:
      "Esta seccion reune tecnicas frecuentes explicadas con enfoque practico: preparacion, material, ejecucion general, observacion posterior, registro y errores que vale la pena detectar a tiempo. No sustituye protocolos del centro, pero si ayuda a entender que mirar antes, durante y despues del gesto tecnico.",
    bannerLabel: "Enfoque del hub",
    bannerBody:
      "Menos listado mecanico y mas comprension del procedimiento: que puede fallar, que vigilar y que registrar para hacerlo bien.",
    cards: [
      {
        href: "/venoclisis-cuidados-de-enfermeria/",
        chip: "Via venosa",
        title: "Venoclisis: cuidados y vigilancia",
        description: "Una tecnica frecuente donde la observacion continua marca la diferencia.",
        tone: "accent"
      },
      {
        href: "/tecnica-para-toma-de-papanicolaou-enfermeria/",
        chip: "Ginecologia",
        title: "Toma de Papanicolaou",
        description: "Preparacion, identificacion de la muestra y errores que afectan la validez.",
        tone: "warm"
      },
      {
        href: "/cuidados-de-enfermeria-en-cateteres/",
        chip: "Dispositivos",
        title: "Cuidados en cateteres",
        description: "Fijacion, permeabilidad, vigilancia y prevencion de complicaciones."
      },
      {
        href: "/cuidados-de-enfermeria-heparina/",
        chip: "Medicacion",
        title: "Cuidados con heparina",
        description: "Administracion segura y seguimiento de signos de sangrado o respuesta insuficiente."
      },
      {
        href: "/cuidados-de-enfermeria-para-nebulizaciones/",
        chip: "Respiratorio",
        title: "Nebulizaciones",
        description: "Preparacion del material, tolerancia y cierre correcto del procedimiento."
      },
      {
        href: "/cuidados-de-enfermeria-toma-de-signos-vitales/",
        chip: "Basico",
        title: "Toma de signos vitales",
        description: "Una tecnica aparentemente simple que exige metodo y buena interpretacion."
      }
    ],
    sectionKicker: "Una idea util",
    sectionTitle: "La tecnica bien hecha no termina al acabar el gesto",
    sectionBody:
      "Tambien incluye preparar al paciente, vigilar la respuesta, detectar incidencias y dejar un registro claro. Por eso este hub combina procedimientos con articulos de vigilancia posterior y seguridad, y no solo con instrucciones de paso a paso.",
    callouts: [
      {
        title: "Antes del procedimiento",
        body: "Preparacion, identificacion, material y explicacion al paciente suelen evitar muchos errores evitables."
      },
      {
        title: "Durante",
        body: "Lo importante no es solo completar la tecnica, sino observar tolerancia, asepsia y puntos criticos."
      },
      {
        title: "Despues",
        body: "La vigilancia posterior y el registro son parte del procedimiento, no una tarea secundaria."
      }
    ]
  })
] satisfies AuthoredHubPage[];

const authoredHubMap = new Map(authoredHubs.map((page) => [page.slug, page]));

export const authoredHubSlugs = new Set(authoredHubs.map((page) => page.slug));

export function getAuthoredHub(slug: string) {
  return authoredHubMap.get(slug);
}
