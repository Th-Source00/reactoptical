import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { posts } from '../../../_mock/blog';
import Iconify from '../../../iconify';
import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';

// ----------------------------------------------------------------------

export default function BlogView() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Blog</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Post
        </Button>
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} />
        <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <PostCard post={post} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

















// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import { posts } from '../../../_mock/blog';

// import Iconify from '../../../iconify';

// import PostCard from '../post-card';
// import PostSort from '../post-sort';
// import PostSearch from '../post-search';

// // ----------------------------------------------------------------------

// export default function BlogView() {
//   return (
//     <Container>
//       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//         <Typography variant="h4">Blog</Typography>

//         <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
//           New Post
//         </Button>
//       </Stack>

//       <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
//         <PostSearch posts={posts} />
//         <PostSort
//           options={[
//             { value: 'latest', label: 'Latest' },
//             { value: 'popular', label: 'Popular' },
//             { value: 'oldest', label: 'Oldest' },
//           ]}
//         />
//       </Stack>

//       <Grid container spacing={3}>
//         {posts.map((post, index) => (
//           <PostCard key={post.id} post={post} index={index} />
//         ))}
//       </Grid>
//     </Container>
//   );
// }
