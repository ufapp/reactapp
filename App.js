import React, { Component } from 'react';
import {
        Alert,
        Switch,
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
        TouchableOpacity,
        Dimensions } 
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
import { Constants, MapView } from 'expo';
import { Col, Row, Grid } from "react-native-easy-grid";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
    };
  }

  CheckTextInput = () => {
    //Handler for the Submit onPress
    let email = this.state.Email;
    let checkUfl = email.includes('@ufl.edu');
    if (checkUfl === true) {
      if (this.state.Password != '') {
        //Check for the Email TextInput
        this.props.navigation.navigate('Homescreen');
      } else {
        alert('Please Enter Password');
      }
    } else {
      alert('Please Enter UFL Email');
    }
  };

  render() {
    return (
      <View style={loginStyle.MainContainer}>
        <Text style={loginStyle.header}>UF Login</Text>
        <TextInput
          placeholder="UF Email"
          onChangeText={Email => this.setState({ Email })}
          underlineColorAndroid="transparent"
          style={loginStyle.TextInput}
        />
        <TextInput
          placeholder="Password"
          onChangeText={Password => this.setState({ Password })}
          underlineColorAndroid="transparent"
          style={loginStyle.TextInput}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 15 }}>
          <Button
            title="Submit"
            onPress={this.CheckTextInput}
            color="#606070"
          />
        </View>
      </View>
    );
  }
}

const loginStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 35,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 25
    },

  TextInput: {
    width: '100%',
    height: 40,
    paddingLeft: 5,
    borderWidth: 1,
    marginTop: 15,
    borderColor: 'blue',
    borderRadius: 20 ,
  },
});

class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    global.num1 = 0;
    global.num2 = 0;
    global.num3 = 0;
    global.decal = 'No Decal'
  }

  componentDidMount() {
    global.num1 = Math.floor((Math.random() * 100) + 1);
    global.num2 = Math.floor((Math.random() * 100) + 1);
    global.num3 = Math.floor((Math.random() * 100) + 1);
  }

  render() {
    return (
      <View style={homescreenStyle.MainContainer}>
        <Grid>
          <Row size={6}>
            <Button 
              title="<Logout"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </Row>
          <Row size={15} 
          style={homescreenStyle.button}>
            <Button 
              title="New Semester Toolkit" 
              onPress={() => this.props.navigation.navigate('Toolkit')}
              color={"#fff"}
            />
          </Row>
          <Row size={79}>
            <Col>
              <Col style={homescreenStyle.button}>
                <Button 
                  title="Schedule" 
                  onPress={() => this.props.navigation.navigate('ScheduleList')}
                  color={"#fff"}
                />
              </Col>
              <Col style={homescreenStyle.button}>
                <Button 
                  title="Calendar" 
                  onPress={() => this.props.navigation.navigate('Cal')}
                  color={"#fff"}
                />
              </Col>
              <Col style={homescreenStyle.button}>
                <Button 
                  title="Payment" 
                  onPress={() => this.props.navigation.navigate('Payment')}
                  color={"#fff"}
                />
              </Col>
              <Col style={homescreenStyle.button}>
                <Button 
                  title="Map" 
                  onPress={() => this.props.navigation.navigate('ParkingMap')}
                  color={"#fff"}
                />
              </Col>
            </Col>
            <Col>
              <Col style={homescreenStyle.button}>
                <Button 
                  title="Student Guide" 
                  onPress={() => this.props.navigation.navigate('StudentGuide')}
                  color={"#fff"}
                />
              </Col>
              <Col style={homescreenStyle.button}>
                <Button 
                  title="Club Guide" 
                  onPress={() => this.props.navigation.navigate('ClubGuide')}
                  color={"#fff"}
                />
              </Col>
              <Col style={homescreenStyle.button}>
                <Button 
                  title="Emergency" 
                  onPress={() => this.props.navigation.navigate('Emergency')}
                  color={"#fff"}
                />
              </Col>
              <Col style={homescreenStyle.button}>
                <Button 
                  title="Notifications" 
                  onPress={() => this.props.navigation.navigate('Notifications')}
                  color={"#fff"}
                />
              </Col>
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}

const homescreenStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 20,
  },
  button: {
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    justifyItems: 'center',
  }
});


class ParkingMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
    red_decal: true,
    blue_decal: true,
    green_decal: true,
    orange_decal: true,
    yellow_decal: true,
    mapRegion: {
      latitude: 29.648215,
      longitude: -82.343711,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    };

    // This binding is necessary to make `this` work in the callback
    this.switchClickedRED = this.switchClickedRED.bind(this);
    this.switchClickedBLUE = this.switchClickedBLUE.bind(this);
    this.switchClickedGREEN = this.switchClickedGREEN.bind(this);
    this.switchClickedORANGE = this.switchClickedORANGE.bind(this);
    this.switchClickedYELLOW = this.switchClickedYELLOW.bind(this);
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

 switchClickedRED() {
    this.setState(state => ({
      red_decal: !state.red_decal
    }));
    this.forceUpdate();
  }
   switchClickedBLUE() {
    this.setState(state => ({
      blue_decal: !state.blue_decal
    }));
    this.forceUpdate();
  }
   switchClickedGREEN() {
    this.setState(state => ({
      green_decal: !state.green_decal
    }));
    this.forceUpdate();
  }
   switchClickedORANGE() {
    this.setState(state => ({
      orange_decal: !state.orange_decal
    }));
    this.forceUpdate();
  }
   switchClickedYELLOW() {
    this.setState(state => ({
      yellow_decal: !state.yellow_decal
    }));
    this.forceUpdate();
  }
  
