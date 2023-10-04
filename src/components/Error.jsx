const Error = ({children}) => {
    return ( 
        <div className='bg-red-800 text-white p-2 mb-3 text-center rounded'>
            {children}
        </div>
     );
}
 
export default Error;