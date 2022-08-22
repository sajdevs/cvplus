import React from 'react'
import '../css/template.css'
import image from '../asset/splash/splash6.jpg'


export default function Template() {
  return (
    <div className='templates'>
       <TemplateOne/>
       <TemplateTwo/>
       <TemplateThree/>
       <TemplateSix/>

    </div>
  )
}

export function TemplateOne(){

 /* const {fullname,email,phone,contactAdd,summary,schoollname,startschoollAt,finishschoollAt,jobtitle,companyname,startcompanyAt,leavecompanyAt,language,certificate,links} = values
 */
  return(
    <div className='container card'style={{padding:'10px'}}>
      <div className='t-one-header'>
         <h3 style={{textAlign:'center',fontFamily:'serif'}}>Curriculum Vitae</h3>
         <div className='header' style={{display:'flex',justifyContent:'space-between'}}>
           <div className='personal-info'>
            {/* <p>{fullname}{''}</p>
            <p>{contactAdd}{''}</p>
            <p>{phone}{''}</p>
            <p>{email}{''}</p> */}
            <p>fullname</p>
            <p>Phone</p>
            <p>Email</p>
           </div>
           <img alt='imgs' src={image} style={{width:'100px',height:'80px',borderRadius:'40px'}}/>
         </div>
      </div>
      <div className='edu-info'>
      <h4 style={{color:'#fff',backgroundColor:'rgb(110,111,112)'}}>Educational Info</h4>
      {/* <ul>
      <p>{schoollname}{''}</p>
        <li>{startschoollAt}{''}</li>
        <li>{finishschoollAt}{''}</li>
      </ul> */}
      </div>
      <div className='edu-info'>
      <h4  style={{backgroundColor:'rgb(110,111,112)',color:'#fff'}}>Experience</h4>
       {/*   <ul>
         <li>{companyname}{''}</li>
         <li>{companyname}{''}</li>
         <li>{jobtitle}{''}</li>
         <li>{startcompanyAt}{''}</li>
         <li>{leavecompanyAt}{''}</li>
         </ul> */}
      </div>
      <div className='edu-info'>
      <h4  style={{color:'#fff',backgroundColor:'rgb(110,111,112)'}}>Skills</h4>
       {/*  <ul>
         <li>{companyname}{''}</li>
         <li>{companyname}{''}</li>
         <li>{jobtitle}{''}</li>
         <li>{startcompanyAt}{''}</li>
         <li>{leavecompanyAt}{''}</li>
         </ul> */}
      </div>
      <div className='edu-info'>
      <h4 style={{color:'#fff',backgroundColor:'rgb(110,111,112)'}}>Hubby</h4>
      {/*  <ul>
         <li>{language}{''}</li>
         <li>{certificate}{''}</li>
         <li>{jobtitle}{''}</li>
         <li>{startcompanyAt}{''}</li>
         <li>{leavecompanyAt}{''}</li>
         </ul> */}
      </div>
    </div>
  )
}


export function TemplateTwo(){
  return(
    <div className='card container' style={{padding:'10px'}}>
      <div className='t-two-header'>
        <div className='header-top' style={{backgroundColor:'rgb(10, 29, 46)',color:'#fff'}}>
        <h3>Full name</h3>
        <p>Phone</p>
        <p>Email</p>
        </div>
        <div className='header-bottom' style={{display:'flex',justifyContent:"space-between"}}>
           <div className='personal-info'>
            <p>Summary</p>
           </div>
           <img alt='imgs' src={image} style={{width:'100px',height:'80px',borderRadius:'40px'}} />
       </div>
     </div>
      <div className='exp-info'>
       <h4 style={{color:'rgb(150,50,40)'}}>Experience Info</h4>
       exps info
      </div>
      <div className='highlights-skills-info'>
       <h4 style={{color:'rgb(150,50,40)'}}>Skills Info</h4>
       Highlights skill info
      </div>
      <div className='edu-info'>
       <h4 style={{color:'rgb(150,50,40)'}}>Educational Info</h4>
       edu info
      </div>
      <div className='hobby-info'>
       <h4 style={{color:'rgb(150,50,40)'}}>Hubby Info</h4>
       other info
      </div>
    </div>
  )
}


export function TemplateThree(){
  return(
    <div className='container card'style={{padding:'10px'}}>
      <div className='t-three-header'>
        <div className='header' style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
           <img alt='imgs' src={image} style={{width:'100px',height:'80px',borderRadius:'40px'}} />
            <div className='personal-info'>
           <h4>Title info</h4>
           <p>Phone</p>
           <p>Email:</p>
           </div>
        </div>
        <div className='about-info'>
         <h5>About</h5>
         <p>summary</p>
        </div>
      </div>
     <div className='body-three'>
      <div className='left-panel'>
        <div className='edu-info'>
         <h4>Experience Info</h4>
       edu info
      </div>
       <div className='edu-info'>
        <h4>Education Info</h4>
       other info
      </div>
      </div>
      <div className='right-panel'>
        <div className='edu-info'>
         <h4>Skills Info</h4>
       exp info
      </div>
      </div>
     </div>
    </div>
  )
}

export function TemplateSix(){
  return(
   <div className='card container' style={{padding:'10px'}}>
    <div className='header-with-name'
     style={{backgroundColor:'rgb(50,100,200)',height:'50px',alignItems:'center',padding:'20px'}}>
     <h4>Your Name</h4>
     </div>
     <div className='body-tree' style={{display:'flex',justifyContent:'space-between'}}>
      <div className='left-panel'  style={{padding:'10px'}}>
      <hr style={{color:'red',fontWeight:'bold'}} />
        <div className='exp-info'>
        <h4>Experience</h4>
       exp info
      </div>
      <hr style={{color:'red',fontWeight:'bold'}} />
       <div className='contact-info'>
       <h4>Education</h4>
       edu info
      </div>
      <hr style={{color:'red',fontWeight:'bold'}} />
       <div className='edu-info'>
       <h4>Skills</h4>
       skill info
      </div>
      <hr style={{color:'red',fontWeight:'bold'}}/>

      </div>
      <div className='right-panel'>
        <div className='contact-info' style={{display:'flex',flexDirection:'column',alignContent:"space-around"}}>
        <img alt='avt' src={image} style={{width:'100px',height:'80px',borderRadius:'40px'}} />
        <h5>Contact:</h5>
        <p>Address:{}</p>
        <p>Phone:{}</p>
        <p>Email:{}</p>
       contact info
      </div>
     </div>
     </div>
    </div>
  )
}
