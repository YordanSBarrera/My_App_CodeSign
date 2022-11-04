import { useState } from "react";
import Formulario1I from "../../Formulario1I";

const AreSimilar = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">AreSimilar?</p>
      <br />
      <h3>Example</h3>
      example1
      <br />
      For n = 3, the output should be ....
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    //...
    setRespuesta(value1);
  };

  return (
    <div>
      <Formulario1I
        valorInial={value1}
        nameFormulario={"AreSimilar?"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"AreSimilar?"}
      />
    </div>
  );
};

export default AreSimilar;
