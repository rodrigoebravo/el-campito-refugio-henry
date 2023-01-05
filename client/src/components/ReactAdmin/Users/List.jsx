import {
  List,
  Datagrid,
  TextField,
  DeleteWithConfirmButton,
  EditButton,
} from "react-admin";

import PersonOffIcon from "@mui/icons-material/PersonOff";
import InfoIcon from "@mui/icons-material/Info";

import Filters from "./Filters";

const UsersList = (props) => {
  return (
    <List {...props} aside={<Filters />}>
      <Datagrid>
        <TextField source="name" label="Nombre" />
        <TextField source="email" label="Email" />
        <TextField source="roles" label="Rol" />
        <EditButton
          basepath="/api/admin/dogs"
          label="Ver detalles"
          icon={<InfoIcon />}
        />
        <DeleteWithConfirmButton
          basepath="/api/admin/users"
          label="Dar de baja"
          icon={<PersonOffIcon />}
        />
      </Datagrid>
    </List>
  );
};

export default UsersList;
