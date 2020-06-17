import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .notOneOf(['waffle@syrup.com'], "That email address is already in use")
      .required("Must include email address."),
    name: Yup
      .string()
      .min(3, "Name must be at least 3 characters long.")
      .max(50, "Name must be fewer than 50 characters")
      .required("Name is Required"),
    password: Yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    role: Yup
      .string()
      .oneOf(["Student", "Instructor", "Team Lead", "Alumni"], "Please select a role"),
    gender: Yup
      .string()
      .oneOf(["Male", "Female", "N/A"], "Please select one of the gender options"),
    terms: Yup
      .boolean()
      .oneOf([true], "Must accept the terms and conditions"),
})

export default formSchema