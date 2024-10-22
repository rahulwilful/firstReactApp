import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';  // Importing Ionicons from react-native-vector-icons
import ProductCard from '@/components/ProductCard ';

export default function Home() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data,setData] = useState([])
  const productName = "sample product"
  const price = 230
  const categoryName = "category"


  const getProducts = async () => {
    const url = "https://dev.api.bexcart.com/api/product/list";

    try {
      let result = await fetch(url);
      result = await result.json();
      let data1 = result.data[0];
      let data2 = result.data[2];
      setData1(data1);
      setData2(data2);
      setData(result.data)
      console.log("result: ", result);
      console.log("data1: ", data1);
      console.log("data2: ", data2);
    } catch (err) {
      console.error("error: ", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.main}>
      {data.length > 0 ? 

            data.map((item,i)=>
              <ProductCard
              key={i}
              productName={item.brand.title}
              imageUrl={item.thumbnailImage.filePath}
              price={item.pricing.price}
              offerPrice={item.pricing.offerPrice}           // Example offer price
              offerPercentage={10} 
              categoryName={item.category.name}
            />
             )
         : null
           
            

          
          
          
       }

       {data2 && (
 <ProductCard
             
              productName={data2.brand.title}
              imageUrl={data2.thumbnailImage.filePath}
              price={data2.pricing.offerPrice}
              offerPrice={200}           // Example offer price
              offerPercentage={10} 
              categoryName={data2.category.name}
            />
       )}
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,  
   
    backgroundColor: "rgb(247, 242, 242)",  
  },

  main: {
    height: "50%",
    padding: 10,
    gap:2,
    flexDirection: "row",
    flexWrap: "wrap",
  
    justifyContent: "space-between",
  },

  card: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: "45%",  
    backgroundColor: "rgb(222, 247, 242)",
    elevation: 3,  // Add shadow for Android
    shadowColor: "#000",  // Add shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },

  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  productDescription: {
    fontSize: 14,
    color: "#666",
  },
});






/*   <ProductCard
              key={i}
              productName={data2.brand.title}
              imageUrl={data2.thumbnailImage.filePath}
              price={data2.pricing.offerPrice}
              offerPrice={200}           // Example offer price
              offerPercentage={10} 
              categoryName={data2.category.name}
            /> */







const UserData = () =>{

  return(

    <View>
    <Text>Name: Rahul </Text>
    <Text>Age : 26 </Text>
    <Text> Email: rahul@gmail.com</Text>
    
  </View>
)
}





/* 

import { View, Text, Button, StyleSheet, Image,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [data1, setData1] = useState(null);  // Update to start with null for better handling
  const [data2, setData2] = useState(null);  // Same for data2

  const getProducts = async () => {
    const url = "https://dev.api.bexcart.com/api/product/list";

    try {
      let result = await fetch(url);
      result = await result.json();
      let data1 = result.data[0];
      let data2 = result.data[2];
      setData1(data1);
      setData2(data2);
      console.log("result: ", result);
      console.log("data1: ", data1);
      console.log("data2: ", data2);
    } catch (err) {
      console.error("error: ", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.main}>
        {data2 != null && (
          <>
            <View style={styles.box1}>
              <Image source={{ uri: data2.thumbnailImage.filePath }} style={styles.image} />
            </View>
            <View style={styles.box1}>
              <Image source={{ uri: data2.thumbnailImage.filePath }} style={styles.image} />
            </View>
            <View style={styles.box1}>
              <Image source={{ uri: data2.thumbnailImage.filePath }} style={styles.image} />
            </View>
            <View style={styles.box1}>
              <Image source={{ uri: data2.thumbnailImage.filePath }} style={styles.image} />
            </View>
            <View style={styles.box1}>
              <Image source={{ uri: data2.thumbnailImage.filePath }} style={styles.image} />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles= StyleSheet.create({
  main:{
    flex:1,
    flex:1,flexDirection:"row",flexWrap:"wrap",
  
    backgroundColor:"rgb(75, 242, 150)"
  },

  box1:{
    
    padding:5,
   
    margin:5,
    borderRadius:10,
    width:"45%",
    height:"40%",
    flexDirection:"row",
    backgroundColor:"rgb(222, 247, 242)"
  },

  innerBox1:{
    flex:1,
    backgroundColor:"blue"
  },
  innerBox2:{
    flex:1,
    backgroundColor:"orange"
  },
  innerBox3:{
    flex:1,
    backgroundColor:"skyblue"
  },

  box2:{
    flex:1,
    padding:5,
    gap:5,
    backgroundColor:"green"
  },
  box3:{
    flex:1,
    backgroundColor:"pink"
  },
  box4:{
    flex:1,
    backgroundColor:"purple"
  },
  image: {
    width: 80,
    height: 70,
  },



})















const UserData = () =>{

  return(

    <View>
    <Text>Name: Rahul </Text>
    <Text>Age : 26 </Text>
    <Text> Email: rahul@gmail.com</Text>
    
  </View>
)
}



*/