import {cssPropertyConverter} from "../constants";
import ElementDescriptionText from "./ElementDescriptionText";

const ElementDescription = ({element, setSortedProperty, sortedProperty}) => {

    const color = cssPropertyConverter[element['Тип']]
    const energeticLevels = element['Энергетические_уровни'].split(' ');

    async function fetchData2(property, table) {
        const a = 'http://localhost:8000/getMaxValue?property=' + property + '&table=' + table
        try {
            const res = await fetch(a)
            return await res.json();
        } catch(err) {
            console.log(err);
        }
    }

    const handleClick = (property, table) => {
        fetchData2(property, table).then(res => setSortedProperty({
            allValues: res.allValues,
            maxValue: res.maxValue,
        }))
    }

    return (
        <div>
            <div className={`desc-square ${color}`}>
                <div>
                    <div style={{fontSize: '24px'}}>{element['Атомный_номер']}</div>
                    <div style={{fontSize: '32px', fontWeight: 'Bold'}}>{element['Символ']}</div>
                    <div style={{fontSize: '18px'}}>{element['Название']}</div>
                    <div style={{fontSize: '24px'}}>{element['Атомная_Масса']}</div>
                </div>
                <div>
                    {energeticLevels.map(level =>
                        <div className='level'>{level}</div>)}
                </div>
            </div>
            {sortedProperty && <div onClick={() => setSortedProperty(null)}>Очистить</div>}
            <div className='description'>
                <ElementDescriptionText type='Название'
                                        content={element['Название']}/>
                <ElementDescriptionText type='Латинское название'
                                        content={element['Латинское_название']}/>
                <ElementDescriptionText type='Открыт в'
                                        content={element['Год_открытия']}/>
                <ElementDescriptionText type='Первооткрыватель'
                                        content={element['Первооткрыватель']}/>
                <ElementDescriptionText type='Тип'
                                        content={element['Тип']}/>
                <ElementDescriptionText type='Символ'
                                        content={element['Символ']}/>
                <ElementDescriptionText type='Атомная масса'
                                            onClick={() => handleClick('Атомная_Масса', 'элементы')}
                                        content={element['Атомная_Масса']}
                                        unit='а.е.м'/>
                <ElementDescriptionText type='Плотность'
                                        onClick={() => handleClick('Плотность', 'физические_свойства')}
                                        content={element['Плотность']}
                                        unit='Кг/м^3'/>
                <ElementDescriptionText type='Температура плавления'
                                        onClick={() => handleClick('Температура_плавления', 'физические_свойства')}
                                        content={element['Температура_плавления']}
                                        unit='С°'/>
                <ElementDescriptionText type='Температура кипения'
                                        onClick={() => handleClick('Температура_кипения', 'физические_свойства')}
                                        content={element['Температура_кипения']}
                                        unit='С°'/>
                <ElementDescriptionText type='Удельная теплоемкость'
                                        onClick={() => handleClick('Удельная_теплоемкость', 'физические_свойства')}
                                        content={element['Удельная_теплоемкость']}
                                        unit='Дж/кг*К'/>
                <ElementDescriptionText type='Тепловая проводимость'
                                        onClick={() => handleClick('Тепловая_проводимость', 'физические_свойства')}
                                        content={element['Тепловая_проводимость']}
                                        unit='Вт/м*К'/>
                <ElementDescriptionText type='Электрическая проводимость'
                                        onClick={() => handleClick('Электрическая_проводимость', 'химические_свойства')}
                                        content={element['Электрическая_проводимость']}
                                        unit='мС/м'/>
                <ElementDescriptionText type='Электроотрицательность'
                                        onClick={() => handleClick('Электроотрицательность', 'химические_свойства')}
                                        content={element['Электроотрицательность']}/>
                <ElementDescriptionText type='Энергетические уровни'
                                        content={element['Энергетические_уровни']}/>
                <ElementDescriptionText type='Энергия ионизации'
                                        onClick={() => handleClick('Энергия_ионизации', 'химические_свойства')}
                                        content={element['Энергия_ионизации']}
                                        unit='кДж/Моль'/>
                <ElementDescriptionText type='Атомный радиус'
                                        onClick={() => handleClick('Атомный_радиус', 'химические_свойства')}
                                        content={element['Атомный_радиус']}
                                        unit='пм'/>
                <ElementDescriptionText type='Ковалентный радиус'
                                        onClick={() => handleClick('Ковалентный_радиус', 'химические_свойства')}
                                        content={element['Ковалентный_радиус']}
                                        unit='пм'/>
                <ElementDescriptionText type='Радиус Ван-Дер-Ваальса'
                                        onClick={() => handleClick('Радиус_Ван_Дер_Ваальса', 'химические_свойства')}
                                        content={element['Радиус_Ван_Дер_Ваальса']}
                                        unit='пм'/>
                <ElementDescriptionText type='Модуль сдвига'
                                        onClick={() => handleClick('Модуль_сдвига', 'физические_свойства')}
                                        content={element['Модуль_сдвига']}
                                        unit='гПа'/>
                <ElementDescriptionText type='Объемный модуль упругости'
                                        onClick={() => handleClick('Объемный_модуль_упругости', 'физические_свойства')}
                                        content={element['Объемный_модуль_упругости']}
                                        unit='гПа'/>
                <ElementDescriptionText type='Твердость по Моосу'
                                        onClick={() => handleClick('Твердость_по_Моосу', 'физические_свойства')}
                                        content={element['Твердость_по_Моосу']}
                                        unit='мПа'/>
                <ElementDescriptionText type='Твердость по Бриннелю'
                                        onClick={() => handleClick('Твердость_по_Бриннелю', 'физические_свойства')}
                                        content={element['Твердость_по_Бриннелю']}
                                        unit='мПа'/>
                <ElementDescriptionText type='Твердость по Виккерсу'
                                        onClick={() => handleClick('Твердость_по_Виккерсу', 'физические_свойства')}
                                        content={element['Твердость_по_Виккерсу']}
                                        unit='мПа'/>
            </div>
        </div>
    );
};

export default ElementDescription;