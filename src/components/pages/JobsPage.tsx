import axios from 'axios';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { JobItem } from '../job/JobItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../store/actions/jobActionCreator';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Container, Grid, Pagination, Stack, styled, ThemeProvider } from '@mui/material';
import style from '../../style/style';

export function JobsPage() {
  const jobs = useTypedSelector((state: any) => state.job.jobs);
  const { page, total_page } = useTypedSelector((state: any) => state.job);
  console.log('pageinfo', page, total_page);
  const dispatch = useDispatch();
  console.log('jobs', jobs);

  useEffect(() => {
    dispatch(fetchJobs() as any);
  }, [dispatch]);

  const fetchJobsPerPage = useCallback(
    ({ page = 0 }) => {
      dispatch(fetchJobs({ page }) as any);
    },
    [dispatch],
  );

  return (
    <ThemeProvider theme={style}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {jobs?.map((item: any) => (
          <Grid item xs={2} sm={4} md={4}>
            <JobItem key={item.id} job={item} />
          </Grid>
        ))}
      </Grid>
      <Container maxWidth="sm" style={{marginTop: '20px', marginBottom: '20px'}}>
        <Pagination
          count={total_page}
          page={page}
          variant="outlined"
          color="secondary"
          onChange={(e, value) => fetchJobsPerPage({ page: value })}
        />
      </Container>
    </ThemeProvider>
  );
}

export default JobsPage;
