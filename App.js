import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container,{flex:1}]}>

      <View style={[styles.container,styles.views,{flex:1, backgroundColor:'powderblue', }]}>
        <Text>Imagen</Text>
      </View>
      
      <View style={[styles.views,styles.container,{flex:5, backgroundColor:'yellowgreen', }]}>
      <Text>cuerpo</Text>
      </View>

      <View style={[styles.container,styles.views,{flex:1, backgroundColor:'gray', }]}>
      <Text>derechos reservados</Text>
      </View>
    
    </View>
  );
}

//CREAR COMPONENTE PARA LA IMAGEN
function Banner(){
  return(
   <Image source={require('')}>

    </Image>

  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  views:{
    width:'100%', 
    height:'100%', 
    borderColor:'black', 
    borderWidth:2, 
    borderRadius:5
    
  }
});
