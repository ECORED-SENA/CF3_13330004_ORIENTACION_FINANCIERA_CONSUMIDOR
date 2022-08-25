<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Proceso de desembolso                  
    p En el marco de las diversas operaciones o transacciones que realiza una organización en el ámbito comercial y empresarial, se encuentran los desembolsos que se pueden realizar con el objetivo de obtener bienes o servicios. En este concepto, suele ocurrir que surjan preguntas respecto a la apropiada identificación y tratamiento a otorgarles, es decir, la calificación si se denomina activo o gasto. 
      span.t1 En el siguiente video se entregan orientaciones al respecto para una mejor comprensión:
    figure.mb-5.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vZBuf77b44o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Pagaré y su composición     
    .row
      .col-lg-7
        p Es una promesa que el emisor del pagaré hace para devolver el dinero que le entregó el prestamista. Los pagarés son la base de muchos préstamos, incluidos los préstamos comerciales para la compra de equipos e hipotecas para nuevas oficinas o fábricas. Una empresa puede incluso utilizar un pagaré para evitar malentendidos si hace un préstamo a un empleado. Si bien los pagarés pueden variar según las leyes de un estado determinado o los términos específicos del préstamo, generalmente contienen algunos elementos similares.
        .row.p-2.colt3
          p Un pagaré debe identificar claramente el emisor y al prestamista con nombres y direcciones. A veces, la nota también incluirá números de identificación, como números de identificación del empleador. Un representante de la empresa también firma el pagaré en nombre de la empresa que recibe el préstamo, formalizando la promesa de pago de la empresa. Hacer que el prestamista firme el pagaré suele ser opcional.
      .col-lg-5   
        img(src='@/assets/curso/tema3/img1.png', alt='Texto que describa la imagen')
    p.mt-4 Los requisitos generales que debe cumplir el pagaré se encuentran en el artículo 621 del código de comercio de Colombia, y son:   
    .row.justify-content-center
      .col-lg-10
        .row.mt-4
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/ico1.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones
                .p-4
                  h5.text-center La mención del derecho que en el título se incorpora.
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/ico2.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones
                .p-4
                  h5.text-center.mt-2 La firma de quien lo crea.
    p.mt-4 Los requisitos particulares del pagaré se encuentran en el artículo 709 del código de comercio, los cuales son:  
    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema3/ico3.svg', alt='Texto que describa la imagen')

          p.text-center.mt-4 La promesa incondicional de pagar una suma determinante de dinero.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/ico4.svg', alt='Texto que describa la imagen')

          p.text-center.mt-5.mb-4 El nombre de la persona a quien debe hacerse el pago.
          .row.mb-3

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/ico5.svg', alt='Texto que describa la imagen')

          p.text-center.mt-5.mb-4 La indicación de ser pagadero a la orden o al portador.
          .row.mb-3
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema3/ico6.svg', alt='Texto que describa la imagen')

          p.text-center.mt-5.mb-4 La forma de vencimiento.
          .row.mb-3
    p.mt-4 El pagaré prescribe a los tres años contados desde la fecha de vencimiento del pagaré, es decir, desde la fecha en que el otorgante prometió pagar el dinero.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Instrucciones y autorizaciones   
    .row.bg4
      .row
        .col-lg-7
          img(src='@/assets/curso/tema3/img2.png', alt='Texto que describa la imagen')
        .col-lg-5
          p En cualquier tienda o papelería se consiguen formatos proforma como Minerva, pero se pueden hacer en un documento de Word común y corriente, imprimirlo y firmarlo. En algunos casos el pagaré debe estar acompañado de una carta de instrucciones, especialmente cuando se trata de un pagaré en blanco, donde no se coloca el valor a pagar ni la fecha de vencimiento.
          p En un pagaré se deben diligenciar los siguientes conceptos:
          ul.lista-ul
            li 
              i.fas.fa-angle-right.colf.mb-0
              | El valor o monto del pago.

            li 
              i.fas.fa-angle-right.colf
              | La fecha en que se debe pagar.
            li 
              i.fas.fa-angle-right.colf
              | Los intereses si los hay.
            li 
              i.fas.fa-angle-right.colf
              | Nombre del beneficiario (a quien se paga).
            li 
              i.fas.fa-angle-right.colf
              | Lugar en que se pagará.
            li 
              i.fas.fa-angle-right.colf
              | Firma del otorgante (quien se compromete a pagar).
      p.mt-3 Está escrito, así como un instrumento negociable que está debidamente firmado por su creador y contiene una promesa incondicional de pagar la cantidad de dinero indicada a una persona en particular (exportador), ya sea a pedido, en una fecha específica o dentro del tiempo dado según las condiciones.
      p Un pagaré consta de varios términos y condiciones relacionados con el endeudamiento, como el monto principal a pagar, la fecha de vencimiento, la tasa de interés sobre el monto a pagar, los términos e instrucciones de pago, la fecha de emisión, el nombre y la firma del librador, nombre del librado y muchos más. No se necesita aceptación mediante un pagaré.
    h5.text-center.mt-3 Las características del pagaré son:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.a1.p-4
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico1.png' alt='AvatarTop')
        p.text-center.p-4.mb-5 Es un documento legal escrito.
        .row.mb-4
      .tarjeta.color-acento-botones.a1.p-4
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico2.png' alt='AvatarTop')
        p.text-center.p-3 Debe haber una promesa clara, punto a punto e incondicional de pagar una cierta cantidad a una persona específica.
      .tarjeta.color-acento-botones.a1.p-4
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico3.png' alt='AvatarTop')
        p.text-center.p-3.mb-5 Debe ser dibujado y firmado por el fabricante.
        .row.mb-3
      .tarjeta.color-acento-botones.a1.p-4
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico4.png' alt='AvatarTop')
        p.text-center.p-3.mb-5 Debe estar debidamente sellado.
        .row.mb-5
      .tarjeta.color-acento-botones.a1.p-4
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico5.png' alt='AvatarTop')
        p.text-center.p-3.mb-5 Identifica específicamente el nombre del fabricante y el beneficiario.
      .tarjeta.color-acento-botones.a1.p-4
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico6.png' alt='AvatarTop')
        p.text-center.p-3.mb-4 La cantidad a pagar debe ser cierta, escrita tanto en cifras como en letras. 
        .row.mb-4
      .tarjeta.color-acento-botones.a1.p-4.hidd
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center John Doe
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
    p Estas son las partes que intervienen en el pagaré:
    .row.mb-5.mt-4
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mt-4
                .col-lg-7
                  img(src='@/assets/curso/tema3/img3.svg' alt='AvatarTop')
              h4.text-center.mt-4.mb-5 Emisor
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Emisor
              p.text-center.mb-5 Persona que se compromete a pagar la suma de dinero establecida en el pagaré en la fecha de vencimiento indicada
              .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mt-4
                .col-lg-7
                  img(src='@/assets/curso/tema3/img4.svg' alt='AvatarTop')
              h4.text-center.mt-4.mb-5 Beneficiario
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Beneficiario
              p.text-center.mb-5 También conocido como el tenedor, es quien cobrará la suma de dinero estipulada en el documento una vez abonado por el emisor.
              .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mt-4
                .col-lg-7
                  img(src='@/assets/curso/tema3/img5.svg' alt='AvatarTop')
              h4.text-center.mt-4.mb-5 Garante
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Garante
              p.text-center.mb-5 En ocasiones suele aparecer una tercera persona que funciona como «avalista» de que el emisor puede realizar el pago estipulado en el pagaré.
              .row.mb-5
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Comunicación de la consolidación del negocio  
    p En los ambientes corporativos, es necesario consolidar las herramientas de comunicación empresariales internas, con el fin de fomentar el trabajo en equipo y la resolución de problemas. El reto es entonces consolidar sus múltiples y dispares herramientas de comunicación en una única fuente de verdad en toda la organización, que pueda transformar los equipos de trabajo en una fuente inagotable de colaboración, creatividad y éxito, para que puedan dirigir la energía mental de los empleados hacia actividades que generen ingresos, y para lograrlo se presentan las siguientes recomendaciones:
    .tarjeta.tarjeta--azul.p-4.mb-5.bag1
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0.mt-4
                h5 Menos tiempo perdido: 

                p.mt-4.mb-0 Reduzca la pérdida de tiempo de la transición entre diferentes herramientas, y su equipo pasará menos tiempo buscando información y más tiempo aplastando sus objetivos. Todos hemos pasado demasiado tiempo revisando correos electrónicos, mensajes, grabaciones de llamadas, documentos en papel y más, y sabemos la tensión de tiempo que puede suponer para todos. 
                p Esto puede significar la diferencia entre cumplir con los plazos y atrasarse drásticamente. Con esa fuga de tiempo eliminada, su equipo puede usar sus horas de trabajo de manera más productiva.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/img6.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0.mt-4
                h5 Mayores tasas de retención: 
                p.mt-4 Reconozca los talentos mas valiosos en su negocios, permita el intercambio de información fluido y centralizado entre ellos, esto aporta al trabajo en equipo, además implemente estrategias para retener a sus mejores empleados.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0.mt-4
                h5 Mayores niveles de compromiso: 

                p.mt-4 Con solo percibir un lugar de trabajo más colaborativo, los empleados se desempeñaron mejor y trabajaron más tiempo en tareas difíciles, tendrán niveles más altos de compromiso, niveles más bajos de fatiga y una tasa de éxito más alta. Empleados motivados trabajan juntos para cerrar tratos e impulsar mejores resultados.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0.mt-4
                h5 Dar cabida a una herramienta de comunicación consolidadas: 


                p.mt-4 Las herramientas de mensajería de correo electrónico, teléfono y equipo están aquí para quedarse. Todavía tiene sentido celebrar reuniones en persona, por ejemplo, porque son excelentes para tratar de resolver grandes problemas y tener discusiones complejas. Los sistemas de mensajería del equipo siempre serán la mejor manera de obtener actualizaciones rápidas o colaboración multifuncional. La consolidación de sus herramientas de comunicación no pretende ser una alternativa a estas herramientas. Más bien, es una oportunidad de trabajar con otras herramientas para una comunicación empresarial más rápida y fluida.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/img9.png', alt='Texto que describa la imagen')
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4

          p.mb-0 Al tomar todas las notas, documentos y decisiones de todas las herramientas y canalizarlas a un solo lugar, los empleados pueden acceder a esa información más rápidamente y hacer un seguimiento cuando lo necesiten. Cuando alguien puede consultar en una fuente centralizada de información para obtener contexto adicional sobre discusiones y proyectos en curso, le conduce a una mejor motivación y a un trabajo en equipo más eficaz.
      
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
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
  background-color: #F9F7EC
.tarjeta--boton
  background-color: #F6F6F6
.tarjeta--boton:hover
  background-color: #EDF8F3!important
.tarjeta--boton.color-primario:hover *
  color: #12263F
.tarjeta.color-acento-botones.a1
  background-color: #D9E2EA
.tarjeta-flip.color-secundario .tarjeta-flip__contenido
  background-color: #F9F7EC
.tarjeta-flip.color-secundario .tarjeta-flip__img
  background-color: #F9F7EC
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFC631
.slyder-a__bullets__item--active
  background-color: #033F71!important
.slyder-a__bullets__item
  background-color: #89AAB8
  border: #89AAB8
.cajon.color-primario
  background-color: #DDE5EC
.tarjeta-flip.color-secundario .tarjeta-flip__contenido
  background-color: #F9F7EC!important
</style>
