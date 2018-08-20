import React, { Component } from 'react';
import { FlatList, View, Text, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import config from "../../../../config";
import styles from "../../../styles";

export default class SearchResultList extends Component {
    render() {
        const { dataSource } = this.props;
        console.log("dataSource", dataSource)
        return (
            <ScrollView>
                <View style={{ flex: 1 }} style={[styles.bgAppDark]}>
                    {dataSource && dataSource.map((item, index) => {
                        return (
                            <Card key={index} containerStyle={{ padding: 0, width: '98%', height: 'auto', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: `${config.BASE_URL}${config.POSTER_SIZE}${item.poster_path}` }}
                                    />
                                    <Text style={styles.overview} numberOfLines={7} >{item.overview}</Text>
                                </View>
                                <View style={styles.subWrapper}>
                                    <Text style={styles.releaseDate}> Released On: {item.release_date}</Text>
                                    <Text>Ratings: {item.vote_average}</Text>
                                    <Text style={styles.titleData}>{item.title}</Text>
                                </View>

                            </Card>
                        )
                    })}
                </View>
            </ScrollView>

        );
    }
}