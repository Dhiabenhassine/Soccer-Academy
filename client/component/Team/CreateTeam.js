import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const navigation = useNavigation();
  const handleCreateTeam = async () => {
    try {
      const response = await axios.post("http://192.168.1.8:3000/team/", {
        teamName: teamName,
      });

      if (response.status === 200) {
        console.log("Team created successfully");
        alert("Team created successfully");
        navigation.goBack("Team");
      } else {
        console.error("Failed to create a team");
      }
    } catch (error) {
      console.error("Error creating a team:", error);
    }
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/sergio02.jpg")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create a New Team</Text>
        <TextInput
          style={styles.input}
          placeholder="Team Name"
          value={teamName}
          onChangeText={(text) => setTeamName(text)}
        />
        <Button title="Create Team" onPress={handleCreateTeam} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    height: "100%",
    width: "100%",
    zIndex: 0,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    padding: 8,
  },
});

export default CreateTeam;
