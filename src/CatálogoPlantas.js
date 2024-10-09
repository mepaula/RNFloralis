import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const lista = [
  { id: 1, nomePopular:'Cacto-orquídea, epifilum', nomeCientífico:'Cactaceae', família:'Cactaceae', 
    sobre:'Os cactos são plantas espinhentas, pertencentes à família das cactáceas (cactaceae). Conseguem sobreviver em ambientes extremamente quentes ou áridos, pelo fato de terem a capacidade de acumular água em seus tecidos. Caracterizam-se por serem cilíndricos, globosos, angulosos ou achatados, e possuem variados tamanhos.', 
    cuidado:'Para cuidar de seus cactos corretamente, é importante que o vaso escolhido tenha furos, que vão drenar a água. O substrato utilizado, também, não pode ser excessivamente úmido. Portanto, utilize terra adubada (orgânica ou quimicamente) misturada com areia grossa.'},
  { id: 2, nomePopular:'Rosa; Roseira-grandiflora; Roseira; Rosa-arbustiva', nomeCientífico:'Rosa', família:'Rosaceae', 
    sobre:'A rosa é uma das flores mais populares no mundo. Vem sendo cultivada pelo homem desde a Antiguidade. A primeira rosa cresceu nos jardins asiáticos há cerca de 5.000 anos. Na sua forma selvagem, a flor é ainda mais antiga.', 
    cuidado:'As rosas precisam receber luz solar direta diariamente, pelo menos 5 horas, e preferencialmente durante o período da manhã. O local precisa ser ventilado, mas é necessário cuidar com o excesso de vento. Esse pode prejudicar o desenvolvimento da planta, já que ela é frágil e sensível a agentes externos.'},
  { id: 3, nomePopular:'Espada-de-são-Jorge ou Espada-de-ogum', nomeCientífico:'Dracaena trifasciata', família:'Asparagaceae', 
    sobre:'A espada-de-são-jorge, espada-de-santa-bárbara ou espada-de-iansã, também conhecida como língua-de-sogra, rabo-de-lagarto e sanseviéria, é uma planta herbácea de origem africana. Também é importante saber que é uma planta tóxica e que não deve ser ingerida.', 
    cuidado:'Em ambiente sem janelas, ela pode se beneficiar das próprias lâmpadas do local como iluminação. A rega da espada-de-são-jorge pode ser feita uma vez por semana em dias mais quentes e a cada 10 dias no inverno. Não abuse da água, pois a regagem em excesso pode afogar a raiz e matar a planta.'},
  { id: 4, nomePopular:'Alfazema', nomeCientífico:'Lavandula', família:'Lamiaceae', 
    sobre:'As lavandas, também conhecidas em Portugal como alfazemas, são plantas do gênero Lavandula, da família Lamiaceae. São pequenos arbustos, perenes, incluindo, também, as anuais e os subarbustos. As espécies mais usadas como ervas e para ornamentação são as chamadas lavandas inglesas, como a Lavandula angustifolia.', 
    cuidado:'A lavanda precisa de bastante luz para prosperar. Coloque o vaso em um local onde a planta receba pelo menos seis horas de luz solar direta por dia. Varanda, janelas ou ambientes com boa passagem de luz voltados para o sul são geralmente as melhores opções para cultivar lavanda em apartamento.'},
  { id: 5, nomePopular:'Lélia, laélia, orquídea', nomeCientífico:'Orchidaceae', família:'Orchidaceae', 
    sobre:'Orquídeas são todas as plantas que compõem a família Orchidaceae, pertencente à ordem Asparagales, uma das maiores famílias de plantas existentes. Apresentam muitíssimas e variadas formas, cores e tamanhos e existem em todos os continentes, exceto na Antártida, predominando nas áreas tropicais.', 
    cuidado:'Para cuidar das orquídeas do jeitinho certo, é importante regá-las a cada dois ou sete dias. Prefira oferecer luz indireta às plantas, protegendo-as da exposição direta ao sol forte. Mantenha um ambiente com boa circulação de ar para prevenir problemas como o apodrecimento das raízes.'},
  { id: 6, nomePopular:'Girassol', nomeCientífico:'Helianthus annuus', família:'Asteraceae', 
    sobre:'O girassol é uma planta anual da família das Asteraceae, gênero Heliantheae. Está situado na tribo Heliantheae, subtribo Helianthinae. É cultivada pelo seu óleo e frutos comestíveis. O nome é derivado do formato de sua inflorescência.', 
    cuidado:'Para manter seu girassol feliz, a terra úmida sem encharcar é essencial. Antes de molhar, use a técnica do dedômetro, tocando o substrato com o indicador. Se o dedo sair sujo, não molhe, ainda há umidade na terra. Se a planta estiver com as folhas murchas, pode ser falta de sol, não falta de água.'},
  { id: 7, nomePopular:'Jasmim-branco, jasmim-dos-açores', nomeCientífico:'Jasminum', família:'Oleáceas', 
    sobre:'O jasmim pertence à família das Oleáceas e é nativo de várias regiões tropicais e subtropicais do mundo. Suas flores são o destaque da planta, com uma beleza que encanta a todos. O jasmim apresenta folhas verde-escuras e brilhantes, geralmente compostas por folíolos ovais ou lanceolados.', 
    cuidado:'O jasmim, para crescer bem, precisa de solo úmido, mas não encharcado. Por isso, o ideal é regar o solo sempre que ele estiver seco ao toque. Durante a primavera e verão, que é época de crescimento ativo, o ideal é regar com mais frequência.'},
];

const CatálogoPlantas = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer} activeOpacity={0.7}>
      <Text>{item.nomePopular}</Text>
    </View>
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

      <Text style={styles.title}>Catálogo das Plantas</Text>
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
  }
});

export default CatálogoPlantas;