import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

const PressList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="media" label="Nombre" />
        <TextField source="title" label="Email" />
        <TextField source="date" label="Rol" />
        <EditButton basepath="/api/admin/press" />
        <DeleteWithConfirmButton basepath="/api/admin/press" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default PressList;
