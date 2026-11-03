import { Text, StyleSheet, View } from "react-native";

export default function SignUpPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
