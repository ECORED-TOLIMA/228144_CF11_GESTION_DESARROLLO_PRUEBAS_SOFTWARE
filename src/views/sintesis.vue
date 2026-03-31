<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo se centra en el aseguramiento de la calidad del #[i software] mediante la integración de estándares internacionales, modelos de madurez y metodologías de desarrollo. El documento aborda desde conceptos fundamentales como la distinción entre calidad de proceso y de producto, hasta la aplicación de marcos normativos como ISO/IEC 25000 (SQuaRE), CMMI y diversos estándares IEEE. Además, detalla disciplinas técnicas para la mejora de la productividad individual y colectiva, tales como el PSP (Personal Software Process) y el TSP (Team Software Process). Finalmente, el contenido enfatiza la importancia de la mejora continua, basada en el ciclo PHVA y la gestión mediante indicadores y métricas para garantizar productos tecnológicos confiables que satisfagan las necesidades del usuario y de las organizaciones.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis del componente formativo Calidad de <em>software</em>: estándares, modelos y metodologías, inicia con el estudio de los fundamentos de la calidad y la gestión de procesos como base para comprender cómo se planifica, mide y mejora el desarrollo de <em>software</em>. Posteriormente, se abordan los estándares y modelos de calidad que orientan la evaluación de productos y procesos, así como las metodologías tradicionales y ágiles y su impacto en la calidad. El recorrido formativo se complementa con el análisis de las disciplinas de calidad personal y de equipo, la medición y estimación del trabajo del desarrollador y finaliza con la documentación y la gestión documental como soporte para la trazabilidad, el control y la mejora continua.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
