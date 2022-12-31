import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

import Filters from "./Filters";

const VoluntList = (props) => {
  return (
    <List {...props} aside={<Filters />}>
      <Datagrid>
        <TextField source="name" label="Voluntario" />
        <TextField source="email" label="Email" sortable={false} />
        <TextField source="phone" label="Teléfono" sortable={false} />
        <DeleteWithConfirmButton basepath="/api/admin/volunteers" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default VoluntList;
