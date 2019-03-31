import React from "react";
import { euroFormat } from "../../../../Util/helpFunction/tableColumnFormatter";
import Link from "../../../../UI/link/link";
// lotti - Richest table

export const richest = [
  {
    id: 1,
    name: <Link href='/'>APPALTO PULIZIA ARENILE DEMANIALE E MANUTENZIO...</Link>,
    amount: 3441765,
    payed: 5027315,
    start: "01/01/2015",
    end: "05/12/2017"
  },
  {
    id: 2,
    name: <Link href='/'>Appalto servizio refezione scolastica - determ...</Link>,
    amount: 3109425,
    payed: 1355245,
    start: "01/09/2016",
    end: "31/07/2021"
  },
  {
    id: 3,
    name: <Link href='/'>PROCEDURA APERTA PER L'AFFIDAMENTO DELLA GESTI..</Link>,
    amount: 2840070,
    payed: 1562309,
    start: "01/09/2017",
    end: "31/08/2020"
  },
  {
    id: 4,
    name: <Link href='/'>FORNITURA ORDINARIA FARMACI, PARAFARMACI E ALT...</Link>,
    amount: 2400000,
    payed: 2644586,
    start: "01/09/2015",
    end: "-"
  },
  {
    id: 5,
    name: <Link href='/'>PROCEDURA APERTA ART.60 DEL D.LGS N.50/2016 PE...</Link>,
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
    name: <Link href='/'>Rinnovo canoni di manutenzione software</Link>,
    amount: 32181,
    year: "2016"
  },
  {
    id: 2,
    name: <Link href='/'>Rinnovo canoni di manutenzione</Link>,
    amount: 22985,
    year: "2016"
  },
  {
    id: 3,
    name: <Link href='/'>Acquisto n.2 server</Link>,
    amount: 22883,
    year: "2016"
  },
  {
    id: 4,
    name: <Link href='/'>AFFIDAMENTO DI SERVIZI TECNICI PROFESSIONALI RE...</Link>,
    amount: 20685,
    year: "2018"
  },
  {
    id: 5,
    name: <Link href='/'>Rinnovo canoni di manutenzione software</Link>,
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
    name: <Link href='/'>NOLEGGIO TERMINALI MOBILI</Link>,
    amount: 32,
    dateStart: "17/12/2012"
  },
  {
    id: 2,
    name: <Link href='/'>SPESA PER SERVIZIO DI NOTIFICA ATTI DA INFRAZIO...</Link>,
    amount: 8450,
    dateStart: "25/01/2013"
  },
  {
    id: 3,
    name: <Link href='/'>SPESA PER PONTE RADIO E BANCHE DATI ACI-PRA E M...</Link>,
    amount: 10000,
    dateStart: "05/02/2013"
  },
  {
    id: 4,
    name: <Link href='/'>IMPEGNO DI SPESA PER MONITORAGGI DEI CAMPI MAGN...</Link>,
    amount: 12397,
    dateStart: "08/03/2013"
  },
  {
    id: 5,
    name: <Link href='/'>MANUTENZIONE PARCOMETRI</Link>,
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
    name: "Completed",
    value: 794
  },
  {
    id: 2,
    name: "Waiting to start",
    value: 115
  },
  {
    id: 3,
    name: "Not completed",
    value: 91
  }
];
