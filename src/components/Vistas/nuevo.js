import { useState } from "react";
const Nuevo = () => {
  const [v, setV] = useState("0");
  const [respuesta, setRespuesta] = useState("");
  const info = (
    <div>
      <p className="text-muted font-italic">Description</p>
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
  };

  return (
    <div>
      <Formulario1I
        valorInial={n}
        nameFormulario={"Nuevo"}
        info={info}
        setValue={setN}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"Button"}
      />
    </div>
  );
};

export default Nuevo;
