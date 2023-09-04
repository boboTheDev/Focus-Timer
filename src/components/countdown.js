import React , {useState, useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";

const minToMil = (min) =>{
  return min*60000;
}

const formatTime =(digit)=>{
  return digit < 10 ? `0${digit}`: digit
}



export const Countdown = ({
  minutes = 20,
  isPaused = true,
}) => {

  const [mil, setMil] = useState(minToMil(minutes));
  
  const interval = React.useRef(null);
  
  const coundDown =() =>{
  setMil((time) =>{
    if (time === 0){
      //do something
    } else {
      const timeLeft = time - 1000;
      return timeLeft
      }
    })
  }

  useEffect(() =>{
    if(isPaused) return;

    interval.current = setInterval(coundDown, 1000);
    return () => clearInterval(interval.current)
  }, [isPaused])

  const min = formatTime(Math.floor(mil/ 1000/60));
  const sec = formatTime(Math.floor(mil/ 1000) % 60) ;

  return (
   // <Text style={styles.text}>Countdown timer goes here</Text>
   <Text style={styles.text}>{`${min}:${sec}`}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    padding: 10,
    textAlign: "center"
  }
})