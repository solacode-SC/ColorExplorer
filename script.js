// OKLCH colors from the image
const colors = [
    { name: 'Base 100', oklch: 'oklch(98% 0.02 240)', hex: '#fbfcfe' },
    { name: 'Base 200', oklch: 'oklch(95% 0.03 240)', hex: '#f1f5f9' },
    { name: 'Base 300', oklch: 'oklch(92% 0.04 240)', hex: '#e2e8f0' },
    { name: 'Base Content', oklch: 'oklch(20% 0.05 240)', hex: '#0f172a' },
    { name: 'Primary', oklch: 'oklch(55% 0.3 240)', hex: '#3b82f6' },
    { name: 'Primary Content', oklch: 'oklch(98% 0.01 240)', hex: '#f8fafc' },
    { name: 'Secondary', oklch: 'oklch(70% 0.25 200)', hex: '#14b8a6' },
    { name: 'Secondary Content', oklch: 'oklch(98% 0.01 200)', hex: '#f0fdfa' },
    { name: 'Accent', oklch: 'oklch(65% 0.25 160)', hex: '#10b981' },
    { name: 'Accent Content', oklch: 'oklch(98% 0.01 160)', hex: '#f0fdf4' },
    { name: 'Neutral', oklch: 'oklch(50% 0.05 240)', hex: '#475569' },
    { name: 'Neutral Content', oklch: 'oklch(98% 0.01 240)', hex: '#f8fafc' },
    { name: 'Info', oklch: 'oklch(70% 0.2 220)', hex: '#0ea5e9' },
    { name: 'Info Content', oklch: 'oklch(98% 0.01 220)', hex: '#f0f9ff' },
    { name: 'Success', oklch: 'oklch(65% 0.25 140)', hex: '#22c55e' },
    { name: 'Success Content', oklch: 'oklch(98% 0.01 140)', hex: '#f0fdf4' },
    { name: 'Warning', oklch: 'oklch(80% 0.25 80)', hex: '#fbbf24' },
    { name: 'Warning Content', oklch: 'oklch(20% 0.05 80)', hex: '#451a03' },
    { name: 'Error', oklch: 'oklch(65% 0.3 30)', hex: '#ef4444' },
    { name: 'Error Content', oklch: 'oklch(98% 0.01 30)', hex: '#fef2f2' },

    // Added list
    { name: 'White', oklch: 'oklch(100.00% 0.000 0.0)', hex: '#FFFFFF' },
    { name: 'Black', oklch: 'oklch(0.00% 0.000 0.0)', hex: '#000000' },
    { name: 'Red 50', oklch: 'oklch(95.83% 0.033 32.7)', hex: '#FFEBEE' },
    { name: 'Red 100', oklch: 'oklch(87.79% 0.080 33.7)', hex: '#FFCDD2' },
    { name: 'Red 200', oklch: 'oklch(76.53% 0.128 32.2)', hex: '#EF9A9A' },
    { name: 'Red 300', oklch: 'oklch(66.82% 0.155 30.5)', hex: '#E57373' },
    { name: 'Red 400', oklch: 'oklch(61.46% 0.179 30.1)', hex: '#EF5350' },
    { name: 'Red 500', oklch: 'oklch(58.75% 0.207 30.7)', hex: '#F44336' },
    { name: 'Red 600', oklch: 'oklch(55.45% 0.198 30.7)', hex: '#E53935' },
    { name: 'Red 700', oklch: 'oklch(51.52% 0.187 30.6)', hex: '#D32F2F' },
    { name: 'Red 800', oklch: 'oklch(48.43% 0.178 30.6)', hex: '#C62828' },
    { name: 'Red 900', oklch: 'oklch(44.40% 0.165 30.5)', hex: '#B71C1C' },
    { name: 'Pink 50', oklch: 'oklch(94.39% 0.043 344.0)', hex: '#FCE4EC' },
    { name: 'Pink 100', oklch: 'oklch(85.34% 0.087 340.9)', hex: '#F8BBD0' },
    { name: 'Pink 200', oklch: 'oklch(74.39% 0.133 338.2)', hex: '#F48FB1' },
    { name: 'Pink 300', oklch: 'oklch(64.73% 0.173 336.1)', hex: '#F06292' },
    { name: 'Pink 400', oklch: 'oklch(58.85% 0.198 335.7)', hex: '#EC407A' },
    { name: 'Pink 500', oklch: 'oklch(53.69% 0.211 334.8)', hex: '#E91E63' },
    { name: 'Pink 600', oklch: 'oklch(50.14% 0.203 335.4)', hex: '#D81B60' },
    { name: 'Pink 700', oklch: 'oklch(45.48% 0.189 335.8)', hex: '#C2185B' },
    { name: 'Pink 800', oklch: 'oklch(41.34% 0.175 336.1)', hex: '#AD1457' },
    { name: 'Pink 900', oklch: 'oklch(33.72% 0.155 337.0)', hex: '#880E4F' },
    { name: 'Purple 50', oklch: 'oklch(93.30% 0.030 313.2)', hex: '#F3E5F5' },
    { name: 'Purple 100', oklch: 'oklch(81.65% 0.063 312.4)', hex: '#E1BEE7' },
    { name: 'Purple 200', oklch: 'oklch(70.38% 0.103 311.9)', hex: '#CE93D8' },
    { name: 'Purple 300', oklch: 'oklch(60.36% 0.141 311.6)', hex: '#BA68C8' },
    { name: 'Purple 400', oklch: 'oklch(54.49% 0.165 312.5)', hex: '#AB47BC' },
    { name: 'Purple 500', oklch: 'oklch(48.77% 0.184 313.5)', hex: '#9C27B0' },
    { name: 'Purple 600', oklch: 'oklch(45.41% 0.179 313.8)', hex: '#8E24AA' },
    { name: 'Purple 700', oklch: 'oklch(40.75% 0.167 314.1)', hex: '#7B1FA2' },
    { name: 'Purple 800', oklch: 'oklch(36.63% 0.154 314.3)', hex: '#6A1B9A' },
    { name: 'Purple 900', oklch: 'oklch(28.60% 0.133 315.0)', hex: '#4A148C' },
    { name: 'Deep Purple 50', oklch: 'oklch(93.07% 0.024 300.9)', hex: '#EDE7F6' },
    { name: 'Deep Purple 100', oklch: 'oklch(80.99% 0.053 296.6)', hex: '#D1C4E9' },
    { name: 'Deep Purple 200', oklch: 'oklch(68.61% 0.091 295.6)', hex: '#B39DDB' },
    { name: 'Deep Purple 300', oklch: 'oklch(57.87% 0.134 296.1)', hex: '#9575CD' },
    { name: 'Deep Purple 400', oklch: 'oklch(50.84% 0.163 296.8)', hex: '#7E57C2' },
    { name: 'Deep Purple 500', oklch: 'oklch(43.68% 0.184 297.7)', hex: '#673AB7' },
    { name: 'Deep Purple 600', oklch: 'oklch(40.83% 0.177 298.0)', hex: '#5E35B1' },
    { name: 'Deep Purple 700', oklch: 'oklch(36.37% 0.163 298.4)', hex: '#512DA8' },
    { name: 'Deep Purple 800', oklch: 'oklch(32.53% 0.149 298.7)', hex: '#4527A0' },
    { name: 'Deep Purple 900', oklch: 'oklch(25.56% 0.132 299.7)', hex: '#311B92' },
    { name: 'Indigo 50', oklch: 'oklch(93.30% 0.017 281.8)', hex: '#E8EAF6' },
    { name: 'Indigo 100', oklch: 'oklch(81.33% 0.038 277.6)', hex: '#C5CAE9' },
    { name: 'Indigo 200', oklch: 'oklch(68.49% 0.076 276.0)', hex: '#9FA8DA' },
    { name: 'Indigo 300', oklch: 'oklch(56.49% 0.120 276.5)', hex: '#7986CB' },
    { name: 'Indigo 400', oklch: 'oklch(48.71% 0.155 278.1)', hex: '#5C6BC0' },
    { name: 'Indigo 500', oklch: 'oklch(40.52% 0.191 280.4)', hex: '#3F51B5' },
    { name: 'Indigo 600', oklch: 'oklch(37.80% 0.187 280.8)', hex: '#3949AB' },
    { name: 'Indigo 700', oklch: 'oklch(33.34% 0.177 281.4)', hex: '#303F9F' },
    { name: 'Indigo 800', oklch: 'oklch(29.53% 0.165 281.9)', hex: '#283593' },
    { name: 'Indigo 900', oklch: 'oklch(22.84% 0.147 282.8)', hex: '#1A237E' },
    { name: 'Blue 50', oklch: 'oklch(95.04% 0.013 260.0)', hex: '#E3F2FD' },
    { name: 'Blue 100', oklch: 'oklch(84.81% 0.043 258.1)', hex: '#BBDEFB' },
    { name: 'Blue 200', oklch: 'oklch(74.34% 0.086 256.7)', hex: '#90CAF9' },
    { name: 'Blue 300', oklch: 'oklch(63.85% 0.134 255.4)', hex: '#64B5F6' },
    { name: 'Blue 400', oklch: 'oklch(56.40% 0.173 254.9)', hex: '#42A5F5' },
    { name: 'Blue 500', oklch: 'oklch(48.97% 0.207 254.8)', hex: '#2196F3' },
    { name: 'Blue 600', oklch: 'oklch(45.92% 0.204 254.8)', hex: '#1E88E5' },
    { name: 'Blue 700', oklch: 'oklch(41.53% 0.194 254.9)', hex: '#1976D2' },
    { name: 'Blue 800', oklch: 'oklch(37.58% 0.184 255.0)', hex: '#1565C0' },
    { name: 'Blue 900', oklch: 'oklch(30.73% 0.165 255.3)', hex: '#0D47A1' },
    { name: 'Light Blue 50', oklch: 'oklch(95.34% 0.012 250.7)', hex: '#E1F5FE' },
    { name: 'Light Blue 100', oklch: 'oklch(85.59% 0.049 249.2)', hex: '#B3E5FC' },
    { name: 'Light Blue 200', oklch: 'oklch(75.36% 0.101 247.9)', hex: '#81D4FA' },
    { name: 'Light Blue 300', oklch: 'oklch(65.04% 0.155 246.5)', hex: '#4FC3F7' },
    { name: 'Light Blue 400', oklch: 'oklch(57.87% 0.193 245.9)', hex: '#29B6F6' },
    { name: 'Light Blue 500', oklch: 'oklch(51.04% 0.226 245.4)', hex: '#03A9F4' },
    { name: 'Light Blue 600', oklch: 'oklch(47.90% 0.224 245.4)', hex: '#039BE5' },
    { name: 'Light Blue 700', oklch: 'oklch(43.19% 0.217 245.6)', hex: '#0288D1' },
    { name: 'Light Blue 800', oklch: 'oklch(39.11% 0.207 245.7)', hex: '#0277BD' },
    { name: 'Light Blue 900', oklch: 'oklch(32.22% 0.183 246.0)', hex: '#01579B' },
    { name: 'Cyan 50', oklch: 'oklch(95.54% 0.011 237.9)', hex: '#E0F7FA' },
    { name: 'Cyan 100', oklch: 'oklch(86.10% 0.048 231.1)', hex: '#B2EBF2' },
    { name: 'Cyan 200', oklch: 'oklch(76.46% 0.100 224.2)', hex: '#80DEEA' },
    { name: 'Cyan 300', oklch: 'oklch(66.86% 0.150 218.4)', hex: '#4DD0E1' },
    { name: 'Cyan 400', oklch: 'oklch(60.18% 0.185 215.9)', hex: '#26C6DA' },
    { name: 'Cyan 500', oklch: 'oklch(53.64% 0.212 214.2)', hex: '#00BCD4' },
    { name: 'Cyan 600', oklch: 'oklch(50.41% 0.213 214.4)', hex: '#00ACC1' },
    { name: 'Cyan 700', oklch: 'oklch(45.47% 0.207 214.9)', hex: '#0097A7' },
    { name: 'Cyan 800', oklch: 'oklch(41.22% 0.198 215.4)', hex: '#00838F' },
    { name: 'Cyan 900', oklch: 'oklch(33.91% 0.177 216.7)', hex: '#006064' },
    { name: 'Teal 50', oklch: 'oklch(94.66% 0.010 202.9)', hex: '#E0F2F1' },
    { name: 'Teal 100', oklch: 'oklch(85.06% 0.041 196.4)', hex: '#B2DFDB' },
    { name: 'Teal 200', oklch: 'oklch(75.14% 0.082 190.4)', hex: '#80CBC4' },
    { name: 'Teal 300', oklch: 'oklch(65.62% 0.119 185.7)', hex: '#4DB6AC' },
    { name: 'Teal 400', oklch: 'oklch(58.75% 0.144 183.5)', hex: '#26A69A' },
    { name: 'Teal 500', oklch: 'oklch(52.32% 0.165 181.9)', hex: '#009688' },
    { name: 'Teal 600', oklch: 'oklch(48.97% 0.164 181.9)', hex: '#00897B' },
    { name: 'Teal 700', oklch: 'oklch(44.40% 0.160 182.2)', hex: '#00796B' },
    { name: 'Teal 800', oklch: 'oklch(40.52% 0.155 182.5)', hex: '#00695C' },
    { name: 'Teal 900', oklch: 'oklch(33.40% 0.138 183.2)', hex: '#004D40' },
    { name: 'Green 50', oklch: 'oklch(94.49% 0.014 142.1)', hex: '#E8F5E9' },
    { name: 'Green 100', oklch: 'oklch(84.14% 0.046 134.8)', hex: '#C8E6C9' },
    { name: 'Green 200', oklch: 'oklch(73.97% 0.086 129.7)', hex: '#A5D6A7' },
    { name: 'Green 300', oklch: 'oklch(63.97% 0.126 126.3)', hex: '#81C784' },
    { name: 'Green 400', oklch: 'oklch(57.65% 0.152 124.6)', hex: '#66BB6A' },
    { name: 'Green 500', oklch: 'oklch(51.52% 0.174 123.6)', hex: '#4CAF50' },
    { name: 'Green 600', oklch: 'oklch(48.06% 0.172 123.6)', hex: '#43A047' },
    { name: 'Green 700', oklch: 'oklch(43.19% 0.168 123.7)', hex: '#388E3C' },
    { name: 'Green 800', oklch: 'oklch(39.11% 0.163 123.7)', hex: '#2E7D32' },
    { name: 'Green 900', oklch: 'oklch(31.06% 0.148 124.1)', hex: '#1B5E20' },
    { name: 'Light Green 50', oklch: 'oklch(94.75% 0.016 106.3)', hex: '#F1F8E9' },
    { name: 'Light Green 100', oklch: 'oklch(85.39% 0.046 103.5)', hex: '#DCEDC8' },
    { name: 'Light Green 200', oklch: 'oklch(76.53% 0.082 100.9)', hex: '#C5E1A5' },
    { name: 'Light Green 300', oklch: 'oklch(67.92% 0.119 98.7)', hex: '#AED581' },
    { name: 'Light Green 400', oklch: 'oklch(62.77% 0.143 97.2)', hex: '#9CCC65' },
    { name: 'Light Green 500', oklch: 'oklch(57.87% 0.162 96.0)', hex: '#8BC34A' },
    { name: 'Light Green 600', oklch: 'oklch(54.49% 0.163 95.8)', hex: '#7CB342' },
    { name: 'Light Green 700', oklch: 'oklch(49.38% 0.164 95.4)', hex: '#689F38' },
    { name: 'Light Green 800', oklch: 'oklch(44.59% 0.162 94.9)', hex: '#558B2F' },
    { name: 'Light Green 900', oklch: 'oklch(35.80% 0.155 94.1)', hex: '#33691E' },
    { name: 'Lime 50', oklch: 'oklch(95.78% 0.013 88.0)', hex: '#F9FBE7' },
    { name: 'Lime 100', oklch: 'oklch(88.75% 0.038 86.8)', hex: '#F0F4C3' },
    { name: 'Lime 200', oklch: 'oklch(82.35% 0.063 85.5)', hex: '#E6EE9C' },
    { name: 'Lime 300', oklch: 'oklch(76.53% 0.090 83.7)', hex: '#DCE775' },
    { name: 'Lime 400', oklch: 'oklch(72.37% 0.114 82.5)', hex: '#D4E157' },
    { name: 'Lime 500', oklch: 'oklch(69.31% 0.133 81.6)', hex: '#CDDC39' },
    { name: 'Lime 600', oklch: 'oklch(66.82% 0.137 81.5)', hex: '#C0CA33' },
    { name: 'Lime 700', oklch: 'oklch(62.77% 0.142 81.3)', hex: '#AFB42B' },
    { name: 'Lime 800', oklch: 'oklch(58.85% 0.147 81.0)', hex: '#9E9D24' },
    { name: 'Lime 900', oklch: 'oklch(51.04% 0.150 80.5)', hex: '#827717' },
    { name: 'Yellow 50', oklch: 'oklch(99.43% 0.007 99.5)', hex: '#FFFDE7' },
    { name: 'Yellow 100', oklch: 'oklch(96.65% 0.021 96.4)', hex: '#FFF9C4' },
    { name: 'Yellow 200', oklch: 'oklch(93.98% 0.038 94.1)', hex: '#FFF59D' },
    { name: 'Yellow 300', oklch: 'oklch(91.43% 0.057 92.4)', hex: '#FFF176' },
    { name: 'Yellow 400', oklch: 'oklch(89.97% 0.071 91.5)', hex: '#FFEE58' },
    { name: 'Yellow 500', oklch: 'oklch(88.54% 0.086 90.7)', hex: '#FFEB3B' },
    { name: 'Yellow 600', oklch: 'oklch(84.81% 0.088 90.5)', hex: '#FDD835' },
    { name: 'Yellow 700', oklch: 'oklch(80.46% 0.091 90.3)', hex: '#FBC02D' },
    { name: 'Yellow 800', oklch: 'oklch(76.53% 0.094 90.1)', hex: '#F9A825' },
    { name: 'Yellow 900', oklch: 'oklch(69.31% 0.098 89.8)', hex: '#F57F17' },
    { name: 'Amber 50', oklch: 'oklch(98.05% 0.015 86.8)', hex: '#FFF8E1' },
    { name: 'Amber 100', oklch: 'oklch(92.48% 0.038 85.8)', hex: '#FFECB3' },
    { name: 'Amber 200', oklch: 'oklch(86.95% 0.067 84.8)', hex: '#FFE082' },
    { name: 'Amber 300', oklch: 'oklch(81.65% 0.100 83.9)', hex: '#FFD54F' },
    { name: 'Amber 400', oklch: 'oklch(77.52% 0.126 83.0)', hex: '#FFCA28' },
    { name: 'Amber 500', oklch: 'oklch(74.39% 0.150 82.2)', hex: '#FFC107' },
    { name: 'Amber 600', oklch: 'oklch(70.81% 0.160 81.3)', hex: '#FFB300' },
    { name: 'Amber 700', oklch: 'oklch(66.82% 0.170 80.2)', hex: '#FFA000' },
    { name: 'Amber 800', oklch: 'oklch(62.77% 0.180 78.8)', hex: '#FF8F00' },
    { name: 'Amber 900', oklch: 'oklch(54.49% 0.198 75.3)', hex: '#FF6F00' },
    { name: 'Orange 50', oklch: 'oklch(97.23% 0.022 68.6)', hex: '#FFF3E0' },
    { name: 'Orange 100', oklch: 'oklch(90.95% 0.053 64.9)', hex: '#FFE0B2' },
    { name: 'Orange 200', oklch: 'oklch(84.51% 0.090 61.2)', hex: '#FFCC80' },
    { name: 'Orange 300', oklch: 'oklch(77.92% 0.133 57.5)', hex: '#FFB74D' },
    { name: 'Orange 400', oklch: 'oklch(73.18% 0.171 54.9)', hex: '#FFA726' },
    { name: 'Orange 500', oklch: 'oklch(68.49% 0.207 52.8)', hex: '#FF9800' },
    { name: 'Orange 600', oklch: 'oklch(65.04% 0.207 51.5)', hex: '#FB8C00' },
    { name: 'Orange 700', oklch: 'oklch(60.18% 0.207 49.3)', hex: '#F57C00' },
    { name: 'Orange 800', oklch: 'oklch(55.45% 0.204 46.7)', hex: '#EF6C00' },
    { name: 'Orange 900', oklch: 'oklch(48.71% 0.197 42.1)', hex: '#E65100' },
    { name: 'Deep Orange 50', oklch: 'oklch(95.04% 0.031 37.1)', hex: '#FBE9E7' },
    { name: 'Deep Orange 100', oklch: 'oklch(87.79% 0.076 40.5)', hex: '#FFCCBC' },
    { name: 'Deep Orange 200', oklch: 'oklch(79.73% 0.125 39.5)', hex: '#FFAB91' },
    { name: 'Deep Orange 300', oklch: 'oklch(71.95% 0.170 38.0)', hex: '#FF8A65' },
    { name: 'Deep Orange 400', oklch: 'oklch(66.82% 0.200 36.8)', hex: '#FF7043' },
    { name: 'Deep Orange 500', oklch: 'oklch(61.94% 0.223 35.8)', hex: '#FF5722' },
    { name: 'Deep Orange 600', oklch: 'oklch(58.75% 0.218 35.7)', hex: '#F4511E' },
    { name: 'Deep Orange 700', oklch: 'oklch(55.45% 0.213 35.5)', hex: '#E64A19' },
    { name: 'Deep Orange 800', oklch: 'oklch(52.12% 0.208 35.4)', hex: '#D84315' },
    { name: 'Deep Orange 900', oklch: 'oklch(45.48% 0.198 35.2)', hex: '#BF360C' },
    // Appended unnamed colors
    { name: 'Unnamed Color', oklch: 'oklch(87.82% 0.165 125.1)', hex: '#CBF697' },
    { name: 'Unnamed Color', oklch: 'oklch(60.84% 0.129 135.2)', hex: '#3DCA73' },
    { name: 'Unnamed Color', oklch: 'oklch(49.97% 0.231 22.9)', hex: '#DC1748' },
    { name: 'Unnamed Color', oklch: 'oklch(87.26% 0.088 238.2)', hex: '#9AE9FF' },
    { name: 'Unnamed Color', oklch: 'oklch(50.48% 0.149 333.6)', hex: '#AB4D98' },
    { name: 'Unnamed Color', oklch: 'oklch(30.06% 0.088 116.7)', hex: '#2F4916' },
    { name: 'Unnamed Color', oklch: 'oklch(47.93% 0.006 312.6)', hex: '#48464C' },
    { name: 'Unnamed Color', oklch: 'oklch(15.96% 0.085 304.0)', hex: '#200439' },
    { name: 'Unnamed Color', oklch: 'oklch(67.76% 0.179 109.9)', hex: '#99DF00' },
    { name: 'Unnamed Color', oklch: 'oklch(89.87% 0.134 135.2)', hex: '#9CF6A5' },
    { name: 'Unnamed Color', oklch: 'oklch(76.24% 0.132 329.6)', hex: '#EAB1EE' },
    { name: 'Unnamed Color', oklch: 'oklch(71.95% 0.117 19.3)', hex: '#E194B2' },
    { name: 'Unnamed Color', oklch: 'oklch(76.5% 0.203 133.2)', hex: '#47F146' },
    { name: 'Unnamed Color', oklch: 'oklch(46.06% 0.138 349.5)', hex: '#943362' },
    { name: 'Unnamed Color', oklch: 'oklch(54.19% 0.178 30.6)', hex: '#DF4B50' },
    { name: 'Unnamed Color', oklch: 'oklch(54.43% 0.103 268.0)', hex: '#5A81C4' },
    { name: 'Unnamed Color', oklch: 'oklch(46.81% 0.135 272.7)', hex: '#2088EB' },
    { name: 'Unnamed Color', oklch: 'oklch(60.18% 0.135 129.8)', hex: '#39B229' },
    { name: 'Unnamed Color', oklch: 'oklch(76.1% 0.135 168.9)', hex: '#43F3AF' },
    { name: 'Unnamed Color', oklch: 'oklch(80.7% 0.089 231.2)', hex: '#81D8F2' },
    { name: 'Unnamed Color', oklch: 'oklch(47.41% 0.155 304.7)', hex: '#7A4BC8' },
    { name: 'Unnamed Color', oklch: 'oklch(67.42% 0.159 319.4)', hex: '#D87AF2' },
    { name: 'Unnamed Color', oklch: 'oklch(57.69% 0.043 189.6)', hex: '#6A9591' },
    { name: 'Unnamed Color', oklch: 'oklch(53.25% 0.079 271.8)', hex: '#597CB0' },
    { name: 'Unnamed Color', oklch: 'oklch(52.79% 0.151 143.2)', hex: '#02BF54' },
    { name: 'Unnamed Color', oklch: 'oklch(49.23% 0.117 357.7)', hex: '#B24C57' },
    { name: 'Unnamed Color', oklch: 'oklch(14.86% 0.152 284.1)', hex: '#0C168C' },
    { name: 'Unnamed Color', oklch: 'oklch(67.78% 0.198 126.3)', hex: '#3BF011' },
    { name: 'Unnamed Color', oklch: 'oklch(82.26% 0.147 142.1)', hex: '#67FE9E' },
    { name: 'Unnamed Color', oklch: 'oklch(70.08% 0.047 31.9)', hex: '#D4ABB4' },
    { name: 'Unnamed Color', oklch: 'oklch(58.33% 0.203 333.3)', hex: '#FC31CC' },
    { name: 'Unnamed Color', oklch: 'oklch(28.7% 0.088 23.3)', hex: '#65202A' },
    { name: 'Unnamed Color', oklch: 'oklch(61.27% 0.197 50.8)', hex: '#FF5A00' },
    { name: 'Unnamed Color', oklch: 'oklch(68.52% 0.108 182.2)', hex: '#2FEDB6' },
    { name: 'Unnamed Color', oklch: 'oklch(66.6% 0.103 203.2)', hex: '#0EEDF6' },
    { name: 'Unnamed Color', oklch: 'oklch(49.7% 0.177 352.5)', hex: '#D3286A' },
    { name: 'Unnamed Color', oklch: 'oklch(67.2% 0.165 106.9)', hex: '#9BE521' },
    { name: 'Unnamed Color', oklch: 'oklch(55.2% 0.098 221.3)', hex: '#45AEBA' },
    { name: 'Unnamed Color', oklch: 'oklch(45.92% 0.177 343.3)', hex: '#CA2891' },
    { name: 'Unnamed Color', oklch: 'oklch(49.46% 0.178 357.7)', hex: '#D8276F' },
    { name: 'Unnamed Color', oklch: 'oklch(36.17% 0.183 306.9)', hex: '#6F14F9' },
    { name: 'Unnamed Color', oklch: 'oklch(63.29% 0.158 119.5)', hex: '#71C022' },
    { name: 'Unnamed Color', oklch: 'oklch(51.34% 0.078 243.6)', hex: '#428CAF' },
    { name: 'Unnamed Color', oklch: 'oklch(77.67% 0.222 136.2)', hex: '#55E65C' },
    { name: 'Unnamed Color', oklch: 'oklch(28.89% 0.125 281.3)', hex: '#332B8B' },
    { name: 'Unnamed Color', oklch: 'oklch(63.63% 0.117 185.7)', hex: '#28DBC4' },
    { name: 'Unnamed Color', oklch: 'oklch(68.18% 0.176 117.8)', hex: '#88CF48' },
    { name: 'Unnamed Color', oklch: 'oklch(49.33% 0.19 330.4)', hex: '#BA2CDF' },
    { name: 'Unnamed Color', oklch: 'oklch(48.83% 0.06 313.1)', hex: '#7F5282' },
    { name: 'Unnamed Color', oklch: 'oklch(58.33% 0.128 152.6)', hex: '#29B072' },
    { name: 'Unnamed Color', oklch: 'oklch(66.52% 0.158 87.7)', hex: '#C8A815' },
    { name: 'Unnamed Color', oklch: 'oklch(60.91% 0.165 146.4)', hex: '#01E25A' },
    { name: 'Unnamed Color', oklch: 'oklch(23.23% 0.063 303.1)', hex: '#241A43' },
    { name: 'Unnamed Color', oklch: 'oklch(57.12% 0.078 181.5)', hex: '#20B7AA' },
    { name: 'Unnamed Color', oklch: 'oklch(39.99% 0.106 142.1)', hex: '#18843F' },
    { name: 'Unnamed Color', oklch: 'oklch(40.18% 0.167 319.4)', hex: '#961DB2' },
    { name: 'Unnamed Color', oklch: 'oklch(47.4% 0.093 162.2)', hex: '#256A59' },
    { name: 'Unnamed Color', oklch: 'oklch(65.03% 0.038 274.6)', hex: '#94A2C0' },
    { name: 'Unnamed Color', oklch: 'oklch(80.72% 0.187 132.8)', hex: '#89F07F' },
    { name: 'Unnamed Color', oklch: 'oklch(54.49% 0.201 332.6)', hex: '#F84CD5' },
    { name: 'Unnamed Color', oklch: 'oklch(63.26% 0.057 326.6)', hex: '#B78CB9' },
    { name: 'Unnamed Color', oklch: 'oklch(44.38% 0.067 197.6)', hex: '#265F63' },
    { name: 'Unnamed Color', oklch: 'oklch(50.41% 0.209 332.5)', hex: '#EB0EF2' },
    { name: 'Unnamed Color', oklch: 'oklch(37.52% 0.069 42.1)', hex: '#7F310A' },
    { name: 'Unnamed Color', oklch: 'oklch(56.74% 0.046 51.6)', hex: '#896C65' },
    { name: 'Unnamed Color', oklch: 'oklch(67.14% 0.209 127.3)', hex: '#34EB22' },
    { name: 'Unnamed Color', oklch: 'oklch(47.69% 0.021 39.8)', hex: '#60474B' },
    { name: 'Unnamed Color', oklch: 'oklch(45.72% 0.069 101.4)', hex: '#566834' },
    { name: 'Unnamed Color', oklch: 'oklch(48.24% 0.183 17.6)', hex: '#EE0E4A' },
    { name: 'Unnamed Color', oklch: 'oklch(42.52% 0.015 280.9)', hex: '#414450' },
    { name: 'Unnamed Color', oklch: 'oklch(63.31% 0.147 123.8)', hex: '#71CB56' },
    { name: 'Unnamed Color', oklch: 'oklch(51.64% 0.106 250.7)', hex: '#228DC1' },
    { name: 'Unnamed Color', oklch: 'oklch(30.6% 0.117 259.9)', hex: '#0B3F72' },
    { name: 'Unnamed Color', oklch: 'oklch(76.24% 0.114 266.3)', hex: '#59ABFF' },
    { name: 'Unnamed Color', oklch: 'oklch(51.19% 0.121 118.7)', hex: '#569134' },
    { name: 'Unnamed Color', oklch: 'oklch(81.07% 0.177 87.8)', hex: '#F6D642' },
    { name: 'Unnamed Color', oklch: 'oklch(40.42% 0.075 97.4)', hex: '#5C740A' },
    { name: 'Unnamed Color', oklch: 'oklch(48.06% 0.038 274.6)', hex: '#4C526E' },
    { name: 'Unnamed Color', oklch: 'oklch(61.88% 0.187 325.3)', hex: '#E142F4' },
    { name: 'Unnamed Color', oklch: 'oklch(78.5% 0.155 106.8)', hex: '#C9E284' },
    { name: 'Unnamed Color', oklch: 'oklch(43.9% 0.046 80.2)', hex: '#5D5132' },
    { name: 'Unnamed Color', oklch: 'oklch(96.08% 0.01 43.1)', hex: '#F0EAEC' },
    { name: 'Unnamed Color', oklch: 'oklch(80.52% 0.146 95.8)', hex: '#E7EE83' },
    { name: 'Unnamed Color', oklch: 'oklch(69.81% 0.109 269.4)', hex: '#5594E5' },
    { name: 'Unnamed Color', oklch: 'oklch(52.75% 0.198 322.2)', hex: '#D13CF5' },
    { name: 'Unnamed Color', oklch: 'oklch(61.85% 0.089 166.4)', hex: '#51C2A1' },
    { name: 'Unnamed Color', oklch: 'oklch(28.02% 0.134 23.9)', hex: '#BB0E0C' },
    { name: 'Unnamed Color', oklch: 'oklch(32.48% 0.169 22.8)', hex: '#C41111' },
    { name: 'Unnamed Color', oklch: 'oklch(61.8% 0.138 92.4)', hex: '#BFBB0C' },
    { name: 'Unnamed Color', oklch: 'oklch(33.16% 0.177 305.8)', hex: '#4E11F9' },
    { name: 'Unnamed Color', oklch: 'oklch(29.13% 0.075 260.6)', hex: '#0B3263' },
    { name: 'Unnamed Color', oklch: 'oklch(26.69% 0.13 28.3)', hex: '#890423' },
    { name: 'Unnamed Color', oklch: 'oklch(51.68% 0.101 245.9)', hex: '#0A88C2' },
    { name: 'Unnamed Color', oklch: 'oklch(65.41% 0.143 69.2)', hex: '#E0A037' },
    { name: 'Unnamed Color', oklch: 'oklch(74.57% 0.208 131.2)', hex: '#6EE531' },
    { name: 'Unnamed Color', oklch: 'oklch(50.41% 0.17 319.4)', hex: '#A942E9' },
    { name: 'Unnamed Color', oklch: 'oklch(59.95% 0.088 47.9)', hex: '#CA7D49' },
    { name: 'Unnamed Color', oklch: 'oklch(40.24% 0.174 296.8)', hex: '#5E5CDB' },
    { name: 'Unnamed Color', oklch: 'oklch(43.76% 0.198 33.7)', hex: '#D23504' },
    { name: 'Unnamed Color', oklch: 'oklch(30.63% 0.106 20.3)', hex: '#6A0A29' },
    { name: 'Unnamed Color', oklch: 'oklch(66.97% 0.211 133.0)', hex: '#1FFC33' },
    { name: 'Unnamed Color', oklch: 'oklch(53.25% 0.207 334.2)', hex: '#FE20DC' },
    { name: 'Unnamed Color', oklch: 'oklch(37.47% 0.183 23.9)', hex: '#E0025C' },
    { name: 'Unnamed Color', oklch: 'oklch(61.85% 0.16 57.8)', hex: '#E9762A' },
    { name: 'Unnamed Color', oklch: 'oklch(53.07% 0.154 36.3)', hex: '#DD5245' },
    { name: 'Unnamed Color', oklch: 'oklch(31.33% 0.119 46.1)', hex: '#623201' },
    { name: 'Unnamed Color', oklch: 'oklch(73.53% 0.139 334.3)', hex: '#F991E4' },
    { name: 'Unnamed Color', oklch: 'oklch(54.46% 0.126 172.9)', hex: '#17C49E' },
    { name: 'Unnamed Color', oklch: 'oklch(40.64% 0.169 307.7)', hex: '#8232E6' },
    { name: 'Unnamed Color', oklch: 'oklch(91.75% 0.05 158.4)', hex: '#B8FBDB' },
    { name: 'Unnamed Color', oklch: 'oklch(73.59% 0.076 25.1)', hex: '#FAC0D2' },
    { name: 'Unnamed Color', oklch: 'oklch(46.0% 0.075 254.9)', hex: '#3473A3' },
    { name: 'Unnamed Color', oklch: 'oklch(55.2% 0.141 169.3)', hex: '#10D39C' },
    { name: 'Unnamed Color', oklch: 'oklch(53.25% 0.142 277.2)', hex: '#486AF7' },
    { name: 'Unnamed Color', oklch: 'oklch(80.5% 0.174 81.3)', hex: '#FDCC25' },
    { name: 'Unnamed Color', oklch: 'oklch(75.56% 0.155 153.9)', hex: '#45E79F' },
    { name: 'Unnamed Color', oklch: 'oklch(46.66% 0.164 330.1)', hex: '#C44ECC' },
    { name: 'Unnamed Color', oklch: 'oklch(67.7% 0.15 141.4)', hex: '#37EE83' },
    { name: 'Unnamed Color', oklch: 'oklch(50.41% 0.038 143.2)', hex: '#547866' },
    { name: 'Unnamed Color', oklch: 'oklch(33.15% 0.096 142.0)', hex: '#174D22' },
    { name: 'Unnamed Color', oklch: 'oklch(68.32% 0.187 132.0)', hex: '#2FEF53' },
    { name: 'Unnamed Color', oklch: 'oklch(24.79% 0.103 303.4)', hex: '#381967' },
    { name: 'Unnamed Color', oklch: 'oklch(73.53% 0.119 123.4)', hex: '#A7DD80' },
    { name: 'Unnamed Color', oklch: 'oklch(37.66% 0.076 13.9)', hex: '#542B34' },
    { name: 'Unnamed Color', oklch: 'oklch(49.9% 0.177 335.7)', hex: '#CE46B2' },
    { name: 'Unnamed Color', oklch: 'oklch(42.54% 0.174 278.4)', hex: '#1956F2' },
    { name: 'Unnamed Color', oklch: 'oklch(44.13% 0.045 15.3)', hex: '#67414B' },
    { name: 'Unnamed Color', oklch: 'oklch(64.1% 0.17 84.0)', hex: '#D1A80A' },
    { name: 'Unnamed Color', oklch: 'oklch(46.06% 0.198 344.0)', hex: '#E70DA0' },
    { name: 'Unnamed Color', oklch: 'oklch(61.88% 0.057 190.5)', hex: '#6BAAB3' },
    { name: 'Unnamed Color', oklch: 'oklch(70.93% 0.173 89.2)', hex: '#DCC407' },
    { name: 'Unnamed Color', oklch: 'oklch(60.83% 0.05 130.3)', hex: '#8AA181' },
    { name: 'Unnamed Color', oklch: 'oklch(41.4% 0.169 278.2)', hex: '#2438FD' },
    { name: 'Unnamed Color', oklch: 'oklch(60.03% 0.141 331.0)', hex: '#D269B9' },
    { name: 'Unnamed Color', oklch: 'oklch(91.74% 0.118 135.2)', hex: '#A1F8A5' },
    { name: 'Unnamed Color', oklch: 'oklch(76.24% 0.07 24.3)', hex: '#EDAEBE' },
    { name: 'Unnamed Color', oklch: 'oklch(55.23% 0.067 151.0)', hex: '#619B75' },
    { name: 'Unnamed Color', oklch: 'oklch(69.85% 0.106 171.7)', hex: '#42D0B1' },
    { name: 'Unnamed Color', oklch: 'oklch(51.36% 0.118 39.4)', hex: '#CC5D42' },
    { name: 'Unnamed Color', oklch: 'oklch(33.15% 0.187 282.8)', hex: '#0242D2' },
    { name: 'Unnamed Color', oklch: 'oklch(76.57% 0.181 149.2)', hex: '#50FCA6' },
    { name: 'Unnamed Color', oklch: 'oklch(53.25% 0.093 110.1)', hex: '#7B9B55' },
    { name: 'Unnamed Color', oklch: 'oklch(56.74% 0.183 342.3)', hex: '#D557BB' },
    { name: 'Unnamed Color', oklch: 'oklch(62.75% 0.129 135.2)', hex: '#38DC73' },
    { name: 'Unnamed Color', oklch: 'oklch(77.72% 0.05 69.4)', hex: '#E1CFAC' },
    { name: 'Unnamed Color', oklch: 'oklch(45.92% 0.081 202.9)', hex: '#0A778C' },
    { name: 'Unnamed Color', oklch: 'oklch(36.03% 0.177 22.9)', hex: '#EA0904' },
    { name: 'Unnamed Color', oklch: 'oklch(28.23% 0.184 305.8)', hex: '#4F00C8' },
    { name: 'Unnamed Color', oklch: 'oklch(38.07% 0.17 286.9)', hex: '#5442E9' },
    { name: 'Unnamed Color', oklch: 'oklch(88.08% 0.01 79.4)', hex: '#E0DFCF' },
    { name: 'Unnamed Color', oklch: 'oklch(71.91% 0.111 81.3)', hex: '#E6B86C' },
    { name: 'Unnamed Color', oklch: 'oklch(53.64% 0.035 220.3)', hex: '#677D83' },
    { name: 'Unnamed Color', oklch: 'oklch(35.54% 0.063 110.1)', hex: '#273B1D' },
    { name: 'Unnamed Color', oklch: 'oklch(60.19% 0.126 95.5)', hex: '#B8BF1A' },
    { name: 'Unnamed Color', oklch: 'oklch(55.65% 0.158 135.2)', hex: '#20B12C' },
    { name: 'Unnamed Color', oklch: 'oklch(54.67% 0.026 142.1)', hex: '#667668' },
    { name: 'Unnamed Color', oklch: 'oklch(32.88% 0.106 322.0)', hex: '#4F0A5F' },
    { name: 'Unnamed Color', oklch: 'oklch(38.6% 0.174 280.9)', hex: '#4337E6' },
    { name: 'Unnamed Color', oklch: 'oklch(59.94% 0.076 211.5)', hex: '#4FA4AE' },
    { name: 'Unnamed Color', oklch: 'oklch(51.27% 0.122 286.2)', hex: '#6073D4' },
    { name: 'Unnamed Color', oklch: 'oklch(55.2% 0.066 357.7)', hex: '#AD6A7C' },
    { name: 'Unnamed Color', oklch: 'oklch(62.64% 0.088 47.9)', hex: '#DAA07F' },
    { name: 'Unnamed Color', oklch: 'oklch(52.19% 0.141 40.5)', hex: '#D25F40' },
    { name: 'Unnamed Color', oklch: 'oklch(49.99% 0.104 250.7)', hex: '#1093C1' },
    { name: 'Unnamed Color', oklch: 'oklch(80.08% 0.169 150.0)', hex: '#7CF7AF' },
    { name: 'Unnamed Color', oklch: 'oklch(51.3% 0.08 147.2)', hex: '#5D8E62' },
    { name: 'Unnamed Color', oklch: 'oklch(46.66% 0.134 148.9)', hex: '#119D5E' },
    { name: 'Unnamed Color', oklch: 'oklch(68.14% 0.151 101.4)', hex: '#B3C82C' },
    { name: 'Unnamed Color', oklch: 'oklch(49.88% 0.201 346.9)', hex: '#E21694' },
    { name: 'Unnamed Color', oklch: 'oklch(62.6% 0.155 110.1)', hex: '#80B530' },
    { name: 'Unnamed Color', oklch: 'oklch(64.12% 0.149 97.4)', hex: '#ABB321' },
    { name: 'Unnamed Color', oklch: 'oklch(58.33% 0.046 123.4)', hex: '#7E9775' },
    { name: 'Unnamed Color', oklch: 'oklch(30.6% 0.092 119.5)', hex: '#366405' },
    { name: 'Unnamed Color', oklch: 'oklch(60.1% 0.143 334.3)', hex: '#D577B2' },
    { name: 'Unnamed Color', oklch: 'oklch(67.42% 0.024 95.8)', hex: '#ACAC8C' },
    { name: 'Unnamed Color', oklch: 'oklch(84.58% 0.156 126.9)', hex: '#A6F06F' },
    { name: 'Unnamed Color', oklch: 'oklch(76.24% 0.088 203.2)', hex: '#5FE6F2' },
    { name: 'Unnamed Color', oklch: 'oklch(35.21% 0.138 344.0)', hex: '#6B1261' },
    { name: 'Unnamed Color', oklch: 'oklch(39.18% 0.132 129.8)', hex: '#0A6B09' },
    { name: 'Unnamed Color', oklch: 'oklch(46.22% 0.157 269.4)', hex: '#158BF7' },
    { name: 'Unnamed Color', oklch: 'oklch(37.66% 0.113 22.9)', hex: '#8B2735' },
    { name: 'Unnamed Color', oklch: 'oklch(62.83% 0.076 182.2)', hex: '#59C9C7' },
    { name: 'Unnamed Color', oklch: 'oklch(67.0% 0.165 344.0)', hex: '#FD5FA8' },
    { name: 'Unnamed Color', oklch: 'oklch(45.5% 0.198 304.0)', hex: '#9056F9' },
    { name: 'Unnamed Color', oklch: 'oklch(64.1% 0.143 103.1)', hex: '#9FBA2F' },
    { name: 'Unnamed Color', oklch: 'oklch(63.26% 0.057 39.4)', hex: '#D1A090' },
    { name: 'Unnamed Color', oklch: 'oklch(61.88% 0.046 270.8)', hex: '#969FC7' },
    { name: 'Unnamed Color', oklch: 'oklch(40.59% 0.087 169.3)', hex: '#036757' },
    { name: 'Unnamed Color', oklch: 'oklch(55.22% 0.117 285.4)', hex: '#9096E6' },
    { name: 'Unnamed Color', oklch: 'oklch(71.91% 0.048 335.7)', hex: '#D9BDD4' },
    { name: 'Unnamed Color', oklch: 'oklch(45.72% 0.177 35.8)', hex: '#D62136' },
    { name: 'Unnamed Color', oklch: 'oklch(44.37% 0.207 334.2)', hex: '#D707D6' },
    { name: 'Unnamed Color', oklch: 'oklch(58.98% 0.091 198.8)', hex: '#34B8BE' },
    { name: 'Unnamed Color', oklch: 'oklch(63.15% 0.127 60.3)', hex: '#C97A2D' },
    { name: 'Unnamed Color', oklch: 'oklch(76.57% 0.187 101.4)', hex: '#B2F100' },
    { name: 'Unnamed Color', oklch: 'oklch(63.29% 0.16 123.8)', hex: '#6EC748' },
    { name: 'Unnamed Color', oklch: 'oklch(50.41% 0.15 152.6)', hex: '#13B65E' },
    { name: 'Unnamed Color', oklch: 'oklch(78.5% 0.129 151.7)', hex: '#72FAB3' },
    { name: 'Unnamed Color', oklch: 'oklch(52.75% 0.05 92.4)', hex: '#646E40' },
    { name: 'Unnamed Color', oklch: 'oklch(40.24% 0.151 267.3)', hex: '#1E57BB' }
];

