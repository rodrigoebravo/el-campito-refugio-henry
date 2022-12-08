import React from "react";
import CardsHome from "./CardsHome";

const Home = () => {
  return (
    <div>
      <div>
        <h2>ACA VA EL NAVBAR</h2> {/* En esta linea hay que invocar al componente NavBar */}
        <h2>ACA VA EL COMPONENTE BARRA LATERAL</h2> {/* En esta linea hay que invocar al componente BarraLateral */}
        <p>
          Somos una ONG sin fines de lucro que trabaja rescatando, recuperando y
          dando en adopción. Además buscamos generar conciencia para lograr una
          sociedad más inclusiva y respetuosa. Orgullosos de ser un refugio de
          puertas abiertas te invitamos a conocernos. Estamos en Esteban
          Echeverria, Bs As, Argentina.
        </p>
        <h2>Vale la pena involucrarse</h2>
        <img src="#" alt="homeImage" />
      </div>
      <div> {/* En este div le pase por porops descripcion y className para poder trabajar con cada componente por separado */}
        <CardsHome descriptionBtn={"Quiero adoptar"} classNameDiv={"adoptarCard"} links={'adoptar'} />
        <CardsHome
          descriptionBtn={"Donaciones y padrinazgos"}
          classNameDiv={"donacionesCard"}
          links={'donaciones'}
        />
        <CardsHome descriptionBtn={"Visitas"} classNameDiv={"visitasCard"} links={'visitas'}/>
        <CardsHome
          descriptionBtn={"Veterinaria y Unidad de Cuidados Intensivos"}
          classNameDiv={"veterinariaCard"}
          links={'veterinaria'}
        />
        <CardsHome
          descriptionBtn={"El Campito escolar"}
          classNameDiv={"escolarCard"}
          links={'campitoEscolar'}
        />
        <CardsHome
          descriptionBtn={"Comunicación, prensa y redes Sociales"}
          classNameDiv={"prensaYRedesCard"}
          links={'prensa'}
        />
        <CardsHome
          descriptionBtn={"Quiero ser voluntario"}
          classNameDiv={"voluntarioCard"}
          links={'voluntaradio'}
        />
        <CardsHome
          descriptionBtn={"Comportamiento y aociabilización"}
          classNameDiv={"comportamientoCard"}
          links={'comportamiento'}
        />

      </div>
      <div>
        {/* En esta linea hay que invocar al componente Footer */}
        <h2>ACA VA EL COMPONENTE FOOTER</h2>
      </div>
    </div>
  );
};

export default Home;
