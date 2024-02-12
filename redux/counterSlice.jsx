import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement: (state)=>{
            state.value -=1
        },
        incrementByAmound:(state,action) =>{
            state.value+=action.payload
        },
    },
})

export const {increment,decrement,incrementByAmound} = counterSlice.actions;

export const counterReducer = counterSlice.reducer // conviene far così anzichè default per non aver problemi con l'esportazione quando lo importo da altri parti