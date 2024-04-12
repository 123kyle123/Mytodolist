import React from 'react';
import { Image, View, StyleSheet, Text } from "react-native";

const SelectedImage = ({ imageUri, setImageUri }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.label}>Kyle L. Ratilla</Text>
        <Text style={styles.label}>20211138</Text>
        <Text style={styles.label}>IT35B</Text>
        <Text style={styles.label}>APPLICATION DEV. EMERGING TECHNOLOGIES</Text>
        <Text style={styles.label}>App Dev</Text>
        <Text style={styles.label}>2023-2024</Text>
      </View>
      <View style={styles.column}>
        <View style={styles.imageContainer}>
          <Image source={imageUri ? { uri: imageUri } : require('../assets/kyle.jpg')} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#D9EDBF',
    borderRadius: 10,
    paddingVertical: 10,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 150,
  },
});

export default SelectedImage;