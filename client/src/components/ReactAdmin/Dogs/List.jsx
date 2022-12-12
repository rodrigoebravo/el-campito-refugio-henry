import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  ImageField,
  DeleteWithConfirmButton,
} from "react-admin";

const DogList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ImageField source="data.images[1]" label="Perrito" />
        <TextField source="data.name" label="Nombre" />
        <TextField source="data.gender" label="Sexo" />
        <TextField source="data.age" label="Edad" />
        <EditButton basepath="/api/dogs/admin/dogs" />
        <DeleteWithConfirmButton basepath="/api/dogs/admin/dogs" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default DogList;