let currentIndex = 0;
let displayedCount = Math.min(20, colors.length);
const itemsPerLoad = 16;

// Initialize grid
function initGrid() {
    renderGrid();
    updateLoadMoreButton();
}

function renderGrid() {
    const grid = document.getElementById('colorGrid');
    grid.innerHTML = '';
    const itemsToShow = colors.slice(0, displayedCount);
    itemsToShow.forEach((color, index) => {
        const card = createColorCard(color, index);
        grid.appendChild(card);
    });
}

function createColorCard(color, index) {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.innerHTML = `
        <div class="color-preview" style="background: ${color.hex}"></div>
        <div class="color-info">
            <div class="color-name">${color.name}</div>
            <div class="color-values">
                <div class="color-value">
                    <span>HEX: ${color.hex}</span>
                    <button class="copy-btn" onclick="copyToClipboard('${color.hex}', event)">Copy</button>
                </div>
                <div class="color-value">
                    <span>${color.oklch}</span>
                </div>
            </div>
            <button class="view-btn" onclick="openModal(${index})">View Details</button>
        </div>
    `;
    return card;
}

function loadMore() {
    displayedCount = Math.min(displayedCount + itemsPerLoad, colors.length);
    renderGrid();
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const btn = document.getElementById('loadMoreBtn');
    if (displayedCount >= colors.length) {
        btn.disabled = true;
        btn.textContent = 'All Colors Loaded';
    } else {
        btn.disabled = false;
        btn.textContent = `Load More Colors (${colors.length - displayedCount} remaining)`;
    }
}

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('colorModal');
    modal.classList.add('active');
    updateModal();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('colorModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateModal() {
    const color = colors[currentIndex];
    document.getElementById('modalTitle').textContent = color.name;
    document.getElementById('counter').textContent = `${currentIndex + 1} / ${colors.length}`;

    // Ensure preview inputs reflect the currently selected color.
    // Use the selected color as the background and pick a readable text color.
    const contrastText = getContrastColor(color.hex);

    const bgPicker = document.getElementById('bgColorPicker');
    const textPicker = document.getElementById('textColorPicker');
    const bgText = document.getElementById('bgColorText');
    const textText = document.getElementById('textColorText');

    bgPicker.value = color.hex;
    bgText.value = color.hex;

    textPicker.value = contrastText;
    textText.value = contrastText;

    updatePreview();
}

