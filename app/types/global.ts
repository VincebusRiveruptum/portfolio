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
