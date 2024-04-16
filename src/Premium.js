import React from 'react';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const MusicItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(item.title)}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    {item.artist && <Text style={styles.artist}>{item.artist}</Text>}
    <TouchableOpacity
      style={styles.playButton}
      onPress={() => onPress(item.title)}
      accessibilityLabel={`Reproduzir ${item.title}`}
    >
      <Text style={styles.playButtonText}>▶</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const Premium = () => {
  const navigation = useNavigation(); 

  const playlists = [
    { title: 'Justin Bieber', image: require('../assets/album-justin.jpg') },
    { title: 'Billie Eilish', image: require('../assets/album-billie.jpg') },
    { title: 'Ed Sheeran', image: require('../assets/album-ed.jpg') },
    { title: 'Lady Gaga', image: require('../assets/album-lady.png') },
    { title: 'Bruno Mars', image: require('../assets/album-brunomars.jpg') },
    { title: 'Olivia Rodrigo', image: require('../assets/album-olivia.jpg') },
    { title: 'Shawn Mendes', image: require('../assets/album-maroon.jpg') },
    { title: 'Michael Jackson', image: require('../assets/album-shawn.jpg') },
    { title: 'Black Eyed Peas', image: require('../assets/album-BlackEyedPeas.jpg') },
    { title: 'Snoop Dogg', image: require('../assets/album-snoopdog.jpg') },
  ];
  const playlistsconti = [
    { title: 'Michel Jackson', image: require('../assets/michael-jackson.jpeg') },
    { title: 'Card B', image: require('../assets/cardi-b.jpg') },
    { title: 'Doja Cat', image: require('../assets/doja-cat.jpg') },
    { title: 'The Weeknd', image: require('../assets/the-weeknd.jpg') },
    { title: 'Ibeyi', image: require('../assets/ibeyi.jpg') },
    { title: 'Dua Lipa', image: require('../assets/dua-lipa.jpg') },
    { title: 'Marshmello', image: require('../assets/marshmello.webp') },
    { title: 'Sia', image: require('../assets/sia.jpg') },
  ];

  const featuredAlbums = [
    { title: 'Léo Santana', image: require('../assets/leo-santana.webp') },
    { title: 'Wesley Safadão', image: require('../assets/wesley-safadao.jpg') },
    { title: 'Luan Santana', image: require('../assets/luan-city.jpg') },
    { title: 'Gusttavo Lima', image: require('../assets/gusttavo-lima.jpg') },
    { title: 'Marília Mendonça', image: require('../assets/marilia-mendonca.jpg') },
    { title: 'Zé Neto & Cristiano', image: require('../assets/Ze-Neto-Cristiano.jpeg') },
    { title: 'Gustavo Mioto', image: require('../assets/gustavo-mioto.jpg') },
    { title: 'Matheus & Kauan', image: require('../assets/matheus-kauan.jpg') },
    { title: 'Maiara & Maraisa', image: require('../assets/maiara-maraisa.jpg') },
  ];

  const featuredAlbumsconti = [
    { title: 'Leonardo', image: require('../assets/leonardo.jpg') },
    { title: 'Fernado & Sorocaba', image: require('../assets/fernando-sorocaba.webp') },
    { title: 'Fiduma & Jeca', image: require('../assets/fiduma-jeca.jpg') },
    { title: 'Eduardo Costa', image: require('../assets/eduardo-costa.jpg') },
    { title: 'Lucas Lucco', image: require('../assets/lucas-lucco.webp') },
    { title: 'Os Menotti', image: require('../assets/osmenotti.jpg') },
    { title: 'Daniel', image: require('../assets/daniel.jpg') },
    { title: 'Cristiano Araújo', image: require('../assets/cristiano-araujo.jpg') },
    { title: 'Chitãozinho & Xoxoró', image: require('../assets/chitao.webp') },
    { title: 'Israel & Rodolffo', image: require('../assets/Israel-Rodolffo.jpg') },
  ];

  const playlistsMPB = [
    { title: 'Caetano Veloso', image: require('../assets/album-caetanoveloso.jpeg') },
    { title: 'Cazuza', image: require('../assets/album-cazuza.jpg') },
    { title: 'Rita Lee', image: require('../assets/album-ritalee.jpg') },
    { title: 'Milton Nascimento', image: require('../assets/milton-nascimento.jpg') },
    { title: 'Djavan', image: require('../assets/djavan.jpg') },
    { title: 'Roberto Carlos', image: require('../assets/roberto-carlos.jpg') },
    { title: 'Maria Bethânia', image: require('../assets/maria-bethania.jpg') },
    { title: 'Marisa Monte', image: require('../assets/Marisa-Monte.webp') },
    { title: 'Jorge Ben Jor', image: require('../assets/Jorge-Ben-Jor.jpg') },
  ];
  const playlistsMPBconti = [
    { title: 'Elis Regina', image: require('../assets/elis-regina.webp') },
    { title: 'Vinicius de Moraes', image: require('../assets/vinicios-moraes.jpg') },
    { title: 'Antonio Carlos Jobim', image: require('../assets/TomJ.jpg') },
    { title: 'Gal Costa', image: require('../assets/gal-costa.jpg') },
    { title: 'Tim Maia', image: require('../assets/Tim-Maia.jpg') },
  ];

  const playlistsFUNK = [
    { title: 'Playlist MC Daniel', image: require('../assets/album-mcdaniel.jpg') },
    { title: 'Playlist Ludmilla', image: require('../assets/album-ludmilla.png') },
    { title: 'Playlist MC Cabelinho', image: require('../assets/mc-cabelinho.webp') },
    { title: 'Playlist MC Ryan SP', image: require('../assets/mc-ryan-sp.jpg') },
    { title: 'Gloria Groove', image: require('../assets/album-gloriagroove.webp') },
  ];

  const playMusic = (title) => {
    console.log('Reproduzindo música:', title); //coloquei no console, porque é somente uma demosntração...
  };

  const navigateToHome = () => {
    navigation.navigate('Home'); // Navegando de volta para a  Home
  };

    return (
      <ScrollView style={styles.container}>
        <Image source={require('../assets/logopulseplataform.png')} style={styles.logo} />
        <Text style={styles.heading}>PREMIUM DA SEMANA:</Text>
  
        <Text style={styles.sectionTitle}>Musicas Internacionais</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {playlists.map((playlist, index) => (
            <MusicItem key={index} item={playlist} onPress={playMusic} />
          ))}
  
        </ScrollView>
        <Text style={styles.sectionTitle}></Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {playlistsconti.map((playlist, index) => (
            <MusicItem key={index} item={playlist} onPress={playMusic} />
          ))}
        </ScrollView>
  
        <Text style={styles.sectionTitle}>Top Cantores Sertanejas:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredAlbums.map((album, index) => (
            <MusicItem key={index} item={album} onPress={playMusic} />
          ))}
        </ScrollView>
  
        <Text style={styles.sectionTitle}></Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredAlbumsconti.map((album, index) => (
            <MusicItem key={index} item={album} onPress={playMusic} />
          ))}
        </ScrollView>
  
        <Text style={styles.sectionTitle}>Cantores MPB:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {playlistsMPB.map((album, index) => (
            <MusicItem key={index} item={album} onPress={playMusic} />
          ))}
        </ScrollView>
  
        <Text style={styles.sectionTitle}>Cantores MPB:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {playlistsMPBconti.map((album, index) => (
            <MusicItem key={index} item={album} onPress={playMusic} />
          ))}
        </ScrollView>
  
        <Text style={styles.sectionTitle}>Cantores Funk:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {playlistsFUNK.map((album, index) => (
            <MusicItem key={index} item={album} onPress={playMusic} />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Deseja sair da Nova Versão? </Text>
        <TouchableOpacity style={styles.backButton} onPress={navigateToHome}>
        <Text style={styles.backButtonText}>Clique aqui</Text>
      </TouchableOpacity>

      </ScrollView>
    );
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    color: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
  item: {
    marginRight: 10,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    color: 'white',
  },
  artist: {
    fontSize: 14,
    color: 'white',
  },
  playButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: 'white',
    fontSize: 16,
  },
  logo: {
    width: 90,
    height: 40,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Premium;