renderMarkers = () => {
      let children = []
      for (let j = 0; j < 5; j++) {
        if (this.state.red_decal == true){
        children.push(
            <MapView.Marker
              coordinate={{latitude: 29.648215,
              longitude: -82.343711}}
              title={"Red Decal"}
              description={"Decal enforced from 7:00 AM to 4:30 PM, Mon-Fri"}
          />
       )
        }
        if (this.state.blue_decal){
        children.push(
            <MapView.Marker
              coordinate={{latitude: 29.6481,
              longitude: -82.342010}}
              title={"Blue Decal"}
              description={"Decal enforced from 7:00 AM to 4:30 PM, Mon-Fri"}
          />
       )
        }
        if (this.state.green_decal){
        children.push(
            <MapView.Marker
              coordinate={
                {latitude: 29.647211,
              longitude: -82.345029}
              }
              title={"Green Decal"}
              description={"Decal enforced from 7:00 AM to 4:30 PM, Mon-Fri"}
          />
       )
        }
        if (this.state.orange_decal){
        children.push(
            <MapView.Marker
              coordinate={{latitude: 29.6348,
              longitude: -82.342784}}
              title={"Orange Decal"}
              description={"Decal enforced from 7:00 AM to 4:30 PM, Mon-Fri"}
          />
       )
        }
        if (this.state.yellow_decal){
        children.push(
            <MapView.Marker
              coordinate={{latitude: 29.63009,
              longitude: -82.34742}}
              title={"Yellow Decal"}
              description={"Decal enforced from 7:00 AM to 4:30 PM, Mon-Fri"}
          />
       )
        }
      }
    return children
  }


  render() {
    return (
      <View style={mapStyle.MainContainer}>
      <View style={{height:100, marginTop: 30, marginBottom: -20}}>
        <View style={{marginRight: 250}}>
          <Button 
            title="<Back"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: 0}}>
            <View style={{width: 100, height: 50, marginBottom: 0, marginLeft: 60}}>
              <Button style={{fontSize: 20}}
                title="Parking"
                onPress={() => this.props.navigation.navigate('ParkingMap')}
              />
            </View>
            <View style={{width: 100, height: 50, marginBottom: 0, marginRight: 0}}>
              <Button style={{fontSize: 20}}
                title="Schedule"
                onPress={() => this.props.navigation.navigate('ScheduleMap')}
              />
            </View>
          </View>
        </View>

      </View>
      <View style={{height: 350, marginBottom: 20}}>
        <MapView
          style={mapStyle.map}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
          >
          {this.renderMarkers()}
         </MapView>
        </View>
            <View style={{height: 100, width: 350}}>
              <View style={{flex: 0, flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{width: 80}}>
                    <Text>
                      Red Decal
                    </Text>
                  </View>
                  <View style={{width: 50, marginLeft: 0}}>
                    <Switch style={{width: 50}}
                      value={this.state.red_decal}
                      onValueChange={this.switchClickedRED}>
                    </Switch>
                  </View>
                  <View style={{width: 80, marginLeft: 0}}>
                    <Text>
                      Yellow Decal
                    </Text>
                  </View>
                  <View style={{width: 50, marginLeft: 0}}>
                    <Switch style={{width: 50}}
                      value={this.state.yellow_decal}
                      onValueChange={this.switchClickedYELLOW}>
                    </Switch>
                  </View>
              </View>
              <View style={{flex: 0, flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{width: 80}}>
                    <Text>
                      Blue Decal
                    </Text>
                  </View>
                  <View style={{width: 50}}>
                    <Switch style={{width: 50, marginLeft: -190}}
                      value={this.state.blue_decal}
                      onValueChange={this.switchClickedBLUE}>
                    </Switch>
                  </View>
              </View>
                <View style={{flex: 0, flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{width: 80}}>
                    <Text>
                      Green Decal
                    </Text>
                  </View>
                  <View style={{width: 50, marginLeft: 0}}>
                    <Switch style={{width: 50, marginLeft: -190}}
                      value={this.state.green_decal}
                      onValueChange={this.switchClickedGREEN}>
                    </Switch>
                  </View>
              </View>
                <View style={{flex: 0, flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{width: 80}}>
                    <Text>
                      Orange Decal
                    </Text>
                  </View>
                  <View style={{width: 50, marginLeft: 0}}>
                    <Switch style={{width: 50, marginLeft: -190}}
                      value={this.state.orange_decal}
                      onValueChange={this.switchClickedORANGE}>
                    </Switch>
                  </View>
              </View>
              </View>
      </View>
    );
  }
}

class ScheduleMap extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
    class1: true,
    class2: true,
    class3: true,
    class4: true,
    mapRegion: {
      latitude: 29.648215,
      longitude: -82.343711,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    };

    // This binding is necessary to make `this` work in the callback
    this.switchClickedC1 = this.switchClickedC1.bind(this);
    this.switchClickedC2 = this.switchClickedC2.bind(this);
    this.switchClickedC3 = this.switchClickedC3.bind(this);
    this.switchClickedC4 = this.switchClickedC4.bind(this);
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

 switchClickedC1() {
    this.setState(state => ({
      class1: !state.class1
    }));
    this.forceUpdate();
  }
   switchClickedC2() {
    this.setState(state => ({
      class2: !state.class2
    }));
    this.forceUpdate();
  }
   switchClickedC3() {
    this.setState(state => ({
      class3: !state.class3
    }));
    this.forceUpdate();
  }
   switchClickedC4() {
    this.setState(state => ({
      class4: !state.class4
    }));
    this.forceUpdate();
  }
  
renderMarkers = () => {
      let children = []
      for (let j = 0; j < 5; j++) {
        if (this.state.class1){
        children.push(
            <MapView.Marker
              coordinate={{latitude: 29.642215,
              longitude: -82.343711}}
              title={"Class #1, Building: XYZ 123"}
              description={"M,W,F | Period 4 (10:40 AM - 11:30 AM)"}
          />
       )
        }
        if (this.state.class2){
        children.push(
            <MapView.Marker
              coordinate={{latitude: 29.6451,
              longitude: -82.340010}}
              title={"Class #2, Building: XYZ 123"}
              description={"T, Th | Period 5 (11:45 AM - 12:35 AM)"}
          />
       )
        }
        if (this.state.class3){
        children.push(
            <MapView.Marker
              coordinate={
                {latitude: 29.648211,
              longitude: -82.345029}
              }
              title={"Class #3, Building: XYZ 123"}
              description={"M,W,F | Period 5 (11:45 AM - 12:35 AM)"}
          />
       )
        }
        if (this.state.class4){
        children.push(
            <MapView.Marker
              coordinate={{latitude: 29.6308,
              longitude: -82.348784}}
              title={"Class #4, Building: XYZ 123"}
              description={"T, Th |  Period 4 (10:40 AM - 11:30 AM)"}
          />
       )
        }
      }
    return children
  }


  render() {
    return (
      <View style={mapStyle.MainContainer}>
      <View style={{height:100, marginTop: 30, marginBottom: -20}}>
        <View style={{marginRight: 250}}>
          <Button 
            title="<Back"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: 0}}>
            <View style={{width: 100, height: 50, marginBottom: 0, marginLeft: 60}}>
              <Button style={{fontSize: 20}}
                title="Parking"
                onPress={() => this.props.navigation.navigate('ParkingMap')}
              />
            </View>
            <View style={{width: 100, height: 50, marginBottom: 0, marginRight: 0}}>
              <Button style={{fontSize: 20}}
                title="Schedule"
                onPress={() => this.props.navigation.navigate('ScheduleMap')}
              />
            </View>
          </View>
        </View>

      </View>
      <View style={{height: 350, marginBottom: 20}}>
        <MapView
          style={mapStyle.map}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
          >
          {this.renderMarkers()}
         </MapView>
        </View>
            <View style={{height: 100, width: 350}}>
              <View style={{flex: 0, flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{width: 80}}>
                    <Text>
                      Class #1, Building: XYZ 123
                    </Text>
                  </View>
                  <View style={{width: 50, marginLeft: 0}}>
                    <Switch style={{width: 50}}
                      value={this.state.class1}
                      onValueChange={this.switchClickedC1}>
                    </Switch>
                  </View>
                  <View style={{width: 80}}>
                    <Text>
                      Class #4, Building: XYZ 123
                    </Text>
                  </View>
                  <View style={{width: 50, marginLeft: 0}}>
                    <Switch style={{width: 50, marginLeft: 0}}
                      value={this.state.class4}
                      onValueChange={this.switchClickedC4}>
                    </Switch>
                  </View>
              </View>
              <View style={{flex: 0, flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{width: 80}}>
                    <Text>
                      Class #2, Building: XYZ 123
                    </Text>
                  </View>
                  <View style={{width: 50}}>
                    <Switch style={{width: 50, marginLeft: -190}}
                      value={this.state.class2}
                      onValueChange={this.switchClickedC2}>
                    </Switch>
                  </View>
              </View>
                <View style={{flex: 0, flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{width: 80}}>
                    <Text>
                      Class #3, Building: XYZ 123
                    </Text>
                  </View>
                  <View style={{width: 50, marginLeft: 0}}>
                    <Switch style={{width: 50, marginLeft: -190}}
                      value={this.state.class3}
                      onValueChange={this.switchClickedC3}>
                    </Switch>
                  </View>
              </View>
          </View>
      </View>
    );
  }
}

const mapStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginBottom: 10,
    marginLeft: 12,
    height: 350,
    width: 350
  },
  map: {
    alignSelf: 'stretch',
    flex: 1,
  }
});

