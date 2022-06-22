import { NotificationST } from "./Notification.styled"

function Notification({massage}) {
    return (
        <div>
            <NotificationST>{massage}</NotificationST>
        </div>
    )
}

export default Notification