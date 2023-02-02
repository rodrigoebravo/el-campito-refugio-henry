import {
  List,
  Datagrid,
  TextField,
  Pagination,
  useGetList,
  EditButton,
  BooleanField,
  DateField,
} from "react-admin";
import InfoIcon from "@mui/icons-material/Info";
import Filters from "./Filters";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdjustIcon from '@mui/icons-material/Adjust';
import { Loader, Emptyness } from "../utils";

const VoluntList = () => {
  const { data, isLoading } = useGetList("api/admin/volunteers", {
    page: 1,
    perPage: 10,
  });
  if (isLoading) return <Loader />;
  return (
    <List
      {...data}
      aside={<Filters />}
      pagination={<Pagination limit={<Emptyness />} />}
    >
      <Datagrid bulkActionButtons={false}>
        <DateField source="date" label="Fecha" />
        <TextField source="name" label="Voluntario" sortable={false} />
        <TextField source="modality" label="Modalidad" sortable={false} />
        <TextField source="email" label="Email" sortable={false} />
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
          basepath="/api/admin/volunteers"
          label="Ver detalles"
          icon={<InfoIcon />}
        />
      </Datagrid>
    </List>
  );
};

export default VoluntList;
