import React from 'react'
import { Container ,Card} from 'react-bootstrap'

export default function CvComplete({values,image}) {

  const {fullname,email,phone,contactAdd,summary,schoollname,startschoollAt,finishschoollAt,jobtitle,companyname,startcompanyAt,leavecompanyAt,language,certificate,links} = values

  return (
    <Container style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
        <Card>
           <Card.Body>
           <p><strong>Full name: </strong>{fullname}{''}</p>
           <p><strong>email: </strong>{email}{''}</p>
           <p><strong>phone: </strong>{phone}{''}</p>
           <p><strong>Contact Add: </strong>{contactAdd}{''}</p>
           <p><strong>summary: </strong>{summary}{''}</p>
           <p><strong>schooll name </strong>{schoollname}{''}</p>
           <p><strong>start schooll at: </strong>{startschoollAt}{''}</p>
           <p><strong>finish scholl at: </strong>{finishschoollAt}{''}</p>
           <p><strong>job title: </strong>{jobtitle}{''}</p>
           <p><strong>company name: </strong>{companyname}{''}</p>
           <p><strong>start company at: </strong>{startcompanyAt}{''}</p>
           <p><strong>leave company at: </strong>{leavecompanyAt}{''}</p>
           <p><strong>languge: </strong>{language}{''}</p>
           <p><strong>certficate: </strong>{certificate}{''}</p>
           <p><strong>links: </strong>{links}{''}</p>
           <img alt='imgs' src={image} />
           </Card.Body>
        </Card>
    </Container>
  )
}
