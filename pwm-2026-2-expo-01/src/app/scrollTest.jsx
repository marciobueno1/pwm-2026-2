import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
  PixelRatio,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [nome, onChangeNome] = useState("");
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá, Turma!</Text>
      <ActivityIndicator size="large" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNome}
          value={nome}
          placeholder="Digite seu nome"
        />
        <Button
          title="Confirmar"
          onPress={() => Alert.alert("Info", "Olá, " + nome)}
        />
      </View>
      <Pressable onPress={() => Alert.alert("Info", "Olá, " + nome)}>
        <Image source={require("@/assets/images/subscribe-youtube.jpg")} />
      </Pressable>
      <Text style={styles.title}>Olá, Turma!</Text>
      <Text style={styles.title}>
        Current Pixel Ratio is: {PixelRatio.get()}
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNome}
          value={nome}
          placeholder="Digite seu nome"
        />
        <Button
          title="Confirmar"
          onPress={() => Alert.alert("Info", "Olá, " + nome)}
        />
      </View>
      <Pressable onPress={() => Alert.alert("Info", "Olá, " + nome)}>
        <Image source={require("@/assets/images/subscribe-youtube.jpg")} />
      </Pressable>
      <Text style={styles.title}>Olá, Turma!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNome}
          value={nome}
          placeholder="Digite seu nome"
        />
        <Button
          title="Confirmar"
          onPress={() => Alert.alert("Info", "Olá, " + nome)}
        />
      </View>
      <Pressable onPress={() => Alert.alert("Info", "Olá, " + nome)}>
        <Image source={require("@/assets/images/subscribe-youtube.jpg")} />
      </Pressable>
      <Text style={styles.title}>Olá, Turma!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNome}
          value={nome}
          placeholder="Digite seu nome"
        />
        <Button
          title="Confirmar"
          onPress={() => Alert.alert("Info", "Olá, " + nome)}
        />
      </View>
      <Pressable onPress={() => Alert.alert("Info", "Olá, " + nome)}>
        <Image source={require("@/assets/images/subscribe-youtube.jpg")} />
      </Pressable>
      <Text style={styles.title}>Olá, Turma!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNome}
          value={nome}
          placeholder="Digite seu nome"
        />
        <Button
          title="Confirmar"
          onPress={() => Alert.alert("Info", "Olá, " + nome)}
        />
      </View>
      <Pressable onPress={() => Alert.alert("Info", "Olá, " + nome)}>
        <Image source={require("@/assets/images/subscribe-youtube.jpg")} />
      </Pressable>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "yellow",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    paddingBottom: 20,
  },
  title: {
    fontSize: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputView: {
    flexDirection: "row",
  },
});
