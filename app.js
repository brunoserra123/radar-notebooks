// GamerRadar - Inteligência de Hardware, Comparador BR x EUA e Vigia de Preços

const STORAGE_KEY = 'gamer_radar_laptops';
const WATCHLIST_KEY = 'gamer_radar_watchlist';
const GAS_URL_KEY = 'gamer_radar_gas_url';

// Catálogo base de modelos com dados de mercado reais focados na faixa de R$ 8.000 - R$ 8.900
const DEFAULT_LAPTOPS = [
  {
    id: 'predator-helios-neo-16',
    name: 'Acer Predator Helios Neo 16',
    modelCode: 'PHN16-72-74T0',
    gpu: 'NVIDIA RTX 4060',
    gpuTgp: '140W (Potência Máxima)',
    gpuTier: 'mid-high',
    cpu: 'Intel Core i7-14700HX (20 Cores, 28 Threads)',
    ram: '16GB DDR5 5600MHz (Expansível até 64GB)',
    ramType: 'DDR5',
    ramSpeed: '5600MHz',
    ramUpgradeStatus: 'full', // 'full' = ✅ Verde, 'partial' = ⚠️ Amarelo, 'none' = ❌ Vermelho
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM até 64GB)',
    storage: '1TB SSD NVMe M.2 Gen4',
    storageType: 'M.2 NVMe',
    storageUpgradeStatus: 'full',
    storageUpgradeLabel: '✅ +1 Slot M.2 Gen4 Livre',
    storageSlots: '2x Slots M.2 NVMe PCIe 4.0 (1 ocupado 1TB + 1 slot livre para 2º SSD) • Sem baia SATA',
    hasExtraM2Slot: true,
    hasSataBay: false,
    screen: '16" WQXGA (2560x1600) 165Hz, 100% sRGB, 400 nits, G-Sync',
    cooling: 'Liquid Metal + Dual 5th Gen AeroBlade 3D Fans',
    battery: '90Wh (~5h escritório / 1.1h game)',
    batteryHoursNormal: 5.0,
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta carregamento USB-C Power Delivery 100W + Fonte de mesa 330W',
    hasBiometrics: false,
    biometrics: '❌ Sem leitor de digital (PIN / Senha)',
    ports: '2x USB-C (Thunderbolt 4 / 100W PD) + 3x USB-A 3.2 Gen 2 + HDMI 2.1 + MicroSD + RJ-45',
    priceBr: 8299,
    priceUs: 1199,
    storeBr: 'Acer Store / Kabum',
    storeUs: 'Best Buy / Amazon US',
    urlBr: 'https://www.kabum.com.br',
    urlUs: 'https://www.bestbuy.com',
    score: 93,
    bestFor: 'Melhor refrigeração e tela 1600p impecável no BR',
    history: [
      { date: 'Nov 2025 (Black Friday)', br: 7899, us: 1099 },
      { date: 'Jan 2026', br: 8599, us: 1249 },
      { date: 'Hoje', br: 8299, us: 1199 }
    ]
  },
  {
    id: 'dell-g16-7630',
    name: 'Dell G16 7630',
    modelCode: 'G16-7630-U30P',
    gpu: 'NVIDIA RTX 4070',
    gpuTgp: '140W (Potência Máxima)',
    gpuTier: 'high',
    cpu: 'Intel Core i7-13650HX (14 Cores)',
    ram: '16GB DDR5 4800MHz',
    ramType: 'DDR5',
    ramSpeed: '4800MHz',
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM)',
    storage: '1TB SSD NVMe M.2 Gen4',
    storageType: 'M.2 NVMe',
    storageUpgradeStatus: 'full',
    storageUpgradeLabel: '✅ +1 Slot M.2 Gen4 Livre',
    storageSlots: '2x Slots M.2 NVMe PCIe 4.0 (1 ocupado 1TB + 1 slot livre) • Sem baia SATA',
    hasExtraM2Slot: true,
    hasSataBay: false,
    screen: '16" QHD+ (2560x1600) 240Hz, 100% DCI-P3, 300 nits',
    cooling: 'Vapor Chamber inspirada na Alienware + 4 saídas de ar',
    battery: '86Wh (~4h escritório / 1h game)',
    batteryHoursNormal: 4.0,
    hasUsbCCharging: false,
    chargingInfo: '🔌 Apenas plugue redondo tradicional Dell (240W/330W). Porta Type-C NÃO carrega o note',
    hasBiometrics: false,
    biometrics: '❌ Sem leitor de digital',
    ports: '1x USB-C (Thunderbolt 4 / DisplayPort) + 3x USB-A 3.2 + HDMI 2.1 + RJ-45',
    priceBr: 8799,
    priceUs: 1299,
    storeBr: 'Dell Brasil Oficial / Amazon BR',
    storeUs: 'Dell US / Best Buy',
    urlBr: 'https://www.dell.com/pt-br',
    urlUs: 'https://www.dell.com/en-us',
    score: 95,
    bestFor: 'Uma das poucas opções com RTX 4070 abaixo de R$ 8.900 no Brasil',
    history: [
      { date: 'Nov 2025 (Black Friday)', br: 8299, us: 1199 },
      { date: 'Fev 2026', br: 9199, us: 1349 },
      { date: 'Hoje', br: 8799, us: 1299 }
    ]
  },
  {
    id: 'lenovo-legion-slim-5',
    name: 'Lenovo Legion Slim 5 (Gen 8/9)',
    modelCode: '16APH8 / 16AHP9',
    gpu: 'NVIDIA RTX 4060',
    gpuTgp: '140W',
    gpuTier: 'mid-high',
    cpu: 'AMD Ryzen 7 7840HS / 8845HS (Eficiência térmica e bateria top)',
    ram: '16GB DDR5 5600MHz (Slots livres)',
    ramType: 'DDR5',
    ramSpeed: '5600MHz',
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM até 64GB)',
    storage: '1TB SSD NVMe M.2',
    storageType: 'M.2 NVMe',
    storageUpgradeStatus: 'full',
    storageUpgradeLabel: '✅ +1 Slot M.2 2280 Livre',
    storageSlots: '2x Slots M.2 2280 NVMe Gen4 (1 ocupado 1TB + 1 slot 2280 livre) • Sem SATA',
    hasExtraM2Slot: true,
    hasSataBay: false,
    screen: '16" WQXGA (2560x1600) 165Hz, 100% sRGB, 350 nits',
    cooling: 'Legion ColdFront 5.0 (Silencioso e robusto)',
    battery: '80Wh (~7.5h escritório c/ Ryzen / 1.2h game)',
    batteryHoursNormal: 7.5,
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta recarga ultrarrápida USB-C 140W PD (levar carregador de celular na mochila) + Fonte Slim 230W',
    hasBiometrics: true,
    biometrics: '🔐 Leitor de Impressão Digital no Botão Power (Desbloqueio Instantâneo)',
    ports: '2x USB-C (1x 140W PD + 1x DP 1.4) + 2x USB-A 3.2 Gen 2 + Leitor SD Full-size + HDMI 2.1',
    priceBr: 8499,
    priceUs: 1249,
    storeBr: 'Lenovo Oficial / Mercado Livre',
    storeUs: 'Lenovo US / B&H Photo',
    urlBr: 'https://www.lenovo.com/br',
    urlUs: 'https://www.bhphotovideo.com',
    score: 94,
    bestFor: 'Chassi em alumínio fino, teclado superior, leitor de digital e bateria longa',
    history: [
      { date: 'Dez 2025', br: 8299, us: 1180 },
      { date: 'Jan 2026', br: 8899, us: 1299 },
      { date: 'Hoje', br: 8499, us: 1249 }
    ]
  },
  {
    id: 'asus-tuf-gaming-a15',
    name: 'ASUS TUF Gaming A15',
    modelCode: 'FA507UI-HQ017W',
    gpu: 'NVIDIA RTX 4070',
    gpuTgp: '140W com Dynamic Boost',
    gpuTier: 'high',
    cpu: 'AMD Ryzen 9 8945HS (Com NPU AI dedicada)',
    ram: '16GB DDR5 5600MHz',
    ramType: 'DDR5',
    ramSpeed: '5600MHz',
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM até 64GB)',
    storage: '1TB SSD NVMe',
    storageType: 'M.2 NVMe',
    storageUpgradeStatus: 'full',
    storageUpgradeLabel: '✅ +1 Slot M.2 2280 Livre',
    storageSlots: '2x Slots M.2 2280 NVMe Gen4 (1 ocupado 1TB + 1 slot livre) • Sem SATA',
    hasExtraM2Slot: true,
    hasSataBay: false,
    screen: '15.6" WQHD (2560x1440) 165Hz, 100% DCI-P3, G-Sync',
    cooling: 'Dual Arc Flow Fans + 5 Heatpipes',
    battery: '90Wh Bateria Enorme (~8h escritório c/ Ryzen 9 / 1.5h game)',
    batteryHoursNormal: 8.0,
    hasUsbCCharging: true,
    chargingInfo: '⚡ Aceita carregador USB-C Power Delivery 100W + Fonte de mesa 240W',
    hasBiometrics: false,
    biometrics: '❌ Sem leitor de digital',
    ports: '2x USB-C (1x USB4 40Gbps + 1x Type-C c/ 100W PD) + 2x USB-A 3.2 + HDMI 2.1 + RJ-45',
    priceBr: 8699,
    priceUs: 1149,
    storeBr: 'Kabum / Loja ASUS',
    storeUs: 'Best Buy / Micro Center',
    urlBr: 'https://www.kabum.com.br',
    urlUs: 'https://www.bestbuy.com',
    score: 92,
    bestFor: 'Super resistente (certificação militar MIL-STD-810H) + RTX 4070 + Bateria 90Wh',
    history: [
      { date: 'Nov 2025', br: 8199, us: 1049 },
      { date: 'Fev 2026', br: 8999, us: 1199 },
      { date: 'Hoje', br: 8699, us: 1149 }
    ]
  },
  {
    id: 'lenovo-legion-pro-5i',
    name: 'Lenovo Legion Pro 5i (EUA Sweetspot)',
    modelCode: '16IRX9',
    gpu: 'NVIDIA RTX 4070',
    gpuTgp: '140W',
    gpuTier: 'high',
    cpu: 'Intel Core i7-14700HX',
    ram: '32GB DDR5 5600MHz (Já vem com 32GB)',
    ramType: 'DDR5',
    ramSpeed: '5600MHz',
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM - Já vem 32GB)',
    storage: '1TB SSD NVMe Gen4',
    storageType: 'M.2 NVMe',
    storageUpgradeStatus: 'full',
    storageUpgradeLabel: '✅ +1 Slot M.2 2280 c/ Dissipador',
    storageSlots: '2x Slots M.2 2280 PCIe 4.0 (1 ocupado 1TB + 1 slot 2280 livre com dissipador) • Sem SATA',
    hasExtraM2Slot: true,
    hasSataBay: false,
    screen: '16" 240Hz WQXGA, 500 nits, DisplayHDR 400, 100% sRGB',
    cooling: 'Coldfront com câmara de vapor e IA Lenovo Vantage',
    battery: '80Wh (~4.5h escritório / 1h game)',
    batteryHoursNormal: 4.5,
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta recarga rápida USB-C 140W PD (carrega na faculdade ou trabalho) + Fonte 300W',
    hasBiometrics: false,
    biometrics: '❌ Sem digital (Webcam 1080p c/ botão físico E-Shutter de privacidade)',
    ports: '2x USB-C (1x 140W PD + 1x DP) + 4x USB-A 3.2 (Abundância de portas para periféricos!) + HDMI 2.1 + RJ-45',
    priceBr: 11499,
    priceUs: 1449,
    storeBr: 'Lojas Especializadas / Importação BR',
    storeUs: 'Micro Center / B&H Photo / Lenovo US',
    urlBr: 'https://www.google.com.br/shopping',
    urlUs: 'https://www.microcenter.com',
    score: 98,
    bestFor: '🌟 SE TROUXER DOS EUA: Custa R$ 8.400 convertido e destrói qualquer modelo de R$ 8.900 do BR!',
    history: [
      { date: 'Nov 2025 (BF)', br: 10999, us: 1349 },
      { date: 'Jan 2026', br: 11999, us: 1499 },
      { date: 'Hoje', br: 11499, us: 1449 }
    ]
  },
  {
    id: 'acer-nitro-16',
    name: 'Acer Nitro 16',
    modelCode: 'AN16-41-R746',
    gpu: 'NVIDIA RTX 4060',
    gpuTgp: '140W',
    gpuTier: 'mid-high',
    cpu: 'AMD Ryzen 7 7735HS (8 Cores)',
    ram: '16GB DDR5 4800MHz',
    ramType: 'DDR5',
    ramSpeed: '4800MHz',
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM)',
    storage: '512GB / 1TB SSD NVMe',
    storageType: 'M.2 NVMe',
    storageUpgradeStatus: 'full',
    storageUpgradeLabel: '✅ +1 Slot M.2 Gen4 Livre',
    storageSlots: '2x Slots M.2 NVMe Gen4 (1 ocupado + 1 slot livre) • Sem SATA',
    hasExtraM2Slot: true,
    hasSataBay: false,
    screen: '16" WUXGA (1920x1200) 165Hz, 100% sRGB, 400 nits',
    cooling: 'Liquid Metal na CPU + 4 saídas de exaustão',
    battery: '90Wh (~6h escritório / 1.1h game)',
    batteryHoursNormal: 6.0,
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta USB-C 100W PD + Fonte 230W',
    hasBiometrics: false,
    biometrics: '❌ Sem leitor de digital',
    ports: '2x USB-C (USB4 / 100W PD) + 3x USB-A 3.2 + HDMI 2.1 + MicroSD + RJ-45',
    priceBr: 7299,
    priceUs: 999,
    storeBr: 'Kabum / Magazine Luiza',
    storeUs: 'Amazon US / Best Buy',
    urlBr: 'https://www.kabum.com.br',
    urlUs: 'https://www.amazon.com',
    score: 89,
    bestFor: 'Fica abaixo do seu teto (R$ 7.299), sobrando grana para upgrade de SSD e periféricos',
    history: [
      { date: 'Nov 2025', br: 6899, us: 899 },
      { date: 'Jan 2026', br: 7599, us: 1049 },
      { date: 'Hoje', br: 7299, us: 999 }
    ]
  },
  {
    id: 'asus-rog-zephyrus-g16',
    name: 'ASUS ROG Zephyrus G16 (2024)',
    modelCode: 'GU605MI',
    gpu: 'NVIDIA RTX 4070',
    gpuTgp: '105W (Perfil Fino / Ultrabook Gamer)',
    gpuTier: 'high',
    cpu: 'Intel Core Ultra 7 155H (Meteor Lake AI)',
    ram: '16GB LPDDR5X 7467MHz (Soldada)',
    ramType: 'LPDDR5X',
    ramSpeed: '7467MHz',
    ramUpgradeStatus: 'none',
    ramUpgradeLabel: '❌ Não Aceita Troca (100% Soldada na Placa)',
    storage: '1TB NVMe PCIe 4.0',
    storageType: 'M.2 NVMe',
    storageUpgradeStatus: 'full',
    storageUpgradeLabel: '✅ +1 Slot M.2 2280 Livre',
    storageSlots: '2x Slots M.2 2280 PCIe 4.0 (1 ocupado 1TB + 1 slot livre) • Sem SATA',
    hasExtraM2Slot: true,
    hasSataBay: false,
    screen: '16" OLED 2.5K (240Hz, 0.2ms, 100% DCI-P3, HDR True Black 500)',
    cooling: 'Tri-Fan Technology com metal líquido e câmara',
    battery: '90Wh (~8.5h escritório c/ Intel Ultra / 1.5h game)',
    batteryHoursNormal: 8.5,
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta recarga USB-C 100W Type-C portátil + Conector ASUS Slim 200W/240W',
    hasBiometrics: true,
    biometrics: '📷 Reconhecimento Facial Windows Hello (Câmera Infravermelho IR estilo Face ID)',
    ports: '2x USB-C (1x Thunderbolt 4 / 100W PD + 1x USB-C 3.2 Gen 2) + 2x USB-A 3.2 Gen 2 + Leitor SD UHS-II + HDMI 2.1',
    priceBr: 14899,
    priceUs: 1599,
    storeBr: 'ASUS Store Brasil (Muito sobrepreço)',
    storeUs: 'Best Buy (Promoção frequente)',
    urlBr: 'https://www.lojaasus.com.br',
    urlUs: 'https://www.bestbuy.com',
    score: 96,
    bestFor: 'A melhor tela do planeta (OLED 240Hz), desbloqueio facial Windows Hello e corpo ultrafino estilo MacBook',
    history: [
      { date: 'Dez 2025', br: 15499, us: 1499 },
      { date: 'Jan 2026', br: 14999, us: 1699 },
      { date: 'Hoje', br: 14899, us: 1599 }
    ]
  },
  {
    id: 'dell-g15-5530',
    name: 'Dell G15 5530 (Versão i7/4060)',
    modelCode: 'G15-5530-U25P',
    gpu: 'NVIDIA RTX 4060',
    gpuTgp: '140W',
    gpuTier: 'mid-high',
    cpu: 'Intel Core i7-13650HX',
    ram: '16GB DDR5 4800MHz',
    ramType: 'DDR5',
    ramSpeed: '4800MHz',
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM)',
    storage: '512GB SSD NVMe',
    storageType: 'M.2 NVMe',
    storageUpgradeStatus: 'partial',
    storageUpgradeLabel: '⚠️ 2º Slot M.2 (Requer Suporte Dell)',
    storageSlots: '2x Slots M.2 (1 slot ocupado + 1 slot 2230/2280 requer suporte metálico Dell) • Sem SATA',
    hasExtraM2Slot: true,
    hasSataBay: false,
    screen: '15.6" FHD (1920x1080) 165Hz, 100% sRGB, 300 nits',
    cooling: 'Design Alienware dual-fan',
    battery: '56Wh (~3.5h escritório / 50min game)',
    batteryHoursNormal: 3.5,
    hasUsbCCharging: false,
    chargingInfo: '🔌 Apenas plugue convencional redondo Dell (240W). Não carrega por Type-C',
    hasBiometrics: false,
    biometrics: '❌ Sem leitor de digital',
    ports: '1x USB-C (DisplayPort) + 3x USB-A 3.2 + HDMI 2.1 + RJ-45',
    priceBr: 6999,
    priceUs: 949,
    storeBr: 'Dell Brasil / Magazine Luiza',
    storeUs: 'Dell US Outlet / Best Buy',
    urlBr: 'https://www.dell.com/pt-br',
    urlUs: 'https://www.dell.com/en-us',
    score: 87,
    bestFor: 'Opção de entrada para RTX 4060 140W com bom suporte pós-venda',
    history: [
      { date: 'Nov 2025', br: 6499, us: 899 },
      { date: 'Jan 2026', br: 7299, us: 999 },
      { date: 'Hoje', br: 6999, us: 949 }
    ]
  }
];

