import type { Component } from "vue";

export type Tech = {
  id: number;
  name: string;
  longName?: string;
  uri?: string;
  icon?: Component | string;
  logo?: string;
};

export type ContactForm = {
  email: string;
  subject: string;
  message: string;
};

export type NavLink = {
  name: string;
  title: string;
  route?: { path: string };
  type: "scroll" | "route";
  active: boolean;
};

export type CareerExperience = {
  position: "fullstack" | "frontend" | "backend" | "internship" | "research";
  company: {
    name: string;
    url?: string;
  };
  start_date: Date;
  end_date?: Date;
  type: "Full-time" | "Part-time";
  content: {
    body?: string;
    sections?: string[];
  };
};

export type Skill = {
  title: string;
  icon?: Component;
  content: {
    body?: string;
    sections?: {
      name?: string;
      content: string;
      tech?: Tech[];
    }[];
  };
};
