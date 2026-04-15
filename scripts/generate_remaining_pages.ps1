param(
    [string]$SlugsFile
)

$ErrorActionPreference = "Stop"

function Convert-SlugToTitle {
    param([string]$Slug)

    $smallWords = @(
        "de", "del", "la", "las", "el", "los", "y", "en", "con", "para", "al", "vs", "por",
        "que", "como", "un", "una", "a"
    )

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
            $result += ($word.Substring(0, 1).ToUpper() + $word.Substring(1))
        }
    }

    return ($result -join " ")
}

function Get-Hub {
    param([string]$Slug, [string]$Cluster)

    switch -Regex ($Slug) {
        "^plan-de-cuidados|^planes-de-cuidado|cronograma-modelos-de-cuidados|evaluacion-del-plan-de-cuidados|como-hacer-una-hoja-de-cuidados" { return "/planes-de-cuidados/" }
        "tecnica|venoclisis|papanicolaou|nebulizaciones|signos-vitales|lavado-gastrico|sonda-vesical|cateteres" { return "/tecnicas-y-procedimientos/" }
        "cuidados-de-enfermeria|edema|cancer|dolor|demencia|heparina|postoperatorio|pediatri|diabetes|movilidad-fisica|hiperglucemia|inconscientes|puerperio|cesarea|angioplastia|tdah|duelo|paliativos|histerectomia" { return "/cuidados/" }
        "etic|valores|liderazgo|trabajo-en-equipo|competencia-cultural|veracidad|fidelidad|comunicacion-terapeutica|cualidades|negligencia|sbar|cuidado-humanizado" { return "/etica-y-liderazgo/" }
        "enfermera-practicante|escuela-de-enfermeria|titulos-de-enfermeria|entrevista-de-enfermeria|estudiante-de-enfermeria|salud-ocupacional|auxiliar-de-enfermeria|gestion-del-cuidado|supervisora-enfermeria|formacion|salario|programa|especialidad|ejercito|colombia" { return "/carrera-en-enfermeria/" }
        "ejemplo|ejemplos|caso-practico|respuestas|hoja-de-cuidados|balance-hidrico|cronograma|temas-de-salud|juegos-de-enfermeria" { return "/recursos/" }
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
        "cronograma|hoja-de-cuidados|balance-hidrico|ejemplo|ejemplos|caso-practico|respuestas|juegos-de-enfermeria|temas-de-salud" { return "resource" }
        "tecnica|venoclisis|papanicolaou|nebulizaciones|signos-vitales|lavado-gastrico|cateteres|sonda-vesical" { return "procedure" }
        "etic|valores|liderazgo|trabajo-en-equipo|competencia-cultural|veracidad|fidelidad|comunicacion-terapeutica|cualidades|negligencia|sbar|cuidado-humanizado" { return "professional" }
        "enfermera-practicante|escuela-de-enfermeria|titulos-de-enfermeria|entrevista-de-enfermeria|estudiante-de-enfermeria|salud-ocupacional|auxiliar-de-enfermeria|gestion-del-cuidado|supervisora-enfermeria|formacion|salario|programa|especialidad|ejercito|colombia" { return "career" }
        "cuidados-de-enfermeria|edema|cancer|dolor|demencia|heparina|postoperatorio|diabetes|movilidad-fisica|hiperglucemia|inconscientes|puerperio|cesarea|angioplastia|tdah|duelo|paliativos|histerectomia|pediatri" { return "clinical" }
        default {
            if ($Cluster -eq "Recursos y plantillas") { return "resource" }
            if ($Cluster -eq "Etica, liderazgo y habilidades") { return "professional" }
            if ($Cluster -eq "Carrera y desarrollo profesional") { return "career" }
            if ($Cluster -eq "Cuidados clinicos y procedimientos") { return "clinical" }
            return "concept"
        }
    }
}

