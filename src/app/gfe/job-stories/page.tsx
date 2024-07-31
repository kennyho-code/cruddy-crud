"use client";

import { useEffect, useState } from "react";

const PAGE_SIZE = 6;

function Page() {
  const [jobIds, setJobIds] = useState<any[] | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  async function fetchJobIds(currPage: number) {
    let newJobs = jobIds;
    if (!newJobs) {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      newJobs = await res.json();
      setJobIds(newJobs);
    }

    const start = currPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    if (!newJobs) {
      throw new Error("new jobs is unnull");
    }
    return newJobs.slice(start, end);
  }

  async function fetchJobs(currPage: number) {
    const jobIdsForPage = await fetchJobIds(currPage);
    const promises = jobIdsForPage.map((jobId: string) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(
        (res) => res.json()
      )
    );
    const jobsForPage = await Promise.all(promises);
    setJobs([...jobs, ...jobsForPage]);
  }

  return (
    <div>
      jobs Page
      {jobs.length > 0 && jobs.map((job) => <Job key={job.id} job={job} />)}
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
}

function Job({ job, key }) {
  return (
    <div key={key}>
      <h1>{job.title}</h1>
      <p>By: ${job.by}</p>
    </div>
  );
}

export default Page;
