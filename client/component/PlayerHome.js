import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

const PlayerHome = () => {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState({});
  const [selectedDay, setSelectedDay] = useState('All'); 

  useEffect(() => {
    async function fetchMatches() {
      try {
        const matchResponse = await axios.get('http://192.168.139.140:3000/match/');
        const teamResponse = await axios.get('http://192.168.139.140:3000/team/');

        setMatches(matchResponse.data.matches);
        const teamname = {};
        teamResponse.data.forEach((team) => {
          teamname[team.id] = team;
        });
        setTeams(teamname);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMatches();
  }, []);
  const filterMatches = useCallback(() => {
    if (selectedDay === 'All') {
      return matches;
    }
    return matches.filter((match) => {
      const matchDate = new Date(match.dateAndTime);
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = daysOfWeek[matchDate.getDay()];
  
      return dayOfWeek === selectedDay;
    });
  }, [matches, selectedDay]);
  
  
  

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86xayyiwdfqCWE53B-kinaU05Zu9-50pnKQ&usqp=CAU',
      }}
    >
      <View style={styles.all}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Player Home</Text>
          <Picker
  selectedValue={selectedDay}
  onValueChange={(itemValue) => setSelectedDay(itemValue)}
  style={styles.picker}
>
  <Picker.Item label="All" value="All" />
  <Picker.Item label="Monday" value="Monday" />
  <Picker.Item label="Tuesday" value="Tuesday" />
  <Picker.Item label="Wednesday" value="Wednesday" /> 
  <Picker.Item label="Thursday" value="Thursday" />    
  <Picker.Item label="Friday" value="Friday" />       
  <Picker.Item label="Saturday" value="Saturday" />   
  <Picker.Item label="Sunday" value="Sunday" />        
</Picker>
        </View>
        <FlatList
          data={filterMatches()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.matchCard}
              onPress={() => {
                // Handle card click, e.g., navigate to match details.
              }}
            >
              <Text style={styles.matchId}>Match {item.id}</Text>
              <Text style={styles.dateAndTime}>Date {item.dateAndTime}</Text>
              <Text style={styles.teamName}>
                Home Team: {teams[item.homeTeamId] ? teams[item.homeTeamId].teamName : 'Team Not Found'}
              </Text>
              <Text style={styles.teamName}>
                Away Team: {teams[item.awayTeamId] ? teams[item.awayTeamId].teamName : 'Team Not Found'}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default PlayerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  all: {
    top: 70,
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: 200,
    color: 'white',
  },
  matchCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    padding: 20,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  matchId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateAndTime: {
    fontSize: 16,
  },
  teamName: {
    fontSize: 16,
  },
});
