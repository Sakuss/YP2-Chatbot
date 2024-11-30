# Tekoälybotti 2

Tämän projektin ideana oli jatkaa saman ryhmän jo aiemmin luomaa tekoälybottia, joka hyödyntää OpenAi:n tarjoamaa tekoälyrajapintaa. Tekoälybotin tarkoitus oli pystyä vastaamaan älykkäästi sille määritellyn kontekstin perusteella. Kontekstina toimi Oulun ammattikorkeakoulun ohjaussuunnitelma. Projekti toteutettiin 4 hengen ryhmässä, jossa kaikki toimivat full-stack kehittäjinä. Projekti oli jatkoa ryhmän aiemmin aloittamaan Yritys- tai tuotelähtöiseen projektiin. Projektin pääpainona oli ryhmän tekoäly ohjelmoinnin osaamisen syventäminen, toimivan tekoälybotin lisäksi.

![konteksti](https://github.com/Sakuss/YP2-Chatbot/blob/main/images/konteksti.png)

Kuva 1. Pätkä kontekstia

## Teknologiat

Sovelluksen käyttöliittymä toteutettiin React Vitellä ja palvelin pythonilla, käyttäen fastApi -kirjastoa. Konteksti ja keskusteluhistoria säilöttiin MySQL -tietokantaan.

## Sovelluksen arkkitehtuuri

Sovelluksen arkkitehtuuriksi valikoitui client-server -malli, koska jo valmiiksi aiemmassa projektissa pythonilla luotu tekoälybotti oli helppo muovata kyseiseen arkkitehtuuriin.

![arkkitehtuuri](https://github.com/Sakuss/YP2-Chatbot/blob/main/images/arkkitehtuuri.png)

Kuva 2. Sovelluksen arkkitehtuuri

## Lopputulos

Tekoälybotti toimi odotetulla tavalla, antaen rakentavia ja kehittäviä vastauksia käyttäjälle tämän kysyessä kontekstista jotain. Projektia voisi jatkokehittää laajentamalla kontekstia ja parantamalla käyttöliittymää.

![botti](https://github.com/Sakuss/YP2-Chatbot/blob/main/images/botti.png)
