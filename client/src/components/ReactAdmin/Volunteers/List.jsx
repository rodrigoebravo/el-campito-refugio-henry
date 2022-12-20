import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

const VoluntList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Voluntario" />
        <TextField source="birthday" label="Fecha de Nacimiento" />
        <TextField source="email" label="Email" />
        <TextField source="telephone" label="Teléfono" />
        <EditButton basepath="/api/admin/volunteers" />
        <DeleteWithConfirmButton basepath="/api/admin/volunteers" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default VoluntList;
