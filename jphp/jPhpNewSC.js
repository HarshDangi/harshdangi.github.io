try {
    ;(function() {
        var aC = window._vwo_code;
        if (aC) {
            window._vwo_j_e = window._vwo_j_e || 0;
            if (window._vwo_j_e == 1) {
                window._vwo_mt = "dupCode";
                clearTimeout(window._vwo_settings_timer);
                if (window.VWO && window.VWO._ && window.VWO._.bIE) {
                    window._vwo_code.finish()
                }
                return
            }
            if (window._vwo_j_e == -1) {
                window._vwo_j_e = 1
            }
        }
        window._vwo_mt = "live";
        try {
            window._vwo_tm = "";
            var getMode = function(e) {
                var n;
                if (window.name.indexOf(e) > -1) {
                    n = window.name
                } else {
                    n = window.location.search.match("_vwo_m=([^&]*)");
                    n = n && n[1]
                }
                return n && JSON.parse(decodeURIComponent(n))
            };
            if (window.name.indexOf("_vis_heatmap") > -1 || window.name.indexOf("_vis_editor") > -1 || getMode("_vwo_cc") || window.name.indexOf("_vis_preview") > -1) {
                window._vwo_mt = window.name
            } else if (window._vwo_tm.length) {
                window._vwo_mt = window._vwo_tm
            } else if (location.href.indexOf("_vis_opt_preview_combination") !== -1 && location.href.indexOf("_vis_test_id") !== -1) {
                window._vwo_mt = "sharedPreview"
            }
            if (window._vwo_mt !== "live") {
                if (!getMode("_vwo_cc")) {
                    _vwo_code.loadJSAsInline('https://dev.visualwebsiteoptimizer.com/j.php?mode=' + encodeURIComponent(window._vwo_mt) + '&a=656095&f=1&u=' + encodeURIComponent(window._vis_opt_url || document.URL));
                } else {
                    (function() {
                        window._vwo_code && window._vwo_code.finish();
                        _vwo_ccc = {
                            u: "/j.php?a=656095&u=https%3A%2F%2Fharshdangi.github.io%2Fnonce.html&f=1&vn=1.5&c=2-2"
                        };
                        var s = document.createElement("script");
                        s.src = "https://app.vwo.com/visitor-behavior-analysis/dist/codechecker/cc.min.js?r=" + Math.random();
                        document.head.appendChild(s)
                    }
                    )()
                }
            }
        } catch (e) {
            var b = new Image;
            b.src = "https://dev.visualwebsiteoptimizer.com/e.gif?s=mode_det&e=" + encodeURIComponent(e && e.stack && e.stack.substring(0, 1e3));
            aC && window._vwo_code.finish()
        }
    }
    )();
    if (window._vwo_mt === 'live') {
        ;window.VWO = window.VWO || [];
        window.VWO.push(['modifyClickPauseTime', {
            time: 0
        }]);
        _vwo_code.sT = _vwo_code.finished();
        (function(c, a, e, d, b, z) {
            function f(a, b, d) {
                e.cookie = a + "=" + b + "; expires=" + new Date(864e5 * d + +new Date).toGMTString() + "; domain=" + c + "; path=/"
            }
            -1 == e.cookie.indexOf("_vis_opt_out") && -1 == d.location.href.indexOf("vwo_opt_out=1") && (a = e.cookie.replace(/(?:(?:^|.*;\s*)_vwo_uuid_v2\s*=\s*([^;]*).*$)|^.*$/, "$1") || a,
            a = a.split("|"),
            b = new Image,
            c = d.location.hostname.replace(/^www\./, "") || c,
            b.src = "https://dev.visualwebsiteoptimizer.com/v.gif?cd=" + (window._vis_opt_cookieDays || 0) + "&a=656095&d=" + encodeURIComponent(c) + "&u=" + a[0] + "&h=" + a[1] + "&t=" + z + "&r=" + Math.random(),
            d.vwo_iehack_queue = [b],
            f("_vwo_uuid_v2", a.join("|"), 366))
        }
        )("harshdangi.github.io", "D3DB246A44587241FE2105A7F7E57C777|1d82b2ff66f5a98088ea21a5ea173c87", document, window, 0, _vwo_code.sT);
        var _vwo_acc_id = 656095;
        clearTimeout(_vwo_settings_timer);
        _vwo_exp_ids = [],
        _vwo_exp = {};
        window.VWO = window.VWO || [];
        window.VWO.data = {
            "ts": 1668500520,
            "noSS": false
        };
        window.VWO.featureInfo = {
            "fsLogRule": "",
            "mrp": 20,
            "csp": true,
            "uct": "",
            "dtd": "1000",
            "hC": 3,
            "spa": "0",
            "cInstJS": "",
            "dtdfd": "",
            "eavr": "0",
            "cRecJS": "",
            "dt": "mobile",
            "it": ""
        };
        _vwo_exp_ids.push('2');
        _vwo_exp['2'] = {
            "version": 4,
            "ep": 1668417902000,
            "clickmap": 1,
            "globalCode": {},
            "isEventMigrated": true,
            "type": "VISUAL_AB",
            "status": "RUNNING",
            "pc_traffic": 100,
            "name": "Campaign 2",
            "manual": false,
            "urlRegex": "^https\\:\\\/\\\/harshdangi\\.github\\.io\\\/nonce\\.html\\\/?(?:[\\?#].*)?$",
            "exclude_url": "",
            "multiple_domains": 0,
            "segment_code": "true",
            "ss": null,
            "ibe": 1,
            "muts": {
                "post": {
                    "enabled": true,
                    "refresh": true
                }
            },
            "sections": {
                "1": {
                    "path": "",
                    "variations": {
                        "1": "[]",
                        "2": "[{\"js\":\"var el,ctx=vwo_$(x);\\n\\\/*vwo_debug log(\\\"addElement\\\",\\\"body\\\"); vwo_debug*\\\/!(el=vwo_$(\\\"body\\\")).find('[vwo-op-1668499146718=\\\"\\\"]').length&&el.vwoElement({html:\\\"<script>\\\\nconsole.log('this console.log is from head')<\\\\\\\/script>\\\",position:\\\"append\\\"}),(el=vwo_$(\\\"#test1 > h2:nth-of-type(1)\\\")).html(\\\"JSLIB CSP\\\");\",\"xpath\":\"body\"},{\"js\":\"<script type='text\\\/javascript'>;\\n\\\/*vwo_debug log(\\\"content\\\",\\\"head\\\"); vwo_debug*\\\/console.log(\\\"this is some custom code\\\");const st=Date.now();for(;Date.now()<st+1e3;);<\\\/script>;\",\"xpath\":\"HEAD\"}]"
                    },
                    "segment": {
                        "1": 1,
                        "2": 1
                    },
                    "segmentObj": []
                }
            },
            "varSegAllowed": false,
            "combs": {
                "1": 0,
                "2": 1
            },
            "comb_n": {
                "1": "Control",
                "2": "Variation-1"
            },
            "goals": {
                "1": {
                    "urlRegex": "^\\\/\\\/?(?:[\\?#].*)?$",
                    "excludeUrl": "",
                    "type": "ENGAGEMENT"
                }
            },
            "pgre": true,
            "ps": true
        };
        _vwo_exp[2].sections[1].cspCompVariations = _vwo_exp[2].sections[1].cspCompVariations || {};
        _vwo_exp[2].sections[1].cspCompVariations[2] = _vwo_exp[2].sections[1].cspCompVariations[2] || [];
        _vwo_exp[2].sections[1].cspCompVariations[2].push(function() {
            (function(x) {
                var el, ctx = vwo_$(x);
                /*vwo_debug log("addElement","body"); vwo_debug*/
                !(el = vwo_$("body")).find('[vwo-op-1668499146718=""]').length && el.vwoElement({
                    html: "<script>\nconsole.log('this console.log is from head')<\/script>",
                    position: "append"
                }),
                (el = vwo_$("#test1 > h2:nth-of-type(1)")).html("JSLIB CSP");
                ;
            }
            )('body')
        });
        _vwo_exp[2].sections[1].cspCompVariations[2].push(function() {
            (function(x) {
                try {
                    ;/*vwo_debug log("content","head"); vwo_debug*/
                    console.log("this is some custom code");
                    const st = Date.now();
                    for (; Date.now() < st + 1e3; )
                        ;
                } catch (e) {}
                ;vwo_$('head').append('')
            }
            )('HEAD')
        });
        _vwo_exp[2].sections[1].cspCompVariations = _vwo_exp[2].sections[1].cspCompVariations || {};
        _vwo_exp[2].sections[1].cspCompVariations[1] = _vwo_exp[2].sections[1].cspCompVariations[1] || [];
        _vwo_exp[2].sections[1].cspSegmentCode = _vwo_exp[2].sections[1].cspCompSegment || {};
        _vwo_exp[2].sections[1].cspSegmentCode[2] = function() {
            return 1;
        }
        ;
        _vwo_exp[2].sections[1].cspSegmentCode[1] = function() {
            return 1;
        }
        ;
        var vwoCode = window._vwo_code;
        if (vwoCode.filterConfig && vwoCode.filterConfig.filterTime === 'balanced') {
            vwoCode.removeLoaderAndOverlay && vwoCode.removeLoaderAndOverlay()
        }
        ;var _vwo_style = document.getElementById('_vis_opt_path_hides')
          , _vwo_css = window._vwo_el_style || '{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;} :root {--vwo-el-opacity:0 !important;--vwo-el-filter:alpha(opacity=0) !important;--vwo-el-bg:none !important;}';
        var _vwo_text = "body" + _vwo_css;
        if (_vwo_style) {
            if (_vwo_style.styleSheet) {
                _vwo_style.styleSheet.cssText = _vwo_text;
            } else {
                var _vwo_textnode = document.createTextNode(_vwo_text);
                _vwo_style.appendChild(_vwo_textnode);
                _vwo_style.removeChild(_vwo_style.childNodes[0]);
            }
        }
        var commonWrapper = function(argument) {
            if (!argument) {
                argument = {
                    valuesGetter: function() {
                        return {}
                    },
                    valuesSetter: function() {},
                    verifyData: function() {
                        return {}
                    }
                }
            }
            var pollInterval = 100;
            var timeout = 5e3;
            return function() {
                var accountIntegrationSettings = {};
                var _interval = null;
                function waitForAnalyticsVariables() {
                    try {
                        accountIntegrationSettings = argument.valuesGetter()
                    } catch (error) {
                        accountIntegrationSettings = undefined
                    }
                    if (accountIntegrationSettings && argument.verifyData(accountIntegrationSettings)) {
                        argument.valuesSetter(accountIntegrationSettings);
                        return 1
                    }
                    return 0
                }
                var currentTime = 0;
                _interval = setInterval((function() {
                    currentTime = currentTime || performance.now();
                    var result = waitForAnalyticsVariables();
                    if (result || performance.now() - currentTime >= timeout) {
                        clearInterval(_interval)
                    }
                }
                ), pollInterval)
            }
        };
        var pushBasedCommonWrapper = function(argument) {
            if (!argument) {
                arguments = {
                    getExperimentList: function() {},
                    pushData: function() {}
                }
            }
            return function() {
                window.VWO = window.VWO || [];
                window.VWO.push(["onVariationApplied", function(data) {
                    if (!data)
                        return;
                    var expId = data[1]
                      , variationId = data[2];
                    var experimentList = argument.getExperimentList();
                    if (expId && variationId && ["VISUAL_AB", "VISUAL", "SPLIT_URL"].indexOf(_vwo_exp[expId].type) > -1) {
                        if (experimentList.indexOf(+expId) !== -1) {
                            var pollInterval = 100;
                            var currentTime = 0;
                            var timeout = 5e3;
                            var interval = setInterval((function() {
                                currentTime = currentTime || performance.now();
                                var toClearInterval = argument.pushData(expId, variationId);
                                if (toClearInterval || performance.now() - currentTime >= timeout) {
                                    clearInterval(interval)
                                }
                            }
                            ), pollInterval || 100)
                        }
                    }
                }
                ])
            }
        };
        (function() {
            var VWOOmniTemp = {};
            window.VWOOmni = window.VWOOmni || {};
            for (var key in VWOOmniTemp)
                Object.prototype.hasOwnProperty.call(VWOOmniTemp, key) && (window.VWOOmni[key] = VWOOmniTemp[key]);
            ;
        }
        )();
        (function() {
            window.VWO = window.VWO || [];
            var pollInterval = 100;
            var _vis_data = {};
            var intervalObj = {};
            var analyticsTimerObj = {};
            var experimentListObj = {};
            window.VWO.push(["onVariationApplied", function(data) {
                if (!data) {
                    return
                }
                var expId = data[1]
                  , variationId = data[2];
                if (expId && variationId && ["VISUAL_AB", "VISUAL", "SPLIT_URL"].indexOf(window._vwo_exp[expId].type) > -1) {}
            }
            ])
        }
        )();
        window.VWO.data.vi = window.VWO.data.vi || {
            "os": "MacOS",
            "br": "Chrome",
            "de": "Other",
            "dt": "desktop"
        };
        window.VWO.push(['enableSPA']);
        VWO.load_co = function(a) {
            var b = document.createElement('script');
            b.src = a;
            b.crossOrigin = 'anonymous';
            b.fetchPriority = 'high';
            b.type = 'text/javascript';
            b.innerText;
            b.onerror = function() {
                _vwo_code.finish();
            }
            ;
            document.getElementsByTagName('head')[0].appendChild(b);
        }
        var _vwo_cookieDomain = 'harshdangi.github.io'
          , _vwo_uuid = 'D3DB246A44587241FE2105A7F7E57C777';
        window.VWO.data.as = "r1.visualwebsiteoptimizer.com";
        var _vwo_library_timer = setTimeout(function() {
            var vwoCode = window._vwo_code;
            vwoCode.removeLoaderAndOverlay && vwoCode.removeLoaderAndOverlay();
            vwoCode.finish()
        }, _vwo_code.library_tolerance());
        var _vis_opt_file = 'web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ==/tag-a03d0261195a498eae089bb27f0e205a.js'
          , _vis_opt_lib = (typeof _vis_opt_lib == 'undefined') ? 'https://dev.visualwebsiteoptimizer.com/' + _vis_opt_file : _vis_opt_lib;
        _vwo_code.loadJSAsInline(_vis_opt_lib);
        ;window.VWO = window.VWO || [];
        window.VWO._ = window.VWO._ || {};
        VWO._.ac = VWO._.ac || {};
        VWO._.ac.csp = true;
        window.VWO = window.VWO || [];
        window.VWO._ = window.VWO._ || {};
        VWO._.ac = VWO._.ac || {};
        VWO._.ac.it = 0;
        VWO._.ac.uct = 0;
        ;window.VWO = window.VWO || [];
        window.VWO._ = window.VWO._ || {};
        VWO._.ac = VWO._.ac || {};
        ;window.VWO = window.VWO || [];
        window.VWO.data = window.VWO.data || {};
        VWO.data.content = {
            "fns": {
                "list": {
                    "args": {
                        "1": {}
                    },
                    "vn": 1
                }
            }
        };
        ;window._vwo_clicks = window._vwo_clicks || 3;
        ;window.VWO = window.VWO || [];
        window.VWO._ = window.VWO._ || {};
        VWO._.ac = VWO._.ac || {};
        VWO._.ac.dNdOfst = 1000;
    }
} catch (e) {
    _vwo_code.finish();
    _vwo_code.removeLoaderAndOverlay && _vwo_code.removeLoaderAndOverlay();
    var b = new Image;
    b.src = "https://dev.visualwebsiteoptimizer.com/e.gif?a=656095&s=j.php&e=" + encodeURIComponent(e && e.message && e.message.substring(0, 1000)) + "&url" + encodeURIComponent(window.location.href)
}
