import type { Skill } from "~/types/global";

const skills_EN: Skill[] = [
  {
    title: "web_development",

    content: {
      sections: [
        {
          name: "backend_",
          content: "Laravel, MVC architecture",
        },
        {
          name: "frontend_",
          content: "Vue 2/3, Pinia, Blade, DOM",
        },
        {
          name: "ui_libraries",
          content: "Tailwind-CSS, Shadcn, Bootstrap",
        },
      ],
    },
  },
  {
    title: "databases",
    content: {
      body: "SQL Database management, MySQL, Postgresql<",
    },
  },
  {
    title: "documentation",

    content: {
      sections: [
        {
          content: "Relational data modeling",
        },
        {
          content: "Basic knowledge of BPMN, UML and E-R Diagrams",
        },
      ],
    },
  },
];

// = ES ===================================================================

const skills_ES: Skill[] = [
  {
    title: "web_development",

    content: {
      sections: [
        {
          name: "backend_",
          content: "Laravel, arquitectura MVC",
        },
        {
          name: "frontend_",
          content: "Vue 2/3, Pinia, Blade, DOM",
        },
        {
          name: "ui_libraries",
          content: "Tailwind-CSS, Shadcn, Bootstrap",
        },
      ],
    },
  },
  {
    title: "databases",
    content: {
      body: "Gestión de base de datos SQL, MySQL, Postgresql",
    },
  },
  {
    title: "documentation",

    content: {
      sections: [
        {
          content: "Modelos Relacionales",
        },
        {
          content: "Conocimiento básico de diagramas BPMN, UML y E-R",
        },
      ],
    },
  },
];

const useSkills = () => {
  const skills = ref<Skill[]>();
  const { localeProperties } = useI18n();

  watch(
    () => localeProperties.value.code,
    (newValue) => {
      switch (newValue) {
        case "es":
          skills.value = skills_ES;
          break;
        default:
        case "en":
          skills.value = skills_EN;
          break;
      }
    },
    {
      immediate: true,
    }
  );
  return {
    skills,
  };
};

export { useSkills };
