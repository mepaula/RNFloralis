import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Ícone de menu e de fechar

const screenWidth = Dimensions.get('window').width; // Obtenção da largura da tela

const PlantItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.planta}>
    <Image source={item.image} style={styles.plantaImage} />
    <Text style={styles.plantaTitle}>{item.title}</Text>
    {item.showInfo && <Text style={styles.plantaDescription}>{item.description}</Text>}
  </TouchableOpacity>
);

const NossasPlantas = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false); // Controle de visibilidade do menu
  const [plants, setPlants] = useState([
    { title: 'Cactos - pteridófita', image: require('../assets/cacto.webp'), description: 'Cactos são plantas suculentas que armazenam água.', showInfo: false },
    { title: 'Tulipas - angiospermas ', image: require('../assets/tulipa.webp'), description: 'Tulipas são flores populares conhecidas por sua beleza.', showInfo: false },
    { title: 'Lavandas - Lamiaceae', image: require('../assets/lavanda.webp'), description: 'Lavandas são conhecidas pelo seu aroma relaxante.', showInfo: false },
    { title: 'Espada de São Jorge - protetora', image: require('../assets/espada-de-São-Jorge.webp'), description: 'Planta resistente que purifica o ar.', showInfo: false },
    { title: 'Girassol - angiospermas', image: require('../assets/girassol.jpeg'), description: 'Girassóis seguem a luz do sol.', showInfo: false },
    { title: 'Rosas - Rosaceae', image: require('../assets/rosa.jpg'), description: 'Rosas são símbolo de amor e beleza.', showInfo: false },
    { title: 'Carnívoras - insetívoras', image: require('../assets/carnivoras.webp'), description: 'Plantas que se alimentam de insetos.', showInfo: false },
    { title: 'Orquídeas - Orchidaceae', image: require('../assets/orquídea.jpeg'), description: 'Orquídeas são flores exóticas e elegantes.', showInfo: false },
    { title: 'Árvores -  tronco lenhoso', image: require('../assets/arvores.jpg'), description: 'As árvores são essenciais para o ecossistema.', showInfo: false },
    { title: 'Carnivoras - insetívoras', image: require('../assets/carnivoras.webp'), description: 'A conservação das plantas carnívoras detém grande importância para o equilíbrio ecossistêmico.', showInfo: false },
     { title: 'Frutiferas - pseudofrutos', image: require('../assets/frutiferas.jpeg'), description: 'Como o próprio nome já diz, as árvores frutíferas são aquelas que dão frutos — as partes comestíveis que se originam a partir da flor.', showInfo: false },
    { title: 'Frutiferas - pomoideae', image: require('../assets/Maçã.jpg'), description: 'Como o próprio nome já diz, as árvores frutíferas são aquelas que dão frutos — as partes comestíveis que se originam a partir da flor.', showInfo: false },
  ]);

  const handleMenuPress = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavigateToHome = () => {
    navigation.navigate('TelaInicial');
  };

  const togglePlantInfo = (index) => {
    const updatedPlants = plants.map((plant, idx) => 
      idx === index ? { ...plant, showInfo: !plant.showInfo } : plant
    );
    setPlants(updatedPlants);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('../assets/logo-floralis.jpeg')} style={styles.logo} />
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuIcon}>
          <MaterialIcons name="menu" size={32} color="#006400" />
        </TouchableOpacity>
      </View>

      {/* Menu lateral (Drawer) */}
      {menuVisible && (
        <View style={styles.drawerMenu}>
          <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeIcon}>
            <MaterialIcons name="close" size={32} color="#006400" />
          </TouchableOpacity>

          {/* Itens do menu */}
          <TouchableOpacity onPress={handleNavigateToHome} style={styles.menuItem}>
            <Text style={styles.menuText}>Tela Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Catálogo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Projeto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Relatório</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Nossas Plantas</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Título da seção */}
      <Text style={styles.heading}>Nossas Plantas</Text>

      {/* Exibição das plantas */}
      <View style={styles.plantasContainer}>
        {plants.map((planta, index) => (
          <PlantItem 
            key={index} 
            item={planta} 
            onPress={() => togglePlantInfo(index)} // Chama a função ao clicar na planta
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E0F7E9',
  },
  logo: {
    width: 75,
    height: 75,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#00C853',
  },
  menuIcon: {
    padding: 20,
    backgroundColor: '#E0F7E9',
    borderRadius: 10,
  },
  drawerMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: screenWidth * 0.75,
    height: '100%',
    backgroundColor: '#E0F7E9',
    zIndex: 10,
    paddingTop: 50,
    paddingHorizontal: 20,
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 18,
    color: '#006400',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
    marginVertical: 20,
  },
  plantasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  planta: {
    width: screenWidth * 0.4,
    margin: 10,
    alignItems: 'center',
  },
  plantaImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00C853',
  },
  plantaTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
  },
  plantaDescription: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});

export default NossasPlantas;