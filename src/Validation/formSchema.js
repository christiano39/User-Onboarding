import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
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
    terms: Yup
      .boolean()
      .oneOf([true], "Must accept the terms and conditions"),
})

export default formSchema