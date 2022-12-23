import {
  SavedQueriesList,
  FilterLiveSearch,
  FilterList,
  FilterListItem,
} from "react-admin";
import { Card, CardContent } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import TransgenderIcon from "@mui/icons-material/Transgender";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AddHomeIcon from "@mui/icons-material/AddHome";

const Filters = () => (
  <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 650 }}>
    <CardContent>
      <SavedQueriesList title="Filtros guardados" />
      <FilterLiveSearch source="name" />
      <FilterList label="Adoptable" icon={<AddHomeIcon />}>
        <FilterListItem label="Sí" value={{ adoptable: true }} />
        <FilterListItem label="No" value={{ adoptable: false }} />
      </FilterList>
      <FilterList label="Apadrinable" icon={<AccessibilityNewIcon />}>
        <FilterListItem label="Sí" value={{ apadrinable: true }} />
        <FilterListItem label="No" value={{ apadrinable: false }} />
      </FilterList>
      <FilterList label="Edad" icon={<CakeIcon />}>
        <FilterListItem label="Cachorro" value={{ age: "cachorro" }} />
        <FilterListItem label="Adulto" value={{ age: "adulto" }} />
        <FilterListItem label="Viejito" value={{ age: "viejito" }} />
      </FilterList>
      <FilterList label="Sexo" icon={<TransgenderIcon />}>
        <FilterListItem label="Macho" value={{ gender: "macho" }} />
        <FilterListItem label="Hembra" value={{ gender: "hembra" }} />
      </FilterList>
    </CardContent>
  </Card>
);

export default Filters;
