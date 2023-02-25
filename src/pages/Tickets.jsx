import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/Spinner";
import TicketItem from "../components/TicketItem";
import { getTickets } from "../features/tickets/ticketSlice";

function Tickets() {
  
  const {tickets} = useSelector(state=>state.tickets)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTickets());
  },[dispatch])

  if(!tickets){
    return <Spinner />
  }
  return (
    <div>
    <h1>Tickets</h1>
    <div className='tickets'>
      <div className='ticket-headings'>
        <div>Date</div>
        <div>Product</div>
        <div>Status</div>
        <div></div>
      </div>
      {tickets.map((ticket) => (
        <TicketItem key={ticket._id} ticket={ticket} />
      ))}
    </div>
    </div>
  )
}

export default Tickets
