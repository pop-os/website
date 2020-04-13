import { Selector } from 'testcafe'

fixture('Index').page('http://localhost:3001/')

test('renders text', async (t) => {
  await t.expect(Selector('h1').textContent).contains('Coming Soon')
})
