export class Urls{
    _url = 'https://jsonplaceholder.typicode.com/users';

    getUsers(){
        return fetch(this._url).then(value => value.json());
    }
    getUserId(id){
        return fetch(this._url + '/' + id ).then(value => value.json())
    }
}



