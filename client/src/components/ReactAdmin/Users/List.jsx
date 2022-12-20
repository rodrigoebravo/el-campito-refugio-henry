import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Nombre" />
        <TextField source="email" label="Email" />
        <TextField source="roles" label="Rol" />
        <EditButton basepath="/api/admin/users" />
        <DeleteWithConfirmButton basepath="/api/admin/users" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default UsersList;
