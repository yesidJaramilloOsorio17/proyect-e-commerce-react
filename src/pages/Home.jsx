

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { getNewsThunk } from '../store/slices/news.slice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    const news = useSelector( state => state.news )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( getNewsThunk() )
    }, [] )

    return (
        <div>
           
           <Container className='gap'>
               <Row className='gap'>
            <form className="d-flex">
             <input className="form-control me-sm-2" type="search" placeholder="Search"/>
             <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
             </form>
            </Row>

            <Card className='card'>
                <h3>category</h3>
                  <Row >
              <Col>
                <Button>Smartphones</Button>
              </Col>
                <Col>
                <Button>Smart Tv</Button>
              </Col>
              <Col>
                <Button>Computers</Button>
              </Col>
              <Col>
                <Button>Stoves</Button>
              </Col>
              <Col>
                <Button>All</Button>
              </Col>
            </Row>
            </Card>
        
         
                <Row xs={1} md={2} lg={3} className="py-3">
                    {
                        news.map( product => (
                            <Col className="mb-3" key={ product.id }>
                                <Card>
                                    <Card.Img 
                                    variant="top" 
                                    src={ product.images?.[0].url } 
                                    style={{ height: 400, objectFit: "contain" }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{ product.title }</Card.Title>
                                        <Card.Text>
                                            { product.description }
                                        </Card.Text>
                                        <Card.Text>
                                            { product.price }
                                        </Card.Text>
                                        <Button 
                                        as={Link}
                                        to= {`/product/${product.id}`}
                                        variant="primary">Ver detalle</Button>
                                        <Button>🛒</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                    
                </Row>
           </Container>
        </div>
    );
}

export default Home;

