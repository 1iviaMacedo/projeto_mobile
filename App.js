import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Lívia Macedo de Oliveira | armário 02 - notebook 02 |</Text>
      <Text style={styles.text2}> Lívia Macedo de Oliveira | armário 02 - notebook 02 |</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
    marginLeft: '20px',
  },
    text2: {
    flex: 1,
    border:'1px solid orange',
    backgroundColor: '#ffff99',
    fontSize: '30px',
    marginLeft: '10px',
  },
});
