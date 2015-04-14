var m_seasons = new Array();
var m_season_titles = [
    '小寒', '大寒', '立春', '雨水', '驚蟄', '春分',
    '清明', '穀雨', '立夏', '小滿', '芒種', '夏至',
    '小暑', '大暑', '立秋', '處暑', '白露', '秋分',
    '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'
];

m_seasons['1956'] = [
    '01 06 16 31', '01 21 09 49',
    '02 05 04 13', '02 20 00 05',
    '03 05 22 25', '03 20 23 21',
    '04 05 03 32', '04 20 10 44',
    '05 05 21 11', '05 21 10 13',
    '06 06 01 36', '06 21 18 24',
    '07 07 11 59', '07 23 05 21',
    '08 07 21 41', '08 23 12 15',
    '09 08 00 20', '09 23 09 36',
    '10 08 15 37', '10 23 18 35',
    '11 07 18 27', '11 22 15 51',
    '12 07 11 03', '12 22 05 00'];

m_seasons['1957'] = [
    '01 05 22 11', '01 20 15 39',
    '02 04 09 55', '02 19 05 58',
    '03 06 04 11', '03 21 05 17',
    '04 05 09 19', '04 20 16 42',
    '05 06 02 59', '05 21 16 11',
    '06 06 07 25', '06 22 00 21',
    '07 07 17 49', '07 23 11 15',
    '08 08 03 33', '08 23 18 08',
    '09 08 06 13', '09 23 15 27',
    '10 08 21 31', '10 24 00 25',
    '11 08 00 21', '11 22 21 40',
    '12 07 16 57', '12 22 10 49'];

m_seasons['1958'] = [
    '01 06 04 05', '01 20 21 29',
    '02 04 15 50', '02 19 11 49',
    '03 06 10 06', '03 21 11 06',
    '04 05 15 13', '04 20 22 28',
    '05 06 08 50', '05 21 21 52',
    '06 06 13 13', '06 22 05 58',
    '07 07 23 34', '07 23 16 51',
    '08 08 09 18', '08 23 23 47',
    '09 08 12 00', '09 23 21 10',
    '10 09 03 20', '10 24 06 12',
    '11 08 06 13', '11 23 03 30',
    '12 07 22 50', '12 22 16 40'];

m_seasons['1959'] = [
    '01 06 09 59', '01 21 03 20',
    '02 04 21 43', '02 19 17 38',
    '03 06 15 57', '03 21 16 55',
    '04 05 21 04', '04 21 04 17',
    '05 06 14 39', '05 22 03 43',
    '06 06 19 01', '06 22 11 51',
    '07 08 05 21', '07 23 22 46',
    '08 08 15 05', '08 24 05 44',
    '09 08 17 49', '09 24 03 09',
    '10 09 09 11', '10 24 12 12',
    '11 08 12 03', '11 23 09 28',
    '12 08 04 38', '12 22 22 35'];

m_seasons['1960'] = [
    '01 06 15 43', '01 21 09 10',
    '02 05 03 23', '02 19 23 26',
    '03 05 21 36', '03 20 22 43',
    '04 05 02 44', '04 20 10 06',
    '05 05 20 23', '05 21 09 34',
    '06 06 00 49', '06 21 17 42',
    '07 07 11 13', '07 23 04 38',
    '08 07 21 00', '08 23 11 35',
    '09 07 23 46', '09 23 08 59',
    '10 08 15 09', '10 23 18 02',
    '11 07 18 02', '11 22 15 18',
    '12 07 10 38', '12 22 04 26'];

m_seasons['1961'] = [
    '01 05 21 43', '01 20 15 01',
    '02 04 09 23', '02 19 05 17',
    '03 06 03 35', '03 21 04 32',
    '04 05 08 42', '04 20 15 55',
    '05 06 02 21', '05 21 15 22',
    '06 06 06 46', '06 21 23 30',
    '07 07 17 07', '07 23 10 24',
    '08 08 02 49', '08 23 17 19',
    '09 08 05 29', '09 23 14 43',
    '10 08 20 51', '10 23 23 47',
    '11 07 23 46', '11 22 21 08',
    '12 07 16 26', '12 22 10 20'];

m_seasons['1962'] = [
    '01 06 03 35', '01 20 20 58',
    '02 04 15 18', '02 19 11 15',
    '03 06 09 30', '03 21 10 30',
    '04 05 14 34', '04 20 21 51',
    '05 06 08 10', '05 21 21 17',
    '06 06 12 31', '06 22 05 24',
    '07 07 22 51', '07 23 16 18',
    '08 08 08 34', '08 23 23 13',
    '09 08 11 16', '09 23 20 35',
    '10 09 02 38', '10 24 05 40',
    '11 08 05 35', '11 23 03 03',
    '12 07 22 17', '12 22 16 15'];

