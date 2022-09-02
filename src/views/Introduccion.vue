<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p En este componente de formación se abordarán los conceptos básicos que permitirán comprender cómo consolidar una propuesta de negocio acorde con el perfil de cliente.
    figure.mb-5.mt-4(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/osM599IP_TA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
