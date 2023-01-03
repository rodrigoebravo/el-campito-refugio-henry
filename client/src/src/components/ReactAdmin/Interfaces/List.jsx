import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  ShowButton,
} from "react-admin";

const InterfacesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ImageField source="slider"  src="src"  sx={{ '& img': { maxWidth: 50, maxHeight: 50, objectFit: 'contain' } }} />
        <TextField source="homeText" label="Textos e Imagenes de la Interfaz de Usuario" />        
        <EditButton basepath="/api/admin/interfaces" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default InterfacesList;
