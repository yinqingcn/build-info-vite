const child_process = require('child_process')

const formatDate = function(date) {
  function pad(value) {
    return `${value < 10 ? '0':''}${value}`
  }

  let year = date.getFullYear();
  let month = pad(date.getMonth() + 1);
  let day = pad(date.getDate());
  let hour = pad(date.getHours());
  let minutes = pad(date.getMinutes());
  let seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
}

const execSync = function(command) {
  return child_process.execSync(command).toString().trim();
}

const loadBranch = function() {
  let b = process.env.GIT_BRANCH
  if(!b) {
    b = execSync('git rev-parse --abbrev-ref HEAD').replace(/\s+/, '')
  }
  return b;
}

// git 最后一次提交的 Head
const commit = execSync('git show -s --format=%H')
const commitAuthor = execSync('git show -s --format=%cn')
const commitEmail = execSync('git show -s --format=%ce')
const commitDateObj = new Date(execSync(`git show -s --format=%cd`))
const commitDate = formatDate(commitDateObj)
const buildDate = formatDate(new Date())
const branch = loadBranch();

module.exports = {commit, commitAuthor, commitEmail, commitDate, buildDate, branch}
