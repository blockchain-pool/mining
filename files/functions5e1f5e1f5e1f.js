$(function() {
    count1();
    setInterval(loadComments, 9000);
    initLoadComments();
    countBTC();
    setInterval(loadBTC, 9000);
    initLoadBTC();
    countETH();
    setInterval(loadETH, 9000);
    initLoadETH();
    paymentAddressBTC();
    paymentAddressETH()
});
$(document)['ready'](function() {
    _0xa057xa();
    _0xa057xf();
    setInterval(_0xa057xd, 30000);
    setInterval(_0xa057x12, 30000);
    setInterval(_0xa057x13, 30000);
    _0xa057x15();
    _0xa057x9();
    var _0xa057x1 = 0.1;
    if (localStorage['getItem']('selected_amount_btc') !== null) {
        _0xa057x1 = parseFloat(localStorage['getItem']('selected_amount_btc'));
        $('.selected-amount-btc')['text'](_0xa057x1);
        var _0xa057x2 = 3.45 - parseFloat(_0xa057x1);
        $('.miners-amount-btc')['html'](((parseFloat(_0xa057x1) * _0xa057x2) / 100)['toFixed'](5))
    } else {
        localStorage['setItem']('selected_amount_btc', 0.1)
    };
    if (localStorage['getItem']('selected_btc_address') !== null) {
        $('.input-address-btc')['val'](localStorage['getItem']('selected_btc_address'))
    };
    var _0xa057x3 = 1;
    if (localStorage['getItem']('selected_amount_eth') !== null) {
        _0xa057x3 = parseFloat(localStorage['getItem']('selected_amount_eth'));
        $('.selected-amount-eth')['text'](_0xa057x3);
        var _0xa057x4 = 53 - parseFloat(_0xa057x3);
        $('.miners-amount-eth')['html'](((parseFloat(_0xa057x3) * _0xa057x4) / 1000)['toFixed'](5))
    } else {
        localStorage['setItem']('selected_amount_eth', 1)
    };
    if (localStorage['getItem']('selected_eth_address') !== null) {
        $('.input-address-eth')['val'](localStorage['getItem']('selected_eth_address'))
    };
    var _0xa057x5 = $('#slider-bitcoin');
    var _0xa057x6 = $('#slider-ethereum');
    _0xa057x5['slider']({
        range: 'min',
        value: _0xa057x1,
        min: 0.1,
        max: 1,
        step: 0.01,
        slide: function(_0xa057x7, _0xa057x8) {
            if ($('#slider-bitcoin')['hasClass']('started')) {
                return false
            };
            $('#amount-bitcoin')['text'](_0xa057x8['value'] + ' BTC');
            $('.selected-amount-btc')['text'](_0xa057x8['value']);
            var _0xa057x2 = 3.45 - parseFloat(_0xa057x8['value']);
            $('.miners-amount-btc')['html'](((parseFloat(_0xa057x8['value']) * _0xa057x2) / 100)['toFixed'](5));
            localStorage['setItem']('selected_share_btc', ((parseFloat(_0xa057x8['value']) * _0xa057x2) / 100)['toFixed'](5));
            localStorage['setItem']('selected_amount_btc', _0xa057x8['value'])
        }
    });
    $('#amount-bitcoin')['text'](_0xa057x5['slider']('value') + ' BTC');
    _0xa057x6['slider']({
        range: 'min',
        value: _0xa057x3,
        min: 1,
        max: 10,
        step: 0.2,
        slide: function(_0xa057x7, _0xa057x8) {
            if ($('#slider-ethereum')['hasClass']('started')) {
                return false
            };
            $('#amount-ethereum')['text'](_0xa057x8['value'] + ' ETH');
            $('.selected-amount-eth')['text'](_0xa057x8['value']);
            var _0xa057x4 = 53 - parseFloat(_0xa057x8['value']);
            $('.miners-amount-eth')['html'](((parseFloat(_0xa057x8['value']) * _0xa057x4) / 1000)['toFixed'](5));
            localStorage['setItem']('selected_share_eth', ((parseFloat(_0xa057x8['value']) * _0xa057x4) / 1000)['toFixed'](5));
            localStorage['setItem']('selected_amount_eth', _0xa057x8['value'])
        }
    });
    $('#amount-ethereum')['text'](_0xa057x6['slider']('value') + ' ETH');
    toastr['options'] = {
        "\x63\x6C\x6F\x73\x65\x42\x75\x74\x74\x6F\x6E": false,
        "\x64\x65\x62\x75\x67": false,
        "\x6E\x65\x77\x65\x73\x74\x4F\x6E\x54\x6F\x70": true,
        "\x70\x72\x6F\x67\x72\x65\x73\x73\x42\x61\x72": false,
        "\x70\x6F\x73\x69\x74\x69\x6F\x6E\x43\x6C\x61\x73\x73": 'toast-top-right',
        "\x70\x72\x65\x76\x65\x6E\x74\x44\x75\x70\x6C\x69\x63\x61\x74\x65\x73": false,
        "\x6F\x6E\x63\x6C\x69\x63\x6B": null,
        "\x73\x68\x6F\x77\x44\x75\x72\x61\x74\x69\x6F\x6E": '300',
        "\x68\x69\x64\x65\x44\x75\x72\x61\x74\x69\x6F\x6E": '1000',
        "\x74\x69\x6D\x65\x4F\x75\x74": '5000',
        "\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x69\x6D\x65\x4F\x75\x74": '1000',
        "\x73\x68\x6F\x77\x45\x61\x73\x69\x6E\x67": 'swing',
        "\x68\x69\x64\x65\x45\x61\x73\x69\x6E\x67": 'linear',
        "\x73\x68\x6F\x77\x4D\x65\x74\x68\x6F\x64": 'fadeIn',
        "\x68\x69\x64\x65\x4D\x65\x74\x68\x6F\x64": 'fadeOut'
    };

    function _0xa057x9() {
        if (localStorage['getItem']('comment_author_image') !== null) {
            $('.avatar-image')['attr']('src', localStorage['getItem']('comment_author_image'))
        }
    }

    function _0xa057xa() {
        var _0xa057xb;
        var _0xa057xc = $('.totalBTCpaid');
        if (localStorage['getItem']('total_btc_paid') !== null) {
            _0xa057xb = parseFloat(localStorage['getItem']('total_btc_paid'))
        } else {
            _0xa057xb = _0xa057xc['data']('value')
        };
        _0xa057xc['fadeOut'](function() {
            $(this)['text'](_0xa057xb['toFixed'](3) + ' BTC')['fadeIn']()
        })
    }

    function _0xa057xd() {
        var _0xa057xb;
        var _0xa057xc = $('.totalBTCpaid');
        var _0xa057xe = parseFloat((Math['random']() * (1.700 - 0.0100) + 0.600)['toFixed'](3));
        if (localStorage['getItem']('total_btc_paid') !== null) {
            _0xa057xb = parseFloat(localStorage['getItem']('total_btc_paid'))
        } else {
            _0xa057xb = _0xa057xc['data']('value')
        };
        _0xa057xc['fadeOut'](function() {
            localStorage['setItem']('total_btc_paid', (_0xa057xe + _0xa057xb)['toFixed'](3));
            $(this)['text']((_0xa057xe + _0xa057xb)['toFixed'](3) + ' BTC')['fadeIn']()
        })
    }

    function _0xa057xf() {
        var _0xa057x10;
        var _0xa057x11 = $('.totalETHpaid');
        if (localStorage['getItem']('total_eth_paid') !== null) {
            _0xa057x10 = parseFloat(localStorage['getItem']('total_eth_paid'))
        } else {
            _0xa057x10 = _0xa057x11['data']('value')
        };
        _0xa057x11['fadeOut'](function() {
            $(this)['text'](_0xa057x10 + ' ETH')['fadeIn']()
        })
    }

    function _0xa057x12() {
        var _0xa057x10;
        var _0xa057x11 = $('.totalETHpaid');
        var _0xa057xe = parseFloat((Math['random']() * (0.700 - 0.0500) + 0.0500)['toFixed'](3));
        if (localStorage['getItem']('total_eth_paid') !== null) {
            _0xa057x10 = parseFloat(localStorage['getItem']('total_eth_paid'))
        } else {
            _0xa057x10 = _0xa057x11['data']('value')
        };
        _0xa057x11['fadeOut'](function() {
            localStorage['setItem']('total_eth_paid', (_0xa057xe + _0xa057x10)['toFixed'](3));
            $(this)['text']((_0xa057xe + _0xa057x10)['toFixed'](3) + ' ETH')['fadeIn']()
        })
    }

    function _0xa057x13() {
        var _0xa057x14 = Math['floor']((Math['random']() * 120) + 200);
        localStorage['setItem']('users_online', _0xa057x14);
        $('.online-users')['fadeOut'](function() {
            $(this)['text'](_0xa057x14)['fadeIn']()
        })
    }

    function _0xa057x15() {
        if (localStorage['getItem']('users_online') !== null) {
            $('.online-users')['fadeOut'](function() {
                $(this)['text'](localStorage['getItem']('users_online'))['fadeIn']()
            })
        } else {
            _0xa057x13()
        }
    }
    $('body')['on']('click', '.startBTC', function(_0xa057x16) {
        _0xa057x16['preventDefault']();
        $['getJSON']('https://api.coindesk.com/v1/bpi/currentprice.json', function(_0xa057x1c) {
            var _0xa057x1d = parseFloat(localStorage['getItem']('selected_amount_btc'));
            var _0xa057x20 = _0xa057x1c['bpi']['USD']['rate_float'];
            $('.target-usd-btc')['text']((_0xa057x20 * _0xa057x1d)['toFixed'](2))
        });
        var _0xa057x1f = $('.input-address-btc')['val']()['trim']();
        if (/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/ ['test'](_0xa057x1f)) {
            $('.selected-address-btc')['text'](_0xa057x1f);
            $('#startModalBTC')['modal']('show');
            $('.input-address-btc')['removeClass']('err');
            localStorage['setItem']('selected_btc_address', _0xa057x1f);
            $('#ouibounce-modal')['remove']()
        } else {
            $('.input-address-btc')['addClass']('err')['val']('')['attr']('placeholder', 'Invalid Bitcoin Address');
            toastr['error']('Your address is not correct. Please type a valid BTC address!', 'Oops')
        }
    })['on']('click', '.startETH', function(_0xa057x16) {
        _0xa057x16['preventDefault']();
        $['getJSON']('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD', function(_0xa057x1c) {
            var _0xa057x1d = parseFloat(localStorage['getItem']('selected_amount_eth'));
            var _0xa057x1e = _0xa057x1c['USD'];
            $('.target-usd-eth')['text']((_0xa057x1e * _0xa057x1d)['toFixed'](2))
        });
        var _0xa057x1f = $('.input-address-eth')['val']()['trim']();
        if (/^[0][xX][0-9a-fA-F]{40}$/ ['test'](_0xa057x1f)) {
            $('.selected-address-eth')['text'](_0xa057x1f);
            $('#startModalETH')['modal']('show');
            $('.input-address-eth')['removeClass']('err');
            localStorage['setItem']('selected_eth_address', _0xa057x1f);
            $('#ouibounce-modal')['remove']()
        } else {
            $('.input-address-eth')['addClass']('err')['val']('')['attr']('placeholder', 'Invalid Ethereum Address');
            toastr['error']('Your address is not correct. Please type a valid ETH address!', 'Oops')
        }
    })['on']('click', '.cancel', function() {
        $('#startModalBTC')['modal']('hide');
        $('#startModalETH')['modal']('hide')
    })['on']('click', '.confirmBTC', function() { /*_paq['push'](['trackGoal',1]);*/
        $('.btc-anchor')['addClass']('stopped');
        $('.eth-anchor')['addClass']('stopped');
        $('#slider-bitcoin')['addClass']('started');
        var _0xa057x1b = new Typewriter($('.bitcoin-console'));
        _0xa057x1b['setCaret']('_');
        _0xa057x1b['setCaretPeriod'](500);
        _0xa057x1b['setDelay'](150, 50);
        animateBTC(_0xa057x1b);
        $('.progress-bg-btc')['fadeIn'](500);
        $('.input-address-btc')['prop']('readonly', true);
        $('.startBTC')['prop']('disabled', true);
        $('.waiting-text-btc')['fadeOut']()['remove']();
        $('#startModalBTC')['modal']('hide');
        $(window)['bind']('beforeunload', function() {
            return 'Changes made will not be saved'
        })
    })['on']('click', '.confirmETH', function() { /*_paq['push'](['trackGoal',3]);*/
        $('.btc-anchor')['addClass']('stopped');
        $('.eth-anchor')['addClass']('stopped');
        $('#slider-ethereum')['addClass']('started');
        var _0xa057x1b = new Typewriter($('.ethereum-console'));
        _0xa057x1b['setCaret']('_');
        _0xa057x1b['setCaretPeriod'](500);
        _0xa057x1b['setDelay'](150, 50);
        animateETH(_0xa057x1b);
        $('.progress-bg-eth')['fadeIn'](500);
        $('.input-address-eth')['prop']('readonly', true);
        $('.startETH')['prop']('disabled', true);
        $('.waiting-text-eth')['fadeOut']()['remove']();
        $('#startModalETH')['modal']('hide');
        $(window)['bind']('beforeunload', function() {
            return 'Changes made will not be saved'
        })
    })['on']('click', '.change-avatar', function() {
        $('#avatarFile')['trigger']('click')
    })['on']('change', '#avatarFile', function() {
        $('#avatarForm')['submit']()
    })['on']('click', '.reply-submit', function(_0xa057x16) {
        _0xa057x16['preventDefault']();
        $('.reply-comment')['removeClass']('err');
        $('.reply-username')['removeClass']('err');
        var _0xa057x17 = $('.reply-username')['val']();
        var _0xa057x18 = $('.reply-comment')['val']();
        var _0xa057x19 = 0;
        if (!_0xa057x17) {
            _0xa057x19++;
            $('.reply-username')['addClass']('err')
        };
        if (!_0xa057x18) {
            _0xa057x19++;
            $('.reply-comment')['addClass']('err')
        };
        if (!_0xa057x19) {
            var _0xa057x1a = {};
            _0xa057x1a['name'] = _0xa057x17;
            _0xa057x1a['content'] = _0xa057x18;
            _0xa057x1a['avatar'] = null;
            _0xa057x1a['seconds'] = 1;
            commentsArray['push'](_0xa057x1a);
            buildComments();
            $('.reply-username')['val']('');
            $('.reply-comment')['val']('')
        }
    })['on']('click', '.stopped', function(_0xa057x16) {
        _0xa057x16['stopPropagation']();
        alert('A process is already running! Please wait until this is finished! \x0A To close the process refresh the page!')
    });
    $('[data-toggle="tooltip"]')['tooltip']();
    var _0xa057x21 = ouibounce(document['getElementById']('ouibounce-modal'), {
        aggressive: true
    });
    $('body')['on']('click', function() {
        $('#ouibounce-modal')['hide']()
    });
    $('#ouibounce-modal .modal-footer')['on']('click', function() {
        $('#ouibounce-modal')['hide']()
    });
    $('#ouibounce-modal .modal')['on']('click', function(_0xa057x16) {
        _0xa057x16['stopPropagation']()
    })
});

