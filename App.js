import React, { useState, useEffect } from 'react';
import { StyleSheet,TextInput, View, Alert, Image, Button, Text,TouchableOpacity,ScrollView} from 'react-native';

// Importing Stack Navigator library to add multiple activities.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

function Perfil({ route, navigation }) {
  /* 2. Get the param */
  const {email } = route.params;
  console.log(email);
  const [user, setUser] = useState({name:'', ano:'', link:'', email:''})
  var uri3 = `http://romaneiosdeestoque.com.br/perfil.php?email=`+ email;
    useEffect(() => { 
        axios.get(uri3)
             .then(response => { 
                 setUser(response.data[0]);
                 
             }); 
        }, []);
        var link1 = user.link;
        return(<View style={styles.App}>
          <View><Text style ={styles.cabecalho}>...</Text></View>
          <View>
          <Image style = { styles.logo }
          source = { require('./assets/logominhaconta.png') }/></View>
          <View><Image style = { styles.logo }
          source = {`http://romaneiosdeestoque.com.br/feirante/`+link1} /></View>
          <View><Text style={styles.button4}>nome:{user.name} Desde:{user.ano}</Text></View>
          <View><Text style={styles.button4}>Contatos:</Text></View><View><Text style={styles.button4}>email:{user.email}</Text></View></View>);
}

