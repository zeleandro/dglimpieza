import React from 'react';
import {Link} from 'react-router-dom';

export default function ListaItem(props){
    return(
        <div className="col-lg-6 col-md-12 col-xl-4" >
			<div className="card card_lista overflow-hidden" >
				<div className="item-card2-img"  >
				<div className="arrow-ribbon bg-primary">{props.price}</div>			
                    <img src={props.image} alt="img" className="cover-image" />
                </div>
                <div className="item-card7-overlaytext">
                    <a className="text-white badge badge-primary">
                    </a>
                </div>
                <div className="card-body">
                    <div className="item-card2">
                        <div className="item-card2-desc">
                            <p className="mb-0"><h4>{props.title}</h4></p>
                            <Link to={{
                                pathname: `/categoria/${props.category}`,
                            }}><h6><span class="badge badge-secondary">{props.category}</span></h6></Link>
                            <p className="mb-0">{props.description.substring(0, 50)}</p>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                <Link className="btn btn-white btn-block" to={{
                    pathname: `/detalle/${props.id}`,
                    state: {
                    fromNotifications: true
                    }
                }}>Ver Detalle</Link> 
                </div>
            </div>
        </div>
    )

}