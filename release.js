const { default: zip } = require('bestzip')
let destination = `./release/extension`
if (process.argv.length >= 3) {
  destination += `_${process.argv[2]}`
}
destination += '.zip'
zip({
  source: 'dist/*',
  destination,
}).catch((err) => {
  console.error(err)
  process.exitCode = 1
})
