import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
  const [token, setToken] = useState(() => window.sessionStorage.getItem('token'))
  const [code, setCode] = useState(() => window.sessionStorage.getItem('code'))
  const [name, setName] = useState(() => window.sessionStorage.getItem('name'))


  return <Context.Provider value={{ token, setToken, code, setCode, name, setName }}>
    {children}
  </Context.Provider>
}

export default Context