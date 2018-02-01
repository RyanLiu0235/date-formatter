/**
 * 展示事件
 * 1分钟以内 —— 刚刚
 * [1分钟,1小时） —— n分钟前（例:8分钟前
 * [1小时,24小时） —— n小时前（例: 8小时前
 * [24小时，自然日昨天0点） —— 昨天
 * [自然日昨天0点，自然日1月1日0点） —— 月-日（例: 8-5
 * 大于自然日1月1日0点 —— 年-月-日（例: 2016-8-5
 */

var assert = require('assert')
var formatter = require('./')

var now = new Date(2018, 2, 1, 11, 30, 2)

describe('时间格式化', function() {
  describe('距离2018-02-01 11:30:02', function() {
    it('1分钟以内，要返回\'刚刚\'', function() {
      assert.deepStrictEqual(formatter(now.time + 59 * 1000, now), '刚刚')
    })

    it('1分钟，要返回\'1分钟前\'', function() {
      assert.deepStrictEqual(formatter(now.time + 60 * 1000, now), '1分钟前')
    })

    it('59分钟59秒，要返回\'59分钟前\'', function() {
      var now = Date.now()
      assert.deepStrictEqual(formatter(now.time + (59 * 60 + 59) * 1000, now), '59分钟前')
    })

    it('1个小时，要返回\'1小时前\'', function() {
      var now = Date.now()
      assert.deepStrictEqual(formatter(now.time + 60 * 60 * 1000, now), '1小时前')
    })

    it('23个小时59分钟59秒，要返回\'23小时前\'', function() {
      var now = Date.now()
      assert.deepStrictEqual(formatter(now.time + (23 * 60 * 60 + 59 * 60 + 59) * 1000, now), '23小时前')
    })

    it('24个小时，要返回\'昨天\'', function() {
      var now = Date.now()
      console.log('24个小时前：', new Date(now.time + 24 * 60 * 60 * 1000))
      assert.deepStrictEqual(formatter(now.time + 24 * 60 * 60 * 1000, now), '昨天')
    })

    it('昨天零点，要返回\'昨天\'', function() {
      var then = new Date(2018, 1, 31)
      assert.deepStrictEqual(formatter(then, now), '昨天')
    })

    it('昨天零点前一秒，要返回\'1月30日\'', function() {
      var then = new Date(2018, 1, 30, 23, 59, 59)

      console.log('then', new Date(then))
      assert.deepStrictEqual(formatter(then, now), '1月30日')
    })

    it('2018-01-01 00:00:00，要返回\'1月1日\'', function() {
      var then = new Date(2018, 1, 1)

      console.log('then', new Date(then))
      assert.deepStrictEqual(formatter(then, now), '1月1日')
    })

    it('2017-12-31 23:59:59，要返回\'2017年12月31日\'', function() {
      var then = new Date(2017, 12, 31)

      console.log('then', new Date(then))
      assert.deepStrictEqual(formatter(then, now), '2017年12月31日')
    })
  })
})
