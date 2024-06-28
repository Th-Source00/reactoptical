import React from 'react'
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Unstable_Grid2';

import AppOrderTimeline from '../../../Containers/AppView/app-order-timeline';

export default function Records() {
  return (
    <div>
       <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Hospital Timeline"
            list={[...Array(7)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'you, Bought frame A, for 420C',
                '12 Invoices have been paid',
                'Order #37745 from July',
                'Order #37745 from September',
                'New Appointment placed #XF-2356',
                'New order placed #XF-2346',
                'New Appointment placed #XF-2356',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
          
          
        </Grid>

    </div>
  )
}
