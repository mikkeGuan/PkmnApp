import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { usePokemonState } from "@/utils/customHooks";
import AudioPlayer from "./components/audioPlayer";

import { BASE_URL } from "@/utils/utils";
import { getTypeColor } from "./components/typecolors";

import styles from "@/styles";

export default function Index() {
  const {
    pokemonName,
    setPokemonName,
    data,
    setData,
    loading,
    setLoading,
    triggerRandom,
    setTriggerRandom,
    clickCount,
    setClickCount,
  } = usePokemonState();

  const logo = require("../assets/logo.png");

  // Function to handle image press if pressed 20 times turns to shiny
  const handleImagePress = () => {
    setClickCount((prev) => prev + 1);
  };

  const imageUri =
    clickCount >= 20
      ? data?.sprites?.front_shiny
      : data?.sprites?.front_default;

  // Fetch information based on name or ID
  const fetchInfo = async (nameOrId?: string) => {
    const query = nameOrId || pokemonName.toLowerCase();
    if (!query) return;
    setClickCount(0);
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}${query}`);
      if (!response.ok) throw new Error("Pokémon not found");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a random Pokémon by generating a random ID
  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    await fetchInfo(randomId.toString());
  };

  const primaryType = data?.types?.[0]?.type?.name || "normal";
  const borderColor = getTypeColor(primaryType);

  // Automatically fetch random Pokémon when `triggerRandom` is set to true
  useEffect(() => {
    if (triggerRandom) {
      fetchRandomPokemon();
      setTriggerRandom(false); // Reset trigger
    }
  }, [triggerRandom]); // Effect will re-run when `trigger` changes

  const handleLogoPress = () => {
    setTriggerRandom(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.musicButton}>
        <AudioPlayer />
      </View>

      <LinearGradient colors={["#D5F5E3", "#90EE90", "#00FF7F"]}>
        <Text style={styles.header}>Pokemon Center</Text>
      </LinearGradient>
      <TextInput
        placeholder="Enter Pokémon Name"
        value={pokemonName}
        onChangeText={(text) => setPokemonName(text)}
        style={styles.input}
        onSubmitEditing={() => fetchInfo()}
      />
      <Button title="Search" onPress={() => fetchInfo()} />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {data && !loading ? (
        <>
          <Text style={styles.pokemonName}>
            {data.name.toUpperCase()} #{data.id}{" "}
          </Text>
          {data.types.map((t, index) => (
            <Text
              key={index}
              style={{
                color: getTypeColor(t.type.name),
                fontWeight: "bold",
              }}
            >
              {t.type.name}
            </Text>
          ))}
          <View>
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                source={{ uri: imageUri }}
                style={[styles.pokemonImage, { borderColor }]}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        !loading && <Text>Invalid Pokémon Name</Text>
      )}
    </View>
  );
}
