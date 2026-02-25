import userAvatar from '../../assets/image/profile-picture.png';
import "./UserInfoComponent.css"

const UserInfoComponent = () => {
     return (
        <div className="user-profile">
            <div className="avatar-wrapper">
                <img src={userAvatar} alt="avatar" className="avatar-img"/>
            </div>
            <span className="user-name">Sarah J</span>
        </div>
    )
}

export default UserInfoComponent;