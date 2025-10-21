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
    { name: 'Deep Orange 900', oklch: 'oklch(45.48% 0.198 35.2)', hex: '#BF360C' }
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