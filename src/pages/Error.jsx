import ErrorImage from "../assets/Images/404-Error.png"

const Error = () => {
  return (
    <div className='flex h-[calc(100vh-3.5rem)] justify-center items-center text-3xl'>
      <img src={ErrorImage} alt="404 Error" />
    </div>
  )
}

export default Error