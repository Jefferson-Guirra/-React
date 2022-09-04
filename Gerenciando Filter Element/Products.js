import React from 'react'
import {useSelector} from 'react-redux'
const filtersColors = (colors) => (products)=> !colors.length || colors.includes(products.color)
const filtersPrice = (prices)=> (product) => (!prices.min || product.price >= prices.min) && ( !prices.max || product.price <= prices.max)

const filtersProducts = ({products})=>{
  const {data,filters} = products
   return data.filter(filtersColors(filters.colors)).filter(filtersPrice(filters.price))
}
const Products = () => {
  const data = useSelector(filtersProducts)
  
  
  return (
    <table>
      <thead>
      <tr>
        <th>nome</th>
        <th>cor</th>
        <th>preço</th>
      </tr>
      </thead>
      <tbody>
        {data.map(({id,name,color,price})=><tr key={id}>
          <td>{name}</td>
          <td>{color}</td>
          <td>{price}</td>


        </tr>)}
      </tbody>
    </table>
  )
}

export default Products