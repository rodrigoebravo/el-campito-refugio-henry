import { FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import BeenhereIcon from '@mui/icons-material/Beenhere';

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 450 }}>
      <CardContent>
        <h4>Nombre del perro</h4>
        <FilterLiveSearch source="nameDog" placeholder="Buscar por nombre..." />
        <h4>Nombre del adoptante</h4>
        <FilterLiveSearch
          source="nameUser"
          placeholder="Buscar por adoptante..."
        />
        <FilterList label="Estado" icon={<BeenhereIcon />}>
          <FilterListItem label="Pendientes" value={{ isPending: true }} />
          <FilterListItem label="Aprobados" value={{ isPending: false }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default Filters;
