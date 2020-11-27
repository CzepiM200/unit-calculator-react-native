import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Volume = () => {
    const [value, onChangeText] = React.useState('0');
    const [spinnerValue, onChangeSpinnerValue] = React.useState('0');

    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.top}>
                <TextInput 
                style={styles.input}
                keyboardType = 'number-pad'
                onChangeText={text => onChangeText(text.replace(/[^0-9]/g, ''))}
                value = {value}
                />

                <DropDownPicker
                items={[
                    {label: 'km\u00B3', value: '9'},
                    {label: 'hm\u00B3', value: '6'},
                    {label: 'cm\u00B3', value: '3'},
                    {label: 'm\u00B3', value: '0'},
                    {label: 'dm\u00B3', value: '-3'},
                    {label: 'cm\u00B3', value: '-6'},
                    {label: 'mm\u00B3', value: '-9'},
                ]}
                defaultValue={spinnerValue}
                containerStyle={{height: 40}}
                style={styles.spinner}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa', elevation: 6,}}
                onChangeItem={item => onChangeSpinnerValue(item.value)}/>
            </View>
            <View style={styles.bottom}>
            <Text style={styles.output}>{(parseFloat(value)*Math.pow(10, parseFloat(spinnerValue) - 9)).toFixed(4)} {'km\u00B3/TL'}</Text>
                <Text style={styles.output}>{(parseFloat(value)*Math.pow(10, parseFloat(spinnerValue) - 6)).toFixed(4)} {'hm\u00B3/GL'}</Text>
                <Text style={styles.output}>{(parseFloat(value)*Math.pow(10, parseFloat(spinnerValue) - 3)).toFixed(4)} {'cm\u00B3/ML'}</Text>
                <Text style={styles.output}>{(parseFloat(value)*Math.pow(10, parseFloat(spinnerValue))).toFixed(4)} {'m\u00B3'}</Text>
                <Text style={styles.output}>{(parseFloat(value)*Math.pow(10, parseFloat(spinnerValue) + 3)).toFixed(4)} {'dm\u00B3/L'}</Text>
                <Text style={styles.output}>{(parseFloat(value)*Math.pow(10, parseFloat(spinnerValue) + 6)).toFixed(4)} {'cm\u00B3/cL'}</Text>
                <Text style={styles.output}>{(parseFloat(value)*Math.pow(10, parseFloat(spinnerValue) + 9)).toFixed(4)} {'mm\u00B3/mL'}</Text>
            </View>
        </SafeAreaView>
    );
}

export default Volume;

const styles = StyleSheet.create({
  main: {
    height: 85,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  input: {
    height: 40,
    borderColor: '#5C6BC0',
    borderBottomWidth: 2,
    flex: 1
  },
  spinner: {
    width: 80,
    marginLeft: 10,
    elevation: 2,
  },
  top: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      flexDirection: 'row'
  },
  bottom: {
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
  },
  output: {
      width: '90%',
      marginBottom: 13,
      padding: 14,
      backgroundColor: "#ddd",
      textAlign: 'center',
      fontSize: 18,
      alignSelf: 'center',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4.65,
      elevation: 6,
  }
});