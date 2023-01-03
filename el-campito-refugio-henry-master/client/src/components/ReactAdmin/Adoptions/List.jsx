import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

const AdopList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Adoptante" />
        <TextField source="email" label="e-mail" />
        <TextField source="dog" label="Camperito" />
        <EditButton basepath="/api/admin/adoptions" />
        <DeleteWithConfirmButton basepath="/api/admin/adoptions" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default AdopList;
