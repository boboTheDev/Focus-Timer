import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What to focus on?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1, marginRight: 20 }}
          onSubmitEditing={({ nativeEvent }) => {
            addSubject(nativeEvent.text); //pressing Enter on keyboard is same as submit
            setTmpItem(nativeEvent.text);
          }}
        />
        <RoundedButton
          size={50}
          title="+"
          onPress={() => {
            addSubject(tmpItem);
            setTmpItem(nativeEvent.text);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.2,
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    color: '#7B241C',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
