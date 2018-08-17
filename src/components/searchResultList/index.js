import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';

export default class SearchResultList extends Component {
    render() {
        const { dataSource } = this.props;
        return (
            <FlatList
                data={dataSource}
                renderItem={({ item }) =>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text>{item.title}</Text>
                    </View>}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}