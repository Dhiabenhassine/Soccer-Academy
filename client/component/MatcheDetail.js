import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const MatcheDetail = () => {
  const [result, setResult] = useState({});
  const route = useRoute();

  useEffect(() => {
    async function fetchMatchDetails() {
      try {
        const { matchId } = route.params;
        const response = await axios.get(
          `http://192.168.1.109:3000/result/get/${matchId}`
        );
        const matchDetails = response.data;

        setResult(matchDetails);

        console.log(`Received data for match ID ${matchId}:`, matchDetails);
      } catch (error) {
        console.error("Error fetching match details:", error);
      }
    }
    fetchMatchDetails();
  }, [route.params]);

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86xayyiwdfqCWE53B-kinaU05Zu9-50pnKQ&usqp=CAU",
      }}
    >
      <View style={styles.content}>
        <Text style={styles.matchTitle}>Match {route.params.matchId}</Text>
        <Text style={styles.matchResult}>
          Winner: {result.winner}
          Home Goals: {result.homeTeamGoals}
          Away Goals: {result.awayTeamGoals}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  matchTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  matchResult: {
    fontSize: 18,
  },
});

export default MatcheDetail;
