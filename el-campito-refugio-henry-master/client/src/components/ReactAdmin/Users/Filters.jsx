import {
  FilterLiveSearch,
  FilterList,
  FilterListItem,
  Loading,
  useListContext,
} from "react-admin";
import { Card, CardContent } from "@mui/material";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const Filters = () => {
  const { isLoading } = useListContext();
  if (isLoading)
    return (
      <Loading
        sx={{ order: -1, ml: 90, mt: 8, width: 400, height: 650 }}
        loadingPrimary="Cargando resultados"
        loadingSecondary="Aguarde por favor"
      />
    );
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 280, height: 480 }}>
      <CardContent>
        <FilterLiveSearch source="name" placeholder="Buscar por nombre..." />
        <FilterList label="Roles" icon={<SupervisedUserCircleIcon />}>
          <FilterListItem
            label="Super Administrador"
            value={{ roles: "superAdmin" }}
          />
          <FilterListItem label="Administrador" value={{ roles: "public" }} />
          <FilterListItem label="Voluntario" value={{ roles: "voluntario" }} />
          <FilterListItem label="Equipo 1" value={{ roles: "equipo1" }} />
          <FilterListItem label="Equipo 2" value={{ roles: "equipo2" }} />
          <FilterListItem label="Equipo 3" value={{ roles: "equipo3" }} />
          <FilterListItem label="Visitante" value={{ roles: "visitante" }} />
          <FilterListItem label="Donante" value={{ roles: "donante" }} />
          <FilterListItem label="Padrino" value={{ roles: "padrino" }} />
          <FilterListItem label="Sponsor" value={{ roles: "sponsor" }} />
          <FilterListItem label="Adoptante" value={{ roles: "adoptante" }} />
          <FilterListItem label="Publico" value={{ roles: "public" }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default Filters;
