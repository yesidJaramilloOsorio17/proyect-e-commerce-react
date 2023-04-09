import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'



const ProductDetail = () => {
const {id} = useParams()
const[detail,setDetail] = useState ({})

  useEffect(()=>{

  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then(resp =>setDetail(resp.data))
    .catch(error=>console.error(error))
  },[])

  return (
    
    <Col className="grid" >
    
    
          <Card className="detail ">
               <Card.Title> <h1> {detail.title}</h1></Card.Title>
          
            <div>
                    <Card.Img
       variant="top" 
      src={detail.images?.[2].url}
     style={{ width: 350, height: 400, objectFit: "contain" }}/>
         <Card.Img
       variant="top" 
      src={detail.images?.[1].url}
     
      style={{ width: 350, height: 400, objectFit: "contain" }}/>
            <Card.Img
       variant="top" 
      src={detail.images?.[0].url}
     
      style={{ width: 350, height: 400, objectFit: "contain" }}/>
            </div>
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
</Card>
    </Col>


     
   
 
  )
}

export default ProductDetail