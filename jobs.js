class Jobs{
  constructor(){
  
  }
async getJobs(){
  const jobResponse = await fetch(`https://vuejobs.com/api/jobs`)
    const jobs = await jobResponse.json();
     return{
      jobs
    }
  
}

}
