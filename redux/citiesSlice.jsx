import {createSlice} from '@reduxjs/toolkit'

export const citiesSlice= createSlice({
    name:"cities",
    initialState:{
        value:[{
            id: 0,
            title: "Pala1",
            description: "Lorem ipsum dolor sit amet",
            imgURL: "https://cdn.pixabay.com/photo/2023/03/11/20/14/windmill-7845201_640.jpg", //
            isVisited: true,
          },
          {
            id: 1,
            title: "Surf",
            description: "Lorem ipsum dolor sit amet",
            imgURL: "https://cdn.pixabay.com/photo/2023/05/07/11/57/surfboard-7976219_1280.jpg", //"",
            isVisited: false,
          },
          {
            id: 2,
            title: "Gatto",
            description: "Lorem ipsum dolor sit amet",
            imgURL: "https://cdn.pixabay.com/photo/2023/12/13/06/40/cat-8446390_1280.jpg", //
            isVisited: true,
          },
          {
            id: 3,
            title: "cane",
            description: "Lorem ipsum dolor sit amet",
            imgURL: "https://cdn.pixabay.com/photo/2024/01/07/11/17/welsh-corgi-8492879_1280.jpg", //"",
            isVisited: false,
          },
          {
            id: 4,
            name: "Pala",
            description: "Lorem ipsum dolor sit amet",
            imgURL: "https://cdn.pixabay.com/photo/2023/03/11/20/14/windmill-7845201_640.jpg", //"",
            isVisited: true,
          },
          {
            id: 5,
            name: "Surf",
            description: "Lorem ipsum dolor sit amet",
            imgURL:  "https://cdn.pixabay.com/photo/2023/05/07/11/57/surfboard-7976219_1280.jpg",//"",
            isVisited: false,
          },
          {
            id: 6,
            name: "Gatto",
            description: "Lorem ipsum dolor sit amet",
            imgURL: "https://cdn.pixabay.com/photo/2023/12/13/06/40/cat-8446390_1280.jpg", //"",
            isVisited: true,
          },
          {
            id: 7,
            name: "cane",
            description: "Lorem ipsum dolor sit amet",
            imgURL:  "https://cdn.pixabay.com/photo/2024/01/07/11/17/welsh-corgi-8492879_1280.jpg",//"",
            isVisited: false,
          }
        ],
    },
    reducers:{
        add:(state, action) =>{
            state.value.push(action.payload)
        },
    },
})

export const {add} = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer

