import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null
};

const getAll = createAsyncThunk(
    'carsSlice/getAll',
 async (_,{rejectWithValue})=>{
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e){
            return rejectWithValue(e.response.data)
        }
 }
)
const updateById = createAsyncThunk(
    'carsSlice/update',
    async ({id, car})=>{
        const {data} = await carService.updateById(id, car);
        return data
    }
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: (builder ) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(updateById.fulfilled, (state, action) => {
               const currentCar = state.cars.find(value => value.id === action.payload.id);
               Object.assign(currentCar, action.payload);
               state.carForUpdate = null
            })
            .addCase()
});



const { reducer:carsReducer, actions: { setCarForUpdate} } = carsSlice;

const carsActions = {
    getAll,
    setCarForUpdate,
    updateById
}

export {
    carsReducer,
    carsActions
}