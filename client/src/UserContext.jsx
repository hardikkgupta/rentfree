const { createContext } = require("react");

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = userState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}