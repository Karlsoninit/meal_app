import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CaetcoriesMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Caetcories Meal Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CaetcoriesMealScreen;
