import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "../../../node_modules/@react-pdf-viewer/core";

import Scissor from "./Scissor";
import Card from "./Card";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "auto",
    margin: "auto",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    padding: 5,
  },
});

const PdfInvoice = ({ invoiceData }) => {
  const {
    FirstName,
    Email,
    Address,
    Country,
    State,
    City,
    Post_Code,
    totalAfterTax,
  } = invoiceData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Invoice to {FirstName}</Text>
          <Text>
            {Address} {State} {Country}
          </Text>
          <Text>Sunsari, Nepal</Text>
        </View>

        <View style={styles.section}>
          <Text>Invoice ID: YCCURW-000000</Text>
          <Text>Order Date: 10/05/2022</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>#</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Event Details</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Event Type</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Ticket</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Unit Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Discount</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Total</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>title</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Concert</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>x1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>$500.00</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>$0.00</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>${totalAfterTax}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text>Invoice Total: USD ${totalAfterTax}</Text>
        </View>

        <Scissor />

        <Card />
      </Page>
    </Document>
  );
};

export default PdfInvoice;
