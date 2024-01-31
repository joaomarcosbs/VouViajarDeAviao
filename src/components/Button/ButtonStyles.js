import { StyleSheet } from "react-native";
import Colors from "../../../assets/Colors/colors";
import { useFonts } from "expo-font";
//import Poppins from "../../../assets/fonts/Poppins/Poppins-Regular.ttf";

// export const [fontsLoaded] = useFonts({
//   "Poppins-Regular": require("../../../assets/Fonts/Poppins-Regular.ttf"),
// });

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: 40,
    margin: "3%",
    padding: "2%",
    backgroundColor: Colors.lightBlue,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    // fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "white",
  },
  inputs: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
});

export default styles;
