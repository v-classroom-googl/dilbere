var AudioCallBack = {
	counter:0,
	beforeShowAd: () => {
		Laya.stage.renderingEnabled = false; //停止渲染
		Laya.updateTimer && Laya.updateTimer.pause(); //停止onUpdate
		Laya.physicsTimer && Laya.physicsTimer.pause(); //停止物理
		Laya.SoundManager.setMusicVolume(0);
		Laya.SoundManager.setSoundVolume(0);
		AudioCallBack.counter = Date.now();
		Laya.timer.scale = 0;
	},
	afterShowAd: () => {
		Laya.timer.scale = 1;
		window.focus();
		Laya.stage.renderingEnabled = true //恢复渲染
		Laya.updateTimer && Laya.updateTimer.resume(); //恢复onUpdate
		Laya.physicsTimer && Laya.physicsTimer.resume(); //恢复物理
		Laya.SoundManager.setMusicVolume(1);
		Laya.SoundManager.setSoundVolume(1);
	}
};
//*-------- Show Interstitial --------*//
let lastInterTime = 0;
const interCooldown = 30; // 60 seconds in milliseconds

function ShowInter(complete) {
	const currentTime = Date.now();
	if (currentTime - lastInterTime < interCooldown) {
		complete && complete();
		return;
	}

	if(ysdk.environment.payload){
		complete && complete();
		return;
	}
	
	AudioCallBack.beforeShowAd();
	window.isAdShowing = true;
	ysdk.adv.showFullscreenAdv({
		callbacks: {
			onClose: function(wasShown) {
			// some action after close
				if(complete)
					complete();
				AudioCallBack.afterShowAd();
				window.isAdShowing = false;
				lastInterTime = Date.now();
			},
			onError: function(error) {
			// some action on error
				if(complete)
					complete();	
				AudioCallBack.afterShowAd();
				window.isAdShowing = false;
			}
		}
	});
}

//*-------- Show Rewarded --------*//
function ShowRewarded(success, fail) {
	if(ysdk.environment.payload){
		return;
	}
	AudioCallBack.beforeShowAd();
	window.isAdShowing = true;
	ysdk.adv.showRewardedVideo({
		callbacks: {
			onOpen: () => {
				window.rewardDone = false;
			},
			onRewarded: () => {
				window.rewardDone = true;
			},
			onClose: () => {
				AudioCallBack.afterShowAd();
				if(window.rewardDone)
					success(1);			
				else
					fail();
				window.isAdShowing = false;
			},
			onError: (e) => {
				AudioCallBack.afterShowAd();
				if(fail)
					fail();
				if(window.isRu)
					PromptDialog("Реклама сейчас недоступна, попробуйте позже");
				else
					PromptDialog("Ads not available now, please try again later");
				window.isAdShowing = false;
			}
		}
	})
}

function isAfterTime() {
	return window.adState;
}

YaGames
.init()
.then(ysdk => {
window.isFirstGameStart = true ;
  window.showPanel = true;
  window.iscleaning = false;
  window.ysdk = ysdk;
  window.isRu = ysdk.environment.i18n.lang == "ru";
  window.timeToShow = 1500;
  loadLib("index.js");
  return ysdk.getFlags();
}).then(flags => {  
  // Start the timer after initialization
  //startCleaningCheckTimer();
});

// Add this new function
function startCleaningCheckTimer() {
  setInterval(() => {
    if (!window.iscleaning) {
      window.showPanel = true;
      console.log("showPanel set to true"); // For debugging
    } else {
      console.log("iscleaning is true, showPanel not changed"); // For debugging
    }
  }, 30000); // 20000 milliseconds = 20 seconds
}

function PromptDialog(msg, duration = 3e3) {
	if (!this.prompt_) {
		this.prompt_ = document.createElement('div');
		this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
		document.body.appendChild(this.prompt_);
	}
	this.prompt_.innerHTML = msg;
	duration = isNaN(duration) ? 3e3 : duration;
	this.prompt_.style.display = "inline";
	this.prompt_.style.opacity = '1';
	setTimeout(function() {
		var d = 0.5;
		this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
		this.prompt_.style.opacity = '0';
	this.prompt_.style.display = "none";
	}.bind(this), duration);
}

function Game_ready() {
  if (window.isFirstGameStart) {
    setTimeout(() => {
      ShowInter(() => {
        ysdk.features.LoadingAPI.ready(); // Make ysdk.features.LoadingAPI ready after interstitial ad
      });
    }, 2000); // Wait for 2000 milliseconds (2 seconds)
    window.isFirstGameStart = false;
  }
}