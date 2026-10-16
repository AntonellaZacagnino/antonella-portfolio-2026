import type { Language } from "@/data/dictionary";

type LocalizedText = Record<Language, string>;
export type ProjectVisual = "trivia" | "nuarielle" | "aerolab" | "zarego" | "verifarma" | "academic-team";

export type Project = {
  id: string;
  visual: ProjectVisual;
  title: string;
  discipline: LocalizedText;
  summary: LocalizedText;
  challenge: LocalizedText;
  approach: LocalizedText;
  architecture: LocalizedText[];
  focus: LocalizedText;
  /** Optional image in public/images/projects/, e.g. /images/projects/triviawar-desktop.png. */
  previewImage?: string | null;
  previewImageFit?: "cover" | "contain";
  demoUrl: string | null;
  sourceUrl: string | null;
  sourceLinks?: { label: LocalizedText; url: string }[];
};

export const projects = [
  {
    id: "trivia-war",
    visual: "trivia",
    title: "Trivia War",
    discipline: { es: "Proyecto Integrador Final · Trabajo en equipo", en: "Final Capstone Project · Team project" },
    summary: {
      es: "Aplicación de trivia multijugador desarrollada en equipo como Proyecto Integrador Final de la Tecnicatura en Desarrollo de Software. Permite crear salas, competir en tiempo real, entrenar con preguntas generadas por IA y consultar rankings.",
      en: "A multiplayer trivia application built by a team as the Final Capstone Project for the Software Development degree. Players can create rooms, compete in real time, practice with AI-generated questions, and view rankings.",
    },
    challenge: {
      es: "Diseñar una experiencia de juego en equipo con salas y partidas sincronizadas, chat en vivo y una arquitectura que conecte frontend, backend, autenticación y persistencia.",
      en: "Design a team gaming experience with synchronized rooms and matches, live chat, and an architecture connecting frontend, backend, authentication, and persistence.",
    },
    approach: {
      es: "Participé junto a un equipo de cinco personas en el desarrollo de una SPA con Angular y TypeScript conectada a un backend Node.js/Express. Integramos Socket.io para la comunicación en tiempo real, Firebase para autenticación y datos, y servicios de IA para generar preguntas.",
      en: "I worked with a five-person team to build an Angular and TypeScript SPA connected to a Node.js/Express backend. We integrated Socket.io for real-time communication, Firebase for authentication and data, and AI services for question generation.",
    },
    architecture: [
      {
        es: "Frontend SPA desarrollado con Angular 20 y TypeScript, con componentes standalone y estado reactivo.",
        en: "Frontend SPA built with Angular 20 and TypeScript, using standalone components and reactive state.",
      },
      {
        es: "Backend con Node.js y Express; Socket.io gestiona salas, partidas y chat en tiempo real.",
        en: "Node.js and Express backend; Socket.io handles rooms, matches, and real-time chat.",
      },
      {
        es: "Firebase Authentication para usuarios y Firestore para datos de salas, resultados y estadísticas.",
        en: "Firebase Authentication for users and Firestore for room, result, and statistics data.",
      },
      {
        es: "Generación de preguntas con IA y workflows de CI/CD para despliegues.",
        en: "AI-generated questions and CI/CD workflows for deployments.",
      },
    ],
    focus: { es: "Angular · TypeScript · Node.js · Express · Socket.io · Firebase · IA · CI/CD", en: "Angular · TypeScript · Node.js · Express · Socket.io · Firebase · AI · CI/CD" },
    previewImage: "/images/projects/triviawar-desktop.png",
    demoUrl: "https://triviawar.rsdev.dev/",
    sourceUrl: null,
    sourceLinks: [
      { label: { es: "Código frontend", en: "Frontend code" }, url: "https://github.com/Robertosinguri/triviawar-front" },
      { label: { es: "Código backend", en: "Backend code" }, url: "https://github.com/Robertosinguri/triviawar-back" },
    ],
  },
  {
    id: "verifarma-challenge",
    visual: "verifarma",
    title: "VeriMovies",
    discipline: { es: "Frontend Challenge · Verifarma", en: "Frontend Challenge · Verifarma" },
    summary: {
      es: "Aplicación para buscar películas y consultar sus detalles, desarrollada en el marco de un challenge para Verifarma.",
      en: "A movie search and details application built as part of a challenge for Verifarma.",
    },
    challenge: {
      es: "Crear una experiencia de exploración de películas que conecte búsquedas, resultados paginados y páginas de detalle.",
      en: "Create a movie discovery experience connecting search, paginated results, and detail pages.",
    },
    approach: {
      es: "Construí la aplicación con Nuxt y Vue, integrando la API de OMDb para buscar películas y obtener su información, y Firebase Authentication para el registro e inicio de sesión.",
      en: "I built the application with Nuxt and Vue, integrating the OMDb API for movie search and details, and Firebase Authentication for sign-up and sign-in.",
    },
    architecture: [
      { es: "Aplicación multipágina desarrollada con Nuxt 3 y Vue 3.", en: "Multi-page application built with Nuxt 3 and Vue 3." },
      { es: "Consultas a OMDb para búsquedas, resultados paginados y detalles de películas.", en: "OMDb requests for search, paginated results, and movie details." },
      { es: "Autenticación con Firebase y estilos en Sass.", en: "Firebase authentication and Sass styling." },
    ],
    focus: { es: "Nuxt · Vue · TypeScript · Firebase · OMDb API · Sass", en: "Nuxt · Vue · TypeScript · Firebase · OMDb API · Sass" },
    previewImage: "/images/projects/verimovies-desktop.png",
    demoUrl: null,
    sourceUrl: "https://github.com/AntonellaZacagnino/verifarma-app",
  },
  {
    id: "muy-viernes",
    visual: "academic-team",
    title: "Muy Viernes Para Programar (MVPP)",
    discipline: { es: "App de trivia · Proyecto colaborativo", en: "Trivia app · Collaborative project" },
    summary: {
      es: "App de trivia para convertir el aprendizaje en un desafío entretenido: permite jugar, poner a prueba conocimientos y competir con otros usuarios. Fue realizada en equipo durante la cursada de Desarrollo de Aplicaciones de la Tecnicatura en Desarrollo de Software.",
      en: "A trivia app that turns learning into an engaging challenge: users can play, test their knowledge, and compete with others. Built as a team project during the Application Development course in the Software Development degree program.",
    },
    challenge: {
      es: "Crear una experiencia de aprendizaje más entretenida que permita poner conocimientos a prueba y medirse con otros jugadores.",
      en: "Create a more engaging learning experience where users can test their knowledge and measure themselves against other players.",
    },
    approach: {
      es: "Participé junto al equipo en el desarrollo de la app con Ionic y Angular, incorporando Firebase para autenticación, gestión de usuarios y ranking.",
      en: "I contributed alongside the team to building the app with Ionic and Angular, using Firebase for authentication, user management, and rankings.",
    },
    architecture: [
      { es: "Aplicación móvil construida con Ionic Framework, Angular y NgModule.", en: "Mobile application built with Ionic Framework, Angular, and NgModule." },
      { es: "Firebase Authentication y Firestore para autenticación y gestión de usuarios.", en: "Firebase Authentication and Firestore for authentication and user management." },
      { es: "Ranking de jugadores para acompañar la dinámica competitiva de las trivias.", en: "Player rankings to support the competitive trivia experience." },
      { es: "Proyecto grupal de la materia Desarrollo de Aplicaciones, en la Tecnicatura en Desarrollo de Software.", en: "Team project for the Application Development course in the Software Development degree program." },
    ],
    focus: { es: "Ionic · Angular · NgModule · Firebase · TypeScript · SCSS", en: "Ionic · Angular · NgModule · Firebase · TypeScript · SCSS" },
    previewImage: "/images/projects/mvpp-mobile.png",
    previewImageFit: "contain",
    demoUrl: null,
    sourceUrl: "https://github.com/GeraRevrol/MuyViernes",
  },
  {
    id: "aerolab-challenge",
    visual: "aerolab",
    title: "Aerolab Frontend Challenge",
    discipline: { es: "Frontend Challenge · Aerolab", en: "Frontend Challenge · Aerolab" },
    summary: {
      es: "Interfaz de catálogo de recompensas desarrollada en el marco de un Frontend Challenge para Aerolab, con productos, filtros y monedas.",
      en: "A rewards catalog interface built as part of a Frontend Challenge for Aerolab, featuring products, filters, and coins.",
    },
    challenge: {
      es: "Resolver el desafío frontend de Aerolab creando una experiencia clara para explorar productos y entender su dinámica de recompensas.",
      en: "Complete Aerolab's frontend challenge by creating a clear experience for exploring products and understanding its rewards flow.",
    },
    approach: {
      es: "Desarrollé la interfaz con Next.js, React y SCSS Modules, separando la experiencia en componentes para productos, filtros y monedas.",
      en: "I built the interface with Next.js, React, and SCSS Modules, organizing the experience into product, filter, and coin components.",
    },
    architecture: [
      { es: "Aplicación frontend construida con Next.js y React.", en: "Frontend application built with Next.js and React." },
      { es: "Estilos encapsulados con SCSS Modules.", en: "Encapsulated styling with SCSS Modules." },
      { es: "Componentes dedicados al catálogo, los filtros y las monedas del sistema de recompensas.", en: "Dedicated components for the catalog, filters, and reward system coins." },
    ],
    focus: { es: "Next.js · React · JavaScript · SCSS Modules · Frontend Challenge", en: "Next.js · React · JavaScript · SCSS Modules · Frontend Challenge" },
    previewImage: "/images/projects/aerolab-desktop.png",
    demoUrl: "https://azacagnino-aerolab-challenge.netlify.app/",
    sourceUrl: "https://github.com/AntonellaZacagnino/aerolab-challenge",
  },
  {
    id: "zarego-challenge",
    visual: "zarego",
    title: "Zarego Frontend Challenge",
    discipline: { es: "Frontend Challenge · Zarego", en: "Frontend Challenge · Zarego" },
    summary: {
      es: "Pokédex interactiva de la primera generación, desarrollada para un Frontend Challenge de Zarego. Permite buscar, explorar y consultar información detallada de cada Pokémon.",
      en: "An interactive first-generation Pokédex built for a Zarego Frontend Challenge. It lets users search, browse, and inspect detailed information about each Pokémon.",
    },
    challenge: {
      es: "Organizar la información de la PokeAPI en una experiencia fácil de explorar, con acceso a datos y estadísticas individuales de cada Pokémon.",
      en: "Organize data from the PokéAPI into an easy-to-explore experience, with access to individual Pokémon details and stats.",
    },
    approach: {
      es: "Desarrollé la aplicación con Next.js y React, integrando búsqueda, paginación, vistas de detalle y selector de idioma.",
      en: "I built the application with Next.js and React, integrating search, pagination, detail views, and a language selector.",
    },
    architecture: [
      { es: "Datos de Pokémon y especies obtenidos desde la PokeAPI.", en: "Pokémon and species data fetched from the PokéAPI." },
      { es: "Componentes separados para listado, tarjetas, búsqueda y detalle.", en: "Separate components for the list, cards, search, and detail views." },
      { es: "Estilos encapsulados con SCSS Modules y contexto para el idioma.", en: "Encapsulated styling with SCSS Modules and context for language state." },
    ],
    focus: { es: "Next.js · React · JavaScript · PokeAPI · SCSS Modules", en: "Next.js · React · JavaScript · PokéAPI · SCSS Modules" },
    previewImage: "/images/projects/pokedex-desktop.png",
    demoUrl: "https://pokedex-alpha-one.vercel.app/",
    sourceUrl: "https://github.com/AntonellaZacagnino/zarego-challenge",
  },
  {
    id: "nuarielle",
    visual: "nuarielle",
    title: "Nuarielle",
    discipline: { es: "Proyecto final · Curso React.js · Coderhouse", en: "Final project · React.js course · Coderhouse" },
    summary: {
      es: "Trabajo final realizado en el marco del curso de React.js de Coderhouse: un e-commerce para un emprendimiento de pastelería, con Firebase integrado.",
      en: "Final project completed as part of Coderhouse's React.js course: an e-commerce experience for a small bakery business, with Firebase integrated.",
    },
    challenge: {
      es: "Llevar la propuesta de un emprendimiento de pastelería a una experiencia de comercio digital clara y atractiva.",
      en: "Bring a small bakery business's offering into a clear and inviting digital commerce experience.",
    },
    approach: {
      es: "Como entrega final del curso, desarrollé la aplicación con React y Firebase para presentar los productos del emprendimiento en un formato de e-commerce.",
      en: "As the course's final deliverable, I built the application with React and Firebase to present the bakery's products through an e-commerce format.",
    },
    architecture: [
      { es: "Interfaz de e-commerce construida con React.", en: "E-commerce interface built with React." },
      { es: "Firebase integrado en la aplicación.", en: "Firebase integrated into the application." },
      { es: "Despliegue disponible en Vercel.", en: "Deployment available on Vercel." },
    ],
    focus: { es: "React · Firebase · E-commerce", en: "React · Firebase · E-commerce" },
    previewImage: "/images/projects/nuarielle-desktop.png",
    demoUrl: "https://nuarielle.vercel.app",
    sourceUrl: "https://github.com/AntonellaZacagnino/Nuarielle",
  },
  
] satisfies Project[];

export function getProjectText(text: LocalizedText, language: Language) {
  return text[language];
}
