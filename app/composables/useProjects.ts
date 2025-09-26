import { projects_EN, projects_ES } from "@/constants/data";
import type { Project } from "~/types/global";

const useProjects = () => {
  const projects = ref<Project[]>();
  const { localeProperties } = useI18n();

  watch(
    () => localeProperties.value.code,
    (newValue) => {
      switch (newValue) {
        case "es":
          projects.value = projects_ES;
          break;
        default:
        case "en":
          projects.value = projects_EN;
          break;
      }
    },
    {
      immediate: true,
    }
  );
  return {
    projects,
  };
};

export { useProjects };
