import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

const DogList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="data.name" label="Nombre" />
        <TextField source="data.email" label="Email" />
        <TextField source="data.roles" label="Rol" />
        <EditButton basepath="/api/users/admin/users" />
        <DeleteWithConfirmButton basepath="/api/users/admin/users" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default DogList;
