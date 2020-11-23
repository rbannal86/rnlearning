import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Please Enter Your Name..."
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setName(text)}
      />
      <Text>{name ? `My name is ${name}` : null}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
