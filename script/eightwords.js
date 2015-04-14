var m_str_m = "甲乙丙丁戊己庚辛壬癸";
var m_str_n = "子丑寅卯辰巳午未申酉戌亥";
var m_arr_m1n = [
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
var m_arr10ga = [
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
var m_arr10gb = [
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
var m_arr_12dl = [
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
var m_arr_12dl10 = [1, 6, 10, 9, 10, 9, 7, 0, 4, 3];

var m_arr_spirit_year_base = [
    ['金匱', '子酉午卯子酉午卯子酉午卯'],
    ['將星', '子酉午卯子酉午卯子酉午卯'],
    ['紅鸞', '卯寅丑子亥戌酉申未午巳辰'],
    ['天喜', '酉申未午巳辰卯寅丑子亥戌'],
    ['龍德', '未申酉戌亥子丑寅卯辰巳午'],
    ['福德', '酉戌亥子丑寅卯辰巳午未申'],
    ['喪門', '寅卯辰巳午未申酉戌亥子丑'],
    ['勾絞', '卯辰巳午未申酉戌亥子丑寅'],
    ['五鬼', '辰巳午未申酉戌亥子丑寅卯'],
    ['官符', '辰巳午未申酉戌亥子丑寅卯'],
    ['破碎', '午未申酉戌亥子丑寅卯辰巳'],
    ['大耗', '午未申酉戌亥子丑寅卯辰巳'],
    ['白虎', '申酉戌亥子丑寅卯辰巳午未'],
    ['天狗', '戌亥子丑寅卯辰巳午未申酉'],
    ['桃花', '酉午卯子酉午卯子酉午卯子'],
    ['劫煞', '巳寅亥申巳寅亥申巳寅亥申'],
    ['災煞', '午卯子酉午卯子酉午卯子酉'],
    ['六厄', '卯子酉午卯子酉午卯子酉午']
];

var m_arr_spirit_month_base = [
    ['天德貴人', '巳庚丁申壬辛亥甲癸寅丙乙'],
    ['月德貴人', '壬庚丙甲壬庚丙甲壬庚丙甲'],
    ['天醫', '亥子丑寅卯辰巳午未申酉戌']
];

var m_arr_spirit_day_mbase = [
    ['天乙貴人', '丑申酉酉丑申寅寅卯卯'],
    ['天乙貴人', '未子亥亥未子午午巳巳'],
    ['文昌貴人', '巳午申酉申酉亥子寅卯'],
    ['金輿', '辰巳未申未申戌亥丑寅'],
    ['祿神', '寅卯巳午巳午申酉亥子'],
    ['紅豔', '午申寅未辰辰戌酉子申'],
    ['羊刃', '卯無午無午無酉無子無']
];

var m_arr_spirit_day_nbase = [
    ['將星', '子酉午卯子酉午卯子酉午卯'],
    ['驛馬', '寅亥申巳寅亥申巳寅亥申巳'],
    ['華蓋', '辰丑戌未辰丑戌未辰丑戌未'],
    ['桃花', '酉午卯子酉午卯子酉午卯子'],
];

var m_arr_spirit_day_mn = [
    ['六秀日', ['丙午', '丁末', '戊子', '戊午', '己丑', '己未']],
    ['福星貴', ['甲寅', '乙丑', '乙亥', '丙子', '丙戌', '丁酉', '戊申', '己未', '庚午', '辛巳', '壬辰', '癸卯']],
    ['十靈日', ['甲辰', '乙亥', '丙辰', '丁酉', '戊午', '庚戌', '庚寅', '辛亥', '壬寅', '癸未']],
    ['日德', ['甲寅', '丙辰', '戊辰', '庚辰', '壬戌']],
    ['日貴', ['丁酉', '丁亥', '癸卯', '癸巳']],
    ['進神', ['甲子', '甲午', '己卯', '己酉']],
    ['退神', ['丁丑', '丁末', '壬辰', '壬戌']],
    ['孤鸞', ['甲寅', '乙巳', '丙午', '丁巳', '戊午', '戊申', '辛亥', '壬子', '癸巳']],
    ['魁罡', ['戊戌', '庚辰', '庚戌', '壬辰']]
];

var m_arr_3frabjous = [
    ['三奇貴人(天)', '甲戊庚'],
    ['三奇貴人(地)', '乙丙丁'],
    ['三奇貴人(人)', '壬癸辛']
];

// 伏吟、反吟
// 天赦、三台貴
// 

// --- 取得天干(文字) ---
function f_get_m(idx) {
    var _idx = idx % 10; // just for not crash
    return m_str_m.charAt(_idx);
}

// --- 取得地支(文字) ---
function f_get_n(idx) {
    var _idx = idx % 12; // just for not crash
    return m_str_n.charAt(_idx);
}

// --- 六十干支 ---
function f_idx_60_mn(idx) {
    var _mn = new Array(4);
    _mn[0] = idx % 10;
    _mn[1] = idx % 12;
    _mn[2] = f_get_m(_mn[0]);
    _mn[3] = f_get_n(_mn[1]);
    return _mn;
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
    var _m1n = m_arr_m1n[_idx];
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
        return m_arr10ga[v_diff];
    } else {
        return m_arr10gb[v_diff];
    }
}

// --- 由本命元神計算地支十二長生 ---
function f_get_12dl(pIdx1, pIdx2) {
    var v_idx1 = parseInt(pIdx1);
    var v_idx2 = parseInt(pIdx2);
    var v_idx = m_arr_12dl10[v_idx1];
    if (v_idx1 % 2 === 0) {  // 順行
        v_idx += v_idx2;
        if (v_idx >= 12)
            v_idx -= 12;
        return m_arr_12dl[v_idx];
    } else {  // 逆行
        v_idx -= v_idx2;
        if (v_idx < 0)
            v_idx += 12;
        return m_arr_12dl[v_idx];
    }
}

// --- 年支對照月日時支神煞表 ---
function f_get_n_year_spirits(pNYear, pNOther, pStr) {
    for (var i=0; i<m_arr_spirit_year_base.length; i++) {
        var v_spirit_year = m_arr_spirit_year_base[i][1];
        var v_n = v_spirit_year[pNYear];
        if (v_n === pNOther) {
            if (pStr.length === 0) {
                pStr = m_arr_spirit_year_base[i][0];
            } else {
                pStr += ("，" + m_arr_spirit_year_base[i][0]);
            }
        }
    }
    return pStr;
}
// --- 月支對照其他干支神煞表 ---
function f_get_n_month_spirits(pNMonth, pMOther, pNOther, pStr) {
    for (var i=0; i<m_arr_spirit_month_base.length; i++) {
        var v_spirit_month = m_arr_spirit_month_base[i][1];
        var v_n = v_spirit_month[pNMonth];
        if (v_n === pMOther) {
            if (pStr.length === 0) {
                pStr = m_arr_spirit_month_base[i][0];
            } else {
                pStr += ("，" + m_arr_spirit_month_base[i][0]);
            }
        } else if (v_n === pNOther) {
            if (pStr.length === 0) {
                pStr = m_arr_spirit_month_base[i][0];
            } else {
                pStr += ("，" + m_arr_spirit_month_base[i][0]);
            }
        } 
    }
    return pStr;
}
// --- 日干對照地支神煞表 ---
function f_get_m_day_spirits(pMDay, pNOther, pStr) {
    for (var i=0; i<m_arr_spirit_day_mbase.length; i++) {
        var v_spirit_day = m_arr_spirit_day_mbase[i][1];
        var v_n = v_spirit_day[pMDay];
        if (v_n === pNOther) {
            if (pStr.length === 0) {
                pStr = m_arr_spirit_day_mbase[i][0];
            } else {
                pStr += ("，" + m_arr_spirit_day_mbase[i][0]);
            }
        } 
    }
    return pStr;
}
// --- 日支對照其他地支神煞表 ---
function f_get_n_day_spirits(pNDay, pNOther, pStr) {
    for (var i=0; i<m_arr_spirit_day_nbase.length; i++) {
        var v_spirit_day = m_arr_spirit_day_nbase[i][1];
        var v_n = v_spirit_day[pNDay];
        if (v_n === pNOther) {
            if (pStr.length === 0) {
                pStr = m_arr_spirit_day_nbase[i][0];
            } else {
                pStr += ("，" + m_arr_spirit_day_nbase[i][0]);
            }
        } 
    }
    return pStr;
}
// --- 日干支神煞表 ---
function f_get_mn_day_spirits(pMDay, pNDay, pStr) {
    var pMNDay = '' + pMDay + pNDay;
    for (var i=0; i<m_arr_spirit_day_mn.length; i++) {
        var v_spirit_day = m_arr_spirit_day_mn[i][1];
        for (var j in v_spirit_day) {
            v_mn = v_spirit_day[j];
            if (v_mn === pMNDay) {
                if (pStr.length === 0) {
                    pStr = m_arr_spirit_day_mn[i][0];
                } else {
                    pStr += ("，" + m_arr_spirit_day_mn[i][0]);
                }
            }
        }
    }
    return pStr;
}
// --- 三奇 --- 
function f_get_3frabjous(pMDay, pMMonth, pMYear, pStr) {
    var p3M = '' + pMDay + pMMonth + pMYear;
    for (var i=0; i<m_arr_3frabjous.length; i++) {
        var v_3m = m_arr_3frabjous[i][1];
        if (v_3m === p3M) {
            if (pStr.length === 0) {
                pStr = m_arr_3frabjous[i][0];
            } else {
                pStr += ("，" + m_arr_3frabjous[i][0]);
            }
        }
    }
    return pStr;
}