function Get-PageCopy {
    param(
        [string]$Slug,
        [string]$Title,
        [string]$Cluster
    )

    $type = Get-PageType -Slug $Slug -Cluster $Cluster
    $hub = Get-Hub -Slug $Slug -Cluster $Cluster

    switch ($type) {
        "clinical" {
            return @{
                eyebrow = "Cuidados clinicos"
                description = "$Title en enfermeria: valoracion inicial, vigilancia, cuidados prioritarios y seguimiento."
                intro = "En $Title, los cuidados de enfermeria se centran en valorar el estado actual, vigilar cambios clinicos, responder a sintomas y dejar un registro claro de la evolucion. La prioridad suele estar en detectar riesgos, sostener el confort y avisar a tiempo cuando la situacion cambia."
                section1Title = "Valoracion inicial"
                section1Body = @(
                    "Revisar sintomas, signos y cambios respecto a la situacion basal.",
                    "Identificar riesgos inmediatos, tolerancia funcional y respuesta al tratamiento.",
                    "Anotar necesidades de confort, apoyo y continuidad del cuidado."
                )
                section2Title = "Cuidados y vigilancia"
                section2Body = @(
                    "Observar la evolucion con una frecuencia ajustada a la situacion clinica.",
                    "Aplicar medidas de enfermeria ligadas al problema principal y a la seguridad del paciente.",
                    "Registrar respuesta, incidencias y comunicacion al equipo."
                )
                section3Title = "Referencia general"
                sourceName = "WHO Nursing and midwifery"
                sourceUrl = "https://www.who.int/teams/health-workforce/nursing-and-midwifery"
                hub = $hub
                related1 = "../cuidados/"
                related1Label = "Hub de cuidados"
                related2 = "../plan-de-cuidados-enfermeria-ejemplopaso-a-paso/"
                related2Label = "Plan de cuidados"
            }
        }
        "procedure" {
            return @{
                eyebrow = "Tecnicas y procedimientos"
                description = "$Title en enfermeria: preparacion, puntos de seguridad, vigilancia y registro."
                intro = "Para realizar $Title con seguridad, hace falta preparar bien el material, confirmar los datos esenciales y vigilar la respuesta del paciente durante y despues del procedimiento. Tener claros los pasos y los errores frecuentes ayuda a trabajar con mas seguridad."
                section1Title = "Antes y durante la tecnica"
                section1Body = @(
                    "Verificar indicacion, identidad, material y condiciones del entorno.",
                    "Explicar el procedimiento y comprobar colaboracion, comodidad o barreras.",
                    "Aplicar la tecnica con asepsia, orden y observacion continua."
                )
                section2Title = "Despues del procedimiento"
                section2Body = @(
                    "Valorar tolerancia, incidencias y necesidad de reevaluacion.",
                    "Registrar lo realizado y las observaciones clinicamente relevantes.",
                    "Explicar cuidados posteriores y signos de alarma cuando proceda."
                )
                section3Title = "Referencia general"
                sourceName = "CDC infection prevention resources"
                sourceUrl = "https://www.cdc.gov/infection-control/"
                hub = $hub
                related1 = "../tecnicas-y-procedimientos/"
                related1Label = "Hub de tecnicas"
                related2 = "../venoclisis-cuidados-de-enfermeria/"
                related2Label = "Venoclisis"
            }
        }
        "care-plan" {
            return @{
                eyebrow = "Planes de cuidados"
                description = "$Title con valoracion, objetivos, intervenciones y criterios de evaluacion."
                intro = "$Title funciona mejor cuando parte de una valoracion util, formula objetivos observables y conecta cada intervencion con el problema detectado. Un buen plan de cuidados sirve para ordenar el caso y para reevaluar con criterio cuando la situacion cambia."
                section1Title = "Estructura del plan"
                section1Body = @(
                    "Recoger datos relevantes y separar lo importante de lo accesorio.",
                    "Formular objetivos concretos, observables y ajustados al caso.",
                    "Elegir intervenciones y criterios de evaluacion que tengan relacion real con el problema."
                )
                section2Title = "Errores frecuentes"
                section2Body = @(
                    "Copiar planes genericos sin adaptarlos al paciente o al contexto.",
                    "Redactar objetivos vagos o imposibles de medir.",
                    "Mantener el mismo plan cuando la situacion clinica ya ha cambiado."
                )
                section3Title = "Para ampliar"
                sourceName = "Plan de cuidados paso a paso"
                sourceUrl = "https://serenfermera.com/plan-de-cuidados-enfermeria-ejemplopaso-a-paso/"
                hub = $hub
                related1 = "../planes-de-cuidados/"
                related1Label = "Hub de planes"
                related2 = "../datos-de-enfermeria-subjetivos-vs-objetivo/"
                related2Label = "Datos subjetivos y objetivos"
            }
        }
        "professional" {
            return @{
                eyebrow = "Etica y liderazgo"
                description = "$Title en enfermeria con significado practico, ejemplos y aplicacion en el dia a dia."
                intro = "$Title influye en la manera de decidir, comunicar y sostener una practica segura. En enfermeria no se queda en una idea abstracta: aparece en la relacion con pacientes y familias, en el trabajo con el equipo y en la forma de asumir responsabilidades."
                section1Title = "Por que importa"
                section1Body = @(
                    "Afecta seguridad, confianza y calidad del cuidado.",
                    "Se nota en pequenas decisiones repetidas a lo largo del turno.",
                    "Ayuda a sostener una practica profesional mas coherente."
                )
                section2Title = "Como se aplica"
                section2Body = @(
                    "Traducir el concepto a conductas observables y no a frases vacias.",
                    "Relacionarlo con comunicacion, trabajo en equipo y responsabilidad.",
                    "Revisar como influye en la toma de decisiones y en el registro."
                )
                section3Title = "Referencia general"
                sourceName = "ICN Code of Ethics for Nurses"
                sourceUrl = "https://www.icn.ch/nursing-policy/icn-code-ethics-nurses"
                hub = $hub
                related1 = "../etica-y-liderazgo/"
                related1Label = "Hub de etica"
                related2 = "../principios-eticos-en-enfermeria/"
                related2Label = "Principios eticos"
            }
        }
        "career" {
            return @{
                eyebrow = "Carrera y desarrollo"
                description = "$Title con funciones, competencias, contexto profesional y orientacion practica."
                intro = "$Title suele interesar cuando se busca orientacion sobre funciones, competencias o recorrido profesional dentro de enfermeria. Entender bien el contexto ayuda a tomar decisiones mas realistas sobre estudios, salidas y desarrollo."
                section1Title = "Puntos clave"
                section1Body = @(
                    "Ubicar el rol, el contexto formativo o el entorno de trabajo al que pertenece.",
                    "Entender las competencias o responsabilidades que se asocian a ese perfil.",
                    "Separar expectativas realistas de ideas demasiado generales o confusas."
                )
                section2Title = "Aplicacion practica"
                section2Body = @(
                    "Relacionar teoria y realidad del trabajo diario.",
                    "Comparar funciones, habilidades y salidas profesionales cercanas.",
                    "Usar la informacion para orientar mejor decisiones de estudio o empleo."
                )
                section3Title = "Referencia general"
                sourceName = "WHO Nursing and midwifery"
                sourceUrl = "https://www.who.int/teams/health-workforce/nursing-and-midwifery"
                hub = $hub
                related1 = "../carrera-en-enfermeria/"
                related1Label = "Hub de carrera"
                related2 = "../enfermeria-en-salud-ocupacional/"
                related2Label = "Salud ocupacional"
            }
        }
        "resource" {
            return @{
                eyebrow = "Recursos y ejemplos"
                description = "$Title como apoyo rapido de enfermeria: esquema, ejemplo o recurso practico."
                intro = "$Title recoge un apoyo breve para estudiar, repasar o tener una referencia rapida a mano. Resulta util cuando necesitas ubicar conceptos, pasos o ejemplos sin perderte en explicaciones largas."
                section1Title = "Que vas a encontrar"
                section1Body = @(
                    "Un esquema corto, un ejemplo o una estructura facil de consultar.",
                    "Puntos clave para ubicar el tema sin ruido innecesario.",
                    "Una base rapida para enlazar teoria y practica."
                )
                section2Title = "Como aprovecharlo"
                section2Body = @(
                    "Usarlo como apoyo de estudio, no como sustituto de la valoracion clinica.",
                    "Relacionarlo con un caso practico o con una situacion real de trabajo.",
                    "Combinarlo con contenidos mas amplios cuando necesites contexto adicional."
                )
                section3Title = "Para ampliar"
                sourceName = "Hub de recursos"
                sourceUrl = "https://serenfermera.com/recursos/"
                hub = $hub
                related1 = "../recursos/"
                related1Label = "Hub de recursos"
                related2 = "../plan-de-cuidados-enfermeria-ejemplopaso-a-paso/"
                related2Label = "Plan de cuidados"
            }
        }
        default {
            return @{
                eyebrow = "Fundamentos de enfermeria"
                description = "$Title explicado de forma clara para estudiar mejor y aplicarlo con mas criterio."
                intro = "$Title forma parte del lenguaje basico de enfermeria. Entenderlo bien ayuda a valorar mejor, escribir con mas precision y conectar teoria con practica sin quedarse en definiciones vacias."
                section1Title = "Significado practico"
                section1Body = @(
                    "Definir el concepto con claridad y sin tecnicismo innecesario.",
                    "Relacionarlo con situaciones reales de enfermeria.",
                    "Distinguirlo de ideas parecidas que suelen confundirse."
                )
                section2Title = "Por que importa"
                section2Body = @(
                    "Mejora valoracion, comunicacion y razonamiento clinico.",
                    "Ayuda a estudiar con mas orden y menos memorizacion mecanica.",
                    "Hace mas comprensible el proceso enfermero en la practica diaria."
                )
                section3Title = "Para ampliar"
                sourceName = "Fundamentos de enfermeria"
                sourceUrl = "https://serenfermera.com/fundamentos-de-enfermeria/"
                hub = $hub
                related1 = "../fundamentos-de-enfermeria/"
                related1Label = "Hub de fundamentos"
                related2 = "../datos-de-enfermeria-subjetivos-vs-objetivo/"
                related2Label = "Datos subjetivos y objetivos"
            }
        }
    }
}

