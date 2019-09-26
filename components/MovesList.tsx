import React, { ReactNode } from "react";
import { View } from "react-native";
import HistoryItem from "./HistoryItem";

export default class MovesList extends React.Component {
    public render(): ReactNode {
        return (
            <View>
                <HistoryItem guessedNumber="abnksnvs" score="xoxoxox"></HistoryItem>
            </View>
        )
    }

}