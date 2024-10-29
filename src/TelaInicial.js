import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Ícone de menu e de fechar

const screenWidth = Dimensions.get('window').width; // Obtenção da largura da tela

const MusicItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(item.title)}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    {item.artist && <Text style={styles.artist}>{item.artist}</Text>}
  </TouchableOpacity>
);

const TelaInicial = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false); // Controle de visibilidade do menu

  const plantas = [
    { image: require('../assets/plantascarrossel1.jpg') },
    { image: require('../assets/plantascarrossel2.png') },
    { image: require('../assets/plantascarrossel3.png') },
    { image: require('../assets/plantascarrossel4.jpg') },
    { image: require('../assets/imagemcarrossel5.jpg') },
  ];

  const plantar = (title) => {
    console.log('Reproduzindo comando:', title);
  };

  const navigateToHome = () => {
    navigation.navigate('NossasPlantas');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Menu de Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('../assets/logo-floralis.jpeg')} style={styles.logo} />
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)} style={styles.menuIcon}>
          <MaterialIcons name="menu" size={32} color="#006400" />
        </TouchableOpacity>
      </View>

      {/* Menu Oculto como Drawer (lado direito) */}
      {menuVisible && (
        <View style={styles.drawerMenu}>
          {/* Ícone de Fechar (X) */}
          <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeIcon}>
            <MaterialIcons name="close" size={32} color="#006400" />
          </TouchableOpacity>

          {/* Itens do Menu */}
          <TouchableOpacity style={styles.menuItem}>
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
          <TouchableOpacity onPress={navigateToHome} style={styles.menuItem}>
            <Text style={styles.menuText}>Nossas Plantas</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.heading}>BEM-VINDO Á FLORALIS!</Text>
      <Text style={styles.sectionTitle}>Descubra a beleza da flora e cuide do seu jardim.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {plantas.map((planta, index) => (
          <MusicItem key={index} item={planta} onPress={plantar} />
        ))}
      </ScrollView>

      {/* Imagens de Plantas em Tamanhos Menores */}
      <View style={styles.plantas}>
        <View style={styles.planta}>
          <Image source={require('../assets/rosa.jpg')} style={styles.plantaImage} />
        </View>
        <View style={styles.planta}>
          <Image source={require('../assets/tulipa.webp')} style={styles.plantaImage} />
        </View>
      </View>

      <View style={styles.plantas}>
        <View style={styles.planta}>
          <Image source={require('../assets/girassol.jpeg')} style={styles.plantaImage} />
        </View>
        <View style={styles.planta}>
          <Image source={require('../assets/cacto.webp')} style={styles.plantaImage} />
        </View>
      </View>

      <View style={styles.plantas}>
        <View style={styles.planta}>
          <Image source={require('../assets/lavanda.webp')} style={styles.plantaImage} />
        </View>
        <View style={styles.planta}>
          <Image source={require('../assets/orquídea.jpeg')} style={styles.plantaImage} />
        </View>
      </View>

      <View style={styles.plantas}>
        <View style={styles.planta}>
          <Image source={require('../assets/arvores.jpg')} style={styles.plantaImage} />
        </View>
        <View style={styles.planta}>
          <Image source={require('../assets/buque-de-flores-organicas.jpg')} style={styles.plantaImage} />
        </View>
      </View>

      <View style={styles.plantas}>
        <View style={styles.planta}>
          <Image source={require('../assets/espada-de-São-Jorge.webp')} style={styles.plantaImage} />
        </View>
        <View style={styles.planta}>
          <Image source={require('../assets/frutiferas.jpeg')} style={styles.plantaImage} />
        </View>
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
    alignSelf: 'flex-end', // Alinha o botão "X" à direita
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
  sectionTitle: {
    fontSize: 18,
    color: '#006400',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    margin: 10,
    padding: 10,
    backgroundColor: '#E0F7E9',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00C853',
  },
  plantas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  planta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  plantaImage: {
    width: 90, // Dimensão reduzida das imagens
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00C853',
  },
});

export default TelaInicial;