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
    }
});

export default styles;
