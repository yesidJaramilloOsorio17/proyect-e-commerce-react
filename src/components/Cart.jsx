import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getpurchasesThunk} from "../store/slices/Purchases.slice" 
import { Card } from 'react-bootstrap'



 const Cart = ({show, handleClose}) => {
   const dispatch = useDispatch()
  

   useEffect(()=>{
    dispatch(getpurchasesThunk())
   }, [])

 const purchases = useSelector(state => state.purchases)

  return (

    <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Card</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
         <ul >
            {
                purchases.map(item =>(
                    <li key={item.id}>
                        
                         <Card>
                           <h5>{item.product.title}</h5>
                           <Card.Img
                           src={item.product.images?.[0].url}
                           style={{ width: 300, height: 100, objectFit: "contain" }}/>
                           <h5>${ item.product.price }</h5>
                          <h5>#{item.id}</h5>
                    
                    </Card>
                       
                    </li>
                   ) )
            }
         </ul>
          </Offcanvas.Body>
      </Offcanvas>


  )
}
export default Cart
