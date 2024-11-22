import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "lightblue",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
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
    fontSize: 16,  },
    logo: {
      width: 100,
      height: 100,
      marginTop: 50,
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
      fontWeight: 'bold',
      marginBottom: 10, 
      color: '#c85048'
    },
});

export default styles;
