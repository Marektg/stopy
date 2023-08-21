import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';



function Stop033k() {

   
    let masaKoncowa = 5200;

    return (
        <Main>
            <Paragraf>Przygotowujesz stop ZL3</Paragraf>
            <Formik
                initialValues={{
                    zawartosc: 0,
                    zawartoscAl: 0,
                    zawartoscMg: 0,

                }}
                onSubmit={({zawartosc, zawartoscAl, zawartoscMg}) => {
              
                   
                    if ((zawartoscAl > 4.24) || (zawartoscMg < 0.00345)) {
                        let inAl = zawartoscAl * 0.01;
                        let masaPoKorekcie = (zawartosc * inAl) / 0.042;
                        console.log(masaPoKorekcie);
                        let dolej = masaPoKorekcie - zawartosc
                        console.log(dolej);
                        let inMg = zawartoscMg * 0.01;
                        let addMg1 = (dolej * 0.0005);
                        let addMg2 = zawartosc * 0.0005 - zawartosc * inMg;
                        let addMg = addMg1 + addMg2;
                        console.log(inMg)
                        alert(`Dodaj ${addMg.toFixed(2)} kg magnezu. Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                    } 
                }}
            
            >
                <Form>
                    <Label htmlFor="zawartosc">Zawartość w piecu</Label>
                    <Field id="zawartosc" name="zawartosc" placeholder="0" />
                    <Label htmlFor="zawartoscAl">Zawartość aluminium</Label>
                    <Field id="zawartoscAl" name="zawartoscAl" placeholder="0" />
                    <Label htmlFor="zawartoscMg">Zawartość magnezu</Label>
                    <Field id="zawartoscMg" name="zawartoscMg" placeholder="0" />


                    <Button type="submit">Submit</Button>
                </Form>
            </Formik>
            <StyledLink to="/">Powrót</StyledLink>
        </Main>
    )
}

export default Stop033k