function updatePreview() {
    const bgColor = document.getElementById('bgColorText').value;
    const textColor = document.getElementById('textColorText').value;
    const preview = document.getElementById('previewSection');
    const text = document.getElementById('previewText');

    preview.style.background = bgColor;
    text.style.color = textColor;
}

function updateCustomColors() {
    const bgColor = document.getElementById('bgColorPicker').value;
    const textColor = document.getElementById('textColorPicker').value;
    
    document.getElementById('bgColorText').value = bgColor;
    document.getElementById('textColorText').value = textColor;
    
    updatePreview();
}

function updateFromText(type) {
    const textInput = document.getElementById(type === 'bg' ? 'bgColorText' : 'textColorText');
    const colorPicker = document.getElementById(type === 'bg' ? 'bgColorPicker' : 'textColorPicker');
    
    const value = textInput.value;
    if (/^#[0-9A-F]{6}$/i.test(value)) {
        colorPicker.value = value;
        updatePreview();
    }
}

function swapColors() {
    const bgPicker = document.getElementById('bgColorPicker');
    const textPicker = document.getElementById('textColorPicker');
    const bgText = document.getElementById('bgColorText');
    const textText = document.getElementById('textColorText');

    const tempBg = bgPicker.value;
    bgPicker.value = textPicker.value;
    textPicker.value = tempBg;

    bgText.value = bgPicker.value;
    textText.value = textPicker.value;

    updatePreview();
    showToast('Colors swapped!');
}