m_seasons['1963'] = [
    '01 06 09 27', '01 21 02 54',
    '02 04 21 08', '02 19 17 09',
    '03 06 15 17', '03 21 16 20',
    '04 05 20 19', '04 21 03 36',
    '05 06 13 52', '05 22 02 58',
    '06 06 18 15', '06 22 11 04',
    '07 08 04 38', '07 23 21 59',
    '08 08 14 26', '08 24 04 58',
    '09 08 17 12', '09 24 02 24',
    '10 09 08 36', '10 24 11 29',
    '11 08 11 32', '11 23 08 50',
    '12 08 04 13', '12 22 22 02'];

m_seasons['1964'] = [
    '01 06 15 22', '01 21 08 41',
    '02 05 03 05', '02 19 22 57',
    '03 05 21 16', '03 20 22 10',
    '04 05 02 18', '04 20 09 27',
    '05 05 19 51', '05 21 08 50',
    '06 06 00 12', '06 21 16 57',
    '07 07 10 32', '07 23 03 53',
    '08 07 20 16', '08 23 10 51',
    '09 07 23 00', '09 23 08 17',
    '10 08 14 22', '10 23 17 21',
    '11 07 17 15', '11 22 14 39',
    '12 07 09 53', '12 22 03 50'];

m_seasons['1965'] = [
    '01 05 21 02', '01 20 14 29',
    '02 04 08 46', '02 19 04 48',
    '03 06 03 01', '03 21 04 05',
    '04 05 08 07', '04 20 15 26',
    '05 06 01 42', '05 21 14 50',
    '06 06 06 02', '06 21 22 56',
    '07 07 16 22', '07 23 09 48',
    '08 08 02 05', '08 23 16 43',
    '09 08 04 48', '09 23 14 06',
    '10 08 20 11', '10 23 23 10',
    '11 07 23 07', '11 22 20 29',
    '12 07 15 46', '12 22 09 41'];

m_seasons['1966'] = [
    '01 06 02 55', '01 20 20 20',
    '02 04 14 38', '02 19 10 38',
    '03 06 08 51', '03 21 09 53',
    '04 05 13 57', '04 20 21 12',
    '05 06 07 31', '05 21 20 32',
    '06 06 11 50', '06 22 04 34',
    '07 07 22 07', '07 23 15 23',
    '08 08 07 49', '08 23 22 18',
    '09 08 10 32', '09 23 19 43',
    '10 09 01 57', '10 24 04 51',
    '11 08 04 56', '11 23 02 14',
    '12 07 21 38', '12 22 15 28'];

m_seasons['1967'] = [
    '01 06 08 48', '01 21 02 08',
    '02 04 20 31', '02 19 16 24',
    '03 06 14 42', '03 21 15 37',
    '04 05 19 45', '04 21 02 55',
    '05 06 13 18', '05 22 02 18',
    '06 06 17 36', '06 22 10 23',
    '07 08 03 54', '07 23 21 16',
    '08 08 13 35', '08 24 04 13',
    '09 08 16 18', '09 24 01 38',
    '10 09 07 42', '10 24 10 44',
    '11 08 10 38', '11 23 08 05',
    '12 08 03 18', '12 22 21 17'];

m_seasons['1968'] = [
    '01 06 14 26', '01 21 07 54',
    '02 05 02 08', '02 19 22 09',
    '03 05 20 18', '03 20 21 22',
    '04 05 01 21', '04 20 08 41',
    '05 05 18 56', '05 21 08 06',
    '06 05 23 19', '06 21 16 13',
    '07 07 09 42', '07 23 03 08',
    '08 07 19 27', '08 23 10 03',
    '09 07 22 12', '09 23 07 26',
    '10 08 13 35', '10 23 16 30',
    '11 07 16 29', '11 22 13 49',
    '12 07 09 09', '12 22 03 00'];

m_seasons['1969'] = [
    '01 05 20 17', '01 20 13 38',
    '02 04 07 59', '02 19 03 55',
    '03 06 02 11', '03 21 03 08',
    '04 05 07 15', '04 20 14 27',
    '05 06 00 50', '05 21 13 50',
    '06 06 05 12', '06 21 21 55',
    '07 07 15 32', '07 23 08 48',
    '08 08 01 14', '08 23 15 43',
    '09 08 03 56', '09 23 13 07',
    '10 08 19 17', '10 23 22 11',
    '11 07 22 12', '11 22 19 31',
    '12 07 14 51', '12 22 08 44'];

m_seasons['1970'] = [
    '01 06 02 02', '01 20 19 24',
    '02 04 13 46', '02 19 09 42',
    '03 06 07 59', '03 21 08 56',
    '04 05 13 02', '04 20 20 15',
    '05 06 06 34', '05 21 19 38',
    '06 06 10 52', '06 22 03 43',
    '07 07 21 11', '07 23 14 37',
    '08 08 06 54', '08 23 21 34',
    '09 08 09 38', '09 23 18 59',
    '10 09 01 02', '10 24 04 04',
    '11 08 03 58', '11 23 01 25',
    '12 07 20 38', '12 22 14 36'];

