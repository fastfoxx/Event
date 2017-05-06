var timeA = [[1719, 1802, 1845, 1928, 2011, 2054, 2137, 2220, 2303, 2346], [29, 112, 155, 238, 321, 404, 447, 530, 613, 656, 739, 822, 905, 948, 1031, 1114, 1157, 1240, 1323, 1406, 1449, 1532, 1615, 1658, 1741, 1824, 1907, 1950, 2033, 2116, 2159, 2242, 2325], [8, 51, 134, 217, 300, 343, 426, 509, 552, 635, 718, 801, 844, 927, 1010, 1053, 1136, 1219, 1302, 1345, 1428, 1511, 1554, 1637, 1720, 1803, 1846, 1929, 2012, 2055, 2138, 2221, 2304, 2347], [30, 113, 156, 239, 322, 405, 448, 531, 614, 657, 740, 823, 906, 949, 1032, 1115, 1158, 1241, 1324, 1407, 1450, 1533, 1616, 1659, 1742, 1825, 1908, 1951, 2034, 2117, 2160, 2243, 2326], [9, 52, 135, 218, 301, 344, 427, 510, 553, 636, 719, 802, 845, 928, 1011, 1054, 1137, 1220, 1303, 1346, 1429, 1512, 1555, 1638, 1721, 1804, 1847, 1930, 2013, 2056, 2139, 2222, 2305, 2348], [31, 114, 157, 240, 323, 406, 449, 532, 615, 658, 741, 824, 907, 950, 1033, 1116, 1159, 1242, 1325, 1408, 1451, 1534, 1617, 1660, 1743, 1826, 1909, 1952, 2035, 2118, 2201, 2244, 2327], [10, 53, 136, 219, 302, 345, 428, 511, 554, 637, 720, 803, 846, 929, 1012, 1055, 1138, 1221, 1304, 1347, 1430, 1513, 1556, 1639, 1722, 1805, 1848, 1931, 2014, 2057, 2140, 2223, 2306, 2349], [32, 115, 158, 241, 324, 407, 450, 533, 616, 659, 742, 825, 908, 951, 1034, 1117, 1160, 1243, 1326, 1409, 1452, 1535, 1618, 1701, 1744, 1827, 1910, 1953, 2036, 2119, 2202, 2245, 2328], [11, 54, 137, 220, 303, 346, 429, 512, 555, 638, 721, 804, 847, 930, 1013, 1056, 1139, 1222, 1305, 1348, 1431, 1514, 1557, 1640, 1723, 1806, 1849, 1932, 2015, 2058, 2141, 2224, 2307, 2350], [33, 116, 159, 242, 325, 408, 451, 534, 617, 660, 743, 826, 909, 952, 1035, 1118, 1201, 1244, 1327, 1410, 1453, 1536, 1619, 1702, 1745, 1828, 1911, 1954, 2037, 2120, 2203, 2246, 2329], [12, 55, 138, 221, 304, 347, 430, 513, 556, 639, 722, 805, 848, 931, 1014, 1057, 1140, 1223, 1306, 1349, 1432, 1515, 1558, 1641, 1724, 1807, 1850, 1933, 2016, 2059, 2142, 2225, 2308, 2351], [34, 117, 160, 243, 326, 409, 452, 535, 618, 701, 744, 827, 910, 953, 1036, 1119, 1202, 1245, 1328, 1411, 1454, 1537, 1620, 1703, 1746, 1829, 1912, 1955, 2038, 2121, 2204, 2247, 2330], [13, 56, 139, 222, 305, 348, 431, 514, 557, 640, 723, 806, 849, 932, 1015, 1058, 1141, 1224, 1307, 1350, 1433, 1516, 1559, 1642, 1725, 1808, 1851, 1934, 2017, 2060, 2143, 2226, 2309, 2352], [35, 118, 201, 244, 327, 410, 453, 536, 619, 702, 745, 828, 911, 954, 1037, 1120, 1203, 1246, 1329, 1412, 1455, 1538, 1621, 1704, 1747, 1830, 1913, 1956, 2039, 2122, 2205, 2248, 2331], [14, 57, 140, 223, 306, 349, 432, 515, 558, 641, 724, 807, 850, 933, 1016, 1059, 1142, 1225, 1308, 1351, 1434, 1517, 1560, 1643, 1726, 1809, 1852, 1935, 2018, 2101, 2144, 2227, 2310, 2353], [36, 119, 202, 245, 328, 411, 454, 537, 620, 703, 746, 829, 912, 955, 1038, 1121, 1204, 1247, 1330, 1413, 1456, 1539, 1622, 1705, 1748, 1831, 1914, 1957, 2040, 2123, 2206, 2249, 2332], [15, 58, 141, 224, 307, 350, 433, 516, 559, 642, 725, 808, 851, 934, 1017, 1060, 1143, 1226, 1309, 1352, 1435, 1518, 1601, 1644, 1727, 1810, 1853, 1936, 2019, 2102, 2145, 2228, 2311, 2354], [37, 120, 203, 246, 329, 412, 455, 538, 621, 704, 747, 830, 913, 956, 1039, 1122, 1205, 1248, 1331, 1414, 1457, 1540, 1623, 1706, 1749, 1832, 1915, 1958, 2041, 2124, 2207, 2250, 2333], [16, 59, 142, 225, 308, 351, 434, 517, 560, 643, 726, 809, 852, 935, 1018, 1101, 1144, 1227, 1310, 1353, 1436, 1519, 1602, 1645, 1728, 1811, 1854, 1937, 2020, 2103, 2146, 2229, 2312, 2355], [38, 121, 204, 247, 330, 413, 456, 539, 622, 705, 748, 831, 914, 957, 1040, 1123, 1206, 1249, 1332, 1415, 1458, 1541, 1624, 1707, 1750, 1833, 1916, 1959, 2042, 2125, 2208, 2251, 2334], [17, 60, 143, 226, 309, 352, 435, 518, 601, 644, 727, 810, 853, 936, 1019, 1102, 1145, 1228, 1311, 1354, 1437, 1520, 1603, 1646, 1729, 1812, 1855, 1938, 2021, 2104, 2147, 2230, 2313, 2356], [39, 122, 205, 248, 331, 414, 457, 540, 623, 706, 749, 832, 915, 958, 1041, 1124, 1207, 1250, 1333, 1416, 1459, 1542, 1625, 1708, 1751, 1834, 1917, 1960, 2043, 2126, 2209, 2252, 2335], [18, 101, 144, 227, 310, 353, 436, 519, 602, 645, 728, 811, 854, 937, 1020, 1103, 1146, 1229, 1312, 1355, 1438, 1521, 1604, 1647, 1730, 1813, 1856, 1939, 2022, 2105, 2148, 2231, 2314, 2357], [40, 123, 206, 249, 332, 415, 458, 541, 624, 707, 750, 833, 916, 959, 1042, 1125, 1208, 1251, 1334, 1417, 1460, 1543, 1626, 1709, 1752, 1835, 1918, 2001, 2044, 2127, 2210, 2253, 2336], [19, 102, 145, 228, 311, 354, 437, 520, 603, 646, 729, 812, 855, 938, 1021, 1104, 1147, 1230, 1313, 1356, 1439, 1522, 1605, 1648, 1731, 1814, 1857, 1940, 2023, 2106, 2149, 2232, 2315, 2358], [41, 124, 207, 250, 333, 416, 459, 542, 625, 708, 751, 834, 917, 960, 1043, 1126, 1209, 1252, 1335, 1418, 1501, 1544, 1627, 1710, 1753, 1836, 1919, 2002, 2045, 2128, 2211, 2254, 2337], [20, 103, 146, 229, 312, 355, 438, 521, 604, 647, 730, 813, 856, 939, 1022, 1105, 1148, 1231, 1314, 1357, 1440, 1523, 1606, 1649, 1732, 1815, 1858, 1941, 2024, 2107, 2150, 2233, 2316, 2359], [42, 125, 208, 251, 334, 417, 460, 543, 626, 709, 752, 835, 918, 1001, 1044, 1127, 1210, 1253, 1336, 1419, 1502, 1545, 1628, 1711, 1754, 1837, 1920, 2003, 2046, 2129, 2212, 2255, 2338], [21, 104, 147, 230, 313, 356, 439, 522, 605, 648, 731, 814, 857, 940, 1023, 1106, 1149, 1232, 1315, 1358, 1441, 1524, 1607, 1650, 1733, 1816, 1859, 1942, 2025, 2108, 2151, 2234, 2317, 2360], [43, 126, 209, 252, 335, 418, 501, 544, 627, 710, 753, 836, 919, 1002, 1045, 1128, 1211, 1254, 1337, 1420, 1503, 1546, 1629, 1712, 1755, 1838, 1921, 2004, 2047, 2130, 2213, 2256, 2339], [22, 105, 148, 231, 314, 357, 440, 523, 606, 649, 732, 815, 858, 941, 1024, 1107, 1150, 1233, 1316, 1359, 1442, 1525, 1608, 1651, 1734, 1817, 1860, 1943, 2026, 2109, 2152, 2235, 2318], [1, 44, 127, 210, 253, 336, 419, 502, 545, 628, 711, 754, 837, 920, 1003, 1046, 1129, 1212, 1255, 1338, 1421, 1504, 1547, 1630, 1713, 1756, 1839, 1922, 2005, 2048, 2131, 2214, 2257, 2340], [23, 106, 149, 232, 315, 358, 441, 524, 607, 650, 733, 816, 859, 942, 1025, 1108, 1151, 1234, 1317, 1360, 1443, 1526, 1609, 1652, 1735, 1818, 1901, 1944, 2027, 2110, 2153, 2236, 2319], [2, 45, 128, 211, 254, 337, 420, 503, 546, 629, 712, 755, 838, 921, 1004, 1047, 1130, 1213, 1256, 1339, 1422, 1505, 1548, 1631, 1714, 1757, 1840, 1923, 2006, 2049, 2132, 2215, 2258, 2341], [24, 107, 150, 233, 316, 359, 442, 525, 608, 651, 734, 817, 860, 943, 1026, 1109, 1152, 1235, 1318, 1401, 1444, 1527, 1610, 1653, 1736, 1819, 1902, 1945, 2028, 2111, 2154, 2237, 2320], [3, 46, 129, 212, 255, 338, 421, 504, 547, 630, 713, 756, 839, 922, 1005, 1048, 1131, 1214, 1257, 1340, 1423, 1506, 1549, 1632, 1715, 1758, 1841, 1924, 2007, 2050, 2133, 2216, 2259, 2342], [25, 108, 151, 234, 317, 360, 443, 526, 609, 652, 735, 818, 901, 944, 1027, 1110, 1153, 1236, 1319, 1402, 1445, 1528, 1611, 1654, 1737, 1820, 1903, 1946, 2029, 2112, 2155, 2238, 2321], [4, 47, 130, 213, 256, 339, 422, 505, 548, 631, 714, 757, 840, 923, 1006, 1049, 1132, 1215, 1258, 1341, 1424, 1507, 1550, 1633, 1716, 1759, 1842, 1925, 2008, 2051, 2134, 2217, 2260, 2343], [26, 109, 152, 235, 318, 401, 444, 527, 610, 653, 736, 819, 902, 945, 1028, 1111, 1154, 1237, 1320, 1403, 1446, 1529, 1612, 1655, 1738, 1821, 1904, 1947, 2030, 2113, 2156, 2239, 2322], [5, 48, 131, 214, 257, 340, 423, 506, 549, 632, 715, 758, 841, 924, 1007, 1050, 1133, 1216, 1259, 1342, 1425, 1508, 1551, 1634, 1717, 1760, 1843, 1926, 2009, 2052, 2135, 2218, 2301, 2344], [27, 110, 153, 236, 319, 402, 445, 528, 611, 654, 737, 820, 903, 946, 1029, 1112, 1155, 1238, 1321, 1404, 1447, 1530, 1613, 1656, 1739, 1822, 1905, 1948, 2031, 2114, 2157, 2240, 2323], [6, 49, 132, 215, 258, 341, 424, 507, 550, 633, 716, 759, 842, 925, 1008, 1051, 1134, 1217, 1260, 1343, 1426, 1509, 1552, 1635, 1718, 1801, 1844, 1927, 2010, 2053, 2136, 2219, 2302, 2345]];
var timeB = [[1619, 1702, 1745, 1828, 1911, 1954, 2037, 2120, 2203, 2246, 2329], [12, 55, 138, 221, 304, 347, 430, 513, 556, 639, 722, 805, 848, 931, 1014, 1057, 1140, 1223, 1306, 1349, 1432, 1515, 1558, 1641, 1724, 1807, 1850, 1933, 2016, 2059, 2142, 2225, 2308, 2351], [34, 117, 200, 243, 326, 409, 452, 535, 618, 701, 744, 827, 910, 953, 1036, 1119, 1202, 1245, 1328, 1411, 1454, 1537, 1620, 1703, 1746, 1829, 1912, 1955, 2038, 2121, 2204, 2247, 2330], [13, 56, 139, 222, 305, 348, 431, 514, 557, 640, 723, 806, 849, 932, 1015, 1058, 1141, 1224, 1307, 1350, 1433, 1516, 1559, 1642, 1725, 1808, 1851, 1934, 2017, 2060, 2143, 2226, 2309, 2352], [35, 118, 201, 244, 327, 410, 453, 536, 619, 702, 745, 828, 911, 954, 1037, 1120, 1203, 1246, 1329, 1412, 1455, 1538, 1621, 1704, 1747, 1830, 1913, 1956, 2039, 2122, 2205, 2248, 2331], [14, 57, 140, 223, 306, 349, 432, 515, 558, 641, 724, 807, 850, 933, 1016, 1059, 1142, 1225, 1308, 1351, 1434, 1517, 1560, 1643, 1726, 1809, 1852, 1935, 2018, 2101, 2144, 2227, 2310, 2353], [36, 119, 202, 245, 328, 411, 454, 537, 620, 703, 746, 829, 912, 955, 1038, 1121, 1204, 1247, 1330, 1413, 1456, 1539, 1622, 1705, 1748, 1831, 1914, 1957, 2040, 2123, 2206, 2249, 2332], [15, 58, 141, 224, 307, 350, 433, 516, 559, 642, 725, 808, 851, 934, 1017, 1060, 1143, 1226, 1309, 1352, 1435, 1518, 1601, 1644, 1727, 1810, 1853, 1936, 2019, 2102, 2145, 2228, 2311, 2354], [37, 120, 203, 246, 329, 412, 455, 538, 621, 704, 747, 830, 913, 956, 1039, 1122, 1205, 1248, 1331, 1414, 1457, 1540, 1623, 1706, 1749, 1832, 1915, 1958, 2041, 2124, 2207, 2250, 2333], [16, 59, 142, 225, 308, 351, 434, 517, 560, 643, 726, 809, 852, 935, 1018, 1101, 1144, 1227, 1310, 1353, 1436, 1519, 1602, 1645, 1728, 1811, 1854, 1937, 2020, 2103, 2146, 2229, 2312, 2355], [38, 121, 204, 247, 330, 413, 456, 539, 622, 705, 748, 831, 914, 957, 1040, 1123, 1206, 1249, 1332, 1415, 1458, 1541, 1624, 1707, 1750, 1833, 1916, 1959, 2042, 2125, 2208, 2251, 2334], [17, 60, 143, 226, 309, 352, 435, 518, 601, 644, 727, 810, 853, 936, 1019, 1102, 1145, 1228, 1311, 1354, 1437, 1520, 1603, 1646, 1729, 1812, 1855, 1938, 2021, 2104, 2147, 2230, 2313, 2356], [39, 122, 205, 248, 331, 414, 457, 540, 623, 706, 749, 832, 915, 958, 1041, 1124, 1207, 1250, 1333, 1416, 1459, 1542, 1625, 1708, 1751, 1834, 1917, 1960, 2043, 2126, 2209, 2252, 2335], [18, 101, 144, 227, 310, 353, 436, 519, 602, 645, 728, 811, 854, 937, 1020, 1103, 1146, 1229, 1312, 1355, 1438, 1521, 1604, 1647, 1730, 1813, 1856, 1939, 2022, 2105, 2148, 2231, 2314, 2357], [40, 123, 206, 249, 332, 415, 458, 541, 624, 707, 750, 833, 916, 959, 1042, 1125, 1208, 1251, 1334, 1417, 1460, 1543, 1626, 1709, 1752, 1835, 1918, 2001, 2044, 2127, 2210, 2253, 2336], [19, 102, 145, 228, 311, 354, 437, 520, 603, 646, 729, 812, 855, 938, 1021, 1104, 1147, 1230, 1313, 1356, 1439, 1522, 1605, 1648, 1731, 1814, 1857, 1940, 2023, 2106, 2149, 2232, 2315, 2358], [41, 124, 207, 250, 333, 416, 459, 542, 625, 708, 751, 834, 917, 960, 1043, 1126, 1209, 1252, 1335, 1418, 1501, 1544, 1627, 1710, 1753, 1836, 1919, 2002, 2045, 2128, 2211, 2254, 2337], [20, 103, 146, 229, 312, 355, 438, 521, 604, 647, 730, 813, 856, 939, 1022, 1105, 1148, 1231, 1314, 1357, 1440, 1523, 1606, 1649, 1732, 1815, 1858, 1941, 2024, 2107, 2150, 2233, 2316, 2359], [42, 125, 208, 251, 334, 417, 460, 543, 626, 709, 752, 835, 918, 1001, 1044, 1127, 1210, 1253, 1336, 1419, 1502, 1545, 1628, 1711, 1754, 1837, 1920, 2003, 2046, 2129, 2212, 2255, 2338], [21, 104, 147, 230, 313, 356, 439, 522, 605, 648, 731, 814, 857, 940, 1023, 1106, 1149, 1232, 1315, 1358, 1441, 1524, 1607, 1650, 1733, 1816, 1859, 1942, 2025, 2108, 2151, 2234, 2317, 2360], [43, 126, 209, 252, 335, 418, 501, 544, 627, 710, 753, 836, 919, 1002, 1045, 1128, 1211, 1254, 1337, 1420, 1503, 1546, 1629, 1712, 1755, 1838, 1921, 2004, 2047, 2130, 2213, 2256, 2339], [22, 105, 148, 231, 314, 357, 440, 523, 606, 649, 732, 815, 858, 941, 1024, 1107, 1150, 1233, 1316, 1359, 1442, 1525, 1608, 1651, 1734, 1817, 1860, 1943, 2026, 2109, 2152, 2235, 2318], [1, 44, 127, 210, 253, 336, 419, 502, 545, 628, 711, 754, 837, 920, 1003, 1046, 1129, 1212, 1255, 1338, 1421, 1504, 1547, 1630, 1713, 1756, 1839, 1922, 2005, 2048, 2131, 2214, 2257, 2340], [23, 106, 149, 232, 315, 358, 441, 524, 607, 650, 733, 816, 859, 942, 1025, 1108, 1151, 1234, 1317, 1360, 1443, 1526, 1609, 1652, 1735, 1818, 1901, 1944, 2027, 2110, 2153, 2236, 2319], [2, 45, 128, 211, 254, 337, 420, 503, 546, 629, 712, 755, 838, 921, 1004, 1047, 1130, 1213, 1256, 1339, 1422, 1505, 1548, 1631, 1714, 1757, 1840, 1923, 2006, 2049, 2132, 2215, 2258, 2341], [24, 107, 150, 233, 316, 359, 442, 525, 608, 651, 734, 817, 860, 943, 1026, 1109, 1152, 1235, 1318, 1401, 1444, 1527, 1610, 1653, 1736, 1819, 1902, 1945, 2028, 2111, 2154, 2237, 2320], [3, 46, 129, 212, 255, 338, 421, 504, 547, 630, 713, 756, 839, 922, 1005, 1048, 1131, 1214, 1257, 1340, 1423, 1506, 1549, 1632, 1715, 1758, 1841, 1924, 2007, 2050, 2133, 2216, 2259, 2342], [25, 108, 151, 234, 317, 360, 443, 526, 609, 652, 735, 818, 901, 944, 1027, 1110, 1153, 1236, 1319, 1402, 1445, 1528, 1611, 1654, 1737, 1820, 1903, 1946, 2029, 2112, 2155, 2238, 2321], [4, 47, 130, 213, 256, 339, 422, 505, 548, 631, 714, 757, 840, 923, 1006, 1049, 1132, 1215, 1258, 1341, 1424, 1507, 1550, 1633, 1716, 1759, 1842, 1925, 2008, 2051, 2134, 2217, 2260, 2343], [26, 109, 152, 235, 318, 401, 444, 527, 610, 653, 736, 819, 902, 945, 1028, 1111, 1154, 1237, 1320, 1403, 1446, 1529, 1612, 1655, 1738, 1821, 1904, 1947, 2030, 2113, 2156, 2239, 2322], [5, 48, 131, 214, 257, 340, 423, 506, 549, 632, 715, 758, 841, 924, 1007, 1050, 1133, 1216, 1259, 1342, 1425, 1508, 1551, 1634, 1717, 1760, 1843, 1926, 2009, 2052, 2135, 2218, 2301, 2344], [27, 110, 153, 236, 319, 402, 445, 528, 611, 654, 737, 820, 903, 946, 1029, 1112, 1155, 1238, 1321, 1404, 1447, 1530, 1613, 1656, 1739, 1822, 1905, 1948, 2031, 2114, 2157, 2240, 2323], [6, 49, 132, 215, 258, 341, 424, 507, 550, 633, 716, 759, 842, 925, 1008, 1051, 1134, 1217, 1260, 1343, 1426, 1509, 1552, 1635, 1718, 1801, 1844, 1927, 2010, 2053, 2136, 2219, 2302, 2345], [28, 111, 154, 237, 320, 403, 446, 529, 612, 655, 738, 821, 904, 947, 1030, 1113, 1156, 1239, 1322, 1405, 1448, 1531, 1614, 1657, 1740, 1823, 1906, 1949, 2032, 2115, 2158, 2241, 2324], [7, 50, 133, 216, 259, 342, 425, 508, 551, 634, 717, 760, 843, 926, 1009, 1052, 1135, 1218, 1301, 1344, 1427, 1510, 1553, 1636, 1719, 1802, 1845, 1928, 2011, 2054, 2137, 2220, 2303, 2346], [29, 112, 155, 238, 321, 404, 447, 530, 613, 656, 739, 822, 905, 948, 1031, 1114, 1157, 1240, 1323, 1406, 1449, 1532, 1615, 1658, 1741, 1824, 1907, 1950, 2033, 2116, 2159, 2242, 2325], [8, 51, 134, 217, 260, 343, 426, 509, 552, 635, 718, 801, 844, 927, 1010, 1053, 1136, 1219, 1302, 1345, 1428, 1511, 1554, 1637, 1720, 1803, 1846, 1929, 2012, 2055, 2138, 2221, 2304, 2347], [30, 113, 156, 239, 322, 405, 448, 531, 614, 657, 740, 823, 906, 949, 1032, 1115, 1158, 1241, 1324, 1407, 1450, 1533, 1616, 1659, 1742, 1825, 1908, 1951, 2034, 2117, 2160, 2243, 2326], [9, 52, 135, 218, 301, 344, 427, 510, 553, 636, 719, 802, 845, 928, 1011, 1054, 1137, 1220, 1303, 1346, 1429, 1512, 1555, 1638, 1721, 1804, 1847, 1930, 2013, 2056, 2139, 2222, 2305, 2348], [31, 114, 157, 240, 323, 406, 449, 532, 615, 658, 741, 824, 907, 950, 1033, 1116, 1159, 1242, 1325, 1408, 1451, 1534, 1617, 1660, 1743, 1826, 1909, 1952, 2035, 2118, 2201, 2244, 2327], [10, 53, 136, 219, 302, 345, 428, 511, 554, 637, 720, 803, 846, 929, 1012, 1055, 1138, 1221, 1304, 1347, 1430, 1513, 1556, 1639, 1722, 1805, 1848, 1931, 2014, 2057, 2140, 2223, 2306, 2349], [32, 115, 158, 241, 324, 407, 450, 533, 616, 659, 742, 825, 908, 951, 1034, 1117, 1160, 1243, 1326, 1409, 1452, 1535, 1618, 1701, 1744, 1827, 1910, 1953, 2036, 2119, 2202, 2245]]

