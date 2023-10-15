import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const roleOptions = ['player', 'parent'];

  const handleSubmit = async () => {

    try {
      if (!name || !email || !password || !selectedRole) {
        Alert.alert('Please fill in all required fields');
        return;
      }

      setLoading(true);

      const response = await axios.post('http://192.168.139.140:3000/auth/signup', {
        name,
        email,
        password,
        role: selectedRole,
      });

      if (response) {
        console.log('Registration successful', response.data);
        navigation.navigate('SignIn');
      } else {
        console.log('Registration failed');
        Alert.alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86xayyiwdfqCWE53B-kinaU05Zu9-50pnKQ&usqp=CAU',
      }}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Enter your details below</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="white"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
        />
        <SelectDropdown
          data={roleOptions}
          onSelect={(selectedItem) => setSelectedRole(selectedItem)}
          buttonSelection={(selectedItem) => selectedItem}
          rowSelection={(item) => item}
          defaultButton="Choose Player or Parent"
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={() => (
            <Text style={styles.dropdownIcon}>▼</Text>
          )}
          dropdownStyle={styles.dropdownContainer}
          dropdownTextStyle={styles.dropdownText}
          dropdownTextHighlightStyle={{ color: 'white' }}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.linkText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'red',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  linkButton: {
    marginBottom: 20,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  dropdownButton: {
    borderColor: 'white',
  },
  dropdownButtonText: {
    color: 'white',
  },
  dropdownIcon: {
    color: 'white',
  },
  dropdownContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  dropdownText: {
    color: 'white',
  },
});

export default SignUp;
