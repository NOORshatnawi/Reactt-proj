import React from 'react'
import logo from '../../components/assets/111.jpg';
import './styles.css'
import Footer from '../footer/Footer';
export default function About() {
  return (
    <div className='about'>
  
    <div>
      <img src='https://media.istockphoto.com/photos/back-to-school-apple-blackboard-education-backgrounds-books-stack-picture-id469892037?k=6&m=469892037&s=612x612&w=0&h=TkvQ413Fi9EDA0l-kNUx2_iH8eu41OI2SAjxcZtgxi8='/>
    </div>
        
        <div className="m-4 bg-dark p-1 ">
          <h2 className="text-light"></h2>
          <p className="text-light">Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.</p>
          <p className="text-light"> Brand Book is here for you There is no friend as loyal as a book.</p>
        </div>
    
        <Footer/>

</div>
  )
}
