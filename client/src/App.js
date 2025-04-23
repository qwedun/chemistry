import ChemistryTable from "./components/ChemistryTable";
import {useEffect, useState} from "react";
import './App.css';
import ElementDescription from "./components/ElementDescription";

function App() {

  const [data, setData] = useState();
  const [currentElement, setCurrentElement] = useState(null);
  const [sortedProperty, setSortedProperty] = useState();

  async function fetchData() {
    try {
      const res = await fetch('http://localhost:8000/chemicalElements');
      return await res.json()
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData().then((res) => setData(res));
  }, [])

  return (
      <>
          {data && <div className='main'>
              <div>
                  <div className='column'>1</div>
                  <div className='column'>2</div>
                  <div className='column'>3</div>
                  <div className='column'>4</div>
                  <div className='column'>5</div>
                  <div className='column'>6</div>
                  <div className='column'>7</div>
              </div>
              <div className='empty'>
                  <div className='empty-cell'>*57-71</div>
                  <div className='empty-cell'>*89-103</div>
                  <div className='empty-cell'>6</div>
                  <div className='empty-cell'>7</div>
              </div>
              <ChemistryTable
                  sortedProperty={sortedProperty}
                  data={data}
                  setCurrentElement={setCurrentElement}/>
            {currentElement &&
                <ElementDescription
                    sortedProperty={sortedProperty}
                    setSortedProperty={setSortedProperty}
                    element={currentElement}/>}
          </div>}
      </>
  )
}

export default App;
