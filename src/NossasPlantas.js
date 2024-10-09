import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const lista = [
  { id: 1, title: 'Cactos', image: require('../assets/cacto.webp') },
  { id: 2, title: 'Tulipas', image: require('../assets/tulipa.webp')},
  { id: 3, title: 'Lavandas para aromartizar', image: require('../assets/lavanda.webp') },
  { id: 4, title: 'Espada de São Jorge', image: require('../assets/espada-de-São-Jorge.webp') },
  { id: 5, title: 'Girassol Iluminado', image: require('../assets/girassol.jpeg')},
  { id: 6, title: 'Rosas mais cheirosas', image: require('../assets/rosa.jpg') },
  { id: 7, title: 'Carnívoras', image: require('../assets/carnivoras.webp') },
  { id: 8, title: 'Orquídeas mais lindas', image: require('../assets/orquídea.jpeg') },
  { id: 9, title: 'Projeto Árvore', image: require('../assets/arvores.jpg') },
  { id: 10, title: 'Os mais lindos arranjos', image: require('../assets/arranjo-floristico.avif') },
  { id: 11, title: 'Buques para os apaixonados', image: require('../assets/buque-de-flores-organicas.jpg') },
];

const NossasPlantas = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.7}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  const handleBackToHome = () => {
    navigation.navigate('TelaInicial');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo-floralis.jpeg')}
          style={styles.logo}
        />
        <View style={styles.nav}>
          <Text style={styles.navItem}>Início</Text>
          <Text style={styles.navItem}>NossasPlantas</Text>
          <Text style={styles.navItem}>CatálogoPlantas</Text>
          <Text style={styles.navItem}>Sobre</Text>
        </View>
      </View>

      <Text style={styles.title}>Nossas Plantas</Text>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 10, // Diminuí o padding para ajustar
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 80, // Ajuste de largura do logo
    height: 40,
    resizeMode: 'contain',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    color: '#FFF',
    marginHorizontal: 10, // Ajuste para espaçamento
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#FFF',
  },
  backButton: {
    backgroundColor: '#1DB954',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#282828',
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1DB954',
  },
  itemText: {
    fontSize: 14,
    color: '#B3B3B3',
  },
});

export default NossasPlantas;