import React from 'react'
import GitHubCalendar from "react-github-calendar";

const GitHubCommits = () => {
  return (
    <section>
      <h1> Days I Code</h1>

      <GitHubCalendar
        username="yasbrown"
        color="#AF8EF5"
      />
    </section>
  )
}

export default GitHubCommits
