/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const greet = {
    firstName: "Joe",
    sayHello() {
        return `Hello, I'm ${this.firstName}`
    }
};

const calc = {
    total: 0,
    add(num) {
        this.total=this.total + num;
        return this.total;
    },
    subtract(num) {
        this.total=this.total - num;
        return this.total;
    },
    clear() {
        this.total=0;
        return 0;
    }
};

module.exports = { greet, calc };