m_seasons['1971'] = [
    '01 06 07 45', '01 21 01 13',
    '02 04 19 26', '02 19 15 27',
    '03 06 13 35', '03 21 14 38',
    '04 05 18 36', '04 21 01 54',
    '05 06 12 08', '05 22 01 15',
    '06 06 16 29', '06 22 09 20',
    '07 08 02 51', '07 23 20 15',
    '08 08 12 40', '08 24 03 15',
    '09 08 15 30', '09 24 00 45',
    '10 09 06 59', '10 24 09 53',
    '11 08 09 57', '11 23 07 14',
    '12 08 02 36', '12 22 20 24'];

m_seasons['1972'] = [
    '01 06 13 42', '01 21 06 59',
    '02 05 01 20', '02 19 21 12',
    '03 05 19 28', '03 20 20 22',
    '04 05 00 29', '04 20 07 38',
    '05 05 18 01', '05 21 07 00',
    '06 05 22 22', '06 21 15 06',
    '07 07 08 43', '07 23 02 03',
    '08 07 18 29', '08 23 09 03',
    '09 07 21 15', '09 23 06 33',
    '10 08 12 42', '10 23 15 42',
    '11 07 15 40', '11 22 13 03',
    '12 07 08 19', '12 22 02 13'];

m_seasons['1973'] = [
    '01 05 19 26', '01 20 12 48',
    '02 04 07 04', '02 19 03 01',
    '03 06 01 13', '03 21 02 13',
    '04 05 06 14', '04 20 13 30',
    '05 05 23 47', '05 21 12 54',
    '06 06 04 07', '06 21 21 01',
    '07 07 14 28', '07 23 07 56',
    '08 08 00 13', '08 23 14 54',
    '09 08 03 00', '09 23 12 21',
    '10 08 18 27', '10 23 21 30',
    '11 07 21 28', '11 22 18 54',
    '12 07 14 11', '12 22 08 08'];

m_seasons['1974'] = [
    '01 06 01 20', '01 20 18 46',
    '02 04 13 00', '02 19 08 59',
    '03 06 07 07', '03 21 08 07',
    '04 05 12 05', '04 20 19 19',
    '05 06 05 34', '05 21 18 36',
    '06 06 09 52', '06 22 02 38',
    '07 07 20 13', '07 23 13 30',
    '08 08 05 57', '08 23 20 29',
    '09 08 08 45', '09 23 17 59',
    '10 09 00 15', '10 24 03 11',
    '11 08 03 18', '11 23 00 39',
    '12 07 20 05', '12 22 13 56'];

m_seasons['1975'] = [
    '01 06 07 18', '01 21 00 36',
    '02 04 18 59', '02 19 14 50',
    '03 06 13 06', '03 21 13 57',
    '04 05 18 02', '04 21 01 07',
    '05 06 11 27', '05 22 00 24',
    '06 06 15 42', '06 22 08 27',
    '07 08 02 00', '07 23 19 22',
    '08 08 11 45', '08 24 02 24',
    '09 08 14 33', '09 23 23 55',
    '10 09 06 02', '10 24 09 06',
    '11 08 09 03', '11 23 06 31',
    '12 08 01 46', '12 22 19 46'];

m_seasons['1976'] = [
    '01 06 12 58', '01 21 06 25',
    '02 05 00 40', '02 19 20 40',
    '03 05 18 48', '03 20 19 50',
    '04 04 23 47', '04 20 07 03',
    '05 05 17 15', '05 21 06 21',
    '06 05 21 31', '06 21 14 24',
    '07 07 07 51', '07 23 01 19',
    '08 07 17 39', '08 23 08 19',
    '09 07 20 28', '09 23 05 48',
    '10 08 11 58', '10 23 14 58',
    '11 07 14 59', '11 22 12 22',
    '12 07 07 41', '12 22 01 35'];

m_seasons['1977'] = [
    '01 05 18 51', '01 20 12 15',
    '02 04 06 34', '02 19 02 31',
    '03 06 00 44', '03 21 01 43',
    '04 05 05 46', '04 20 12 57',
    '05 05 23 16', '05 21 12 15',
    '06 06 03 32', '06 21 20 14',
    '07 07 13 48', '07 23 07 04',
    '08 07 23 30', '08 23 14 00',
    '09 08 02 16', '09 23 11 30',
    '10 08 17 44', '10 23 20 41',
    '11 07 20 46', '11 22 18 07',
    '12 07 13 31', '12 22 07 24'];

m_seasons['1978'] = [
    '01 06 00 43', '01 20 18 04',
    '02 04 12 27', '02 19 08 21',
    '03 06 06 38', '03 21 07 34',
    '04 05 11 39', '04 20 18 50',
    '05 06 05 09', '05 21 18 09',
    '06 06 09 23', '06 22 02 10',
    '07 07 19 37', '07 23 13 00',
    '08 08 05 18', '08 23 19 57',
    '09 08 08 03', '09 23 17 26',
    '10 08 23 31', '10 24 02 37',
    '11 08 02 34', '11 23 00 05',
    '12 07 19 20', '12 22 13 21'];

