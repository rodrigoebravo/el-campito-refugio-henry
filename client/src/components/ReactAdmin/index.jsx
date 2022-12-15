import { Admin, Resource } from "react-admin";
import DogsList from "./Dogs/List";
import DogsShow from "./Dogs/Show";
import DogsEdit from "./Dogs/Edit";
import DogsCreate from "./Dogs/Create";
import UsersList from "./Users/List";
import UsersShow from "./Users/Show";
import UsersEdit from "./Users/Edit";
import UsersCreate from "./Users/Create";
import PetsIcon from "@mui/icons-material/Pets";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import dataProvider from "../../dataProvider";

const AdminIndex = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="api/dogs/admin/dogs"
        list={DogsList}
        create={DogsCreate}
        edit={DogsEdit}
        show={DogsShow}
        icon={PetsIcon}
        options={{ label: "Perritos" }}
      />
      <Resource
        name="api/users/admin/users"
        list={UsersList}
        create={UsersCreate}
        edit={UsersEdit}
        show={UsersShow}
        icon={AccountCircleIcon}
        options={{ label: "Usuarios" }}
      />
    </Admin>
  );
};

export default AdminIndex;
