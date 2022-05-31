import * as React from "react";
import { Link } from "gatsby";
import { HOME } from "../data/links";

const NotFoundPage = () => {
  return (
    <div className="content">
      <h1>Page non trouvée</h1>
      <p>Désolé, nous n'avons pas pu trouver cette page.</p>
      <p>
        <Link to={HOME.to}>Retour à l'accueil</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
