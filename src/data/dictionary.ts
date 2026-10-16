export type Language = "es" | "en";

export type PortfolioCopy = {
  navigation: {
    home: string; about: string; stack: string; projects: string; contact: string;
    availability: string; theme: string; menu: string; closeMenu: string; language: string;
    navigationLabel: string; skipToContent: string;
  };
  hero: {
    eyebrow: string; title: string; titleAccent: string; description: string;
    primaryAction: string; secondaryAction: string; cvDownload: string; scrollLabel: string;
  };
  about: {
    eyebrow: string; title: string; profileLabel: string; profileTitle: string;
    profileBody: string; profileDetail: string; locationLabel: string; locationTitle: string;
    locationBody: string; timezone: string; workflowLabel: string; workflowTitle: string;
    workflowBody: string; localTime: string;
  };
  stack: {
    eyebrow: string; title: string; description: string;
    categories: { title: string; technologies: string[] }[];
  };
  projects: {
    eyebrow: string; title: string; description: string; projectLabel: string; openCaseStudy: string;
    architectureLabel: string; challengeLabel: string; contributionsLabel: string;
    stackLabel: string; demoLabel: string; sourceLabel: string;
    closeLabel: string;
  };
  contact: {
    title: string; description: string; copyEmail: string;
    emailCopied: string; copyFailed: string; emailMissing: string;
    github: string; linkedin: string; quickContact: string;
  };
};

