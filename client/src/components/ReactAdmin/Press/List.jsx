import { List, Datagrid, TextField, EditButton } from "react-admin";
import InfoIcon from "@mui/icons-material/Info";

const PressList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
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
