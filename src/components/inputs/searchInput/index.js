import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import VectorIcon from '../../../assets/icons';
import styles from "../../../styles";

export default class SearchInput extends Component {
    render() {
        return (
            <View style={styles.searchSection}>
                <VectorIcon size={34} style={styles.searchIcon} color="#000" type="EvilIcons" name="search" />
                <TextInput
                    style={styles.input}
                    onChangeText={this.props.handleTextChange}
                    placeholder="Type here to search for movies!"
                />
            </View>
        );
    }
}