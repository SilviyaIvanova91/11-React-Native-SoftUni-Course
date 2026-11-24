import { auth } from "./api"

export const register = async (email, password, name) => {
    const result = await auth.post('/signup', {
        email,
        password,
        displayName: name,
    });

    console.log(result)

    return result.data;
}

export const login = async (email, password) => {
    const result = await auth.post('/token?grant_type=password', {
        email,
        password,
    });

    console.log(result)


    return result.data;
}
