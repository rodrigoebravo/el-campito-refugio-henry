import {
  List,
  Datagrid,
  TextField,
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
        <TextField source="email" label="Email" sortable={false} />
        <BooleanField
          source="isPending"
          label="Estado"
          TrueIcon={CancelIcon}
          FalseIcon={CheckCircleIcon}
          valueLabelTrue="Inactivo"
          valueLabelFalse="Activo"
        />
        <EditButton
          basepath="/api/admin/volunteers"
          label="Ver detalles"
          icon={<InfoIcon />}
        />
        <DeleteWithConfirmButton basepath="/api/admin/volunteers" />
      </Datagrid>
    </List>
  );
};

export default VoluntList;
