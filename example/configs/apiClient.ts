import axios from "axios";
import { setApiClient } from "../generated/apiClient";

const api = axios.create({ baseURL: "https://api.diks.acc.lightbase.nl" });
setApiClient(api);
