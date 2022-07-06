import axios from "axios";

import BaseURL from "../configs/Urls";
const AxiosService = axios.create({BaseURL})

export {AxiosService}