// Formik ve Bootstrap ile Register Form
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css';

function RegisterForm() {
  // Formik kullanımı
  const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Geçerli bir e-posta adresi giriniz')
        .required('E-posta gereklidir'),
      age: Yup.number()
        .required('Yaş gereklidir')
        .min(18, 'Yaş en az 18 olmalıdır')
        .max(100, 'Yaş en fazla 100 olabilir'),
      password: Yup.string()
        .required('Şifre gereklidir')
        .min(6, 'Şifre en az 6 karakter olmalıdır'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
        .required('Şifre doğrulaması gereklidir'),
      acceptTerms: Yup.boolean()
        .oneOf([true], 'Kullanıcı sözleşmesini kabul etmelisiniz'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center bg-primary text-white">
              <h4>Kayıt Formu</h4>
            </div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                {/* E-posta */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">E-posta</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${formik.errors.email && 'is-invalid'}`}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
                </div>

                {/* Yaş */}
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Yaş</label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    className={`form-control ${formik.errors.age && 'is-invalid'}`}
                    onChange={formik.handleChange}
                    value={formik.values.age}
                  />
                  {formik.errors.age && <div className="invalid-feedback">{formik.errors.age}</div>}
                </div>

                {/* Şifre */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Şifre</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={`form-control ${formik.errors.password && 'is-invalid'}`}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
                </div>

                {/* Şifre Doğrulama */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Şifre Doğrulama</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className={`form-control ${formik.errors.confirmPassword && 'is-invalid'}`}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.errors.confirmPassword && <div className="invalid-feedback">{formik.errors.confirmPassword}</div>}
                </div>

                {/* Kullanıcı Sözleşmesi */}
                <div className="mb-3 form-check">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    className={`form-check-input ${formik.errors.acceptTerms && 'is-invalid'}`}
                    onChange={formik.handleChange}
                    checked={formik.values.acceptTerms}
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    Kullanıcı sözleşmesini kabul ediyorum
                  </label>
                  {formik.errors.acceptTerms && <div className="invalid-feedback">{formik.errors.acceptTerms}</div>}
                </div>

                {/* Gönder Butonu */}
                <button type="submit" className="btn btn-primary w-100">Kayıt Ol</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

/* RegisterForm.css */
/* Basit stil ayarları */
body {
  background-color: #f8f9fa;
}
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-header {
  font-size: 1.5rem;
}
