import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';



function Stop045() {

    let inNi = 0.005;
   
    let masaKoncowa = 5100;

    return (
        <Main>
            <Paragraf>Przygotowujesz stop ZnNi</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: '',

                }}
                onSubmit={(values) => {
                    let addNi = (masaKoncowa - values.zawartosc) * inNi;
                   
                    alert(`Dodaj ${addNi.toFixed(2)} kg niklu. Dolej do ${masaKoncowa.toFixed(0) } kg w piecu`)





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

export default Stop045