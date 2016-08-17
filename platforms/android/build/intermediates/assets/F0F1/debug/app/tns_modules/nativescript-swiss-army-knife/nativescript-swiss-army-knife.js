"use strict";
var app = require('application');
var frame_1 = require('ui/frame');
var color_1 = require('color');
var Platform = require('platform');
var SwissArmyKnife = (function () {
    function SwissArmyKnife() {
    }
    Object.defineProperty(SwissArmyKnife.prototype, "android", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwissArmyKnife.prototype, "ios", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Takes a layout and removes all the child Views and returns them in an Array<View>
     */
    SwissArmyKnife.pluckChildViewsFromLayout = function (parent) {
        var returnViews = [];
        parent.eachLayoutChild(function (child) {
            returnViews.push(child);
        });
        parent.removeChildren();
        return returnViews;
    };
    /**
     *Disables bounce/overscroll for scrollViews or ListViews on Android and iOS
        *  */
    SwissArmyKnife.disableScrollBounce = function (view) {
        //no ui bounce. causes problems
        if (app.ios) {
            view.ios.bounces = false;
        }
        else if (app.android && view.android != null) {
            view.android.setOverScrollMode(2);
        }
    };
    /**
     *Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
    *  */
    SwissArmyKnife.removeHorizontalScrollBars = function (view) {
        if (app.ios) {
            view.ios.showsHorizontalScrollIndicator = false;
        }
        else {
            view.android.setHorizontalScrollBarEnabled(false);
        }
    };
    /**
     *Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
    *  */
    SwissArmyKnife.removeVerticalScrollBars = function (view) {
        if (app.ios) {
            view.ios.showsVerticalScrollIndicator = false;
        }
        else {
            view.android.setVerticalScrollBarEnabled(false);
        }
    };
    /**
     * returns an IScreenHeight ojecjt with the protrait demension, landscape deminsions, and android status bar height*/
    SwissArmyKnife.getScreenHeight = function () {
        var height1 = Platform.screen.mainScreen.heightDIPs;
        var height2 = Platform.screen.mainScreen.widthDIPs;
        var statusbar = this.getStatusBarHeight();
        var navbar = this.getNavBarHeight();
        return {
            portrait: height1,
            landscape: height2,
            androidStatusBar: statusbar,
            androidNavBar: navbar,
        };
    };
    SwissArmyKnife.getStatusBarHeight = function () {
        if (app.android) {
            var result = 0;
            var resourceId = app.android.currentContext.getResources().getIdentifier('status_bar_height', 'dimen', 'android');
            if (resourceId > 0) {
                result = app.android.currentContext.getResources().getDimensionPixelSize(resourceId);
                result = result / app.android.currentContext.getResources().getDisplayMetrics().density;
            }
            return result;
        }
        else {
            return 0;
        }
    };
    SwissArmyKnife.getNavBarHeight = function () {
        if (app.android) {
            var result = 0;
            var resourceId = app.android.currentContext.getResources().getIdentifier('navigation_bar_height', 'dimen', 'android');
            if (resourceId > 0) {
                result = app.android.currentContext.getResources().getDimensionPixelSize(resourceId);
                result = result / app.android.currentContext.getResources().getDisplayMetrics().density;
            }
            return result;
        }
        else {
            return 0;
        }
    };
    /** ActionBar Utilities */
    /**
     * Programmatically set title
     */
    SwissArmyKnife.actionBarSetTitle = function (title) {
        var actionBar = frame_1.topmost().currentPage.actionBar;
        actionBar.title = title;
    };
    /**
     * Programmatically add button to the ActionBar
     * NOTE: This MUST be called BEFORE actionBarSetTitle on start
     */
    SwissArmyKnife.actionBarAddButton = function (button) {
        frame_1.topmost().currentPage.actionBar.actionItems.addItem(button);
    };
    /**
     * Programmatically remove all buttons from the ActionBar
     */
    SwissArmyKnife.actionBarClearButtons = function () {
        var actionBar = frame_1.topmost().currentPage.actionBar;
        var actionItems = actionBar.actionItems.getItems();
        actionItems.forEach(function (item) {
            actionBar.actionItems.removeItem(item);
        });
    };
    /**
     * Sets the Android statusbar to translucent
     * Android API >= 19 only
     */
    SwissArmyKnife.setAndroidStatusBarTranslucentFlag = function () {
        if (app.android && Platform.device.sdkVersion >= '19') {
            var LayoutParams = android.view.WindowManager.LayoutParams;
            var window_1 = app.android.startActivity.getWindow();
            // check for status bar
            window_1.addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
        }
    };
    /**
     * Sets the Android statusbar color, accepts either a string color or a Color object
     * Android API >= 21 only
     */
    SwissArmyKnife.setAndroidStatusBarColor = function (color) {
        if (app.android && Platform.device.sdkVersion >= '21') {
            var barColor = this.getBarColor(color);
            var LayoutParams = android.view.WindowManager.LayoutParams;
            var window_2;
            if (app.android.foregroundActivity != null) {
                window_2 = app.android.foregroundActivity.getWindow();
            }
            else {
                window_2 = app.android.startActivity.getWindow();
            }
            window_2.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window_2.setStatusBarColor(barColor.android);
        }
    };
    /**
         * Sets the Android NavigationBar color, accepts either a string color or a Color object
         * Android API >= 21 only
         */
    SwissArmyKnife.setAndroidNavBarColor = function (color) {
        if (app.android && Platform.device.sdkVersion >= '21') {
            var barColor = this.getBarColor(color);
            var LayoutParams = android.view.WindowManager.LayoutParams;
            var window_3;
            if (app.android.foregroundActivity != null) {
                window_3 = app.android.foregroundActivity.getWindow();
            }
            else {
                window_3 = app.android.startActivity.getWindow();
            }
            window_3.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window_3.setNavigationBarColor(barColor.android);
        }
    };
    SwissArmyKnife.getBarColor = function (color) {
        var barColor;
        if ((color instanceof color_1.Color) === false) {
            barColor = new color_1.Color(color);
        }
        else {
            barColor = color;
        }
        return barColor;
    };
    /**
     * Clears the Android Translucent StatusBar flag
     */
    SwissArmyKnife.resetAndroidStatusBarTranslucentFlag = function () {
        if (app.android && Platform.device.sdkVersion >= '19') {
            var window_4 = app.android.startActivity.getWindow();
            var LayoutParams = android.view.WindowManager.LayoutParams;
            window_4.clearFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
        }
    };
    /**
    * Sets the Android navigation bar to translucent
    * Android API >= 19 only
    */
    SwissArmyKnife.setAndroidNavBarTranslucentFlag = function () {
        if (app.android && Platform.device.sdkVersion >= '19') {
            var window_5 = app.android.startActivity.getWindow();
            var LayoutParams = android.view.WindowManager.LayoutParams;
            window_5.addFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
    };
    /**
     * Clears the Android Translucent NavigationBar flag
     */
    SwissArmyKnife.resetAndroidNavBarTranslucentFlag = function () {
        if (app.android && Platform.device.sdkVersion >= '19') {
            var window_6 = app.android.startActivity.getWindow();
            var LayoutParams = android.view.WindowManager.LayoutParams;
            window_6.clearFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
    };
    /** ActionBar Utilities */
    /**
       * Programmatically hide the back button from the ActionBar
       */
    SwissArmyKnife.actionBarHideBackButton = function () {
        if (frame_1.topmost().ios) {
            frame_1.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
        }
    };
    /**
       * Programmatically remove all buttons from the ActionBar
       */
    SwissArmyKnife.actionBarSetStatusBarStyle = function (style) {
        if (frame_1.topmost().ios) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            // 0: default
            // 1: light
            navigationBar.barStyle = style;
        }
    };
    return SwissArmyKnife;
}());
exports.SwissArmyKnife = SwissArmyKnife;
//# sourceMappingURL=nativescript-swiss-army-knife.js.map