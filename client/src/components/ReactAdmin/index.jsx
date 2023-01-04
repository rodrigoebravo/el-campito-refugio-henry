import { Admin, Resource } from "react-admin";
import dataProvider from "../../dataProvider";
import PetsIcon from "@mui/icons-material/Pets";
import DogsList from "./Dogs/List";
import DogsShow from "./Dogs/Show";
import DogsEdit from "./Dogs/Edit";
import DogsCreate from "./Dogs/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UsersList from "./Users/List";
import UsersShow from "./Users/Show";
import UsersEdit from "./Users/Edit";
import UsersCreate from "./Users/Create";
import RadioIcon from "@mui/icons-material/Radio";
import PressCreate from "./Press/Create";
import PressEdit from "./Press/Edit";
import PressList from "./Press/List";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ContribCreate from "./Contributions/Create";
import ContribEdit from "./Contributions/Edit";
import ContribList from "./Contributions/List";
import ContribShow from "./Contributions/Show";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import VoluntShow from "./Volunteers/Show";
import VoluntEdit from "./Volunteers/Edit";
import VoluntList from "./Volunteers/List";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AdopList from "./Adoptions/List";
import AdopShow from "./Adoptions/Show";
import AdopEdit from "./Adoptions/Edit";
import HomeIcon from "@mui/icons-material/Home";
import InterfacesEdit from "./Interfaces/Edit";
import InterfacesList from "./Interfaces/List";
import InterfacesShow from "./Interfaces/Show";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import Stats from "./Stats/Stats";

const AdminIndex = () => {
  
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="api/admin/dogs"
        list={DogsList}
        create={DogsCreate}
        edit={DogsEdit}
        show={DogsShow}
        icon={PetsIcon}
        options={{ label: "Perritos" }}
      />
      <Resource
        name="api/admin/users"
        list={UsersList}
        create={UsersCreate}
        edit={UsersEdit}
        show={UsersShow}
        icon={AccountCircleIcon}
        options={{ label: "Usuarios" }}
      />
      <Resource
        name="api/admin/press"
        list={PressList}
        create={PressCreate}
        edit={PressEdit}
        icon={RadioIcon}
        options={{ label: "Prensa" }}
      />
      <Resource
        name="api/admin/contributions"
        list={ContribList}
        create={ContribCreate}
        edit={ContribEdit}
        show={ContribShow}
        icon={VolunteerActivismIcon}
        options={{ label: "Contribuciones" }}
      />
      <Resource
        name="api/admin/volunteers"
        list={VoluntList}
        edit={VoluntEdit}
        show={VoluntShow}
        icon={HandshakeRoundedIcon}
        options={{ label: "Voluntarios" }}
      />
      <Resource
        name="api/admin/adoptions"
        list={AdopList}
        edit={AdopEdit}
        show={AdopShow}
        icon={FavoriteRoundedIcon}
        options={{ label: "Adopciones" }}
      />
      <Resource
        name="api/admin/interfaces"
        list={InterfacesList}
        edit={InterfacesEdit}
        show={InterfacesShow}
        icon={HomeIcon}
        options={{ label: "Interfaz de Usuario" }}
      />
      <Resource
        name="api/admin/stats"
        list={Stats}
        // edit={AdopEdit}
        // show={AdopShow}
        icon={SsidChartIcon}
        options={{ label: "Estadisticas" }}
      />
    </Admin>
  );
};

export default AdminIndex;
