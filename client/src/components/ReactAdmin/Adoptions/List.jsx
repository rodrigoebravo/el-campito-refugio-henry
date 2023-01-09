import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  // ShowButton,
  // DeleteWithConfirmButton,
} from "react-admin";

const AdopList = (props) => {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false}>
        <DateField source="date" label="Fecha" />
        <TextField source="nameDog" label="Camperito" />
        <TextField source="email" label="user ID" />
        <TextField source="nameUser" label="Adoptante" />
        <TextField source="phone" label="Teléfono" />
        
        <EditButton basepath="/api/admin/adoptions" />
        {/* <DeleteWithConfirmButton basepath="/api/admin/adoptions" />
        <ShowButton /> */}
      </Datagrid>
    </List>
  );
};

export default AdopList;
