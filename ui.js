class UI {
  constructor(){
  }

showJobs(jobs){
  let output = ''
  console.log(jobs)
  jobs.jobs.forEach(function(job){
    console.log(job)
    output+=

    `
    <div class = "card card-body">
    <h3 class>${job.title}</h3>
    <p class = "lead">${job.location}</p>
    <p class = "lead">${job.type}</p>
    <p>${job.company.name}</p>
    <p>${job.description}</p>
    <p>${job.published_at.date}</p>
    <p>${job.published_at.for_humans}</p>
<button class = "btn btn-danger"><a href ="${job.url}">Apply</a>
    </button>
</div>`
    })

  document.getElementById('latest-jobs').innerHTML = output;
}

  }