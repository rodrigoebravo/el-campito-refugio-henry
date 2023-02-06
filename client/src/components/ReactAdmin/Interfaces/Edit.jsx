import {
  Toolbar,
  SaveButton,
  Edit,
  TextInput,
  ImageInput,
  ImageField,
  useGetOne,
  TabbedForm,
  FormTab,
} from "react-admin";

import { Loader, CustomToolbar } from "../utils";

const InterfacesEdit = () => {
  const { data, isLoading, error } = useGetOne("api/admin/interfaces", {
    id: "63b565a050554e3431bb3e0e",
  });
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  return (
    <Edit
      title={"Editar datos"}
      {...data}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <TabbedForm toolbar={<CustomToolbar />}>
        <FormTab label="Slider/Home">
          <ImageInput source="slider" label="Fotografías de Slider" multiple>
            <ImageField source="src" title="title" />
          </ImageInput>
        </FormTab>
        <FormTab label="Nosotros/Colabora">
          <TextInput
            source="colaboraText"
            label="Texto en Colaborá"
            fullWidth
            multiline
          />
          <ImageInput source="imgNosotros" label="Fótografía en Nosotros">
            <ImageField source="src" title="title" />
          </ImageInput>
        </FormTab>
        <FormTab label="Vistas/Escuelas">
          <TextInput
            source="visitasText"
            label="Texto en Visitas"
            fullWidth
            multiline
          />
          <TextInput
            source="escolarText"
            label="Texto en Escolar"
            fullWidth
            multiline
          />
        </FormTab>
        <FormTab label="Voluntarios">
          <TextInput
            source="voluntarioText"
            label="Texto en Voluntarios"
            fullWidth
            multiline
          />
          <ImageInput source="imgVoluntarios" label="Fótografía en Voluntarios">
            <ImageField source="src" title="title" />
          </ImageInput>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default InterfacesEdit;