function applyCurrentAsBackground() {
    const color = colors[currentIndex];
    document.getElementById('bgColorPicker').value = color.hex;
    document.getElementById('bgColorText').value = color.hex;
    updatePreview();
    showToast(`${color.name} applied as background`);
}

function applyCurrentAsText() {
    const color = colors[currentIndex];
    document.getElementById('textColorPicker').value = color.hex;
    document.getElementById('textColorText').value = color.hex;
    updatePreview();
    showToast(`${color.name} applied as text`);
}

function updatePreviewText() {
    const input = document.getElementById('textInput');
    const text = document.getElementById('previewText');
    text.textContent = input.value || 'Sample Text';
}

function navigateColor(direction) {
    currentIndex = (currentIndex + direction + colors.length) % colors.length;
    updateModal();
}

function copyCurrentColor() {
    const color = colors[currentIndex];
    copyToClipboard(color.hex);
}

function copyCurrentOKLCH() {
    const color = colors[currentIndex];
    copyToClipboard(color.oklch);
}

function copyToClipboard(text, event) {
    if (event) {
        event.stopPropagation();
    }
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied: ${text}`);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

/* small helper to pick readable text color for a given hex background */
function getContrastColor(hex) {
    // Remove leading #
    hex = hex.replace('#', '');
    // Convert 3-digit to 6-digit
    if (hex.length === 3) {
        hex = hex.split('').map(ch => ch + ch).join('');
    }
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    // Relative luminance approximation
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.6 ? '#000000' : '#ffffff';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('colorModal');
    if (!modal.classList.contains('active')) return;

    if (e.key === 'ArrowLeft') navigateColor(-1);
    if (e.key === 'ArrowRight') navigateColor(1);
    if (e.key === 'Escape') closeModal();
});

// Click outside modal to close
document.getElementById('colorModal').addEventListener('click', (e) => {
    if (e.target.id === 'colorModal') {
        closeModal();
    }
});

// Initialize
initGrid();