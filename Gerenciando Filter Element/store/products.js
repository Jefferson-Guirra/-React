import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const slice = createSlice({
  name:'products',
  initialState:{
    data,
    filters:{
      colors:[],
      price:{
        max:'',
        min:'',
  
      }
    }

  },
  reducers:{
    changeFilters(state,action){
      state.filters[action.payload.name] = action.payload.value
    }
  }
})


 /*const selectUniqueColors = ({products})=>{
  const colors = products.data.map(product=>product.color)
  const uniqueColor = colors.filter((color,index)=> colors.indexOf(color) === index) ou
  const uniqueColor = colors.reducer((acc,valor)=> acc.includes(valor) ? acc : [...acc,valor],[])
  return uniqueColor
 }*/
export const selectUniqueColors = ({products})=> [...new Set(products.data.map(product => product.color))]
export const {changeFilters} = slice.actions

export default slice.reducer