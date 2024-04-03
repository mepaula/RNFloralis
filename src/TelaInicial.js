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
    { id: 4, title: 'Álbum 4', artist: 'Rita Lee', image: require('../assets/rita-lee.jpg') },
    { id: 5, title: 'Álbum 5', artist: 'Cazuza', image: require('../assets/album-cazuza.jpg') },

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

  const playMusic = (title) => {
    // Lógica para reproduzir a música com o título fornecido
    console.log('Reproduzindo música:', title);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Top 10 da Semana:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlists.map(playlist => (
          <TouchableOpacity key={playlist.id} style={styles.item} onPress={() => playMusic(playlist.title)}>
            <Image source={playlist.image} style={styles.image} />
            <Text style={styles.title}>{playlist.title}</Text>
            <TouchableOpacity style={styles.playButton} onPress={() => playMusic(playlist.title)}>
              <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Outros Albuns:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredAlbums.map(album => (
          <TouchableOpacity key={album.id} style={styles.item} onPress={() => playMusic(album.title)}>
            <Image source={album.image} style={styles.image} />
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.artist}>{album.artist}</Text>
            <TouchableOpacity style={styles.playButton} onPress={() => playMusic(album.title)}>
              <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
          </TouchableOpacity>
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
});

export default TelaInicial;