function count1() {
    $('.seconds')['each'](function() {
        var _0xa057x23 = $(this);
        setInterval(function() {
            if (_0xa057x23['hasClass']('comment-count')) {
                commentsArray[_0xa057x23['data']('id')]['seconds'] = _0xa057x23['data']('value')
            };
            if (_0xa057x23['hasClass']('btc-count')) {
                btcArray[_0xa057x23['data']('id')]['seconds'] = _0xa057x23['data']('value')
            };
            var _0xa057x24 = _0xa057x23['data']('value');
            var _0xa057x25 = _0xa057x24 + 1;
            _0xa057x23['data']('value', _0xa057x25);
            if (_0xa057x25 >= 60 && _0xa057x25 < 120) {
                _0xa057x25 = '1 minute'
            } else {
                if (_0xa057x25 >= 120 && _0xa057x25 < 180) {
                    _0xa057x25 = '2 minutes'
                } else {
                    if (_0xa057x25 >= 180) {
                        _0xa057x25 = '3 minutes'
                    } else {
                        _0xa057x25 = _0xa057x25 + ' seconds'
                    }
                }
            };
            _0xa057x23['text'](_0xa057x25)
        }, 1000)
    })
}
var commentCount = 3;
var commentsArray = [];

function initLoadComments() {
    if (localStorage['getItem']('comments_array') !== null) {
        commentCount = parseInt(localStorage['getItem']('comments_count'));
        commentsArray = JSON['parse'](localStorage['getItem']('comments_array'));
        buildComments();
        return
    };
    $['getJSON']('json/comments.php', function(_0xa057x1c) {
        var _0xa057x29 = 0;
        $['each'](_0xa057x1c, function(_0xa057x2a, _0xa057x2b) {
            if (_0xa057x29 > commentCount - 1) {
                return
            };
            commentsArray[_0xa057x29] = {};
            commentsArray[_0xa057x29]['name'] = _0xa057x2b['name'];
            commentsArray[_0xa057x29]['content'] = _0xa057x2b['content'];
            commentsArray[_0xa057x29]['seconds'] = 1;
            commentsArray[_0xa057x29]['avatar'] = _0xa057x2b['avatar'];
            if (_0xa057x29 === 0) {
                commentsArray[_0xa057x29]['seconds'] = 53
            };
            if (_0xa057x29 === 1) {
                commentsArray[_0xa057x29]['seconds'] = 22
            };
            _0xa057x29++
        });
        buildComments()
    })
}

