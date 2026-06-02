<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Modelos de calidad de <em>software</em>

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Son marcos de referencia que establecen criterios y características para evaluar y asegurar la calidad de un producto de #[i software]. Definen aspectos como funcionalidad, confiabilidad, usabilidad, eficiencia y mantenibilidad, permitiendo medir el cumplimiento de estándares y orientar la mejora continua del sistema.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 CMMI (Capability Maturity Model Integration) 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-12
        .cajon.cajon.C01.p-4.p-md-4
          .row.justify-content-center(data-aos="flip-left") 
            .col-lg-10.order-lg-1.order-2
              p.mb-0 CMMI es un modelo de mejora de procesos que permite a las organizaciones evaluar y optimizar la manera en que desarrollan y gestionan sus proyectos. Su enfoque se basa en niveles de madurez que reflejan el grado de definición, control y mejora continua de los procesos organizacionales. Cada nivel representa una etapa evolutiva que debe cumplirse progresivamente, ya que el avance hacia niveles superiores requiere la consolidación de las prácticas establecidas en los niveles anteriores.
            .col-lg-2.col-4.mb-lg-0.mb-4.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img-02.png", alt="")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Niveles de madurez

    p Un nivel de madurez es una plataforma evolutiva que describe el grado en que los procesos de una organización están definidos, gestionados, medidos y optimizados. Cada nivel representa un estado de madurez organizacional: para alcanzar un nivel superior se debe haber institucionalizado completamente todos los niveles anteriores. No es posible 'saltar' niveles. La siguiente tabla detalla estos niveles:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span Niveles de madurez	
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") N
                th(style="width: 20%; background-color: #FFEBBE;") Nivel
                th(style="width: 20%; background-color: #FFEBBE;") Perfil
                th(style="width: 70%; background-color: #FFEBBE;") Descripción y características
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") 1
                td(style="background-color: #F6F6F6;") Inicial (#[i Initial])
                td(style="background-color: #F6F6F6;") Caótico
                td(style="background-color: #F6F6F6;") Procesos #[i ad-hoc] e impredecibles. Éxito dependiente de individuos. Proyectos frecuentemente sobre presupuesto y plazo. Alta variabilidad en resultados.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #FFFF;") 2
                td(style="background-color: #FFFF;") Gestionado (#[i Managed])
                td(style="background-color: #FFFF;") Planificado
                td(style="background-color: #FFFF;") Los proyectos se planifican, monitorean y controlan. Los procesos se documentan y se adhieren. El éxito puede repetirse en proyectos similares.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") 3
                td(style="background-color: #F6F6F6;") Definido (#[i Defined])
                td(style="background-color: #F6F6F6;") Estandarizado
                td(style="background-color: #F6F6F6;") Procesos bien definidos, adaptados desde el Proceso Estándar de la Organización (OSP). Toda la organización opera con prácticas coherentes.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #FFFF;") 4
                td(style="background-color: #FFFF;") Cuantitativamente gestionado
                td(style="background-color: #FFFF;") Medido
                td(style="background-color: #FFFF;") Se usan técnicas estadísticas (SPC) para comprender y controlar los subprocesos. Objetivos de calidad cuantitativos establecidos y monitoreados.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") 5
                td(style="background-color: #F6F6F6;") En optimización (#[i Optimizing])
                td(style="background-color: #F6F6F6;") Innovador
                td(style="background-color: #F6F6F6;") Mejora continua e innovación. Se identifican y eliminan causas de variación. Alta capacidad de adaptación ante cambios de negocio y tecnología.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Áreas de proceso (#[i Process Areas — PAs])

    p.mb-4 Un Área de Proceso (PA) es un conjunto de prácticas relacionadas que, cuando se implementan colectivamente, satisfacen un conjunto de metas importantes para mejorar esa área. Cada PA tiene metas específicas (SG — Specific Goals) y metas genéricas (GG — Generic Goals), las cuales incluyen:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-03.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF;")
            h4.text-center.mt-5 Metas específicas (SG)
            p.text-center.mb-0(style="color:#12263F") Únicas de cada PA. Definen lo que debe lograrse en esa área particular.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-04.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF;")
            h4.text-center.mt-5 Metas genéricas (GG)
            p.text-center.mb-0(style="color:#12263F") Aplican a todas las PAs y describen el grado de institucionalización del proceso.

    p.text-center.mb-4 Las metas genéricas (GC) se dividen en:

    .row.justify-content-center.align-items-center
      .col-lg-3(data-aos="fade-left")
        .bg-color-2.px-4.py-4.mb-4
          .row.justify-content-center.align-items-center
            .col
              p.text-center.mb-0 #[b GG2]
              p.text-center.mb-0 Gestionar el proceso definido.
      .col-lg-3(data-aos="fade-left")
        .bg-color-2.px-4.py-4.mb-4
          .row.justify-content-center.align-items-center
            .col
              p.text-center.mb-0 #[b GG3]
              p.text-center.mb-0 Definir el proceso.
      .col-lg-3(data-aos="fade-left")
        .bg-color-2.px-4.py-4.mb-4
          .row.justify-content-center.align-items-center
            .col
              p.text-center.mb-0 #[b GG4]
              p.text-center.mb-0 Gestionar cuantitativamente
      .col-lg-3(data-aos="fade-left")
        .bg-color-2.px-4.py-4.mb-4
          .row.justify-content-center.align-items-center
            .col
              p.text-center.mb-0 #[b GG5]
              p.text-center.mb-0 Optimizar.
    
    p.mb-4 A continuación, se presentan las áreas de proceso organizadas en cuatro categorías:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          span Categoría 1. Gestión de proyectos (PM)
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Sigla
                th(style="width: 30%; background-color: #FFEBBE;") Área de proceso
                th(style="width: 15%; background-color: #FFEBBE;") N° Nivel
                th(style="width: 70%; background-color: #FFEBBE;") Descripción y metas (SG)
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") PP
                td(style="background-color: #F6F6F6;") Planificación del proyecto
                td(style="background-color: #F6F6F6;") Nivel 2
                td(style="background-color: #F6F6F6;") Planes que definen actividades del proyecto. Estimación de tamaño, esfuerzo, costo y cronograma. SG1: estimación. SG2: plan. SG3: compromisos.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #FFFF;") PMC
                td(style="background-color: #FFFF;") Monitoreo y control del proyecto
                td(style="background-color: #FFFF;") Nivel 2
                td(style="background-color: #FFFF;") Permite comprender el avance y tomar acciones correctivas oportunas cuando el proyecto se desvía del plan. SG1: monitorear contra plan. SG2: acciones correctivas.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") SAM
                td(style="background-color: #F6F6F6;") Gestión de acuerdos con proveedores
                td(style="background-color: #F6F6F6;") Nivel 2
                td(style="background-color: #F6F6F6;") Gestiona la adquisición de productos y servicios de proveedores externos mediante acuerdos formales. SG1: establecer acuerdos. SG2: satisfacer acuerdos.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #FFFF;") IPM
                td(style="background-color: #FFFF;") Gestión integrada del proyecto
                td(style="background-color: #FFFF;") Nivel 3
                td(style="background-color: #FFFF;") Gestiona el proyecto usando el proceso estándar de la organización adaptado al contexto. SG1: usar proceso definido. SG2: coordinar #[i stakeholders].
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") RSKM
                td(style="background-color: #F6F6F6;") Gestión de riesgos
                td(style="background-color: #F6F6F6;") Nivel 3
                td(style="background-color: #F6F6F6;") Identifica y mitiga problemas potenciales antes de que ocurran, reduciendo su impacto adverso. SG1: preparar gestión de riesgos. SG2: identificar. SG3: mitigar.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #FFFF;") QPM
                td(style="background-color: #FFFF;") Gestión cuantitativa del proyecto
                td(style="background-color: #FFFF;") Nivel 4
                td(style="background-color: #FFFF;") Gestiona el proyecto con técnicas estadísticas para lograr objetivos cuantitativos de calidad y desempeño. SG1: gestionar cuantitativamente. SG2: gestionar desempeño.

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 6.
            span Categoría 2. Ingeniería de procesos (PE)
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 15%; background-color: #FFEBBE;") Sigla
                  th(style="width: 30%; background-color: #FFEBBE;") Área de proceso
                  th(style="width: 15%; background-color: #FFEBBE;") N° Nivel
                  th(style="width: 70%; background-color: #FFEBBE;") Descripción y metas (SG)
              tbody
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") REQM
                  td(style="background-color: #F6F6F6;") Gestión de requisitos
                  td(style="background-color: #F6F6F6;") Nivel 2
                  td(style="background-color: #F6F6F6;") Gestiona los requisitos del proyecto y asegura alineación entre planes, actividades y productos. SG1: gestionar requisitos.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") RD
                  td(style="background-color: #FFFF;") Desarrollo de requisitos
                  td(style="background-color: #FFFF;") Nivel 3
                  td(style="background-color: #FFFF;") Identifica, analiza y establece los requisitos del cliente, del producto y de sus componentes. SG1: req. Cliente. SG2: del producto. SG3: análisis.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") TS
                  td(style="background-color: #F6F6F6;") Solución técnica
                  td(style="background-color: #F6F6F6;") Nivel 3
                  td(style="background-color: #F6F6F6;") Diseña, desarrolla e implementa soluciones a los requisitos: arquitectura, componentes, documentación. SG1: seleccionar solución. SG2: diseño. SG3: implementar.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") PI
                  td(style="background-color: #FFFF;") Integración del producto
                  td(style="background-color: #FFFF;") Nivel 3
                  td(style="background-color: #FFFF;") Ensambla el producto a partir de sus componentes y asegura que el producto integrado funciona correctamente. SG1: preparar integración. SG2: compatibilidad. SG3: ensamblar.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") VER
                  td(style="background-color: #F6F6F6;") Verificación
                  td(style="background-color: #F6F6F6;") Nivel 3
                  td(style="background-color: #F6F6F6;") Asegura que los productos de trabajo cumplen los requisitos especificados (¿construimos correctamente?). SG1: preparar. SG2: revisiones entre pares. SG3: verificar.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") VAL
                  td(style="background-color: #FFFF;") Validación
                  td(style="background-color: #FFFF;") Nivel 3
                  td(style="background-color: #FFFF;") Demuestra que el producto cumple su uso previsto en el entorno real del cliente (¿construimos lo correcto?). SG1: preparar validación. SG2: validar producto.

          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 7.
            span Categoría 3. Soporte (S)
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 15%; background-color: #FFEBBE;") Sigla
                  th(style="width: 30%; background-color: #FFEBBE;") Área de proceso
                  th(style="width: 15%; background-color: #FFEBBE;") N° Nivel
                  th(style="width: 70%; background-color: #FFEBBE;") Descripción y metas (SG)
              tbody
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") CM
                  td(style="background-color: #F6F6F6;") Gestión de configuración
                  td(style="background-color: #F6F6F6;") Nivel 2
                  td(style="background-color: #F6F6F6;") Establece y mantiene la integridad de los productos de trabajo, mediante identificación, control y auditorías. SG1: línea base. SG2: rastrear cambios. SG3: integridad.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") PPQA
                  td(style="background-color: #FFFF;") Aseguramiento de calidad de proceso y producto
                  td(style="background-color: #FFFF;") Nivel 2
                  td(style="background-color: #FFFF;") Provee visibilidad objetiva del proceso y de los productos de trabajo asociados. SG1: evaluar objetivamente. SG2: retroalimentación objetiva.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") MA
                  td(style="background-color: #F6F6F6;") Medición y análisis
                  td(style="background-color: #F6F6F6;") Nivel 2
                  td(style="background-color: #F6F6F6;") Desarrolla la capacidad de medición para apoyar las necesidades de información de gestión. SG1: alinear medición. SG2: proveer resultados.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") DAR
                  td(style="background-color: #FFFF;") Análisis de decisiones y resolución
                  td(style="background-color: #FFFF;") Nivel 3
                  td(style="background-color: #FFFF;") Analiza decisiones usando un proceso formal de evaluación basado en criterios establecidos. SG1: evaluar alternativas usando criterios formales.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") CAR
                  td(style="background-color: #F6F6F6;") Análisis causal y resolución
                  td(style="background-color: #F6F6F6;") Nivel 5
                  td(style="background-color: #F6F6F6;") Identifica causas de defectos y otros problemas, y actúa para prevenirlos en el futuro sistémicamente. SG1: determinar causas. SG2: abordar causas.

          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 8.
            span Categoría 4. Alto rendimiento y madurez (HRM)
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 15%; background-color: #FFEBBE;") Sigla
                  th(style="width: 30%; background-color: #FFEBBE;") Área de proceso
                  th(style="width: 15%; background-color: #FFEBBE;") N° Nivel
                  th(style="width: 70%; background-color: #FFEBBE;") Descripción y metas (SG)
              tbody
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") OPF
                  td(style="background-color: #F6F6F6;") Enfoque en el proceso organizacional
                  td(style="background-color: #F6F6F6;") Nivel 3
                  td(style="background-color: #F6F6F6;") Planifica e implementa la mejora del proceso basándose en comprensión profunda de los procesos actuales. SG1: oportunidades. SG2: planificar e implementar. SG3: desplegar.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") OPD
                  td(style="background-color: #FFFF;") Definición del proceso organizacional
                  td(style="background-color: #FFFF;") Nivel 3
                  td(style="background-color: #FFFF;") Establece y mantiene los activos del proceso organizacional (OSP, plantillas, guías, métricas). SG1: establecer activos del proceso organizacional.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") OT
                  td(style="background-color: #F6F6F6;") Capacitación organizacional
                  td(style="background-color: #F6F6F6;") Nivel 3
                  td(style="background-color: #F6F6F6;") Desarrolla habilidades y conocimientos para que las personas desempeñen sus roles eficaz y eficientemente. SG1: capacidad de capacitación. SG2: proveer capacitación.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") OPM
                  td(style="background-color: #FFFF;") Gestión del desempeño organizacional
                  td(style="background-color: #FFFF;") Nivel 5
                  td(style="background-color: #FFFF;") Gestiona proactivamente el desempeño de la organización para alcanzar sus objetivos de negocio. SG1: gestionar desempeño. SG2: seleccionar mejoras.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F6F6F6;") OPP
                  td(style="background-color: #F6F6F6;") Desempeño del proceso organizacional
                  td(style="background-color: #F6F6F6;") Nivel 4
                  td(style="background-color: #F6F6F6;") Establece comprensión cuantitativa del desempeño de los procesos estándar de la organización. SG1: líneas base y modelos de desempeño del proceso.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img-08.svg', alt='', style='width: 60px').m-auto
            .col-lg
              p.mb-0 Metas genéricas y específicas: cada PA debe satisfacer sus metas específicas (SG) para cumplir con el nivel de madurez al que pertenece. Adicionalmente debe satisfacer las metas genéricas (GG) que demuestran la institucionalización del proceso en la organización.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Representación continua vs. Escalonada
    
    p CMMI ofrece dos representaciones equivalentes para describir el mismo modelo. Ambas son válidas y conducen a los mismos resultados en términos de mejora de procesos; la diferencia está en el enfoque, la flexibilidad y la forma en que se comunican los resultados a la organización y al mercado. 
    p A continuación, se explica cada una:

    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4(data-aos="fade-right")
        AcordionA.color-secundario(tipo="b" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
          .row(titulo="Representación escalonada (<em>Staged representation</em>)" style="padding-bottom:0 !important; margin-bottom:0 !important;")
            p Organiza las áreas de proceso en cinco niveles de madurez predefinidos. Para avanzar de un nivel al siguiente, la organización debe satisfacer todas las metas del nivel actual. Proporciona una secuencia probada y predefinida para la mejora organizacional y tiene en cuenta:
              .tarjeta.tarjeta--blanca.p-4(style="margin-bottom:-10px;")
                .row 
                  .col-lg-10.col-12
                    ul.lista-ul.mb-0 
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Evalúa:] la organización completa con un único nivel de madurez (1–5).
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Resultado:] un número único y fácilmente comunicable (ej: 'Somos Nivel 3 CMMI').
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Ruta:] fija y predeterminada. No se puede omitir ningún nivel de madurez.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Ventaja:] facilita el #[i benchmarking] y la comparación entre organizaciones.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Uso:] estándar en licitaciones gubernamentales, contratos corporativos, certificaciones.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Limitación:] menor flexibilidad. No permite reflejar fortalezas específicas en áreas aisladas.

          .row(titulo="Representación continua <em>(Continuous representation)</em>" style="padding-bottom:0 !important; margin-bottom:0 !important;")
            p Organiza las áreas de proceso en grupos funcionales (categorías) y permite a cada una ser evaluada con su propio nivel de capacidad del 0 al 3, independientemente de las demás. La organización define qué áreas son estratégicamente prioritarias. En ella se debe tener en cuenta:
              .tarjeta.tarjeta--blanca.p-4(style="margin-bottom:-10px;")
                .row 
                  .col-lg-10.col-12
                    ul.lista-ul.mb-0 
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Evalúa:] cada área de proceso individualmente con nivel de capacidad 0–3.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Resultado:] un perfil de capacidades detallado que muestra fortalezas y brechas por área.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Ruta:] personalizable. La organización define su #[i target profile] según objetivos de negocio.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Ventaja:] mayor flexibilidad y granularidad. Ideal para mejora focalizada.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Uso:] mejora interna estratégica, organizaciones con recursos limitados, #[i start-ups].
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Ventaja adicional:] permite identificar y capitalizar fortalezas diferenciadas por área.

      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img-05.svg' alt="")

    p.mb-4.text-center De acuerdo a lo relacionado en la representación continua, cada nivel de capacidad representa:

    .tarjeta--BG02.px-md-5.p-lg-0.p-4.mb-4.slyderF-wrapper.slyderF-wrapper--niveles
      .slyderF-container
        .row.justify-content-center.align-items-center.my-lg-5.my-4
          .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
            figure
              img(src='@/assets/curso/tema3/img-06.png', alt='alt' style='margin-bottom: -25px;')
          .col-lg-8
            SlyderF.custom.color-acento-botones.slyderF-fix-ipad(columnas="col-lg-6 col-xl-6")
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-5
                    img(src="@/assets/curso/tema3/img-07.svg", alt="alt")
                p.text-center #[b Nivel 0 — Incompleto] 
                p.text-center El proceso no se realiza o se realiza parcialmente. No todas las metas específicas se satisfacen.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-5
                    img(src="@/assets/curso/tema3/img-08.svg", alt="alt")
                p.text-center #[b Nivel 1 — Realizado]
                p.text-center El proceso se realiza y se logran las metas específicas. Sin rigor de gestión.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-5
                    img(src="@/assets/curso/tema3/img-09.svg", alt="alt")
                p.text-center #[b Nivel 2 — Gestionado]
                p.text-center El proceso se planifica, monitorea y controla. Los productos de trabajo son controlados.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-5
                    img(src="@/assets/curso/tema3/img-10.svg", alt="alt")
                p.text-center #[b Nivel 3 — Definido] 
                p.text-center El proceso se adapta desde el proceso estándar de la organización y tiene documentación completa.

    p.mb-4.text-center Para detallar de mejor manera estas dos representaciones, se relaciona la siguiente tabla comparativa:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 9.
          span Comparación de representaciones CMMI
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Dimensión
                th(style="width: 15%; background-color: #FFEBBE;") Escalonada (Staged)
                th(style="width: 15%; background-color: #FFEBBE;") Continua (Continuous)
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Escala de medición
                td(style="background-color: #F6F6F6;") Niveles de Madurez 1–5
                td(style="background-color: #F6F6F6;") Niveles de Capacidad 0–3 por PA.
              tr(data-aos="fade-right")
                td.text-center Unidad de evaluación
                td La organización completa.
                td Cada área de proceso individualmente.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Flexibilidad de ruta
                td(style="background-color: #F6F6F6;") Ruta fija y predeterminada.
                td(style="background-color: #F6F6F6;") Ruta personalizable (#[i target profile]).
              tr(data-aos="fade-right")
                td.text-center Resultado de evaluación
                td Un número único (ej: Nivel 3).
                td Perfil de capacidades por área de proceso.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Uso principal
                td(style="background-color: #F6F6F6;") #[i Benchmarking], contratos, certificación.
                td(style="background-color: #F6F6F6;") Mejora interna focalizada y estratégica.
              tr(data-aos="fade-right")
                td.text-center Visibilidad de brechas
                td Baja (todo o nada por nivel).
                td Alta (fortalezas y debilidades por área).
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Aplicación típica
                td(style="background-color: #F6F6F6;") Empresas que licitan contratos GOV.
                td(style="background-color: #F6F6F6;") Organizaciones con mejora continua interna.
              tr(data-aos="fade-right")
                td.text-center Tiempo para evaluar
                td Mayor — evalúa todo simultáneamente.
                td Menor — se puede hacer por etapas.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-8.col-12
        .cajon.cajon.C03.color-secundario.p-4
          p.mb-0 Elección práctica: las organizaciones que compiten por contratos gubernamentales o corporativos, generalmente optan por la representación escalonada porque el mercado la reconoce y valora. Las organizaciones en proceso de mejora interna sin presión de certificación optan por la continua por su flexibilidad.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Implementación de CMMI en organizaciones

    p.mb-4 Adoptar CMMI no es instalar un #[i software] ni crear documentación; es un proceso de transformación cultural y de procesos que típicamente toma entre 12 y 36 meses para alcanzar el nivel 3, dependiendo del tamaño de la organización, su cultura y su punto de partida. A continuación, la explicación de cada paso y su respectivo procedimiento:

    .row.justify-content-center.mb-4
      .col-md-12(data-aos="fade-right")
        TabsC.color-acento-botones(data-aos="fade-right")
          .py-3.py-md-4(titulo="Paso 1")
            .row.justify-content-center.p-4
              h4 Evaluación inicial (SCAMPI B/C) — Mes 1–2
              p Realizar una evaluación diagnóstica para determinar el nivel de madurez actual y las brechas respecto al nivel objetivo.
              .col-lg-5.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema3/img-11.png', alt='')
              .col-lg-7
                ul.lista-ul.mb-0 
                  li 
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Contratar un #[i lead appraiser] certificado por el CMMI Institute.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Seleccionar el nivel objetivo (típicamente nivel 2 o 3 como primera meta).
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Documentar el estado actual de los procesos vs. prácticas CMMI requeridas.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Identificar y priorizar brechas por área de proceso.
          .py-3.py-md-4(titulo="Paso 2")
            .row.justify-content-center.p-4
              h4 Planificación de la mejora — Mes 2–3
              p Diseñar un plan de mejora realista con responsables, recursos, cronograma e indicadores de éxito.
              .col-lg-5.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema3/img-12.png', alt='')
              .col-lg-7
                ul.lista-ul.mb-0 
                  li 
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Conformar el SEPG: Software Engineering Process Group (equipo multidisciplinario de implementación).
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Priorizar áreas de proceso según el nivel objetivo y las brechas identificadas.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Estimar presupuesto: capacitación, consultoría, herramientas de soporte.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Establecer indicadores de avance del plan de implementación.
          .py-3.py-md-4(titulo="Paso 3")
            .row.justify-content-center.p-4
              h4 Capacitación del equipo — Mes 3–6
              p Entrenar a toda la organización en los conceptos CMMI y las prácticas requeridas. La resistencia al cambio es el mayor riesgo y se mitiga con capacitación que explique el porqué.
              .col-lg-5.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema3/img-13.png', alt='')
              .col-lg-7
                ul.lista-ul.mb-0 
                  li 
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Capacitación introductoria a CMMI para toda la organización (mandatorio).
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Entrenamiento específico por rol: PMs, QA, desarrolladores, arquitectos.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Taller de interpretación y aplicación de prácticas específicas por PA.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Certificación de personal clave como Practitioners o Instructors CMMI.
          .py-3.py-md-4(titulo="Paso 4")
            .row.justify-content-center.p-4
              h4 Definición e implementación de procesos — Mes 6–18
              p Documentar y desplegar los procesos mejorados. Iniciar con un proyecto piloto para validar antes del despliegue general.
              .col-lg-5.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema3/img-14.png', alt='')
              .col-lg-7
                ul.lista-ul.mb-0 
                  li 
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Definir el Proceso Estándar de la Organización (OSP) con plantillas y guías.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Implementar herramientas de apoyo: #[i Jira] (seguimiento), #[i Confluence] (documentación), #[i SonarQube] (calidad).
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Ejecutar proyecto piloto con los nuevos procesos documentados y supervisados.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Refinar procesos con base en las lecciones aprendidas del proyecto piloto.
          .py-3.py-md-4(titulo="Paso 5")
            .row.justify-content-center.p-4
              h4 Medición y seguimiento continuo — Continuo - Meses 12–36 (y en adelante, de forma permanente)
              p Recopilar datos, analizar métricas y realizar revisiones periódicas para verificar la adherencia a los procesos definidos.
              .col-lg-5.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema3/img-15.png', alt='')
              .col-lg-7
                ul.lista-ul.mb-0 
                  li 
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Implementar tablero de métricas de proceso (velocidad, defectos, cobertura, calidad).
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Realizar auditorías internas de proceso (PPQA) de forma trimestral.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Ajustar procesos con base en datos aplicando el ciclo PHVA.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Documentar lecciones aprendidas y actualizar los activos del proceso.
          .py-3.py-md-4(titulo="Paso 6")
            .row.justify-content-center.p-4
              h4 Evaluación formal SCAMPI A y certificación — Mes 24–36
              p Realizar la evaluación oficial con un #[i lead appraiser] certificado para obtener la calificación de nivel, reconocida internacionalmente.
              .col-lg-5.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema3/img-16.png', alt='')
              .col-lg-7
                ul.lista-ul.mb-0 
                  li 
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Coordinar evaluación formal SCAMPI A con #[i lead appraiser] certificado.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Preparar evidencias documentadas de cada práctica por cada área de proceso evaluada.
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Entrevistas al equipo por el equipo de evaluación (proceso de mínimo 2 días).
                  li  
                    i.fas.fa-circle(style="top: 8px;")
                    p.mb-0 Recibir el informe oficial y el registro en el portal cmmi.isaca.org.

    p.text-center Por su parte, los factores críticos de éxito son:

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.cajon.C02.px-4.py-4(style="border-radius:15px")
          .row
            .col-lg-3.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3.ms-lg-auto.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema3/img-17.svg', alt='' style="max-width: 180px;")
            .col-lg-9.col-12.order-lg-1.order-2
              ul.lista-ul.mb-0
                li
                  <i class="fa-solid fa-computer bg-color-3"></i>
                  | Apoyo ejecutivo visible y sostenido: es el factor número uno de éxito o fracaso.
                li 
                  <i class="fa-solid fa-computer bg-color-3"></i>
                  | Equipo SEPG dedicado con tiempo asignado formalmente a las actividades de mejora.
                li
                  <i class="fa-solid fa-computer bg-color-3"></i>
                  | Comenzar con un proyecto piloto: los resultados tangibles generan credibilidad interna.
                li
                  <i class="fa-solid fa-computer bg-color-3"></i>
                  | Involucrar al equipo técnico en la definición de procesos, no solo imponerlos desde arriba.
                li
                  <i class="fa-solid fa-computer bg-color-3"></i>
                  | No fabricar procesos de papel: CMMI evalúa institucionalización real, no documentación superficial.
                li
                  <i class="fa-solid fa-computer bg-color-3"></i>
                  | Visión de largo plazo: la presión por 'pasar la evaluación rápido' es el mayor destructor de valor.

    p.text-center La siguiente tabla, resume un poco lo que tiene que ver con las nivelaciones basadas en métricas:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 10.
          span Beneficios medibles — ROI de la implementación
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Métrica
                th(style="width: 15%; background-color: #FFEBBE;") Nivel 2
                th(style="width: 15%; background-color: #FFEBBE;") Nivel 3
                th(style="width: 15%; background-color: #FFEBBE;") Nivel 4-5
                th(style="width: 15%; background-color: #FFEBBE;") Fuente
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Defectos en producción
                td(style="background-color: #F6F6F6;") ↓ 15–25 %
                td(style="background-color: #F6F6F6;") ↓ 35–50 %
                td(style="background-color: #F6F6F6;") ↓ 60–80 %
                td(style="background-color: #F6F6F6;") CMMI Institute 2023
              tr(data-aos="fade-right")
                td.text-center Tiempo de ciclo proyecto
                td Línea base
                td ↓ 10–20 %
                td ↓ 30–50 %
                td SEI Reports
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Costo de retrabajo
                td(style="background-color: #F6F6F6;") ↓ 10 %
                td(style="background-color: #F6F6F6;") ↓ 30–40 %
                td(style="background-color: #F6F6F6;") ↓ 60–70 %
                td(style="background-color: #F6F6F6;") Forrester Research
              tr(data-aos="fade-right")
                td.text-center Cumplimiento de plazos
                td ↑ 25–35 %
                td ↑ 50–65 %
                td ↑ 75–90 %
                td CMMI V2.0 Report
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Satisfacción del cliente
                td.text-center(style="background-color: #F6F6F6;") ↑ Moderada
                td.text-center(style="background-color: #F6F6F6;") ↑ Alta
                td.text-center(style="background-color: #F6F6F6;") ↑ Muy alta
                td.text-center(style="background-color: #F6F6F6;") CMMI Performance

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img-08.svg', alt='', style='width: 60px').m-auto
            .col-lg
              p.mb-0 CMMI en Colombia: cada vez más empresas colombianas de TI buscan certificarse en CMMI para participar en licitaciones del Estado o para exportar servicios de <em>software</em>. El tiempo promedio para alcanzar el nivel 3 en una empresa mediana (50–200 personas) es de 24 meses con un equipo SEPG dedicado y apoyo directivo sostenido.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
