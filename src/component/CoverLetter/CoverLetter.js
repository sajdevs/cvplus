import React, { useState } from 'react'

export default function CoverLetter() {

    const [steps,setSteps] = useState(1)
    const [letterData,setLetterData] = useState({
      fullname:'',email:'',phone:'',contactAdd:'',contPerson:'',orgName:"",orgAdd:'',dateSubmit:'',letter:'',sincere:''
    })
    const prevStep=()=>{
        setSteps(steps -1)
    }
    const nextSteps=()=>{
        setSteps(steps + 1)
    }
    const updateForm=(values)=>{
        setLetterData((prev)=>{
            return{ ...prev,...values}
        })
    }

  switch(steps){
      case 1: return(
          <PersonalInfo nextSteps={nextSteps} updateForm={updateForm} values={letterData} />
      )
      case 2:return(
          <RecipientAdd prevStep={prevStep} updateForm={updateForm} nextSteps={nextSteps} values={letterData}/>
      )
      case 3:return(
          <LetterContent prevStep={prevStep} updateForm={updateForm} nextSteps={nextSteps} values={letterData} />
      )

       default:return(
         <Letter values={letterData}/>
  )
  }

}

function PersonalInfo({nextSteps,updateForm,values}){
    return(
        <div className='container card'style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
     <form className='card-body' onSubmit={(e)=>{
         e.preventDefault()
         nextSteps()
     }}>
         <legend>Personal Details</legend>
         <div class="form-group mt-2">
             <input type="text" className="form-control" required placeholder="Full Name"value={values.fullname} onChange={(e)=>updateForm({fullname:e.target.value})}/>
         </div>
         <div class="form-group mt-2">
             <input type="email" className="form-control" required placeholder="Email " value={values.email} onChange={(e)=>updateForm({email:e.target.value})}/>
         </div>
         <div class="form-group mt-2">
             <input type="phone" className="form-control" required placeholder="Phone" value={values.phone} onChange={(e)=>updateForm({phone:e.target.value})}/>
         </div>
         <div class="form-group mt-2">
             <input type="text" className="form-control" required placeholder="Contact Address"  value={values.contactAdd} onChange={(e)=>updateForm({contactAdd:e.target.value})}/>
         </div>
         <button type="submit" className="btn btn-primary mt-2">Next</button>
     </form>

    </div>
    )
}
function RecipientAdd({nextSteps,prevStep,updateForm,values}){
    return(
    <div className='container card'style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
     <form className='card-body' onSubmit={(e)=>{
         e.preventDefault()
         nextSteps()
     }}>
         <legend>Recipient Details</legend>
         <div class="form-group mt-2">
             <input type="text" className="form-control" required placeholder="Contact Person" value={values.contPerson} onChange={(e)=>updateForm({contPerson:e.target.value})}/>
         </div>
         <div class="form-group mt-2">
             <input type="text" className="form-control"required placeholder="Organization Name" value={values.orgName} onChange={(e)=>updateForm({orgName:e.target.value})}/>
         </div>
         <div class="form-group mt-2">
             <input type="text" className="form-control" required placeholder="Contact Address" value={values.orgAdd} onChange={(e)=>updateForm({orgAdd:e.target.value})}/>
         </div>
         <div class="form-group mt-2">
         <label>Date to be submit</label>
             <input type="date" className="form-control" required value={values.dateSubmit} onChange={(e)=>updateForm({dateSubmit:e.target.value})} />
         </div>
         <div className='form-group mt-3' style={{display:'flex',justifyContent:'space-between'}}>
         <button className='btn btn-primary' onClick={()=>prevStep()}>Previous</button>
         <button type="submit" className="btn btn-primary">Next</button>
         </div>
     </form>
    </div>
    )
}

function LetterContent({nextSteps,prevStep,updateForm,values}){
    return(
    <div className='container card'style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
     <form className='card-body' onSubmit={(e)=>{
         e.preventDefault()
         nextSteps()
     }}>
         <legend>Letter Body</legend>
         <div className="form-group mt-2">
            <textarea className="form-control"  placeholder='Type your here Letter' rows="3" required="required" value={values.letter} onChange={(e)=>updateForm({letter:e.target.value})}/>
         </div>
         <div class="form-group mt-2">
             <input type="text" className="form-control" required placeholder="Sincerily"value={values.sincere} onChange={(e)=>updateForm({sincere:e.target.value})}/>
         </div>
         <div className='form-group mt-3' style={{display:'flex',justifyContent:'space-between'}}>
         <button className='btn btn-primary' onClick={()=>prevStep()}>Previous</button>
         <button type="submit" className="btn btn-primary">Next</button>
         </div>
     </form>
    </div>
    )
}


function LetterComplete({values}){

 const {fullname,email,phone,contactAdd,contPerson,orgName,orgAdd,dateSubmit,letter,sincere} = values
    // fullname:'',email:'',phone:'',contactAdd:'',contPerson:'',orgName:"",orgAdd:'',dateSubmit:'',letter:'',sincere:''
    return(
        <div className='card container'>
          <div className='card-body'>
            <p>Full name: {fullname}{''}</p>
            <p>Email: {email}{''}</p>
            <p>Phone: {phone}{''}</p>
            <p>Contact Add: {contactAdd}{''}</p>
            <p>Contact Person: {contPerson}{''}</p>
            <p>Organization: {orgName}{''}</p>
            <p>Organization Add: {orgAdd}{''}</p>
            <p>Date to submit: {dateSubmit}{''}</p>
            <p>Letter Body: {letter}{''}</p>
            <p>sincere: {sincere}{''}</p>

          </div>
        </div>
    )
}
function Letter({values}){
    const {fullname,email,phone,contactAdd,contPerson,orgName,orgAdd,dateSubmit,letter,sincere} = values
   return(
       <div className='container card pt-2'>
         <div style={{textAlign:'center'}}>
         <h3>{fullname}</h3>
         <p>{contactAdd}</p>
         <p>{phone}</p>
         <p>{email}</p>
         </div>
         <hr />
         <div>
         <div style={{justifyContent:'space-between'}}>
         <p style={{float:'right'}}>{dateSubmit}</p>
         <h6>{contPerson}</h6>
         <p>{orgName}</p>
         <p>{orgAdd}</p>
         </div>
         <div>
         <p>{letter}</p>
         </div>
         </div>
         <div>
         <h6>Sincerily:</h6>
          <p>{sincere}</p>
         </div>
       </div>
   )

}