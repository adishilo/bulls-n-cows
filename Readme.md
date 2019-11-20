# Bulls and Cows
Submitted by: **Yehonatan Shilo**

This project is hosted in GitHub: https://github.com/adishilo/bulls-n-cows

## Rules of the game
The numerical version of the game is usually played with 4 digits, but can also be played with 3 or any other number of digits.

On a sheet of paper, the players each write a 4-digit secret number. The digits must be all different. Then, in turn, the players try to guess their opponent's number who gives the number of matches. If the matching digits are in their right positions,they are "bulls", if in different positions, they are "cows". Example:

* Secret number: 4271
* Opponent's try: 1234
* Answer: 1 bull and 2 cows. (The bull is "2", the cows are "4" and "1".)

The first one to reveal the other's secret number in the least number of guesses wins the game.

This is a smart-phone version of the classic game, played against the phone.

The phone uses an elimination algorithm to play its part.

## Technology
I am using the following technologies in this project:
1. Written in [Typescript](https://www.typescriptlang.org/).
1. User Interface in [React-Native](https://facebook.github.io/react-native/).
1. Development platform using [expo](https://expo.io/).

**Note that the engine is written in C# in folder `temp-engine` and will later be translated to Typescript as well**