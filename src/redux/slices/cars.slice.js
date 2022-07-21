import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
};

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        newCar: ()=>{},
        editCar: ()=>{},
        deleteCar: ()=>{},
    }
});

const { reducer:carsReducer, actions:{newCar,editCar,deleteCar}} = carsSlice;

const carsActions = {
    newCar,
    editCar,
    deleteCar
}

export {
    carsReducer,
    carsActions
}