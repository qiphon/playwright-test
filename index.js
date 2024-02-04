const { webkit } = require('playwright')

;(async () => {
  const broswer = await webkit.launch({ headless: false })

  const page = await broswer.newPage()

  await page.goto('https://www.baidu.com', { waitUntil: 'domcontentloaded' })

  const input = await page.$('#kw')
  await input.focus()
  await input.fill('playwright ')

  const searchBtn = await page.$('#su')
  await searchBtn.click({})
  page.waitForResponse()
  console.log('search finish ')
})()
