import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    interests: {
      type: [String],
      default: [],
    },
    frequency: {
      type: String,
      enum: ['weekly', 'monthly', 'occasionally'],
      default: 'monthly',
    },
  },
  {
    timestamps: true,
  }
);

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

export default Newsletter;