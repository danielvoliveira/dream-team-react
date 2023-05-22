import { Fragment } from 'react'
import './Box.css'

const Box = ({name, vacancy, image, bg_color}) => {

    return (
        <>
        <div className='box'>
            <div className='top' style={{ backgroundColor: bg_color }}>
                <img src={image} alt={name}/>
            </div>
            <div className='back'>
                <h4>{name}</h4>
                <h5>{vacancy}</h5>
            </div>
        </div>
        </>
    )
}

export default Box