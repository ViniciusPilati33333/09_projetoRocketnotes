import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Note } from '../../components/note';
import { Section } from '../../components/section';
import { ButtonText } from '../../components/buttonText';



export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                        title: 'React' , 
                        tags: [
                            {id: '1' , name:'react'},
                            {id: '2' , name:'rocketseat'},
                              ]
                        }} 
                    />
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>
    );
}