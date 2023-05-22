import './Footer.css'

const Footer = (props) => {

    return (
        <div className='footer'>
            <ul>
                <li><a href='#'><img src='/images/fb.png' alt='Íconde do Facebook'/></a></li>
                <li><a href='#'><img src='/images/tw.png' alt='Íconde do Twitter'/></a></li>
                <li><a href='#'><img src='/images/ig.png' alt='Íconde do Instagram'/></a></li>
            </ul>
            <div className='logo'>
                <img src='/images/logo.png' alt='Logo da Organo'/>
            </div>
            <div className='signature'>
                <p>Desenvolvido por Daniel Oliveira.</p>
            </div>
        </div>
    )
}

export default Footer