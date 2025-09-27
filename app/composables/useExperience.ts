import type { CareerExperience } from "~/types/global";

const experience_EN: CareerExperience[] = [
  {
    position: "fullstack",
    company: {
      name: "Passmed",
    },
    start_date: new Date("06-12-2025"),
    //    end_date:
    type: "Part-time",
    content: {
      sections: [
        "Front-end and database design of system UI providing quality user experience and functionality.",
      ],
    },
  },

  // ===============

  {
    position: "fullstack",
    company: {
      name: "Neering SPA",
    },
    start_date: new Date("04-08-2024"),
    end_date: new Date("08-01-2025"),
    type: "Full-time",
    content: {
      sections: [
        "Led frontend development across multiple SPA and monolithic systems using Laravel, Vue 2/3, and Tailwind.",
        "Implemented a Node.JS scraper with Puppeteer and Tesseract to automate the retrieval of documents from official government websites, optimizing internal customs dispatch processes.",
        "Developed internal notification systems and automated, personalized email delivery, enhancing communication between users and system events.",
        "Integrated geographic visualizations using Mapbox.js to display addresses and routes.Optimized code and API performance, reducing load times and improving user experience.",
      ],
    },
  },

  // ===============

  {
    position: "research",
    company: {
      name: "UAT PUCV",
    },
    start_date: new Date("06-01-2023"),
    end_date: new Date("10-01-2023"),
    type: "Full-time",
    content: {
      sections: [
        "Conducted research on video game development using Unity and C#.",
      ],
    },
  },

  // ===============

  {
    position: "internship",
    company: {
      name: "UAT PUCV",
    },
    start_date: new Date("04-01-2023"),
    end_date: new Date("06-01-2023"),
    type: "Part-time",
    content: {
      sections: [
        "Implemented views using Bootstrap and handled requirements to improve the functionality of assigned projects.",
      ],
    },
  },
];

// ES ================================================================================

const experience_ES: CareerExperience[] = [
  {
    position: "fullstack",
    company: {
      name: "Passmed",
    },
    start_date: new Date("06-12-2025"),
    //    end_date:
    type: "Part-time",
    content: {
      sections: [
        "Lider en desarrollo front-end en la startup ‘Passmed’, diseñando e implementando las interfaces gráficas del sistema e integrando funcionalidades del back-end..",
      ],
    },
  },

  // ===============

  {
    position: "fullstack",
    company: {
      name: "Neering SPA",
    },
    start_date: new Date("04-08-2024"),
    end_date: new Date("08-01-2025"),
    type: "Full-time",
    content: {
      sections: [
        "Lideré el desarrollo frontend en múltiples sistemas SPA y monolíticos utilizando Laravel, Vue 2, 3 y Tailwind.",
        "Implementé un scrapper que automatiza la obtención de documentos desde sitios oficiales del Estado, optimizando procesos internos de un sistema de despachos aduanero.",
        "Desarrollé sistemas de notificaciones internas y envío de correos automatizados personalizados, mejorando la comunicación entre usuarios y eventos del sistema.",
        "Integré visualizaciones geográficas con Mapbox.js para representar direcciones y rutas.",
        "Optimicé código y rendimiento de APIs, reduciendo tiempos de carga y mejorando la experiencia de usuario.",
      ],
    },
  },

  // ===============

  {
    position: "research",
    company: {
      name: "UAT PUCV",
    },
    start_date: new Date("06-01-2023"),
    end_date: new Date("10-01-2023"),
    type: "Full-time",
    content: {
      sections: [
        "Investigación en desarrollo de videojuegos con Unity y C#.",
        "Creación de un prototipo de videojuego de realidad virtual sobre temáticas empresariales en Unity.",
      ],
    },
  },

  // ===============

  {
    position: "internship",
    company: {
      name: "UAT PUCV",
    },
    start_date: new Date("04-01-2023"),
    end_date: new Date("06-01-2023"),
    type: "Part-time",
    content: {
      sections: [
        "Implementación de vistas con Bootstrap y requerimientos para mejorar la funcionalidad de los proyectos asignados",
      ],
    },
  },
];

const useExperience = () => {
  const { localeProperties: locale } = useI18n();

  const expList = ref<CareerExperience[]>();

  watch(
    () => locale.value,
    () => {
      switch (locale.value.code) {
        case "es":
          expList.value = experience_ES;
          break;
        case "en":
          expList.value = experience_EN;
        default:
      }
    },
    { immediate: true }
  );

  return {
    expList,
  };
};

export { useExperience };
