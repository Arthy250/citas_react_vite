import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validando formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        // Objeto paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        };

        if( paciente.id ){
            // Editando un registro
            objetoPaciente.id = paciente.id;

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
            setPacientes(pacientesActualizados);

            setPaciente({})

        } else {
            // agregar nuevo regitro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // reiniciar formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    }

    return ( 
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
            <p className='mt-5 text-center mb-10'>Añade Pacientes y {' '} <span className='font-bold text-indigo-600'>Administralos</span></p>

            <form 
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

                {error && 
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error> 
                }
                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold' htmlFor='mascota'>
                        Nombre mascota
                    </label>
                    <input
                    className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400' 
                    type='text' 
                    name='nombre'
                    id='mascota'
                    placeholder='Nombre de la mascota'
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}
                    />
                </div>
                
                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>
                        Nombre propietario
                    </label>
                    <input
                    className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400' 
                    type='text' 
                    name='propietario'
                    id='propietario'
                    placeholder='Nombre del propietario'
                    value={propietario}
                    onChange={ (e) => setPropietario(e.target.value)}/>
                </div>

                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>
                        Correo electrónico
                    </label>
                    <input
                    className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400' 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Correo electrónico'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                
                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold' htmlFor='alta'>
                        Fecha alta
                    </label>
                    <input
                    className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400' 
                    type='date'
                    name='alta'
                    id='alta'
                    value={fecha}
                    onChange={ (e) => setFecha(e.target.value)}/>
                </div>

                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>
                        Síntomas
                    </label>
                    <textarea 
                    className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                    name='alta'
                    id='sintomas'
                    placeholder='Describe los sintomas'
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                    className='bg-indigo-600 text-white w-full p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' />
                

            </form>
        </div>
     );
}
 
export default Formulario;