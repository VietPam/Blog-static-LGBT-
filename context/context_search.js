import { createContext } from 'react'
export const AppContext = createContext({})
// const [userData, setUserData] = useState({}) ;
const userData = 'hello'
export const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{ userData }}>{children}</AppContext.Provider>
}
