import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DonationScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    CPF: "",
    Valor: "",
    endereco: "",
    cidade: "",
    estado: "",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Doação</Text>
          </View>
          <Text style={styles.subtitle}>
            Preencha o formulário com seus dados abaixo
          </Text>
        </View>
      </View>
      {/* Formulário */}
      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Nome Completo</Text>

          <TextInput
            value={form.nome}
            onChangeText={(nome) => setForm({ ...form, nome })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>E-mail</Text>

          <TextInput
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Telefone</Text>

          <TextInput
            value={form.telefone}
            onChangeText={(telefone) => setForm({ ...form, telefone })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>CPF</Text>

          <TextInput
            value={form.CPF}
            onChangeText={(CPF) => setForm({ ...form, CPF })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Valor</Text>

          <TextInput
            value={form.Valor}
            onChangeText={(Valor) => setForm({ ...form, Valor })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Endereço</Text>

          <TextInput
            value={form.endereco}
            onChangeText={(endereco) => setForm({ ...form, endereco })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Cidade</Text>

          <TextInput
            value={form.cidade}
            onChangeText={(cidade) => setForm({ ...form, cidade })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Estado</Text>

          <TextInput
            value={form.estado}
            onChangeText={(estado) => setForm({ ...form, estado })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Enviar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  iconAction: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    color: "#56409e",
    fontWeight: "600",
    marginRight: 135,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    margin: 10,
  },
  input: {
    marginBottom: 26,
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
  form: {
    marginBottom: 24,
    flex: 1,
    paddingHorizontal: 16
  },
  formAction: {
    marginVertical: 16,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56409e",
    borderWidth: 1,
    borderColor: "#56409e",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 26,
    color: "#fff",
  },
});