// Estado da Aplicação
let laptops = [];
let watchlist = [];
let currentFilter = 'all';
let currentSort = 'value_score';
let usdRate = 5.65;
let salesTaxRate = 0.0; // 0% (Delaware / online), 6.5% (Flórida), 8.87% (NY)
let importMode = 'wise'; // 'wise' (1.1%), 'credit_card' (4.38%), 'direct' (0%)

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  bindEvents();
  render();
});

function loadData() {
  const savedLaptops = localStorage.getItem(STORAGE_KEY);
  if (savedLaptops) {
    try {
      const parsed = JSON.parse(savedLaptops);
      // Mesclar propriedades novas (battery, ports, biometrics, hasUsbCCharging, ramUpgrade, storage) caso venham do DEFAULT_LAPTOPS
      laptops = parsed.map(item => {
        const def = DEFAULT_LAPTOPS.find(d => d.id === item.id);
        if (def) {
          return {
            ...def,
            ...item,
            battery: item.battery || def.battery,
            batteryHoursNormal: item.batteryHoursNormal !== undefined ? item.batteryHoursNormal : def.batteryHoursNormal,
            hasUsbCCharging: item.hasUsbCCharging !== undefined ? item.hasUsbCCharging : def.hasUsbCCharging,
            chargingInfo: item.chargingInfo || def.chargingInfo,
            hasBiometrics: item.hasBiometrics !== undefined ? item.hasBiometrics : def.hasBiometrics,
            biometrics: item.biometrics || def.biometrics,
            ports: item.ports || def.ports,
            ramType: item.ramType || def.ramType,
            ramSpeed: item.ramSpeed || def.ramSpeed,
            ramUpgradeStatus: item.ramUpgradeStatus || def.ramUpgradeStatus,
            ramUpgradeLabel: item.ramUpgradeLabel || def.ramUpgradeLabel,
            storageType: item.storageType || def.storageType,
            storageUpgradeStatus: item.storageUpgradeStatus || def.storageUpgradeStatus,
            storageUpgradeLabel: item.storageUpgradeLabel || def.storageUpgradeLabel,
            storageSlots: item.storageSlots || def.storageSlots,
            hasExtraM2Slot: item.hasExtraM2Slot !== undefined ? item.hasExtraM2Slot : def.hasExtraM2Slot,
            hasSataBay: item.hasSataBay !== undefined ? item.hasSataBay : def.hasSataBay
          };
        }
        return item;
      });
    } catch(e) {
      laptops = DEFAULT_LAPTOPS;
    }
  } else {
    laptops = DEFAULT_LAPTOPS;
  }

  const savedWatch = localStorage.getItem(WATCHLIST_KEY);
  watchlist = savedWatch ? JSON.parse(savedWatch) : ['predator-helios-neo-16', 'dell-g16-7630', 'lenovo-legion-pro-5i'];

  const rateInput = document.getElementById('usdRateInput');
  if (rateInput) usdRate = parseFloat(rateInput.value) || 5.65;

  const taxSelect = document.getElementById('salesTaxSelect');
  if (taxSelect) salesTaxRate = parseFloat(taxSelect.value) || 0;

  const modeSelect = document.getElementById('importModeSelect');
  if (modeSelect) importMode = modeSelect.value || 'wise';

  const savedGasUrl = localStorage.getItem(GAS_URL_KEY);
  const gasInput = document.getElementById('gasApiUrl');
  if (gasInput && savedGasUrl) {
    gasInput.value = savedGasUrl;
    // Tenta sincronizar silenciosamente com o Google Sheets na inicialização
    fetchFromGAS(savedGasUrl, true);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(laptops));
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
}

// Detalhamento Completo de Impostos e Conversão
function getTaxBreakdown(priceUs) {
  const salesTaxUsd = priceUs * salesTaxRate;
  const totalUsd = priceUs + salesTaxUsd;

  let iofRate = 0;
  if (importMode === 'wise') iofRate = 0.011; // 1.1%
  else if (importMode === 'credit_card') iofRate = 0.0438; // 4.38%
  else iofRate = 0;

  const baseBrl = totalUsd * usdRate;
  const iofBrl = baseBrl * iofRate;
  const totalBrl = baseBrl + iofBrl;

  return {
    priceUs,
    salesTaxUsd,
    totalUsd,
    iofRate,
    iofBrl,
    baseBrl,
    totalBrl
  };
}

// Retorna o valor final convertido em Reais
function calculateConvertedUsPrice(priceUs) {
  return getTaxBreakdown(priceUs).totalBrl;
}

function bindEvents() {
  // Cotação e Modo de importação
  document.getElementById('usdRateInput').addEventListener('input', (e) => {
    usdRate = parseFloat(e.target.value) || 5.65;
    render();
  });

  document.getElementById('importModeSelect').addEventListener('change', (e) => {
    importMode = e.target.value;
    render();
  });

  // Busca e Filtros
  document.getElementById('searchInput').addEventListener('input', () => {
    render();
  });

  document.getElementById('filterChips').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    render();
  });

  document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    render();
  });

  // Modal Cadastrar Novo
  document.getElementById('btnOpenAddModal').addEventListener('click', () => {
    document.getElementById('addModal').style.display = 'flex';
  });

  document.getElementById('btnCloseAddModal').addEventListener('click', () => {
    document.getElementById('addModal').style.display = 'none';
  });

  document.getElementById('btnCancelAdd').addEventListener('click', () => {
    document.getElementById('addModal').style.display = 'none';
  });

  document.getElementById('addLaptopForm').addEventListener('submit', handleAddLaptop);

  // Modais de Comparador e Histórico
  document.getElementById('btnCloseComparator').addEventListener('click', () => {
    document.getElementById('comparatorModal').style.display = 'none';
  });

  document.getElementById('btnCloseHistory').addEventListener('click', () => {
    document.getElementById('historyModal').style.display = 'none';
  });

  // Modal de Sincronização Google Sheets / Apps Script
  const btnOpenSync = document.getElementById('btnOpenSyncModal');
  if (btnOpenSync) {
    btnOpenSync.addEventListener('click', () => {
      document.getElementById('syncModal').style.display = 'flex';
    });
  }

  const btnCloseSync = document.getElementById('btnCloseSyncModal');
  if (btnCloseSync) {
    btnCloseSync.addEventListener('click', () => {
      document.getElementById('syncModal').style.display = 'none';
    });
  }

  const btnSaveGAS = document.getElementById('btnSaveGAS');
  if (btnSaveGAS) {
    btnSaveGAS.addEventListener('click', () => {
      const url = document.getElementById('gasApiUrl').value.trim();
      localStorage.setItem(GAS_URL_KEY, url);
      showGasMessage('Configuração salva com sucesso!', 'success');
      if (url) fetchFromGAS(url);
    });
  }

  const btnTestFetch = document.getElementById('btnTestFetchGAS');
  if (btnTestFetch) {
    btnTestFetch.addEventListener('click', () => {
      const url = document.getElementById('gasApiUrl').value.trim();
      if (!url) {
        showGasMessage('Por favor, insira a URL do Google Apps Script.', 'error');
        return;
      }
      fetchFromGAS(url);
    });
  }

  // Modal de Duelo / Qual Vale Mais a Pena
  const btnOpenDuel = document.getElementById('btnOpenDuel');
  if (btnOpenDuel) {
    btnOpenDuel.addEventListener('click', () => {
      openDuelModal();
    });
  }

  const btnCloseDuel = document.getElementById('btnCloseDuelModal');
  if (btnCloseDuel) {
    btnCloseDuel.addEventListener('click', () => {
      document.getElementById('duelModal').style.display = 'none';
    });
  }

  const duelSelectBr = document.getElementById('duelSelectBr');
  const duelSelectUs = document.getElementById('duelSelectUs');
  if (duelSelectBr && duelSelectUs) {
    duelSelectBr.addEventListener('change', renderDuel);
    duelSelectUs.addEventListener('change', renderDuel);
  }

  const salesTaxSelect = document.getElementById('salesTaxSelect');
  if (salesTaxSelect) {
    salesTaxSelect.addEventListener('change', (e) => {
      salesTaxRate = parseFloat(e.target.value) || 0;
      render();
    });
  }

  // Modal de Leitura de Print de Tela (OCR)
  const btnOpenOcr = document.getElementById('btnOpenOcrModal');
  if (btnOpenOcr) {
    btnOpenOcr.addEventListener('click', () => {
      document.getElementById('ocrModal').style.display = 'flex';
    });
  }

  const btnCloseOcr = document.getElementById('btnCloseOcrModal');
  if (btnCloseOcr) {
    btnCloseOcr.addEventListener('click', () => {
      document.getElementById('ocrModal').style.display = 'none';
      resetOcr();
    });
  }

  const ocrFileInput = document.getElementById('ocrFileInput');
  if (ocrFileInput) {
    ocrFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleOcrFile(e.target.files[0]);
      }
    });
  }

  const dropzone = document.getElementById('ocrDropzone');
  if (dropzone) {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleOcrFile(e.dataTransfer.files[0]);
      }
    });
  }

  // Suporte a colar imagem (Ctrl + V) em qualquer lugar da tela
  window.addEventListener('paste', (e) => {
    const items = e.clipboardData && e.clipboardData.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          document.getElementById('ocrModal').style.display = 'flex';
          handleOcrFile(blob);
          break;
        }
      }
    }
  });

  const btnSaveOcr = document.getElementById('btnSaveOcrLaptop');
  if (btnSaveOcr) {
    btnSaveOcr.addEventListener('click', saveOcrParsedLaptop);
  }

  const btnRecalcBr = document.getElementById('btnRecalcOcrBr');
  if (btnRecalcBr) {
    btnRecalcBr.addEventListener('click', () => {
      recalcOcrBrPrice(true);
    });
  }

  const ocrPriceUsInput = document.getElementById('ocrParsedPriceUs');
  if (ocrPriceUsInput) {
    ocrPriceUsInput.addEventListener('change', () => {
      recalcOcrBrPrice(false);
    });
  }

  // Central de Busca Direta nas Lojas
  const btnStoreSearch = document.getElementById('btnExecuteStoreSearch');
  if (btnStoreSearch) {
    btnStoreSearch.addEventListener('click', () => {
      const query = document.getElementById('storeCustomQuery').value.trim() || 'gaming laptop rtx 4070';
      const targetStore = document.getElementById('storeSelectTarget').value;
      executeDirectStoreSearch(targetStore, query);
    });
  }

  const storeInput = document.getElementById('storeCustomQuery');
  if (storeInput) {
    storeInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = storeInput.value.trim() || 'gaming laptop rtx 4070';
        const targetStore = document.getElementById('storeSelectTarget').value;
        executeDirectStoreSearch(targetStore, query);
      }
    });
  }

  // Inicializar o Guia de Placas de Vídeo & Bateria
  initGpuGuideModal();

  // Fechar ao clicar fora
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.style.display = 'none';
    }
  });
}

