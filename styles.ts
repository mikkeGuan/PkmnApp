import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    backgroundColor: "lightgreen",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    borderColor: "gray",
    borderWidth: 3,
  },
  pokemonType:{
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
},
  pokemonName: {
    fontWeight: "bold",
    fontSize: 16, 
   },
    logo: {
      width: 80,
      height: 80,
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
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
  
});

export default styles;
