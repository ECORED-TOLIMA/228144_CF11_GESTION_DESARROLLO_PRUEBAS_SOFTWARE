<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Metodologías de desarrollo de <em>software</em>

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema4/img-01.png', alt='')

    p Las metodologías de desarrollo de #[i software] son los marcos de trabajo que guían a los equipos desde la concepción de una idea hasta la entrega del producto final. 

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Metodologías tradicionales

    p.mb-4 Las metodologías tradicionales (o de "pesado") se caracterizan por ser disciplinadas, lineales y por requerir una documentación exhaustiva en cada etapa. Dentro de ellas, se encuentran los siguientes modelos:

    .row.justify-content-center(data-aos="fade-left") 
      .col-lg-12
        AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
          .row.justify-content-center(titulo="A. Modelo en cascada <em>(Waterfall)</em>")
            p Es el enfoque más antiguo y el pilar de la ingeniería de #[i software] tradicional. Se basa en una secuencia lógica de fases donde no se puede avanzar a la siguiente sin haber terminado la anterior.
            p #[b Funcionamiento:] el proyecto fluye hacia abajo como una cascada, pasando por: 
            .row.justify-content-center
              .col-lg-8.col-12
                .bloque-texto-c.color-secundario.tarjeta.p-3.mb-4
                  p.mb-0.text-center #[b Requisitos  Diseño  Implementación  Verificación  Mantenimiento.] 
            p.text-center Dentro de sus aspectos positivos y negativos se encuentran:
            .row.justify-content-center
              .col-lg-10.col-12
                .tarjeta.tarjeta--BGC02.p-4.mb-4(style="background-color:#FFFF; border-radius:none !important")
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure.d-flex.justify-content-center.justify-content-lg-start
                        img(src='@/assets/curso/tema4/img-02.svg', alt='' style="max-width:120px; width:100%; height:auto;")
                    .col-12.col-lg
                      h4.mt-2 Ventajas
                      p.mt-2.mb-0 Es fácil de entender y gestionar debido a su rigidez. Funciona bien cuando los requisitos están perfectamente definidos desde el inicio.
            .row.justify-content-center
              .col-lg-10.col-12
                .tarjeta.tarjeta--BGC02.p-4(style="background-color:#FFFF; border-radius:none !important")
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure.d-flex.justify-content-center.justify-content-lg-start
                        img(src='@/assets/curso/tema4/img-03.svg', alt='' style="max-width:120px; width:100%; height:auto;")
                    .col-12.col-lg
                      h4.mt-2 Desventaja principal
                      p.mt-2.mb-0 Es muy difícil y costoso retroceder. El cliente solo ve el resultado final al terminar todo el proceso, lo que genera riesgos si hubo malentendidos iniciales.

          .row.justify-content-center(titulo="B. Modelo en V (<em>V-Model</em>)")
            p Se considera una extensión del modelo en cascada, pero con un enfoque crítico en el aseguramiento de la calidad. Su nombre proviene de la forma en que se visualiza: el lado izquierdo representa la descomposición de requisitos y el derecho la integración y pruebas.
            .row.justify-content-center
              .col-lg-12
                .bloque-texto-c.color-secundario.tarjeta.p-4.mb-4
                  p.mb-0 #[b Relación directa:] lo que hace especial a este modelo es que cada fase de desarrollo tiene una fase de prueba correspondiente. Por ejemplo, cuando se definen los requisitos, simultáneamente se planean las pruebas de aceptación.
            .col-lg-10.order-lg-1.order-2
              p.text-center Sus componentes son:
              .tarjeta--container.row.mb-4
                .col-md.tarjeta.color-primario.p-4(style="background-color:#fff !important")
                  .row.justify-content-center.mb-4
                    .col-4
                      figure
                        img(src='@/assets/curso/tema4/img-04.svg', alt="")
                  h4.text-center Rama descendente
                  p Requisitos del sistema, Diseño arquitectónico, Diseño de detalle.
                  p.mb-0 #[b Vértice:] codificación.
                .col-md.tarjeta.color-primario.p-4(style="background-color:#F1E2FF !important")
                  .row.justify-content-center.mb-4
                    .col-4
                      figure
                        img(src='@/assets/curso/tema4/img-05.svg', alt="")
                  h4.text-center Rama ascendente
                  p Pruebas de unidad (como la IEEE 1008), pruebas de integración, pruebas de sistema.
                  p.mb-0 #[b Ideal para:] proyectos donde los fallos no son una opción (sistemas médicos o aeroespaciales), ya que la verificación es constante.
          
          .row.justify-content-center(titulo="C. Modelo en espiral (<em>Spiral</em>)")
            p Propuesto por Barry Boehm, este modelo rompe la linealidad de los anteriores introduciendo la gestión de riesgos como el eje central del desarrollo. Es un modelo evolutivo que combina la naturaleza iterativa con los aspectos controlados de la cascada.
            p #[b Ciclos Iterativos:] el proyecto se desarrolla en "espirales". Cada vuelta de la espiral pasa por cuatro cuadrantes:
            .row.justify-content-center
              .col-lg-10.col-12
                .tarjeta.tarjeta--blanca.p-4
                  .row
                    .col-12.col-lg-3.mb-3.mb-lg-0
                      figure.d-flex.justify-content-center.justify-content-lg-start
                        img.mx-auto.d-block(src='@/assets/curso/tema4/img-06.svg', alt="" style="max-width:140px; width:100%; height:auto;")
                    .col-12.col-lg-9
                      ul.lista-ul.mb-0 
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 #[b Determinación de objetivos.] Identificar qué se quiere lograr en esa iteración.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 #[b Análisis de riesgos.] Evaluar qué puede salir mal y crear prototipos para mitigar fallas (esta es su mayor fortaleza).
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 #[b Desarrollo y prueba.] Se construye la versión del #[i software] para ese ciclo.
                        li  
                          i.fas.fa-circle(style="top: 8px;")
                          p.mb-0 #[b Planificación.] Revisión del cliente y preparación para el siguiente ciclo.
            p #[b Uso:] es ideal para proyectos grandes, complejos y costosos donde el riesgo de fracaso debe ser monitoreado de cerca.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Metodologías ágiles

    p.mb-4 Estas metodologías ágiles surgen como una respuesta a la necesidad de flexibilidad, rapidez y entrega continua de valor en entornos donde los requisitos cambian constantemente. En dicha metodología se encuentra:

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 A. Manifiesto ágil (#[i Agile anifesto])

    p.mb-4 Publicado en 2001, es el cimiento de todas las metodologías ágiles. Se basa en cuatro valores fundamentales que priorizan a las personas y los resultados sobre los procesos rígidos:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/icono-01.svg", alt="alt").img90.m-auto
          p.mb-0 Individuos e interacciones sobre procesos y herramientas.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/icono-02.svg", alt="alt").img90.m-auto
          p.mb-0 #[i Software] funcionando sobre documentación extensiva.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/icono-03.svg", alt="alt").img90.m-auto
          p.mb-0 Colaboración con el cliente sobre negociación contractual.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/icono-04.svg", alt="alt").img90.m-auto
          p.mb-0 Respuesta ante el cambio sobre seguir un plan.

    p.text-center La siguiente imagen explica este manifiesto:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Manifiesto ágil 

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema4/figura-1-1v.svg', alt='Figura 1 que presenta los principios del manifiesto ágil para el desarrollo de software, destacando la priorización de los individuos y sus interacciones, el software funcionando, la colaboración con el cliente y la capacidad de responder al cambio, por encima de los procesos y herramientas, la documentación extensiva, la negociación contractual y los planes rígidos.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema4/figura-1-2v.svg', alt='Figura 1 que presenta los principios del manifiesto ágil para el desarrollo de software, destacando la priorización de los individuos y sus interacciones, el software funcionando, la colaboración con el cliente y la capacidad de responder al cambio, por encima de los procesos y herramientas, la documentación extensiva, la negociación contractual y los planes rígidos.', style="width: 1043px").m-auto

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 B. Scrum

    p.mb-4 Es el marco de trabajo ágil más popular. Se basa en el desarrollo iterativo e incremental, mediante ciclos de tiempo fijos llamados #[i sprints] (generalmente de 2 a 4 semanas) e incluye:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        ul.lista-ul.mb-0
          li
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Roles clave (#[i Product Owner])]: representa al cliente y prioriza el trabajo.
              .mt-2(style="background-color:#9ECFFF; border-radius:10px; padding:7px 15px 2px;")
                ul.mb-0(style="padding-left:18px;")
                  li  
                    i.fas.fa-circle.white(style="top: 8px;")
                    p.mb-0 Scrum master: facilita el proceso y elimina obstáculos.
                  li  
                    i.fas.fa-circle.white(style="top: 8px;")
                    p.mb-0 Equipo de desarrollo: profesionales que construyen el software.
          li 
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Artefactos:] el #[i product backlog] (lista de tareas pendientes) y el sprint backlog (tareas para el ciclo actual).
          li 
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Rituales:] reuniones diarias (#[i Daily Stand-up]), revisión del #[i sprint] y retrospectiva.
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img-07.svg', alt='')

    .BMG1.px-md-5.px-4
      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 C. Kanban

      p Es un método visual para gestionar el trabajo a medida que avanza por un proceso. A diferencia de Scrum, no tiene roles fijos ni ciclos de tiempo obligatorios; se enfoca en el flujo continuo, aplicando:

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color: #19538D !important")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img-08.png')})`}" data-aos="fade-left"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-right")
          ul.lista-ul.mb-0 
            li  
              i.fas.fa-circle(style="top: 8px;")
              p.mb-0 #[b Tablero Kanban:] se divide en columnas (ej. Por hacer, En curso, Hecho).
            li  
              i.fas.fa-circle(style="top: 8px;")
              p.mb-0 #[b WIP (Work In Progress):] limita la cantidad de tareas que pueden estar en una columna al mismo tiempo para evitar cuellos de botella.
            li  
              i.fas.fa-circle(style="top: 8px;")
              p.mb-0 #[b Objetivo:] visualizar el trabajo, reducir el tiempo de entrega y mejorar la eficiencia del equipo de manera constante.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 D. DevOps

    p Más que una metodología, es una filosofía y cultura que busca unificar el desarrollo de #[i software] (Dev) con las operaciones de TI (Ops). Su meta es acortar el ciclo de vida del desarrollo y proporcionar una entrega continua de alta calidad. Igualmente incluye:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-9.order-2
        ul.lista-ul.mb-0
          li
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Ciclo infinito:] representa la integración entre planear, codificar, construir, probar, liberar, desplegar, operar y monitorear.
          li 
            <i class="fa-solid fa-computer bg-color-1"></i>
            span #[b Automatización:] es fundamental para DevOps. Incluye conceptos como:
              .mt-2(style="background-color:#9ECFFF; border-radius:10px; padding:7px 15px 2px;")
                ul.mb-0(style="padding-left:18px;")
                  li  
                    i.fas.fa-circle.white(style="top: 8px;")
                    p.mb-0 CI (integración continua): subir código y probarlo automáticamente varias veces al día.
                  li  
                    i.fas.fa-circle.white(style="top: 8px;")
                    p.mb-0 CD (entrega continua): desplegar automáticamente las mejoras para que el usuario las reciba rápido.
      .col-lg-3.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img-18.svg', alt='')

    p A continuación, se presenta una tabla comparativa que permite contrastar las principales diferencias entre las metodologías tradicionales y las metodologías ágiles:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 11.
          span Características de las metodologías tradicionales y las metodologías ágiles
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 14.2%; background-color: #FFEBBE;") Característica
                th(style="width: 14.2%; background-color: #FFEBBE;") Metodologías tradicionales (Cascada, V, Espiral)
                th(style="width: 14.2%; background-color: #FFEBBE;") Metodologías ágiles (Scrum, Kanban, DevOps)
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Enfoque principal
                td(style="background-color: #F6F6F6;") Procesos y documentación exhaustiva.
                td(style="background-color: #F6F6F6;") Individuos e interacciones.
              tr(data-aos="fade-right")
                td.text-center Requisitos
                td Se definen totalmente al inicio (estáticos).
                td Cambiantes y evolucionan con el proyecto.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Entrega de valor
                td(style="background-color: #F6F6F6;") Al final del ciclo de vida del proyecto.
                td(style="background-color: #F6F6F6;") Entregas pequeñas y funcionales constantes.
              tr(data-aos="fade-right")
                td.text-center Estructura
                td Lineal o secuencial por fases.
                td Iterativa e incremental (#[i sprints]).
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Cambios
                td(style="background-color: #F6F6F6;") Difíciles de implementar y costosos.
                td(style="background-color: #F6F6F6;") Bienvenidos, incluso en etapas tardías.
              tr(data-aos="fade-right")
                td.text-center Relación con cliente
                td Contractual; el cliente interviene al inicio y final.
                td Colaborativa; el cliente es parte del equipo.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Equipo
                td(style="background-color: #F6F6F6;") Jerárquico y con roles muy especializados.
                td(style="background-color: #F6F6F6;") Autogestionado y multidisciplinario.
              tr(data-aos="fade-right")
                td.text-center Éxito medido por...
                td Cumplimiento del plan y documentación.
                td #[i Software] funcionando que satisface al usuario.

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Calidad en entornos ágiles vs tradicionales

    p La gestión de la calidad es uno de los puntos donde más chocan ambas filosofías. Mientras que en los entornos tradicionales la calidad es una etapa de control (una barrera al final), en los entornos ágiles la calidad es un hábito continuo (integrada en cada paso).

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 La calidad en entornos tradicionales

    p En modelos como la cascada o el modelo en V, la calidad se percibe como una fase de inspección técnica e incluye:

    .cajon.tabs-a__tab.p-5.mb-4
      SlyderB(:datos="datosSlyder")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 La calidad en entornos ágiles

    p En Scrum, Kanban o DevOps, la calidad no es una fase, es una responsabilidad compartida de todo el equipo durante todo el ciclo de vida y por ello, se presentan las siguientes acciones:

    .row.mb-4.g-4
      .col-lg-6
        .tarjeta.tarjeta-BG01.h-100(data-aos="fade-left")(style="border-radius:0;")
          figure
            img(src='@/assets/curso/tema4/img-14.png', alt='')
          .p-4
            h4 Calidad construida (#[i Built-in Quality])
            p.mb-0 En lugar de esperar a que algo falle para arreglarlo, se aplican prácticas para no introducir errores. Se prueba el código cada vez que se escribe (siguiendo estándares como IEEE 1008).
      .col-lg-6
        .tarjeta.tarjeta-BG01.h-100(data-aos="fade-right")(style="border-radius:0;")
          figure
            img(src='@/assets/curso/tema4/img-15.png', alt='')         
          .p-4
            h4 Enfoque
            p.mb-0 Se centra en el valor para el usuario. La calidad se define por la satisfacción del cliente y la capacidad de respuesta ante sus cambios.
      .col-lg-6
        .tarjeta.tarjeta-BG01.h-100(data-aos="fade-right")(style="border-radius:0;")
          figure
            img(src='@/assets/curso/tema4/img-16.png', alt='')         
          .p-4
            h4 Pruebas continuas
            p.mb-0 Se utiliza la automatización (CI/CD) para ejecutar pruebas cada pocas horas. Si algo se rompe, el equipo se entera de inmediato. 
      .col-lg-6
        .tarjeta.tarjeta-BG01.h-100(data-aos="fade-right")(style="border-radius:0;")
          figure
            img(src='@/assets/curso/tema4/img-17.png', alt='')         
          .p-4
            h4 Definición de hecho  (#[i Definition of done]). 
            p.mb-0 Un requisito no se considera terminado solo porque el código esté escrito, debe haber pasado pruebas unitarias, de integración y revisión por pares para considerarse de "calidad".

    p.text-center Para clarificar un poco este tema de calidad, se presenta la siguiente tabla:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 12.
          span Comparativo de calidad
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(style="width: 15%; background-color: #FFEBBE;") Aspecto
                th(style="width: 15%; background-color: #FFEBBE;") Calidad tradicional
                th(style="width: 15%; background-color: #FFEBBE;") Calidad ágil
            tbody
              tr
                td.text-center(style="background-color: #F6F6F6;") Responsabilidad
                td(style="background-color: #F6F6F6;") Del equipo de QA / #[i Testers].
                td(style="background-color: #F6F6F6;") De todo el equipo (incluyendo programadores).
              tr
                td.text-center Cuándo ocurre
                td Al final (fase de pruebas).
                td Constantemente (en cada #[i sprint] o tarea).
              tr
                td.text-center(style="background-color: #F6F6F6;") Objetivo
                td(style="background-color: #F6F6F6;") Cero defectos vs especificaciones.
                td(style="background-color: #F6F6F6;") Valor para el negocio y mejora continua.
              tr
                td.text-center Costo de error
                td Muy alto (se detecta tarde).
                td Bajo (se detecta en horas o días).
              tr
                td.text-center(style="background-color: #F6F6F6;") Automatización
                td.text-center(style="background-color: #F6F6F6;") Opcional / Secundaria.
                td.text-center(style="background-color: #F6F6F6;") Crítica y fundamental (DevOps).




</template>

<script>
export default {
  name: 'Tema4',
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
          '<b>Enfoque</b> <br><br>Se basa en el cumplimiento estricto de los requisitos documentados al inicio. Si el <em>software</em> hace lo que dice el documento, tiene "calidad", aunque el cliente ya no necesite esa funcionalidad.',
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
