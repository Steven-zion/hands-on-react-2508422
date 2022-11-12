function App() {
  const name = 'intergalactic alliance';
  
  return (
    <hgroup>
      <h1>Meet the StarGazers</h1>
      <p>Members of an <i style={ {color: 'steelBlue'}}>{name}</i> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      <button className="outline" onClick={()=> alert('hi there!')}></button>
    </hgroup>
  )
}
export default App
