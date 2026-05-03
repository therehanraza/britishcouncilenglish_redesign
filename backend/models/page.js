import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  eyebrow: String,
  copy: String,
  image: String,
  imageAlt: String,
  sections: [
    {
      type: {
        type: String,
      },
      title: String,
      copy: String,
      eyebrow: String,
      items: [
        {
          title: String,
          text: String,
          image: String,
          to: String,
          category: String,
          date: String,
          location: String,
          detail: String,
        },
      ],
    },
  ],
  sidebar: [
    {
      title: String,
      text: String,
      image: String,
      detail: String,
    },
  ],
  actions: [
    {
      label: String,
      to: String,
      variant: String,
    },
  ],
});

const Page = mongoose.model('Page', pageSchema);

export default Page;