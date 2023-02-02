import { FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 450 }}>
      <CardContent>
        <FilterLiveSearch source="name" placeholder="Buscar por nombre..." />
        <FilterList label="Estado" icon={<AssignmentIndIcon />}>
          <FilterListItem label="Pendiente" value={{ isPending: true }} />
          <FilterListItem label="Aprobado" value={{ isPending: false }} />      
        </FilterList>
        <FilterList label="Modalidad" icon={<MapsHomeWorkIcon />}>
          <FilterListItem
            label="Presencial"
            value={{ modality: "presencial" }}
          />
          <FilterListItem label="Virtual" value={{ modality: "virtual" }} />
          <FilterListItem label="Híbrido" value={{ modality: "hibrido" }} />
        </FilterList>
        <FilterList label="Carpooling" icon={<NoCrashIcon />}>
          <FilterListItem label="Sí" value={{ carpooling: true }} />
          <FilterListItem label="No" value={{ carpooling: false }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default Filters;
