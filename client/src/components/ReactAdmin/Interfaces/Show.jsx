import { Show, SimpleShowLayout, TextField, WrapperField, ImageField } from "react-admin";

const InterfacesShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <WrapperField source="slider" label="Fotografías de Slider" multiple   >
            <ImageField source="slider"  src="src" sx={{ '& img': { minWidth: 250, minHeight: 250, objectFit: 'contain' } }} />
        </WrapperField>
        <br />
        <TextField source="homeText" label="Texto del Home" fullWidth sx={{ fontSize: "h4.fontSize", fontWeight: "light" }} />
        <br />
        <WrapperField source="imgNosotros" label="Fótografía en Nosotros" >
            <ImageField source="imgNosotros.src" sx={{ '& img': { minWidth: 650, minHeight: 450, objectFit: 'contain' } }} />
        </WrapperField>
        <br />
        <TextField source="colaboraText" label="Texto en Colaborá" fullWidth sx={{ fontSize: "h4.fontSize", fontWeight: "light" }} />
        <br />
        <TextField source="visitasText" label="Texto en Visitas" fullWidth sx={{ fontSize: "h4.fontSize", fontWeight: "light" }} />
        <br />
        <TextField source="escolarText" label="Texto en Escolar" fullWidth sx={{ fontSize: "h4.fontSize", fontWeight: "light" }} />
        <br />
        <WrapperField source="imgVoluntarios" label="Fótografía en Voluntarios" >
            <ImageField source="imgVoluntarios.src"  sx={{ '& img': { minWidth: 650, minHeight: 450, objectFit: 'contain' } }}/>
        </WrapperField>
        <TextField source="voluntarioText" label="Texto en Voluntarios" fullWidth sx={{ fontSize: "h4.fontSize", fontWeight: "light" }} />
       
      </SimpleShowLayout>
    </Show>
  );
};

export default InterfacesShow;
