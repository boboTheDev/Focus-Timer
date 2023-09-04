import React, { useState } from 'react';
import { Text, View, StyleSheet , Platform} from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus/focus';
import { Timer } from './src/features/timer/Timer';
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        //<Text>Focused Subject</Text>
        <Timer focusSubject={focusSubject}/>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "ios" ? 10: 20,
    backgroundColor: '#52BE80',
  },
});
