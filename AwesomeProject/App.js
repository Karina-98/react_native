import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Реєстрація</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="Логін" />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Адреса електронної пошти"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="Пароль" placeholderTextColor="#BDBDBD" secureTextEntry={true} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    borderRadius: 1,
    backgroundColor: "#E8E8E8",
    width: "80%",
    height: 50,
    marginBottom: 20,
    padding: 10,
  },
  TextInput: {},
  Text: {
    marginBottom: 20,
    // fontFamily: Roboto,
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
  },
});
