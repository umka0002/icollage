import React from 'react'
import css from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <div className='container'>
        <div className={css.header}>
            <div className={css.left}>
              <Link to='/'>
              <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className={css.right}>
              <Link className={css.link}>Заявление и поступление</Link>
              <Link className={css.link}>Программа</Link>
              <Link className={css.link}>Студенты</Link>
              <Link className={css.link}>Преимущества</Link>
              <Link className={css.link}>Поддержка студентов</Link>
            </div>
        </div>
    </div>
  )
}
