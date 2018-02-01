/**
 * 展示事件
 * 1分钟以内 —— 刚刚
 * [1分钟,1小时） —— n分钟前（例:8分钟前
 * [1小时,24小时） —— n小时前（例: 8小时前
 * [24小时，自然日昨天0点） —— 昨天
 * [自然日昨天0点，自然日1月1日0点） —— 月-日（例: 8-5
 * 大于自然日1月1日0点 —— 年-月-日（例: 2016-8-5
 */

/**
 * 时间格式化
 *
 * @param 	{timeString} 						then 	一个遥远的时间
 * @param 	{timeString|undefined} 	now 	当前的时间，不传默认为当前
 * @return 	{String} 					按照上面的规则来返回
 */

var MINUTE = 60 * 1000
var HOUR = 60 * MINUTE
var DAY = 24 * HOUR

var formatter = function(_then, _now) {
  _now = _now === undefined ? Date.now() : _now
  var now = new Date(_now)
  var then = new Date(_then)
  var distance = _now - _then

  if (distance < MINUTE) {
    return '刚刚'
  } else if (distance < HOUR) {
    return Math.floor(distance / MINUTE) + '分钟前'
  } else if (distance < DAY) {
    return Math.floor(distance / HOUR) + '小时前'
  } else if (_then >= new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1).getTime()) {
    return '昨天'
  } else if (_then >= new Date(now.getFullYear(), 0, 1).getTime()) {
    return then.getMonth() + 1 + '-' + then.getDate()
  } else {
    return then.getFullYear() + '-' + (then.getMonth() + 1) + '-' + then.getDate()
  }
}

module.exports = formatter
