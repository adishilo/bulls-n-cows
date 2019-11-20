import React, { ReactNode } from "react";
import { View } from "react-native";
import HistoryItem from "./HistoryItem";
import { FlatList } from "react-native-gesture-handler";

interface IMovesListProp {
    historyList: Array<{
        chosenNumber: string,
        bulls: number,
        cows: number
    }>;
}

export default class MovesList extends React.Component<IMovesListProp> {
    public render(): ReactNode {
        return (
            <View>
                <FlatList
                    data={this.props.historyList}
                    renderItem={({item}) => <HistoryItem guessedNumber={item.chosenNumber} bulls={item.bulls} cows={item.cows} />}
                    keyExtractor={item => item.chosenNumber} />
            </View>
        )
    }

}