/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const SignUp = () => {
  const regExPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato invalido")
      .required("El email es requerido")
      .min(4, "Minimo 4 caracteres")
      .max(30, "Maximo 30 caracteres")
      .trim(),
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "Minimo 8 caracteres")
      .max(16, "Maximo 16 caracteres")
      .matches(regExPassword, "Formato invalido")
      .trim(),
    confirmPassword: Yup.string()
      .required("La confirmacion de la contraseña es requerida")
      .min(8, "Minimo 8 caracteres")
      .max(16, "Maximo 16 caracteres")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
      .trim(),
  });

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit:(values) => {
      console.log("Valores de Formik-->", values);
      
    },
  });
  const [typeConfirm, setTypeConfirm] = useState("password");
  return (
    <div>
      <h1>SignUp</h1>
      <div className="d-flex justify-content-center">
        <Form onSubmit={formik.handleSubmit} noValidate>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresar email"
              id="email"
              maxLength={30}
              {...formik.getFieldProps("email")}
              className={clsx(
                "form-control",
                {
                  "is-invalid": formik.touched.email && formik.errors.email,
                },
                {
                  "is-valid": formik.touched.email && !formik.errors.email,
                }
              )}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger fw-bolder mt-1">
                <span role="alert">{formik.errors.email}</span>
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              id="password"
              maxLength={16}
              {...formik.getFieldProps("password")}
              className={clsx(
                "form-control",
                {
                  "is-invalid":
                    formik.touched.password && formik.errors.password,
                },
                {
                  "is-valid":
                    formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger fw-bolder mt-1">
                <span role="alert">{formik.errors.password}</span>
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
            <Form.Control
              onFocus={() => {
                setTypeConfirm("text");
              }}
              onMouseEnter={() => {
                setTypeConfirm("text");
              }}
              onMouseOut={() => {
                setTypeConfirm("password");
              }}
              type={typeConfirm}
              placeholder="Confirm Password"
              id="confirmPassword"
              maxLength={16}
              {...formik.getFieldProps("confirmPassword")}
              className={clsx(
                "form-control",
                {
                  "is-invalid":
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword,
                },
                {
                  "is-valid":
                    formik.touched.confirmPassword &&
                    !formik.errors.confirmPassword,
                }
              )}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-danger fw-bolder mt-1">
                  <span role="alert">{formik.errors.confirmPassword}</span>
                </div>
              )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
