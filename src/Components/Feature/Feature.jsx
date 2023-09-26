import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Feature = ({feature}) => {
    const {id, title, category, image, card_bg, category_bg, text_color} = feature

    return (
        <Link to={`/feature/${id}`}>
            <div className={`rounded-lg`} style={{backgroundColor: card_bg}}>
                <img src={image} alt="" className="rounded-t-lg w-full" />
                <div className="p-4 space-y-2"> 
                    <span className="text-sm font-semibold p-2 py-1 rounded" style={{backgroundColor: category_bg, color: text_color}}>{category}</span>
                    <h2 className={`text-lg font-semibold`} style={{color: text_color}}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

Feature.propTypes = {
    feature: PropTypes.object.isRequired,
}

export default Feature;