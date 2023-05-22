import './SelectField.css'

const SelectField = (props) => {

    const changedPlaceholder = `${props.placeholder}...`

    return(
        <div className='select-field'>
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.value}>
                <option>{changedPlaceholder}</option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default SelectField