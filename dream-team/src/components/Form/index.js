import './Form.css';
import TextField from '../TextField';
import SelectField from '../SelectField';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('')
    const [vacancy, setVacancy] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const saveForm = (event) => {
        event.preventDefault()
        props.onSaveProfessional({
            name,
            vacancy,
            image,
            team,
        })
        setName('')
        setVacancy('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={saveForm}>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    value={vacancy}
                    onChanged={value => setVacancy(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    required={true}
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <SelectField
                    key="Boxes"
                    label="Time"
                    placeholder="Selecione um time"
                    items={props.boxes}
                    required={true}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form