import { useEffect, useState } from 'react';
import {  Image, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import {useNavigation} from "@react-navigation/native"

import logoImg from "../../assets/logo-nlw-esports.png"
import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';


import { styles } from './styles';

export function Home() {

  const [dataGames, setDataGames] = useState<GameCardProps[]>([])
  const navigation = useNavigation()

  function handleOpenGame({id, title, bannerUrl}: GameCardProps){
      navigation.navigate("game", {id, title, bannerUrl})
  }


  useEffect(()=>{
      fetch("http://10.0.0.110:3333/games")
      .then(res => res.json())
      .then(data => setDataGames(data)
      ) 
  }, [])


  return (
    <Background>
      <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

    <Heading
      title='Encontre seu duo!'
      subtitle='Selecione o game que deseja jogar...'
    />

    <FlatList
      data={dataGames}
      keyExtractor={item => item.id}
      renderItem = {({item}) => (
        <GameCard
          data={item}
          onPress={() => handleOpenGame(item)}
        />
      )}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.contentList}
      />

    

      </SafeAreaView>
    </Background>
  );
}