m_seasons['1979'] = [
    '01 06 06 32', '01 21 00 00',
    '02 04 18 13', '02 19 14 13',
    '03 06 12 20', '03 21 13 22',
    '04 05 17 18', '04 21 00 36',
    '05 06 10 47', '05 21 23 54',
    '06 06 15 05', '06 22 07 56',
    '07 08 01 25', '07 23 18 49',
    '08 08 11 11', '08 24 01 47',
    '09 08 14 00', '09 23 23 17',
    '10 09 05 30', '10 24 08 28',
    '11 08 08 33', '11 23 05 54',
    '12 08 01 18', '12 22 19 10'];

m_seasons['1980'] = [
    '01 06 12 29', '01 21 05 49',
    '02 05 00 10', '02 19 20 02',
    '03 05 18 17', '03 20 19 10',
    '04 04 23 15', '04 20 06 23',
    '05 05 16 45', '05 21 05 42',
    '06 05 21 04', '06 21 13 47',
    '07 07 07 24', '07 23 00 42',
    '08 07 17 09', '08 23 07 41',
    '09 07 19 54', '09 23 05 09',
    '10 08 11 19', '10 23 14 18',
    '11 07 14 18', '11 22 11 42',
    '12 07 07 02', '12 22 00 56'];

m_seasons['1981'] = [
    '01 05 18 13', '01 20 11 36',
    '02 04 05 56', '02 19 01 52',
    '03 06 00 05', '03 21 01 03',
    '04 05 05 05', '04 20 12 19',
    '05 05 22 35', '05 21 11 40',
    '06 06 02 53', '06 21 19 45',
    '07 07 13 12', '07 23 06 40',
    '08 07 22 57', '08 23 13 38',
    '09 08 01 43', '09 23 11 05',
    '10 08 17 10', '10 23 20 13',
    '11 07 20 09', '11 22 17 36',
    '12 07 12 51', '12 22 06 51'];

m_seasons['1982'] = [
    '01 06 00 03', '01 20 17 31',
    '02 04 11 46', '02 19 07 47',
    '03 06 05 55', '03 21 06 56',
    '04 05 10 53', '04 20 18 08',
    '05 06 04 20', '05 21 17 23',
    '06 06 08 36', '06 22 01 23',
    '07 07 18 55', '07 23 12 16',
    '08 08 04 42', '08 23 19 15',
    '09 08 07 32', '09 23 16 46',
    '10 08 23 02', '10 24 01 58',
    '11 08 02 04', '11 22 23 24',
    '12 07 18 48', '12 22 12 39'];

m_seasons['1983'] = [
    '01 06 05 59', '01 20 23 17',
    '02 04 17 40', '02 19 13 31',
    '03 06 11 47', '03 21 12 39',
    '04 05 16 45', '04 20 23 50',
    '05 06 10 11', '05 21 23 07',
    '06 06 14 26', '06 22 07 09',
    '07 08 00 43', '07 23 18 04',
    '08 08 10 30', '08 24 01 08',
    '09 08 13 20', '09 23 22 42',
    '10 09 04 51', '10 24 07 55',
    '11 08 07 53', '11 23 05 19',
    '12 08 00 34', '12 22 18 30'];

m_seasons['1984'] = [
    '01 06 11 41', '01 21 05 05',
    '02 04 23 19', '02 19 19 16',
    '03 05 17 25', '03 20 18 24',
    '04 04 22 22', '04 20 05 38',
    '05 05 15 51', '05 21 04 58',
    '06 05 20 09', '06 21 13 02',
    '07 07 06 29', '07 22 23 58',
    '08 07 16 18', '08 23 07 00',
    '09 07 19 10', '09 23 04 33',
    '10 08 10 43', '10 23 13 46',
    '11 07 13 45', '11 22 11 11',
    '12 07 06 28', '12 22 00 23'];

m_seasons['1985'] = [
    '01 05 17 35', '01 20 10 57',
    '02 04 05 12', '02 19 01 07',
    '03 05 23 16', '03 21 00 14',
    '04 05 04 14', '04 20 11 26',
    '05 05 21 43', '05 21 10 43',
    '06 06 02 00', '06 21 18 44',
    '07 07 12 19', '07 23 05 37',
    '08 07 22 04', '08 23 12 36',
    '09 08 00 53', '09 23 10 07',
    '10 08 16 24', '10 23 19 22',
    '11 07 19 29', '11 22 16 51',
    '12 07 12 16', '12 22 06 08'];

