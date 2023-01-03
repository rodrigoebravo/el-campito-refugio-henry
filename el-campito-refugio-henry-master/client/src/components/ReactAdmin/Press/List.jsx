import { List, Datagrid, TextField, EditButton } from "react-admin";
import InfoIcon from "@mui/icons-material/Info";

const PressList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="media" label="Medio" />
        <TextField source="title" label="Titulo" />
        <TextField source="date" label="Fecha" />
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
