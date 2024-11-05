import { Text, View, Image, TextInput} from "react-native";
import { useState, useEffect } from "react";
import {url} from "../utils/utils";
 export default function Index() {

  const [data, setData] = useState();
  
  const fetchInfo = () => { 
    return fetch(url) 
            .then((res) => res.json()) 
            .then((d) => setData(d)) 
    }
    
    useEffect(() => {
      fetchInfo();
    }, [])
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {data ? (
          <>
          <TextInput placeholder="Enter Pokemon Name"></TextInput>

            <Text>{data.name.toUpperCase()}</Text>
            <Image
              source={{ uri: data.sprites.front_default }}
              style={{ width: 100, height: 100 }}
            />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
}
