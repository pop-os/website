fixture('index').page('http://localhost:3001/')

test('tests', async (t) => {
  await t.expect(1).eql(1)
})
