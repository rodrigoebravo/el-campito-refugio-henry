import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

const ContribList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="nameUser" label="Contribuyente" />
        <TextField source="nameDog" label="Beneficiado/a" />
        <TextField source="type" label="Tipo" />
        <TextField source="total" label="Monto" />
        <EditButton basepath="/api/admin/contributions" />
        <DeleteWithConfirmButton basepath="/api/admin/contributions" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default ContribList;
