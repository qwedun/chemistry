
const ElementDescriptionText = ({type, content, unit='', ...props}) => {

    return (
        <div {...props}
             className='description-text'>
            <span>{type}:</span>
            {content ? content + ' ' + unit: 'N/A'}
        </div>
    );
};

export default ElementDescriptionText;