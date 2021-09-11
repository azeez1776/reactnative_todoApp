import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Task = ({ task }) => {

   
    return (
        <View style={styles.task}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.taskText}>{task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    square: {
        width: 20,
        height: 20,
        borderRadius: 2,
        backgroundColor: "#e29578",
        marginRight: 20,
    },
    task: {
        padding: 10,
        marginLeft: 20,
        marginTop: 10,
        width: '90%',
        borderRadius: 10,
        backgroundColor: "#ffddd2",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskText: {
        fontSize: 20
    }
})

export default Task;

