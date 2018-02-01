# date-formatter
[![Build Status](https://travis-ci.org/stop2stare/date-formatter.svg?branch=master)](https://travis-ci.org/stop2stare/date-formatter)
[![codecov](https://codecov.io/gh/stop2stare/date-formatter/branch/master/graph/badge.svg)](https://codecov.io/gh/stop2stare/date-formatter)

## rules
* 1分钟以内 —— 刚刚
* [1分钟,1小时） —— n分钟前（例:8分钟前
* [1小时,24小时） —— n小时前（例: 8小时前
* [24小时，自然日昨天0点） —— 昨天
* [自然日昨天0点，自然日1月1日0点） —— 月-日（例: 8-5
* 大于自然日1月1日0点 —— 年-月-日（例: 2016-8-5

## test
``` sh
# test
$ npm run test

# coverage
$ npm run coverage
```