import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./Form.module.css";

const MyForm = () => {
  const schema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "name mus be more than 3 chars!")
      .max(12, "Name must be less than 12 chars!"),
    surname: Yup.string()
      .required("This field is required!")
      .min(3, "Surname mus be more than 3 chars!")
      .max(12, "Surname must be less than 12 chars!"),
    age: Yup.number()
      .required("This field is required!")
      .min(3, "age mus be more than 3 years!")
      .max(99, "You are too old !"),
    role: Yup.string().oneOf(["admin", "user"]),
    email: Yup.string().email("Email is not valid"),
  });
  const initialValues = {
    name: "",
    surname: "",
    age: "",
    email: "",
    role: "user",
    about: "",
  };
  const handleSubmit = (data, actions) => {
    console.log(data);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field name="name" />
            <ErrorMessage name="name" />
          </label>
          <label className={s.label}>
            <span>Surname:</span>
            <Field name="surname" />
            <ErrorMessage name="surname" />
          </label>
          <label className={s.label}>
            <span>Age:</span>
            <Field name="age" />
            <ErrorMessage name="age" />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" />
            <ErrorMessage name="email" />
          </label>
          <label className={s.label}>
            <span>Role</span>
            <Field name="role" as="select">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Field>
            <ErrorMessage name="role" />
          </label>
          <label className={s.label}>
            <span>About</span>
            <Field as="textarea" name="about"></Field>
            <ErrorMessage name="about" />
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
