<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/introduccion/img-01.png', alt='')
      .col-lg-8       
        p.mb-4(data-aos="fade-left") En un entorno donde las organizaciones dependen cada vez más de soluciones tecnológicas para operar y competir, la calidad del #[i software] se consolida como un factor estratégico. Los errores en los sistemas pueden generar pérdidas económicas, afectar la reputación institucional y comprometer la seguridad de la información. Por ello, la gestión adecuada de las pruebas y el aseguramiento de la calidad resultan componentes esenciales a lo largo del ciclo de vida del desarrollo de #[i software].
        .cajon.cajon.C01.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") Este componente proporciona los fundamentos conceptuales, normativos y prácticos necesarios para planificar, ejecutar, controlar y mejorar los procesos de verificación y validación, en coherencia con estándares internacionales y buenas prácticas de la industria. Mediante una modalidad virtual y un enfoque aplicado, se desarrollan competencias orientadas a garantizar productos de #[i software] confiables, eficientes y alineados con los requisitos establecidos, contribuyendo a la mejora continua de los procesos tecnológicos en las organizaciones.

    p.mb-4 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/gL8IZC8yCLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
