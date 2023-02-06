import { FilterLiveSearch } from "react-admin";
import { Card, CardContent } from "@mui/material";

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 300 }}>
      <CardContent>
        <h4>Titular</h4>
        <FilterLiveSearch source="title" placeholder="Buscar por titular..." />
        <h4>Medio</h4>
        <FilterLiveSearch source="media" placeholder="Buscar por medio..." />
        <h4>Soporte</h4>
        <FilterLiveSearch source="type" placeholder="Buscar por soporte..." />
      </CardContent>
    </Card>
  );
};

export default Filters;