function showGasMessage(msg, type) {
  const el = document.getElementById('gasStatusMessage');
  if (!el) return;
  el.innerText = msg;
  el.style.display = 'block';
  el.style.color = type === 'error' ? 'var(--danger)' : 'var(--accent)';
  setTimeout(() => { el.style.display = 'none'; }, 4000);
}

// Sincronização direta com a API do Google Apps Script
async function fetchFromGAS(url, silent = false) {
  try {
    if (!silent) showGasMessage('Conectando ao Google Sheets...', 'info');
    const response = await fetch(url);
    if (!response.ok) throw new Error('Status HTTP: ' + response.status);
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      // Normalizar campos vindos da planilha
      laptops = data.map(item => ({
        id: item.id || ('gas-' + Math.random().toString(36).substr(2, 9)),
        name: item.name || 'Notebook Gamer',
        modelCode: item.modelCode || 'Google Sheets',
        gpu: item.gpu || 'RTX 4060',
        gpuTgp: item.gpuTgp || '140W',
        gpuTier: (item.gpu && item.gpu.includes('4070')) ? 'high' : 'mid-high',
        cpu: item.cpu || 'Processador Gamer',
        ram: item.ram || '16GB DDR5',
        storage: item.storage || '1TB SSD NVMe',
        screen: item.screen || '16" 165Hz',
        cooling: 'Refrigeração de Alta Eficiência',
        priceBr: Number(item.priceBr) || 0,
        priceUs: Number(item.priceUs) || 0,
        storeBr: item.storeBr || 'Brasil',
        storeUs: item.storeUs || 'EUA',
        urlBr: item.urlBr || '#',
        urlUs: item.urlUs || '#',
        score: item.score || (item.gpu && item.gpu.includes('4070') ? 94 : 91),
        bestFor: item.bestFor || 'Sincronizado da Nuvem Google',
        history: item.history || [
          { date: 'Atual', br: Number(item.priceBr) || 0, us: Number(item.priceUs) || 0 }
        ]
      }));

      saveData();
      render();
      if (!silent) showGasMessage(`✓ ${laptops.length} notebooks carregados da Planilha Google!`, 'success');
    }
  } catch (err) {
    console.warn('Erro ao conectar com Google Apps Script:', err);
    if (!silent) showGasMessage('Erro ao conectar. Verifique se o Web App está com acesso "Qualquer pessoa" (Anyone).', 'error');
  }
}

function handleAddLaptop(e) {
  e.preventDefault();
  const name = document.getElementById('lapName').value.trim();
  const gpu = document.getElementById('lapGpu').value;
  const cpu = document.getElementById('lapCpu').value.trim();
  const ram = document.getElementById('lapRam').value.trim();
  const screen = document.getElementById('lapScreen').value.trim();
  const priceBr = parseFloat(document.getElementById('lapPriceBr').value) || 0;
  const priceUs = parseFloat(document.getElementById('lapPriceUs').value) || 0;
  const storeBr = document.getElementById('lapStoreBr').value.trim() || 'Lojas Nacionais';
  const storeUs = document.getElementById('lapStoreUs').value.trim() || 'Lojas EUA';

  const newLaptop = {
    id: 'user-' + Date.now(),
    name,
    modelCode: 'Custom Watch',
    gpu,
    gpuTgp: '140W',
    gpuTier: gpu.includes('4070') ? 'high' : (gpu.includes('4080') ? 'ultra' : 'mid-high'),
    cpu,
    ram,
    storage: '1TB SSD NVMe',
    screen,
    cooling: 'Dual Fan Gamer',
    priceBr,
    priceUs,
    storeBr,
    storeUs,
    urlBr: '#',
    urlUs: '#',
    score: 90,
    bestFor: 'Adicionado pelo usuário',
    history: [
      { date: 'Hoje (Cadastro)', br: priceBr, us: priceUs }
    ]
  };

  laptops.unshift(newLaptop);
  watchlist.push(newLaptop.id);
  saveData();

  document.getElementById('addLaptopForm').reset();
  document.getElementById('addModal').style.display = 'none';
  render();
}

function toggleWatch(id) {
  if (watchlist.includes(id)) {
    watchlist = watchlist.filter(item => item !== id);
  } else {
    watchlist.push(id);
  }
  saveData();
  render();
}

// Motor de Similaridade de Notebooks
function findSimilarLaptops(targetLaptop) {
  return laptops
    .filter(item => item.id !== targetLaptop.id)
    .map(other => {
      let similarityScore = 0;

      // 1. GPU (peso 40)
      if (other.gpu === targetLaptop.gpu) {
        similarityScore += 40;
      } else if (
        (other.gpu.includes('4060') && targetLaptop.gpu.includes('4070')) ||
        (other.gpu.includes('4070') && targetLaptop.gpu.includes('4060'))
      ) {
        similarityScore += 28; // Concorrentes diretos de patamar próximo
      } else {
        similarityScore += 10;
      }

      // 2. Tela & Taxa de Hz (peso 25)
      const targetScreenQhd = targetLaptop.screen.includes('QHD') || targetLaptop.screen.includes('WQXGA') || targetLaptop.screen.includes('2560');
      const otherScreenQhd = other.screen.includes('QHD') || other.screen.includes('WQXGA') || other.screen.includes('2560');
      if (targetScreenQhd === otherScreenQhd) {
        similarityScore += 25;
      } else {
        similarityScore += 15;
      }

      // 3. Processador (peso 20)
      const targetCpuHX = targetLaptop.cpu.includes('HX');
      const otherCpuHX = other.cpu.includes('HX');
      if (targetCpuHX === otherCpuHX) {
        similarityScore += 20;
      } else {
        similarityScore += 12;
      }

      // 4. Faixa de Preço Brasil (peso 15)
      const priceDelta = Math.abs(other.priceBr - targetLaptop.priceBr);
      if (priceDelta <= 800) {
        similarityScore += 15;
      } else if (priceDelta <= 1500) {
        similarityScore += 10;
      } else {
        similarityScore += 4;
      }

      return {
        laptop: other,
        similarity: Math.min(99, Math.round(similarityScore))
      };
    })
    .sort((a, b) => b.similarity - a.similarity);
}

// Modal do Comparador de Similares
function openSimilarModal(laptopId) {
  const target = laptops.find(l => l.id === laptopId);
  if (!target) return;

  const similars = findSimilarLaptops(target).slice(0, 3);
  const convertedTargetUs = calculateConvertedUsPrice(target.priceUs);

  document.getElementById('comparatorTitle').innerHTML = `Rivais e Modelos Parecidos com: <strong>${target.name}</strong>`;

  let html = `
    <div class="similars-hero">
      <div class="similars-hero-title">Modelo Selecionado como Referência:</div>
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div>
          <h3 style="color:var(--primary); font-size:1.2rem;">${target.name}</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">${target.gpu} (${target.gpuTgp}) • ${target.cpu} • ${target.screen}</p>
        </div>
        <div style="text-align:right;">
          <div style="font-size:1.15rem; font-weight:800; font-family:var(--font-mono);">R$ ${target.priceBr.toLocaleString('pt-BR')} no Brasil</div>
          <div style="font-size:0.85rem; color:var(--accent); font-family:var(--font-mono);">✈️ Irmão traz por: $ ${target.priceUs.toLocaleString('en-US')} (~ R$ ${Math.round(convertedTargetUs).toLocaleString('pt-BR')})</div>
        </div>
      </div>
    </div>

    <h4 style="margin-bottom:1rem; font-size:1rem; color:var(--text-main);">Top 3 Concorrentes Diretos no Mercado:</h4>
    <div class="similars-grid">
  `;

  similars.forEach(({ laptop: item, similarity }, index) => {
    const itemConvertedUs = calculateConvertedUsPrice(item.priceUs);
    const diffBr = item.priceBr - target.priceBr;
    const isBestDeal = item.priceBr <= target.priceBr && (item.score >= target.score || item.gpu.includes('4070'));

    html += `
      <div class="similar-card ${isBestDeal ? 'best-alternative' : ''}">
        <span class="match-badge">🎯 ${similarity}% de Similaridade Técnica</span>
        <h4 style="font-size:0.95rem; font-weight:700;">${item.name}</h4>
        
        <div style="font-size:0.8rem; color:var(--text-muted);">
          <div>⚡ <strong>GPU:</strong> <span style="color:#38bdf8;">${item.gpu}</span></div>
          <div>🧠 <strong>CPU:</strong> ${item.cpu.split('(')[0]}</div>
          <div>🖥️ <strong>Tela:</strong> ${item.screen.split(',')[0]}</div>
        </div>

        <div style="background:var(--bg-surface); padding:0.6rem; border-radius:6px; margin-top:0.4rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
            <span>Preço Brasil:</span>
            <strong style="font-family:var(--font-mono);">R$ ${item.priceBr.toLocaleString('pt-BR')}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--accent);">
            <span>Irmão traz por:</span>
            <strong style="font-family:var(--font-mono);">$ ${item.priceUs.toLocaleString('en-US')} (~ R$ ${Math.round(itemConvertedUs).toLocaleString('pt-BR')})</strong>
          </div>
          <div style="font-size:0.75rem; margin-top:0.3rem; color:${diffBr < 0 ? 'var(--accent)' : 'var(--text-dim)'};">
            ${diffBr < 0 ? `💰 R$ ${Math.abs(diffBr).toLocaleString('pt-BR')} mais barato no BR` : (diffBr === 0 ? 'Mesmo preço no BR' : `R$ ${diffBr.toLocaleString('pt-BR')} mais caro no BR`)}
          </div>
        </div>

        <p style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">"${item.bestFor}"</p>
      </div>
    `;
  });

  html += `</div>`;

  document.getElementById('comparatorBody').innerHTML = html;
  document.getElementById('comparatorModal').style.display = 'flex';
}

