import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import useUser from '../../hooks/UseUser';
import { ToastContainer, toast } from 'react-toastify';

export default function Logueado(props) {
  const { login, isLogged } = useUser();
  const { loading, setLoading } = useState(false);

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/users/1')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error en las credenciales');
          }
        })
        .then(data => {
          login(data.email, data.name.firstname, data.name.lastname);
          const toasterlogued = () => toast.success("Bienvenido" + " " + data.name.firstname);
          toasterlogued();

        })
        .catch((error) => {
          const toastererror = () => toast.error("Ocurrio un error en el proceso de logueo. Intentar nuevamente mas tarde");
          toastererror();
          console.log(error);

        });
    } catch (error) {
      console.log("error en la api");
    }
  });


  return (
    <React.Fragment>
      <Redirect to='/home' />
      <ToastContainer />
    </React.Fragment>
  )

}