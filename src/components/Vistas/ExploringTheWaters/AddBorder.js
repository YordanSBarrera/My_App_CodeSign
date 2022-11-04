import { useState } from "react";
import Formulario1I from "../../Formulario1I";

const AddBorder = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">Description</p>
      <br />
      <h3>Example</h3>
      Add Border
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
        nameFormulario={"Add Border"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"Add Border"}
      />
    </div>
  );
};

export default AddBorder;
