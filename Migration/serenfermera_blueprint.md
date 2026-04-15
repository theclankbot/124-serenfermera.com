# Serenfermera Blueprint

## Idea de producto

Serenfermera no debe relanzarse como un blog de posts sueltos. Debe ser una biblioteca clinica y profesional para enfermeras, estudiantes y TCAE con tres promesas claras:

- Resolver dudas practicas rapido.
- Dar contexto suficiente para estudiar o trabajar mejor.
- Ofrecer herramientas reutilizables, no solo texto SEO.

## Arquitectura recomendada

Paginas core:

- `/`
- `/fundamentos-de-enfermeria/`
- `/cuidados/`
- `/planes-de-cuidados/`
- `/tecnicas-y-procedimientos/`
- `/etica-y-liderazgo/`
- `/carrera-en-enfermeria/`
- `/recursos/`

Regla SEO principal:

- Las URLs historicas con trafico se publican manteniendo el slug original en raiz.
- Los hubs organizan la navegacion, el enlazado interno y la portada.
- Si en el futuro se crean nuevas URLs sin historial, ya se pueden publicar bajo arquitectura de carpetas si interesa.

## Navegacion principal

- Inicio
- Cuidados
- Tecnicas
- Planes
- Etica y liderazgo
- Carrera
- Recursos

Navegacion secundaria:

- Temas mas consultados
- Actualizado esta semana
- Plantillas
- Sobre el proyecto

## Homepage: estructura

### Hero

- Titular claro: guias practicas y recursos de enfermeria para estudiar y trabajar mejor.
- Subtitulo corto: planes de cuidados, tecnicas, etica, carrera y herramientas.
- Doble CTA: `Explorar cuidados` y `Ver recursos`.

### Bloque de accesos rapidos

- Tarjetas grandes para `Cuidados`, `Tecnicas`, `Planes`, `Etica`, `Carrera`, `Recursos`.
- Cada tarjeta con una pregunta real como microcopy.

### Bloque de top temas

- Mostrar 6 a 8 URLs de mayor demanda.
- Priorizar mezcla de clinico, etico y carrera.

### Bloque de recursos utiles

- Plantilla de SBAR.
- Ejemplo de balance hidrico.
- Cronograma de modelos.
- Hoja de cuidados.

### Bloque editorial

- Ultimas guias actualizadas.
- Articulos esenciales para estudiantes.
- Carrusel o grid, sin apariencia de magazine barato.

### Bloque de confianza

- Quien revisa el contenido.
- Fecha de actualizacion.
- Como se elaboran las guias.

## Hubs: estructura

Cada hub debe tener:

- Intro corta con definicion del area.
- Filtros o agrupaciones por problema.
- 3 guias destacadas.
- 1 recurso o plantilla relacionado.
- FAQs de categoria.

Ejemplos:

- `Cuidados`: por paciente, procedimiento, situacion, etapa vital.
- `Tecnicas`: preparacion, material, pasos, vigilancia, errores.
- `Planes`: por diagnostico, etapa, pediatria, adulto, geriatria.
- `Etica y liderazgo`: etica, seguridad, comunicacion, equipo, liderazgo.

## Plantillas de contenido

### 1. Clinical care guide

- Respuesta corta.
- Tabla clinica rapida.
- Valoracion inicial.
- Intervenciones de enfermeria.
- Que vigilar.
- Complicaciones o alertas.
- Registro de enfermeria.
- FAQ.

### 2. Procedure guide

- Indicacion y objetivo.
- Preparacion del material.
- Preparacion del paciente.
- Paso a paso.
- Cuidados posteriores.
- Errores frecuentes.
- Checklist descargable.

### 3. Care plan guide

- Caso o contexto inicial.
- Valoracion.
- Diagnosticos.
- Objetivos esperados.
- Intervenciones.
- Criterios de evaluacion.
- Ejemplo final resumido.

### 4. Professional skills guide

- Respuesta corta.
- Definicion del tema.
- Tabla o comparativa.
- Casos o escenarios.
- Errores frecuentes.
- Aplicacion practica en equipo.
- FAQ.

### 5. Resource or example

- Descarga o plantilla visible arriba.
- Instrucciones de uso.
- Ejemplo resuelto.
- Version editable o imprimible si se desarrolla mas adelante.

## Direccion visual

La web debe sonar a salud, pero no parecer una plantilla clinica generica.

### Estilo

- Editorial-clinico.
- Calido, limpio y tecnico.
- Mas biblioteca profesional que blog de afiliacion.

### Colores sugeridos

- Ink: `#17313B`
- Teal: `#1E7A78`
- Bone: `#F4EFE6`
- Mist: `#DDE9E5`
- Coral de apoyo: `#C96A4B`

### Tipografia sugerida

- Titulares: `Newsreader` o `Fraunces`
- Texto y UI: `Manrope` o `Source Sans 3`

### Componentes visuales

- Tarjetas con borde fino y fondos suaves.
- Tablas limpias con encabezados muy legibles.
- Callouts de color para `Que vigilar`, `No olvidar`, `Alerta`.
- Ilustracion minima. Mejor esquemas simples y tablas utiles.

## UX imprescindible

- Tabla de contenidos sticky en desktop.
- Boton de salto a secciones clave en mobile.
- Lectura muy buena en pantallas pequenas.
- Tiempo estimado de lectura solo si no estorba.
- Boton para imprimir o descargar en recursos y procedimientos.

## Enlazado interno

Regla simple:

- Cada articulo debe enlazar al hub padre.
- Cada articulo debe enlazar a 3 piezas hermanas.
- Cada pieza clinica debe enlazar a al menos 1 recurso o plantilla.
- Cada hub debe empujar a las URLs P0 primero.

## EEAT y confianza

- Mostrar autoria o revision profesional.
- Fecha de primera publicacion y ultima actualizacion.
- Aclarar cuando un contenido es educativo y no sustituye protocolo local.
- Citar fuentes institucionales y literatura util cuando aporte.

## Produccion recomendada

Orden de ejecucion:

1. Homepage.
2. Hubs principales.
3. Batch 1 del tracker.
4. Batch 2 del tracker.
5. Recursos reutilizables.

Archivos ya preparados:

- `Migration/traffic_urls_to_save.csv`
- `Migration/serenfermera_sitemap_master.csv`
- `Migration/serenfermera_production_tracker.csv`
- `Migration/serenfermera_top20_content_briefs.md`
