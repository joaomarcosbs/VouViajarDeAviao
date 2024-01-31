import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./SearchFormStyles";
import Button from "../Button/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchForm = () => {
  const [origin, setOrigin] = useState("");
  const [destiny, setDestiny] = useState("");
  const [departure, setDeparture] = useState(new Date());
  const [arrival, setArrival] = useState(new Date());

  const onSearchPress = () => {
    console.log(
      "--> You searched flights from ",
      origin,
      " to ",
      destiny,
      ". Your trip date is from ",
      departure,
      " until ",
      arrival
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Encontre os melhores {"\n"} preços para sua viagem!
      </Text>
      <TextInput
        style={styles.inputs}
        placeholder="Origem"
        onChangeText={setOrigin}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Destino"
        onChangeText={setDestiny}
      />
      <View style={styles.dateContainer}>
        <FontAwesome5
          name="plane-departure"
          size={18}
          color="black"
        />
        <DateTimePicker
          value={departure}
          onChange={(event, date) => setDeparture(date || new Date())}
          minimumDate={new Date()}
        />
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 40,
            color: "lightgray",
            fontWeight: "200",
            marginBottom: 5,
          }}
        >
          |
        </Text>
        <FontAwesome5
          name="plane-arrival"
          size={18}
          color="black"
        />
        <DateTimePicker
          value={arrival}
          onChange={(event, date) => setArrival(date || departure)}
          minimumDate={departure}
        />
      </View>

      <Button
        title={"Procurar"}
        function={onSearchPress}
      />
    </View>
  );
};

export default SearchForm;
