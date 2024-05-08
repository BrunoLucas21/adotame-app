import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={styles.hero}>
        <Image
          source={require("../assets/images/login.png")}
          style={styles.heroImg}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Bem-vindo de volta ao{" "}
            <Text style={{ color: "#816bcf" }}>Adota.me</Text>
          </Text>
          <Text style={styles.subtitle}>Entre com sua conta!</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>E-mail</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
              style={styles.inputControl}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Senha</Text>

            <TextInput
              secureTextEntry
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
              style={styles.inputControl}
            />
          </View>

          <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.forgotPassword}>Esqueci a senha?</Text>
          </TouchableOpacity>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <View style={styles.btnLogin}>
                <Text style={styles.btnLoginText}>Entrar</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.formActionRegister}>
            <Text style={styles.textRegister}>Ainda não tem conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <View style={styles.btnRegister}>
                <Text style={styles.btnRegisterText}>Registrar-se</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.iconText}>Ou</Text>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => {
              // Google
            }}>
              <View style={styles.iconBtn}>
                <Image 
                  source={require("../assets/icons/google.png")}
                  style={{ height: 40, width: 40 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              // Facebook
            }}>
              <View style={styles.iconBtn}>
                <Image 
                  source={require("../assets/icons/facebook.png")}
                  style={{ height: 40, width: 40 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              // Apple
            }}>
              <View style={styles.iconBtn}>
                <Image 
                  source={require("../assets/icons/apple.png")}
                  style={{ height: 40, width: 40 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  hero: {
    padding: 16,
    borderRadius: 16,
    margin: 12,
  },
  heroImg: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  header: {
    marginVertical: 16,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#473f66",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  input: {
    marginBottom: 24,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingLeft: 110,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    color: "#222",
    fontWeight: "500",
  },
  inputLabel: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 9,
    width: 110,
    lineHeight: 44,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: "500",
    color: "#c0c0c0",
  },
  forgotPassword: {
    color: '#929292',
    textAlign: 'right',
    justifyContent: 'flex-end',
    textDecorationLine: 'underline',
    bottom: 15
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24
  },
  btnLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#56409e",
    borderWidth: 1,
    borderColor: "#56409e",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnLoginText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    color: '#fff'
  },
  formActionRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textRegister: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    color: "#929292",
    right: 5
  },
  btnRegisterText: {
    fontSize: 18,
    color: "#56409e",
    fontWeight: '600',
    textDecorationLine: 'underline'
  },
  iconAction: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: "#929292",
    paddingVertical: 12
  },
  iconBtn: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 12
  },
});
