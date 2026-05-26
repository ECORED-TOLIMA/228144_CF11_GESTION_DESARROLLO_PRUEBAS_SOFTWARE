<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Administración del proceso personal de construcción de <em>software</em>

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema6/img-01.png', alt='')

    p Es una disciplina técnica diseñada para que el desarrollador gestione de forma individual la calidad, el tiempo y la productividad de su propio trabajo. Se basa en el principio de que, para mejorar un proceso, primero es necesario medirlo; por ello, utiliza el registro minucioso de datos históricos sobre defectos encontrados y tiempos dedicados a cada fase del desarrollo.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Fundamentos y principios

    p El PSP se basa en la idea de que la calidad de un sistema de #[i software] está determinada por el eslabón más pequeño: el trabajo individual del programador.

    .row.mb-4
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta.tarjeta-BG03.h-100(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema6/img-02.png', alt='Texto que describa la imagen')
          .p-4
            .tarjeta.tarjeta--blanca
              p.text-center.mb-0 #[b Disciplina personal]
            p La disciplina es el núcleo del proceso. No se trata de seguir reglas impuestas externamente, sino de que el profesional adopte un compromiso propio para:
            ul.lista-ul
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Seguir un proceso definido de manera consistente.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Registrar datos de forma honesta y precisa (tiempos, interrupciones y errores).
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Analizar su propio desempeño para identificar debilidades.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 Mantener el rigor técnico incluso bajo la presión de los plazos de entrega.
      .col-lg-6
        .tarjeta.tarjeta-BG02.h-100(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema6/img-03.png', alt='Texto que describa la imagen')         
          .p-4
            .tarjeta.tarjeta--blanca
              p.text-center.mb-0 #[b Planeación basada en datos históricos]
            p Uno de los principios más disruptivos del PSP es que no se permite adivinar. Las estimaciones de tiempo y esfuerzo se realizan mediante métodos estadísticos basados en el pasado del propio desarrollador. Se aplica:
            ul.lista-ul
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 #[b Estimación de tamaño.] Se utiliza la experiencia previa para predecir cuántas líneas de código o funciones tendrá el nuevo programa.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 #[b Predicción de tiempos.] Si históricamente un docente de tecnología tarda 10 minutos por cada 100 líneas de código, ese dato se usa para planificar la siguiente guía de trabajo.
              li 
                i.fas.fa-circle(style="top: 8px;")
                p.mb-0 #[b Precisión.] Con el tiempo, el error de estimación disminuye, permitiendo compromisos de entrega reales y alcanzables.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Niveles del PSP (PSP0 a PSP3)

    p El aprendizaje del PSP es incremental. El profesional sube de nivel a medida que domina nuevas técnicas de medición y control. Por consiguiente, se presentan los distintos niveles del PSP, desde el proceso base hasta el enfoque cíclico, los cuales permiten al desarrollador incorporar progresivamente prácticas de medición, planeación y calidad a medida que avanza en su dominio del método:
    
    .BMG1.px-md-5.px-4
      .row.justify-content-center
        .col-lg-10
          LineaTiempoE.color-acento-contenido(data-aos="zoom-out")
            .row.justify-content-center(titulo="PSP0 y PSP0.1")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema6/img-04.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 El proceso base
                p #[b PSP0:] el desarrollador utiliza su método actual, pero comienza a registrar el tiempo dedicado y los defectos encontrados. Introduce el uso de formularios simples.
                p #[b PSP0.1:] se añaden estándares de codificación y se introduce la medición del tamaño del #[i software] (LOC - líneas de código).
            .row.justify-content-center(titulo="PSP1 y PSP1.1")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema6/img-05.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 El proceso de planeación
                p PSP1: introduce el método PROBE (Proxy Based Estimation) para estimar el tamaño y el tiempo basándose en datos históricos.
                p PSP1.1: se añade la planeación de tareas y el cronograma del proyecto (calendario).
            .row.justify-content-center(titulo="PSP2 y PSP2.1")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema6/img-06.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 El proceso de calidad
                p PSP2: es el nivel más crítico. Se introducen las revisiones de diseño y de código. El objetivo es encontrar errores antes de compilar y se aprende que revisar es más eficiente que probar.
                p PSP2.1: introduce el diseño jerárquico y plantillas de diseño para asegurar que el código sea robusto desde su concepción.
            .row.justify-content-center(titulo="PSP3")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema6/img-07.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 El proceso cíclico
                p PSP3: está diseñado para proyectos más grandes que no caben en una sola iteración de PSP2. Permite subdividir el proyecto en módulos pequeños y aplicar los niveles anteriores de forma cíclica. Es la base para trabajar después en equipos con TSP.

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Instrumentos de control

    p A continuación, se describen los principales instrumentos de control del PSP, los cuales proporcionan estructura, disciplina y consistencia al trabajo del desarrollador, permitiendo planificar, medir y mejorar su desempeño de manera sistemática:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
          .row.justify-content-center(titulo="<em>Scripts</em> (Guiones de proceso)")
            p Los #[i scripts] son guías paso a paso que describen exactamente qué actividades realizar en cada fase del desarrollo. Su función es garantizar que el proceso sea repetible y que no se salte ninguna etapa crítica.
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Contenido:] definen las condiciones de entrada (qué necesito para empezar), los pasos a seguir (ej. diseño, codificación, revisión) y las condiciones de salida (qué debo entregar).
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Utilidad:] ayudan al programador a mantener el enfoque y la disciplina, especialmente en fases que suelen omitirse, como la revisión de diseño o el análisis de post-mortem.
                      .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3
                        figure.text-center
                          img.mx-auto.d-block(src='@/assets/curso/tema6/img-08.svg', alt="" style="max-width: 120px;")
          .row.justify-content-center(titulo="Formas (Plantillas de registro)")
            p Las formas son los documentos o interfaces donde se recolectan los datos crudos durante el trabajo. Son el "diario" del ingeniero de #[i software].
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Tipos comunes:] resumen del proyecto (#[i project plan summary]), formas de diseño y registros de análisis.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Importancia:] proporcionan una estructura uniforme para capturar datos. Al usar siempre la misma forma, el desarrollador puede comparar proyectos realizados en enero con proyectos de junio de manera objetiva.
                      .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3
                        figure.text-center
                          img.mx-auto.d-block(src='@/assets/curso/tema6/img-09.svg', alt="" style="max-width: 120px;")
          .row.justify-content-center(titulo="Estándares personales")
            p Para que las mediciones sean válidas, el desarrollador debe establecer sus propias reglas de juego. Sin estándares, los datos son inconsistentes.
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Estándar de codificación:] define cómo se debe escribir el código (nombres de variables, sangría, comentarios). Esto facilita encontrar errores durante las revisiones.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Estándar de defectos:] una lista que clasifica los errores (ej. Tipo 10: sintaxis, Tipo 20: lógica, Tipo 30: interfaz). Esto permite saber en qué área el desarrollador suele fallar más.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Estándar de tamaño:] define cómo se medirá el producto (generalmente líneas de código o funciones) para que la estimación siempre se base en la misma unidad.
                      .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3
                        figure.text-center
                          img.mx-auto.d-block(src='@/assets/curso/tema6/img-10.svg', alt="" style="max-width: 120px;")
          .row.justify-content-center(titulo="Registro de tiempos y defectos")
            p Este instrumento permite al desarrollador capturar de manera sistemática el tiempo invertido en cada fase del proceso y los defectos detectados a lo largo del desarrollo.
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Contenido:] incluye la fase del proceso, fecha, tiempo de inicio y fin, interrupciones, tipo de defecto, fase de detección y fase de inyección del error.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Utilidad:] facilita el análisis de productividad y calidad, permite identificar en qué fases se consume más tiempo y dónde se originan la mayoría de los defectos, apoyando la toma de decisiones para optimizar el proceso personal.
                      .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3
                        figure.text-center
                          img.mx-auto.d-block(src='@/assets/curso/tema6/img-11.svg', alt="" style="max-width: 120px;")

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Método PROBE

    p Es el componente del PSP que permite a los desarrolladores realizar estimaciones precisas de tamaño y tiempo. En lugar de "adivinar", el ingeniero utiliza su propia historia y herramientas estadísticas para predecir el futuro del proyecto.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Estimación basada en objetos (#[i Proxies])

    p La dificultad de estimar #[i software] radica en que es intangible. PROBE soluciona esto usando #[i Proxies] (objetos representativos).

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        p #[b ¿Qué es un #[i proxy?]]: es una entidad física o conceptual que se puede contar y que tiene una relación fuerte con el esfuerzo final. El #[i proxy] más común son los objetos o funciones del programa.
        p #[b El proceso:] el desarrollador identifica los objetos que necesita construir (ej. una función de búsqueda, una base de datos) y los clasifica por tamaño (muy pequeño, pequeño, medio, grande, muy grande) basándose en su tabla de datos históricos.
        p #[b Cálculo de tamaño:] al sumar el tamaño estimado de todos estos "objetos", se obtiene una estimación del tamaño total del sistema antes de escribir una sola línea de código.
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img-12.png', alt='')

    .BMG2.px-md-5.px-4
      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Análisis estadístico

      p PROBE no confía en la intuición, sino en los datos. El análisis estadístico se utiliza para validar si las estimaciones pasadas del desarrollador son lo suficientemente buenas como para predecir el futuro.

      .row.justify-content-center.mb-4
        .col-lg-5.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img-13.png' alt="")
        .col-lg-7.order-lg-1.order-2.mb-lg-0.mb-4
          p.mb-4(style="color:#000") #[b Calidad de los datos:] se evalúa la correlación entre lo que el desarrollador estimó en el pasado y lo que realmente construyó.
          p #[b Intervalos de confianza:] el método calcula un rango de probabilidad (por ejemplo, con un 70 % o 90 % de confianza). Esto permite al ingeniero decir: "Este proyecto me tomará 40 horas, con un margen de error de +/- 4 horas".
          p #[b Significancia:] se utilizan pruebas estadísticas para asegurar que la relación entre el tamaño del objeto y el tiempo de desarrollo no sea una coincidencia, sino un patrón real.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Regresión lineal simple

    p Es la herramienta matemática central del método PROBE. Se utiliza para convertir el tamaño estimado (#[i proxy]) en tiempo real de desarrollo.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        p #[b La Fórmula:] se utiliza la ecuación de la recta:
        .bloque-texto-c.color-primario.tarjeta.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-6
              .tarjeta.p-3.divgeome
                span y = β
                  sub 0
                  |  + β
                  sub 1
                  |  x
          .row.justify-content-center.align-items-center
            .col-lg-12
              ul.lista-ul.mb-0 
                li  
                  i.fas.fa-circle.purple(style="top: 8px;")
                  p.mb-0 y: tiempo total estimado.
                li  
                  i.fas.fa-circle.purple(style="top: 8px;")
                  p.mb-0 x: tamaño del <em>proxy</em> (líneas de código u objetos).
                li  
                  i.fas.fa-circle.purple(style="top: 8px;")
                  p.mb-0 β0 (Pendiente): indica cuánto tiempo aumenta por cada unidad de tamaño.
                li  
                  i.fas.fa-circle.purple(style="top: 8px;")
                  p.mb-0 Β1 (Intersección): representa el tiempo fijo o "costo de arranque" de cualquier proyecto.
        p #[b Aplicación:] si los datos históricos del desarrollador muestran una línea recta consistente al graficar "Tamaño vs. Tiempo", la regresión lineal permite proyectar con gran exactitud cuánto tardará un nuevo proyecto simplemente ingresando el tamaño estimado de los objetos.
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img-14.png', alt='')

    Separador

    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.5 Estadísticas aplicadas

    p Las estadísticas aplicadas no son simples números, sino la base científica que permite a un desarrollador entender su capacidad real. Sin estos datos, un ingeniero está "adivinando"; con ellos, está "gestionando".

    .row.justify-content-center
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4(data-aos="fade-right")
        AcordionA.color-secundario(tipo="b" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
          .row.justify-content-center(titulo="Tamaño (<em>Size</em>)")
            .col-lg-12.order-lg-1.order-2
              p El tamaño es la variable independiente básica en la estadística de #[i software]. Es el dato que indica qué tan grande o complejo es el trabajo realizado e incluye los siguientes aspectos:
              .col-lg-12.order-lg-1.order-2
                .row.justify-content-center
                  .col.col-12
                    .tarjeta.tarjeta--blanca.p-4
                      .row 
                        .col-lg-12.col-12.order-lg-1.order-2
                          ul.lista-ul.mb-0 
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 #[b Medición.] Aunque existen varias unidades (como puntos de función), en PSP se utilizan comúnmente las líneas de código (LOC). Se miden las líneas nuevas, las cambiadas y las reutilizadas.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 #[b Importancia estadística.] El tamaño es el principal predictor del esfuerzo. Si se conoce el tamaño probable de un módulo, se puede usar para calcular el tiempo necesario, mediante la regresión lineal.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 #[b Normalización.] Permite comparar proyectos de distinta magnitud. No es lo mismo encontrar 5 errores en un programa de 10 líneas que en uno de 1,000.

          .row.justify-content-center(titulo="Productividad (<em>Productivity</em>)")
            .col-lg-12.order-lg-1.order-2
              p La productividad mide la eficiencia del desarrollador. En el entorno personal, ayuda a establecer expectativas realistas de entrega. Tiene presente las siguientes acciones:
              .col-lg-12.order-lg-1.order-2
                .row.justify-content-center
                  .col.col-12
                    .tarjeta.tarjeta--blanca.p-4
                      .row 
                        .col-lg-12.col-12.order-lg-1.order-2
                          ul.lista-ul.mb-0 
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              span #[b Cálculo.] Se define generalmente como la relación entre el tamaño y el tiempo neto dedicado:
                                .row.justify-content-center.mt-2.mb-1
                                  .col-12.d-flex.justify-content-center
                                    .tarjeta.p-3.divformu(style="display:inline-block; margin-top: 6px; margin-bottom: 4px;")
                                      <div class="eq-c">
                                        <span>Productividad =</span>
                                        <div class="fraction">
                                          <span class="fup">Unidades de tamaño (LOC)</span>
                                          <span class="bar">/</span>
                                          <span class="fdn">Horas de Esfuerzo</span>
                                        </div>
                                      </div>
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 #[b Uso práctico.] Conocer su productividad media (ej. 25 LOC por hora), permite planificar jornadas de trabajo. Si una guía de tecnología requiere programar 200 líneas, el usuario sabe estadísticamente que necesitará unas 8 horas de trabajo neto.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 #[b Variabilidad.] El PSP enseña que la productividad no es constante; varía según el lenguaje de programación, la dificultad del algoritmo y la experiencia previa.

          .row.justify-content-center(titulo="Densidad de defectos (<em>Defect density</em>)")
            .col-lg-12.order-lg-1.order-2
              p Es la métrica de oro para medir la calidad del #[i software]. Indica cuántos errores se introducen por unidad de tamaño y se aplica de la siguiente manera:
              .col-lg-12.order-lg-1.order-2
                .row.justify-content-center
                  .col.col-12
                    .tarjeta.tarjeta--blanca.p-4
                      .row 
                        .col-lg-12.col-12.order-lg-1.order-2
                          ul.lista-ul.mb-0 
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              span #[b Cálculo.] Se obtiene dividiendo el total de defectos encontrados entre el tamaño del #[i software], usualmente expresado en defectos por cada mil líneas de código (KLOC):
                                .row.justify-content-center.mt-2.mb-1
                                  .col-12.d-flex.justify-content-center
                                    .tarjeta.p-3.divformu(style="display:inline-block; margin-top: 6px; margin-bottom: 4px;")
                                      <div class="eq-c">
                                        <span>Densidad de defectos =</span>
                                        <div class="fraction">
                                          <span class="fup">Total de Defectos</span>
                                          <span class="bar">/</span>
                                          <span class="fdn">KLOC</span>
                                        </div>
                                      </div>
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 #[b Interpretación.] Una densidad alta sugiere que el proceso de codificación es descuidado o que no se están realizando suficientes revisiones previas.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Una densidad baja (después de las pruebas) indica un producto robusto y confiable.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 #[i #[b Benchmarking:]] permite al desarrollador establecer metas de mejora. Un objetivo común en PSP es reducir la densidad de defectos en la fase de "Pruebas" aumentando la detección en la fase de "Revisión de Código".

      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img-15.png' alt="")

    Separador

    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.6 Herramientas informáticas de apoyo

    p A continuación, se presenta una tabla que resume las principales herramientas informáticas que apoyan la aplicación del PSP, facilitando la medición, el control y el análisis del desempeño del desarrollador a lo largo del proceso:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 14.
          span Herramientas informáticas de apoyo para la implementación del PSP
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Categoría
                th(style="width: 15%; background-color: #FFEBBE;") Herramientas recomendadas
                th(style="width: 15%; background-color: #FFEBBE;") Función principal en el proceso
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") #[i Software] especializado en PSP
                td(style="background-color: #F6F6F6;") Process Dashboard, PSP Student Workbench
                td(style="background-color: #F6F6F6;") Permiten el registro automático de tiempos, gestión de scripts de proceso y generación de planes de proyecto basados en PROBE.
              tr(data-aos="fade-right")
                td.text-center Control de tiempos (#[i Time logs])
                td Toggl Track, Clockify, Pomotodo
                td Ideales para medir el tiempo neto de desarrollo, permitiendo pausar durante interrupciones para obtener métricas reales de esfuerzo.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Análisis estadístico y PROBE
                td(style="background-color: #F6F6F6;") Microsoft Excel, Google Sheets
                td(style="background-color: #F6F6F6;") Imprescindibles para realizar la regresión lineal, calcular intervalos de confianza y mantener la base de datos históricos personales.
              tr(data-aos="fade-right")
                td.text-center Gestión de defectos (#[i Defect logs])
                td Jira, GitHub Issues, Trello
                td Facilitan el registro de cada error, su categoría (sintaxis, lógica, etc.) y el tiempo que tomó su corrección.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Conteo de tamaño (LOC)
                td.text-center(style="background-color: #F6F6F6;") CLOC (Count Lines of Code), LineCounter
                td.text-center(style="background-color: #F6F6F6;") Automatizan el conteo de líneas de código (nuevas, borradas y modificadas) para alimentar la métrica de tamaño.
              tr(data-aos="fade-right")
                td.text-center Estándares de codificación
                td SonarQube, ESLint, Prettier
                td Ayudan a mantener la disciplina personal, mediante la revisión automática de reglas de estilo y detección temprana de errores comunes.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        texto:
          '<b>Momento de ejecución.</b> <br><br>Se realiza principalmente después de la fase de construcción (codificación). Existe una separación clara entre los desarrolladores y el equipo de QA (Quality Assurance).',
        imagen: require('@/assets/curso/tema4/img-10.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Enfoque</b> <br><br>Se basa en el cumplimiento estricto de los requisitos documentados al inicio. Si el software hace lo que dice el documento, tiene "calidad", aunque el cliente ya no necesite esa funcionalidad.',
        imagen: require('@/assets/curso/tema4/img-11.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Documentación</b> <br><br>Se generan planes de prueba masivos, reportes de incidentes y certificados de calidad formales.',
        imagen: require('@/assets/curso/tema4/img-12.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Riesgo.</b> <br><br>El mayor peligro es encontrar un error arquitectónico al final del proceso, lo que implica retroceder meses de trabajo y elevar los costos exponencialmente.',
        imagen: require('@/assets/curso/tema4/img-13.png'),
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
