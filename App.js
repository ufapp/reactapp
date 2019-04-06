import React, { Component } from 'react';
import {
        Alert,
        Text, 
        View, 
        StyleSheet, 
        SafeAreaView, 
        Button, 
        StatusBar, 
        TextInput,
        Picker,
        Platform,
        ScrollView,
        TouchableOpacity } 
        from 'react-native';
import { 
        createStackNavigator, 
        createAppContainer, 
        createDrawerNavigator, 
        createBottomTabNavigator } 
        from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';
import t from 'tcomb-form-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


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
      <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginRight: 20,}}>
        <Button 
          title="Schedule" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('ScheduleList')}
          color={"#000"}
         />
        </View>
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Calendar" 
          style={{width: 120, height: 120, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Cal')}
          color={"#000"}
         />
        </View>
      </View>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginRight: 20,}}>
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
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginRight: 20,}}>
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
        <View style={{ width: 150, height: 110, backgroundColor: 'powderblue', marginTop: 20, marginRight: 20,}}>
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

class ScheduleList extends React.Component {
  createList = () => {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 5; j++) {
        children.push(
           <View style={{width: 300, height: 100, borderWidth: 2, marginBottom: 10}}>
            <Text>
              Class #{j + 1}
            </Text>
            <Text>
              Credits: 3
            </Text>
            <Text>
              Room: XYZ 123
            </Text>
            <Text>
              Days: M, W, F
            </Text>
            <Text>
              Times: Period 4(10:40 - 11:30)
            </Text>
          </View>)
      }
    return children
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={{fontSize: 40, marginBottom: 300, marginRight: 20}}>
          Schedule
        </Text>

        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: -250}}>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="List"
            />
          </View>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="Day"
              onPress={() => this.props.navigation.navigate('ScheduleDay')}
            />
          </View>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="Week"
              onPress={() => this.props.navigation.navigate('ScheduleWeek')}
            />
          </View>
        </View>

        <ScrollView style={{width: 300, height: 300, borderWidth: 0, marginTop: 50}}>
          {this.createList()}
        </ScrollView>

        <View style={{marginBottom: 0}}>
          <Button 
            title="Return to Home"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

class ScheduleDay extends React.Component {
    createTable = () => {
        let table = [];
        for (let i = 0; i < 11; i++){
          if (i%2 == 0 && i != 0 && i != 4){
            table.push(
             <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 0, width: 100, alignSelf: 'stretch' }}>
                  <Text>
                    Period {i}: 
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Text>
                    Class #{Math.floor(i/2)}, Building: XYZ 123
                  </Text>
                </View> 
            </View>
            );
          }
          else{
            table.push(
             <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 0, width: 100, alignSelf: 'stretch' }}>
                  <Text>
                    Period {i}: 
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                </View> 
            </View>
            );
          }
        }
        return table;
    }

  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={{fontSize: 40, marginBottom: 300, marginRight: 20}}>
          Schedule
        </Text>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: -250}}>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="List"
              onPress={() => this.props.navigation.navigate('ScheduleList')}
            />
          </View>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="Day"
            />
          </View>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="Week"
              onPress={() => this.props.navigation.navigate('ScheduleWeek')}
            />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: 50}}>
          <View style={{width: 70, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity>
              <Text style={{fontSize: 14, textAlign: "center" }}>Monday</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 70, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity>
              <Text style={{fontSize: 14, textAlign: "center" }}>Tuesday</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 70, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity>
              <Text style={{fontSize: 14, textAlign: "center" }}>Wednesday</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 70, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity>
              <Text style={{fontSize: 14, textAlign: "center" }}>Thursday</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 70, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity>
              <Text style={{fontSize: 14, textAlign: "center" }}>Friday</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{width: 300, height: 300, borderWidth: 0, marginTop: 50}}>
          {this.createTable()}
        </ScrollView>

        <View style={{marginBottom: 0}}>
          <Button 
            title="Return to Home"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

class ScheduleWeek extends React.Component {
    createTable = () => {
        let table = [];
        for (let i = 0; i < 11; i++){
          if (i%2 == 0 && i != 0 && i != 4){
            table.push(
             <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, width: 100, alignSelf: 'stretch' , borderWidth: 1}}>
                  <Text>
                    Period {i}: 
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                  <Text style={{fontSize: 12}}>
                    Class #{Math.floor(i/2)}
                  </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                  <Text style={{fontSize: 12}}>
                    Class #{Math.floor(i/2)}
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                  <Text style={{fontSize: 12}}>
                    Class #{Math.floor(i/2)}
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                </View>
            </View>
            );
          }
          else{
            table.push(
             <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, width: 100, alignSelf: 'stretch',borderWidth: 1}}>
                  <Text>
                    Period {i}: 
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' ,borderWidth: 1}}>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' ,borderWidth: 1}}>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' ,borderWidth: 1}}>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                  <Text style={{fontSize: 12}}>
                    Class #{Math.floor(i/2)}
                  </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                </View>
            </View>
            );
          }
        }
        return table;
    }

  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={{fontSize: 40, marginBottom: 300, marginRight: 20}}>
          Schedule
        </Text>

               <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: -250}}>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="List"
              onPress={() => this.props.navigation.navigate('ScheduleList')}
            />
          </View>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="Day"
              onPress={() => this.props.navigation.navigate('ScheduleDay')}
            />
          </View>
          <View style={{width: 100, height: 100, marginBottom: 0, marginRight: 0}}>
            <Button style={{fontSize: 20}}
              title="Week"
            />
          </View>
        </View>

        <ScrollView style={{width: 300, height: 300, borderWidth: 0, marginTop: 50}}>
             <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
                <View style={{ flex: 1, width: 0, alignSelf: 'stretch',borderWidth: 1 }}>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' ,borderWidth: 1}}>
                  <Text style={{fontSize: 12}}>
                    Monday
                  </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                  <Text style={{fontSize: 12}}>
                    Tuesday
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch',borderWidth: 1 }}>
                 <Text style={{fontSize: 12}}>
                    Wednesday
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' ,borderWidth: 1}}>
                 <Text style={{fontSize: 12}}>
                    Thursday
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' ,borderWidth: 1}}>
                 <Text style={{fontSize: 12}}>
                    Friday
                  </Text>
                </View> 
            </View>
          {this.createTable()}
        </ScrollView>

        <View style={{marginBottom: 0}}>
          <Button 
            title="Return to Home"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

