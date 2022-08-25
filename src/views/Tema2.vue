<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Solicitudes   
    .row.bg3
      p Una solicitud de negociación significa que el empleador solicita negociar un determinado asunto con la otra parte. La parte receptora está obligada a negociar y la solicitud debe incluir lo que le gustaría negociar y adjuntar todos los archivos pertinentes.
      p Un formulario básico de solicitud de negociación consta de los siguientes pasos:
      .row.justify-content-center
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-botones.p-3(x="30.8%" y="20.5%" numero="+")
              .h5.mb-2 Tipo de negociación
              p Indique de qué se trata la negociación, debe ser lo más breve posible, no deje datos personales. En este paso, debe elegir una categoría y subcategoría para su negociación.
            .tarjeta.color-acento-botones.p-3(x="37.5%" y="43%" numero="+")
              .h5.mb-2 Ubicación
              p Sobre la negociación, elija en qué ciudad quiere que se realice la negociación, indique el número de la organización. Si el caso incluye varias ubicaciones, indique qué ubicaciones se ven afectadas.
            .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="+")
              .h5.mb-2 El problema
              p La situación o el problema: indique también si han sido informados de la situación o no. Por lo general, no se proporcionan listas de miembros a pedido.
            .tarjeta.color-acento-botones.p-3(x="62.5%" y="43%" numero="+")
              .h5.mb-2 Documentos de respaldo
              p Documentos de respaldo: se adjuntan la propuesta de negocio consolidada.
            .tarjeta.color-acento-botones.p-3(x="69%" y="20.5%" numero="+")
              .h5.mb-2 Contacto
              p Información de contacto: indique el nombre de la persona de contacto, número de teléfono, dirección de correo electrónico y el nombre completo de la empresa en cuestión. 
    .row
      .col-lg-3
        .row.t2
          .col-lg-7
            h3.mt-2 Tipos y formatos 
          .col-lg-2
            img.imt2(src='@/assets/curso/tema2/d.svg', alt='Texto que describa la imagen')
    p.mt-4 La negociación es una habilidad importante para el profesional moderno y es importante que se reconozca los diferentes tipos de negociación que existen, para que se pueda aplicar estrategias acordes a la necesidad o al contexto:     
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Negociación distributiva")
        .col-lg-12
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
            .col-lg-8
              p.mb-0 Es cuando dos partes negocian sobre un solo producto o tema, como el precio. 
              p Por ejemplo, negociar con un concesionario el precio de un vehículo de segunda mano o regatear con un vendedor ambulante. 
              p Aquí, una parte gana y la otra tiene que dar un paso atrás y sufre una pérdida. Su éxito eventual depende de sus habilidades de negociación distributiva.
      
      div(titulo="Negociación integradora")
        .col-lg-12
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
            .col-lg-8
              p Es uno de los tipos de negociación en los que hay más de un problema que debe someterse al proceso de negociación. Ambas partes ganan algo con la negociación, es un proceso de negociación integrador queasegura una situación en la que todos ganan.
              p ¿Sabe lo que sucede cuando los representantes de un sindicato de empleados se reúnen con la gerencia con sus demandas? Discuten, argumentan, presentan, oponen, convencen, etc. Luego, llegan a un acuerdo sobre salarios y otros beneficios. Esto se llama negociación integradora.
      div(titulo="Negociación multipartes")
        .col-lg-12
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
            .col-lg-8
              p.m-0 Implica que tres o más partes emprendan diversas estrategias de negociación para llevar a casa sus puntos. 
              p Por ejemplo, cuando seis amigos están decidiendo el lugar de la fiesta y discuten sus pros y sus contras, se puede decir que el tipo de negociación es multipartes.
      div(titulo="Negociación en equipo")
        .col-lg-12
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
            .col-lg-8
              p Este tipo de proceso de negociación tiene lugar entre los dos equipos. Por ejemplo, las estrategias de negociación entre los equipos de dos empresas que buscan fusionarse, se denominan negociaciones en equipo.

              p Al formar un equipo de negociación, una empresa busca miembros con excelentes habilidades de negociación y capacidades de pensamiento estratégico altamente desarrolladas.
      div(titulo="Negociación en equipo")
        .col-lg-12
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')
            .col-lg-8
              p Es cuando usted explica la posición en la que se encuentra, desde el principio. Luego, defiende esa posición contra el ataque. 
              p Importante comprender que la negociación posicional considera que ambas partes tienen posturas fijas y se apegan a ellas obstinadamente. Es posible que no consideren el interés de la otra parte ni vean de dónde vienen. La negociación posicional no se considera muy productiva.
    .row
      .col-lg-2
        .row.t2
          .col-lg-7
            h3.mt-2.mb-0 Trámites
          .col-lg-3
            img.imt2(src='@/assets/curso/tema2/d.svg', alt='Texto que describa la imagen')
    p.mt-3 La organización es clave cuando está escribiendo una propuesta comercial, la estructura no solo ayudará a responder las principales preguntas, sino que también ayuda a tramitar las propuestas de forma consistente y exitosa cada vez que presente nuevos negocios.
    p Dicho esto, al escribir una propuesta comercial, se deben tramitar los siguientes pasos:     
    .row.justify-content-center.mt-4
      .col-lg-10
        #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
          
          .carousel-inner
            .carousel-item.active.mt-5.mb-5
              .row.justify-content-center
                .col-lg-2
                  img.w1(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
                .col-lg-10
                  h5 Introducción
                  p.mt-4 Debe brindarle al cliente una breve descripción general de lo que hace la empresa. También debe incluir lo que distingue a la empresa de sus pares y por qué es particularmente adecuada para ser el proveedor seleccionado para realizar un trabajo, ya sea que la asignación sea un acuerdo singular o una relación continua.
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-2
                  img.w1(src='@/assets/curso/tema2/ico2.svg', alt='Texto que describa la imagen')
                .col-lg-10
                  h5 Tabla de contenido
                  p.mt-4 Una vez que haya presentado el negocio y por qué es el candidato adecuado para el cliente al que le está enviando la propuesta, deberá crear una tabla de contenido donde describirá lo que el cliente puede esperar encontrar en el resto de la propuesta, si es una propuesta electrónica, es importante que esté hiperviculada, donde se pueda hacer clic en los tópicos del contenido y se le lleve fácilmente al detalle de la información.
            
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-2
                  img.w1(src='@/assets/curso/tema2/ico3.svg', alt='Texto que describa la imagen')
                .col-lg-10
                  h5 Resumen ejecutivo
                  p.mt-4.mb-0 Siempre debe incluir un resumen ejecutivo que enmarque las respuestas a las preguntas quién, qué, dónde, cuándo, por qué y cómo que le está proponiendo al cliente potencial.
                  p Es importante tener en cuenta que, a pesar de la palabra “resumen”, esta sección no debe ser un resumen de toda la propuesta comercial. En su lugar, esta sección debería servir como su discurso de promoción o propuesta de valor.
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-2
                  img.w1(src='@/assets/curso/tema2/ico4.svg', alt='Texto que describa la imagen')
                .col-lg-10
                  h5 Destalles del proyecto
                  p.mt-4 Dentro de este cuerpo, comenzará explicando la recomendación, solución o enfoque para atender al cliente. A medida que profundiza en la explicación, el objetivo principal será transmitir al cliente que está trayendo algo verdaderamente personalizado a su necesidad.
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-2
                  img.w1(src='@/assets/curso/tema2/ico5.svg', alt='Texto que describa la imagen')
                .col-lg-10
                  h5 Entregables e hitos
                  p.mt-4 Esta sección se anidará dentro de la sección de detalles del proyecto, pero es un paso esencial por sí solo.
                  p Aquí describirá los entregables propuestos con descripciones detalladas de cada uno (que pueden incluir cantidades o el alcance de los servicios, según el tipo de negocio).
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-2
                  img.w1(src='@/assets/curso/tema2/ico6.svg', alt='Texto que describa la imagen')
                .col-lg-10
                  h5 Presupuesto
                  p.mt-4 La sección de presupuesto o fijación de precios es una parte integral de una propuesta comercial, por lo que querrá preparar su estrategia de fijación de precios con anticipación.
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-2
                  img.w1(src='@/assets/curso/tema2/ico7.svg', alt='Texto que describa la imagen')
                .col-lg-10
                  h5 Conclusión
                  p.mt-4 Debe resumir la comprensión del proyecto, las soluciones propuestas y qué tipo de trabajo (y costos) están involucrados. Esta es la última oportunidad de presentar un caso convincente dentro de las propuesta, reiterar lo que se pretende hacer y por qué superar las ideas de los competidores.
                                                                               
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.tarjeta.color-acento-botones
  background-color: #D9E2EA
.tarjeta--azul
  background-color: #92BFB1
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F9F7EC
.carousel-inner
  padding-left: 170px
  padding-right: 170px
  background-image: url("../assets/curso/tema2/bag1.png") !important
  background-repeat: no-repeat
  background-color: #D1E4DE
.carousel-control-prev-icon
  background-image: url("../assets/curso/tema2/flecha.svg") !important
  transform: rotate(-180deg)
.carousel-control-next-icon
  background-image: url("../assets/curso/tema2/flecha.svg") !important
.carousel-indicators .active
  background-color: #033F71
</style>
