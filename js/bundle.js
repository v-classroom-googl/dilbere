!function () {
    var _0x12908a = function () {
      var _0x5c5f91 = true;
      return function (_0x223221, _0x3c18f3) {
        var _0x181969 = _0x5c5f91 ? function () {
          if (_0x3c18f3) {
            var _0x5cc90f = _0x3c18f3.apply(_0x223221, arguments);
            _0x3c18f3 = null;
            return _0x5cc90f;
          }
        } : function () {};
        _0x5c5f91 = false;
        return _0x181969;
      };
    }();
    (function () {
      _0x12908a(this, function () {
        var _0x4f4505 = new RegExp("function *\\( *\\)");
        var _0x3a8529 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
        var _0x23cd8b = _0xf7d4a0("init");
        if (!_0x4f4505.test(_0x23cd8b + "chain") || !_0x3a8529.test(_0x23cd8b + "input")) {
          _0x23cd8b("0");
        } else {
          _0xf7d4a0();
        }
      })();
    })();
    var _0x500b61 = function () {
      var _0x578fa2 = true;
      return function (_0x552b8e, _0x514b5b) {
        var _0x1a6068 = _0x578fa2 ? function () {
          if (_0x514b5b) {
            var _0x2af38a = _0x514b5b.apply(_0x552b8e, arguments);
            _0x514b5b = null;
            return _0x2af38a;
          }
        } : function () {};
        _0x578fa2 = false;
        return _0x1a6068;
      };
    }();
    var _0x4d4065 = _0x500b61(this, function () {
      var _0x5cb47a = function () {
        var _0x1745b7;
        try {
          var _0x36ec25 = {};
          _0x1745b7 = _0x36ec25();
        } catch (_0x2c1aa9) {
          _0x1745b7 = window;
        }
        return _0x1745b7;
      };
      var _0x6d4292 = _0x5cb47a();
      var _0x53a16d = _0x6d4292.console = _0x6d4292.console || {};
      var _0xbbf284 = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (var _0xc5ec37 = 0x0; _0xc5ec37 < _0xbbf284.length; _0xc5ec37++) {
        var _0x1c3ebe = _0x500b61.constructor.prototype.bind(_0x500b61);
        var _0x5d72d6 = _0xbbf284[_0xc5ec37];
        var _0x37d62b = _0x53a16d[_0x5d72d6] || _0x1c3ebe;
        _0x1c3ebe.__proto__ = _0x500b61.bind(_0x500b61);
        _0x1c3ebe.toString = _0x37d62b.toString.bind(_0x37d62b);
        _0x53a16d[_0x5d72d6] = _0x1c3ebe;
      }
    });
    _0x4d4065();
    'use strict';
    class _0x474e98 extends Laya.Scene {
      constructor() {
        super();
        this.loadScene("test/TestScene.scene");
        var _0x3b0a80 = Laya.stage.addChild(new Laya.Scene3D());
        var _0x3446a5 = _0x3b0a80.addChild(new Laya.Camera(0x0, 0.1, 0x64));
        _0x3446a5.transform.translate(new Laya.Vector3(0x0, 0x3, 0x3));
        _0x3446a5.transform.rotate(new Laya.Vector3(-0x1e, 0x0, 0x0), true, false);
        var _0x442c6f = _0x3b0a80.addChild(new Laya.DirectionLight());
        _0x442c6f.color = new Laya.Vector3(0.6, 0.6, 0.6);
        _0x442c6f.transform.worldMatrix.setForward(new Laya.Vector3(0x1, -0x1, 0x0));
        var _0x2ec16f = _0x3b0a80.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(0x1, 0x1, 0x1)));
        _0x2ec16f.transform.rotate(new Laya.Vector3(0x0, 0x2d, 0x0), false, false);
        var _0x42e045 = new Laya.BlinnPhongMaterial();
        Laya.Texture2D.load("res/layabox.png", Laya.Handler.create(null, function (_0x4f9ae0) {
          _0x42e045.albedoTexture = _0x4f9ae0;
        }));
        _0x2ec16f.meshRenderer.material = _0x42e045;
      }
    }
    Laya.View;
    var _0x42c452 = Laya.Dialog;
    var _0x17ee35 = Laya.Scene;
    var _0xdea285 = Laya.ClassUtils.regClass;
    _0xdea285("ui.test.TestSceneUI", class extends _0x17ee35 {
      constructor() {
        super();
      }
      ["createChildren"]() {
        super.createChildren();
        this.loadScene("test/TestScene");
      }
    });
    class _0x1a4193 extends _0x42c452 {
      constructor() {
        super();
      }
      ["createChildren"]() {
        super.createChildren();
        this.createView(_0x1a4193.uiView);
      }
    }
    _0x1a4193.uiView = {
      "type": "Dialog",
      "props": {
        "runtime": "InfoTips.js",
        "mouseEnabled": false
      },
      "compId": 0x2,
      "child": [{
        "type": "Image",
        "props": {
          "var": "bg",
          "skin": "UIRes/repeat/Image_repeat_04.png",
          "anchorY": 0.5,
          "anchorX": 0.5
        },
        "compId": 0x4
      }],
      "loadList": ["UIRes/repeat/Image_repeat_04.png"],
      "loadList3D": []
    };
    _0xdea285("ui.UIPanel.GoldTipsUI", _0x1a4193);
    class _0x45be7c extends _0x42c452 {
      constructor() {
        super();
      }
      ["createChildren"]() {
        super.createChildren();
        this.createView(_0x45be7c.uiView);
      }
    }
    _0x45be7c.uiView = {
      "type": "Dialog",
      "props": {
        "runtime": "InfoTips.js",
        "mouseEnabled": false
      },
      "compId": 0x2,
      "child": [{
        "type": "Image",
        "props": {
          "y": -0xd,
          "x": 0x0,
          "visible": false,
          "var": "bg",
          "skin": "UIRes/bgGas.png",
          "sizeGrid": "10,10,10,10",
          "scaleY": 0.5,
          "scaleX": 0.5,
          "height": 0x6e
        },
        "compId": 0x9
      }, {
        "type": "Label",
        "props": {
          "y": 0x0,
          "x": 0x0,
          "var": "infoLabel",
          "valign": "middle",
          "text": "AAAA",
          "stroke": 0x4,
          "overflow": "visible",
          "height": 0x23,
          "fontSize": 0x18,
          "font": "Microsoft YaHei",
          "color": "#ffffff",
          "bold": true,
          "align": "center"
        },
        "compId": 0xa
      }],
      "loadList": ["UIRes/bgGas.png"],
      "loadList3D": []
    };
    _0xdea285("ui.UIPanel.InfoTipsUI", _0x45be7c);
    class _0x4952b3 {
      static ["ShowUIPanel"](_0x320729, _0x943b06 = true, _0x2645b1 = null) {
        Laya.Scene.open("UIPanel/" + _0x320729 + ".scene", _0x943b06, _0x2645b1);
      }
      static ["showGameTips"](_0x26f7da) {
        var _0x4948bd = Laya.stage.addChild(new _0x45be7c());
        _0x4948bd.infoLabel.text = _0x26f7da;
        var _0xe9f75c = _0x4948bd.infoLabel.width;
        _0x4948bd.infoLabel.pivotX = 0.5 * _0xe9f75c;
        _0x4948bd.x = 0.5 * Laya.stage.width;
        _0x4948bd.y = 0.5 * Laya.stage.height;
        Laya.Tween.to(_0x4948bd, {
          "y": _0x4948bd.y - 0x190,
          "alpha": 0x0
        }, 0x7d0, null, Laya.Handler.create(this, function (_0x3ffaac) {
          _0x4948bd.destroy();
        }, _0x4948bd));
      }
      static ["showGoldTips"](_0x3fe1be) {
        var _0x5a7a20 = Laya.stage.addChild(new _0x1a4193());
        var _0x8611f9 = _0x3fe1be.orange;
        _0x5a7a20.x = _0x8611f9.x;
        _0x5a7a20.y = _0x8611f9.y;
        var _0x39e83c = _0x3fe1be.target.x;
        var _0x109498 = _0x3fe1be.target.y;
        Laya.Tween.to(_0x5a7a20, {
          "x": _0x39e83c,
          "y": _0x109498
        }, 0x2bc, null, Laya.Handler.create(this, function (_0x23a97c) {
          _0x5a7a20.destroy();
        }, _0x5a7a20));
      }
      static ["showWoundUI"](_0x59eb99, _0x38cc64) {
        var _0x1f9fa2 = Laya.stage.addChild(new WoundTipsUI());
        _0x1f9fa2.infoLabel.text = "-" + _0x38cc64;
        _0x1f9fa2.x = _0x59eb99.x;
        _0x1f9fa2.y = _0x59eb99.y;
        Laya.Tween.to(_0x1f9fa2, {
          "x": _0x1f9fa2.x,
          "y": _0x1f9fa2.y - 0x64,
          "alpha": 0x0
        }, 0x4b0, null, Laya.Handler.create(this, function (_0x3219bb) {
          _0x1f9fa2.destroy();
        }, _0x1f9fa2));
      }
      static ["showUpgradeUI2"](_0x428944, _0x267bed, _0x3c3eba) {
        var _0x108bd6 = this.gameUI.uiShowRoot.addChild(new UpgradeUIUI());
        if (_0x267bed > 0x0) {
          _0x108bd6.a.getChildByName("infoLabel2").visible = false;
          _0x108bd6.a.getChildByName("infoLabel1").visible = true;
          _0x108bd6.a.getChildByName("infoLabel1").text = "+" + _0x267bed;
        } else {
          _0x108bd6.a.getChildByName("infoLabel2").visible = true;
          _0x108bd6.a.getChildByName("infoLabel1").visible = false;
          _0x108bd6.a.getChildByName("infoLabel2").text = "-" + _0x267bed;
        }
        _0x108bd6.x = _0x428944.x;
        _0x108bd6.y = _0x428944.y;
        _0x108bd6.scaleX = 1.3;
        _0x108bd6.scaleY = 1.3;
        Laya.Tween.to(_0x108bd6, {
          "x": _0x108bd6.x,
          "y": _0x108bd6.y - 0x96,
          "alpha": 0x0
        }, 0x4b0, null, Laya.Handler.create(this, function (_0x120ecd) {
          _0x108bd6.destroy();
        }, _0x108bd6));
        return _0x108bd6;
      }
      static ["showUpgradeUI"](_0x5a56d2 = true) {
        var _0x186b52 = this.gameUI.uiShowRoot.addChild(new UpgradeUIUI());
        _0x186b52.scaleX = 1.3;
        _0x186b52.scaleY = 1.3;
        return _0x186b52;
      }
      static ["createHeadTipsUI"]() {
        return this.gameUI.uiShowRoot.addChild(new headTipsUI());
      }
      static ["createBooldTipsUI"]() {
        return this.gameUI.uiShowRoot.addChild(new bloodTipsUI());
      }
      static ["createNpcPosTipsUI"]() {
        return this.gameUI.uiShowRoot.addChild(new ArrowTipsUI());
      }
      static ["createGoldTipsUi"](_0x217e8f) {
        if (!this.goldTips) {
          this.goldTips = this.gameUI.uiShowRoot.addChild(new WoundTipsUI());
          this.goldTips.gold.alpha = 0x0;
        }
        if (!this.jiluGoldNum) {
          this.jiluGoldNum = 0x0;
          this.goldTips.alpha = 0x1;
        }
        this.jiluGoldNum += _0x217e8f;
        this.goldTips.x = 0.5 * Laya.stage.width;
        this.goldTips.y = 0.48 * Laya.stage.height;
        this.goldTips.goldLable.text = "+" + this.jiluGoldNum;
        this.goldTips.gold.alpha = 0x1;
        this.goldTips.gold.y = 0x0;
        this.tween = Laya.Tween.to(this.goldTips.gold, {
          "y": -0xa
        }, 0x320, null, Laya.Handler.create(this, function (_0x1716f4) {
          this.tween1 = Laya.Tween.to(this.goldTips.gold, {
            "alpha": 0x0
          }, 0xc8, null, Laya.Handler.create(this, function (_0x1eaa20) {
            this.jiluGoldNum = 0x0;
            this.goldTips.destroy();
            this.goldTips = null;
          }));
        }));
        Laya.timer.once(0x3e8, this, function () {
          if (0x0 == this.jiluGoldNum && this.goldTips) {
            this.goldTips.gold.alpha = 0x0;
            this.goldTips.destroy();
            this.goldTips = null;
          }
        });
      }
    }
    _0x4952b3.gameUI = null;
    _0x4952b3.mainUI = null;
    _0x4952b3.upgradeUI = null;
    _0x4952b3.guideUI = null;
    _0x4952b3.colorEggsUI = null;
    _0x4952b3.loadLayer = null;
    _0x4952b3.overUI = null;
    _0x4952b3.tipsArray = [];
    _0x4952b3.tipsInfo = null;
    _0x4952b3.pushUI = null;
    _0x4952b3.FailUI = null;
    _0x4952b3.winUI = null;
    _0x4952b3.shopUI = null;
    class _0x576441 {
      static ["getData"]() {
        var _0xa59428 = Laya.LocalStorage.getItem("userData");
        if (_0xa59428) {
          _0x576441.userData = JSON.parse(_0xa59428);
        }
      }
      static ["saveData"]() {
        var _0x2359a1 = JSON.stringify(_0x576441.userData);
        Laya.LocalStorage.setItem("userData", _0x2359a1);
      }
      static ["getUserData"](_0xa07c37) {
        return null != _0x576441.userData[_0xa07c37] ? _0x576441.userData[_0xa07c37] : _0x576441.userDefaultData[_0xa07c37];
      }
      static ["setUserData"](_0x223cfb, _0xed50e4) {
        _0x576441.userData[_0x223cfb] = _0xed50e4;
      }
      static ["getDayHMTime"](_0x4b2ca4) {
        return Math.floor(_0x4b2ca4 / 0x15180) + "天" + Math.floor(_0x4b2ca4 % 0x15180 / 0xe10) + ":" + Math.floor(_0x4b2ca4 % 0x15180 % 0xe10 / 0x3c) + ":" + _0x4b2ca4 % 0x3c;
      }
      static ["setTimeScale"](_0xb4e209) {
        _0x576441.gameTimeScale = _0xb4e209;
        _0x576441.gameFrameScale = Math.floor(0x1 / _0xb4e209);
        Laya.timer.scale = _0xb4e209;
      }
      static ["resetPlayerData"]() {
        _0x576441.resetLevelData();
      }
      static ["resetLevelData"]() {}
      static ["setGameState"](_0x94d45a) {
        _0x576441.gameState = _0x94d45a;
      }
      static ["gameReadyState"]() {
        return 0x1e == _0x576441.gameState;
      }
      static ["gamePlotState"]() {
        return 0x14 == _0x576441.gameState;
      }
      static ["gameRunState"]() {
        return 0x28 == _0x576441.gameState;
      }
      static ["gamePauseState"]() {
        return 0x32 == _0x576441.gameState;
      }
      static ["isUnlockSpecial"](_0x3ab2b2) {
        var _0x5ee75a = _0x576441.getUserData("specialLevelDatas");
        for (let _0x1b0a0b = 0x0; _0x1b0a0b < _0x5ee75a.length; _0x1b0a0b++) {
          if (_0x5ee75a[_0x1b0a0b].leveID == _0x3ab2b2) {
            return true;
          }
        }
        return false;
      }
      static ["isHoldShopItem"](_0x5dd94d) {
        var _0x16230c = _0x576441.getUserData("holdItems");
        for (let _0x14aef2 = 0x0; _0x14aef2 < _0x16230c.length; _0x14aef2++) {
          if (_0x16230c[_0x14aef2].itemID == _0x5dd94d) {
            return true;
          }
        }
        return false;
      }
      static ["isUnlockDecoItem"](_0x413df1) {
        var _0x14776f = _0x576441.getUserData("unlockDecos");
        for (let _0x59be3a = 0x0; _0x59be3a < _0x14776f.length; _0x59be3a++) {
          if (_0x14776f[_0x59be3a].itemID == _0x413df1) {
            return true;
          }
        }
        return false;
      }
    }
    _0x576441.userData = {};
    _0x576441.userDefaultData = {};
    _0x576441.userDefaultData.gold = 0x32;
    _0x576441.userDefaultData.activeLevel = 0x0;
    _0x576441.userDefaultData.holdItems = [{
      "itemID": 0x0
    }];
    _0x576441.shopItemMax = 0x6;
    _0x576441.userDefaultData.unlockDecos = [];
    _0x576441.userDefaultData.levelDatas = [{
      "star": 0x0
    }];
    _0x576441.userDefaultData.hotelLevel = 0x1;
    _0x576441.userDefaultData.usedShopItem = 0x0;
    _0x576441.userDefaultData.isShowMainGuide = true;
    _0x576441.userDefaultData.isShowMapGuide = true;
    _0x576441.userDefaultData.isLevelGuide = true;
    _0x576441.userDefaultData.levelSecondGuideId = 0x28;
    _0x576441.userDefaultData.levelGuideId = 0x64;
    _0x576441.userDefaultData.gameGuides = [0x0, 0x0, 0x0];
    _0x576441.userDefaultData.auxiliaryDatas = [];
    _0x576441.userDefaultData.rewardDate = 0x0;
    _0x576441.userDefaultData.signCount = 0x0;
    _0x576441.gameState = 0xa;
    _0x576441.gameTimeScale = 0x1;
    _0x576441.gameFrameScale = 0x1;
    _0x576441.isWinOrFail = false;
    _0x576441.frameTime = 0x0;
    _0x576441.levelMax = 0xa;
    _0x576441.isShowSignIn = false;
    _0x576441.frameOffsetValue = 0x1;
    _0x576441.userDefaultData.shopData = [{
      "selfId": "dongwu1",
      "name": "animal_ch_bear_01",
      "gold": 0x0,
      "isTrue": 0x1,
      "playerId": 0x0
    }, {
      "selfId": "dongwu2",
      "name": "animal_ch_cat_01",
      "gold": 0x7d0,
      "isTrue": 0x0,
      "playerId": 0x1
    }, {
      "selfId": "dongwu3",
      "name": "animal_ch_dog_01",
      "gold": 0xbb8,
      "isTrue": 0x0,
      "playerId": 0x2
    }, {
      "selfId": "dongwu4",
      "name": "animal_ch_fox_01",
      "gold": 0x1388,
      "isTrue": 0x0,
      "playerId": 0x3
    }, {
      "selfId": "dongwu5",
      "name": "animal_ch_panda_01",
      "gold": 0x1770,
      "isTrue": 0x0,
      "playerId": 0x4
    }, {
      "selfId": "dongwu6",
      "name": "animal_ch_peng_01",
      "gold": 0x1770,
      "isTrue": 0x0,
      "playerId": 0x5
    }];
    _0x576441.slefPlayerId = 0x0;
    _0x576441.getGoldValue = 0x0;
    _0x576441.getGameLastValue = 0x0;
    _0x576441.getGameEndArrayValue = 0x0;
    _0x576441.playerRotate = 0x14;
    _0x576441.RotateSpeed = 0.5;
    _0x576441.huanDongSpeed = 0.022;
    _0x576441.leftDistance = -3.2;
    _0x576441.rightDistance = 3.2;
    _0x576441.jiLu = 0x0;
    _0x576441.gensuiPosLerp = 0.5;
    _0x576441.gensuiRotLerp = 0.5;
    _0x576441.gensuiRotLerpX = 0.2;
    _0x576441.gensuiRotLerpY = 0x1;
    _0x576441.gebsuiDistance = 0.1;
    _0x576441.onTriggerIponeTimeMax = 0xa;
    _0x576441.onTriggerIponeNum = 0x1;
    _0x576441.PlayerMoveSpeed = 0x1;
    _0x576441.playerMoveAnilerp = 0.8;
    _0x576441.camearMoveLerp = 0.2;
    _0x576441.camearRotateLerp = 0.2;
    _0x576441.dropRotValue = 0x50;
    _0x576441.yanseLog = false;
    _0x576441.qieHuanYanSe = true;
    _0x576441.chongDianDeBug = false;
    _0x576441.rotateForceValue = 0x1f4;
    _0x576441.cameraTaiTouSpeed = 0.03;
    _0x576441.cameraDiTouSpeed = 0.03;
    _0x576441.leveEndFxTimeMax = 0x1e;
    _0x576441.winTime = 0x1e;
    _0x576441.winTimeEnd = 0x3c;
    _0x576441.FailTimeEnd = 0x3c;
    _0x576441.genSuiDestroyTimeMax = 0x64;
    _0x576441.genSuiIsDestroy = false;
    _0x576441.repeatGameVibrate = true;
    _0x576441.jiaYiSpeed = 0.01;
    _0x576441.selfUnicycleSpeed = 1.5;
    _0x576441.jingTouLaChangSpeed = 0.2;
    _0x576441.jingTouLaChangOnce = 0.2;
    _0x576441.selfDataCount = 0x1e;
    class _0x28b4c1 {
      static ["playMusic"](_0x549ecd) {
        Laya.SoundManager.playMusic("Sound/" + _0x549ecd + ".mp3", 0x0);
      }
      static ["playSound"](_0x570340) {
        if (null != _0x28b4c1.soundEdle[_0x570340]) {
          if (_0x28b4c1.soundEdle[_0x570340] > Date.now()) {
            return;
          }
          _0x28b4c1.soundEdle[_0x570340] = Date.now() + 0xc8;
        }
        Laya.SoundManager.playSound("Sound/" + _0x570340 + ".mp3");
      }
      static ["playDialog"](_0x418632) {
        Laya.SoundManager.setMusicVolume(0.25);
        Laya.SoundManager.setSoundVolume(0.25);
        var _0x26c171 = Laya.SoundManager.playSound("Sound/" + _0x418632 + ".mp3");
        if (_0x26c171) {
          _0x26c171.volume = 0x1;
        }
      }
      static ["playSnoreSound"](_0x58e724) {
        if (null == _0x28b4c1.loopSoundChannel) {
          _0x28b4c1.loopSoundChannel = Laya.SoundManager.playSound("Sound/effectSnore.mp3", 0x0);
        }
        if (_0x28b4c1.loopSoundChannel) {
          _0x28b4c1.loopSoundChannel.volume = _0x58e724 ? 0x1 : 0x0;
        }
      }
      static ["removeSnoreSound"]() {
        if (_0x28b4c1.loopSoundChannel) {
          _0x28b4c1.loopSoundChannel.stop();
          Laya.SoundManager.removeChannel(_0x28b4c1.loopSoundChannel);
          _0x28b4c1.loopSoundChannel = null;
        }
      }
      static ["setEngineSound"](_0x1e24b8) {
        if (null == _0x28b4c1.engineSoundChannel) {
          _0x28b4c1.engineSoundChannel = Laya.SoundManager.playSound("Sound/effectMoveLeft.mp3", 0x0);
        }
        let _0x4dd9de = _0x1e24b8;
        if (_0x4dd9de < 0x0) {
          _0x4dd9de = 0x0;
        }
        if (_0x4dd9de > 0x1) {
          _0x4dd9de = 0x1;
        }
        _0x28b4c1.engineSoundChannel.volume = 0.2 + 0.8 * _0x4dd9de;
      }
      static ["removeEngineSound"](_0x281a18) {
        if (_0x28b4c1.engineSoundChannel) {
          _0x28b4c1.engineSoundChannel.stop();
          Laya.SoundManager.removeChannel(_0x28b4c1.engineSoundChannel);
          _0x28b4c1.engineSoundChannel = null;
        }
      }
      static ["resumeSoundVolume"]() {
        Laya.SoundManager.setMusicVolume(0x1);
        Laya.SoundManager.setSoundVolume(0x1);
      }
      static ["silence"]() {
        Laya.SoundManager.setMusicVolume(0x0);
      }
    }
    _0x28b4c1.soundEdle = {
      "coin": 0x0
    };
    _0x28b4c1.loopSoundChannel = null;
    _0x28b4c1.engineSoundChannel = null;
    _0x28b4c1.whewSoundCount = 0x0;
    class _0x243707 {
      static ["loadConfig"]() {
        Laya.loader.load("First/JsonDatas/levelTileRandomData.json", Laya.Handler.create(this, function () {
          _0x243707.levelTileRandomData = Laya.loader.getRes("First/JsonDatas/levelTileRandomData.json");
        }), null, Laya.Loader.JSON);
        Laya.loader.load("First/JsonDatas/levelCaoRandomData.json", Laya.Handler.create(this, function () {
          _0x243707.levelCaoRandomData = Laya.loader.getRes("First/JsonDatas/levelCaoRandomData.json");
        }), null, Laya.Loader.JSON);
        Laya.loader.load("First/JsonDatas/levelGuoZiRandomData.json", Laya.Handler.create(this, function () {
          _0x243707.levelGuoZiRandomData = Laya.loader.getRes("First/JsonDatas/levelGuoZiRandomData.json");
        }), null, Laya.Loader.JSON);
        Laya.loader.load("First/JsonDatas/levelChongZiRandomData.json", Laya.Handler.create(this, function () {
          _0x243707.levelChongZiRandomData = Laya.loader.getRes("First/JsonDatas/levelChongZiRandomData.json");
        }), null, Laya.Loader.JSON);
        Laya.loader.load("First/JsonDatas/levelShuRandomData.json", Laya.Handler.create(this, function () {
          _0x243707.levelShuRandomData = Laya.loader.getRes("First/JsonDatas/levelShuRandomData.json");
        }), null, Laya.Loader.JSON);
        Laya.loader.load("First/JsonDatas/levelShiTouRandomData.json", Laya.Handler.create(this, function () {
          _0x243707.levelShiTouRandomData = Laya.loader.getRes("First/JsonDatas/levelShiTouRandomData.json");
        }), null, Laya.Loader.JSON);
      }
      static ["getWeaponDataByKey"](_0x5c8fe6, _0x26bbd3) {
        return _0x243707.weaponData && _0x243707.weaponData[_0x5c8fe6] ? _0x243707.weaponData[_0x5c8fe6][_0x26bbd3] : null;
      }
    }
    _0x243707.roomData = null;
    _0x243707.receptionData = null;
    _0x243707.cleanData = null;
    _0x243707.zoneData = null;
    _0x243707.parkingData = null;
    _0x243707.storeroomData = null;
    _0x243707.toiletData = null;
    _0x243707.eventData = null;
    _0x243707.levelTileRandomData = null;
    _0x243707.levelCaoRandomData = null;
    _0x243707.levelGuoZiRandomData = null;
    _0x243707.levelChongZiRandomData = null;
    _0x243707.levelShuRandomData = null;
    _0x243707.levelShiTouRandomData = null;
    class _0x3c2b14 {
      static ["RandomInt"](_0x23f7c1, _0x10354b) {
        return Math.round(Math.random() * (_0x10354b - _0x23f7c1) + _0x23f7c1);
      }
      static ["getAngleVector"](_0x52734b, _0x35fb17) {
        let _0x3cd560 = Laya.Vector3.dot(_0x52734b, _0x35fb17);
        let _0x1f4460 = Laya.Vector3.scalarLength(_0x52734b) * Laya.Vector3.scalarLength(_0x35fb17);
        let _0x38bcc4 = Math.acos(_0x3cd560 / _0x1f4460);
        if (isNaN(_0x38bcc4)) {
          _0x38bcc4 = 0x0;
        }
        return _0x38bcc4;
      }
      static ["AngleBetweenVector"](_0x55d51a, _0x3618e3) {
        var _0x5c3db1 = Laya.Vector3.dot(_0x55d51a, _0x3618e3) / (Laya.Vector3.scalarLength(_0x55d51a) * Laya.Vector3.scalarLength(_0x3618e3));
        return 0xb4 * Math.acos(_0x5c3db1) / Math.PI;
      }
      static ["getRotateByRightCoordinate"](_0x27a45d, _0x4ed86f) {
        let _0x46f1d0 = new Laya.Vector3();
        Laya.Vector3.cross(_0x27a45d, _0x4ed86f, _0x46f1d0);
        return _0x46f1d0;
      }
      static ["joystickMove"](_0x53c32d, _0x48bc53) {
        if (Laya.Vector3.scalarLength(_0x53c32d) < 0.1) {
          return new Laya.Vector3();
        }
        let _0xa6eecb = Math.atan2(-_0x53c32d.z, _0x53c32d.x) - 0.5 * Math.PI;
        let _0x245fe2 = _0x48bc53.x * Math.cos(_0xa6eecb) + _0x48bc53.z * Math.sin(_0xa6eecb);
        let _0x21ac47 = _0x48bc53.z * Math.cos(_0xa6eecb) - _0x48bc53.x * Math.sin(_0xa6eecb);
        return new Laya.Vector3(_0x245fe2, 0x0, _0x21ac47);
      }
      static ["getNodeByName"](_0x3b28e6, _0x26f12a) {
        if (null == _0x3b28e6) {
          return null;
        }
        for (var _0x11dda2 = 0x0; _0x11dda2 < _0x3b28e6.numChildren; _0x11dda2++) {
          var _0xe1e16e = _0x3b28e6.getChildAt(_0x11dda2);
          var _0x38d838 = _0x3c2b14.getNodeByName(_0xe1e16e, _0x26f12a);
          if (_0x38d838) {
            return _0x38d838;
          }
          if (_0xe1e16e.name == _0x26f12a) {
            return _0xe1e16e;
          }
        }
        return null;
      }
      static ["showCostMoney"](_0x3d0ba8, _0x39bd71, _0x20aef1) {
        let _0x15d54f = [];
        let _0x2c25f0 = Math.floor(_0x39bd71 / 0x3e8);
        let _0xa79a04 = Math.floor(_0x39bd71 % 0x3e8 / 0x64);
        let _0x572ee2 = Math.floor(_0x39bd71 % 0x64 / 0xa);
        let _0x41e017 = _0x39bd71 % 0xa;
        if (_0x2c25f0 > 0x0) {
          _0x15d54f[0x0] = '' + _0x2c25f0;
          _0x15d54f[0x1] = "D";
          _0x15d54f[0x2] = '' + _0xa79a04;
          _0x15d54f[0x3] = "K";
        } else if (_0xa79a04 > 0x0) {
          _0x15d54f[0x0] = '' + _0xa79a04;
          _0x15d54f[0x1] = '' + _0x572ee2;
          _0x15d54f[0x2] = '' + _0x41e017;
        } else if (_0x572ee2 > 0x0) {
          _0x15d54f[0x0] = '' + _0x572ee2;
          _0x15d54f[0x1] = '' + _0x41e017;
        } else {
          _0x15d54f[0x0] = '' + _0x41e017;
        }
        let _0x6a9228 = 0.5 * -(_0x15d54f.length - 0x1) * _0x20aef1;
        for (let _0x58c4fb = 0x0; _0x58c4fb < _0x3d0ba8.length; _0x58c4fb++) {
          if (_0x58c4fb < _0x15d54f.length) {
            _0x3d0ba8[_0x58c4fb].active = true;
            for (let _0x58ba46 = 0x0; _0x58ba46 < _0x3d0ba8[_0x58c4fb].numChildren; _0x58ba46++) {
              let _0xa28f6 = _0x3d0ba8[_0x58c4fb].getChildAt(_0x58ba46);
              _0xa28f6.active = _0xa28f6.name == _0x15d54f[_0x58c4fb];
            }
            _0x3d0ba8[_0x58c4fb].transform.localPositionX = _0x6a9228 + _0x58c4fb * _0x20aef1;
          } else {
            _0x3d0ba8[_0x58c4fb].active = false;
          }
        }
      }
    }
    class _0x547786 extends Laya.Script3D {
      constructor() {
        super();
      }
      ["onEnable"]() {}
      ["initData"](_0x2a0636) {
        this.selfId = _0x2a0636.selfId;
        this.roleComponent = _0x2a0636.roleComponent;
        this.roleNode = _0x2a0636.roleNode;
        this.dianChiArray = [];
        this.jiayiArray = [];
        this.jiayiDiaoYong = [];
      }
      ["onUpdate"]() {
        for (let _0x3bfbd6 = 0x0; _0x3bfbd6 < this.dianChiArray.length; _0x3bfbd6++) {
          let _0x301de3 = this.dianChiArray[_0x3bfbd6].obj;
          let _0x1447ec = this.dianChiArray[_0x3bfbd6].ani;
          this.dianChiArray[_0x3bfbd6].time -= _0x576441.frameOffsetValue;
          if (this.dianChiArray[_0x3bfbd6].time <= 0x0 && _0x1447ec.getCurrentAnimatorPlayState().normalizedTime >= 0x1) {
            _0x301de3.destroy();
            this.dianChiArray.splice(_0x3bfbd6, 0x1);
            _0x3bfbd6--;
          }
        }
        for (let _0x14959f = 0x0; _0x14959f < this.jiayiArray.length; _0x14959f++) {
          var _0x257833 = this.jiayiArray[_0x14959f].obj;
          this.jiayiArray[_0x14959f].time += _0x576441.frameOffsetValue * _0x576441.jiaYiSpeed;
          if (this.jiayiArray[_0x14959f].time >= 0x1) {
            this.jiayiArray[_0x14959f].time = 0x1;
          }
          var _0x1e4303 = new Laya.Vector3();
          Laya.Vector3.lerp(this.jiayiArray[_0x14959f].origin, this.jiayiArray[_0x14959f].target, this.jiayiArray[_0x14959f].time, _0x1e4303);
          _0x257833.transform.localPosition = _0x1e4303.clone();
          if (this.jiayiArray[_0x14959f].time >= 0x1) {
            _0x257833.destroy();
            this.jiayiArray.splice(_0x14959f, 0x1);
            _0x14959f--;
          }
        }
        for (let _0x33f62b = 0x0; _0x33f62b < this.jiayiDiaoYong.length; _0x33f62b++) {
          this.jiayiDiaoYong[_0x33f62b].jishi += _0x576441.frameOffsetValue;
          if (this.jiayiDiaoYong[_0x33f62b].jishi >= this.jiayiDiaoYong[_0x33f62b].jishiMax) {
            var _0x3905f9 = _0x303db9.levelManager.createFx("jiayi", this.roleComponent.jiayiRoot, this.roleComponent.jiayiRoot.transform.position.clone());
            var _0x475ad5 = new Laya.Vector3();
            _0x3905f9.transform.localPosition = _0x475ad5.clone();
            _0x3905f9.transform.localRotation = new Laya.Vector3();
            var _0x5a8425 = this.roleComponent.jiayiPosRoot.transform.localPosition.clone();
            this.jiayiArray.push({
              "obj": _0x3905f9,
              "time": 0x0,
              "origin": _0x475ad5,
              "target": _0x5a8425
            });
            this.jiayiDiaoYong.splice(_0x33f62b, 0x1);
            _0x33f62b--;
          }
        }
      }
      ["onCollisionEnter"](_0x4f1278) {}
      ["onTriggerEnter"](_0x5a6e3e) {
        switch (this.selfId) {
          case 0x0:
            if ("Coin" == _0x5a6e3e.owner.name) {
              _0x303db9.levelManager.gameVibrate();
              _0x28b4c1.playSound("gold");
              var _0x3a7880 = _0x303db9.levelManager.createFx("E4", null, _0x5a6e3e.owner.transform.position.clone());
              _0x303db9.levelManager.txDestroyAddArray(_0x3a7880, 0x32);
              _0x5a6e3e.owner.active = false;
              _0x303db9.levelManager.getCoin(_0x5a6e3e);
            }
            if (-0x1 != _0x5a6e3e.owner.name.indexOf("Collectible Small")) {
              _0x303db9.levelManager.gameVibrate();
              _0x28b4c1.playSound("dianchi");
              (_0x53f4a8 = _0x5a6e3e.owner.getComponent(Laya.Animator)).play("S11");
              var _0x41be74 = 0x1;
              if (_0x5a6e3e.owner.transform.localScaleX >= 0x2) {
                _0x41be74 = 0x2;
              }
              this.dianChiArray.push({
                "obj": _0x5a6e3e.owner,
                "ani": _0x53f4a8,
                "time": 0x2
              });
              this.roleComponent.addFollowArray(_0x41be74);
              _0x5a6e3e.owner.name = "xiaoshi";
              var _0x216ea2 = _0x303db9.levelManager.createFx("jiayi", this.roleComponent.jiayiRoot, this.roleComponent.jiayiRoot.transform.position.clone());
              var _0x7bf02b = new Laya.Vector3();
              _0x216ea2.transform.localPosition = _0x7bf02b.clone();
              _0x216ea2.transform.localRotation = new Laya.Vector3();
              var _0xed4d0c = this.roleComponent.jiayiPosRoot.transform.localPosition.clone();
              this.jiayiArray.push({
                "obj": _0x216ea2,
                "time": 0x0,
                "origin": _0x7bf02b,
                "target": _0xed4d0c
              });
            }
            if ("rotateTriggerEnd" == _0x5a6e3e.owner.name) {
              this.roleComponent.huanraoEnd();
              _0x5a6e3e.owner.name = "xiaoshi";
            }
            if ("rotateTrigger" == _0x5a6e3e.owner.name) {
              this.roleComponent.huanraoState();
              _0x5a6e3e.owner.name = "xiaoshi";
            }
            if (-0x1 != _0x5a6e3e.owner.name.indexOf("iponeTrigger")) {
              this.roleComponent.onTriggerEnterIpone(_0x5a6e3e);
            }
            if ("end" == _0x5a6e3e.owner.name) {
              this.roleComponent.gameEndState();
            }
            if ("TriggerEnd" == _0x5a6e3e.owner.name) {
              this.roleComponent.isLevelEndState(_0x5a6e3e);
            }
            if (-0x1 != _0x5a6e3e.owner.name.indexOf("Collectibles_Stack_Centered_Variant")) {
              _0x303db9.levelManager.gameVibrate();
              _0x28b4c1.playSound("dianchi");
              _0x5a6e3e.owner.name = "xiaoshi";
              for (let _0xf598e8 = 0x0; _0xf598e8 < _0x5a6e3e.owner.numChildren; _0xf598e8++) {
                var _0x53f4a8;
                var _0xc053ee = _0x5a6e3e.owner.getChildAt(_0xf598e8).getChildAt(0x0);
                (_0x53f4a8 = _0xc053ee.getComponent(Laya.Animator)).play("S11");
                _0x41be74 = 0x1;
                if (_0xc053ee.transform.localScaleX >= 0x2) {
                  _0x41be74 = 0x2;
                }
                this.dianChiArray.push({
                  "obj": _0xc053ee,
                  "ani": _0x53f4a8,
                  "time": 0x2
                });
                this.roleComponent.addFollowArray(_0x41be74);
                this.jiayiDiaoYong.push({
                  "jishi": 0x0,
                  "jishiMax": 0xa * _0xf598e8
                });
              }
            }
            _0x5a6e3e.owner.name;
            if ("qiehuan" == _0x5a6e3e.owner.name) {
              this.roleComponent.onTriggerQieHuan(_0x5a6e3e);
            }
            if ("yice" == _0x5a6e3e.owner.name) {
              this.roleComponent.onTriggerQieHuanYiCe(_0x5a6e3e);
            }
            if ("qiehuanEnd" == _0x5a6e3e.owner.name) {
              this.roleComponent.onTriggerQieHuanEnd(_0x5a6e3e);
            }
            if ("rotateQieHuan" == _0x5a6e3e.owner.name) {
              this.roleComponent.rotateQieHuanState(_0x5a6e3e);
            }
            break;
          case 0x1:
            if ("chufa" == _0x5a6e3e.owner.name) {
              this.roleComponent.chufa(_0x5a6e3e);
            }
            if ("dianJu" == _0x5a6e3e.owner.name) {
              this.roleComponent.onTriggerEnterDianJu(_0x5a6e3e);
            }
            if ("Blade" == _0x5a6e3e.owner.name) {
              this.roleComponent.onTriggerEnterBlade(_0x5a6e3e);
            }
        }
      }
      ["onTriggerExit"](_0x3730b9) {
        switch (this.selfId) {
          case 0x0:
            if (-0x1 != _0x3730b9.owner.name.indexOf("iponeTrigger")) {
              this.roleComponent.roleBodyEscapeTriggerIpone(_0x3730b9);
            }
            break;
          case 0x1:
            if ("chufa" == _0x3730b9.owner.name) {
              this.roleComponent.chufa(_0x3730b9);
            }
        }
      }
    }
    class _0x10175d extends Laya.Script3D {
      constructor() {
        super();
      }
      ["onEnable"]() {
        this.vis = true;
        this.activeState = 0xa;
        this.selfMoveSpeed = 0.1;
      }
      ["initData"](_0x3c8cbc) {
        this.isMouseDown = false;
        _0x576441.jiLu++;
        this.cube = this.owner.getChildByName("Cube");
        this.cube.active = false;
        this.arrayIndex = null;
        this.boneArray = _0x3c8cbc.boneArray;
        this.fllowNode = _0x3c8cbc.fllowNode;
        this.fllowNodeLastPoint = this.fllowNode.getChildByName("lastPoint");
        this.fllowLookPoint = this.fllowNode.getChildByName("lookPoint");
        this.fllowLookPointEnd = this.fllowNode.getChildByName("lookPointEnd");
        this.owner.transform.position = this.fllowNodeLastPoint.transform.position.clone();
        this.fllowComponent = _0x3c8cbc.fllowComponent;
        this.playerMesh = _0x3c8cbc.playerMesh;
        this.playerComponent = _0x3c8cbc.playerComponent;
        this.activeState = 0x12c;
        this.targetPos = this.fllowNode.transform.position.clone();
        this.selfFaceNode = this.owner.getChildByName("FaceCheck");
        this.selfForwardNode = this.selfFaceNode.getChildByName("ForwardNode");
        this.fllowRigid = _0x3c8cbc.rigidBody;
        this.fllowRigidNode = _0x3c8cbc.rigidBodyNode;
        this.meshNodeRoot = this.owner.getChildByName("MeshNode");
        this.checkNode = this.meshNodeRoot.getChildByName("checkNode");
        this.checkComponent = this.checkNode.addComponent(_0x547786);
        this.checkComponent.initData({
          "selfId": 0x1,
          "roleComponent": this,
          "roleNode": this.owner
        });
        this.Collectible_Small = this.meshNodeRoot.getChildByName("Collectible_Small");
        this.ani = this.Collectible_Small.getComponent(Laya.Animator);
        this.ani.play("S14");
        this.chufaNode = this.owner.getChildByName("chufa");
        this.shangyige = false;
        this.lastComponent = _0x3c8cbc.lastComponent;
        this.activeState = 0xa;
        this.genSuiActiveState = 0xa;
        this.genSuiDestroyTimeMax = _0x576441.genSuiDestroyTimeMax;
        this.genSuiDestroyTime = 0x0;
        this.zhendong = true;
        this.luJingArray = [];
        this.initFllow();
      }
      ["onUpdate"]() {
        if (_0x576441.genSuiIsDestroy) {
          this.genSuiDestroyTime += _0x576441.frameOffsetValue;
          if (this.genSuiDestroyTime >= this.genSuiDestroyTimeMax) {
            this.owner.destroy();
          }
        }
        this.selfOnUpdate();
      }
      ["resetDate"](_0x4daf3d) {
        this.fllowNode = _0x4daf3d.fllowNode;
        this.fllowNodeLastPoint = this.fllowNode.getChildByName("lastPoint");
        this.fllowComponent = _0x4daf3d.fllowComponent;
      }
      ["onTriggerEnterDianJu"](_0x10bafb) {
        if (this.zhendong) {
          if (!_0x576441.repeatGameVibrate) {
            this.zhendong = false;
          }
          _0x28b4c1.playSound("qiege");
          _0x303db9.levelManager.gameVibrate();
        }
        this.vis = false;
      }
      ["onTriggerEnterBlade"](_0xf381f2) {
        if (this.zhendong) {
          if (!_0x576441.repeatGameVibrate) {
            this.zhendong = false;
          }
          _0x28b4c1.playSound("qiege");
          _0x303db9.levelManager.gameVibrate();
        }
        this.vis = false;
      }
      ["chufa"](_0x4333c1) {
        if (_0x4333c1.owner == this.fllowNode.getChildByName("chufa")) {
          this.shangyige = true;
        }
      }
      ["chufaEnd"](_0x5dabc0) {
        if (_0x5dabc0.owner == this.fllowNode.getChildByName("chufa")) {
          this.shangyige = false;
        }
      }
      ["update"]() {
        var _0x4f3495 = this.owner.transform.position.clone();
        var _0x1ad8dd = this.fllowNodeLastPoint.transform.position.clone();
        var _0x1a6b91 = this.fllowLookPoint.transform.position.clone();
        var _0x272464 = new Laya.Vector3();
        Laya.Vector3.lerp(_0x4f3495, _0x1ad8dd, _0x576441.gensuiPosLerp, _0x272464);
        var _0x3cfb92 = new Laya.Vector3();
        Laya.Vector3.lerp(_0x4f3495, _0x1a6b91, _0x576441.gensuiRotLerp, _0x3cfb92);
        var _0x26c85c = this.selfRot(_0x1a6b91, _0x272464, _0x576441.gensuiRotLerpX);
        var _0x473f0c = this.selfRot(_0x3cfb92, _0x272464, _0x576441.gensuiRotLerpY);
        var _0x2cd882 = new Laya.Vector3(_0x26c85c.x, _0x473f0c.y, _0x26c85c.z);
        this.owner.transform.lookAt(_0x2cd882, new Laya.Vector3(0x0, 0x1, 0x0), false);
        this.owner.transform.rotate(new Laya.Vector3(0x0, 0xb4, 0x0), true, false);
        this.owner.transform.position = _0x272464;
      }
      ["selfRot"](_0x5bfc9a, _0x275b4a, _0x4f6c47 = 0x1) {
        let _0x26aede = new Laya.Vector3();
        Laya.Vector3.subtract(_0x5bfc9a, _0x275b4a, _0x26aede);
        Laya.Vector3.normalize(_0x26aede, _0x26aede);
        var _0x435272 = new Laya.Vector3(_0x26aede.x, _0x26aede.y, _0x26aede.z);
        Laya.Vector3.normalize(_0x435272, _0x435272);
        let _0x4a9015 = new Laya.Vector3();
        this.owner.transform.getForward(_0x4a9015);
        let _0x40a830 = new Laya.Vector3(-_0x4a9015.x, _0x4a9015.y, -_0x4a9015.z);
        let _0x33a4fa = new Laya.Vector3();
        Laya.Vector3.lerp(_0x40a830, _0x435272, _0x4f6c47, _0x33a4fa);
        let _0x57af1d = new Laya.Vector3();
        Laya.Vector3.add(_0x275b4a, _0x33a4fa, _0x57af1d);
        return _0x57af1d;
      }
      ["selfOnUpdate"]() {}
      ["initFllow"]() {
        this.selfIntervalTime = 0.4;
        this.selfDataCount = 0x2;
        this.selfMoveData = [];
        this.selfMoveTime = 0x0;
        this.selfLastPos = this.fllowNodeLastPoint.transform.position.clone();
        this.selfLastRot = this.fllowNodeLastPoint.transform.rotation.clone();
        this.selfStepPos = this.fllowNodeLastPoint.transform.position.clone();
        this.selfStepRot = this.fllowNodeLastPoint.transform.rotation.clone();
      }
      ["fllowGenSuiUpdate"]() {
        this.selfMoveTime += Laya.Vector3.distance(this.selfStepPos, this.fllowNodeLastPoint.transform.position);
        if (this.selfMoveTime > this.selfIntervalTime) {
          let _0x19c8d2 = new Laya.Vector3();
          let _0x42c230 = new Laya.Quaternion();
          Laya.Vector3.lerp(this.selfLastPos, this.fllowNodeLastPoint.transform.position, this.selfIntervalTime / this.selfMoveTime, _0x19c8d2);
          Laya.Quaternion.slerp(this.selfLastRot, this.fllowNodeLastPoint.transform.rotation, this.selfIntervalTime / this.selfMoveTime, _0x42c230);
          let _0x430f11 = {
            "pos": _0x19c8d2,
            "rot": _0x42c230
          };
          this.selfMoveData.unshift(_0x430f11);
          if (this.selfMoveData.length > this.selfDataCount) {
            this.selfMoveData.splice(this.selfMoveData.length - 0x1, 0x1);
          }
          this.selfMoveTime -= this.selfIntervalTime;
          this.selfLastPos = _0x19c8d2.clone();
          this.selfLastRot = _0x42c230.clone();
        }
        this.selfStepPos = this.fllowNodeLastPoint.transform.position.clone();
        this.selfStepRot = this.fllowNodeLastPoint.transform.rotation.clone();
        let _0x2d1462 = 0x1 - this.selfMoveTime / this.selfIntervalTime;
        if (this.selfMoveData[0x1]) {
          let _0x5391fc = this.selfMoveData[0x1].pos.clone();
          let _0x346c68 = this.selfMoveData[0x0].pos.clone();
          let _0x2b5d62 = this.selfMoveData[0x1].rot.clone();
          let _0x20a41c = this.selfMoveData[0x0].rot.clone();
          let _0x4e29a8 = new Laya.Vector3();
          let _0x305d60 = new Laya.Quaternion();
          Laya.Vector3.lerp(_0x346c68, _0x5391fc, _0x2d1462, _0x4e29a8);
          Laya.Quaternion.slerp(_0x20a41c, _0x2b5d62, _0x2d1462, _0x305d60);
          var _0x28aa16 = this.owner.transform.position.clone();
          if (Laya.Vector3.distance(_0x28aa16, _0x4e29a8) > 0.05) {
            this.owner.transform.lookAt(_0x4e29a8, new Laya.Vector3(0x0, 0x1, 0x0), false);
            this.owner.transform.rotate(new Laya.Vector3(0x0, 0xb4, 0x0), true, false);
          }
          this.owner.transform.position = _0x4e29a8;
        }
      }
    }
    class _0x2d23e9 extends Laya.Script3D {
      constructor() {
        super();
      }
      ["onEnable"]() {}
      ["initData"](_0x3ce3e0) {
        this.selfName = this.owner.name;
        this.parent = _0x3ce3e0.parent;
        this.selfAni = this.owner.getComponent(Laya.Animator);
        this.vis = true;
        this.iponeTrigger = _0x3c2b14.getNodeByName(this.owner, "iponeTrigger");
        this.dianliang = _0x3c2b14.getNodeByName(this.owner, "dianliang");
        this.iPhoneParent = this.owner.parent;
        this.moveAni = this.iPhoneParent.getComponent(Laya.Animator);
        this.e1Pos = _0x3c2b14.getNodeByName(this.parent, "E1");
        this.caiDaiFxPos = _0x3c2b14.getNodeByName(this.parent, "Fx");
        this.moveAniNames = [];
        if (this.moveAni) {
          for (var _0x2b6ac0 = 0x0; _0x2b6ac0 < this.moveAni._controllerLayers[0x0]._states.length; _0x2b6ac0++) {
            var _0x12413d = this.moveAni._controllerLayers[0x0]._states[_0x2b6ac0].name;
            this.moveAniNames.push(_0x12413d);
          }
        }
        this.dianliangbiankuang = _0x3c2b14.getNodeByName(this.owner, "dianliangbiankuang");
        this.dianliangNode = [];
        if (this.dianliangbiankuang) {
          for (let _0x2a931c = 0x0; _0x2a931c < this.dianliangbiankuang.numChildren; _0x2a931c++) {
            var _0x101af8 = this.dianliangbiankuang.getChildAt(_0x2a931c);
            this.dianliangNode.push(_0x101af8);
          }
        }
        this.chongmanNode = _0x3c2b14.getNodeByName(this.owner, "chongman");
        this.chongmanNode.active = false;
        this.xiShu = 0x1;
        if (-0x1 != this.parent.name.indexOf("PhonePlacer Left-Right Moveable")) {
          var _0x3753df = null;
          if (this.owner.getChildByName("aniName")) {
            _0x3753df = this.owner.getChildByName("aniName").getChildAt(0x0).name;
          }
          var _0x438054 = Math.random();
          if (this.owner.getChildByName("aniTime")) {
            _0x438054 = this.owner.getChildByName("aniTime").getChildAt(0x0).name;
            _0x438054 = Number(_0x438054);
          }
          var _0x52c94f = false;
          for (_0x2b6ac0 = 0x0; _0x2b6ac0 < this.moveAniNames.length; _0x2b6ac0++) {
            if (this.moveAniNames[_0x2b6ac0] == _0x3753df) {
              _0x52c94f = true;
              this.moveAni.play(_0x3753df, 0x0, _0x438054);
            }
          }
          if (!_0x52c94f) {
            this.moveAni.speed = 0x0;
          }
          this.dianLiangValue = _0x303db9.RandomInt(0x2, 0x7);
          this.setDianLiang(this.dianLiangValue);
        } else if (-0x1 != this.parent.name.indexOf("LevelEndFactor Variant")) {
          for (let _0x587bc8 = 0x0; _0x587bc8 < this.parent.numChildren; _0x587bc8++) {
            var _0x21ba4f = this.parent.getChildAt(_0x587bc8);
            if (0x0 == _0x21ba4f.name.indexOf("x")) {
              this.xiShu = Number(_0x21ba4f.name.slice(0x1));
            }
          }
          _0x3753df = null;
          if (this.owner.getChildByName("aniName")) {
            _0x3753df = this.owner.getChildByName("aniName").getChildAt(0x0).name;
          }
          _0x438054 = Math.random();
          if (this.owner.getChildByName("aniTime")) {
            _0x438054 = this.owner.getChildByName("aniTime").getChildAt(0x0).name;
            _0x438054 = Number(_0x438054);
          }
          _0x52c94f = false;
          for (_0x2b6ac0 = 0x0; _0x2b6ac0 < this.moveAniNames.length; _0x2b6ac0++) {
            if (this.moveAniNames[_0x2b6ac0] == _0x3753df) {
              _0x52c94f = true;
              this.moveAni.play(_0x3753df, 0x0, _0x438054);
            }
          }
          if (!_0x52c94f) {
            this.moveAni.speed = 0x0;
          }
          this.dianLiangValue = 0xa;
          this.setDianLiang(this.dianLiangValue);
        } else if (-0x1 != this.parent.name.indexOf("Phone")) {
          _0x3753df = null;
          if (this.owner.getChildByName("aniName")) {
            _0x3753df = this.owner.getChildByName("aniName").getChildAt(0x0).name;
          }
          _0x438054 = Math.random();
          if (this.owner.getChildByName("aniTime")) {
            _0x438054 = this.owner.getChildByName("aniTime").getChildAt(0x0).name;
            _0x438054 = Number(_0x438054);
          }
          _0x52c94f = false;
          for (_0x2b6ac0 = 0x0; _0x2b6ac0 < this.moveAniNames.length; _0x2b6ac0++) {
            if (this.moveAniNames[_0x2b6ac0] == _0x3753df) {
              _0x52c94f = true;
              this.moveAni.play(_0x3753df, 0x0, _0x438054);
            }
          }
          if (!_0x52c94f) {
            this.moveAni.speed = 0x0;
          }
          this.dianLiangValue = _0x303db9.RandomInt(0x2, 0x7);
          this.setDianLiang(this.dianLiangValue);
        } else if (-0x1 != this.parent.name.indexOf("ipad")) {
          this.dianLiangValue = _0x303db9.RandomInt(0x2, 0x7);
          this.setDianLiang(this.dianLiangValue);
        }
      }
      ["onUpdate"]() {}
      ["setDianLiang"](_0xa9784e) {
        var _0x3bda43 = _0xa9784e - 0x1;
        var _0x3bc7ae = new Laya.Vector4(0x1, 0x1, 0x1, 0x1);
        switch (_0x3bda43) {
          case 0x0:
          case 0x1:
          case 0x2:
            _0x3bc7ae = new Laya.Vector4(0x1, 0.0781, 0x0, 0x1);
            break;
          case 0x3:
          case 0x4:
          case 0x5:
            _0x3bc7ae = new Laya.Vector4(0x1, 0.4267, 0x0, 0x1);
            break;
          case 0x6:
          case 0x7:
          case 0x8:
          case 0x9:
            _0x3bc7ae = new Laya.Vector4(0x0, 0x1, 0.0295, 0x1);
        }
        for (let _0x3db967 = 0x0; _0x3db967 < _0x3bda43 + 0x1 && this.dianliangNode[_0x3db967]; _0x3db967++) {
          var _0x37a33b = this.dianliangNode[_0x3db967].meshRenderer;
          var _0x4fa19a = _0x37a33b.materials;
          _0x576441.chongDianDeBug;
          if (_0x576441.yanseLog) {
            _0x576441.yanseLog = false;
          }
          if (_0x576441.qieHuanYanSe) {
            _0x4fa19a[0x0].albedoColor = _0x3bc7ae.clone();
          }
        }
      }
      ["chongDian"]() {
        if (this.moveAni) {
          this.moveAni.speed = 0x0;
        }
        _0x303db9.levelManager.gameVibrate();
        this.dianLiangValue += 0x1;
        if (this.dianLiangValue >= 0xa) {
          _0x28b4c1.playSound("full");
          if (this.e1Pos) {
            var _0x43b6f4 = _0x303db9.levelManager.createFx("E1", this.e1Pos, this.e1Pos.transform.position.clone());
            _0x303db9.levelManager.txDestroyAddArray(_0x43b6f4, 0x3c);
          }
          if (this.caiDaiFxPos) {
            for (let _0x4f730d = 0x0; _0x4f730d < this.caiDaiFxPos.numChildren; _0x4f730d++) {
              var _0x57fe6f = this.caiDaiFxPos.getChildAt(_0x4f730d).name;
              var _0x437721 = this.caiDaiFxPos.getChildAt(_0x4f730d).transform.position.clone();
              var _0x2cd9b6 = this.caiDaiFxPos.getChildAt(_0x4f730d);
              var _0x520803 = _0x303db9.levelManager.createFx(_0x57fe6f, _0x2cd9b6, _0x437721);
              _0x303db9.levelManager.txDestroyAddArray(_0x520803, 0xc8);
              _0x520803.transform.localPosition = new Laya.Vector3();
              _0x520803.transform.localRotationEuler = new Laya.Vector3();
            }
          }
          this.dianliangbiankuang.active = false;
          this.chongmanNode.active = true;
          this.dianLiangValue = 0xa;
          this.chongDianEnd();
        } else {
          _0x28b4c1.playSound("charge");
          this.selfAni.play("S3", 0x0, 0.01);
        }
        this.setDianLiang(this.dianLiangValue);
      }
      ["chongDianFail"]() {
        this.vis = false;
        this.selfAni.play("S2");
      }
      ["chongDianEnd"]() {
        this.iponeTrigger.active = false;
        this.selfAni.play("S4");
      }
      ["getSelfGameLastValue"]() {}
    }
    class _0x194c24 extends Laya.Script3D {
      constructor() {
        super();
      }
      ["onEnable"]() {}
      ["initData"](_0x1bebf3) {
        this.centerBody = _0x3c2b14.getNodeByName(this.owner, "CenterBody1");
        this.rotateBody = _0x3c2b14.getNodeByName(this.owner, "RotateBody1");
        this.FixedLookAtTarget = _0x3c2b14.getNodeByName(this.owner, "FixedLookAtTarget1");
        this.juli = Laya.Vector3.distance(this.centerBody.transform.position, this.FixedLookAtTarget.transform.position);
        this.time = 0x0;
        this.timeMax = 0x28;
        this.activeState = 0xa;
        this.left_Right = null;
        this.rotateSpeedMinus = 0.1;
        this.rotateSpeedMax = 0x4;
        this.rotateSpeedMin = 0.3;
      }
      ["onUpdate"]() {
        switch (this.activeState) {
          case 0xa:
            break;
          case 0x14:
            if (this.rotateSpeed > this.rotateSpeedMin) {
              this.rotateSpeed -= this.rotateSpeedMinus * _0x576441.frameOffsetValue;
            } else {
              this.activeState = 0xa;
            }
            var _0x4d0074 = this.rotateBody.transform.localRotationEulerY;
            switch (this.left_Right) {
              case "left":
                if (_0x4d0074 >= -0x82) {
                  _0x4d0074 -= this.rotateSpeed;
                  this.rotateBody.transform.localRotationEulerY = _0x4d0074;
                }
                break;
              case "right":
                if (_0x4d0074 <= 0x82) {
                  _0x4d0074 += this.rotateSpeed;
                  this.rotateBody.transform.localRotationEulerY = _0x4d0074;
                }
            }
        }
      }
      ["chupeng"](_0xd212be) {
        this.rotateSpeed = this.rotateSpeedMax;
        this.activeState = 0x14;
        if (null == this.left_Right) {
          var _0x588cc0 = _0xd212be.point.clone();
          var _0x508189 = 0x3e7;
          var _0x245efa = null;
          for (let _0x875d15 = 0x0; _0x875d15 < this.rotateBody.numChildren; _0x875d15++) {
            var _0x4fd460 = this.rotateBody.getChildAt(_0x875d15);
            if (-0x1 != _0x4fd460.name.indexOf("direction")) {
              var _0x23d606 = Laya.Vector3.distance(_0x4fd460.transform.position, _0x588cc0);
              if (_0x23d606 < _0x508189) {
                _0x508189 = _0x23d606;
                _0x245efa = _0x4fd460;
              }
            }
          }
          if ("direction1" == _0x245efa.name) {
            this.left_Right = "left";
          } else {
            this.left_Right = "right";
          }
        }
      }
      ["addRigidBodyBox"]() {}
      ["addRigidBodySphere"]() {}
    }
    class _0x21f8fa extends Laya.Script3D {
      constructor() {
        super();
        this.selfMoveSpeed = 0.1;
        this.selfDropSpeed = 0.1;
        this.npcSpeed = 0x1;
        this.isAttack = false;
        this.vis = true;
      }
      ["onEnable"]() {}
      ["initData"](_0x365a15) {
        this.selfState = 0xa;
        this.debugSprites = [];
        this.initSelfData(_0x365a15);
        this.onTriggerIponeInit();
        this.onceLenght = _0x576441.jingTouLaChangOnce;
        this.cameraTransformPos = _0x303db9.mainCameraTranslate.transform.localPosition.clone();
      }
      ["onUpdate"]() {
        if (this.cameraTransformPos) {
          var _0x2d780e = _0x303db9.mainCameraTranslate.transform.localPosition.clone();
          var _0x459c98 = this.boneArray.length - 0x1;
          var _0x3c3d7f = new Laya.Vector3();
          Laya.Vector3.subtract(_0x303db9.mainFangXiang.transform.localPosition.clone(), _0x303db9.mainFangXiangA.transform.localPosition.clone(), _0x3c3d7f);
          Laya.Vector3.normalize(_0x3c3d7f, _0x3c3d7f);
          var _0x543df6 = new Laya.Vector3();
          _0x543df6.x = this.cameraTransformPos.x + _0x3c3d7f.x * _0x459c98 * this.onceLenght;
          _0x543df6.y = this.cameraTransformPos.y + _0x3c3d7f.y * _0x459c98 * this.onceLenght;
          _0x543df6.z = this.cameraTransformPos.z + _0x3c3d7f.z * _0x459c98 * this.onceLenght;
          var _0x1d8ff0 = new Laya.Vector3();
          Laya.Vector3.lerp(_0x2d780e, _0x543df6, _0x576441.jingTouLaChangSpeed, _0x1d8ff0);
          _0x303db9.mainCameraTranslate.transform.localPosition = _0x1d8ff0.clone();
        }
        this.genSuiUpdate();
        this.shuZiUpdate();
        this.onTriggerIponeUpdate();
        this.gameEndUpdate();
        this.isLevelEndUpdate();
        this.dropUpdate();
        this.faceRayUpdate();
        this.huanRaoUpdate();
        this.rotateQieHuanUpdate();
      }
      ["initSelfData"](_0x5c4ed8) {
        this.selfRoleType = _0x5c4ed8.roleType;
        this.selfRoldRootNode = this.owner.getChildByName("RoleNode");
        this.selfMeshRootNode = this.selfRoldRootNode.getChildByName("MeshNode");
        this.selfFaceNode = this.selfMeshRootNode.getChildByName("FaceCheck");
        this.selfForwardNode = this.selfFaceNode.getChildByName("ForwardNode");
        this.selfFaceDropNode = this.selfMeshRootNode.getChildByName("FaceDropCheck");
        this.selfDropForwardNode = this.selfFaceDropNode.getChildByName("ForwardNode");
        this.dongwuRoot = _0x3c2b14.getNodeByName(this.owner, "domgwu");
        this.shuziRoot = _0x3c2b14.getNodeByName(this.owner, "shuzi");
        this.one = _0x3c2b14.getNodeByName(this.owner, "yige");
        this.two = _0x3c2b14.getNodeByName(this.owner, "liangge");
        this.shuziNodeRoot = _0x3c2b14.getNodeByName(this.owner, "shuziNode");
        this.jiayiRoot = _0x3c2b14.getNodeByName(this.owner, "jiayi");
        this.jiayiPosRoot = _0x3c2b14.getNodeByName(this.owner, "jiayiPos");
        this.fllowNodeLastPoint = this.selfMeshRootNode.getChildByName("lastPoint");
        this.shuziState = 0x14;
        this.chufaNode = _0x3c2b14.getNodeByName(this.owner, "checkNode");
        this.chufaNode.addComponent(_0x547786).initData({
          "selfId": 0x0,
          "roleComponent": this,
          "roleNode": this.owner
        });
        this.selfMoveDirection = new Laya.Vector3();
        Laya.Vector3.subtract(this.selfForwardNode.transform.position, this.selfFaceNode.transform.position, this.selfMoveDirection);
        Laya.Vector3.normalize(this.selfMoveDirection, this.selfMoveDirection);
        this.selfUnicycleSpeed = 0x1;
        this.activeState = 0xa;
        this.boneArray = [{
          "meshNode": this.selfMeshRootNode,
          "component": this
        }];
        this.leftDistance = _0x576441.leftDistance;
        this.rightDistance = _0x576441.rightDistance;
        this.ceshi = [];
        this.onTriggerArray = [];
        this.onTriggerIponeState = 0xa;
        this.isLevelEndActiveState = 0x0;
        this.levelEndTime = 0x0;
        this.levelEndTimeMax = _0x576441.winTime;
        this.isTrigger = false;
        this.isGameEnd = false;
        this.diaoLuo = false;
        this.isFaceRay = false;
        this.cameraRotState = 0xa;
        this.taitou = true;
        this.e3Node = _0x3c2b14.getNodeByName(this.owner, "E3");
        this.e3Node.active = false;
        this.shuziState = 0xa;
        this.resetDongWu();
      }
      ["resetDongWu"]() {
        var _0x508c4b = '';
        var _0x4c44c3 = _0x576441.getUserData("shopData");
        for (let _0x5e1cf4 = 0x0; _0x5e1cf4 < _0x4c44c3.length; _0x5e1cf4++) {
          if (_0x4c44c3[_0x5e1cf4].playerId == _0x576441.slefPlayerId) {
            _0x508c4b = _0x4c44c3[_0x5e1cf4].name;
          }
        }
        for (let _0x46ddaa = 0x0; _0x46ddaa < this.dongwuRoot.numChildren; _0x46ddaa++) {
          var _0x416868 = this.dongwuRoot.getChildAt(_0x46ddaa);
          if (_0x416868.name == _0x508c4b) {
            _0x416868.active = true;
          } else {
            _0x416868.active = false;
          }
        }
      }
      ["roleFreeTouchDown"](_0x15e41e) {
        if (0xa == this.activeState) {
          this.lastMouseX = Laya.stage.mouseX;
          this.lastMouseY = Laya.stage.mouseY;
          if (this.boneArray.length) {
            this.curPosX = this.boneArray[0x0].meshNode.transform.localPositionX;
            this.curRotaY = this.boneArray[0x0].meshNode.transform.localRotationEulerY;
            this.curRotaZ = this.boneArray[0x0].meshNode.transform.localRotationEulerZ;
          }
          this.isMouseDown = true;
        }
        if (0x14 == this.activeState && 0x14 == this.huanRaoActiveState) {
          this.lastMouseX = Laya.stage.mouseX;
          this.lastMouseY = Laya.stage.mouseY;
          this.curPosX = _0x303db9.levelManager.lujingRotate.transform.localPositionX;
          this.curRotaY = _0x303db9.levelManager.lujingRotate.transform.localRotationEulerY;
          this.curRotaZ = _0x303db9.levelManager.lujingRotate.transform.localRotationEulerZ;
          this.isMouseDown = true;
        }
        if (!(0x1e != this.activeState && 0x28 != this.activeState)) {
          this.lastMouseX = Laya.stage.mouseX;
          this.lastMouseY = Laya.stage.mouseY;
          if (this.boneArray.length) {
            this.curPosX = this.boneArray[0x0].meshNode.transform.localPositionX;
            this.curRotaY = this.boneArray[0x0].meshNode.transform.localRotationEulerY;
            this.curRotaZ = this.boneArray[0x0].meshNode.transform.localRotationEulerZ;
          }
          this.isMouseDown = true;
        }
      }
      ["roleFreeTouchUp"](_0x563001) {
        if (0x1 == this.isMouseDown) {
          this.selfMoveData = [];
          this.isMouseDown = false;
        }
      }
      ["AuToMove"]() {
        if (0xa == this.activeState || 0x28 == this.activeState) {
          var _0x584d86 = Laya.stage.mouseX - this.lastMouseX;
          if (this.isMouseDown) {
            this.curPosX -= _0x584d86 * _0x576441.huanDongSpeed * _0x576441.frameOffsetValue;
            this.curPosX = this.Clamp(this.curPosX, this.leftDistance, this.rightDistance);
            this.curRotaY -= _0x584d86 * _0x576441.RotateSpeed * _0x576441.frameOffsetValue;
            this.curRotaY = this.Clamp(this.curRotaY, -_0x576441.playerRotate, _0x576441.playerRotate);
            this.boneArray[0x0].meshNode.transform.localRotationEulerY = this.curRotaY;
            this.curRotaY += 0.1 * (0x0 - this.curRotaY);
          } else {
            this.boneArray[0x0].meshNode.transform.localRotationEulerY += 0.1 * (0x0 - this.boneArray[0x0].meshNode.transform.localRotationEulerY) * _0x576441.frameOffsetValue;
          }
          var _0x3c4320 = new Laya.Vector3(this.curPosX, 0x0, 0x0);
          var _0x136dcc = new Laya.Vector3(0x0, 0x0, 0x0);
          var _0x8a14a7 = new Laya.Vector3(this.boneArray[0x0].meshNode.transform.localPositionX, 0x0, 0x0);
          Laya.Vector3.lerp(_0x8a14a7, _0x3c4320, 0.15, _0x136dcc);
          this.boneArray[0x0].meshNode.transform.localPositionX = _0x136dcc.x;
          this.lastMouseX = Laya.stage.mouseX;
          this.lastMouseY = Laya.stage.mouseY;
        } else if (0x14 == this.activeState && 0x14 == this.huanRaoActiveState) {
          if (this.isMouseDown) {
            _0x584d86 = Laya.stage.mouseX - this.lastMouseX;
            this.curRotaZ += _0x584d86 * _0x576441.RotateSpeed * _0x576441.frameOffsetValue;
            _0x303db9.levelManager.lujingRotate.transform.localRotationEulerZ = this.curRotaZ;
          }
          this.lastMouseX = Laya.stage.mouseX;
          this.lastMouseY = Laya.stage.mouseY;
        }
      }
      ["Clamp"](_0x245317, _0x14b8ce, _0x154c4b) {
        if (_0x245317 < _0x14b8ce) {
          _0x245317 = _0x14b8ce;
        }
        if (_0x245317 > _0x154c4b) {
          _0x245317 = _0x154c4b;
        }
        return _0x245317;
      }
      ["huanraoState"]() {
        this.activeState = 0x14;
        this.lastMouseX = Laya.stage.mouseX;
        this.lastMouseY = Laya.stage.mouseY;
        this.boneArray[0x0].meshNode.transform.localPositionX = 0x0;
        this.boneArray[0x0].meshNode.transform.localRotationEulerY = 0x0;
        this.boneArray[0x0].meshNode.transform.localRotationEulerZ = 0x0;
        this.curPosX = this.boneArray[0x0].meshNode.transform.localPositionX;
        this.curRotaY = this.boneArray[0x0].meshNode.transform.localRotationEulerY;
        this.curRotaZ = this.boneArray[0x0].meshNode.transform.localRotationEulerZ;
        this.huanRaoActiveState = 0xa;
      }
      ["huanraoEnd"]() {
        this.huanRaoActiveState = 0x1e;
      }
      ["huanRaoUpdate"]() {
        switch (this.huanRaoActiveState) {
          case 0xa:
            this.orangeMeshPos = this.boneArray[0x0].meshNode.transform.localPosition.clone();
            this.orangeMeshRot = this.boneArray[0x0].meshNode.transform.localRotationEuler.clone();
            this.orangeMeshLerp = 0x0;
            this.orangeMeshSpeed = 0.1;
            this.huanRaoActiveState = 0xb;
            break;
          case 0xb:
            this.orangeMeshLerp += _0x576441.frameOffsetValue * this.orangeMeshSpeed;
            if (this.orangeMeshLerp >= 0x1) {
              this.orangeMeshLerp = 0x1;
              this.huanRaoActiveState = 0x14;
            }
            var _0x2ead77 = new Laya.Vector3();
            Laya.Vector3.lerp(this.orangeMeshPos, new Laya.Vector3(), this.orangeMeshLerp, _0x2ead77);
            this.boneArray[0x0].meshNode.transform.localPosition = _0x2ead77;
            var _0x2169e2 = new Laya.Vector3();
            Laya.Vector3.lerp(this.orangeMeshRot, new Laya.Vector3(), this.orangeMeshLerp, _0x2169e2);
            this.boneArray[0x0].meshNode.transform.localRotationEuler = _0x2169e2;
            break;
          case 0x14:
            break;
          case 0x1e:
            this.orangeMeshRot = _0x303db9.levelManager.lujingRotate.transform.localRotationEuler.clone();
            this.orangeMeshLerp = 0x0;
            this.orangeMeshSpeed = 0.1;
            this.huanRaoActiveState = 0x1f;
            break;
          case 0x1f:
            this.orangeMeshLerp += _0x576441.frameOffsetValue * this.orangeMeshSpeed;
            if (this.orangeMeshLerp >= 0x1) {
              this.orangeMeshLerp = 0x1;
              this.huanRaoActiveState = 0x28;
              this.activeState = 0xa;
              this.lastMouseX = Laya.stage.mouseX;
              this.lastMouseY = Laya.stage.mouseY;
              this.boneArray[0x0].meshNode.transform.localPositionX = 0x0;
              this.boneArray[0x0].meshNode.transform.localRotationEulerY = 0x0;
              this.boneArray[0x0].meshNode.transform.localRotationEulerZ = 0x0;
              this.curPosX = this.boneArray[0x0].meshNode.transform.localPositionX;
              this.curRotaY = this.boneArray[0x0].meshNode.transform.localRotationEulerY;
              this.curRotaZ = this.boneArray[0x0].meshNode.transform.localRotationEulerZ;
            }
            _0x2169e2 = new Laya.Vector3();
            Laya.Vector3.lerp(this.orangeMeshRot, new Laya.Vector3(), this.orangeMeshLerp, _0x2169e2);
            _0x303db9.levelManager.lujingRotate.transform.localRotationEuler = _0x2169e2;
        }
      }
      ["moveUpdate"]() {
        if (_0x303db9.levelManager.gameFill) {
          if (_0x303db9.levelManager.getPlayerAniSpeed()) {
            _0x303db9.levelManager.setPlayerAniSpeed(0x0);
          }
        } else if (!_0x303db9.levelManager.gameWin && !this.isGameEnd && 0x1e != this.activeState) {
          this.AuToMove();
          if (_0x303db9.levelManager.getPlayerAniSpeed()) {
            this.isMouseDownCamearOrange = _0x303db9.mainCameraNodeEulerX.transform.localRotationEuler.clone();
            this.isMouseDownCamearTarget = _0x303db9.isMouseDownEulerX.transform.localRotationEuler.clone();
            var _0x297c5f = new Laya.Vector3();
            Laya.Vector3.lerp(this.isMouseDownCamearOrange, this.isMouseDownCamearTarget, _0x576441.cameraTaiTouSpeed, _0x297c5f);
            _0x303db9.mainCameraNodeEulerX.transform.localRotationEuler = _0x297c5f.clone();
          } else if (0x0 == _0x303db9.levelManager.getPlayerAniSpeed() && !this.isMouseDown) {
            this.isMouseDownCamearOrange = _0x303db9.mainCameraNodeEulerX.transform.localRotationEuler.clone();
            this.isMouseDownCamearTarget = _0x303db9.isNotMouseDownEulerX.transform.localRotationEuler.clone();
            _0x297c5f = new Laya.Vector3();
            Laya.Vector3.lerp(this.isMouseDownCamearOrange, this.isMouseDownCamearTarget, _0x576441.cameraDiTouSpeed, _0x297c5f);
            _0x303db9.mainCameraNodeEulerX.transform.localRotationEuler = _0x297c5f.clone();
          }
          if (this.isMouseDown && 0x0 == _0x303db9.levelManager.getPlayerAniSpeed() && 0x0 == this.isTrigger && 0x0 == this.isFaceRay) {
            _0x303db9.levelManager.setPlayerAniSpeed(0x1);
          } else if (!this.isMouseDown && _0x303db9.levelManager.getPlayerAniSpeed()) {
            _0x303db9.levelManager.setPlayerAniSpeed(0x0);
          } else if (0x1 == this.isTrigger && _0x303db9.levelManager.getPlayerAniSpeed()) {
            _0x303db9.levelManager.setPlayerAniSpeed(0x0);
          } else if (0x1 == this.isFaceRay && _0x303db9.levelManager.getPlayerAniSpeed()) {
            _0x303db9.levelManager.setPlayerAniSpeed(0x0);
          }
          this.cameraRot();
        }
      }
      ["cameraRot"]() {
        switch (this.cameraRotState) {
          case 0xa:
            break;
          case 0x14:
            this.taitou = true;
        }
      }
      ["addFollowArray"](_0x5ec139) {
        let _0x3475da = null;
        switch (_0x5ec139) {
          case 0x1:
            _0x3475da = _0x303db9.models.getChildByName("collectible_Small");
            break;
          case 0x2:
            _0x3475da = _0x303db9.models.getChildByName("collectible_Big");
        }
        if (_0x3475da) {
          var _0x440493 = Laya.Sprite3D.instantiate(_0x3475da, _0x303db9.levelManager.owner);
          var _0x6bb3a9 = _0x440493.addComponent(_0x10175d);
          var _0x4ed06a = null;
          if (this.boneArray[0x2] && this.boneArray[0x2].component) {
            _0x4ed06a = _0x6bb3a9;
          }
          this.boneArray.splice(0x1, 0x0, {
            "meshNode": _0x440493,
            "component": _0x6bb3a9
          });
          let _0xa382b5 = {
            "boneArray": this.boneArray,
            "fllowNode": this.selfMeshRootNode,
            "fllowComponent": this,
            "playerMesh": this.selfMeshRootNode,
            "playerComponent": this,
            "rigidBody": this.selfCharacter,
            "rigidBodyNode": this.selfMeshRootNode,
            "lastComponent": _0x4ed06a,
            "index": 0x1
          };
          _0x6bb3a9.initData(_0xa382b5);
          if (this.boneArray[0x2] && this.boneArray[0x2].component) {
            let _0x3ac3b6 = {
              "boneArray": this.boneArray,
              "fllowNode": _0x440493,
              "fllowComponent": _0x6bb3a9,
              "playerMesh": this.selfMeshRootNode,
              "playerComponent": this,
              "rigidBody": _0x6bb3a9.selfRigid,
              "rigidBodyNode": _0x440493
            };
            this.boneArray[0x2].component.resetDate(_0x3ac3b6);
          }
        }
      }
      ["onTriggerEnterDianJu"](_0x13b958) {
        for (let _0x29d95f = 0x1; _0x29d95f < this.boneArray.length; _0x29d95f++) {
          if (this.boneArray[_0x29d95f]) {
            this.boneArray[_0x29d95f].component.vis = false;
          }
        }
      }
      ["onTriggerEnterIpone"](_0x15b56e) {
        var _0x3d2e97 = _0x15b56e.owner.parent;
        var _0x158347 = _0x3d2e97.getComponent(_0x2d23e9);
        this.isTrigger = true;
        this.onTriggerArray.push({
          "obj": _0x3d2e97,
          "component": _0x158347,
          "trigger": _0x15b56e.owner
        });
      }
      ["roleBodyEscapeTriggerIpone"](_0x1ce4ee) {
        var _0x14a342 = _0x1ce4ee.owner.parent;
        for (let _0x55fb50 = 0x0; _0x55fb50 < this.onTriggerArray.length; _0x55fb50++) {
          if (_0x14a342 == this.onTriggerArray[_0x55fb50].obj) {
            this.onTriggerArray[_0x55fb50].component.vis = false;
            this.onTriggerArray.splice(_0x55fb50, 0x1);
          }
        }
        if (0x0 == this.onTriggerArray.length) {
          this.isTrigger = false;
        }
      }
      ["onTriggerIponeInit"]() {
        this.onTriggerIponeTime = _0x576441.onTriggerIponeTimeMax;
        this.onTriggerIponeTimeMax = _0x576441.onTriggerIponeTimeMax;
        this.onTriggerIponeState = 0x14;
      }
      ["onTriggerIponeUpdate"]() {
        switch (this.onTriggerIponeState) {
          case 0xa:
            this.onTriggerIponeTime = 0x0;
            this.onTriggerIponeTimeMax = _0x576441.onTriggerIponeTimeMax;
            this.onTriggerIponeState = 0x14;
            break;
          case 0x14:
            this.onTriggerIponeTime += _0x576441.frameOffsetValue;
            if (this.onTriggerIponeTime >= this.onTriggerIponeTimeMax) {
              this.onTriggerIponeTime = 0x0;
              this.onTriggerIponeState = 0x1e;
            }
            break;
          case 0x1e:
            for (let _0x543df2 = 0x0; _0x543df2 < this.onTriggerArray.length; _0x543df2++) {
              if (this.onTriggerArray[_0x543df2].component.vis) {
                this.onTriggerIponeState = 0xa;
                this.onTriggerArray[_0x543df2].component.chongDian();
                this.subtractFollowArray();
                if (this.isGameEnd) {
                  _0x576441.getGameLastValue = this.onTriggerArray[_0x543df2].component.xiShu;
                }
                if (this.boneArray.length <= 0x1 && !this.isGameEnd) {
                  this.onTriggerArray[_0x543df2].component.chongDianFail();
                }
              }
            }
        }
      }
      ["faceRayUpdate"]() {
        var _0x20132a = new Laya.Vector3();
        Laya.Vector3.subtract(this.selfForwardNode.transform.position, this.selfFaceNode.transform.position, _0x20132a);
        Laya.Vector3.normalize(_0x20132a, _0x20132a);
        let _0x2b7515 = this.selfFaceNode.transform.position.clone();
        let _0x53d142 = new Laya.Ray(_0x2b7515, _0x20132a);
        var _0x568ce9 = Laya.Vector3.distance(this.selfForwardNode.transform.position.clone(), this.selfFaceNode.transform.position.clone());
        let _0x4284d2 = [];
        _0x303db9.currentScene.physicsSimulation.rayCastAll(_0x53d142, _0x4284d2, _0x568ce9);
        var _0x2b715d = false;
        if (_0x4284d2.length) {
          for (let _0x5452c9 = 0x0; _0x5452c9 < _0x4284d2.length; _0x5452c9++) {
            if (-0x1 != _0x4284d2[_0x5452c9].collider.owner.name.indexOf("CenterBody")) {
              _0x2b715d = true;
            }
            if (-0x1 != _0x4284d2[_0x5452c9].collider.owner.name.indexOf("RotateBody1")) {
              var _0x3d363f = _0x4284d2[_0x5452c9].collider.owner.parent.parent;
              var _0x1f65db = _0x4284d2[_0x5452c9].collider.owner;
              var _0x507675 = null;
              if (_0x3d363f) {
                let _0x257bce = {
                  "normal": _0x4284d2[_0x5452c9].normal.clone(),
                  "point": _0x4284d2[_0x5452c9].point.clone(),
                  "playerNormal": _0x20132a.clone(),
                  "rootNode": _0x1f65db
                };
                (_0x507675 = _0x3d363f.getComponent(_0x194c24)).chupeng(_0x257bce);
                if (0xa != _0x507675.activeState) {
                  _0x2b715d = false;
                }
              }
            }
          }
        }
        this.isFaceRay = _0x2b715d;
      }
      ["dropUpdate"]() {
        for (let _0x2b8602 = 0x0; _0x2b8602 < this.debugSprites.length; _0x2b8602++) {
          this.debugSprites[_0x2b8602].destroy();
          this.debugSprites.splice(_0x2b8602, 0x1);
        }
        if (this.diaoLuo) {
          switch (this.diaoLuoState) {
            case 0xa:
              this.diaoLuoOrangeRot = this.selfMeshRootNode.transform.localRotationEuler.clone();
              this.diaoLuoTargetRot = new Laya.Vector3(_0x576441.dropRotValue, 0x0, 0x0);
              this.diaoLuoLerp = 0x0;
              this.diaoLuoState = 0x14;
              break;
            case 0x14:
              this.diaoLuoLerp += 0.02 * _0x576441.frameOffsetValue;
              if (this.diaoLuoLerp >= 0x1) {
                this.diaoLuoLerp = 0x1;
                this.diaoLuoState = 0x1e;
              }
              var _0x1146d3 = new Laya.Vector3();
              Laya.Vector3.lerp(this.diaoLuoOrangeRot, this.diaoLuoTargetRot, this.diaoLuoLerp, _0x1146d3);
              this.selfMeshRootNode.transform.localRotationEuler = new Laya.Vector3(_0x1146d3.x, this.diaoLuoOrangeRot.y, this.diaoLuoOrangeRot.z);
          }
          let _0x21a2aa = this.selfMeshRootNode.transform.position.clone();
          _0x23aed3 = new Laya.Vector3();
          Laya.Vector3.subtract(this.selfForwardNode.transform.position.clone(), this.selfFaceNode.transform.position.clone(), _0x23aed3);
          Laya.Vector3.normalize(_0x23aed3, _0x23aed3);
          let _0x4ae8e4 = this.selfMoveCheck(_0x23aed3, 0.1, 0.1, 0.1);
          _0x21a2aa.x += _0x4ae8e4.x;
          _0x21a2aa.z += _0x4ae8e4.z;
          _0x21a2aa.y += _0x4ae8e4.y;
          this.selfMeshRootNode.transform.position = _0x21a2aa;
        } else {
          var _0x23aed3 = new Laya.Vector3();
          Laya.Vector3.subtract(this.selfDropForwardNode.transform.position.clone(), this.selfFaceDropNode.transform.position.clone(), _0x23aed3);
          Laya.Vector3.normalize(_0x23aed3, _0x23aed3);
          let _0x51be7c = this.selfFaceDropNode.transform.position;
          let _0x190b01 = new Laya.Ray(_0x51be7c, _0x23aed3);
          var _0x512b8c = Laya.Vector3.distance(this.selfDropForwardNode.transform.position.clone(), this.selfFaceDropNode.transform.position.clone());
          let _0x52f390 = [];
          _0x303db9.currentScene.physicsSimulation.rayCastAll(_0x190b01, _0x52f390, _0x512b8c);
          if (_0x52f390.length) {
            for (let _0x30a5b2 = 0x0; _0x30a5b2 < _0x52f390.length; _0x30a5b2++) {
              if (-0x1 != _0x52f390[_0x30a5b2].collider.owner.name.indexOf("diaoLuo")) {
                _0x303db9.levelManager.gameFill = true;
                this.diaoLuo = true;
                this.diaoLuoState = 0xa;
                this.isLevelEndActiveState = 0x63;
              }
            }
          }
        }
      }
      ["subtractFollowArray"]() {
        if (this.boneArray[0x2]) {
          if (this.boneArray[0x2].component) {
            let _0xc004b3 = {
              "boneArray": this.boneArray,
              "fllowNode": this.selfMeshRootNode,
              "fllowComponent": this,
              "playerMesh": this.selfMeshRootNode,
              "playerComponent": this,
              "rigidBody": this.selfCharacter,
              "rigidBodyNode": this.selfMeshRootNode
            };
            this.boneArray[0x2].component.resetDate(_0xc004b3);
            this.boneArray[0x1].meshNode.destroy();
            this.boneArray.splice(0x1, 0x1);
          }
        } else if (this.boneArray[0x1]) {
          this.boneArray[0x1].meshNode.destroy();
          this.boneArray.splice(0x1, 0x1);
          if (this.isGameEnd) {
            _0x303db9.levelManager.gameWin = true;
          } else {
            _0x303db9.levelManager.gameFill = true;
          }
        } else if (this.isGameEnd) {
          _0x303db9.levelManager.gameWin = true;
        } else {
          _0x303db9.levelManager.gameFill = true;
        }
        if (this.isLevelEnd) {
          _0x303db9.levelManager.setPlayerAniSpeed(0x0);
          this.isLevelEndActiveState = 0xa;
        } else if (_0x303db9.levelManager.gameWin) {
          this.isLevelEndActiveState = 0x1e;
          _0x303db9.levelManager.setPlayerAniSpeed(0x0);
        } else if (_0x303db9.levelManager.gameFill) {
          this.isLevelEndActiveState = 0x63;
          _0x303db9.levelManager.setPlayerAniSpeed(0x0);
        }
      }
      ["onTriggerQieHuanYiCe"](_0x238792) {
        var _0x56aa98 = _0x238792.owner.parent;
        _0x56aa98.getChildByName("qiehuan").active = false;
        switch (_0x56aa98.getChildByName("yice").getChildAt(0x0).name) {
          case "zuo":
            this.leftDistance = -0.2;
            break;
          case "you":
            this.rightDistance = 0.2;
        }
      }
      ["onTriggerQieHuan"](_0xb4a895) {
        var _0x472456 = _0xb4a895.owner.parent;
        var _0x474fbb = _0xb4a895.owner;
        _0x472456.getChildByName("yice").active = false;
        var _0x22914a = _0x474fbb.getChildAt(0x0).name;
        _0x303db9.levelManager.playerAni.play(_0x22914a);
        _0x303db9.levelManager.zhenshu = 0x2;
        switch (_0x474fbb.getChildAt(0x1).name) {
          case "zuo":
            this.leftDistance = 0.8;
            break;
          case "you":
            this.rightDistance = -0.8;
        }
      }
      ["onTriggerQieHuanEnd"](_0x23449b) {
        this.leftDistance = _0x576441.leftDistance;
        this.rightDistance = _0x576441.rightDistance;
      }
      ["rotateQieHuanState"](_0x26517d) {
        this.activeState = 0x1e;
        var _0x224d2a = _0x26517d.owner;
        _0x224d2a._parent._parent.getChildByName("Pencil_Arrow_Rotate").active = false;
        var _0xa0e2cc = _0x224d2a.getChildByName("aniName").getChildAt(0x0);
        this.lastAniName = _0x224d2a.getChildByName("endAniName").getChildAt(0x0).name;
        this.lastAniNode = _0x224d2a.getChildByName("endRotate");
        this.stateAniNode = _0x224d2a.getChildByName("stateRotate");
        this.qiehuanAniName = _0xa0e2cc.name;
        this.qianbiJieShu = _0x224d2a.getChildByName("jieshu");
        _0x303db9.levelManager.playerAni.play(this.qiehuanAniName);
        _0x303db9.levelManager.zhenshu = 0x2;
        this.jingtouxianzhi = true;
        this.rotateActiveState = 0xa;
        this.rotateActiveState1 = 0xa;
        this.rotateTime = 0x0;
        this.rotateTimeMax = 0x1;
        this.selfRoldRootNode.transform.localRotationEuler = new Laya.Vector3(0x4, -0x8, 0x0);
        this.selfMeshRootNode.transform.localRotationEuler = new Laya.Vector3(0x0, 0x0, 0x0);
        this.selfMeshRootNode.transform.localPosition = new Laya.Vector3();
        this.selfMeshLocalRotationEulerOrange = this.selfMeshRootNode.transform.localRotationEuler.clone();
        this.selfMeshLocalPositionEulerOrange = this.selfMeshRootNode.transform.localPosition.clone();
        this.selfMeshLocalRotationEulerTarget = new Laya.Vector3();
        this.selfMeshLerp = 0x0;
      }
      ["rotateQieHuanUpdate"]() {
        if (0x1e == this.activeState) {
          if (0xa == this.rotateActiveState || 0x14 == this.rotateActiveState) {
            switch (this.rotateActiveState1) {
              case 0xa:
                this.stateAniNodeOrgentRot = _0x303db9.cameraRoot.transform.rotation.clone();
                this.stateAniNodetargetRot = this.stateAniNode.transform.rotation.clone();
                this.EulerYPosOrgent = _0x303db9.cameraAnimator.transform.localPosition.clone();
                if (this.qianbiJieShu) {
                  this.EulerYPosTarget = new Laya.Vector3();
                  this.EulerYRotTarget = new Laya.Vector3();
                } else {
                  this.stateAniNodetargetRot = this.stateAniNode.getChildByName("CameraRoot").transform.rotation.clone();
                  this.EulerYPosTarget = this.stateAniNode.getChildByName("CameraRoot").getChildByName("AnimatorRoot").transform.localPosition.clone();
                }
                this.stateAniRotLerp = 0x0;
                this.rotateActiveState1 = 0x14;
                break;
              case 0x14:
                this.stateAniRotLerp += 0.02 * _0x576441.frameOffsetValue;
                if (this.stateAniRotLerp >= 0x1) {
                  this.stateAniRotLerp = 0x1;
                  this.rotateActiveState1 = 0x1e;
                }
                var _0x543f1a = new Laya.Quaternion();
                Laya.Quaternion.slerp(this.stateAniNodeOrgentRot, this.stateAniNodetargetRot, this.stateAniRotLerp, _0x543f1a);
                _0x303db9.cameraRoot.transform.rotation = _0x543f1a.clone();
                var _0x215f62 = new Laya.Vector3();
                Laya.Vector3.lerp(this.EulerYPosOrgent, this.EulerYPosTarget, this.stateAniRotLerp, _0x215f62);
                _0x303db9.cameraAnimator.transform.localPosition = _0x215f62.clone();
            }
          }
          switch (this.rotateActiveState) {
            case 0x0:
              this.stateRotateOrgentRot = _0x303db9.levelManager.lujingPlayer.transform.rotation.clone();
              this.stateRotateTargetRot = this.stateAniNode.transform.rotation.clone();
              this.stateRotateLerp = 0x0;
              this.rotateActiveState = 0x5;
              break;
            case 0x5:
              this.stateRotateLerp += 0.05 * _0x576441.frameOffsetValue;
              if (this.stateRotateLerp >= 0x1) {
                this.stateRotateLerp = 0x1;
                this.rotateActiveState = 0xa;
                _0x303db9.levelManager.playerAni.play(this.qiehuanAniName);
                _0x303db9.levelManager.zhenshu = 0x2;
                _0x303db9.levelManager.playerAni.speed = 0x1;
              }
              _0x543f1a = new Laya.Quaternion();
              Laya.Quaternion.slerp(this.stateRotateOrgentRot, this.stateRotateTargetRot, this.stateRotateLerp, _0x543f1a);
              this.selfMeshRootNode.transform.rotation = _0x543f1a.clone();
              break;
            case 0xa:
              this.selfMeshLerp += 0.05 * _0x576441.frameOffsetValue;
              if (this.selfMeshLerp >= 0x1) {
                this.selfMeshLerp = 0x1;
              }
              _0x543f1a = new Laya.Vector3();
              Laya.Vector3.lerp(this.selfMeshLocalRotationEulerOrange, this.selfMeshLocalRotationEulerTarget, this.selfMeshLerp, _0x543f1a);
              this.selfMeshRootNode.transform.localRotationEuler = _0x543f1a.clone();
              var _0x5d8069 = new Laya.Vector3();
              Laya.Vector3.lerp(this.selfMeshLocalPositionEulerOrange, new Laya.Vector3(), this.selfMeshLerp, _0x5d8069);
              this.selfMeshRootNode.transform.localPosition = _0x5d8069.clone();
              this.rotateTime += _0x576441.frameOffsetValue;
              var _0x4ba8d7 = _0x303db9.levelManager.playerAni.getCurrentAnimatorPlayState().normalizedTime;
              _0x543f1a = new Laya.Vector3();
              Laya.Vector3.lerp(new Laya.Vector3(), new Laya.Vector3(0x0, 0x0, 0x2d0), _0x4ba8d7, _0x543f1a);
              _0x303db9.levelManager.lujingRotate.transform.localRotationEuler = _0x543f1a.clone();
              if (this.rotateTime >= this.rotateTimeMax && _0x4ba8d7 >= 0x1) {
                this.rotateActiveState = 0x1e;
              }
              break;
            case 0x14:
              if ((_0x4ba8d7 = _0x303db9.levelManager.playerAni.getCurrentAnimatorPlayState().normalizedTime) >= 0x1) {
                this.rotateActiveState = 0x1e;
              }
              _0x543f1a = new Laya.Vector3();
              Laya.Vector3.lerp(new Laya.Vector3(), new Laya.Vector3(0x0, 0x0, 0x2d0), _0x4ba8d7, _0x543f1a);
              _0x303db9.levelManager.lujingRotate.transform.localRotationEuler = _0x543f1a.clone();
              break;
            case 0x1e:
              this.selfRoldRootNode.transform.localRotationEuler = new Laya.Vector3();
              this.lastlujingRotate = _0x303db9.levelManager.lujingRotate.transform.localRotationEuler.clone();
              _0x303db9.levelManager.lujingRotate.transform.localRotationEuler = new Laya.Vector3();
              this.lastAniNodeOrgentRot = _0x303db9.levelManager.lujingPlayer.transform.rotation.clone();
              this.lastAniNodetargetRot = this.lastAniNode.transform.rotation.clone();
              this.lastAniRotLerp = 0x0;
              this.rotateActiveState = 0x28;
              _0x303db9.levelManager.setPlayerAniSpeed(0x0);
              this.EulerYPosOrgent = _0x303db9.cameraAnimator.transform.localPosition.clone();
              this.stateAniNodeOrgentRot = _0x303db9.cameraRoot.transform.rotation.clone();
              break;
            case 0x28:
              this.lastAniRotLerp += 0.02 * _0x576441.frameOffsetValue;
              if (this.lastAniRotLerp >= 0x1) {
                this.lastAniRotLerp = 0x1;
                this.rotateActiveState = 0x32;
              }
              _0x543f1a = new Laya.Quaternion();
              Laya.Quaternion.slerp(this.lastAniNodeOrgentRot, this.lastAniNodetargetRot, this.lastAniRotLerp, _0x543f1a);
              _0x303db9.levelManager.lujingPlayer.transform.rotation = _0x543f1a.clone();
              var _0x1beb6c = new Laya.Quaternion();
              Laya.Quaternion.slerp(this.stateAniNodeOrgentRot, this.lastAniNodetargetRot, this.lastAniRotLerp, _0x1beb6c);
              _0x303db9.cameraRoot.transform.rotation = _0x1beb6c.clone();
              _0x215f62 = new Laya.Vector3();
              Laya.Vector3.lerp(this.EulerYPosOrgent, new Laya.Vector3(), this.lastAniRotLerp, _0x215f62);
              _0x303db9.cameraAnimator.transform.localPosition = _0x215f62.clone();
              break;
            case 0x32:
              this.lastMouseX = Laya.stage.mouseX;
              this.lastMouseY = Laya.stage.mouseY;
              this.boneArray[0x0].meshNode.transform.localPositionX = 0x0;
              this.boneArray[0x0].meshNode.transform.localRotationEulerY = 0x0;
              this.boneArray[0x0].meshNode.transform.localRotationEulerZ = 0x0;
              this.curPosX = this.boneArray[0x0].meshNode.transform.localPositionX;
              this.curRotaY = this.boneArray[0x0].meshNode.transform.localRotationEulerY;
              this.curRotaZ = this.boneArray[0x0].meshNode.transform.localRotationEulerZ;
              _0x303db9.levelManager.playerAni.play(this.lastAniName);
              _0x303db9.levelManager.zhenshu = 0x2;
              this.activeState = 0x28;
              if (this.qianbiJieShu) {
                this.activeState = 0xa;
              }
          }
        }
      }
      ["gameEndState"]() {
        this.isGameEnd = true;
        this.e3Node.active = true;
        _0x576441.getGameEndArrayValue = this.boneArray.length - 0x1;
        this.originPos = this.boneArray[0x0].meshNode.transform.localPosition.clone();
        this.originRot = this.boneArray[0x0].meshNode.transform.localRotationEuler.clone();
        this.gameEndLerp = 0x0;
        this.gameEndActiveState = 0xa;
        _0x303db9.mainCameraAnimator.play("xuanzhuan");
        _0x303db9.levelManager.selfUnicycleSpeed = _0x576441.selfUnicycleSpeed;
      }
      ["gameEndUpdate"]() {
        switch (this.gameEndActiveState) {
          case 0xa:
            this.gameEndLerp += 0.1 * _0x576441.frameOffsetValue;
            if (this.gameEndLerp >= 0x1) {
              this.gameEndLerp = 0x1;
              this.gameEndActiveState = 0x14;
            }
            _0x303db9.levelManager.setPlayerAniSpeed(0x1);
            var _0x287bad = new Laya.Vector3();
            var _0x47ac7b = new Laya.Vector3();
            Laya.Vector3.lerp(this.originPos, new Laya.Vector3(), this.gameEndLerp, _0x287bad);
            Laya.Vector3.lerp(this.originRot, new Laya.Vector3(), this.gameEndLerp, _0x47ac7b);
            this.boneArray[0x0].meshNode.transform.localPosition = _0x287bad;
            this.boneArray[0x0].meshNode.transform.localRotationEuler = _0x47ac7b;
        }
      }
      ["isLevelEndState"](_0x557526) {
        this.isLevelEnd = true;
        this.leveEndNode = _0x557526.owner.parent;
        this.leveEndFxTime = 0x0;
        this.leveEndFxTimeMax = _0x576441.leveEndFxTimeMax;
        this.leveEndFx = true;
      }
      ["isLevelEndUpdate"]() {
        switch (this.isLevelEndActiveState) {
          case 0xa:
            this.aniNode = _0x3c2b14.getNodeByName(this.leveEndNode, "MacBook");
            this.levelEndTimeMax = _0x576441.winTimeEnd;
            if (this.aniNode) {
              this.leveEndAni = this.aniNode.getComponent(Laya.Animator);
              if (this.leveEndAni) {
                this.leveEndAni.play("S13");
              }
            }
            this.isLevelEndActiveState = 0xb;
            break;
          case 0xb:
            if (this.leveEndFx && (this.leveEndFxTime += _0x576441.frameOffsetValue, this.leveEndFxTime >= this.leveEndFxTimeMax)) {
              this.leveEndFx = false;
              var _0x1a80b3 = this.leveEndNode.getChildByName("Fx");
              for (let _0x2f67d6 = 0x0; _0x2f67d6 < _0x1a80b3.numChildren; _0x2f67d6++) {
                var _0x10cdd8 = _0x1a80b3.getChildAt(0x0);
                var _0x4d41df = _0x303db9.levelManager.createFx(_0x10cdd8.name, _0x10cdd8, _0x10cdd8.transform.position.clone());
                _0x4d41df.transform.localRotationEuler = new Laya.Vector3();
                _0x303db9.levelManager.txDestroyAddArray(_0x4d41df, 0xc8);
              }
            }
            this.levelEndTime += _0x576441.frameOffsetValue;
            if (this.levelEndTime >= this.levelEndTimeMax) {
              this.levelEndTime = 0x0;
              this.isLevelEndActiveState = 0x28;
            }
            break;
          case 0x1e:
            this.levelEndTime += _0x576441.frameOffsetValue;
            if (this.levelEndTime >= this.levelEndTimeMax) {
              this.levelEndTime = 0x0;
              this.isLevelEndActiveState = 0x28;
            }
            break;
          case 0x28:
            _0x4952b3.ShowUIPanel("Box", false);
            this.isLevelEndActiveState = 0x32;
            break;
          case 0x32:
            break;
          case 0x63:
            this.levelEndTimeMax = _0x576441.FailTimeEnd;
            this.isLevelEndActiveState = 0x64;
            break;
          case 0x64:
            this.levelEndTime += _0x576441.frameOffsetValue;
            if (this.levelEndTime >= this.levelEndTimeMax) {
              this.levelEndTime = 0x0;
              this.isLevelEndActiveState = 0x6e;
            }
            break;
          case 0x6e:
            _0x4952b3.ShowUIPanel("Fail", false);
            this.isLevelEndActiveState = 0x78;
        }
      }
      ["shuZiUpdate"]() {
        var _0x49f7f0 = this.boneArray.length - 0x1 + '';
        var _0x53a99a = _0x49f7f0.length;
        switch (this.shuziState) {
          case 0xa:
            if (_0x53a99a >= 0x2) {
              this.shuziRoot.transform.localPosition = this.two.transform.localPosition.clone();
              this.shuziState = 0x14;
            }
            break;
          case 0x14:
            if (0x1 == _0x53a99a) {
              this.shuziRoot.transform.localPosition = this.one.transform.localPosition.clone();
              this.shuziState = 0xa;
            }
        }
        for (let _0x5f43cc = 0x0; _0x5f43cc < this.shuziNodeRoot.numChildren; _0x5f43cc++) {
          var _0x96d1c6 = this.shuziNodeRoot.getChildAt(_0x5f43cc);
          if (_0x5f43cc < _0x53a99a) {
            _0x96d1c6.active = true;
            var _0x3c3c83 = '' + _0x49f7f0.slice(_0x53a99a - _0x5f43cc - 0x1, _0x53a99a - _0x5f43cc);
            for (let _0x410ebb = 0x0; _0x410ebb < _0x96d1c6.numChildren; _0x410ebb++) {
              if (_0x96d1c6.getChildAt(_0x410ebb).name == _0x3c3c83) {
                _0x96d1c6.getChildAt(_0x410ebb).active = true;
              } else {
                _0x96d1c6.getChildAt(_0x410ebb).active = false;
              }
            }
          } else {
            _0x96d1c6.active = false;
          }
        }
      }
      ["selfMoveCheck"](_0x19c131, _0x366050, _0x26e678, _0x8030fa) {
        let _0x5f5d86 = _0x19c131.x * _0x576441.frameOffsetValue * _0x366050;
        let _0x171f56 = _0x19c131.z * _0x576441.frameOffsetValue * _0x26e678;
        let _0xe9ab31 = _0x19c131.y * _0x576441.frameOffsetValue * _0x8030fa;
        return new Laya.Vector3(_0x5f5d86, _0xe9ab31, _0x171f56);
      }
      ["genSuiUpdate"]() {
        for (let _0x628a54 = 0x1; _0x628a54 < this.boneArray.length; _0x628a54++) {
          var _0x13547d = this.boneArray[_0x628a54].component;
          if (!_0x13547d.vis) {
            this.boneArray.splice(_0x628a54);
            break;
          }
          _0x13547d.arrayIndex = _0x628a54;
          _0x13547d.update();
        }
      }
    }
    class _0x5f13b6 extends Laya.Script3D {
      constructor() {
        super();
        this.levelState = 0xa;
      }
      ["onEnable"]() {
        this.isTest = false;
        this.carryAll = false;
        this.initLevel();
      }
      ["onUpdate"]() {
        _0x576441.gameRunState();
        this.gameUpdate();
        if (_0x303db9.map) {
          _0x303db9.map.onUpdate();
        }
        if (_0x4952b3.failUI) {
          _0x4952b3.failUI.uiUpdate();
        }
        if (_0x4952b3.pushUI) {
          _0x4952b3.pushUI.uiUpdate();
        }
        if (_0x4952b3.gameUI) {
          _0x4952b3.gameUI.uiUpdate();
        }
        if (_0x4952b3.shopUI) {
          _0x4952b3.shopUI.uiUpdate();
        }
        if (_0x4952b3.pushTwoUI) {
          _0x4952b3.pushTwoUI.uiUpdate();
        }
      }
      ["initLevel"]() {
        this.actionLayerIndex = 0x0;
        this.actionState = 0xa;
        this.txDestroyArray = [];
      }
      ["setActiionState"](_0x48377e) {
        this.actionState = _0x48377e;
      }
      ["gameStart"]() {
        if (0x14 == this.actionState) {
          if (this.isStartLevel) {
            this.setActiionState(0x28);
          } else {
            this.setActiionState(0x1e);
          }
          this.actionTime = 0x0;
          _0x4952b3.gameUI.showReadyUI(false);
          _0x4952b3.gameUI.showLevelUI(true);
          if (window.SdkUtil.luzhiKaishi) {
            window.SdkUtil.luzhiKaishi(null);
          }
        }
      }
      ["gameUpdate"]() {
        _0x576441.frameOffsetValue = 0.08 * Laya.timer.delta;
        if (_0x576441.frameOffsetValue > 0x32) {
          _0x576441.frameOffsetValue = 0x1;
        }
        _0x576441.frameOffsetValue = _0x576441.frameOffsetValue * _0x576441.gameTimeScale;
        switch (this.actionState) {
          case 0xa:
            this.initSceneEnter();
            this.setActiionState(0xf);
            break;
          case 0xf:
            this.initSceneUpdate();
            if (this.isNextState) {
              this.setActiionState(0x14);
            }
            break;
          case 0x14:
            break;
          case 0x19:
            this.levelWaitUpdate();
            break;
          case 0x1e:
            this.gameStartEnter();
            this.setActiionState(0x23);
            break;
          case 0x23:
            this.gameStartUpdate();
            if (this.isNextState) {
              this.setActiionState(0x28);
            }
            break;
          case 0x28:
            this.levelGameEnter();
            this.setActiionState(0x2d);
            break;
          case 0x2d:
            this.levelGameUpdate();
            if (this.isNextState) {
              this.setActiionState(0x32);
            }
            break;
          case 0x32:
            this.levelFinishEnter();
            this.setActiionState(0x37);
            break;
          case 0x37:
            this.levelFinishUpdate();
            if (this.isNextState) {
              this.setActiionState(0x3c);
            }
            break;
          case 0x3c:
            this.levelEndEnter();
            this.setActiionState(0x41);
            break;
          case 0x41:
            this.levelEndUpdate();
            if (this.isNextState) {
              this.setActiionState(0x46);
            }
        }
        this.txDestroyUpdate();
        if (_0x576441.baseCooldown >= 0x0) {
          _0x576441.baseCooldown -= _0x576441.frameOffsetValue;
        }
        if (_0x576441.shopCooldown >= 0x0) {
          _0x576441.shopCooldown -= _0x576441.frameOffsetValue;
        }
      }
      ["touchMouseDown"](_0x265a99) {
        this.isTouched = true;
        if (this.playerControl) {
          this.playerControl.getComponent(_0x21f8fa).roleFreeTouchDown(_0x265a99);
        }
      }
      ["touchMouseMove"](_0x515bc9) {}
      ["touchMouseUp"](_0x4e92d0) {
        this.isTouched = false;
        if (this.playerControl) {
          this.playerControl.getComponent(_0x21f8fa).roleFreeTouchUp(_0x4e92d0);
        }
        this.isGameTouched = false;
      }
      ["scenePosToScreenPos"](_0x22c362) {
        var _0x5d6a84 = new Laya.Vector3();
        var _0x520691 = new Laya.Vector3();
        _0x303db9.mainCamera.worldToViewportPoint(_0x22c362, _0x520691);
        _0x5d6a84.x = _0x520691.x;
        _0x5d6a84.y = _0x520691.y;
        _0x5d6a84.z = _0x520691.z;
        return _0x5d6a84;
      }
      ["cameraRayScene"](_0x53796b, _0x26716d) {
        var _0x3cd805 = [];
        if (_0x303db9.mainCamera) {
          var _0x13cb4c = new Laya.Point();
          _0x13cb4c.x = _0x53796b * Laya.stage.clientScaleX;
          _0x13cb4c.y = _0x26716d * Laya.stage.clientScaleY;
          var _0xa87f62 = new Laya.Ray(new Laya.Vector3(0x0, 0x0, 0x0), new Laya.Vector3(0x0, 0x0, 0x0));
          _0x303db9.mainCamera.viewportPointToRay(_0x13cb4c, _0xa87f62);
          _0x303db9.currentScene.physicsSimulation.rayCastAll(_0xa87f62, _0x3cd805);
        }
        return _0x3cd805;
      }
      ["gameVibrate"]() {
        if (window.wx) {
          wx.vibrateShort();
        } else if (window.swan) {
          swan.vibrateShort();
        } else if (window.navigator && window.navigator.vibrate) {
          window.navigator.vibrate(0x28);
        }
      }
      ["initSceneEnter"]() {
        this.isNextState = false;
        this.tempInit();
        this.initSceneData();
        this.initOriginRole();
        this.initLevelLight();
      }
      ["initLevelLight"]() {
        if (SdkUtil.GetConfig && 0x0 == SdkUtil.GetConfig("openlight")) {
          let _0x1ac568 = _0x3c2b14.getNodeByName(this.owner, "Directional Light");
          if (_0x1ac568) {
            _0x1ac568.shadowMode = Laya.ShadowMode.Hard;
            _0x1ac568.shadowDistance = 0x1e;
            _0x1ac568.shadowResolution = 0x800;
            _0x1ac568.shadowStrength = 0.7;
          }
        }
      }
      ["testLevel"]() {}
      ["initSceneUpdate"]() {
        this.isNextState = true;
        this.levelPreludeState;
      }
      ["levelWaitUpdate"]() {}
      ["gameStartEnter"]() {
        this.isNextState = false;
        this.startGameState = 0x14;
        this.startGameTime = 0x0;
      }
      ["gameStartUpdate"]() {
        this.isNextState = true;
        switch (this.startGameState) {
          case 0xa:
            break;
          case 0x14:
            this.startGameState = 0x1e;
        }
      }
      ["initSceneData"]() {
        var _0x186ec7 = this.owner.getChildByName("daoju");
        for (let _0xad432f = 0x0; _0xad432f < _0x186ec7.numChildren; _0xad432f++) {
          if (-0x1 != (_0x4f36ef = _0x186ec7.getChildAt(_0xad432f)).name.indexOf("PhonePlacer Left-Right Moveable")) {
            if (_0x5d1a9b = _0x3c2b14.getNodeByName(_0x4f36ef, "iponeCon")) {
              let _0x165c0d = {
                "parent": _0x4f36ef
              };
              _0x5d1a9b.addComponent(_0x2d23e9).initData(_0x165c0d);
            }
          } else if (-0x1 != _0x4f36ef.name.indexOf("Pivot4")) {
            _0x4f36ef.addComponent(_0x194c24).initData();
          } else if (-0x1 != _0x4f36ef.name.indexOf("Phone")) {
            if (_0x5d1a9b = _0x3c2b14.getNodeByName(_0x4f36ef, "iponeCon")) {
              let _0x78e61d = {
                "parent": _0x4f36ef
              };
              _0x5d1a9b.addComponent(_0x2d23e9).initData(_0x78e61d);
            }
          } else if (-0x1 != _0x4f36ef.name.indexOf("ipad")) {
            if (_0x5d1a9b = _0x3c2b14.getNodeByName(_0x4f36ef, "ipadAnim")) {
              let _0x18ffff = {
                "parent": _0x4f36ef
              };
              _0x5d1a9b.addComponent(_0x2d23e9).initData(_0x18ffff);
            }
          }
        }
        var _0x3715ba = this.owner.getChildByName("finish");
        for (let _0x10015b = 0x0; _0x10015b < _0x3715ba.numChildren; _0x10015b++) {
          var _0x4f36ef;
          var _0x5d1a9b;
          if (-0x1 != (_0x4f36ef = _0x3715ba.getChildAt(_0x10015b)).name.indexOf("LevelEndFactor Variant")) {
            if (_0x5d1a9b = _0x3c2b14.getNodeByName(_0x4f36ef, "iponeCon")) {
              let _0x4ab1f9 = {
                "parent": _0x4f36ef
              };
              _0x5d1a9b.addComponent(_0x2d23e9).initData(_0x4ab1f9);
            }
          }
        }
        this.levelGameInit();
        this.initLevelRole();
      }
      ["initLevelRole"]() {}
      ["initOriginRole"]() {
        if (this.playerControl) {
          this.playerControl.destroy();
        }
        let _0x53eb44 = _0x303db9.models.getChildByName("player1");
        this.playerControl = Laya.Sprite3D.instantiate(_0x53eb44, this.owner);
        this.playerShowNode = this.playerControl.getChildByName("RoleNode");
        this.selfMeshRootNode = this.playerShowNode.getChildByName("MeshNode");
        this.playerFaceNode = this.selfMeshRootNode.getChildByName("FaceCheck");
        this.playerForwardNode = this.playerFaceNode.getChildByName("ForwardNode");
        this.lujingPlayer = this.owner.getChildByName("PlayerPos");
        this.lujingRotate = this.lujingPlayer.getChildByName("lujingRotate");
        this.playerPos = this.lujingRotate.getChildByName("playerPos");
        this.playerControl.transform.position = this.playerPos.transform.position;
        this.playerControl.addComponent(_0x21f8fa).initData({
          "roleType": 0x0
        });
        this.roleCheckBody = this.playerShowNode.getChildByName("BodyCheck");
        this.cameraTransformPos = _0x303db9.mainCameraTranslate.transform.localPosition.clone();
        this.zhenshu = 0x0;
        this.playerTouchOffsetX = 0x0;
        this.playerTouchOffsetY = 0x0;
        this.playerTouchMoveSpeed = 0.01;
        this.playerMoveOffsetX = 0x0;
        this.playerMoveOffsetY = 0x0;
      }
      ["levelGameEnter"]() {
        this.isNextState = false;
      }
      ["levelGameUpdate"]() {
        switch (this.levelGameState) {
          case 0xa:
            this.levelGameState = 0x14;
        }
        this.levelPlayerControlUpdate();
        this.eventCameraUpdate();
      }
      ["levelFinishEnter"]() {
        this.isNextState = false;
      }
      ["levelFinishUpdate"]() {
        this.levelFinishState;
      }
      ["levelEndEnter"]() {
        this.isNextState = false;
      }
      ["levelEndUpdate"]() {}
      ["levelGameInit"]() {}
      ["levelPlayerControlUpdate"]() {
        if (this.playerControl && 0x0 == _0x4952b3.gameUI.isHuanDong && !this.playerAni) {
          this.playerAni = this.lujingPlayer.getComponent(Laya.Animator);
          this.playerAni.speed = _0x576441.PlayerMoveSpeed;
          this.playerAni.play("L" + _0x576441.levelSceneId);
        }
        if (this.playerControl && 0x0 == _0x4952b3.gameUI.isHuanDong) {
          var _0x11ba74 = this.playerControl.transform.position.clone();
          var _0x51d42d = this.playerPos.transform.position.clone();
          if (Laya.Vector3.distance(_0x11ba74, _0x51d42d) < 0x3 || 0x0 == this.zhenshu) {
            var _0x334c0d = new Laya.Vector3();
            Laya.Vector3.lerp(_0x11ba74, _0x51d42d, _0x576441.playerMoveAnilerp * _0x576441.PlayerMoveSpeed, _0x334c0d);
            this.playerControl.transform.position = _0x334c0d;
            var _0x2c6ffb = this.playerControl.transform.rotation.clone();
            var _0x560e04 = this.playerPos.transform.rotation.clone();
            var _0x4bbc56 = new Laya.Quaternion();
            Laya.Quaternion.slerp(_0x2c6ffb, _0x560e04, _0x576441.playerMoveAnilerp * _0x576441.PlayerMoveSpeed, _0x4bbc56);
            this.playerControl.transform.rotation = _0x4bbc56;
          }
          this.playerControl.getComponent(_0x21f8fa).moveUpdate();
        }
        if (0x0 != this.zhenshu) {
          this.zhenshu -= 0x1;
        }
        if (_0x303db9.cameraRoot && 0x0 == this.levelCameraType && !this.guideLockCamera && 0x0 == this.gameFill) {
          var _0x3dbcb7 = this.lujingPlayer.transform.position.clone();
          var _0x271bcc = this.selfMeshRootNode.transform.position.clone();
          var _0x372f8f = new Laya.Vector3(_0x3dbcb7.x, _0x271bcc.y, _0x3dbcb7.z);
          var _0x520032 = _0x303db9.cameraRoot.transform.position.clone();
          if (Laya.Vector3.distance(_0x520032, _0x372f8f) < 0xa) {
            switch (this.playerControl.getComponent(_0x21f8fa).activeState) {
              case 0x14:
                var _0x5848e7 = new Laya.Vector3();
                Laya.Vector3.lerp(_0x520032, _0x3dbcb7, _0x576441.camearMoveLerp, _0x5848e7);
                var _0x8d27d1 = _0x303db9.cameraRoot.transform.rotationEuler.clone();
                var _0x492c13 = this.lujingPlayer.transform.rotationEuler.clone();
                var _0x44c2de = new Laya.Quaternion();
                Laya.Quaternion.slerp(_0x8d27d1, _0x492c13, _0x576441.camearRotateLerp, _0x44c2de);
                var _0xd4c573 = new Laya.Vector3(_0x8d27d1.x, _0x44c2de.y, _0x8d27d1.z);
                _0x303db9.cameraRoot.transform.position = new Laya.Vector3(_0x5848e7.x, _0x5848e7.y, _0x5848e7.z);
                _0x303db9.cameraRoot.transform.rotationEuler = _0xd4c573;
                break;
              case 0x1e:
              case 0x28:
                _0x5848e7 = new Laya.Vector3();
                Laya.Vector3.lerp(_0x520032, _0x3dbcb7, _0x576441.camearMoveLerp, _0x5848e7);
                _0x8d27d1 = _0x303db9.cameraRoot.transform.rotation.clone();
                _0x492c13 = this.lujingPlayer.transform.rotation.clone();
                _0x44c2de = new Laya.Quaternion();
                Laya.Quaternion.slerp(_0x8d27d1, _0x492c13, _0x576441.camearRotateLerp, _0x44c2de);
                _0x303db9.cameraRoot.transform.position = _0x5848e7.clone();
                if (0xa != this.playerControl.getComponent(_0x21f8fa).rotateActiveState && 0x14 != this.playerControl.getComponent(_0x21f8fa).rotateActiveState && 0x1e != this.playerControl.getComponent(_0x21f8fa).rotateActiveState && 0x28 != this.playerControl.getComponent(_0x21f8fa).rotateActiveState) {
                  _0x303db9.cameraRoot.transform.rotation = _0x44c2de;
                }
                break;
              default:
                _0x5848e7 = new Laya.Vector3();
                Laya.Vector3.lerp(_0x520032, _0x3dbcb7, _0x576441.camearMoveLerp, _0x5848e7);
                _0x8d27d1 = _0x303db9.cameraRoot.transform.rotationEuler.clone();
                _0x492c13 = this.lujingPlayer.transform.rotationEuler.clone();
                _0x44c2de = new Laya.Quaternion();
                Laya.Quaternion.slerp(_0x8d27d1, _0x492c13, _0x576441.camearRotateLerp, _0x44c2de);
                _0xd4c573 = new Laya.Vector3(_0x8d27d1.x, _0x44c2de.y, _0x8d27d1.z);
                _0x303db9.cameraRoot.transform.position = new Laya.Vector3(_0x5848e7.x, _0x372f8f.y, _0x5848e7.z);
                _0x303db9.cameraRoot.transform.rotationEuler = _0xd4c573;
            }
          }
        }
      }
      ["tempInit"]() {
        this.levelCameraType = 0x0;
        this.levelCameraYValue = 0x0;
        this.levelCameraFieldValue = 0x3c;
        this.gameFill = false;
        this.gameWin = false;
        var _0xa03ebb = _0x576441.getUserData("shopData");
        for (let _0x287c8b = 0x0; _0x287c8b < _0xa03ebb.length; _0x287c8b++) {
          var _0x457eaa = _0xa03ebb[_0x287c8b].playerId;
          if (_0xa03ebb[_0x287c8b].isTrue) {
            _0x576441.slefPlayerId = _0x457eaa;
          }
        }
        _0x576441.getGoldValue = 0x0;
        _0x576441.getGameLastValue = 0x0;
        _0x576441.getGameEndArrayValue = 0x0;
        this.selfUnicycleSpeed = 0x1;
      }
      ["eventCameraUpdate"]() {
        this.levelEventState;
      }
      ["setPlayerAniSpeed"](_0x3b29f1 = 0x1) {
        if (this.playerAni) {
          this.playerAni.speed = _0x576441.PlayerMoveSpeed * this.selfUnicycleSpeed * _0x3b29f1;
        }
      }
      ["getPlayerAniSpeed"]() {
        if (this.playerAni) {
          return this.playerAni.speed;
        }
      }
      ["resetShopData"]() {
        if (this.playerControl) {
          this.playerControl.getComponent(_0x21f8fa).resetDongWu();
        }
      }
      ["getCoin"](_0x10dcaa, _0x439f39) {
        _0x576441.getGoldValue += 0x1;
        var _0x5cbdb2 = _0x10dcaa.owner.transform.position.clone();
        var _0x1e9980 = this.scenePosToScreenPos(_0x5cbdb2);
        var _0x1fa185 = {
          "x": _0x4952b3.gameUI.goldPos.x,
          "y": _0x4952b3.gameUI.goldPos.y
        };
        var _0xdacded = {
          "orange": _0x1e9980,
          "target": _0x4952b3.gameUI.goldRoot.localToGlobal(new Laya.Point(_0x1fa185.x, _0x1fa185.y))
        };
        _0x4952b3.showGoldTips(_0xdacded);
        _0x576441.setUserData("gold", _0x576441.getUserData("gold") + 0x1);
        _0x576441.saveData();
        _0x4952b3.gameUI.refreshGoldUI();
      }
      ["createFx"](_0x22fdcd, _0x5c9051, _0x1ae363) {
        let _0x4da0c5 = _0x303db9.models.getChildByName("fx").getChildByName(_0x22fdcd);
        let _0x23667f = null;
        (_0x23667f = _0x5c9051 ? Laya.Sprite3D.instantiate(_0x4da0c5, _0x5c9051) : Laya.Sprite3D.instantiate(_0x4da0c5, this.owner)).transform.position = _0x1ae363 || _0x5c9051.transform.position;
        return _0x23667f;
      }
      ["txDestroyAddArray"](_0x188546, _0x5d33b7) {
        this.txDestroyArray.push({
          "tx": _0x188546,
          "time": 0x0,
          "maxTime": _0x5d33b7
        });
      }
      ["txDestroyUpdate"]() {
        for (let _0x31411c = 0x0; _0x31411c < this.txDestroyArray.length; _0x31411c++) {
          this.txDestroyArray[_0x31411c].time += _0x576441.frameOffsetValue;
          if (this.txDestroyArray[_0x31411c].time >= this.txDestroyArray[_0x31411c].maxTime) {
            this.txDestroyArray[_0x31411c].tx.destroy();
            this.txDestroyArray.splice(_0x31411c, 0x1);
            _0x31411c--;
          }
        }
      }
    }
    class _0x303db9 {
      static ["RandomInt"](_0x255351, _0x2dd4fa) {
        return Math.round(Math.random() * (_0x2dd4fa - _0x255351) + _0x255351);
      }
      static ["RandomFloat"](_0x29b7ce, _0x23443a) {
        return Math.random() * (_0x23443a - _0x29b7ce) + _0x29b7ce;
      }
      static ["toTwoTimeFormat"](_0x58891b) {
        var _0x4d7b2d = Math.floor(_0x58891b % 0xe10 / 0x3c);
        var _0x5ad99f = Math.floor(_0x58891b % 0xe10 % 0x3c);
        if (_0x4d7b2d < 0xa) {
          _0x4d7b2d = "0" + _0x4d7b2d;
        }
        if (_0x5ad99f < 0xa) {
          _0x5ad99f = "0" + _0x5ad99f;
        }
        return _0x4d7b2d + ":" + _0x5ad99f;
      }
      static ["toTimeFormat"](_0xfd04b4) {
        var _0x465bb2 = Math.floor(_0xfd04b4 / 0xe10);
        var _0x672b6 = Math.floor(_0xfd04b4 % 0xe10 / 0x3c);
        var _0x3fd50d = Math.floor(_0xfd04b4 % 0xe10 % 0x3c);
        if (_0x465bb2 < 0xa) {
          _0x465bb2 = "0" + _0x465bb2;
        }
        if (_0x672b6 < 0xa) {
          _0x672b6 = "0" + _0x672b6;
        }
        if (_0x3fd50d < 0xa) {
          _0x3fd50d = "0" + _0x3fd50d;
        }
        return _0x465bb2 + ":" + _0x672b6 + ":" + _0x3fd50d;
      }
      static ["getWeekOfYear"]() {
        var _0x233b82 = new Date();
        var _0x391f5d = new Date(_0x233b82.getFullYear(), 0x0, 0x1);
        var _0x5d614f = _0x391f5d.getDay();
        var _0x20e65b = 0x1;
        if (0x0 != _0x5d614f) {
          _0x20e65b = 0x7 - _0x5d614f + 0x1;
        }
        _0x391f5d = new Date(_0x233b82.getFullYear(), 0x0, 0x1 + _0x20e65b);
        var _0x50179d = Math.ceil((_0x233b82.valueOf() - _0x391f5d.valueOf()) / 0x5265c00);
        return Math.ceil(_0x50179d / 0x7) + 0x1;
      }
      static ["getDayZeroTime"]() {
        var _0x3ecd83 = new Date();
        _0x3ecd83.setHours(0x0);
        _0x3ecd83.setMinutes(0x0);
        _0x3ecd83.setSeconds(0x0);
        _0x3ecd83.setMilliseconds(0x0);
        return _0x3ecd83.getTime();
      }
      static ["getAngleVector"](_0x54d759, _0x558364) {
        let _0x54613d = Laya.Vector3.dot(_0x54d759, _0x558364);
        let _0x3337ca = Laya.Vector3.scalarLength(_0x54d759) + Laya.Vector3.scalarLength(_0x558364);
        return Math.acos(_0x54613d / _0x3337ca);
      }
      static ["getRotateByRightCoordinate"](_0x4df51f, _0x5839e0) {
        let _0xa28346 = Laya.Vector3();
        Laya.Vector3.cross(_0x4df51f, _0x5839e0, _0xa28346);
        return _0xa28346;
      }
      static ["joystickMove"](_0x42250f, _0x2aaa5e) {
        if (Laya.Vector3.scalarLength(_0x42250f) < 0.1) {
          return new Laya.Vector3();
        }
        let _0x351ab9 = Math.atan2(-_0x42250f.z, _0x42250f.x) - 0.5 * Math.PI;
        let _0x1553e9 = _0x2aaa5e.x * Math.cos(_0x351ab9) + _0x2aaa5e.z * Math.sin(_0x351ab9);
        let _0x44e8bc = _0x2aaa5e.z * Math.cos(_0x351ab9) - _0x2aaa5e.x * Math.sin(_0x351ab9);
        return new Laya.Vector3(_0x1553e9, 0x0, _0x44e8bc);
      }
      static ["debugCheck"](_0x299556, _0x19723b) {}
      static ["onSceneLoaded"](_0x4e3aac, _0x39a71b) {
        if (null != _0x303db9.currentScene) {
          _0x303db9.currentScene.destroy();
        }
        var _0x472d51 = _0x576441.getUserData("activeLevel");
        window.SdkUtil.TDGuanQia(0x1, _0x472d51 + 0x1);
        _0x472d51 %= _0x576441.levelMax;
        _0x576441.levelSceneId = _0x472d51 + 0x1;
        if (_0x576441.levelSceneId > 0xa) {
          _0x576441.levelSceneId = _0x303db9.RandomInt(0x1, 0xa);
        }
        var _0x982ad8 = "res/Scene/Conventional/Level" + _0x576441.levelSceneId + ".ls";
        Laya.loader.create(_0x982ad8, Laya.Handler.create(this, function () {
          _0x303db9.currentScene = Laya.loader.getRes(_0x982ad8);
          if (_0x303db9.currentScene) {
            Laya.stage.addChildAt(_0x303db9.currentScene, 0x0);
            _0x303db9.cameraRoot = _0x303db9.currentScene.getChildByName("CameraRoot");
            _0x303db9.cameraAnimator = _0x303db9.cameraRoot.getChildByName("AnimatorRoot");
            _0x303db9.mainCameraTranslate = _0x303db9.cameraAnimator.getChildByName("TranslateNode");
            _0x303db9.mainCameraNodeEulerY = _0x303db9.mainCameraTranslate.getChildByName("EulerY");
            _0x303db9.mainCameraNodeEulerX = _0x303db9.mainCameraNodeEulerY.getChildByName("EulerX");
            _0x303db9.mainCamera = _0x303db9.mainCameraNodeEulerX.getChildByName("Main Camera");
            _0x303db9.mainFangXiang = _0x303db9.mainCameraNodeEulerX.getChildByName("fangxiang");
            _0x303db9.mainFangXiangA = _0x303db9.mainFangXiang.getChildByName("fangxiangA");
            _0x303db9.isMouseDownEulerX = _0x303db9.mainCameraNodeEulerY.getChildByName("isMouseDownEulerX");
            _0x303db9.isNotMouseDownEulerX = _0x303db9.mainCameraNodeEulerY.getChildByName("isNotMouseDownEulerX");
            _0x303db9.mainCameraAnimator = _0x303db9.cameraAnimator.getComponent(Laya.Animator);
            _0x303db9.levelManager = _0x303db9.currentScene.addComponent(_0x5f13b6);
            _0x4952b3.gameUI.sceneLoadOver();
            if (_0x39a71b) {
              _0x39a71b();
            }
            if (_0x4e3aac) {
              _0x4e3aac.nextGQ;
            }
          } else {
            this.onSceneLoaded(_0x4e3aac, _0x39a71b);
          }
        }));
      }
      static ["DestroyUnusedResources"]() {
        Laya.Resource.destroyUnusedResources();
      }
      static ["ChangeFnt"](_0x5b71ad, _0x5be94e, _0x40e4ef = null) {
        _0x5b71ad.getComponent(MyFont).ChangeFont(_0x5be94e, _0x40e4ef);
      }
      static ["ChangeFntType"](_0x37dab9, _0x5a5b37) {
        _0x37dab9.getComponent(MyFont).ChangeFontType(_0x5a5b37);
      }
      static ["toNotationNumber"](_0x315f3f) {
        var _0x3ab6d0 = Math.floor(_0x315f3f / 0xf4240);
        var _0x2b2d83 = Math.floor(_0x315f3f % 0xf4240 / 0x3e8);
        return _0x3ab6d0 > 0x0 ? _0x3ab6d0 + "." + Math.floor(_0x2b2d83 / 0x64) + "M" : _0x2b2d83 > 0x0 ? _0x2b2d83 + "." + Math.floor(_0x315f3f % 0x3e8 / 0x64) + "K" : _0x315f3f;
      }
      static ["restCameraFocus"](_0x4b8ed9) {
        if (_0x303db9.cameraFocus) {
          _0x303db9.cameraFocus.transform.position = _0x4b8ed9;
        }
      }
      static ["getLevelStepMax"](_0x5c4117) {
        var _0x3d47ef = '';
        var _0x4cbd6f = _0x5c4117 % 0x64;
        if (_0x5c4117 > 0xc8) {
          _0x3d47ef = _0x243707.videoData[_0x4cbd6f].modelName;
        } else if (_0x5c4117 > 0x64) {
          _0x3d47ef = _0x243707.specialData[_0x4cbd6f].modelName;
        }
        if (_0x303db9.models) {
          var _0x3c8c0c = _0x303db9.models.getChildByName(_0x3d47ef);
          if (_0x3c8c0c) {
            return _0x3c8c0c.numChildren;
          }
        }
        return 0x0;
      }
      static ["showCostMoney"](_0x39f4d0, _0x5e02cf) {
        let _0x33f598 = [];
        let _0x44b674 = Math.floor(_0x5e02cf / 0x3e8);
        let _0x89d06a = Math.floor(_0x5e02cf % 0x3e8 / 0x64);
        let _0x4a6ad9 = Math.floor(_0x5e02cf % 0x64 / 0xa);
        let _0x5109eb = _0x5e02cf % 0xa;
        if (_0x44b674 > 0x0) {
          _0x33f598[0x0] = '' + _0x44b674;
          _0x33f598[0x1] = "Dian";
          _0x33f598[0x2] = '' + _0x89d06a;
          _0x33f598[0x3] = "K";
        } else if (_0x89d06a > 0x0) {
          _0x33f598[0x0] = '' + _0x89d06a;
          _0x33f598[0x1] = '' + _0x4a6ad9;
          _0x33f598[0x2] = '' + _0x5109eb;
        } else if (_0x4a6ad9 > 0x0) {
          _0x33f598[0x0] = '' + _0x4a6ad9;
          _0x33f598[0x1] = '' + _0x5109eb;
        } else {
          _0x33f598[0x0] = '' + _0x5109eb;
        }
        let _0x359121 = 0.01 * -(_0x33f598.length - 0x1);
        _0x359121 = _0x39f4d0[0x0].transform.localPositionX;
        for (let _0x49f946 = 0x0; _0x49f946 < _0x39f4d0.length; _0x49f946++) {
          if (_0x49f946 < _0x33f598.length) {
            _0x39f4d0[_0x49f946].active = true;
            for (let _0x3a003e = 0x0; _0x3a003e < _0x39f4d0[_0x49f946].numChildren; _0x3a003e++) {
              let _0x159e62 = _0x39f4d0[_0x49f946].getChildAt(_0x3a003e);
              _0x159e62.active = _0x159e62.name == _0x33f598[_0x49f946];
            }
            _0x39f4d0[_0x49f946].transform.localPositionX = _0x359121 - 0.1 * _0x49f946;
          } else {
            _0x39f4d0[_0x49f946].active = false;
          }
        }
      }
      static ["getInfoByUuid"](_0x3bdf15) {
        let _0x35eee8 = '';
        let _0x3ce0f7 = _0x3bdf15.split('');
        if (_0x3ce0f7[0x0]) {
          _0x35eee8 += _0x3ce0f7[0x0] + "号地皮";
        }
        if (_0x3ce0f7[0x1] > 0x0) {
          _0x35eee8 += "-" + _0x3ce0f7[0x1] + "号装配线";
        }
        if (_0x3ce0f7[0x2] > 0x0) {
          _0x35eee8 += "-" + _0x3ce0f7[0x2] + "号输送带";
        }
        if (_0x3ce0f7[0x3] > 0x0) {
          _0x35eee8 += "-" + _0x3ce0f7[0x3] + "号工人";
        }
        if (_0x3ce0f7[0x4] > 0x0) {
          _0x35eee8 += "-" + _0x3ce0f7[0x4] + "号包装机";
        }
        if (_0x3ce0f7[0x5] > 0x0) {
          _0x35eee8 += "-" + _0x3ce0f7[0x5] + "号仓库";
        }
        if (_0x3ce0f7[0x6] > 0x0) {
          _0x35eee8 += "-" + _0x3ce0f7[0x6] + "号金库";
        }
        if (_0x3ce0f7[0x7] > 0x0) {
          _0x35eee8 += "-" + _0x3ce0f7[0x7] + "号过关位";
        }
        if (_0x3ce0f7[0x8] > 0x0) {
          _0x35eee8 += "-" + _0x3ce0f7[0x8] + "机器人";
        }
        return _0x35eee8;
      }
      static ["getMechineUuidByType"](_0x27cb45, _0x1f77f4) {
        let _0x3342fb = '';
        let _0x4cdc9a = _0x27cb45.split('');
        for (let _0x16d964 = 0x0; _0x16d964 < _0x4cdc9a.length; _0x16d964++) {
          _0x3342fb += _0x16d964 < _0x1f77f4 + 0x1 ? _0x4cdc9a[_0x16d964] : "0";
        }
        return _0x3342fb;
      }
      static ["getMechineTypeIndexById"](_0x2c4230, _0x16baf6) {
        let _0x106e9a = _0x2c4230.split('');
        return _0x16baf6 < _0x106e9a.length ? _0x106e9a[_0x16baf6] : 0x0;
      }
      static ["getStackOffset"](_0x461c6d, _0x2457f9, _0x2a6455, _0x706b1f, _0xfa7eb0, _0x22e216) {
        let _0xf5a4ac = new Laya.Vector3();
        _0xf5a4ac.x = _0x461c6d % _0x2457f9 * _0x706b1f;
        _0xf5a4ac.z = Math.floor(_0x461c6d / _0x2457f9) % _0x2a6455 * _0x22e216;
        _0xf5a4ac.y = Math.floor(_0x461c6d / (_0x2457f9 * _0x2a6455)) * _0xfa7eb0;
        return _0xf5a4ac;
      }
      static ["probeCheck"](_0x1b83ae, _0x56abbd, _0x45fdc2, _0x59ee23) {
        let _0x55d486 = [];
        let _0x4643eb = new Laya.Vector3();
        Laya.Vector3.normalize(_0x56abbd, _0x4643eb);
        let _0x175246 = new Laya.Ray(_0x1b83ae, _0x4643eb);
        _0x303db9.currentScene.physicsSimulation.rayCastAll(_0x175246, _0x55d486, _0x45fdc2);
        if (_0x55d486.length > 0x0) {
          for (let _0x5c222f = 0x0; _0x5c222f < _0x55d486.length; _0x5c222f++) {
            if (-0x1 != _0x55d486[_0x5c222f].collider.owner.name.indexOf(_0x59ee23)) {
              return false;
            }
          }
        }
        return true;
      }
    }
    _0x303db9.models = null;
    _0x303db9.currentScene = null;
    _0x303db9.levelManager = null;
    _0x303db9.map = null;
    _0x303db9.cameraRoot = null;
    _0x303db9.cameraAnimator = null;
    _0x303db9.cameraFocus = null;
    _0x303db9.mainCameraTranslate = null;
    _0x303db9.mainCameraNodeEulerY = null;
    _0x303db9.mainCameraNodeEulerX = null;
    _0x303db9.mainCamera = null;
    _0x303db9.mainCameraAnimator = null;
    _0x303db9.mainFangXiang = null;
    _0x303db9.mainFangXiangA = null;
    _0x303db9.isMouseDownEulerX = null;
    _0x303db9.isNotMouseDownEulerX = null;
    _0x303db9.count = 0x0;
    class _0x5e58f5 extends Laya.Scene {
      constructor() {
        super();
        this.zuijiaGL = {
          0x1: 0x0,
          0x2: 0x0,
          0x3: 0xa,
          0x4: 0x1e,
          0x5: 0x28,
          0x6: 0x32,
          0x7: 0x50,
          0x8: 0x5a,
          0x9: 0x64
        };
        this.dianjiNum = 0x0;
        this.isGetZuiJia = false;
        this.KeyNum = 0x2;
      }
      ["onEnable"]() {
        if (0x64 == SdkUtil.GetConfig("box")) {
          this.KeyNum = _0x303db9.RandomInt(0x1, 0x3);
        }
        this.KeyNum = 0x3;
        _0x28b4c1.playSound("Win");
        this.addBut.visible = false;
        this.closeBut.visible = false;
        this.Init();
        this.closeBut.on(Laya.Event.CLICK, this, this.clickAction);
        this.addBut.on(Laya.Event.CLICK, this, this.clickAction);
        for (let _0x21c849 = 0x1; _0x21c849 <= 0x9; _0x21c849++) {
          this["BoxBtn" + _0x21c849].on(Laya.Event.CLICK, this, function () {
            if (null == this.isOpen[_0x21c849]) {
              if (this.KeyNum > 0x0) {
                this.KeyNum -= 0x1;
                this.GetReward(_0x21c849);
              } else {
                SdkUtil.TDEvent("视频点击宝箱");
                window.SdkUtil.ShowVideo(function (_0x55f35d) {
                  if (0x1 == _0x55f35d) {
                    this.GetReward(_0x21c849);
                    SdkUtil.TDEvent("视频完成宝箱");
                  }
                }.bind(this));
              }
            }
          });
        }
        if (SdkUtil.ShowAddIcon) {
          SdkUtil.ShowAddIcon();
        }
        if (null != this.ADPanel && SdkUtil.ShowNeiZhiAD) {
          SdkUtil.ShowNeiZhiAD(this.ADPanel, 0x3);
        }
      }
      ["clickAction"](_0x5eaec3) {
        if (this.closeBut == _0x5eaec3.currentTarget) {
          _0x28b4c1.playSound("Btn");
          this.destroy();
          _0x4952b3.ShowUIPanel("Win");
          ShowInter();
        }
        if (this.addBut == _0x5eaec3.currentTarget) {
          _0x28b4c1.playSound("Btn");
          SdkUtil.TDEvent("视频点击宝箱购买钥匙");
          window.SdkUtil.ShowVideo(function (_0x15ef1b) {
            if (0x1 == _0x15ef1b) {
              this.KeyNum = 0x3;
              this.UpdateYaoShi();
              SdkUtil.TDEvent("视频完成宝箱购买钥匙");
            }
          }.bind(this));
        }
      }
      ["GetReward"](_0x4e5288) {
        this.isOpen[_0x4e5288] = 0x1;
        this.dianjiNum += 0x1;
        if (0x0 == this.isGetZuiJia && _0x303db9.RandomInt(0x1, 0x64) <= this.zuijiaGL[this.dianjiNum]) {
          this.isGetZuiJia = true;
          if ("coin" == this.zuijiaProp) {
            _0x576441.setUserData("gold", _0x576441.getUserData("gold") + this.zuijiaPropNum);
            _0x576441.saveData();
            this["BoxBtn" + _0x4e5288].getChildByName("open").getChildByName("num").text = '' + this.zuijiaPropNum;
            _0x4952b3.gameUI.refreshGoldUI();
          }
        } else {
          _0x576441.setUserData("gold", _0x576441.getUserData("gold") + this.allGift[_0x4e5288].num);
          _0x576441.saveData();
          _0x4952b3.gameUI.refreshGoldUI();
        }
        this.UpdateYaoShi();
        _0x28b4c1.playSound("Btn");
      }
      ["Init"]() {
        this.isOpen = {};
        this.allGift = {};
        for (let _0x1a33f7 = 0x1; _0x1a33f7 <= 0x9; _0x1a33f7++) {
          this.allGift[_0x1a33f7] = {
            "type": "coin",
            "num": _0x303db9.RandomInt(0x19, 0x96)
          };
        }
        this.zuijiaProp = "coin";
        this.zuijiaPropNum = _0x303db9.RandomInt(0x64, 0xc8);
        for (let _0x271ceb = 0x1; _0x271ceb <= 0x9; _0x271ceb++) {
          if ("coin" == this.allGift[_0x271ceb].type) {
            this["BoxBtn" + _0x271ceb].getChildByName("open").visible = false;
            this["BoxBtn" + _0x271ceb].getChildByName("open").getChildByName("num").text = '' + this.allGift[_0x271ceb].num;
            this["BoxBtn" + _0x271ceb].getChildByName("close").visible = true;
            this["BoxBtn" + _0x271ceb].getChildByName("close").getChildByName("ad").getChildAt(0x0).visible = false;
            this["BoxBtn" + _0x271ceb].getChildByName("close").getChildByName("adbg").visible = false;
          }
        }
      }
      ["UpdateYaoShi"]() {
        var _0xc1ae23 = 0x0;
        var _0x563b87 = this.KeyNum;
        for (let _0x2aa7fd = 0x1; _0x2aa7fd <= 0x9; _0x2aa7fd++) {
          if (null == this.isOpen[_0x2aa7fd]) {
            this["BoxBtn" + _0x2aa7fd].getChildByName("open").visible = false;
            this["BoxBtn" + _0x2aa7fd].getChildByName("close").visible = true;
            if (_0x563b87 > 0x0) {
              this["BoxBtn" + _0x2aa7fd].getChildByName("close").getChildByName("ad").getChildAt(0x0).visible = false;
              this["BoxBtn" + _0x2aa7fd].getChildByName("close").getChildByName("adbg").visible = false;
            } else {
              this["BoxBtn" + _0x2aa7fd].getChildByName("close").getChildByName("ad").getChildAt(0x0).visible = true;
              this["BoxBtn" + _0x2aa7fd].getChildByName("close").getChildByName("adbg").visible = true;
            }
          } else {
            this["BoxBtn" + _0x2aa7fd].getChildByName("open").visible = true;
            this["BoxBtn" + _0x2aa7fd].getChildByName("close").visible = false;
            _0xc1ae23 += 0x1;
          }
        }
        if (_0x563b87 > 0x0) {
          if (0x0 == SdkUtil.GetConfig("boxBtn")) {
            this.addBut.visible = false;
            this.closeBut.visible = false;
          }
        } else {
          this.closeBut.visible = true;
          this.addBut.visible = true;
        }
        if (_0xc1ae23 >= 0x9) {
          this.addBut.visible = false;
          this.closeBut.visible = true;
        }
      }
    }
    class _0x2093c0 extends Laya.Scene {
      constructor() {
        super();
      }
      ["onEnable"]() {
        _0x4952b3.FailUI = this;
        _0x28b4c1.playSound("Fail");
        window.SdkUtil.TDGuanQia(0x3, _0x576441.levelSceneId);
        if (window.SdkUtil.IsShowShareBtn) {
          window.SdkUtil.IsShowShareBtn();
        }
        SdkUtil.ShowChaPing();
        SdkUtil.ShowBanner();
        if (null != this.ADPanel && SdkUtil.ShowNeiZhiAD) {
          SdkUtil.ShowNeiZhiAD(this.ADPanel, 0x3);
        }
        this.freeTest();
        this.abandonBut.on(Laya.Event.MOUSE_DOWN, this, this.abandon);
        this.reviveBut.on(Laya.Event.MOUSE_DOWN, this, this.revive);
      }
      ["abandon"]() {
        _0x28b4c1.playSound("Btn");
        this.reset();
      }
      ["revive"]() {
        _0x28b4c1.playSound("Btn");
        SdkUtil.TDEvent("视频点击跳过关卡");
        window.SdkUtil.ShowVideo(function (_0x38a9b3) {
          if (0x1 == _0x38a9b3) {
            var _0x242e74 = _0x576441.getUserData("activeLevel");
            _0x242e74 += 0x1;
            _0x576441.setUserData("activeLevel", _0x242e74);
            _0x576441.saveData();
            this.reset();
            SdkUtil.TDEvent("视频完成跳过关卡");
          }
        }.bind(this));
      }
      ["reset"]() {
        this.destroy();
        if (_0x4952b3.gameUI) {
          _0x4952b3.gameUI.destroy();
          _0x4952b3.gameUI = null;
          _0x4952b3.FailUI = null;
        }
        _0x4952b3.ShowUIPanel("GameRun", false);
      }
      ["freeTest"]() {
        this.skeleton = new Laya.Skeleton();
        this.skeleton.pos(this.width / 0x2, this.height / 0x2);
        this.skeleton.load("res/longGu/win_fail.sk", Laya.Handler.create(this, this.Start));
        this.longgu.addChild(this.skeleton);
      }
      ["Start"]() {
        this.skeleton.play("fail_01", true);
      }
      ["overAni"]() {
        this.skeleton.play("fail_02", true);
      }
    }
    class _0x166f28 extends Laya.Scene {
      constructor() {
        super();
      }
      ["onEnable"]() {
        window.SdkUtil.ADInit(true);
        if (window.SdkUtil.LoadSubpackage) {
          window.SdkUtil.LoadSubpackage(function () {
            this.firstCallback();
          }.bind(this));
        } else {
          this.firstCallback();
        }
        this.isComplete = false;
        this.frameTime = 0x0;
        this.frameTimeMax = 0xf0;
        Laya.timer.frameLoop(0x1, this, this.frameUpdate);
      }
      ["loadModels"]() {
        Laya.loader.create("res/Scene/Conventional/Model.lh", Laya.Handler.create(this, function () {
          _0x303db9.models = Laya.loader.getRes("res/Scene/Conventional/Model.lh");
          this.refreshProgressBar(0x1);
          this.destroy();
          this.isComplete = true;
          Laya.timer.clear(this, this.frameUpdate);
          _0x4952b3.ShowUIPanel("GameRun");
          if (window.SdkUtil.ReportMonitor) {
            window.SdkUtil.ReportMonitor(0x1);
          }
        }), Laya.Handler.create(this, function (_0x186f4c) {}));
        var _0x50290c = ["font01", "font02", "font03"];
        for (let _0x1c5dbf = 0x0; _0x1c5dbf < _0x50290c.length; _0x1c5dbf++) {
          let _0x58dc78 = new Laya.BitmapFont();
          _0x58dc78.loadFont("First/Font/" + _0x50290c[_0x1c5dbf] + ".fnt", new Laya.Handler(this, function () {
            Laya.Text.registerBitmapFont(_0x50290c[_0x1c5dbf], _0x58dc78);
          }));
        }
      }
      ["Update"]() {}
      ["frameUpdate"]() {
        if (!this.isComplete) {
          this.frameTime += 0x1;
          if (this.frameTime > this.frameTimeMax) {
            this.frameTime -= this.frameTimeMax;
          }
          this.refreshProgressBar(this.frameTime / this.frameTimeMax);
        }
      }
      ["refreshProgressBar"](_0x3c5269) {
        if (this.barValue) {
          this.barValue.width = 0x1f4 * _0x3c5269;
        }
      }
      ["firstCallback"]() {
        _0x243707.loadConfig();
        _0x576441.getData();
        this.loadModels();
      }
    }
    class _0x1497d0 extends Laya.Scene {
      constructor() {
        super();
      }
      ["onEnable"]() {
        if (_0x4952b3.gameUI) {
          _0x4952b3.gameUI.destroy();
        }
        _0x4952b3.gameUI = this;
        this.loadGame = true;
        this.gamePreludeShow = false;
        this.joystickRange = 0x64;
        this.joystickVector = new Laya.Vector2();
        this.showPickTips = [];
        this.createScene();
        this.shopButton.on(Laya.Event.CLICK, this, this.clickAction);
        this.goldButton.on(Laya.Event.CLICK, this, this.clickAction);
        this.touchRoot.on(Laya.Event.MOUSE_DOWN, this, this.touchMouseDown);
        this.touchRoot.on(Laya.Event.MOUSE_MOVE, this, this.touchMouseMove);
        this.touchRoot.on(Laya.Event.MOUSE_UP, this, this.touchMouseUp);
        this.stage.on(Laya.Event.MOUSE_MOVE, this, this.stageMouseMove);
        this.stage.on(Laya.Event.MOUSE_UP, this, this.stageMouseUp);
        this.refreshUI();
        this.isShowPush = true;
        this.offsetX = 0x0;
        this.offsetY = 0x0;
        this.renderRoot = null;
        this.renderCamera = null;
        _0x28b4c1.playMusic("BGM");
        this.roleModel = null;
        this.renderRoot = null;
        this.attachRoot = null;
        this.emojiItems = [];
        this.expTween = [];
      }
      ["onDestroy"]() {
        this.touchRoot.off(Laya.Event.MOUSE_DOWN, this, this.touchMouseDown);
        this.touchRoot.off(Laya.Event.MOUSE_MOVE, this, this.touchMouseMove);
        this.stage.off(Laya.Event.MOUSE_MOVE, this, this.stageMouseMove);
        this.stage.off(Laya.Event.MOUSE_UP, this, this.stageMouseUp);
      }
      ["tempOut"](_0x28d17f) {
        if (this.outInfo) {
          this.outInfo.visible = true;
          this.outInfo.text = _0x28d17f;
        }
      }
      ["clickAction"](_0x5ab170) {
        if (!(this.loadGame || this.gamePreludeShow)) {
          if (this.goldButton == _0x5ab170.currentTarget) {
            _0x28b4c1.playSound("Btn");
            this.freeGoldActive();
          }
          if (this.shopButton == _0x5ab170.currentTarget) {
            _0x28b4c1.playSound("Btn");
            _0x4952b3.ShowUIPanel("Shop", false);
            ShowInter();
          }
        }
      }
      ["refreshUI"]() {
        this.lvLabel.text = _0x576441.getUserData("activeLevel") + 0x1;
        this.refreshGoldUI();
      }
      ["touchMouseDown"](_0x4df9b7) {
        if (!(this.loadGame || this.gamePreludeShow)) {
          _0x303db9.levelManager.touchMouseDown(_0x4df9b7);
          this.gameStartAction();
        }
      }
      ["stageMouseDown"](_0x1be20a) {
        if (!this.loadGame) {
          this.gamePreludeShow;
        }
      }
      ["touchMouseMove"](_0x28e82b) {
        if (!(this.loadGame || this.gamePreludeShow)) {
          if (_0x28e82b.touchId != this.joystickTouchId) {
            _0x303db9.levelManager.touchMouseMove(_0x28e82b);
          }
        }
      }
      ["stageMouseMove"](_0x4c8716) {
        if (!this.loadGame) {
          this.gamePreludeShow;
        }
      }
      ["touchMouseUp"](_0x2d4239) {
        if (!this.loadGame) {
          this.gamePreludeShow;
        }
      }
      ["stageMouseUp"](_0x5a81b4) {
        if (!(this.loadGame || this.gamePreludeShow)) {
          if (_0x5a81b4.touchId != this.joystickTouchId) {
            _0x303db9.levelManager.touchMouseUp(_0x5a81b4);
          }
        }
      }
      ["resetTouch"]() {
        this.offsetX = 0x0;
        this.offsetY = 0x0;
      }
      ["showGameGoldUI"](_0x32b8bd) {
        this.goldRoot.visible = _0x32b8bd;
      }
      ["refreshGoldUI"]() {
        this.goldLabel.text = _0x576441.getUserData("gold");
      }
      ["uiUpdate"]() {
        if (this.roleModel) {
          this.roleModel.transform.rotate(new Laya.Vector3(0x0, 0x1, 0x0), false, false);
        }
      }
      ["createScene"]() {
        _0x303db9.onSceneLoaded();
      }
      ["sceneLoadOver"]() {
        this.loadPanel.visible = false;
        this.loadGame = false;
        if (_0x576441.isShowSignIn) {
          let _0x4f5484 = _0x303db9.getDayZeroTime();
          if (_0x4f5484 > _0x576441.getUserData("rewardDate")) {
            _0x576441.setUserData("rewardDate", _0x4f5484);
            _0x576441.saveData();
            this.showSignInUI();
          }
        }
        Game_ready();
      }
      ["gamePreludeOver"]() {
        this.gamePreludeShow = false;
        this.initPayBuildRender();
      }
      ["showReadyUI"](_0x4a3d01) {
        this.readyRoot.visible = _0x4a3d01;
      }
      ["gameStartAction"]() {
        if (this.isShowPush) {
          this.isShowPush = false;
          this.showPushUI();
          this.showGameTipsUI(false);
          this.showReadTipUI(true);
          this.isHuanDong = true;
        } else if (this.isHuanDong && null == _0x4952b3.pushUI) {
          this.showReadTipUI(false);
          this.isHuanDong = false;
        }
      }
      ["showLevelUI"](_0x331a10) {
        this.gameRoot.visible = _0x331a10;
      }
      ["showShopUI"]() {
        _0x4952b3.ShowUIPanel("Shop", false);
      }
      ["showSignInUI"]() {
        _0x4952b3.ShowUIPanel("SignIn", false);
      }
      ["refreshPushUI"]() {}
      ["showPushUI"]() {
        _0x4952b3.ShowUIPanel("Push", false);
      }
      ["pushOver"]() {
        _0x303db9.levelManager.gameStart();
      }
      ["freeGoldActive"]() {
        SdkUtil.TDEvent("金币视频点击");
        window.SdkUtil.ShowVideo(function (_0x5172bc) {
          if (0x1 == _0x5172bc) {
            _0x576441.setUserData("gold", _0x576441.getUserData("gold") + 0x7d0);
            _0x576441.saveData();
            this.refreshGoldUI();
            SdkUtil.TDEvent("金币视频完成");
          }
        }.bind(this));
      }
      ["showReadTipUI"](_0x3da76b) {
        this.readyTips.visible = _0x3da76b;
      }
      ["showGameTipsUI"](_0x1563f0) {
        this.gameTips.visible = _0x1563f0;
      }
      ["showGameTipUI"](_0x1e8f9a) {
        this.gameTips.visible = _0x1e8f9a;
      }
      ["showGameTypeUI"](_0x2af174) {
        this.goldButton.visible = 0x0 == _0x2af174;
      }
    }
    class _0xa3030a extends Laya.Scene {
      constructor() {
        super();
      }
      ["onEnable"]() {
        _0x4952b3.pushUI = this;
        this.freeTest();
        this.tuisongId = _0x303db9.RandomInt(0x0, 0x5);
        if (_0x576441.slefPlayerId == this.tuisongId) {
          this.tuisongId++;
          if (this.tuisongId > 0x5) {
            this.tuisongId = 0x0;
          }
        }
        let _0xd8edac = _0x576441.getUserData("shopData");
        this.tuiSongName = null;
        for (let _0x57b4ee = 0x0; _0x57b4ee < _0xd8edac.length; _0x57b4ee++) {
          if (_0xd8edac[_0x57b4ee].playerId == this.tuisongId) {
            this.tuiSongName = _0xd8edac[_0x57b4ee].name;
          }
        }
        this.showPlayerUi(this.tuiSongName);
        this.closeButton.on(Laya.Event.CLICK, this, this.clickAction);
        this.adButton.on(Laya.Event.CLICK, this, this.clickAction);
      }
      ["clickAction"](_0x2865f7) {
        if (this.closeButton == _0x2865f7.currentTarget) {
          _0x28b4c1.playSound("Btn");
          this.destroy();
          ShowInter();
        }
        if (this.adButton == _0x2865f7.currentTarget) {
          _0x28b4c1.playSound("Btn");
          SdkUtil.TDEvent("视频点击推送换玩家");
          window.SdkUtil.ShowVideo(function (_0x5295df) {
            if (0x1 == _0x5295df) {
              _0x576441.slefPlayerId = this.tuisongId;
              _0x303db9.levelManager.resetShopData();
              SdkUtil.TDEvent("视频完成推送换玩家");
              if (_0x4952b3.gameUI) {
                this.destroy();
              }
            }
          }.bind(this));
        }
      }
      ["clearData"]() {}
      ["onDisable"]() {
        _0x4952b3.pushUI = null;
        _0x303db9.levelManager.gameStart();
        if (this.showPlayer) {
          this.showPlayer.destroy();
          this.showPlayer = null;
        }
      }
      ["freeTest"]() {
        this.skeleton = new Laya.Skeleton();
        this.skeleton.pos(this.width / 0x2, this.height / 0x2);
        this.skeleton.load("res/longGu/tuisong.sk", Laya.Handler.create(this, this.Start));
        this.longgu.addChild(this.skeleton);
      }
      ["Start"]() {
        this.skeleton.play("tuisong", true);
      }
      ["overAni"]() {}
      ["uiUpdate"]() {}
      ["showPlayerUi"](_0x491cd7) {
        let _0x4ad4bb = null;
        if (!this.showPlayer) {
          this.showPlayer = Laya.Sprite3D.instantiate(_0x303db9.models.getChildByName("show"), _0x303db9.levelManager.owner);
          this.showPlayer.transform.position = new Laya.Vector3(0x2ee0, 0x2ee0, 0x2ee0);
        }
        _0x4ad4bb = this.showPlayer.getChildByName("Camera");
        let _0x421d4b = _0x3c2b14.getNodeByName(this.showPlayer, "domgwu");
        for (let _0x885db7 = 0x0; _0x885db7 < _0x421d4b.numChildren; _0x885db7++) {
          if (_0x421d4b.getChildAt(_0x885db7).name == _0x491cd7) {
            _0x421d4b.getChildAt(_0x885db7).active = true;
          } else {
            _0x421d4b.getChildAt(_0x885db7).active = false;
          }
        }
        _0x4ad4bb.renderTarget = new Laya.RenderTexture(0x104, 0x140, Laya.RenderTextureFormat.R8G8B8A8);
        _0x4ad4bb.clearFlag = 0x0;
        _0x4ad4bb.clearColor = new Laya.Vector4(0x0, 0x0, 0x0, 0x0);
        var _0x4fade4 = new Laya.Texture(_0x4ad4bb.renderTarget, Laya.Texture.DEF_UV);
        this.isShow.graphics.clear();
        this.isShow.graphics.drawTexture(_0x4fade4);
      }
    }
    class _0x56b047 extends Laya.Scene {
      constructor() {
        super();
      }
      ["onEnable"]() {
        _0x4952b3.shopUI = this;
        this.closeButton.on(Laya.Event.MOUSE_DOWN, this, this.fanhui);
        this.initItem();
      }
      ["fanhui"]() {
        _0x28b4c1.playSound("Btn");
        if (this.showPlayer) {
          this.showPlayer.destroy();
        }
        _0x4952b3.shopUI = null;
        _0x303db9.levelManager.resetShopData();
        this.destroy();
        ShowInter();

      }
      ["resetButShow"]() {}
      ["initItem"]() {
        for (let _0x1f2e0b = 0x0; _0x1f2e0b <= 0x5; _0x1f2e0b++) {
          this["item" + _0x1f2e0b].getChildByName("add").on(Laya.Event.CLICK, this, function () {
            _0x28b4c1.playSound("Btn");
            this.addItemBut(_0x1f2e0b);
          });
          this["item" + _0x1f2e0b].getChildByName("buy").on(Laya.Event.CLICK, this, function () {
            _0x28b4c1.playSound("Btn");
            this.byItemBut(_0x1f2e0b);
          });
          this["item" + _0x1f2e0b].getChildByName("use").on(Laya.Event.CLICK, this, function () {
            _0x28b4c1.playSound("Btn");
            this.setItemData(_0x1f2e0b);
          });
        }
        this.initItemData();
      }
      ["initItemData"]() {
        let _0x10bdf2 = _0x576441.getUserData("shopData");
        let _0x2930f6 = _0x576441.getUserData("gold");
        for (let _0x1971f4 = 0x0; _0x1971f4 <= 0x5; _0x1971f4++) {
          let _0x1595c2 = _0x10bdf2[_0x1971f4];
          let _0x3e241b = _0x1595c2.gold;
          let _0xa92432 = _0x1595c2.isTrue;
          let _0xad4843 = _0x1595c2.name;
          if (_0xa92432) {
            _0x576441.slefPlayerId = _0x1595c2.playerId;
            this.showPlayerUi(_0xad4843);
          }
          this["item" + _0x1971f4].getChildByName("buy").visible = _0x3e241b > 0x0;
          if (_0x1971f4 > 0x2 && _0x3e241b) {
            this["item" + _0x1971f4].getChildByName("add").visible = _0x2930f6 < _0x3e241b;
            this["item" + _0x1971f4].getChildByName("buy").visible = _0x2930f6 >= _0x3e241b;
          } else {
            this["item" + _0x1971f4].getChildByName("add").visible = false;
          }
          this["item" + _0x1971f4].getChildByName("use").visible = _0x3e241b == _0xa92432;
          this["item" + _0x1971f4].getChildByName("isUse").visible = _0xa92432;
          this["item" + _0x1971f4].getChildByName("buy").getChildByName("goldLable").text = _0x3e241b;
        }
      }
      ["byItemBut"](_0xdff3f2) {
        let _0x361fdf = _0x576441.getUserData("gold");
        let _0x314664 = _0x576441.getUserData("shopData");
        if (_0x361fdf >= _0x314664[_0xdff3f2].gold) {
          _0x576441.setUserData("gold", _0x576441.getUserData("gold") - _0x314664[_0xdff3f2].gold);
          _0x576441.saveData();
          this.setItemData(_0xdff3f2);
        } else {
          _0x4952b3.ShowUIPanel("ShopTips", false);
        }
      }
      ["addItemBut"](_0x45f535) {
        SdkUtil.TDEvent("视频获得武器");
        window.SdkUtil.ShowVideo(function (_0x286543) {
          if (0x1 == _0x286543) {
            this.setItemData(_0x45f535);
            SdkUtil.TDEvent("视频获得武器");
          }
        }.bind(this));
      }
      ["setItemData"](_0x25e81e) {
        let _0x5855cd = _0x576441.getUserData("shopData");
        for (let _0xa6d82e = 0x0; _0xa6d82e < _0x5855cd.length; _0xa6d82e++) {
          if (_0x5855cd[_0xa6d82e].isTrue) {
            _0x5855cd[_0xa6d82e].isTrue = 0x0;
          }
        }
        _0x5855cd[_0x25e81e].gold = 0x0;
        _0x5855cd[_0x25e81e].isTrue = 0x1;
        _0x576441.setUserData("shopData", _0x5855cd);
        _0x576441.saveData();
        _0x4952b3.gameUI.refreshGoldUI();
        this.initItemData();
      }
      ["showPlayerUi"](_0x3b37a0) {
        let _0xf1ee76 = null;
        if (!this.showPlayer) {
          this.showPlayer = Laya.Sprite3D.instantiate(_0x303db9.models.getChildByName("show"), _0x303db9.levelManager.owner);
          this.showPlayer.transform.position = new Laya.Vector3(0x2ee0, 0x2ee0, 0x2ee0);
        }
        _0xf1ee76 = this.showPlayer.getChildByName("Camera");
        let _0x4fee93 = _0x3c2b14.getNodeByName(this.showPlayer, "domgwu");
        for (let _0x35e450 = 0x0; _0x35e450 < _0x4fee93.numChildren; _0x35e450++) {
          if (_0x4fee93.getChildAt(_0x35e450).name == _0x3b37a0) {
            _0x4fee93.getChildAt(_0x35e450).active = true;
          } else {
            _0x4fee93.getChildAt(_0x35e450).active = false;
          }
        }
        _0xf1ee76.renderTarget = new Laya.RenderTexture(0x104, 0x140, Laya.RenderTextureFormat.R8G8B8A8);
        _0xf1ee76.clearFlag = 0x0;
        _0xf1ee76.clearColor = new Laya.Vector4(0x0, 0x0, 0x0, 0x0);
        var _0x277c4b = new Laya.Texture(_0xf1ee76.renderTarget, Laya.Texture.DEF_UV);
        this.isShow.graphics.clear();
        this.isShow.graphics.drawTexture(_0x277c4b);
      }
      ["uiUpdate"]() {}
    }
    class _0x2329d8 extends Laya.Scene {
      constructor() {
        super();
      }
      ["onEnable"]() {
        this.fanhuiBut.on(Laya.Event.MOUSE_DOWN, this, this.fanhui);
        this.addBut.on(Laya.Event.MOUSE_DOWN, this, this.getGold);
      }
      ["fanhui"]() {
        _0x28b4c1.playSound("Btn");
        this.destroy();
        ShowInter();

      }
      ["getGold"]() {
        _0x28b4c1.playSound("Btn");
        SdkUtil.TDEvent("金币视频点击");
        window.SdkUtil.ShowVideo(function (_0x42ab07) {
          if (0x1 == _0x42ab07) {
            _0x576441.setUserData("gold", _0x576441.getUserData("gold") + 0x7d0);
            _0x576441.saveData();
            _0x4952b3.gameUI.refreshGoldUI();
            if (_0x4952b3.shopUI) {
              _0x4952b3.shopUI.initItemData();
            }
            SdkUtil.TDEvent("金币视频完成");
          }
        }.bind(this));
        this.destroy();
      }
    }
    class _0x4a310a extends Laya.Scene {
      constructor() {
        super();
      }
      ["onEnable"]() {
        this.adButton.on(Laya.Event.CLICK, this, this.clickAction);
        this.closeButton.on(Laya.Event.CLICK, this, this.clickAction);
        this.initSignIn();
        window.SdkUtil.ShowChaPing(0x2);
        window.SdkUtil.ShowBanner(0x2);
        if (null != this.ADPanel && SdkUtil.ShowNeiZhiAD) {
          SdkUtil.ShowNeiZhiAD(this.ADPanel, 0x3);
        }
      }
      ["Update"]() {}
      ["clickAction"](_0x55d825) {
        _0x55d825.currentTarget;
        this.btn_close;
        if (_0x55d825.currentTarget == this.closeButton) {
          _0x28b4c1.playSound("Btn");
          this.signInAction();
          ShowInter();

        }
        if (_0x55d825.currentTarget == this.adButton) {
          _0x28b4c1.playSound("Btn");
          this.adAction();
        }
        
      }
      ["initSignIn"]() {
        this.signInGold = [0x64, 0x96, 0xc8, 0xfa, 0x12c, 0x15e, 0x2bc];
        this.itemDatas = [];
        this.signCount = _0x576441.getUserData("signCount");
        for (let _0x26a61b = 0x0; _0x26a61b < 0x7; _0x26a61b++) {
          var _0x5c359d = _0x26a61b + 0x1;
          if (this["item" + _0x5c359d].getChildByName("goldTex")) {
            this["item" + _0x5c359d].getChildByName("goldTex").text = this.signInGold[_0x26a61b];
          }
          if (this["item" + _0x5c359d].getChildByName("get")) {
            this["item" + _0x5c359d].getChildByName("get").visible = _0x26a61b < this.signCount;
          }
        }
      }
      ["refreshGoldUI"]() {}
      ["adAction"]() {
        SdkUtil.TDEvent("签到视频点击");
        window.SdkUtil.ShowVideo(function (_0x4b1142) {
          if (0x1 == _0x4b1142) {
            this.doubleSignInAction();
            SdkUtil.TDEvent("签到视频完成");
          }
        }.bind(this));
      }
      ["doubleSignInAction"]() {
        var _0x437f2b = this.signInGold[this.signCount];
        _0x576441.setUserData("gold", _0x576441.getUserData("gold") + 0x2 * _0x437f2b);
        var _0x2e469a = _0x303db9.getDayZeroTime();
        _0x576441.setUserData("rewardDate", _0x2e469a);
        _0x576441.saveData();
        _0x4952b3.gameUI.refreshGoldUI();
        this.nextAction();
      }
      ["signInAction"]() {
        var _0x200dee = this.signInGold[this.signCount];
        _0x576441.setUserData("gold", _0x576441.getUserData("gold") + _0x200dee);
        _0x4952b3.gameUI.refreshGoldUI();
        this.nextAction();
      }
      ["nextAction"]() {
        window.SdkUtil.CloseBanner();
        _0x576441.isShowSignIn = false;
        this.signCount++;
        if (this.signCount >= 0x7) {
          this.signCount = 0x0;
          _0x576441.setUserData("signCount", this.signCount);
        }
        this.destroy();
      }
    }
    class _0x3b4a79 extends Laya.Scene {
      constructor() {
        super();
      }
      ["onEnable"]() {
        _0x4952b3.winUI = this;
        _0x576441.isShowSignIn = true;
        var _0x1063c4 = _0x576441.getUserData("activeLevel");
        this.freeTest();
        this.abandonBut.on(Laya.Event.MOUSE_DOWN, this, this.abandon);
        this.doubleBut.on(Laya.Event.MOUSE_DOWN, this, this.double);
        window.SdkUtil.TDGuanQia(0x2, _0x1063c4);
        if (window.SdkUtil.IsShowShareBtn) {
          window.SdkUtil.IsShowShareBtn();
        }
        if (null != this.ADPanel && SdkUtil.ShowNeiZhiAD) {
          SdkUtil.ShowNeiZhiAD(this.ADPanel, 0x2);
        }
        SdkUtil.ShowChaPing();
        SdkUtil.ShowBanner();
        _0x1063c4 += 0x1;
        _0x576441.setUserData("activeLevel", _0x1063c4);
        _0x576441.saveData();
        this.doubleValue = (_0x576441.getGoldValue + _0x576441.getGameEndArrayValue) * _0x576441.getGameLastValue;
        this.goldLable.text = this.doubleValue;
      }
      ["abandon"]() {
        _0x28b4c1.playSound("Btn");
        let _0x412f38 = _0x576441.getUserData("gold");
        _0x412f38 += this.doubleValue;
        _0x576441.setUserData("gold", _0x412f38);
        _0x576441.saveData();
        this.reset();
      }
      ["double"]() {
        _0x28b4c1.playSound("Btn");
        SdkUtil.TDEvent("视频点击双倍金币");
        window.SdkUtil.ShowVideo(function (_0x393867) {
          if (0x1 == _0x393867) {
            let _0x77cff8 = _0x576441.getUserData("gold");
            _0x77cff8 += 0x2 * this.doubleValue;
            _0x576441.setUserData("gold", _0x77cff8);
            _0x576441.saveData();
            _0x4952b3.gameUI.refreshGoldUI();
            this.reset();
            SdkUtil.TDEvent("视频完成双倍金币");
          }
        }.bind(this));
      }
      ["reset"]() {
        this.destroy();
        if (_0x4952b3.gameUI) {
          _0x4952b3.gameUI.destroy();
          _0x4952b3.gameUI = null;
          _0x4952b3.winUI = null;
        }
        _0x4952b3.ShowUIPanel("GameRun", false);
      }
      ["freeTest"]() {
        this.skeleton = new Laya.Skeleton();
        this.skeleton.pos(this.width / 0x2, this.height / 0x2);
        this.skeleton.load("res/longGu/win_fail.sk", Laya.Handler.create(this, this.Start));
        this.longgu.addChild(this.skeleton);
      }
      ["Start"]() {
        this.skeleton.play("win_01", true);
      }
      ["overAni"]() {
        this.skeleton.play("win_02", true);
      }
    }
    class _0x267079 {
      static ["init"]() {
        let _0x749f22 = Laya.ClassUtils.regClass;
        _0x749f22("script/GameUI.js", _0x474e98);
        _0x749f22("PanelBaoXiang.js", _0x5e58f5);
        _0x749f22("PanelFail.js", _0x2093c0);
        _0x749f22("PanelFirst.js", _0x166f28);
        _0x749f22("PanelGameRun.js", _0x1497d0);
        _0x749f22("PanelPush.js", _0xa3030a);
        _0x749f22("PanelShop.js", _0x56b047);
        _0x749f22("PanelShopTips.js", _0x2329d8);
        _0x749f22("PanelSignIn.js", _0x4a310a);
        _0x749f22("PanelWin.js", _0x3b4a79);
      }
    }
    _0x267079.width = 0x2d0;
    _0x267079.height = 0x500;
    _0x267079.scaleMode = "fixedauto";
    _0x267079.screenMode = "none";
    _0x267079.alignV = "top";
    _0x267079.alignH = "center";
    _0x267079.startScene = "UIPanel/ShopTips.scene";
    _0x267079.sceneRoot = '';
    _0x267079.debug = false;
    _0x267079.stat = false;
    _0x267079.physicsDebug = true;
    _0x267079.exportSceneToJson = true;
    _0x267079.init();
    new class {
      constructor() {
        if (window.Laya3D) {
          Laya3D.init(_0x267079.width, _0x267079.height);
        } else {
          Laya.init(_0x267079.width, _0x267079.height, Laya.WebGL);
        }
        if (Laya.Physics) {
          Laya.Physics.enable();
        }
        if (Laya.DebugPanel) {
          Laya.DebugPanel.enable();
        }
        Laya.stage.scaleMode = _0x267079.scaleMode;
        Laya.stage.screenMode = _0x267079.screenMode;
        Laya.stage.alignV = _0x267079.alignV;
        Laya.stage.alignH = _0x267079.alignH;
        Laya.URL.exportSceneToJson = _0x267079.exportSceneToJson;
        if (_0x267079.debug || "true" == Laya.Utils.getQueryString("debug")) {
          Laya.enableDebugPanel();
        }
        if (_0x267079.physicsDebug && Laya.PhysicsDebugDraw) {
          Laya.PhysicsDebugDraw.enable();
        }
        if (_0x267079.stat) {
          Laya.Stat.show();
        }
        Laya.alertGlobalError(true);
        Laya.ResourceVersion.enable(window.isRu ? "version_ru.json" : "version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);

        Laya.stage.on(Laya.Event.RESIZE, this, this.resizeView);
                      Laya.SoundManager.useAudioMusic = false;
      }
      resizeView() {
        
          // Original pivot and positioning for lower aspect ratios
          Laya.stage.pivot(_0x267079.width / 2, _0x267079.height / 2);
          Laya.stage.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        
      }
      ["onVersionLoaded"]() {
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
      }
      ["onConfigLoaded"]() {
        _0x4952b3.ShowUIPanel("First");
      }
    }();
  }();
  function _0xf7d4a0(_0x2541f2) {
    function _0xe911a3(_0x2e0d53) {
      if (typeof _0x2e0d53 === "string") {
        return function (_0x19ab1c) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + _0x2e0d53 / _0x2e0d53).length !== 0x1 || _0x2e0d53 % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      _0xe911a3(++_0x2e0d53);
    }
    try {
      if (_0x2541f2) {
        return _0xe911a3;
      } else {
        _0xe911a3(0x0);
      }
    } catch (_0x1c6850) {}
  }