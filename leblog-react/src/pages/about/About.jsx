import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
    return (
        
        <div className="about">
            <div className="headerTitles">
           <span className="headerTitleSm">À PROPOS</span>
           <span className="headerTitleLg">Blog</span>
           </div>
           <div className="aboutContainer">
            <h5 className="aboutUs">
            Leblog est une société d’hébergement web, d’enregistrement de noms de domaine, de gestion SSL/TLS et de solutions Internet. La société possède son propre réseau IP redondant. Elle sert plus de 150 000 clients à l’aide de son infrastructure cloud hybride distribuée sur ses installations en France + Suisse et au Canada. Les DNS Anycast et Anti-DDoS de PlanetHoster servent plus de 100 000 sites web en Amérique du Nord et en Europe. La société est entièrement propriétaire de ses infrastructures à travers le monde. L'accréditation ICANN s’ajoute aux accréditations provenant de l’ACEI, l’Afnic, Dnsbe, Dnslu, l’Eurid, Ldns et Switch. La société se spécialise en solutions clés en main. L’équipe expérimentée de professionnels en hébergement web s’engage à offrir un service haut de gamme à ses clients.

            <hr />

            <p>Le siège social de PlanetHoster se situe à Laval (grand Montréal), dans la province de Québec, au Canada. La société a été fondée en 2007. PlanetHoster assure la gestion entière de ses opérations. Grâce à ses accréditations, PlanetHoster est le bureau d’enregistrement immédiat du client. Elle représente celui-ci devant les autorités Internet en cas de litige. Par la suite, PlanetHoster sert le client grâce à ses infrastructures de dernières générations dont la gestion se fait entièrement en interne. Finalement, le support technique est assuré par ses techniciens qualifiés et expérimentés. La société peut ainsi offrir un service de qualité du début jusqu’à la fin. À preuve, notre clientèle nous donne de très bonnes évaluations sur Trustpilot.</p>


            </h5>
          </div>
        </div>
    );
  }