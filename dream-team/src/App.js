import { useState } from 'react'
import Banner from './components/Banner'
import CardsBox from './components/CardsBox'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {

  const boxes = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Fron-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'Ux e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ]

  const [professionals, setProfessionals] = useState([])

  const onSaveNewProfessional = (professional) => {
    debugger
    setProfessionals([...professionals, professional])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        boxes={boxes.map(box => box.name)}
        onSaveProfessional={professional => onSaveNewProfessional(professional)}
      />

      {boxes.map(box =>
        <CardsBox
          key={box.name}
          name={box.name}
          primaryColor={box.primaryColor}
          secondaryColor={box.secondaryColor}
          professionals={professionals.filter(professional => professional.team == box.name)}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
