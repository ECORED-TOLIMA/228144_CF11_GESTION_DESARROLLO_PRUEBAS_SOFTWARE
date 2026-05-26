export default {
  global: {
    Name: 'Calidad de <em>software</em>: estándares, modelos y metodologías',
    Description:
      'Este componente desarrolla competencias para asegurar la calidad del <em>software</em> conforme a estándares y buenas prácticas de la industria. Aborda fundamentos, modelos y normas como ISO/IEC, IEEE y CMMI. Integra enfoques tradicionales y ágiles, métricas, documentación técnica y herramientas de apoyo para planificar, verificar y mejorar procesos en proyectos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de calidad del <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de calidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión de procesos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estándares de calidad para el desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Familia ISO/IEC 25000 (SQuaRE)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelo ISO/IEC 15504',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estándares IEEE',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelos de calidad de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'CMMI (Capability Maturity Model Integration)',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Metodologías de desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Metodologías tradicionales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Metodologías ágiles',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Calidad en entornos ágiles vs tradicionales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Disciplinas de calidad de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Personal Software Process (PSP)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Team Software Process (TSP)',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Administración del proceso personal de construcción de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Fundamentos y principios',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Niveles del PSP (PSP0 a PSP3)',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Instrumentos de control',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Método PROBE',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Estadísticas aplicadas',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Herramientas informáticas de apoyo',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Documentación en procesos de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Estándares de documentación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Formatos y plantillas',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Gestión documental',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA11_228144_DU.pdf',
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
  glosario: [
    {
      termino: 'Análisis estático',
      significado:
        'evaluación del código fuente (sin ejecutarlo) para detectar problemas estructurales, vulnerabilidades o incumplimiento de estándares.',
    },
    {
      termino: 'Densidad de defectos',
      significado:
        'indicador que mide la cantidad de fallos encontrados en relación al tamaño del software (por ejemplo, defectos por cada mil líneas de código).',
    },
    {
      termino: 'Deuda técnica',
      significado:
        'riesgo acumulado por decisiones de desarrollo rápidas o de baja calidad que requieren refactorización futura para evitar fallos.',
    },
    {
      termino: 'Mantenibilidad',
      significado:
        'característica de calidad que evalúa la facilidad con la que el software puede ser modificado, incluyendo modularidad y testabilidad.',
    },
    {
      termino: 'SQuaRE (ISO 25000)',
      significado:
        'familia de estándares internacionales para la especificación y evaluación de los requisitos de calidad del producto software.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad técnica de conectar un requisito con su código, pruebas ejecutadas y defectos asociados a lo largo del ciclo de vida.',
    },
    {
      termino: 'UAT (User Acceptance Testing)',
      significado:
        'pruebas de validación final realizadas por los usuarios para confirmar que el sistema cumple con sus expectativas de negocio.',
    },
    {
      termino: 'Validación',
      significado:
        'proceso que asegura que el producto construido es el correcto y satisface las necesidades reales del usuario final.',
    },
    {
      termino: 'Verificación',
      significado:
        'proceso que evalúa si el producto se está construyendo correctamente de acuerdo con las especificaciones técnicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Humphrey, W. S. (1995). <em>A discipline for software engineering.</em> Addison-Wesley.',
    },
    {
      referencia:
        'Humphrey, W. S. (2000). <em>Introduction to the Team Software Process.</em> Addison-Wesley.',
    },
    {
      referencia:
        'Institute of Electrical and Electronics Engineers (IEEE). (2008). <em>IEEE Std 730-2002: IEEE standard for software quality assurance plans.</em> IEEE.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
