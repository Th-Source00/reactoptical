import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Innovative Solutions for Vision Care',
  'Advanced Eye Treatment Techniques',
  'The Future of Optical Centers',
  'Enhancing Eye Health with Technology',
  'Understanding Comprehensive Eye Exams',
  'Top Optical Products of the Year',
  'How to Choose the Right Glasses',
  'The Impact of Blue Light on Eyes',
  'Laser Eye Surgery: What You Need to Know',
  'Managing Eye Health in the Digital Age',
  'The Evolution of Contact Lenses',
  'Trends in Eyewear Fashion',
  'Pediatric Eye Care Essentials',
  'How to Maintain Healthy Vision',
  'The Benefits of Regular Eye Check-Ups',
  'Choosing the Best Optical Center',
  'Understanding Different Eye Conditions',
  'Preventative Eye Care Tips',
  'The Role of Nutrition in Eye Health',
  'Optical Innovations for Better Vision',
  'Eye Health Myths Debunked',
  'How Stress Affects Your Eyes',
  'The Connection Between Eyes and Overall Health',
];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.number.int(99999),
  comment: faker.number.int(99999),
  share: faker.number.int(99999),
  favorite: faker.number.int(99999),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
