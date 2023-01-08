import { List, Datagrid, TextField, EditButton, Pagination } from "react-admin";
import InfoIcon from "@mui/icons-material/Info";
import Filters from "./Filters";
import { Emptyness } from "../utils";

const PressList = (props) => {
  return (
    <List
      {...props}
      aside={<Filters />}
      emptyWhileLoading
      pagination={<Pagination limit={<Emptyness />} />}
    >
      <Datagrid bulkActionButtons={false}>
        <TextField source="date" label="Fecha" />
        <TextField source="media" label="Medio" />
        <TextField source="title" label="Titular" />
        <TextField source="type" label="Soporte" />
        <EditButton
          basepath="/api/admin/press"
          label="Ver Detalles"
          icon={<InfoIcon />}
        />
      </Datagrid>
    </List>
  );
};

export default PressList;
