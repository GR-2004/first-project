import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

const API_KEY = '6dd2e23bd7a1475c84354112250204';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

// Function to fetch weather data based on city name (q)
const getWeatherData = async city => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        key: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

const ProfileScreen = () => {
    //using react usequery
    const queryClient = useQueryClient();
      const {data: city = "delhi"} = useQuery({
            queryKey: ['location'],
            queryFn: () => queryClient.getQueryData(["location"]) || "delhi",
            staleTime: Infinity,
          });
        
//   // Function to handle fetching weather data when button is clicked
//   const handleFetchWeather = () => {
    //     refetch();
    //   };
    
    //using useMutation

    const {data:weatherData, mutate, isLoading, error} = useMutation({
        mutationFn: getWeatherData,
        onSuccess: (data) => {
            queryClient.setQueryData(["location"], city);
        }
    })
    
    
  useEffect(() => {
    mutate(city);
  }, []);

  const handleFetchWeather = () => {
    mutate(city);
  };

  const handleCityChange = newCity => {
    queryClient.setQueryData(["location"], newCity);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) {
    console.error('Error fetching weather data:', error);
    return <Text>Error fetching weather data</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>

      {/* City input */}
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={handleCityChange}
      />

      {/* Button to fetch weather data */}
      <Button title="Get Weather" onPress={handleFetchWeather} />

      {/* Displaying Weather Data */}
      {weatherData && weatherData.location && weatherData.current && (
        <View style={styles.weatherDataContainer}>
          <Text>{weatherData.location.name}</Text>
          <Text>{weatherData.current.temp_c}°C</Text>
          <Text>{weatherData.current.condition.text}</Text>
          <Text>{weatherData.location.country}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  weatherDataContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 2,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
  },
});
