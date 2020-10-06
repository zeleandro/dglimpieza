import React from 'react';


class Filtros extends React.Component {
    render() {
        return (
            <div className="col-xl-2 col-lg-4 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="input-group">
                            <input type="text" className="form-control br-tl-7 br-bl-7" placeholder="Search" />
                            <div className="input-group-append ">
                                <button type="button" className="btn btn-primary br-tr-7 br-br-7">
                                    Filtrar
								</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Categorias</h3>
                    </div>
                    <div className="card-body">
                        <div className="" id="container">
                            <div className="filter-product-checkboxs">
                                <label className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" name="checkbox0" value="option0" />
                                    <span className="custom-control-label">
                                        <p><a href="#" className="text-dark">Foods<span className="label label-secondary float-right">01</span></a></p>
                                    </span>
                                    <input type="checkbox" className="custom-control-input" name="checkbox1" value="option1" />
                                    <span className="custom-control-label">
                                        <p><a href="#" className="text-dark">Clothes<span className="label label-secondary float-right">02</span></a></p>
                                    </span>
                                    <input type="checkbox" className="custom-control-input" name="checkbox2" value="option2" />
                                    <span className="custom-control-label">
                                        <p><a href="#" className="text-dark">Jewelery<span className="label label-secondary float-right">42</span></a></p>
                                    </span>
                                    <input type="checkbox" className="custom-control-input" name="checkbox3" value="option3" />
                                    <span className="custom-control-label">
                                        <p><a href="#" className="text-dark">Misc<span className="label label-secondary float-right">12</span></a></p>
                                    </span>
                                </label>
                            </div>

                        </div>
                    </div>
                    {/* <div className="card-header border-top">
                        <h3 className="card-title">Price Range</h3>
                    </div>
                    <div className="card-body">
                        <h6>
                            <label for="price">Price Range:</label>
                            <input type="text" id="price" />
                        </h6>
                        <div id="mySlider"></div>
                    </div>
                    <div className="card-header border-top">
                        <h3 className="card-title">Condition</h3>
                    </div>
                    <div className="card-body">
                        <div className="filter-product-checkboxs">
                            <label className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" name="checkbox1" value="option1" />
                                <span className="custom-control-label">
                                    New
										</span>
                            </label>
                            <label className="custom-control custom-checkbox mb-0">
                                <input type="checkbox" className="custom-control-input" name="checkbox2" value="option2" />
                                <span className="custom-control-label">
                                    Used
										</span>
                            </label>
                        </div>
                    </div>
                    <div className="card-header border-top">
                        <h3 className="card-title">Posted By</h3>
                    </div>
                    <div className="card-body">
                        <div className="filter-product-checkboxs">
                            <label className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" name="checkbox1" value="option1" />
                                <span className="custom-control-label">
                                    Dealer
										</span>
                            </label>
                            <label className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" name="checkbox2" value="option2" />
                                <span className="custom-control-label">
                                    Individual
										</span>
                            </label>
                            <label className="custom-control custom-checkbox mb-0">
                                <input type="checkbox" className="custom-control-input" name="checkbox2" value="option2" />
                                <span className="custom-control-label">
                                    Reseller
										</span>
                            </label>
                        </div>
                    </div> */}
                    <div className="card-footer">
                        <a href="#" className="btn btn-secondary btn-block">Apply Filter</a>
                    </div>
                </div>
                {/* <div className="card mb-lg-0">
                    <div className="card-header">
                        <h3 className="card-title">Shares</h3>
                    </div>
                    <div className="card-body product-filter-desc">
                        <div className="product-filter-icons text-center">
                            <a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="google-bg"><i className="fa fa-google"></i></a>
                            <a href="#" className="dribbble-bg"><i className="fa fa-dribbble"></i></a>
                            <a href="#" className="pinterest-bg"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }

}

export default Filtros;
