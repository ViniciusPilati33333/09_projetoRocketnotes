import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Textarea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section} from '../../components/section';
import { Button } from '../../components/button'



import { Container, Form } from './style';
import { FiTarget } from "react-icons/fi";

export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

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

                {
                    links.map((link, index) => ( 
                <NoteItem 
                    key={String(index)}
                    value={link}
                    onClick={() => { }}
                />
                    ))
                }

                <NoteItem 
                isNew
                placeholder="Novo Link"
                value={newLink}
                onChange={e => setNewLink(e.target.value)}
                onClick={handleAddLink}
                />
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