import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator ,Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import axios from "axios";

const API_KEY = "e8c1024a8868a2ee89237140cff06507";


export default class App extends React.Component{
  state = {
    isLoaiding : true
  }
  
  getWeahter = async (latitude,longitude)=>{
    const {
      data : {
        main : { temp },
        weather
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
    console.log(data);
    //data.main.temp
      this.setState({
        isLoading:false, 
        condition : weather[0].main,
        temp
    });
  }
  getLocation = async () =>{
    try{
      //throw Error(); //강제 에러 발생
      await Location.requestPermissionsAsync();
      const Loc = await Location.getCurrentPositionAsync();
      console.log(Loc);

      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeahter(latitude,longitude);
      // this.setState({isLoading: false});
    }catch(error){
      Alert.alert("Can't find you.","So sad"); //Alert 창
    }

  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading,condition,temp} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems:'center'
  }
});
