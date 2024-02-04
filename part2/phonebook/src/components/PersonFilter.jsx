const PersonFilter = (props) => {
    return(
        <>
            <h2>Filter</h2>
            <form>
                <div>
                    name with: <input value={props.filter} onChange={props.handleFilterChange} />
                </div>
            </form>
        </>

    );
}

export default PersonFilter;