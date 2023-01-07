import {
  List,
  Datagrid,
  TextField,
  DeleteWithConfirmButton,
  EditButton,
  useGetList,
  Pagination,
  BooleanField,
} from "react-admin";
import { Loader, Emptyness } from "../utils";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import Filters from "./Filters";

const UsersList = (props) => {
  const { data, isLoading } = useGetList("api/admin/users", {
    page: 1,
    perPage: 10,
  });
  if (isLoading) return <Loader />;
  return (
    <List
      {...data}
      aside={<Filters />}
      pagination={<Pagination limit={<Emptyness />} />}
    >
      <Datagrid bulkActionButtons={false}>
        <TextField source="name" label="Nombre" />
        <TextField source="email" label="Email" />
        <TextField source="roles" label="Rol" />
        <BooleanField
          source="isDelete"
          label="Estado"
          TrueIcon={CancelIcon}
          FalseIcon={CheckCircleIcon}
          valueLabelTrue="Inactivo"
          valueLabelFalse="Activo"
        />
        <EditButton
          basepath="/api/admin/dogs"
          label="Ver detalles"
          icon={<InfoIcon />}
        />
        <DeleteWithConfirmButton
          basepath="/api/admin/users"
          label="Dar de baja"
          icon={<PersonOffIcon />}
        />
      </Datagrid>
    </List>
  );
};

export default UsersList;
