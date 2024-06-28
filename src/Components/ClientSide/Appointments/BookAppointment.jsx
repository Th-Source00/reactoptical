import React from 'react';
import AppNewsUpdate from '../../../Containers/AppView/app-news-update';
import { Container, Grid } from '@mui/material';
import { faker } from '@faker-js/faker';

// Import images
import cover1 from '../../../Assets/others-assets/images/covers/cover_1.jpg';
import cover2 from '../../../Assets/others-assets/images/covers/cover_2.jpg';
import cover3 from '../../../Assets/others-assets/images/covers/cover_3.jpg';
import cover4 from '../../../Assets/others-assets/images/covers/cover_4.jpg';
import cover5 from '../../../Assets/others-assets/images/covers/cover_5.jpg';
import cover6 from '../../../Assets/others-assets/images/covers/cover_6.jpg';

export default function BookAppointment() {
  const covers = [cover1, cover2, cover3, cover4, cover5,cover6];

  return (
    <Container maxWidth="xl">
      <Grid xs={12} md={6} lg={8}>
        <AppNewsUpdate
          title="Booked Appointments"
          list={[...Array(6)].map((_, index) => ({
            id: faker.string.uuid(),
            title: faker.person.jobTitle(),
            description: faker.commerce.productDescription(),
            image: covers[index],
            postedAt: faker.date.past(),
          }))}
        />
      </Grid>
    </Container>
  );
}