class Cal extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <Calendar
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2012-05-17': {marked: true},
            '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2012-05-19': {disabled: true, disableTouchEvent: true}
          }}
        />
         <Button
          title="Done"
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
        <Text style={styles.paragraph}>
          Payment
        </Text>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> Printing Fees </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Pay" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text>Tuition</Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Pay" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> Parking Ticket </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Pay" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
        <Button
          title="Done"
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
         <Button
          title="Done"
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
        <Text style={styles.paragraph1}>
          Student Guide
        </Text>
        <Text style={styles.paragraph1}>
          Settings
        </Text>
        <Text style={styles.paragraph2}>
          Decal
        </Text>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> Red 3 </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Update" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
        <Text style={styles.paragraph2}>
          Living
        </Text>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> Lexington Crossing </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginBottom: 30, marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Update" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
        <Text style={styles.paragraph2}>
          UF App Recommendations
        </Text>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> Canvas </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Download" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> Rider </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Download" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
        <Button
          title="Done"
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
        <Text style={styles.paragraph3}>
          Club Guide
        </Text>
        
        <View style={{ width: 340, height:80, backgroundColor: 'powderblue' }}>
        <Button 
          title="AeroGators" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'steelblue' }}>
        <Button 
          title="Solar Gators" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'powderblue' }}>
        <Button 
          title="Engineering Ambassadors" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'steelblue' }}>
        <Button 
          title="Cicerones" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'powderblue' }}>
        <Button 
          title="SubjuGator" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'steelblue' }}>
        <Button 
          title="American Institute of Aeronautics and Astronotics" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      

      
        <Button
          title="Done"
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
        <Text style={styles.paragraph1}>
          Emergency
        </Text>
        <View style={{ width: 340, height:100, backgroundColor: 'lightblue' }}>
        <Button 
          title="EMERGENCY BUTTON" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => 
            Alert.alert(
                'Emergency Request',
                'Would you like to request a police officer to come to your location?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Yes', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              )
              }
          />
      </View>
        
        <Text style={styles.paragraph2}>
          Emergency Numbers
        </Text>
        <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> UFPD (352-392-1111) </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Call" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> CWC (352-392-1575) </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Call" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{ width: 100, height: 50, marginTop: 20, marginRight: 20,}}>
      <Text> 911 </Text>
        </View>
        <View style={{ width: 100, height: 50, backgroundColor: 'steelblue', marginTop: 20, marginLeft: 20}}>
        <Button 
          title="Call" 
          style={{width: 130, height: 130, backgroundColor: 'powderblue'}} 
          onPress={() => this.props.navigation.navigate('Homescreen')}
          color={"#000"}
         />
        </View>
      </View>
        <Button
          title="Done"
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
        <Text style={styles.paragraph3}>
          Notifications
        </Text>
        
        <View style={{ width: 340, height:80, backgroundColor: 'powderblue' }}>
        <Button 
          title="Pay Fine of $23.11" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'steelblue' }}>
        <Button 
          title="Hurricane Irma means no school" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'powderblue' }}>
        <Button 
          title="UF Hosting Shaq at O'Connell Center" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'steelblue' }}>
        <Button 
          title="Assignment due for CEN4721" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'powderblue' }}>
        <Button 
          title="You have a club event coming up" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      <View style={{ width: 340, height:80, backgroundColor: 'steelblue' }}>
        <Button 
          title="Welcome to the UF App" 
          style={{width: 140, height: 50, backgroundColor: 'powderblue'}} 
          color={"#000"}
          onPress={() => console.log("hi")}
          />
      </View>
      

      
        <Button
          title="Done"
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
  ScheduleList: {
    screen: ScheduleList,
  },
   ScheduleDay: {
    screen: ScheduleDay,
  },
   ScheduleWeek: {
    screen: ScheduleWeek,
  },
  Cal: {
    screen: Cal,
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
  paragraph3: {
    flex: 1,
    alignmentItems: 'left',
    justifyContent: 'left',
    fontSize: 40,
    fontWeight: 'bold',
  },
})