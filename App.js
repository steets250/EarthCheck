import React from "react";
import { StyleSheet, Text, View, AppRegistry, SafeAreaView } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { Button, WhiteSpace, SearchBar } from '@ant-design/react-native';

import Task from './components/Task';

import Leaderboard from './components/Leaderboard';

const tasks = [
  { title: 'Turn off computer overnight', points: 5, color: '#59F8DB99' },
  { title: 'Plant a seed', points: 20, color: '#02D40A99' },
  { title: 'Take public transportation', points: 10, color: '#F8595999' },
  { title: 'Take a shower in under 10 mins', points: 5, color: '#59F8DB99' },
  { title: 'Buy a second hand item', points: 15, color: '#A899E499' },
  { title: 'Recycle a bottle or can', points: 5, color: '#02D40A99' },
  { title: 'Don\'t use a coffee stirer', points: 5, color: '#59F8DB99' },
];

const App = () => (
  // <NativeRouter>
  //   <View style={styles.container}>
  //     <View style={styles.nav}>
  //       <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
  //         <Text>Home</Text>
  //       </Link>
  //       <Link
  //         to="/about"
  //         underlayColor="#f0f4f7"
  //         style={styles.navItem}
  //       >
  //         <Text>About</Text>
  //       </Link>
  //       <Link
  //         to="/topics"
  //         underlayColor="#f0f4f7"
  //         style={styles.navItem}
  //       >
  //         <Text>Topics</Text>
  //       </Link>
  //     </View>

  //     <Route exact path="/" component={Home} />
  //     <Route path="/about" component={About} />
  //     <Route path="/topics" component={Topics} />
  //   </View>
  // </NativeRouter>

      /*<SafeAreaView style={{backgroundColor: "green", height: "100%"}}>
        <Text style={{textAlignVertical: "center", textAlign: "center", marginTop: 10, marginBottom: 10, fontWeight: "bold", fontSize: 24, color: "white"}}>Leaderboard</Text>
        <View style={{ backgroundColor: "white", borderRadius: 20, justifyContent: "center", marginHorizontal: 40, marginBottom: 30, marginTop: 20}}>
          <Leaderboard title="justin" scores="10000" position="1."></Leaderboard>
          <Leaderboard title="thang" scores="9000" position="2."></Leaderboard>
          <Leaderboard title="sumeet" scores="8000" position="3."></Leaderboard>
        </View>
        <Leaderboard title="steven" scores="7000" position="4."></Leaderboard>
        <Leaderboard title="stanley" scores="6000" position="5."></Leaderboard>
        <Leaderboard title="emily" scores="5000" position="6."></Leaderboard>
        <Leaderboard title="jeffrey" scores="4000" position="7."></Leaderboard>
        <Leaderboard title="kendall" scores="3000" position="8."></Leaderboard>
        <Leaderboard title="amy" scores="2000" position="9."></Leaderboard>
        <Leaderboard title="daniel" scores="1000" position="10."></Leaderboard>
      </SafeAreaView>*/
      <SafeAreaView style={{backgroundColor: "#E5E5E5", height: "100%"}}>
        <Text style={{textAlignVeritcal: "center", textAlign: "center", marginTop: 350, marginBottom: 350, fontWeight: "bold", fontSize: 45}}>EarthCheck</Text>
      </SafeAreaView>

    
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;