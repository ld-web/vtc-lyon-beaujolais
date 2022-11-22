export enum MenuSection {
  Header,
  Footer,
}

type Link = {
  to: string;
  label: string;
  subLinks?: Link[];
  sections: MenuSection[];
};

export const HOME: Link = {
  to: "/",
  label: "Accueil",
  sections: [MenuSection.Header, MenuSection.Footer],
};

export const ABOUT: Link = {
  to: "/a-propos",
  label: "À propos",
  sections: [MenuSection.Header, MenuSection.Footer],
};

export const MENTIONS_LEGALES: Link = {
  to: "/mentions-legales",
  label: "Mentions légales",
  sections: [MenuSection.Footer],
};

export const PRESTATIONS: Link = {
  to: "/nos-prestations",
  label: "Nos prestations",
  sections: [MenuSection.Header, MenuSection.Footer],
};

export const TRANSFERT_AEROPORT_GARE: Link = {
  to: `${PRESTATIONS.to}#transfert-aeroports-et-gares`,
  label: "Transfert aéroports et gares",
  sections: [MenuSection.Header, MenuSection.Footer],
};
export const MISE_A_DISPOSITION_CHAUFFEUR: Link = {
  to: `${PRESTATIONS.to}#mise-a-disposition-chauffeur`,
  label: "Mise à disposition d'un chauffeur",
  sections: [MenuSection.Header, MenuSection.Footer],
};
export const CIRCUITS_TOURISTIQUES: Link = {
  to: `${PRESTATIONS.to}#circuits-touristiques`,
  label: "Circuits touristiques",
  sections: [MenuSection.Header, MenuSection.Footer],
};
export const VACANCES_MER_MONTAGNE: Link = {
  to: `${PRESTATIONS.to}#vacances-mer-montagne`,
  label: "Vacances Mer/Montagne",
  sections: [MenuSection.Header, MenuSection.Footer],
};
export const FEMININ: Link = {
  to: `${PRESTATIONS.to}#feminin`,
  label: "100% Féminin",
  sections: [MenuSection.Header, MenuSection.Footer],
};
PRESTATIONS.subLinks = [
  TRANSFERT_AEROPORT_GARE,
  MISE_A_DISPOSITION_CHAUFFEUR,
  CIRCUITS_TOURISTIQUES,
  VACANCES_MER_MONTAGNE,
  FEMININ,
];

export const TARIFS: Link = {
  to: "/nos-tarifs",
  label: "Nos tarifs",
  sections: [MenuSection.Header, MenuSection.Footer],
};

export const CONTACT: Link = {
  to: "/contact-reservation",
  label: "Contact & Réservation",
  sections: [MenuSection.Header, MenuSection.Footer],
};

const links: Link[] = [
  HOME,
  ABOUT,
  MENTIONS_LEGALES,
  PRESTATIONS,
  TARIFS,
  CONTACT,
];

export default links;
