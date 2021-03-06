
import React  from 'react'
import {View,Text,StyleSheet,ActivityIndicator,Image} from 'react-native'

class Splash extends React.Component{
    componentDidMount = () => {
        // Remember the timer handle
        this.timerHandle = setTimeout(() => {
          this.props.navigation.replace('Home');
          this.timerHandle = 0;
        }, 4000);
      };
      componentWillUnmount = () => {
        // Is our timer running?
        if (this.timerHandle) {
          // Yes, clear it
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
      };
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/images/calculator.png')} style={styles.icon}/>
                <Text style={styles.textIcon}>Alpha Calculator</Text>
                <ActivityIndicator size='large' color='white' style={styles.loading}/>
            </View>
        )
    }
}
export default Splash


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:"center"
    },
    textIcon:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        marginTop:10
    },
    loading:{
        marginTop:10
    },
    icon:{
        resizeMode:'contain',
        height:100,
        width:100
    }
})