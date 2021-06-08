import {rps} from '../rps'

it('rock beats scissors', () =>{
    expect(rps("rock", "scissors")).toBe("rock");
});