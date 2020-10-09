import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux'

function CartItem(props) {
    const [number, setNumber] = useState(1)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    return (
        <tr>
            <td>{props.title}</td>
            <td><span>${props.price}</span></td>
            <td class="w-7 "><input type="text" class="form-control text-center h-5" value={props.cant}></input></td>
            <td><span>${props.price * props.cant}</span></td>
            <td><a class="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a></td>
        </tr>
    )
}

export default CartItem