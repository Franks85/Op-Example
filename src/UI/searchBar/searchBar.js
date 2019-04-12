import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './searchBar.css'

const searchBar = props => {
  const { label, placeholder } = props;
  return (
    <Form inline>
      <FormGroup>
        <Label for="exampleSearch" className='search-label'>{label}</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder={placeholder}
          className='search-input'
        />
        <Button color="primary">Cerca</Button>
      </FormGroup>
    </Form>
  );
};

export default searchBar;
