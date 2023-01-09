import {
  List,
  Datagrid,
  TextField,
  DateField,
  // ShowButton,
  // InfoIcon,
  // DeleteWithConfirmButton,
  EditButton,
} from "react-admin";
// import InfoIcon from "@mui/icons-material/Info";
import Filters from "./Filters";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";

const VoluntList = (props) => {
  return (
    <List {...props} aside={<Filters />}>
      <Datagrid bulkActionButtons={false}>
        <DateField source="date" label="Fecha" />
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
        {/* <DeleteWithConfirmButton basepath="/api/admin/volunteers" /> */}
      </Datagrid>
    </List>
  );
};

export default VoluntList;
