import React, {Component} from 'react';
import{AlertIOS,AppRegistry,Platform,StyleSheet,Text,TouchableOpacity,Button,View,Dimensions} from 'react-native';
import {Video} from 'expo-av';

export default class VideoPlayer extends Component {
 constructor(props) {
 super(props);

}


state = {
volume: 1,
};

render() {
    
    return (

        <View >

       {/* <Video source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
      /> */}


<Text></Text>
<Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  ref={(ref) => { this.player = ref  }}  
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay = {true}
  isLooping = {false}
  style=  {{
          width:  Dimensions.get('window').width,
          height: Dimensions.get('window').height / 1.3
          }}
/>




        </View>
    
    )

}

}

const styles = StyleSheet.create({
container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: 'white'
},
fullScreen: {
 position: 'absolute',
 top: 0,
 left: 0,
 bottom: 0,
 right: 0,
},
controls: {
 backgroundColor: "transparent",
 borderRadius: 5,
 position: 'absolute', 
 bottom: 44,
 left: 4,
 right: 4,
},
progress: {
 flex: 1,
 flexDirection: 'row',
 borderRadius: 3,
 overflow: 'hidden',
},
innerProgressCompleted: {
 height: 20,
 backgroundColor: '#cccccc'
},
innerProgressRemaining: {
 height: 20,
 backgroundColor: '#2C2C2C',
},
generalControls: {
 flex: 1,
 flexDirection: 'row',
 overflow: 'hidden', 
 paddingBottom: 10,
},
skinControl: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
},
rateControl: {
 flex: 1,
 flexDirection: 'row',
 justifyContent: 'center',
},
volumeControl: {
 flex: 1,
 flexDirection: 'row',
 justifyContent: 'center',
},
resizeModeControl: {
 flex: 1,
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center'
},
ignoreSilentSwitchControl: {
 flex: 1,
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center'
},
controlOption: {
 alignSelf: 'center',
 fontSize: 11,
 color: "white",
 paddingLeft: 2,
 paddingRight: 2,
 lineHeight: 12,
},
nativeVideoControls: {
  top: 184,
  height: 300
}
});