import {
  List,
  Datagrid,
  TextField,
  // ShowButton,
  EditButton,
  // InfoIcon,
  DeleteWithConfirmButton,
  EditButton,
  BooleanField,
} from "react-admin";
import InfoIcon from "@mui/icons-material/Info";
import Filters from "./Filters";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const VoluntList = (props) => {
  return (
    <List {...props} aside={<Filters />}>
      <Datagrid>
        <TextField source="name" label="Voluntario" />
        <TextField source="modality" label="Modalidad"  />
        <TextField source="email" label="Email" sortable={false} />
        <TextField source="phone" label="Teléfono"  />
       
        <EditButton
          basepath="/api/admin/volunteers"
          label="Ver detalles"
          // icon={<InfoIcon />}
        />
        {/* <ShowButton /> */}

        <DeleteWithConfirmButton basepath="/api/admin/volunteers" />
      </Datagrid>
    </List>
  );
};

export default VoluntList;
