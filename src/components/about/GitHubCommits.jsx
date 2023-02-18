import React from 'react'
import GitHubCalendar from "react-github-calendar";

const GitHubCommits = () => {
  return (
    <section className='commit__container'>
      <h2 className='commit__header'> Days I Code</h2>

      <GitHubCalendar
        username="yasbrown"
        color="#AF8EF5"
      />
    </section>
  )
}

export default GitHubCommits
