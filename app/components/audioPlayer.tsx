import React, { useState, useEffect } from "react";
import { Button, View } from "react-native";
import { Audio } from "expo-av"; // Import expo-av for audio handling

const AudioPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Function to load and play music
  const playAudio = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true); // Set the playing state to true
    }
  };

  // Function to stop the audio
  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false); // Set the playing state to false
    }
  };

  // Load the audio file when the component mounts
  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/nationalParkTheme.mp3") 
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
      <Button
        title={isPlaying ? "Stop Music" : "Play Music"} 
        onPress={isPlaying ? stopAudio : playAudio}
      />
    </View> 
  );
};

export default AudioPlayer;
