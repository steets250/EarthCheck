import React from "react";
import { StyleSheet, Text, View, AppRegistry, SafeAreaView } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import { Button, WhiteSpace, SearchBar } from '@ant-design/react-native';

import Task from './components/Task';

import Navigation from './components/Navigation';

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

  <SafeAreaView style={{}}>
    <View>
      {/*<WhiteSpace size="lg" />
      <Text style={{ fontSize: 32, textAlign: 'center' }}>Checklist</Text>
      <WhiteSpace size="lg" />
      <SearchBar defaultValue="" placeholder="Search" />
      <WhiteSpace size="lg" />
      {tasks.map((task) => {
        return (
          <>
            <Task title={task.title} points={task.points} color={task.color} />
            <WhiteSpace size="lg" />
          </>
        )
      })}*/}
      <Navigation/>
    </View>
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