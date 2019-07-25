import React, { Component } from 'react';
import { Platform, Alert, ScrollView,Button, TextInput, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createStackNavigator } from 'react-navigation';
var shd1 = require('../assets/icons/asset2.png');
var shd2 = require('../assets/icons/h1.png');
var shd3 = require('../assets/icons/h3.png');

export default class App extends Component {

  FloatingButtonEvent=()=>{
      Alert.alert("Floating Button Clicked");
  }

 /* state = {

    chatlist:[
      {
        name:"Sam",
        text:"Hi",
        email:"Sam@gmail.com",
        time:"5:30 PM",
        id:1
      },
      {
        name:"Prakash",
        text:"Good Night",
        email:"Prakash@gmail.com",
        time:"10:30 PM",
        id:2
      },
      {
        name:"Vijay",
        text:"Good Morning",
        email:"Vijay@gmail.com",
        time:"7:30 AM",
        id:3
      },
      {
        name:"Raju",
        text:"Poda Motta",
        email:"Raju@gmail.com",
        time:"11:30PM",
        id:4
      },
      {
        name:"Kamaraj",
        text:"How are you?",
        email:"Kamaraj@gmail.com",
        time:"2:30PM",
        id:5
      },
      {
        name:"Monish",
        text:"where are you?",
        email:"Monish@gmail.com",
        time:"11:30AM",
        id:6
      }
    ]

  };*/

  state = {
    
        chatlist:[
          {
            name:"Sathish",
            text:"Hi",
            email:"sathish@gmail.com",
            time:"5:30 PM",
            id:17
          },
          {
            name:"Prakash",
            text:"Good Night",
            email:"Prakash@gmail.com",
            time:"10:30 PM",
            id:2
          },
          {
            name:"Vijay",
            text:"Good Morning",
            email:"Vijay@gmail.com",
            time:"7:30 AM",
            id:3
          },
          {
            name:"Raju",
            text:"Poda Motta",
            email:"Raju@gmail.com",
            time:"11:30PM",
            id:4
          },
          {
            name:"Kamaraj",
            text:"How are you?",
            email:"Kamaraj@gmail.com",
            time:"2:30PM",
            id:5
          },
          {
            name:"Monish",
            text:"where are you?",
            email:"Monish@gmail.com",
            time:"11:30AM",
            id:6
          }
        ]
    
      };    

   getFirebaseUserDetails =(emailList) => {
      let MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
      
      let sortEmailList = emailList.sort();
      let email1MD5 = MD5(sortEmailList[0]);
      let email2MD5 = MD5(sortEmailList[1]);
      return email1MD5+"~"+email2MD5 ; 
  }

  listTouch = (selecteduser) =>{
    //let emailList = [selecteduser.id,17];    
    let emailList = [selecteduser.email,"Sam@gmail.com"];
   // let emailList = [selecteduser.email,"sathish@gmail.com"];
    let firebaseUserDetails=this.getFirebaseUserDetails(emailList);
    this.props.navigation.navigate('ChatScreen',{selecteduser:selecteduser,firebaseUserDetails:firebaseUserDetails});
  }

  render() {
      const { navigation} = this.props.navigation;
      return (        
        <ScrollView>   
          <View style={styles.container}>
            {
              this.state.chatlist.map((chat) =>
                <View style={styles.border}>
                    <TouchableOpacity onPress={()=>{this.listTouch(chat)}}> 
                        <View style={styles.direct}>
                          <Image source={require('../assets/images/pk.jpg')}  style={styles.image} />                 
                        </View>
                        <View>
                          <Text style={styles.text}> {chat.name} |<Text> Topic </Text> <Image source={shd1} style={styles.Badge}/></Text> 
                          <Text style={{alignSelf: "flex-end", color: "grey"}}>{chat.time}</Text>
                          <TouchableOpacity style={styles.Rate}>
                            <Text style={{alignSelf: "center", color: 'white'}}> RATE </Text>                    
                          </TouchableOpacity>
                        </View>
                        <View style={{paddingBottom: '2%'}}>
                          <Text style={styles.text1} >{chat.text}</Text>
                        </View>
                    </TouchableOpacity>
                  </View>
              )}
            <View style={styles.container1}>      
                <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent} style={styles.TouchableOpacityStyle} >
                    <Image source={require('../images/Button.png')}  style={styles.FloatingButtonStyle} />
                </TouchableOpacity>
            </View> 
        </View>
      </ScrollView>        
     );
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding:14,
      paddingBottom: 80
    },
    Rate: {    
      
      width: 50,
      alignSelf: "flex-end",
      height:20,     
      
    
      backgroundColor:'#FEC107',
     
      borderColor: '#fff'
    },
   
    outerCircle: {
      alignItems: 'center',
      borderRadius: 40,
      width: 80,
      height: 80,
    },
    image: {
      borderRadius: 40,
      width: 80,
      height: 80,
      },
  text: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: wp('-20%'),
      marginLeft: wp('21%')
     
    },
    direct: {
      flex:1,
      flexDirection:`row`
    },
    text1: {
       
       marginTop:'-10%',
        marginLeft: '25%'
       
      },
    border: {
      borderBottomColor: '#DCDCDC', 
      borderBottomWidth: 1,
      marginTop: 10,     
      
    },
    container1: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#e5e5e5",
      marginTop: '120%'
    },
    headerText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
     
    },
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
    },
    
    Badge :{
    height: 15, width: 13
    }
  
  
  });

  
