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
});
test('to be null', () => {
    const value = null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();  //null != undefined
    expect(value).not.toBeTruthy();
    expect(value).toBeFalsy();
  });


  //error testing
  const throwError = ()=>{
      throw new Error('It doesn\'t works as expected');     //use throw not return
  }

  test('erorr testing' , ()=>{
      expect(()=>throwError()).toThrow(Error)  //to only check error is there or not
      expect(()=>throwError()).toThrow('It doesn\'t works as expected')   //to check exact statement
  })