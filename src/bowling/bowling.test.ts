import { Bowling } from "./bowling";

describe('Bowling Game on!', () => {
    let bowling:Bowling;

    beforeEach(()=>{
        bowling = new Bowling();
    })

    let addthrows = (pins: number, times: number) => {
        for(let i=0; i<times; i++){
            bowling.addThrow(pins);
        }
    }

    test(('all gutters'), ()=>{
        addthrows(0,20);
        expect(bowling.getScore()).toBe(0);
    })

    test(('all threes'), ()=>{
        addthrows(3,20);
        expect(bowling.getScore()).toBe(60);
    })

    test(('spare and all gutters'), ()=>{
        addthrows(5,2);
        addthrows(0,18)

        expect(bowling.getScore()).toBe(10);
    })

    test(('spare and all threes'), ()=>{
        addthrows(5,2);
        addthrows(3,18)

        expect(bowling.getScore()).toBe(67);
    })

    test(('strike and all gutters'), ()=>{
        addthrows(10,1);
        addthrows(0,18);

        expect(bowling.getScore()).toBe(10)
    })

    test(('strike and all threes'), ()=>{
        addthrows(10,1);
        addthrows(3,18);

        expect(bowling.getScore()).toBe(70)
    })

    test(('all strikes'), ()=>{
        addthrows(10,12);
        expect(bowling.getScore()).toBe(300);
    })
})
