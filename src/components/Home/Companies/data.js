import React from 'react'
import { percentFormat, euroFormat } from "../../../Util/helpFunction/tableColumnFormatter";
import Link from '../../../UI/link/tableLink'
// Aziende - table

export const contractsWin = [
  {
    id: 1,
    name: <Link>GAIA GARDEN DI MAGI GALLUZZI A.</Link>,
    contracts: 115
  },
  {
    id: 2,
    name: <Link>ELIOTECNICA DI ARAMINI ISABELLA E C</Link>,
    contracts: 111
  },
  {
    id: 3,
    name: <Link>COOPERATIVA SOCIALE PRO.GE.I.L.</Link>,
    contracts: 104
  },
  {
    id: 4,
    name: <Link>COVIDIEN ITALIA SPA</Link>,
    contracts: 98
  },
  {
    id: 5,
    name: <Link>MEDICAL SPA</Link>,
    contracts: 95
  }
];

export const contractsColumns = [
  {
    dataField: "id",
    text: "#"
  },
  {
    dataField: "name",
    text: "Company name",
  },
  {
    dataField: "contracts",
    text: "No. contracts"
  }
];

// Più ricchi - pieChart

export const amountPie = [
  {
    id: 1,
    name: "GlaxoSmithKline S.p.A.",
    value: 59409293
  },
  {
    id: 2,
    name: "ELIOTECNICA DI ARAMINI ISABELLA E C",
    value: 24485075
  },
  {
    id: 3,
    name: "CONSORZIO ARTIGIANI ROMAGNOLO SOC. COOP.VA",
    value: 24092352
  },
  {
    id: 4,
    name: "DUOMO GPA SRL, VIALE SARCA 195, 20126 MILANO (MI)",
    value: 17858000
  },
  {
    id: 5,
    name: "COOPERATIVA SOCIALE PRO.GE.I.L.",
    value: 16631279
  },
  {
    id: 6,
    name: "Other companies",
    value: 301835000
  }
];

export const amount = [
  {
    id: 1,
    name: <Link>GlaxoSmithKline S.p.A.</Link>,
    value: 59409293
  },
  {
    id: 2,
    name: <Link>ELIOTECNICA DI ARAMINI ISABELLA E C</Link>,
    value: 24485075
  },
  {
    id: 3,
    name: <Link>CONSORZIO ARTIGIANI ROMAGNOLO SOC. COOP.VA</Link>,
    value: 24092352
  },
  {
    id: 4,
    name: <Link>DUOMO GPA SRL, VIALE SARCA 195, 20126 MILANO (MI)</Link>,
    value: 17858000
  },
  {
    id: 5,
    name: <Link>COOPERATIVA SOCIALE PRO.GE.I.L.</Link>,
    value: 16631279
  },
  {
    id: 6,
    name: <Link>Other companies</Link>,
    value: 301835000
  }
];

export const amountColumns = [
  {
    dataField: "id",
    text: "#"
  },
  {
    dataField: "name",
    text: "Company name",
    style: { color: "#3366cc" }
  },
  {
    dataField: "value",
    text: "Total",
    formatter: euroFormat
  }
];

// tasso di successo - table

export const successRate = [
  {
    id: 1,
    name: <Link>NUOVA FERRAMENTA SRL</Link>,
    rating: 100,
    selected: 93
  },
  {
    id: 2,
    name: <Link>MOSCHINI IMPIANTI DI MOSCHINI SIMON</Link>,
    rating: 100,
    selected: 78
  },
  {
    id: 3,
    name: <Link>MARCHE ELETTRO FORNITURE AN SRL</Link>,
    rating: 100,
    selected: 71
  },
  {
    id: 4,
    name: <Link>IMP. EDILE FRANCESCHINI FRANCESCO</Link>,
    rating: 100,
    selected: 67
  },
  {
    id: 5,
    name: <Link>INFISSI DI COGNINI SIMONE</Link>,
    rating: 100,
    selected: 60
  }
];

export const successRateColumns = [
  {
    dataField: "id",
    text: "#"
  },
  {
    dataField: "name",
    text: "Company name",
    style: { color: "#3366cc" }
  },
  {
    dataField: "rating",
    text: "Success Rate",
    formatter: percentFormat
  },
  {
    dataField: "selected",
    text: 'No. selected'
  }
];