class Toolkit extends React.Component {
  render() {
    return (
      <View style={toolStyle.MainContainer}>
        <Grid>
          <Row size={6}>
            <Button 
              title="<Back"
              onPress={() => this.props.navigation.navigate('Homescreen')}
            />
          </Row>
          <Row size={14}>
            <Text style={toolStyle.header}>Student Toolkit</Text>
          </Row>
          <Row size={10}>
            <Text style={toolStyle.title}>Step 1</Text>
          </Row>
          <Row size={20}>
            <Text style={toolStyle.text}>Click one or both calendars to import, then click Next when you are done.</Text>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={toolStyle.text}>Google Calendar</Text>
            </Col>
            <Col style={toolStyle.button}>
              <Button 
                  title="Import" 
                  onPress={() => alert('Imported.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={toolStyle.text}>Apple Calendar</Text>
            </Col>
            <Col style={toolStyle.button}>
              <Button 
                  title="Import" 
                  onPress={() => alert('Imported.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
          <Row size={6}>
            <Button 
              title="Next>"
              onPress={() => this.props.navigation.navigate('Step2a')}
            />
          </Row>
        </Grid>
      </View>
    )
  }
}

const toolStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 35,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30
    },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15
    },
    text: {
    fontSize: 22,
    marginBottom: 5,
    justifyContent: 'center',
    justifyItems: 'center',
    },
    button: {
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    justifyItems: 'center',
  },
});

