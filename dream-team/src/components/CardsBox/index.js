import Box from '../Box'
import './CardsBox.css'

const CardsBox = (props) => {

    const cssSection = {
        backgroundColor: props.secondaryColor,
    }

    const cssTitle = {
        borderColor: props.primaryColor,
    }

    let count_box = 0

    return(
        (props.professionals.length > 0) ?
            <section className='cards-box' style={cssSection}>
                <h3 style={cssTitle}>{props.name}</h3>
                <div className='box-content'>
                    {props.professionals.map(
                        professional => <Box
                            key={professional.name}
                            name={professional.name}
                            vacancy={professional.vacancy}
                            image={professional.image}
                            bg_color={props.primaryColor}
                        />
                    )}
                </div>
            </section>
        : ''
    )
}

export default CardsBox