import React, { Component } from 'react';
import { FlatList, View, Text, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import config from "../../../../config";
import styles from "../../../styles";

export default class SearchResultList extends Component {
    render() {
        const { dataSource } = this.props;
        return (
            <ScrollView>
                <View style={{ flex: 1 }} style={[styles.bgAppDark]}>
                    {dataSource && dataSource.map((item, index) => {
                        console.log("`${config.BASE_URL}${config.POSTER_SIZE}${item.poster_path}`", `${config.BASE_URL}${config.POSTER_SIZE}${item.poster_path}`)
                        return (
                            <Card title={item.title} key={index}>
                                <Image
                                    style={{ width: 66, height: 58 }}
                                    source={{ uri: `${config.BASE_URL}${config.POSTER_SIZE}${item.poster_path}` }}
                                />
                                <Text style={{ marginBottom: 10 }}>
                                    {item.release_date}
                                </Text>
                            </Card>
                        )
                    })}
                </View>
            </ScrollView>

        );
    }
}