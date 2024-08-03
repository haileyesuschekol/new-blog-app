import { useSelector } from "react-redux"

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filterd = data.filter((car) => {
      return car.name.includes(searchTerm)
    })
    return filterd.reduce((acc, car) => {
      return acc + car.cost
    }, 0)
  })
  return (
    <div>
      <p>Total</p>${totalCost}
    </div>
  )
}

export default CarValue
