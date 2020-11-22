import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "99" },
    { name: "Friend #2", age: "82" },
    { name: "Friend #3", age: "77" },
    { name: "Friend #4", age: "12" },
    { name: "Friend #5", age: "33" },
    { name: "Friend #6", age: "19" },
    { name: "Friend #7", age: "101" },
    { name: "Friend #8", age: "5" },
    { name: "Friend #9", age: "55" },
  ];

  return (
    <FlatList
      // style={}
      contentContainerStyle={styles.listStyle}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textStyle: {
    marginVertical: 1,
    borderWidth: 2,
    borderColor: "black",
    width: 300,
    textAlign: "center",
  },
});

export default ListScreen;
