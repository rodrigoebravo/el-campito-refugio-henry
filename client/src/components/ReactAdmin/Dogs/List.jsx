import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  DeleteWithConfirmButton,
} from "react-admin";
import Filters from "./Filters";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";
import InfoIcon from "@mui/icons-material/Info";

const exporter = (posts) => {
  jsonExport(
    posts,
    {
      headers: ["_id", "name", "gender"],
      rowDelimiter: ";",
    },
    (err, cvs) => {
      downloadCSV(cvs, "Listado_Perros");
    }
  );
};

const DogsList = (props) => {
  return (
    <List {...props} aside={<Filters />} exporter={exporter}>
      <Datagrid>
        <ImageField source="images[0]" label="Perrito" sortable={false} />
        <TextField source="name" label="Nombre" />
        <TextField source="gender" label="Sexo" sortable={false} />
        <TextField source="age" label="Edad" sortable={false} />
        <EditButton
          basepath="/api/admin/dogs"
          label="Ver detalles"
          icon={<InfoIcon />}
        />
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
