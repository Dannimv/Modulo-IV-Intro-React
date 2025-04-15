import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect, useContext } from "react";
import Pizza from "../components/Pizza";


export default function Home() {

  return (
    <div>
      <Header />
      <CardPizza/>
    </div>
  );
}
