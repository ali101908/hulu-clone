import React from 'react';
import { FormGroup, Input, Label, Button, Form, FormText } from 'reactstrap';
import './form.css';

const FormPage = () => {
  return (
    <Form className="custom-form">
      <FormGroup className="custom-form-group">
        <Label for="exampleEmail" className="custom-label">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          className="custom-input"
        />
      </FormGroup>

      <FormGroup className="custom-form-group">
        <Label for="examplePassword" className="custom-label">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password"
          type="password"
          className="custom-input"
        />
      </FormGroup>

      <FormGroup className="custom-form-group">
        <Label for="exampleSelect" className="custom-label">Select</Label>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
          className="custom-select"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>

      <FormGroup className="custom-form-group">
        <Label for="exampleSelectMulti" className="custom-label">Select Multiple</Label>
        <Input
          id="exampleSelectMulti"
          multiple
          name="selectMulti"
          type="select"
          className="custom-select"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
		  <option>6</option>
		  <option>7</option>
        </Input>
      </FormGroup>

      <FormGroup className="custom-form-group">
        <Label for="exampleText" className="custom-label">Text Area</Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
          className="custom-textarea"
        />
      </FormGroup>

      <FormGroup className="custom-form-group">
        <Label for="exampleFile" className="custom-label">File</Label>
        <Input
          id="exampleFile"
          name="file"
          type="file"
          className="custom-input"
        />
        {/* <FormText className="custom-form-text">
          This is some placeholder block-level help text for the above input.
        </FormText> */}
      </FormGroup>

      <FormGroup tag="fieldset" className="custom-form-group">
        <legend className="custom-legend">Radio Buttons</legend>
        <FormGroup check className="custom-radio-group">
          <Input name="radio1" type="radio" className="custom-radio" />
          <Label check className="custom-radio-label">
            Option one is this and that—be sure to include why it’s great
          </Label>
        </FormGroup>
        <FormGroup check className="custom-radio-group">
          <Input name="radio1" type="radio" className="custom-radio" />
          <Label check className="custom-radio-label">
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled className="custom-radio-group">
          <Input disabled name="radio1" type="radio" className="custom-radio" />
          <Label check className="custom-radio-label">
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>

      <FormGroup check className="custom-checkbox-group">
        <Input type="checkbox" className="custom-checkbox" />
        <Label check className="custom-checkbox-label">
          Check me out
        </Label>
      </FormGroup>

      <Button className="custom-submit-button">
        Submit
      </Button>
    </Form>
  );
};

export default FormPage;
