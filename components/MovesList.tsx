import React, { ReactNode, ReactElement } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "react-native-elements";

type HistoryItem1 = {
    guessedNumber: string,
    bulls: number,
    cows: number
}

interface IMovesListProp {
    historyList: Array<HistoryItem1>;
}

export default class MovesList extends React.Component<IMovesListProp> {
    public render(): ReactNode {
        return (
            <View>
                <FlatList
                    data={this.props.historyList}
                    renderItem={({item}) => this.createHistoryItemCard(item)}
                    keyExtractor={item => item.guessedNumber} />
            </View>
        )
    }

    private createHistoryItemCard(historyItem: HistoryItem1): ReactElement {
        return (
            <Card>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Text>{historyItem.guessedNumber}</Text>
                    <Text style={{ paddingLeft: 20 }}>{historyItem.bulls}</Text>
                    <Text style={{ paddingLeft: 20 }}>{historyItem.cows}</Text>
                </View>
            </Card>
        )
    }
}