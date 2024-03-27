import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const TelaInicial = () => {
  const playlists = [
    
  ];

  const featuredAlbums = [
    { id: 1, title: 'Álbum 1', artist: 'Johann Sebastian Bach', image: require('../assets/compositor-um.jpg') },
    { id: 1, title: 'Álbum 2', artist: 'Johann Sebastian Bach', image: require('../assets/compositor-um.jpg') },
    { id: 1, title: 'Álbum 3', artist: 'Johann Sebastian Bach', image: require('../assets/compositor-um.jpg') },
    { id: 1, title: 'Álbum 4', artist: 'Johann Sebastian Bach', image: require('../assets/compositor-um.jpg') },
    { id: 1, title: 'Álbum 5', artist: 'Johann Sebastian Bach', image: require('../assets/compositor-um.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Playlists Recomendadas</Text>
      <ScrollView horizontal>
        {playlists.map(playlist => (
          <TouchableOpacity key={playlist.id} style={styles.playlistItem}>
            <Image source={playlist.image} style={styles.playlistImage} />
            <Text style={styles.playlistTitle}>{playlist.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Álbuns em Destaque</Text>
      <ScrollView horizontal>
        {featuredAlbums.map(album => (
          <TouchableOpacity key={album.id} style={styles.albumItem}>
            <Image source={album.image} style={styles.albumImage} />
            <Text style={styles.albumTitle}>{album.title}</Text>
            <Text style={styles.albumArtist}>{album.artist}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  playlistItem: {
    marginRight: 10,
  },
  playlistImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  playlistTitle: {
    marginTop: 5,
    fontSize: 16,
  },
  albumItem: {
    marginRight: 10,
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  albumTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  albumArtist: {
    fontSize: 14,
    color: 'gray',
  },
});

export default TelaInicial;
