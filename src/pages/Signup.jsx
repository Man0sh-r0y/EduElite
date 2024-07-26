import signupImg from "../assets/Images/Signup_img.jpg"
import FormTemplate from "../components/core/Auth/FormTemplate"

function Signup() {
  return (
    <FormTemplate
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup