import Paciente from './Paciente';

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return ( 
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
            <p className='mt-5 text-center mb-10'>
                Administra tus {''}
                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>
            
            { ((pacientes && pacientes.length == 0) && 
                <p className=' text-3xl font-bold text-center'>No hay pacientes aún</p>) 
            }

            {pacientes.map ( paciente => (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                ))}

        </div>
     );
}
 
export default ListadoPacientes;