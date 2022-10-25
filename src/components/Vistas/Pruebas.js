import { useState } from "react";
import Formulario1I from "../Formulario1I";

import TestCodegSignal from "./pruebas/TestCodeSignal";
import SayHello from "./pruebas/SayHello";

function Pruebas() {
  const [value1, setValue1] = useState();
  const [resp, setResp] = useState();
  const prueb = new TestCodegSignal();

  const handleSubmit = (e) => {
    e.preventDefault();

    prueb.add(parseInt(value1));
    prueb.add(parseInt(value1) + 2);
    prueb.add(parseInt(value1) + 5);
    prueb.add(parseInt(value1) * 10);
    prueb.add(parseInt(value1) * 14);

    console.log(prueb.getMedian());
    setResp(prueb.getData());
  };

  return (
    <div>
      <SayHello />
      <Formulario1I
        valorInial={value1}
        nameFormulario={"Nuevo"}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={resp}
        nameButton={"add"}
      />
    </div>
  );
}
// const Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   area() {
//     return this.height * this.width;
//   }
// };

export default Pruebas;
