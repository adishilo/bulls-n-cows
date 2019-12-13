import consts from "./Consts";

export default class BullsNCows {
    public readonly bulls: number;
    public readonly cows: number;

    // Assumption:
    // <target> and <guess> are digits only string with no duplicates.
    public constructor(target: string, guess: string) {
        this.bulls = 0;
        this.cows = 0;

        for (let targetIdx = 0; targetIdx < consts.digitsCount; targetIdx++) {
            for (let guessIdx = 0; guessIdx < consts.digitsCount; guessIdx++) {
                if (target[targetIdx] == guess[guessIdx]) {
                    if (targetIdx == guessIdx) {
                        this.bulls++;
                    }
                    else {
                        this.cows++;
                    }
                }
            }
        }
    }

    public toString(): string {
        return `[this.Bulls: ${this.bulls}, this.Cows: ${this.cows}]`;
    }

    public equals(other: BullsNCows): boolean
    {
        return this.bulls == other.bulls && this.cows == other.cows;
    }
}

console.log(new BullsNCows('1234', '2094'));