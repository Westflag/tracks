import {useDispatch, useSelector} from 'react-redux'
import {addFavoritCamper, deleteFavoritCamper, selectIsFavorits} from '../../redux/favoritsSlice'
import icons from '../../assets/icons.svg'
import css from './FavoritCamper.module.css'

function FavoriteCamper({camper = -1}) {
    const dispatch = useDispatch()
    const isFavorite = useSelector((state) => selectIsFavorits(state, camper))
    const className = isFavorite ? css.theFavorit : css.notFavorit

    function handleClick() {
        if (camper < 0)
            return

        if (isFavorite)
            dispatch(deleteFavoritCamper(camper))
        else
            dispatch(addFavoritCamper(camper))
    }

    return (
        <div className={`${css.favorit} ${className}`} onClick={handleClick}>
            <svg>
                <use xlinkHref={`${icons}#icon-favorit`}/>
            </svg>
        </div>
    )
}

export default FavoriteCamper
