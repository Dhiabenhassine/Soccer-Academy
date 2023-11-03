import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await axios.get("http://192.168.1.8:3000/team/");
        const allTeam = response.data;
        const sortedTeam = allTeam.sort((a, b) => b.points - a.points);
        setTeam(sortedTeam);
      } catch (error) {
        console.log(error, "error fetching team");
      }
    }
    fetchTeam();
  }, []);

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/sergio01.jpg")}
      resizeMode="cover"
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Team Standings</Text>
        {team.map((member, index) => (
          <View key={index} style={styles.teamCard}>
            <Text style={styles.teamName}>Team : {member.teamName}</Text>
            <View style={styles.teamStats}>
              <Text>Win : {member.totalWins}</Text>
              <Text>Lose : {member.totalLosses}</Text>
              <Text>Draws : {member.totalDraws}</Text>
              <Text>
                G : {member.goalsFor} : {member.goalsAgainst}
              </Text>
              <Text>Points : {member.points}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
  },
  image: {
    height: "100%",
    width: "100%",
    zIndex: 0,
  },
  header: {
    top: 30,
    fontSize: 28,
    color: "white",
    marginBottom: 20,
  },
  teamCard: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    top: 30,
  },
  teamName: {
    fontSize: 18,
    color: "white",
    marginBottom: 8,
  },
  teamStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Team;
