"use client"

import React from "react"
import {
  Formik,
  Form,
  Field,
  FormikValues,
  ErrorMessage,
  FormikHelpers,
} from "formik"
import * as Yup from "yup"
import { useState } from "react"
import Link from "next/link"

const Contact = () => {
  const [notification, setNotification] = useState<string | null>(null)

  const handleSubmit = (
    values: FormikValues,
    { resetForm }: FormikHelpers<any>
  ) => {
    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        console.log("Success:", data)
        setNotification("Form submitted successfully!")
        resetForm()
        // Handle success response
      })
      .catch((error) => {
        console.error("Error:", error)
        setNotification("Failed to submit form. Please try again.")

        // Handle error
      })
  }

  return (
    <section id='contact' className='bg-[#F5F5F5] shadow-md pb-10'>
      <div className='md:grid md:grid-cols-6 px-[15px] md:px-[30px] items-center pt-[100px] pb-[150px] rounded-b-[50px] bg-white shadow-md'>
        <div className='col-span-2 md:pr-10'>
          <div>
            <h2 className='text-[35px] md:text-[50px] tracking-tighter leading-[40px] md:leading-[65px] mb-5 md:mb-0'>
              Interested In Working With Us?
            </h2>
            <p className='text-[13px] tracking-tighter text-justify leading-[15px] md:text-[13px] mt-[15px] text-gray-400'>
              To discuss a new project, enquire about a service or to simply
              just reach out, please use our contact details below or fill out
              the form, we will contact you through email to schedule a call.
            </p>
          </div>

          <div className='flex md:flex-col gap-2 mt-[12px] mb-[8px]'>
            <Link
              className='bg-[#e3e3e3] px-4 py-[4px] rounded-full text-[12px] tracking-tight md:w-fit'
              href='https://calendly.com/msa-design'
            >
              calendly:book a call
            </Link>
            <Link
              className='bg-[#e3e3e3] px-4 py-[3px] rounded-full text-[12px] tracking-tight md:w-fit'
              href='https://api.whatsapp.com/send/?phone=358408537203&text&app_absent=0'
            >
              whatsapp: +358 40 8537203
            </Link>
          </div>

          <Link
            className='bg-[#e3e3e3] px-4 py-[3px] rounded-full text-[12px] tracking-tight '
            href='https://msadesign.space/msadesign.space@gmail.com'
          >
            email: msadesign.space@gmail.com
          </Link>
          <div className='flex gap-2 mt-[8px]'>
            <Link
              className='bg-[#e3e3e3] px-4 py-[3px] rounded-full text-[12px] tracking-tight'
              href='https://www.behance.net/msadesignspace'
            >
              behance
            </Link>
            <Link
              className='bg-[#e3e3e3] px-4 py-[3px] rounded-full text-[12px] tracking-tight'
              href='https://www.instagram.com/msadesign.space'
            >
              instagram
            </Link>
          </div>
        </div>

        <Formik
          initialValues={{ name: "", email: "", call: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("*Name is required"),
            email: Yup.string()
              .required("*Email is required")
              .email("*Invalid email address"),
            message: Yup.string().required("*Please define your project"),
            call: Yup.number().required("*Please write your phone number"),
          })}
          onSubmit={handleSubmit}
        >
          <Form className='col-span-4 mt-8 md:mt-0 '>
            <div className='grid grid-rows-2 items-center gap-0 md:gap-5 w-full'>
              <div>
                <Field
                  placeholder='Name & Surname'
                  type='text'
                  id='name'
                  name='name'
                  className='p-1 border-b-2 w-full placeholder:text-[12px] md:placeholder:text-[14px]'
                />
                <div className='flex justify-end mt-2 text-[14px] text-gray-500'>
                  <ErrorMessage name='name' />
                </div>
              </div>

              <div>
                <Field
                  placeholder='E-mail'
                  type='text'
                  id='email'
                  name='email'
                  className='p-1 border-b-2 w-full placeholder:text-[12px] md:placeholder:text-[14px]'
                />
                <div className='flex justify-end mt-2 text-[14px] text-gray-500'>
                  <ErrorMessage name='email' />
                </div>
              </div>

              <div>
                <Field
                  placeholder='+1 999 999 999'
                  type='number'
                  id='call'
                  name='call'
                  className='p-1 border-b-2 w-full placeholder:text-[12px] md:placeholder:text-[14px]'
                />
                <div className='flex justify-end mt-2 text-[14px] text-gray-500'>
                  <ErrorMessage name='call' />
                </div>
              </div>
              <div>
                <Field
                  placeholder='Please describe your project'
                  type='text'
                  id='message'
                  name='message'
                  className='p-1 border-b-2 w-full placeholder:text-[12px] md:placeholder:text-[14px]'
                  as='textarea'
                />
                <div className='flex justify-end mt-2 text-[14px] text-gray-500'>
                  <ErrorMessage name='message' />
                </div>
              </div>
            </div>

            <div className='md:mt-10 mt-5'>
              <button
                type='submit'
                className='w-fit bg-black text-white px-5 py-2 rounded-3xl text-[12px] md:text-[15px]'
              >
                Send
              </button>
              {notification && (
                <div className='text-[15px] '>{notification}</div>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default Contact
