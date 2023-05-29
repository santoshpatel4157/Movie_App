// import { configureStore } from "@reduxjs/toolkit";

// const store =  configureStore({

// })

// export default store;


// import { createSlice } from "@reduxjs/toolkit";

// const  cartSlice =  createSlice({
//     name:cart,
//     initialState:{
//         items:["aaa","bbb"]
//     },
//     reducers:{
//         addName : (state,action)=>{
//             state.item.push(action.payload);
//         },
//         clearName : (state)=>{
//             state.item=[];
//         })
//     }
// })

// import { createSlice } from "@reduxjs/toolkit";

// const movierSlice =  createSlice({
//     name: movieApi,
//     initialState:[],
//     reducers:{
//         getMovies:(state,action)=>{
//             state.push(action.payload);
//         }
//         clearMovies :(state)=>{
//             state = [];
//         }
//     }
// })
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : data,
    initialState: {
        data:[]
    },
    reducers:{
        addData : (state,action)=>{
            state.data.push(action.payload)
        }, 
        removeData : (state,action)=>{
            state.data.pop(action.payload)
        },
        clearData : (state)=>{
            state.data=[];
        }
    }
})

export default dataSlice.reducer;