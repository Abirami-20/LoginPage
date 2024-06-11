import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./assets/screens/Login";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
    colors={[ '#330066','#b57edc']}
    style={styles.background}>
      <View style={styles.container}>
        <Login />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    
    opacity: 50,
    height: "100%",
  },
  background:{
    flex:1
  }
});
