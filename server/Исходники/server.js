const express = require('express');
const cors = require('cors');
const adodb = require('node-adodb');
const path = require('path');
const fs = require('fs');

if (__dirname.startsWith('C:\\snapshot')) {
    adodb.PATH = path.join(process.cwd(), 'adodb.js');

    const buffer = fs.readFileSync(
        path.join(__dirname, 'node_modules/node-adodb/lib/adodb.js')
    );
    fs.writeFileSync(adodb.PATH, buffer);
}

//Определение пути, в котором находится сервер
const localPath = path.resolve();

//Подключение к базе данных
const connectionString = `Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${localPath}/db.accdb;Persist Security Info=False;`
const db = adodb.open(connectionString, false);

//Инициализация приложения
const app = express();
app.use(cors());

//Описание запросов
app.get('/chemicalElements', (re, res) => {

    const queryElements = 'SELECT * FROM элементы';
    const queryTemperature = 'SELECT температура_кипения, температура_плавления FROM физические_свойства'

    Promise.all([
        db.query(queryElements),
        db.query(queryTemperature)
    ]).then(data => {
        const [elementsData, temperatureData] = data;

        const elements = elementsData.map((el, index) => {
            return {
                ...el,
                'Температура_кипения': temperatureData[index]['температура_кипения'],
                'Температура_плавления': temperatureData[index]['температура_плавления']
            }
        })
        return res.json(elements)

    }).catch(err => console.log(err))
})

app.get('/element', (req, res) => {

    const id = req.query.id;

    const queryMainInfo = `SELECT * FROM элементы WHERE Атомный_номер = ${id}`;
    const queryPhysicalProperties = `SELECT * FROM физические_свойства WHERE Код = ${id}`;
    const queryChemicalProperties = `SELECT * FROM химические_свойства WHERE Код = ${id}`;

    Promise.all([
        db.query(queryMainInfo),
        db.query(queryChemicalProperties),
        db.query(queryPhysicalProperties)
    ]).then(data => {
        const [mainInfo, physProperties, chemProperties] = data;
        return res.json({
            ...mainInfo[0],
            ...physProperties[0],
            ...chemProperties[0]
        })

    }).catch(err => console.log(err))
})

//Объект для распределения свойств по таблицам
const tableConverter = {
    'Атомная_масса': 'элементы',
    'Плотность': 'физические_свойства',
    'Температура_плавления': 'физические_свойства',
    'Температура_кипения': 'физические_свойства',
    'Удельная_теплоемкость': 'физические_свойства',
    'Тепловая_проводимость': 'физические_свойства',
    'Электрическая_проводимость': 'химические_свойства',
    'Электроотрицательность': 'химические_свойства',
    'Энергия_ионизации': 'химические_свойства',
    'Атомный_радиус': 'химические_свойства',
    'Ковалентный_радиус': 'химические_свойства',
    'Радиус_Ван_Дер_Ваальса': 'химические_свойства',
    'Модуль_сдвига': 'физические_свойства',
    'Объемный_модуль_упругости': 'физические_свойства',
    'Твердость_по_Моосу': 'физические_свойства',
    'Твердость_по_Бриннелю': 'физические_свойства',
    'Твердость_по_Виккерсу': 'физические_свойства',
}

app.get('/getMaxValue', (req, res) => {

    const property = req.query.property;
    const table = tableConverter[req.query.property];

    const selectMax = `SELECT MAX(${property}) FROM ${table}`;
    const selectAll = `SELECT ${property} FROM ${table}`;

    Promise.all([
        db.query(selectMax),
        db.query(selectAll),
    ]).then(data => {
        const [maxValue, allValues] = data;

        return res.json({allValues, maxValue})
    }).catch(err => console.log(err))
})

//Запуск сервера на 8000 порту
app.listen(8000, () => console.log('Сервер запущен'));