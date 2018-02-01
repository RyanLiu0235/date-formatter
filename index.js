/**
 * 展示事件
 * 1分钟以内 —— 刚刚
 * [1分钟,1小时） —— n分钟前（例:8分钟前
 * [1小时,24小时） —— n小时前（例: 8小时前
 * [24小时，自然日昨天0点） —— 昨天
 * [自然日昨天0点，自然日1月1日0点） —— 月-日（例: 8-5
 * 大于自然日1月1日0点 —— 年-月-日（例: 2016-8-5
 */

var formatter = function(then, now) {
  var now = now === undefined ? new Date() : now

  return ''
}

module.exports = formatter
