interface Link {
  to: string;
  label: string;
}

const links: Link[] = [
  {
    to: "/",
    label: "Accueil",
  },
  {
    to: "/a-propos",
    label: "A propos",
  },
  {
    to: "/nos-prestations",
    label: "Nos prestations",
  },
  {
    to: "/nos-tarifs",
    label: "Nos tarifs",
  },
  {
    to: "/contact",
    label: "Contact & Réservation",
  },
];

export default links;