m_seasons['1986'] = [
    '01 05 23 28', '01 20 16 46',
    '02 04 11 08', '02 19 06 57',
    '03 06 05 12', '03 21 06 03',
    '04 05 10 06', '04 20 17 12',
    '05 06 03 31', '05 21 16 28',
    '06 06 07 45', '06 22 00 30',
    '07 07 18 01', '07 23 11 25',
    '08 08 03 46', '08 23 18 26',
    '09 08 06 35', '09 23 15 59',
    '10 08 22 07', '10 24 01 14',
    '11 08 01 13', '11 22 22 44',
    '12 07 18 01', '12 22 12 02'];

m_seasons['1987'] = [
    '01 06 05 13', '01 20 22 40',
    '02 04 16 52', '02 19 12 50',
    '03 06 10 54', '03 21 11 52',
    '04 05 15 44', '04 20 22 58',
    '05 06 09 06', '05 21 22 10',
    '06 06 13 19', '06 22 06 11',
    '07 07 23 39', '07 23 17 06',
    '08 08 09 29', '08 24 00 10',
    '09 08 12 24', '09 23 21 45',
    '10 09 04 00', '10 24 07 01',
    '11 08 07 06', '11 23 04 29',
    '12 07 23 52', '12 22 17 46'];

m_seasons['1988'] = [
    '01 06 11 03', '01 21 04 24',
    '02 04 22 43', '02 19 18 35',
    '03 05 16 47', '03 20 17 39',
    '04 04 21 39', '04 20 04 45',
    '05 05 15 02', '05 21 03 57',
    '06 05 19 15', '06 21 11 57',
    '07 07 05 33', '07 22 22 51',
    '08 07 15 20', '08 23 05 54',
    '09 07 18 11', '09 23 03 29',
    '10 08 09 44', '10 23 12 44',
    '11 07 12 49', '11 22 10 12',
    '12 07 05 34', '12 21 23 28'];

m_seasons['1989'] = [
    '01 05 16 46', '01 20 10 07',
    '02 04 04 27', '02 19 00 21',
    '03 05 22 34', '03 20 23 28',
    '04 05 03 30', '04 20 10 39',
    '05 05 20 54', '05 21 09 54',
    '06 06 01 05', '06 21 17 53',
    '07 07 11 19', '07 23 04 45',
    '08 07 21 04', '08 23 11 46',
    '09 07 23 54', '09 23 09 20',
    '10 08 15 27', '10 23 18 35',
    '11 07 18 34', '11 22 16 05',
    '12 07 11 21', '12 22 05 22'];

m_seasons['1990'] = [
    '01 05 22 33', '01 20 16 01',
    '02 04 10 14', '02 19 06 14',
    '03 06 04 19', '03 21 05 19',
    '04 05 09 13', '04 20 16 27',
    '05 06 02 36', '05 21 15 38',
    '06 06 06 46', '06 21 23 33',
    '07 07 17 01', '07 23 10 22',
    '08 08 02 46', '08 23 17 21',
    '09 08 05 37', '09 23 14 55',
    '10 08 21 14', '10 24 00 14',
    '11 08 00 23', '11 22 21 47',
    '12 07 17 14', '12 22 11 07'];

m_seasons['1991'] = [
    '01 06 04 28', '01 20 21 47',
    '02 04 16 08', '02 19 11 58',
    '03 06 10 12', '03 21 11 02',
    '04 05 15 05', '04 20 22 09',
    '05 06 08 27', '05 21 21 20',
    '06 06 12 38', '06 22 05 19',
    '07 07 22 53', '07 23 16 11',
    '08 08 08 37', '08 23 23 13',
    '09 08 11 27', '09 23 20 48',
    '10 09 03 01', '10 24 06 05',
    '11 08 06 08', '11 23 03 36',
    '12 07 22 56', '12 22 16 54'];

m_seasons['1992'] = [
    '01 06 10 08', '01 21 03 32',
    '02 04 21 48', '02 19 17 43',
    '03 05 15 52', '03 20 16 48',
    '04 04 20 45', '04 20 03 57',
    '05 05 14 09', '05 21 03 12',
    '06 05 18 23', '06 21 11 14',
    '07 07 04 40', '07 22 22 09',
    '08 07 14 28', '08 23 05 10',
    '09 07 17 18', '09 23 02 43',
    '10 08 08 51', '10 23 11 57',
    '11 07 11 57', '11 22 09 26',
    '12 07 04 44', '12 21 22 43'];

m_seasons['1993'] = [
    '01 05 15 57', '01 20 09 23',
    '02 04 03 37', '02 18 23 35',
    '03 05 21 43', '03 20 22 41',
    '04 05 02 37', '04 20 09 49',
    '05 05 20 02', '05 21 09 02',
    '06 06 00 15', '06 21 17 00',
    '07 07 10 32', '07 23 03 51',
    '08 07 20 18', '08 23 10 50',
    '09 07 23 08', '09 23 08 22',
    '10 08 14 40', '10 23 17 37',
    '11 07 17 46', '11 22 15 07',
    '12 07 10 34', '12 22 04 26'];

