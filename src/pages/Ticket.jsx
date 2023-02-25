import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import NoteItem from "../components/NoteItem"
import Spinner from "../components/Spinner"
import {closeTicket, getTicket} from '../features/tickets/ticketSlice'
import { createNote, getNotes } from '../features/notes/noteSlice'
import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'
import Modal from 'react-modal'

function Ticket() {

  const modalStyles = {
    content: {
      width: '600px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      position: 'relative',
    }
  }  

  Modal.setAppElement('#root')


  const {ticket} = useSelector(state=>state.tickets)
  const {notes} = useSelector(state=>state.notes)
  const dispatch = useDispatch()
  const {ticketId} = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [noteText, setNoteText] = useState('');

    // Open/close modal
  const openModal = () => setShowModal(true)
   const closeModal = () => setShowModal(false)

  const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({noteText, ticketId})).unwrap()
      .then(()=>{
        setNoteText('')
        closeModal()
      }).catch(toast.error);
  }

  useEffect(()=>{
    dispatch(getTicket(ticketId))
    dispatch(getNotes(ticketId))
  },[ticketId, dispatch])


  const handleCloseTicket = () => {
    dispatch(closeTicket(ticket._id)).unwrap().then(()=>{
      toast.success('Ticket closed!')
    }).catch(toast.error)
    navigate('/tickets')
  }

  if(!ticket){
    return <Spinner />
  }
  
  return (
    <div className="ticket-page">
      <header className='ticket-header'>
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
        <span style={{color: 'steelblue'}}>Date Submitted:</span> {new Date(ticket.createdAt).toLocaleString('en-US').replace(/(.*)\D\d+/, '$1')}
        </h3>
        <h3><span style={{color: 'steelblue'}}>Product:</span> {ticket.product}</h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
      
      <div className="ticket-desc">
      <h3>Notes</h3>
      {notes.length === 0 && <h4 style={{color: '#888', fontWeight: '600'}}>No Notes to display yet</h4>}
      {notes ? (
        notes.map((note) => <NoteItem key={note._id} note={note} />)
      ) : (
        <Spinner />
      )}
      </div>
      {(ticket.status !== 'closed') && <button className="btn" onClick={()=>setShowModal(true)}>
          <FaPlus /> Add Note
        </button>}

      {showModal && <Modal className='modal' isOpen={showModal} onRequestClose={closeModal}
       style={modalStyles}>
        <h2>Add Note</h2>
        <form  onSubmit={(e)=>onNoteSubmit(e)} className='form-group'>
          <textarea className="form-control" value={noteText} onChange={(e)=>setNoteText(e.target.value)} id="noteText" placeholder="Note text here..." required
          />
          <button className="btn" type="submit">Submit</button>
        </form>
        <button className="btn-close" onClick={closeModal}>&#10006;</button>
      </Modal>}

      {(ticket.status !== 'closed')&&
          <button className="btn btn-danger btn-block" onClick={handleCloseTicket}>Close Ticket</button>}
    </div>
  )
}

export default Ticket
