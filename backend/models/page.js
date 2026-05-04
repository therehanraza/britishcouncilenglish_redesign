import mongoose from 'mongoose';

const pageItemSchema = new mongoose.Schema(
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
  { _id: false }
);

const pageSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
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
        items: [pageItemSchema],
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
  },
  {
    timestamps: true,
  }
);

const Page = mongoose.model('Page', pageSchema);

export default Page;
