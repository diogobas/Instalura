const logIn = async (user, password) => {
    const url = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
    const httpReader = {
        method: 'POST',
        body: JSON.stringify({
            userName: user,
            password
        }),
        headers: {
            'content-type': 'application/json'
        }
    };
    const response = await fetch(`http://${url}:3030/users/login`, httpReader);

    if (response.ok) {
        return response.headers.get('x-access-token');
    } else {
        throw new Error('Login Failed!')
    }
};

export default logIn;