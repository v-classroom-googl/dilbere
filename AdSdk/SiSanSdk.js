var View = Laya.View;
var Dialog = Laya.Dialog;
var Scene = Laya.Scene;
var REG = Laya.ClassUtils.regClass;
class GameTipUI extends View {
  constructor() {
    super();
  }
  ["createChildren"]() {
    super.createChildren();
    this.createView(GameTipUI.uiView);
  }
}
GameTipUI.uiView = {
  "type": "View",
  "props": {
    "width": 0x2d0,
    "height": 0x500
  },
  "compId": 0x2,
  "child": [{
    "type": "Label",
    "props": {
      "y": 0x0,
      "x": 0x0,
      "width": 0x190,
      "var": "value",
      "valign": "middle",
      "text": "金币不足",
      "strokeColor": "#080808",
      "stroke": 0x1,
      "height": 0x43,
      "fontSize": 0x1e,
      "color": "#ffffff",
      "borderColor": "#ffffff",
      "bold": true,
      "bgColor": "#232323",
      "anchorY": 0.5,
      "anchorX": 0.5,
      "align": "center"
    },
    "compId": 0x4
  }],
  "animations": [{
    "nodes": [{
      "target": 0x4,
      "keyframes": {
        "y": [{
          "value": 0x0,
          "tweenMethod": "linearNone",
          "tween": true,
          "target": 0x4,
          "key": "y",
          "index": 0x0
        }, {
          "value": -0x28,
          "tweenMethod": "linearNone",
          "tween": true,
          "target": 0x4,
          "key": "y",
          "index": 0x14
        }],
        "x": [{
          "value": 0x0,
          "tweenMethod": "linearNone",
          "tween": true,
          "target": 0x4,
          "key": "x",
          "index": 0x0
        }],
        "alpha": [{
          "value": 0x1,
          "tweenMethod": "linearNone",
          "tween": true,
          "target": 0x4,
          "key": "alpha",
          "index": 0x0
        }, {
          "value": 0x1,
          "tweenMethod": "linearNone",
          "tween": true,
          "target": 0x4,
          "key": "alpha",
          "index": 0x14
        }, {
          "value": 0x1,
          "tweenMethod": "linearNone",
          "tween": true,
          "target": 0x4,
          "key": "alpha",
          "index": 0x28
        }, {
          "value": 0x0,
          "tweenMethod": "linearNone",
          "tween": true,
          "target": 0x4,
          "key": "alpha",
          "index": 0x3c
        }]
      }
    }],
    "name": "ani1",
    "id": 0x1,
    "frameRate": 0x18,
    "action": 0x1
  }],
  "loadList": [],
  "loadList3D": []
};
REG("ui.Prefab.GameTipUI", GameTipUI);
class blurUI extends View {
  constructor() {
    super();
  }
  ["createChildren"]() {
    super.createChildren();
    this.createView(blurUI.uiView);
  }
}

