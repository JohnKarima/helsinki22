const Header = (props) => {
  //   console.log(props)
  return <h1> {props.course}</h1>
}

const Part1 = (props) => {
  console.log(props)
  return (
    <p>
      {props.part1.name} {props.part1.exercises}
    </p>
  )
}
const Part2 = (props) => {
  console.log(props)
  return (
    <p>
      {props.part2.name} {props.part2.exercises}
    </p>
  )
}
const Part3 = (props) => {
  console.log(props)
  return (
    <p>
      {props.part3.name} {props.part3.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  console.log(part1.exercises)

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      <Header course={course} />
      <Part1 part1={part1} />
      <Part2 part2={part2} />
      <Part3 part3={part3} />
    </div>
  )
}
export default App
