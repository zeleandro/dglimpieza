import React, { Component } from 'react';

class Confirm extends Component {
    render() {
        return (
            <div class="container">
                <div class="row ">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header ">
                                <div class="card-title">Confirmar compra</div>
                            </div>
                            <div class="card-body">
                                <div class="tab-content">
                                    <h4 class="mb-1 font-weight-bold mb-4">Pago</h4>
                                    <div class="form-group ">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label class="form-label mt-2">Forma de Pago</label>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="d-flex">
                                                    <select class="form-control">
                                                        <option selected="">Efectivo</option>
                                                        <option>Tarjeta de Debito</option>
                                                        <option>Tarjeta de Credito</option>
                                                        <option>Transferencia</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group ">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label class="form-label mt-2">Domicilio de entrega</label>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="d-flex">
                                                    <input type="text" class="form-control w-100" placeholder="Calle y numero"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group ">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label class="form-label mt-2">Telefono de contacto</label>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="d-flex">
                                                    <input type="text" class="form-control w-100" placeholder="0123456789"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 class="mb-1 mt-5 mb-4 font-weight-bold">Installed Gateway</h4>
                                    <div class="form-group ">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label class="form-label">PayU India</label>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="d-flex">
                                                    <div class="custom-controls-stacked">
                                                        <label class="custom-control custom-checkbox mb-0">
                                                            <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1"></input>
                                                            <span class="custom-control-label">Enable</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-5 border-top">
                                        <button type="submit" class="btn btn-primary waves-effect waves-light">Confirmar pedido</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm