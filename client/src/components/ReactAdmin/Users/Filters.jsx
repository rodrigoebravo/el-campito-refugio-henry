import { FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 300 }}>
      <CardContent>
        <h4>Nombre</h4>
        <FilterLiveSearch source="name" placeholder="Buscar por nombre..." />
        <h4>Rol</h4>
        <FilterLiveSearch source="roles" placeholder="Buscar por rol..." />
        <FilterList label="Condición" icon={<AssignmentIndIcon />}>
          <FilterListItem label="Activo" value={{ isDelete: false }} />
          <FilterListItem label="Inactivo" value={{ isDelete: true }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default Filters;
