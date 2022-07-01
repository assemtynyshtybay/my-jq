import axios from 'axios';
import { useCallback, useMemo } from 'react';
import { useEffect } from 'react';
import { JobItem } from '../job/JobItem';
import { useDispatch, useSelector } from 'react-redux';
import { jobs } from '../store/reducers/jobs';
import { fetchJobs } from '../store/actions/jobActionCreator';
import { AnyAction } from 'redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Grid, Pagination, Stack, styled, ThemeProvider } from '@mui/material';
import { JobState } from '../types/jobsTypes';
import style from '../../style/style';
function JobsPage() {
  const jobs = useTypedSelector((state: any) => state.job.jobs);
  const { page, perPage, total_page, loading } = useTypedSelector((state: any) => state.job);
  const dispatch = useDispatch();
  console.log('jobs', jobs);

  useEffect(() => {
    dispatch(fetchJobs({ page: 0 }) as any);
  }, [dispatch]);
  const fetchJobsPerPage = useCallback(({ page = 0 } = {}) => {
    fetchJobs({ page });
  }, []);

  return (
    <ThemeProvider theme={style}>
      <Grid container spacing={4}>
        {jobs?.map((item: any) => (
          <Grid item xs={4}>
            <JobItem key={item.id} job={item} />
          </Grid>
        ))}
        <Stack spacing={2}>
          <Pagination
            count={total_page}
            page={page}
            variant="outlined"
            color="secondary"
            onChange={(e, value) => fetchJobsPerPage({ page: value })}
          />
        </Stack>
      </Grid>
    </ThemeProvider>
  );
}

export default JobsPage;
