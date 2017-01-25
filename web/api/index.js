import qs from 'querystring';

const API_URL = 'http://localhost:8080/api/employees';

class EmployeeApi {

  static create(data) {
    return fetch(API_URL, {
      method: 'POST',
      body: data
    }).then(response => {
      return response.json();
    });
  }

  static readAll(query) {
    let url = API_URL;
    let queryString;

    if (query) {
      queryString = qs.stringify(query);
      url += `?${queryString}`;
    }

    return fetch(url).then(response => {
      return response.json();
    });
  }

  static update(data) {}

  static delete(id) {
    return fetch(API_URL, {
      method: 'DELETE'
    }).then(response => {
      return response.json();
    });
  }

}

export default EmployeeApi;
