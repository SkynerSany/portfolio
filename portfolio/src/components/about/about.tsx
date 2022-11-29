import React from 'react'
import './about.scss';
import Info from './info/info';
import TechnologyList from './technologyList/technologyList';

export default function About() {
  return (
    <article id='about'>
      <div className="container">
        <TechnologyList />
        <Info />
      </div>
    </article>
  )
}