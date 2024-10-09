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

    </TouchableOpacity>
  </TouchableOpacity>
);

const TelaInicial = () => {
  const navigation = useNavigation();

  const plantas = [
    { title: '#', image: require('../assets/plantascarrossel1.jpg') },
    { title: '#', image: require('../assets/plantascarrossel2.png') },
    { title: '#', image: require('../assets/plantascarrossel3.png') },
    { title: '#', image: require('../assets/plantascarrossel4.jpg') },
    { title: '#', image: require('../assets/imagemcarrossel5.jpg') },
  ];

  // (Outros arrays de playlists e álbuns omitidos para brevidade)

  const plantar = (title) => {
    console.log('Reproduzindo música:', title);
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('../assets/logo-floralis.jpeg')} style={styles.logo} />
        <Text style={styles.headerTitle}>Início</Text>
        <TouchableOpacity onPress={navigateToHome} style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>BEM-VINDO Á FLORALIS!</Text>

      <Text style={styles.sectionTitle}>Descubra a beleza da flora e cuide do seu jardim.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {plantas.map((planta, index) => (
          <MusicItem key={index} item={planta} onPress={plantar} />
        ))}
      </ScrollView>

      <View style={styles.plantas}>
        
        <View style={styles.planta}>
            <Image source={require('../assets/rosa.jpg')}/>
        </View>

        <View style={styles.planta}>
            <Image source={require('../assets/tulipa.webp')}/>
        </View>

      </View>

      <View style={styles.plantas}>
        
        <View style={styles.planta}>
            <Image source={require('../assets/girassol.jpeg')}/>
        </View>
        
        <View style={styles.planta}>
            <Image source={require('../assets/cacto.webp')}/>
        </View>

      </View>

      <View style={styles.plantas}>
        
        <View style={styles.planta}>
            <Image source={require('../assets/lavanda.webp')}/>
        </View>
        
        <View style={styles.planta}>
            <Image source={require('../assets/orquídea.jpeg')}/>
        </View>

      </View>

      <View style={styles.plantas}>
        
        <View style={styles.planta}>
            <Image source={require('../assets/arvores.jpg')}/>
        </View>
        
        <View style={styles.planta}>
            <Image source={require('../assets/buque-de-flores-organicas.jpg')}/>
        </View>

      </View>

      <View style={styles.plantas}>
        
        <View style={styles.planta}>
            <Image source={require('../assets/espada-de-São-Jorge.webp')}/>
        </View>
        
        <View style={styles.planta}>
            <Image source={require('../assets/frutiferas.jpeg')}/>
        </View>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'black',
    padding: 10,
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 40,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
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
  backButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  plantas: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  planta: {
    width: "49%",
    backgroundColor: "white"
  }
});

export default TelaInicial;