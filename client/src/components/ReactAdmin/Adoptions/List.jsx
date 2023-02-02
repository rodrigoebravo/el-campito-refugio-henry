import {
  List,
  Datagrid,
  TextField,
  EditButton,
  useGetList,
  Pagination,
  DateField,
  BooleanField,
} from "react-admin";
import Filters from "./Filters";
import { Loader, Emptyness, exporter } from "../utils";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdjustIcon from '@mui/icons-material/Adjust';

const AdopList = () => {
  const { data, isLoading } = useGetList("api/admin/adoptions", {
    page: 1,
    perPage: 10,
  });
  if (isLoading) return <Loader />;
  return (
    <List
      {...data}
      exporter={exporter}
      aside={<Filters />}
      pagination={<Pagination limit={<Emptyness />} />}
    >
      <Datagrid bulkActionButtons={false}>
        <DateField source="date" label="Fecha" />
        <TextField source="nameDog" label="Camperito" sortable={false} />
        <TextField source="email" label="user ID" sortable={false} />
        <TextField source="nameUser" label="Adoptante" sortable={false} />
        <TextField source="phone" label="Teléfono" sortable={false} />
        <BooleanField
          source="isPending"
          label="Condición"
          TrueIcon={AdjustIcon}
          FalseIcon={CheckCircleIcon}
          valueLabelTrue="Inactivo"
          valueLabelFalse="Activo"
          sortable={false}
        />
        <EditButton
          basepath="/api/admin/dogs"
          label="Ver detalles"
          icon={<InfoIcon />}
        />
      </Datagrid>
    </List>
  );
};

export default AdopList;
