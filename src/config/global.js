export default {
  global: {
    componenteFormativo: 'Propuestas de negocio y sus composiciones',
    descripcionCurso:
      'La creación de una propuesta de negocio es una experiencia completa de incertidumbre, algunas veces, lo que parece ser una noción ganadora no llega a alcanzar los logros. En este componente formativo se explica cómo hacer esa propuesta, los procesos de negociación, las bases, las técnicas y tácticas, y los procedimientos para obtener los resultados propuestos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Propuesta y técnicas de negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Radicación de solicitud del cliente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Formatos y procedimientos de la negociación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Solicitudes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Proceso de desembolso ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Pagaré y su composición   ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Instrucciones y autorizaciones ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Comunicación de la consolidación del negocio ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de negociaciones      ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Comunicación empresarial',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alas-Pumariño Miranda, E. (2014). El arte de Negociar. Biblioteca ISAE. ',
      link:
        'https://isae.metabiblioteca.org/cgi-bin/koha/opac-detail.pl?biblionumber=2194 ',
    },
    {
      referencia:
        'Llamazares García-Lomas, O. (2004). Aspectos clave de la Negociación Internacional. ',
      link:
        'https://issuu.com/ricardoanguloleon/docs/aspectos_claves_para_la_negociaci_n',
    },
    {
      referencia: 'Cohen, H. (1988). Todo es negociable. Planeta.  ',
      link: 'https://www.academia.edu/11169755/TODO_ES_NEGOCIABLE',
    },
  ],
  glosario: [
    {
      termino: 'Competencias',
      significado:
        'Es un hecho de hacer negocios. Las empresas ven competencia en forma de precio, calidad, diseño, ventas, ubicación y casi todos los procesos comerciales.',
    },
    {
      termino: 'Comunicación',
      significado:
        'La forma en que nos comunicamos con los demás es una parte tan habitual de nosotros que rara vez nos detenemos a pensar en ella.',
    },
    {
      termino: 'Desembolso',
      significado:
        'Diversas operaciones o transacciones que realiza una organización en el ámbito comercial y empresarial, se encuentran los desembolsos que se pueden realizar con el objetivo de obtener bienes o servicios.',
    },
    {
      termino: 'Formatos',
      significado:
        'Estructura que contiene información precisa y específica que se solicita previamente para algún fin determinado.',
    },
    {
      termino: 'Negociación',
      significado:
        'Es un método por el cual las personas resuelven las diferencias, es un proceso mediante el cual se llega a un compromiso o acuerdo evitando discusiones y disputas.',
    },
    {
      termino: 'Políticas',
      significado:
        'Diversas alternativas o estrategias que se realizan tras el cumplimiento de un objetivo.',
    },
    {
      termino: 'Propuesta empresarial',
      significado:
        'Establece los procedimientos y métodos que les permitirán lograr sus objetivos deseados a ambas partes que negocian.',
    },
    {
      termino: 'Técnicas',
      significado:
        'Técnicas Las habilidades de negociación son esenciales en los negocios, ya sea propietario de una pequeña empresa, empleado o contratista independiente.',
    },
  ],
  complementario: [
    {
      tema: 'Propuesta y técnicas de negociación',
      referencia:
        'Alas-Pumariño Miranda, E. (2014). <strong>El arte de Negociar. El negociador a tiempo completo</strong>. ',
      tipo: 'Libro',
      link:
        'https://docplayer.es/5958893-Enrique-de-las-alas-pumarino-miranda-el-arte-de-negociar-el-negociador-a-tiempo-completo.html',
    },
    {
      tema: 'Propuesta y técnicas de negociación',
      referencia:
        'Camino del Networker. (2018). <strong>El arte de negociar y persuadir por Allan Pease.</strong> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PJ33eCLS8XY ',
    },
    {
      tema: 'Técnicas de negociaciones',
      referencia:
        'Dasí, F. y Martinez-Vilanova, R. (2009). <strong>Técnicas de negociación: un método práctico. Google Scholar.</strong> ',
      tipo: 'Libro',
      link:
        'https://books.google.ca/books?id=zbgoNnlWHCYC&lpg=PA221&ots=SOym0vIGxw&dq=T%C3%A9cnicas%20de%20negociaci%C3%B3n%20.pdf&lr&hl=es&pg=PA221#v=onepage&q&f=false',
    },
    {
      tema: 'Técnicas de negociaciones',
      referencia:
        'Hernández Acosta, J. (2016). <strong>La propuesta de negocio.</strong> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/F86sB2ZK7vM',
    },
    {
      tema: 'Competencias',
      referencia:
        'CIDAC. (2000). <strong>¿Por qué la competencia importa?</strong> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=S331j1qFipw ',
    },
    {
      tema: 'Comunicación empresarial',
      referencia:
        'Yo empresa. (2020). <strong>La comunicación de las empresas</strong>. [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ocPzNOj1t_0  ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Francisco Charà Carrero',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y Los Servicios.',
      },
      {
        nombre: 'Giovanna Andrea Escobar',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y Los Servicios.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Sofía Suarez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Daniel Polanco'],
        cargo: 'Validación diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
