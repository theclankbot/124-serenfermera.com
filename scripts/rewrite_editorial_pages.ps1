param(
    [Parameter(Mandatory = $true)]
    [string]$SlugsFile
)

$ErrorActionPreference = "Stop"
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Convert-SlugToTitle {
    param([string]$Slug)

    $smallWords = @("de","del","la","las","el","los","y","en","con","para","al","vs","por","que","como","un","una","a")
    $words = $Slug -split "-"
    $result = @()

    for ($i = 0; $i -lt $words.Count; $i++) {
        $word = $words[$i]
        if ($word -match "^\d+$") {
            $result += $word
            continue
        }
        if ($i -gt 0 -and $word -in $smallWords) {
            $result += $word
            continue
        }
        if ($word.Length -gt 0) {
            $result += ($word.Substring(0,1).ToUpper() + $word.Substring(1))
        }
    }

    return ($result -join " ")
}

function Get-Hub {
    param([string]$Slug, [string]$Cluster)

    switch -Regex ($Slug) {
        "^plan-de-cuidados|^planes-de-cuidado|cronograma-modelos-de-cuidados|evaluacion-del-plan-de-cuidados|como-hacer-una-hoja-de-cuidados" { return "/planes-de-cuidados/" }
        "cuidados-de-enfermeria|edema|cancer|dolor|demencia|heparina|postoperatorio|pediatri|diabetes|movilidad-fisica|hiperglucemia|inconscientes|puerperio|cesarea|angioplastia|tdah|duelo|paliativos|histerectomia|fracturas|colostomia|radioterapia|neumonia|hemofilia|ictus|sedacion|gastrectomia|hepatitis|hemorragia|heridas|ostomia|agonia|arritmia|gastritis|tromboflebitis|hematuria|candidiasis|asmatica|distrofia|paralisis" { return "/cuidados/" }
        "etic|valores|liderazgo|trabajo-en-equipo|competencia-cultural|veracidad|fidelidad|comunicacion-terapeutica|cualidades|negligencia|sbar|saer|cuidado-humanizado|responsabilidad|compasion|profesionalismo|integridad|hipaa" { return "/etica-y-liderazgo/" }
        "enfermera-practicante|escuela-de-enfermeria|titulos-de-enfermeria|entrevista-de-enfermeria|estudiante-de-enfermeria|salud-ocupacional|auxiliar-de-enfermeria|gestion-del-cuidado|supervisora-enfermeria|formacion|salario|programa|especialidad|ejercito|colombia|profesor|homologar|trabajar-de-auxiliar|prerrequisitos|escuelas|nclex|crna|enfermera-de|tecnico-en-enfermeria|fp-auxiliar" { return "/carrera-en-enfermeria/" }
        "ejemplo|ejemplos|caso-practico|respuestas|preguntas|hoja-de-cuidados|balance-hidrico|cronograma|temas-de-salud|juegos-de-enfermeria|plantilla|mnemotecnia|tablon|tablones" { return "/recursos/" }
        "tecnica|venoclisis|papanicolaou|nebulizaciones|signos-vitales|lavado-gastrico|sonda-vesical|cateteres|curaciones" { return "/tecnicas-y-procedimientos/" }
        default {
            switch ($Cluster) {
                "Etica, liderazgo y habilidades" { return "/etica-y-liderazgo/" }
                "Carrera y desarrollo profesional" { return "/carrera-en-enfermeria/" }
                "Recursos y plantillas" { return "/recursos/" }
                "Cuidados clinicos y procedimientos" { return "/cuidados/" }
                default { return "/fundamentos-de-enfermeria/" }
            }
        }
    }
}

function Get-PageType {
    param([string]$Slug, [string]$Cluster)

    switch -Regex ($Slug) {
        "^plan-de-cuidados|^planes-de-cuidado|evaluacion-del-plan-de-cuidados" { return "care-plan" }
        "cronograma|hoja-de-cuidados|balance-hidrico|ejemplo|ejemplos|caso-practico|respuestas|preguntas|juegos-de-enfermeria|temas-de-salud|plantilla|mnemotecnia|tablon" { return "resource" }
        "etic|valores|liderazgo|trabajo-en-equipo|competencia-cultural|veracidad|fidelidad|comunicacion-terapeutica|cualidades|negligencia|sbar|saer|cuidado-humanizado|responsabilidad|compasion|profesionalismo|integridad|hipaa" { return "professional" }
        "enfermera-practicante|escuela-de-enfermeria|titulos-de-enfermeria|entrevista-de-enfermeria|estudiante-de-enfermeria|salud-ocupacional|auxiliar-de-enfermeria|gestion-del-cuidado|supervisora-enfermeria|formacion|salario|programa|especialidad|ejercito|colombia|profesor|homologar|trabajar-de-auxiliar|prerrequisitos|escuelas|nclex|crna|enfermera-de|tecnico-en-enfermeria|fp-auxiliar" { return "career" }
        "cuidados-de-enfermeria|edema|cancer|dolor|demencia|heparina|postoperatorio|diabetes|movilidad-fisica|hiperglucemia|inconscientes|puerperio|cesarea|angioplastia|tdah|duelo|paliativos|histerectomia|fracturas|colostomia|radioterapia|neumonia|hemofilia|ictus|sedacion|gastrectomia|hepatitis|hemorragia|heridas|ostomia|agonia|arritmia|gastritis|tromboflebitis|hematuria|candidiasis|asmatica|distrofia|paralisis" { return "clinical" }
        "tecnica|venoclisis|papanicolaou|nebulizaciones|signos-vitales|lavado-gastrico|cateteres|sonda-vesical|curaciones" { return "procedure" }
        default {
            if ($Cluster -eq "Recursos y plantillas") { return "resource" }
            if ($Cluster -eq "Etica, liderazgo y habilidades") { return "professional" }
            if ($Cluster -eq "Carrera y desarrollo profesional") { return "career" }
            if ($Cluster -eq "Cuidados clinicos y procedimientos") { return "clinical" }
            return "concept"
        }
    }
}

function Get-Profile {
    param([string]$Slug, [string]$Cluster)

    $type = Get-PageType -Slug $Slug -Cluster $Cluster

    if ($Slug -match "^\d+-cuidados-de-enfermeria") { return "clinical-list" }
    if ($Slug -match "^\d+-consejos|^15-cosas-|^9-divertidos") { return "advice-list" }
    if ($Slug -match "^\d+-diferencias") { return "comparison-list" }
    if ($Slug -match "^actividades-|^funciones-") { return "activities" }
    if ($Slug -match "diferencia|pros-y-contras|10-diferencias|tipos-de|cuales-son-los-tipos") { return "comparison" }
    if ($type -eq "clinical") { return "clinical" }
    if ($type -eq "procedure") { return "procedure" }
    if ($type -eq "care-plan") { return "careplan" }
    if ($type -eq "career") { return "career" }
    if ($type -eq "professional") { return "professional" }
    if ($type -eq "resource") { return "resource" }
    if ($Slug -match "^como-|^por-que-|^donde-|^cuanto-|^cual-|^que-|pregunta|respuesta|usted-pregunto|tu-pregunta|mejor-respuesta") { return "question" }
    return "definition"
}

function Get-RelatedLinks {
    param([string]$Hub)

    switch ($Hub) {
        "/cuidados/" { return @{ r1 = "../cuidados-de-enfermeria-al-paciente-con-dolor/"; l1 = "Cuidados del dolor"; r2 = "../plan-de-cuidados-enfermeria-ejemplopaso-a-paso/"; l2 = "Plan de cuidados" } }
        "/tecnicas-y-procedimientos/" { return @{ r1 = "../venoclisis-cuidados-de-enfermeria/"; l1 = "Venoclisis"; r2 = "../tecnica-para-toma-de-papanicolaou-enfermeria/"; l2 = "Toma de Papanicolaou" } }
        "/planes-de-cuidados/" { return @{ r1 = "../plan-de-cuidados-enfermeria-ejemplopaso-a-paso/"; l1 = "Plan paso a paso"; r2 = "../datos-de-enfermeria-subjetivos-vs-objetivo/"; l2 = "Datos subjetivos y objetivos" } }
        "/etica-y-liderazgo/" { return @{ r1 = "../principios-eticos-en-enfermeria/"; l1 = "Principios eticos"; r2 = "../trabajo-en-equipo-en-enfermeria/"; l2 = "Trabajo en equipo" } }
        "/carrera-en-enfermeria/" { return @{ r1 = "../15-cosas-que-todo-estudiante-de-enfermeria-debe-saber/"; l1 = "Estudiantes"; r2 = "../auxiliar-de-enfermeria-colombia/"; l2 = "Auxiliar en Colombia" } }
        "/recursos/" { return @{ r1 = "../ejemplos-de-enfermeria-sbar/"; l1 = "SBAR"; r2 = "../ejemplo-calculo-balance-hidrico-auxiliar-enfermeria/"; l2 = "Balance hidrico" } }
        default { return @{ r1 = "../datos-de-enfermeria-subjetivos-vs-objetivo/"; l1 = "Datos subjetivos y objetivos"; r2 = "../principios-eticos-en-enfermeria/"; l2 = "Principios eticos" } }
    }
}

function Get-DisplayTitle {
    param([string]$Slug)

    switch ($Slug) {
        "entapa-tecnica-enfermeria" { return "Enfermeria tecnica" }
        "enfermeria-tecnicas-clinicas-esteve" { return "Enfermeria: tecnicas clinicas de Esteve" }
        "tecnica-ecoguiada-enfermeria-angie" { return "Tecnica ecoguiada en enfermeria" }
        "tecnica-de-lavado-de-manos-en-enfermeria-video" { return "Tecnica de lavado de manos en enfermeria" }
        "tecnicas-de-entrevista-enfermeria-21" { return "21 tecnicas de entrevista en enfermeria" }
        default { return Convert-SlugToTitle -Slug $Slug }
    }
}

function New-Copy {
    param(
        [string]$Eyebrow,
        [string]$Description,
        [string]$Intro,
        [string[]]$Pills,
        [string]$S1t,
        [string]$S1l,
        [string[]]$S1b,
        [string]$S2t,
        [string]$S2l,
        [string[]]$S2b,
        [string]$S3t,
        [string]$S3l,
        [string[]]$S3b,
        [string]$S4t,
        [string]$S4l,
        [string[]]$S4b,
        [hashtable]$Related
    )

    return @{
        eyebrow = $Eyebrow
        description = $Description
        intro = $Intro
        pills = $Pills
        s1t = $S1t; s1l = $S1l; s1b = $S1b
        s2t = $S2t; s2l = $S2l; s2b = $S2b
        s3t = $S3t; s3l = $S3l; s3b = $S3b
        s4t = $S4t; s4l = $S4l; s4b = $S4b
        r1 = $Related.r1; l1 = $Related.l1; r2 = $Related.r2; l2 = $Related.l2
    }
}

