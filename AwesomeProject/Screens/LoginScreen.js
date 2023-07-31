import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button
} from "react-native";


const LoginScreen = () => {
     const navigation = useNavigation();
    return (
        <View style={styles.container}>
      <Text style={styles.Text}>Увійти</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Адреса електронної пошти"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={true}
        />
        <View style={[styles.box,{right:0, top:7,position:"absolute"}]}>
          <Button title="Показати"  ></Button>
          </View>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountBtn}>
        <Text>Немає акаунту? <Button
        title="Зареєструватися"
        onPress={() => navigation.navigate("Registration")}
      />  </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 350,
    borderRadius: 25,
    
  },
 
  inputView: {
    borderRadius: 1,
    backgroundColor: "#E8E8E8",
    width: 343,
    height: 50,
    marginBottom: 20,
    padding: 10,
    position: "relative"
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
  loginBtn: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    width: 343,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  accountBtn: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    color: "#1B4371",
  },
});
