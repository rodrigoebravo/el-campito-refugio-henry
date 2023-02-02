import { FilterLiveSearch } from "react-admin";
import { Card, CardContent } from "@mui/material";

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 200 }}>
      <CardContent>
        <h4>Nombre del perro</h4>
        <FilterLiveSearch source="nameDog" placeholder="Buscar por nombre..." />
        <h4>Nombre del aportante</h4>
        <FilterLiveSearch
          source="name"
          placeholder="Buscar por aportante..."
        />       
      </CardContent>
    </Card>
  );
};

export default Filters;
