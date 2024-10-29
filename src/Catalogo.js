import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const Catalogo = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlantas = async () => {
    try {
      const response = await fetch('http://10.139.75.17:5251/api/Catalogo/GetAllCatalogo');
      const data = await response.json();
      setPlantas(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os dados: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlantas();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => alert(`Cuidados: ${item.cuidado}`)}>
      <View style={styles.infoContainer}>
        <Text style={styles.itemTitle}>{item.nomePopular}</Text>
        <Text style={styles.itemText}>Nome científico: {item.nomeCientifico}</Text>
        <Text style={styles.itemText}>Família: {item.familia}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleMenuPress = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavigateToHome = () => {
    navigation.navigate('TelaInicial');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo-floralis.jpeg')} style={styles.logo} />
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuIcon}>
          <MaterialIcons name="menu" size={32} color="#006400" />
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuVisible && (
        <View style={styles.drawerMenu}>
          <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeIcon}>
            <MaterialIcons name="close" size={32} color="#006400" />
          </TouchableOpacity>

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
        </View>
      )}

      <Text style={styles.title}>Catálogo das Plantas</Text>

      {loading ? (
        <Text style={styles.loadingText}>Carregando plantas...</Text>
      ) : (
        <FlatList
          data={plantas}
          renderItem={renderItem}
          keyExtractor={item => (item.id ? item.id.toString() : String(Math.random()))} // Verifica o id
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
    marginVertical: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#E0F7E9',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    elevation: 5,
  },
  infoContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006400',
  },
  itemText: {
    fontSize: 14,
    color: '#004d00',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#006400',
    marginTop: 20,
  },
});

export default Catalogo;