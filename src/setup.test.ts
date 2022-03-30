//setup and teardowns
//1.beforeEach = executes before evreytask 
//2.afterEach = executes after every task
//3.describe = block scoping of beforeAll and afterAll but not beforeEach and afterEach

beforeAll( () => console.log("process started"))
afterAll(()=> console.log("process ended"))
beforeEach(()=>console.log("task started"))
afterEach(()=>console.log("task ended"))


test('',()=>console.log("first task"))
test('',()=>console.log("second task"))

describe('',()=>{
    beforeAll(()=>console.log("describe block started"));
    beforeEach(()=>console.log("describe blockl process started"))
    afterEach(()=>console.log("describe block process ended"))
    afterAll(()=>console.log("describe block ended"))
    test('',()=>console.log("describe block task 1"));
    test('',()=>console.log("describe block task 2"))
})

//Jest executes all describe handlers in a test file before it executes any of the actual tests.
//point to remember while executing describe block 


//for debugging
test.only('',()=>console.log("only this will run"))