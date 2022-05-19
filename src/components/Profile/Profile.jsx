import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
    return (
        <div className={s.profile}>
            <img src='https://img2.goodfon.ru/original/3360x1050/5/55/zakat-sunset-more-nebo.jpg' />
            <ProfileInfo />
        </div>
    )
}
export default Profile