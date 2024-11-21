import styles from "@/styles";
import { Stack, useRouter } from "expo-router";
import { Image, View, TouchableOpacity } from "react-native";

export default function RootLayout() {
  const logo = require("../assets/logo.png");
  const router = useRouter();

  const handleLogoPress = () => {
    router.push({
      pathname: "/",
      params: { fetchRandom: "true" },  // Adds fetchRandom=true to the URL
    });
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View>
              <TouchableOpacity onPress={handleLogoPress}>
                <Image source={logo} style={styles.logo} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
