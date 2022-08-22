import React, { useState } from 'react'

export default function Resume() {
  const [steps,setSteps] =useState(1)
  const [resumeData,setResumeData] = useState({
   fullname:'',email:'',jobtitle:'',contactInfo:'',summary:'',workExp:'',eduInfo:'',skills:'',language:'',certificate:''
  })
 const [image,setImage] = useState([])

  const prevStep=()=>{
    setSteps(steps -1)
  }
  const nextStep=()=>{
    setSteps(steps + 1)
  }
  const updateForm=(values)=>{
    setResumeData(prev=>{
      return {...prev,...values}
    })

  }

switch(steps){
  case 1:return (
    <div className='container card' style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
      <form className='card-body' onSubmit={(e)=>{
        e.preventDefault()
         nextStep()
      }}>
          <legend className='card-title'>Build Your Resume </legend>
          <div className="form-group mt-2">
              <input type="text" className="form-control" placeholder="Full name" value={resumeData.fullname} onChange={(e)=>updateForm({fullname:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <input type="email" className="form-control" placeholder="Email.."value={resumeData.email} onChange={(e)=>updateForm({email:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <textarea type="text" className="form-control" placeholder="Job title" value={resumeData.jobtitle} onChange={(e)=>updateForm({jobtitle:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <textarea type="text" className="form-control" placeholder="Contact Info" value={resumeData.contactInfo} onChange={(e)=>updateForm({contactInfo:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <textarea type="text" className="form-control" placeholder="Summary" value={resumeData.summary} onChange={(e)=>updateForm({summary:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <textarea type="text" className="form-control" placeholder="Work Experience"value={resumeData.workExp} onChange={(e)=>updateForm({workExp:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <textarea type="text" className="form-control" placeholder="Education" value={resumeData.eduInfo} onChange={(e)=>updateForm({eduInfo:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <textarea type="text" className="form-control" placeholder="Skill" value={resumeData.skills} onChange={(e)=>updateForm({skills:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <textarea type="text" className="form-control" placeholder="Enter Languages" value={resumeData.language} onChange={(e)=>updateForm({language:e.target.value})}/>
          </div>
           <div className="form-group mt-2">
              <textarea type="text" className="form-control" placeholder="Certifications" value={resumeData.certificate} onChange={(e)=>updateForm({certificate:e.target.value})}/>
          </div>
          <button type="submit" className="btn btn-primary mt-2">Next</button>
      </form>
    </div>
  )
  case 2:return(
    <UploadImg setImage={setImage} prevStep={prevStep} nextStep={nextStep} values={resumeData} />
  )
  case 3: return(
    <Template values={resumeData} image={image} />
  )

  default:<div className='container'>
     default page
  </div>
}

}


function UploadImg({setImage,prevStep,nextStep,values}){
  const [img,setImg] = useState([])

  return(
    <div  className='container card' style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
    <form className='card-body' onSubmit={(e)=>{
      e.preventDefault()
      setImage(URL.createObjectURL(img))
      nextStep()
    }}>
      <div className='form-group mt-2'>
        <label>Select your picture</label>
        <input type='file' className='form-control' onChange={(e)=>setImg(e.target.files[0])} />
      </div>
      <div class="form-group mt-3" style={{justifyContent:'space-between',display:'flex'}}>
        <button className='btn btn-primary' onClick={()=>prevStep()}>Previous</button>
        <input type="submit" className="btn btn-primary" value='Next'/>
        </div>
    </form>
    </div>
  )
}

function ResumeComplete({values,image}){


   const {fullname,email,jobtitle,contactInfo,summary,workExp,eduInfo,skills,language,certificate} = values

  //fullname:'',email:'',jobtitle:'',contactInfo:'',summary:'',workExp:'',eduInfo:'',skills:'',language:'',certificate:'',img:''
  return(
    <div className='container card'>
       <div className='card-body'>
           <p>Full name: {fullname}{''}</p>
           <p>Email: {email}{''}</p>
           <p>JobTitle: {jobtitle}{''}</p>
           <p>ContactInfo: {contactInfo}{''}</p>
           <p>Summary: {summary}{''}</p>
           <p>WrokExp: {workExp}{''}</p>
           <p>EduInfo: {eduInfo}{''}</p>
           <p>Skills: {skills}{''}</p>
           <p>Language: {language}{''}</p>
           <p>Certificate: {certificate}{''}</p>
           <p>Image: {''}</p>
           <img alt='imgs' src={image} />
       </div>
    </div>
  )
}

function Template({values,image}){
  const {fullname,email,summary,workExp,eduInfo,skills,language,certificate} = values

  return(
    <div className='card container' style={{padding:'10px'}}>
      <div className='t-two-header'>
        <div className='header-top' style={{backgroundColor:'rgb(10, 29, 46)',color:'#fff'}}>
        <h3>{fullname}</h3>
        <p>{email}</p>
        </div>
        <div className='header-bottom' style={{display:'flex',justifyContent:"space-between"}}>
           <div className='personal-info'>
            <h6>Summary</h6>
            <p>{summary}</p>
           </div>
           <img alt='imgs' src={image} style={{width:'100px',height:'80px',borderRadius:'40px'}} />
       </div>
     </div>
      <div className='exp-info'>
       <h4 style={{color:'rgb(150,50,40)'}}>Experience Info</h4>
       <p>{workExp}</p>
      </div>
      <div className='highlights-skills-info'>
       <h4 style={{color:'rgb(150,50,40)'}}>Skills Info</h4>
       <p>{skills}</p>
      </div>
      <div className='edu-info'>
       <h4 style={{color:'rgb(150,50,40)'}}>Educational Info</h4>
       <p>{eduInfo}</p>
      </div>
      <div className='hobby-info'>
       <h4 style={{color:'rgb(150,50,40)'}}>Hubby Info</h4>
       <p>{language}</p>
       <p>{certificate}</p>
      </div>
    </div>
  )
}