import { euroFormat } from "../../../Util/helpFunction/tableColumnFormatter";

// lotti - Richest table

export const richest = [
  {
    id: 1,
    name: "APPALTO PULIZIA ARENILE DEMANIALE E MANUTENZIO...",
    amount: 3441765,
    payed: 5027315,
    start: "01/01/2015",
    end: "05/12/2017"
  },
  {
    id: 2,
    name: "Appalto servizio refezione scolastica - determ...",
    amount: 3109425,
    payed: 1355245,
    start: "01/09/2016",
    end: "31/07/2021"
  },
  {
    id: 3,
    name: "PROCEDURA APERTA PER L'AFFIDAMENTO DELLA GESTI..",
    amount: 2840070,
    payed: 1562309,
    start: "01/09/2017",
    end: "31/08/2020"
  },
  {
    id: 4,
    name: "FORNITURA ORDINARIA FARMACI, PARAFARMACI E ALT...",
    amount: 2400000,
    payed: 2644586,
    start: "01/09/2015",
    end: "-"
  },
  {
    id: 5,
    name: "PROCEDURA APERTA ART.60 DEL D.LGS N.50/2016 PE...",
    amount: 1932913,
    payed: 271779,
    start: "01/02/2017",
    end: "31/12/2019"
  }
];

export const richestColumns = [
  {
    dataField: "id",
    text: "#"
  },
  {
    dataField: "name",
    text: "Contract",
    style: { color: "#3366cc" }
  },
  {
    dataField: "amount",
    text: "Amount",
    formatter: euroFormat
  },
  {
    dataField: "payed",
    text: "Payed",
    formatter: euroFormat
  },
  {
    dataField: "start",
    text: "Start"
  },
  {
    dataField: "end",
    text: "End"
  }
];

// Lotti - Waiting To Start table

export const waitingStart = [
  {
    id: 1,
    name: "Rinnovo canoni di manutenzione software",
    amount: 32181,
    year: "2016"
  },
  {
    id: 2,
    name: "Rinnovo canoni di manutenzione",
    amount: 22985,
    year: "2016"
  },
  {
    id: 3,
    name: "Acquisto n.2 server",
    amount: 22883,
    year: "2016"
  },
  {
    id: 4,
    name: "AFFIDAMENTO DI SERVIZI TECNICI PROFESSIONALI RE...",
    amount: 20685,
    year: "2018"
  },
  {
    id: 5,
    name: "Rinnovo canoni di manutenzione software",
    amount: 18370,
    year: "2016"
  }
];

export const waitingStartColumns = [
  {
    dataField: "id",
    text: "#"
  },
  {
    dataField: "name",
    text: "Contract",
    style: { color: "#3366cc" }
  },
  {
    dataField: "amount",
    text: "Amount",
    formatter: euroFormat
  },
  {
    dataField: "year",
    text: "Year"
  }
];

// Lotti - Not Completed table

export const notCompleted = [
  {
    id: 1,
    name: "NOLEGGIO TERMINALI MOBILI",
    amount: 32,
    dateStart: "17/12/2012"
  },
  {
    id: 2,
    name: "SPESA PER SERVIZIO DI NOTIFICA ATTI DA INFRAZIO...",
    amount: 8450,
    dateStart: "25/01/2013"
  },
  {
    id: 3,
    name: "SPESA PER PONTE RADIO E BANCHE DATI ACI-PRA E M...",
    amount: 10000,
    dateStart: "05/02/2013"
  },
  {
    id: 4,
    name: "IMPEGNO DI SPESA PER MONITORAGGI DEI CAMPI MAGN...",
    amount: 12397,
    dateStart: "08/03/2013"
  },
  {
    id: 5,
    name: "MANUTENZIONE PARCOMETRI",
    amount: 2459,
    dateStart: "09/04/2013"
  }
];

export const notCompletedColumns = [
  {
    dataField: "id",
    text: "#"
  },
  {
    dataField: "name",
    text: "Contract",
    style: { color: "#3366cc" }
  },
  {
    dataField: "amount",
    text: "Amount",
    formatter: euroFormat
  },
  {
    dataField: "dateStart",
    text: "Date start"
  }
];

// Lotti - status chart (example)

export const statusPie = [
  {
    id: 1,
    name: 'Completed',
    value: 794
  },
  {
    id: 2,
    name: 'Waiting to start',
    value: 115
  },
  {
    id: 3,
    name: 'Not completed',
    value: 91
  }
];
