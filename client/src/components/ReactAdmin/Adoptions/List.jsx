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
        <TextField source="nameDog" label="Camperito" />
        <TextField source="email" label="user ID" />
        <TextField source="nameUser" label="Adoptante" />
        <TextField source="phone" label="Teléfono" />
        
        <EditButton basepath="/api/admin/adoptions" />
        <DeleteWithConfirmButton basepath="/api/admin/adoptions" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default AdopList;
