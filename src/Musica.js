import {Button, FlatList, StyleSheet, Text, View} from "react-native";

const dados = [
    {
        id: "01",
        titulo: "La Vie Est Belle",
        preco: 299.99,
        categoria: "Perfume",
        data: "05/03/2024"
    },
    {
        id: "02",
        titulo: "Good Girl",
        preco: 599.99,
        categoria: "Perfume",
        data: "05/03/2024"
    },
    {
        id: "03",
        titulo: "212 VIP Rosé",
        preco: 109.99,
        categoria: "Perfume",
        data: "05/03/2024"
    },
    {
        id: "04",
        titulo: "Midnight Fantasy",
        preco: 299.99,
        categoria: "Perfume",
        data: "05/03/2024"
    },
    {
        id: "05",
        titulo: "Flower by Kenzo",
        preco: 536.99,
        categoria: "Perfume",
        data: "05/03/2024"
    },
    {
        id: "06",
        titulo: "Laguna",
        preco: 347.99,
        categoria: "Perfume",
        data: "05/03/2024"
    },
    {
        id: "07",
        titulo: "Chloé",
        preco: 299.99,
        categoria: "Perfume",
        data: "05/03/2024"
    },
    {
        id: "08",
        titulo: "Lady Million",
        preco:  672.99,
        categoria: "Perfume",
        data: "05/03/2024"
    }
]


export default function Musica()
{
    return(
        <View >  
            <FlatList
                data={dados}
                renderItem={ ({item} ) => 
                <Produto titulo={item.titulo} 
                preco={item.preco}
                categoria={item.categoria} 
                data={item.data}
                /> 
            }
                keyExtractor={ item => item.id }
                contextContainerStyle={css.container}
                horizontal={false}
                numColumns={2}
            />
        </View>    
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
       justifyContent: "center"
    }
})
