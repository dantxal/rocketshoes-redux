import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductsList } from './styles';

export default function Home() {
  return (
    <ProductsList>
      <li>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Foto de tenis gratuita"
        />
        <strong>
          Tênis muito legal com título muito grande que quebra várias linhas
        </strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Foto de tenis gratuita"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Foto de tenis gratuita"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Foto de tenis gratuita"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Foto de tenis gratuita"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Foto de tenis gratuita"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Foto de tenis gratuita"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Foto de tenis gratuita"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductsList>
  );
}
