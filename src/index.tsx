import React, { ChangeEvent, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import { Builder, CForm, CFormGroup, CInput, CSection } from '.'
import classes from './core.module.css'
import { CoffeelessWrapper } from './validator'

interface EmailForm {
  name: string
  email: string
  subject: string
  body: BodyPart
}

interface BodyPart {
  part1: string
  part2: string
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<EmailForm>({
    name: '',
    body: {
      part1: '',
      part2: ''
    },
    email: '',
    subject: ''
  })

  useEffect(() => {
    console.log(form)
  })

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    const updatePath: string[] = name.split('.')
    let copy = form

    updatePath.forEach((path, idx) => {
      if (idx === updatePath.length - 1) {
        ;(copy as any)[path] = value
      } else {
        copy = (copy as any)[path]
      }
    })

    setForm({ ...form })
  }

  return (
    <CoffeelessWrapper<EmailForm>
      initialValues={form}
      validationSchema={{
        body: {
          part1: Builder.init().required().min(2).build(),
          part2: Builder.init().required().min(2).build()
        },
        email: Builder.init().required().min(5).build(),
        name: Builder.init().required().min(5).build(),
        subject: Builder.init().required().min(5).build()
      }}
    >
      <CForm handleSubmit={() => {}} submitText="Submit" formWrapperClass={classes.row}>
        <CSection col="col-md-6">
          <CFormGroup>
            <CInput
              id="name"
              label="Name"
              name="name"
              onChange={onChange}
              placeholder="Enter you name"
              type="text"
              value={form.name}
            />
          </CFormGroup>
          <CFormGroup>
            <CInput
              id="email"
              label="Email"
              name="email"
              onChange={onChange}
              placeholder="Enter your email"
              type="email"
              value={form.email}
            />
          </CFormGroup>
          <CFormGroup>
            <CInput
              id="subject"
              label="Subject"
              name="subject"
              onChange={onChange}
              placeholder="Enter subject"
              type="text"
              value={form.subject}
            />
          </CFormGroup>
          <CFormGroup>
            <CInput
              id="BodyPart1"
              label="BodyPart1"
              name="body.part1"
              onChange={onChange}
              placeholder="Enter message here"
              type="textarea"
              value={form.body.part1}
            />
          </CFormGroup>
          <CFormGroup>
            <CInput
              id="BodyPart2"
              label="BodyPart2"
              name="body.part2"
              onChange={onChange}
              placeholder="Enter message here"
              type="textarea"
              value={form.body.part2}
            />
          </CFormGroup>
        </CSection>
      </CForm>
    </CoffeelessWrapper>
  )
}

const container = document.getElementById('main')
const root = createRoot(container!)

root.render(<Contact />)
