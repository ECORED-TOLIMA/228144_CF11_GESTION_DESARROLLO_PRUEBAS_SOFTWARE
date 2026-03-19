<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Disciplinas de calidad de <em>software</em>

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Son el conjunto de áreas de conocimiento, prácticas y procesos estandarizados que aseguran que un producto de #[i software] no solo funcione, sino que sea confiable, eficiente y fácil de mantener. 

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Personal Software Process (PSP) 

    p Es un modelo de desarrollo diseñado para ayudar a los ingenieros de #[i software] a organizar su trabajo individual, mejorar su productividad y garantizar la calidad de los productos que entregan. Fue creado por Watts Humphrey con la idea de llevar la disciplina del modelo organizacional CMMI al nivel del programador individual.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Principios del PSP

    p El PSP se basa en la premisa de que la calidad de un sistema de #[i software] depende de la calidad del trabajo de cada uno de los ingenieros que lo integran. Sus principios fundamentales son:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/icono-01.svg", alt="alt").img90.m-auto
          h4 Responsabilidad personal.
          p.mb-0 Cada desarrollador es responsable de la calidad de su código.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/icono-02.svg", alt="alt").img90.m-auto
          h4 Mejora continua. 
          p.mb-0 Para mejorar, un profesional debe planificar su trabajo, medir su desempeño y actuar según los resultados.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/icono-03.svg", alt="alt").img90.m-auto
          h4 Análisis de datos.
          p.mb-0 El uso de datos históricos personales es la única forma confiable de estimar tiempos y predecir errores en futuros proyectos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/icono-04.svg", alt="alt").img90.m-auto
          h4 Enfoque en la calidad. 
          p.mb-0 Es mucho más eficiente encontrar y corregir errores en las etapas iniciales (diseño y codificación) que durante las pruebas finales.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Niveles de PSP

    p El proceso se introduce de forma gradual a través de diferentes niveles, permitiendo que el desarrollador adopte la disciplina paso a paso, la cual se explica a continuación:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 13.
          span Niveles PSP
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Nivel
                th(style="width: 15%; background-color: #FFEBBE;") Nombre
                th(style="width: 15%; background-color: #FFEBBE;") Enfoque principal
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") PSP 0
                td(style="background-color: #F6F6F6;") Proceso actual
                td(style="background-color: #F6F6F6;") Establece una línea base. Se registran los tiempos y defectos del proceso que el programador ya usa.
              tr(data-aos="fade-right")
                td.text-center PSP 0.1
                td Estándares
                td Introduce estándares de codificación, medición de tamaño del #[i software] y un diario de procesos.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") PSP 1
                td(style="background-color: #F6F6F6;") Planificación
                td(style="background-color: #F6F6F6;") Se enfoca en la estimación de tamaño y tiempo basada en datos históricos.
              tr(data-aos="fade-right")
                td.text-center PSP 1.1
                td Calendario
                td Incluye la planificación de cronogramas y el seguimiento del progreso del proyecto.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") PSP 2
                td.text-center(style="background-color: #F6F6F6;") Calidad y diseño
                td.text-center(style="background-color: #F6F6F6;") Introduce revisiones de diseño y código para detectar errores antes de compilar.
              tr(data-aos="fade-right")
                td.text-center PSP 2.1
                td Plantillas
                td Uso de plantillas de diseño y análisis de verificación para asegurar robustez.
    
    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Medición personal

    p La medición es el núcleo del PSP, ya que sin datos no existe mejora objetiva, por ello los desarrolladores utilizan formularios y hojas de registro para capturar estas tres métricas esenciales:

    .tarjeta--container.row
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")(style="background-color: #DFEFFF !important")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/img-02.svg', alt="Imagen decorativa")
        h4.text-center Tiempo
        p.mb-0 Registro minucioso de los minutos dedicados a cada fase (planificación, diseño, codificación, revisión, compilación, pruebas y post-mortem). Se descuentan interrupciones para obtener el "tiempo neto".
      .col-md.tarjeta.color-primario.p-5(data-aos="flip-up")(style="background-color: #FFEBBE !important")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/img-03.svg', alt="Imagen decorativa")
        h4.text-center Defectos
        p.mb-0 Se registra cada error encontrado, la fase en la que se introdujo, la fase en la que se detectó y el tiempo que tomó corregirlo. Esto ayuda a calcular el rendimiento (porcentaje de defectos eliminados antes de las pruebas).
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-left")(style="background-color: #F1E2FF !important")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/img-04.svg', alt="Imagen decorativa")
        h4.text-center Tamaño
        p.mb-0 Generalmente medido en líneas de código (LOC) o puntos de función. Permite relacionar cuánto tiempo toma desarrollar una cantidad específica de #[i software].

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Team Software Process (TSP)  

    p.mb-4 Es el siguiente paso lógico tras el PSP. Mientras que el PSP se enfoca en la disciplina individual, el TSP proporciona el marco de trabajo para que equipos de ingenieros produzcan #[i software] de alta calidad, a tiempo y dentro del presupuesto.

    TabsB.color-acento-contenido.mb-4(data-aos="zoom-out")
      .py-4.py-lg-5.p-5(titulo="Estructura del equipo" :icono="require('@/assets/curso/tema5/img-05.svg')")
        .row.justify-content-center
          .col-lg-12.order-lg-1.order-2
            p El TSP organiza a los desarrolladores en equipos auto-dirigidos. No se trata de un grupo con un jefe que da órdenes, sino de un equipo que:
            .row.justify-content-center
              .col.col-12
                .tarjeta.tarjeta--blanca.p-4
                  .row 
                    .col-lg-12.col-12.order-lg-1.order-2
                      ul.lista-ul.mb-0 
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 #[b Establece sus propios objetivos.] Alineados con las metas del negocio.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 #[b Planifica su propio trabajo.] Los miembros deciden cuánto trabajo pueden realizar en un ciclo.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 #[b Monitorea su propio progreso.] El equipo es responsable de su éxito o fracaso.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 #[b Mantiene la calidad.] El equipo define sus propios estándares de calidad basándose en datos.

      .py-4.py-lg-5.p-5(titulo="Roles en el TSP" :icono="require('@/assets/curso/tema5/img-06.svg')")
        .row.justify-content-center
          .col-lg-12.order-lg-1.order-2
            p Para que un equipo auto-dirigido funcione sin un gerente tradicional, el TSP asigna roles específicos a sus miembros. Un solo integrante puede tener más de un rol si el equipo es pequeño. Dentro de los roles se incluyen:
            .row.justify-content-center
              .col.col-12
                .tarjeta.tarjeta--blanca.p-4
                  .row 
                    .col-lg-12.col-12.order-lg-1.order-2
                      ul.lista-ul.mb-0 
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Líder del equipo (#[i Team leader]). Dirige al equipo, asegura que todos participen y reporta el progreso a la gerencia.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Gestor de desarrollo (#[i Development manager]). Lidera la creación del diseño y la escritura del código.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Gestor de planificación (#[i Planning manager]). Consolida los planes individuales y rastrea el avance del cronograma del equipo.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Gestor de calidad (#[i Quality manager]). Administra el plan de calidad y asegura que se realicen las revisiones de código y diseño.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Gestor de soporte/herramientas (#[i Support manager]). Gestiona la configuración del software y las herramientas necesarias para el desarrollo.
      .py-4.py-lg-5.p-5(titulo="Métricas de equipo" :icono="require('@/assets/curso/tema5/img-07.svg')")
        .row.justify-content-center
          .col-lg-12.order-lg-1.order-2
            p El éxito del TSP se basa en la medición. Al combinar los datos de los PSP individuales, el equipo obtiene una visión clara de su desempeño colectivo mediante:
            .row.justify-content-center
              .col.col-12
                .tarjeta.tarjeta--blanca.p-4
                  .row 
                    .col-lg-12.col-12.order-lg-1.order-2
                      ul.lista-ul.mb-0 
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Esfuerzo del equipo. Suma de las horas netas de trabajo de todos los miembros contra lo planificado.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Densidad de defectos. Número de errores encontrados por cada mil líneas de código (KLOC).
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Calidad de la revisión. Porcentaje de defectos eliminados en las fases de revisión antes de llegar a las pruebas del sistema.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Valor ganado (#[i Earned value]). Una métrica que indica cuánto del proyecto se ha completado realmente en términos de valor, no solo de tiempo transcurrido. 
      .py-4.py-lg-5.p-5(titulo="Integración con CMMI" :icono="require('@/assets/curso/tema5/img-08.svg')")
        .row.justify-content-center
          .col-lg-12.order-lg-1.order-2
            p El TSP actúa como el "puente operacional" para alcanzar los niveles de madurez del CMMI (Capability Maturity Model Integration). Esta integración incluye:
            .row.justify-content-center
              .col.col-12
                .tarjeta.tarjeta--blanca.p-4
                  .row 
                    .col-lg-12.col-12.order-lg-1.order-2
                      ul.lista-ul.mb-0 
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Implementación práctica. Mientras CMMI define qué debe hacer una organización (los objetivos), el TSP define cómo hacerlo a nivel de proyecto.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Niveles de madurez. Una organización que utiliza TSP de manera consistente puede alcanzar rápidamente el nivel 3 (Definido) y el nivel 5 (Optimizado) de CMMI, ya que el TSP genera automáticamente los datos y evidencias necesarios para las auditorías.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 Institucionalización. TSP asegura que los procesos de calidad de CMMI no se queden en documentos, sino que se vivan diariamente en el desarrollo del #[i software].

</template>

<script>
export default {
  name: 'Tema5',
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
