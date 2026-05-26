<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estándares de calidad para el desarrollo de <em>software</em>

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema2/img-01.png', alt='')

    p La estandarización en ingeniería de #[i software] cumple una función estratégica: proporciona un lenguaje común, criterios objetivos de evaluación y marcos sistemáticos para garantizar calidad, repetibilidad y mejora continua. 

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Familia ISO/IEC 25000 (SQuaRE) 

    p.mb-4 La familia ISO/IEC 25000, conocida como SQuaRE (Software Product Quality Requirements and Evaluation), reemplaza y amplía el modelo ISO/IEC 9126 y tiene como propósito establecer un marco integral para definir requisitos de calidad del producto #[i software], medir y evaluar sus características, verificar el grado de cumplimiento y promover la integración de la calidad a lo largo de todo el ciclo de vida del #[i software].

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.cajon.C01.px-4.py-4.mb-4
          .row.justify-content-center
            .col-lg-3.col-4.mb-lg-0.mb-4.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema2/img-02.svg', alt='Imagen decorativa')
            .col-lg-8.col-12
              p La estructura SQuaRE se organiza en cinco divisiones principales:
              ul.lista-ul.mb-0
                li
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  | ISO/IEC 2500n – Gestión de calidad.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  | ISO/IEC 2501n – Modelo de calidad.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  | ISO/IEC 2502n – Medición de calidad.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  | ISO/IEC 2503n – Requisitos de calidad.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  | ISO/IEC 2504n – Evaluación de calidad.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8.col-12
        .cajon.cajon.C03.color-secundario.p-4
          p.text-center.mb-0 #[b Este enfoque integra modelo conceptual + métricas + evaluación sistemática.]

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Modelo ISO/IEC 15504

    p Conocido como SPICE (Software Process Improvement and Capability determination), es un estándar internacional y herramienta poderosa que proporciona un marco para evaluar y mejorar los procesos de desarrollo de #[i software]. Este modelo se centra en la capacidad de los procesos, lo que significa que no solo describe qué procesos deben existir, sino también cómo se pueden medir y mejorar para garantizar la calidad del #[i software] producido.
    p.mb-4 SPICE se basa en dos conceptos clave:

    .row.mb-4
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta.tarjeta-BG01.h-100(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/img-03.png', alt='Texto que describa la imagen')
          .p-4
            h4 #[i Process Assessment]
            p.mb-0 Se refiere a la evaluación de la madurez y capacidad de los procesos de #[i software]. Esto implica analizar cómo se llevan a cabo los procesos, identificar puntos fuertes y áreas que necesitan mejora.
      .col-lg-6
        .tarjeta.tarjeta-BG01.h-100(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema2/img-04.png', alt='Texto que describa la imagen')         
          .p-4
            h4 #[i Capability Levels]
            p.mb-0 SPICE define cinco niveles de capacidad para los procesos, que van desde el nivel 1 (inicial, donde los procesos son #[i ad hoc] y poco controlados) hasta el nivel 5 (optimizado, donde hay mejoras continuas y adaptaciones). Esto permite a las organizaciones identificar su posición actual y establecer un camino hacia la mejora.

    p.mb-4 La aplicación de SPICE en el desarrollo de pruebas de #[i software] implica varios pasos fundamentales: 

    .tarjeta--BG02.px-md-5.p-lg-0.p-4.slyderF-wrapper
      .slyderF-container
        .row.justify-content-center.align-items-center.my-lg-5.my-4
          .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
            figure
              img(src='@/assets/curso/tema2/img-05.png', alt='alt' style='margin-bottom: -25px;')
          .col-lg-8
            SlyderF.custom.color-acento-botones(columnas="col-12")
              .tarjeta.bgslyder.p-4
                h4 A. Definición de procesos de pruebas.
                p.mb-0 Primero, es importante definir claramente los procesos que se utilizarán en las pruebas. Esto incluye su planificación, el diseño de casos de prueba, la ejecución, el registro de resultados y la gestión de defectos. SPICE ayuda a formalizar y documentar estos procesos.
              .tarjeta.bgslyder.p-4
                h4 B. Evaluación de procesos. 
                p.mb-0 Una vez definidos, la organización debe evaluar estas acciones utilizando el modelo de evaluación de SPICE. Esto implica recopilar datos sobre cómo se llevan a cabo los procesos de pruebas y compararlos con los niveles de capacidad establecidos en el modelo. Por ejemplo, se podría evaluar si las pruebas se planifican de manera sistemática o si se realizan de forma ad hoc.
              .tarjeta.bgslyder.p-4
                h4 C.	Identificación de mejoras. 
                p.mb-0 Con base en la evaluación, se identifican las áreas que necesitan mejora. Esto puede incluir aspectos como la documentación deficiente de los casos de prueba, falta de seguimiento en la gestión de defectos o ineficiencias en la ejecución de pruebas automatizadas.
              .tarjeta.bgslyder.p-4
                h4 D.	Implementación de cambios.
                p.mb-0 Después de identificar las áreas de mejora, se implementan acciones correctivas y cambios en los procesos. Esto puede involucrar la capacitación del personal, la adopción de herramientas de gestión de pruebas o la creación de plantillas estandarizadas para casos de prueba.
              .tarjeta.bgslyder.p-4
                h4 E.	Monitoreo y re-evaluación. 
                p.mb-0 Finalmente, SPICE promueve la idea de que la mejora es un esfuerzo continuo. Después de implementar cambios, es importante seguir monitoreando su efectividad en las actividades de prueba, recoger #[i feedback] y volver a evaluar con el modelo SPICE para verificar si se ha avanzado hacia niveles de capacidad más altos.
    
    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Estándares IEEE

    p El IEEE (Instituto de Ingenieros Eléctricos y Electrónicos) es la organización técnica profesional más grande del mundo. Sus estándares definen las buenas prácticas que guían el desarrollo y la verificación del #[i software] a nivel global.
    p.mb-4  A continuación, un poco de historia: 

    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")(style="background-color:#F1E2FF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/img-07.svg' alt="")
        h4.text-center 1987: IEEE 1008 - Establecido
        p.text-center.mb-0 Se introduce una metodología sistemática para pruebas unitarias.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")(style="background-color:#DFEFFF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/img-06.svg' alt="")
        h4.text-center 1993 IEEE 829 - Publicado.
        p.text-center.mb-0  Se establece el primer estándar para la documentación de pruebas.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")(style="background-color:#F1E2FF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/img-08.svg' alt="")
        h4.text-center 1998-2008 Revisiones y actualizaciones
        p.text-center.mb-0  Los estándares se adaptan a metodologías ágiles y nuevos paradigmas.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")(style="background-color:#DFEFFF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/img-09.svg' alt="")
        h4.text-center 2013: IEEE/ISO/IEC 29119 - Unificado
        p.text-center.mb-0 Se crea una familia integral de normas para pruebas de #[i software].

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 IEEE 829 — Documentación de pruebas

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        p El IEEE 829 es un estándar internacional desarrollado por el Institute of Electrical and Electronics Engineers (IEEE), que establece una estructura formal para la documentación del proceso de pruebas de #[i software]. Su propósito es garantizar que las actividades de prueba se planifiquen, ejecuten y documenten de manera sistemática, trazable y verificable, contribuyendo así a la calidad del producto y a la transparencia del proceso.
        p Este estándar no define cómo realizar técnicamente las pruebas, sino qué documentos deben existir y qué información mínima deben contener, promoviendo buenas prácticas de aseguramiento de calidad en proyectos de #[i software].
        p El modelo de IEEE 829 contempla documentos principales, cada uno con un propósito específico dentro del ciclo de pruebas así:
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img-10.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 9.5px')
              .col
                h3.mb-0 Plan de pruebas
        p El plan de pruebas es el documento estratégico que orienta y estructura todo el proceso de verificación y validación del sistema. En él, se define el alcance, especificando qué funcionalidades, módulos o requisitos serán evaluados y cuáles quedarán fuera del ciclo de pruebas.
        .cajon.cajon.C01.color-primario.p-4
          p Asimismo, establece el enfoque, determinando los tipos de pruebas que se ejecutarán, tales como pruebas unitarias, de integración, de sistema, de aceptación, de rendimiento o de seguridad, entre otras.
          p.mb-0 En cuanto a los recursos, se detallan el equipo humano responsable, las herramientas que se utilizarán y los ambientes de prueba requeridos para garantizar una ejecución adecuada.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img-11.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Adicionalmente, el documento contempla el cronograma de actividades, los criterios de entrada y salida que regulan el inicio y cierre del proceso, así como los riesgos o factores potenciales que puedan afectar el desarrollo de las pruebas. De esta manera, el plan de pruebas se convierte en la guía formal que asegura organización, control y trazabilidad durante todo el ciclo de evaluación.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 9.5px')
              .col
                h3.mb-0 Especificación de diseño
        p Traduce los requisitos del sistema en condiciones verificables. Define qué se va a probar y cómo se organizarán los casos de prueba.
        .bloque-texto-c.color-primario.tarjeta.p-4.mb-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img-12.svg', alt='', style='width: 60px').m-auto
            .col-lg
              p.mb-0 #[b Casos de prueba detallados:] su objetivo es asegurar la cobertura adecuada de los requisitos y mantener trazabilidad entre lo solicitado y lo evaluado.
        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 9.5px')
              .col
                h3.mb-0 Especificación de procedimiento
        p Este documento describe de manera detallada cada caso de prueba individual. Incluye:

        .row.justify-content-center.align-items-center
          .col-lg-4
            .bg-color-2.px-4.py-4.mb-4
              .row.justify-content-center.align-items-center
                .col
                  p.text-center.mb-0 Identificador único del caso.
          .col-lg-4(data-aos="fade-left")
            .bg-color-2.px-4.py-4.mb-4
              .row.justify-content-center.align-items-center
                .col
                  p.text-center.mb-0 Objetivo específico.
          .col-lg-4(data-aos="fade-left")
            .bg-color-2.px-4.py-4.mb-4
              .row.justify-content-center.align-items-center
                .col
                  p.text-center.mb-0 Condiciones previas.
          .col-lg-4(data-aos="fade-left")
            .bg-color-2.px-4.py-4.mb-4
              .row.justify-content-center.align-items-center
                .col
                  p.text-center.mb-0 Datos de entrada.
          .col-lg-4(data-aos="fade-left")
            .bg-color-2.px-4.py-4.mb-4
              .row.justify-content-center.align-items-center
                .col
                  p.text-center.mb-0 Procedimiento resumido.
          .col-lg-4(data-aos="fade-left")
            .bg-color-2.px-4.py-4.mb-4
              .row.justify-content-center.align-items-center
                .col
                  p.text-center.mb-0 Resultado esperado.
          .col-lg-4(data-aos="fade-left")
            .bg-color-2.px-4.py-4.mb-4
              .row.justify-content-center.align-items-center
                .col
                  p.text-center.mb-0 Criterios de aceptación.

    p.mb-4 Una vez definidos los documentos de planeación y especificación, el estándar IEEE 829 también contempla artefactos orientados al seguimiento, control y cierre del ciclo de pruebas. Estos documentos permiten registrar lo que realmente ocurrió durante la ejecución, gestionar los defectos detectados y consolidar los resultados finales, aportando evidencia objetiva para la evaluación de la calidad del #[i software] y la toma de decisiones, encontrando: 

    .cajon.tabs-a__tab.p-5.mb-4
      SlyderB(:datos="datosSlyder")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 IEEE 730 — Aseguramiento de Calidad (SQAP)

    p.mb-4 Es el mapa de ruta que permite a un equipo de #[i software] garantizar que la calidad no es un evento aislado al final del proyecto, sino un proceso continuo, integrado en cada fase del ciclo de vida. La siguiente tabla ejemplifica el proceso:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Secciones del SQAP y su aporte al aseguramiento de la calidad
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Sección del SQAP
                th(style="width: 30%; background-color: #FFEBBE;") Qué garantiza
                th(style="width: 30%; background-color: #FFEBBE;") Entregable principal
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 1. Propósito
                td(style="background-color: #F6F6F6;") Claridad sobre objetivos y alcance de la calidad.
                td(style="background-color: #F6F6F6;") Declaración de alcance del SQAP.
              tr(data-aos="fade-right")
                td 2. Referencias
                td Coherencia normativa y contractual
                td Tabla de referencias citadas.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 3. Gestión
                td(style="background-color: #F6F6F6;") Roles, responsabilidades y recursos claros.
                td(style="background-color: #F6F6F6;") Organigrama QA y matriz RACI.
              tr(data-aos="fade-right")
                td 4. Documentación
                td Trazabilidad y evidencia del proceso.
                td Lista de documentos del proyecto.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 5. Estándares y prácticas
                td(style="background-color: #F6F6F6;") Uniformidad técnica en el equipo.
                td(style="background-color: #F6F6F6;") Guías de codificación y prácticas.
              tr(data-aos="fade-right")
                td 6. Revisiones e inspecciones
                td Detección temprana de defectos.
                td Calendario y actas de revisiones.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 7. Gestión de riesgos
                td(style="background-color: #F6F6F6;") Anticipación de problemas de calidad.
                td(style="background-color: #F6F6F6;") Registro y matriz de riesgos.
              tr(data-aos="fade-right")
                td 8. Métricas de Calidad
                td Medición objetiva del nivel de calidad.
                td #[i Dashboard] de indicadores de calidad.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 IEEE 1008 — Pruebas unitarias

    p.mb-4 Es el estándar internacional dedicado específicamente al proceso de Pruebas de Unidad (Unit Testing), cuyo objetivo es asegurar que los componentes mínimos del #[i software] funcionen correctamente de forma aislada antes de ser integrados al sistema completo. Se caracteriza por un enfoque sistemático y disciplinado que divide el trabajo en cuatro fases críticas —Planificación, Adquisición, Ejecución y Verificación— permitiendo a los desarrolladores identificar errores en las etapas más tempranas. Cada fase es explicada a continuación:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C01 color-boton-slyder" data-aos="zoom-in")
          .row.justify-content-center(titulo="Planificación - Definir el alcance")
            p En esta fase inicial, no se trata solo de "decir qué probar", sino de establecer las reglas del juego para cada unidad de código (una función, una clase o un módulo pequeño). Incluye:
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Identificación de la unidad: se determina qué componentes específicos serán sometidos a prueba.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Definición de criterios de suficiencia: ¿Cuándo se considera que la unidad ha sido probada "lo suficiente"? (Ej. cobertura de código al 90 %).
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Evaluación de riesgos: identificar qué unidades son más críticas para el funcionamiento general del sistema.
                      .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3
                        figure.text-center
                          img.mx-auto.d-block(src='@/assets/curso/tema2/img-16.svg', alt="" style="max-width: 120px;")
          .row.justify-content-center(titulo="Adquisición - Preparar casos y entorno")
            p Aquí se recolectan y crean los recursos necesarios. No se puede probar si no se tiene el "laboratorio" listo. Al respecto se tiene en cuenta:
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Diseño de casos de prueba: se definen las entradas (#[i inputs]), las condiciones de ejecución y, lo más importante, los resultados esperados.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Preparación del entorno: configuración de herramientas de prueba, #[i stubs] (objetos simulados que reemplazan dependencias que aún no existen) y #[i drivers] (controladores que llaman a la unidad).
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Generación de datos: crear los datos de prueba, incluyendo casos de éxito y casos de error (datos inválidos).
                      .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3
                        figure.text-center
                          img.mx-auto.d-block(src='@/assets/curso/tema2/img-17.svg', alt="" style="max-width: 120px;")
          .row.justify-content-center(titulo="Ejecución - Aplicar y registrar")
            p Es fase de “acción” donde se corren las pruebas diseñadas en la fase anterior sobre el código real y se tiene en cuenta:
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Corrida de pruebas: se ejecutan los casos de prueba en el entorno preparado.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Registro de incidentes: cada vez que el resultado real no coincide con el esperado, se documenta como un fallo o anomalía.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[i Logs] de prueba: se genera una bitácora técnica que detalla qué se ejecutó, en qué orden y qué sucedió en el sistema.
                      .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3
                        figure.text-center
                          img.mx-auto.d-block(src='@/assets/curso/tema2/img-18.svg', alt="" style="max-width: 120px;")
          .row.justify-content-center(titulo="Verificación - Confirmar criterios")
            p Es la fase de cierre donde se decide si la unidad "pasa" o "reprueba" y tiene en cuenta:
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Evaluación de resultados: se comparan los resultados registrados contra los criterios de suficiencia definidos en la fase de planificación.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Análisis de errores: se determina si los fallos son errores de código, de diseño o incluso errores en el propio caso de prueba.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 Resumen de pruebas: se emite un reporte final de la unidad indicando si está lista para integrarse con el resto del sistema.
                      .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3
                        figure.text-center
                          img.mx-auto.d-block(src='@/assets/curso/tema2/img-19.svg', alt="" style="max-width: 120px;")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 IEEE 1012 - Verificación y Validación (V&V) de #[i software]

    p.mb-4 Es una de las guías más robustas y respetadas en la ingeniería de #[i software], ya que define los procesos necesarios para asegurar que un sistema cumpla con sus requisitos y con las necesidades del usuario final.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 9.5px')
              .col
                h3.mb-0 ¿Qué es Verificación y Validación (V&V)?
        p Aunque suelen usarse como sinónimos, la norma hace una distinción clara:
        .row.justify-content-center.ali.mb-4(data-aos="fade-left")
          .col-lg-12(data-aos="fade-down")
            .tarjeta--container.row.mb-3
              .col-xl.col-md-6.tarjeta.color-primario.p-4(style="background-color:#DFEFFF")
                .row.justify-content-center.mb-3
                  .col-lg-4.col-6
                    figure
                      img(src='@/assets/curso/tema1/img-05.svg', alt='')
                h4.text-center.mb-4 Verificación
                p.mb-0  ¿Se está construyendo el producto correctamente? (Evaluar si el #[i software] cumple con las especificaciones de cada fase).
              .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#F1E2FF")
                .row.justify-content-center.mb-3
                  .col-lg-4.col-6
                    figure
                      img(src='@/assets/curso/tema1/img-06.svg', alt='')
                h4.text-center.mb-4 Validación
                p.mb-0  ¿Se está construyendo el producto correcto? (Evaluar si el #[i software] final satisface las necesidades del cliente).
        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 9.5px')
              .col
                h3.mb-0 Los niveles de integridad (#[i Integrity levels])
        p Lo que hace especial a la IEEE 1012 es que no es "talla única". La intensidad de las pruebas depende del riesgo. Define 4 niveles relacionados en la siguiente tabla:
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Niveles IEEE 1012
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Nivel
                th(style="width: 15%; background-color: #FFEBBE;") Descripción
                th(style="width: 40%; background-color: #FFEBBE;") Consecuencia del fallo
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 4 (Alto)
                td(style="background-color: #F6F6F6;") Crítico
                td(style="background-color: #F6F6F6;") Pérdida de vidas humanas o desastre catastrófico.
              tr(data-aos="fade-right")
                td 3 (Medio)
                td Importante
                td Fallos en misiones críticas o grandes pérdidas económicas.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 2 (Bajo)
                td(style="background-color: #F6F6F6;") Moderado
                td(style="background-color: #F6F6F6;") Inconvenientes operativos o fallos menores.
              tr(data-aos="fade-right")
                td 1 (Mínimo)
                td Informativo
                td Impacto insignificante.
        .row.justify-content-center
          .col-lg-8.col-12
            .cajon.cajon.C03.color-secundario.p-4.mb-4
              p.text-center.mb-0 A mayor nivel de integridad, la norma exige tareas de V&V más rigurosas y detalladas.
        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 9.5px')
              .col
                h3.mb-0 Estructura del Proceso de V&V
        p La norma organiza las actividades de V&V a lo largo de todo el ciclo de vida del #[i software], no solo al final. Cubre procesos como: 
    
    .row.justify-content-center
      .col-lg-8.col-12
        .cajon.cajon.C01.px-4.py-4.mb-4(style="border-radius:15px")
          .row.justify-content-center
            ul.lista-ul.mb-0
              li
                <i class="fa-solid fa-computer bg-color-1"></i>
                span #[b Gestión.] Planificación de V&V, evaluación de riesgos y control de calidad.
              li 
                <i class="fa-solid fa-computer bg-color-1"></i>
                span #[b Adquisición y suministro.] Revisión de contratos y planes de proveedores.
              li 
                <i class="fa-solid fa-computer bg-color-1"></i>
                span #[b Desarrollo.] Incluye los requisitos, diseño, implementación (código) y pruebas.
              li 
                <i class="fa-solid fa-computer bg-color-1"></i>
                span #[b Operación y mantenimiento.] V&V continuo durante el uso del #[i software] y actualizaciones.
    
    p.mb-5.text-center Los beneficios de implementar IEEE 1012 son: 
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar(style="position: relative; text-align: center;")
          img(src='@/assets/curso/tema2/img-22.svg' alt="" style="position:absolute; top:-10px; left:50%; transform:translateX(-50%); width:120px; z-index:2;")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF; padding-top:80px;")
            p.text-center.mb-0(style="color:#12263F") #[b Detección temprana de errores.] Al verificar desde los requisitos, el costo de corregir errores es significativamente menor.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar(style="position: relative; text-align: center;")
          img(src='@/assets/curso/tema2/img-23.svg' alt="" style="position:absolute; top:-10px; left:50%; transform:translateX(-50%); width:120px; z-index:2;")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF; padding-top:80px;")
            p.text-center.mb-0(style="color:#12263F") #[b Mejora de la calidad.] Asegura que el producto final sea fiable y seguro.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar(style="position: relative; text-align: center;")
          img(src='@/assets/curso/tema2/img-24.svg' alt="" style="position:absolute; top:-10px; left:50%; transform:translateX(-50%); width:120px; z-index:2;")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF; padding-top:80px;")
            p.text-center.mb-0(style="color:#12263F") #[b Cumplimiento normativo.] Es esencial en sectores regulados como la medicina, aviación, energía nuclear y automotriz.

    .BMG2.px-md-5.px-4
      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 IEEE/ISO/IEC 29119 — Familia de estándares

      p.mb-4 Esta familia define un marco integral para las pruebas de #[i software], del cual se desprenden las siguientes partes: 

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-md-7.col-8.order-lg-1.order-1.mb-3
          figure
            img(src='@/assets/curso/tema2/img-25.png', alt='')
        .col.col-lg-5.col-12.order-lg-2.order-2
          ul.lista-ul.mb-0 
            li 
              i.fas.fa-circle(style="top: 8px;")
              p.mb-0 #[b Parte 1.] Conceptos y definiciones.
            li  
              i.fas.fa-circle(style="top: 8px;")
              p.mb-0 #[b Parte 2.] Procesos de prueba.
            li  
              i.fas.fa-circle(style="top: 8px;")
              p.mb-0 #[b Parte 3.] Documentación de prueba.
            li  
              i.fas.fa-circle(style="top: 8px;")
              p.mb-0 #[b Parte 4.] Técnicas de prueba.
            li  
              i.fas.fa-circle(style="top: 8px;")
              p.mb-0 #[b Parte 5.] Pruebas en contextos ágiles (#[i Keyword-Driven]).

      p Uno de los errores más comunes es usar un estándar fuera de su contexto. Por ello, la esta tabla ayuda a elegir el correcto, según la situación del proyecto:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3.
          span Comparación de estándares de prueba
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 14.2%; background-color: #FFEBBE;") Estándar
                th(style="width: 14.2%; background-color: #FFEBBE;") IEEE 829
                th(style="width: 14.2%; background-color: #FFEBBE;") IEEE 730
                th(style="width: 14.2%; background-color: #FFEBBE;") IEEE 1008
                th(style="width: 14.2%; background-color: #FFEBBE;") IEEE 29119-2
                th(style="width: 14.2%; background-color: #FFEBBE;") IEEE 29119-4
                th(style="width: 14.2%; background-color: #FFEBBE;") IEEE 29119-5
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Enfoque principal
                td(style="background-color: #F6F6F6;") Documentación formal del proceso de prueba.
                td(style="background-color: #F6F6F6;") Plan de aseguramiento de calidad.
                td(style="background-color: #F6F6F6;") Pruebas unitarias estructuradas.
                td(style="background-color: #F6F6F6;") Procesos completos de prueba.
                td(style="background-color: #F6F6F6;") Técnicas de diseño de prueba.
                td(style="background-color: #F6F6F6;") Pruebas en entornos ágiles
              tr(data-aos="fade-right")
                td Aplica en
                td Todo el STLC.
                td Fase de planeación.
                td Desarrollo / #[i Sprint].
                td Gestión de pruebas.
                td Diseño de casos.
                td #[i Sprint / scrum].
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Nivel de proyecto
                td(style="background-color: #F6F6F6;") Todos.
                td(style="background-color: #F6F6F6;") Grande.
                td(style="background-color: #F6F6F6;") Mediano.
                td(style="background-color: #F6F6F6;") Grande.
                td(style="background-color: #F6F6F6;") Todos.
                td(style="background-color: #F6F6F6;") Ágil.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        texto:
          '<b>Registro de pruebas.</b> <br><br>Es el documento que consigna la ejecución real de las pruebas realizadas. Incluye los casos ejecutados, la fecha y el responsable, el resultado obtenido (aprobado, fallido o bloqueado), las incidencias detectadas y las evidencias asociadas, como capturas o <em>logs</em>. Sirve como historial del proceso y facilita auditorías y revisiones posteriores.',
        imagen: require('@/assets/curso/tema2/img-13.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de incidentes.</b> <br><br>Describe los defectos o comportamientos inesperados encontrados durante la ejecución, generalmente debe incluir identificador del incidente, descripción detallada del problema, resultado esperado versus el obtenido, niveles de severidad y prioridad y el estado del incidente (abierto, en análisis, corregido, cerrado).',
        imagen: require('@/assets/curso/tema2/img-14.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de resumen.</b> <br><br>Se elabora al finalizar un ciclo de pruebas y consolida los resultados globales del proceso. En él se presenta el alcance cubierto, el total de casos ejecutados, el porcentaje de éxito y de fallos, los incidentes pendientes y la evaluación de los riesgos residuales. Además, incluye una recomendación sobre la liberación del sistema, con el fin de apoyar la toma de decisiones por parte de la gerencia o los <em>stakeholders.</em>',
        imagen: require('@/assets/curso/tema2/img-15.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
