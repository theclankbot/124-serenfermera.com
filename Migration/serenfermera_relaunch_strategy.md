# Relanzamiento de Serenfermera

## Diagnostico rapido

- Se han detectado `424` slugs unicos con mas de `1` clic combinando `Paginas.csv`, `serenfermera.com_PageTrafficReport_4_13_2026.csv` y `serenfermera.com_SiteExplorerUrls_4_13_2026.csv`.
- Solo `50` de esos slugs tienen correspondencia con los CSV de contenido legacy que hay en el proyecto.
- El contenido legacy revisado no deberia republicarse tal cual: viene con traduccion automatica, HTML sucio y un tono demasiado generico.
- Conclusion: hay que salvar la demanda SEO, no rescatar la web antigua como estaba.

## Entregable generado

- Inventario consolidado: `Migration/traffic_urls_to_save.csv`
- Ese CSV incluye prioridad, cluster tematico, clics agregados, impresiones agregadas, fuentes, si existe contenido legacy y recomendacion editorial.

## Decision estrategica

La mejor jugada no es reconstruir la web antigua. La mejor jugada es lanzar una nueva marca editorial para enfermeras apoyada en las URLs que ya demostraron demanda.

En practica:

- Mantener los slugs con trafico siempre que tenga sentido.
- Reescribir desde cero o desde legacy limpio, pero nunca republicar la traduccion vieja sin cirugia fuerte.
- Convertir la web en una mezcla de guia clinica + biblioteca de planes de cuidados + desarrollo profesional + recursos practicos.

## Prioridad de migracion

- `P0`: URLs con mayor demanda. Hay 14 por encima de 50 clics agregados.
- `P1`: URLs con buen potencial. Hay 49 por encima de 20 clics agregados.
- `P2`: Fondo editorial util. Hay 116 por encima de 10 clics agregados.
- `P3`: Long tail. Se puede cubrir despues o consolidar en hubs.

## Enfoque de contenido

### 1. Cuidados clinicos y procedimientos

Este bloque es el mas fuerte para captar trafico util y recurrente.

Tipos de contenido:

- Cuidados de enfermeria por patologia, procedimiento o situacion clinica.
- Tecnicas paso a paso.
- Checklists de vigilancia.
- Complicaciones frecuentes y signos de alarma.
- NANDA, NIC, NOC cuando aplique, pero aterrizado a practica real.

URLs P0 representativas:

- `venoclisis-cuidados-de-enfermeria`
- `plan-de-cuidados-enfermeria-ejemplopaso-a-paso`
- `cuidados-de-enfermeria-oms`
- `tecnica-para-toma-de-papanicolaou-enfermeria`
- `cuidados-de-enfermeria-para-nebulizaciones`

### 2. Etica, liderazgo y habilidades profesionales

Este bloque tiene muy buena respuesta y es diferencial porque mezcla intencion informativa con visibilidad de marca.

Tipos de contenido:

- Principios eticos con casos.
- Valores profesionales.
- Liderazgo en turnos y gestion de equipos.
- Comunicacion terapeutica.
- Negligencia y seguridad del paciente.

URLs P0 representativas:

- `principios-eticos-en-enfermeria`
- `valores-profesionales-de-enfermeria`
- `estilos-de-liderazgo-en-enfermeria`
- `trabajo-en-equipo-en-enfermeria`
- `cualidades-de-una-buena-enfermera`

### 3. Carrera y desarrollo profesional

Este bloque puede convertirse en una puerta de entrada grande si se adapta al contexto hispano y no solo al modelo USA.

Tipos de contenido:

- Salidas profesionales.
- Especialidades.
- Competencias.
- Entrevistas.
- Guia para estudiantes y TCAE.

URLs P0 representativas:

- `enfermeria-en-salud-ocupacional`
- `15-cosas-que-todo-estudiante-de-enfermeria-debe-saber`

### 4. Recursos y herramientas

