import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, PermissionsAndroid,ImageBackground} from 'react-native';

const requestPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("permission granted");
    } else {
      console.log("permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};


const requestPermissionread = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("permission granted");
    } else {
      console.log("permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

export default class HomeScreen extends React.Component {
  state={
    email:"",
    password:"",
    isFocused: true,
   
  }
  componentDidMount(){
   
    console.log(this.props.route.params.user);
    requestPermission();
    requestPermissionread();
   
  }
  render(){
  return (
    <View>
    <Image source={require('../../home11small.png')}
style={{backgroundColor: '#FFFFFF', width:'100%', height: '50%'}}/>
   <View style={styles.midstyling}></View>
<View style = {styles.overlay}>
          
            </View>
  
      <View style={styles.midstyling}>
      <View style={styles.firsttwo}>
        <TouchableOpacity style={styles.loginBtn}  onPress={() => this.props.navigation.navigate('Web', {user: this.props.route.params.user})}>
        <Image source={require('../../surveillence3.png')} style={styles.img}/>
        <Text style={styles.loginText}>Live Surviellence</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Map', {user: this.props.route.params.user})}>
        <Image source={require('../../click1.png')} style={styles.img}/>
        <Text style={styles.loginText}>Manual Control</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.firsttwo}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Complete', {user: this.props.route.params.user})}>
        <Image source={require('../../bar-chart.png')} style={styles.img}/>
        <Text style={styles.loginText}>Cleaning Information </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Cleaning', {user: this.props.route.params.user})}>
          <Text style={styles.loginText}>View Cleaning Progress </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.loginBtn}  onPress={() => this.props.navigation.navigate('Alarm', {user: this.props.route.params.user})}>
        <Image source={require('../../time.png')} style={styles.img}/>
        <Text style={styles.loginText}>Set Cleaning Time</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.firsttwo}>
        <TouchableOpacity style={styles.loginBtn}  onPress={() => this.props.navigation.navigate('Settings', {user: this.props.route.params.user})}>
        <Image source={require('../../gear1.png')} style={styles.img}/>
        <Text style={styles.loginText}>Go to Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}  onPress={() => this.props.navigation.navigate('Gallery', {user: this.props.route.params.user})}>
        <Image source={require('../../photoo.png')} style={styles.img}/>
         <Text style={styles.loginText}>Go to Gallery</Text>
        </TouchableOpacity>
        </View>
        {/* <View style={styles.firsttwo}>
        <TouchableOpacity style={styles.loginBtn}  onPress={() => this.props.navigation.navigate('Web', {user: this.props.route.params.user})}>
        <Image source={require('../../gear1.png')} style={styles.img}/>
        <Text style={styles.loginText}>kkkkkk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}  onPress={() => this.props.navigation.navigate('Gallery', {user: this.props.route.params.user})}>
        <Image source={require('../../photoo.png')} style={styles.img}/>
         <Text style={styles.loginText}>Go to Gallery</Text>
        </TouchableOpacity>
        </View> */}
       </View>
       
       

 
      </View>
     
  );}
}
const styles = StyleSheet.create({
  overlay: {
    opacity: 1,
    backgroundColor: '#000000'
  },
  img: {
    width:75,
    height: 70,
   marginTop:40,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute'
  },
  midstyling:{
    top: 20,
  },
  firsttwo: {
    flexDirection: 'row',
    marginTop:10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 160
  },
  loginBtn:{
    width:"47%",
    backgroundColor:"lightblue",
    borderRadius:25,
    height:110,
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"center",
   
    color:"white",
    fontSize:50,
    marginLeft: 8,
    marginRight:2,
    marginBottom:10
  },
  loginText:{
    color:"white",
    fontSize:18,
    marginTop:70,
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1
    },
  },
  avatar: {
    width:60,
    height:60,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    marginBottom:-100,
   marginTop:-390,
    marginLeft: 320
  },
});

