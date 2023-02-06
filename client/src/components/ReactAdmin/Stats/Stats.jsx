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
import { Card, CardContent, Grid, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { StaticRouter } from "react-router";

const data = {
  2020: [
    {
      name: "Enero",
      Adiciones: 5,
      Adopciones: 20,
      Bajas: 1,
      Contribuciones: 8000,
    },
    {
      name: "Febrero",
      Adiciones: 2,
      Adopciones: 12,
      Bajas: 2,
      Contribuciones: 8500,
    },
    {
      name: "Marzo",
      Adiciones: 12,
      Adopciones: 23,
      Bajas: 0,
      Contribuciones: 7000,
    },
    {
      name: "Abril",
      Adiciones: 9,
      Adopciones: 5,
      Bajas: 0,
      Contribuciones: 8000,
    },
    {
      name: "Mayo",
      Adiciones: 18,
      Adopciones: 12,
      Bajas: 0,
      Contribuciones: 7500,
    },
    {
      name: "Junio",
      Adiciones: 23,
      Adopciones: 34,
      Bajas: 3,
      Contribuciones: 9000,
    },
    {
      name: "Julio",
      Adiciones: 26,
      Adopciones: 35,
      Bajas: 1,
      Contribuciones: 8000,
    },
    {
      name: "Agosto",
      Adiciones: 12,
      Adopciones: 13,
      Bajas: 1,
      Contribuciones: 10000,
    },
    {
      name: "Septiembre",
      Adiciones: 24,
      Adopciones: 31,
      Bajas: 2,
      Contribuciones: 9000,
    },
    {
      name: "Octubre",
      Adiciones: 17,
      Adopciones: 26,
      Bajas: 0,
      Contribuciones: 8600,
    },
    {
      name: "Noviembre",
      Adiciones: 31,
      Adopciones: 29,
      Bajas: 0,
      Contribuciones: 9100,
    },
    {
      name: "Diciembre",
      Adiciones: 35,
      Adopciones: 12,
      Bajas: 5,
      Contribuciones: 10000,
    },
  ],
  2021: [
    {
      name: "Enero",
      Adiciones: 31,
      Adopciones: 40,
      Bajas: 3,
      Contribuciones: 9100,
    },
    {
      name: "Febrero",
      Adiciones: 12,
      Adopciones: 6,
      Bajas: 0,
      Contribuciones: 10000,
    },
    {
      name: "Marzo",
      Adiciones: 34,
      Adopciones: 23,
      Bajas: 0,
      Contribuciones: 9000,
    },
    {
      name: "Abril",
      Adiciones: 38,
      Adopciones: 15,
      Bajas: 0,
      Contribuciones: 8800,
    },
    {
      name: "Mayo",
      Adiciones: 41,
      Adopciones: 29,
      Bajas: 1,
      Contribuciones: 9600,
    },
    {
      name: "Junio",
      Adiciones: 41,
      Adopciones: 25,
      Bajas: 3,
      Contribuciones: 7000,
    },
    {
      name: "Julio",
      Adiciones: 51,
      Adopciones: 21,
      Bajas: 1,
      Contribuciones: 12000,
    },
    {
      name: "Agosto",
      Adiciones: 12,
      Adopciones: 13,
      Bajas: 1,
      Contribuciones: 11000,
    },
    {
      name: "Septiembre",
      Adiciones: 24,
      Adopciones: 31,
      Bajas: 2,
      Contribuciones: 10500,
    },
    {
      name: "Octubre",
      Adiciones: 17,
      Adopciones: 26,
      Bajas: 0,
      Contribuciones: 13000,
    },
    {
      name: "Noviembre",
      Adiciones: 31,
      Adopciones: 29,
      Bajas: 0,
      Contribuciones: 14000,
    },
    {
      name: "Diciembre",
      Adiciones: 35,
      Adopciones: 12,
      Bajas: 5,
      Contribuciones: 9000,
    },
  ],
  2022: [
    {
      name: "Enero",
      Adiciones: 50,
      Adopciones: 20,
      Bajas: 1,
      Contribuciones: 10000,
    },
    {
      name: "Febrero",
      Adiciones: 37,
      Adopciones: 23,
      Bajas: 2,
      Contribuciones: 10600,
    },
    {
      name: "Marzo",
      Adiciones: 46,
      Adopciones: 28,
      Bajas: 0,
      Contribuciones: 10700,
    },
    {
      name: "Abril",
      Adiciones: 45,
      Adopciones: 35,
      Bajas: 1,
      Contribuciones: 10900,
    },
    {
      name: "Mayo",
      Adiciones: 50,
      Adopciones: 41,
      Bajas: 2,
      Contribuciones: 9000,
    },
    {
      name: "Junio",
      Adiciones: 52,
      Adopciones: 34,
      Bajas: 3,
      Contribuciones: 8700,
    },
    {
      name: "Julio",
      Adiciones: 53,
      Adopciones: 35,
      Bajas: 1,
      Contribuciones: 12000,
    },
    {
      name: "Agosto",
      Adiciones: 54,
      Adopciones: 38,
      Bajas: 1,
      Contribuciones: 13000,
    },
    {
      name: "Septiembre",
      Adiciones: 55,
      Adopciones: 33,
      Bajas: 2,
      Contribuciones: 12100,
    },
    {
      name: "Octubre",
      Adiciones: 47,
      Adopciones: 41,
      Bajas: 0,
      Contribuciones: 12500,
    },
    {
      name: "Noviembre",
      Adiciones: 43,
      Adopciones: 30,
      Bajas: 0,
      Contribuciones: 11000,
    },
    {
      name: "Diciembre",
      Adiciones: 46,
      Adopciones: 29,
      Bajas: 5,
      Contribuciones: 12000,
    },
  ],
};

const Filters = ({ prop, prep, state }) => (
  <Card sx={{ order: -1, mr: 2, mt: 8 }}>
    <CardContent>
      <Button onClick={(e) => prop(e)} fullWidth>
        {state ? "Movimiento de perros" : "Ingresos Economicos"}
      </Button>
      <br></br>
      <FormControl fullWidth>
        <InputLabel>Año</InputLabel>
        <Select label="Año" onChange={(e) => prep(e)} defaultValue={2022}>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
      </FormControl>
    </CardContent>
  </Card>
);

const Linear = ({ year }) => (
  <LineChart
    width={1500}
    height={750}
    data={data[year]}
    margin={{
      top: 10,
      right: 5,
      left: 10,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis datakey />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="Contribuciones"
      stroke="#39A275"
      strokeWidth={4}
      activeDot={{ r: 8 }}
    />
  </LineChart>
);

const Barra = ({ year }) => {
  return (
    <BarChart
      width={1500}
      height={750}
      data={data[year]}
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
      <Bar dataKey="Adiciones" fill="#39A275" />
      <Bar dataKey="Adopciones" fill="#194A8D" />
      <Bar dataKey="Bajas" fill="#DF1C44" />
    </BarChart>
  );
};

export default function Grafico() {
  const [state, setstate] = useState(true);
  const [year, setYear] = useState(2022);

  let handleChange = (event) => {
    setstate(!state);
  };

  let handleYear = (event) => {
    setYear(event.target.value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Filters prop={handleChange} prep={handleYear} state={state} />
      </Grid>
      <Grid item xs={10}>
        <Card sx={{ mr: 0, ml: 0, mt: 5 }} fullWidth>
          <CardContent>
            {state ? <Barra year={year} /> : <Linear year={year} />}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
