import {
  List,
  Datagrid,
  TextField,
  EditButton,
  // ShowButton,
  // DeleteWithConfirmButton,
} from "react-admin";

const ContribList = (props) => {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="name" label="Contribuyente" />
        <TextField source="total" label="Monto" />
        <TextField source="method" label="Metodo de" />
        <TextField source="type" label="Tipo" />
        <TextField source="nameDog" label="Beneficiado/a" />
        
        <EditButton basepath="/api/admin/contributions" />
        {/* <DeleteWithConfirmButton basepath="/api/admin/contributions" /> */}
        {/* <ShowButton /> */}
      </Datagrid>
    </List>
  );
};

export default ContribList;
