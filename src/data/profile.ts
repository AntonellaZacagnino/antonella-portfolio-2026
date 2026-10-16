export const profile = {
  name: "Antonella Zacagnino",
} as const;

type ProfileLinks = {
  email: string | null;
  github: string | null;
  linkedin: string | null;
};

export const profileLinks: ProfileLinks = {
  email: "antonellazacagnino@gmail.com",
  github: "https://github.com/AntonellaZacagnino",
  linkedin: "https://www.linkedin.com/in/antonella-zacagnino/",
};
