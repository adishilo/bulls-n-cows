import consts from "./Consts";
import BullsNCows from "./BullsNCows";

class Sherlock {
    private possibleGuesses: Array<string> = [];

    public static isLegalNumber(number: string): boolean {
        if (number.length != consts.digitsCount) {
            return false;
        }

        for (let i = 0; i < number.length; i++) {
            for (let j = i + 1; j < number.length; j++) {
                if (number[i] == number[j]) {
                    return false;
                }
            }
        }

        return true;
    }

    public constructor() {
        const countPossibilities = Math.pow(10, consts.digitsCount);

        for (let i = 0; i < countPossibilities; i++) {
            var strNumber = i.toString().padStart(consts.digitsCount, '0');

            if (Sherlock.isLegalNumber(strNumber)) {
                this.possibleGuesses.push(strNumber);
            }
        }
    }

    public getGuess(answerGuess: (guess: string) => BullsNCows) {
        const index = Math.floor(Math.random() * this.possibleGuesses.length);
        const currentGuess = this.possibleGuesses[index];
        var guessResult = answerGuess(currentGuess);

        if (guessResult.bulls == consts.digitsCount) {
            return true;
        }

        this.eliminateRedundantGuesses(guessResult, currentGuess);

        return false;
    }

    private eliminateRedundantGuesses(guessResult: BullsNCows, currentGuess: string) {
        this.possibleGuesses = this.possibleGuesses.filter(num => {
            let tempGuess = new BullsNCows(num, currentGuess);

            return tempGuess.equals(guessResult);
        });
    }
}
