import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando useNavigation

const lista = [
    { id: 1, title: 'Michel Jackson', image: require('../assets/michael-jackson.jpeg'), artist: 'Michel Jackson', album: 'Álbum 1', genre: 'Pop' },
    { id: 2, title: 'Cardi B', image: require('../assets/cardi-b.jpg'), artist: 'Cardi B', album: 'Álbum 2', genre: 'Hip Hop' },
    { id: 2, title: 'Caetano Veloso', image: require('../assets/Caetano-Veloso.jpg'), artist: 'Caetano Veloso', album: 'Álbum 3', genre: 'MPB'  },
    { id: 3, title: 'Chico Buarque', image: require('../assets/chicobuarque.webp'), artist: 'Chico Buarque', album: 'Álbum 3', genre: 'MPB'  },
    { id: 4, title: 'Playlist Ana Castela', image: require('../assets/ana-castela.jpg'), artist: 'Ana Castela', album: 'Álbum 4', genre: 'Sertanejo'  },
    { id: 5, title: 'Playlist Marília M.', image: require('../assets/marilia-mendonca.jpg'), artist: 'Marília Mendonça', album: 'Álbum 4', genre: 'Sertanejo'  },
    { id: 6, title: 'Playlist Zé Neto & Cristiano', image: require('../assets/Ze-Neto-Cristiano.jpeg'), artist: 'Zé Neto & Crsitiano', album: 'Álbum 4', genre: 'Sertanejo'  },
    { id: 7, title: 'Playlist Jorge & Matheus', image: require('../assets/jorge-matheus.jpg'), artist: 'Jorge & Matheus', album: 'Álbum 4', genre: 'Sertanejo'  },
    { id: 8, title: 'Doja Cat', image: require('../assets/doja-cat.jpg'), artist: 'Doja Cat', album: 'Álbum 3', genre: 'Pop' },
];

const MinhaLista = () => {
  const navigation = useNavigation(); // Obtendo o objeto de navegação

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemText}>Artista: {item.artist}</Text>
      <Text style={styles.itemText}>Álbum: {item.album}</Text>
      <Text style={styles.itemText}>Gênero: {item.genre}</Text>
    </View>
  );

  const handleBackToHome = () => {
    navigation.navigate('TelaInicial'); // Navegando de volta para a tela inicial
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Minha Lista</Text>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  Titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
  },
  backButton: {
    backgroundColor: 'red',
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

export default MinhaLista;

