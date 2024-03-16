import React from 'react'
import '../App.css';
export default function Login() {
  return (
    <div id='logindiv'>
      <div>
        <h1>Você sabe algu desses Cursos?</h1>
        <h1>Faça seu Login</h1>
        <t id='tt'>Faça o login agora mesmo para obter mais recursos
            <br/>
            Nós temos vários cursos para você no horizonte
            <br/>
            Isso é só apenas uma criação para praticar meu conhecimento
        </t>
<br/>
<br/>
      </div>
      <form>
<input type='email' placeholder='Escreva seu Email...'/>
<input type='password' placeholder='Escreva sua Pass...'/>
<button id='logar'>Entrar</button>
<span>Você não tem um conta? <a href=''><strong>Registrar</strong> </a></span>
      </form>
    </div>
  )
}