Este bloque es clave para UX, enlaces internos y recurrencia.

Tipos de producto:

- Plantillas descargables.
- Hojas de valoracion.
- Calculadoras simples.
- Tablas comparativas.
- Casos practicos resueltos.

Ejemplos de URLs con senal:

- `ejemplo-calculo-balance-hidrico-auxiliar-enfermeria`
- `ejemplos-de-enfermeria-sbar`
- `como-hacer-una-hoja-de-cuidados-de-enfermeria`

## Arquitectura recomendada

La web nueva no deberia organizarse como un blog plano. Necesita estructura editorial clara.

Secciones principales:

- `/cuidados/`
- `/planes-de-cuidados/`
- `/tecnicas-y-procedimientos/`
- `/etica-y-liderazgo/`
- `/carrera-en-enfermeria/`
- `/recursos/`

Plantillas base:

- Hub de categoria con filtros y ranking de guias.
- Guia clinica larga con indice sticky.
- Plantilla de plan de cuidados.
- Ficha tecnica corta para conceptos.
- Recurso descargable o calculadora.

## UX y diseno: direccion recomendada

La web deberia sentirse profesional, clinica y muy usable, no como un blog generico.

Direccion visual:

- Paleta limpia inspirada en entorno clinico, evitando el azul sanitario plano de stock.
- Tipografia con mas caracter editorial que una web de nicho barata.
- Jerarquia muy clara: resumen inicial, pasos, tablas, alertas, checklists.
- Navegacion por problemas reales de una enfermera, no solo por categorias SEO.

Bloques importantes de homepage:

- Hero con propuesta clara: guias practicas, planes de cuidados y recursos para enfermeras.
- Accesos rapidos por necesidad: `Cuidados`, `Tecnicas`, `Planes`, `Etica`, `Carrera`, `Recursos`.
- Seccion de temas mas consultados.
- Bloque de herramientas y plantillas.
- Bloque de articulos revisados o actualizados recientemente.

Detalles UX que si marcan diferencia:

- TOC sticky en desktop y desplegable en mobile.
- Cajas de `Que vigilar`, `Que registrar`, `Errores frecuentes`, `Cuando escalar`.
- Tablas realmente legibles.
- CTA suave a plantilla descargable o recurso relacionado, no banners invasivos.
- Breadcrumbs y enlazado contextual fuerte entre guias relacionadas.

## Modelo de pagina ideal

Para cada URL importante:

1. Respuesta corta arriba del todo.
2. Tabla resumen clinica.
3. Desarrollo paso a paso.
4. Checklist de actuacion.
5. Complicaciones y alertas.
6. Registro de enfermeria o ejemplo practico.
7. FAQ.
8. Recursos relacionados.

## Que hacer con el legacy

- `50` slugs con match legacy: usar solo como referencia estructural o semantica.
- `374` slugs con trafico sin match: escribir desde cero.
- Eliminar etiquetas HTML basura, frases traducidas literalmente y referencias demasiado USA si no aportan.
- Reescribir con voz propia y orientacion a practica hispana.

## Roadmap recomendado

### Fase 1

- Publicar todas las `P0`.
- Preparar homepage, hubs y plantilla de articulo definitiva.
- Definir sistema de enlazado interno entre hubs y guias.

### Fase 2

- Publicar `P1`.
- Lanzar bloque de recursos y descargables.
- Crear paginas pilar por categoria.

### Fase 3

- Cubrir `P2` y `P3`.
- Consolidar canibalizaciones.
- Mejorar EEAT: autorias, revision profesional, fecha de actualizacion, fuentes.

## Nota importante

No aparece en disco un archivo previo llamado `Migration/traffic_urls_to_save.csv`. He generado uno nuevo desde las fuentes disponibles. Si tienes otra lista manual de URLs criticas, hay que fusionarla despues para no dejar fuera ninguna decision editorial tuya.
