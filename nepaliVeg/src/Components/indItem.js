import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {Header, Badge} from 'react-native-elements';
import Chart from './chart';
import {ScrollView} from 'react-native-gesture-handler';

const List = ({navigation}) => {
  const result = navigation.getParam('results');
  const id = navigation.getParam('id');

  console.log(id.length);
  const parse = Object.entries(result);

  const parseD = Object.entries(parse);
  console.log(parseD[1][1]);

  return (
    <ScrollView>
      <View>
        <Header
          placement="center"
          leftComponent={{icon: 'rowing', color: '#fff'}}
          centerComponent={{text: id, style: {fontSize: 30, color: 'white'}}}
          rightComponent={{color: '#fff'}}
          containerStyle={{
            backgroundColor: 'grey',
            justifyContent: 'space-around',
          }}
        />

        <View style={styles.badges}>
          <Badge status="primary" value=" Avg " />
          <Badge status="success" value=" Min " />

          <Badge status="warning" value=" Max " />
        </View>

        <View style={styles.aboveTiles}>
          <Text style={{marginLeft: 10}} h2>
            {' '}
            Price
          </Text>
          <View style={styles.tiles}>
            <Text style={styles.textTilesA}>
              {result[id]['6/11/2020']['avg_price']}
            </Text>
            <Text style={styles.textTilesM}>
              {result[id]['6/11/2020']['max_price']}
            </Text>
            <Text style={styles.textTilesMx}>
              {result[id]['6/11/2020']['min_price']}
            </Text>
          </View>
        </View>

        {/* <Chart result={result} /> */}
        <Image
          source={require('../../assets/2.jpg')}
          style={styles.backgroundImage}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  custom: {
    fontFamily: 'Feather',
    fontSize: 32,
  },

  aboveTiles: {
    marginTop: 40,
  },
  tiles: {
    flexDirection: 'row',
  },
  textTilesA: {
    margin: 20,
    alignSelf: 'baseline',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
    textAlign: 'center',
    padding: 22,
    fontWeight: 'bold',
    color: '#504136',
  },
  textTilesM: {
    margin: 20,
    alignSelf: 'baseline',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'green',
    textAlign: 'center',
    padding: 21,
    fontWeight: 'bold',
    color: '#504136',
  },
  textTilesMx: {
    margin: 20,
    alignSelf: 'baseline',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'orange',
    textAlign: 'center',
    padding: 22,
    fontWeight: 'bold',
    color: '#504136',
  },
  badges: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  backgroundImage: {
    resizeMode: 'contain',
    position: 'absolute',
    width: 500,
    bottom: 20,
    zIndex: -100,
    opacity: 0.3,
  },
});

export default List;
