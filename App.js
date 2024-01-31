import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, SafeAreaView, View, Image } from "react-native";
import SearchForm from "./src/components/SearchForm/SearchForm";
import general from "./assets/StyleSheet/general";
import image from "./assets/clouds.png";

export default function App() {
  return (
    <View style={general.container}>
      <ImageBackground
        source={image}
        resizeMode="repeat"
        style={general.background}
      >
        <SafeAreaView style={general.safeAreaContainer}>
          <View style={general.logoContainer}>
            <Image
              style={general.logo}
              source={require("./assets/Icons/logo.png")}
            />
            <Text style={general.title}>GOLDEN TICKET</Text>
          </View>

          <SearchForm />
          <StatusBar style="auto" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
