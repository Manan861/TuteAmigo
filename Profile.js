import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config.js';

export default class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      userId: firebase.auth().currentUser.email,
      userName:'',
      emailId:'',
      GroupsFollowed:this.props.navigation.getParam('userID')["GroupsFollowed"],
      GroupsOwned:this.props.navigation.getParam('userID')["GroupsOwned"],
      Contact : '',
      GroupName:this.props.navigation.getParam9('userID')["GroupName"]
    }
  }

  getUserDetails=(userId)=>{
      db.collection("userId").where('email_id','==', emailId).get()
      .then((snapshot)=>{
        snapshot.forEach((doc) => {
          console.log(doc.data().userName);
          this.setState({
            userName  :doc.data().userName 
          })
        })
      })
    }



updateGroupFollowed=()=>{
  db.collection('userId').where('Groups_Followed','==', GroupsFollowed).add({
    group_name: this.state.GroupName
  })
}

updateGroupOwned=()=>{
    db.collection('userId').where('Groups_Owned','==', GroupsOwned).add({
      group_name: this.state.GroupName
    })
  }





componentDidMount(){
  this.getreceiverDetails()
  this.getUserDetails(this.state.userId)
}


  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:0.1}}>
          <Header
            leftComponent ={<Icon name='arrow-left' type='feather' color='#ffff'  onPress={() => this.props.navigation.goBack()}/>}
            centerComponent={{ text:"Exchange Items", style: { color:'#ffff', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "#32867d"
          />
        </View>
        <View style={{flex:0.3,marginTop:RFValue(20)}}>
          <Card
              title={"Item Information"}
              titleStyle= {{fontSize : 20}}
            >
            
              <Text style={{fontWeight:'bold'}}>Name : {this.state.itemName}</Text>
            
              <Text style={{fontWeight:'bold'}}>Reason : {this.state.description}</Text>
          
          </Card>
        </View>
        <View style={{flex:0.3}}>
          <Card
            title={"Receiver Information"}
            titleStyle= {{fontSize : 20}}
            >
            <Card>
              <Text style={{fontWeight:'bold'}}>Name: {this.state.receiverName}</Text>
            
              <Text style={{fontWeight:'bold'}}>Contact: {this.state.receiverContact}</Text>
            
              <Text style={{fontWeight:'bold'}}>Address: {this.state.receiverAddress}</Text>
            </Card>
          </Card>
        </View>
        <View style={styles.buttonContainer}>
          {
            this.state.receiverId !== this.state.userId
            ?(
              <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{
                    this.updateBarterStatus()
                    this.addNotification()
                    this.props.navigation.navigate('MyBarters')
                  }}>
                <Text style={{color:'#ffff'}}>I want to Exchange</Text>
              </TouchableOpacity>
            )
            : null
          }
        </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buttonContainer : {
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
    marginTop:RFValue(30)
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius: 10,
    backgroundColor: '#32867d',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  }
})