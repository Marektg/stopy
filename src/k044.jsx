import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';




function Stop044k() {
    const minMg = 0.0275;
    const maxMg = 0.0324;
    const srednieMg = 0.03;



    return (
        <Main>
            <Paragraf>Korygujesz stop ZnMg3</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: 0,
                    zawartoscMg: 0,


                }}
                onSubmit={({ zawartosc, zawartoscMg }) => {
                    if (zawartoscMg.includes(",")) {
                        let stringZawMg = zawartoscMg.replace(",", ".")

                        if (stringZawMg > maxMg) {
                            let inAl = stringZawMg * 0.01;
                            let masaPoKorekcie = (zawartosc * inAl) / maxMg;



                            alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)

                        } else if (stringZawMg < minMg) {
                            let addAl = zawartosc * srednieMg - zawartosc * stringZawMg * 0.01;
                            alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)

                        } else {
                            alert(`Stop gotowy do odlania.`)
                        }

                    } else {


                        if (zawartoscMg > maxMg) {
                            let inAl = zawartoscMg * 0.01;
                            let masaPoKorekcie = (zawartosc * inAl) / maxMg;



                            alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)

                        } else if (zawartoscMg < minMg) {
                            let addAl = zawartosc * srednieMg - zawartosc * zawartoscMg * 0.01;
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
                    <Label htmlFor="zawartoscMg">Zawartość magnezu</Label>
                    <Field id="zawartoscMg" name="zawartoscMg" placeholder="0" style={{ width: "50%", height: "30px", margin: "auto" }} />


                    <Button type="submit" style={{ margin: "auto", marginTop: "20px" }}>Oblicz</Button>

                </Form>
            </Formik>
            <StyledLink to="/korekta">Powrót</StyledLink>
        </Main>
    )
}

export default Stop044k