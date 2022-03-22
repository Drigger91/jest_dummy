const fnc = async()=>{
    const value = 4
    return value;
    
}
test('the number returned is 4' , async()=>{
    //done is required for the first approach only but be careful it can cause data leaks// 
    //first approach
    // const callback = (data : number)=>{
    //     try{
    //         expect(data).toBe(4);
    //         done();
    //     }
    //     catch(e){
    //         throw new Error('data doesn\'t match')
    //     }
    // }
    // fnc(callback(4))

    // //second approach
    // const data = 4;
    // fnc().then((data)=>{
    //     expect(data).toBe(4)
    // })

    //async await appraoch
    const data = await fnc();
    expect(data).toBe(4);
    expect(data).not.toBe(undefined)
})