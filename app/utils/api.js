import axios from 'axios';
import qs from 'qs';

export class Api {

    /// singleton
    static apiInstance = null;

    constructor() {
        this.apiInstance = this.apiInstance != null
            ? this.apiInstance
            : axios.create({
                baseURL: this.url,
                timeout: 10000,
            });

        this.url = "https://api.github.com/search/repositories";
    }

    fetchPopularRepos(language) {
        var encodedURI = window.encodeURI(this.url + '?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
        return this.apiInstance.request({
           url: encodedURI,
            // baseURL: this.url,
            // params: {
            //     q: "stars:>1+language:"+language,
            //     sort: 'stars',
            //     order: 'desc',
            //     type: 'Repositories'
            // },
            // paramsSerializer: (params) => {
            //     console.log(qs.stringify(params, { arrayFormat: 'brackets' }))
            //     return qs.stringify(params, { arrayFormat: 'brackets' });
            // }
        }).then((response) => response.data.items);
    }
}