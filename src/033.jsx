import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';



function Stop033() {
   
    let inAl = 0.04;
    let inMg = 0.0005;
    let masaKoncowa = 5200;

  return (
      <Main>
          <Paragraf>Przygotowujesz stop ZL3</Paragraf>
          <Formik
              initialValues={{
                  zawartosc: '',
                 
              }}
              onSubmit={ (values) => {
                  let addAl = (masaKoncowa - values.zawartosc) * inAl;
                  let addMg = (masaKoncowa - values.zawartosc) * inMg;
                  console.log(values);
                  console.log(addAl);
                  console.log(addMg);
                  alert(`Dodaj ${addAl} kg aluminium. Dodaj ${addMg} kg magnezu. Dolej do ${masaKoncowa} kg w piecu`)

            
                  


              }}
          >
              <Form style={{
                  display: "flex",
                  flexDirection: "column", justifyContent: "center",
              }}>
                  <Label htmlFor="zawartosc">Zawartość w piecu</Label>
                  <Field id="zawartosc" name="zawartosc" placeholder="0" style={{ width: "50%", height: "30px", margin: "auto" }} />

                 
                  <Button type="submit" style={{ margin: "auto", marginTop: "20px" }}>Oblicz</Button>
              </Form>
          </Formik>
          <StyledLink to="/nowy">Powrót</StyledLink>
      </Main>
  )
}

export default Stop033