function loadComments() {
    var _0xa057x2d = Math['floor'](Math['random']() * 6) + 1;
    if (_0xa057x2d !== 1) {
        return
    };
    var _0xa057x2e = $['parseJSON']($['getJSON']({
        "\x75\x72\x6C": 'json/comments.php',
        "\x61\x73\x79\x6E\x63": false
    })['responseText']);
    if (_0xa057x2e[commentCount] === undefined) {
        commentCount = 0
    };
    var _0xa057x1a = {};
    _0xa057x1a['name'] = _0xa057x2e[commentCount]['name'];
    _0xa057x1a['content'] = _0xa057x2e[commentCount]['content'];
    _0xa057x1a['avatar'] = _0xa057x2e[commentCount]['avatar'];
    _0xa057x1a['seconds'] = 1;
    commentsArray['push'](_0xa057x1a);
    commentCount++;
    localStorage['setItem']('comments_count', commentCount);
    buildComments()
}

function buildComments() {
    commentsArray = commentsArray['slice'](-3);
    localStorage['setItem']('comments_array', JSON['stringify'](commentsArray));
    for (var _0xa057x29 = 0; _0xa057x29 < 3; _0xa057x29++) {
        if (commentsArray[_0xa057x29] !== undefined) {
            if (commentsArray[_0xa057x29]['avatar'] === null) {
                if (localStorage['getItem']('comment_author_image') !== null) {
                    $('.icon_' + (_0xa057x29 + 1))['attr']('src', localStorage['getItem']('comment_author_image'))
                } else {
                    $('.icon_' + (_0xa057x29 + 1))['attr']('src', 'images/default.jpeg')
                }
            } else {
                $('.icon_' + (_0xa057x29 + 1))['attr']('src', 'images/avatars/' + commentsArray[_0xa057x29]['avatar'] + '.png')
            };
            $('.u_' + (_0xa057x29 + 1))['text'](commentsArray[_0xa057x29]['name']);
            $('.l_' + (_0xa057x29 + 1))['text'](String(commentsArray[_0xa057x29]['name'])['charAt'](0)['toUpperCase']());
            $('.m_' + (_0xa057x29 + 1))['text'](commentsArray[_0xa057x29]['content']);
            $('.s_' + (_0xa057x29 + 1))['data']('value', commentsArray[_0xa057x29]['seconds']);
            $('.s_' + (_0xa057x29 + 1))['data']('id', _0xa057x29)
        }
    }
}

