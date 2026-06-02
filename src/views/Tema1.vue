<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de calidad del #[i software]
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Este apartado presenta una visión general de los fundamentos de la calidad del #[i software], entendida como un elemento estratégico para garantizar soluciones tecnológicas confiables, eficientes y alineadas con las necesidades de los usuarios y de las organizaciones. Se abordan los principios que sustentan la prevención de errores, la correcta gestión del trabajo y la mejora progresiva de los resultados, promoviendo una cultura orientada a la calidad, la evaluación sistemática y el fortalecimiento continuo de los procesos de desarrollo.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Conceptos básicos de calidad 

    p.mb-4 A través del siguiente pódcast, se explicarán los conceptos básicos de calidad en el contexto del desarrollo de #[i software], fundamentales para comprender cómo se evalúa y asegura que un producto cumpla con las expectativas del usuario y de la organización. En este espacio reflexivo, se abordará la diferencia entre calidad del producto y calidad del proceso:

    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12
        .row.justify-content-center.align-items-center.g-0
          .col-lg-12.order-lg-2.order-2
            .cajon.cajon.C02.p-2
              .col-lg-12
                .tarjeta.clr--pink.p-3.rounded-0.h-100
                  .tarjeta.bg-white.p-3
                    //- #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
                    //-   h2 Pódcast
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Pódcast"
                    :audio="require('@/assets/curso/podcast/podcast.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-lg-12.col-12.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema1/img-02.svg', alt='')

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Aseguramiento de calidad (QA) vs control de calidad (QC)

    p.mb-4 Aunque se usan como sinónimos, en gestión profesional son complementarios y distintos. Estas son sus especificaciones:

    .row.mb-4
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta.tarjeta-BG02.h-100(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/img-03.png', alt='Texto que describa la imagen')
          .p-4
            .tarjeta.tarjeta--blanca
              p.text-center.mb-0 #[b QA – Quality Assurance (aseguramiento de calidad)]
            p.mb-0 #[b Enfoque:] preventivo, orientado al proceso.
            p #[b Propósito:] evitar que los defectos nazcan, haciendo que el proceso sea capaz de producir calidad.
            p #[b Ejemplos de actividades QA (en #[i software/testing]):]
            ul.lista-ul
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Definir política de calidad y estrategia de pruebas.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Establecer estándares (nomenclatura, criterios de aceptación, definición de #[i “done”], guías de documentación).
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Auditorías internas de cumplimiento (¿se hace trazabilidad?, ¿se registran defectos correctamente?).
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Revisión de procesos (#[i postmortem], lecciones aprendidas, mejora del flujo de defectos).
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Gestión de métricas y tableros.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Asegurar que existan criterios de entrada/salida en pruebas (gates de calidad).
      .col-lg-6
        .tarjeta.tarjeta-BG03.h-100(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img-04.png', alt='Texto que describa la imagen')         
          .p-4
            .tarjeta.tarjeta--blanca
              p.text-center.mb-0 #[b QC – Quality Control (control de calidad)]
            p.mb-0 #[b Enfoque:] detectivo/correctivo, orientado al producto.
            p #[b Propósito:] encontrar defectos en el #[i software] antes de que llegue a producción.
            p #[b Ejemplos de actividades QC:]
            ul.lista-ul
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Ejecución de pruebas (manuales/automatizadas): unitarias, integración, sistema, aceptación.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Pruebas no funcionales: rendimiento, seguridad, compatibilidad, usabilidad.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Inspecciones del producto: revisión de interfaz, validación de requisitos implementados.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Reporte de defectos y verificación de correcciones (#[i retesting] y regresión).

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Verificación y Validación (V&V)

    p.mb-4 Estas prácticas son centrales en cualquier enfoque de calidad, ya que permite evaluar el #[i software] tanto desde el cumplimiento técnico como desde su adecuación al uso real, asegurando coherencia entre lo que se construye, lo que se define y lo que el usuario necesita. A partir de ello, cumplen las siguientes acciones:
    
    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-4(style="background-color:#DFEFFF")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/tema1/img-05.svg', alt='')
            h4.text-center.mb-4 Verificación
            p.mb-0 #[b Idea:] “¿Se construye el producto correctamente?”
            p Se centra en conformidad con especificaciones y diseño. Evalúa consistencia interna con lo planeado.
            p #[b Objetivo:] detectar desviaciones técnicas temprano.
            p #[b Producto típico:] evidencias de revisión, #[i checklist], hallazgos, métricas de cobertura, resultados de análisis.
          .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#F1E2FF")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/tema1/img-06.svg', alt='')
            h4.text-center.mb-4 Validación
            p.mb-0 #[b Idea:] “¿Se construye el producto correcto?”
            p Se centra en adecuación al uso real y necesidades del usuario/negocio.
            p #[b Objetivo:] asegurar que el #[i software] entregue valor en contexto.
            p #[b Producto típico:] actas de aceptación, evidencias de cumplimiento de historias, resultados de pruebas con usuarios.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Costos de la calidad

    p.mb-4 Los costos de calidad son la forma gerencial de demostrar que invertir en calidad es rentable. Tradicionalmente se agrupan en cuatro categorías:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-8.order-2
        ul.lista-ul.mb-4
          li
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Costos de prevención.] Inversión para evitar defectos.
          li 
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Costos de evaluación (o de detección).] Costos para encontrar defectos antes de liberar.
          li 
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Costos de fallos internos.] Defectos detectados antes de producción (pero ya ocurrieron).
          li 
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Costos de fallos externos.] Defectos detectados en producción (los más caros).
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/tema1/img-08.svg" alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 #[b Principio clave:] el costo de un defecto crece dramáticamente cuanto más tarde se detecta. Por eso la gestión de pruebas y QA busca mover detección y prevención “a la izquierda” (<em>shift-left</em>).
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img-07.png', alt='')

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Gestión de procesos

    p.mb-4 La gestión de procesos permite organizar y controlar el trabajo de forma sistemática, asegurando que las actividades se ejecuten de manera coherente, medible y orientada a resultados.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Enfoque basado en procesos

    p.mb-4 Gestionar calidad en #[i software] implica tratar el desarrollo y las pruebas como un sistema de procesos interrelacionados, no como actividades aisladas. Un proceso se describe por: entradas (requisitos, historias, diseños, código), actividades (diseñar pruebas, ejecutar, registrar defectos), salidas (evidencias, métricas, #[i software] probado), responsables (roles claros), recursos (herramientas, ambientes, datos), así como reglas y estándares (definiciones, plantillas, criterios).

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color: #19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img-09.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p Los siguientes son los beneficios del enfoque por procesos en pruebas/QA: 
        br
        br
        ul.lista-ul
          li.mb-0
            ul
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-minus(style="top: 8px;")
                p.mb-0 #[b Repetibilidad.] El resultado no depende “del héroe” sino del sistema.
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-minus(style="top: 8px;")
                p.mb-0 #[b Trazabilidad.] Se puede explicar y auditar lo que se hizo.
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-minus(style="top: 8px;")
                p.mb-0 #[b Control.] Se detectan cuellos de botella (ej. ambientes, datos, aprobaciones).
              li(data-aos="fade-right") 
                i.fas.fa-minus(style="top: 8px;")
                p.mb-0 #[b Mejora.] Se identifica qué cambiar para reducir defectos y retrabajo.

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.px-4.py-4.mb-4
          .row.justify-content-center
            .col-lg-3.col-4.mb-lg-0.mb-4.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img-10.svg', alt='Imagen decorativa')
            .col-lg-8.col-12
              p Aplicación típica en #[i testing]:
              ul.lista-ul.mb-0
                li
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span Proceso de planificación de pruebas (estrategia → plan → estimación).
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span Proceso de diseño de pruebas (requisitos → casos → datos).
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span Proceso de ejecución (#[i build] estable → ejecución → evidencias).
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span Proceso de gestión de defectos (registro → #[i triage] → corrección → verificación).
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span Proceso de cierre (métricas → lecciones aprendidas → mejora).

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ciclo PHVA (PDCA)
    
    p.mb-4 El PHVA es un marco universal de mejora continua que en pruebas/QA que se traduce de forma muy concreta, así:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-8.order-2
        TabsA.color-acento-botones.mb-4(data-aos="fade-right")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Planear")
            ul.lista-ul.mb-0 
              li.mb-0 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Definir política/objetivos de calidad.
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Establecer estrategia y plan de pruebas.
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Definir criterios de entrada/salida (#[i Definition of Ready/Done, gates]).
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Planificar métricas (qué medir y cómo).
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Identificar riesgos de calidad (módulos críticos, cambios mayores, deuda técnica).
          .tarjeta.color-acento-botones--borde.p-4(titulo="Hacer")
            ul.lista-ul.mb-0 
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Ejecutar el proceso: diseño y ejecución de pruebas, automatización, revisión.
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Gestionar defectos con disciplina (severidad, prioridad, trazabilidad).
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Mantener evidencias y documentación (sin burocracia innecesaria, pero con rigor).
          .tarjeta.color-acento-botones--borde.p-4(titulo="Verificar")
            ul.lista-ul.mb-0 
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Analizar resultados: defectos por módulo, por tipo, tendencias.
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Verificar cumplimiento de criterios de salida.
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Auditar artefactos clave (plan, casos, reporte, trazabilidad).
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Evaluar efectividad del proceso: ¿qué tanto se detecta antes de producción?
          .tarjeta.color-acento-botones--borde.p-4(titulo="Actuar")
            ul.lista-ul.mb-0 
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Implementar mejoras: ajustes al proceso, automatización, estándares, capacitación.
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Eliminar causas raíz (no solo “arreglar el #[i bug”]).
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Actualizar plantillas, #[i checklists], definición de “#[i done]”.
              li.mb-0  
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Repriorizar riesgos y reforzar controles donde más impacta.
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img-11.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img-08.svg', alt='', style='width: 60px').m-auto
            .col-lg
              p.mb-0 PHVA en modalidad virtual: muy útil porque obliga a formalizar acuerdos (criterios, trazabilidad, evidencias) y a usar métricas para coordinación remota.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Gestión por indicadores

    p.mb-4 La gestión por indicadores evita decisiones “a ojo” y habilita control real. En pruebas/QA, las métricas deben cumplir tres condiciones:

    ol.lista-ol--cuadro
      li(data-aos="flip-up") 
        .lista-ol--cuadro__vineta
          span(style="color:#000 !important; font-weight:bold;") A
        span(style="color:#000 !important;") Ser interpretables (que guíen acción).
      li(data-aos="flip-right") 
        .lista-ol--cuadro__vineta
          span(style="color:#000 !important; font-weight:bold;") B
        span(style="color:#000 !important;") Ser consistentes (misma definición siempre).
      li(data-aos="flip-right") 
        .lista-ol--cuadro__vineta
          span(style="color:#000 !important; font-weight:bold;") C
        span(style="color:#000 !important;") No incentivar trampas (ej. “cerrar por cerrar” defectos).

    p.mb-4 A continuación, se presentan indicadores clave con propósito gerencial, que permiten evaluar el estado del producto, la efectividad de las pruebas y la estabilidad de los procesos, facilitando la identificación de riesgos y la toma de decisiones oportunas en proyectos de #[i software]:

    .tarjeta--BG01.bg-fix-bleed.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.p-lg-5.slider-fix-bleed
        SlyderA(tipo="b" data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Indicadores de defectos
              p(style="color:#000 !important") #[b Densidad de defectos:] defectos por tamaño (KLOC, puntos de función, historias). Sirve para comparar módulos y detectar zonas de riesgo.
              p(style="color:#000 !important") #[b Severidad de defectos:] proporción críticos/altos vs medios/bajos. Sirve para medir riesgo real, no solo cantidad.
              p(style="color:#000 !important") #[b Defectos escapados (#[i leakage]):] defectos hallados en producción vs totales. Mide efectividad del proceso de pruebas.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema1/img-12.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Indicadores de efectividad de pruebas
              p(style="color:#000 !important") #[b DRE (Defect Removal Efficiency):] qué porcentaje de defectos se elimina antes de liberar. Refleja madurez de QA/QC y efectividad del #[i pipeline].
              p(style="color:#000 !important") #[b Cobertura de pruebas:] por requisitos, por código, por riesgo. Debe interpretarse con cuidado: cobertura alta no garantiza calidad si los casos son pobres.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4   
              figure
                img(src='@/assets/curso/tema1/img-13.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Indicadores de estabilidad y flujo
              p(style="color:#000 !important") #[b Tasa de reapertura:] defectos reabiertos / defectos cerrados. Indica baja calidad de correcciones o mala definición del defecto.
              p(style="color:#000 !important") #[b Tiempo medio de ciclo del defecto:] desde reporte hasta cierre verificado. Mide eficiencia operativa entre QA y desarrollo.
              p(style="color:#000 !important") #[b Tendencia de defectos por #[i sprint/release]:] si suben, se estancan o bajan. Permite decisiones: congelar alcance, aumentar pruebas, reforzar revisiones.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema1/img-14.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Indicadores de servicio/calidad del servicio de #[i software]
              ul.lista-ul
                li.mb-0
                  ul
                    li(data-aos="fade-right") 
                      i.fas.fa-minus(style="top: 8px;")
                      p.mb-0 Incidentes #[i post-release] (por semana/mes).
                    li(data-aos="fade-right") 
                      i.fas.fa-minus(style="top: 8px;")
                      p.mb-0 Cumplimiento de SLA (si aplica).
                    li(data-aos="fade-right") 
                      i.fas.fa-minus(style="top: 8px;")
                      p.mb-0 MTTR (tiempo medio de recuperación).
              p Estos indicadores conectan #[i testing] con el “servicio de #[i software]”, que es clave en la competencia del curso.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema1/img-15.png', style="width: 500px" ,alt='').m-auto

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-8.col-12
        .cajon.cajon.C03.color-secundario.p-4
          p.text-center.mb-0 Regla de oro: un indicador sin decisión asociada es ruido. Cada métrica debe responder:
          p.text-center.mb-0 #[b ¿Qué decisión habilita?]
          p.text-center.mb-0 #[b ¿Qué acción se toma si empeora?]

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Mejora continua

    p.mb-4 La mejora continua en calidad de #[i software] es un enfoque sistemático orientado a incrementar, de manera sostenida, la capacidad del proceso para prevenir defectos, detectar fallas tempranamente y entregar versiones estables con menor variabilidad. No se limita a “arreglar lo que salió mal” en una liberación; implica aprender del comportamiento del proceso y del producto para modificar prácticas, estándares, herramientas y criterios de control. En contextos de pruebas de #[i software], la mejora continua conecta directamente con la gestión del servicio de #[i software], porque reduce incidentes en producción, estabiliza el desempeño y mejora el cumplimiento de acuerdos de nivel de servicio (SLA) cuando existan.

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img-16.svg', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p En términos operativos, la mejora continua se apoya en tres pilares: (1) medición y evidencia, (2) análisis causal y (3) acciones de mejora verificables.
        p En síntesis, la mejora continua convierte la calidad en una capacidad organizacional acumulativa. Al aplicar este enfoque en pruebas de #[i software], se fortalece el control del proceso (menos incertidumbre), se incrementa la confiabilidad del producto (menos fallos externos) y se establece una base para adoptar modelos de madurez (como CMMI o ISO/IEC 15504) con evidencias cuantitativas que soporten decisiones de gestión.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
