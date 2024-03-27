import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const Premium = () => {
  const [isPremium, setIsPremium] = useState(false);

  const handlePlayMusic = () => {
    if (isPremium) {
      Alert.alert('Música premium sendo reproduzida...');
    } else {
      Alert.alert('Para reproduzir música premium, faça upgrade para a versão premium!');
    }
  };

  const handleUpgradeToPremium = () => {
    Alert.alert('Parabéns! Você agora tem acesso à versão premium!');
    setIsPremium(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tocador de Música</Text>
      <TouchableOpacity onPress={handlePlayMusic} style={styles.button}>
        <Text style={styles.buttonText}>Reproduzir Música</Text>
      </TouchableOpacity>
      {!isPremium && (
        <TouchableOpacity onPress={handleUpgradeToPremium} style={[styles.button, styles.upgradeButton]}>
          <Text style={styles.buttonText}>Upgrade para Premium</Text>
        </TouchableOpacity>
      )}
      {isPremium && (
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Recursos Premium:</Text>
          <Text style={styles.featureItem}>- Reprodução de música offline</Text>
          <Text style={styles.featureItem}>- Sem anúncios durante a reprodução</Text>
          <Text style={styles.featureItem}>- Acesso a playlists exclusivas</Text>
          <Text style={styles.featureItem}>- Qualidade de áudio superior</Text>
          <Text style={styles.featureItem}>- Letras de músicas sincronizadas</Text>
          <Text style={styles.featureItem}>- Acesso ilimitado a todas as músicas</Text>
          <Text style={[styles.sectionTitle, styles.albumsTitle]}>Álbuns:</Text>
          <View style={styles.albumsContainer}>
            <TouchableOpacity style={styles.albumItem}>
              <Image source={require('../assets/album-premium.jpg')} style={styles.albumImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.albumItem}>
              <Image source={require('../assets/musica-premium-um.jpg')} style={styles.albumImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.albumItem}>
              <Image source={require('../assets/favoritos-da-semana.jpg')} style={styles.albumImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.albumItem}>
              <Image source={require('../assets/favoritos-da-semana.jpg')} style={styles.albumImage} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  upgradeButton: {
    backgroundColor: 'orange',
  },
  contentContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  albumsTitle: {
    marginTop: 20,
  },
  albumsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  albumItem: {
    margin: 5,
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default Premium;