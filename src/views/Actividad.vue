<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Calidad de <em>software.</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre los fundamentos, estándares y metodologías, basado en los procesos que garantizan la calidad en el ciclo de vida del desarrollo de <em>software.</em>',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cómo se define la calidad del producto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El grado en que el modo de trabajo es consistente y controlado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El grado en que el <em>software</em>, como artefacto final, cumple requisitos y expectativas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La inversión necesaria para evitar que los defectos nazcan.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El éxito que depende de los esfuerzos individuales del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que la calidad del producto se centra en lo que el usuario recibe y usa, asegurando que el artefacto final sea apto para su propósito.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el enfoque principal del aseguramiento de calidad (QA)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Detectivo y correctivo, orientado al producto final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Encontrar defectos en el <em>software</em> antes de que llegue a producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Preventivo, orientado al proceso para evitar que los defectos nazcan.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ejecución de pruebas manuales y automatizadas únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identifica que el QA busca hacer que el proceso sea capaz de producir calidad de manera intrínseca, evitando la creación de fallos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'En el marco de Verificación y Validación (V&V), ¿qué pregunta busca responder la "Verificación"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '¿Se construye el producto correcto?',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '¿El <em>software</em> entrega valor en el contexto del negocio?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '¿Se construye el producto correctamente según las especificaciones?',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '¿El usuario final acepta el producto?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Comprende que la verificación evalúa la consistencia interna y el cumplimiento técnico con lo planeado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué categoría de costos de calidad se refiere a los defectos detectados una vez el <em>software</em> ya está en producción?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costos de prevención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costos de evaluación o detección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costos de fallos internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costos de fallos externos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Reconoce que los fallos externos son los más costosos y afectan directamente la reputación institución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Dentro del ciclo PHVA, ¿en qué etapa se implementan mejoras para eliminar las causas raíz de los problemas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planear.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hacer.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verificar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actuar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Entiende que actuar implica transformar el aprendizaje en acciones concretas de mejora para el sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué indicador mide la efectividad del proceso de pruebas comparando defectos hallados en producción vs. totales?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Densidad de defectos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Defectos escapados (<em>leakage</em>).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tasa de reapertura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cobertura de código.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! La información adquiere significado cuando interpreta este indicador para comprender qué tan robusto es tu pipeline de pruebas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué nombre recibe la estrategia de gestión que busca adelantar las actividades de prueba y detección a las etapas más tempranas?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantenimiento evolutivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Shift-left</em> (mover a la izquierda).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Regresión lineal simple.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestión por indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que la información adquiere significado cuando se interpreta en un contexto para comprender y actuar, reduciendo costos al detectar fallos lo antes posible.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'En la norma ISO/IEC 25010, ¿qué subcaracterística pertenece a la adecuación funcional?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comportamiento temporal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autenticidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Corrección funcional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modularidad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La corrección funcional asegura que el software entregue resultados precisos según lo solicitado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué nivel de capacidad en el modelo ISO/IEC 15504 (SPICE) indica que el proceso está definido y estandarizado?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel 1 – Ejecutado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel 2 – Gestionado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nivel 3 – Establecido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nivel 5 – Optimizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que alcanzar un proceso establecido significa que la organización ha formalizado su modo de operar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es la premisa fundamental del modelo CMMI?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las pruebas deben hacerse solo al final del ciclo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La calidad del producto es consecuencia directa de la calidad del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El éxito de los proyectos depende de los "héroes" individuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'CMMI es una herramienta técnica de ejecución de pruebas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Comprende que, para obtener resultados de calidad de forma repetible, se debe fortalecer el sistema de trabajo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'En CMMI, ¿qué caracteriza al Nivel 2 de Madurez (Gestionado)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los procesos son <em>ad hoc</em> o caóticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Existe mejora continua sistemática e innovación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los proyectos aplican procesos básicos y existen prácticas repetibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se utiliza el control estadístico de procesos en toda la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! En este nivel, la gestión básica permite que el éxito no dependa únicamente de esfuerzos individuales aislado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué metodología de desarrollo se basa en ciclos sucesivos que integran el análisis de riesgos como eje central?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo en cascada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modelo en V.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modelo espiral.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Kanban.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El modelo espiral utiliza el análisis de riesgos para guiar cada iteración del desarrollo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Según el comparativo de metodologías, ¿en qué momento se realizan las pruebas en Scrum?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al final del ciclo de vida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En cada <em>sprint.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'De forma permanente y automatizada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente durante el diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! En Scrum, la calidad se integra en cada ciclo corto para producir un incremento funcional probado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es el objetivo principal del Personal Software Process (PSP)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Certificar a la empresa en niveles de madurez.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la calidad y productividad individual del ingeniero de <em>software.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de tener un equipo de pruebas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir la estrategia de mercadeo del <em>software.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Reconoce que la disciplina personal es el punto de partida para la calidad colectiva y organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿En qué nivel de PSP se introduce la estimación de tamaño y esfuerzo basada en datos históricos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'PSP0.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'PSP1 – Planificación personal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'PSP2.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'PSP3.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! En el nivel PSP1 se sustituye la intuición por una base cuantitativa para mejorar la precisión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el rol en TSP encargado de supervisar las métricas de calidad?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Team leader.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Development manager.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Quality manager.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Support manager.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este rol es vital para asegurar que el equipo trabaje bajo estándares medibles y controlados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El método PROBE utilizado para estimaciones en PSP se basa en:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La intuición del desarrollador senior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El análisis estadístico de datos históricos personales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de botones de la interfaz de usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El presupuesto disponible del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! La información adquiere significado cuando utilizas datos pasados para predecir con exactitud el esfuerzo futuro.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'En el contexto de documentación técnica, ¿qué define el plan de aseguramiento de calidad (SQA Plan)?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El manual de instalación para el usuario final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cómo se controlará la calidad del código e integrarán pruebas en el ciclo de vida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El registro de tiempos de entrada y salida de los empleados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La lista de precios de las herramientas SonarQube y Jenkins.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El SQA Plan no es burocracia, sino una guía técnica que impacta directamente el pipeline de desarrollo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué elemento es esencial en un reporte de defectos para evitar pérdida de tiempo y confusiones? ',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nombre del gerente del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasos exactos de reproducción y versión del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El costo estimado del bug en dólares.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una lista de sugerencias de diseño estético.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Un reporte preciso permite la reproducibilidad del fallo, agilizando su corrección.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué herramienta técnica permite conectar una historia de usuario con su <em>commit, build</em> y caso de prueba?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis estático.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Densidad de defectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trazabilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Regresión lineal simple.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Comprende que la trazabilidad es el hilo conductor que asegura que cada requisito ha sido correctamente validado y liberado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
