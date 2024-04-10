import React, { useContext } from 'react';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

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

const TelaInicial = () => {
  const navigation = useNavigation(); // Obtendo o objeto de navegação

  const playlists = [
    { id: 'Playlist Ariana', image: require('../assets/album-arianagrande.webp') },
    { id: 'Playlist Adele', image: require('../assets/album-adele.jpg') },
    { id: 'Playlist Olivia Rodrigo' , image: require( '../assets/album-olivia.jpg' ) },
    { id: 'Playlist Michael Jackson' , image: require( '../assets/album-shawn.jpg' ) },
  ];

  const playlistsMPB = [
    { id: 1, title: 'Playlist Gilberto Gil', image: require('../assets/gilberto-gil.webp') },
    { id: 2, title: 'Caetano Veloso', image: require('../assets/Caetano-Veloso.jpg') },
    { id: 3, title: 'Chico Buarque', image: require('../assets/chicobuarque.webp') },
    { id: 4, title: 'Playlist Rita Lee', image: require('../assets/rita-lee.jpg') },
    { id: 5, title: 'Playlist Cazuza', image: require('../assets/album-cazuza.jpg') },
    { id: 5, title: 'Playlist Luiz Gonzaga', image: require('../assets/luiz-gonzaga.jpg') },
  ];
  
  const featuredAlbums = [
  { id: 1, title: 'Playlist Zé Felipe', image: require('../assets/ze-felipe.jpg') },
  { id: 2, title: 'Playlist Léo Santana', image: require('../assets/leo-santana.webp') },
  { id: 3, title: 'Playlist Wesley Safadão', image: require('../assets/wesley-safadao.jpg') },
  { id: 4, title: 'Playlist Luan Santana', image: require('../assets/luan-city.jpg') },
  { id: 5, title: 'Playlist Gusttavo Lima', image: require('../assets/gusttavo-lima.jpg') },
  { id: 9, title: 'Playlist Ana Castela', image: require('../assets/ana-castela.jpg') },
  { id: 10, title: 'Playlist Marília M.', image: require('../assets/marilia-mendonca.jpg') },
  { id: 1, title: 'Playlist Zé Neto & Cristiano', image: require('../assets/Ze-Neto-Cristiano.jpeg') },
  { id: 2, title: 'Playlist Jorge & Matheus', image: require('../assets/jorge-matheus.jpg') },
  { id: 3, title: 'Playlist Gustavo Mioto', image: require('../assets/gustavo-mioto.jpg') },
  { id: 4, title: 'Playlist Matheus & Kauan', image: require('../assets/matheus-kauan.jpg') },
  { id: 5, title: 'Playlist Maiara & Maraisa', image: require('../assets/maiara-maraisa.jpg') },
  { id: 6, title: 'Playlist Israel 7 Rodolfo', image: require('../assets/Israel-Rodolffo.jpg') },
  { id: 7, title: 'Playlist Lauana Prado', image: require('../assets/Lauana-Prado.jpg') },
  { id: 8, title: 'Playlist Simone Mendes', image: require('../assets/simoneses.webp') },
  { id: 9, title: 'Playlist Guilher & Benuto', image: require('../assets/guilherme-e-benuto.webp') },
  { id: 10, title: 'Playlist Felipe Araújo', image: require('../assets/Felipe-Araújo.jpg') },
  ];

  const playlistsTRAP = [
    
  { id:1, title: 'Playlist Veigh', image: require('../assets/album-veigh.jpg') },
  { id:2, title: 'Playlist KayBlack', image: require('../assets/album-kayblack.webp') },
  { id:3, title: 'Playlist Matuê', image: require('../assets/album-matue.jpg') },
  { id:4, title: 'Playlist Teto', image: require('../assets/album-teto.jpg') },
];

const playlistsFUNK = [
  { id:1,  title:'Playlist MC Daniel', image: require('../assets/album-mcdaniel.jpg') },
  { id:2,  title:'Playlist Ludmilla', image: require('../assets/album-ludmilla.png') },
  { id:3,  title:'Playlist MC Cabelinho', image: require('../assets/mc-cabelinho.webp') },
  { id:4,  title:'Playlist MC Ryan SP', image: require('../assets/mc-ryan-sp.jpg') },
];
  const playMusic = (title) => {
    console.log('Reproduzindo música:', title);
  };

  const navigateToPagamento = () => {
    navigation.navigate('Pagamento'); // Navegando para a tela de pagamento
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/logopulseplataform.png')} style={styles.logo} />
      <Text style={styles.heading}>Ouça agora suas Músicas Favoritas</Text>
      
      <Text style={styles.sectionTitle}>Musicas Internacionais</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlists.map(playlist => (
          <MusicItem key={playlist.id} item={playlist} onPress={playMusic} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Cantores Sertanejos:</Text>
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

      <Text style={styles.sectionTitle}>Cantores Trap Brasileiro:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlistsTRAP.map(album => (
          <MusicItem key={album.id} item={album} onPress={playMusic} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Cantores Funk:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlistsFUNK.map(album => (
          <MusicItem key={album.id} item={album} onPress={playMusic} />
        ))}
      </ScrollView>
      
      <TouchableOpacity style={styles.button} onPress={navigateToPagamento}>
        <Text style={styles.back}>Fazer Upgrade</Text>
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
  adContainer: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  adText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white'
  },
  upgradeButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  upgradeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  back: {
    color: 'white',
    fontSize: 16,
  }
});

export default TelaInicial;


