import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
} from "react-admin";

const InterfacesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="slider" label="Fotografías de Slider" />
        <TextField source="homeText" label="Texto del Home" />
        <TextField source="imgNosotros" label="Fótografía en Nosotros" />
        <EditButton basepath="/api/admin/interfaces" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default InterfacesList;
