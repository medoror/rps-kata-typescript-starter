import {rps} from '../rps'

it('should return rock when rock is against scissors', () =>{
    expect(rps("rock", "scissors")).toBe("rock");
});