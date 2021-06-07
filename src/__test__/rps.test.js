// it('1 should equal 1', () => {
//     expect(1).toBe(1);
// });

const rps = require("../rps");

it('rock beats scissors', () =>{
    expect(rps("rock", "scissors")).toBe("rock");
});