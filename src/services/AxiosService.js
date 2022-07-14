import axios from "axios";
import {baseURL, urls} from "../configs/Urls";

const axiosService = axios.create({baseURL});

  export const getServices = {
      // getTodos:()=>axiosService.get(urls.todos),
      // getAlbums:()=>axiosService.get(urls.albums),
      getComments: () => axiosService.get(urls.comments),
      getPostById: (id) => axiosService.get( '/posts/' + id)

  }

export {axiosService}