import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      onSkip={() => navigation.navigate("SignIn")}
      onDone={() => navigation.navigate("SignUp")}
      pages={[
        {
          image: (
            <ImageBackground
              style={styles.image}
              source={require("../assets/sergio01.jpg")}
              resizeMode="cover"
            >
              <Text style={[styles.title, { color: "black" }]}>
                Welcome to my Academy
              </Text>
            </ImageBackground>
          ),
          subtitle: "Your subtitle text here",
          title: "Your title text here",
        },
        {
          backgroundColor: "dimgray",
          image: (
            <ImageBackground
              style={styles.image}
              source={require("../assets/sergio02.jpg")}
            >
              <Text style={[styles.members, { color: "black" }]}>
                Welcome Members
              </Text>
            </ImageBackground>
          ),
          subtitle: "Your subtitle text here",
          title: "Your title text here",
          backgroundColor: "teal",
        },
        {
          backgroundColor: "teal",
          image: (
            <ImageBackground
              style={styles.image}
              source={require("../assets/sergio03.jpg")}
            >
              <Text style={[styles.coaches, { color: "black" }]}>
                Welcome Parents
              </Text>
            </ImageBackground>
          ),
          subtitle: "Your subtitle text here",
          title: "Your title text here",
          backgroundColor: "teal",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    zIndex: 0,
  },
  title: {
    fontSize: 30,
    color: "black",
    position: "absolute",
    top: "75%",
    zIndex: 1,
    fontWeight: "bold",
    justifyContent: "center",
  },
  coaches: {
    fontSize: 30,
    color: "black",
    position: "absolute",
    top: "75%",
    left: 79,
    fontWeight: "bold",
    textAlign: "center",
  },
  members: {
    fontSize: 30,
    color: "black",
    position: "absolute",
    top: "75%",
    left: 79,
    zIndex: 1,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
