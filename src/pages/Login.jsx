import loginImg from "../assets/Images/Login_img_3.jpg"
import FormTemplate from "../components/core/Auth/FormTemplate"

function Login() {
  return (
    <FormTemplate
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login