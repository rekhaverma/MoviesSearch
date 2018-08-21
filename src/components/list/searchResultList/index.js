import React, { Component } from 'react';
import { FlatList, View, Text, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Moment from 'moment';
import config from "../../../../config";
import VectorIcon from '../../../assets/icons';
import styles from "../../../styles";

export default class SearchResultList extends Component {
    render() {
        const { dataSource } = this.props;
        return (

            <ScrollView>
                <View style={{ flex: 1 }} style={[styles.bgAppDark]}>
                    {dataSource && dataSource.map((item, index) => {
                        return (
                            <Card key={index} containerStyle={{ padding: 0, width: '93%', height: 'auto', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#222848' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: `${config.BASE_URL}${config.POSTER_SIZE}${item.poster_path}` }}
                                    />

                                    <Text style={styles.releaseDate}> Released in {new Date(item.release_date).toDateString('dd-mm-yy').split(' ').slice(3).join(' ')}</Text>
                                    <Text style={styles.overview} numberOfLines={8} >{item.overview}</Text>

                                </View>
                                <View style={styles.subWrapper}>
                                    <Text style={styles.titleData}>{item.title}</Text>
                                    <Text style={styles.average}><VectorIcon size={13.5} style={styles.heartIcon} color="#000" type="FontAwesome" name="heart" /> {item.vote_average}</Text>

                                </View>
                            </Card>

                        )
                    })}
                </View>
            </ScrollView>

        );
    }
}