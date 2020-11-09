import axios from 'axios';

const API_URL = 'https://vital-balance.ru/private/';
//const API_URL = 'https://chestny-prekt.vital-balance.ru/private/';

axios.defaults.headers.common = {
    Accept: "application/json, text/plain, */*"
};

export default class API {

    async send(url, method = 'GET', action, data = {}, params,cb) {
        const response = await axios({
            method,
            url: `${url}${action}${window.location.search}${params ? params : ''}`,
            data
        }).catch(error => {
            console.error("Error API:", error);
            cb(error);
        });
        return response ? response.data : [];
    }

    async Get(type,params) {
        let err = null;
        const response = await this.send(API_URL, "GET", type, null, params,function(er) {
            err = er;
        }.bind(err));
        console.log("API: ", `Get ${type}`, response);

        if (response.length === 0) {
            response.error = "1";
            response.code = 500;
            response.error2 = "Error: "+JSON.stringify(err);
            console.log("sss",response.error);
            return response;

        } else {
            if (response.error) {
                response.error2 = response.error;
            }
            return response;
        }

    }

    async Post(data,params) {
        const response = await this.send(API_URL, "POST", `upload`, data, params);
        console.log("API: ", `Post`, response);

        return response;
    }
}