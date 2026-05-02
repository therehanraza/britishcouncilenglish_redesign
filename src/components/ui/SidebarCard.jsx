function SidebarCard({ title, text, image, detail }) {
  return (
    <article className="sidebar-card">
      {image && (
        <div className="sidebar-card__image-wrap">
          <img src={image} alt="" loading="lazy" />
        </div>
      )}
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        {detail && <strong>{detail}</strong>}
      </div>
    </article>
  );
}

export default SidebarCard;