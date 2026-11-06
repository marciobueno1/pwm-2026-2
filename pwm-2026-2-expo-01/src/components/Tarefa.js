import { Button, View, Switch, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function Tarefa({ tarefa, onUpdate, onDelete }) {
  return (
    <View style={styles.container}>
      <Link
        href={`/listaTarefas/${tarefa.objectId}?filtro=TODAS`}
        style={styles.link}
      >
        <Text
          style={[
            styles.text,
            tarefa.concluida && styles.textCompleted,
          ]}
          numberOfLines={2}
        >
          {tarefa.descricao}
        </Text>
      </Link>
      <View style={styles.actions}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={tarefa.concluida ? "#007AFF" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            onUpdate({ ...tarefa, concluida: !tarefa.concluida })
          }
          value={tarefa.concluida}
        />
        <Button onPress={() => onDelete(tarefa)} title="🗑" color="#ff3b30" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: "#e5e5ea",
  },
  link: {
    flex: 1,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#1c1c1e",
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "#8e8e93",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
