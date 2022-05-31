interface Link {
  to: string;
  label: string;
}

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