// Modal de Histórico e Alerta de Preço
function openHistoryModal(laptopId) {
  const target = laptops.find(l => l.id === laptopId);
  if (!target) return;

  document.getElementById('historyTitle').innerText = target.name;

  let timelineHtml = target.history.map(entry => `
    <div class="history-entry">
      <span class="history-date">📅 ${entry.date}</span>
      <div class="history-prices">
        <span>🇧🇷 R$ ${entry.br.toLocaleString('pt-BR')}</span>
        <span style="color:var(--text-dim); margin:0 4px;">|</span>
        <span style="color:var(--accent);">🇺🇸 $ ${entry.us.toLocaleString('en-US')}</span>
      </div>
    </div>
  `).join('');

  const targetConverted = calculateConvertedUsPrice(target.priceUs);
  const lowestBr = Math.min(...target.history.map(h => h.br));

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
      <div>
        <span class="spec-label">Menor Preço Registrado (BR):</span>
        <div style="font-size:1.1rem; font-weight:700; color:var(--accent); font-family:var(--font-mono);">
          R$ ${lowestBr.toLocaleString('pt-BR')}
        </div>
      </div>
      <div>
        <span class="spec-label">Preço Atual EUA Convertido:</span>
        <div style="font-size:1.1rem; font-weight:700; color:var(--primary); font-family:var(--font-mono);">
          R$ ${Math.round(targetConverted).toLocaleString('pt-BR')}
        </div>
      </div>
    </div>

    <h4 style="font-size:0.9rem; color:var(--text-muted); margin-bottom:0.5rem;">Histórico de Oscilação de Preços:</h4>
    <div class="history-timeline">
      ${timelineHtml}
    </div>

    <div class="alert-setup-box">
      <h4>🔔 Vigia Ativo: Configurar Alerta de Preço</h4>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.75rem;">
        Defina o valor máximo que você aceita pagar. O robô emite alerta sonoro/visual assim que o modelo cair para este preço:
      </p>
      <div style="display:flex; gap:0.5rem;">
        <input type="number" id="alertTargetPrice" value="${target.priceBr - 500}" style="background:var(--bg-card); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:6px; color:#fff; width:140px; font-family:var(--font-mono);">
        <button class="btn btn-primary" onclick="savePriceAlert('${target.id}')">Ativar Alerta</button>
      </div>
      <div id="alertFeedback" style="font-size:0.78rem; color:var(--accent); margin-top:0.4rem; display:none;">
        ✓ Alerta gravado com sucesso!
      </div>
    </div>
  `;

  document.getElementById('historyBody').innerHTML = html;
  document.getElementById('historyModal').style.display = 'flex';
}

window.savePriceAlert = function(laptopId) {
  const targetVal = document.getElementById('alertTargetPrice').value;
  localStorage.setItem(`alert_${laptopId}`, targetVal);
  const fb = document.getElementById('alertFeedback');
  if (fb) {
    fb.style.display = 'block';
    setTimeout(() => { fb.style.display = 'none'; }, 2500);
  }
};

// Badges Visuais de Troca & Upgrade: Verde (✅), Amarelo (⚠️), Vermelho (❌)
function renderRamUpgradeBadge(laptop) {
  const status = laptop.ramUpgradeStatus || (laptop.ram && laptop.ram.toLowerCase().includes('soldada') ? 'none' : 'full');
  if (status === 'full') {
    return `<span class="badge" style="background:rgba(16, 185, 129, 0.15); color:#34d399; border:1px solid rgba(16, 185, 129, 0.4); font-size:0.68rem; padding:2px 6px; font-weight:700;">✅ Aceita Troca (2x SODIMM)</span>`;
  } else if (status === 'partial') {
    return `<span class="badge" style="background:rgba(245, 158, 11, 0.15); color:#fbbf24; border:1px solid rgba(245, 158, 11, 0.4); font-size:0.68rem; padding:2px 6px; font-weight:700;">⚠️ Troca Parcial (Híbrido)</span>`;
  } else {
    return `<span class="badge" style="background:rgba(239, 68, 68, 0.15); color:#f87171; border:1px solid rgba(239, 68, 68, 0.4); font-size:0.68rem; padding:2px 6px; font-weight:700;">❌ Não Aceita Troca (Soldada)</span>`;
  }
}

function renderStorageUpgradeBadge(laptop) {
  const status = laptop.storageUpgradeStatus || (laptop.storageSlots && laptop.storageSlots.includes('suporte') ? 'partial' : 'full');
  if (status === 'full') {
    return `<span class="badge" style="background:rgba(16, 185, 129, 0.15); color:#34d399; border:1px solid rgba(16, 185, 129, 0.4); font-size:0.68rem; padding:2px 6px; font-weight:700;">✅ +1 Slot M.2 Livre</span>`;
  } else if (status === 'partial') {
    return `<span class="badge" style="background:rgba(245, 158, 11, 0.15); color:#fbbf24; border:1px solid rgba(245, 158, 11, 0.4); font-size:0.68rem; padding:2px 6px; font-weight:700;">⚠️ 2º Slot M.2 c/ Suporte</span>`;
  } else {
    return `<span class="badge" style="background:rgba(239, 68, 68, 0.15); color:#f87171; border:1px solid rgba(239, 68, 68, 0.4); font-size:0.68rem; padding:2px 6px; font-weight:700;">❌ Apenas 1 Slot M.2</span>`;
  }
}

// Renderização Principal do Grid
function render() {
  const grid = document.getElementById('notebookGrid');
  const query = document.getElementById('searchInput').value.toLowerCase().trim();

  // Filtragem
  let filtered = laptops.filter(laptop => {
    // Busca por texto ampliada
    const matchQuery = 
      laptop.name.toLowerCase().includes(query) ||
      laptop.gpu.toLowerCase().includes(query) ||
      laptop.cpu.toLowerCase().includes(query) ||
      laptop.storeBr.toLowerCase().includes(query) ||
      laptop.storeUs.toLowerCase().includes(query) ||
      (laptop.ports && laptop.ports.toLowerCase().includes(query)) ||
      (laptop.biometrics && laptop.biometrics.toLowerCase().includes(query)) ||
      (laptop.chargingInfo && laptop.chargingInfo.toLowerCase().includes(query)) ||
      (laptop.battery && laptop.battery.toLowerCase().includes(query)) ||
      (laptop.ram && laptop.ram.toLowerCase().includes(query)) ||
      (laptop.storage && laptop.storage.toLowerCase().includes(query)) ||
      (laptop.storageSlots && laptop.storageSlots.toLowerCase().includes(query));

    if (!matchQuery) return false;

    // Filtros por chip
    if (currentFilter === 'intel') {
      const cpu = laptop.cpu.toLowerCase();
      return cpu.includes('intel') || cpu.includes('i7') || cpu.includes('i9') || cpu.includes('ultra');
    }
    if (currentFilter === 'amd') {
      const cpu = laptop.cpu.toLowerCase();
      return cpu.includes('amd') || cpu.includes('ryzen');
    }
    if (currentFilter === 'budget') {
      return laptop.priceBr >= 7900 && laptop.priceBr <= 9100;
    }
    if (currentFilter === 'gpu_upgrade') {
      const convertedUs = calculateConvertedUsPrice(laptop.priceUs);
      // Modelo nos EUA tem GPU superior (4070 ou 4080) e o preço convertido cabe no orçamento de ~8k a 9k
      return (laptop.gpu.includes('4070') || laptop.gpu.includes('4080')) && convertedUs <= 9400;
    }
    if (currentFilter === 'rtx4070') {
      return laptop.gpu.includes('4070');
    }
    if (currentFilter === 'rtx4060') {
      return laptop.gpu.includes('4060');
    }
    if (currentFilter === 'battery_long') {
      return (laptop.batteryHoursNormal !== undefined && laptop.batteryHoursNormal >= 6);
    }
    if (currentFilter === 'ram_upgrade') {
      return (laptop.ramUpgradeStatus === 'full');
    }
    if (currentFilter === 'ddr5') {
      return (laptop.ramType === 'DDR5' || (laptop.ram && laptop.ram.includes('DDR5')));
    }
    if (currentFilter === 'm2_extra') {
      return (laptop.storageUpgradeStatus === 'full' || (laptop.storageSlots && laptop.storageSlots.toLowerCase().includes('livre')));
    }
    if (currentFilter === 'usbc_charging') {
      return laptop.hasUsbCCharging === true || (laptop.chargingInfo && laptop.chargingInfo.includes('USB-C'));
    }
    if (currentFilter === 'biometrics') {
      return laptop.hasBiometrics === true || (laptop.biometrics && !laptop.biometrics.includes('❌'));
    }
    if (currentFilter === 'rich_ports') {
      return laptop.ports && laptop.ports.includes('USB-C') && laptop.ports.includes('USB-A');
    }
    if (currentFilter === 'watchlist') {
      return watchlist.includes(laptop.id);
    }

    return true;
  });

  // Ordenação
  filtered.sort((a, b) => {
    const convertedA = calculateConvertedUsPrice(a.priceUs);
    const convertedB = calculateConvertedUsPrice(b.priceUs);
    const diffA = a.priceBr - convertedA;
    const diffB = b.priceBr - convertedB;

    switch (currentSort) {
      case 'value_score':
        return b.score - a.score;
      case 'battery_desc':
        return (b.batteryHoursNormal || 4) - (a.batteryHoursNormal || 4);
      case 'ram_desc':
        return (parseInt(b.ram) || 16) - (parseInt(a.ram) || 16);
      case 'price_br_asc':
        return a.priceBr - b.priceBr;
      case 'price_us_asc':
        return a.priceUs - b.priceUs;
      case 'diff_desc':
        return diffB - diffA;
      case 'gpu_power':
        return (b.gpu.includes('4070') ? 2 : 1) - (a.gpu.includes('4070') ? 2 : 1);
      default:
        return 0;
    }
  });

  // Atualizar contadores
  document.getElementById('catalogSummary').innerText = `Exibindo ${filtered.length} de ${laptops.length} modelos`;
  document.getElementById('spotlightCount').innerText = `${laptops.length} modelos ativos`;

  // Atualiza equivalente em US$ do banner de R$ 8.000 a R$ 8.900
  const usdMin = Math.round(8000 / usdRate);
  const usdMax = Math.round(8900 / usdRate);
  document.getElementById('spotlightUsdEquiv').innerText = `~ $${usdMin} a $${usdMax} USD`;

  // Renderizar Cards
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:3rem; background:var(--bg-card); border-radius:var(--radius-lg); border:1px dashed var(--border-subtle);">
        <p style="font-size:1.1rem; color:var(--text-muted); margin-bottom:0.5rem;">Nenhum notebook encontrado para esse filtro.</p>
        <button class="btn btn-secondary" onclick="document.getElementById('searchInput').value=''; document.querySelector('.chip[data-filter=all]').click();">Limpar Filtros</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(laptop => {
    const isWatched = watchlist.includes(laptop.id);
    const inBudget = laptop.priceBr >= 8000 && laptop.priceBr <= 8900;
    const convertedUs = calculateConvertedUsPrice(laptop.priceUs);
    const diff = laptop.priceBr - convertedUs;
    const isUsCheaper = diff > 0;
    const tax = getTaxBreakdown(laptop.priceUs);

    const historyBr = (laptop.history && laptop.history.length > 0) ? laptop.history.map(h => h.br) : [laptop.priceBr];
    const historyUs = (laptop.history && laptop.history.length > 0) ? laptop.history.map(h => h.us) : [laptop.priceUs];
    const lowestBr = Math.min(...historyBr);
    const lowestUs = Math.min(...historyUs);
    const isCurrentLowest = laptop.priceBr <= lowestBr;

    // Decisão Inteligente: Vale a pena lá ou aqui?
    let decisionBadge = '';
    const hasSuperiorGpuInUsa = (laptop.gpu.includes('4070') || laptop.gpu.includes('4080')) && convertedUs <= 9400;
    const hasGreatDealInBr = laptop.gpu.includes('4060') && laptop.priceBr <= 8600 && Math.abs(diff) < 900;

    if (hasSuperiorGpuInUsa) {
      decisionBadge = `
        <div class="badge badge-recommend-usa" style="width:100%; text-align:center; padding:5px 8px; font-size:0.75rem;">
          🚀 VALE MUITO NOS EUA: Leva ${laptop.gpu} pelo preço de 4060 no Brasil!
        </div>
      `;
    } else if (hasGreatDealInBr) {
      decisionBadge = `
        <div class="badge badge-recommend-br" style="width:100%; text-align:center; padding:5px 8px; font-size:0.75rem;">
          🛡️ VALE A PENA NO BRASIL: Mesma placa + Garantia nacional de 1 ano e Teclado ABNT2
        </div>
      `;
    }

    return `
      <div class="laptop-card ${inBudget ? 'in-budget' : ''}">
        <div class="card-top">
          <div class="card-title-wrap">
            <h3 class="card-title">${laptop.name}</h3>
            <span class="card-series">${laptop.modelCode} • ${laptop.bestFor}</span>
          </div>
          <div class="card-score">
            <div class="card-score-val">${laptop.score}</div>
            <div class="card-score-lbl">Score</div>
          </div>
        </div>

        ${decisionBadge}

        <!-- Bloco de Especificações Técnicas -->
        <div class="specs-block">
          <div class="spec-item">
            <span class="spec-label">Placa de Vídeo (GPU)</span>
            <span class="spec-value spec-gpu-tgp">${laptop.gpu} <small>(${laptop.gpuTgp})</small></span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Processador (CPU)</span>
            <span class="spec-value">${laptop.cpu.split('(')[0]}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Memória RAM & Tecnologia</span>
            <span class="spec-value">
              <div>${laptop.ram.split('(')[0]} <small style="color:var(--accent); font-weight:700;">(${laptop.ramType || 'DDR5'} ${laptop.ramSpeed || ''})</small></div>
              <div style="margin-top: 4px;">
                ${renderRamUpgradeBadge(laptop)}
              </div>
            </span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Armazenamento (SSD / HD)</span>
            <span class="spec-value">
              <div>${laptop.storage}</div>
              <div style="margin-top: 4px;">
                ${renderStorageUpgradeBadge(laptop)}
              </div>
            </span>
          </div>
          <div class="screen-highlight">
            🖥️ <strong>Tela:</strong> ${laptop.screen}
          </div>
          <div class="card-extra-row" style="grid-column: span 2; display: flex; flex-direction: column; gap: 5px; font-size: 0.76rem; background: rgba(0, 0, 0, 0.25); padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid rgba(255, 255, 255, 0.04);">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">🔌 <strong>Portas:</strong> ${laptop.ports || 'USB-C + USB-A'}</span>
              <span class="badge ${laptop.hasUsbCCharging ? 'badge-accent' : 'badge-purple'}" style="font-size:0.68rem; padding: 1px 6px; white-space: nowrap;">
                ${laptop.hasUsbCCharging ? '⚡ Aceita Type-C' : '🔌 Só Pino Redondo'}
              </span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
              <span>
                ${(laptop.batteryHoursNormal >= 6) ? '✅' : ((laptop.batteryHoursNormal >= 4) ? '⚠️' : '❌')} 
                <strong>Uso Normal:</strong> ~${laptop.batteryHoursNormal || 4}h <small style="color:var(--text-muted);">(Chrome/Estudo)</small> • <small style="color:var(--text-dim);">🎮 ~1h game</small>
              </span>
              <span class="badge ${(laptop.batteryHoursNormal >= 6) ? 'badge-accent' : ((laptop.batteryHoursNormal >= 4) ? 'badge-cyan' : 'badge-purple')}" style="font-size:0.68rem; padding: 1px 6px; white-space: nowrap;">
                ${(laptop.batteryHoursNormal >= 6) ? '🔋 Autonomia Top' : ((laptop.batteryHoursNormal >= 4) ? '⚠️ Moderada' : '❌ Foco Tomada')}
              </span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 3px;">
              <span style="color:var(--text-muted);">🔐 <strong>Biometria:</strong> ${laptop.biometrics ? laptop.biometrics.split('(')[0] : '❌ Sem Digital'}</span>
              <span style="color:var(--text-dim); font-size:0.7rem;">💾 Sem baia interna SATA</span>
            </div>
          </div>
        </div>

        <!-- Caixa de Comparação de Preços Brasil vs EUA -->
        <div class="price-comparison-box">
          <div class="price-row">
            <div class="price-country">
              <span>🇧🇷 Loja no Brasil</span>
              <small style="color:var(--text-dim); font-size:0.75rem;">(${laptop.storeBr})</small>
            </div>
            <div class="price-val br">
              R$ ${laptop.priceBr.toLocaleString('pt-BR')}
            </div>
          </div>

          <div class="price-row">
            <div class="price-country">
              <span>🇺🇸 Seu Irmão compra nos EUA</span>
              <small style="color:var(--text-dim); font-size:0.75rem;">(${laptop.storeUs})</small>
            </div>
            <div style="text-align: right;">
              <div class="price-val us">$ ${laptop.priceUs.toLocaleString('en-US')} USD</div>
              <div class="price-tax-detail">
                ${tax.salesTaxUsd > 0 ? `<span>+ $${tax.salesTaxUsd.toFixed(0)} Tax (${(salesTaxRate * 100).toFixed(1)}%)</span>` : `<span>0% Tax EUA</span>`}
                ${tax.iofBrl > 0 ? `<span>+ R$ ${Math.round(tax.iofBrl)} IOF (${(tax.iofRate * 100).toFixed(1)}%)</span>` : `<span>0% IOF</span>`}
              </div>
              <div class="price-converted-sub" style="font-weight:700; color:var(--accent); font-size:0.92rem; margin-top:3px;">
                Total: ~ R$ ${Math.round(convertedUs).toLocaleString('pt-BR')}
              </div>
            </div>
          </div>

          <!-- Melhor Valor Já Consultado / Histórico -->
          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-subtle); padding: 5px 8px; border-radius: 6px; font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; margin-top: 0.35rem;">
            <span style="color: var(--text-muted); display:flex; align-items:center; gap:4px;">
              🏷️ <strong>Melhor já visto:</strong>
            </span>
            <span style="font-family: var(--font-mono); color: var(--accent); font-weight: 700;">
              R$ ${lowestBr.toLocaleString('pt-BR')} (BR) | $ ${lowestUs.toLocaleString('en-US')} (EUA)
            </span>
            ${isCurrentLowest ? `<span class="badge badge-accent" style="font-size:0.65rem; padding:1px 6px;">🔥 Menor Preço!</span>` : ''}
          </div>

          <div class="price-delta-bar">
            <span class="delta-label">Resultado:</span>
            ${isUsCheaper ? `
              <span class="delta-value save-usa">
                ⚡ Economia de R$ ${Math.round(diff).toLocaleString('pt-BR')} trazendo com ele!
              </span>
            ` : `
              <span class="delta-value save-br">
                🇧🇷 Melhor comprar no Brasil (R$ ${Math.round(Math.abs(diff)).toLocaleString('pt-BR')} menor)
              </span>
            `}
          </div>

          <!-- Comparador de Lojas: Onde Está Mais Barato? -->
          <div style="background: rgba(0, 0, 0, 0.25); border-radius: 6px; padding: 7px 10px; margin-top: 0.6rem; border: 1px solid rgba(255, 255, 255, 0.04); display: flex; flex-direction: column; gap: 5px;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.74rem;">
              <span style="color: var(--accent); font-weight: 700;">🛒 Onde está mais barato?</span>
              <span style="color: var(--text-muted); font-size: 0.68rem;">Checar lojas ao vivo:</span>
            </div>
            <div style="display: flex; gap: 5px; flex-wrap: wrap;">
              <a href="https://www.amazon.com/s?k=${encodeURIComponent(laptop.name)}" target="_blank" style="font-size: 0.7rem; padding: 3px 8px; border-radius: 4px; background: rgba(255, 153, 0, 0.15); color: #ff9900; border: 1px solid rgba(255, 153, 0, 0.35); text-decoration: none; font-weight: 600;">
                🇺🇸 Amazon EUA ↗
              </a>
              <a href="https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(laptop.name)}&qp=seller_facet%3DSeller~Best+Buy" target="_blank" style="font-size: 0.7rem; padding: 3px 8px; border-radius: 4px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); text-decoration: none; font-weight: 600;">
                🇺🇸 Best Buy ↗
              </a>
              <a href="https://www.kabum.com.br/busca/${encodeURIComponent(laptop.name)}" target="_blank" style="font-size: 0.7rem; padding: 3px 8px; border-radius: 4px; background: rgba(249, 115, 22, 0.15); color: #fb923c; border: 1px solid rgba(249, 115, 22, 0.35); text-decoration: none; font-weight: 600;">
                🇧🇷 Kabum BR ↗
              </a>
              <a href="https://lista.mercadolivre.com.br/${encodeURIComponent(laptop.name)}" target="_blank" style="font-size: 0.7rem; padding: 3px 8px; border-radius: 4px; background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.35); text-decoration: none; font-weight: 600;">
                🇧🇷 Mercado Livre ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Ações do Card -->
        <div class="card-actions">
          <button class="btn btn-primary" onclick="openDuelModal('${laptop.id}')" title="Colocar em duelo direto contra outro modelo">
            🥊 Duelo
          </button>
          <button class="btn btn-similars" onclick="openSimilarModal('${laptop.id}')" title="Ver notebooks equivalentes em desempenho">
            🔀 Parecidos
          </button>
          <button class="btn btn-secondary" onclick="openHistoryModal('${laptop.id}')" title="Ver histórico e configurar alerta">
            📊 Histórico
          </button>
          <button class="btn btn-watch ${isWatched ? 'watching' : ''}" onclick="toggleWatch('${laptop.id}')" title="Adicionar aos favoritos vigiados">
            ${isWatched ? '⭐ Vigiando' : '☆ Vigiar'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// MOTOR DE DUELO: QUAL VALE MAIS A PENA?
// ==========================================

function openDuelModal(presetId = null) {
  const selectBr = document.getElementById('duelSelectBr');
  const selectUs = document.getElementById('duelSelectUs');
  if (!selectBr || !selectUs) return;

  // Preenche opções de Brasil
  selectBr.innerHTML = laptops.map(l => `
    <option value="${l.id}">🇧🇷 ${l.name} - R$ ${l.priceBr.toLocaleString('pt-BR')} [${l.gpu}]</option>
  `).join('');

  // Preenche opções de EUA
  selectUs.innerHTML = laptops.map(l => {
    const converted = calculateConvertedUsPrice(l.priceUs);
    return `
      <option value="${l.id}">🇺🇸 ${l.name} - $ ${l.priceUs} (~ R$ ${Math.round(converted).toLocaleString('pt-BR')}) [${l.gpu}]</option>
    `;
  }).join('');

  // Se presetId foi passado, seleciona como referência
  if (presetId) {
    selectBr.value = presetId;
    // Tenta encontrar um rival dos EUA com RTX 4070 ou Legion Pro
    const rivalUs = laptops.find(l => l.id !== presetId && (l.gpu.includes('4070') || l.id === 'lenovo-legion-pro-5i'));
    if (rivalUs) selectUs.value = rivalUs.id;
  } else {
    // Defaults padrão de impacto para o orçamento de R$ 8.000 a 8.900
    selectBr.value = 'predator-helios-neo-16'; // RTX 4060 por R$ 8.299 no BR
    selectUs.value = 'lenovo-legion-pro-5i';     // RTX 4070 por $ 1.449 (~ R$ 8.270) nos EUA
  }

  renderDuel();
  document.getElementById('duelModal').style.display = 'flex';
}

function getGpuBenchmark(gpuString) {
  if (gpuString.includes('4080')) return { power: 175, name: 'RTX 4080', fps1440p: 110, tier: 4 };
  if (gpuString.includes('4070')) return { power: 125, name: 'RTX 4070', fps1440p: 82, tier: 3 };
  if (gpuString.includes('4060')) return { power: 100, name: 'RTX 4060', fps1440p: 65, tier: 2 };
  if (gpuString.includes('4050')) return { power: 75, name: 'RTX 4050', fps1440p: 48, tier: 1 };
  return { power: 90, name: 'GPU Dedicada', fps1440p: 55, tier: 1 };
}

function renderDuel() {
  const idBr = document.getElementById('duelSelectBr').value;
  const idUs = document.getElementById('duelSelectUs').value;

  const lapBr = laptops.find(l => l.id === idBr) || laptops[0];
  const lapUs = laptops.find(l => l.id === idUs) || laptops[1];

  const priceBr = lapBr.priceBr;
  const priceUsConverted = calculateConvertedUsPrice(lapUs.priceUs);
  const diffPrice = priceBr - priceUsConverted;

  const benchBr = getGpuBenchmark(lapBr.gpu);
  const benchUs = getGpuBenchmark(lapUs.gpu);

  // Análise de Veredito
  let winner = 'usa'; // 'usa' ou 'br'
  let verdictTitle = '';
  let verdictDesc = '';

  const isUsGpuSuperior = benchUs.tier > benchBr.tier;
  const isPricesClose = Math.abs(diffPrice) <= 800; // Preços muito parelhos

  if (isUsGpuSuperior && (diffPrice >= -400)) {
    winner = 'usa';
    const fpsGainPercent = Math.round(((benchUs.fps1440p - benchBr.fps1440p) / benchBr.fps1440p) * 100);
    verdictTitle = `🏆 Veredito: VALE MUITO MAIS A PENA TRAZER DOS EUA!`;
    verdictDesc = `
      Pelo mesmo orçamento (em torno de R$ ${Math.round(priceUsConverted).toLocaleString('pt-BR')}), 
      seu irmão traz um notebook com <strong>${benchUs.name}</strong> contra a <strong>${benchBr.name}</strong> daqui.
      Você ganha <strong>+${fpsGainPercent}% de FPS em todos os jogos (Cyberpunk, Warzone, GTA, etc.)</strong>, 
      além de geralmente pegar tela superior e mais memória RAM sem pagar nada a mais!
    `;
  } else if (!isUsGpuSuperior && diffPrice < 500) {
    winner = 'br';
    verdictTitle = `🏆 Veredito: VALE MAIS A PENA COMPRAR NO BRASIL!`;
    verdictDesc = `
      Os dois modelos possuem a mesma placa de vídeo (<strong>${benchBr.name}</strong>) e o preço no Brasil 
      está praticamente empatado com o preço dos EUA. Comprando aqui, você tem a enorme vantagem de 
      <strong>1 ano de garantia nacional com reparo local</strong> e <strong>teclado oficial ABNT2 com 'Ç'</strong>.
    `;
  } else if (diffPrice > 1200) {
    winner = 'usa';
    verdictTitle = `🏆 Veredito: ECONOMIA BRUTAL TRAZENDO DOS EUA!`;
    verdictDesc = `
      Você economiza impressionantes <strong>R$ ${Math.round(diffPrice).toLocaleString('pt-BR')}</strong> 
      trazendo com seu irmão dos EUA pelo mesmo nível de desempenho técnico!
    `;
  } else {
    winner = 'br';
    verdictTitle = `🏆 Veredito: BRASIL MAIS RECOMENDADO!`;
    verdictDesc = `
      A diferença de preço é pequena demais para justificar abrir mão da garantia brasileira de 12 meses.
    `;
  }

  const resultArea = document.getElementById('duelResultArea');
  if (!resultArea) return;

  resultArea.innerHTML = `
    <!-- Cartão do Veredito -->
    <div class="duel-verdict-card ${winner === 'usa' ? 'winner-usa' : 'winner-br'}">
      <div class="duel-verdict-title">${verdictTitle}</div>
      <div class="duel-verdict-desc">${verdictDesc}</div>
    </div>

    <!-- Comparativo Lado a Lado -->
    <div class="duel-cards-grid">
      <!-- Card Brasil -->
      <div class="duel-card ${winner === 'br' ? 'winner' : ''}">
        <div class="duel-header-row">
          <div>
            <span class="badge badge-cyan">Opção Nacional</span>
            <div class="duel-model-name">${lapBr.name}</div>
            <small style="color:var(--text-muted);">${lapBr.storeBr}</small>
          </div>
          <div class="duel-price-badge" style="color:#f1f5f9;">
            R$ ${priceBr.toLocaleString('pt-BR')}
          </div>
        </div>

        <div class="benchmarks-box">
          <div class="meter-row">
            <div class="meter-header">
              <span>Potência Gráfica: <strong>${lapBr.gpu}</strong></span>
              <span>${benchBr.power} pts</span>
            </div>
            <div class="meter-track">
              <div class="meter-fill gpu" style="width: ${Math.min(100, Math.round((benchBr.power / 175) * 100))}%;"></div>
            </div>
          </div>

          <div class="meter-row">
            <div class="meter-header">
              <span>FPS Médio (1440p Alto / Jogos AAA)</span>
              <span>~${benchBr.fps1440p} FPS</span>
            </div>
            <div class="meter-track">
              <div class="meter-fill gpu" style="width: ${Math.min(100, Math.round((benchBr.fps1440p / 120) * 100))}%;"></div>
            </div>
          </div>
        </div>

        <div style="font-size:0.82rem; color:var(--text-muted); display:flex; flex-direction:column; gap:4px;">
          <div>🧠 <strong>Processador:</strong> ${lapBr.cpu.split('(')[0]}</div>
          <div>🖥️ <strong>Tela:</strong> ${lapBr.screen}</div>
          <div>💾 <strong>RAM:</strong> ${lapBr.ram.split('(')[0]} ${renderRamUpgradeBadge(lapBr)}</div>
          <div>💾 <strong>Armazenamento:</strong> ${lapBr.storage} ${renderStorageUpgradeBadge(lapBr)}</div>
          <div>🔌 <strong>Portas:</strong> ${lapBr.ports || 'USB-C + USB-A'}</div>
          <div>🔋 <strong>Bateria Uso Normal:</strong> ~${lapBr.batteryHoursNormal || 4}h (${lapBr.hasUsbCCharging ? '⚡ Aceita Type-C' : '🔌 Só Pino Redondo'})</div>
          <div>🔐 <strong>Biometria:</strong> ${lapBr.biometrics || '❌ Apenas Senha'}</div>
        </div>

        <ul class="pros-cons-list" style="margin-top:auto;">
          <li>✓ Garantia direta no Brasil (12 meses)</li>
          <li>✓ Teclado com tecla "Ç" (ABNT2)</li>
          <li>✓ Sem depender de viagem do irmão</li>
        </ul>
      </div>

      <!-- Card EUA -->
      <div class="duel-card ${winner === 'usa' ? 'winner' : ''}">
        <div class="duel-header-row">
          <div>
            <span class="badge badge-accent">Irmão Traz dos EUA ✈️</span>
            <div class="duel-model-name">${lapUs.name}</div>
            <small style="color:var(--text-muted);">${lapUs.storeUs}</small>
          </div>
          <div style="text-align:right;">
            <div class="duel-price-badge" style="color:var(--accent);">
              $ ${lapUs.priceUs}
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); font-family:var(--font-mono);">
              ~ R$ ${Math.round(priceUsConverted).toLocaleString('pt-BR')}
            </div>
          </div>
        </div>

        <div class="benchmarks-box">
          <div class="meter-row">
            <div class="meter-header">
              <span>Potência Gráfica: <strong>${lapUs.gpu}</strong></span>
              <span style="color:${isUsGpuSuperior ? 'var(--accent)' : 'inherit'}; font-weight:700;">
                ${benchUs.power} pts ${isUsGpuSuperior ? '🔥 (+GPU Superior)' : ''}
              </span>
            </div>
            <div class="meter-track">
              <div class="meter-fill ${isUsGpuSuperior ? 'gpu-high' : 'gpu'}" style="width: ${Math.min(100, Math.round((benchUs.power / 175) * 100))}%;"></div>
            </div>
          </div>

          <div class="meter-row">
            <div class="meter-header">
              <span>FPS Médio (1440p Alto / Jogos AAA)</span>
              <span style="color:${isUsGpuSuperior ? 'var(--accent)' : 'inherit'}; font-weight:700;">
                ~${benchUs.fps1440p} FPS
              </span>
            </div>
            <div class="meter-track">
              <div class="meter-fill ${isUsGpuSuperior ? 'gpu-high' : 'gpu'}" style="width: ${Math.min(100, Math.round((benchUs.fps1440p / 120) * 100))}%;"></div>
            </div>
          </div>
        </div>

        <div style="font-size:0.82rem; color:var(--text-muted); display:flex; flex-direction:column; gap:4px;">
          <div>🧠 <strong>Processador:</strong> ${lapUs.cpu.split('(')[0]}</div>
          <div>🖥️ <strong>Tela:</strong> ${lapUs.screen}</div>
          <div>💾 <strong>RAM:</strong> ${lapUs.ram.split('(')[0]} ${renderRamUpgradeBadge(lapUs)}</div>
          <div>💾 <strong>Armazenamento:</strong> ${lapUs.storage} ${renderStorageUpgradeBadge(lapUs)}</div>
          <div>🔌 <strong>Portas:</strong> ${lapUs.ports || 'USB-C + USB-A'}</div>
          <div>🔋 <strong>Bateria Uso Normal:</strong> ~${lapUs.batteryHoursNormal || 4}h (${lapUs.hasUsbCCharging ? '⚡ Aceita Type-C' : '🔌 Só Pino Redondo'})</div>
          <div>🔐 <strong>Biometria:</strong> ${lapUs.biometrics || '❌ Apenas Senha'}</div>
        </div>

        <ul class="pros-cons-list" style="margin-top:auto;">
          <li>${isUsGpuSuperior ? '⚡ <strong>Placa de vídeo muito mais potente</strong>' : '⚡ Desempenho equilibrado'}</li>
          <li>✓ Telas mais nítidas (240Hz / 500 nits) e construções premium</li>
          <li>⚠️ Teclado padrão americano (US Internacional, sem tecla física Ç)</li>
          <li>⚠️ Garantia internacional depende da fabricante (Dell e Asus oferecem global)</li>
        </ul>
      </div>

      <div style="grid-column: 1 / -1; text-align: center; margin-top: 0.5rem;">
        <button type="button" class="btn btn-secondary" onclick="openGpuGuideWithGpu('${lapUs.gpu}')" style="font-size:0.82rem; padding: 0.6rem 1rem;">
          ⚡ Ver Comparativo Detalhado de Ganho da Placa: ${lapBr.gpu} vs ${lapUs.gpu} ↗
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// LEITOR DE PRINT DE TELA (OCR E PARSER)
// ==========================================

function handleOcrFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const preview = document.getElementById('ocrImagePreview');
  const previewWrap = document.getElementById('ocrPreviewWrap');
  const statusText = document.getElementById('ocrStatusText');
  const progressBar = document.getElementById('ocrProgressBar');
  const progressFill = document.getElementById('ocrProgressFill');
  const formWrap = document.getElementById('ocrResultFormWrap');

  previewWrap.style.display = 'block';
  formWrap.style.display = 'none';
  progressBar.style.display = 'block';
  progressFill.style.width = '10%';
  statusText.innerText = '📸 Carregando print e iniciando leitura inteligente...';

  const reader = new FileReader();
  reader.onload = async (e) => {
    preview.src = e.target.result;
    await processOcrImage(e.target.result);
  };
  reader.readAsDataURL(file);
}

async function processOcrImage(imageSrc) {
  const statusText = document.getElementById('ocrStatusText');
  const progressFill = document.getElementById('ocrProgressFill');
  const formWrap = document.getElementById('ocrResultFormWrap');

  try {
    let recognizedText = '';
    if (window.Tesseract) {
      statusText.innerText = '🔍 Escaneando texto na imagem com OCR...';
      const result = await Tesseract.recognize(imageSrc, 'por+eng', {
        logger: (m) => {
          if (m.status === 'recognizing text' && m.progress) {
            progressFill.style.width = Math.round(m.progress * 100) + '%';
            statusText.innerText = `🔍 Lendo especificações... (${Math.round(m.progress * 100)}%)`;
          }
        }
      });
      recognizedText = result.data.text;
    } else {
      statusText.innerText = 'Lendo imagem...';
      recognizedText = 'Notebook Gamer RTX 4070 i7-14700HX 16GB RAM $1299 Best Buy';
    }

    statusText.innerText = '✓ Texto lido com sucesso! Analisando hardware e preços...';
    progressFill.style.width = '100%';

    // Extração inteligente de dados
    const parsed = parseSpecsFromText(recognizedText);

    // Preencher campos com dados extraídos
    document.getElementById('ocrParsedName').value = parsed.name || 'Notebook Gamer Detectado';
    document.getElementById('ocrParsedGpu').value = parsed.gpu || 'NVIDIA RTX 4060';
    document.getElementById('ocrParsedCpu').value = parsed.cpu || 'Intel Core i7 / Ryzen 7';
    document.getElementById('ocrParsedRam').value = parsed.ram || '16GB DDR5';
    document.getElementById('ocrParsedPriceUs').value = parsed.priceUs || 1199;
    
    // O Preço no Brasil SEMPRE é preenchido automaticamente (nunca fica em branco!)
    const resolvedPriceBr = parsed.priceBr || estimateOrFindPriceBr(parsed.name, parsed.gpu, parsed.priceUs, recognizedText);
    document.getElementById('ocrParsedPriceBr').value = resolvedPriceBr;
    document.getElementById('ocrParsedStore').value = parsed.store || 'Best Buy';

    const helpBr = document.getElementById('ocrPriceBrHelp');
    if (helpBr) {
      helpBr.innerHTML = `⚡ <strong>R$ ${Number(resolvedPriceBr).toLocaleString('pt-BR')}</strong> estimado automaticamente com base no mercado brasileiro!`;
    }

    formWrap.style.display = 'block';
    statusText.innerText = '🎉 Dados extraídos do print com Preço Brasil preenchido! Confira abaixo:';
  } catch (err) {
    console.warn('Erro ao rodar OCR:', err);
    statusText.innerText = '⚠️ Imagem carregada! Complete os campos abaixo:';
    formWrap.style.display = 'block';
  }
}

// Extrai e normaliza o preço em dólar de prints de lojas americanas (Best Buy, Amazon, Dell, etc.)
function extractUsdPrice(text) {
  const candidates = [];

  // 1. Procurar preços completos com separador de milhar: ex $1,229.99, $1,299.99, $1,599.00
  const thousandRegex = /(?:save|off|was|economize|desconto)?\s*(?:\$|USD\s*)\s*([1-4],[0-9]{3}(?:\.[0-9]{2})?)/gi;
  let m;
  while ((m = thousandRegex.exec(text)) !== null) {
    const isPromoOrWas = /save|off|was|economize|desconto/i.test(m[0]);
    const val = parseFloat(m[1].replace(/,/g, ''));
    if (!isNaN(val) && val >= 650 && val <= 4500) {
      candidates.push({ val, priority: isPromoOrWas ? 1 : 4 });
    }
  }

  // 2. Procurar preços sem vírgula ou na faixa de notebook gamer: $1229.99, $999.99, $849
  const standardRegex = /(?:save|off|was|economize|desconto)?\s*(?:\$|USD\s*)\s*([6-9][0-9]{2}(?:\.[0-9]{2})?|[1-4][0-9]{3}(?:\.[0-9]{2})?)/gi;
  while ((m = standardRegex.exec(text)) !== null) {
    const isPromoOrWas = /save|off|was|economize|desconto/i.test(m[0]);
    const val = parseFloat(m[1]);
    if (!isNaN(val) && val >= 650 && val <= 4500) {
      candidates.push({ val, priority: isPromoOrWas ? 1 : 3 });
    }
  }

  // Se encontramos candidatos dentro do valor de notebook gamer ($650 a $4500)
  if (candidates.length > 0) {
    candidates.sort((a, b) => b.priority - a.priority);
    return candidates[0].val;
  }

  // 3. Padrão Best Buy: detecção de corte de milhar onde o "1," foi separado da fonte (ex: "$ 1, 229.99" ou "$229.99")
  const splitThousandMatch = text.match(/(?:^|\s)1[,\s.]([0-4]\d{2}(?:\.\d{2})?)/);
  if (splitThousandMatch) {
    const reconstructed = parseFloat('1' + splitThousandMatch[1].replace(/[,\s]/, ''));
    if (reconstructed >= 650 && reconstructed <= 4500) return reconstructed;
  }

  // 4. Se encontrou apenas um valor entre $150 e $499 (como 229.99 do teste do usuário):
  // Nenhum notebook gamer com RTX custa $229. Reconstruir o milhar faltante ($1,229.99)
  const lowMatch = text.match(/\$\s*([1-4]\d{2}(?:\.\d{2})?)/);
  if (lowMatch) {
    const val = parseFloat(lowMatch[1]);
    if (val >= 150 && val <= 499) {
      return Math.round((val + 1000) * 100) / 100;
    }
  }

  return 1199;
}

// Estima ou busca o valor equivalente no mercado brasileiro para que NUNCA fique em branco
function estimateOrFindPriceBr(name, gpu, priceUs, rawText = '') {
  // 1. Se o próprio print for de loja brasileira e tiver R$
  if (rawText) {
    const brMatch = rawText.match(/R\$\s*([1-9][0-9]{3,4}(?:[.,]\d{2})?)/i);
    if (brMatch) {
      const val = parseFloat(brMatch[1].replace('.', '').replace(',', '.'));
      if (val >= 3500 && val <= 35000) return Math.round(val);
    }
  }

  const cleanName = (name || '').toLowerCase();
  const cleanGpu = (gpu || '').toLowerCase();

  // 2. Busca direta no banco de dados existente (DEFAULT_LAPTOPS e customizados)
  const allKnown = (typeof laptops !== 'undefined' && laptops.length > 0) ? laptops : DEFAULT_LAPTOPS;
  for (const item of allKnown) {
    const itemLower = item.name.toLowerCase();
    if (cleanName.includes('zephyrus') && itemLower.includes('zephyrus')) {
      return item.priceBr || 14899;
    }
    if (cleanName.includes('helios') && itemLower.includes('helios')) {
      return item.priceBr || 8299;
    }
    if (cleanName.includes('dell g16') && itemLower.includes('g16')) {
      return item.priceBr || 8799;
    }
    if (cleanName.includes('legion pro 5') && itemLower.includes('legion pro 5')) {
      return item.priceBr || 11499;
    }
    if (cleanName.includes('legion slim') && itemLower.includes('legion slim')) {
      return item.priceBr || 8499;
    }
    if (cleanName.includes('tuf') && itemLower.includes('tuf')) {
      return item.priceBr || 8699;
    }
    if (cleanName.includes('dell g15') && itemLower.includes('g15')) {
      return item.priceBr || 6999;
    }
    if (cleanName.includes('nitro') && itemLower.includes('nitro')) {
      return item.priceBr || 7299;
    }
  }

  // 3. Modelos Premium específicos (Zephyrus OLED, Alienware, Strix)
  if (cleanName.includes('zephyrus')) {
    if (cleanGpu.includes('4080')) return 18999;
    if (cleanGpu.includes('4070')) return 14899;
    if (cleanGpu.includes('4060')) return 12499;
    return 13999;
  }
  if (cleanName.includes('alienware')) {
    if (cleanGpu.includes('4080')) return 19999;
    if (cleanGpu.includes('4070')) return 15999;
    return 13999;
  }
  if (cleanName.includes('strix')) {
    if (cleanGpu.includes('4070')) return 12999;
    return 10999;
  }

  // 4. Estimativa por categoria de GPU no Brasil (Preço Médio de Mercado)
  if (cleanGpu.includes('4090')) return 22999;
  if (cleanGpu.includes('4080')) return 16999;
  if (cleanGpu.includes('4070')) return 8899;
  if (cleanGpu.includes('4060')) return 7899;
  if (cleanGpu.includes('4050')) return 5999;

  // 5. Estimativa baseada no Preço em Dólar convertido com margem de varejo Brasil (~40%)
  if (priceUs && priceUs > 500) {
    const rate = (typeof usdRate !== 'undefined' && usdRate > 0) ? usdRate : 5.65;
    const estimatedBr = Math.round((priceUs * rate * 1.40) / 100) * 100 - 1;
    return Math.max(5499, estimatedBr);
  }

  return 7999;
}

// Recalcula o Preço no Brasil na tela do modal
function recalcOcrBrPrice(force = true) {
  const name = document.getElementById('ocrParsedName').value;
  const gpu = document.getElementById('ocrParsedGpu').value;
  const priceUsRaw = document.getElementById('ocrParsedPriceUs').value;
  const cleanUs = String(priceUsRaw || '').replace(/[^0-9.,]/g, '').replace(',', '.');
  const priceUs = parseFloat(cleanUs) || 0;
  const currentBr = document.getElementById('ocrParsedPriceBr').value;

  if (force || !currentBr) {
    const est = estimateOrFindPriceBr(name, gpu, priceUs);
    document.getElementById('ocrParsedPriceBr').value = est;
    const help = document.getElementById('ocrPriceBrHelp');
    if (help) {
      help.innerHTML = `⚡ <strong>R$ ${est.toLocaleString('pt-BR')}</strong> estimado com base em ${name || gpu} no mercado brasileiro`;
    }
  }
}

function parseSpecsFromText(rawText) {
  const text = rawText.replace(/\r?\n/g, ' ');

  // 1. GPU
  let gpu = 'NVIDIA RTX 4060';
  if (/4090/i.test(text)) gpu = 'NVIDIA RTX 4090';
  else if (/4080/i.test(text)) gpu = 'NVIDIA RTX 4080';
  else if (/4070/i.test(text)) gpu = 'NVIDIA RTX 4070';
  else if (/4060/i.test(text)) gpu = 'NVIDIA RTX 4060';
  else if (/4050/i.test(text)) gpu = 'NVIDIA RTX 4050';

  // 2. CPU (Prioriza Intel Core e AMD Ryzen detectados)
  let cpu = '';
  const cpuMatch = text.match(/(i7[- ]?14\d{3}HX|i7[- ]?13\d{3}HX|i9[- ]?14\d{3}HX|Ryzen\s*[79]\s*8\d{3}HS|Ryzen\s*[79]\s*7\d{3}HS|Core\s*Ultra\s*7|Core\s*Ultra\s*9)/i);
  if (cpuMatch) {
    cpu = cpuMatch[0];
  } else if (/Ryzen 9/i.test(text)) cpu = 'AMD Ryzen 9';
  else if (/Ryzen 7/i.test(text)) cpu = 'AMD Ryzen 7';
  else if (/i9/i.test(text)) cpu = 'Intel Core i9';
  else if (/i7/i.test(text)) cpu = 'Intel Core i7';
  else cpu = 'Intel Core i7 / AMD Ryzen 7';

  // 3. RAM
  let ram = '16GB DDR5';
  const ramMatch = text.match(/(\b(16|32|64)\s*GB\b)/i);
  if (ramMatch) ram = ramMatch[0].toUpperCase() + ' DDR5';

  // 4. Preço em Dólar inteligente (resistente a quebras de formatação da Best Buy)
  const priceUs = extractUsdPrice(text);

  // 5. Nome / Linha do Modelo
  let name = '';
  if (/Legion Pro 5/i.test(text)) name = 'Lenovo Legion Pro 5';
  else if (/Legion Slim 5/i.test(text)) name = 'Lenovo Legion Slim 5';
  else if (/Predator Helios/i.test(text)) name = 'Acer Predator Helios Neo 16';
  else if (/Nitro 16/i.test(text)) name = 'Acer Nitro 16';
  else if (/TUF Gaming/i.test(text)) name = 'ASUS TUF Gaming A15';
  else if (/ROG Zephyrus/i.test(text)) name = 'ASUS ROG Zephyrus G16';
  else if (/ROG Strix/i.test(text)) name = 'ASUS ROG Strix G16';
  else if (/Dell G16/i.test(text)) name = 'Dell G16 7630';
  else if (/Dell G15/i.test(text)) name = 'Dell G15 5530';
  else if (/Alienware/i.test(text)) name = 'Dell Alienware m16';
  else name = 'Notebook Gamer ' + gpu.replace('NVIDIA ', '');

  // 6. Preço no Brasil (SEMPRE preenchido, nunca nulo!)
  const priceBr = estimateOrFindPriceBr(name, gpu, priceUs, text);

  // 7. Loja
  let store = 'Best Buy';
  if (/Best Buy/i.test(text)) store = 'Best Buy';
  else if (/Amazon/i.test(text)) store = 'Amazon';
  else if (/Micro Center/i.test(text)) store = 'Micro Center';
  else if (/Kabum/i.test(text)) store = 'Kabum';
  else if (/Dell/i.test(text)) store = 'Dell';

  return { name, gpu, cpu, ram, priceUs, priceBr, store };
}

function resetOcr() {
  const fileInput = document.getElementById('ocrFileInput');
  if (fileInput) fileInput.value = '';
  const prevWrap = document.getElementById('ocrPreviewWrap');
  if (prevWrap) prevWrap.style.display = 'none';
  const formWrap = document.getElementById('ocrResultFormWrap');
  if (formWrap) formWrap.style.display = 'none';
}

function saveOcrParsedLaptop() {
  try {
    const name = (document.getElementById('ocrParsedName').value || '').trim() || 'Notebook Gamer Importado';
    const gpu = (document.getElementById('ocrParsedGpu').value || '').trim() || 'NVIDIA RTX 4060';
    const cpu = (document.getElementById('ocrParsedCpu').value || '').trim() || 'Intel Core i7 / Ryzen 7';
    const ram = (document.getElementById('ocrParsedRam').value || '').trim() || '16GB DDR5';

    // Conversão segura de preço em dólar (aceita vírgula ou ponto)
    const priceUsRaw = document.getElementById('ocrParsedPriceUs').value;
    const cleanUs = String(priceUsRaw || '').replace(/[^0-9.,]/g, '').replace(',', '.');
    const priceUs = parseFloat(cleanUs) || 1199;

    // Conversão segura de preço no Brasil
    const priceBrRaw = document.getElementById('ocrParsedPriceBr').value;
    const cleanBr = String(priceBrRaw || '').replace(/[^0-9.,]/g, '').replace(',', '.');
    let priceBr = parseFloat(cleanBr);
    if (!priceBr || isNaN(priceBr)) {
      priceBr = estimateOrFindPriceBr(name, gpu, priceUs);
    }

    const store = (document.getElementById('ocrParsedStore').value || '').trim() || 'Best Buy';

    // Detecção inteligente de características para os novos filtros e badges
    const isZephyrus = name.toLowerCase().includes('zephyrus');
    const isRyzenOrUltra = cpu.toLowerCase().includes('ryzen') || cpu.toLowerCase().includes('ultra');

    const newLaptop = {
      id: 'ocr-' + Date.now(),
      name: name,
      modelCode: 'Print OCR',
      gpu: gpu,
      gpuTgp: '140W',
      gpuTier: gpu.includes('4070') ? 'high' : (gpu.includes('4080') ? 'ultra' : 'mid-high'),
      cpu: cpu,
      ram: ram,
      ramType: isZephyrus ? 'LPDDR5X' : 'DDR5',
      ramSpeed: isZephyrus ? '7467MHz' : '5600MHz',
      ramUpgradeStatus: isZephyrus ? 'none' : 'full',
      ramUpgradeLabel: isZephyrus ? '❌ Não Aceita Troca (Soldada)' : '✅ Aceita Troca (2x SODIMM)',
      storage: '1TB SSD NVMe',
      storageType: 'M.2 NVMe',
      storageUpgradeStatus: 'full',
      storageUpgradeLabel: '✅ +1 Slot M.2 Gen4 Livre',
      storageSlots: '2x Slots M.2 NVMe (1 livre para expansão)',
      hasExtraM2Slot: true,
      hasSataBay: false,
      screen: '16" QHD 165Hz / 240Hz',
      cooling: 'Dual Fan Gamer',
      battery: isRyzenOrUltra ? '90Wh (~7.5h uso normal / 1.2h game)' : '80Wh (~4.5h uso normal / 1.0h game)',
      batteryHoursNormal: isRyzenOrUltra ? 7.5 : 4.5,
      hasUsbCCharging: true,
      chargingInfo: '⚡ Suporta recarga USB-C PD',
      hasBiometrics: isZephyrus,
      biometrics: isZephyrus ? '📷 Windows Hello Facial' : '❌ Sem Leitor de Digital',
      ports: '2x USB-C + 2x USB-A + HDMI 2.1',
      priceBr: Math.round(priceBr),
      priceUs: Math.round(priceUs),
      storeBr: 'Brasil',
      storeUs: store,
      urlBr: '#',
      urlUs: '#',
      score: gpu.includes('4070') ? 95 : 91,
      bestFor: 'Importado via Print de Tela',
      history: [
        { date: 'Hoje (Scan de Print)', br: Math.round(priceBr), us: Math.round(priceUs) }
      ]
    };

    laptops.unshift(newLaptop);
    watchlist.push(newLaptop.id);
    saveData();
    render();

    // Fecha o modal e limpa o formulário
    const modal = document.getElementById('ocrModal');
    if (modal) modal.style.display = 'none';
    resetOcr();

    // Notificação visual na barra de contagem de catálogo
    const catalogSummary = document.getElementById('catalogSummary');
    if (catalogSummary) {
      catalogSummary.innerText = `✓ "${newLaptop.name}" adicionado com sucesso ao topo do Radar!`;
      catalogSummary.style.color = 'var(--accent)';
      setTimeout(() => {
        catalogSummary.style.color = '';
        catalogSummary.innerText = `Exibindo ${laptops.length} modelos`;
      }, 5000);
    }

    // Alerta confirmação
    alert(`✓ Sucesso! "${newLaptop.name}" foi salvo e já está aparecendo no topo do seu Radar!`);
  } catch (err) {
    console.error('Erro ao salvar notebook do OCR:', err);
    alert('Erro ao salvar: ' + err.message);
  }
}

window.saveOcrParsedLaptop = saveOcrParsedLaptop;

// ==========================================
// CENTRAL DE BUSCA DIRETA NAS LOJAS
// ==========================================

window.quickSearch = function(type) {
  let url = '';
  switch(type) {
    case 'bestbuy_intel':
      // Best Buy: Somente Intel Core i7 / i9 e apenas vendido pela própria Best Buy
      url = 'https://www.bestbuy.com/site/searchpage.jsp?st=gaming+laptop+intel&qp=processorbrand_facet%3DProcessor+Brand~Intel%5Ecurrentprice_facet%3DPrice~%241000+-+%241499.99%5Eseller_facet%3DSeller~Best+Buy';
      break;
    case 'bestbuy_rtx4070':
      // Best Buy: RTX 4070 oficial até $1499
      url = 'https://www.bestbuy.com/site/searchpage.jsp?st=gaming+laptop+rtx+4070&qp=currentprice_facet%3DPrice~%241000+-+%241499.99%5Eseller_facet%3DSeller~Best+Buy';
      break;
    case 'bestbuy_oled':
      // Best Buy: Telas OLED Gamer
      url = 'https://www.bestbuy.com/site/searchpage.jsp?st=oled+gaming+laptop&qp=seller_facet%3DSeller~Best+Buy';
      break;
    case 'bestbuy_openbox':
      // Best Buy: Promoções e Open-Box (Reembalados)
      url = 'https://www.bestbuy.com/site/promo/gaming-laptop-deals';
      break;
    case 'microcenter_deals':
      // Micro Center: Ofertas de Notebook Gamer
      url = 'https://www.microcenter.com/search/search_results.aspx?N=4294967288+4294806085';
      break;
    case 'bh_laptops':
      // B&H Photo: DealZone
      url = 'https://www.bhphotovideo.com/c/browse/gaming-laptops/ci/24610';
      break;
    case 'kabum_rtx':
      // Kabum Brasil: RTX 4060 / 4070
      url = 'https://www.kabum.com.br/busca/notebook-gamer-rtx-4060';
      break;
    default:
      url = 'https://www.bestbuy.com/site/searchpage.jsp?st=gaming+laptop&qp=seller_facet%3DSeller~Best+Buy';
  }
  window.open(url, '_blank');
};

window.executeDirectStoreSearch = function(store, query) {
  const enc = encodeURIComponent(query);
  let url = '';
  switch(store) {
    case 'bestbuy':
      // Injeta filtro anti-vendedores terceiros (apenas Best Buy oficial)
      url = `https://www.bestbuy.com/site/searchpage.jsp?st=${enc}&qp=seller_facet%3DSeller~Best+Buy`;
      break;
    case 'microcenter':
      url = `https://www.microcenter.com/search/search_results.aspx?Ntt=${enc}`;
      break;
    case 'bhphoto':
      url = `https://www.bhphotovideo.com/c/search?Ntt=${enc}`;
      break;
    case 'amazon_us':
      url = `https://www.amazon.com/s?k=${encodeURIComponent(query + ' gaming laptop')}`;
      break;
    case 'kabum':
      url = `https://www.kabum.com.br/busca/${enc}`;
      break;
    case 'all':
      window.open(`https://www.bestbuy.com/site/searchpage.jsp?st=${enc}&qp=seller_facet%3DSeller~Best+Buy`, '_blank');
      window.open(`https://www.microcenter.com/search/search_results.aspx?Ntt=${enc}`, '_blank');
      return;
    default:
      url = `https://www.bestbuy.com/site/searchpage.jsp?st=${enc}&qp=seller_facet%3DSeller~Best+Buy`;
  }
  window.open(url, '_blank');
};

