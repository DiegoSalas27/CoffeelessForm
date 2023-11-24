// import React, { ChangeEvent, useState } from 'react'
// import { createRoot } from 'react-dom/client'
// import { Builder, CForm, CInput, CoffeelessWrapper } from './index'

// interface EmailForm {
//   name: string
//   email: string
//   subject: string
//   body: string
// }

// const Contact: React.FC = () => {
//   const [form, setForm] = useState<EmailForm>({
//     name: '',
//     body: '',
//     email: '',
//     subject: ''
//   })

//   function onChange(event: ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target

//     setForm({
//       ...form,
//       [name]: value
//     })
//   }

//   return (
//     <CoffeelessWrapper<EmailForm>
//       initialValues={form}
//       validationSchema={{
//         body: Builder.init().required().min(5).build(),
//         email: Builder.init().required().min(5).build(),
//         name: Builder.init().required().min(5).build(),
//         subject: Builder.init().required().min(5).build()
//       }}
//     >
//       <CForm handleSubmit={() => {}} submitText="Submit">
//         <CInput
//           id="name"
//           label="Name"
//           name="name"
//           onChange={onChange}
//           placeholder="Enter you name"
//           type="text"
//           value={form.name}
//         />
//         <CInput
//           id="email"
//           label="Email"
//           name="email"
//           onChange={onChange}
//           placeholder="Enter your email"
//           type="email"
//           value={form.email}
//         />
//         <CInput
//           id="subject"
//           label="Subject"
//           name="subject"
//           onChange={onChange}
//           placeholder="Enter subject"
//           type="text"
//           value={form.subject}
//         />
//         <CInput
//           id="body"
//           label="Message"
//           name="body"
//           onChange={onChange}
//           placeholder="Enter message here"
//           type="textarea"
//           value={form.body}
//         />
//       </CForm>
//     </CoffeelessWrapper>
//   )
// }

// const container = document.getElementById('main')
// const root = createRoot(container!)

// root.render(<Contact />)
