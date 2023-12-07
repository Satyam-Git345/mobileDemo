import {Button, StyleSheet, Text, View} from 'react-native';
import React, {ReactElement, useState} from 'react';

interface MyProps {
  email: string;
  name: string;
  age: number;
}

interface User {
  name: string;
  age: number;
  address: string;
  companyName: string;
}

interface items{
  id:number,
  title:string,
  price:number,

}

const Settings = ({name, age, email}: MyProps): ReactElement => {
  const [emil, setemil] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const [loaded, setloaded] = useState<boolean>(false);
  const [user, setUser] = useState<User>({name:'',age: 0,address:'',companyName:''});
  const [items, setItems] = useState<items[]>([]);
  const [details, setDetails] = useState<null>(null);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{age}</Text>
      <Text>{counter}</Text>
      <Button title='Increment' onPress={()=>setCounter(counter+1)} color='red'/>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
