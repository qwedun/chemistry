import {memo} from 'react'
const  CategoryPanel = ({setCurrentCategory}) => {
    return (
        <div className='category'>
            <div className='aggregate'>
                <div>
                    <span className='square'>Ti</span>
                    Твердое тело
                </div>
                <div style={{color: "blue"}}>
                    <span className='square'>Hg</span>
                    Жидкость
                </div>
                <div style={{color: "red"}}>
                    <span className='square'>H</span>
                    Газ
                </div>
                <div style={{color: 'grey'}}>
                    <span className='square'>Rf</span>
                    Неизвестно
                </div>
            </div>
            <div className='category-table'>
                <div className='mh'>Металлы</div>
                <div onMouseEnter={() => setCurrentCategory('alkaline')}
                     onMouseLeave={() => setCurrentCategory(null)}
                    className='al category-text alkaline'>
                    Щелочные металлы
                </div>
                <div onMouseEnter={() => setCurrentCategory('alkaline-earth')}
                     onMouseLeave={() => setCurrentCategory(null)}
                     className='al-e category-text alkaline-earth'>
                    Щелочноземель<br/>ные металлы
                </div>
                <div onMouseEnter={() => setCurrentCategory('lanthanides')}
                     onMouseLeave={() => setCurrentCategory(null)}
                     className='la category-text lanthanides'>
                    Лантаноиды
                </div>
                <div onMouseEnter={() => setCurrentCategory('actinides')}
                     onMouseLeave={() => setCurrentCategory(null)}
                     className='ak category-text actinides'>
                    Актиноиды
                </div>
                <div onMouseEnter={() => setCurrentCategory('transition')}
                     onMouseLeave={() => setCurrentCategory(null)}
                     className='trm category-text transition'>
                    Переходные металлы
                </div>
                <div onMouseEnter={() => setCurrentCategory('post-transition')}
                     onMouseLeave={() => setCurrentCategory(null)}
                     className='p-trm category-text post-transition'>
                    Постпереходные металлы
                </div>
                <div onMouseEnter={() => setCurrentCategory('half-metals')}
                     onMouseLeave={() => setCurrentCategory(null)}
                     className='h-m category-text half-metals'>
                    Полуметаллы
                </div>
                <div className='nmh'>Неметаллы</div>
                <div onMouseEnter={() => setCurrentCategory('nonmetals')}
                     onMouseLeave={() => setCurrentCategory(null)}
                     className='nm category-text nonmetals'>
                    Неметаллы
                </div>
                <div onMouseEnter={() => setCurrentCategory('noble-gases')}
                     onMouseLeave={() => setCurrentCategory(null)}
                     className='g category-text noble-gases'>
                    Благородные газы
                </div>
            </div>
        </div>
    );
};

export default memo(CategoryPanel);