import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';



function Stop044() {

    
    let inMg = 0.03;
    let masaKoncowa = 4600;

    return (
        <Main>
            <Paragraf>Przygotowujesz stop ZnMg3</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: '',

                }}
                onSubmit={(values) => {
                   
                    let addMg = (masaKoncowa - values.zawartosc) * inMg;
                  
                    alert(`Dodaj ${addMg.toFixed(1)} kg magnezu. Dolej do ${masaKoncowa.toFixed(0)} kg w piecu`)





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

export default Stop044