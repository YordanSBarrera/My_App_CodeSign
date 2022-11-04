const Formulario2 = (props) => {
  return (
    <div className="container">
      <div className="text-muted text-center">
        <h3>
          {props.nameFormulario ? props.nameFormulario : "Formulario x Default"}
        </h3>
      </div>
      <div className="row">
        <div className="col-7">
          <form onSubmit={props.handleSubmit}>
            <h5 className="text-muted">Formulario</h5>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  placeholder={props.valorInial ? props.valorInial : ""}
                  value={props.value1}
                  onChange={(e) => props.setValue1(e.target.value)}
                  className="mx-2 form-control"
                  size="10"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder={props.valorInial2 ? props.valorInial2 : ""}
                  value={props.value2}
                  onChange={(e) => props.setValue2(e.target.value)}
                  size="10"
                />
              </div>
            </div>
            <input
              className="mx-2 my-3 btn btn-primary"
              type="submit"
              value={props.nameButton ? props.nameButton : "Aceptar"}
            />
          </form>
          <label>{props.respuesta}</label>
        </div>
        <div className="col-5">
          {props.info ? props.info : "This Form have not info"}
        </div>
      </div>
    </div>
  );
};
export default Formulario2;
