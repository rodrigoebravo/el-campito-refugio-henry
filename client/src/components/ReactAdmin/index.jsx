import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import List from "./Dogs/List";
import Show from "./Dogs/Show";
import Edit from "./Dogs/Edit";
import Create from "./Dogs/Create";
import PetsIcon from "@mui/icons-material/Pets";

const dataProvider = jsonServerProvider("http://localhost:3001");

const AdminIndex = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="api/dogs/admin/dogs"
        list={List}
        create={Create}
        edit={Edit}
        icon={PetsIcon}
        show={Show}
        options={{ label: "Perritos" }}
      />
    </Admin>
  );
};

export default AdminIndex;
