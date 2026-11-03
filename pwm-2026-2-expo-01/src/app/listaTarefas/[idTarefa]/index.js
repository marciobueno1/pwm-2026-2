import { StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function PageTarefa() {
  const { idTarefa, filtro } = useLocalSearchParams();
  return (
    <View>
      <Text style={styles.title}>
        Tarefa: {idTarefa} - filtro: {filtro}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
});
