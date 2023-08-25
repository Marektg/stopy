import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';




function Stop045k() {




    return (
        <Main>
            <Paragraf>Korygujesz stop ZnNi</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: 0,
                    zawartoscNi: 0,
                    

                }}
                onSubmit={({ zawartosc, zawartoscNi }) => {
                    if (zawartoscNi.includes(",")) {
                        let stringZawNi = zawartoscNi.replace(",", ".")
                        
                        if (stringZawNi > 0.534) {
                            let inNi = stringZawNi * 0.01;
                            let masaPoKorekcie = (zawartosc * inNi) / 0.0053;



                            alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)

                        } else if (stringZawNi < 0.466) {
                            let addNi = zawartosc * 0.005 - zawartosc * stringZawNi * 0.01;
                            alert(`Dodaj ${addNi.toFixed(2)} kg niklu.`)

                        }
                   
                    } else {


                    if (zawartoscNi > 0.534) {
                        let inNi = zawartoscNi * 0.01;
                        let masaPoKorekcie = (zawartosc * inNi) / 0.0053;

                       

                        alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)

                    } else if (zawartoscNi < 0.466) {
                        let addNi = zawartosc * 0.005 - zawartosc * zawartoscNi * 0.01;
                        alert (`Dodaj ${addNi.toFixed(2)} kg niklu.`)

                        }
                    }
                   
                }}

            >
                <Form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >

                    <Label htmlFor="zawartosc">Zawartość w piecu</Label>
                    <Field id="zawartosc" name="zawartosc" placeholder="0" style={{ width: "50%", height: "30px", margin: "auto" }} />
                    <Label htmlFor="zawartoscNi">Zawartość niklu</Label>
                    <Field id="zawartoscNi" name="zawartoscNi" placeholder="0" style={{ width: "50%", height: "30px", margin: "auto" }} />
                    

                    <Button type="submit" style={{ margin: "auto", marginTop: "20px" }}>Oblicz</Button>

                </Form>
            </Formik>
            <StyledLink to="/korekta">Powrót</StyledLink>
        </Main>
    )
}

export default Stop045k