import styles from "@/styles";
import { Stack } from "expo-router";
import { Image, View } from "react-native";
export default function RootLayout() {
  const logo = require('../assets/logo.png');

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View>
              <Image
                source={logo} 
                style={styles.logo}
              />
            </View>
          ),
        
        }}
      />
    </Stack>
  );
}
