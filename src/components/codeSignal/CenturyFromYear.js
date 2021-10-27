import { useState } from "react/cjs/react.development";
import Formulario from "../Formulario";

const CenturyFromYear = () => {
  const [anno, setAnno] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const description = (
    <div>
      <p>
        Given a year, return the century it is in. The first century spans from
        the year 1 up to and including the year 100, the second - from the year
        101 up to and including the year 200, etc.
      </p>
      <h2> Example</h2>
      <ul>
        <li>
          For year = 1905, the output should be centuryFromYear(year) = 20;
          <br />
        </li>
        <li>
          For year = 1700, the output should be centuryFromYear(year) = 17.
          <br />
        </li>
      </ul>
    </div>
  );
  const CFY_exe = () => {
    const resp = Math.trunc(anno / 100);
    if (anno % 100 === 0) {
      setRespuesta(resp);
    } else {
      setRespuesta(resp + 1);
    }
  };

  return (
    <div className="container">
      <Formulario
        nameFormulario={"Given a year, return the century it is in"}
        info={description}
        setValor={setAnno}
        exe={CFY_exe}
        respuesta={respuesta}
        nameButton={"Siglo?"}
      />
    </div>
  );
};

export default CenturyFromYear;
