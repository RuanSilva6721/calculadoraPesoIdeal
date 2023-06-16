import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(''); // Armazena o valor do peso
  const [altura, setAltura] = useState(''); // Armazena o valor da altura
  const [sexo, setSexo] = useState(''); // Armazena o valor do sexo
  const [pesoIdeal, setPesoIdeal] = useState(''); // Armazena o valor do peso ideal
  const [pesoIdealAjustado, setPesoIdealAjustado] = useState(''); // Armazena o valor do peso ideal ajustado

  const calcularPesoIdeal = () => {
    if (peso && altura && sexo) {
      const alturaCentimetros = parseFloat(altura);
      let pesoIdealCalculado = 0;

      if (sexo.toLowerCase() === 'm') {
        pesoIdealCalculado = 52 + 0.75 * (alturaCentimetros - 152.4);
      } else if (sexo.toLowerCase() === 'f') {
        pesoIdealCalculado = 52 + 0.67 * (alturaCentimetros - 152.4);
      }

      const pesoIdealFormatado = pesoIdealCalculado.toFixed(2);
      const pesoIdealAjustadoCalculado =
        (parseFloat(peso) - pesoIdealCalculado) * 0.25 + pesoIdealCalculado;
      const pesoIdealAjustadoFormatado = pesoIdealAjustadoCalculado.toFixed(2);

      setPesoIdeal(pesoIdealFormatado);
      setPesoIdealAjustado(pesoIdealAjustadoFormatado);
      setPeso('');
      setAltura('');
      setSexo('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Peso Ideal</Text>
      <TextInput
        placeholder="Peso (Kg)"
        keyboardType="numeric"
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        placeholder="Altura (cm)"
        keyboardType="numeric"
        style={styles.input}
        value={altura}
        onChangeText={setAltura}
      />
      <TextInput
        placeholder="Sexo (m/f)"
        style={styles.input}
        value={sexo}
        onChangeText={setSexo}
      />
      <TouchableOpacity style={styles.button} onPress={calcularPesoIdeal}>
        <Text style={styles.textoButton}>Calcular</Text>
      </TouchableOpacity>
      {pesoIdeal && pesoIdealAjustado ? (
        <View>
          <Text style={styles.resultado}>Peso Ideal: {pesoIdeal} Kg</Text>
          <Text style={styles.resultado}>
            Peso Ideal Ajustado: {pesoIdealAjustado} Kg
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 250,
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#41AEF4',
    borderRadius: 10,
    margin: 15,
    padding: 10,
  },
  textoButton: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
  },
  resultado: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
