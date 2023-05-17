import { useEffect } from "react";

import { withProductsData } from "./withProductsData";
import Contacto from "../../components/Contacto/Contacto";

const Nosotros = ({ productos, loading }) => {
  const clickear = () => {
    console.log("click");
  };

  useEffect(() => {
    window.addEventListener("click", clickear);

    return () => {
      window.removeEventListener("click", clickear);
    };
  }, []);

  return (
    <div className="container my-5">
      <h2>Bienvendios a Borges Wings</h2>
      <p>
        {" "}
        Somos más que un restaurant, llevamos a tu casa una experiencia, <br /><br />
        tanto comprehensiva como autentica, de los EEUU a Argentina. <br /><br />
        La comida, compuesta de sabores atrevidos e innovadores de todos partes del mundo,<br /><br />
        es una reflexión del internacionalismo de los EEUU y nosotros mismos. <br /><br />
        Y para los amantes de picante, tenemos la posta, usando ajís de todos partes del mundo<br /><br />
        que hasta ahora no se encontraba aca!
      </p>
      <h3>Podes contactarte completando el siguiente formulario!
      </h3>
      <hr />
      <Contacto />
    </div>
  );
};

export default withProductsData(Nosotros);
