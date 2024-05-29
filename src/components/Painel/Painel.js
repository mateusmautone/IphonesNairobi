import React, {useState} from 'react';
import FormCelular from './FormCelular';
import FormPods from './FormPods';
import FormRelogio from './FormRelogio';
import { Container, Menu, StyledSelect } from './style'; // Ajuste o caminho conforme necessário

function AdminPage() {
  const [formSelecionado, setFormSelecionado] = useState("celulares");

  const handleSelectChange = (event) => {
    setFormSelecionado(event.target.value);
  };
  return (
    <Container>
      <Menu>
        <div>
          <h1>Administração de Produtos</h1>
        </div>
        <div>
          <StyledSelect onChange={handleSelectChange}>
            <option value="celulares">Celulares</option>
            <option value="relogios">Relógios</option>
            <option value="fones">AirPods</option>
          </StyledSelect>
        </div>
      </Menu>

      <div>
        {formSelecionado === "celulares" && <FormCelular />}
        {formSelecionado === "relogios" && <FormRelogio />}
        {formSelecionado === "fones" && <FormPods />}
      </div>
    </Container>
  );
}

export default AdminPage;
