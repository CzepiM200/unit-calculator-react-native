// import {createAppContainer} from 'react-navigation'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import {createStackNavigator} from 'react-navigation-stack'
// import Icon from "react-native-vector-icons/Ionicons"
// import Surface from "./screens/Surface"
// import Distance from "./screens/Distance"
// import Volume from "./screens/Volume"
// import { View, Text, StyleSheet} from 'react-native'

// const Tabs = createMaterialTopTabNavigator({
//     Distance : {
//         screen: Distance,
//         navigationOptions: {
//             tabBarLabel: ({}) => {
//                 <View style={styles.iconContainer}>
//                     <Icon name="ios-home" color="#fff" size={22}></Icon>
//                     <Text style={{color: "#fff"}}>Distance</Text>
//                 </View>
//             }
//         }
//     },
//     Surface : {
//         screen: Surface,
//         navigationOptions: {
//             tabBarLabel: ({}) => {
//                 <View style={styles.iconContainer}>
//                     <Icon name="ios-home" color="#fff" size={22}></Icon>
//                     <Text style={{color: "#fff"}}>Distance</Text>
//                 </View>
//             }
//         }
//     },
//     Volume : {
//         screen: Volume,
//         navigationOptions: {
//             tabBarLabel: ({}) => {
//                 <View style={styles.iconContainer}>
//                     <Icon name="ios-settings" color="#fff" size={22}></Icon>
//                     <Text style={{color: "#fff"}}>Distance</Text>
//                 </View>
//             }
//         }
//     },
// }, {
//     initialRouteName: "Distance",
//     lazyLoad: true,
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     tabBarOptions: {
//         style: {
//             height: 60,
//             backgroundColor: '#2b2b39',
//             paddingBottom: 3,
//             paddingTop: 3,
//         },
//         activeTintColor: '#fff',
//         inactiveTintColor: 'gray'
//     },
// });

// const MainScreenNavigator = createStackNavigator({
//     Tabs: {
//         screen: Tabs,
//         navigationOptions: {
//             title: "Unit calculator",
//             headerStyle: {
//                 backgroundColor: '#2b2b39'
//             },
//         },
//     },
// })

// export default createAppContainer(MainScreenNavigator);

// const styles = StyleSheet.create({
//     iconContainer : {
//         justifyContent: "center",
//         alignItems: "center",
//         alignContent: "center"
//     }
// })