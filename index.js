const buildInfo = require('./info.js')
const htmlPlugin = (options) => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const { commit, commitEmail, commitAuthor, commitDate, buildDate, branch } = buildInfo
      const metaMap = {
        author: `<meta name="author" content="${commitAuthor}"></meta>`,
        email: `<meta name="email" content="${commitEmail}"></meta>`,
        commitDate:`<meta name="commitDate" content="${commitDate}"></meta>`,
        buildDate:`<meta name="buildDate" content="${buildDate}"></meta>`,
        version:`<meta name="version" content="${branch}/${commit}"></meta>`
      }
      const metaList = []
      if(options && Object.prototype.toString.call(options) === '[object Array]') {
        options.forEach(item => {
          if(metaMap[item]) {
            metaList.push(metaMap[item])
          }
        })
      }
      
      const headerInfo = metaList.join('')
      return html.replace(
        /(<title>(.*?)<\/title>)/,
        `${headerInfo}$1`,
      )
    },
  }
}
export default htmlPlugin
