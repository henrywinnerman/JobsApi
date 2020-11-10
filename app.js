const jobs = new Jobs;
const ui = new UI;
jobs.getJobs()
  .then(data=>{
console.log(data)
  if(data.length !== 0){
    ui.showJobs(data)
  }
  })
  .catch(err=>{
    console.log(err)
  })




