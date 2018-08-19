import React from "react";
import { Text, View } from "react-native";
import { debounce, isEmpty } from "lodash";

import { SearchInput, SearchResultList } from "../components";
import config from "../../config";
import styles from "../styles";
import { get } from "../utilities/api";
import MovieSearchService from "../services/movieSearch";
import I18n from '../i18n';


export default class MovieBrowser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      status: ''
    };
    // Do Next call to API after 1 second while typing text.
    this.handleTextChange = debounce(this.handleTextChange, 1000);
  }


  // Get data from movies API and show data into list.
  handleTextChange = (text) => {
    let searchResults = MovieSearchService.getAll(text);
    console.log("searchResults", searchResults)
    searchResults.then((result) => {
      this.setState({
        dataSource: result.data.results,
        status: isEmpty(result.data.results) && I18n.t('noResultFound'),
        errorText: ""
      })
    }).catch((error) => {
      console.log("Promise Rejected", error.message);
      this.setState({ errorText: error.message });
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <View style={[{ flex: 1 }, styles.bgGray]}>
        <Text style={[styles.cWhite, styles.font16, styles.bgApp, styles.p20]}>Search Your Movies</Text>
        <SearchInput handleTextChange={this.handleTextChange} />
        <SearchResultList dataSource={dataSource} />
        <Text>{this.state.status}</Text>
        <Text>{this.state.errorText}</Text>
      </View>
    );
  }
}