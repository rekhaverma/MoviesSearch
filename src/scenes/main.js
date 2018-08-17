import React from "react";
import { Text, View, FlatList } from "react-native";
import { SearchInput } from "../components";

import config from "../../config";
import styles from "../styles";
import { get } from "../utilities/api";
import { debounce } from "lodash";

export default class Welcome extends React.Component {
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
    console.log("text11111", text)
    if (text) {
      get(`https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey}&query=${text}`).then(result => {
        console.log("dhana tana", result.data.results)
        this.setState({
          dataSource: result.data.results,
          status: result.data.results && result.data.results.length == 0 ? "No result found" : ""
        })
      }).catch(function (error) {
        console.log("Promise Rejected", error);
      });
    } else {
      this.setState({
        dataSource: [],
        status: ''
      })
    }
  }

  render() {
    const { dataSource } = this.state;
    return (
      <View style={[{ flex: 1 }]}>
        <Text style={[styles.cWhite, styles.font16, styles.bgApp, styles.p20]}>Search Your Movies</Text>
        <SearchInput handleTextChange={this.handleTextChange} />
        {dataSource && dataSource.length > 0 &&
          <FlatList
            data={dataSource}
            renderItem={({ item }) =>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text>{item.title}</Text>
              </View>}
            keyExtractor={(item, index) => index.toString()}
          />
        }
        <Text>{this.state.status}</Text>
      </View>
    );
  }
}