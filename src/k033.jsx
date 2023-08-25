import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Main, StyledLink, Paragraf, Label, Button } from './stop.styled';




function Stop033k() {
   
   
   

    return (
        <Main>
            <Paragraf>Korygujesz stop ZL3</Paragraf>
            <Formik 
                initialValues={{
                    zawartosc: 0,
                    zawartoscAl: 0,
                    zawartoscMg: 0,

                }}
                onSubmit={({zawartosc, zawartoscAl, zawartoscMg}) => {
              
                   
                    if (zawartoscAl > 4.24) {
                        let inAl = zawartoscAl * 0.01;
                        let masaPoKorekcie = (zawartosc * inAl) / 0.042;
                      
                        let dolej = masaPoKorekcie - zawartosc
                 
                        if (zawartoscMg < 0.0345) {
                            let inMg = zawartoscMg * 0.01;
                            let addMg1 = (dolej * 0.0005);
                            let addMg2 = zawartosc * 0.0005 - zawartosc * inMg;
                            let addMg = addMg1 + addMg2;
                            alert(`Dodaj ${addMg.toFixed(2)} kg magnezu. Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                            
                        }  else if (zawartoscMg > 0.0345 && zawartoscMg < 0.06) {
                            
                            let addMg1 = (dolej * 0.0005);
                            alert(`Dodaj ${addMg1.toFixed(2)} kg magnezu. Dolej do ${masaPoKorekcie.toFixed(0)} kg w piecu.`)
                        } else if (zawartoscMg > 0.06) {
                            
                            let inMg = zawartoscMg * 0.01;
                            let inMGkorekta = masaPoKorekcie * inMg;
                            console.log(inMGkorekta);
                            // let masaPoKorekcieMG = (zawartosc * inMg) / 0.0005;
                        }
                        
                    } 
                }}
            
            >
                <Form
                style={{display: "flex",
                        flexDirection: "column",
justifyContent: "center",
}}
                >
                    
                    <Label htmlFor="zawartosc">Zawartość w piecu</Label>
                    <Field id="zawartosc" name="zawartosc" placeholder="0" style={{ width: "50%", height: "30px", margin: "auto"} } />
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

export default Stop033k