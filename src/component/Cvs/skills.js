import { Button, Card, Container, Form } from "react-bootstrap"


export default function Skills({nextStep,prevStep,updateForm,values}){
  return(
<Container  style={{paddingTop:'5rem',paddingBottom:'3rem',paddingLeft:'2rem',paddingRight:'2rem'}}>
  <Card>
  <Card.Body>
     <Form onSubmit={(e)=>{
    e.preventDefault()
    nextStep()
  }}>
      <legend className="card-title">Skill Info</legend>
       <Form.Group>
        <Form.Label>Company name</Form.Label>
      <Form.Control type="text" placeholder="Company Name" value={values.companyname} onChange={(e)=>updateForm({companyname:e.target.value})} />
    </Form.Group>
    <Form.Group>
        <Form.Label>Start from</Form.Label>
        <Form.Control type="date" placeholder="Start at" value={values.startcompanyAt} onChange={(e)=>updateForm({startcompanyAt:e.target.value})} />
      </Form.Group>
      <Form.Group>
      <Form.Label>End At</Form.Label>
        <Form.Control type="date"  placeholder="end at" value={values.leavecompanyAt} onChange={(e)=>updateForm({leavecompanyAt:e.target.value})}/>
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
