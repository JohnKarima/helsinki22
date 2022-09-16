const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.partName} {props.exerciseNumber}
    </p>
  )
}
const Content = (props) => {
  return (
    <p>
      <Part partName="Fundamentals of React" exerciseNumber={10} />
      <Part partName="Using props to pass data" exerciseNumber={7} />
      <Part partName="State of a component" exerciseNumber={14} />
    </p>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.totalNumber}</p>
}

const App = () => {
  return (
    <div>
      <Header course="Half Stack application development" />
      <Content />
      <Total totalNumber={10 + 7 + 14} />
    </div>
  )
}

export default App
