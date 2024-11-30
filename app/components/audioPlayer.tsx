import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome5";

const AudioPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Function to load and play music
  const playAudio = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  // Function to pause the audio
  const pauseAudio = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  // Load the audio file when the component mounts
  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/nationalParkTheme.mp3"),
        { isLooping: true }
      );
      setSound(sound);
    };

    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={isPlaying ? pauseAudio : playAudio}>
        <Icon name={isPlaying ? "stop-circle" : "play-circle"} size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default AudioPlayer;
