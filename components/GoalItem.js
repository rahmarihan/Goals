import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})} 
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    width: "80%",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    
  },
  goalText: {
    color: "white",
    padding: 8,
    
  },
});
