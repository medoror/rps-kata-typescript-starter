// it('1 should equal 1', () => {
//     expect(1).toBe(1);
// });

const rps = require("../rps");

it('should return rock when rock is against scissors', () =>{
    expect(rps("rock", "scissors")).toBe("rock");
    expect(rps("scissors", "rock")).toBe("rock");
});

it('should return scissors when paper is against scissors', () =>{
    expect(rps("paper", "scissors")).toBe("scissors");
    expect(rps("scissors", "paper")).toBe("scissors");
});

it('should return paper when paper is against rock', () =>{
    expect(rps("paper", "rock")).toBe("paper");
    expect(rps("rock", "paper")).toBe("paper");
});