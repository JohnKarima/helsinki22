// const Header = (props) => {
//   return <h1>{props.course}</h1>
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.partName} {props.exerciseNumber}
//     </p>
//   )
// }
// const Content = (props) => {
//   return (
//     <p>
//       <Part partName="Fundamentals of React" exerciseNumber={10} />
//       <Part partName="Using props to pass data" exerciseNumber={7} />
//       <Part partName="State of a component" exerciseNumber={14} />
//     </p>
//   )
// }

// const Total = (props) => {
//   return <p>Number of exercises {props.totalNumber}</p>
// }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
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
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part2.exercises}
      </p>
    </div>
  )
}

export default App
