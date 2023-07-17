import { Link } from "react-router-dom";
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Textarea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section} from '../../components/section';
import { Button } from '../../components/button'



import { Container, Form } from './style';

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to='/'>Voltar</Link>
                    </header>
            <Input placeholder='Titulo'/> 
            <Textarea placeholder='Observações'/> 

            <Section title='Links úteis'>
                <NoteItem value='https://github.com/ViniciusPilati33333' />
                <NoteItem isNew placeholder="Novo Link"/>
            </Section> 

            <Section title="Marcadores">
                <div className='tags'>
                    <NoteItem value='React' />
                    <NoteItem isNew placeholder="Nova tag"/>
                </div>
            </Section>
                    <Button title='Salvar'/>
                </Form>
            </main>
        </Container>
    )
}