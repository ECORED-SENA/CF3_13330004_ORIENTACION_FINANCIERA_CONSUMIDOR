<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Comunicación empresarial
    .row.bg5
      .row
        .col-lg-6
          p La forma en que se comunica es muy importante y más aún en los ambientes laborales, la comunicación efectiva afecta los procesos, la eficiencia y cada área de una empresa, las organizaciones con una comunicación empresarial eficiente aumentan su productividad significativamente. La importancia de la comunicación radica en:
          ul.lista-ul
            li 
              i.fas.fa-angle-right.colf
              | Presentación de opciones/nuevas ideas de negocio.
            li 
              i.fas.fa-angle-right.colf
              | Realización de planes y propuestas (redacción comercial).
            li 
              i.fas.fa-angle-right.colf
              | Ejecutar decisiones.
            li 
              i.fas.fa-angle-right.colf
              | Llegar a acuerdos.
            li 
              i.fas.fa-angle-right.colf
              | Envío y cumplimiento de pedidos.
            li 
              i.fas.fa-angle-right.colf
              | Venta exitosa.
            li 
              i.fas.fa-angle-right.colf
              | Reuniones efectivas.
        .col-lg-6(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img1.png', alt='Texto que describa la imagen')
      p.mt-3 Toda actividad organizada en una empresa se basa en el proceso de comunicación empresarial, desde la comunicación gerencial hasta la comunicación técnica con los proveedores, se debe tener presente que una vez la comunicación se vuelve poco clara, los sistemas centrales de la empresa corren el riesgo de desmoronarse, y es muy común que en las organizaciones no se midan las comunicaciones internas, para tomar acciones de forma oportuna.
    h5.text-center.mt-3 Para familiarizarse con los conceptos, le invitamos a consultar el siguiente video:
    figure.mb-5.mt-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pJSpvQF2Uik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Sena. (2020). Comunicación y protocolo. [Video] YouTube
    p Es importante reconocer los principales tipos de comunicación interna empresarial de una organización típica, los cuales pueden ser: 
    .row.justify-content-center
      .col-lg-10
        .row.mb-5
          .col-sm-6.col-xl-4.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5.text-center.mt-5 Comunicación ascendente
                  p.text-center.mb-5 Es toda comunicación que proviene de un subordinado a un gerente, o de otra persona en la jerarquía organizacional.
                  .row.mb-5
                .tarjeta-slide__img
                  .row.justify-content-center.mt-5
                    .col-lg-10
                      img.peq(src='@/assets/curso/tema5/img2.svg', alt='Texto que describa la imagen')
                  h4.text-center.mt-4 Comunicación ascendente
          .col-sm-6.col-xl-4.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5.text-center.mt-5 Comunicación descendente

                  p.text-center.mb-5 También conocida como comunicación gerencial, hace referencia a toda información que proviene de un superior a un subordinado.
                  .row.mb-5
                .tarjeta-slide__img
                  .row.justify-content-center.mt-5
                    .col-lg-9
                      img.peq(src='@/assets/curso/tema5/img3.svg', alt='Texto que describa la imagen')
                  h4.text-center.mt-4 Comunicación descendente
          .col-sm-6.col-xl-4.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h5.text-center.mt-5 Comunicación lateral
                  p.text-center.mb-5 También conocida como comunicación técnica, es la comunicación interna o interdepartamental entre compañeros de trabajo.
                  .row.mb-5
                .tarjeta-slide__img
                  .row.justify-content-center.mt-5
                    .col-lg-11
                      img.peq(src='@/assets/curso/tema5/img4.svg', alt='Texto que describa la imagen')
                  h4.text-center.mt-4 Comunicación lateral          
    .row.mt-4
      .col-lg-8
        p La comunicación comercial externa es cualquier mensaje que sale de su oficina y del personal interno, implica tratar con clientes, proveedores o cualquier cosa que impacte en su marca, y se puede clasificar así:
        #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')

          
          .carousel-inner
            .carousel-item.active.mt-5.mb-5
              .row.justify-content-center
                .col-lg-12
                  p.mt-4 <strong>Obtener y recibir instrucciones y asignaciones tanto hacia arriba como hacia abajo.</strong> Esto incluye una delegación efectiva de una persona a otra. La mayoría de los problemas en los negocios comienzan con comunicaciones poco claras en esta área.
            
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-12
                  p.mt-4 <strong>Compartir y discutir información, incluido el intercambio de información que ocurre en las reuniones.</strong>  Cuando la comunicación falla en esta área, hace que las tareas se realicen de manera incorrecta o no se realicen en absoluto.
            
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-12
                  p.mt-4 <strong>Dar retroalimentación, corregir y disciplinar a las personas que le reportan para que puedan tener el conocimiento y las herramientas que necesitan para hacer mejor su trabajo.</strong>   Brindar comentarios excelentes y prácticos es una habilidad clave para cualquier persona en una posición de liderazgo. La comunicación no verbal y el lenguaje corporal también juegan un papel aquí.
            
            .carousel-item.mt-5.mb-5
              .row.justify-content-center
                .col-lg-12
                  p.mt-4 <strong>Reuniones y debates de resolución de problemas y toma de decisiones.</strong>    Estos se consideran entre los debates más importantes para cualquier organización. Esto implica un mayor pensamiento crítico y una mejor tecnología de comunicación.
                                           
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next      
      .col-lg-4.mt-2(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img5.png', alt='Texto que describa la imagen')
    .row.mt-4
      .col-lg-5
        .row.t2
          .col-lg-9
            h3.mt-2.mb-0 Medios y políticas de clientes 
          .col-lg-2
            img.imt3(src='@/assets/curso/tema2/d.svg', alt='Texto que describa la imagen')    
    p.mt-4 Los clientes quieren que las empresas les atiendan desde las redes sociales, para lo cual deben incorporar este tipo de atenciones en el plan de negocios, incorporando, además, estas tendencias en las políticas de atención al cliente. El manejo de medios requiere de ciertos aspectos que se deben considerar, y se presentan a continuación:
    SlyderB.mb-5.mt-5(:datos="datosSlyder")
    .row.bg6
      .row
        .col-lg-4
          .row.mt-4
            .col-lg-8
              .row.t2
                .col-lg-7
                  h3.mt-2.mb-0 Competencias
                .col-lg-3
                  img(src='@/assets/curso/tema2/d.svg', alt='Texto que describa la imagen')  
          p.mt-5 La competencia empresarial se presenta cuando varias empresas compiten con un servicio o productos del mismo tipo, se dirigen al mismo público objetivo para obtener más ventas, aumentar los ingresos y ganar más participación de mercado, buscando a traer el mayor número de clientes posibles mediante algún factor diferenciador que les represente, como el precio, calidad, diseño, ventas, ubicación, entre otros, por esto se hace necesario reconocer los tipos de competencia y su importancia:
        .col-lg-8   
          .row.mb-5
            .col-sm-6.col-xl-6.mb-4.mb-xl-0
              .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img13.png')})`}")
                    .row.justify-content-center
                      .col-lg-8
                        .row.mt-5
                        .row.mt-5
                        h4.text-center.mt-5.aqw Directa
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    .row.mt-4
                    h4.text-white.mt-5.text-center Directa
                    p.text-white.text-center.mb-5 Los competidores directos son vendedores que venden los mismos productos a la misma audiencia y compiten por el mismo mercado potencial.
            .col-sm-6.col-xl-6.mb-4.mb-xl-0
              .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img14.png')})`}")
                    .row.justify-content-center
                      .col-lg-8
                        .row.mt-5
                        .row.mt-5
                        h4.text-center.mt-5.aqw Indirecta
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    .row.mt-4
                    h4.text-white.mt-5.text-center Indirecta
                    p.text-white.text-center.mb-5 Los competidores indirectos son vendedores que ofrecen productos o servicios que no son necesariamente los mismos, pero satisfacen la misma necesidad del consumidor.
    .row.mt-4
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img15.png', alt='Texto que describa la imagen')  
      .col-lg-8.mt-2
        p A diferencia de lo que parece, la sana competencia es casi tan importante como la sana demanda de un negocio, y ayuda a: 
        ul.lista-ul
          li 
            i.fas.fa-angle-right.colf.mb-0
            | Hacer que la empresa profundice en las necesidades, deseos y demandas reales de los clientes y hace que esté más interesada en atenderlos mejor que otros jugadores.
          li 
            i.fas.fa-angle-right.colf.mb-0
            | Permite que la empresa se dé cuenta de sus fortalezas y debilidades reales.
          li 
            i.fas.fa-angle-right.colf.mb-0
            | Posibilita que el negocio se centre en algo más que la oferta; en marketing, marca, servicio al cliente y retención de clientes.
          li 
            i.fas.fa-angle-right.colf.mb-0
            | Mantiene a las empresas alerta e induce el hábito de innovar constantemente y mejorar el producto.
          li 
            i.fas.fa-angle-right.colf.mb-0
            | Educa a la empresa sobre las complejidades de cómo funciona el mercado habitual, cómo posicionar la marca, cómo producir de manera eficiente y cómo vender en el mercado de manera efectiva.
    p.mt-4 Décadas atrás, en la era de la producción, las empresas se limitaban a producir material y venderlos, más no se concebía la idea de valor agregado o diferenciador, todo eso ha cambiado debido a la competencia, por eso en necesario que profundizar en por qué la competencia es buena para los negocios:
    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Conocimiento y penetración en el mercado")
            .col-lg-11
              .row
                .col-lg-12
                  p Cuanto mayor sea la competencia, mayor será la conciencia del producto. En un momento dado, el agua mineral o el agua embotellada no tenían demanda. Sin embargo, aunque es importante, la demanda aumentó cuando hubo múltiples jugadores de agua embotellada.
                  p Más jugadores, más competencia, más conciencia creada. En última instancia, esto resultó en que la mayoría de las personas prefirieran el agua embotellada al agua normal, incluso si el agua normal era buena en esa región.
                  p Otro ejemplo son las redes sociales, en el momento que surge Myspace, había pocos competidores, pero hoy, además de Facebook, la gente usa Instagram, Pinterest, Snapchat y varios otros. Por eso cuanto mayor sea la competencia, mayor será la <strong>conciencia del producto</strong>, que es uno de los principales beneficios.
          .row.justify-content-center(titulo="Mayor calidad a los mismos precios")
            .col-lg-11
              .row
                .col-lg-12
                  p Si observa el mercado de aire acondicionado o cualquier mercado de consumo duradero, encontrará que está obteniendo un producto de excelente calidad por el precio pagado. No fue así hace 2 décadas.
                  p.mb-0 Hace un par de décadas, la gente pagaba demasiado por los acondicionadores de aire (al menos en los países asiáticos) y los márgenes para los comerciantes y distribuidores eran altos, ya que había jugadores selectos de acondicionadores de aire. A medida que aumentaba la competencia, el precio bajaba. A medida que el precio bajaba, la gente <strong>obtenía productos de buena calidad a un precio más bajo</strong>.
                  p Por eso la competencia es buena para los negocios. Mantiene una alta calidad incluso a un precio más bajo. El resultado final se ve afectado, pero el consumo aumenta. 
          .row.justify-content-center(titulo="Aumenta el consumo")
            .col-lg-11
              .row
                .col-lg-12
                  p Como se mencionó en los dos ejemplos anteriores: agua embotellada y acondicionadores de aire, el consumo general del producto aumentó debido al aumento de competidores. Esto se debe a que la penetración fue mayor, la calidad fue mejor y, lo que es más importante, la gente podía pagar a un precio competitivo.

                  p Esto permite que la fijación de precios sea competitiva, en la que un jugador fija el precio de un producto en función de los precios de la competencia. Donde quiera que se utilicen tales precios, encontrará que el mercado tiene niveles de consumo enormes, y un peso aquí o allá hace una gran diferencia en el resultado final. Los beneficios de la competencia radican en el hecho de que las personas aceptan más y están más dispuestas a comprar un producto si se convierte en una norma social.
          .row.justify-content-center(titulo="Diferenciación")
            .col-lg-11
              .row
                .col-lg-12
                  p Una vez que se tiene competencia, los jugadores intentan diferenciarse unos de otros, esto conduce al desarrollo de mejores productos, actualizaciones de productos más rápidas e innovación de productos. En general, aumenta considerablemente el tamaño del mercado.
          .row.justify-content-center(titulo="Aumenta la eficiencia")
            .col-lg-11
              .row
                .col-lg-12
                  p Cuando se tiene una competencia tratando de derribarte, se hacen mejor los negocios, se utilizan mejor los recursos, está alerta para asegurarse de que haya una pérdida mínima y desea capturar el mercado más rápido. Todo esto significa que está trabajando a su nivel óptimo y su trabajo es eficiente, lo que le brinda mejores resultados.
                  p Un ejemplo de negocio eficiente, es Apple, que siempre ha estado a la vanguardia en el juego y está utilizando tecnología que está muy por delante de sus competidores.
          .row.justify-content-center(titulo="Servicio al cliente y satisfacción")
            .col-lg-11
              .row
                .col-lg-12
                  p Los clientes estarían más contentos cuando compran en un segmento donde hay competencia. Pues están recibiendo un servicio excelente porque si no se les atiende bien, se pasarán al competidor. Están obteniendo productos mejorados, están obteniendo productos diferenciados, su estatus social está aumentando, sus requisitos se están cumpliendo y todo esto está sucediendo a un precio excelente.

                  p Entonces, uno de los principales beneficios de la competencia es que hace que los clientes sean positivos para comprar un producto, al sentirse que cuentan con una adecuada atención, porque de lo contrario irán directamente a la competencia. 


</template>

<script>
export default {
  name: 'Tema5',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Configure un identificador dedicado para la atención al cliente de las redes sociales:',
        texto:
          'Es probable que su equipo de servicio al cliente pueda abordar las preguntas de los clientes más rápido y con más detalle que su equipo de marketing social. Las estadísticas de redes sociales y servicio al cliente muestran que es más probable que una cuenta de Twitter de servicio al cliente responda en 15 minutos.',
        imagen: require('@/assets/curso/tema5/img6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<strong>Encuentre y monitoree conversaciones relevantes para su negocio</strong>, por supuesto, muchas personas también publicarán mensajes sobre su negocio en línea sin etiquetar ninguna de sus cuentas sociales. Algunas de estas publicaciones pueden justificar una respuesta del servicio de atención al cliente y dar pronta respuesta a los clientes que tienen un problema con el servicio.',
        imagen: require('@/assets/curso/tema5/img7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<strong>Sea proactivo,</strong> si los clientes tienen regularmente las mismas preguntas, esa es una pista que necesita para proporcionar algunos recursos de información de autoservicio. <br><br> Los canales de atención al cliente en las redes sociales son excelentes lugares para compartir contenido educativo. Por ejemplo, puede crear un video instructivo o una publicación de blog de mejores prácticas. Se trata de ayudar a los clientes a aprender cómo aprovechar al máximo sus productos.',
        imagen: require('@/assets/curso/tema5/img8.png'),
      },
      {
        texto:
          '<strong>Expanda las ideas de lo que puede ser el servicio al cliente,</strong> piense ampliamente en lo que califica como un problema de servicio al cliente. La forma en que las empresas utilizan las redes sociales para el servicio al cliente varía ampliamente. No tiene que ser sólo sobre la resolución de problemas y quejas.',
        imagen: require('@/assets/curso/tema5/img9.png'),
      },
      {
        texto:
          '<strong>Gestionar las expectativas:</strong>  los clientes no esperan que todas las empresas ofrezcan los mismos niveles de atención al cliente en las redes sociales.<br>Un estudio reciente encontró que los clientes que pagan más por sus servicios esperan un mayor nivel de atención al cliente social. Otro estudio encontró que las aerolíneas de mayores ingresos ofrecen una atención a la cliente más empática en Twitter.',
        imagen: require('@/assets/curso/tema5/img10.png'),
      },
      {
        texto:
          '<strong>Responda siempre,</strong>   esto puede sonar obvio, pero es una regla que no todas las empresas siguen. La mayoría de las marcas responden a los comentarios en Facebook e Instagram, pero no todas.',
        imagen: require('@/assets/curso/tema5/img11.png'),
      },
      {
        texto:
          '<strong>Responda rápidamente con plantillas</strong>    para preguntas comunes, simplemente responder no es suficiente. Cuando los clientes se comunican con las marcas en las redes sociales, esperan una respuesta rápida y amigable.',
        imagen: require('@/assets/curso/tema5/img12.png'),
      },
    ],

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
.tarjeta.color-primario *
  color: #12263F
.tarjeta.color-primario *
  background-color: #FEF5E5
.tarjeta-slide.color-primario .tarjeta-slide__img
  background-color: #FEF5E5
.tarjeta.color-primario
  background-color: #FEF5E5
.carousel-inner
  padding-left: 150px
  padding-right: 150px
  background-image: url("../assets/curso/tema2/bag1.png") !important
  background-repeat: no-repeat
  background-color: #D1E4DE
  @media screen and ( max-width: 420px)
    padding-left: 50px
    padding-right: 50px
    background-repeat: repeat

.carousel-control-prev-icon
  background-image: url("../assets/curso/tema2/flecha.svg") !important
  transform: rotate(-180deg)
.carousel-control-next-icon
  background-image: url("../assets/curso/tema2/flecha.svg") !important
.carousel-indicators .active
  background-color: #033F71
.slyder-b.mb-5.mt-5 h3
  font-size: 16px
.slyder__btn
  background-color: #FFC631
.tarjeta--azul
  background-color: #92BFB1
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F9F7EC
.slyder__btn:hover
  background-color: #F9F7EC
.tarjeta-flip.color-secundario .tarjeta-flip__contenido
  background-color: #003B73!important
.tarjeta.tarjeta-slide.arriba.color-primario
  border-radius: 0px!important
.carousel-control-next, .carousel-control-prev
  background-color: #FFC631
  padding: 0px
.carousel-inner
  border-radius: 10px
.tarjeta--azul
  background-color: #C8DFD8
</style>
