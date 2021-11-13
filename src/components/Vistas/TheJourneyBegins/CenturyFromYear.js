import { useState } from "react/cjs/react.development";
import Formulario from "../../Formulario1I";
import { CenturyFromYearFunc } from "../../codeSignal/TheJourneyBegins";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setRespuesta("Century " + CenturyFromYearFunc(anno));
  };
  return (
    <div className="container">
      <Formulario
        nameFormulario={"Given a year, return the century it is in"}
        info={description}
        setValue={setAnno}
        respuesta={respuesta}
        nameButton={"Siglo?"}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CenturyFromYear;
