import css from './Loader.module.css'
import {Hourglass} from "react-loader-spinner"

function Loading() {
    return (
        <div className={css.loader}>
            <Hourglass color="red"/>
        </div>
    )
}

export default Loading