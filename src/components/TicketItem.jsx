import { NavLink } from "react-router-dom"

function TicketItem({ticket}) {
  return (
    <div className='ticket'>
      <div>{new Date(ticket.createdAt).toLocaleString().replace(/(.*)\D\d+/, '$1')}</div>
      <div className="product">{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <NavLink to={`/ticket/${ticket._id}`} className='btn btn-block btn-reverse btn-sm'>
        View
      </NavLink>
    </div>
  )
}

export default TicketItem
