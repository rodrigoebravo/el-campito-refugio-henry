import { Loading, downloadCSV, Toolbar, SaveButton } from "react-admin";
import jsonExport from "jsonexport/dist";
import { Box } from "@mui/system";

export const Loader = () => (
  <Loading
    sx={{ mx: "auto", mt: -30, width: 400, height: 650 }}
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

export const Emptyness = () => (
  <Box sx={{ mx: 50, mt: 20 }}>
    <h1>No existen resultados a tu busqueda</h1>
  </Box>
);

export const CustomToolbar = (props) => (
  <Toolbar {...props} sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);
