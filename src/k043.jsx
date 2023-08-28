import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';




function Stop043k() {
    const minAl = 0.0765;
    const maxAl = 0.083;
    const srednieAl = 0.08;
    const minMg = 0.0045;
    const maxMg = 0.0055;
    const sredniaMg = 0.005;



    return (
        <Main>
            <Paragraf>Korygujesz stop ZnAl8Mg05</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: 0,
                    zawartoscAl: 0,
                    zawartoscMg: 0,


                }}
                onSubmit={({ zawartosc, zawartoscAl, zawartoscMg }) => {
                    if (zawartoscAl.includes(",")) {

                        let poprawionaZawAl = zawartoscAl.replace(",", ".")
                        let stringZawAl = poprawionaZawAl * 0.01

                        // za dużo aluminium

                        if (stringZawAl > maxAl) {
                            let inAl = stringZawAl;

                            let masaPoKorekcieAl = (zawartosc * inAl) / maxAl;

                            if (zawartoscMg.includes(",")) {


                                let poprawionaZawMg = zawartoscMg.replace(",", ".");
                                let stringZawMg = poprawionaZawMg * 0.01;



                                // ile jest magnezu po dodaniu cynku aby Al było OK
                                let zawartoscMgpoKorekcie = stringZawMg * zawartosc / masaPoKorekcieAl;


                                // za dużo magnezu
                                if (zawartoscMgpoKorekcie > maxMg) {
                                    let masaPoKorekcieMg = masaPoKorekcieAl * zawartoscMgpoKorekcie / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - masaPoKorekcieAl) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (zawartoscMgpoKorekcie < minMg) {
                                    let dodajMg = zawartoscMgpoKorekcie * masaPoKorekcieAl - zawartoscMgpoKorekcie * sredniaMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. Dolej do ${masaPoKorekcieAl.toFixed(0)} kg w piecu.`)
                                    // magnez OK
                                } else {
                                    alert(`Dolej do ${masaPoKorekcieAl.toFixed(0)} kg w piecu.`)
                                }
                            } else {


                                // ile jest magnezu po dodaniu cynku aby Al było OK
                                let zawartoscMgpoKorekcie = zawartoscMg * zawartosc / masaPoKorekcieAl;
                                // za dużo magnezu
                                if (zawartoscMgpoKorekcie > maxMg) {
                                    let masaPoKorekcieMg = masaPoKorekcieAl * zawartoscMgpoKorekcie / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - masaPoKorekcieAl) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (zawartoscMgpoKorekcie < minMg) {
                                    let dodajMg = zawartoscMgpoKorekcie * sredniaMg - zawartoscMgpoKorekcie * masaPoKorekcieAl;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. Dolej do ${masaPoKorekcieAl.toFixed(0)} kg w piecu.`)
                                    // magnez OK
                                } else {
                                    alert(`Dolej do ${masaPoKorekcieAl.toFixed(0)} kg w piecu.`)
                                }
                            }


                            // za mało aluminium
                        } else if (stringZawAl < minAl) {
                            let addAl = zawartosc * srednieAl - zawartosc * stringZawAl;
                            if (zawartoscMg.includes(",")) {

                                let poprawionaZawMg = zawartoscMg.replace(",", ".");
                                let stringZawMg = poprawionaZawMg * 0.01
                                // za dużo magnezu
                                if (stringZawMg > maxMg) {
                                    let masaPoKorekcieMg = zawartosc * stringZawMg / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - zawartosc) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (stringZawMg < minMg) {
                                    let dodajMg = zawartosc * sredniaMg - zawartosc * stringZawMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                    // magnez OK
                                } else {
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                }
                            } else {


                                // za dużo magnezu
                                if (zawartoscMg > maxMg) {
                                    let masaPoKorekcieMg = zawartosc * zawartoscMg / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - zawartosc) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (zawartoscMg < minMg) {
                                    let dodajMg = zawartosc * sredniaMg - zawartosc * zawartoscMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                    // magnez OK
                                } else {
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                }
                            }
                        }
                        // aluminium OK
                        else {

                            if (zawartoscMg.includes(",")) {

                                let poprawionaZawMg = zawartoscMg.replace(",", ".");
                                let stringZawMg = poprawionaZawMg * 0.01
                                // za dużo magnezu
                                if (stringZawMg > maxMg) {
                                    let masaPoKorekcieMg = zawartosc * stringZawMg / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - zawartosc) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (stringZawMg < minMg) {
                                    let dodajMg = zawartosc * sredniaMg - zawartosc * stringZawMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. `)
                                    // magnez OK
                                } else {
                                    alert(`Stop gotowy do odlania.`)
                                }
                            } else {


                                // za dużo magnezu
                                if (zawartoscMg > maxMg) {
                                    let masaPoKorekcieMg = zawartosc * zawartoscMg / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - zawartosc) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (zawartoscMg < minMg) {
                                    let dodajMg = zawartosc * sredniaMg - zawartosc * zawartoscMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu.`)
                                    // magnez OK
                                } else {
                                    alert(`Stop gotowy do odlania.`)
                                }
                            }

                        }

                    } else {

                        let stringZawAl = zawartoscAl * 0.01;
                        console.log(stringZawAl);
                        // za dużo aluminium
                        if (stringZawAl > maxAl) {

                            let inAl = stringZawAl;
                            let masaPoKorekcieAl = (zawartosc * inAl) / maxAl;
                            if (zawartoscMg.includes(",")) {

                                console.log("za dużo Mg");
                                let poprawionaZawMg = zawartoscMg.replace(",", ".");
                                let stringZawMg = poprawionaZawMg * 0.01
                                // ile jest magnezu po dodaniu cynku aby Al było OK
                                let zawartoscMgpoKorekcie = stringZawMg * zawartosc * 0.01 / masaPoKorekcieAl;
                                // za dużo magnezu
                                if (zawartoscMgpoKorekcie > maxMg) {
                                    let masaPoKorekcieMg = masaPoKorekcieAl * zawartoscMgpoKorekcie / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - masaPoKorekcieAl) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (zawartoscMgpoKorekcie < minMg) {
                                    let dodajMg = zawartoscMgpoKorekcie * sredniaMg - zawartoscMgpoKorekcie * masaPoKorekcieAl;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. Dolej do ${masaPoKorekcieAl.toFixed(0)} kg w piecu.`)
                                    // magnez OK
                                } else {
                                    alert(`Dolej do ${masaPoKorekcieAl.toFixed(0)} kg w piecu.`)
                                }
                            } else {

                                // ile jest magnezu po dodaniu cynku aby Al było OK
                                let zawartoscMgpoKorekcie = zawartoscMg * zawartosc * 0.01 / masaPoKorekcieAl;
                                console.log(zawartoscMgpoKorekcie);
                                // za dużo magnezu
                                if (zawartoscMgpoKorekcie > maxMg) {
                                    console.log("za dużo Mg");
                                    let masaPoKorekcieMg = masaPoKorekcieAl * zawartoscMgpoKorekcie / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - masaPoKorekcieAl) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (zawartoscMgpoKorekcie < minMg) {
                                    let dodajMg = masaPoKorekcieAl * sredniaMg - zawartoscMgpoKorekcie * masaPoKorekcieAl;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. Dolej do ${masaPoKorekcieAl.toFixed(0)} kg w piecu.`)
                                    // magnez OK
                                } else {
                                    alert(`Dolej do ${masaPoKorekcieAl.toFixed(0)} kg w piecu.`)
                                }
                            }


                            // za mało aluminium
                        } else if (stringZawAl < minAl) {
                            let addAl = zawartosc * srednieAl - zawartosc * stringZawAl;
                            console.log(addAl);
                            if (zawartoscMg.includes(",")) {

                                let poprawionaZawMg = zawartoscMg.replace(",", ".");
                                let stringZawMg = poprawionaZawMg * 0.01
                                // za dużo magnezu
                                if (stringZawMg > maxMg) {
                                    let masaPoKorekcieMg = zawartosc * sredniaMg / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - zawartosc) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (stringZawMg < minMg) {
                                    let dodajMg = zawartosc * sredniaMg - zawartosc * stringZawMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                    // magnez OK
                                } else {
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                }
                            } else {

                                let stringZawMg = zawartoscMg * 0.01
                                // za dużo magnezu
                                if (stringZawMg > maxMg) {
                                    let masaPoKorekcieMg = zawartosc * stringZawMg / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - zawartosc) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (stringZawMg < minMg) {
                                    let dodajMg = zawartosc * sredniaMg - zawartosc * stringZawMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                    // magnez OK
                                } else {
                                    alert(`Dodaj ${addAl.toFixed(0)} kg aluminium.`)
                                }
                            }
                        }
                        // aluminium OK
                        else {
                            if (zawartoscMg.includes(",")) {
                                let poprawionaZawMg = zawartoscMg.replace(",", ".");
                                let stringZawMg = poprawionaZawMg * 0.01
                                // za dużo magnezu
                                if (stringZawMg > maxMg) {
                                    let masaPoKorekcieMg = zawartosc * sredniaMg / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - zawartosc) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (stringZawMg < minMg) {
                                    let dodajMg = zawartosc * sredniaMg - zawartosc * stringZawMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. `)
                                    // magnez OK
                                } else {
                                    alert(`Stop gotowy do odlania.`)
                                }
                            } else {

                                let stringZawMg = zawartoscMg * 0.01
                                // za dużo magnezu
                                if (stringZawMg > maxMg) {
                                    let masaPoKorekcieMg = zawartosc * stringZawMg / maxMg;
                                    let dodajAl = (masaPoKorekcieMg - zawartosc) * srednieAl;
                                    alert(`Dodaj ${dodajAl.toFixed(0)} kg aluminium. Dolej do ${masaPoKorekcieMg.toFixed(0)} kg w piecu.`)
                                }
                                // za mało magnezu
                                else if (stringZawMg < minMg) {
                                    let dodajMg = zawartosc * sredniaMg - zawartosc * stringZawMg;
                                    alert(`Dodaj ${dodajMg.toFixed(1)} kg magnezu. `)
                                    // magnez OK
                                } else {
                                    alert(`Stop gotowy do odlania.`)
                                }
                            }

                        }

                    }
                }

                } >
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

export default Stop043k