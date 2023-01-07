import { Loading, downloadCSV, Toolbar, SaveButton } from "react-admin";
import jsonExport from "jsonexport/dist";

export const Loader = () => (
  <Loading
    sx={{ order: 1, ml: 75, mt: -40, width: 400, height: 650 }}
    loadingPrimary="Cargando datos"
    loadingSecondary=""
  />
);

export const dogExporter = (posts) => {
  jsonExport(
    posts,
    {
      headers: ["_id", "name", "gender"],
      rowDelimiter: ";",
    },
    (err, cvs) => {
      downloadCSV(cvs, "Listado_Perros");
    }
  );
};

export const Emptyness = () => <h1>Nada a la vista comandante</h1>;

export const CustomToolbar = (props) => (
  <Toolbar {...props} sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);
