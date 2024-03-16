import React from 'react'
import '../App.css';
import inforimg from '../img/arte-vetorial-sobre-imagem-vetorial-simples-de-computador_975572-11548-removebg-preview-fotor-2024031691517.png'
import ingimg from '../img/presentation-removebg-preview.png'
import enpreenimg from '../img/oque-e-empreendedorismo-removebg-preview-fotor-202403169333.png'
import ENCimg from '../img/emc5-removebg-preview-fotor-2024031694017.png'

export default function Cursos() {
  return (
    <div>
        <div id='spancur'>
       <h1 >Faça os Cursos para melhorar</h1>
       <h1>Os seus conhecimentos</h1>
<div id='CSP'>
    <div><span>1</span><o id='o'> Curso de imformatica</o>
    <br/>
    <br/>
    <div id='ppp'>
        <t>
        é a ciência que estuda o 
    <br/>
    processamento  automático
    <br/>
    da informação  através de um computador.
<br/>
de um computador.
</t>
<img  id='infomg'   draggable='false'src={inforimg} />
</div>
 
    </div>
    <div><span>2</span><o id='o'> Curso de ingles</o>
    <br/>
    <br/>
    <div id='ppp'>
        <t>
        A origem da língua inglesa está
    <br/>
    adivinha, na atual Inglaterra e 
    <br/>
    na chegada de tribos Anglo-Saxões 
<br/>
vindas da Europa Central.
</t>
<img  id='ingimg'  draggable='false' src={ingimg} />
</div>
    </div>
    <div><span>3</span><o id='o'> Curso de Empreendedorismo</o>
    <br/>
    <br/>
    <div id='ppp'>
        <t>
            dsfdsfdsfdsfsdfdsfdsfess
    <br/>
    fgdfgdfgfdgdfgdfgdfsdfsdfs
    <br/>
fsdfdsfdsfdsfdsfdsfdsfssssssss
<br/>
fdfdsfsdfdsfdsfdsfdsfsdfdsfsdf
</t>
<img  id='empreenimg'   draggable='false' src={enpreenimg} />
</div>
    </div>
    <div><span>4</span><o id='o'> Curso de E.M.C</o>
    <br/>
    <br/>
    <div id='ppp'>
        <t>
            dsfdsfdsfdsfsdfdsfdsfess
    <br/>
    fgdfgdfgfdgdfgdfgdfsdfsdfs
    <br/>
fsdfdsfdsfdsfdsfdsfdsfssssssss
<br/>
fdfdsfsdfdsfdsfdsfdsfsdfdsfsdf
</t>
<img  id='EMCimg'  draggable='false' src={ENCimg}  />
</div>
    </div>
</div>
       </div>
    </div>
  )
}
