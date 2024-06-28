import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { Form, Label, Input, TextArea, Button } from './style'; // Ajuste o caminho conforme necessário
<<<<<<< HEAD
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
=======
>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2

function FormPods() {
  const [modelo, setModelo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
<<<<<<< HEAD
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Captura o primeiro arquivo
    if (file) {
      setFile(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor, selecione uma imagem para o produto.");
      return;
    }
    const storage = getStorage();
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = await uploadBytes(storageRef, file);

    if (uploadTask) {
      const imageUrl = await getDownloadURL(uploadTask.ref);

      try {
        await addDoc(collection(db, "Fones"), {
          Modelo: modelo,
          Descricao: descricao,
          Preco: Number(preco),
          ImagemUrl: imageUrl,
        });
        alert("Fone adicionado com sucesso!");
        // Limpa o formulário e o arquivo
        setModelo("");
        setDescricao("");
        setPreco("");
        setFile(null);
      } catch (error) {
        console.error("Erro ao adicionar fone: ", error);
        alert("Erro ao adicionar fone!");
      }
=======

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Fones"), {
        Modelo: modelo,
        Descricao: descricao,
        Preco: Number(preco) // Garante que o preço é convertido para número
      });
      alert('Celular adicionado com sucesso!');
      // Limpa o formulário
      setModelo('');
      setDescricao('');
      setPreco('');
    } catch (error) {
      console.error("Erro ao adicionar celular: ", error);
      alert('Erro ao adicionar celular!');
>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2
    }
  };

  return (
    <div>
        <Form onSubmit={handleSubmit}>
        <h2>Adicionar AirPods</h2>
        <Label>
            <Input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required placeholder="Modelo"/>
        </Label>
        <Label>
            <TextArea value={descricao} onChange={(e) => setDescricao(e.target.value)} required  placeholder="Descrição"/>
        </Label>
        <Label>
            <Input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required placeholder="Preço"/>
        </Label>
<<<<<<< HEAD
        <Label>
          <input type="file" onChange={handleFileChange} />
        </Label>
=======
>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2
        <Button type="submit">Adicionar Produto</Button>
        </Form>
    </div>
  );
}

export default FormPods;