function New-PageHtml {
    param(
        [string]$Title,
        [string]$Slug,
        [string]$HubPath,
        [hashtable]$Copy
    )

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

    $body1 = ($Copy.section1Body | ForEach-Object { "<li>$_</li>" }) -join ""
    $body2 = ($Copy.section2Body | ForEach-Object { "<li>$_</li>" }) -join ""

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
              <div class="article-header-meta">
                <span class="article-meta-pill">Contenido informativo</span>
                <span class="article-meta-pill">Aplicacion practica</span>
                <span class="article-meta-pill">Consultar protocolo local</span>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container article-layout">
            <div class="article-main">
              <article class="section-card reveal" id="section-1">
                <h2>$($Copy.section1Title)</h2>
                <ul>$body1</ul>
              </article>
              <article class="section-card reveal" id="section-2">
                <h2>$($Copy.section2Title)</h2>
                <ul>$body2</ul>
              </article>
              <article class="section-card reveal" id="section-3">
                <h2>$($Copy.section3Title)</h2>
                <ul>
                  <li><a href="$($Copy.sourceUrl)">$($Copy.sourceName)</a></li>
                </ul>
              </article>
            </div>
            <aside class="toc-card reveal">
              <h3>En esta pagina</h3>
              <nav>
                <a href="#section-1">$($Copy.section1Title)</a>
                <a href="#section-2">$($Copy.section2Title)</a>
                <a href="#section-3">$($Copy.section3Title)</a>
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
              <a href="$($Copy.related1)">$($Copy.related1Label)</a>
              <a href="$($Copy.related2)">$($Copy.related2Label)</a>
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

$utf8 = New-Object System.Text.UTF8Encoding($false)
$csv = Import-Csv -LiteralPath "Migration/traffic_urls_to_save.csv"

$targetRows = if ($SlugsFile -and (Test-Path -LiteralPath $SlugsFile)) {
    $targetSlugs = Get-Content -LiteralPath $SlugsFile | ForEach-Object { $_.Trim() } | Where-Object { $_ }
    $csv | Where-Object { $targetSlugs -contains $_.slug }
} else {
    $csv | Where-Object { -not (Test-Path -LiteralPath $_.slug) }
}

$generated = 0

foreach ($row in $targetRows) {
    $slug = $row.slug
    $title = Convert-SlugToTitle -Slug $slug
    $hub = Get-Hub -Slug $slug -Cluster $row.cluster
    $copy = Get-PageCopy -Slug $slug -Title $title -Cluster $row.cluster

    if (-not (Test-Path -LiteralPath $slug)) {
        New-Item -ItemType Directory -Path $slug | Out-Null
    }

    $html = New-PageHtml -Title $title -Slug $slug -HubPath $hub -Copy $copy
    $filePath = Join-Path (Convert-Path $slug) "index.html"
    [System.IO.File]::WriteAllText($filePath, $html, $utf8)
    $generated++
}

$staticUrls = @(
    "https://serenfermera.com/",
    "https://serenfermera.com/cuidados/",
    "https://serenfermera.com/tecnicas-y-procedimientos/",
    "https://serenfermera.com/planes-de-cuidados/",
    "https://serenfermera.com/etica-y-liderazgo/",
    "https://serenfermera.com/carrera-en-enfermeria/",
    "https://serenfermera.com/fundamentos-de-enfermeria/",
    "https://serenfermera.com/recursos/"
)

$contentUrls = $csv | ForEach-Object { "https://serenfermera.com/$($_.slug)/" }
$allUrls = $staticUrls + $contentUrls | Sort-Object -Unique

$sitemapBody = ($allUrls | ForEach-Object { "  <url><loc>$_</loc></url>" }) -join "`n"
$sitemap = @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
$sitemapBody
</urlset>
"@

[System.IO.File]::WriteAllText((Join-Path (Convert-Path .) "sitemap.xml"), $sitemap, $utf8)

Write-Output "GENERATED_PAGES: $generated"
Write-Output "TOTAL_URLS_IN_SITEMAP: $($allUrls.Count)"
