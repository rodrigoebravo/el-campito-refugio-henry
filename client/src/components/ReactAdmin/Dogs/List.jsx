import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  DeleteWithConfirmButton,
  useGetList,
  Pagination,
  BooleanField,
} from "react-admin";
import Filters from "./Filters";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { exporter, Loader, Emptyness } from "../utils";

const DogsList = (props) => {
  const { data, isLoading } = useGetList("api/admin/dogs", {
    page: 1,
    perPage: 10,
  });
  if (isLoading) return <Loader />;
  else
    return (
      <List
        {...data}
        aside={<Filters />}
        exporter={exporter}
        pagination={<Pagination limit={<Emptyness />} />}
      >
        <Datagrid bulkActionButtons={false}>
          <ImageField
            source="images[0].src"
            label="Perrito"
            sortable={false}
            sx={{
              "& img": { maxWidth: 50, maxHeight: 50, objectFit: "contain" },
            }}
          />
          <TextField source="name" label="Nombre" />
          <TextField source="gender" label="Sexo" sortable={false} />
          <TextField source="age" label="Edad" sortable={false} />
          <BooleanField
            source="isDelete"
            label="Estado"
            TrueIcon={CancelIcon}
            FalseIcon={CheckCircleIcon}
            valueLabelTrue="Inactivo"
            valueLabelFalse="Activo"
          />
          <EditButton
            basepath="/api/admin/dogs"
            label="Ver detalles"
            icon={<InfoIcon />}
          />
          <DeleteWithConfirmButton
            basepath="/api/admin/dogs"
            label="Dar de baja"
            icon={<PersonOffIcon />}
          />
        </Datagrid>
      </List>
    );
};

export default DogsList;
