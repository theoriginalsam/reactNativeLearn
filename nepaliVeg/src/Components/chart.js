import {LineChart} from 'react-native-chart-kit';
import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';

const Chart = ({result, id}) => {
  var today = new Date().toISOString().slice(0, 10);
  const todayD = moment(today).format('l');

  var yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .slice(0, 10);
  const yesD = moment(yesterday).format('l');
  var twoDay = new Date(new Date().setDate(new Date().getDate() - 2))
    .toISOString()
    .slice(0, 10);
  const twoD = moment(twoDay).format('l');
  var threeday = new Date(new Date().setDate(new Date().getDate() - 3))
    .toISOString()
    .slice(0, 10);
  const threeD = moment(threeday).format('l');
  var fourDay = new Date(new Date().setDate(new Date().getDate() - 4))
    .toISOString()
    .slice(0, 10);
  const fourD = moment(fourDay).format('l');
  var fiveDay = new Date(new Date().setDate(new Date().getDate() - 5))
    .toISOString()
    .slice(0, 10);
  const fiveD = moment(fiveDay).format('l');
  var sixDay = new Date(new Date().setDate(new Date().getDate() - 6))
    .toISOString()
    .slice(0, 10);
  const sixD = moment(sixDay).format('l');

  var arr = [];

  if (result[id][todayD]) {
    arr.push(parseInt(result[id][todayD]['avg_price']));
  } else {
    arr.push(0);
  }
  if (result[id][yesD]) {
    arr.push(parseInt(result[id][yesD]['avg_price']));
  } else {
    arr.push(0);
  }
  if (result[id][twoD]) {
    arr.push(parseInt(result[id][twoD]['avg_price']));
  } else {
    arr.push(0);
  }
  if (result[id][threeD]) {
    arr.push(parseInt(result[id][threeD]['avg_price']));
  } else {
    arr.push(0);
  }
  if (result[id][fourD]) {
    arr.push(parseInt(result[id][fourD]['avg_price']));
  } else {
    arr.push(0);
  }
  if (result[id][fiveD]) {
    arr.push(parseInt(result[id][fiveD]['avg_price']));
  } else {
    arr.push(0);
  }
  if (result[id][sixD]) {
    arr.push(parseInt(result[id][sixD]['avg_price']));
  } else {
    arr.push(0);
  }

  var arrM = [];

  if (result[id][todayD]) {
    arrM.push(parseInt(result[id][todayD]['max_price']));
  } else {
    arrM.push(0);
  }
  if (result[id][yesD]) {
    arrM.push(parseInt(result[id][yesD]['max_price']));
  } else {
    arrM.push(0);
  }
  if (result[id][twoD]) {
    arrM.push(parseInt(result[id][twoD]['max_price']));
  } else {
    arrM.push(0);
  }
  if (result[id][threeD]) {
    arrM.push(parseInt(result[id][threeD]['max_price']));
  } else {
    arrM.push(0);
  }
  if (result[id][fourD]) {
    arrM.push(parseInt(result[id][fourD]['max_price']));
  } else {
    arrM.push(0);
  }
  if (result[id][fiveD]) {
    arrM.push(parseInt(result[id][fiveD]['max_price']));
  } else {
    arrM.push(0);
  }
  if (result[id][sixD]) {
    arrM.push(parseInt(result[id][sixD]['max_price']));
  } else {
    arrM.push(0);
  }

  return (
    <View>
      <Text style={styles.marginFC}>Price Chart(AVG)</Text>
      <LineChart
        style={styles.marginFC}
        data={{
          labels: ['T', 'Y', '2 ', '3 ', '4 ', '5 ', '6 '],
          datasets: [
            {
              data: arr,
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // from react-native
        height={170}
        yAxisLabel="Rs."
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#3b5c19',
          backgroundGradientTo: '#3fa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '7',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          borderRadius: 20,
          marginBottom: 25,

          alignSelf: 'center',
        }}
      />

      {arr.includes(0) ? (
        <View>
          <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
            Some error led to price fall.
          </Text>
        </View>
      ) : null}

      <Text style={styles.marginFC}>Price Chart (MAX)</Text>
      <LineChart
        style={styles.marginFC}
        data={{
          labels: ['T', 'Y', '2 ', '3 ', '4 ', '5 ', '6 '],
          datasets: [
            {
              data: arrM,
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // from react-native
        height={170}
        yAxisLabel="Rs."
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#3b5c19',
          backgroundGradientTo: '#3fa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '7',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          borderRadius: 20,
          marginBottom: 25,

          alignSelf: 'center',
        }}
      />

      {arr.includes(0) ? (
        <View>
          <Text
            style={{alignSelf: 'center', marginBottom: 20, fontWeight: 'bold'}}>
            Some error led to price fall.
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  marginFC: {
    marginHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default Chart;
