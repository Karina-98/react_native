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


const RegistrationScreen = () => {
    const navigation = useNavigation();
   return( <View style={styles.container}>
      <View style={[styles.box,{top:-100, position:"absolute"}]}>
        <Image style={{width:132, height:120,  borderRadius: 16, backgroundColor:"#F6F6F6"}}  />
      </View>
      <View style={[styles.box,{top:0, right:120, position:"absolute"}]}>
       
          <Image style={{ width: 25, height: 25 }} source={require('../img/add.png')} />
        
      </View>
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
        <TextInput
          style={styles.TextInput}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.registrationBtn}>
        <Text>Зареєстуватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountBtn}>
        <Text>Вже є акаунт? <Button title="Увійти" onPress={() => navigation.navigate("Login")}></Button></Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
   )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 280,
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
  registrationBtn: {
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

})