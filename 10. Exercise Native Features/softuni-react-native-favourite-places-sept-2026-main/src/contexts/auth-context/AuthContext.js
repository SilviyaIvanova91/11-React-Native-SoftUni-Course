import {createContext} from 'react';

const AuthContext = createContext({
    register(email, password) {},
    login(email, password) {},
    user: null,
});

export default AuthContext;
