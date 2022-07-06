import axios from "axios";
import {AxiosService} from "./axiosService";
import BaseURL from "../configs/Urls";

const createComments = (obj) => AxiosService.post("https://jsonplaceholder.typicode.com/posts", obj);
export {createComments}