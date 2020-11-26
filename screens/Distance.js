import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

const Distance = () => {
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
                    {label: 'm', value: '0'},
                    {label: 'dm', value: '-1'},
                    {label: 'cm', value: '-2'},
                    {label: 'mm', value: '-2'},
                    {label: 'µm', value: '-2'},
                    {label: 'nm', value: '-2'},
                    {label: 'pm', value: '-2'},
                ]}
                defaultValue={spinnerValue}
                containerStyle={{height: 40}}
                style={styles.spinner}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => onChangeSpinnerValue(item.value)}/>
            </View>
            <View style={styles.bottom}>
                <Text>xDDDD</Text>
            </View>
        </SafeAreaView>
    );
}

export default Distance;

const styles = StyleSheet.create({
  main: {
    height: 85,
  },
  input: {
    height: 40,
    borderColor: '#5C6BC0',
    borderBottomWidth: 2,
    flex: 1
  },
  spinner: {
    width: 80,
    marginLeft: 10
  },
  top: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      flex: 1,
      flexDirection: 'row'
  },
  bottom: {
      backgroundColor: '#888'
  }
});