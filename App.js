import React, { Component } from 'react';
import { 
        Text, 
        View, 
        StyleSheet, 
        SafeAreaView, 
        Button, 
        StatusBar, 
        TextInput,
        Picker,
        Platform } 
        from 'react-native';
import { 
        createStackNavigator, 
        createAppContainer, 
        createDrawerNavigator, 
        createBottomTabNavigator } 
        from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';
import t from 'tcomb-form-native';


// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
  email: t.String,
  password: t.String,
});

class Login extends React.Component {
  render() {
      return (
        <SafeAreaView style={[styles.container1, { backgroundColor: '#ecf0f1' }]}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#ecf0f1"
          />
          <Text style={styles.paragraph}>
            UF Login
          </Text>
          <Form ref={c => this.loginform = c} type={User} />
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
        </SafeAreaView>
      );
    }
}

class Homescreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar
          // barStyle="light-content"
          // backgroundColor="#6a51ae"
        />
        <View style={{
        flex: 1,
        flexDirection: 'column',
        margin: 30,
      }}>
      <View style={{ width: 340, height: 80, backgroundColor: 'steelblue' }}>
        <Button 
          title="New Semester Toolkit" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Toolkit')}
          color={"#000"}
          />
      </View>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 150, height: 110, backgroundColor: 'blue', marginTop: 20, marginRight: 20,}}>
        <Button 
          title="Schedule" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Schedule')}
          color={"#000"}
         />
        </View>
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Calendar" 
          style={{width: 120, height: 120, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Calendar')}
          color={"#000"}
         />
        </View>
      </View>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <View style={{ width: 150, height: 110, backgroundColor: 'blue', marginTop: 20, marginRight: 20,}}>
        <Button 
          title="Payment" 
          style={{width: 50, height: 50, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Payment')}
          color={"#000"}
         />
        </View>
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Map" 
          style={{width: 80, height: 80, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Map')}
          color={"#000"}
         />
        </View>
      </View>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <View style={{ width: 150, height: 110, backgroundColor: 'blue', marginTop: 20, marginRight: 20,}}>
        <Button 
          title="Student Guide" 
          style={{width: 50, height: 50, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('StudentGuide')}
          color={"#000"}
         />
        </View>
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Club Guide" 
          style={{width: 50, height: 50, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('ClubGuide')}
          color={"#000"}
         />
        </View>
      </View>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <View style={{ width: 150, height: 110, backgroundColor: 'blue', marginTop: 20, marginRight: 20,}}>
        <Button 
          title="Emergency" 
          style={{width: 50, height: 50, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Emergency')}
          color={"#000"}
         />
        </View>
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Notifications" 
          style={{width: 50, height: 50, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Notifications')}
          color={"#000"}
         />
        </View>
      </View>
      </View>
      </SafeAreaView>
    );
  }
}

class Toolkit extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph1}>
          Student Toolkit
        </Text>
        <Text style={styles.paragraph1}>
          Step 1
        </Text>
        <Text style={styles.paragraph2}>
          Click one or both calendars to import, then click next when you are done.
        </Text>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 150, height: 110, backgroundColor: 'blue', marginTop: 20, marginRight: 20,}}>
        <Button 
          title="Import Apple Calendar" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Step2a')}
          color={"#000"}
         />
        </View>
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Import Google Calendar" 
          style={{width: 120, height: 120, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Step2a')}
          color={"#000"}
         />
        </View>
      </View>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Step2a')}
        />
      </SafeAreaView>
    );
  }
}

class Step2a extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph1}>
          Student Toolkit
        </Text>
        <Text style={styles.paragraph1}>
          Step 2
        </Text>
        <Text style={styles.paragraph2}>
          Enter your address and click Next to see which bus routes are best for you.
        </Text>
        <TextInput placeholder='Address'></TextInput>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Step2b')}
        />
      </SafeAreaView>
    );
  }
}

class Step2b extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph1}>
          Student Toolkit
        </Text>
        <Text style={styles.paragraph1}>
          Step 2
        </Text>
        <Text style={styles.paragraph2}>
          These are the routes that are most relevant to you based on where you live.
        </Text>
        <Text style={styles.paragraph}> 9, 34, 35 </Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Step3a')}
        />
      </SafeAreaView>
    );
  }
}

