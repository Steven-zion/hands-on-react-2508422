function App() {
  const name = 'intergalactic alliance';
  
  return (
    <hgroup>
      <h1>Meet the <i style={ {color: 'steelBlue'}}>StarGazers</i></h1>
      <p>Members of an <b>{name}</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      <button className="outline" onClick={()=> alert('hi there!')}></button>
    </hgroup>
  )
}
export default App