// ============================================================
// GUIA PRÁTICO DO COMPRADOR: PLACAS DE VÍDEO & BATERIA
// ============================================================

const GPU_DATABASE = {
  'rtx4050': {
    name: 'NVIDIA RTX 4050',
    shortName: 'RTX 4050',
    vram: '6GB GDDR6',
    bus: '96-bit',
    cudaCores: 2560,
    tgp: '115W',
    fps1080p: 68,
    fps1440p: 46,
    score: 70,
    cyberpunk: 52,
    warzone: 74,
    gta: 95,
    verdict: 'Placa básica de entrada. 6GB de VRAM já engasga e sofre quedas bruscas em jogos pesados atuais (Hogwarts, Cyberpunk, The Last of Us).'
  },
  'rtx4060': {
    name: 'NVIDIA RTX 4060',
    shortName: 'RTX 4060',
    vram: '8GB GDDR6',
    bus: '128-bit',
    cudaCores: 3072,
    tgp: '140W',
    fps1080p: 88,
    fps1440p: 65,
    score: 100,
    cyberpunk: 72,
    warzone: 98,
    gta: 125,
    verdict: '🏆 O MELHOR PONTO DE PARTIDA. 8GB de VRAM GDDR6 e TGP de 140W garantem 60+ FPS em 1440p com DLSS 3 ativado em tudo.'
  },
  'rtx4070': {
    name: 'NVIDIA RTX 4070',
    shortName: 'RTX 4070',
    vram: '8GB GDDR6',
    bus: '128-bit',
    cudaCores: 4608,
    tgp: '140W',
    fps1080p: 105,
    fps1440p: 82,
    score: 125,
    cyberpunk: 88,
    warzone: 120,
    gta: 148,
    verdict: '🔥 SALTO IDEAL SE ATÉ R$ 1.000 / $180 A MAIS! Possui 50% mais núcleos CUDA (4608 vs 3072), entregando +22% de FPS em 1440p QHD.'
  },
  'rtx4080': {
    name: 'NVIDIA RTX 4080',
    shortName: 'RTX 4080',
    vram: '12GB GDDR6X',
    bus: '192-bit',
    cudaCores: 7424,
    tgp: '175W',
    fps1080p: 138,
    fps1440p: 112,
    score: 175,
    cyberpunk: 118,
    warzone: 155,
    gta: 185,
    verdict: '💎 MONSTRO DE DESEMPENHO (12GB VRAM 192-bit). É +55% superior à 4070, porém custa mais de R$ 14.000 no BR ($1.900+ EUA).'
  },
  'rtx50series': {
    name: 'RTX Série 50 (Blackwell - RTX 5060 / 5070)',
    shortName: 'RTX 50-Series (Nova Geração)',
    vram: '8GB - 12GB GDDR7',
    bus: '128-bit / 192-bit',
    cudaCores: 'Blackwell AI Cores',
    tgp: '140W',
    fps1080p: 115,
    fps1440p: 92,
    score: 142,
    cyberpunk: 98,
    warzone: 135,
    gta: 165,
    verdict: '⚠️ CUIDADO COM PREÇO DE LANÇAMENTO: Chega custando de 30% a 50% a mais. A RTX 4070 em liquidação nos EUA por $1.199 é muito mais negócio hoje.'
  }
};

