import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './components/Card';

const items = [
  {
    id: 1,
    name: 'Espada Flamejante',
    description: 'Ataque +35, Fogo +15, Peso -5',
    image: 'https://i.imgur.com/MoI4xrh.jpeg',
  },
  {
    id: 2,
    name: 'Escudo de Ferro',
    description: 'Defesa +15, Resistência +5, Peso -5',
    image: 'https://i.imgur.com/Zf8bHhX.jpeg',
  },
  {
    id: 3,
    name: 'Poção de Cura',
    description: 'Cura 300 pontos de vida',
    image: 'https://e7.pngegg.com/pngimages/282/714/png-clipart-potion-magic-magic-potion-healing-potion-health-potion.png',
  },
  {
    id: 4,
    name: 'Poção de Mana',
    description: 'Regenera 300 pontos de mana',
    image: 'https://e7.pngegg.com/pngimages/525/200/png-clipart-potion-computer-icons-others-miscellaneous-game.png',
  },
  {
    id: 5,
    name: 'Arco e Flecha',
    description: 'Ataque +32, Peso +5',
    image: 'https://www.imagensempng.com.br/wp-content/uploads/2021/11/Arco-e-flecha-Png.png',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',},
  });
  
  export default App;
