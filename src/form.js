import React, { useState } from 'react'
import { View,Text,StyleSheet,TextInput,FlatList, Button ,TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import formContext from "./context"
export default function Form(){
    const [list,setlist]=useState([{
        id:0,
        nom:"produit 1",
        prix:300,
        quantity:10
    },
    {
        id:1,
        nom:"produit 2",
        prix:400,
        quantity:20
    },
    {
        id:2,
        nom:"produit 3",
        prix:2500,
        quantity:360
    }
    ,
    {
        id:3,
        nom:"produit 4",
        prix:400,
        quantity:40
    },
    {
        id:5,
        nom:"produit 5",
        prix:500,
        quantity:50
    }
    ,{
        id:6,
        nom:"produit 6",
        prix:600,
        quantity:60
    },
    {
        id:7,
        nom:"produit 7",
        prix:700,
        quantity:70
    },
    {
        id:8,
        nom:"produit 8",
        prix:800,
        quantity:90
    },
    {
        id:10,
        nom:"produit 10",
        prix:1500,
        quantity:120
    },
    {
        id:11,
        nom:"produit 11",
        prix:1200,
        quantity:30
    }
])
    const [Visiblepopup,setvisiblepopup]=React.useState(false)
    const [product,setProduct]=useState({
        nom:"",
        prix:0,
        quantity:0
    })
    const deleteItem=(iditem)=>{
        setlist(list.filter(e=>e.id!=iditem))
    }
    const addItem=()=>{
        setlist(list.concat({
            ...product,
            id:list.length+2
        }))
        setvisiblepopup(false)
    }
    return (
        <View style={styles.container}>
            <View style={styles.addAnnonce}>
                <Button title="Ajouter +" 
                onPress={()=>setvisiblepopup(true)}
                ></Button>
            </View>
            <Modal isVisible={Visiblepopup}>
            <View style={{flex: 1,backgroundColor:"#fff",marginTop:80}}>
            <View style={styles.action}>
            <TextInput 
                style={styles.textInput}
                placeholder="Nom de produit"
                 onChangeText={(val) => setProduct({
                     ...product,nom:val})}
                />
                </View>
                <View style={styles.action}>
            <TextInput 
                style={styles.textInput}
                placeholder="Prix"
                 onChangeText={(val) => setProduct({
                    ...product,prix:val})}
                />
                </View>
                <View style={styles.action}>
            <TextInput 
                style={styles.textInput}
                placeholder="Quantité"
                 onChangeText={(val) => setProduct({
                    ...product,quantity:val})}
                />
                </View>
                    <Button title="Ajouter" 
                onPress={()=>addItem()}
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
                </Modal>
            {/* list of products  */}
            <View>
            <View style={{flexDirection:"row",marginTop:15}}>
                     <Text style={{flex:1}}>N°</Text>
                     <Text style={{flex:3}}>Nom</Text>
                     <Text style={{flex:1}}>Prix</Text>
                     <Text style={{flex:1}}>Quant</Text>
                     <Text style={{flex:2}}>Action</Text>
                     </View>
                <FlatList
                data={list}
                
                 renderItem={({item}) =>  
                 <View style={{flexDirection:"row",marginTop:15}}>
                     <Text style={{flex:1}}>{item.id}</Text>
                     <Text style={{flex:3}}>{item.nom}</Text>
                     <Text style={{flex:1}}>{item.prix}</Text>
                     <Text style={{flex:1}}>{item.quantity}</Text>
                     <Button style={{flex:2,backgroundColor:"red"}} title='Supprimer'
                     onPress={()=>{deleteItem(item.id)}}
                     ></Button>
                     </View>
                    }
                    />
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