window.SdkUtil = {
  "shiping": 0x0,
  "banner": 0x0,
  "fenxiang": 0x0,
  "yuansheng": 0x0,
  "showChaping": false,
  "AdNum": 0x0,
  "screenOrientation": window.GameParameter.screenOrientation.val,
  "xunijian": {},
  "yingshekey": {},
  "ADInit": function () {
    SdkUtil.qidongTime = new Date().getTime();
    SdkUtil.ShowShuiYing();
    SdkUtil.GetFocus();
  },
  "ChangeGamePanel"(_0x32b176) {
    if (_0x32b176) {}
    return _0x32b176;
  },
  "UpdateGamePanel"(_0x422a61) {
    if (_0x422a61) {
      for (var _0x4b9189 in SdkUtil.yingshekey) {
        if (_0x422a61[SdkUtil.yingshekey[_0x4b9189]]) {
          SdkUtil.xunijian[_0x4b9189] = _0x422a61[SdkUtil.yingshekey[_0x4b9189]];
        }
      }
    }
  },
  "CloseGamePanel"(_0x3aaf4e) {},
  "checkDay": function (_0x1c9b7a) {
    let _0x2db658 = new Date();
    let _0x4cae88 = {
      0x0: _0x2db658.getFullYear(),
      0x1: _0x2db658.getMonth() + 0x1,
      0x2: _0x2db658.getDate(),
      0x3: _0x2db658.getDay() == 0x0 ? 0x7 : _0x2db658.getDay(),
      0x4: _0x2db658.getHours(),
      0x5: _0x2db658.getMinutes()
    };
    let _0x773895 = false;
    for (let _0x1bae39 = 0x0; _0x1bae39 < _0x1c9b7a.length; _0x1bae39++) {
      let _0xddcfeb = _0x1c9b7a[_0x1bae39].split(",");
      let _0x1a9707 = true;
      for (let _0x2c0869 = 0x0; _0x2c0869 < _0xddcfeb.length; _0x2c0869++) {
        if (_0xddcfeb[_0x2c0869] != "*" && _0xddcfeb[_0x2c0869] != '') {
          let _0x1793de = _0xddcfeb[_0x2c0869].split("-");
          let _0x28617c = _0x1793de[0x0] ? parseInt(_0x1793de[0x0]) : 0x0;
          let _0xb84b43 = _0x1793de[0x1] ? parseInt(_0x1793de[0x1]) : _0x28617c + 0x1;
          if (_0x4cae88[_0x2c0869] < _0x28617c || _0x4cae88[_0x2c0869] >= _0xb84b43) {
            _0x1a9707 = false;
            break;
          }
        }
      }
      if (_0x1a9707) {
        _0x773895 = true;
        break;
      }
    }
    return _0x773895;
  },
  "GetConfig": function (_0x4b280f) {
    if (_0x4b280f == "box" || _0x4b280f == "xingxiang" || _0x4b280f == "weixiantip" || _0x4b280f == "4399") {
      return 0x64;
    }
    if (_0x4b280f == "skp") {
      return "100_1000_60000";
    }
    return 0x0;
  },
  "GetFocus"() {
    if (window.document && window.document.addEventListener) {
      var _0x2b82e3 = {};
      document.addEventListener("keyup", function (_0x497305) {
        if (_0x497305 && _0x497305.key) {
          for (var _0xbaf8b2 in SdkUtil.xunijian) {
            if (_0x497305.key == _0xbaf8b2 && SdkUtil.xunijian[_0xbaf8b2] && SdkUtil.xunijian[_0xbaf8b2].event) {
              SdkUtil.xunijian[_0xbaf8b2].event(Laya.Event.MOUSE_UP, {
                "touchId": 0x0
              });
              console.log("抬起：" + _0x497305.key);
              _0x2b82e3[_0x497305.key] = null;
            }
          }
        }
      });
      document.addEventListener("keydown", function (_0x45cf0e) {
        if (_0x45cf0e && _0x45cf0e.key) {
          for (var _0x271af7 in SdkUtil.xunijian) {
            if (_0x45cf0e.key == _0x271af7 && SdkUtil.xunijian[_0x271af7] && SdkUtil.xunijian[_0x271af7].event) {
              if (_0x2b82e3[_0x45cf0e.key] == null) {
                _0x2b82e3[_0x45cf0e.key] = true;
              }
            }
          }
        }
      });
      setInterval(function () {
        for (var _0x2e581b in _0x2b82e3) {
          if (_0x2b82e3[_0x2e581b]) {
            SdkUtil.xunijian[_0x2e581b].event(Laya.Event.MOUSE_DOWN, {
              "touchId": 0x0
            });
            _0x2b82e3[_0x2e581b] = false;
            console.log("按下：" + _0x2e581b);
          }
        }
      }, 0x1);
    }
    window.addEventListener("focus", function () {
     
    });
    window.addEventListener("blur", function () {
      
    });
    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, function () {
      if (window.focus) {
        window.focus();
      }
      
    });
  },
  "ShowNeiZhiAD"(_0x5d3788, _0x438ebc) {
    _0x5d3788.visible = false;
    return false;
  },
  "luzhiKaishi"() {
    console.log("luzhiKaishi------");
  },
  "luzhijieshu"() {
    console.log("luzhijieshu------");
  },
  "fenxiangVideo"(_0x392a64) {
    console.log("fenxiangVideo------");
    if (_0x392a64 != null) {
      _0x392a64(0x1);
      _0x392a64 = null;
    }
  },
  "ShowChaPing"(_0x26635b) {},
  "IsShowShareBtn"() {
    return false;
  },
  "IsShowADBtn"() {
    if (SdkUtil.AdNum <= 0x0) {
      return false;
    }
    return true;
  },
  "getYearDay": function () {
    const _0x516da4 = new Date().getFullYear().toString();
    const _0xb2ff4d = new Date() - new Date(_0x516da4);
    const _0x232818 = Math.ceil(_0xb2ff4d / 0x5265c00) + 0x1;
    console.log("今天是%s年中的第%s天", _0x516da4, _0x232818);
    if (_0x232818 >= 0x78) {
      return true;
    }
    return false;
  },
  "ShowBanner"() {},
  "CloseBanner"() {},
  "ShowVideo1"() {
    var _0xc09c89 = SdkUtil.GetConfig("skp");
    if (_0xc09c89 == 0x0 || _0xc09c89 == null) {
      return false;
    }
    var _0x7d79ba = _0xc09c89.split("_");
    if (_0x7d79ba[0x0] == null || _0x7d79ba[0x1] == null || _0x7d79ba[0x2] == null) {
      return false;
    }
    if (SdkUtil.RandomInt(0x0, 0x64) >= parseInt(_0x7d79ba[0x0])) {
      return false;
    }
    if (SdkUtil.preClickTime1 == null) {
      SdkUtil.preClickTime1 = SdkUtil.qidongTime + parseInt(_0x7d79ba[0x1]);
    }
    if (new Date().getTime() < SdkUtil.preClickTime1) {
      return false;
    }
    SdkUtil.preClickTime1 = new Date().getTime() + parseInt(_0x7d79ba[0x2]);
    window.SdkUtil.ShowVideo(function (_0x4cabc2) {
      if (_0x4cabc2 == 0x1) {}
    });
    return true;
  },
  "ShowVideo"(_0x221e17) {
    ShowRewarded(_0x221e17);
    return;
    window.h5api.playAd(function (_0x4518a2) {
      console.log("代码:" + _0x4518a2.code + ",消息:" + _0x4518a2.message);
      if (_0x4518a2.code === 0x2710) {
        console.log("开始播放");
        if (_0x221e17 != null) {
          _0x221e17(0x64);
        }
      } else if (_0x4518a2.code === 0x2711) {
        console.log("播放结束");
        if (_0x221e17 != null) {
          _0x221e17(0x1);
          _0x221e17 = null;
        }
      } else {
        console.log("广告异常");
        if (_0x221e17 != null) {
          _0x221e17(0x0);
          _0x221e17 = null;
        }
      }
    });
  },
  "ReportMonitor"(_0x3ab253) {},
  "ShowAddIcon"() {},
  "ShowShuiYing"() {
    
  },
  "RandomInt"(_0x4889d0, _0x1e3f69) {
    return Math.round(Math.random() * (_0x1e3f69 - _0x4889d0) + _0x4889d0);
  },
  "ShowTip"(_0x5c3ad5) {
    var _0x2cb1c6 = new Laya.Point(Laya.stage.width * 0.5, Laya.stage.height * 0.5);
    if (SdkUtil.screenOrientation == "2") {
      _0x2cb1c6 = new Laya.Point(Laya.stage.width / 0x2, Laya.stage.height / 0x2);
    }
    let _0x11a3c2 = Laya.stage.addChild(new GameTipUI());
    _0x11a3c2.value.text = _0x5c3ad5;
    _0x11a3c2.x = _0x2cb1c6.x;
    _0x11a3c2.y = _0x2cb1c6.y;
    Laya.timer.frameOnce(0x78, this, function () {
      _0x11a3c2.destroy();
    });
  },
  "TDInit"() {},
  "TDGuanQia"(_0x98d3e3, _0x52f1e2) {},
  "TDEvent"(_0xa452c9) {}
};