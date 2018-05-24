var express = require('express');
var router = express.Router();


var obj = {
    id: '001',
    name: '这是一段mock数据',
    data: [
        {
            id: '100',
            name: '水果',
            data: [
                {
                    id: '101',
                    name: '苹果',
                    data: [
                        {
                            id: '101.1',
                            name: '红富士'
                        },
                        {
                            id: '101.2',
                            name: '黄元帅'
                        }
                    ]
                },
                {
                    id: '102',
                    name: '芒果',
                    data: [
                        {
                            id: '102.1',
                            name: '大台农'
                        },
                        {
                            id: '102.2',
                            name: '小台农'
                        }
                    ]
                }
            ]
        },
        {
            id: '200',
            name: '蔬菜',
            data: [
                {
                    id: '201',
                    name: '甘蓝',
                    data: [
                        {
                            id: '201.1',
                            name: '紫甘蓝'
                        },
                        {
                            id: '201.2',
                            name: '白干兰'
                        }
                    ]
                },
                {
                    id: '202',
                    name: '圣女果',
                    data: [
                        {
                            id: '202.1',
                            name: '千禧'
                        },
                        {
                            id: '202.2',
                            name: '贝贝'
                        }
                    ]
                }
            ]
        },
        {
            id: '300',
            name: '五谷杂粮',
            data: [
                {
                    id: '301',
                    name: '苹果',
                    data: [
                        {
                            id: '301.1',
                            name: '红富士'
                        },
                        {
                            id: '301.2',
                            name: '黄元帅'
                        }
                    ]
                },
                {
                    id: '302',
                    name: '芒果',
                    data: [
                        {
                            id: '302.1',
                            name: '大台农'
                        },
                        {
                            id: '302.2',
                            name: '小台农'
                        }
                    ]
                }
            ]
        },
        {
            id: '400',
            name: '香辛料',
            data: [
                {
                    id: '401',
                    name: '甘蓝',
                    data: [
                        {
                            id: '401.1',
                            name: '紫甘蓝'
                        },
                        {
                            id: '401.2',
                            name: '白干兰'
                        }
                    ]
                },
                {
                    id: '402',
                    name: '圣女果',
                    data: [
                        {
                            id: '402.1',
                            name: '千禧'
                        },
                        {
                            id: '402.2',
                            name: '贝贝'
                        }
                    ]
                }
            ]
        }
    ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(obj);
});

module.exports = router;




