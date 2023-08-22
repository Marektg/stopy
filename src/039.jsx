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

export default Stop039