import { NotificationST } from "./Notification.styled"
import propTypes from 'prop-types';

function Notification({massage}) {
    return (
        <div>
            <NotificationST>{massage}</NotificationST>
        </div>
    )
}

export default Notification

Notification.propTypes = {
    massage: propTypes.string,
}