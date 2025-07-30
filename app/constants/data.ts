import { CheckIcon, ConstructionIcon, PauseIcon } from "lucide-vue-next";
import type { Tech } from "../types/global";

import git from "@/assets/git.svg";
import laravel from "@/assets/laravel.png";
import tailwindcss from "@/assets/tailwindcss.png";
import php from "@/assets/php.svg";
import docker from "@/assets/docker.svg";
import vue from "@/assets/vue.svg";
import pinia from "@/assets/pinia.svg";
import livewire from "@/assets/livewire.ico";
import vite from "@/assets/vite.svg";
import python from "@/assets/python.svg";
import clang from "@/assets/clang.svg";
import msdos from "@/assets/msdos.png";
import csharp from "@/assets/csharp.svg";
import axios from "@/assets/axios.ico";
import dotnet from "@/assets/net.png";
import javascript from "@/assets/javascript.svg";
import typescript from "@/assets/typescript.svg";
import vuequery from "@/assets/vuequery.png";
import postman from "@/assets/postman.png";
import mysql from "@/assets/mysql.svg";

import passmedLogo from "@/assets/projects/passmed-logo.svg";
import passmedLogoAlt from "@/assets/projects/passmed.png";
import tetrisCapture from "@/assets/projects/tetris.png";
import tookOneCapture from "@/assets/projects/took-one.png";

const techs: Tech[] = [
  {
    id: 1,
    name: "git",
    longName: "Git",
    uri: "https://github.com/",
    icon: git,
    logo: undefined,
  },
  {
    id: 2,
    name: "css",
    longName: "CSS",
    uri: "https://developer.mozilla.org/es/docs/Web/CSS",
    icon: undefined,
    logo: undefined,
  },
  {
    id: 3,
    name: "laravel",
    longName: "Laravel",
    uri: "https://laravel.com/",
    icon: laravel,
    logo: undefined,
  },
  {
    id: 4,
    name: "tailwind-css",
    longName: "Tailwind CSS",
    uri: "https://tailwindcss.com/",
    icon: tailwindcss,
    logo: undefined,
  },
  {
    id: 5,
    name: "asm-x86",
    longName: "Assembly x86",
    uri: "https://en.wikipedia.org/wiki/X86_assembly_language",
    icon: undefined,
    logo: undefined,
  },
  {
    id: 6,
    name: "php",
    longName: "PHP",
    uri: "https://www.php.net/",
    icon: php,
    logo: undefined,
  },
  {
    id: 7,
    name: "docker",
    longName: "Docker",
    uri: "https://www.docker.com/",
    icon: docker,
    logo: undefined,
  },
  {
    id: 8,
    name: "bash",
    longName: "Bash",
    uri: "",
    icon: undefined,
    logo: undefined,
  },
  {
    id: 9,
    name: "vue",
    longName: "Vue",
    uri: "https://es.vuejs.org/v2/guide/",
    icon: vue,
    logo: undefined,
  },
  {
    id: 10,
    name: "pinia",
    longName: "Pinia",
    uri: "https://pinia.vuejs.org/",
    icon: pinia,
    logo: undefined,
  },

  {
    id: 11,
    name: "livewire",
    longName: "Livewire",
    uri: "https://laravel-livewire.com/",
    icon: livewire,
    logo: undefined,
  },
  {
    id: 12,
    name: "blade",
    longName: "Blade",
    uri: "https://laravel.com/docs/12.x/blade",
    icon: laravel,
    logo: undefined,
  },
  {
    id: 13,
    name: "tailwind-motion",
    longName: "Tailwind Motion",
    uri: "https://rombo.co/tailwind/",
    icon: undefined,
    logo: undefined,
  },
  {
    id: 14,
    name: "axios",
    longName: "Axios",
    uri: "https://axios-http.com/docs/intro",
    icon: axios,
    logo: undefined,
  },
  {
    id: 15,
    name: "vite",
    longName: "Vite",
    uri: "https://vite.dev/",
    icon: vite,
    logo: undefined,
  },
  {
    id: 16,
    name: "python",
    longName: "Python",
    uri: "https://www.python.org/",
    icon: python,
    logo: undefined,
  },
  {
    id: 17,
    name: "fast-api",
    longName: "FastAPI",
    uri: "https://fastapi.tiangolo.com/",
    icon: undefined,
    logo: undefined,
  },
  {
    id: 18,
    name: "django",
    longName: "Django",
    uri: "https://www.djangoproject.com/",
    icon: undefined,
    logo: undefined,
  },
  {
    id: 19,
    name: "dos",
    longName: "DOS",
    uri: "https://es.wikipedia.org/wiki/MS-DOS",
    icon: msdos,
    logo: undefined,
  },
  {
    id: 20,
    name: "clang",
    longName: "C",
    uri: "https://en.wikipedia.org/wiki/C_(programming_language)",
    icon: clang,
    logo: undefined,
  },
  {
    id: 21,
    name: "csharp",
    longName: "C#",
    uri: "https://es.wikipedia.org/wiki/C_Sharp",
    icon: csharp,
    logo: undefined,
  },
  {
    id: 22,
    name: "net",
    longName: ".NET WPF",
    uri: "https://visualstudio.microsoft.com/es/vs/features/wpf/",
    icon: dotnet,
    logo: undefined,
  },
  {
    id: 23,
    name: "typescript",
    longName: "Typescript",
    uri: "https://www.typescriptlang.org/",
    icon: typescript,
    logo: undefined,
  },
  {
    id: 24,
    name: "javascript",
    longName: "Javascript",
    uri: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/What_is_JavaScript",
    icon: javascript,
    logo: undefined,
  },
  {
    id: 25,
    name: "postman",
    longName: "Postman",
    uri: "https://www.postman.com/downloads/",
    icon: postman,
    logo: undefined,
  },
  {
    id: 26,
    name: "vuequery",
    longName: "Tanstack VueQuery",
    uri: "https://tanstack.com/query/latest/docs/framework/vue/overview",
    icon: vuequery,
    logo: undefined,
  },
  {
    id: 27,
    name: "mysql",
    longName: "MySQL",
    uri: "https://www.mysql.com/",
    icon: mysql,
    logo: undefined,
  },
];