function Get-CustomPageCopy {
    param([string]$Slug, [string]$Title, [string]$Cluster)

    $hub = Get-Hub -Slug $Slug -Cluster $Cluster
    $related = Get-RelatedLinks -Hub $hub

    switch ($Slug) {
        "compasion-en-enfermeria" {
            return New-Copy -Eyebrow "Etica y liderazgo" -Description "Compasion en enfermeria: que significa, como se demuestra sin invadir y por que mejora el cuidado." -Intro "La compasion en enfermeria no es lastima ni exceso emocional. Es la capacidad de reconocer el sufrimiento, responder de forma util y mantener cercania sin perder criterio clinico ni limites profesionales." -Pills @("Relacion terapeutica", "Presencia", "Limites sanos") -S1t "Que significa de verdad" -S1l "La compasion combina sensibilidad y accion." -S1b @("Reconocer el malestar fisico o emocional sin quitarle importancia.","Responder con gestos concretos: escuchar, aliviar, explicar, proteger.","Mantener la cercania sin convertir el cuidado en una reaccion impulsiva.") -S2t "Como se nota en la practica diaria" -S2l "No hace falta un gran discurso para verla." -S2b @("En la forma de acercarse a una persona asustada, dolorida o cansada.","En pequenas decisiones: cubrir intimidad, anticipar molestias, no banalizar quejas.","En la manera de sostener conversaciones dificiles con tono claro y respetuoso.") -S3t "Lo que no es compasion" -S3l "Confundirla con otras actitudes la debilita." -S3b @("No es decir si a todo ni evitar conversaciones incomodas.","No es sobreimplicarse hasta perder objetividad o agotarse.","No es tratar al paciente como incapaz ni infantilizar sus decisiones.") -S4t "Por que mejora el cuidado" -S4l "Cuando esta bien entendida, la compasion tambien ordena el trabajo." -S4b @("Favorece confianza y adherencia a las indicaciones.","Reduce sensacion de abandono en momentos vulnerables.","Ayuda a sostener un trato humano incluso con carga asistencial alta.") -Related $related
        }
        "comunicacion-terapeutica-en-enfermeria" {
            return New-Copy -Eyebrow "Etica y liderazgo" -Description "Comunicacion terapeutica en enfermeria: escucha, preguntas utiles, limites y errores que rompen la relacion de ayuda." -Intro "La comunicacion terapeutica no consiste en hablar mucho, sino en usar la conversacion para valorar mejor, reducir ansiedad, aclarar decisiones y acompanar sin confundir al paciente." -Pills @("Escucha", "Preguntas utiles", "Confianza") -S1t "Elementos que si hacen terapeutica la comunicacion" -S1l "Lo importante es el efecto que produce en la persona." -S1b @("Escucha activa sin interrumpir de forma innecesaria.","Preguntas abiertas para entender que siente, sabe o teme.","Informacion breve, comprensible y ajustada al momento clinico.") -S2t "Tecnicas que suelen funcionar bien" -S2l "Hay recursos simples que elevan mucho la calidad del intercambio." -S2b @("Parafrasear para confirmar que se ha entendido bien.","Validar emociones sin prometer lo que no se puede cumplir.","Usar silencios, tono calmado y contacto visual adecuado al contexto.") -S3t "Errores frecuentes" -S3l "Algunas frases bloquean mas de lo que ayudan." -S3b @("Responder con prisas o con tecnicismos que el paciente no entiende.","Minimizar el miedo con expresiones como no pasa nada.","Hacer preguntas seguidas sin dejar espacio para responder.") -S4t "Cuando marca una diferencia clara" -S4l "Su valor se ve sobre todo en situaciones sensibles." -S4b @("Ante dolor, incertidumbre, malas noticias o miedo al procedimiento.","En educacion sanitaria y preparacion para el alta.","En conflictos con familia o cuando el paciente no expresa bien lo que necesita.") -Related $related
        }
        "cualidades-de-liderazgo-en-enfermeria" {
            return New-Copy -Eyebrow "Etica y liderazgo" -Description "Cualidades de liderazgo en enfermeria: que rasgos ayudan de verdad, como se traducen al turno y que errores conviene evitar." -Intro "El liderazgo en enfermeria no depende solo del cargo. Muchas veces se reconoce en quien ordena prioridades, cuida el clima del equipo, comunica con claridad y sostiene decisiones dificiles sin perder respeto por las personas." -Pills @("Priorizar", "Coordinar", "Influir bien") -S1t "Rasgos que realmente ayudan" -S1l "El buen liderazgo suele ser muy concreto." -S1b @("Capacidad para priorizar con rapidez y explicar por que.","Seguridad serena para tomar decisiones y pedir apoyo cuando hace falta.","Coherencia entre lo que se exige al equipo y lo que una misma hace.") -S2t "Como se ve durante un turno" -S2l "Se nota mas en la practica que en el discurso." -S2b @("Distribuir tareas segun carga, complejidad y experiencia disponible.","Mantener informacion compartida cuando el servicio cambia rapido.","Resolver tensiones sin agravar el desgaste del equipo.") -S3t "Habilidades que se pueden entrenar" -S3l "No todo liderazgo es innato." -S3b @("Dar feedback util y no solo corregir fallos.","Delegar con seguimiento, no soltando tareas sin contexto.","Escuchar propuestas del equipo antes de cerrar una decision.") -S4t "Errores que empeoran el liderazgo" -S4l "A veces el problema no es la falta de mando, sino la mala forma de ejercerlo." -S4b @("Confundir autoridad con rigidez o trato seco.","Centralizar todo y bloquear la autonomia del equipo.","Corregir en publico o comunicar cambios tarde y mal.") -Related $related
        }
        "cuidado-humanizado-en-enfermeria" {
            return New-Copy -Eyebrow "Etica y liderazgo" -Description "Cuidado humanizado en enfermeria: en que consiste, como se aplica y por que no es un adorno del discurso asistencial." -Intro "Hablar de cuidado humanizado tiene sentido cuando se traduce en decisiones visibles: respetar tiempos y preferencias, proteger la dignidad, explicar con claridad y no reducir a la persona a una cama, un diagnostico o una tarea mas." -Pills @("Dignidad", "Persona", "Trato respetuoso") -S1t "Que incluye un cuidado realmente humanizado" -S1l "No es solo ser amable." -S1b @("Reconocer a la persona detras del problema de salud.","Proteger intimidad, autonomia y capacidad de decidir cuando sea posible.","Adaptar la comunicacion al momento, al miedo y a la comprension del paciente.") -S2t "Ejemplos muy concretos" -S2l "La diferencia suele estar en pequenos gestos mantenidos." -S2b @("Explicar antes de tocar o movilizar.","Preguntar por dolor, descanso y preferencias basicas antes de intervenir.","Evitar conversaciones impersonales sobre el paciente delante de el.") -S3t "Barreras habituales" -S3l "Muchas veces no faltan valores; faltan condiciones o habitos." -S3b @("Sobrecarga asistencial y trabajo demasiado fragmentado.","Rutinas que se repiten sin revisar como impactan en la persona.","Uso de tecnicismos o prisas que despersonalizan la relacion.") -S4t "Como sostenerlo incluso en dias dificiles" -S4l "No siempre se puede hacer todo, pero si se puede cuidar como se hace." -S4b @("Priorizar una comunicacion clara aunque el tiempo sea corto.","Mantener respeto en el lenguaje y en la forma de entrar en la habitacion.","Dejar registradas preferencias o necesidades que ayuden al siguiente turno.") -Related $related
        }
        "fidelidad-en-la-enfermeria" {
            return New-Copy -Eyebrow "Etica y liderazgo" -Description "Fidelidad en la enfermeria: lealtad bien entendida, continuidad del cuidado y compromiso con lo que se promete." -Intro "La fidelidad en enfermeria se relaciona con cumplir compromisos razonables, sostener la confianza y actuar de forma leal hacia el paciente, el equipo y la profesion. No es obediencia ciega, sino constancia y seriedad en el cuidado." -Pills @("Confianza", "Compromiso", "Continuidad") -S1t "Como se entiende la fidelidad en el cuidado" -S1l "Su nucleo esta en la confiabilidad." -S1b @("Cumplir lo que se promete cuando depende de una misma.","No abandonar una necesidad detectada sin dejar continuidad.","Ser leal a la persona atendida sin ocultar informacion importante al equipo.") -S2t "Ejemplos reales" -S2l "Se ve en acciones pequenas pero repetidas." -S2b @("Volver a reevaluar cuando se dijo que se haria.","Canalizar dudas o peticiones en lugar de dejarlas perderse.","Mantener confidencialidad y respeto incluso fuera del momento clinico.") -S3t "Confusiones frecuentes" -S3l "La fidelidad no justifica malas practicas." -S3b @("No es cubrir errores por companerismo.","No es decir lo que el paciente quiere oir aunque no sea cierto.","No es mantenerse en una conducta equivocada por no contradecir a nadie.") -S4t "Por que importa" -S4l "La confianza asistencial se construye asi." -S4b @("Mejora la percepcion de seguridad y acompanamiento.","Favorece continuidad entre turnos y profesionales.","Refuerza una cultura profesional mas seria y responsable.") -Related $related
        }
        "integridad-en-la-enfermeria" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "Integridad en la enfermeria: coherencia profesional, honestidad en el registro y firmeza para actuar bien incluso con presion." -Intro "La integridad en enfermeria tiene que ver con la coherencia entre lo que se sabe, lo que se dice y lo que finalmente se hace. Es un valor muy visible cuando hay presion, atajos tentadores o decisiones incomodas." -Pills @("Coherencia", "Honestidad", "Criterio") -S1t "Que significa actuar con integridad" -S1l "No es una idea abstracta." -S1b @("Registrar lo que realmente se ha hecho y observado.","Reconocer limites propios en lugar de aparentar seguridad falsa.","Mantener el mismo criterio etico aunque cambie el contexto o la carga de trabajo.") -S2t "Donde se pone a prueba" -S2l "Suele aparecer en momentos cotidianos." -S2b @("Cuando un error pequeno invita a mirar hacia otro lado.","Cuando hay presion por terminar rapido una tarea o un registro.","Cuando toca decir no a una practica que no es segura o no corresponde.") -S3t "Conductas que la reflejan" -S3l "La integridad se reconoce por hechos." -S3b @("Documentacion fiel y trazable.","Uso prudente de informacion confidencial.","Respeto por el paciente incluso cuando nadie parece estar mirando.") -S4t "Que la deteriora" -S4l "No siempre se rompe con grandes fallos." -S4b @("Normalizar pequenos incumplimientos por costumbre.","Ocultar dudas tecnicas por miedo a quedar mal.","Separar discurso profesional y practica real del turno.") -Related $related
        }
        "negligencia-en-enfermeria-por-falta-de-cuidados" {
            return New-Copy -Eyebrow "Etica y liderazgo" -Description "Negligencia en enfermeria por falta de cuidados: que es, ejemplos frecuentes, factores de riesgo y como prevenirla." -Intro "Hablar de negligencia por falta de cuidados no significa juzgar cualquier resultado desfavorable. Se refiere a omisiones o actuaciones claramente insuficientes cuando existia deber de cuidar, posibilidad de intervenir y dano evitable o aumento del riesgo." -Pills @("Omisiones", "Seguridad", "Prevencion") -S1t "Cuando puede hablarse de falta de cuidados" -S1l "La clave esta en la omision relevante." -S1b @("No valorar ni vigilar un problema que exija seguimiento.","No responder a signos de alarma o dejar pasar un deterioro evidente.","No cumplir medidas basicas de seguridad, higiene o posicionamiento.") -S2t "Ejemplos que ayudan a entenderlo" -S2l "El concepto se ve mejor con situaciones concretas." -S2b @("Ulceras por presion por ausencia de cambios posturales y vigilancia.","Medicacion o cuidados retrasados sin justificacion y sin comunicarlo.","Alta o continuidad mal coordinada pese a riesgos claros conocidos.") -S3t "Factores que favorecen estos fallos" -S3l "La causa rara vez es unica." -S3b @("Sobrecarga, mala organizacion y ratios insuficientes.","Registros pobres y fallos en el relevo de informacion.","Habitos inseguros normalizados en el servicio.") -S4t "Como reducir el riesgo" -S4l "Prevenir negligencias es trabajo de sistema y de profesional." -S4b @("Priorizar valoracion y reevaluacion en pacientes vulnerables.","Escalar incidencias y limitaciones reales del turno.","Documentar de forma clara lo observado, hecho y comunicado.") -Related $related
        }
        "profesionalismo-en-enfermeria" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "Profesionalismo en enfermeria: conducta, presencia, actualizacion y responsabilidad en la practica diaria." -Intro "El profesionalismo en enfermeria no depende del uniforme ni del tono serio. Se nota en la competencia, en la forma de relacionarse, en la puntualidad del registro, en el respeto por los limites del rol y en la voluntad real de mejorar." -Pills @("Conducta", "Competencia", "Actualizacion") -S1t "Que engloba el profesionalismo" -S1l "Es mas amplio que la buena educacion." -S1b @("Competencia tecnica y aprendizaje continuo.","Trato respetuoso con pacientes, familias y equipo.","Responsabilidad con horarios, registros y continuidad asistencial.") -S2t "Como se reconoce en un entorno real" -S2l "Las conductas visibles son las que cuentan." -S2b @("Prepararse antes de un procedimiento o una entrega complicada.","Pedir ayuda a tiempo sin poner en riesgo al paciente.","Cuidar la forma de comunicar incluso en momentos de tension.") -S3t "Errores que lo debilitan" -S3l "Hay actitudes pequenas que erosionan mucho la imagen profesional." -S3b @("Improvisar sin revisar informacion clave.","Hablar del paciente con ligereza o poco respeto.","Confundir experiencia con derecho a saltarse protocolos.") -S4t "Por que merece trabajarlo" -S4l "El profesionalismo protege tanto al paciente como a la propia enfermera." -S4b @("Refuerza seguridad y confianza del equipo.","Mejora la credibilidad del criterio enfermero.","Facilita crecimiento profesional sostenible en el tiempo.") -Related $related
        }
        "responsabilidad-en-enfermeria" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "Responsabilidad en enfermeria: asumir el cuidado, responder por lo hecho y actuar dentro de los propios limites." -Intro "La responsabilidad en enfermeria no es solo tener muchas tareas. Es hacerse cargo de lo que corresponde, dar continuidad a lo importante y responder con seriedad por las decisiones, omisiones y registros propios." -Pills @("Asumir", "Responder", "Continuidad") -S1t "Que implica ser responsable" -S1l "Tiene una parte tecnica y otra moral." -S1b @("Cumplir cuidados y seguimiento clinico con criterio.","No dejar problemas relevantes sin seguimiento o sin relevo claro.","Reconocer errores y actuar para corregirlos.") -S2t "Responsabilidad frente a autonomia" -S2l "Cuanta mas autonomia, mas importante es la responsabilidad." -S2b @("Priorizar bien cuando hay varias demandas simultaneas.","Saber que puede resolverse y que debe escalarse.","Tomar decisiones proporcionadas al propio nivel de competencia.") -S3t "Situaciones donde se pone a prueba" -S3l "Suele aparecer cuando el turno se complica." -S3b @("Cambios clinicos rapidos en pacientes vulnerables.","Tareas delegadas o compartidas entre varias personas.","Momentos de error, retraso o falta de recursos.") -S4t "Como fortalecerla" -S4l "La responsabilidad tambien se entrena." -S4b @("Registrar de forma util y no solo para cerrar casillas.","Revisar pendientes antes de terminar el turno.","Habituarse a comunicar incidencias de forma temprana.") -Related $related
        }
        "responsabilidad-profesional-y-tecnica-en-enfermeria" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "Responsabilidad profesional y tecnica en enfermeria: que abarca, donde empieza el limite del rol y por que el registro importa tanto." -Intro "La responsabilidad profesional y tecnica une dos planos inseparables: hacer las cosas bien y responder por hacerlas dentro del marco correcto. No basta con buena voluntad si falta competencia, ni basta destreza tecnica si se actua fuera de los limites del rol." -Pills @("Marco profesional", "Competencia", "Trazabilidad") -S1t "Dimension profesional" -S1l "Tiene que ver con el rol y con la forma de ejercerlo." -S1b @("Actuar conforme a normas, etica y organizacion del centro.","Respetar derechos del paciente y confidencialidad.","Mantener una conducta acorde con la profesion incluso bajo presion.") -S2t "Dimension tecnica" -S2l "Aqui cuenta la competencia real." -S2b @("Aplicar procedimientos con preparacion suficiente y siguiendo protocolo.","Detectar riesgos, limites y necesidad de apoyo especializado.","Actualizar conocimientos cuando cambian equipos o practicas.") -S3t "Registro y comunicacion" -S3l "La responsabilidad tambien se demuestra dejando huella clara." -S3b @("Documentar valoraciones, cuidados, incidencias y respuestas.","Comunicar cambios clinicos o errores sin retrasos innecesarios.","Evitar registros vagos que no permiten reconstruir lo ocurrido.") -S4t "Errores que comprometen esta responsabilidad" -S4l "Suelen mezclarse fallos tecnicos y fallos de criterio." -S4b @("Realizar tecnicas para las que no se esta preparada.","Asumir que si siempre se hizo asi, entonces esta bien.","No comunicar una incidencia porque parece pequena.") -Related $related
        }
        "veracidad-en-la-enfermeria" {
            return New-Copy -Eyebrow "Etica y liderazgo" -Description "Veracidad en la enfermeria: decir la verdad con criterio, registrar con fidelidad y no confundir prudencia con ocultacion." -Intro "La veracidad en enfermeria no obliga a decirlo todo de cualquier manera, pero si a no enganar, falsear ni maquillar informacion clinica o relacional. La confianza asistencial se apoya mucho en esta virtud." -Pills @("Verdad", "Confianza", "Registro fiel") -S1t "Que exige la veracidad" -S1l "Su centro es la honestidad util." -S1b @("Transmitir informacion cierta y comprensible.","Registrar hechos y observaciones sin adornarlos ni esconderlos.","No prometer resultados que no dependen de una misma.") -S2t "Como aplicarla con sensibilidad" -S2l "Verdad y buen trato no son opuestos." -S2b @("Elegir el momento y el lenguaje adecuados para informar.","Coordinar el mensaje con el equipo cuando la situacion es delicada.","Responder a preguntas sin improvisar datos que no se conocen.") -S3t "Donde se rompe con facilidad" -S3l "A veces la falta de veracidad aparece en detalles pequenos." -S3b @("Registrar como hecho algo que no se ha comprobado.","Quitar importancia a un riesgo para evitar una conversacion dificil.","Dar una respuesta segura cuando en realidad hay duda.") -S4t "Por que protege al paciente y a la profesion" -S4l "La verdad bien manejada da seguridad." -S4b @("Favorece decisiones informadas y continuidad asistencial.","Reduce malentendidos entre turnos y con familias.","Refuerza credibilidad y madurez profesional.") -Related $related
        }
        "competencias-tecnicas-enfermeria" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "Competencias tecnicas en enfermeria: que incluyen, como se desarrollan y por que no se reducen a saber hacer una tecnica." -Intro "Las competencias tecnicas en enfermeria van mas alla de ejecutar un procedimiento. Incluyen preparacion, juicio clinico, seguridad, comunicacion y capacidad para reconocer limites antes de que aparezca un problema." -Pills @("Destreza", "Juicio", "Seguridad") -S1t "Que entra dentro de una competencia tecnica" -S1l "La parte manual es solo una capa." -S1b @("Conocer indicaciones, riesgos y material necesario.","Ejecutar con orden, asepsia y respeto por el paciente.","Registrar y reevaluar el resultado despues de la tecnica.") -S2t "Como se construyen" -S2l "No nacen solo de mirar una vez el procedimiento." -S2b @("Base teorica clara antes de practicar.","Entrenamiento supervisado y repeticion con feedback.","Revision posterior de errores, tiempos y puntos ciegos.") -S3t "Como saber si una competencia esta madura" -S3l "La seguridad real se nota en el conjunto." -S3b @("La tecnica sale bien sin perder la vision global del paciente.","La persona sabe explicar que hace y por que lo hace.","Tambien sabe detenerse cuando algo no encaja.") -S4t "Errores muy comunes" -S4l "A veces se confunde rapidez con competencia." -S4b @("Aprender pasos de memoria sin entender indicaciones ni riesgos.","Forzar procedimientos ante dificultades evitables.","No actualizarse cuando cambian materiales o protocolos.") -Related $related
        }
        "cuidados-de-enfermeria-en-cateteres" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Cuidados de enfermeria en cateteres: vigilancia, mantenimiento, signos de alarma y criterios para manipularlos con seguridad." -Intro "El cuidado de los cateteres exige diferenciar bien de que dispositivo se trata, para que sirve y que riesgos arrastra. Lo esencial es mantener la funcion del cateter, reducir manipulaciones innecesarias y detectar cuanto antes obstruccion, dolor, salida accidental o infeccion." -Pills @("Dispositivo", "Asepsia", "Vigilancia") -S1t "Lo primero es identificar el tipo de cateter" -S1l "No se cuida igual un acceso urinario, venoso o enteral." -S1b @("Revisar indicacion, fecha, material y via de acceso.","Aplicar el protocolo especifico del centro segun el tipo de cateter.","Valorar si el dispositivo sigue siendo necesario.") -S2t "Cuidados que suelen repetirse" -S2l "Hay medidas basicas que marcan mucha diferencia." -S2b @("Manipular solo cuando hace falta y con higiene adecuada.","Vigilar fijacion, permeabilidad, dolor, enrojecimiento o fugas.","Mantener conexiones seguras y material limpio y ordenado.") -S3t "Signos de alarma" -S3l "No conviene esperar a que el problema sea evidente." -S3b @("Salida accidental o desplazamiento del cateter.","Dolor nuevo, edema, secrecion, fiebre o mal funcionamiento.","Resistencia al uso, obstruccion o flujo anormal.") -S4t "Que registrar siempre" -S4l "El registro ahorra muchos problemas entre turnos." -S4b @("Tipo de cateter, estado y cuidados realizados.","Incidencias, tolerancia y respuesta del paciente.","Comunicaciones al equipo y decisiones posteriores.") -Related $related
        }
        "cuidados-de-enfermeria-para-nebulizaciones" {
            return New-Copy -Eyebrow "Cuidados clinicos" -Description "Cuidados de enfermeria para nebulizaciones: preparacion, vigilancia de la tolerancia, educacion y puntos de seguridad." -Intro "La nebulizacion parece sencilla, pero requiere valorar bien el objetivo, la tolerancia respiratoria y la capacidad del paciente para seguir la tecnica. El mayor error es convertirla en un gesto rutinario sin observar si realmente esta ayudando." -Pills @("Respiratorio", "Administracion", "Tolerancia") -S1t "Antes de iniciar la nebulizacion" -S1l "La preparacion cambia mucho la utilidad del procedimiento." -S1b @("Confirmar medicacion, dosis, indicacion y via de administracion.","Comprobar estado respiratorio basal y cooperacion del paciente.","Explicar como respirar durante la sesion y resolver dudas simples.") -S2t "Que vigilar durante la administracion" -S2l "La observacion continua es parte del cuidado." -S2b @("Trabajo respiratorio, tos, disnea, saturacion o ansiedad creciente.","Ajuste de mascarilla o boquilla y correcta nebulizacion del farmaco.","Respuesta clinica y posibles efectos como temblor o taquicardia segun el medicamento.") -S3t "Cuidados al terminar" -S3l "El cierre importa tanto como el inicio." -S3b @("Reevaluar alivio sintomatico y tolerancia general.","Favorecer higiene del dispositivo segun indicaciones del centro o del fabricante.","Reforzar educacion si el paciente va a continuar nebulizaciones en casa.") -S4t "Cuando pedir reevaluacion" -S4l "No toda falta de mejoria significa repetir sin mas." -S4b @("Si aumenta la disnea o el paciente no tolera el procedimiento.","Si no hay efecto esperado tras la administracion prevista.","Si aparecen signos de broncoespasmo, mareo o deterioro general.") -Related $related
        }
        "cuidados-de-enfermeria-toma-de-signos-vitales" {
            return New-Copy -Eyebrow "Cuidados clinicos" -Description "Cuidados de enfermeria en la toma de signos vitales: preparacion, tecnica correcta, interpretacion conjunta y errores frecuentes." -Intro "Tomar signos vitales no es solo apuntar cifras. El valor real aparece cuando se obtiene una medida fiable, se compara con la situacion del paciente y se reconoce si el cambio exige repetir, vigilar mas de cerca o avisar al equipo." -Pills @("Medicion", "Interpretacion", "Registro") -S1t "Preparacion para medir bien" -S1l "Una cifra mala obtenida sigue siendo una cifra mala." -S1b @("Identificar al paciente y elegir equipo adecuado.","Favorecer reposo breve si el contexto lo permite.","Evitar manguitos, termometros o posiciones que distorsionen la lectura.") -S2t "Que no debe perderse al medir" -S2l "La tecnica importa, pero tambien el contexto." -S2b @("Frecuencia respiratoria observada con calma y sin anunciarla en exceso.","Tension arterial con talla de manguito correcta.","Relacion entre temperatura, pulso, tension, saturacion y aspecto general.") -S3t "Como interpretar los datos" -S3l "Las cifras aisladas dicen poco si no se conectan entre si." -S3b @("Comparar con valores previos y situacion basal.","Valorar sintomas acompanantes como dolor, confusion o dificultad respiratoria.","Repetir la medicion si el resultado no encaja con el estado clinico.") -S4t "Errores muy frecuentes" -S4l "Suelen ser fallos pequenos que alteran mucho la lectura." -S4b @("Medir deprisa y registrar sin revisar si el dato es creible.","No observar al paciente mientras se toman las constantes.","Quedarse con el numero y no con el cambio clinico.") -Related $related
        }
        "deterioro-de-la-integridad-cutanea-cuidados-de-enfermeria" {
            return New-Copy -Eyebrow "Cuidados clinicos" -Description "Deterioro de la integridad cutanea: valoracion, cuidados de enfermeria, prevencion y signos que obligan a reevaluar." -Intro "Cuando la piel pierde integridad, enfermeria tiene un papel central en valorar la lesion, proteger el tejido, aliviar factores que la empeoran y vigilar signos de infeccion o mala evolucion. No es solo curar: es entender por que la piel se dano y que la mantiene en riesgo." -Pills @("Piel", "Prevencion", "Vigilancia") -S1t "Evaluacion de la piel y de la lesion" -S1l "La observacion detallada orienta todo lo demas." -S1b @("Localizacion, tamano, profundidad, exudado y aspecto del lecho.","Dolor, estado de la piel perilesional y signos de infeccion.","Factores asociados como inmovilidad, humedad, nutricion o friccion.") -S2t "Cuidados que suelen ser prioritarios" -S2l "El objetivo no es solo cubrir la lesion." -S2b @("Proteger la zona y reducir presion, roce o humedad.","Mantener higiene suave y tecnica de cura acorde al protocolo.","Favorecer nutricion, hidratacion y cambios posturales cuando corresponda.") -S3t "Signos de mala evolucion" -S3l "Detectarlos pronto cambia mucho el manejo." -S3b @("Aumento de dolor, olor, exudado o eritema alrededor.","Necrosis nueva, sangrado inusual o ampliacion de la lesion.","Fiebre, deterioro general o ausencia total de mejoria.") -S4t "Que registrar para dar continuidad" -S4l "El seguimiento fotografico o descriptivo debe ser util, no decorativo." -S4b @("Aspecto de la lesion y cambios respecto a dias previos.","Cuidados aplicados y respuesta observada.","Factores de riesgo persistentes y comunicacion al equipo.") -Related $related
        }
        "lavado-gastrico-tecnica-enfermeria" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Lavado gastrico en enfermeria: en que contexto se contempla, preparacion, vigilancia y riesgos que nunca deben banalizarse." -Intro "El lavado gastrico es una tecnica invasiva que hoy se reserva a situaciones muy concretas y siempre dentro de indicacion medica y protocolo institucional. Desde enfermeria, lo importante es preparar bien, vigilar estrechamente y conocer complicaciones potenciales." -Pills @("Tecnica invasiva", "Indicacion limitada", "Seguridad") -S1t "Cuando se contempla y cuando exige prudencia" -S1l "No es un procedimiento de uso rutinario." -S1b @("Se valora en contextos muy seleccionados y con criterio medico claro.","La indicacion depende del riesgo, el tiempo y el tipo de sustancia implicada.","Hay contraindicaciones y situaciones donde el riesgo supera el posible beneficio.") -S2t "Papel de enfermeria antes y durante" -S2l "La seguridad empieza en la preparacion." -S2b @("Comprobar prescripcion, material, via aerea y monitorizacion segun protocolo.","Colaborar en posicionamiento, proteccion y control de la tolerancia.","Observar aspiracion, sangrado, resistencia o cambios respiratorios.") -S3t "Riesgos y complicaciones" -S3l "Aqui no conviene minimizar nada." -S3b @("Broncoaspiracion y compromiso respiratorio.","Lesion de mucosas, dolor o sangrado.","Desequilibrios o deterioro hemodinamico si el procedimiento se complica.") -S4t "Que debe quedar documentado" -S4l "La trazabilidad del procedimiento es clave." -S4b @("Motivo, momento, tolerancia y material utilizado.","Aspecto del contenido drenado si es relevante.","Incidencias, respuesta del paciente y avisos al equipo medico.") -Related $related
        }
        "procedimientos-y-tecnicas-basicas-de-enfermeria" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "Procedimientos y tecnicas basicas de enfermeria: cuales son, que pilares comparten y como aprenderlos con criterio." -Intro "Las tecnicas basicas de enfermeria forman la base del cuidado diario. Aunque unas sean muy simples y otras mas complejas, casi todas comparten el mismo esqueleto: valorar, preparar, ejecutar con seguridad, reevaluar y registrar." -Pills @("Base asistencial", "Seguridad", "Metodo") -S1t "Que suele entrar en este grupo" -S1l "Son procedimientos muy presentes en la practica." -S1b @("Higiene, movilizacion, toma de constantes y administracion de cuidados simples.","Tecnicas de apoyo diagnostico o terapeutico segun el servicio.","Registros, educacion breve y vigilancia posterior a cada procedimiento.") -S2t "Pilares comunes a casi todas las tecnicas" -S2l "Ese nucleo comun evita muchos errores." -S2b @("Verificar indicacion, identidad y material.","Explicar de forma breve lo que se va a hacer.","Mantener seguridad, intimidad y buena documentacion.") -S3t "Como estudiarlas mejor" -S3l "Memorizar pasos sin entenderlos sirve poco." -S3b @("Agruparlas por objetivo y no solo por listado.","Relacionar cada tecnica con su riesgo principal.","Practicar observando por que se hace cada paso y no solo el orden.") -S4t "Errores al empezar" -S4l "Son fallos tipicos de etapas iniciales." -S4b @("Centrarse en la mano y olvidar al paciente.","Saltarse preparacion por exceso de confianza.","No reevaluar el resultado una vez terminada la tecnica.") -Related $related
        }
        "revisiones-tecnicas-de-enfermeria" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "Revisiones tecnicas de enfermeria: para que sirven, que conviene revisar y como usarlas para mantener competencia real." -Intro "Revisar tecnicas de enfermeria no es volver a estudiar desde cero cada semana. Es detectar donde se ha automatizado mal, actualizar pequenos detalles y comprobar si la practica real sigue alineada con seguridad, protocolo y razonamiento clinico." -Pills @("Repaso", "Actualizacion", "Mejora") -S1t "Por que conviene hacer revisiones" -S1l "La memoria sola no garantiza buena practica." -S1b @("Las tecnicas se distorsionan con el tiempo si no se revisan.","Cambian materiales, protocolos y criterios del centro.","El repaso evita que los atajos se conviertan en costumbre.") -S2t "Que merece la pena revisar" -S2l "No solo los pasos visibles." -S2b @("Indicaciones, contraindicaciones y riesgos principales.","Preparacion del entorno y del material.","Registro, educacion al paciente y seguimiento posterior.") -S3t "Como hacer un repaso util" -S3l "Lo eficaz suele ser concreto." -S3b @("Elegir una tecnica y repasarla con un caso mental o real.","Comparar la practica habitual con el protocolo vigente.","Anotar uno o dos puntos que se estaban haciendo peor de lo esperado.") -S4t "Senales de que hace falta actualizarse" -S4l "A veces el propio turno da las pistas." -S4b @("Dudas repetidas en la misma tecnica.","Errores pequenos que se repiten entre companeras.","Cambios en equipos o materiales que nadie termino de integrar.") -Related $related
        }
        "tecnica-cateter-enfermeria" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Tecnica de cateter en enfermeria: preparacion, asepsia, vigilancia y puntos criticos para evitar complicaciones." -Intro "Toda tecnica relacionada con cateteres exige preparacion limpia, orden y mucha atencion al detalle. El objetivo no es solo colocar o manipular un dispositivo, sino hacerlo con el menor riesgo posible para la persona." -Pills @("Asepsia", "Preparacion", "Complicaciones") -S1t "Antes de empezar" -S1l "La seguridad se decide en gran parte aqui." -S1b @("Confirmar tipo de cateter, indicacion y material correcto.","Revisar alergias, posicion, consentimiento informado cuando proceda y colaboracion del paciente.","Preparar un campo de trabajo ordenado y sin interrupciones evitables.") -S2t "Puntos criticos de la tecnica" -S2l "Los fallos mas importantes suelen nacer de pequenos descuidos." -S2b @("Respetar la asepsia y no tocar zonas criticas sin necesidad.","No forzar la insercion o manipulacion ante resistencia o dolor relevante.","Mantener observacion de tolerancia y del estado del punto de acceso.") -S3t "Cuidados posteriores" -S3l "La tecnica no termina al fijar el cateter." -S3b @("Comprobar funcionamiento y comodidad.","Vigilar sangrado, edema, dolor, fugas o mala posicion.","Registrar tipo de dispositivo, incidencias y respuesta del paciente.") -S4t "Errores frecuentes" -S4l "Conviene tenerlos muy presentes." -S4b @("Empezar sin tener todo el material preparado.","Perder la asepsia por prisas o exceso de manipulacion.","No reevaluar ni comunicar una incidencia inicial.") -Related $related
        }
        "tecnica-de-barrido-en-enfermeria" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Tecnica de barrido en enfermeria: orden ambiental, limpieza segura y por que el barrido humedo se prefiere al polvo en suspension." -Intro "Cuando se habla de tecnica de barrido en entornos asistenciales, lo importante no es solo dejar el suelo limpio, sino evitar levantar polvo y microorganismos, mantener circuitos seguros y reducir riesgo de contaminacion del area de cuidados." -Pills @("Entorno seguro", "Limpieza", "Prevencion") -S1t "Que se busca con el barrido en areas asistenciales" -S1l "La finalidad es sanitaria, no solo estetica." -S1b @("Reducir suciedad visible sin dispersarla por el ambiente.","Mantener pasillos y habitaciones seguras para pacientes y personal.","Apoyar el control de infecciones y el orden del area.") -S2t "Principios basicos de una tecnica segura" -S2l "El modo de hacerlo importa mucho." -S2b @("Priorizar metodos humedos o sistemas que no levanten polvo.","Seguir circuitos limpios y sucios establecidos por el centro.","Evitar mover material clinico o tocar superficies innecesariamente.") -S3t "Que vigilar durante la tarea" -S3l "El entorno tambien da informacion." -S3b @("Obstaculos, derrames, cables o zonas de riesgo de caida.","Proximidad de pacientes vulnerables o procedimientos en curso.","Necesidad de senalizacion o coordinacion con el resto del equipo.") -S4t "Errores frecuentes" -S4l "Suelen parecer menores y no lo son." -S4b @("Barrer en seco donde el protocolo no lo recomienda.","Cruzar circuitos o usar material sin la higiene prevista.","Priorizar rapidez por encima de seguridad del entorno.") -Related $related
        }
        "tecnica-de-lavado-de-manos-en-enfermeria-video" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Tecnica de lavado de manos en enfermeria: momentos clave, secuencia basica y errores que un buen video deberia mostrar." -Intro "La higiene de manos es una de las medidas mas simples y mas decisivas para prevenir infecciones. En enfermeria no basta con saber que hay que lavarse las manos: importa cuando hacerlo, como cubrir todas las zonas y que errores se repiten en la practica real." -Pills @("Higiene de manos", "Prevencion", "5 momentos") -S1t "Cuando hay que hacerlo" -S1l "El momento correcto vale tanto como la tecnica." -S1b @("Antes de tocar al paciente y antes de una tarea aseptica.","Despues de riesgo de fluidos corporales.","Despues del contacto con el paciente y con su entorno inmediato.") -S2t "Secuencia basica que debe verse clara" -S2l "Un buen recurso visual ordena bien cada paso." -S2b @("Aplicacion suficiente de agua y jabon o solucion hidroalcoholica segun el caso.","Friccion de palmas, dorsos, espacios interdigitales, pulgares y puntas de los dedos.","Secado correcto y cierre higienico del procedimiento.") -S3t "Fallas que pasan desapercibidas" -S3l "Suelen repetirse mucho." -S3b @("Olvidar pulgares, munecas o yemas.","Hacer una friccion demasiado corta.","Tocar superficies sucias justo despues de finalizar.") -S4t "Por que sigue siendo una medida clave" -S4l "Su impacto es enorme pese a ser un gesto basico." -S4b @("Reduce transmision cruzada entre pacientes y profesionales.","Protege procedimientos limpios y accesos invasivos.","Refuerza una cultura de seguridad visible en todo el equipo.") -Related $related
        }
        "tecnica-ecoguiada-enfermeria-angie" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Tecnica ecoguiada en enfermeria: para que se usa, que aporta y que competencias exige al equipo." -Intro "La tecnica ecoguiada en enfermeria suele asociarse sobre todo a accesos vasculares y a procedimientos donde la ecografia mejora localizacion, seguridad y tasa de exito. Su valor no esta en la tecnologia por si sola, sino en la competencia para usarla con criterio." -Pills @("Ecografia", "Accesos", "Seguridad") -S1t "En que procedimientos aporta mas" -S1l "Se usa cuando ver la anatomia cambia realmente la tecnica." -S1b @("Canalizacion vascular dificil o con venas poco visibles.","Apoyo a procedimientos donde importa confirmar trayecto o profundidad.","Exploracion previa de estructuras para planificar mejor el acceso.") -S2t "Ventajas frente a una tecnica ciega" -S2l "La principal es trabajar con mas informacion." -S2b @("Mayor precision en la localizacion.","Menos intentos fallidos en pacientes complejos.","Mejor capacidad para anticipar dificultades anatomicas.") -S3t "Que exige al profesional" -S3l "No basta con sostener la sonda." -S3b @("Entrenamiento en imagen basica y coordinacion mano-ojo.","Conocimiento del procedimiento concreto y de sus riesgos.","Respeto por asepsia, ergonomia y trazabilidad del acto.") -S4t "Limites y precauciones" -S4l "La ecografia no sustituye el criterio clinico." -S4b @("No evita por si sola errores de preparacion o fijacion.","Requiere protocolo, entrenamiento y mantenimiento del equipo.","Siempre hay que vigilar complicaciones y respuesta del paciente.") -Related $related
        }
        "tecnica-saer-enfermeria" {
            return New-Copy -Eyebrow "Etica y liderazgo" -Description "Tecnica SAER en enfermeria: como estructurar una comunicacion clinica clara y reducir errores en el relevo." -Intro "SAER es una herramienta de comunicacion estructurada muy util cuando toca transmitir informacion clinica con rapidez y sin rodeos. Ordena el mensaje para que el otro profesional entienda que pasa, por que importa y que se espera de el." -Pills @("Comunicacion", "Relevo", "Seguridad") -S1t "Que significa SAER" -S1l "La fuerza del metodo esta en su secuencia." -S1b @("Situacion: que esta ocurriendo ahora.","Antecedentes: que contexto explica el problema.","Evaluacion y recomendacion: que observas y que necesitas que ocurra.") -S2t "Cuando resulta especialmente util" -S2l "Se nota mucho en situaciones de presion." -S2b @("Avisos a medicina ante deterioro del paciente.","Pases de turno con incidencias relevantes.","Derivaciones internas o llamadas a otros servicios.") -S3t "Como hacer un SAER que sirva de verdad" -S3l "La estructura ayuda, pero el contenido debe ser claro." -S3b @("Ir al punto desde la primera frase.","Aportar datos clinicos relevantes y no una cronica larga.","Cerrar con una necesidad concreta o una propuesta razonable.") -S4t "Errores frecuentes" -S4l "Suelen aparecer por exceso o por defecto." -S4b @("Hablar demasiado sin priorizar el motivo del aviso.","Llegar a la recomendacion sin datos de soporte.","Usar la plantilla como guion rigido y no como apoyo a la claridad.") -Related $related
        }
        "tecnicas-basicas-enfermeria-movilizacion-paciente" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Movilizacion del paciente en enfermeria: valoracion previa, ayudas tecnicas, ergonomia y seguridad durante la maniobra." -Intro "La movilizacion del paciente es una tecnica basica y, al mismo tiempo, una de las que mas lesiones y eventos adversos puede generar si se hace con prisas o sin valorar bien el caso. Proteger al paciente y proteger la espalda del equipo forman parte de la misma tarea." -Pills @("Ergonomia", "Seguridad", "Dependencia") -S1t "Que valorar antes de mover" -S1l "No todos los pacientes necesitan la misma ayuda." -S1b @("Nivel de conciencia, dolor, fuerza y colaboracion.","Peso, dispositivos conectados y riesgo de caidas.","Espacio disponible, numero de profesionales y ayudas tecnicas necesarias.") -S2t "Principios de una movilizacion segura" -S2l "La maniobra debe estar pensada antes de empezar." -S2b @("Explicar que se va a hacer y coordinar la cuenta o secuencia.","Usar buena base de apoyo y evitar giros bruscos de espalda.","Aprovechar sabanas deslizantes, gruas o tablas si el caso lo requiere.") -S3t "Situaciones donde conviene extremar precauciones" -S3l "Hay perfiles especialmente vulnerables." -S3b @("Pacientes inestables, posquirurgicos o con dolor intenso.","Personas con fracturas, obesidad o gran limitacion funcional.","Presencia de drenajes, vias, oxigenoterapia u otros dispositivos.") -S4t "Errores muy tipicos" -S4l "Suelen repetirse por habito." -S4b @("Intentar mover a un paciente complejo sin ayuda.","Pensar solo en el traslado y no en la tolerancia posterior.","Descuidar dispositivos y lineas durante el cambio de posicion.") -Related $related
        }
        "tecnicas-de-curaciones-en-enfermeria" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Tecnicas de curaciones en enfermeria: valoracion de la herida, limpieza, eleccion de cobertura y signos de alarma." -Intro "Las curaciones no consisten en poner un aposito y seguir. Una buena tecnica empieza valorando el tipo de herida, el tejido, el exudado, el dolor y el contexto del paciente para decidir que limpieza, que cobertura y que frecuencia tienen sentido." -Pills @("Heridas", "Apositos", "Seguimiento") -S1t "Valoracion previa de la herida" -S1l "Ese primer vistazo orienta toda la cura." -S1b @("Tipo de herida, profundidad, bordes y tejido visible.","Cantidad y aspecto del exudado.","Dolor, olor, piel perilesional y signos de infeccion.") -S2t "Pasos clave de una cura segura" -S2l "La tecnica cambia segun protocolo y tipo de lesion." -S2b @("Preparar material, higiene de manos y campo de trabajo limpio.","Limpiar y secar de forma respetuosa con el tejido.","Aplicar la cobertura indicada y dejarla bien fijada sin dano adicional.") -S3t "Que vigilar en la evolucion" -S3l "La cura no se mide solo el dia que se hace." -S3b @("Cambio en tamano, dolor, exudado o mal olor.","Maceracion, sangrado o deterioro de la piel cercana.","Tolerancia del paciente y necesidad de revisar la pauta.") -S4t "Errores frecuentes" -S4l "Muchos vienen de estandarizar en exceso." -S4b @("Usar siempre la misma cobertura para heridas distintas.","Cambiar apositos sin valorar realmente la lesion.","Olvidar educacion basica si el cuidado sigue en domicilio.") -Related $related
        }
        "tecnicas-de-entrevista-enfermeria-21" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "21 tecnicas de entrevista en enfermeria: recursos para valorar mejor, generar confianza y obtener informacion util sin invadir." -Intro "La entrevista enfermera no es un cuestionario frio. Es una herramienta para recoger informacion clinica y, al mismo tiempo, construir una relacion que facilite expresar sintomas, miedos, habitos y barreras reales del cuidado." -Pills @("Valoracion", "Escucha", "Relacion de ayuda") -S1t "Tecnicas basicas que conviene dominar" -S1l "Son las que sostienen casi toda entrevista clinica." -S1b @("Pregunta abierta, pregunta cerrada, aclaracion, resumen y parafrasis.","Escucha activa, silencio terapeutico, observacion no verbal y validacion.","Reformulacion, exploracion de prioridades y comprobacion de comprension.") -S2t "Tecnicas para profundizar sin invadir" -S2l "Ayudan cuando la informacion sale incompleta o confusa." -S2b @("Focalizar en un sintoma, una rutina o un momento concreto.","Pedir ejemplos y secuencias temporales.","Explorar creencias, miedos y expectativas con respeto.") -S3t "Como ordenar una buena entrevista" -S3l "La estructura evita perder datos utiles." -S3b @("Empezar con apertura y motivo de consulta o de valoracion.","Profundizar despues en sintomas, antecedentes y contexto.","Cerrar con resumen, dudas pendientes y plan de continuidad.") -S4t "Errores que la vuelven pobre" -S4l "Muchas veces no falta tiempo; falta metodo." -S4b @("Encadenar preguntas sin escuchar la respuesta.","Interrumpir demasiado pronto o dirigir en exceso el relato.","Tomar notas sin mirar a la persona o sin explicar lo que se hace.") -Related $related
        }
        "tecnicas-enfermeria-urgencias-y-emergencia" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Tecnicas de enfermeria en urgencias y emergencia: prioridades iniciales, habilidades clave y errores que aumentan el riesgo." -Intro "En urgencias y emergencias, la tecnica vale tanto como la capacidad de priorizar. El entorno cambia rapido, los pacientes son inestables y los errores de comunicacion o preparacion se pagan antes que en otros servicios." -Pills @("Priorizacion", "Rapidez con criterio", "Equipo") -S1t "Prioridades al inicio" -S1l "Lo primero no siempre es lo mas aparatoso." -S1b @("Valorar via aerea, respiracion, circulacion y nivel de conciencia.","Detectar riesgo vital y activar recursos con rapidez.","Ordenar el entorno para trabajar sin perder seguridad.") -S2t "Tecnicas y habilidades mas habituales" -S2l "No solo cuentan los procedimientos invasivos." -S2b @("Monitorizacion, accesos, extracciones y apoyo a maniobras urgentes.","Triage, observacion clinica y comunicacion estructurada.","Preparacion de medicacion y material con minimo margen de error.") -S3t "Que marca la diferencia en un buen equipo" -S3l "La tecnica aislada sirve menos de lo que parece." -S3b @("Roles claros y mensajes breves.","Anticipacion del siguiente paso mientras se ejecuta el actual.","Registro y relevo que permitan continuidad cuando cambia el turno o el destino del paciente.") -S4t "Errores que conviene vigilar mucho" -S4l "Suelen aparecer por saturacion o precipitacion." -S4b @("Saltar verificaciones criticas por ir deprisa.","No avisar deterioros con datos claros.","Desordenar el material y crear un entorno dificil de gestionar.") -Related $related
        }
        "vasectomia-tecnica-quirurgica-enfermeria" {
            return New-Copy -Eyebrow "Tecnicas y procedimientos" -Description "Vasectomia y enfermeria quirurgica: preparacion del paciente, apoyo intraoperatorio y cuidados posteriores." -Intro "En una vasectomia, el papel de enfermeria se mueve entre la preparacion del campo, la seguridad del procedimiento, el acompanamiento del paciente y la educacion posterior. Aunque sea una cirugia breve, conviene no banalizar ni la informacion ni el seguimiento." -Pills @("Cirugia menor", "Educacion", "Seguridad") -S1t "Preparacion previa" -S1l "La experiencia del paciente empieza antes del quirofano o de la sala." -S1b @("Verificar identidad, consentimiento y preparacion indicada.","Resolver dudas basicas sobre el procedimiento y el postoperatorio.","Preparar material, campo y condiciones de asepsia.") -S2t "Durante el procedimiento" -S2l "El apoyo enfermero ayuda a que la tecnica fluya con seguridad." -S2b @("Anticipar material y mantener campo ordenado.","Observar tolerancia, ansiedad, dolor o reacciones vasovagales.","Registrar incidencias relevantes del acto quirurgico.") -S3t "Cuidados al alta o al finalizar" -S3l "El paciente necesita instrucciones claras y realistas." -S3b @("Explicar reposo relativo, higiene y uso de soporte si se indica.","Informar sobre dolor esperado, inflamacion moderada y signos de alarma.","Recordar la importancia del seguimiento indicado por el equipo.") -S4t "Signos que obligan a reevaluar" -S4l "Aunque sea una tecnica frecuente, hay complicaciones posibles." -S4b @("Sangrado importante o aumento rapido del hematoma.","Dolor intenso no esperado o fiebre.","Secrecion, mal olor o empeoramiento local progresivo.") -Related $related
        }
        "enfermeria-tecnicas-clinicas-esteve" {
            return New-Copy -Eyebrow "Fundamentos de enfermeria" -Description "Tecnicas clinicas de enfermeria de Esteve: como aprovechar este tipo de manuales para estudiar y pasar de la teoria a la practica." -Intro "Las busquedas sobre tecnicas clinicas de enfermeria de Esteve suelen apuntar a manuales, materiales de apoyo o recopilaciones orientadas al estudio. Lo util no es acumular libros, sino saber como convertir ese material en aprendizaje que luego sirva en la practica." -Pills @("Manuales", "Estudio", "Aplicacion") -S1t "Que aportan este tipo de manuales" -S1l "Suelen ser utiles por su estructura." -S1b @("Reunen procedimientos frecuentes en un formato ordenado.","Ayudan a repasar indicaciones, material, pasos y cuidados posteriores.","Sirven como punto de partida para estudiar con menos dispersion.") -S2t "Como usarlos bien" -S2l "Un manual solo funciona si se usa con metodo." -S2b @("Leer cada tecnica entendiendo riesgos y objetivo, no solo el orden.","Comparar el contenido con protocolos actuales del centro o de la escuela.","Pasar del esquema a la practica supervisada o al caso clinico.") -S3t "Lo que un manual no resuelve por si solo" -S3l "El aprendizaje tecnico necesita mas capas." -S3b @("No sustituye demostracion ni supervision.","No recoge todas las variaciones segun servicio, paciente o material.","Puede quedarse desactualizado si no se contrasta con fuentes recientes.") -S4t "Como sacarles mas rendimiento" -S4l "Pequenos habitos cambian mucho el estudio." -S4b @("Subrayar riesgos y errores frecuentes de cada tecnica.","Relacionar cada procedimiento con un paciente o situacion real.","Revisar despues que puntos siguen generando dudas.") -Related $related
        }
        "entapa-tecnica-enfermeria" {
            return New-Copy -Eyebrow "Carrera y desarrollo" -Description "Enfermeria tecnica: que es, que funciones suele asumir y que conviene revisar antes de elegir esta formacion." -Intro "Cuando se habla de enfermeria tecnica, casi siempre se hace referencia a una formacion de orientacion practica muy presente en algunos paises de Latinoamerica. Antes de decidir, conviene mirar bien que habilita realmente, donde se reconoce y en que se diferencia de otras rutas formativas." -Pills @("Formacion", "Funciones", "Reconocimiento") -S1t "Que suele significar enfermeria tecnica" -S1l "El nombre puede cambiar segun el pais o la institucion." -S1b @("Suele referirse a estudios tecnicos o tecnicos profesionales vinculados al cuidado.","El alcance del rol depende del sistema educativo y sanitario local.","No siempre equivale a grado universitario ni a la misma autonomia laboral.") -S2t "Funciones habituales" -S2l "El trabajo real depende mucho del servicio y del marco legal." -S2b @("Apoyo directo al cuidado, higiene, confort y observacion basica.","Colaboracion en procedimientos, registros y continuidad del servicio.","Trabajo coordinado con enfermeras y otros perfiles del equipo.") -S3t "Que revisar antes de matricularse" -S3l "Aqui es donde mas errores se cometen." -S3b @("Validez oficial del programa y de la institucion.","Salidas reales en el pais donde se quiere trabajar.","Posibilidades de continuar estudios o de homologar despues.") -S4t "A quien puede interesarle" -S4l "No es la mejor ruta para todo el mundo." -S4b @("A quien busca una formacion mas aplicada y de menor duracion inicial.","A quien tiene claro el mercado laboral local donde se reconoce.","A quien compara bien esta opcion con rutas auxiliares o universitarias.") -Related $related
        }
        "los-diabeticos-pueden-recibir-masajes" {
            return New-Copy -Eyebrow "Pregunta frecuente" -Description "Los diabeticos pueden recibir masajes: respuesta prudente, situaciones donde puede haber beneficio y cuando hace falta mas cautela." -Intro "En general, una persona con diabetes puede recibir masajes, pero no conviene responder de forma automatica. La seguridad depende del control de la enfermedad, del estado de la piel, de la sensibilidad, de la circulacion y de si existen ulceras, infecciones o neuropatia relevante." -Pills @("Respuesta prudente", "Piel y pies", "Contraindicaciones") -S1t "Respuesta corta" -S1l "Si, pero con valoracion previa." -S1b @("No toda diabetes implica contraindicar el masaje.","Si hay buen estado general y no existen lesiones o complicaciones importantes, suele poder plantearse con prudencia.","La zona a tratar y la intensidad importan mucho.") -S2t "Que conviene revisar antes" -S2l "Algunas preguntas cambian por completo la decision." -S2b @("Presencia de ulceras, heridas, infeccion o piel fragil.","Neuropatia, perdida de sensibilidad o problemas vasculares en pies y piernas.","Control glucemico, sintomas actuales y tolerancia al contacto o a la presion.") -S3t "Cuando conviene evitarlo o adaptarlo mucho" -S3l "Aqui la cautela es prioritaria." -S3b @("Si hay pie diabetico, heridas abiertas o edema importante sin valorar.","Si existe dolor, perdida marcada de sensibilidad o lesion reciente.","Si el masaje es intenso y puede provocar dano sin que la persona lo note bien.") -S4t "Idea practica para orientar" -S4l "La diabetes no se evalua igual en todos los casos." -S4b @("Mejor hablar de masaje seguro que de masaje permitido o prohibido.","En zonas de riesgo, la valoracion sanitaria previa es razonable.","Si hay dudas clinicas, manda el criterio del profesional que sigue el caso.") -Related $related
        }
        "puede-un-fisioterapeuta-ordenar-una-resonancia-magnetica" {
            return New-Copy -Eyebrow "Pregunta frecuente" -Description "Puede un fisioterapeuta ordenar una resonancia magnetica: respuesta breve, factores legales y diferencia entre recomendar y prescribir." -Intro "La respuesta depende del pais, del marco legal y del entorno asistencial. No es lo mismo recomendar que una resonancia magnetica puede ser util, derivar para valoracion o tener facultad formal para solicitarla dentro del sistema sanitario." -Pills @("Marco legal", "Derivacion", "Prudencia") -S1t "La idea clave" -S1l "No existe una respuesta universal." -S1b @("Las competencias del fisioterapeuta cambian segun jurisdiccion.","En muchos sistemas la solicitud formal de pruebas de imagen sigue reservada a perfiles autorizados especificamente.","En otros contextos puede haber derivacion o solicitud protocolizada.") -S2t "Que conviene diferenciar" -S2l "Muchas dudas vienen de mezclar conceptos distintos." -S2b @("Recomendar una prueba no es lo mismo que prescribirla.","Valorar necesidad clinica no equivale siempre a poder firmar la solicitud.","El ambito publico, privado o mutual puede cambiar el circuito.") -S3t "Donde mirar la respuesta correcta" -S3l "La referencia valida es siempre local." -S3b @("Normativa profesional del pais o region.","Protocolos del centro y cartera de servicios.","Condiciones del sistema asegurador o del circuito diagnostico.") -S4t "Como responder con prudencia" -S4l "La forma segura es no prometer mas de lo que permite el marco real." -S4b @("Si hay duda, conviene revisar la regulacion aplicable antes de afirmar nada.","Tambien es util preguntar quien emite la solicitud formal en ese servicio.","En preguntas practicas, el contexto legal pesa mas que la opinion personal.") -Related $related
        }
        default { return $null }
    }
}

