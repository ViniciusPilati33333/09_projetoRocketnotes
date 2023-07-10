import { Container, Links } from "./style"

import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'




export function Details() {

  return(
    <Container> 

      <Header />

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

    </Container>
  )
}