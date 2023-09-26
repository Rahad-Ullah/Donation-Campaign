import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const SingleDonation = ({cardData}) => {
    const {id, title, image_squre, category, text_color, category_bg, card_bg, amount} = cardData;
    console.log(cardData)
    return (
        <div className={`rounded-lg flex gap-2`} style={{backgroundColor: card_bg}}>
            <div className={`bg-cover bg-center bg-no-repeat w-2/6 rounded-l-lg`} style={{ backgroundImage:`url(${image_squre})` }}></div>
            <div className="p-4 space-y-2"> 
                <span className="text-sm font-semibold p-2 py-1 rounded" style={{backgroundColor: category_bg, color: text_color}}>{category}</span>
                <h2 className={`text-xl font-semibold text-black`}>{title}</h2>
                <h5 className='font-semibold' style={{color: text_color}}>${amount}</h5>
                <Link to={`/feature/${id}`} className='btn btn-error btn-sm normal-case text-white rounded border-none' style={{backgroundColor: text_color}}>View Details</Link>
            </div>
        </div>
    );
};

SingleDonation.propTypes = {
    cardData: PropTypes.object,
}

export default SingleDonation;