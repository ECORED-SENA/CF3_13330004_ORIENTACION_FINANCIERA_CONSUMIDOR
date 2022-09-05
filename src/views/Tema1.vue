<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Propuesta y técnicas de negociación
    .row
      .col-lg-7
        p El proceso de negociación puede realizarse utilizando diversas herramientas, la propuesta es una de ellas, y con esta se establecen los procedimientos y métodos que permitirán a las partes que negocian lograr los objetivos deseados. De esta manera se estabilizan los intereses de las partes, en pocas palabras, lo que quiere una parte y lo que quiere la otra. Una vez que se comprendan justamente los intereses a través de una comunicación eficaz debe ser plasmada en una propuesta, la cual será la base para obtener una negociación exitosa.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img1.png', alt='Texto que describa la imagen')
    .row.bg1
      .row.mt-4
        .col-lg-3(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img2.png', alt='Texto que describa la imagen')
        .col-lg-9    
          p Ganar tantas propuestas como se pueda es vital para el crecimiento del negocio. Pero, hay que ser realistas, no se pueden ganar todas. Al mismo tiempo, hay cosas simples que se  puede hacer para aumentar las probabilidades a favor, parte del reto  es reconocer que realmente se tiene el control sobre si se cierra el trato o no, pues con una investigación adecuada y un buen enfoque de las propuestas, es probable que se obtenga más clientes, para esto es necesario que se descubra el verdadero significado de lo que se busca, antes de comenzar a escribir la propuesta, probablemente haya una reunión con el cliente por teléfono o en persona buscando averiguar la verdadera razón por la que el cliente quiere comprar. Solo cuando se haya resuelto esta razón, todo lo demás encaja en su lugar. 
          p Si se profundiza lo suficiente y se llega a los incentivos principales, los próximos pasos se darán naturalmente. Al igual que en medicina, tan pronto como se sepa el diagnóstico correcto, se puede prescribir un tratamiento adecuado. En algún caso, los clientes podrían, de hecho, necesitar algunas mejoras en su sitio web o alguna capacitación para su equipo de ventas. Pero, si se toma su primera respuesta, nunca se sabrá. Averiguar siempre la verdadera razón preguntando en la reunión.
      .row.justify-content-center.mt-4
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img3.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La propuesta se gana y se pierde en la introducción, solo se tiene una oportunidad de causar una primera impresión y la introducción en la propuesta es una oportunidad. Por lo general, se lee correctamente y establece el tono para el resto de la propuesta. Si la introducción es un éxito, el resto es fácil.     
          p.mt-2 La mejor práctica para escribir una introducción efectiva se reduce a un simple consejo: utilizar las palabras del cliente y simplemente describir el problema que se enfrenta. ¿Recordar la parte en la que se descubrió exactamente lo que se quería? Ahora, extraer esas palabras y repetirlas al cliente que leerá la propuesta, se debe ser claro sobre lo que se está proporcionando. Solo se debe tener en cuenta que no se debe hablar de si mismo, la presentación no es el lugar para eso.
      p La propuesta comercial se caracteriza por tres P, que son: el enunciado del Problema, la solución Propuesta y el Precio, es crucial explicar claramente cómo se sugiere resolver el problema del cliente, para eso tener presente las siguientes recomendaciones:
    .tarjeta.tarjeta--azul.p-4.mb-5.bag1(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0.mt-4
                p En proyectos técnicos a gran escala, esto se puede dividir en un documento separado llamado declaración de trabajo. Sin embargo, en la mayoría de los casos, solo puede ser detallado en lo que va a proporcionar. Prevendrá la extensión del alcance, los desacuerdos con los clientes y mantendrá la relación sólida ya que todos saben cuál es su posición.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img4.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0
                p Incluya prueba social, esto es especialmente relevante cuando se trata de un nuevo cliente que todavía no necesariamente sabe lo que puede hacer, debe probarle y demostrar que puede hacer lo que dice que hará:
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Cuanto menos le conozcan, más pruebas sociales necesitará como testimonios y fotos de antes y después, hasta estudios de casos e historias de clientes.         
                  li 
                    i.fas.fa-angle-right
                    | Cuanto más lo conozca un cliente y menor sea el riesgo de comprar, menos prueba social necesitará.
                            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0
                p Dígale al cliente qué hacer a continuación, es muy importante que explique qué sucede a continuación y cómo deben proceder. Hable en términos simples lo que deben hacer a continuación. Si no hace esto, estarán dando vueltas preguntándose cuáles son los próximos pasos y puede generar dudas en su mente.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img6.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0
                p Facilite la firma y el pago, utilice firmas digitales donde pueda y observe cómo el ciclo de ventas se acelera drásticamente. La mayoría de los programas de propuestas tienen esto incorporado, donde solo deben escribir el nombre y presionar un botón. El beneficio es que la propuesta se convierte en parte del contrato y contiene los términos, los precios y los servicios que brindará, protegiéndole a usted y al cliente de problemas de comunicación en el futuro y mantiene la relación en terreno sólido.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0
                p Incluya los términos y condiciones, mantenga siempre el contrato y los términos y condiciones como parte de la propuesta y hágalos firmar juntos, esto los une. Si los pone por separado, es posible que tenga términos genéricos en el contrato que podrían causar confusión.

              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/1.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0
                p Cuando el contenido de la propuesta se utiliza como base del acuerdo, es mucho más claro para todos los involucrados, pero lo más importante, para el cliente. El contrato se utiliza entonces además de la propuesta. Si está trabajando con empresas más grandes, probablemente deba ser flexible con esto, porque el departamento legal podrá solicitar otros lineamientos. Sin embargo, en las pequeñas empresas, es recomendable mantenerlos juntos.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img8.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.mt-4
              .col-md-6.mb-4.mb-md-0
                p Enviar la propuesta rápidamente es muy importante, tiene un 25% más de probabilidades de ganar el trato si envía la propuesta dentro de las primeras 24 horas. Además, si se firma, tardará en promedio cuatro días antes que si tarda solo 48 horas en enviarlo.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img9.png', alt='Texto que describa la imagen')
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Radicación de solicitud del cliente
    .row
      .col-lg-7
        p Una propuesta comercial es un documento que se envía a un cliente potencial para convencerlo de que dé un trabajo o contrato en particular. Es diferente de un plan de negocios, que describe toda su idea de negocio antes de comenzar.
        p En algunos casos, un cliente presentará una solicitud de propuesta, pidiendo que se exponga por qué es la mejor empresa para el trabajo, esto se llama una propuesta comercial solicitada; en otros casos, se puede instigar el trabajo enviando una propuesta comercial no solicitada a un cliente potencial o puede ser algo intermedio entre estos dos, donde la idea surge en una conversación y el cliente pide que se envíe una propuesta.
        p Para que una propuesta comercial ayude a obtener un trabajo por el que se está ofertando, generalmente deberá incluir los aspectos claros del negocio. Sin embargo, el cliente puede haber establecido pautas claras sobre qué formato de propuesta aceptará.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img10.png', alt='Texto que describa la imagen')
    p.mt-4 Unos aspectos claros para tener en cuenta al momento de radicar la propuesta de negocio son:
    .row.justify-content-center.mt-4
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img13.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.aq.p-3(x="2%" y="7%" numero="+")
            .h3.mb-2 Página de título
            p Incluya una página de título para presentar el negocio y mantenga el documento limpio y ordenado, dando una buena primera impresión de la forma en que hace negocios. Esto debe estar bien diseñado, así que incluya algunas imágenes y texto que se dirija al cliente.
          .tarjeta.color-acento-botones.aq.p-3(x="2%" y="27%" numero="+")
            .h3.mb-2 Carta de presentación
            p Trátelo como una introducción, en lugar de entrar en frío, incluya una carta que describa su negocio y su propuesta, manteniendo un tono amistoso y positivo.
          .tarjeta.color-acento-botones.aq.p-3(x="2%" y="47%" numero="+")
            .h3.mb-2 Índice
            p Deje que el cliente potencial vea de un vistazo lo que está incluído en el documento y, si es posible, haga clic en esta sección para que pueda saltar fácilmente a cualquier sección que quiera volver a leer.
          .tarjeta.color-acento-botones.aq.p-3(x="2%" y="67%" numero="+")
            .h3.mb-2 Resumen ejecutivo
            p Es un texto breve, convirtiéndolo en una descripción general de alto nivel del problema, el resultado esperado, una descripción general de la solución y un llamado a la acción. Asegúrese de ser claro y conciso. Si usa un término que sabe que tendría que explicar a sus amigos que no están en la industria, intente reformularlo para mayor claridad.
          .tarjeta.color-acento-botones.aq.p-3(x="2%" y="87%" numero="+")
            .h3.mb-2 Propuesta
            p Esta es la parte donde se identifica el vacío que va a llenar. ¿Cuál es el problema del cliente y cómo va a solucionarlo? Es un buen lugar para resumir los objetivos, no elabore demasiado el negocio, manténgalo específico para su propuesta comercial en sí misma, y cómo beneficia a su cliente.
          .tarjeta.color-acento-botones.aq.p-3(x="98%" y="87%" numero="+")
            .h3.mb-2 Acuerdo y llamado a la acción
            p Incluya una sección en la que el cliente pueda aceptar formalmente la propuesta, con un suave llamado a la acción para animarlo a firmar.
          .tarjeta.color-acento-botones.aq.p-3(x="98%" y="67%" numero="+")
            .h3.mb-2 Términos y condiciones
            p Utilice esta sección para exponer lo que el cliente puede esperar de usted y de su negocio al aceptar su propuesta. Este es un buen lugar para establecer expectativas en cuanto a las fechas de pago y entrega.
          .tarjeta.color-acento-botones.aq.p-3(x="98%" y="47%" numero="+")
            .h3.mb-2 Costos
            p Esta sección autoexplicativa debe informar al cliente cuánto costará poner en práctica su propuesta y cuál espera que sea el retorno. Es importante encontrar el equilibrio entre sobreestimar (y asustar al cliente) y subestimar (y decepcionar al cliente).
          .tarjeta.color-acento-botones.aq.p-3(x="98%" y="27%" numero="+")
            .h3.mb-2 ¿Por qué contratarnos?
            p Esta es su oportunidad de vender su negocio como el mejor para ese trabajo. Informe al cliente sobre su experiencia de trabajar en trabajos similares, utilizando estudios de casos. También se tranquilizarán al leer las biografías de la persona o personas con las que trabajarán, así como los testimonios positivos de los clientes. 
          .tarjeta.color-acento-botones.aq.p-3(x="98%" y="7%" numero="+")
            .h3.mb-2 Servicios y metodología
            p Aquí es donde entra en los detalles más finos de qué productos o servicios obtendrá el cliente de su propuesta y cuándo los obtendrá. Sea claro y detallado sobre lo que está ofreciendo, así como sobre cómo va a hacer el trabajo y cómo será responsable. Ambas partes deben poder consultar el documento durante el trabajo para asegurarse de que se está haciendo lo acordado.
            p Luego, elabore un cronograma para darle vida a su propuesta para el cliente y concéntrese en desarrollar un plan de entrega realista. Más tiempo siempre es mejor para usted, pero si su cliente tiene una fecha específica en mente (tal vez esté lanzando un nuevo producto y su propuesta lo respaldará), entonces asegúrese de trabajar para eso.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Formatos y procedimientos de la negociación
    .row
      .col-lg-7
        p La negociación es útil para lograr objetivos tanto individuales como colectivos, todo profesional debe familiarizarse con el proceso de negociación adecuado, y las habilidades de negociación se pueden desarrollar con los conocimientos, la tutoría y la capacitación adecuados.
        .row.p-3.colort1
          p La negociación es un proceso estratégico para llegar a un acuerdo entre dos o más personas, equipos o grupos. Durante un proceso de negociación, se aborda un tema, se resuelve un problema y se deriva una conclusión. Las acciones se basan en lo acordado en la negociación. Tener grandes habilidades de negociación es una ventaja.
        p.mt-3 Se debe negociar en muchas situaciones de la vida personal y profesional diaria, entre estas se incluyen:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.colf
            | Negociación de un salario con una contratación potencial.
          li 
            i.fas.fa-angle-right.colf
            | Pedir al supervisor unos días libres y planificar el horario de trabajo en consecuencia.
          li 
            i.fas.fa-angle-right.colf
            | Negociar algo de tiempo para entretenimiento cuando un hijo se esté preparando para un examen competitivo.
          li 
            i.fas.fa-angle-right.colf
            | Negociar una fecha límite del proyecto que asignó un jefe.
          li 
            i.fas.fa-angle-right.colf
            | Negociación del precio de una propiedad en la que se desea invertir.

      
      
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img12.png', alt='Texto que describa la imagen')
    .row.mt-4.bg2
      .row.justify-content-center
        p.text-center También es importante que se conozca las cinco (5) etapas del proceso de negociación:
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5.mt-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img13.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-botones.aq2.p-3(x="9%" y="120%" numero="+")
              .h5.mb-2 Preparar
              p La investigación es un componente básico del proceso de negociación. Mientras se prepara, debe sopesar ambos lados, identificar las fortalezas y debilidades de ambos lados y luego determinar sus estrategias de negociación. Defina el tipo de interacción que desea tener y el vínculo que pretende formar con la otra parte.
            .tarjeta.color-acento-botones.aq2.p-3(x="50%" y="120%" numero="+")
              .h5.mb-2 Oportunidad
              p En todo tipo de negociación, un trato es de suma importancia. Cada parte plantea sus demandas y busca obtener beneficios. Durante el proceso de negociación, es imperativo mantenerse bajo control, no pierda la calma ni se emocione durante las negociaciones. Para lograr los resultados deseados, entrénese para ser sereno y diplomático.
            .tarjeta.color-acento-botones.aq2.p-3(x="29%" y="120%" numero="+")
              .h5.mb-2 Intercambio de información
              p.mb-0 Esta implica descubrir y crear valor para el proceso de negociación. También ayuda en la construcción de una buena relación.
              p Ambas partes deben explicar sus intereses e intercambiar sus puntos de vista para lograr los resultados deseados.
            .tarjeta.color-acento-botones.aq2.p-3(x="71%" y="120%" numero="+")
              .h5.mb-2 Concluir
              p Una vez que se haya llegado a una solución que sea aceptable para ambas partes, estas deben agradecerse mutuamente, deben confirmar que se han asegurado los intereses y que el resultado ha sido exitoso. Un buen resumen y un cierre amistoso siempre conducen a relaciones gratificantes a largo plazo.
            .tarjeta.color-acento-botones.aq2.p-3(x="91%" y="120%" numero="+")
              .h5.mb-2 Ejecutar
              p Todos los tipos de negociación conducen a una implementación efectiva. Los pasos para implementar el resultado negociado deben señalarse categóricamente. A menudo, en el contexto corporativo, se celebra un contrato por escrito para confirmar la intención de ejecución.
    p.mt-3 Existen barreras que pueden obstaculizar una buena negociación, se debe identificarlas y tomar acciones de mejora en caso de ser necesario; estas son:                                                 
    .row
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img14.png', alt='Texto que describa la imagen')
      .col-lg-7.mt-3
        ul.lista-ul
          li 
            i.fas.fa-angle-right.colf
            | Tomar las negociaciones como batallas personales y centrarse demasiado en ganar.
          li 
            i.fas.fa-angle-right.colf
            | Mantener una actitud de sabelotodo y no hacer preguntas genuinas.
          li 
            i.fas.fa-angle-right.colf
            | Ser hostil y pensar negativamente durante el proceso de negociación.
          li 
            i.fas.fa-angle-right.colf
            | Incapacidad para comprender los problemas y posiciones de la otra parte en el proceso de negociación.
          li 
            i.fas.fa-angle-right.colf
            | Entrar en una negociación sin preparación ni información y sin tener respuestas creíbles a las preguntas formuladas.
          li 
            i.fas.fa-angle-right.colf
            | Ser de mal genio, sarcástico, carecer de habilidades para escuchar y criticar demasiado.
    p.mt-3 Se debe considerar la negociación como un rompecabezas que debe resolverse en lugar de una batalla que se debe ganar y así es que se debe desarrollar las siguientes habilidades:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico1.png' alt='AvatarTop')
        p.text-center.p-4.mb-4 Escuche con atención y sea empático.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico2.png' alt='AvatarTop')
        p.text-center.p-3 Asegúrese de que la negociación sea una situación en la que todos ganen o que genere frustración.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico3.png' alt='AvatarTop')
        p.text-center.p-3 En lugar de centrarse en comprometerse, dirija sus esfuerzos para lograr su interés.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico4.png' alt='AvatarTop')
        p.text-center.p-3 Trabaje en tus habilidades sociales y habilidades de comunicación.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico5.png' alt='AvatarTop')
        p.text-center.p-3 Practique sus habilidades y estrategias de negociación con amigos y familiares.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico6.png' alt='AvatarTop')
        p.text-center.p-3.mb-5 Aprenda a aceptar los errores y a mejorarlos.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico7.png' alt='AvatarTop')
        p.text-center.p-3 Conozca su valor genuino y aprenda a decir no cuando sea necesarios.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico8.png' alt='AvatarTop')
        p.text-center.p-2 Trate la negociación como una presentación. Mejora el lenguaje corporal para que te dé una ventaja ganadora.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico9.png' alt='AvatarTop')
        p.text-center.p-2.mb-0 Sea inteligente y estratégico. Se dice que déjalos ganar la primera negociación y, por lo general, estarán lo suficientemente felices como para dejarte ganar dos o tres más.
      .tarjeta.color-acento-botones.p-4.margint
        .row.justify-content-center.mb-0
          .col-7
            img.mtn(src='@/assets/curso/tema1/ico10.png' alt='AvatarTop')
        p.text-center.p-3 Defina sus fortalezas personales y utilícelas positivamente para impresionar y convencer.         
        .row.mb-4

</template>

<script>
export default {
  name: 'Tema1',
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
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFC631
.slyder-a__bullets__item--active
  background-color: #033F71!important
.slyder-a__bullets__item
  background-color: #89AAB8
  border: #89AAB8
.img-infografica__card, .img-infografica-b__card
  width: 400px
  @media screen and ( max-width: 420px)
    width: 100%
.tarjeta.color-acento-botones
  background-color: #D9E2EA
</style>