m_seasons['1994'] = [
    '01 05 21 48', '01 20 15 07',
    '02 04 09 31', '02 19 05 21',
    '03 06 03 37', '03 21 04 28',
    '04 05 08 31', '04 20 15 36',
    '05 06 01 54', '05 21 14 49',
    '06 06 06 05', '06 21 22 48',
    '07 07 16 20', '07 23 09 41',
    '08 08 02 04', '08 23 16 44',
    '09 08 04 55', '09 23 14 19',
    '10 08 20 29', '10 23 23 36',
    '11 07 23 36', '11 22 21 06',
    '12 07 16 23', '12 22 10 22'];

m_seasons['1995'] = [
    '01 06 03 34', '01 20 21 00',
    '02 04 15 13', '02 19 11 11',
    '03 06 09 16', '03 21 10 15',
    '04 05 14 08', '04 20 21 21',
    '05 06 07 30', '05 21 20 34',
    '06 06 11 42', '06 22 04 34',
    '07 07 22 01', '07 23 15 30',
    '08 08 07 52', '08 23 22 35',
    '09 08 10 48', '09 23 20 13',
    '10 09 02 27', '10 24 05 31',
    '11 08 05 35', '11 23 03 01',
    '12 07 22 22', '12 22 16 17'];

m_seasons['1996'] = [
    '01 06 09 31', '01 21 02 52',
    '02 04 21 08', '02 19 17 01',
    '03 05 15 10', '03 20 16 03',
    '04 04 20 02', '04 20 03 10',
    '05 05 13 26', '05 21 02 23',
    '06 05 17 41', '06 21 10 24',
    '07 07 04 00', '07 22 21 19',
    '08 07 13 49', '08 23 04 23',
    '09 07 16 42', '09 23 02 00',
    '10 08 08 19', '10 23 11 19',
    '11 07 11 26', '11 22 08 49',
    '12 07 04 14', '12 21 22 06'];

m_seasons['1997'] = [
    '01 05 15 24', '01 20 08 42',
    '02 04 03 02', '02 18 22 51',
    '03 05 21 04', '03 20 21 55',
    '04 05 01 56', '04 20 09 03',
    '05 05 19 20', '05 21 08 18',
    '06 05 23 33', '06 21 16 20',
    '07 07 09 50', '07 23 03 16',
    '08 07 19 36', '08 23 10 19',
    '09 07 22 29', '09 23 07 56',
    '10 08 14 06', '10 23 17 15',
    '11 07 17 15', '11 22 14 48',
    '12 07 10 05', '12 22 04 07'];

m_seasons['1998'] = [
    '01 05 21 18', '01 20 14 46',
    '02 04 08 57', '02 19 04 55',
    '03 06 02 57', '03 21 03 55',
    '04 05 07 45', '04 20 14 57',
    '05 06 01 03', '05 21 14 06',
    '06 06 05 13', '06 21 22 03',
    '07 07 15 31', '07 23 08 55',
    '08 08 01 20', '08 23 15 59',
    '09 08 04 16', '09 23 13 37',
    '10 08 19 56', '10 23 22 58',
    '11 07 23 08', '11 22 20 34',
    '12 07 16 01', '12 22 09 56'];

m_seasons['1999'] = [
    '01 06 03 17', '01 20 20 37',
    '02 04 14 57', '02 19 10 47',
    '03 06 08 58', '03 21 09 46',
    '04 05 13 45', '04 20 20 46',
    '05 06 07 01', '05 21 19 53',
    '06 06 11 09', '06 22 03 49',
    '07 07 21 25', '07 23 14 44',
    '08 08 07 14', '08 23 21 51',
    '09 08 10 10', '09 23 19 31',
    '10 09 01 48', '10 24 04 52',
    '11 08 04 58', '11 23 02 25',
    '12 07 21 47', '12 22 15 44'];

m_seasons['2000'] = [
    '01 06 09 01', '01 21 02 23',
    '02 04 20 40', '02 19 16 33',
    '03 05 14 43', '03 20 15 35',
    '04 04 19 32', '04 20 02 40',
    '05 05 12 50', '05 21 01 50',
    '06 05 16 59', '06 21 09 48',
    '07 07 03 14', '07 22 20 43',
    '08 07 13 03', '08 23 03 49',
    '09 07 15 59', '09 23 01 27',
    '10 08 07 38', '10 23 10 47',
    '11 07 10 48', '11 22 08 19',
    '12 07 03 37', '12 21 21 37'];

m_seasons['2001'] = [
    '01 05 14 49', '01 20 08 16',
    '02 04 02 29', '02 18 22 27',
    '03 05 20 32', '03 20 21 31',
    '04 05 01 24', '04 20 08 36',
    '05 05 18 45', '05 21 07 44',
    '06 05 22 54', '06 21 15 38',
    '07 07 09 07', '07 23 02 26',
    '08 07 18 52', '08 23 09 27',
    '09 07 21 46', '09 23 07 04',
    '10 08 13 25', '10 23 16 25',
    '11 07 16 37', '11 22 14 00',
    '12 07 09 29', '12 22 03 21'];

