import { percentFormat, euroFormat } from "../../../Util/helpFunction/tableColumnFormatter";

// Aziende - table

export const contractsWin = [
  {
    id: 1,
    name: "GAIA GARDEN DI MAGI GALLUZZI A.",
    contracts: 115
  },
  {
    id: 2,
    name: "ELIOTECNICA DI ARAMINI ISABELLA E C",
    contracts: 111
  },
  {
    id: 3,
    name: "COOPERATIVA SOCIALE PRO.GE.I.L.",
    contracts: 104
  },
  {
    id: 4,
    name: "COVIDIEN ITALIA SPA",
    contracts: 98
  },
  {
    id: 5,
    name: "MEDICAL SPA",
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
    style: { color: "#3366cc" }
  },
  {
    dataField: "contracts",
    text: "No. contracts"
  }
];

// Più ricchi - pieChart

export const amount = [
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
    name: "NUOVA FERRAMENTA SRL",
    rating: 100,
    selected: 93
  },
  {
    id: 2,
    name: "MOSCHINI IMPIANTI DI MOSCHINI SIMON",
    rating: 100,
    selected: 78
  },
  {
    id: 3,
    name: "MARCHE ELETTRO FORNITURE AN SRL",
    rating: 100,
    selected: 71
  },
  {
    id: 4,
    name: "IMP. EDILE FRANCESCHINI FRANCESCO",
    rating: 100,
    selected: 67
  },
  {
    id: 5,
    name: "INFISSI DI COGNINI SIMONE",
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
