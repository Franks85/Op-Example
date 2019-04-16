import React from "react";

const intro = () => {
  return (
    <div className="jumbotron mt-5">
      <h1 className="display-4">Open Appalti</h1>
      <p className="lead">
      è un'applicazione web che assolve agli obblighi previsti dalla legge 190/2012 così come regolamentato dall'Autorita di Vigilanza per i Contratti Pubblici. 
      </p>
      <hr className="my-4" />
      <p>
      Consente l'immissione dati dei lotti e delle relative aziende ad essi collegati, la generazione delle comunicazioni per l'AVCP e la creazione del dataset in formato XML. 
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/#" role="button">
          Prova
        </a>
      </p>
    </div>
  );
};

export default intro;
