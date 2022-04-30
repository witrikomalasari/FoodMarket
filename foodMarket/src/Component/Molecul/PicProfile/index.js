import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PicProfile = ({image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          {image ? (
            <Image source={image} style={styles.photoContainer} />
          ) : (
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default PicProfile;

const styles = StyleSheet.create({
  photo: {alignItems: 'center', marginBottom: 16},
  borderPhoto: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#8D92A3',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  addPhoto: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
});
