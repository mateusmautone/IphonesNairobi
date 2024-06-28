import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { Form, Label, Input, TextArea, Button } from './style'; // Ajuste o caminho conforme necessário
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function FormCelular() {
  const [modelo, setModelo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
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
        await addDoc(collection(db, "Celulares"), {
          Modelo: modelo,
          Descricao: descricao,
          Preco: Number(preco),
          ImagemUrl: imageUrl,
        });
        alert("Celular adicionado com sucesso!");
        // Limpa o formulário e o arquivo
        setModelo("");
        setDescricao("");
        setPreco("");
        setFile(null);
      } catch (error) {
        console.error("Erro ao adicionar celular: ", error);
        alert("Erro ao adicionar celular!");
      }
    }
  };

  return (
    <div>
        <Form onSubmit={handleSubmit}>
        <h2>Adicionar Celular</h2>
        <Label>
            <Input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required placeholder="Modelo"/>
        </Label>
        <Label>
            <TextArea value={descricao} onChange={(e) => setDescricao(e.target.value)} required  placeholder="Descrição"/>
        </Label>
        <Label>
            <Input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required placeholder="Preço"/>
        </Label>
        <Label>
          <input type="file" onChange={handleFileChange} />
        </Label>
        <Button type="submit">Adicionar Produto</Button>
        </Form>
    </div>
  );
}

export default FormCelular;
