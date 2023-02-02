import { FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 300 }}>
      <CardContent>
        <h4>Titulo</h4>
        <FilterLiveSearch source="title" placeholder="Buscar por titular..." />

        <h4>Categoría</h4>       
        <FilterList label="Elegir una opción" >
          <FilterListItem label="Campito Escolar" value={{ category: "escolar" }} />
          <FilterListItem label="Talleres" value={{ category: "talleres" }} />
          <FilterListItem label="Charlas" value={{ category: "charlas" }} />
          <FilterListItem label="Capacitaciones" value={{ category: "capacitaciones" }} />
        </FilterList>
    
      </CardContent>
    </Card>
  );
};

export default Filters;