function Cadastrar({ props, navigation }) {
  const uri2 = `http://romaneiosdeestoque.com.br/cadastrar.php`
      // Creating Login Activity.



  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const[telefone,setTelefone] = useState('')

  const cadastrar = async() => {
      try {
          const resp = await fetch(uri2, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ nome,senha,email, telefone })
          })
          c
          
          Alert.alert('Cadastrou com sucesso!!');
          //props.navigation.navigate('CadastrarRGeFoto', { usuario: json });
      } catch (e) {
        
          Alert.alert('Não cadastrou');
      }
  }

  return ( <View style = { styles.App } ><ScrollView>

     
      <TextInput placeholder = "Digite o seu nome"
      onChangeText = { text => setNome(text) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
      <TextInput placeholder = "Digite sua senha"
      onChangeText = { text => setSenha(text) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
       <TextInput placeholder = "Digite o seu email"
      onChangeText = { text => setEmail(text) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
      <TextInput placeholder = "Digite o seu telefone"
      onChangeText = { text => setTelefone(text) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
          <Button title = "CADASTRAR"
      onPress = {
          () => cadastrar()
      }
      color = "#FFCC33" />

     

  

</ScrollView></View>

  );
}

function Entrada({ route, navigation }) {
    /* 2. Get the param */
    const { usuario } = route.params;
    
    if( usuario !='Invalid Username or Password Please Try Again'){
        navigation.navigate('MENU', { usuario });
    }else{
        Alert.alert(JSON.stringify(usuario));
    }

    return ( <View style = { styles.App } >
        <Text style = { styles.texto } > Seu usuário ou senha está errada!!</Text></View >
    );
}

function Menu({ route, navigation }) {
  /* 2. Get the param */
  const { usuario} = route.params;
  const {email} = usuario;
  return ( <View style = { styles.App } >
      <Text style = { styles.button4} > id: { JSON.stringify(email) }</Text><View><Button title = "PERFIL DE USUÁRIO"
      onPress = {
          () => navigation.navigate('PERFIL', { email })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "CAMPANHA DE DOAÇÃO"
      onPress = {
          () => navigation.navigate('DETALHE', { email,id:1 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "VERDURAS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 2 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "LEGUMES"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 3 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "FRUTAS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 4 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "PANC"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 5 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "FUNGOS COMESTÍVEIS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 6 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "OVOS E MEL"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 7 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      
      <View><Button title = "LATICÍNIOS E RESFRIADOS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 8 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "DOCES E GELÉIAS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 9 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "PROCESSADOS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id:10 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "PÃES E BOLOS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 11 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "PÃES E BOLOS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id:12 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View> <View><Button title = "MUDAS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 13 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View> <View><Button title = "MERCEARIA"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id:14 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
       <View><Button title = "COSMÉTICOS"
      onPress = {
        () => navigation.navigate('DETALHE', { email,id: 15 })
      }
      color = "#18d070" />
      </View><View style={styles.espaco}></View>
      
      
      </View>
  );
}


  // Creating Login Activity.

  function Login(props) {

    const uri = `http://romaneiosdeestoque.com.br/login.php`
      const [usuario, setUser] = useState('')
      const [senha, setPass] = useState('')
    
    
    
      const login = async() => {
          try {
              const resp = await fetch(uri, {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ usuario, senha })
              })
              const json = await resp.json()
    
              props.navigation.navigate('ENTRADA', { usuario: json });
          } catch (e) {
              console.log('erro on login...', e.message);
          }
      }
    
      return (<View style = { styles.App }><ScrollView>
          <View><Text style ={styles.cabecalho}>...</Text></View><View>
          <Image style = { styles.logo }
          source = { require('./assets/logoacima.png') }/></View>
          <Text style = { styles.button4 } >Email</Text>
          <TextInput  placeholder = "Digite seu email" onChangeText = { txt => setUser(txt) }
          underlineColorAndroid = 'transparent'
          style = { styles.TextInputStyleClass }/>
          <Text style = { styles.button4 }>Senha</Text>
          <TextInput placeholder = "Digite sua senha" onChangeText = { text => setPass(text) }
          underlineColorAndroid = 'transparent'  style = { styles.TextInputStyleClass }
          secureTextEntry = { true } />
          <Button title = "CADASTRAR"
      onPress = {
          () => login()
      }
      color = "#FFCC33" />

          <View style = { styles.espaco }></View><View><Text style={styles.button4}>CRIAR UMA CONTA </Text><TouchableOpacity style={styles.button2}
          onPress = {
              () => props.navigation.navigate('CADASTRAR')
          }>
          <Text style={styles.button3}>AGORA</Text>
            </TouchableOpacity>
           
          </View></ScrollView></View>
    
      );
    }
    
    
const Stack = createStackNavigator();

function App({navigation}) {
  return (

      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "HOME" component = { Login } />
     
      <Stack.Screen name = "ENTRADA" component = { Entrada } />
    
      
       <Stack.Screen name = "MENU" component = { Menu } />
        <Stack.Screen name = "CADASTRAR" component = { Cadastrar } />
        <Stack.Screen name = "PERFIL" component = { Perfil } />
          
      </Stack.Navigator >
  </NavigationContainer>
  )
  }

export default App;

const width_proportion = 400;
const height_proportion = 170;
const styles = StyleSheet.create({

  App: {

   
      flex:1,
      
      backgroundColor: '#f5f6f8',
      color: '#000000',
      
    
   
  
  },

  TextInputStyleClass: {

    textAlign: 'center',
    margin: 5,
    height: 40,
    width: 300,
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2 ,
    marginLeft:20,
   

  },
  button:{
    borderRadius: 30,
    marginTop:10,
    backgroundColor: '#18d070',
    color:'#ffffff',
    padding: 5,
    fontSize:20,
    marginLeft:60,
    height: 40,
    width:200,
    textAlign: 'center',
  },
  button3:{
  color:'#18d070',
  alignSelf: 'flex-end'
  },

  button4:{
    marginTop:20,
    color:'#000000',
    fontSize:15,
    marginLeft:20,
    
  },
  button5:{
    
    color:'#ffffff',
    fontSize:20,
    textAlign: 'center',
  },
  button6:{
    
    color:'#18d070',
    fontSize:20,
    
  },
  button7:{
     
    backgroundColor: '#ffffff',
    color:'#18d070',
    fontSize:20,
  },
  button2:{
    color:'#000000',
    fontSize:25,
    alignSelf: 'center'
  },
  TextComponentStyle: {
      fontSize: 30,
      color: "#000",
      textAlign: 'center',
      marginBottom: 15
  },
  logo: {
    marginTop:0,
      width: width_proportion,
      height:height_proportion,
      
      
  },
 
  texto: {
      color: '#ffffff',
      textAlign: 'center',
  },
  texto2: {
      color: '#ffffff',
      textAlign: 'center',
      fontSize:40,
  },
  
});
