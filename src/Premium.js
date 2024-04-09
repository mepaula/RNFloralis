import React from 'react';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';


const MusicItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(item.title)}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    {item.artist && <Text style={styles.artist}>{item.artist}</Text>}
    <TouchableOpacity style={styles.playButton} onPress={() => onPress(item.title)}>
      <Text style={styles.playButtonText}>▶</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const Premium = () => {
  const playlists = [
  { title: 'Justin Bieber', image: require('../assets/album-justin.jpg'), audioUrl: 'https://www.youtube.com/watch?v=o3PFBj1hG_M' },
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

  const playlistsMPB = [
  { title:1, title:'Caetano Veloso', image: require('../assets/album-caetanoveloso.jpeg'), audioUrl: 'https://www.youtube.com/watch?v=Rc2zdjQU7RA' },
  { title:2, title:'Cazuza', image: require('../assets/album-cazuza.jpg'), audioUrl: 'https://www.youtube.com/watch?v=0o78cMWxynM' },
  { title:3, title:'Rita Lee', image: require('../assets/album-ritalee.jpg'), audioUrl: 'https://www.youtube.com/watch?v=sU9OPgzQYfU' },
  ];
  
  const featuredAlbums = [
  { id: 2, title: 'Léo Santana', image: require('../assets/leo-santana.webp') },
  { id: 3, title: 'Wesley Safadão', image: require('../assets/wesley-safadao.jpg') },
  { id: 4, title: 'Luan Santana', image: require('../assets/luan-city.jpg') },
  { id: 5, title: 'Gusttavo Lima', image: require('../assets/gusttavo-lima.jpg') },
  { id: 10, title: 'Marília M.', image: require('../assets/marilia-mendonca.jpg') },
  { id: 1, title: 'Zé Neto & Cristiano', image: require('../assets/Ze-Neto-Cristiano.jpeg') },
  { id: 3, title: 'Gustavo Mioto', image: require('../assets/gustavo-mioto.jpg') },
  { id: 4, title: 'Matheus & Kauan', image: require('../assets/matheus-kauan.jpg') },
  { id: 5, title: 'Maiara & Maraisa', image: require('../assets/maiara-maraisa.jpg') },
 ];

const playlistsFUNK = [
  { id:1,  title:'Playlist MC Daniel', image: require('../assets/album-mcdaniel.jpg') },
  { id:2,  title:'Playlist Ludmilla', image: require('../assets/album-ludmilla.png') },
  { id:3,  title:'Playlist MC Cabelinho', image: require('../assets/mc-cabelinho.webp') },
  { id:4,  title:'Playlist MC Ryan SP', image: require('../assets/mc-ryan-sp.jpg') },
  { id:5, title:'Gloria Groove', image: require('../assets/album-gloriagroove.webp') },
];

  const playMusic = (title) => {
    console.log('Reproduzindo música:', title);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/logopulseplataform.png')}
        style={styles.logo}
      />
      <Text style={styles.heading}>PREMIUM DA SEMANA:</Text>
      
      <Text style={styles.sectionTitle}>Musicas Internacionais</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlists.map(playlist => (
          <MusicItem key={playlist.id} item={playlist} onPress={playMusic} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Top Cantores Sertanejas:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredAlbums.map(album => (
          <MusicItem key={album.id} item={album} onPress={playMusic} />
        ))}
      </ScrollView>
      
      <Text style={styles.sectionTitle}>Cantores MPB:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlistsMPB.map(album => (
          <MusicItem key={album.id} item={album} onPress={playMusic} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Cantores Funk:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlistsFUNK.map(album => (
          <MusicItem key={album.id} item={album} onPress={playMusic} />
        ))}
      </ScrollView>

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
});

export default Premium;