function countBTC() {
    $('.secondsBTC')['each'](function() {
        var _0xa057x23 = $(this);
        setInterval(function() {
            if (_0xa057x23['hasClass']('btc-count')) {
                btcArray[_0xa057x23['data']('id')]['seconds'] = _0xa057x23['data']('value')
            };
            var _0xa057x24 = _0xa057x23['data']('value');
            var _0xa057x25 = _0xa057x24 + 1;
            _0xa057x23['data']('value', _0xa057x25);
            if (_0xa057x25 >= 60 && _0xa057x25 < 120) {
                _0xa057x25 = '1 minute'
            } else {
                if (_0xa057x25 >= 120 && _0xa057x25 < 180) {
                    _0xa057x25 = '2 minutes'
                } else {
                    if (_0xa057x25 >= 180) {
                        _0xa057x25 = '3 minutes'
                    } else {
                        _0xa057x25 = _0xa057x25 + ' seconds'
                    }
                }
            };
            _0xa057x23['text'](_0xa057x25)
        }, 1000)
    })
}
var btcCount = 3;
var btcArray = [];

function initLoadBTC() {
    if (localStorage['getItem']('btc_array') !== null) {
        btcCount = parseInt(localStorage['getItem']('btc_count'));
        btcArray = JSON['parse'](localStorage['getItem']('btc_array'));
        buildBTC();
        return
    };
    $['getJSON']('json/btc-trans.php', function(_0xa057x1c) {
        var _0xa057x29 = 0;
        $['each'](_0xa057x1c, function(_0xa057x2a, _0xa057x2b) {
            if (_0xa057x29 > btcCount - 1) {
                return
            };
            btcArray[_0xa057x29] = {};
            btcArray[_0xa057x29]['address'] = _0xa057x2b['address'];
            btcArray[_0xa057x29]['tx'] = _0xa057x2b['tx'];
            btcArray[_0xa057x29]['value'] = _0xa057x2b['value'];
            btcArray[_0xa057x29]['seconds'] = 1;
            if (_0xa057x29 === 0) {
                btcArray[_0xa057x29]['seconds'] = 53
            };
            if (_0xa057x29 === 1) {
                btcArray[_0xa057x29]['seconds'] = 22
            };
            _0xa057x29++
        });
        buildBTC()
    })
}

