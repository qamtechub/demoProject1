

import React,{useState} from 'react';
import { View,Text,Button,TouchableOpacity} from 'react-native';




const App =() => {
  const [value,setValue]=useState(5)
 

  return (
    <View
    style={{
      
      backgroundColor:'yellow',
    
    }}
    >
      <TouchableOpacity
      onPress={()=>{
         setValue(value+1)
        }
      }
      >
     <Text style={{
      fontSize:20,
      backgroundColor:'red',
      width:'50%',
      margin:30,
      color:'white',
      marginLeft:'30%',
      padding:20,
      textAlign:'center',
      borderRadius:10
     }}>Add Value</Text>
 </TouchableOpacity>
     
     <Text style={{
      fontSize:30,
      
      width:'50%',
      margin:30,
      color:'red',
      marginLeft:'30%',
      padding:20,
      textAlign:'center',
      borderRadius:10
     }}>
      {value}
     </Text>

     <TouchableOpacity
      onPress={()=>{
         if(value>1) {
          setValue(value-1)
         }
         else {
          alert('Cannot decrease More')
         }
        }
      }
      >
     <Text style={{
      fontSize:20,
      backgroundColor:'red',
      width:'50%',
      margin:30,
      color:'white',
      marginLeft:'30%',
      padding:20,
      textAlign:'center',
      borderRadius:10
     }}>Decrease Value</Text>
    
    </TouchableOpacity>
    </View>
    
    
   
  );
};


export default App;