export const dictionary = {
  es: {
    navigation: {
      home: "Inicio", about: "Sobre mí", stack: "Stack", projects: "Proyectos", contact: "Contacto",
      availability: "Disponible para oportunidades", theme: "Cambiar tema",
      menu: "Abrir menú de navegación", closeMenu: "Cerrar menú de navegación", language: "Cambiar idioma",
      navigationLabel: "Navegación principal", skipToContent: "Saltar al contenido",
    },
    hero: {
      eyebrow: "Desarrolladora Frontend | Full-Stack",
      title: "Interfaces digitales con", titleAccent: "intención.",
      description: "Diseño y desarrollo experiencias rápidas, accesibles y memorables, con atención al detalle desde la primera idea hasta el último pixel.",
      primaryAction: "Conocer mi perfil", secondaryAction: "Explorar tecnologías", cvDownload: "Descargar CV", scrollLabel: "Desplazarse para descubrir",
    },
    about: {
      eyebrow: "Un poco sobre mí", title: "Diseño con criterio. Código con propósito.",
      profileLabel: "Perfil", profileTitle: "Obsesionada con los detalles que hacen que una web se sienta viva, fluida y fácil de usar.",
      profileBody: "Soy Desarrolladora Frontend con visión Full-Stack en el ecosistema JavaScript y Técnica Superior en Desarrollo de Software. Lo que más disfruto de mi trabajo es estar en esa intersección donde una idea compleja se transforma en una experiencia web rápida, accesible e intuitiva.\n\nMe muevo con comodidad colaborando codo a codo con equipos de diseño UX/UI y de backend: hablo el idioma de los sistemas de diseño y las micro-interacciones, pero también el de las APIs, la arquitectura en tiempo real y el código limpio. Hoy combino buenas prácticas de ingeniería con herramientas de IA para iterar más rápido sin sacrificar calidad ni atención al detalle.",
      profileDetail: "Curiosidad, colaboración y atención al detalle.",
      locationLabel: "Ubicación", locationTitle: "Buenos Aires, Argentina",
      locationBody: "En sintonía con equipos de América y Europa.", timezone: "GMT−3 · Hora local",
      workflowLabel: "Datos extras", workflowTitle: "¿Qué hago cuando cierro el editor de código?",
      workflowBody: "Cambio el teclado por otras pasiones que me ayudan a recargar creatividad. Es muy probable que me encuentres preparando algo dulce en la cocina para la hora de la merienda, desconectando en algún videojuego, poniéndome al día con una buena serie o algún canal de streaming, o en la pista patinando sobre hielo.",
      localTime: "HORA LOCAL",
    },
    stack: {
      eyebrow: "Herramientas para construir", title: "Tecnología al servicio de la experiencia.",
      description: "Un stack versátil para resolver cada capa del producto, elegir la herramienta adecuada y mantener una base preparada para crecer.",
      categories: [
        { title: "Frontend core", technologies: ["JavaScript ES6+", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Ionic"] },
        { title: "Estilos & UI", technologies: ["Sass / SCSS", "CSS Modules", "Responsive design", "Accesibilidad"] },
        { title: "Backend, realtime & datos", technologies: ["Node.js", "Express", "PHP (Symfony)", "Firebase", "REST APIs", "SQL", "MySQL"] },
        { title: "Herramientas & DevOps", technologies: ["Git", "GitHub Actions", "CI/CD", "AWS", "AI tools"] },
      ],
    },
    projects: {
      eyebrow: "Trabajo seleccionado", title: "Proyectos que resuelven problemas reales.", projectLabel: "CASO DE ESTUDIO",
      description: "Cada proyecto es una oportunidad para conectar buenas decisiones técnicas con una experiencia clara.",
      openCaseStudy: "Ver caso de estudio", architectureLabel: "Arquitectura & desafíos técnicos",
      challengeLabel: "El desafío", contributionsLabel: "Enfoque", stackLabel: "Tecnologías y prácticas",
      demoLabel: "Ver demo", sourceLabel: "Ver código",
      closeLabel: "Cerrar caso de estudio",
    },
    contact: {
      title: "¿Creamos algo que valga la pena?",
      description: "Abierta a nuevos desafíos y colaboraciones con equipos que valoran el diseño y la ingeniería.",
      copyEmail: "Copiar email", emailCopied: "Email copiado al portapapeles.",
      copyFailed: "No se pudo copiar el email. Podés seleccionarlo manualmente.",
      emailMissing: "El email de contacto aún no está configurado.", github: "GitHub", linkedin: "LinkedIn",
      quickContact: "O escribime directamente",
    },
  },
  en: {
    navigation: {
      home: "Home", about: "About", stack: "Stack", projects: "Projects", contact: "Contact",
      availability: "Available for opportunities", theme: "Change theme",
      menu: "Open navigation menu", closeMenu: "Close navigation menu", language: "Change language",
      navigationLabel: "Main navigation", skipToContent: "Skip to content",
    },
    hero: {
      eyebrow: "Frontend Developer | Full-Stack",
      title: "Digital interfaces with", titleAccent: "intention.",
      description: "I design and build fast, accessible, memorable experiences, paying attention to every detail from the first idea to the final pixel.",
      primaryAction: "Get to know me", secondaryAction: "Explore technologies", cvDownload: "Download CV", scrollLabel: "Scroll to discover",
    },
    about: {
      eyebrow: "A little about me", title: "Thoughtful design. Purposeful code.",
      profileLabel: "Profile", profileTitle: "Obsessed with the details that make a website feel alive, fluid, and easy to use.",
      profileBody: "I'm a Frontend Developer with a Full-Stack perspective in the JavaScript ecosystem and a technical degree in Software Development. What I enjoy most about my work is being at the intersection where a complex idea becomes a fast, accessible, and intuitive web experience.\n\nI feel comfortable collaborating closely with UX/UI design and backend teams: I speak the language of design systems and micro-interactions, as well as APIs, real-time architecture, and clean code. Today, I combine engineering best practices with AI tools to iterate faster without sacrificing quality or attention to detail.",
      profileDetail: "Curiosity, collaboration, and attention to detail.",
      locationLabel: "Location", locationTitle: "Buenos Aires, Argentina",
      locationBody: "In sync with teams across the Americas and Europe.", timezone: "GMT−3 · Local time",
      workflowLabel: "A few extras", workflowTitle: "What do I do when I close my code editor?",
      workflowBody: "I step away from my keyboard to make time for other passions that recharge my creativity. You might find me baking something sweet for afternoon tea, unwinding with a video game, catching up on a great series or a favorite streaming channel, or ice skating.",
      localTime: "LOCAL TIME",
    },
    stack: {
      eyebrow: "Tools for building", title: "Technology in service of experience.",
      description: "A versatile stack for solving every product layer, choosing the right tool, and keeping the foundation ready to grow.",
      categories: [
        { title: "Frontend core", technologies: ["JavaScript ES6+", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Ionic"] },
        { title: "Styles & UI", technologies: ["Sass / SCSS", "CSS Modules", "Responsive design", "Accessibility"] },
        { title: "Backend, realtime & data", technologies: ["Node.js", "Express", "PHP (Symfony)", "Firebase", "REST APIs", "SQL", "MySQL"] },
        { title: "Tools & DevOps", technologies: ["Git", "GitHub Actions", "CI/CD", "AWS", "AI tools"] },
      ],
    },
    projects: {
      eyebrow: "Selected work", title: "Projects that solve real problems.", projectLabel: "CASE STUDY",
      description: "Every project is a chance to connect sound technical decisions with a clear experience.",
      openCaseStudy: "View case study", architectureLabel: "Architecture & technical challenges",
      challengeLabel: "The challenge", contributionsLabel: "Approach", stackLabel: "Technologies & practices",
      demoLabel: "View demo", sourceLabel: "View code",
      closeLabel: "Close case study",
    },
    contact: {
      title: "Shall we build something worthwhile?",
      description: "Open to new challenges and collaborations with teams that value design and engineering.",
      copyEmail: "Copy email", emailCopied: "Email copied to clipboard.",
      copyFailed: "Could not copy the email. You can select it manually.",
      emailMissing: "A contact email has not been configured yet.", github: "GitHub", linkedin: "LinkedIn",
      quickContact: "Or write to me directly",
    },
  },
} satisfies Record<Language, PortfolioCopy>;
