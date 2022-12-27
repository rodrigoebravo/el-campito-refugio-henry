import { Edit, SimpleForm, TextInput, ImageInput, ImageField } from "react-admin";



const InterfacesEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <SimpleForm>
        <ImageInput source="slider" label="Fotografías de Slider" multiple>
            <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="homeText" label="Texto del Home" fullWidth />
        <ImageInput source="imgNosotros" label="Fótografía en Nosotros" >
            <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="colaboraText" label="Texto en Colaborá" fullWidth />
        <ImageInput source="imgColabora" label="Fótografía en Colaborá" >
            <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="visitasText" label="Texto en Visitas" fullWidth />
        <TextInput source="escolarText" label="Texto en Escolar" fullWidth />
        <ImageInput source="imgVoluntarios" label="Fótografía en Voluntarios" >
            <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="voluntarioText" label="Texto en Voluntarios" fullWidth />
          
      </SimpleForm>
    </Edit>
  );
};

export default InterfacesEdit;
