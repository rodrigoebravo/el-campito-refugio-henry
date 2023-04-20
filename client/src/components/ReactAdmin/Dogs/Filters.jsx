import { FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import TransgenderIcon from "@mui/icons-material/Transgender";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AddHomeIcon from "@mui/icons-material/AddHome";
import PetsIcon from "@mui/icons-material/Pets";

const Filters = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 750 }}>
      <CardContent>
        <FilterLiveSearch source="name" placeholder="Buscar por nombre..." />
        <FilterList label="Estado" icon={<PetsIcon />}>
          <FilterListItem label="Activo" value={{ isDelete: false }} />
          <FilterListItem label="Inactivo" value={{ isDelete: true }} />
        </FilterList>
        <FilterList label="Es adoptable?" icon={<AddHomeIcon />}>
          <FilterListItem label="Sí" value={{ toAdopt: true }} />
          <FilterListItem label="No" value={{ toAdopt: false }} />
        </FilterList>
        <FilterList label="Es apadrinable?" icon={<AccessibilityNewIcon />}>
          <FilterListItem label="Sí" value={{ isSponsored: true }} />
          <FilterListItem label="No" value={{ isSponsored: false }} />
        </FilterList>
        <FilterList label="Edad" icon={<CakeIcon />}>
          <FilterListItem label="Cachorro" value={{ age: "cachorro" }} />
          <FilterListItem label="Adulto jóven" value={{ age: "adulto jóven" }} />
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
