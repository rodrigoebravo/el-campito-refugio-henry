import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

import Filters from "./Filters";

const VoluntList = (props) => {
  return (
    <List {...props} aside={<Filters />}>
      <Datagrid>
        <TextField source="name" label="Voluntario" />
        <TextField source="age" label="edad" /> {/**modif*/}
        <TextField source="email" label="Email" />
        <TextField source="phone" label="Teléfono" />
        <DeleteWithConfirmButton basepath="/api/admin/volunteers" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default VoluntList;
