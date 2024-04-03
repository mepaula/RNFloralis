import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { Audio } from 'expo-av';

const colors = {
  primary: '#ff3a3a',
  secondary: '#0d0d0d',
  white: '#fff',
};

const internationalAlbums = [
  { title: 'Justin Bieber', image: require('../assets/album-justin.jpg'), audioUrl: 'https://www.youtube.com/watch?v=o3PFBj1hG_M' },
  { title: 'Ariana Grande', image: require('../assets/album-arianagrande.webp'), audioUrl: 'https://www.youtube.com/watch?v=IeYWccyvA8A' },
  { title: 'Billie Eilish', image: require('../assets/album-billie.jpg'), audioUrl: 'https://www.youtube.com/watch?v=LNDx8qKjs6s' },
  { title: 'Ed Sheeran', image: require( '../assets/album-ed.jpg' ), audioUrl: 'https://www.youtube.com/watch?v=Ehoe35hTbuY' },
  { title: 'Lady Gaga', image: require( '../assets/album-lady.png' ), audioUrl: 'https://www.youtube.com/watch?v=WwDUh-X3u74' },
  { title: 'Bruno Mars', image: require( '../assets/album-brunomars.jpg' ), audioUrl: 'https://www.youtube.com/watch?v=DneC8YbqmXA' },
  { title: 'Olivia Rodrigo', image: require( '../assets/album-olivia.jpg' ), audioUrl: 'https://www.youtube.com/watch?v=-O9Nyw7DMgA' },
  { title: 'Shawn Mendes', image: require( '../assets/album-maroon.jpg' ), audioUrl: 'https://www.youtube.com/watch?v=5PYerZ_Yuwk' },
  { title: 'Michael Jackson', image: require( '../assets/album-shawn.jpg' ), audioUrl: 'https://www.youtube.com/watch?v=xpR1a6ZfMq8' },
  { title: 'Black Eyed Peas', image: require( '../assets/album-BlackEyedPeas.jpg' ), audioUrl: 'https://www.youtube.com/watch?v=G2eWIorAr-U' },
  { title: 'Snoop Dogg', image: require( '../assets/album-snoopdog.jpg' ), audioUrl: 'https://www.youtube.com/watch?v=kNNeg9BuP4Y' },
];

const nationalAlbums = [
  { title: 'Anitta', image: require('../assets/anitta-capa.webp'), audioUrl: 'https://www.youtube.com/watch?v=sU9OPgzQYfU' },
  { title: 'Caetano Veloso', image: require('../assets/album-caetanoveloso.jpeg'), audioUrl: 'https://www.youtube.com/watch?v=Rc2zdjQU7RA' },
  { title: 'Cazuza', image: require('../assets/album-cazuza.jpg'), audioUrl: 'https://www.youtube.com/watch?v=0o78cMWxynM' },
  { title: 'Rita Lee', image: require('../assets/album-ritalee.jpg'), audioUrl: 'https://www.youtube.com/watch?v=sU9OPgzQYfU' },
  { title: 'Gloria Groove', image: require('../assets/album-gloriagroove.webp'), audioUrl: 'https://www.youtube.com/watch?v=CjUFzaGWJkE' },
  { title: 'Mc Daniel', image: require('../assets/album-mcdaniel.jpg'), audioUrl: 'https://www.youtube.com/watch?v=lsdi6aIQHAU' },
  { title: 'Luisa Sonza', image: require('../assets/album-luisasonza.jpg'), audioUrl: 'https://www.youtube.com/watch?v=Y4ODHfEYyhM' },
  { title: 'Ludmilla', image: require('../assets/album-ludmilla.png'), audioUrl: 'https://www.youtube.com/watch?v=jOp-pFptz3Q' },
  { title: 'Veigh', image: require('../assets/album-veigh.jpg'), audioUrl: 'https://www.youtube.com/watch?v=zQpKX9uycvI' },
  { title: 'KayBlack', image: require('../assets/album-kayblack.webp'), audioUrl: 'https://www.youtube.com/watch?v=r_VpVDtXzHY' },
  { title: 'Matuê', image: require('../assets/album-matue.jpg'), audioUrl: 'https://www.youtube.com/watch?v=3eMY0Vd-RAc' },
  { title: 'Teto', image: require('../assets/album-teto.jpg'), audioUrl: 'https://www.youtube.com/watch?v=KJ16bmo3v_E' },
];

const Premium = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [sound, setSound] = useState(null);

  const playSound = async (audioUrl) => {
    if (!sound) {
      const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
      setSound(sound);
      await sound.playAsync();
    } else {
      await sound.unloadAsync();
      setSound(null);
    }
  };

  const handlePlayMusic = async (audioUrl) => {
    if (isPremium) {
      playSound(audioUrl);
    } else {
      Alert.alert('Faça upgrade para acessar músicas premium!');
    }
  };

  const handleUpgradeToPremium = () => {
    Alert.alert('Parabéns! Agora você tem acesso à versão premium!');
    setIsPremium(true);
  };

  const handleCloseModal = () => {
    if (sound) {
      sound.unloadAsync();
    }
    setSelectedAlbum(null);
  };

  const handleAlbumPress = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <View style={styles.container}>      
      {!isPremium && (
        <TouchableOpacity onPress={handleUpgradeToPremium} style={[styles.button, styles.upgradeButton]}>
          <Text style={styles.buttonText}>Upgrade para Premium</Text>
        </TouchableOpacity>
      )}

      {isPremium && (
        <ScrollView contentContainerStyle={styles.albumContainer}>
          <Text style={styles.pulseTitle}>ÁLBUNS INTERNACIONAIS</Text>
          <View style={styles.albumRow}>
            {internationalAlbums.map((album, index) => (
              <TouchableOpacity key={index} onPress={() => handleAlbumPress(album)} style={styles.albumItem}>
                <Image source={album.image} style={styles.albumImage} />
                <Text style={styles.albumText}>{album.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.pulseTitle}>ÁLBUNS NACIONAIS</Text>
          <View style={styles.albumRow}>
            {nationalAlbums.map((album, index) => (
              <TouchableOpacity key={index} onPress={() => handleAlbumPress(album)} style={styles.albumItem}>
                <Image source={album.image} style={styles.albumImage} />
                <Text style={styles.albumText}>{album.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <Modal visible={selectedAlbum !== null} animationType="slide" onRequestClose={handleCloseModal}>
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedAlbum?.title}</Text>
            <Image source={selectedAlbum?.image} style={styles.modalImage} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  upgradeButton: {
    backgroundColor: colors.primary,
  },
  albumContainer: {
    paddingHorizontal: 10,
  },
  albumRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  albumItem: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.secondary,
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  pulseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: colors.white,
  },
  albumText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.white,
  },
  modalImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Premium;


