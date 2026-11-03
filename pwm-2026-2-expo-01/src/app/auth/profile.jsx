import { Text, StyleSheet, View } from "react-native";

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    fontSize: 40,
  },
});
