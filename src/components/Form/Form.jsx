import { Formik, Form, Field } from "formik";

const MyForm = () => {
  const initialValues = {
    name: "",
    surname: "",
    age: "",
    email: "",
  };
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label>
            <span>Surname:</span>
            <Field name="surname" />
          </label>
          <label>
            <span>Age:</span>
            <Field name="age" />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          {/* <label>
            <span>Role</span>
            <select>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <label>
            <span>About</span>
            <textarea></textarea>
          </label> */}
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
