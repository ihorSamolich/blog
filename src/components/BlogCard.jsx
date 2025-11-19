import './../Card.css'

export default function BlogCard({ image, category, title, description, author }) {
    return (
        <article className="blog-card">
            <img className="blog-card__image" src={image} alt={title} />
            <div className="blog-card__content">
                <div className="blog-card__category">{category}</div>
                <p className="blog-card__date">Публікація 18 листопада 2025</p>
                <h2 className="blog-card__title">{title}</h2>
                <p className="blog-card__description">{description}</p>
                <div className="blog-card__author">
                    <img src='/assets/images/avatar-femail.png' alt={author} />
                    <span>{author}</span>
                </div>
            </div>
        </article>
    );
}
