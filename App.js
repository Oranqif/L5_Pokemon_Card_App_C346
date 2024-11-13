import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const pokemonsource = [
    {data: [
        {key: "Pikachu", image: require("./assets/PikachuCard.png")},
            {key: "Jolteon", image: require("./assets/JolteonCard.png")}
        ],
        title: "Electric", icon:"electric-bolt", fontColor: "#9b860f", color:"#f5ea55"},
    {data: [
        {key: "Wartortle", image: require("./assets/WartortleCard.png")},
            {key: "Psyduck", image: require("./assets/PsyduckCard.png")}
        ],
        title: "Water", icon:"water-drop", fontColor: "#014b87", color:"#509ad7",},
    {data: [
        {key: "Charizard", image: require("./assets/CharizardCard.png")},
            {key: "Rapidash", image: require("./assets/RapidashCard.png")},
        ],
        title: "Fire", icon:"local-fire-department", fontColor: "#870a01", color:"#e14f32"},
];

export default function App() {
  return (
    <View>
        <StatusBar hidden={true} />
        <Button />
        <SectionList
            contentContainerStyle={{padding: 15, paddingBottom: 120}}
            sections={pokemonsource}
            renderItem={renderItem}
            renderSectionHeader={
            ({section:{title, icon, fontColor, color, marginTop}}) =>
                (<Icon name={icon} style={[styles.headerStyle, {color: fontColor, backgroundColor:color},]}>{title}</Icon>)
        }
        />
    </View>
  );
}

const renderItem = ({item}) => {
    return (
        <View style={styles.listStyle}>
            <Text style={styles.nameStyle}>{item.key}</Text>
            <Image style={[styles.imageStyle,{width: 183.5, height: 256},]} source={item.image}/>
        </View>
        )
}

const Button = () => {
  return (
      <View style={styles.buttonBorderStyle}>
          <TouchableOpacity onPress={() => Alert.alert("I add Pokemon")} style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Add Pokemon</Text>
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    listStyle: {
        backgroundColor: '#ebebeb',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonBorderStyle: {
        borderWidth: 1,
    },
    buttonStyle: {
        backgroundColor: '#c33232',
        margin: 20,
        padding: 10,
        borderRadius: 5,
    },
    buttonTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    headerStyle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        padding: 5,
    },
    imageStyle: {
        margin: 10,
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 50,
    }
});
