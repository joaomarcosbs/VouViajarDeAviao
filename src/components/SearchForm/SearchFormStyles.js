import { StyleSheet } from "react-native";
import Colors from "../../../assets/Colors/colors";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: "1%",
    padding: "2%",
    backgroundColor: "white",
    //alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.33,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    textAlign: "center",
    fontFamily: "",
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
    textTransform: "uppercase",
    // color: Colors.lightBlue,
  },
  inputs: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  dateContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
    //backgroundColor: "yellow",
  },
});

export default styles;
