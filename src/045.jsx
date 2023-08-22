import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';



function Stop045() {

    let inNi = 0.005;
   
    let masaKoncowa = 5000;

    return (
        <Main>
            <Paragraf>Przygotowujesz stop ZnNi</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: '',

                }}
                onSubmit={(values) => {
                    let addNi = (masaKoncowa - values.zawartosc) * inNi;
                   
                    alert(`Dodaj ${addNi} kg niklu. Dolej do ${masaKoncowa} kg w piecu`)





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

export default Stop045