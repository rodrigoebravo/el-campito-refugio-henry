import { FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import TransgenderIcon from "@mui/icons-material/Transgender";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AddHomeIcon from "@mui/icons-material/AddHome";

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 450 }}>
      <CardContent>
        <FilterLiveSearch source="name" placeholder="Buscar por nombre..." />
        <FilterList label="Adoptable?" icon={<AddHomeIcon />}>
          <FilterListItem label="Sí" value={{ toAdopt: true }} />
          <FilterListItem label="No" value={{ toAdopt: false }} />
        </FilterList>
        {/* <FilterList label="Apadrinable" icon={<AccessibilityNewIcon />}>
          <FilterListItem label="Sí" value={{ godparents: true }} />
          <FilterListItem label="No" value={{ godparents: false }} />
        </FilterList> */}
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
};

export default Filters;
