const LibCommonService = {
    connect: function (pmethod, URL, data) {
        fetch(URL, {
            method: pmethod,
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Authorization": 'Basic ' + 'bW9iaWxlOm1vYmlsZW1pc29jZA=='
            }),
            body: data

        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })

    },
    connectWithAuth: function (pmethod, URL, data, token) {
        let headers = new HttpHeaders({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
            //'withCredentials': true
        });
        let options = { headers: headers, withCredentials: true, params: undefined };

        if (pmethod == "GET") {
            options.params = data;
            return this.http.get(URL, options).toPromise();
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).toPromise();
        }
    }
}
export default LibCommonService;
