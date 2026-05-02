function InfoList({ items }) {
  return (
    <div className="info-list">
      {items.map((item) => (
        <article className="info-list__item" key={item.title}>
          {item.image && <img src={item.image} alt="" loading="lazy" />}
          <div>
            {item.category && <p className="info-list__category">{item.category}</p>}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default InfoList;
