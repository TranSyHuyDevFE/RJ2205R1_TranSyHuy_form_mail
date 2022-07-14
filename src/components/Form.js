import React from "react";
import "./styles.css";
import * as Yup from "yup";
import { useFormik } from "formik";

const Form = () => {
  const REQUIRED = "Required!";
  const EMAIL_VALID = "Please enter a vaild email adress";
  const formik = useFormik({
    initialValues: {
      email: "",
      title: "",
      message: "",
      file: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(REQUIRED)
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, EMAIL_VALID),
      title: Yup.string().required(REQUIRED),
      message: Yup.string().required(REQUIRED),
      file: Yup.mixed().required(REQUIRED),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Success!");
      resetForm({ values: "" });
      console.log(values);
    },
    // validate: (values) => {
    //   const errors = {};
    //   if (values.title < 1900) {
    //     errors.title = "No!";
    //   }
    //   return errors;
    // },
  });
  return (
    <div className="container form-mail">
      <header>Mail Form</header>
      <section>
        <form className="infoform" onSubmit={formik.handleSubmit}>
          <label>To</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <b className="errorMsg">{formik.errors.email}</b>
          )}
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            // validate={formik.handleValidate}
            onChange={formik.handleChange}
          />
          {formik.errors.title && (
            <b className="errorMsg">{formik.errors.title}</b>
          )}
          <label>Message</label>
          <textarea
            rows="8"
            type="text"
            id="message"
            name="message"
            value={formik.values.message}
            placeholder="Enter your message"
            onChange={formik.handleChange}
          />
          {formik.errors.message && (
            <b className="errorMsg">{formik.errors.message}</b>
          )}
          <input
            type="file"
            id="file"
            name="file"
            onChange={formik.handleChange}
          ></input>
          {formik.errors.file && (
            <b className="errorMsg">{formik.errors.file}</b>
          )}
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Form;
