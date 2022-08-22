import React,{useState} from 'react'
import Contacts from './personalInfo'
import EduInfo from './eduInfo'
import ExpInfo from './expInfo'
import Skills from './skills'
import Others from './otherInfo'
import CvComplete from './CvComplete'


export default function Cv() {
  const [formData,setFormData] = useState({
    fullname:'',email:'',phone:'',contactAdd:'',summary:'',
    schoollname:'',startschoollAt:'',finishschoollAt:'',jobtitle:'',companyname:'',startcompanyAt:'',leavecompanyAt:'',language:'',certificate:'',links:''
  })
  const [steps,setSteps] = useState(1)
  const [image,setImage] = useState([])

  const updateForm=(value)=>{
    setFormData(prev=>{
      return{ ...prev,...value}
    })
  }
  const nextStep=()=>{
    setSteps(steps +1)
  }
  const prevStep=()=>{
    setSteps(steps - 1)
  }
 switch(steps){
   case 1:return(
       <Contacts nextStep={nextStep} updateForm={updateForm} values={formData}/>
   )
   case 2: return(
     <EduInfo prevStep={prevStep} nextStep={nextStep} updateForm={updateForm} values={formData}/>
   )

   case 3:return(
     <ExpInfo  prevStep={prevStep} nextStep={nextStep} updateForm={updateForm} values={formData} />
   )
  case 4: return(
    <Skills prevStep={prevStep} nextStep={nextStep} updateForm={updateForm} values={formData}/>
  )
case 5:return(
  <Others  prevStep={prevStep} nextStep={nextStep} updateForm={updateForm} values={formData} />
)
case 6: return(
     <UploadsImg  prevStep={prevStep} nextStep={nextStep} setImage={setImage} />
)
case 7:return(
  <TemplateOne values={formData} image={image}/>
)

   default:return(
     <div>default</div>
   )
 }

}

function UploadsImg({nextStep,prevStep,setImage}){
  const [img,setImg] =useState([])

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

function TemplateOne({values,image}){

 const {fullname,email,phone,contactAdd,summary,schoollname,startschoollAt,finishschoollAt,jobtitle,companyname,startcompanyAt,leavecompanyAt,language,certificate,links} = values

  return(
    <div className='container card'style={{padding:'10px'}}>
      <div className='t-one-header'>
         <h3 style={{textAlign:'center',fontFamily:'serif'}}>Curriculum Vitae</h3>
         <div className='header' style={{display:'flex',justifyContent:'space-between'}}>
           <div className='personal-info'>
            <h4>{fullname}{''}</h4>
            <p>{contactAdd}{''}</p>
            <p>{phone}{''}</p>
            <p>{email}{''}</p>
           </div>
           <img alt='imgs' src={image} style={{width:'100px',height:'80px',borderRadius:'40px'}}/>
         </div>
      </div>
      <div className='edu-info'>
      <h4 style={{color:'#fff',backgroundColor:'rgb(110,111,112)'}}>Educational Info</h4>
      <ul>
       <li>
         <p>School: {schoollname}</p>
        From:<p>{startschoollAt}{''}</p>{''}To:<p>{finishschoollAt}{''}</p></li>
       </ul>
      </div>
      <div className='edu-info'>
      <h4  style={{backgroundColor:'rgb(110,111,112)',color:'#fff'}}>Experience</h4>
          <ul>
         <li>
         <p>Company: {companyname}{''}</p>
           <p>Title: {jobtitle}{''}</p>
         From <p>{startcompanyAt}{''}</p>{' '}To:<p>{leavecompanyAt}{''}</p></li>
         </ul>
      </div>
      <div className='edu-info'>
      <h4  style={{color:'#fff',backgroundColor:'rgb(110,111,112)'}}>Skills</h4>
        <ul>
         <li>
         <p>Company: {companyname}{''}</p>
           <p>Title: {jobtitle}{''}</p>
         From <p>{startcompanyAt}{''}</p>{' '}To:<p>{leavecompanyAt}{''}</p></li>
         </ul>
      </div>
      <div className='edu-info'>
      <h4 style={{color:'#fff',backgroundColor:'rgb(110,111,112)'}}>Hubby</h4>
       <ul>
         <li>{language}{''}</li>
         <li>{certificate}{''}</li>
         <li>{links}{''}</li>
          </ul>
      </div>
    </div>
  )
}