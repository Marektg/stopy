import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';




function Stop040k() {
    const minAl = 0.09;
    const maxAl = 0.11;
    const srednieAl = 0.1;



    return (
        <Main>
            <Paragraf>Korygujesz stop ZnAl10</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: 0,
                    zawartoscAl: 0,


                }}
                onSubmit={({ zawartosc, zawartoscAl }) => {
                    if (zawartoscAl.includes(",")) {
                        let stringZawAl = zawartoscAl.replace(",", ".")

                        if (stringZawAl > maxAl) {
                            let inAl = stringZawAl * 0.01;
                            let masaPoKorekcie = (zawartosc * inAl) / maxAl;



                            alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)

                        } else if (stringZawAl < minAl) {
                            let addAl = zawartosc * srednieAl - zawartosc * stringZawAl * 0.01;
                            alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)

                        } else {
                            alert(`Stop gotowy do odlania.`)
                        }

                    } else {


                        if (zawartoscAl > maxAl) {
                            let inAl = zawartoscAl * 0.01;
                            let masaPoKorekcie = (zawartosc * inAl) / maxAl;



                            alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)

                        } else if (zawartoscAl < minAl) {
                            let addAl = zawartosc * srednieAl - zawartosc * zawartoscAl * 0.01;
                            alert(`Dodaj ${addAl.toFixed(2)} kg aluminum.`)

                        } else {
                            alert(`Stop gotowy do odlania.`)
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
                    <Label htmlFor="zawartoscAl">Zawartość aluminium</Label>
                    <Field id="zawartoscAl" name="zawartoscAl" placeholder="0" style={{ width: "50%", height: "30px", margin: "auto" }} />


                    <Button type="submit" style={{ margin: "auto", marginTop: "20px" }}>Oblicz</Button>

                </Form>
            </Formik>
            <StyledLink to="/korekta">Powrót</StyledLink>
        </Main>
    )
}

export default Stop040k