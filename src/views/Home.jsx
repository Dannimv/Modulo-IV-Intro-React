import Header from '../components/Header'
import CardPizza from '../components/CardPizza';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect, useContext } from 'react';
import Pizza from '../components/Pizza';
import { MyContext } from '../context/MyContext';

export default function Home() {

  const { cartaPizza } = useContext(MyContext)

  return (
    <div>
    <Header/>
    <div className='cards container d-flex justify-content-center flex-wrap mt-4'>
    
    {cartaPizza.map((item) => (
    <div key={item.id}>
    
    <CardPizza product={cartaPizza}
    name={item.name}
    price={item.price}
    ingredients={item.ingredients}
    img={item.img}
    />
    </div>
    ))}
    
    </div>
    </div>
  );
};
