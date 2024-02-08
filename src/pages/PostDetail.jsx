import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blogPost3.jpeg'
const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit, nisi totam ducimus quas tempora delectus? Repudiandae sint tempore commodi in eius ullam odio optio beatae sit ut, hic est facere soluta quaerat quidem obcaecati deserunt debitis. Exercitationem, deleniti accusamus.
        </p><br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur odit, doloremque temporibus voluptates soluta explicabo laboriosam labore odio optio laborum numquam provident id ducimus? Distinctio impedit animi eos aliquid, inventore dolores maiores quis est voluptate voluptatibus, odit cupiditate delectus harum nisi, sit tempora magni voluptas. Debitis corporis rerum deleniti magnam!
        </p><br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum perspiciatis, ipsam accusamus laudantium officiis magnam, ut fuga, ex at asperiores atque maxime reprehenderit! Ut sit, veniam laboriosam deserunt quo sed, recusandae ab architecto explicabo porro nulla id doloremque repellendus voluptatum inventore sunt aspernatur maxime facere illo facilis? Itaque aspernatur dolorum tempore voluptates. Reprehenderit earum nihil saepe id quam excepturi esse minima, officia inventore perspiciatis ut voluptas similique labore ducimus tempora voluptatum, est asperiores laborum totam quod modi alias vitae! A enim temporibus voluptates totam laborum eligendi beatae inventore ipsam. Culpa natus nobis iusto possimus voluptates in delectus commodi totam illum.
        </p><br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ad laudantium magnam magni eligendi, ab non libero culpa quo, illo delectus! Quod sint iure nesciunt nostrum nemo dolorum natus asperiores odit sapiente numquam dolores, ullam commodi ut possimus eveniet corrupti velit delectus voluptate. Similique sequi et soluta minus esse illo, repudiandae, earum fuga quisquam nemo incidunt aut optio porro rerum tenetur quas quo illum cupiditate? Magni, totam sed quidem reprehenderit pariatur qui ipsum laborum eaque neque ipsa dicta expedita praesentium libero, laudantium vel optio sequi odit illo obcaecati nihil eveniet. Cupiditate possimus natus dolorem exercitationem libero fuga, iste similique, repudiandae repellat ex inventore eligendi nam. Saepe rerum natus consectetur deserunt quaerat! Quae aut assumenda temporibus eius rerum dolore nesciunt voluptates est harum placeat veritatis modi dolorem labore enim, maiores reprehenderit quibusdam unde recusandae error sapiente totam. Obcaecati minima voluptatum aspernatur velit atque molestias, alias mollitia vel eveniet. Facilis saepe iure repellat sed, voluptas beatae, suscipit sit ipsum doloribus ex ab earum! Nemo obcaecati fugit veritatis asperiores ab at aliquam molestias esse qui quidem. Nemo perferendis aut cum at omnis? Recusandae, dolor! Libero id consequatur qui aliquid hic aspernatur corrupti minima? Cumque amet culpa, facere soluta odio maxime delectus atque doloribus architecto in autem neque voluptate dolor, facilis ratione quaerat, officiis sunt eius aspernatur alias minima temporibus. Repudiandae hic iste repellendus unde cum perferendis. Voluptate totam possimus nihil eum, non velit earum consequatur numquam cum repudiandae eos? Expedita in qui vitae, voluptatem corporis voluptatibus a illum veniam reiciendis numquam cum libero.
        </p><br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione deserunt dolores ab repudiandae sunt quas distinctio delectus sequi! Quo, quae excepturi! Quasi dicta assumenda vitae aliquam amet distinctio eum!
        </p>
      </div>
    </section>
  )
}

export default PostDetail