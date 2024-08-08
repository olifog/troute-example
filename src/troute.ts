import { getUser } from "./queries/user";
import { createTroute } from "@olifog/troute";

export const {GET, troute} = createTroute({
  getUser
})