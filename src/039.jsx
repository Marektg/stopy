import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';



function Stop039() {

    let inAl = 0.05;
   
    let masaKoncowa = 5000;

    return (
        <Main>
            <Paragraf>Przygotowujesz stop ZA5</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: '',

                }}
                onSubmit={(values) => {
                    let addAl = (masaKoncowa - values.zawartosc) * inAl;
                   
                 
                    alert(`Dodaj ${addAl} kg aluminium. Dolej do ${masaKoncowa} kg w piecu`)





                }}
            >
                <Form>
                    <Label htmlFor="zawartosc">Zawartość w piecu</Label>
                    <Field id="zawartosc" name="zawartosc" placeholder="0" />


                    <Button type="submit">Oblicz</Button>
                </Form>
            </Formik>
            <StyledLink to="/">Powrót</StyledLink>
        </Main>
    )
}

export default Stop039