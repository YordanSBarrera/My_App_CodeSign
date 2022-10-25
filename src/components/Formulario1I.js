const Formulario1I = (props) => {
  return (
    <div className="container">
      <div className="text-muted text-center">
        <h3>
          {props.nameFormulario ? props.nameFormulario : "Formulario x Default"}
        </h3>
      </div>
      <div className="row">
        <div className="col-7">
          <br />
          <br />
          <form onSubmit={props.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder={props.ValorInicial}
                  value={props.value}
                  onChange={(e) => props.setValue(e.target.value)}
                />
              </div>
              <div className="col-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={props.nameButton ? props.nameButton : "Aceptar"}
                />
              </div>
            </div>
          </form>
          <br />
          <br />
          <h3>
            <label>{props.respuesta}</label>
          </h3>
        </div>
        <div className="col-5">{props.info}</div>
      </div>
    </div>
  );
};
export default Formulario1I;
