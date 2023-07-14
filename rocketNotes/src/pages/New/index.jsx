import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Textarea } from '../../components/TextArea';



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
                </Form>
            </main>
        </Container>
    )
}