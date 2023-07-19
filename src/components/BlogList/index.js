import './index.css'

const BlogList = props => {
  const {eachBlog} = props
  const {title, description, publishedDate, id} = eachBlog

  return (
    <li className="list-container">
      {!(id === 1) && <hr className="hr-line" />}

      <div className="title-container">
        <h1 className="title-head">{title}</h1>
        <p className="publish">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogList
