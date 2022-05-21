import MyPosts from './Myposts/MyPosts';
import Post from './Post/Post';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
    return (
        <div className={s.profile}>
            <img className={s.profile__img} src='https://img2.goodfon.ru/original/3360x1050/5/55/zakat-sunset-more-nebo.jpg' />
            <ProfileInfo />
            <MyPosts />
            <Post message="I'm a best kung fu samurai in the world" />
            <Post message="Are you don't trust me???!!!" />
        </div>
    )
}
export default Profile