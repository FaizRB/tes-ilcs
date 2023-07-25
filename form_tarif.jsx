import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const FormComponent = () => {
  const [negara, setNegara] = useState('');
  const [pelabuhan, setPelabuhan] = useState('');
  const [barang, setBarang] = useState('');
  const [harga, setHarga] = useState('');
  const [persentase, setPersentase] = useState('');
  const [tarif, setTarif] = useState('');

  const submitForm = () => {
    // handle form submission here
    const formValues = { negara, pelabuhan, barang, harga, persentase, tarif };
    console.log(formValues);
  };

  

  return (
    <View>
      <Text>Negara</Text>
      <TextInput
        value={negara}
        onChangeText={setNegara}
        placeholder="Negara"
      />
      <Text>Pelabuhan</Text>
      <TextInput
        value={pelabuhan}
        onChangeText={setPelabuhan}
        placeholder="Pelabuhan"
      />
      <Text>Barang</Text>
      <TextInput
        value={barang}
        onChangeText={setBarang}
        placeholder="Barang"
      />
      <Text>Harga</Text>
      <TextInput
        value={harga}
        onChangeText={setHarga}
        placeholder="Harga"
        keyboardType="numeric"
      />
      <Text>Tarif Bea Masuk</Text>
      <TextInput
        value={persentase}
        onChangeText={setPersentase}
        placeholder="Persentase"
        keyboardType="numeric"
      />
      <TextInput
        value={tarif}
        onChangeText={setTarif}
        placeholder="Tarif"
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={submitForm} />
    </View>
  );
};

export default FormComponent;