const projectStatus = [
  {
    id: 0,
    name: "WIP",
    icon: ConstructionIcon,
  },
  {
    id: 1,
    name: "Done",
    icon: CheckIcon,
  },
  {
    id: 2,
    name: "Paused",
    icon: PauseIcon,
  },
];

const projects = [
  /*  {
    title: "Test project",
    status: 0,
    description: "This is a test proejct, lorem ipsum dolor quod!!!t.",
    uri: "",
    techStack: [
      techs[1],
      techs[2],
      techs[3],
      techs[4],
      techs[5],
      techs[6],
      techs[7],
      techs[8],
      techs[9],
      techs[10],
      techs[11],
      techs[12],
      techs[13],
      techs[14],
      techs[15],
      techs[16],
      techs[17],
      techs[18],
    ],
  },
  */

  {
    title: "Passmed",
    status: 0,
    description: "SaaS for medical records management.",
    uri: "",
    techStack: [techs[14], techs[8], techs[3], techs[6]],
    background: "bg-[#00C6BE]",
    pictures: [passmedLogo, passmedLogoAlt],
  },
  {
    title: "Lupobenchmark",
    status: 0,
    description: "PC Benchmark database and benchmarking tool.",
    uri: "",
    techStack: [techs[14], techs[8], techs[3], techs[2], techs[5], techs[6]],
  },
  {
    title: "Tetris",
    status: 1,
    description: "Text-mode tetris for MS-DOS, just for experimental purposes!",
    uri: "",
    techStack: [techs[18], techs[19]],
    pictures: [tetrisCapture],
  },

  {
    title: "Took One",
    status: 0,
    description: "Pixel Art Bitmap Editor",
    uri: "",
    techStack: [techs[21]],
    pictures: [tookOneCapture],
  },
];

export { projects, projectStatus, techs };
