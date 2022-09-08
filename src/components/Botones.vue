<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-between
    .col-md-3.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/tema4/img8.svg', alt='Estudio de mercados')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-9.col-lg-8(:style="{'z-index':'2'}")
      .tarjeta-botones1.bg-acento-botones.p-3(v-if="selected === 0")
        p.mb-0 <strong>Haga su tarea:</strong> antes de iniciar negociaciones comerciales, siempre investigue. Debe sentarse a la mesa y comprender todo lo que pueda sobre la empresa con la que está tratando y la industria en la que se encuentran. Aprenda los términos y conceptos principales que es probable que usen para que la jerga no lo confunda ni lo intimide. Pero si surge algo que no entiende, está bien pedir una aclaración.
        p.mb-0 Familiarícese con sus productos o servicios, su industria y sus competidores, para tener idea de sus fortalezas y debilidades, y le ayudará a predecir lo qué es negociable. Las redes sociales son una gran herramienta para este tipo de investigación.
        p Es importante saber lo que trae a la mesa y por qué preferirían hacer negocios con usted. El dinero no siempre es el factor principal. Tal vez sea más fácil trabajar con usted porque está cerca o es más receptivo. No tenga miedo de promover las cosas que lo distinguen.

      .tarjeta-botones2.bg-acento-botones.p-3(v-else-if="selected === 1")
        p.mb-0 <strong>No se quede anclado:</strong> ser el primero en decir un número puede ser una buena manera de tomar el control de una negociación comercial. Esa primera figura a menudo se convierte en un punto de referencia para el resto de la conversación. Algunos negociadores abrirán con un número extremo, ya sea muy alto o muy bajo. Esperan que la otra parte se ancle por ello.
        p Si descubre que tiene que alejar a alguien de su posición original, y eso lo hace sentir incómodo, se ha anclado. Esta puede ser una táctica de confrontación y puede que no se adapte a su estilo personal, pero, incluso si no quieres intentarlo, debes ser consciente de ello cuando alguien intente anclarte.

      .tarjeta-botones4.bg-acento-botones.p-3(v-else-if="selected === 2")
        p.mb-0 <strong>Sepa dónde puede comprometerse:</strong>  como propietario de una pequeña empresa, es posible que necesite el trato más que su socio negociador. No deje que el orgullo se interponga en el camino. Decida qué necesita del trato para que valga la pena y prepárese para ceder en todo lo demás. Puede hacer esto estratégicamente.
        p Identifique oportunidades para ceder en sus términos menos valorados y comuníquelo claramente cuando lo haga. Es más probable que correspondan con sus propias concesiones.

      .tarjeta-botones3.bg-acento-botones.p-3(v-else-if="selected === 3")
        p.mb-0 <strong>Apunte a un ganar-ganar (sé amable):</strong> negociar no se trata de intentar dominar a un oponente, recuerde que está tratando de encontrar un resultado rentable que beneficie a todos. Se ha demostrado científicamente que una mentalidad de ganar-ganar mejora las negociaciones comerciales. Cuando las personas cooperan, sus cerebros liberan oxitocina, una hormona que los hace confiar y compartir.
        p Por otro lado, una persona que pierde una negociación agresiva se siente agredida y su cerebro libera cortisol. Esto los vuelve negativos y potencialmente resentidos, lo que perjudica las posibilidades de llegar a buenos negocios, recuerde siempre que ambas partes pueden ganar y no subestimes el poder de ser amable.

      .tarjeta-botones5.bg-acento-botones.p-3(v-else-if="selected === 4")
        p.mb-0 <strong>Tener un plan B:</strong> tenga presenta qué hará si las negociaciones comerciales fallan. Tenga una posición fuerte y realista al respecto desde el principio. Una vez que tenga un plan B, guárdelo para usted. Si la otra parte sabe demasiado sobre sus alternativas, sabrá cuánto puede presionar.
        p Siempre que conozca la fuerza de su posición y respete a la otra parte, tendrá un buen comienzo. 



</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,

    botones: [
      {
        img: require('@/assets/curso/botones-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones-ico-01-b.svg'),
        pos_x: '6%',
        pos_y: '8%',
        size: '43%',
      },
      {
        img: require('@/assets/curso/botones-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones-ico-02-b.svg'),
        pos_x: '30%',
        pos_y: '18%',
        size: '46%',
      },
      {
        img: require('@/assets/curso/botones-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones-ico-03-b.svg'),
        pos_x: '43%',
        pos_y: '39%',
        size: '41%',
      },
      {
        img: require('@/assets/curso/botones-ico-04-a.svg'),
        img_h: require('@/assets/curso/botones-ico-04-b.svg'),
        pos_x: '37%',
        pos_y: '59%',
        size: '46%',
      },
      {
        img: require('@/assets/curso/botones-ico-05-a.svg'),
        img_h: require('@/assets/curso/botones-ico-05-b.svg'),
        pos_x: '10%',
        pos_y: '70%',
        size: '42%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: boton.size,
        'padding-top': boton.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: contain
  background-repeat: no-repeat
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out
  opacity: 0
.tarjeta-botones
  z-index: 3
  border: 2px solid #26CCDA
  display: block
  position: relative
.tarjeta-botones1
  z-index: 3
  border-left: 4px solid #00F3BE
  background-color: #E4FEF8
  display: block
  position: relative
.tarjeta-botones2
  z-index: 3
  border-left: 4px solid #92BFB1
  background-color: #D4DDDA
  display: block
  position: relative
.tarjeta-botones4
  z-index: 3
  border-left: 4px solid #033F71
  background-color: #B7C3CD
  display: block
  position: relative
.tarjeta-botones3
  z-index: 3
  border-left: 4px solid #FFC631
  background-color: #E9DEC0
  display: block
  position: relative
.tarjeta-botones5
  z-index: 3
  border-left: 4px solid #636363
  background-color: #E8E8E8
  display: block
  position: relative
.tarjeta-botones1:before
  content: ""
  display: block
  top: 50%
  left: -2%
  width: 12%
  height: 2px
  position: absolute
  background: #26CCDA
  transform: translate(-85%)
  z-index: -1
.tarjeta-botones5:before
  content: ""
  display: block
  top: 50%
  left: -2%
  width: 12%
  height: 2px
  position: absolute
  background: #636363
  transform: translate(-85%)
  z-index: -1
.tarjeta-botones2:before
  content: ""
  display: block
  top: 50%
  left: -2%
  width: 12%
  height: 2px
  position: absolute
  background: #92BFB1
  transform: translate(-85%)
  z-index: -1
.tarjeta-botones4:before
  content: ""
  display: block
  top: 50%
  left: -2%
  width: 12%
  height: 2px
  position: absolute
  background: #033F71
  transform: translate(-85%)
  z-index: -1
.tarjeta-botones3:before
  content: ""
  display: block
  top: 50%
  left: -2%
  width: 12%
  height: 2px
  position: absolute
  background: #FFC631
  transform: translate(-85%)
  z-index: -1
.tarjeta-botones:before
  content: ""
  display: block
  top: 50%
  left: -2%
  width: 12%
  height: 2px
  position: absolute
  background: #26CCDA
  transform: translate(-85%)
  z-index: -1

@media (max-width: $bp-max-md)
  .tarjeta-botones:before
    display: none
</style>
