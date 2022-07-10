import {AxiosService} from "./Axios.service";
import {urls} from "../configs/Urls";


export const carService = {
    getAll: ()=> AxiosService.get(urls.cars),
    create: (car)=> AxiosService.post(urls.cars, car),
    deleteById: (id) => AxiosService.delete(`${urls.cars}/${id}`)
}