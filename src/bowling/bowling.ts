/**
 * A game of Bowling!
 * gutters: 0
 * Spare: 10 points + the number of pins you knock down for your first attempt at the next frame
 * Strike: score 10 points + the number of pins you knock down for the entire next frame.
 */
export class Bowling {
    private throws: Array<number> = [];

    public addThrow(pins: number): void {
        this.throws.push(pins);
    }

    public getScore(): number {
        let score: number = 0;

        for(let frameIndex=0, throwIndex=0; frameIndex<10; frameIndex++){
            score += this.throws[throwIndex];
            score += this.throws[throwIndex+1];

            if(this.isSpare(throwIndex) || this.isStrike(throwIndex)){
                score += this.throws[throwIndex+2]; 
            }

            if(this.isStrike(throwIndex)){
                throwIndex += 1;
            }
            else {
                throwIndex +=2;
            }
        }

        return score;
    }

    private isSpare(throwIndex: number): boolean {
        if(this.throws[throwIndex] + this.throws[throwIndex+1] === 10)
            return true;
        return false;
    }

    private isStrike(throwIndex: number): boolean {
        if(this.throws[throwIndex] === 10) 
            return true;
        return false;
    }
}