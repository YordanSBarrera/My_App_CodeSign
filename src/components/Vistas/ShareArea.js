const ShareArea = () => {
  const info = (
    <div>
      <h3>Example</h3>
      For n = 2, the output should be shapeArea(n) = 5;
      <br />
      For n = 3, the output should be shapeArea(n) = 13.
      <br />
      <p>
        A 1-interesting polygon is just a square with a side of length 1. An
        n-interesting polygon is obtained by taking the n - 1-interesting
        polygon and appending 1-interesting polygons to its rim, side by side.
        You can see the 1-, 2-, 3- and 4-interesting polygons in the picture
        below.
      </p>
    </div>
  );

  return (
    <div>
      ShareArea
      <br />
      {info}
    </div>
  );
};
/* <Formulario
    nameFormulario="Share Area"
    valorInial={array}
    info={info}
    setValor={setArray}
    nameButton="Buscar AEProduct "
    respuesta={resp}
    exe={AEProduct}
  />*/
export default ShareArea;
