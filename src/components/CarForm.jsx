import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from "../store"
const CarForm = () => {
  const dispatch = useDispatch()

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    }
  })
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value))
  }

  const handleCostChange = (event) => {
    const costInput = parseInt(event.target.value) || 0
    dispatch(changeCost(costInput))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      addCar({
        name,
        cost,
      })
    )
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Car</label>
          <div>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <label htmlFor="">Cost</label>
          <div>
            <input
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    </>
  )
}

export default CarForm
