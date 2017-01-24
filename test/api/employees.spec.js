const request = require('supertest');
const httpStatus = require('http-status');
const chai = require('chai');

const expect = chai.expect;
const app = require('../../src/server');

chai.config.includeStack = true;

/**
 * root level hooks
 */
// after((done) => {
//   // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
//   mongoose.models = {};
//   mongoose.modelSchemas = {};
//   mongoose.connection.close();
//   done();
// });

const MOCK_EMPLOYEE = {
  firstname: 'Dammy',
  surname: 'Kolawole',
  contact_number: '+447788263793',
  email: 'me@dcodesmith.com'
};

describe('## User APIs', () => {
  let requestPromise;

  describe('# POST /api/employees', () => {
    describe('Given a new employee', () => {
      const employee = Object.assign({}, MOCK_EMPLOYEE);

      describe('When a request is made to add the employee', () => {
        before(() => {
          requestPromise = request(app)
                .post('/api/employees')
                .send(employee);
        });

        it('should create a new employee', (done) => {
          requestPromise.expect(httpStatus.CREATED)
            .then((res) => {
              expect(res.body).to.eql(employee);
              done();
            })
            .catch(done);
        });
      });
    });
  });

  describe('# GET /api/employees/:email', () => {
    describe('Given an employee exists', () => {
      const email = 'me@dcodesmith.com';

      describe('When a request is made to get the employee', () => {
        before(() => {
          requestPromise = request(app)
                .get(`/api/employees/${email}`);
        });

        it('should get the employee', (done) => {
          requestPromise
            .expect(httpStatus.OK)
            .then((res) => {
              expect(res.body).to.eql(MOCK_EMPLOYEE);
              done();
            })
            .catch(done);
        });
      });
    });

    describe('Given an employee does NOT exist', () => {
      const email = 'i@dontexist.com';

      describe('When a request is made to get the employee', () => {
        before(() => {
          requestPromise = request(app)
                .get(`/api/employees/${email}`);
        });

        it('should NOT get the employee', (done) => {
          requestPromise
            .expect(httpStatus.NOT_FOUND)
            .then((res) => {
              expect(res.body).to.eql({ message: `User with email ${email} not found` });
              done();
            })
            .catch(done);
        });
      });
    });
  });

  describe('# PUT /api/employees/:email', () => {
    describe('Given an employee exists', () => {
      const email = 'me@dcodesmith.com';

      describe('When a request is made to update the employee details', () => {
        before(() => {
          requestPromise = request(app)
                .put(`/api/employees/${email}`)
                .send({ firstname: 'Afees' });
        });

        it('should get the employee', (done) => {
          requestPromise
            .expect(httpStatus.NO_CONTENT)
            .then((res) => {
              expect(res.body).to.eql({});
              done();
            })
            .catch(done);
        });
      });
    });

    describe('Given an employee does NOT exist', () => {
      const email = 'i@dontexist.com';

      describe('When a request is made to update the employee details', () => {
        before(() => {
          requestPromise = request(app)
                .put(`/api/employees/${email}`)
                .send({ firstname: 'Afees' });
        });

        it('should NOT get the employee', (done) => {
          requestPromise
            .expect(httpStatus.NOT_FOUND)
            .then((res) => {
              expect(res.body).to.eql({ message: `User with email ${email} not found` });
              done();
            })
            .catch(done);
        });
      });
    });
  });

  describe.skip('# GET /api/employees/', () => {
    describe('Given there are employees', () => {
      const email = 'me@dcodesmith.com';

      describe('When a request is made to get the employee', () => {
        before(() => {
          requestPromise = request(app)
                .get(`/api/employees/${email}`);
        });

        it('should get the employee', (done) => {
          requestPromise
            .expect(httpStatus.OK)
            .then((res) => {
              expect(res.body).to.eql(MOCK_EMPLOYEE);
              done();
            })
            .catch(done);
        });
      });
    });
  });

  describe('# DELETE /api/employees/:email', () => {
    describe('Given an employee', () => {
      const email = 'me@dcodesmith.com';

      describe('When a request is made to get the employee', () => {
        before(() => {
          requestPromise = request(app)
                .del(`/api/employees/${email}`);
        });

        it('should get the employee', (done) => {
          requestPromise
            .expect(httpStatus.NO_CONTENT)
            .then((res) => {
              expect(res.body).to.eql({});
              done();
            })
            .catch(done);
        });
      });
    });
  });
});
