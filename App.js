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
  const [user, setUser] = useState({name:'', ano:'', link:'', email:''})
  var uri = `http://apperomaneio.lojakdecor.com.br/perfil.php?id=`+ usuario;
    useEffect(() => { 
        axios.get(uri)
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
          source = {`http://apperomaneio.lojakdecor.com.br/feirante/`+link1} /></View>
          <View><Text style={styles.button4}>nome:{user.name} Desde:{user.ano}</Text></View>
          <View><Text style={styles.button4}>Contatos:</Text></View><View><Text style={styles.button4}>email:{user.email}</Text></View></View>);
}

function Cadastrar({ props, navigation }) {
  const uri2 = `http://apperomaneio.lojakdecor.com.br/cadastrar.php`
      // Creating Login Activity.



  const [senha, setSenha] = useState('')
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
              body: JSON.stringify({ nome,senha,email })
          })
          const json = await resp.json()
          const mensagem = "FOi cadastrado!!";
          Alert.alert(mensagem);
          //props.navigation.navigate('CadastrarRGeFoto', { usuario: json });
      } catch (e) {
        const  mensagem = "Não foi cadastrado!!";
          Alert.alert(mensagem);
      }
  }

  return ( <View style = { styles.App } >

     
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
       <Button title = "CADASTRAR"
      onPress = {
          () => cadastrar()
      }
      color = "#18d070" />

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
      <Text style = { styles.button4} > Seu usuário ou senha está errada!!</Text></View >
  );
}
function Menu({ route, navigation }) {
  /* 2. Get the param */
  const { usuario } = route.params;

  return ( <View style = { styles.App } >
      <Text style = { styles.button4} > id: { JSON.stringify(usuario) }</Text><View><Button title = "PERFIL DE USUÁRIO"
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

const uri = `http://apperomaneio.lojakdecor.com.br/login.php`
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
      
      <Text style = { styles.button4 } >Email</Text>
      <TextInput  placeholder = "Digite seu email" onChangeText = { txt => setUser(txt) }
      underlineColorAndroid = 'transparent'
      style = { styles.TextInputStyleClass }/>
      <Text style = { styles.button4 }>Senha</Text>
      <TextInput placeholder = "Digite sua senha" onChangeText = { text => setPass(text) }
      underlineColorAndroid = 'transparent'  style = { styles.TextInputStyleClass }
      secureTextEntry = { true } />
      <TouchableOpacity style={styles.button}
      onPress = {
          () => login()
      }
      >
        <Text style = { styles.button5 }>ENTRAR</Text>
        </TouchableOpacity>
        <View><Text style = { styles.button4 }>CRIAR UMA CONTA </Text></View><View style={{flex: 1, flexDirection: 'row'}}><View style={{width: 200, height: 50}} ></View><View><TouchableOpacity style={{width: 100, height: 50}}
        onPress = {
            () => props.navigation.navigate('CADASTRAR')
        }>
        <Text  style = { styles.button7 }>AGORA</Text>
        </TouchableOpacity></View>
        </View>
      </View>
     

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

const width_proportion = 400;
const height_proportion = 250;
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
    marginLeft:50,
   

  },
  button:{
    borderRadius: 30,
    marginTop:10,
    backgroundColor: '#18d070',
    color:'#ffffff',
    padding: 5,
    fontSize:20,
    marginLeft:100,
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
    marginLeft:50,
    
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
    alignSelf: 'flex-end'
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
