import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.post}>
            <img src='https://mtdata.ru/u15/photo5868/20602449398-0/original.jpg' />
            <p>{props.message}</p>
            <span>Like</span>
        </div>
    )
}
export default Post