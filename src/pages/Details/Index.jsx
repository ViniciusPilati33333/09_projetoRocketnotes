import { Container, Links, Content } from "./style"

import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'
import { ButtonText } from '../../components/buttonText'


export function Details() {

  return(
  <Container> 

      <Header />

    <main>
      <Content>
        <ButtonText title="Excluir Nota"/>

        <h1>Introdução ao React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum et porro tempora quisquam sunt eius iusto incidunt aperiam cumque, animi quis quibusdam obcaecati nemo natus dolor voluptate dolore labore.</p>

        <Section title='Links Uteis'>
            <Links>
              <li><a href="#">https://github.com/ViniciusPilati33333</a></li>
              <li><a href="#">https://www.linkedin.com/in/vin%C3%ADcius-raitz-pilati-ba4ab720b/</a></li>
            </Links>
        </Section>

        <Section title='Marcadores'>
            <Tag title="Express"/>
            <Tag title="Node"/>
        </Section>
      
        <Button title="Voltar"/>

      </Content>
    </main>

  </Container>
  )
}