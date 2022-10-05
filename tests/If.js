const If = require('./../If.js');
const assert = require('assert');

describe('If Tests', () => {
    describe('Basic tests', () => {
        it('if', (done) => {
            const result = new If(1 === 1)
                .then(() => (true))
                .do();

            assert.strictEqual(result, true);
            done();
        });

        it('else', (done) => {
            const result = new If(1 === 0)
                .then(() => (true))
                .else(() => (false))
                .do();

            assert.strictEqual(result, false);
            done();
        });

        it('elseif', (done) => {
            const result = new If(1 === 0)
                .then(() => (true))
                .elseif((1 === 1), () => ('elseif'))
                .else(() => (false))
                .do();

            assert.strictEqual(result, 'elseif');
            done();
        });

        it('elseif elseif', (done) => {
            const result = new If(1 === 0)
                .then(() => (true))
                .elseif((1 === 0), () => ('elseif 1'))
                .elseif((1 === 1), () => ('elseif 2'))
                .else(() => (false))
                .do();

            assert.strictEqual(result, 'elseif 2');
            done();
        });
    });
});