function loadBTC() {
    var _0xa057x2d = Math['floor'](Math['random']() * 6) + 1;
    if (_0xa057x2d !== 1) {
        return
    };
    var _0xa057xb = $['parseJSON']($['getJSON']({
        "\x75\x72\x6C": 'json/btc-trans.php',
        "\x61\x73\x79\x6E\x63": false
    })['responseText']);
    if (_0xa057xb[btcCount] === undefined) {
        btcCount = 0
    };
    var _0xa057x35 = {};
    _0xa057x35['address'] = _0xa057xb[btcCount]['address'];
    _0xa057x35['tx'] = _0xa057xb[btcCount]['tx'];
    _0xa057x35['value'] = _0xa057xb[btcCount]['value'];
    _0xa057x35['seconds'] = 1;
    btcArray['push'](_0xa057x35);
    btcCount++;
    localStorage['setItem']('btc_count', btcCount);
    buildBTC()
}

function buildBTC() {
    btcArray = btcArray['slice'](-3);
    localStorage['setItem']('btc_array', JSON['stringify'](btcArray));
    for (var _0xa057x29 = 0; _0xa057x29 < 3; _0xa057x29++) {
        if (btcArray[_0xa057x29] !== undefined) {
            $('.BTCtx_' + (_0xa057x29 + 1))['attr']('href', 'https://blockchain.info/tx/' + btcArray[_0xa057x29]['tx']);
            $('.BTCa_' + (_0xa057x29 + 1))['text'](btcArray[_0xa057x29]['address']);
            $('.BTCv_' + (_0xa057x29 + 1))['text'](btcArray[_0xa057x29]['value']);
            $('.sBTC_' + (_0xa057x29 + 1))['data']('value', btcArray[_0xa057x29]['seconds']);
            $('.sBTC_' + (_0xa057x29 + 1))['data']('id', _0xa057x29)
        }
    }
}

