import { Container } from 'react-bootstrap'

export default function Contacts({nextStep,updateForm,values}){
  return(
    <Container  style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
    <div className='card container'>
     <form className='contact card-body' onSubmit={(e)=>{
     e.preventDefault()
     nextStep()
     }}>
     <legend className='card-title'>Build Your Cv </legend>
      <div className="form-group mt-2">
        <input type="text" className="form-control" placeholder="Full name" value={values.fullname} onChange={(e)=>updateForm({fullname:e.target.value})} />
      </div>
      <div className="form-group mt-2">
        <input type="email" className="form-control" placeholder="email"
        value={values.email} onChange={(e)=>updateForm({email:e.target.value})} />
      </div>
      <div className="form-group mt-2">
        <input type="phone" className="form-control" placeholder="Phone Number" value={values.phone} onChange={(e)=>updateForm({phone:e.target.value})} />
      </div>
      <div className="form-group mt-2">
        <textarea type="text" className="form-control" placeholder="Contact Address" value={values.contactAdd} onChange={(e)=>updateForm({contactAdd:e.target.value})} />
      </div>
      <div className="form-group mt-2">
        <textarea type="text" className="form-control" placeholder="Summary" value={values.summary} onChange={(e)=>updateForm({summary:e.target.value})} />
      </div>
       <button type="submit" className="btn btn-primary mt-2">Next</button>
    </form>
    </div>
    </Container>
  )
}
