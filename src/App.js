import React, { useState, useEffect } from 'react';
import './App.css';

function Cadastro1() {
  const [tanque, setTanque] = useState('');
  const [consumo, setConsumo] = useState('');
  const [autonomia, setAutonomia] = useState('');
  const [precoCombustivel, setPrecoCombustivel] = useState('');
  const [gasto, setGasto] = useState('');
  const [trajetoria, setTrajetoria] = useState('');
  const [meta, setMeta] = useState('');
  const [gasto2, setGasto2] = useState('');
  const [aluguel, setAluguel] = useState('');
  const [tipoAluguel, setTipoAluguel] = useState('');
  const [valorAluguel, setValorAluguel] = useState('');

  useEffect(() => {
    if (!isNaN(tanque) && tanque > 0 && !isNaN(consumo) && consumo > 0) {
      const autonomiaValue = (tanque * consumo).toFixed(2);
      setAutonomia(autonomiaValue);

      if (!isNaN(precoCombustivel) && precoCombustivel > 0) {
        const gastoValue = (parseFloat(autonomiaValue) * parseFloat(precoCombustivel)).toFixed(2);
        setGasto(gastoValue);
      } else {
        setGasto('');
      }

      if (!isNaN(trajetoria) && trajetoria > 0) {
        const resultadoTrajetoriaValue = ((parseFloat(trajetoria) / parseFloat(consumo)) * parseFloat(precoCombustivel)).toFixed(2);
        setGasto(resultadoTrajetoriaValue);
      }

      if (!isNaN(meta) && meta > 0) {
        const gasto2Value = ((parseFloat(meta) / parseFloat(consumo)) * parseFloat(precoCombustivel)).toFixed(2);
        setGasto2(gasto2Value);
      } else {
        setGasto2('');
      }

      if (tipoAluguel === 'Mensal' && !isNaN(valorAluguel) && valorAluguel > 0) {
        const gastoAluguelValue = (parseFloat(valorAluguel) / 30).toFixed(2); // Divisão por 30 para obter resultado diário
        setAluguel(gastoAluguelValue);
      } else if (tipoAluguel === 'Semanal' && !isNaN(valorAluguel) && valorAluguel > 0) {
        const gastoAluguelValue = (parseFloat(valorAluguel) / 7).toFixed(2); // Divisão por 7 para obter resultado diário
        setAluguel(gastoAluguelValue);
      } else {
        setAluguel('');
      }
    } else {
      setAutonomia('');
      setGasto('');
      setGasto2('');
      setAluguel('');
    }
  }, [tanque, consumo, precoCombustivel, trajetoria, meta, tipoAluguel, valorAluguel]);

  const handleTanqueChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setTanque(value);
    }
  };

  const handleConsumoChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || !isNaN(parseFloat(value))) {
      setConsumo(value);
    }
  };

  const handlePrecoCombustivelChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || !isNaN(parseFloat(value))) {
      setPrecoCombustivel(value);
    }
  };

  const handleTrajetoriaChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || !isNaN(parseFloat(value))) {
      setTrajetoria(value);
    }
  };

  const handleTipoAluguelChange = (event) => {
    setTipoAluguel(event.target.value);
  };

  const handleValorAluguelChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || !isNaN(parseFloat(value))) {
      setValorAluguel(value);
    }
  };

  /*const handleTransportarAutonomia = () => {
    if (autonomia !== '') {
      setTrajetoria(autonomia);
    }
  };
  <button onClick={handleTransportarAutonomia}>Aut | Trip=Kms</button>*/

  const handleZerar = () => {
    setTanque('');
    setConsumo('');
    setAutonomia('');
    setPrecoCombustivel('');
    setGasto('');
    setTrajetoria('');
    setMeta('');
    setGasto2('');
    setAluguel('');
    setTipoAluguel('');
    setValorAluguel('');
  };

  const handleMetaChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || !isNaN(parseFloat(value))) {
      setMeta(value);
    }
  };

  // Calcular o Total Comb / Aluguel
  const totalCombAluguel = (parseFloat(gasto2) + parseFloat(aluguel)).toFixed(2);

  return (
    <div className="cadastro1">
      <p>Calcule gasto básico para dirigir/Uber, 99  etc..</p><li></li>
      
      
<p>Insira os Dados</p>
      <label htmlFor="tanque">Tanque (litros):</label>
      <input
        type="text"
        name="tanque"
        value={tanque}
        onChange={handleTanqueChange}
      /><li>

      <label htmlFor="consumo">Consumo (km/l):</label>
      <input
        type="text"
        name="consumo"
        value={consumo}
        onChange={handleConsumoChange}
      /></li>

      <p>
        Autonomia:{' '}
        <span style={{ fontStyle: autonomia === '' ? 'italic' : 'normal', fontWeight: autonomia !== '' ? 'bold' : 'normal' }}>
          {autonomia !== '' ? `${autonomia} km` : '---'}
        </span>
      </p>

      <label htmlFor="trajetoria">Percurso:</label>
      <input
        type="text"
        name="trajetoria"
        value={trajetoria}
        onChange={handleTrajetoriaChange}
      />

      <label htmlFor="precoCombustivel">Combustível(litro):$</label>
      <input
        type="text"
        name="precoCombustivel"
        value={precoCombustivel}
        onChange={handlePrecoCombustivelChange}
      />

      <p>
        Gastou:{' '}
        <span style={{ fontStyle: gasto === '' ? 'italic' : 'normal', fontWeight: gasto !== '' ? 'bold' : 'normal' }}>
          {gasto !== '' ? `R$${gasto}` : '---'}
        </span>
      </p>

      
      

      <div><p>
        <label htmlFor="meta"><h1>Metas:</h1></label></p>
        <select name="meta" value={meta} onChange={handleMetaChange}>
          <option value="">Selecione uma opção</option>
          <option value="150">150 Kms</option>
          <option value="200">200 Kms</option>
          <option value="250">250 Kms</option>
          <option value="350">350 Kms</option>
        </select>
        {meta === '' ? null : (
          <p>
            {' '}
            <span style={{ fontStyle: (meta === '' || (valorAluguel !== '' && tipoAluguel === 'Mensal')) ? 'italic' : 'normal', fontWeight: (meta !== '' && (valorAluguel === '' || tipoAluguel !== 'Mensal')) ? 'bold' : 'normal' }}>
              {meta !== '' ? `${meta} Kms` : '---'}
            </span>
          </p>
        )}
      </div>

      {meta === '' || isNaN(meta) ? null : (
        <div><p>
          Gastou:{' '}
          <span style={{ fontStyle: gasto2 === '' ? 'italic' : 'normal', fontWeight: gasto2 !== '' ? 'bold' : 'normal' }}>
            {gasto2 !== '' ? `R$${gasto2}` : '---'}
          </span>
        </p></div>
      )}

      <div>
        <p> Gasto Fixo</p>
        <label htmlFor="tipoAluguel">Locação:</label>
        <select name="tipoAluguel" value={tipoAluguel} onChange={handleTipoAluguelChange}>
          <option value="">Selecione uma opção</option>
          <option value="Mensal">Mensal</option>
          <option value="Semanal">Semanal</option>
        </select>
        {tipoAluguel === 'Mensal' && (
          <div>
            <label htmlFor="valorAluguel">$ Mensal:</label>
            <input
              type="text"
              name="valorAluguel"
              value={valorAluguel}
              onChange={handleValorAluguelChange}
            />
          </div>
        )}
        {tipoAluguel === 'Semanal' && (
          <div>
            <label htmlFor="valorAluguel">$ Semanal:</label>
            <input
              type="text"
              name="valorAluguel"
              value={valorAluguel}
              onChange={handleValorAluguelChange}
            />
          </div>
        )}
        {aluguel !== '' && (
          <p>
            Aluguel por dia:{' '}
            <span style={{ fontStyle: aluguel === '' ? 'italic' : 'normal', fontWeight: aluguel !== '' ? 'bold' : 'normal' }}>
              {aluguel !== '' ? `R$${aluguel}` : '---'}
            </span>
          </p>
        )}
        
      </div>

      {gasto2 !== '' && aluguel !== '' && (
        <p>
         Comb+Aluguel TOTAL:{' '}
          <span style={{ fontStyle: totalCombAluguel === '' ? 'italic' : 'normal', fontWeight: totalCombAluguel !== '' ? 'bold' : 'normal' }}>
            {totalCombAluguel !== '' ? `R$${totalCombAluguel}` : '---'}
          </span>
        </p>
      )}
      
      <p><button onClick={handleZerar}>Zerar Tudo</button></p>
    </div>
  );
}

export default Cadastro1;

