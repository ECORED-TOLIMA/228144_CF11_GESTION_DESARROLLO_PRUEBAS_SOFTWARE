<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Documentación en procesos de calidad

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Actúa como un registro objetivo que transforma las actividades técnicas en evidencias auditables y repetibles dentro de un marco de ingeniería. Su función es estandarizar los criterios de aceptación, mediante planes y reportes que aseguran que cada fase del desarrollo, desde la definición de requisitos hasta las pruebas finales, cumpla con las normas establecidas.

    Separador

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.1 Estándares de documentación

    p.mb-4 Son el lenguaje común que permite que la calidad sea medible y auditable. En ingeniería de #[i software], estos documentos no son simples trámites, sino herramientas de gestión que aseguran que el equipo sepa qué debe cumplir y cómo se verificará dicho cumplimiento.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
          .row.justify-content-center(titulo="Plan de aseguramiento de calidad (SQAP)")
            .col-md-12.mb-4.mb-md-0
              p El #[i software] Quality Assurance Plan es el documento maestro que define el "qué" y el "quién". Su objetivo es establecer el marco de trabajo para prevenir defectos antes de que ocurran. Sus acciones son las siguientes: 
            .col-md-12
              figure
                img(src='@/assets/curso/tema7/img-02.png', alt='')
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4(style="border-radius:0px")
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Alcance.] Define qué partes del proyecto serán supervisadas (código, manuales de usuario, requisitos).
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Roles. ] Determina quién es el responsable de auditar los procesos y quién de aprobar las entregas.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Normativas.] Cita los estándares internacionales que se seguirán, como ISO/IEC 25010 o la IEEE 1012 que vimos anteriormente.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Revisiones y auditorías.] Establece un calendario de inspecciones para asegurar que el equipo no se desvíe del proceso definido.

          .row.justify-content-center(titulo="Plan de pruebas (<em>Software test plan</em>)")
            .col-md-12.mb-4.mb-md-0
              p El plan de pruebas es el documento que define cómo, cuándo y con qué criterios se verificará que el #[i software] cumple los requisitos establecidos. Sus principales componentes son los siguientes: 
            .col-md-12
              figure
                img(src='@/assets/curso/tema7/img-03.png', alt='')
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4(style="border-radius:0px")
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Alcance de las pruebas.] Especifica qué funcionalidades o requisitos serán evaluados y cuáles quedan fuera del ciclo de pruebas.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Estrategia de prueba.] Define los tipos de pruebas a ejecutar y el enfoque general para su realización.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Criterios de aceptación.] Establece las condiciones que deben cumplirse para considerar una prueba como aprobada y dar por finalizado el proceso.
          
          .row.justify-content-center(titulo="Procedimientos (<em>Standard operating procedures</em>)")
            .col-md-12.mb-4.mb-md-0
              p Los procedimientos son el nivel más operativo. Son las "instrucciones de uso" detalladas sobre cómo ejecutar las tareas de calidad.
              p #[b Naturaleza:] son guías paso a paso (similares a los #[i scripts] de PSP) que aseguran que cualquier miembro del equipo pueda realizar una tarea de la misma manera.
              p Los ejemplos comunes son:
            .col-md-12
              figure
                img(src='@/assets/curso/tema7/img-04.png', alt='')
            .col-lg-12.order-lg-1.order-2
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4(style="border-radius:0px")
                    .row 
                      .col-lg-10.col-12.order-lg-1.order-2
                        ul.lista-ul.mb-0 
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Procedimiento de revisión de código.] Pasos para subir una solicitud de cambio y cómo debe revisarla un compañero.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Procedimiento de reporte de incidencias.] Cómo llenar un #[i ticket] de error para que sea claro y útil para el programador.
                          li  
                            i.fas.fa-circle(style="top: 8px;")
                            p.mb-0 #[b Procedimiento de gestión de versiones.] Cómo usar herramientas como Git para que el código no se pierda.

    Separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.2 Formatos y plantillas

    p.mb-4 Son las herramientas que materializan la calidad. Su objetivo es asegurar que la información crítica no dependa de la memoria de los desarrolladores, sino que quede registrada de forma estructurada para su análisis posterior.

    .row.justify-content-center
      .col-md-12(data-aos="fade-right")
        TabsC.color-acento-botones(data-aos="fade-right")
          .py-3.py-md-4(titulo="Reportes de defectos (<em>Bug reports</em>)")
            .row.justify-content-center.p-4
              .col-lg-4.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema7/img-05.svg', alt='Imagen decorativa')
              .col-lg-8
                p Un reporte de defectos es el documento que comunica un fallo a los desarrolladores. Para que sea efectivo, debe ser claro, reproducible y objetivo. Sus componentes esenciales son:
                .row.justify-content-center
                  .col.col-12
                    .tarjeta.tarjeta--blanca.p-4(style="border-radius:0px")
                      .row 
                        .col-lg-12.col-12.order-lg-1.order-2
                          ul.lista-ul.mb-0 
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 ID único. Para seguimiento.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Título descriptivo. Resumen del error.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Pasos para reproducir. Instrucciones exactas para que el programador vea el fallo.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Resultado esperado vs. Resultado real. Lo que debía pasar frente a lo que pasó.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Severidad y prioridad. Qué tan grave es y qué tan rápido debe arreglarse.
                    .tarjeta.p-4(style="background-color:#19538D; border-radius:0px; margin-top:-15px;")
                      p.mb-0(style="color:#ffff !important") 
                        b Importante:
                        |  un buen formato de reporte reduce el "rebote" de información entre el equipo de pruebas y el de desarrollo, acelerando las correcciones.
          
          .py-3.py-md-4(titulo="Registro de métricas (<em>Metrics log</em>)")
            .row.justify-content-center.p-4
              .col-lg-4.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema7/img-06.svg', alt='Imagen decorativa')
              .col-lg-8
                p El registro de métricas es el almacén de datos cuantitativos del proyecto. Es el insumo principal para el análisis estadístico que se indicó en el PSP. Los datos a recolectar son:
                .row.justify-content-center
                  .col.col-12
                    .tarjeta.tarjeta--blanca.p-4(style="border-radius:0px")
                      .row 
                        .col-lg-12.col-12.order-lg-1.order-2
                          ul.lista-ul.mb-0 
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Tiempo neto de desarrollo en las horas invertidas por fase.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Tamaño del #[i software] en las líneas de código o puntos de función.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Defectos encontrados en la clasificación por tipo y fase donde se detectaron.
                    .tarjeta.p-4(style="background-color:#19538D; border-radius:0px; margin-top:-15px;")
                      p.mb-0(style="color:#ffff !important") 
                        b Propósito:
                        |  estas plantillas permiten calcular la productividad y la densidad de defectos. Sin un formato estandarizado, es imposible comparar el desempeño entre diferentes proyectos o periodos académicos.

          .py-3.py-md-4(titulo="Trazabilidad (<em>Traceability</em>)")
            .row.justify-content-center.p-4
              .col-lg-4.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema7/img-07.svg', alt='Imagen decorativa')
              .col-lg-8
                p La trazabilidad es la capacidad de seguir el rastro de un elemento de #[i software] a lo largo de todo su ciclo de vida. Se gestiona usualmente mediante una Matriz de Trazabilidad. En la conexión de elementos se debe asegurar que cada requisito del cliente tenga:
                .row.justify-content-center
                  .col.col-12
                    .tarjeta.tarjeta--blanca.p-4(style="border-radius:0px")
                      .row 
                        .col-lg-12.col-12.order-lg-1.order-2
                          ul.lista-ul.mb-0 
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Un componente de diseño que lo soporte.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Un bloque de código que lo implemente.
                            li  
                              i.fas.fa-circle(style="top: 8px;")
                              p.mb-0 Un caso de prueba que lo verifique.
                    .tarjeta.p-4(style="background-color:#19538D; border-radius:0px; margin-top:-15px;")
                      p.mb-0(style="color:#ffff !important") 
                        b Utilidad:
                        |  si un requisito cambia, la trazabilidad permite saber inmediatamente qué partes del código y qué pruebas deben actualizarse. También garantiza que no se haya construido nada "extra" que el cliente no pidió.

    Separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.3 Gestión documental

    p Es el conjunto de prácticas diseñadas para organizar, almacenar y rastrear todos los artefactos de un proyecto (código, manuales, planes de calidad). Su objetivo es garantizar que la información sea íntegra, esté actualizada y sea accesible para todo el equipo.
    p.mb-4 A continuación, se abordan los principales componentes de la gestión documental en proyectos de #[i software], los cuales permiten asegurar el control, la trazabilidad y la confiabilidad de la información a lo largo del ciclo de vida del desarrollo:

    .tarjeta--BG01.bg-fix-bleed.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.p-lg-5.slider-fix-bleed
        SlyderA(tipo="b" data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Control de versiones
              p(style="color:#000 !important") Es el mecanismo que permite registrar los cambios realizados sobre uno o varios archivos a lo largo del tiempo. A través de este sistema, múltiples desarrolladores pueden trabajar de forma simultánea sin sobrescribir el trabajo de otros, manteniendo un flujo de trabajo controlado. Cada modificación queda documentada mediante #[i commits], los cuales registran quién realizó el cambio, cuándo se efectuó y por qué, lo que facilita la trazabilidad. Asimismo, la ramificación posibilita la creación de líneas de trabajo independientes, como la corrección de errores urgentes o el desarrollo de nuevas funcionalidades, que posteriormente pueden integrarse de manera controlada al proyecto principal.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema7/img-08.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Repositorios
              p(style="color:#000 !important") Son los espacios de almacenamiento digital donde se conservan los archivos del proyecto, junto con su historial completo de versiones. Estos pueden ser locales, residiendo en el equipo del desarrollador, o remotos, alojados en servidores compartidos o en la nube para facilitar el trabajo colaborativo. Su función principal es actuar como la única fuente de verdad del proyecto, ya que todo artefacto relevante debe estar versionado y almacenado en el repositorio para ser considerado válido dentro del proceso de calidad.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4   
              figure
                img(src='@/assets/curso/tema7/img-09.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Auditoría documental
              p(style="color:#000 !important") Consiste en la revisión sistemática de la documentación del proyecto para verificar que cumpla con los estándares establecidos y refleje fielmente el estado real del #[i software]. Este proceso permite asegurar que no existan brechas entre lo planificado y lo ejecutado, comprobando la existencia de planes de prueba, registros de métricas y manuales actualizados. Además, es un elemento clave para el cumplimiento normativo en evaluaciones o certificaciones, ya que confirma que los cambios realizados cuentan con respaldo documental, siguen el flujo de aprobación definido y no han sido alterados de forma no autorizada.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema7/img-10.png', style="width: 500px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({}),
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
