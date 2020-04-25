import React from "react";
import { Text, View } from "react-native";
import { Icon, SearchBar, TabBar } from "@ant-design/react-native";
export default class BasicTabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab"
    };
  }
  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5"
      >
        <TabBar.Item
          icon={<Icon name="user" />}
          title="Profile"
          selected={this.state.selectedTab === "yellowTab"}
          onPress={() => this.onChangeTab("yellowTab")}
        />

        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="Checklist"
          selected={this.state.selectedTab === "redTab"}
          onPress={() => this.onChangeTab("redTab")}
        />
        <TabBar.Item
          icon={<Icon name="like" />}
          title="Leaderboards"
          selected={this.state.selectedTab === "greenTab"}
          onPress={() => this.onChangeTab("greenTab")}
        />
      </TabBar>
    );
  }
}
