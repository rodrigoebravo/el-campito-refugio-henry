import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  ImageField,
  DeleteWithConfirmButton,
} from "react-admin";


const DogsList = (props) => {

  return (
    <List {...props}>
      <Datagrid>
        <ImageField source="images[1]" label="Perrito" />
        <TextField source="name" label="Nombre" />
        <TextField source="gender" label="Sexo" />
        <TextField source="age" label="Edad" />
        <EditButton basepath="/api/admin/dogs" />
        <DeleteWithConfirmButton basepath="/api/admin/dogs" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default DogsList;
