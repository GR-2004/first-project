import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const SettingScreen = () => {
    const queryClient = useQueryClient();
    const [newLocation, setNewLocation] = useState(queryClient.getQueryData(["location"] || "delhi"));

    const {data: location} = useQuery({
        queryKey: ["location"],
        queryFn: () => null,
        staleTime: Infinity,
    })

    const {mutate, isLoading, error} = useMutation({
        mutationFn: async (newLocation) => newLocation,
        onSuccess: (data) => {
            queryClient.setQueryData(["location"], data);
        }
    })

    const handleCityChange = (newLocation) => {
        setNewLocation(newLocation)
    }

    const handlePress = () => {
        mutate(newLocation);
    }
  return (
    <View>
      <Text>SettingScreen</Text>
      <Text>current searched weather location is: {location || "NA"}</Text>
      <TextInput placeholder='enter new location' value={newLocation} onChangeText={handleCityChange} />
      <Button title='save' onPress={handlePress} />
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})