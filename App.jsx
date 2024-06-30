import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

import * as Yup from "yup";

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "minimum of 4 characters required")
    .max(16, "maximum of 16 characters required")
    .required("Length is required!"),
});

export default function App() {
  const colorScheme = useColorScheme();
  const backgroundColor =
    colorScheme === "dark" ? styles.bgLight : styles.bgDark;

  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, useNumbers] = useState(false);
  const [symbols, useSymbols] = useState(false);

  const generatePassword = (passwordLength) => {
    //
  };

  const createPassword = (characters, passwordLength) => {
    //
  };

  const resetPasswordState = () => {
    //
  };

  return (
    <View style={[styles.container, [backgroundColor]]}>
      <StatusBar
        backgroundColor="#ddd"
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />

      <Text style={styles.textColor}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bgLight: {
    backgroundColor: "#fff",
  },

  bgDark: {
    backgroundColor: "#000",
  },
  textColor: {
    color: "#fff",
  },
});
