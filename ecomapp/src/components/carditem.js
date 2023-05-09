import React from 'react';
import { Button,Row,Card,CardTitle,CardBody,CardSubtitle,CardText ,Col,CardImg, CardGroup} from 'reactstrap';

function card () {
  return (
    
        <div className='body-text'>
       <CardGroup>
   
  <Card className='carditem'>
    
    <CardBody className='cardbody'>
    
      <CardTitle tag="h5">
      <CardImg className='cardimg'
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      
    />
        Card title
      </CardTitle>
      <CardSubtitle
        
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  
</CardGroup>
      </div>
  )
}
export default card;