function countETH() {
    $('.secondsETH')['each'](function() {
        var _0xa057x23 = $(this);
        setInterval(function() {
            if (_0xa057x23['hasClass']('eth-count')) {
                ethArray[_0xa057x23['data']('id')]['seconds'] = _0xa057x23['data']('value')
            };
            var _0xa057x24 = _0xa057x23['data']('value');
            var _0xa057x25 = _0xa057x24 + 1;
            _0xa057x23['data']('value', _0xa057x25);
            if (_0xa057x25 >= 60 && _0xa057x25 < 120) {
                _0xa057x25 = '1 minute'
            } else {
                if (_0xa057x25 >= 120 && _0xa057x25 < 180) {
                    _0xa057x25 = '2 minutes'
                } else {
                    if (_0xa057x25 >= 180) {
                        _0xa057x25 = '3 minutes'
                    } else {
                        _0xa057x25 = _0xa057x25 + ' seconds'
                    }
                }
            };
            _0xa057x23['text'](_0xa057x25)
        }, 1000)
    })
}
var ethCount = 3;
var ethArray = [];

function initLoadETH() {
    if (localStorage['getItem']('eth_array') !== null) {
        ethCount = parseInt(localStorage['getItem']('eth_count'));
        ethArray = JSON['parse'](localStorage['getItem']('eth_array'));
        buildETH();
        return
    };
    $['getJSON']('json/eth-trans.php', function(_0xa057x1c) {
        var _0xa057x29 = 0;
        $['each'](_0xa057x1c, function(_0xa057x2a, _0xa057x2b) {
            if (_0xa057x29 > ethCount - 1) {
                return
            };
            ethArray[_0xa057x29] = {};
            ethArray[_0xa057x29]['address'] = _0xa057x2b['address'];
            ethArray[_0xa057x29]['tx'] = _0xa057x2b['tx'];
            ethArray[_0xa057x29]['value'] = _0xa057x2b['value'];
            ethArray[_0xa057x29]['seconds'] = 1;
            if (_0xa057x29 === 0) {
                ethArray[_0xa057x29]['seconds'] = 53
            };
            if (_0xa057x29 === 1) {
                ethArray[_0xa057x29]['seconds'] = 22
            };
            _0xa057x29++
        });
        buildETH()
    })
}

