import { cssPropertyConverter } from "../constants";

const ChemistryCell = ({temperature, currentCategory, el, setCurrentElement, sortedProperty, index}) => {

    let color = cssPropertyConverter[el['Тип']];
    let aggregateColor = '';
    let sortedColor = '';

    if (sortedProperty) {
        const value = Object.values(sortedProperty.allValues[index])[0];
        const maxValue = Object.values(sortedProperty.maxValue[0])[0];
        if (value) {
            sortedColor = `rgb(150, ${value / maxValue * 255}, 0`;
        } else {
            sortedColor = 'white';
        }
    }


    if (color !== currentCategory && currentCategory) {
        color = '';
    }

    const boilingTemperature = Number(el['Температура_плавления']);
    const gasFormationTemperature = Number(el['Температура_кипения']);

    if (temperature <= boilingTemperature && boilingTemperature) {
        aggregateColor = 'black';
    } else if (temperature >= boilingTemperature && temperature <= gasFormationTemperature
        && (boilingTemperature && gasFormationTemperature)) {
        aggregateColor = 'blue';
    } else if (temperature >= gasFormationTemperature && gasFormationTemperature) {
        aggregateColor = 'red'
    } else {
        if (el['Название'] === 'Гелий')
            aggregateColor = 'blue';
        else aggregateColor = 'grey';
    }


    return (
        <div onClick={() => setCurrentElement()}
             style={{gridArea: el['Символ'], backgroundColor: sortedColor}}
             className={`${el['Символ']} ${color} cell`}>
            <div>{el['Атомный_номер']}</div>
            <div style={{fontWeight: 'Bold', fontSize: '14px', color: aggregateColor}}>{el['Символ']}</div>
            <div style={{fontSize: '9px'}}>{el['Название']}</div>
            <div>{el['Атомная_Масса']}</div>
        </div>
    );
};

export default ChemistryCell;