class Step2a extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  }
    global.address = ''
  }

  CheckTextInput = () => {
    //Handler for the Submit onPress
    let addr = global.address;
    if (addr != '') {
      this.props.navigation.navigate('Step2b');
    } else {
      alert('Please Enter Address');
    }
  };


  render() {
    return (
      <View style={toolStyle.MainContainer}>
        <Grid>
          <Row size={6}>
            <Button 
              title="<Back"
              onPress={() => this.props.navigation.navigate('Homescreen')}
            />
          </Row>
          <Row size={14}>
            <Text style={toolStyle.header}>Student Toolkit</Text>
          </Row>
          <Row size={10}>
            <Text style={toolStyle.title}>Step 2</Text>
          </Row>
          <Row size={20}>
            <Text style={toolStyle.text}>Enter your address and click Next to see which bus routes are best for you.</Text>
          </Row>
          <Row size={20}>
            <TextInput
              placeholder="Enter Address"
              onChangeText={Email => global.address = Email}
              underlineColorAndroid="transparent"
              style={loginStyle.TextInput}
            />
          </Row>
          <Row size={20}>
          </Row>
          <Row size={6}>
            <Button 
              title="Next>"
              onPress={this.CheckTextInput}
            />
          </Row>
        </Grid>
      </View>
    )
  }
}

class Step2b extends React.Component {

  render() {
    return (
      <View style={toolStyle.MainContainer}>
        <Grid>
          <Row size={6}>
            <Button 
              title="<Back"
              onPress={() => this.props.navigation.navigate('Homescreen')}
            />
          </Row>
          <Row size={14}>
            <Text style={toolStyle.header}>Student Toolkit</Text>
          </Row>
          <Row size={10}>
            <Text style={toolStyle.title}>Step 2</Text>
          </Row>
          <Row size={10}>
            <Text style={toolStyle.text}>Address Entered:</Text>
          </Row>
          <Row size={20}>
            <Text style={toolStyle.title}>{global.address}</Text>
          </Row>
          <Row size={20}>
            <Text style={toolStyle.text}>Routes recommended for you based on your address:</Text>
          </Row>
          <Row size={20}>
            <Text style={toolStyle.title}>{global.num1}, {global.num2}, {global.num3}</Text>
          </Row>
          <Row size={6}>
            <Button 
              title="Next>"
              onPress={() => this.props.navigation.navigate('Step3a')}
            />
          </Row>
        </Grid>
      </View>
    )
  }
}


class Step3a extends React.Component {

    constructor(props) {
    super(props);
    this.state = { decal: 'No Decal' }
  }


  CheckSelection = () => {
    //Handler for the Submit onPress
    global.decal = this.state.decal;
    this.props.navigation.navigate('ToolkitDone');
  };

  

