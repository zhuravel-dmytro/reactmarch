import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars: [],
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

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder ) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
});







const { reducer:carsReducer} = carsSlice;

const carsActions = {
    getAll
}

export {
    carsReducer,
    carsActions
}