import React from 'react';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';

const TelaInicial = () => {
  const playlists = [
    { id: 1, title: 'Playlist Zé Felipe', image: require('../assets/ze-felipe.jpg') },
    { id: 2, title: 'Playlist Léo Santana', image: require('../assets/leo-santana.webp') },
    { id: 3, title: 'Playlist Wesley Safadão', image: require('../assets/wesley-safadao.jpg') },
    { id: 4, title: 'Playlist Luan Santana', image: require('../assets/luan-city.jpg') },
    { id: 5, title: 'Playlist Gusttavo Lima', image: require('../assets/gusttavo-lima.jpg') },
    { id: 6, title: 'Playlist Anitta', image: require('../assets/anitta.webp') },
    { id: 7, title: 'Playlist Mc Ryan SP', image: require('../assets/mc-ryan-sp.jpg') },
    { id: 8, title: 'Playlist Mc Cabelinho', image: require('../assets/mc-cabelinho.webp') },
    { id: 9, title: 'Playlist Ana Castela', image: require('../assets/ana-castela.jpg') },
    { id: 10, title: 'Playlist Marília M.', image: require('../assets/marilia-mendonca.jpg') },
  ];
  
  const featuredAlbums = [
    { id: 1, title: 'Álbum 1', artist: 'Gilberto Gil', image: require('../assets/gilberto-gil.webp') },
    { id: 2, title: 'Álbum 2', artist: 'Caetano Veloso', image: require('../assets/Caetano-Veloso.jpg') },
    { id: 3, title: 'Álbum 3', artist: 'Chico Buarque', image: require('../assets/chicobuarque.webp') },
    { id: 4, title: 'Álbum 4', artist: 'Jorge Ben Jor', image: require('../assets/Jorge-Ben-Jor.jpg') },
    { id: 5, title: 'Álbum 5', artist: 'Tom Jobim', image: require('../assets/Tom-Jobim.webp') },
    { id: 6, title: 'Álbum 6', artist: 'Gretchen', image: require('../assets/gretchen.jpg') },
    { id: 7, title: 'Álbum 7', artist: 'Rita Lee', image: require('../assets/rita-lee.jpg') },
    { id: 8, title: 'Álbum 8', artist: 'Luiz Gonzaga', image: require('../assets/luiz-gonzaga.jpg') },
    { id: 9, title: 'Álbum 9', artist: 'Cazuza', image: require('../assets/album-cazuza.jpg') },
    { id: 10, title: 'Álbum 10', artist: 'Raul Seixas', image: require('../assets/raul-seixas.jpg') },

    { id: 1, title: 'Álbum 1', artist: 'Ze Neto & Cristiano', image: require('../assets/Ze-Neto-Cristiano.jpeg') },
    { id: 2, title: 'Álbum 2', artist: 'Jorge & Matheus', image: require('../assets/jorge-matheus.jpg') },
    { id: 3, title: 'Álbum 3', artist: 'Gustavo Mioto', image: require('../assets/gustavo-mioto.jpg') },
    { id: 4, title: 'Álbum 4', artist: 'Matheus & Kauan', image: require('../assets/matheus-kauan.jpg') },
    { id: 5, title: 'Álbum 5', artist: 'Maiara & Maraisa', image: require('../assets/maiara-maraisa.jpg') },
    { id: 6, title: 'Álbum 6', artist: 'Israel & Rodolffo', image: require('../assets/Israel-Rodolffo.jpg') },
    { id: 7, title: 'Álbum 7', artist: 'Lauana Prado', image: require('../assets/Lauana-Prado.jpg') },
    { id: 8, title: 'Álbum 8', artist: 'Simone Mendes', image: require('../assets/simoneses.webp') },
    { id: 9, title: 'Álbum 9', artist: 'Guilherme & Benuto', image: require('../assets/guilherme-e-benuto.webp') },
    { id: 10, title: 'Álbum 10', artist: 'Felipe Araújo', image: require('../assets/Felipe-Araújo.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Top 10 da Semana:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlists.map(playlist => (
          <TouchableOpacity key={playlist.id} style={styles.playlistItem}>
            <Image source={playlist.image} style={styles.playlistImage} />
            <Text style={styles.playlistTitle}>{playlist.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Outros Albuns:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredAlbums.map(album => (
          <TouchableOpacity key={album.id} style={styles.albumItem}>
            <Image source={album.image} style={styles.albumImage} />
            <Text style={styles.albumTitle}>{album.title}</Text>
            <Text style={styles.albumArtist}>{album.artist}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Mais Álbuns</Text>
      <View style={styles.moreAlbumsContainer}>
        {featuredAlbums.slice(14).map(album => (
          <TouchableOpacity key={album.id} style={styles.moreAlbumItem}>
            <Image source={album.image} style={styles.moreAlbumImage} />
            <Text style={styles.moreAlbumTitle}>{album.title}</Text>
            <Text style={styles.moreAlbumArtist}>{album.artist}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
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
    color: 'white',
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
    color: 'white'
  },
  albumArtist: {
    fontSize: 14,
    color: 'white',
  },
  moreAlbumsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  moreAlbumItem: {
    marginBottom: 10,
    width: '48%',
  },
  moreAlbumImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  moreAlbumTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  moreAlbumArtist: {
    fontSize: 14,
    color: 'white',
  },
});

export default TelaInicial;

