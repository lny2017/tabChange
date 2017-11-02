/**
 * @class RanderTab (Tab切换的组件)
 *      createTab (创建一个tab组件的盒子)
 *      judeg (判定是否使用默认样式)
 *      randerTit (渲染tab切换的导航)
 *      randerContent (渲染tab切换的内容)
 *      tabChange (tab切换的事件逻辑)
 * @PS 组件参数类型为Object, tabDat为默认的数据 ele只识别元素的id名
 *     使用前请引入样式文件style.css
 * @author by lny
 * @date 2017/11/02 19:24
 */

class RanderTab {
    constructor (obj) {
        let {title, content} = obj.tabData;
        this.tit = title;
        this.content = content;
        this.ele = document.getElementById(obj.ele) || this.createTab();
        this.init();
    }
    init () {
        this.judeg();
        this.randerTit();
        this.randerContent();
        this.tabChange();
    }
    createTab () {
        let dom = document.createElement('div');
        dom.id = 'tabChange';
        return dom;
    }
    judeg () {
        if (this.ele.id === 'tabChange') {
            console.log('现在使用时是默认样式！...');
        }
        document.body.appendChild(this.ele);
    }
    randerTit () {
        let tabNav = document.createElement('ul');
        tabNav.id = 'tabNav';
        let str = '';
        this.tit.map(v => {
            str += `<li data-id=${v.id}>${v.title}</li>`;
        });
        tabNav.innerHTML = str;
        this.ele.appendChild(tabNav);
    }
    randerContent () {
        let tabContent = document.createElement('div');
        tabContent.id = 'tabContent';
        let str = '';
        this.content.map(v => {
            str += `<div data-id=${v.id} class='tabCon'>${v.text}</div>`;
        });
        tabContent.innerHTML = str;
        this.ele.appendChild(tabContent);
    }
    tabChange () {
        let lis = document.getElementById(this.ele.id).getElementsByTagName('li');
        let oDiv = document.getElementById(this.ele.id).getElementsByClassName('tabCon');
        lis[0].className = 'liBg';
        oDiv[0].className = 'tabCon oDiv';
        Array.from(lis).map(e => {
            e.addEventListener('click', () => {
                let ids = e.getAttribute('data-id');
                for (let i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                    oDiv[i].className = 'tabCon';
                }
                lis[ids - 1].className = 'liBg';
                oDiv[ids - 1].className = 'tabCon oDiv';
            }, false);
        });
    }
}

const tabData = {
    title: [
        {
            id: 1,
            title: 'title1'
        },
        {
            id: 2,
            title: 'title2'
        },
        {
            id: 3,
            title: 'title3'
        },
        {
            id: 4,
            title: 'title4'
        }
    ],
    content: [
        {
            id: 1,
            text: 'test1'
        },
        {
            id: 2,
            text: 'test2'
        },
        {
            id: 3,
            text: 'test3'
        },
        {
            id: 4,
            text: 'test4'
        }
    ]
};
new RanderTab({
    ele: 'wrap',
    tabData: tabData
});