function Get-PageCopy {
    param([string]$Slug, [string]$Title, [string]$Cluster)

    $customCopy = Get-CustomPageCopy -Slug $Slug -Title $Title -Cluster $Cluster
    if ($null -ne $customCopy) {
        return $customCopy
    }

    $hub = Get-Hub -Slug $Slug -Cluster $Cluster
    $related = Get-RelatedLinks -Hub $hub
    $profile = Get-Profile -Slug $Slug -Cluster $Cluster

    switch ($profile) {
        "clinical-list" {
            return @{
                eyebrow = "Cuidados clinicos"
                description = "${Title}: lista editorial de prioridades, puntos de vigilancia, educacion y motivos para reevaluar."
                intro = "$Title funciona mejor como una guia de prioridades que como una receta cerrada. En temas clinicos, una lista util ayuda a no olvidar focos importantes de valoracion, seguridad, educacion y seguimiento."
                pills = @("Lista practica", "Prioridades", "Seguimiento")
                s1t = "Como leer esta lista con sentido clinico"; s1l = "El numero orienta, pero lo importante es el orden mental que deja."; s1b = @("Usarla para no perder focos relevantes de vigilancia.","Adaptar cada punto al estado real del paciente.","Priorizar lo que mas impacto tiene en seguridad y evolucion.")
                s2t = "Puntos de valoracion que no conviene saltarse"; s2l = "Antes de aplicar cualquier cuidado, hace falta entender la situacion."; s2b = @("Estado basal, sintomas actuales y riesgos asociados.","Tratamientos en curso, adherencia y capacidad de autocuidado.","Apoyo familiar, barreras practicas y signos de deterioro reciente.")
                s3t = "Cuidados que suelen aportar mas"; s3l = "No todos los puntos pesan igual en todos los casos."; s3b = @("Vigilancia clinica orientada a cambios relevantes.","Educacion breve y util para el paciente o la familia.","Registro de hallazgos y de respuesta a las intervenciones.")
                s4t = "Errores frecuentes al usar listas de cuidados"; s4l = "La lista ayuda mucho, pero tambien puede simplificar en exceso."; s4b = @("Aplicarla igual en todos los pacientes.","Memorizar puntos sin entender para que sirven.","No reevaluar prioridades cuando el cuadro cambia.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "clinical" {
            return @{
                eyebrow = "Cuidados clinicos"
                description = "${Title}: objetivos del cuidado, vigilancia, intervenciones habituales y motivos para reevaluar."
                intro = "$Title obliga a mirar la situacion completa del paciente: sintomas, cambios recientes, riesgos asociados, respuesta al tratamiento y capacidad de autocuidado. El papel de enfermeria suele estar en vigilar con criterio, actuar sobre problemas concretos y dejar continuidad en el registro."
                pills = @("Valoracion", "Vigilancia", "Seguridad")
                s1t = "Objetivos del cuidado"; s1l = "Antes de intervenir, lo primero es tener claro que se busca conseguir."; s1b = @("Detectar cambios clinicos de forma precoz.","Reducir malestar, complicaciones o deterioro funcional.","Mantener informacion util para el resto del equipo y para la continuidad del cuidado.")
                s2t = "Que revisar durante la evolucion"; s2l = "La vigilancia no consiste en acumular datos, sino en detectar lo que cambia y lo que puede empeorar."; s2b = @("Signos y sintomas que marcan la evolucion del problema principal.","Respuesta a tratamientos, tolerancia y efectos no deseados.","Necesidades de confort, movilidad, descanso, hidratacion o apoyo familiar.")
                s3t = "Intervenciones de enfermeria que suelen aparecer"; s3l = "Las medidas concretas dependen del cuadro clinico, pero hay lineas de trabajo que se repiten."; s3b = @("Reevaluar de forma periodica y ajustar frecuencia segun riesgo.","Aplicar cuidados orientados al problema principal y a la seguridad general.","Educar a la persona o a la familia sobre observacion, autocuidado y senales de alarma.")
                s4t = "Cuando pedir reevaluacion"; s4l = "Hay situaciones en las que no basta con seguir observando."; s4b = @("Si el paciente empeora o aparece un signo nuevo relevante.","Si la respuesta al tratamiento no es la esperada o surgen efectos adversos.","Si hay dudas sobre estabilidad, seguridad o capacidad para continuar cuidados.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "procedure" {
            return @{
                eyebrow = "Tecnicas y procedimientos"
                description = "${Title}: preparacion, pasos criticos, vigilancia posterior y errores frecuentes."
                intro = "En $Title, la diferencia suele estar en la preparacion y en los detalles. Tener claro que se verifica antes, que se observa durante la tecnica y que se registra despues ayuda a trabajar con mas seguridad y menos improvisacion."
                pills = @("Preparacion", "Seguridad", "Seguimiento")
                s1t = "Preparacion previa"; s1l = "Antes de empezar, hay varios puntos que merece la pena revisar."; s1b = @("Indicacion, identidad, material disponible y condiciones del entorno.","Comprension de la tecnica por parte de la persona y posibles barreras.","Medidas de seguridad, asepsia y posicion que favorezcan una ejecucion correcta.")
                s2t = "Puntos criticos durante la tecnica"; s2l = "No todos los fallos aparecen por desconocer el procedimiento; muchos vienen de perder detalles basicos."; s2b = @("Mantener orden, asepsia y observacion continua de la tolerancia.","Detectar dolor, resistencia, incidencias o signos de mala ejecucion.","No forzar pasos que requieren reevaluacion o ayuda del equipo.")
                s3t = "Cuidados despues del procedimiento"; s3l = "Una tecnica bien hecha tambien se nota en el cierre."; s3b = @("Valorar respuesta inmediata y estado general tras la intervencion.","Registrar lo realizado y las observaciones clinicamente relevantes.","Explicar cuidados posteriores o signos de alarma cuando proceda.")
                s4t = "Errores frecuentes"; s4l = "Muchas complicaciones nacen de fallos sencillos pero repetidos."; s4b = @("Empezar sin revisar indicacion, material o identidad.","Manipular mas de lo necesario o perder la asepsia.","No reevaluar ni documentar la respuesta posterior.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "careplan" {
            return @{
                eyebrow = "Planes de cuidados"
                description = "${Title}: valoracion de partida, objetivos, intervenciones y evaluacion del plan."
                intro = "Un plan de cuidados util no se construye con frases bonitas ni con casillas sueltas. En $Title, lo importante es partir de una valoracion ordenada, definir metas comprensibles y revisar si lo que se ha planteado realmente ayuda al paciente."
                pills = @("Valoracion", "Objetivos", "Evaluacion")
                s1t = "Valoracion de partida"; s1l = "El plan pierde sentido si la base esta mal construida."; s1b = @("Recoger datos clinicos y contextuales que si influyen en el problema.","Separar lo prioritario de la informacion accesoria.","Relacionar signos, sintomas y entorno antes de escribir objetivos.")
                s2t = "Objetivos y diagnosticos"; s2l = "Lo util es que el plan permita ver hacia donde va el cuidado."; s2b = @("Formular objetivos observables, realistas y ligados al caso.","Evitar etiquetas vacias que no ayudan a decidir intervenciones.","Conectar cada objetivo con una necesidad concreta del paciente.")
                s3t = "Intervenciones que sostienen el plan"; s3l = "Cada medida deberia responder a una razon clara."; s3b = @("Elegir intervenciones acordes con el problema principal y el contexto.","Explicar que se hace, con que frecuencia y que se espera observar.","Ajustar el plan si la evolucion cambia o si aparecen nuevas prioridades.")
                s4t = "Como evaluar si el plan sirve"; s4l = "La evaluacion no es el final decorativo del plan."; s4b = @("Comprobar si los objetivos se acercan, se mantienen o dejan de tener sentido.","Registrar cambios relevantes y necesidad de reformular el cuidado.","Detectar si el plan fue demasiado generico o no respondia al caso real.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "career" {
            return @{
                eyebrow = "Carrera y desarrollo"
                description = "${Title}: funciones, salidas, formacion y aspectos a revisar antes de decidir."
                intro = "$Title suele interesar cuando se esta valorando una salida profesional, una formacion o un cambio de rol. Lo importante es entender bien que significa en la practica, donde encaja y que aspectos merece la pena comprobar antes de tomar decisiones."
                pills = @("Funciones", "Formacion", "Salidas")
                s1t = "De que se esta hablando exactamente"; s1l = "Muchos errores vienen de usar una etiqueta profesional como si significara siempre lo mismo."; s1b = @("Ubicar el perfil, el rol o el itinerario del que se habla.","Distinguir entre denominacion academica, funcion real y puesto de trabajo.","Separar expectativas razonables de ideas demasiado generales.")
                s2t = "Funciones y salidas"; s2l = "La utilidad real de este tema aparece cuando se baja al trabajo diario."; s2b = @("Revisar que tareas o responsabilidades suelen asociarse a ese perfil.","Valorar en que servicios, entornos o instituciones puede encajar.","Entender con que otros roles se relaciona y donde cambia mucho la practica.")
                s3t = "Formacion o requisitos que toca revisar"; s3l = "No todos los recorridos se interpretan igual en todos los centros o paises."; s3b = @("Comprobar la validez del programa, titulo o requisito que se menciona.","Revisar exigencias de acceso, acreditacion o documentacion actual.","No dar por sentado que una experiencia o denominacion equivale a otra.")
                s4t = "Errores frecuentes al orientarse"; s4l = "Tomar decisiones de carrera con informacion incompleta suele salir caro."; s4b = @("Elegir solo por el nombre del puesto sin revisar funciones reales.","Confundir una salida formativa con una habilitacion ya cerrada.","Ignorar diferencias entre centros, paises o marcos institucionales.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "professional" {
            return @{
                eyebrow = "Etica y liderazgo"
                description = "${Title}: significado practico, como se nota en el trabajo diario y errores frecuentes."
                intro = "$Title no se entiende bien si se deja en una definicion abstracta. En enfermeria, este tipo de idea se nota en decisiones pequenas, en la relacion con pacientes y familias, en el pase de turno y en la manera de asumir responsabilidad."
                pills = @("Significado", "Ejemplos", "Practica diaria")
                s1t = "Que significa en la practica"; s1l = "La mejor forma de entenderlo es bajar el concepto al turno real."; s1b = @("Traducir la idea a conductas observables y no a frases decorativas.","Relacionarla con seguridad, confianza y calidad del cuidado.","Ubicarla dentro del trabajo en equipo y de la responsabilidad profesional.")
                s2t = "Como se reconoce en el trabajo diario"; s2l = "No hace falta esperar a un gran dilema para verlo aparecer."; s2b = @("En la forma de comunicar, registrar y priorizar.","En como se responde a errores, dudas o conflictos.","En la manera de tratar a pacientes, familias y companeras.")
                s3t = "Errores al interpretarlo"; s3l = "Algunas confusiones hacen que el concepto pierda fuerza."; s3b = @("Quedarse en definiciones bonitas sin impacto real.","Confundir firmeza profesional con rigidez o superioridad.","Usarlo como etiqueta moral en lugar de como criterio de accion.")
                s4t = "Por que merece la pena trabajarlo bien"; s4l = "Estas ideas no son un adorno teorico."; s4b = @("Ordenan decisiones cuando hay presion o incertidumbre.","Mejoran comunicacion, cohesion del equipo y trazabilidad profesional.","Ayudan a sostener una practica mas segura y mas humana.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "resource" {
            return @{
                eyebrow = "Recursos y ejemplos"
                description = "$Title como recurso de apoyo: para que sirve, como usarlo y que errores evitar."
                intro = "$Title puede ser util como apoyo rapido para estudiar, repasar o estructurar una respuesta. El valor de un recurso breve esta en ahorrar tiempo sin perder el contexto ni convertirlo en una receta mecanica."
                pills = @("Apoyo rapido", "Estudio", "Uso practico")
                s1t = "Para que puede servir"; s1l = "Un buen recurso corta camino cuando la duda esta bien definida."; s1b = @("Ordenar conceptos o pasos que suelen mezclarse.","Tener una referencia visual para estudiar con mas claridad.","Usarlo como punto de partida antes de profundizar.")
                s2t = "Como usarlo sin perder contexto"; s2l = "El problema no suele ser el recurso, sino usarlo como si resolviera todo."; s2b = @("Relacionarlo con un caso, un tema o una practica concreta.","Completarlo con material mas amplio cuando la duda lo exija.","Revisar siempre si el ejemplo encaja con el contexto real.")
                s3t = "Errores frecuentes al apoyarse en recursos"; s3l = "Los esquemas ayudan, pero tambien pueden simplificar demasiado."; s3b = @("Memorizar sin entender para que sirve cada punto.","Copiar respuestas o estructuras sin adaptarlas.","Perder de vista la razon clinica o profesional que hay detras.")
                s4t = "Que hacer despues"; s4l = "Si el recurso ya te ha orientado, el siguiente paso es usarlo con sentido."; s4b = @("Pasar del esquema a un ejemplo propio.","Compararlo con otras piezas relacionadas del sitio.","Detectar que parte del tema sigue generando dudas para seguir profundizando.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "question" {
            return @{
                eyebrow = "Pregunta frecuente"
                description = "${Title}: respuesta corta, contexto de la duda y puntos que merece revisar."
                intro = "$Title suele buscarse cuando hace falta una respuesta rapida. La respuesta corta casi nunca vive aislada: depende del contexto, del motivo de la duda y de que informacion se esta dejando fuera."
                pills = @("Respuesta corta", "Contexto", "Prudencia")
                s1t = "Respuesta corta"; s1l = "Lo primero es no simplificar demasiado."; s1b = @("Muchas preguntas de este tipo no tienen una unica respuesta valida.","El contexto clinico, profesional o normativo cambia mucho la conclusion.","Antes de afirmar o negar algo, importa revisar para quien, donde y en que situacion.")
                s2t = "Que hay detras de la pregunta"; s2l = "Detras de una duda breve suele haber una decision mas grande."; s2b = @("Una necesidad de orientacion rapida en estudio o practica.","Una mezcla de conceptos cercanos que se estan usando como si fueran iguales.","Un riesgo de quedarse solo con anecdotas o informacion suelta.")
                s3t = "Que revisar antes de decidir"; s3l = "Una buena respuesta suele nacer de comprobar el marco correcto."; s3b = @("Si hay normativa local, protocolo institucional o criterio profesional aplicable.","Si la pregunta se refiere a un caso general o a una situacion clinica concreta.","Si la fuente de la duda es fiable o solo repite una afirmacion simplificada.")
                s4t = "Cuando buscar una orientacion mas especifica"; s4l = "Hay preguntas que no conviene cerrar con una frase rapida."; s4b = @("Cuando la respuesta puede afectar seguridad, derechos o ejercicio profesional.","Cuando hay sintomas, riesgo o necesidad de valoracion individual.","Cuando la normativa o el protocolo del centro son parte central de la respuesta.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "comparison" {
            return @{
                eyebrow = "Comparativa"
                description = "${Title}: diferencias clave, usos, limites y errores al compararlo."
                intro = "$Title genera dudas porque compara perfiles, enfoques o situaciones que se parecen pero no son exactamente lo mismo. La forma mas util de aclararlo es separar definicion, objetivo, contexto y limite de cada parte."
                pills = @("Diferencias", "Uso", "Limites")
                s1t = "Diferencia principal"; s1l = "No todas las diferencias son de nombre; muchas son de objetivo o de contexto."; s1b = @("Aclarar que busca o define cada opcion que se compara.","Revisar si la diferencia es profesional, clinica, academica o de uso.","Evitar tratar como equivalentes cosas que solo se parecen por fuera.")
                s2t = "Cuando la diferencia si importa"; s2l = "A veces dos opciones parecen iguales hasta que hay que decidir."; s2b = @("Cuando cambia una indicacion, una funcion o una responsabilidad.","Cuando afecta la manera de estudiar, registrarlo o explicarlo.","Cuando una decision practica depende de elegir bien entre ambas.")
                s3t = "Errores frecuentes al compararlo"; s3l = "Las comparaciones pobres suelen mezclar niveles distintos."; s3b = @("Mirar solo el nombre y no el contexto real.","Usar ejemplos aislados como si definieran todo el tema.","Reducir la comparacion a una lista sin explicar implicaciones.")
                s4t = "Como quedarse con la idea importante"; s4l = "La mejor comparacion es la que te deja una decision mas clara."; s4b = @("Preguntarte para que quieres distinguirlo.","Anotar una diferencia central y una consecuencia practica.","Volver al contexto real donde esa diferencia cambia algo.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "comparison-list" {
            return @{
                eyebrow = "Comparativa"
                description = "${Title}: lista de diferencias utiles, contexto y puntos que realmente cambian una decision."
                intro = "$Title responde a una busqueda muy concreta: entender rapido en que se distinguen dos opciones, entornos o modelos que suelen mezclarse. Una lista breve sirve si ayuda a decidir mejor y no solo a memorizar contrastes."
                pills = @("Lista comparativa", "Contexto", "Decision")
                s1t = "Que conviene comparar de verdad"; s1l = "No todas las diferencias son igual de importantes."; s1b = @("Objetivo y funcion de cada opcion.","Marco de uso, coste o responsabilidad asociada.","Impacto practico en estudio, trabajo o atencion.")
                s2t = "Diferencias que si cambian una decision"; s2l = "Las mas utiles son las que tienen consecuencias reales."; s2b = @("Las que modifican funciones, acceso o expectativas.","Las que alteran tiempos, recursos o forma de trabajar.","Las que marcan limites claros entre opciones parecidas.")
                s3t = "Errores al leer comparativas rapidas"; s3l = "Una lista no deberia borrar el contexto."; s3b = @("Quedarse solo con el nombre o con una etiqueta simplificada.","Suponer que todas las diferencias pesan igual.","No revisar si la comparacion aplica al mismo pais, centro o sistema.")
                s4t = "Como quedarse con lo importante"; s4l = "La mejor comparativa es la que te deja una idea accionable."; s4b = @("Anotar una diferencia central y una consecuencia practica.","Volver al motivo por el que necesitabas distinguirlo.","Ampliar lectura si la decision afecta tiempo, dinero o trabajo.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "activities" {
            return @{
                eyebrow = "Trabajo diario"
                description = "${Title}: tareas habituales, como cambian segun el entorno y que habilidades ayudan mas."
                intro = "$Title se entiende mejor cuando se baja al trabajo real. En enfermeria, hablar de actividades o funciones no es solo hacer una lista de tareas: importa ver en que entorno aparecen, que objetivo tienen y como cambian segun el servicio."
                pills = @("Tareas", "Entorno", "Competencias")
                s1t = "Que suele incluir"; s1l = "Una descripcion util no se queda en verbos sueltos."; s1b = @("Atencion directa, observacion y seguimiento de necesidades del paciente.","Registro, coordinacion y continuidad con el resto del equipo.","Educacion, organizacion y respuesta a incidencias propias del servicio.")
                s2t = "Como cambia segun el entorno"; s2l = "No se trabaja igual en primaria, hospitalizacion, domicilio o urgencias."; s2b = @("El peso de la prevencion, la tecnica o la educacion cambia segun el area.","Tambien cambian ritmo, autonomia, tipo de paciente y margen de decision.","Por eso merece la pena leer cada funcion dentro del contexto donde se ejerce.")
                s3t = "Competencias que ayudan de verdad"; s3l = "La lista de tareas se queda corta si no aparece la manera de hacerlas."; s3b = @("Observar con criterio y comunicar con claridad.","Priorizar bien cuando hay carga de trabajo o cambios rapidos.","Registrar y coordinar sin perder de vista el objetivo del cuidado.")
                s4t = "Errores frecuentes al explicarlo"; s4l = "Las descripciones pobres suelen quedarse demasiado planas."; s4b = @("Confundir actividades con un listado mecanico sin objetivo.","Olvidar que el mismo rol cambia mucho segun el servicio.","Mezclar funciones propias, apoyo al equipo y responsabilidades del entorno.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        "advice-list" {
            return @{
                eyebrow = "Recursos y orientacion"
                description = "${Title}: lista de consejos o ideas practicas para estudiar, trabajar mejor o empezar con mas criterio."
                intro = "$Title encaja mejor como una lista de orientacion que como un articulo teorico. Este tipo de contenido funciona cuando convierte ideas sueltas en acciones pequenas, claras y aplicables al dia a dia."
                pills = @("Lista practica", "Habitos", "Aplicacion")
                s1t = "Para que sirve realmente esta lista"; s1l = "Su utilidad esta en ordenar lo importante sin rodeos."; s1b = @("Revisar habitos que merece la pena cuidar.","Encontrar focos de mejora en estudio o trabajo.","Tener una referencia rapida cuando hace falta orientacion.")
                s2t = "Como llevar cada consejo a la practica"; s2l = "El cambio aparece cuando se aterriza a acciones concretas."; s2b = @("Traducir cada idea a una conducta observable.","Escoger primero los puntos que mas impacto tienen.","Revisar despues si realmente cambiaron algo.")
                s3t = "Errores frecuentes con este formato"; s3l = "Una lista inspira poco si se queda en frases hechas."; s3b = @("Leerla sin adaptarla al contexto personal o profesional.","Querer aplicar todo a la vez.","Usarla como motivacion breve y no como apoyo real al cambio.")
                s4t = "Como aprovecharla mejor"; s4l = "Menos puntos, mejor aplicados, suele dar mejores resultados."; s4b = @("Elegir dos o tres ideas prioritarias.","Anotar ejemplos de como se verian en la practica.","Volver a la lista tras unos dias y ajustar lo que no funciono.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
        default {
            return @{
                eyebrow = "Fundamentos de enfermeria"
                description = "${Title}: definicion clara, aplicacion y errores frecuentes al interpretarlo."
                intro = "$Title se entiende mejor cuando se baja a situaciones reales. Si solo se memoriza una definicion, el concepto dura poco; cuando se relaciona con el trabajo diario, ayuda a valorar mejor y a pensar con mas orden."
                pills = @("Definicion", "Uso", "Confusiones")
                s1t = "Definicion clara"; s1l = "El primer paso es quitar ruido y quedarse con el nucleo de la idea."; s1b = @("Explicar el concepto con palabras comprensibles.","Distinguirlo de otros terminos que suelen confundirse.","Relacionarlo con el marco general del cuidado enfermero.")
                s2t = "Donde se nota en la practica"; s2l = "Los conceptos utiles siempre terminan apareciendo en situaciones concretas."; s2b = @("En la forma de valorar, registrar o tomar decisiones.","En la manera de comunicar con pacientes, familias o equipo.","En como se organiza el cuidado y se entiende su sentido.")
                s3t = "Confusiones frecuentes"; s3l = "Hay errores que hacen perder mucha claridad."; s3b = @("Usar la palabra sin saber a que se refiere exactamente.","Mezclar teoria, rol y procedimiento como si fueran lo mismo.","Quedarse en la definicion y no conectar con su aplicacion.")
                s4t = "Por que merece la pena entenderlo bien"; s4l = "Un concepto bien entendido ahorra muchas dudas despues."; s4b = @("Ordena estudio, razonamiento y registro.","Ayuda a no improvisar con ideas mal asentadas.","Permite interpretar mejor otros temas relacionados del sitio.")
                r1 = $related.r1; l1 = $related.l1; r2 = $related.r2; l2 = $related.l2
            }
        }
    }
}

function Render-Section {
    param([string]$Id, [string]$Title, [string]$Lead, [string[]]$Body)

    $leadHtml = if ($Lead) { "<p>$Lead</p>" } else { "" }
    $bodyHtml = if ($Body.Count -gt 0) { "<ul>" + (($Body | ForEach-Object { "<li>$_</li>" }) -join "") + "</ul>" } else { "" }

    return @"
              <article class="section-card reveal" id="$Id">
                <h2>$Title</h2>
                $leadHtml
                $bodyHtml
              </article>
"@
}

function Get-Enhancements {
    param([string]$Profile, [string]$Title)

    switch ($Profile) {
        "clinical" {
            return @{
                summary = @(
                    @{ k = "Enfocar"; v = "Identificar el problema principal, el riesgo asociado y el estado basal del paciente." },
                    @{ k = "Vigilar"; v = "Seguir signos clinicos, tolerancia al tratamiento y necesidades de autocuidado." },
                    @{ k = "Escalar"; v = "Pedir reevaluacion si hay deterioro, mala respuesta o dudas de seguridad." }
                )
                calloutTitle = "Lo que suele marcar diferencia"
                calloutText = "En cuidados clinicos, la calidad no esta solo en hacer cosas, sino en detectar cambios pronto, registrar con utilidad y actuar antes de que el problema escale."
                s5t = "Que conviene dejar registrado"
                s5l = "El registro util ahorra dudas entre turnos y mejora continuidad."
                s5b = @(
                    "Datos clinicos que explican la situacion y su evolucion.",
                    "Intervenciones realizadas, respuesta y tolerancia.",
                    "Alertas transmitidas al equipo y decisiones posteriores."
                )
                faq = @(
                    @{ q = "Que hace que un cuidado sea realmente util?"; a = "Que responda a un problema concreto, se reevalue con criterio y deje continuidad clara en el registro." },
                    @{ q = "Cuando conviene avisar al equipo?"; a = "Cuando hay deterioro, sintomas nuevos relevantes, mala respuesta o dudas reales sobre estabilidad y seguridad." }
                )
            }
        }
        "clinical-list" {
            return @{
                summary = @(
                    @{ k = "Uso rapido"; v = "Sirve para ordenar prioridades de vigilancia y cuidado en un tema frecuente." },
                    @{ k = "No sustituye"; v = "Valoracion individual, diagnostico ni protocolo especifico del centro." },
                    @{ k = "Mejor enfoque"; v = "Leer la lista como mapa de prioridades, no como receta cerrada." }
                )
                calloutTitle = "Como aprovechar una lista de cuidados"
                calloutText = "Las listas ayudan a no dejar puntos ciegos, pero siempre conviene adaptarlas al estado real del paciente, su tratamiento y el contexto del servicio."
                s5t = "Como convertir la lista en practica real"
                s5l = "El valor no esta en memorizar el numero, sino en saber priorizar."
                s5b = @(
                    "Seleccionar los cuidados que mas impactan en ese paciente concreto.",
                    "Relacionarlos con signos, riesgos y objetivos claros.",
                    "Revisar la lista si la evolucion cambia o aparecen nuevas necesidades."
                )
                faq = @(
                    @{ q = "Hay que aplicar todos los puntos siempre?"; a = "No. Una lista editorial ayuda a ordenar ideas, pero los cuidados se adaptan a situacion clinica, entorno y prioridades reales." },
                    @{ q = "Para que sirve mejor este tipo de contenido?"; a = "Para estudiar, repasar y no olvidar focos importantes de valoracion, vigilancia y educacion." }
                )
            }
        }
        "procedure" {
            return @{
                summary = @(
                    @{ k = "Antes"; v = "Verificar indicacion, identidad, material y condiciones de seguridad." },
                    @{ k = "Durante"; v = "Mantener asepsia, observar tolerancia y no forzar pasos dudosos." },
                    @{ k = "Despues"; v = "Reevaluar, registrar y explicar cuidados o alertas posteriores." }
                )
                calloutTitle = "Regla practica"
                calloutText = "En procedimientos, la mayoria de incidencias no nace de un gran error tecnico, sino de pequenos descuidos de preparacion, asepsia o seguimiento."
                s5t = "Que debe quedar documentado"
                s5l = "La tecnica no termina hasta que la informacion queda trazable."
                s5b = @(
                    "Motivo del procedimiento y condiciones previas relevantes.",
                    "Incidencias, tolerancia y respuesta inmediata.",
                    "Cuidados posteriores, educacion dada y avisos realizados."
                )
                faq = @(
                    @{ q = "Que hacer si algo no encaja durante la tecnica?"; a = "Parar, reevaluar y pedir apoyo cuando el siguiente paso ya no sea seguro ni claro." },
                    @{ q = "Por que el registro importa tanto?"; a = "Porque permite continuidad del cuidado, revisa incidencias y protege la seguridad del paciente y del equipo." }
                )
            }
        }
        "careplan" {
            return @{
                summary = @(
                    @{ k = "Base"; v = "Un buen plan nace de una valoracion ordenada y con datos utiles." },
                    @{ k = "Objetivo"; v = "Debe dejar claro que se quiere mejorar, mantener o prevenir." },
                    @{ k = "Revision"; v = "Si el caso cambia, el plan tambien tiene que cambiar." }
                )
                calloutTitle = "Error muy comun"
                calloutText = "Muchos planes fallan no por falta de lenguaje tecnico, sino porque no responden al paciente real, a su contexto ni a sus prioridades del momento."
                s5t = "Como saber si el plan esta bien armado"
                s5l = "Una revision rapida suele dar la respuesta."
                s5b = @(
                    "Los datos iniciales explican por que ese plan existe.",
                    "Los objetivos pueden observarse y reevaluarse.",
                    "Las intervenciones tienen una razon clinica y no son una lista suelta."
                )
                faq = @(
                    @{ q = "Que arruina un plan de cuidados?"; a = "Que sea demasiado generico, no se adapte al caso o no se revise cuando el paciente cambia." },
                    @{ q = "Para que sirve la evaluacion final?"; a = "Para comprobar si el plan ayudo, si toca ajustarlo o si las prioridades ya son otras." }
                )
            }
        }
        "career" {
            return @{
                summary = @(
                    @{ k = "Mirar bien"; v = "Conviene diferenciar nombre del perfil, funciones reales y marco legal." },
                    @{ k = "Comparar"; v = "No todas las formaciones o salidas tienen el mismo reconocimiento." },
                    @{ k = "Decidir"; v = "La mejor eleccion depende del pais, del centro y del objetivo profesional." }
                )
                calloutTitle = "Antes de decidir"
                calloutText = "En temas de carrera, una descripcion bonita no basta. Lo decisivo es comprobar funciones reales, validez de la formacion y posibilidades de crecimiento o movilidad."
                s5t = "Que comprobar antes de darlo por valido"
                s5l = "Un pequeno chequeo evita muchas decisiones malas."
                s5b = @(
                    "Si la titulacion, programa o requisito tiene reconocimiento oficial.",
                    "Si el puesto o itinerario encaja con el mercado donde se quiere trabajar.",
                    "Si existen diferencias importantes entre centros, regiones o paises."
                )
                faq = @(
                    @{ q = "Por que tanta prudencia en temas de carrera?"; a = "Porque la misma etiqueta profesional puede significar cosas distintas segun marco legal, sistema educativo o institucion." },
                    @{ q = "Que conviene mirar primero?"; a = "Funciones reales, reconocimiento oficial y opciones de evolucion o acceso posterior." }
                )
            }
        }
        "professional" {
            return @{
                summary = @(
                    @{ k = "Idea central"; v = "Estos conceptos sirven cuando se convierten en conducta observable." },
                    @{ k = "Dia a dia"; v = "Se ven en la comunicacion, en el relevo, en el trato y en la forma de decidir." },
                    @{ k = "Riesgo"; v = "Si quedan como teoria bonita, pierden fuerza profesional." }
                )
                calloutTitle = "Para bajarlo a tierra"
                calloutText = "Un valor profesional esta bien entendido cuando ayuda a decidir mejor en un turno real, no solo cuando suena bien en clase o en un documento."
                s5t = "Como trabajarlo en la practica diaria"
                s5l = "No hace falta esperar a un gran dilema."
                s5b = @(
                    "Revisar como se expresa en el lenguaje, el trato y el registro.",
                    "Detectar habitos del servicio que lo favorecen o lo debilitan.",
                    "Usarlo como criterio al priorizar, comunicar o resolver conflictos."
                )
                faq = @(
                    @{ q = "Por que estos temas importan tanto en enfermeria?"; a = "Porque sostienen decisiones seguras, relaciones de confianza y una practica mas seria y mas humana." },
                    @{ q = "Como saber si no se estan quedando en teoria?"; a = "Si no cambian la forma de actuar, de comunicar o de registrar, todavia no estan integrados de verdad." }
                )
            }
        }
        "resource" {
            return @{
                summary = @(
                    @{ k = "Sirve para"; v = "Repasar, ordenar ideas y tener una referencia rapida sobre un tema." },
                    @{ k = "No conviene"; v = "Usarlo como solucion completa sin contexto ni razonamiento." },
                    @{ k = "Mejor uso"; v = "Combinarlo con casos, practica y contenido mas amplio cuando haga falta." }
                )
                calloutTitle = "La clave de un buen recurso"
                calloutText = "Un esquema, ejemplo o plantilla vale mucho cuando ahorra tiempo sin hacerte pensar menos. Debe orientar, no sustituir criterio."
                s5t = "Como sacarle mas partido"
                s5l = "Una pequena estrategia cambia bastante el resultado."
                s5b = @(
                    "Relacionarlo con una situacion concreta de estudio o de practica.",
                    "Pasar del ejemplo ajeno a un ejemplo propio.",
                    "Anotar que parte del tema sigue generando dudas para profundizar despues."
                )
                faq = @(
                    @{ q = "Para que no sirve un recurso rapido?"; a = "Para sustituir una valoracion clinica, un protocolo o un estudio serio del tema." },
                    @{ q = "Cuando merece ampliar lectura?"; a = "Cuando el contexto es complejo, el caso cambia mucho o la duda afecta seguridad, ejercicio profesional o decisiones importantes." }
                )
            }
        }
        "question" {
            return @{
                summary = @(
                    @{ k = "Respuesta breve"; v = "La duda suele tener una respuesta inicial, pero el contexto manda." },
                    @{ k = "Lo decisivo"; v = "Normativa, situacion clinica y marco local cambian la conclusion." },
                    @{ k = "Prudencia"; v = "No conviene convertir una respuesta rapida en una regla universal." }
                )
                calloutTitle = "Como leer este tipo de pagina"
                calloutText = "Las preguntas frecuentes ayudan a orientarse, pero la respuesta util casi siempre depende de para quien, donde y en que situacion se plantea."
                s5t = "Que dato cambia mas la respuesta"
                s5l = "Suele haber una variable clave detras de la duda."
                s5b = @(
                    "El pais, centro o normativa aplicable.",
                    "El estado clinico o la situacion concreta.",
                    "La diferencia entre opinion, recomendacion y competencia formal."
                )
                faq = @(
                    @{ q = "Por que no se puede responder con un si o un no siempre?"; a = "Porque muchas dudas mezclan contexto legal, clinico o profesional y esos marcos no son iguales en todas partes." },
                    @{ q = "Cuando conviene buscar una fuente local?"; a = "Cuando la duda afecta competencias, derechos, seguridad o decisiones asistenciales concretas." }
                )
            }
        }
        "comparison" {
            return @{
                summary = @(
                    @{ k = "Comparar bien"; v = "No basta con mirar nombres: importa objetivo, uso y limite de cada opcion." },
                    @{ k = "Cuando importa"; v = "La diferencia cuenta cuando cambia una decision, un rol o una responsabilidad." },
                    @{ k = "Error tipico"; v = "Reducir todo a una lista sin explicar consecuencias practicas." }
                )
                calloutTitle = "Para no mezclar planos"
                calloutText = "Las comparaciones malas suelen juntar diferencias academicas, clinicas y profesionales como si fueran lo mismo. La buena comparacion separa cada nivel."
                s5t = "Como comparar con mas claridad"
                s5l = "Una pregunta simple ayuda mucho."
                s5b = @(
                    "Preguntarse para que sirve distinguir ambas opciones.",
                    "Identificar una diferencia central y una consecuencia practica.",
                    "Volver al contexto real donde esa diferencia importa."
                )
                faq = @(
                    @{ q = "Cuando deja de ser una comparacion util?"; a = "Cuando solo enumera rasgos sin explicar para que cambian algo en la practica." },
                    @{ q = "Que conviene mirar primero?"; a = "Definicion, objetivo y marco de uso de cada una de las partes comparadas." }
                )
            }
        }
        "comparison-list" {
            return @{
                summary = @(
                    @{ k = "Formato"; v = "Lista rapida de contrastes para orientarse mejor." },
                    @{ k = "Aprovecharlo"; v = "Conviene mirar que diferencias cambian de verdad una decision." },
                    @{ k = "Cuidado"; v = "No todas las diferencias pesan igual ni aplican siempre." }
                )
                calloutTitle = "Como leer una lista de diferencias"
                calloutText = "El valor de una lista comparativa esta en ayudarte a decidir mejor, no en memorizar contrastes sueltos sin contexto."
                s5t = "Que diferencia pesa mas en la practica"
                s5l = "No todas cambian por igual una decision."
                s5b = @(
                    "La que modifica una funcion, un coste, un derecho o una responsabilidad.",
                    "La que altera el modo de estudiar, contratar o atender.",
                    "La que cambia expectativas reales frente a nombres parecidos."
                )
                faq = @(
                    @{ q = "Una lista asi sustituye una comparacion completa?"; a = "No. Ayuda a orientarse, pero si la decision es importante conviene ampliar lectura y revisar el contexto concreto." },
                    @{ q = "Para que sirve mejor?"; a = "Para aclarar conceptos cercanos, ordenar ideas y detectar donde vale la pena profundizar." }
                )
            }
        }
        "activities" {
            return @{
                summary = @(
                    @{ k = "Trabajo real"; v = "Las actividades se entienden mejor cuando se bajan al servicio concreto." },
                    @{ k = "Cambian"; v = "No pesan igual en primaria, hospitalizacion, urgencias o domicilio." },
                    @{ k = "Importa"; v = "No solo que se hace, sino con que criterio y con que objetivo." }
                )
                calloutTitle = "Mirarlo con realismo"
                calloutText = "Describir un trabajo sanitario sin contexto suele dejarlo plano. Lo que da valor es explicar para que sirve cada actividad y como cambia segun el entorno."
                s5t = "Que hace que una descripcion sea util"
                s5l = "Tiene que sonar a trabajo real, no a listado vacio."
                s5b = @(
                    "Que tareas aparecen de forma habitual y cuales son ocasionales.",
                    "Que nivel de autonomia existe en ese entorno.",
                    "Como se coordina el rol con el resto del equipo."
                )
                faq = @(
                    @{ q = "Por que una lista de funciones se queda corta?"; a = "Porque no explica contexto, prioridad, autonomia ni finalidad de cada actividad." },
                    @{ q = "Que conviene mirar aparte de las tareas?"; a = "Entorno, ritmo, perfil del paciente y competencias que se necesitan para hacerlas bien." }
                )
            }
        }
        "advice-list" {
            return @{
                summary = @(
                    @{ k = "Formato"; v = "Lista orientada a estudio, inicio profesional o practica cotidiana." },
                    @{ k = "Utilidad"; v = "Sirve para ordenar ideas y no olvidar focos importantes." },
                    @{ k = "Clave"; v = "Conviene pasar cada consejo por el filtro del contexto real." }
                )
                calloutTitle = "Como aprovechar una lista de consejos"
                calloutText = "Los consejos valen cuando se convierten en habitos concretos. El objetivo no es acumular frases inspiradoras, sino traducirlas a pequenas decisiones del dia a dia."
                s5t = "Como convertir los consejos en practica"
                s5l = "Elegir pocos y aplicarlos bien suele rendir mas."
                s5b = @(
                    "Seleccionar los que mas encajan con la etapa o el entorno actual.",
                    "Traducir cada consejo a una accion observable.",
                    "Revisar despues que cambio realmente en la practica o en el estudio."
                )
                faq = @(
                    @{ q = "Para que sirve mejor una lista asi?"; a = "Para orientarse rapido, revisar habitos y detectar donde hace falta ordenar mejor el trabajo o el estudio." },
                    @{ q = "Que error conviene evitar?"; a = "Leerla como motivacion vacia y no como punto de partida para hacer cambios concretos." }
                )
            }
        }
        default {
            return @{
                summary = @(
                    @{ k = "Concepto"; v = "La idea se entiende mejor si se baja a practica y contexto." },
                    @{ k = "Confusiones"; v = "Muchos terminos se mezclan cuando solo se memorizan definiciones." },
                    @{ k = "Objetivo"; v = "Que el lector salga con una idea clara y aplicable." }
                )
                calloutTitle = "Lectura util"
                calloutText = "Cuando un concepto esta bien explicado, no solo se puede repetir: tambien se puede usar para entender mejor otros temas relacionados del cuidado enfermero."
                s5t = "Como fijar bien la idea"
                s5l = "No hace falta complicarlo mas."
                s5b = @(
                    "Relacionarlo con una situacion concreta.",
                    "Separarlo de terminos parecidos que generan confusion.",
                    "Volver a la definicion despues de ver su aplicacion."
                )
                faq = @(
                    @{ q = "Por que cuesta tanto recordar algunos conceptos?"; a = "Porque si se aprenden solo como definicion aislada, pierden sentido y se mezclan con otros muy cercanos." },
                    @{ q = "Como saber si ya se entendio bien?"; a = "Cuando se puede explicar con palabras propias y reconocerlo en una situacion real de estudio o de trabajo." }
                )
            }
        }
    }
}

function Render-SummaryGrid {
    param([object[]]$Items)

    if (-not $Items -or $Items.Count -eq 0) { return "" }
    $cards = ($Items | ForEach-Object {
@"
              <div class="summary-item">
                <strong>$($_.k)</strong>
                <span>$($_.v)</span>
              </div>
"@
    }) -join ""

    return @"
              <div class="summary-grid">
$cards
              </div>
"@
}

function Render-CalloutBlock {
    param([string]$Title, [string]$Text)

    if (-not $Title -and -not $Text) { return "" }

    return @"
              <div class="callout">
                <strong>$Title</strong>
                <p>$Text</p>
              </div>
"@
}

function Render-Faq {
    param([object[]]$FaqItems)

    if (-not $FaqItems -or $FaqItems.Count -eq 0) { return "" }
    $body = ($FaqItems | ForEach-Object {
@"
              <article class="section-card reveal">
                <h3>$($_.q)</h3>
                <p>$($_.a)</p>
              </article>
"@
    }) -join ""

    return @"
              <section class="section-card reveal" id="faq">
                <h2>Preguntas frecuentes</h2>
                <p>Estas dudas suelen aparecer al estudiar, al trabajar o al intentar aplicar el tema con criterio.</p>
              </section>
$body
"@
}

function New-PageHtml {
    param([string]$Title, [string]$HubPath, [hashtable]$Copy, [string]$Profile)

    $hubRelative = ".." + $HubPath.TrimEnd("/")
    $hubLabel = switch ($HubPath) {
        "/cuidados/" { "Hub de cuidados" }
        "/tecnicas-y-procedimientos/" { "Hub de tecnicas" }
        "/planes-de-cuidados/" { "Hub de planes" }
        "/etica-y-liderazgo/" { "Hub de etica" }
        "/carrera-en-enfermeria/" { "Hub de carrera" }
        "/recursos/" { "Hub de recursos" }
        default { "Hub de fundamentos" }
    }
    $pills = ($Copy.pills | ForEach-Object { "<span class=`"article-meta-pill`">$_</span>" }) -join ""
    $enhancements = Get-Enhancements -Profile $Profile -Title $Title
    $summaryHtml = Render-SummaryGrid -Items $enhancements.summary
    $calloutHtml = Render-CalloutBlock -Title $enhancements.calloutTitle -Text $enhancements.calloutText

    $s1 = Render-Section -Id "section-1" -Title $Copy.s1t -Lead $Copy.s1l -Body $Copy.s1b
    $s2 = Render-Section -Id "section-2" -Title $Copy.s2t -Lead $Copy.s2l -Body $Copy.s2b
    $s3 = Render-Section -Id "section-3" -Title $Copy.s3t -Lead $Copy.s3l -Body $Copy.s3b
    $s4 = Render-Section -Id "section-4" -Title $Copy.s4t -Lead $Copy.s4l -Body $Copy.s4b
    $s5 = Render-Section -Id "section-5" -Title $enhancements.s5t -Lead $enhancements.s5l -Body $enhancements.s5b
    $faqHtml = Render-Faq -FaqItems $enhancements.faq

    return @"
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>$Title | Serenfermera</title>
    <meta
      name="description"
      content="$($Copy.description)"
    />
    <link rel="stylesheet" href="../assets/styles.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="site-header">
        <div class="header-card">
          <a class="brand" href="../index.html">
            <span class="brand-mark">S</span>
            <span class="brand-copy"><strong>Serenfermera</strong><span>Biblioteca clinica y profesional</span></span>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Abrir menu">Menu</button>
          <nav class="header-nav" aria-label="Principal">
            <a href="../cuidados/">Cuidados</a>
            <a href="../tecnicas-y-procedimientos/">Tecnicas</a>
            <a href="../planes-de-cuidados/">Planes</a>
            <a href="../etica-y-liderazgo/">Etica</a>
            <a href="../carrera-en-enfermeria/">Carrera</a>
            <a href="../recursos/">Recursos</a>
          </nav>
        </div>
      </header>
      <main>
        <section class="article-hero">
          <div class="container">
            <div class="article-hero-card hero-card reveal">
              <div class="eyebrow">$($Copy.eyebrow)</div>
              <h1>$Title</h1>
              <p>$($Copy.intro)</p>
              <div class="article-header-meta">$pills</div>
$summaryHtml
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container article-layout">
            <div class="article-main">
$s1
$s2
$calloutHtml
$s3
$s4
$s5
$faqHtml
            </div>
            <aside class="toc-card reveal">
              <h3>En esta pagina</h3>
              <nav>
                <a href="#section-1">$($Copy.s1t)</a>
                <a href="#section-2">$($Copy.s2t)</a>
                <a href="#section-3">$($Copy.s3t)</a>
                <a href="#section-4">$($Copy.s4t)</a>
                <a href="#section-5">$($enhancements.s5t)</a>
                <a href="#faq">Preguntas frecuentes</a>
              </nav>
            </aside>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="container footer-card">
          <div class="footer-grid">
            <div>
              <div class="brand">
                <span class="brand-mark">S</span>
                <span class="brand-copy"><strong>Serenfermera</strong><span>$($Copy.eyebrow)</span></span>
              </div>
            </div>
            <div class="footer-links">
              <a href="../index.html">Inicio</a>
              <a href="$hubRelative/">$hubLabel</a>
              <a href="$($Copy.r1)">$($Copy.l1)</a>
              <a href="$($Copy.r2)">$($Copy.l2)</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <script src="../assets/app.js"></script>
  </body>
</html>
"@
}

$csv = Import-Csv -LiteralPath "Migration/traffic_urls_to_save.csv"
$targetSlugs = Get-Content -LiteralPath $SlugsFile | ForEach-Object { $_.Trim() } | Where-Object { $_ }
$targetRows = $csv | Where-Object { $targetSlugs -contains $_.slug }

$generated = 0
foreach ($row in $targetRows) {
    $slug = $row.slug
    $title = Get-DisplayTitle -Slug $slug
    $hub = Get-Hub -Slug $slug -Cluster $row.cluster
    $profile = Get-Profile -Slug $slug -Cluster $row.cluster
    $copy = Get-PageCopy -Slug $slug -Title $title -Cluster $row.cluster

    if (-not (Test-Path -LiteralPath $slug)) {
        New-Item -ItemType Directory -Path $slug | Out-Null
    }

    $html = New-PageHtml -Title $title -HubPath $hub -Copy $copy -Profile $profile
    [System.IO.File]::WriteAllText((Join-Path (Convert-Path $slug) "index.html"), $html, $utf8)
    $generated++
}

Write-Output "REWRITTEN_PAGES: $generated"
