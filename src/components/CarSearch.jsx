import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"
const CarSearch = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm
  })

  const handleChange = (event) => {
    dispatch(changeSearchTerm(event.target.value))
  }
  return (
    <>
      <div>
        <label htmlFor="">Search</label>
        <input type="text" value={searchTerm} onChange={handleChange} />
      </div>
    </>
  )
}

export default CarSearch
