import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

import Filters from "./Filters";

const UsersList = (props) => {
  return (
    <List {...props} aside={<Filters />}>
      <Datagrid>
        <TextField source="name" label="Nombre" />
        <TextField source="email" label="Email" />
        <TextField source="roles" label="Rol" />
        <DeleteWithConfirmButton basepath="/api/admin/users" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default UsersList;
