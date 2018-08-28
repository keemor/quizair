const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach(done => {
    Todo.remove({}).then(() => done());
});

describe('POst /todos', () => {
    it('should work', done => {
        const text = 'test122222222';

        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect(res => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find()
                    .then(todos => {
                        expect(todos.length).toBe(1);
                        done();
                    })
                    .catch(e => done(e));
            });
    });
});
