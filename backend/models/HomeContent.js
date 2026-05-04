import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    image: String,
    cta: String,
    to: String,
    isSignup: Boolean,
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const homeContentSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: 'main',
      unique: true,
    },
    heroSlides: [cardSchema],
    pathways: [cardSchema],
    homePromos: [cardSchema],
  },
  { timestamps: true }
);

const HomeContent = mongoose.model('HomeContent', homeContentSchema);

export default HomeContent;
