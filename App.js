import React, { useState, useEffect } from 'react';
import { StyleSheet,ScrollView, SafeAreaView,TextInput, View, Alert,FlatList, Image, Button, Text,TouchableOpacity } from 'react-native';

// Importing Stack Navigator library to add multiple activities.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

function Perfil({ route, navigation }) {
  /* 2. Get the param */
  const { usuario } = route.params;
  console.log(usuario);
  const [user, setUser] = useState({nome_assemblex:'', rg: ''})
  var uri = 'http://127.0.0.1/feira/perfil.php?cpf='+ usuario;
    useEffect(() => { 
        axios.get(uri)
             .then(response => { 
                 setUser(response.data[0]);
                 
             }); 
        }, []);
        return(<View style={styles.App}><Text style={styles.texto}>nome:{user.nome} - rg:{user.rg}</Text></View>);
}
function Cadastrar({ props, navigation }) {
  const uri2 = `http://127.0.0.1/feira/cadastrar.php`
      // Creating Login Activity.



  const [rg, setRg] = useState('')
  const [cpf, setCpf] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const cadastrar = async() => {
      try {
          const resp = await fetch(uri2, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ rg, cpf, nome, email })
          })
          const json = await resp.json()
          Alert.alert({ usuario: json });
          //props.navigation.navigate('CadastrarRGeFoto', { usuario: json });
      } catch (e) {
          Alert.alert({ usuario: json });
      }
  }

  return ( <View style = { styles.App } >

      <TextInput placeholder = "Digite seu CPF"
      onChangeText = { txt => setCpf(txt) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
      <TextInput placeholder = "Digite o seu nome"
      onChangeText = { text => setNome(text) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
      <TextInput placeholder = "Digite o seu RG"
      onChangeText = { text => setRg(text) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
       <TextInput placeholder = "Digite o seu email"
      onChangeText = { text => setEmail(text) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
       <Button title = "CADASTRAR"
      onPress = {
          () => cadastrar()
      }
      color = "#FFCC33" />

      </View>

  );
}

function Entrada({ route, navigation }) {
  /* 2. Get the param */
  const { usuario } = route.params;
  if(usuario!='Invalid Username or Password Please Try Again'){
      navigation.navigate('MENU', { usuario });
  }

  return ( <View style = { styles.App } >
      <Text style = { styles.texto } > Seu usuário ou senha está errada!!</Text></View >
  );
}
function Menu({ route, navigation }) {
  /* 2. Get the param */
  const { usuario } = route.params;

  return ( <View style = { styles.App } >
      <Text style = { styles.texto2 } > CPF: { JSON.stringify(usuario) }</Text><View><Button title = "PERFIL DE USUÁRIO"
      onPress = {
          () => navigation.navigate('PERFIL', { usuario })
      }
      color = "#FFCC33" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "PRÓXIMAS ASSEMBLEIAS"
      onPress = {
          () => navigation.navigate('PRÓXIMAS ASSEMBLEIAS', { usuario })
      }
      color = "#FFCC33" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "MINHAS ASSEMBLEIAS"
      onPress = {
          () => navigation.navigate('MINHAS ASSEMBLEIAS', { usuario })
      }
      color = "#FFCC33" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "#INFORMAÇÕES IMPORTANTES#"
      onPress = {
          () => navigation.navigate('#INFORMAÇÕES IMPORTANTES#', { usuario })
      }
      color = "#FFCC33" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "DOCUMENTOS PARA HABILITAÇÃO"
      onPress = {
          () => navigation.navigate('DOCUMENTOS PARA HABILITAÇÃO', { usuario })
      }
      color = "#FFCC33" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "QUEM PARTICIPA DA ASSEMBLEIA"
      onPress = {
          () => navigation.navigate('QUEM PARTICIPA DA ASSEMBLEIA', { usuario })
      }
      color = "#FFCC33" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "COMO FUNCIONA A ASSEMBLEIA"
      onPress = {
          () => navigation.navigate('COMO FUNCIONA A ASSEMBLEIA', { usuario })
      }
      color = "#FFCC33" />
      </View><View style={styles.espaco}></View>
      <View><Button title = "COMO SERÁ COLETADO O VOTO"
      onPress = {
          () => navigation.navigate('COMO SERÁ COLETADO O VOTO', { usuario })
      }
      color = "#FFCC33" />
      </View><View style={styles.espaco}></View></View>
  );
}


  // Creating Login Activity.

function Login(props) {

const uri = `http://127.0.0.1/feira/login.php`
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

  return (<View style = { styles.App }>
      <View>
      <Image style = { styles.logo }
      source = { require('./assets/logoacima.png') }/></View>
      <Tex>Email</Tex>
      <TextInput   onChangeText = { txt => setUser(txt) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
      <Tex>Senha</Tex>
      <TextInput placeholder = "Digite sua senha" onChangeText = { text => setPass(text) }
      underlineColorAndroid = 'transparent'  style = { styles.TextInputStyleClass }
      secureTextEntry = { true } />
      <TouchableOpacity style={styles.button}
      onPress = {
          () => login()
      }
      >
        <Text>Entrar</Text>
        </TouchableOpacity>
      <View style = { styles.espaco }></View><View><TEXT style={styles.button4}>CRIAR UMA CONTA </TEXT><TouchableOpacity style={styles.button2}
      onPress = {
          () => props.navigation.navigate('CADASTRAR')
      }>
      <Text style={styles.button3}>AGORA</Text>
        </TouchableOpacity>
       
      </View></View>

  );
}


const Stack = createStackNavigator();

function App() {
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


const styles = StyleSheet.create({

  App: {

      justifyContent: 'center',
      flex: 1,
      margin: 10,
      backgroundColor: '#ffffff',
      color: '#000000',
  },

  TextInputStyleClass: {

      textAlign: 'center',
      marginBottom: 7,
      height: 40,
      borderWidth: 5,
      // Set border Hex Color Code Here.
      borderColor: '#cdcdc1',
      backgroundColor: '#ffffff',
      // Set border Radius.
      borderRadius: 5,

  },
  button:{
    borderRadius: 20,
    color:"#18d070"
  },
  button3:{
  color:"#18d070"
  },
  button4:{
    fontFamily: "Arial",
    color:"#00000",
    fontSize:20
  },
 
  button2:{
    color:"#00000",
    fontSize:25
  },
  TextComponentStyle: {
      fontSize: 20,
      color: "#000",
      textAlign: 'center',
      marginBottom: 15
  },
  logo: {
      width: 370,
      height: 300,
      justifyContent: 'center',
  },
  espaco: {
      height: 10
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