m_seasons['2002'] = [
    '01 05 20 43', '01 20 14 02',
    '02 04 08 24', '02 19 04 13',
    '03 06 02 27', '03 21 03 16',
    '04 05 07 18', '04 20 14 21',
    '05 06 00 37', '05 21 13 29',
    '06 06 04 45', '06 21 21 24',
    '07 07 14 56', '07 23 08 15',
    '08 08 00 39', '08 23 15 17',
    '09 08 03 31', '09 23 12 55',
    '10 08 19 09', '10 23 22 18',
    '11 07 22 22', '11 22 19 54',
    '12 07 15 14', '12 22 09 14'];

m_seasons['2003'] = [
    '01 06 02 28', '01 20 19 53',
    '02 04 14 05', '02 19 10 00',
    '03 06 08 05', '03 21 09 00',
    '04 05 12 52', '04 20 20 03',
    '05 06 06 10', '05 21 19 12',
    '06 06 10 20', '06 22 03 10',
    '07 07 20 36', '07 23 14 04',
    '08 08 06 24', '08 23 21 08',
    '09 08 09 20', '09 23 18 47',
    '10 09 01 01', '10 24 04 08',
    '11 08 04 13', '11 23 01 43',
    '12 07 21 05', '12 22 15 04'];

m_seasons['2004'] = [
    '01 06 08 19', '01 21 01 42',
    '02 04 19 56', '02 19 15 50',
    '03 05 13 56', '03 20 14 49',
    '04 04 18 43', '04 20 01 50',
    '05 05 12 02', '05 21 00 59',
    '06 05 16 14', '06 21 08 57',
    '07 07 02 31', '07 22 19 50',
    '08 07 12 20', '08 23 02 53',
    '09 07 15 13', '09 23 00 30',
    '10 08 06 49', '10 23 09 49',
    '11 07 09 59', '11 22 07 22',
    '12 07 02 49', '12 21 20 42'];

m_seasons['2005'] = [
    '01 05 14 03', '01 20 07 22',
    '02 04 01 43', '02 18 21 32',
    '03 05 19 45', '03 20 20 33',
    '04 05 00 34', '04 20 07 37',
    '05 05 17 53', '05 21 06 47',
    '06 05 22 02', '06 21 14 46',
    '07 07 08 17', '07 23 01 41',
    '08 07 18 03', '08 23 08 45',
    '09 07 20 57', '09 23 06 23',
    '10 08 12 33', '10 23 15 42',
    '11 07 15 42', '11 22 13 15',
    '12 07 08 33', '12 22 02 35'];

m_seasons['2006'] = [
    '01 05 19 47', '01 20 13 15',
    '02 04 07 27', '02 19 03 26',
    '03 06 01 29', '03 21 02 26',
    '04 05 06 15', '04 20 13 26',
    '05 05 23 31', '05 21 12 32',
    '06 06 03 37', '06 21 20 26',
    '07 07 13 51', '07 23 07 18',
    '08 07 23 41', '08 23 14 23',
    '09 08 02 39', '09 23 12 03',
    '10 08 18 21', '10 23 21 26',
    '11 07 21 35', '11 22 19 02',
    '12 07 14 27', '12 22 08 22'];

m_seasons['2007'] = [
    '01 06 01 40', '01 20 19 01',
    '02 04 13 18', '02 19 09 09',
    '03 06 07 18', '03 21 08 07',
    '04 05 12 05', '04 20 19 07',
    '05 06 05 20', '05 21 18 12',
    '06 06 09 27', '06 22 02 06',
    '07 07 19 42', '07 23 13 00',
    '08 08 05 31', '08 23 20 08',
    '09 08 08 29', '09 23 17 51',
    '10 09 00 11', '10 24 03 15',
    '11 08 03 24', '11 23 00 50',
    '12 07 20 14', '12 22 14 08'];

m_seasons['2008'] = [
    '01 06 07 25', '01 21 00 44',
    '02 04 19 00', '02 19 14 50',
    '03 05 12 59', '03 20 13 48',
    '04 04 17 46', '04 20 00 51',
    '05 05 11 03', '05 21 00 01',
    '06 05 15 12', '06 21 07 59',
    '07 07 01 27', '07 22 18 55',
    '08 07 11 16', '08 23 02 02',
    '09 07 14 14', '09 22 23 44',
    '10 08 05 57', '10 23 09 09',
    '11 07 09 11', '11 22 06 44',
    '12 07 02 02', '12 21 20 04'];

m_seasons['2009'] = [
    '01 05 13 14', '01 20 06 40',
    '02 04 00 50', '02 18 20 46',
    '03 05 18 48', '03 20 19 44',
    '04 04 23 34', '04 20 06 44',
    '05 05 16 51', '05 21 05 51',
    '06 05 20 59', '06 21 13 46',
    '07 07 07 13', '07 23 00 36',
    '08 07 17 01', '08 23 07 39',
    '09 07 19 58', '09 23 05 19',
    '10 08 11 40', '10 23 14 43',
    '11 07 14 56', '11 22 12 23',
    '12 07 07 52', '12 22 01 47'];

