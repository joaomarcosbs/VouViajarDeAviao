import { StyleSheet } from "react-native";
import Colors from "../Colors/colors";
import image from "../../assets/clouds.png";

const general = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    imageBackground: image,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  safeAreaContainer: {
    // flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    // zIndex: 99,
    //justifyContent: "center",
    // backgroundColor: "yellow",
  },
  logoContainer: {
    width: "100%",
    height: "13%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "yellow",
  },
  logo: {
    width: "15%",
    height: "70%",
    objectFit: "contain",
    // //backgroundColor: "black",
    // marginTop: "50%",
  },
  title: {
    fontSize: 27,
    fontWeight: "800",
    marginLeft: "4%",
  },
});

export default general;