class Step3a extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph1}>
          Student Toolkit
        </Text>
        <Text style={styles.paragraph1}>
          Step 3
        </Text>
        <Text style={styles.paragraph2}>
          Input the parking decal you have to know which parking lots are available to you.
        </Text>
        <Picker>
            <Picker.Item label = "Red 1" value = "red1" />
            <Picker.Item label = "Red 3" value = "red3" />
            <Picker.Item label = "Orange" value = "orange" />
            <Picker.Item label = "Green" value = "green" />
            <Picker.Item label = "Park and Ride" value = "pnr" />
        </Picker>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Step3b')}
        />
      </SafeAreaView>
    );
  }
}

class Step3b extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph1}>
          Student Toolkit
        </Text>
        <Text style={styles.paragraph1}>
          Step 3
        </Text>
        <Text style={styles.paragraph2}>
          Here are the lots available to you based on the parking decal you selected.
        </Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Step4')}
        />
      </SafeAreaView>
    );
  }
}

class Step4 extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph1}>
          Student Toolkit
        </Text>
        <Text style={styles.paragraph1}>
          Step 4
        </Text>
        <Text style={styles.paragraph2}>
          Here are app recommendations for UF.
        </Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('ToolkitDone')}
        />
      </SafeAreaView>
    );
  }
}

class ToolkitDone extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph1}>
          Student Toolkit
        </Text>
        <Text style={styles.paragraph1}>
          Done!
        </Text>
        <Text style={styles.paragraph2}>
          That's all, if you need to redo or see this information again, click on 'Student Guide' on the homescreen. 

          Click Done to go back to the homescreen.
        </Text>
        <Button
          title="Done"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

class Schedule extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
          Schedule
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

class Calendar extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
          Calendar
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

class Payment extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
          Payment
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

class Map extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
          Map
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

class StudentGuide extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
          Student Guide
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

class ClubGuide extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
          ClubGuide
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

class Emergency extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
          Emergency
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

class Notifications extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
          Notifications
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Homescreen')}
        />
      </SafeAreaView>
    );
  }
}

export default createAppContainer(createStackNavigator({
  Login: {
    screen: Login,
  },
  Homescreen: {
    screen: Homescreen,
  },
  Toolkit: {
    screen: Toolkit,
  },
  Step2a: {
    screen: Step2a,
  },
  Step2b: {
    screen: Step2b,
  },
  Step3a: {
    screen: Step3a,
  },
  Step3b: {
    screen: Step3b,
  },
  Step4: {
    screen: Step4,
  },
  ToolkitDone: {
    screen: ToolkitDone,
  },
  Schedule: {
    screen: Schedule,
  },
  Calendar: {
    screen: Calendar,
  },
  Payment: {
    screen: Payment,
  },
  Map: {
    screen: Map,
  },
  StudentGuide: {
    screen: StudentGuide,
  },
  ClubGuide: {
    screen: ClubGuide,
  },
  Emergency: {
    screen: Emergency,
  },
  Notifications: {
    screen: Notifications,
  },
}, {
  headerMode: 'none',
}));

// Uncomment this area and comment out the other navigators to see a drawer example
//
// export default createAppContainer(createDrawerNavigator({
//   Screen1: {
//     screen: Screen1,
//   },
//   Screen2: {
//     screen: Screen2,
//   },
// }));

//Uncomment this area and comment out the other navigators to see a tab example

// export default createAppContainer(createBottomTabNavigator({
//   Screen1: {
//     screen: Screen1,
//     navigationOptions: {
//       tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
//         // TODO: This doesn't handle the initial render because the second screen renders last. What to do?
//         StatusBar.setBarStyle('light-content');
//         isAndroid && StatusBar.setBackgroundColor('#6a51ae');
//         jumpToIndex(scene.index);
//       },
//     },
//   },
//   Screen2: {
//     screen: Screen2,
//     navigationOptions: {
//       tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
//         StatusBar.setBarStyle('dark-content');
//         isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
//         jumpToIndex(scene.index);
//       },
//     },
//   },
// }));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
   container1: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    fontSize: 40,
    alignmentItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  paragraph1: {
    flex: 1,
    alignmentItems: 'left',
    justifyContent: 'left',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  paragraph2: {
    flex: 1,
    alignmentItems: 'left',
    justifyContent: 'left',
    fontSize: 20,
    paddingBottom: 30,
  },
})