/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

interface ContractProps {
  name: string;
  date: string;
  periode: string;
  now: string;
}

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 25,
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    margin: "auto",
    fontWeight: "bold",
    fontSize: 20,
  },
  personne: { fontSize: 15 },
  body: { marginTop: 5, fontSize: 15 },
  subtitle: { fontWeight: "bold", marginTop: 20, fontSize: 15 },
  bottom: { marginTop: 20, fontSize: 15 },
  professionnel: {
    marginTop: 15,
    fontSize: 15,
  },
  firstsignature: {
    marginTop: 20,
    marginBottom: 30,
  },
  signature: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 100,
  },
});

// Create Document Component
const Contract = ({ name, date, periode, now }: ContractProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.section}>
          <Text style={styles.title}>CONTRAT DE REMPLACEMENT</Text>
        </View>

        <Text style={styles.personne}>Entre les soussignées :</Text>
        <Text style={styles.personne}>D'une part:</Text>
        <Text style={styles.personne}>Mme Bourgallé Élodie </Text>
        <Text style={styles.personne}>Adeli: 776174070</Text>
        <Text style={styles.personne}>Mme Barry Isabelle</Text>
        <Text style={styles.personne}>Adeli: 776148066 </Text>
        <Text style={styles.personne}>Mme Cadaut Marion</Text>
        <Text style={styles.personne}>Adeli: 776235236</Text>
        <Text style={styles.professionnel}>D'autre part :</Text>
        <Text style={styles.personne}>{name} </Text>
        <Text style={styles.subtitle}>Article 1/ </Text>
        <Text style={styles.body}>
          Mesdames Bourgallé, Barry et Cadaut, infirmières libérales, dont le
          cabinet sis 7 Rue des Fossés 77620 ÉGREVILLE mettent à la disposition
          de {name}, infirmier-e libéral-e, leur patientèle aux conditions
          citées aux articles suivants,
        </Text>
        <Text style={styles.subtitle}>Article 2/</Text>
        <Text style={styles.body}>Mise à disposition de la patientèle :</Text>

        <Text style={styles.body}>
          Bien que n'utilisant pas ses propres feuilles de soins auprès de la
          patientèle de Mesdames Bourgallé, Barry et Cadaut, {name} exercera sa
          profession d'infirmière et prodiguera des soins auprès de la
          patientèle de Mesdames Bourgallé, Barry et Cadaut. Dans tous les cas
          Mesdames Bourgallé, Barry et Cadaut resteront seules titulaires des
          droits de la patientèle.
        </Text>
        <Text style={styles.subtitle}>Article 3/</Text>
        <Text style={styles.body}>Conditions d'exercices :</Text>
        <Text style={styles.body}>
          Mesdames Bourgallé, Barry et Cadaut encaisseront les honoraires des
          patients et les rétrocéderont à {name} dans un délai d'un mois avec
          rétrocession à hauteur de 10%.
        </Text>
        <Text style={styles.subtitle}>Article 4/</Text>
        <Text style={styles.body}>Assurances et charges : </Text>
        <Text style={styles.body}>
          {name} paiera les charges fiscales et sociales liées à son mode
          d'exercice, devra être inscrit-e à l'ordre infirmier.
          {name} s'engage à souscrire une assurance garantissant sa
          responsabilité professionnelle et présentera une attestation de
          Remplaçant-e.
        </Text>
        <Text style={styles.subtitle}>Article 5/</Text>
        <Text style={styles.body}>
          Ce présent contrat est conclu pour une période allant du {periode}.
        </Text>
        <Text style={styles.body}>Dates travaillées : {date}</Text>
        <Text style={styles.subtitle}>Article 6/</Text>
        <Text style={styles.body}>Organisation du travail :</Text>
        <Text style={styles.body}>
          {name} s'engage à réaliser à l'issue de chaque journée de travail, et
          à chaque veille de travail, les transmissions avec les infirmières
          concernées sur le planning. Elles se feront par téléphone ou sur
          messagerie sécurisée, et devront restituer fidèlement l'état, le
          comportement, les traitements de chaque patient.
        </Text>
        <Text style={styles.subtitle}>Article 7/</Text>
        <Text style={styles.body}>
          {name} devra faire preuve d'une grande compréhension et d'une empathie
          face aux patients. La communication et le sourire seront de rigueur
          afin d'établir un solide lien de confiance. Représentant une équipe,
          il est important de ne pas entacher une réputation durement acquise.
        </Text>
        <Text style={styles.subtitle}>Article 8/</Text>
        <Text style={styles.body}>
          Les soussignés déclarent sur l'honneur qu'aucune contre lettre ne
          vient modifier les clauses du contrat.
        </Text>
        <Text style={styles.bottom}>Fait à EGREVILLE, </Text>
        <Text style={styles.bottom}>Le {now}, "lu et approuvé"</Text>
        <View style={styles.signature}>
          <Text style={styles.personne}>BOUGALLE ÉLODIE</Text>
          <Text style={styles.personne}>BARRY ISABELLE </Text>
          <Text style={styles.personne}>CADAUT MARION</Text>
          <Text style={styles.personne}>{name.toUpperCase()}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Contract;