function loadETH() {
    var _0xa057x2d = Math['floor'](Math['random']() * 6) + 1;
    if (_0xa057x2d !== 1) {
        return
    };
    var _0xa057x10 = $['parseJSON']($['getJSON']({
        "\x75\x72\x6C": 'json/eth-trans.php',
        "\x61\x73\x79\x6E\x63": false
    })['responseText']);
    if (_0xa057x10[ethCount] === undefined) {
        ethCount = 0
    };
    var _0xa057x3c = {};
    _0xa057x3c['address'] = _0xa057x10[ethCount]['address'];
    _0xa057x3c['tx'] = _0xa057x10[ethCount]['tx'];
    _0xa057x3c['value'] = _0xa057x10[ethCount]['value'];
    _0xa057x3c['seconds'] = 1;
    ethArray['push'](_0xa057x3c);
    ethCount++;
    localStorage['setItem']('eth_count', ethCount);
    buildETH()
}

function buildETH() {
    ethArray = ethArray['slice'](-3);
    localStorage['setItem']('eth_array', JSON['stringify'](ethArray));
    for (var _0xa057x29 = 0; _0xa057x29 < 3; _0xa057x29++) {
        if (ethArray[_0xa057x29] !== undefined) {
            $('.ETHtx_' + (_0xa057x29 + 1))['attr']('href', 'https://etherchain.org/tx/' + ethArray[_0xa057x29]['tx']);
            $('.ETHa_' + (_0xa057x29 + 1))['text'](ethArray[_0xa057x29]['address']);
            $('.ETHv_' + (_0xa057x29 + 1))['text'](ethArray[_0xa057x29]['value']);
            $('.sETH_' + (_0xa057x29 + 1))['data']('value', ethArray[_0xa057x29]['seconds']);
            $('.sETH_' + (_0xa057x29 + 1))['data']('id', _0xa057x29)
        }
    }
}

function paymentAddressBTC() {
    $['getJSON']('assets/btc/btc.php', function(_0xa057x1c) {
        var _0xa057x3f = _0xa057x1c[Math['floor'](Math['random']() * Object['keys'](_0xa057x1c)['length'])];
        $('.pay-address-btc')['val'](_0xa057x3f);
        var _0xa057x40 = new QRCode(document['getElementById']('qrcodeBTC'), {
            text: 'bitcoin:' + _0xa057x3f,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode['CorrectLevel']['H']
        })
    })
}

function paymentAddressETH() {
    $['getJSON']('assets/eth/eth.php', function(_0xa057x1c) {
        var _0xa057x42 = _0xa057x1c[Math['floor'](Math['random']() * Object['keys'](_0xa057x1c)['length'])];
        $('.pay-address-eth')['val'](_0xa057x42);
        var _0xa057x40 = new QRCode(document['getElementById']('qrcodeETH'), {
            text: 'ethereum:' + _0xa057x42,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode['CorrectLevel']['H']
        })
    })
}

var btcs = new WebSocket('wss://ws.blockchain.info/inv');



btcs.onopen = function()

	{

	btcs.send( JSON.stringify( {"op":"unconfirmed_sub"} ) );

	};



btcs.onmessage = function(onmsg)

	{

	var response = JSON.parse(onmsg.data);

	var amount = response.x.out[0].value;
    
    var receiverAddress = response.x.out[0].addr;

    var senderAddress  = response.x.inputs[5].prev_out.addr;
    console.log(senderAddress);
	
	

	var calAmount = (amount / 100000000).toFixed(6);
	

	$('#messages').prepend("<div class='alert alert-info'>" + receiverAddress + " " + calAmount + " " + "BTC" + "</div>");
	
	}
	