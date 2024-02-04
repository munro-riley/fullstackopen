const PersonForm = (props) => {
    return(
        <>
            <h2>Add Person</h2>
            <form onSubmit={props.submitNewName}>
                <div>
                    name: <input value={props.name} onChange={props.handleNameChange} />
                </div>
                <div>
                    number: <input value={props.number} onChange={props.handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    );
}

export default PersonForm;