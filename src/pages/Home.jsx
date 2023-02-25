import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <section className='heading'>
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
      </section>

      <button className='btn btn-reverse btn-block' onClick={()=>navigate('/new-ticket')}>
        <FaQuestionCircle /> Create New Ticket
      </button>
      <br/>
      <button className='btn btn-block' onClick={()=>navigate('/tickets')}>
        <FaTicketAlt /> View My Tickets
      </button>
    </>
  )
}

export default Home
