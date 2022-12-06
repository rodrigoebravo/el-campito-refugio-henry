import mongoose from "mongoose";

export const ROLES = ["user", "admin", "admin2nivel", "equipo1", "equipo2", "equipo3", "visitante", "donante", "patrocinador", "sponsor", "adoptante", "voluntario", "veterinario"];

const roleSchema = new mongoose.Schema(
  {
    name: {
        type:["user", "admin", "admin2nivel", "equipo1", "equipo2", "equipo3", "visitante", "donante", "patrocinador", "sponsor", "adoptante", "voluntario", "veterinario"],
        default: "user", 
    },
  },
  {
    timestamps: false, 
    versionKey: false, 
  }
);

export default mongoose.model("roles", roleSchema);