import React, { Fragment, useEffect, useRef, useState, Suspense } from 'react';
import { Link, Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Layout from './components/Layout';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Buscador from './components/Listas/Buscador'
import ListaCategoria from './components/Listas/ListaPorCategoria'
import DetalleArticulo from './components/Detalle/DetalleContainer';
import Filtros from './components/Listas/Filtros'
import NotFound from './components/NotFound';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './components/Auth/Login';
import { UserContextProvider } from "./components/Context/UserContext";


const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <UserContextProvider>
      <Provider store={store}>
        <div className="App">
          <Suspense fallback={null}>
            <BrowserRouter>
              <Header />
              <NavBar />
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/about" component={() => <About nombre={'Diego Grnja'} empresa={'DG Limpieza'} />} />
                  <Route exact path="/cart" component={Cart} />
                  <Route exact path="/detalle/:id" component={DetalleArticulo} />
                  <Route exact path="/search" render={(props) => <Buscador {...props} />} />
                  <Route exact path="/categoria/:categoria" component={ListaCategoria} />
                  <Route exact path="/login" component={Login} />
                  <Route component={NotFound} />
                </Switch>
                {/* <Filtros /> */}
              </Layout>
            </BrowserRouter>
          </Suspense>
        </div>
      </Provider>
    </UserContextProvider>
  );
}

export default App;
