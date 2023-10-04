import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';
import { useEffect } from 'react';

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerPacientesLocalStorage = () => {
      const pacientesGuardados = JSON.parse(localStorage.getItem('pacientes'));
      pacientesGuardados?.length > 0 && setPacientes(pacientesGuardados);
    }
    obtenerPacientesLocalStorage();
  }, [])
  
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = pacienteId => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== pacienteId);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