m_seasons['2010'] = [
    '01 05 19 09', '01 20 12 28',
    '02 04 06 48', '02 19 02 36',
    '03 06 00 46', '03 21 01 32',
    '04 05 05 30', '04 20 12 30',
    '05 05 22 44', '05 21 11 34',
    '06 06 02 49', '06 21 19 28',
    '07 07 13 02', '07 23 06 21',
    '08 07 22 49', '08 23 13 27',
    '09 08 01 45', '09 23 11 09',
    '10 08 17 26', '10 23 20 35',
    '11 07 20 42', '11 22 18 15',
    '12 07 13 38', '12 22 07 38'];

m_seasons['2011'] = [
    '01 06 00 55', '01 20 18 19',
    '02 04 12 33', '02 19 08 25',
    '03 06 06 30', '03 21 07 21',
    '04 05 11 12', '04 20 18 17',
    '05 06 04 23', '05 21 17 21',
    '06 06 08 27', '06 22 01 16',
    '07 07 18 42', '07 23 12 12',
    '08 08 04 33', '08 23 19 21',
    '09 08 07 34', '09 23 17 05',
    '10 08 23 19', '10 24 02 30',
    '11 08 02 35', '11 23 00 08',
    '12 07 19 29', '12 22 13 30'];

m_seasons['2012'] = [
    '01 06 06 44', '01 21 00 10',
    '02 04 18 22', '02 19 14 18',
    '03 05 12 21', '03 20 13 14',
    '04 04 17 06', '04 20 00 12',
    '05 05 10 20', '05 20 23 16',
    '06 05 14 26', '06 21 07 09',
    '07 07 00 41', '07 22 18 01',
    '08 07 10 31', '08 23 01 07',
    '09 07 13 29', '09 22 22 49',
    '10 08 05 12', '10 23 08 14',
    '11 07 08 26', '11 22 05 50',
    '12 07 01 19', '12 21 19 12'];

m_seasons['2013'] = [
    '01 05 12 34', '01 20 05 52',
    '02 04 00 13', '02 18 20 02',
    '03 05 18 15', '03 20 19 02',
    '04 04 23 02', '04 20 06 03',
    '05 05 16 18', '05 21 05 09',
    '06 05 20 23', '06 21 13 04',
    '07 07 06 35', '07 22 23 56',
    '08 07 16 20', '08 23 07 02',
    '09 07 19 16', '09 23 04 44',
    '10 08 10 58', '10 23 14 10',
    '11 07 14 14', '11 22 11 48',
    '12 07 07 09', '12 22 01 11'];

m_seasons['2014'] = [
    '01 05 18 24', '01 20 11 51',
    '02 04 06 03', '02 19 01 59',
    '03 06 00 02', '03 21 00 57',
    '04 05 04 47', '04 20 11 56',
    '05 05 21 59', '05 21 10 59',
    '06 06 02 03', '06 21 18 51',
    '07 07 12 15', '07 23 05 41',
    '08 07 22 02', '08 23 12 46',
    '09 08 01 01', '09 23 10 29',
    '10 08 16 48', '10 23 19 57',
    '11 07 20 07', '11 22 17 38',
    '12 07 13 04', '12 22 07 03'];

m_seasons['2015'] = [
    '01 06 00 21', '01 20 17 43',
    '02 04 11 58', '02 19 07 50',
    '03 06 05 56', '03 21 06 45',
    '04 05 10 39', '04 20 17 42',
    '05 06 03 53', '05 21 16 45',
    '06 06 07 58', '06 22 00 38',
    '07 07 18 12', '07 23 11 30',
    '08 08 04 01', '08 23 18 37',
    '09 08 07 00', '09 23 16 21',
    '10 08 22 43', '10 24 01 47',
    '11 08 01 59', '11 22 23 25',
    '12 07 18 53', '12 22 12 48'];

function f_pad_0(num, size) {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
}

function f_get_season(pYear, pMonth, pDay, pHour, pMin) {
    var v_year = '' + (parseInt(pYear) + 1911);
    var arr_season_dates = m_seasons[v_year];
    var v_date_str = f_pad_0(pMonth, 2) + ' ' + f_pad_0(pDay, 2) + ' ' + f_pad_0(pHour, 2) + ' ' + f_pad_0(pMin, 2);
    var v_season = -1;
    for (var i=0; i<arr_season_dates.length; i++) {
        if (v_date_str > arr_season_dates[i]) {
            v_season = i;
        } else {
            break;
        }
    }
    return v_season;
}

function f_get_season_title(idx) {
    var _idx = (idx + 24) % 24; // just for not crash
    return m_season_titles[_idx];
}

