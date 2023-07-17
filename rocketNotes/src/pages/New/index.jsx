import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Textarea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section} from '../../components/section';



import { Container, Form } from './style';

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href='/'>Voltar</a>
                    </header>
            <Input placeholder='Titulo'/> 
            <Textarea placeholder='Observações'/> 

            <Section title='Links úteis'>
                <NoteItem value='https://github.com/ViniciusPilati33333' />
                <NoteItem isNew placeholder="Novo Link"/>
            </Section> 

                </Form>
            </main>
        </Container>
    )
}