import React from 'react'
import { View,Text,StyleSheet,TextInput,FlatList, Button ,TouchableOpacity } from 'react-native'
import formContext from "./context"
export default function List(){
    return (
        <View>
           <View style={{flex: 1,backgroundColor:"#fff",marginTop:80}}>
            <View style={styles.action}>
            <TextInput 
                style={styles.textInput}
                placeholder="Nom de produit"
                 onChangeText={(val) => formContext.setProduct({
                     ...product,nom:val})}
                />
                </View>
                <View style={styles.action}>
            <TextInput 
                style={styles.textInput}
                placeholder="Prix"
                 onChangeText={(val) => formContext.setProduct({
                    ...product,prix:val})}
                />
                </View>
                <View style={styles.action}>
            <TextInput 
                style={styles.textInput}
                placeholder="Quantité"
                 onChangeText={(val) => formContext.setProduct({
                    ...product,quantity:val})}
                />
                </View>
                    <Button title="Ajouter" 
                onPress={()=>formContext.addItem()}
                ></Button>
                 <TouchableOpacity 
                 style={ styles.cancelButton} 
                onPress={()=>setvisiblepopup(false)}
                >
                    <Text style={{
                        textAlign:'center'
                        ,fontSize:20,
                        color:"white"
                    }}>Annuler</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
     padding:10,
     backgroundColor:"gray"
    },
    addAnnonce:{
        flexDirection:'row',
    },
    cancelButton:{
        marginTop:10,
        height:30,
        backgroundColor:"red",
        color:'red',
    },
    action:{
        flexDirection: 'row',
        marginTop: 20,
        marginLeft:10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
      },
})