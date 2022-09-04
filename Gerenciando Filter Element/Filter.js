import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilters, selectUniqueColors } from './store/products'

const Filter = () => {
  const dispatch = useDispatch()
  const colors = useSelector(selectUniqueColors)
  const [minPrice, setMinPrice] = React.useState('')
  const [maxPrice, setMaxPrice] = React.useState('')
  const [selectedColors, setSelectedColors] = React.useState([])

  React.useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectedColors }))
  }, [selectedColors, dispatch])

  React.useEffect(() => {
    dispatch(
      changeFilters({
        name: 'price',
        value: { max: Number(maxPrice), min: Number(minPrice) }
      })
    )
  }, [minPrice, maxPrice, dispatch])

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value])
    } else {
      setSelectedColors(() => {
        return selectedColors.filter(cor => cor !== target.value)
      })
    }
  }
  function checkedColor(color) {
    return selectedColors.includes(color)
  }
  return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder="Min"
      />

      <input
        type="number"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder="Max"
      />

      {colors.map(color => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={checkedColor(color)}
            onChange={handleChange}
          />
          {color}
        </label>
      ))}
    </div>
  )
}

export default Filter
