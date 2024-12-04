import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#66cc66",
    borderWidth: 3,
    borderRadius: 12,
    backgroundColor: "white",
    paddingHorizontal: 10,
    color: "darkgreen",
    marginBottom: 10,
    elevation: 2,
    margin: 10,
  },

  pokemonImage: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 8,
  },
  pokemonType: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
  },
  pokemonName: {
    fontWeight: "700",
    fontSize: 20, 
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  musicButton: {
    position: "absolute",
    bottom: 20, 
    right: 20,  
    backgroundColor: "#66cc66", 
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffffff",
    letterSpacing: 2,
    textTransform: "uppercase", 
    
  },
});

export default styles;
