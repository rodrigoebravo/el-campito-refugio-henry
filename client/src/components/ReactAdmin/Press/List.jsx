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
        <TextField source="media" label="Medio" />
        <TextField source="title" label="Título" />
        <TextField source="date" label="Fecha" />
        <EditButton basepath="/api/admin/press" />
        <DeleteWithConfirmButton basepath="/api/admin/press" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default PressList;
