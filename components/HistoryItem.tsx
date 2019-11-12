import React, {ReactNode} from 'react';
import { View, Text } from 'react-native';
 
type HistoryItemProps = {
    guessedNumber: string,
    bulls: number;
    cows: number;
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
                <Text>{this.props.bulls}</Text>
                <Text>{this.props.cows}</Text>
            </View>
        )
    }
}