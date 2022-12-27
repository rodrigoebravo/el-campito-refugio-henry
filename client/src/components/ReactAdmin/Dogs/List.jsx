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
import PersonOffIcon from "@mui/icons-material/PersonOff";

const DogsList = (props) => {
  return (
    <List {...props} aside={<Filters />}>
      <Datagrid>
        <ImageField source="images[1]" label="Perrito" sortable={false} />
        <TextField source="name" label="Nombre" />
        <TextField source="gender" label="Sexo" sortable={false} />
        <TextField source="age" label="Edad" sortable={false} />
        <ShowButton label="Detalles" />
        <EditButton basepath="/api/admin/dogs" label="Editar datos" />
        <DeleteWithConfirmButton
          basepath="/api/admin/dogs"
          label="Dar de baja"
          icon={<PersonOffIcon />}
        />
      </Datagrid>
    </List>
  );
};

export default DogsList;
