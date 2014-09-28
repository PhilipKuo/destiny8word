var str_m = "甲乙丙丁戊己庚辛壬癸";
var str_n = "子丑寅卯辰巳午未申酉戌亥";
var arr_m1n = [
    '9',
    '597',
    '024',
    '1',
    '419',
    '246',
    '35',
    '531',
    '684',
    '7',
    '473',
    '80'
];
var arr10ga = [
    '比肩',
    '劫財',
    '食神',
    '傷官',
    '偏財',
    '正財',
    '七殺',
    '正官',
    '偏印',
    '正印'
];
var arr10gb = [
    '比肩',
    '傷官',
    '食神',
    '正財',
    '偏財',
    '正官',
    '七殺',
    '正印',
    '偏印',
    '劫財'
];
var arr_12dl = [
    '長生',
    '沐浴',
    '冠帶',
    '臨官',
    '帝旺',
    '衰',
    '病',
    '死',
    '墓',
    '絕',
    '胎',
    '養'
];
var arr_12dl10 = [1, 6, 10, 9, 10, 9, 7, 0, 4, 3];

// --- 六十干支 ---
function f_idx_60_mn(idx) {
    var _mn = new Array(2);
    _mn[0] = idx % 10;
    _mn[1] = idx % 12;
    return _mn;
}

// --- 取得天干(文字) ---
function f_get_m(idx) {
    var _idx = idx % 10; // just for not crash
    return str_m.charAt(_idx);
}

// --- 取得地支(文字) ---
function f_get_n(idx) {
    var _idx = idx % 12; // just for not crash
    return str_n.charAt(_idx);
}

// --- 取得天干地支(文字) ---
function f_get_mn(idx) {
    var _idx = idx % 60; // just for not crash
    var _idx_m = _idx % 10;
    var _idx_n = _idx % 12;
    return '' + f_get_m(_idx_m) + f_get_n(_idx_n);
}

// --- 取得地支藏干 ---
function f_get_m1n(idx) {
    var _idx = idx % 12; // just for not crash
    var _m1n = arr_m1n[_idx];
    var _arr_m1n = [];
    for (var i=0; i<_m1n.length; i++) {
        _arr_m1n.push(parseInt(_m1n.charAt(i)));
    }
    return _arr_m1n;
}

// --- 由本命元神計算十神 ---
function f_get_10g(pIdx1, pIdx2) {
    var v_idx1 = parseInt(pIdx1);
    var v_idx2 = parseInt(pIdx2) + 10;
    var v_diff = (v_idx2 - v_idx1) % 10;
    if (v_idx1 % 2 === 0) {
        return arr10ga[v_diff];
    } else {
        return arr10gb[v_diff];
    }
}

// --- 由本命元神計算地支十二長生 ---
function f_get_12dl(pIdx1, pIdx2) {
    var v_idx1 = parseInt(pIdx1);
    var v_idx2 = parseInt(pIdx2);
    var v_idx = arr_12dl10[v_idx1];
    if (v_idx1 % 2 === 0) {  // 順行
        v_idx += v_idx2;
        if (v_idx >= 12)
            v_idx -= 12;
        return arr_12dl[v_idx];
    } else {  // 逆行
        v_idx -= v_idx2;
        if (v_idx < 0)
            v_idx += 12;
        return arr_12dl[v_idx];
    }
}


