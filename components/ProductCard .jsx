// ProductCard.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for heart icon

const ProductCard = ({ productName, imageUrl, price, offerPrice, offerPercentage, categoryName }) => {
    const [whishList, setWhishList] = useState(false);

    return (
        <View style={styles.card}>
            {/* Product Image */}
            <Image source={{ uri: imageUrl }} style={styles.image} />

            {/* Product Details */}
            <View style={styles.details}>
                
                {/* Product Name */}
                <Text style={styles.productName}>{productName}</Text>

                {/* Heart Icon */}
                <TouchableOpacity onPress={() => setWhishList(!whishList)}>
                    <Icon name="heart-outline" size={24} color="red" style={whishList === false ? styles.displayBlock : styles.displayNone} />
                    <Icon name="heart" size={24} color="red" style={whishList === true ? styles.displayBlock : styles.displayNone} />
                </TouchableOpacity>
            </View>

            {/* Product Price, Offer Price, and Offer Percentage */}
            <Text style={styles.productDescription}>Price: <Text style={styles.originalPrice}>${price}</Text></Text>
            {offerPrice && offerPercentage ? (
              <View style={styles.offerDetails}>
                  <Text style={styles.offerPrice}>Offer Price: ${offerPrice}</Text>
                  <Text style={styles.offerPercentage}>({offerPercentage}% off)</Text>
              </View>
            ) : null}

            {/* Product Category */}
            <Text style={styles.productDescription}>Category: {categoryName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: "48%",  // Increased to full width to prevent content from going out
    maxWidth: 200,  // Set a max width to control layout and responsiveness
    backgroundColor: "rgb(255, 255, 255)",
    elevation: 7,  // Shadow for Android
    shadowColor: "#000",  // Shadow for iOS
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 150,  // Adjusted image height to create more space in the card
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
    flex: 1,  // Make the name take up the remaining space
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
  originalPrice: {
    textDecorationLine: 'line-through',  // Strike-through for original price
    color: "#999",
  },
  offerDetails: {
    flexDirection: 'row',  // Ensure the offer price and percentage are laid out horizontally
    flexWrap: 'wrap',      // Allow wrapping if the content is too long
    justifyContent: 'flex-start',  // Align items to start
  },
  offerPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#d9534f",  // Highlight offer price
    marginRight: 5,    // Add space between price and percentage
  },
  offerPercentage: {
    fontSize: 14,
    color: "#28a745",  // Green color for percentage
  },
  displayBlock: {
    display: "flex",  // Ensure the icon displays properly
  },
  displayNone: {
    display: "none",  // Hide the other heart icon
  }
});

export default ProductCard;