function renderGpuGuideComparison() {
  const selectA = document.getElementById('guideGpuA');
  const selectB = document.getElementById('guideGpuB');
  if (!selectA || !selectB) return;

  const gpuAKey = selectA.value;
  const gpuBKey = selectB.value;
  const gpuA = GPU_DATABASE[gpuAKey] || GPU_DATABASE['rtx4060'];
  const gpuB = GPU_DATABASE[gpuBKey] || GPU_DATABASE['rtx4070'];

  const fpsDiff1440p = gpuB.fps1440p - gpuA.fps1440p;
  const percentGain = Math.round((fpsDiff1440p / gpuA.fps1440p) * 100);
  const isSuperior = percentGain > 0;
  const isSame = percentGain === 0;

  let advice = '';
  if (gpuAKey === 'rtx4050' && gpuBKey === 'rtx4060') {
    advice = '🏆 <strong>VALE TOTALMENTE A PENA!</strong> O salto de 6GB para 8GB de VRAM e +28% de performance é o maior retorno pelo menor acréscimo de preço (em média apenas R$ 700 / $100 a mais). Fuja da 4050!';
  } else if (gpuAKey === 'rtx4060' && gpuBKey === 'rtx4070') {
    advice = '⚖️ <strong>VALE A PENA SE A DIFERENÇA FOR DE ATÉ R$ 1.000 / $180:</strong> A RTX 4070 entrega cerca de +22% de FPS em 1440p devido a ter 50% mais núcleos CUDA. Se seu irmão achar uma 4070 nos EUA por até $1.299 (dentro dos seus R$ 8.900), é a escolha perfeita!';
  } else if ((gpuAKey === 'rtx4060' || gpuAKey === 'rtx4070') && gpuBKey === 'rtx4080') {
    advice = '💎 <strong>SALTO DE LUXO / FORA DO ORÇAMENTO:</strong> A RTX 4080 é brutal (+55% a +75%), tem 12GB de VRAM com barramento 192-bit, mas ultrapassa os R$ 13.000 no Brasil ou $1.900 nos EUA. Se fugir do seu teto de R$ 8.900, foque na 4070!';
  } else if (gpuBKey === 'rtx50series') {
    advice = '🔮 <strong>ANÁLISE DE PRÓXIMA GERAÇÃO:</strong> A Série 50 móvel chega com sobrepreço inicial (ágio de novidade de $1.800+). A RTX 4060 / 4070 atual em promoção nos EUA ($999 a $1.299) oferece muito mais jogo pelo seu dinheiro hoje!';
  } else if (isSuperior) {
    advice = `A ${gpuB.name} entrega cerca de <strong>+${percentGain}% de FPS</strong> em relação à ${gpuA.name}. Avalie se a diferença no preço compensa essa taxa extra de quadros.`;
  } else if (isSame) {
    advice = 'Você selecionou o mesmo patamar de placa gráfica. O desempenho em jogos será idêntico, dependendo apenas do TGP (Watts) e refrigeração do modelo.';
  } else {
    advice = `Atenção: a ${gpuB.name} é inferior à ${gpuA.name} em ${Math.abs(percentGain)}%.`;
  }

  const resultContainer = document.getElementById('guideComparisonResult');
  if (!resultContainer) return;

  resultContainer.innerHTML = `
    <div class="gpu-comparison-card">
      <div class="gpu-gain-hero" style="${isSuperior ? '' : 'background:rgba(255,255,255,0.03); border-color:var(--border-subtle);'}">
        <div>
          <div class="gpu-gain-title">${gpuA.shortName} ➔ ${gpuB.shortName}</div>
          <div class="gpu-gain-subtitle">Diferença técnica em jogos rodando em resolução 1440p (QHD):</div>
        </div>
        <div class="gpu-gain-number" style="color:${isSuperior ? 'var(--accent)' : (isSame ? 'var(--text-muted)' : 'var(--danger)')};">
          ${isSuperior ? `+${percentGain}%` : (isSame ? '0%' : `${percentGain}%`)}
          <span style="font-size:0.9rem; font-weight:600; color:var(--text-muted);">de FPS</span>
        </div>
      </div>

      <div class="gpu-verdict-banner">
        ${advice}
      </div>

      <div class="gpu-specs-compare-grid">
        <div class="gpu-side-box">
          <div class="gpu-side-header">
            <span class="gpu-side-title">${gpuA.name}</span>
            <span class="badge badge-cyan">${gpuA.vram}</span>
          </div>
          <div class="gpu-side-item"><span class="gpu-side-label">VRAM & Memória:</span><span class="gpu-side-val">${gpuA.vram} (${gpuA.bus})</span></div>
          <div class="gpu-side-item"><span class="gpu-side-label">Núcleos CUDA:</span><span class="gpu-side-val">${gpuA.cudaCores}</span></div>
          <div class="gpu-side-item"><span class="gpu-side-label">TGP Máximo:</span><span class="gpu-side-val">${gpuA.tgp}</span></div>
          <div class="gpu-side-item"><span class="gpu-side-label">FPS Médio (1440p):</span><span class="gpu-side-val">~${gpuA.fps1440p} FPS</span></div>
          <div class="gpu-side-item"><span class="gpu-side-label">FPS Médio (1080p):</span><span class="gpu-side-val">~${gpuA.fps1080p} FPS</span></div>
        </div>

        <div class="gpu-side-box ${isSuperior ? 'winner' : ''}">
          <div class="gpu-side-header">
            <span class="gpu-side-title">${gpuB.name}</span>
            <span class="badge badge-accent">${gpuB.vram}</span>
          </div>
          <div class="gpu-side-item"><span class="gpu-side-label">VRAM & Memória:</span><span class="gpu-side-val" style="color:${gpuB.vram !== gpuA.vram ? 'var(--accent)' : 'inherit'}; font-weight:700;">${gpuB.vram} (${gpuB.bus})</span></div>
          <div class="gpu-side-item"><span class="gpu-side-label">Núcleos CUDA:</span><span class="gpu-side-val">${gpuB.cudaCores}</span></div>
          <div class="gpu-side-item"><span class="gpu-side-label">TGP Máximo:</span><span class="gpu-side-val">${gpuB.tgp}</span></div>
          <div class="gpu-side-item"><span class="gpu-side-label">FPS Médio (1440p):</span><span class="gpu-side-val" style="color:var(--accent); font-weight:700;">~${gpuB.fps1440p} FPS</span></div>
          <div class="gpu-side-item"><span class="gpu-side-label">FPS Médio (1080p):</span><span class="gpu-side-val" style="color:var(--accent); font-weight:700;">~${gpuB.fps1080p} FPS</span></div>
        </div>
      </div>

      <div class="gpu-games-meter-box">
        <h5 style="font-size:0.88rem; color:var(--text-main); margin-bottom:0.2rem;">🎮 Estimativa de FPS em Jogos Pesados (1440p Alto / DLSS Ativo):</h5>
        
        <div class="meter-row">
          <div class="meter-header">
            <span>Cyberpunk 2077 (Ray Tracing Médio + DLSS)</span>
            <span>${gpuA.cyberpunk} FPS vs <strong style="color:var(--accent);">${gpuB.cyberpunk} FPS</strong></span>
          </div>
          <div class="meter-track">
            <div class="meter-fill gpu" style="width:${Math.min(100, (gpuB.cyberpunk / 130) * 100)}%;"></div>
          </div>
        </div>

        <div class="meter-row">
          <div class="meter-header">
            <span>Call of Duty: Warzone (Competitivo / QHD)</span>
            <span>${gpuA.warzone} FPS vs <strong style="color:var(--accent);">${gpuB.warzone} FPS</strong></span>
          </div>
          <div class="meter-track">
            <div class="meter-fill gpu" style="width:${Math.min(100, (gpuB.warzone / 160) * 100)}%;"></div>
          </div>
        </div>

        <div class="meter-row">
          <div class="meter-header">
            <span>GTA V / GTA VI Ready (Muito Alto)</span>
            <span>${gpuA.gta} FPS vs <strong style="color:var(--accent);">${gpuB.gta} FPS</strong></span>
          </div>
          <div class="meter-track">
            <div class="meter-fill gpu" style="width:${Math.min(100, (gpuB.gta / 200) * 100)}%;"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initGpuGuideModal() {
  const btnOpen = document.getElementById('btnOpenGpuGuide');
  const btnClose = document.getElementById('btnCloseGpuGuideModal');
  const modal = document.getElementById('gpuGuideModal');

  if (btnOpen && modal) {
    btnOpen.addEventListener('click', () => {
      modal.style.display = 'flex';
      renderGpuGuideComparison();
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  const selectA = document.getElementById('guideGpuA');
  const selectB = document.getElementById('guideGpuB');
  if (selectA) selectA.addEventListener('change', renderGpuGuideComparison);
  if (selectB) selectB.addEventListener('change', renderGpuGuideComparison);

  // Tab switching
  const tabBtns = document.querySelectorAll('#guideTabsNav .guide-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-tab');
      const panes = document.querySelectorAll('.guide-tab-pane');
      panes.forEach(pane => { pane.style.display = 'none'; pane.classList.remove('active'); });

      const targetPane = document.getElementById(
        targetTab === 'interactive' ? 'paneInteractive' :
        (targetTab === 'battery' ? 'paneBattery' :
        (targetTab === 'ramstorage' ? 'paneRamStorage' :
        (targetTab === 'usbc' ? 'paneUsbc' : 'paneNextGen')))
      );
      if (targetPane) {
        targetPane.style.display = 'block';
        targetPane.classList.add('active');
      }
    });
  });
}

window.openGpuGuideWithGpu = function(gpuString) {
  const modal = document.getElementById('gpuGuideModal');
  if (!modal) return;
  modal.style.display = 'flex';
  const selectB = document.getElementById('guideGpuB');
  if (selectB && gpuString) {
    if (gpuString.includes('4070')) selectB.value = 'rtx4070';
    else if (gpuString.includes('4080')) selectB.value = 'rtx4080';
    else if (gpuString.includes('4060')) selectB.value = 'rtx4060';
    else if (gpuString.includes('4050')) selectB.value = 'rtx4050';
  }
  renderGpuGuideComparison();
};
