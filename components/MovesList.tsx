import React, { ReactNode } from "react";
import { View } from "react-native";
import HistoryItem from "./HistoryItem";
import { FlatList } from "react-native-gesture-handler";

interface IMovesListState {
    historyList: Array<{
        chosenNumber: string,
        bulls: number,
        cows: number
    }>;
}

export default class MovesList extends React.Component<{}, IMovesListState> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            historyList: []
        }
    }

    public render(): ReactNode {
        const list = [
            {
                chosenNumber: '1234',
                bulls: 2,
                cows: 1
            },
            {
                chosenNumber: '5678',
                bulls: 0,
                cows: 2
            }
        ]

        return (
            <View>
                <FlatList
                    data={list}
                    renderItem={({item}) => <HistoryItem guessedNumber={item.chosenNumber} bulls={item.bulls} cows={item.cows} />}
                    keyExtractor={item => item.chosenNumber} />
            </View>
        )
    }

}