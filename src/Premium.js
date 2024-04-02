import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView, Image } from 'react-native';


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
    Alert.alert('Parabéns! Agora você tem acesso à versão premium!');
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
        <ScrollView contentContainerStyle={styles.albumContainer}>
          <Text style={styles.pulseTitle}>ALBUNS INTERNACIONAIS</Text>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-justin.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Justin Bieber</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-arianagrande.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Ariana Grande</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-adele.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Adele</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-billie.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Billie Eilish</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-ed.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Ed Sheron</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-lady.png')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Lady Gaga</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-michaeljackson.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Michael Jackson</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-starboy.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album StayBoy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-brunomars.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Bruno Mars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-olivia.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Olivia Rodrigo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-jbalvin.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album J Balvin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-imaginedragons.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Imagina Dragons</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-maroon.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Maroon 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-shawn.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Shawn Mendes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-BlackEyedPeas.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Black Eyed Peas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-snoopdog.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Snoop Dog</Text>
          </TouchableOpacity>

          <Text style={styles.pulseTitle}>ALBUNS NACIONAIS</Text>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/anitta-capa.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Anitta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-caetanoveloso.jpeg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Caetano Veloso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-cazuza.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Cazuza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-ritalee.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Rita Lee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-gilbertogil.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Gilberto Gil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-gloriagroove.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Gloria Groove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-mcdaniel.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Mc Daniel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-igao.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Igão (PodPah)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-claudinhabuchecha.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Claudinho & Buchecha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-luisasonza.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Luisa Sonza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-ludmilla.png')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Ludmilla</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-veigh.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Veigh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-maroon.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Maroon 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-kayblack.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album KayBlack</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-matue.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Matuê</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-teto.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Teto</Text>
          </TouchableOpacity>

          <Text style={styles.pulseTitle}>ALBUNS ASIÁTICAS</Text>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-jimin.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Jimin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-jungkook.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album JungKook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-lisa.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Lisa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-bts.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album BTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-blackpink.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album BlackPink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-minoZico.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Mino Zico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-asiatico.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Kim Tae-rae</Text>
          </TouchableOpacity>

          <Text style={styles.pulseTitle}>ALBUNS AFRICANOS</Text>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-rema.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Rema</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-ayrastarr.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Ayra Starr</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-shattawale.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Shatta Wale</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-shomadjozi.jpg')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album Fally Ipupa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album-FallyIpupa.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album BlackPink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={require('../assets/album- OumouSangaré.webp')} style={styles.albumImage} />
            <Text style={styles.albumText}>Album  Oumou Sangaré</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    olor: 'black'
  },
  upgradeButton: {
    backgroundColor: 'white',
  },
  albumContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  albumItem: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  pulseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  albumText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Premium;