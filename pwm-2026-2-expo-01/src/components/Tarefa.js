import { Button, View, Switch, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Tarefa({ tarefa, onUpdate, onDelete }) {
  return (
    <View style={styles.container}>
      <Link href={`/listaTarefas/${tarefa.objectId}?filtro=TODAS`}>
        {tarefa.descricao}
      </Link>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={tarefa.concluida ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() =>
          onUpdate({ ...tarefa, concluida: !tarefa.concluida })
        }
        value={tarefa.concluida}
      />
      <Button onPress={() => onDelete(tarefa)} title="🗑" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
