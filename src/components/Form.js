import React from "react";
import "./styles.css";
import * as Yup from "yup";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      title: "",
      message: "",
      file: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required!")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a vaild email adress"
        ),
      title: Yup.string().required("Title is required!"),
      message: Yup.string().required("Message is required!"),
      file: Yup.mixed().required("File is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Success!");
      resetForm({ values: "" });
      console.log(values);
    },
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
