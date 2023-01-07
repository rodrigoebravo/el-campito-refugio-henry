import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { Card, CardContent, Grid } from "@mui/material";
// import { StaticRouter } from "react-router";

const data = [
  {
    name: "Mes A",
    apadrinados: 40,
    adopciones: 24,
    amt: 24,
  },
  {
    name: "Mes B",
    apadrinados: 30,
    adopciones: 13,
    amt: 22,
  },
  {
    name: "Mes C",
    apadrinados: 20,
    adopciones: 98,
    amt: 22,
  },
  {
    name: "Mes D",
    apadrinados: 27,
    adopciones: 39,
    amt: 20,
  },
  {
    name: "Mes E",
    apadrinados: 18,
    adopciones: 48,
    amt: 21,
  },
  {
    name: "Mes F",
    apadrinados: 23,
    adopciones: 38,
    amt: 25,
  },
  {
    name: "Mes G",
    apadrinados: 34,
    adopciones: 43,
    amt: 21,
  },
];

const Filters = ({ prop }) => (
  <Card sx={{ order: -1, mr: 2, mt: 8 }}>
    <CardContent>
      <button onClick={(e) => prop(e)}>Cambiar</button>
    </CardContent>
  </Card>
);

const Linear = () => (
  <LineChart
    width={1100}
    height={750}
    data={data}
    margin={{
      top: 10,
      right: 5,
      left: 10,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="adopciones"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
    <Line type="monotone" dataKey="apadrinados" stroke="#82ca9d" />
  </LineChart>
);

const Barra = () => (
  <BarChart
    width={1100}
    height={750}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="adopciones" fill="#8884d8" />
    <Bar dataKey="apadrinados" fill="#82ca9d" />
  </BarChart>
);

export default function Grafico() {
  const [state, setstate] = useState(true);

  let handleChange = (event) => {
    setstate(!state);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Filters prop={handleChange} />
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ mr: 0, ml: 0, mt: 5 }}>
          <CardContent>{state ? <Barra /> : <Linear />}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
