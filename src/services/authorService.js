import AuthorApi from '../api/mockAuthorApi';

class AuthorService {
    loadAuthors(callback) {
        return AuthorApi.getAllAuthors().then(authors => {
            callback(authors);
        }).catch(error => {
            callback(null, error);
        });
    }
}

const instance = new AuthorService();

export default instance;