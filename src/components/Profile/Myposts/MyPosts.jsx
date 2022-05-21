import s from './MyPosts.module.css'
const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h2>My posts</h2>
            <textarea></textarea>
            <button className={s.send}>Send</button>
        </div>
    )
}
export default MyPosts