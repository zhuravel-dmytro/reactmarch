import axios from "axios";

import {baseURL} from "../configs/Urls";

const AxiosService = axios.create({baseURL});

export {AxiosService}