import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { Form, Label, Input, TextArea, Button } from './style'; // Ajuste o caminho conforme necessário

function FormPods() {
  const [modelo, setModelo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

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
        <Button type="submit">Adicionar Produto</Button>
        </Form>
    </div>
  );
}

export default FormPods;
