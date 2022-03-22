import { sum } from "./sum";

test("add two numbers" , ()=>{
    expect(sum(1,2)).toBe(3)
});

// //trying different matchers

test("to be zero" , ()=>{
    const value = 0;
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeTruthy();   //terminal indicates what and where went wrong; //toBeTruthy --> not.toBrTruthy
    expect(value).toBeFalsy();
})