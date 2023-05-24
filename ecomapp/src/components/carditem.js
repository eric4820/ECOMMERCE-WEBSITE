import React from 'react';
import { Button,Row,Card,CardTitle,CardBody,CardSubtitle,CardText ,Col,CardImg, CardGroup} from 'reactstrap';
import ICON from './../RESOURCES/pexels3.jpeg';
function card () {
  return (
    
        <div className='body-text'>
       <CardGroup>
   
  <Card className='carditem'>
    
    <CardBody className='cardbody'>
    <div className='carddescrip'>
      <CardTitle tag="h5"> 
      <CardImg className='cardimg'
      alt="Card image cap"
      src={ICON}
      
    />
        Card title
        
      </CardTitle>
      <div className='carddescri'>
      <CardSubtitle
        
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button className='button'>
        PLACE ORDER
      </Button>
      </div>
      </div>
    </CardBody>
  </Card>
  
</CardGroup>
      </div>
  )
}
export default card;