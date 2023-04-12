import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getpurchasesThunk} from "../store/slices/Purchases.slice" 

 const Cart = ({show, handleClose}) => {
   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(getpurchasesThunk())
   }, [])

  return (
    <div>
    <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}
export default Cart
