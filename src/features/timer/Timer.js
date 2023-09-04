import React, {useState} from "react";
import {View,Text, StyleSheet} from "react-native";
import {ProgressBar} from "react-native-paper"

import {Countdown} from "../../components/countdown";
import {RoundedButton} from "../../components/RoundedButton"

export const Timer = ({focusSubject}) => {
  const [isStarted, setIsStarted] = useState(false); //default is false
  const [progress, setProgress] = useState(1)
  return (
    <View style={styles.container}>
      <Countdown isPaused={!isStarted}/>
      <Text style={styles.title}>Focusing On:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
      <ProgressBar progress={progress} color ="#FFFFFF" style={{marginTop: 15,height:10}} />
      <View style={styles.buttonWrapper}>
        {!isStarted? <RoundedButton title="start" size={50} onPress={()=>{
          setIsStarted(true);
        }}/> :
        <RoundedButton title="stop" size={50} onPress={()=>{
          setIsStarted(false);
        }}/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 100
  },
  title:{
    fontWeight: 50,
    textAlign: "center"
  },
  task:{
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonWrapper:{
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  }
})