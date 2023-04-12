import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import { Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/col"
import Row from "react-bootstrap/Row"
import {createPurchasesThunk} from "../store/slices/Purchases.slice"
import { useDispatch } from "react-redux"


const ProductDetail = () => {
const {id} = useParams()
const[detail,setDetail] = useState ({})
const[counter, setCounter]= useState(1)
const dispatch = useDispatch()

  useEffect(()=>{

  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then(resp =>setDetail(resp.data))
    .catch(error=>console.error(error))
  },[])

  const addPurchases = () => {
    const data = {
     quantity:counter,
      productId: id
    }

    dispatch(createPurchasesThunk(data));
  }

  return (
    
    <Container 
    style={{  padding: "1rem"}}
    >
    
    
          <Card className="detail ">
               <Card.Title> <h1> {detail.title}</h1></Card.Title>
               <Carousel>
      <Carousel.Item>
           <Card.Img
       variant="top" 
      src={detail.images?.[2].url}
     style={{ width: 350, height: 400, objectFit: "contain" }}/>
      </Carousel.Item>
      <Carousel.Item>
           <Card.Img
       variant="top" 
      src={detail.images?.[1].url}
     
      style={{ width: 350, height: 400, objectFit: "contain" }}/>
      </Carousel.Item>
      <Carousel.Item>
           <Card.Img
       variant="top" 
      src={detail.images?.[0].url}
     
      style={{ width: 350, height: 400, objectFit: "contain" }}/>
      </Carousel.Item>
    </Carousel>

  <Card.Text>
              { detail.price }
         </Card.Text>
         <Card.Text>
              { detail.brand}
         </Card.Text>
    <Card.Body>
   
          
          <Card.Text>
             { detail.description} 
          </Card.Text>
          <Card.Text>
             creado:{ detail.createdAt}
          </Card.Text>
          <Card.Text>
             Actualizado:{ detail.updatedAt}
          </Card.Text>
  
    </Card.Body>
    <Row className="mb-3">
        <Col>
          <Button onClick={() => setCounter(counter - 1)}>-</Button>
          {counter}
          <Button onClick={() => setCounter(counter + 1)}>+</Button>
        </Col>
        <Col>
          <Button onClick={()=>addPurchases()}>Añadir a favoritos</Button>
        </Col>
      </Row>
</Card>
    </Container>


     
   
 
  )
}

export default ProductDetail