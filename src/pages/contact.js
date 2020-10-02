import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import { Form, Button } from "react-bootstrap"

export default () => (
  <PrimaryLayout column="col-10">
    <h1>Contact Me</h1>
    <Form>
      <Form.Group controlId="contactForm.Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="email..." />
      </Form.Group>
      <Form.Group controlId="contactForm.Subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="subject..." />
      </Form.Group>
      <Form.Group controlId="contactForm.Message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="10" />
      </Form.Group>
      <Form.Group controlId="contactForm.Submit">
        <Button>Submit</Button>
      </Form.Group>
    </Form>
  </PrimaryLayout>
)
