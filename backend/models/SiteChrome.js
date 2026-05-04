import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema(
  {
    label: String,
    path: String,
    description: String,
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const navLinkSchema = new mongoose.Schema(
  {
    label: String,
    path: String,
    description: String,
    dropdown: [linkSchema],
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const footerSectionSchema = new mongoose.Schema(
  {
    title: String,
    links: [linkSchema],
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const footerContactSchema = new mongoose.Schema(
  {
    type: String,
    text: String,
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const socialLinkSchema = new mongoose.Schema(
  {
    label: String,
    shortLabel: String,
    url: String,
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const siteChromeSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: 'main',
      unique: true,
    },
    navLinks: [navLinkSchema],
    utilityLinks: [linkSchema],
    footer: {
      title: String,
      copy: String,
      contactItems: [footerContactSchema],
      sections: [footerSectionSchema],
      copyright: String,
      socialLinks: [socialLinkSchema],
    },
  },
  { timestamps: true }
);

const SiteChrome = mongoose.model('SiteChrome', siteChromeSchema);

export default SiteChrome;
