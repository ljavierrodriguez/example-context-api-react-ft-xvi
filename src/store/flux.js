const getState = ({ getStore, getActions, setStore }) => {
    /* 
        la funcion "getStore" me permite acceder a un objeto con todos los atributos definidos dentro del atributo "store"
        la funcion "getActions" me permite acceder a un objeto con todos los metodos o functiones definidas dentro del atributo "actions"
        la funcion "setStore" me permite actualizar el objeto store con el objecto que recibe como parametro. ex: setStore({ attr: value })
    */
    return {
        store: {
            name: '',
            lastname: '',
            gender: 'Male',
            age: 40,
            posts: [],
            single: false,
            token: 'zsssjflejrekwrjkl23j4l23j423j4lk23j4'
        }, // devuelve todos los datos definidos en mi aplicacion
        actions: {
            saludo: () => {
                const store = getStore();
                alert(`Hola Mundo ${store.name} ${store.lastname}`);
            },
            actualizarDatos: () => {
                setStore({ name: 'John', lastname: 'Doe' });
            },
            login: () => {
                // fetching login
                let data = {
                    name: 'Luis',
                    lastname: 'Rodriguez'
                }
                setStore({ name: data.name, lastname: data.lastname })
                localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('name', data.name);
                localStorage.setItem('lastname', data.lastname);
                sessionStorage.setItem('name', data.name);
                sessionStorage.setItem('lastname', data.lastname);
            },
            checkLogin: () => {
                if (localStorage.getItem('name') && localStorage.getItem('lastname')) {
                    let data = JSON.parse(localStorage.getItem('user'));
                    console.log(data);
                    setStore({ name: localStorage.getItem('name'), lastname: localStorage.getItem('lastname') })
                }
                if (sessionStorage.getItem('name') && sessionStorage.getItem('lastname')) {
                    setStore({ name: sessionStorage.getItem('name'), lastname: sessionStorage.getItem('lastname') })
                }
            },
            logout: () => {
                setStore({ name: '', lastname: '' });
                localStorage.removeItem('name');
                localStorage.removeItem('lastname');
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('lastname');
            },
            getPosts: () => {
                const store = getStore();
                const { token } = store;
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                        'x-access-token': 'dasda3e4234234234234324' 
                    }
                })
            }

        }
    }
}

export default getState;