// const Part = ({part}) => {
//     return <p> {part.name} </p>
// }

const Course = ({course}) => {
    return(
        <>
            <Header name={course.name} />
            <Content courses={course.parts}/>
            <Footer parts={course.parts}/>
        </>
    );
}

const Header = ({name}) => {
    return <h1>{name}</h1>;
}

const Part = ({part}) => {
    return <p>{part.name} {part.exercises}</p>
}

const Footer = ({parts}) => {
    let initialValue = 0;
    return(
        <b>Total of {parts.reduce((accumulator, currentValue) => (accumulator + currentValue.exercises), initialValue)} exercises</b>
    );
}

const Content = ({courses}) => {
    return(
        <>
            {courses.map(part =>
                <Part key={part.id} part={part}/>
            )}
        </>
    );
}

export default Course;