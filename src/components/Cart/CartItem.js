import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { updateProduct } from '../../redux'
import { deleteProduct } from '../../redux'

function CartItem(props) {
    const [number, setNumber] = useState(1)
    const [cantidad, setCantidad] = useState(props.cant)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const onChange = (e) => {
		switch (e.target.name) {
			case 'cantidad': {
                setCantidad(e.target.value)
                dispatch(updateProduct({id: props.id, cant: e.target.value}))
            }
			default: { }
		}
    }
    
    return (
        <tr>
            <td>{props.title}</td>
            <td><span>${props.price}</span></td>
            <td class="w-7 "><input type="text" class="form-control text-center h-5" name="cantidad" value={cantidad}
                onChange={onChange}></input>
            </td>
            <td><span>${props.price * props.cant}</span></td>
            <td><a class="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"
                onClick={() => dispatch(deleteProduct({id: props.id}))}><i class="fa fa-trash-o"></i></a></td>
        </tr>
    )
}

export default CartItem