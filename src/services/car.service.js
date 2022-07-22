import {axiosService} from "./axios.service";

import {urls} from "../configs";


const carService = {
    getAll: () => axiosService.get(urls.cars),
    updateById: (id,data) => axiosService.put(`${urls.cars}/${id}`,data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    createCar: (car) => axiosService.post(urls.cars, car)
}

export {
    carService
}