//mock fncs are used to store prev states of the items and to check that the function is executed properly or not

const array = [1,2,3,4,5,6,7,8,9]
const mockfn = jest.fn((x)=>x+50)
const func = (items,callback)=>{
    for(let i = 0 ;i<items.length;i++){
        callback(items[i]);
    }
}
test('',()=>{
    func(array,mockfn)
    expect(array.length).toBe(9);
    expect(mockfn.mock.calls.length).toBe(9)
    expect(mockfn.mock.calls[0][0]).toBe(1); //prev state / Or we can say the state at the call of the function
    expect(mockfn.mock.results[0].value).toBe(51);
    expect(mockfn.mock.results[8].value).toBe(59);
    
});

//mock return values

test.only('',()=>{
    const myMock = jest.fn();
    console.log(myMock());

    //retrunValue sets a default value for the output of the function
    //returnvalueonce sets the value for only the next call

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    console.log(myMock(), myMock(), myMock(), myMock());
});

//can be used to find/check/debugg a particular fnc call
test.only("filter func" , ()=>{
    const filterfn = jest.fn();
    //use returnValue to set a default value
    filterfn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    // expect(filterfn(11)).toBe(true);
    const result = array.filter(val => filterfn(val));
    console.log(result)
})

//read about fnc.mock.{methods}
