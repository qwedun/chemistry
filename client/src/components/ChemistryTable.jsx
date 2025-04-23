import ChemistryCell from "./ChemistryCell";
import CategoryPanel from "./CategoryPanel";
import {useState} from 'react'
import TemperatureController from "./TemperatureController";

const ChemistryTable = ({data, setCurrentElement, sortedProperty}) => {

    const [currentCategory, setCurrentCategory] = useState();
    const [temperature, setTemperature] = useState(0);

    async function fetchElementData(id) {
        try {
            const response = await fetch('http://localhost:8000/element?id=' + id);
            const data = await response.json();
            setCurrentElement(data);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div>
                <div style={{display: 'flex'}}>
                    <div className='group'>1</div>
                    <div className='group'>2</div>
                    <div className='group'>3</div>
                    <div className='group'>4</div>
                    <div className='group'>5</div>
                    <div className='group'>6</div>
                    <div className='group'>7</div>
                    <div className='group'>8</div>
                    <div className='group'>9</div>
                    <div className='group'>10</div>
                    <div className='group'>11</div>
                    <div className='group'>12</div>
                    <div className='group'>13</div>
                     <div className='group'>14</div>
                    <div className='group'>15</div>
                    <div className='group'>16</div>
                    <div className='group'>17</div>
                    <div className='group'>18</div>
                </div>
                <div style={{position: 'relative'}}>
                    <CategoryPanel setCurrentCategory={setCurrentCategory}/>
                    <div className='table'>
                        {data.map((el, index) => (
                            <ChemistryCell
                                key={el['Символ']}
                                temperature={temperature}
                                currentCategory={currentCategory}
                                el={el}
                                index={index}
                                setCurrentElement={() => fetchElementData(index + 1)}
                                sortedProperty={sortedProperty}
                            />
                        ))}
                    </div>
                    <TemperatureController temperature={temperature} setTemperature={setTemperature}/>
                </div>
            </div>
        </>
    );
};

export default ChemistryTable;