  render() {
    return (
      <View style={toolStyle.MainContainer}>
        <Grid>
          <Row size={6}>
            <Button 
              title="<Back"
              onPress={() => this.props.navigation.navigate('Homescreen')}
            />
          </Row>
          <Row size={14}>
            <Text style={toolStyle.header}>Student Toolkit</Text>
          </Row>
          <Row size={10}>
            <Text style={toolStyle.title}>Step 3</Text>
          </Row>
          <Row size={20}>
            <Text style={toolStyle.text}>Select your Decal below so that the Map Module will show parking lots relevant to you.</Text>
          </Row>
          <Row size={20}>
            <Picker
              selectedValue={this.state.decal}
              style={{height: 100, width: 310}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({decal: itemValue})
              }>
              <Picker.Item label="Red 3" value="Red 3" />
              <Picker.Item label="Red 1" value="Red 1" />
              <Picker.Item label="Green" value="Green" />
              <Picker.Item label="Orange" value="Orange" />
              <Picker.Item label="Park and Ride" value="Park and Ride" />
              <Picker.Item label="No Decal" value="No Decal" />
            </Picker>
          </Row>
          <Row size={20}>
          </Row>
          <Row size={6}>
            <Button 
              title="Next>"
              onPress={this.CheckSelection}
            />
          </Row>
        </Grid>
      </View>
    )
  }
}


class ToolkitDone extends React.Component {

    constructor(props) {
    super(props);
    this.state = { decal: 'No Decal' }
  }


  CheckSelection = () => {
    //Handler for the Submit onPress
    global.decal = this.state.decal;
    this.props.navigation.navigate('ToolkitDone');
  };

  

  render() {
    return (
      <View style={toolStyle.MainContainer}>
        <Grid>
          <Row size={6}>
            <Button 
              title="<Back"
              onPress={() => this.props.navigation.navigate('Homescreen')}
            />
          </Row>
          <Row size={14}>
            <Text style={toolStyle.header}>Student Toolkit</Text>
          </Row>
          <Row size={10}>
            <Text style={toolStyle.title}>Done!</Text>
          </Row>
          <Row size={20}>
            <Text style={toolStyle.text}>You completed all the steps. You can change your settings in Student Guide any time you would like. Click Done to go back to the homescreen.</Text>
          </Row>
          <Row size={20}>
          </Row>
          <Row size={20}>
          </Row>
          <Row size={6}>
            <Button 
              title="Done>"
              onPress={() => this.props.navigation.navigate('Homescreen')}
            />
          </Row>
        </Grid>
      </View>
    )
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
        <View style={{marginRight: 250}}>
          <Button 
            title="<Back"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
        </View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={{fontSize: 40, marginBottom: 0, marginRight: 20}}>
          Schedule
        </Text>

        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: 0}}>
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

        <ScrollView style={{width: 300, height: 300, borderWidth: 0, marginTop:-100}}>
          {this.createList()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

class ScheduleDay extends React.Component {
    createTable = () => {
        let table = [];
        for (let i = 0; i < 11; i++){
          let x = (Math.random() * 10) + 1
          if (x > 0 && x < 5){
            table.push(
             <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 0, width: 100, alignSelf: 'stretch', borderWidth: 1 }}>
                  <Text>
                    Period {i}: 
                  </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1 }}>
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
                <View style={{ flex: 0, width: 100, alignSelf: 'stretch', borderWidth: 1}}>
                  <Text>
                    Period {i}: 
                  </Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1 }}>
                </View> 
            </View>
            );
          }
        }
        return table;
    }

    updateTable() {
      this.forceUpdate();
    }

  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <View style={{marginRight: 250}}>
          <Button 
            title="<Back"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
        </View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={{fontSize: 40, marginBottom: 0, marginRight: 20}}>
          Schedule
        </Text>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: 0}}>
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

        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: -100, marginBottom: 30}}>
          <View style={{width: 70, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity onPress={this.updateTable.bind(this)}>
              <Text style={{fontSize: 14, textAlign: "center" }}>Monday</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 70, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity onPress={this.updateTable.bind(this)}>
              <Text style={{fontSize: 14, textAlign: "center" }}>Tuesday</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 80, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity onPress={this.updateTable.bind(this)}>
              <Text style={{fontSize: 14, textAlign: "center" }}>Wednesday</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 70, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity onPress={this.updateTable.bind(this)}>
              <Text style={{fontSize: 14, textAlign: "center" }}>Thursday</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 80, height: 80, marginBottom: 0, marginRight: 0}}>
            <TouchableOpacity onPress={this.updateTable.bind(this)}>
              <Text style={{fontSize: 14, textAlign: "center" }}>Friday</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{width: 300, height: 300, borderWidth: 0, marginTop: -100}}>
          {this.createTable()}
        </ScrollView>
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
        <View style={{marginRight: 250}}>
          <Button 
            title="<Back"
            onPress={() => this.props.navigation.navigate('Homescreen')}
          />
        </View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text style={{fontSize: 40, marginBottom: 0, marginRight: 20}}>
          Schedule
        </Text>

        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', marginTop: 0}}>
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

        <ScrollView style={{width: 300, height: 300, borderWidth: 0, marginTop: -100}}>
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

