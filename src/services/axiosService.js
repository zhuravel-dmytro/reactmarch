import axios from "axios";

import {BaseURL} from "../configs/urls";

const axiosService = axios.create({BaseURL})

export {
    axiosService
}