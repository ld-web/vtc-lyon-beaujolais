type Link = {
  to: string;
  label: string;
  subLinks?: Link[];
};

export const HOME: Link = {
  to: "/",
  label: "Accueil",
};

export const ABOUT: Link = {
  to: "/a-propos",
  label: "À propos",
};

export const PRESTATIONS: Link = {
  to: "/nos-prestations",
  label: "Nos prestations",
};

export const TRANSFERT_AEROPORT_GARE: Link = {
  to: `${PRESTATIONS.to}#transfert-aeroports-et-gares`,
  label: "Transfert aéroports et gares",
};
export const MISE_A_DISPOSITION_CHAUFFEUR: Link = {
  to: `${PRESTATIONS.to}#mise-a-disposition-chauffeur`,
  label: "Mise à disposition d'un chauffeur",
};
export const CIRCUITS_TOURISTIQUES: Link = {
  to: `${PRESTATIONS.to}#circuits-touristiques`,
  label: "Circuits touristiques",
};
export const VACANCES_MER_MONTAGNE: Link = {
  to: `${PRESTATIONS.to}#vacances-mer-montagne`,
  label: "Vacances Mer/Montagne",
};
export const FEMININ: Link = {
  to: `${PRESTATIONS.to}#feminin`,
  label: "100% Féminin",
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
};

export const CONTACT: Link = {
  to: "/contact",
  label: "Contact & Réservation",
};

const links: Link[] = [HOME, ABOUT, PRESTATIONS, TARIFS, CONTACT];

export default links;
