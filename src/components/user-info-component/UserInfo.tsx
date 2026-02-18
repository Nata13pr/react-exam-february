import "./UserInfo.css"
import userAvatar from '../../assets/image/profile-picture.png';

const UserInfo=()=>{
    return(
        <div className="user-info">
            <img src={userAvatar} alt="profile-picture"/>
            <p>name</p>
        </div>
    )
}
export default UserInfo;