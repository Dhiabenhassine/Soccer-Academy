import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [teamName, setTeamName] = useState("");
  const route = useRoute();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const playerId = 1;
        const response = await axios.get(
          `http://192.168.1.8:3000/profile/get/${playerId}`
        );
        const pro = response.data;
        setProfile(pro);

        const teamResponse = await axios.get(
          `http://192.168.1.8:3000/team/getTeam/${pro.TeamId}`
        );
        setTeamName(teamResponse.data.teamName);
        console.log(teamResponse.data.teamName);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/user.jpg")}
        style={styles.coverImage}
      />
      <Text style={styles.text}>Name: {profile.playerName}</Text>
      <Text style={styles.text}>Position: {profile.position}</Text>
      <Text style={styles.text}>Team: {teamName}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  coverImage: {
    width: "30%",
    height: 100,
    borderRadius: 60,
  },
});
