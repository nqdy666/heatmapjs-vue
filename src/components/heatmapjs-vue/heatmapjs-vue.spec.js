import { loadFixture, testVM, nextTick, setData } from '../../../tests/utils'

describe('heatmapjs-vue', async () => {
  beforeEach(loadFixture(__dirname, 'heatmapjs-vue'))
  testVM()

  it('should has htmp-container class', async () => {
    const { app: { $refs } } = window

    expect($refs.ht).toHaveClass('htmp-container')
  })

  it('heatmap data should equal init data', async () => {
    const { app: { $refs } } = window
    const data = $refs.ht.getData()
    expect(app.max).toEqual(data.max)
    expect(app.min).toEqual(data.min)
    expect(app.data).toEqual(data.data.map(item => ({ x: Number(item.x), y: Number(item.y), value: Number(item.value) })))
  })

  it('data example should change state on data update', async () => {
    const newData = [
      { x: 10, y: 10, value: 50 },
      { x: 40, y: 30, value: 100 }
    ]
    await setData(app, 'data', newData)
    const { app: { $refs } } = window
    expect(app.data).toBe(newData)

    await nextTick()
    const data = $refs.ht.getData()
    expect(app.data).toEqual(data.data.map(item => ({ x: Number(item.x), y: Number(item.y), value: Number(item.value) })))
  })
})
