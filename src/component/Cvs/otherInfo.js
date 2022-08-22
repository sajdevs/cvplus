import { Button, Card, Container, Form } from "react-bootstrap"

export default function Others({nextStep,prevStep,updateForm,values}){
  return(
  <Container  style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
    <Card>
  <Card.Body>
     <Form onSubmit={(e)=>{
    e.preventDefault()
    nextStep()
  }}>
      <legend className="card-title">Other Info</legend>
       <Form.Group>
        <Form.Label>Language</Form.Label>
      <Form.Control type="text" placeholder="language" value={values.language} onChange={(e)=>updateForm({language:e.target.value})} />
    </Form.Group>
    <Form.Group>
        <Form.Label>Certificate</Form.Label>
        <Form.Control type="text" placeholder="Certificate..." value={values.certificate} onChange={(e)=>updateForm({certificate:e.target.value})}/>
      </Form.Group>
      <Form.Group>
      <Form.Label>Links</Form.Label>
        <Form.Control type="text"  placeholder="Links here" value={values.links} onChange={(e)=>updateForm({links:e.target.value})} />
      </Form.Group>
       <Form.Group style={{marginTop:'2rem',justifyContent:'space-between',display:'flex'}}>
        <Button  onClick={()=>{
          prevStep()
        }}>Previous</Button>
        <Button type="submit">Next</Button>
      </Form.Group>
     </Form>
     </Card.Body>
  </Card>
  </Container>
  )
}