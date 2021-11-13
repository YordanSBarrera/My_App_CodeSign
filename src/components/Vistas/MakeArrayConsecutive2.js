import { useState } from "react";
import Formulario1I from "../Formulario1I";
import { inStringOutArray } from "../codeSignal/FuncionesAux";
import { Make_Array_Consecutive_2Func } from "../codeSignal/EdgeOfTheOcean";

const MakeArrayConsecutive2 = () => {
  const [array, setArray] = useState("0,0");
  const [respuesta, setRespuesta] = useState("0");
  const info = (
    <div>
      <p>
        Ratiorg got statues of different sizes as a present from CodeMaster for
        his birthday, each statue having an non-negative integer size. Since he
        likes to make things perfect, he wants to arrange them from smallest to
        largest so that each statue will be bigger than the previous one exactly
        by 1. He may need some additional statues to be able to accomplish that.
        Help him figure out the minimum number of additional statues needed.
      </p>
      <h3>Example</h3>
      For statues = [6, 2, 3, 8], the output should be
      makeArrayConsecutive2(statues) = 3.
      <br />
      Ratiorg needs statues of sizes 4, 5 and 7.
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setRespuesta(Make_Array_Consecutive_2Func(inStringOutArray(array)));
  };
  return (
    <div>
      <Formulario1I
        nameFormulario="Make Array Consecutive 2"
        valorInial={array}
        info={info}
        setValue={setArray}
        nameButton="How many statues need? "
        respuesta={respuesta}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MakeArrayConsecutive2;
