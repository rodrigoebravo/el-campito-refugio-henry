import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  ImageField,
  DeleteWithConfirmButton,
} from "react-admin";
import Filters from "./Filters";

const DogsList = (props) => {
  return (
    <List {...props} aside={<Filters />}>
      <Datagrid>
        <ImageField source="images[1]" label="Perrito" sortable={false} />
        <TextField source="name" label="Nombre" />
        <TextField source="gender" label="Sexo" sortable={false} />
        <TextField source="age" label="Edad" sortable={false} />
        <EditButton basepath="/api/admin/dogs" />
        <DeleteWithConfirmButton basepath="/api/admin/dogs" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default DogsList;
