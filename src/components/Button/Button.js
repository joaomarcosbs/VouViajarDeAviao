import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./ButtonStyles";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.function}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
