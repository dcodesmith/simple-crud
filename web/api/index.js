import request from 'superagent';

const API_URL = 'http://localhost:8080/api/employees';

class EmployeeApi {

  static create(data) {
    return request.post(API_URL)
            .send(data)
            .then(response => response.body);
  }

  static readAll(query = {}) {
    return request
            .get(API_URL)
            .query(query)
            .then(response => response.body);
  }

  static update(row, fieldsToUpdate) {
    return request.put(`${API_URL}/${row.email}`)
            .send(fieldsToUpdate)
            .then((response) => {
              if (response.statusCode === 204 && response.ok) {
                return { fieldsToUpdate, row };
              }
            });
  }

  static delete(row) {
    return request
            .del(`${API_URL}/${row.email}`)
            .then((response) => {
              if (response.statusCode === 204 && response.ok) {
                return row;
              }
            });
  }

}

export default EmployeeApi;
