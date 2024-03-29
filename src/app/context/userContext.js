import React from "react";

const UserContext = React.createContext({name: '', auth: false});

const UserProvider = ({ child }) => {
    const [user, setUser] = React.useState({name: '', auth: false});

    const login = (name) => {
        setUser((user) => ({
            name: name,
            auth: true
        }));
    }
    const logout = () => {
        setUser((user) => ({
            name: '',
            auth: false,
        }));
    }
    return (
        <UserContext.Provider value={{user, login, logout}}>
            {child}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};