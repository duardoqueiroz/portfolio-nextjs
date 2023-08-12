"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import app from "../../services/firebase";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("O Nome é obrigatório!"),
  email: Yup.string()
    .required("O Email é obrigatório!")
    .email("Email inválido!"),
  message: Yup.string().required("A mensagem é obrigatória!"),
});

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const SectionContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);

  const stopLoading = () => setIsLoading(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleOnSubmit = async (values: FormValues) => {
    try {
      startLoading();
      console.log(values);
      const db = getFirestore(app);
      console.log(db.toJSON());
      await setDoc(doc(db, "contacts", values.email), values);
      stopLoading();
      Swal.fire("Muito bem!", "Mensagem enviada com sucesso!", "success");
    } catch (error) {
      stopLoading();
      Swal.fire("Ops!", "Algo deu errado, tente novamente por favor", "error");
      console.log(error);
    }
  };
  return (
    <section
      id="contact"
      className="bg-[url('/images/contactus-background.svg')] bg-cover p-4 lg:py-20 lg:px-20"
    >
      <main className="bg-white container md:mx-auto grid rounded">
        <div className="p-4 lg:p-9 grid lg:grid-cols-2 gap-x-14">
          <div className="grid self-center">
            <h1 className=" font-spartanSemiBold text-pw-dark-blue text-2xl lg:text-4xl mb-2 lg:mb-0 text-center lg:text-left">
              Envie-me uma mensagem,
              <br />
              adoraria ler algo vindo de você!!
            </h1>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              handleOnSubmit(values);
              resetForm();
            }}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6 my-6">
                <h2 className=" font-spartanBold text-pw-orange text-2xl xl:text-3xl mb-4 xl:mb-8 text-center lg:text-left">
                  Entrar em contato
                </h2>
                <div className="relative">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-dark-blue bg-transparent rounded border border-pw-dark-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute  text-base lg:text-xl text-pw-gray font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Seu nome
                  </label>
                  {errors.name && touched.name ? (
                    <div className="mt-2 text-pw-orange">{errors.name}</div>
                  ) : null}
                </div>
                <div className="relative">
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-dark-blue bg-transparent rounded border border-pw-dark-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute  text-base lg:text-xl text-pw-gray font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Email
                  </label>
                  {errors.email && touched.email ? (
                    <div className="mt-2 text-pw-orange">{errors.email}</div>
                  ) : null}
                </div>
                <div className="relative">
                  <Field
                    className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-dark-blue bg-transparent rounded border border-pw-dark-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
                    id="message"
                    name="message"
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute  text-base lg:text-xl text-pw-gray font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Sua mensagem
                  </label>
                  {errors.message && touched.message ? (
                    <div className="mt-2 text-pw-orange">{errors.message}</div>
                  ) : null}
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button
                    type="submit"
                    className={` ${
                      isLoading === true
                        ? "bg-white text-pw-dark-blue border border-pw-dark-blue ring-pw-orange ring-offset-pw-dark-blue "
                        : "bg-pw-dark-blue text-white hover:bg-pw-orange ring-pw-orange ring-offset-pw-dark-blue "
                    } py-4 px-6  font-spartanMedium text-sm lg:text-base rounded  transition delay-150 duration-300 ease-in-out ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2`}
                    disabled={isLoading}
                  >
                    {isLoading === true ? (
                      <div className="flex items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-pw-dark-blue to-pw-orange-500 animate-spin">
                          <div className="h-4 w-4 rounded-full bg-white"></div>
                        </div>
                        <span className="ml-3">Processing...</span>
                      </div>
                    ) : (
                      "Enviar mensagem"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-pw-orange font-spartanBold"
                  >
                    Mensagem enviada com sucesso!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-dark-blue font-spartanMedium">
                      Obrigado por entrar em contato! Irei te dar um retorno em
                      breve.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center font-spartanMedium rounded border border-transparent bg-pw-orange-100 px-4 py-2 text-sm font-medium text-pw-orange hover:bg-pw-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pw-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Feito, obrigado!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </section>
  );
};

export default SectionContact;
