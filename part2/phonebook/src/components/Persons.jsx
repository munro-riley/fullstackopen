const Persons = (props) => {

    return(
        <>
            <h2>Numbers</h2>
            {props.persons.map( x => {
                if (x.name.includes(props.filter))
                    return (<p key={x.name}> {x.name} </p>)
            })}
        </>
    );

}

export default Persons;