import { Button, Card, Container, Form } from "react-bootstrap"

export default function EduInfo({nextStep,prevStep,updateForm,values}){
  return(
<Container  style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
  <Card>
  <Card.Body>
     <Form onSubmit={(e)=>{
    e.preventDefault()
    nextStep()
  }}>
      <legend className="card-title">Educational Info</legend>
       <Form.Group>
        <Form.Label>School name</Form.Label>
      <Form.Control type="text" placeholder="School Name" onChange={(e)=>updateForm({schoollname:e.target.value})} value={values.schoollname} />
    </Form.Group>
    <Form.Group>
        <Form.Label>Start from</Form.Label>
        <Form.Control type="date" placeholder="Start at" value={values.startschoollAt} onChange={(e)=>updateForm({startschoollAt:e.target.value})} />
      </Form.Group>
      <Form.Group>
      <Form.Label>End At</Form.Label>
        <Form.Control type="date"  placeholder="end at" value={values.finishschoollAt} onChange={(e)=>updateForm({finishschoollAt:e.target.value})} />
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