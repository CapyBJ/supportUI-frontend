import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createTicket } from "../features/tickets/ticketSlice"

function NewTicket() {

  const {user} = useSelector(state=>state.auth)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(createTicket({product, description})).unwrap().then(()=>{
      navigate('/tickets')
      toast.success('New ticket created!')  
    }).catch(toast.error)
  }

  return (
    <>
      <section className="heading">
        <h1>Create new ticket</h1>
        <p>Please fill out the form below</p>
      </section>
      <section>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Customer Name</label>
            <input type="text" id='name' value={name} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="email">Customer email</label>
            <input type="text" id='email' value={email} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="product">Select product</label>
            <select className="form-control" type="text" id='product' value={product} 
            onChange={(e)=>setProduct(e.target.value)} >
              <option value="OnePlus8">One Plus 8</option>
              <option value="HP Pavillion">HP Pavillion</option>
              <option value="iMac">iMac</option>
              <option value="kindle">kindle</option>
              <option value="iPhone">iPhone</option>
              <option value="iPad">iPad</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the issue</label>
            <textarea className="form-control" type="text" id='description' value={description}
            onChange={(e)=>setDescription(e.target.value)} required />
          </div>
          <button className="btn btn-block">Submit</button>
        </form>
      </section>
    </>
  )
}

export default NewTicket
