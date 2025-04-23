const TemperatureController = ({temperature, setTemperature}) => {
    return (
        <div className='temp'>
            <div className='temp-container'>
                Температура:
                <input type='range' min={-272} max={5727} value={temperature}
                       onChange={e => setTemperature(e.target.value)}/>
                <input className='temp-input' type='text' value={temperature}
                       onChange={e => setTemperature(e.target.value)}/>
                С°
            </div>
        </div>
    );
};

export default TemperatureController;