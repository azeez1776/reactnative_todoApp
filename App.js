import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {  KeyboardAvoidingView, TextInput, StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState('');
  const [taskItems ,setTaskItems] = useState([]);

  const removeTask = (index) => {
    let itemsListed = [...taskItems];
    itemsListed.splice(index, 1);
    setTaskItems(itemsListed);

  }

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
      setTask(null);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <View>
        {
     taskItems.map((item, index) => {
       return (
       <TouchableOpacity
       onPress={() => removeTask(index)}
       key={index}
       >
         <Task task={item}/>
       </TouchableOpacity>
       )
     })
    }
      </View>
      <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.Wrapper}
            >
                <TextInput
                style={styles.textinput}
                placeholder={" Enter a task"}
                value = {task}
                onChangeText={text => setTask(text)}
                />
                <TouchableOpacity
                onPress={handleAddTask}
                >
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  addText:{
    fontSize:20,
  },
  Wrapper:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    position:'absolute',
    bottom:20,
    marginLeft:20,
    alignItems:'center'
    
  },
  addWrapper:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'#ffddd2',
    display:'flex',
    justifyContent:'center',
    alignItems:'center', 

  },
  textinput:{
    backgroundColor:"#ffddd2",
    width:290,
    height:50,
    marginRight:10,
    borderRadius:30,
    paddingLeft:15
},
  container: {
    flex: 1,
    backgroundColor: '#e07a5f',
  },
  title: {
    color:'#edf6f9',
    fontSize:25,
    paddingTop:45,
    paddingLeft:20

  }
});
