import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';




function Stop042k() {




    return (
        <Main>
            <Paragraf>Korygujesz stop ZnAl5Mg05</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: 0,
                    zawartoscAl: 0,
                    zawartoscMg: 0,


                }}
                onSubmit={({ zawartosc, zawartoscAl, zawartoscMg }) => {
                    if (zawartoscAl.includes(",")) {
                        let stringZawAl = zawartoscAl.replace(",", ".")

                        if (stringZawAl > 5.254) {
                            let inAl = stringZawAl * 0.01;
                            let masaPoKorekcie = (zawartosc * inAl) / 0.052;
                            if (zawartoscMg.includes(",")) {
                                let stringZawMg = zawartoscMg.replace(",", ".")
                                let inMg = zawartosc * stringZawMg * 0.01/masaPoKorekcie;
                                if (inMg > 0.00554) {
                                    let masaPoKorekcieMg = (masaPoKorekcie * inMg) / 0.00545;
                                    let addAl = masaPoKorekcieMg * 0.052 - masaPoKorekcieMg * inAl;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                } else if (inMg < 0.00445) {
                                    let addMg = masaPoKorekcie * 0.005 - masaPoKorekcie * inMg;
                                    alert(`Dodaj ${addMg.toFixed(2)} kg magnezu. Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                                } else {
                                    
                                    alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                                }
                            } else {
                                let inMg = masaPoKorekcie * zawartoscMg * 0.01;
                                if (inMg > 0.00554) {
                                    let masaPoKorekcieMg = (masaPoKorekcie * inMg) / 0.00545;
                                    let addAl = masaPoKorekcieMg * 0.052 - masaPoKorekcieMg * inAl;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                } else if (inMg < 0.00445) {
                                    let addMg = masaPoKorekcie * 0.005 - masaPoKorekcie * inMg;
                                    alert(`Dodaj ${addMg.toFixed(2)} kg magnezu. Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                                } else {

                                    alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                                }
                            }




                        } else if (stringZawAl < 4.745) {
                            let addAl = zawartosc * 0.05 - zawartosc * stringZawAl * 0.01;
                            if (zawartoscMg.includes(",")) {
                                let stringZawMg = zawartoscMg.replace(",", ".")
                                let inMg = zawartosc * stringZawMg * 0.01;
                                if (inMg > 0.00554) {
                                    let masaPoKorekcieMg = (zawartosc * inMg) / 0.00545;
                                    let addAl = masaPoKorekcieMg * 0.052 - masaPoKorekcieMg * stringZawAl*0.01;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                } else if (inMg < 0.00445) {
                                    let addMg = zawartosc * 0.005 - zawartosc * inMg;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dodaj ${addMg.toFixed(2)} kg magnezu.`)
                                } else {

                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                }
                            } else {
                                let inMg = zawartosc * zawartoscMg * 0.01;
                                if (inMg > 0.00554) {
                                    let masaPoKorekcieMg = (zawartosc * inMg) / 0.00545;
                                    let addAl = masaPoKorekcieMg * 0.052 - masaPoKorekcieMg * stringZawAl*0.01;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                } else if (inMg < 0.00445) {
                                    let addMg = zawartosc * 0.005 - zawartosc * inMg;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dodaj ${addMg.toFixed(2)} kg magnezu. `)
                                } else {

                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                }
                            }

                            

                        }

                    } else {


                        if (zawartoscAl > 5.254) {
                            let inAl = zawartoscAl * 0.01;
                            let masaPoKorekcie = (zawartosc * inAl) / 0.052;
                            if (zawartoscMg.includes(",")) {
                                let stringZawMg = zawartoscMg.replace(",", ".")
                                let inMg = masaPoKorekcie * stringZawMg * 0.01;
                                if (inMg > 0.00554) {
                                    let masaPoKorekcieMg = (masaPoKorekcie * inMg) / 0.00545;
                                    let addAl = masaPoKorekcieMg * 0.052 - masaPoKorekcieMg * inAl;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                } else if (inMg < 0.00445) {
                                    let addMg = masaPoKorekcie * 0.005 - masaPoKorekcie * inMg;
                                    alert(`Dodaj ${addMg.toFixed(2)} kg magnezu. Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                                } else {

                                    alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                                }
                            } else {
                                let inMg = masaPoKorekcie * zawartoscMg * 0.01;
                                if (inMg > 0.00554) {
                                    let masaPoKorekcieMg = (masaPoKorekcie * inMg) / 0.00545;
                                    let addAl = masaPoKorekcieMg * 0.052 - masaPoKorekcieMg * inAl;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                } else if (inMg < 0.00445) {
                                    let addMg = masaPoKorekcie * 0.005 - masaPoKorekcie * inMg;
                                    alert(`Dodaj ${addMg.toFixed(2)} kg magnezu. Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                                } else {

                                    alert(`Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                                }
                            }




                        } else if (zawartoscAl < 4.745) {
                            let addAl = zawartosc * 0.05 - zawartosc * zawartoscAl * 0.01;
                            if (zawartoscMg.includes(",")) {
                                let stringZawMg = zawartoscMg.replace(",", ".")
                                let inMg = zawartosc * stringZawMg * 0.01;
                                if (inMg > 0.00554) {
                                    let masaPoKorekcieMg = (zawartosc * inMg) / 0.00545;
                                    let addAl = masaPoKorekcieMg * 0.052 - masaPoKorekcieMg * zawartoscAl * 0.01;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                } else if (inMg < 0.00445) {
                                    let addMg = zawartosc * 0.005 - zawartosc * inMg;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dodaj ${addMg.toFixed(2)} kg magnezu.`)
                                } else {

                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                }
                            } else {
                                let inMg = zawartosc * zawartoscMg * 0.01;
                                if (inMg > 0.00554) {
                                    let masaPoKorekcieMg = (zawartosc * inMg) / 0.00545;
                                    let addAl = masaPoKorekcieMg * 0.052 - masaPoKorekcieMg * zawartoscAl * 0.01;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                } else if (inMg < 0.00445) {
                                    let addMg = zawartosc * 0.005 - zawartosc * inMg;
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium. Dodaj ${addMg.toFixed(2)} kg magnezu. `)
                                } else {

                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                }
                            }



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
                    <Label htmlFor="zawartoscMg">Zawartość magnezu</Label>
                    <Field id="zawartoscMg" name="zawartoscMg" placeholder="0" style={{ width: "50%", height: "30px", margin: "auto" }} />


                    <Button type="submit" style={{ margin: "auto", marginTop: "20px" }}>Oblicz</Button>

                </Form>
            </Formik>
            <StyledLink to="/korekta">Powrót</StyledLink>
        </Main>
    )
}

export default Stop042k