var timelist = timeA;

var bgimg;

var active = "CEST"
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var dd = today.getDate();
  var mm = today.getMonth()+1
  var yyyy = today.getFullYear();

	if(dd<10){
		dd='0'+dd;
	};

	if(mm<10){
		mm='0'+mm;
	};

	// add a zero in front of numbers<10
	m = checkTime(m);
	s = checkTime(s);

	t = setTimeout(function() {
	startTime()
	}, 500);
	return [dd,mm,h,m,s];
};


function datetonumber(current_month, current_day) {

	if(parseInt(current_month) === 5) {
		
		current_month = 0;
		current_day = current_day - 2;
	};
	if(parseInt(current_month) === 6) {
		current_month = 26;
	};
	var Value = current_month + parseInt(current_day);

	return Value;
}	

function findnumber(number){
	count = 0;
	for (var j = 0; j < number - 1; j++) {
		count = count + timelist[j].length;
	};
	return count;

};




function whichboss(nummer){
	var checkfloat = (nummer * 1.00) / 3.00;
	var checkint = parseInt(nummer/3);
	var rest = checkfloat - checkint;
	if(rest < 0.1){
		return 'Aomak';
	};
	if(rest > 0.1 && rest < 0.4){
		return 'Excavation';
	};
	if(rest > 0.5 && rest < 0.7){
		return 'Croxar';
	};
};

