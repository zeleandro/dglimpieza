import React from 'react';
import PageLoading from '../PageLoading';
import PageError from '../PageError';
import ListaItem from './ListaItem';
import Loader from '../MiniLoader'
import InfiniteScroll from 'react-infinite-scroll-component';
import '../style/listas.css';

class ListaArticulo extends React.Component {

    state = {
		cant: 6,
		items: this.props.articulos.slice(0, 6),
		hasMore: true,
		
	  };
	
	  fetchMoreData = () => {
		if (this.state.items.length >= this.props.articulos.length) {
			this.setState({ hasMore: false });
			return;
		  }
		setTimeout(() => {
		  this.setState({
			items: this.state.items.concat(this.props.articulos.slice(this.state.cant, this.state.cant+6)),
			cant: this.state.cant+6,
		  });
		}, 1500);
	  };

    render() {

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
            <section className="sptb">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="section-title center-block text-center"><h1>{this.props.title}</h1></div>
                                    <div className="item2-gl ">
                                        <InfiniteScroll
                                            dataLength={this.state.items.length}
                                            next={this.fetchMoreData}
                                            hasMore={this.state.hasMore}
                                            loader={<Loader />}
                                            endMessage={
                                                <p style={{ textAlign: "center" }}>
                                                    <b>No hay mas articulos disponibles</b>
                                                </p>
                                            }
                                        >
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab-12">
                                                    <div className="row">
                                                        {this.state.items.map((item, index) => (
                                                            <ListaItem
                                                                key={index}
                                                                price={item.price}
                                                                image={item.image}
                                                                category={item.category}
                                                                description={item.description}
                                                                title={item.title}
                                                                id={item.id}
                                                            >
                                                            </ListaItem>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </InfiniteScroll>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ListaArticulo;