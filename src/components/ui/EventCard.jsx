import { CalendarDays, MapPin, Tag } from 'lucide-react';

function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-card__image-wrap">
        <img src={event.image} alt="" loading="lazy" />
      </div>
      <div className="event-card__body">
        <h3>{event.title}</h3>
        <p>{event.text}</p>
        <dl>
          <div>
            <Tag size={17} aria-hidden="true" />
            <dt>Category</dt>
            <dd>{event.category}</dd>
          </div>
          <div>
            <CalendarDays size={17} aria-hidden="true" />
            <dt>Date</dt>
            <dd>{event.date}</dd>
          </div>
          <div>
            <MapPin size={17} aria-hidden="true" />
            <dt>Location</dt>
            <dd>{event.location}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default EventCard;