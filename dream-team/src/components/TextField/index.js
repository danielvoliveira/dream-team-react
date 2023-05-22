import './TextField.css';

const TextField = (props) => {

    const changedPlaceholder = `${props.placeholder}...`

    const onWrited = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange={onWrited} value={props.value} required={props.required} type="text" placeholder={changedPlaceholder}/>
        </div>
    )
}

export default TextField