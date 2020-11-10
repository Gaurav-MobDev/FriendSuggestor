import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import Users from '../modal/userData.json';
import Style from './style/userListing';
import Graph from '../modal/friendsGraph';
export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
    };
  }
  componentDidMount() {
    Graph.addVertex(7);
    this.preFollowed();
  }
  follow = (id) => {
    Graph.addVertex(id);
    Graph.addEdge(7, id);
    Graph.showConnections();
    console.log('my id ');
    Graph.bfs(7);
    this.setState(
      {
        test: this.state.test + 1,
      },
      () => {
        console.log(this.state.test);
      },
    );
  };

  preFollowed = () => {
    //Followed by user 11
    Graph.addVertex(11);
    Graph.addVertex(5);
    Graph.addEdge(11, 5);
    Graph.addVertex(6);
    Graph.addEdge(11, 6);
    Graph.addVertex(7);
    Graph.addEdge(11, 7);
    //Followed by user 6
    Graph.addVertex(6);
    Graph.addVertex(4);
    Graph.addEdge(6, 4);
    Graph.addVertex(9);
    Graph.addEdge(6, 9);
    Graph.addVertex(10);
    Graph.addEdge(6, 10);
    //Followed by user 8
    Graph.addVertex(8);
    Graph.addVertex(4);
    Graph.addEdge(8, 4);
    Graph.addVertex(9);
    Graph.addEdge(8, 9);
    Graph.addVertex(10);
    Graph.addEdge(8, 10);
    Graph.addVertex(15);
    Graph.addEdge(8, 15);
    Graph.addVertex(16);
    Graph.addEdge(8, 16);
    //Followed by user 10
    Graph.addVertex(10);
    Graph.addVertex(11);
    Graph.addEdge(10, 11);
    Graph.addVertex(12);
    Graph.addEdge(10, 12);
    Graph.addVertex(6);
    Graph.addEdge(10, 6);
    Graph.showConnections();
  };
  renderCell = ({item}) => {
    if (item.user.id !== 7) {
      return (
        <View style={Style.CellCotainer}>
          <View style={Style.subContainer}>
            <View style={Style.nameAndFollow}>
              <Text style={Style.userName}>{item.user.name}</Text>

              <TouchableOpacity
                style={Style.followButton}
                onPress={() => this.follow(item.user.id)}>
                {Graph.checkConnection(item.user.id) ? (
                  <Text style={Style.buttonTitle}>Following</Text>
                ) : (
                  <Text style={Style.buttonTitle}>Follow</Text>
                )}
              </TouchableOpacity>
            </View>

            {Graph.checkConnection(item.user.id) ? (
              <Text style={Style.followedBy}>
                {' '}
                Follows {Graph.bfs(item.user.id)}{' '}
              </Text>
            ) : null}
          </View>
        </View>
      );
    }
  };
  keyExtractor = (item) => String(item.user.id);
  render() {
    return (
      <View style={Style.container}>
        <FlatList
          style={Style.list}
          data={Users.users}
          extraData={this.state}
          renderItem={this.renderCell}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
