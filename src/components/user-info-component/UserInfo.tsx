// import "./UserInfo.css"
// import userAvatar from '../../assets/image/profile-picture.png';
//
// const UserInfo=()=>{
//     return(
//         <div className="user-info">
//             <img src={userAvatar} alt="profile-picture"/>
//             <p>name</p>
//         </div>
//     )
// }
// export default UserInfo;
// UserInfo.tsx

import userAvatar from '../../assets/image/profile-picture.png';
import "./UserInfo.css"
const UserInfo = () => {
    return (
        <div className="user-profile">
            <img src={userAvatar} alt="avatar" className="avatar-img"/>
            <span className="user-name">Sarah J</span>
        </div>
    )
}
export default UserInfo;