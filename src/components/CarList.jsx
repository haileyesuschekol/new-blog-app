import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store"
const CarList = () => {
  const dispatch = useDispatch()
  const car = useSelector((state) => {
    return state.cars.data
  })

  const handleDelete = (car) => {
    dispatch(removeCar(car.id))
  }

  const rendered = car.map((car) => {
    return (
      <div key={car.id}>
        <p>
          {car.name} -- ${car.cost}
        </p>
        <div>
          <button onClick={() => handleDelete(car)}>Delete</button>
        </div>
      </div>
    )
  })

  return <>{rendered}</>
}

export default CarList
