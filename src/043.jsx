import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';



function Stop043() {

    let inAl = 0.08;
    let inMg = 0.005;
    let masaKoncowa = 4600;

    return (
        <Main>
            <Paragraf>Przygotowujesz stop ZnAl8Mg05</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: '',

                }}
                onSubmit={(values) => {
                    let addAl = (masaKoncowa - values.zawartosc) * inAl;
                    let addMg = (masaKoncowa - values.zawartosc) * inMg;

                    alert(`Dodaj ${addAl} kg aluminium. Dodaj ${addMg} kg magnezu. Dolej do ${masaKoncowa} kg w piecu`)





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

export default Stop043