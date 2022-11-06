// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

class ErrorRepository {
    constructor() {
        this.errors = new Map([
            ['01','ReferenceError'],
            ['02','SyntaxError'],
            ['03','TypeError']
        ])
    }
    static translate(code) {
        if (this.errors.has(code)) {
            console.log(this.errors.get(code))
        } else {
            console.log('Unknown error');
        }
    }
}