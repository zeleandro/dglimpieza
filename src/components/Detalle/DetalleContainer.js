import React from 'react';
import DetalleItem from './DetalleItem';
import DetalleCard from './DetalleCard';
import PageLoading from '../PageLoading';
import PageError from '../PageError';


class DetalleContainer extends React.Component {

	state = {
		loading: true,
		error: null,
		data: undefined,
		price: undefined,
		texto: ""
	};

	componentDidMount() {
		this.getdetalle();
	}

	getdetalle = async () => {
		this.setState({ loading: true, error: null });

		try {
			const art = this.props.match.params.id;

			const response = await fetch(`https://fakestoreapi.com/products/${art}`);
			const data = await response.json();

			this.setState({
				loading: false,
				data: data
			})

		} catch (error) {
			console.log("error en la pagina");
			this.setState({ loading: false, error: error });
		}

	};


	render() {
		const item = this.props;

		if (this.state.loading === true && !this.state.data) {
			return (
				<PageLoading></PageLoading>
			);
		}

		if (this.state.error) {
			return (
				<PageError></PageError>
			);
		}
		return (
			<React.Fragment >
				<section className="sptb">
					<div className="container">
						<div className="row">
							<div className="col-xl-12 col-lg-12 col-md-12">
								<DetalleCard item={this.state.data}
									price={this.state.price}
								>
								</DetalleCard>
								<DetalleItem item={this.state.data} 
								>
								</DetalleItem>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}

}

export default DetalleContainer;