class StudentGuide extends React.Component {
  render() {
    return (
      <View style={studentStyle.MainContainer}>
        <Grid>
          <Row size={6}>
            <Button 
              title="<Back"
              onPress={() => this.props.navigation.navigate('Homescreen')}
            />
          </Row>
          <Row size={14}>
            <Text style={studentStyle.header}>Student Guide</Text>
          </Row>
          <Row size={10}>
            <Text style={studentStyle.title}>Decal & Living</Text>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={studentStyle.text}>{global.address}</Text>
            </Col>
            <Col style={studentStyle.button}>
              <Button 
                  title="Update" 
                  onPress={() => alert('Updated.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={studentStyle.text}>{global.decal}</Text>
            </Col>
            <Col style={studentStyle.button}>
              <Button 
                  title="Update" 
                  onPress={() => alert('Updated.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
          <Row size={10}>
            <Text style={studentStyle.title}>Recommendations</Text>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={studentStyle.text}>UF Rider</Text>
            </Col>
            <Col style={studentStyle.button}>
              <Button 
                  title="Download" 
                  onPress={() => alert('Downloaded.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={studentStyle.text}>Canvas</Text>
            </Col>
            <Col style={studentStyle.button}>
              <Button 
                  title="Download" 
                  onPress={() => alert('Downloaded.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}

const studentStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 35,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30
    },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15
    },
    text: {
    fontSize: 22,
    marginBottom: 5,
    justifyContent: 'center',
    justifyItems: 'center',
    },
    button: {
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    justifyItems: 'center',
  },
});



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
      <View style={emerStyle.MainContainer}>
        <Grid>
          <Row size={6}>
            <Button 
              title="<Back"
              onPress={() => this.props.navigation.navigate('Homescreen')}
            />
          </Row>
          <Row size={14}>
            <Text style={emerStyle.header}>Emergency</Text>
          </Row>
          <Row size={20} style={emerStyle.button}>
            <Button 
                  title="EMERGENCY BUTTON" 
                  onPress={() => alert('Emerged.')}
                  color={"#fff"}
              />
          </Row>
          <Row size={10}>
          </Row>
          <Row size={10}>
            <Text style={emerStyle.title}>Numbers</Text>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={emerStyle.text}>352-292-1111 (UFPD)</Text>
            </Col>
            <Col style={emerStyle.button}>
              <Button 
                  title="Call" 
                  onPress={() => alert('Called.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={emerStyle.text}>352-392-1575 (CWC)</Text>
            </Col>
            <Col style={emerStyle.button}>
              <Button 
                  title="Call" 
                  onPress={() => alert('Called.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
          <Row size={20}>
            <Col>
              <Text style={emerStyle.text}>911</Text>
            </Col>
            <Col style={emerStyle.button}>
              <Button 
                  title="Call" 
                  onPress={() => alert('Called.')}
                  color={"#fff"}
              />
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}

const emerStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 35,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
    },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15
    },
    text: {
    fontSize: 22,
    marginBottom: 5,
    justifyContent: 'center',
    justifyItems: 'center',
    },
    button: {
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    justifyItems: 'center',
  },
});

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
  ParkingMap: {
    screen: ParkingMap,
  },
  ScheduleMap: {
    screen: ScheduleMap,
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


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 40,
    alignmentItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
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

const mstyles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#ecf0f1',
  // },
});