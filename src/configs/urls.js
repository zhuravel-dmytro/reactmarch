// export class Urls{
//     _baseUrl = 'https://jsonplaceholder.typicode.com';
//
//     getUsers(){
//         return fetch(this._baseUrl + '/'+ 'users').then(value => value.json());
//     }
//     getUserId(id){
//         return fetch(this._baseUrl + '/' + id ).then(value => value.json())
//     }
//
// }

const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: '/users',
    posts: '/posts'
}

export {
    baseURL,
    urls
}