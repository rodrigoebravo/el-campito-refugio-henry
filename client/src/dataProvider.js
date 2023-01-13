import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import pushCloudinary from "./hooks/pushCloudinary";

const apiUrl = "http://localhost:3001";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(
        headers.get("Content-Range").toString().split("/").pop(),
        10
      ),
    }));
  },

  getOne: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);

    return {
      data: { ...json, id: json._id },
    };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);

    return {
      data: json.map((res) => ({ ...res, id: res._id })),
    };
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(headers.get("Content-Range").split("/").pop(), 10),
    }));
  },

  update: async (resource, params) => {
    switch (resource) {
      case "api/admin/users":
        if (params.data.image) {
          if (params.data.image.hasOwnProperty("rawFile"))
          params.data.image = await pushCloudinary(params.data.image);
          else params.data.image = params.data.image.src;}
        break;

      case "api/admin/dogs":
        if (params.data.images.every((img) => img.hasOwnProperty("rawFile")))
          params.data.images = await pushCloudinary(params.data.images);
        else if (params.data.images.every((img) => img.hasOwnProperty("index")))
          params.data.images = params.data.images.map((img) => img.src);
        else {
          const oldImages = params.data.images.filter((img) =>
            img.hasOwnProperty("src")
          );
          const urlsOld = oldImages.map((img) => img.src);
          const newImg = params.data.images.filter((img) => img.rawFile);

          const urlNew = await pushCloudinary(newImg);
          params.data.images = [...urlsOld, ...urlNew];
        }
        break;
      case "api/admin/interfaces":
        if (params.data.imgVoluntarios) {
          if (params.data.imgVoluntarios.rawFile) {
          params.data.imgVoluntarios = await pushCloudinary(params.data.imgVoluntarios )
         }  else if (params.data.imgVoluntarios.index) {
          params.data.imgVoluntarios = params.data.imgVoluntarios.src
         } else { params.data.imgVoluntarios = params.data.imgVoluntarios.src };
        };
        if (params.data.imgNosotros) {        
         if ( params.data.imgNosotros.rawFile) {
          params.data.imgNosotros = await pushCloudinary(params.data.imgNosotros)
        } else if (params.data.imgNosotros.index) { 
          params.data.imgNosotros = params.data.imgNosotros.src 
        } else { params.data.imgNosotros = params.data.imgNosotros.src };
        };
        if (params.data.slider.length > 0) {
          const oldImages = params.data.slider.filter((obj) => obj.index);
          const urlsOld = oldImages.map((img) => img.src);
          const newImg = params.data.slider.filter((img) => img.rawFile);
          const urlNew = await pushCloudinary(newImg);
          params.data.slider = [...urlsOld, ...urlNew];
        }

        break;
      case "api/admin/press":
        if (params.data.img === null)  {  params.data.img = "" 
        } else if (params.data.img.hasOwnProperty("rawFile"))
          params.data.img = await pushCloudinary(params.data.img);
        else {params.data.img = params.data.img.src};
        break;
      default:
        break;
    }

    const http = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });

    const { json } = http;

    return {
      data: { ...params.data, id: json._id },
    };
  },

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: async (resource, params) => {
    if (resource === "api/admin/dogs") {
      params.data.images = await pushCloudinary(params.data.images); //verificado
    }

    if (resource === "api/admin/users") {
      params.data.image = await pushCloudinary(params.data.image);
    }

    if (resource === "api/admin/interfaces") {
      params.data.slider = await pushCloudinary(params.data.slider);
      params.data.imgNosotros = await pushCloudinary(params.data.imgNosotros);
      params.data.imgNosotros = await pushCloudinary(
        params.data.imgVoluntarios
      );
    }
    console.log(resource);
    console.log(params.data);

    const http = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });


    // const  json  = http.toObject();     
    const  json  = http; 
    

    return {
      data: { ...params.data, id: json._id },
    };
  },

  delete: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
      params: JSON.stringify(params.id),
    });

    return {
      //data: {...json, id: json._id, }
      ...json,
      id: json._id,
    };
  },

  deleteMany: async (resource, params) => {

    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    
    const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    })
 
    return { data: json }
  }
};



export default dataProvider;
