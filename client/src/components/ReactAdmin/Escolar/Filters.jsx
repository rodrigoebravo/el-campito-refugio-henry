import { FilterLiveSearch } from "react-admin";
import { Card, CardContent } from "@mui/material";

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 300 }}>
      <CardContent>
        <h4>Titulo</h4>
        <FilterLiveSearch source="title" placeholder="Buscar por titular..." />
        <h4>Categoría</h4>
        <FilterLiveSearch source="category" placeholder="Buscar por categoría..." />
        <h4>Fecha</h4>
        <FilterLiveSearch source="date" placeholder="Buscar por fecha..." />
      </CardContent>
    </Card>
  );
};

export default Filters;
