import React, {ReactNode} from 'react';
import { View, Text } from 'react-native';
 
type HistoryItemProps = {
    guessedNumber: string,
    score: string;
}
export default class HistoryItem extends React.Component<HistoryItemProps> {
    public render(): ReactNode {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text>{this.props.guessedNumber}</Text>
                <Text>{this.props.score}</Text>
            </View>
        )
    }
}