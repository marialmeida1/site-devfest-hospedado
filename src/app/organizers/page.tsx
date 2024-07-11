import React from 'react';
import Detail from '../components/common/detailCard';

export default function Organizers() {
   return <>
      <section className="container py-6">
         <Detail title="GDG" image="/img/logo_gdg.png" text="O GDG de Belo Horizonte é responsável pela organização do DevFest. O evento é liderado por Fernanda Costa, Fernanda Rezende, Guilherme Radicchi e Renato Pereira. Esses quatro líderes dedicam-se à coordenação e execução das atividades, garantindo que tudo ocorra de maneira organizada e eficiente. Sob sua liderança, o DevFest se destaca como um momento importante para a comunidade de desenvolvedores locais."/>

         <Detail title="Web Tech" image="/img/logo_webtech.jpeg" text="A WebTech é um projeto de extensão da PUC Minas que tem como objetivo gerar espaço de trabalho para que alunos e professores criem juntos aplicações, ferramentas e conteúdo para interessados em criar soluções e produtos digitais."/>
      </section>
   </>
}

