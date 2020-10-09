import {useCallback, useContext, useState} from 'react'
import Context from '../components/Context/UserContext'

export default function useUser () {
  const {token, setToken} = useContext(Context);
  const {code, setCode} = useContext(Context);
  const {name, setName} = useContext(Context);

  //aca con este servicio vamos a guardar el token cuando lo obtenga desde el login
  const login = useCallback((token, name, code) => {
        window.sessionStorage.setItem('token', token);
        window.sessionStorage.setItem('code', code);
        window.sessionStorage.setItem('name', name);
        setToken(token);
        setCode(code);
        setName(name);
        console.log('login');
  }, [setToken, setCode, setName])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('code');
    window.sessionStorage.removeItem('name');
    setToken(null);
    setCode(null);
    setName(null);
    console.log('logout');
    console.log(token);
  }, [setToken, setCode, setName])

  return {
    isLogged: Boolean(token),
    login,
    logout,
    token,
    code,
    name
  }
} 