function unlimited_spawn_works(){
	
	var Day = startTime()[0];
	var Month = startTime()[1];
	var Hour = startTime()[2];
	var Minute = startTime()[3];
	var Second = startTime()[4]; 
	if (Second > 59){
		helpcounter = helpcounter + 1
	}
	var Time = parseInt(String(Hour) + String(Minute));
	var numdate = datetonumber(Month,Day) - 1;
	var counter = 0;
	var check = 200000;
	var chronos = 0;
	var diff = 0;
	var truecount = 0;
	var Value = findnumber(numdate)
	var daytimeamount = timelist[numdate].length;


	for(var i = 0; i<daytimeamount; i++){
		counter = counter + 1;
		diff = Math.abs(timelist[numdate][i] - Time);

		if( check > diff) {
			check = diff;
			chronos = timelist[numdate][i];
			truecount = counter 
		};
	};

	if(Time > chronos && truecount + 1 > daytimeamount){

		chronos = timelist[numdate+1][0];
		truecount = truecount + 1;
	};
	if (Time > chronos && truecount + 1 < daytimeamount){

		chronos = timelist[numdate][truecount]
		truecount = truecount + 1
	}



	var stringtime = String(chronos);
	var boss = whichboss(Value+truecount);
	if (stringtime.length === 1 ) {
		stringtime = '00:0' + stringtime;
	};
	if (stringtime.length === 2 ) {
		stringtime = '00:' + stringtime;
	};
	if (stringtime.length === 3 ) {
		stringtime = '0' + stringtime.substring(0,1) + ':' + stringtime.substring(1,3);
	};
	if (stringtime.length === 4 ) {
		stringtime = stringtime.substring(0,2) + ':' + stringtime.substring(2);
	};
	document.getElementById('oogabooga').innerHTML = Hour + ":" + Minute + ":" + Second
	console.log('The next boss ' + boss + ' will spawn at ' + stringtime) 
 	$("section #bossSpawn h1:nth-of-type(1)").html( stringtime);
    $("section #bossSpawn h1:nth-of-type(2)").html( boss );

    
    if (bgimg != boss ) {
    	bgimg = boss
    	changebg(bgimg);
    }

    function changebg(image){
    	$("html").attr("background",image);
    }

	setTimeout(unlimited_spawn_works, 500) 
}
unlimited_spawn_works();

$( "div#buttons button:nth-of-type(1)" ).click(function() {
  if (active == "CEST") {
  	active = "GMT";
  	$("div#buttons button:nth-of-type(1)").attr("active","1");
  	$("div#buttons button:nth-of-type(2)").attr("active","0");
  	timelist = timeB;
  }
});

$( "div#buttons button:nth-of-type(2)" ).click(function() {
  if (active == "GMT") {
  	active = "CEST";
  	$("div#buttons button:nth-of-type(2)").attr("active","1");
  	$("div#buttons button:nth-of-type(1)").attr("active","0");
  	timelist = timeA;
  }
});