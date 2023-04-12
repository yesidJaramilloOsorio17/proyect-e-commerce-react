import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useSelector, useDispatch } from 'react-redux'
import { getNewsThunk, filterCategoriesThunk,  filterHeadCategoriesThunk  } from '../store/slices/news.slice'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Home = () => {
    const products = useSelector( state => state.news )
    const dispatch = useDispatch()
    const[categories, setCategories] = useState([])
    const[inputSearch, setInputSearch] = useState ("") 
   

    useEffect( () => {
        dispatch( getNewsThunk() )
       axios
          .get(`https://e-commerce-api-v2.academlo.tech/api/v1/categories`)
           .then(resp=>setCategories(resp.data))
           .catch(error=> console.error(error))
    }, [] )

    return (
       <div>
          
        <Container >

        <Row className='py-3'>
           
            <Col>
        <>
    < InputGroup className="mb-3">
             < Form.Control
             placeholder='products...'
             aria-label="Recipient's username"
             aria-describedby="basic-addon2"
             value = {inputSearch}
              onChange={e  => setInputSearch(e.target.value)}
            
             />
              <Button
              variant="outline-primary"
              onClick={() => dispatch( filterHeadCategoriesThunk (inputSearch) )}
              >
                Search
            </Button>
          </ InputGroup>
            </>
            </Col>
    </Row> 
           
     <Row className='py-3' >
       <h3>Category</h3>
               {
               categories.map(category =>
                <Col key={category.id}>
                <Button className='w-100' onClick={ ()=>
                dispatch( filterCategoriesThunk(category.id) )  }
                >{category.name}</Button>
              </Col>
                )}
               <Col>
                <Button onClick={()=>dispatch(getNewsThunk())}
                  className="w-100">All</Button>
               </Col>
    </Row>

     <Row xs={1} md={2} lg={3} className="py-3">
                 {
                        products .map( product => (
                            <Col className="mb-3" key={ product.id }>
                                <Card>
                                    <Card.Img 
                                    variant="top" 
                                    src={ product.images?.[0].url } 
                                    style={{  objectFit: "contain" }}
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

