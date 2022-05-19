import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div className={s.profile__info}>
            <img src="https://mtdata.ru/u15/photo5868/20602449398-0/original.jpg" />
            <p className={s.text}>Master Kung Fu<br /><br />
                Date of Birth:12 october<br />
                Citi:Minsk<br />
                Education:BSUIR<br />
                Job: Not working</p>
        </div>
    )
}
export default ProfileInfo
