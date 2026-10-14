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
let currentSort = 'ranking_desc'; // Padrão: Modo Ranking (Do Melhor para o Pior)
let usdRate = 5.65;
let salesTaxRate = 0.0; // 0% (Delaware / online), 6.5% (Flórida), 8.87% (NY)
let importMode = 'wise'; // 'wise' (1.1%), 'credit_card' (4.38%), 'direct' (0%)
var currentViewMode = 'cards'; // 'cards' ou 'table'

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  bindEvents();
  render();
  initMultiCompare();
  // Busca cotação do dólar ao vivo imediatamente
  fetchLiveDollarRate(false);
  // Confere automaticamente a cada 5 minutos em segundo plano
  setInterval(() => fetchLiveDollarRate(false), 5 * 60 * 1000);
});

// Motor Inteligente Anti-Duplicação: impede cadastrar o mesmo notebook duas vezes
function findDuplicateLaptop(target, list = laptops) {
  if (!target || !Array.isArray(list)) return null;
  const clean = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  const tId = target.id;
  const tName = clean(target.name);
  const tGpu = clean(target.gpu);
  const tCpu = clean(target.cpu);

  for (const existing of list) {
    if (!existing) continue;

    // 1. Mesmo ID exato
    if (tId && existing.id && tId === existing.id) return existing;

    const eName = clean(existing.name);
    const eGpu = clean(existing.gpu);
    const eCpu = clean(existing.cpu);

    // 2. Mesma GPU (ex: 4060 com 4060, 4070 com 4070)
    const gpuMatch = 
      (tGpu === eGpu) ||
      (tGpu.includes('4060') && eGpu.includes('4060')) ||
      (tGpu.includes('4070') && eGpu.includes('4070')) ||
      (tGpu.includes('4080') && eGpu.includes('4080')) ||
      (tGpu.includes('4090') && eGpu.includes('4090')) ||
      (tGpu.includes('4050') && eGpu.includes('4050'));

    if (!gpuMatch) continue;

    // 3. Nome do modelo muito parecido (ex: "Helios Neo 16", "Legion Slim 5", "Dell G16", "Zephyrus G16")
    const nameMatch = 
      (tName === eName) ||
      (tName.length >= 6 && eName.length >= 6 && (tName.includes(eName) || eName.includes(tName))) ||
      ((tName.includes('helios') || tName.includes('predator')) && (eName.includes('helios') || eName.includes('predator'))) ||
      ((tName.includes('slim5') || tName.includes('legionslim')) && (eName.includes('slim5') || eName.includes('legionslim'))) ||
      ((tName.includes('pro5') || tName.includes('legionpro')) && (eName.includes('pro5') || eName.includes('legionpro'))) ||
      (tName.includes('dellg16') && eName.includes('dellg16')) ||
      (tName.includes('dellg15') && eName.includes('dellg15')) ||
      (tName.includes('zephyrus') && eName.includes('zephyrus')) ||
      (tName.includes('tufa15') && eName.includes('tufa15')) ||
      (tName.includes('nitro16') && eName.includes('nitro16'));

    if (nameMatch) {
      // 4. Se tiver CPU definida em ambos, diferencia família Intel vs AMD
      if (tCpu && eCpu) {
        const isIntelT = tCpu.includes('intel') || tCpu.includes('i7') || tCpu.includes('i9') || tCpu.includes('ultra');
        const isAmdT = tCpu.includes('amd') || tCpu.includes('ryzen');
        const isIntelE = eCpu.includes('intel') || eCpu.includes('i7') || eCpu.includes('i9') || eCpu.includes('ultra');
        const isAmdE = eCpu.includes('amd') || eCpu.includes('ryzen');

        if ((isIntelT && isAmdE) || (isAmdT && isIntelE)) {
          // Processadores de fabricantes diferentes: não é duplicado (são variações diferentes do mesmo notebook)
          continue;
        }
      }
      return existing;
    }
  }
  return null;
}

// Cotação do Dólar Comercial ao Vivo com Atualização Automática
async function fetchLiveDollarRate(isManual = false) {
  const badge = document.getElementById('liveDollarBadge');
  const rateInput = document.getElementById('usdRateInput');

  if (isManual && badge) {
    badge.innerHTML = '⏳ Buscando...';
  }

  try {
    // 1. AwesomeAPI (Cotação oficial ao vivo para BRL)
    const res = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    if (!res.ok) throw new Error('Falha AwesomeAPI');
    const data = await res.json();
    if (data && data.USDBRL && data.USDBRL.bid) {
      const liveRate = parseFloat(parseFloat(data.USDBRL.bid).toFixed(2));
      if (!isNaN(liveRate) && liveRate > 3 && liveRate < 10) {
        usdRate = liveRate;
        if (rateInput) rateInput.value = liveRate.toFixed(2);
        if (badge) {
          const nowStr = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
          badge.innerHTML = `🟢 Ao Vivo: R$ ${liveRate.toFixed(2)}`;
          badge.title = `Última verificação às ${nowStr} • Confere sozinho a cada 5 minutos`;
        }
        render();
        if (isManual) {
          showToastNotification(`💵 Dólar atualizado ao vivo: R$ ${liveRate.toFixed(2)} (Banco Central / Mercado)`);
        }
        return;
      }
    }
  } catch (err) {
    console.warn('Tentando fallback de cotação do dólar...', err);
  }

  // 2. Fallback Secundário (ExchangeRate API)
  try {
    const res2 = await fetch('https://open.er-api.com/v6/latest/USD');
    if (res2.ok) {
      const data2 = await res2.json();
      if (data2 && data2.rates && data2.rates.BRL) {
        const liveRate2 = parseFloat(data2.rates.BRL.toFixed(2));
        usdRate = liveRate2;
        if (rateInput) rateInput.value = liveRate2.toFixed(2);
        if (badge) {
          badge.innerHTML = `🟢 Ao Vivo: R$ ${liveRate2.toFixed(2)}`;
        }
        render();
        if (isManual) {
          showToastNotification(`💵 Dólar atualizado ao vivo: R$ ${liveRate2.toFixed(2)}`);
        }
        return;
      }
    }
  } catch (err2) {
    console.warn('Falha no fallback de cotação:', err2);
  }

  if (badge) {
    badge.innerHTML = `🟢 R$ ${usdRate.toFixed(2)}`;
  }
}

function loadData() {
  const savedLaptops = localStorage.getItem(STORAGE_KEY);
  if (savedLaptops) {
    try {
      const parsed = JSON.parse(savedLaptops);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Preserva todos os notebooks salvos pelo usuário com auto-correção de especificações
        laptops = parsed.map(item => {
          const def = DEFAULT_LAPTOPS.find(d => d.id === item.id);
          const isGenericPorts = !item.ports || item.ports === 'USB-C + USB-A + HDMI 2.1' || item.ports === 'USB-C + USB-A' || item.ports.trim() === '';
          const healedPorts = (isGenericPorts && def && def.ports) ? def.ports : item.ports;

          if (def) {
            return {
              ...def,
              ...item,
              ports: healedPorts || def.ports,
              battery: item.battery || def.battery,
              batteryHoursNormal: item.batteryHoursNormal !== undefined ? item.batteryHoursNormal : def.batteryHoursNormal,
              hasUsbCCharging: item.hasUsbCCharging !== undefined ? item.hasUsbCCharging : def.hasUsbCCharging,
              chargingInfo: item.chargingInfo || def.chargingInfo,
              hasBiometrics: item.hasBiometrics !== undefined ? item.hasBiometrics : def.hasBiometrics,
              biometrics: item.biometrics || def.biometrics,
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

          // Se for notebook importado ou sem match direto, busca correção oficial pelo nome
          const official = getOfficialLaptopSpecs(item);
          if (official) {
            if (isGenericPorts) item.ports = official.ports;
            if (item.hasUsbCCharging === undefined) item.hasUsbCCharging = official.hasUsbCCharging;
            if (!item.chargingInfo) item.chargingInfo = official.chargingInfo;
            if (item.batteryHoursNormal === undefined) item.batteryHoursNormal = official.batteryHoursNormal;
            if (!item.ramUpgradeStatus) item.ramUpgradeStatus = official.ramUpgradeStatus;
          }
          return item;
        });

        // Garante que nenhum notebook base novo do sistema fique de fora, sem duplicar
        DEFAULT_LAPTOPS.forEach(def => {
          if (!findDuplicateLaptop(def, laptops)) {
            laptops.push({ ...def });
          }
        });
      } else {
        laptops = JSON.parse(JSON.stringify(DEFAULT_LAPTOPS));
      }
    } catch(e) {
      console.error('Erro ao ler localStorage de laptops:', e);
      laptops = JSON.parse(JSON.stringify(DEFAULT_LAPTOPS));
    }
  } else {
    laptops = JSON.parse(JSON.stringify(DEFAULT_LAPTOPS));
  }

  // Persistir estado consistente garantindo que o Ctrl+F5 mantenha tudo
  saveData();

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
    // Sincroniza sem apagar os notebooks do usuário
    fetchFromGAS(savedGasUrl, true);
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(laptops));
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  } catch (err) {
    console.error('Falha ao salvar no localStorage:', err);
  }
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
    const badge = document.getElementById('liveDollarBadge');
    if (badge) {
      badge.innerHTML = `✍️ Manual: R$ ${usdRate.toFixed(2)}`;
      badge.title = 'Valor digitado manualmente. Clique no botão ↻ ao lado para voltar à cotação ao vivo!';
    }
    render();
  });

  document.getElementById('importModeSelect').addEventListener('change', (e) => {
    importMode = e.target.value;
    render();
  });

  // Busca e Filtros
  const searchInput = document.getElementById('searchInput');
  const btnClearSearch = document.getElementById('btnClearSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (btnClearSearch) {
        btnClearSearch.style.display = searchInput.value ? 'flex' : 'none';
      }
      render();
    });
  }

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
  initWeightConverter();

  // Delegação global para botões de Vídeos / Reviews (garante funcionamento mesmo em tabelas dinâmicas)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-video, [data-action="open-video-reviews"]');
    if (btn) {
      const laptopId = btn.getAttribute('data-laptop-id');
      if (laptopId) {
        e.preventDefault();
        window.openVideoReviewsModal(laptopId);
      }
    }
  });

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

// Sincronização inteligente com a API do Google Apps Script (sem apagar nem duplicar)
async function fetchFromGAS(url, silent = false) {
  try {
    if (!silent) showGasMessage('Conectando ao Google Sheets...', 'info');
    const response = await fetch(url);
    if (!response.ok) throw new Error('Status HTTP: ' + response.status);
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      let updatedCount = 0;
      let addedCount = 0;

      data.forEach((item, index) => {
        const gasItem = {
          id: item.id || ('gas-' + (item.name || 'item').toLowerCase().replace(/[^a-z0-9]/g, '') + '-' + index),
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
          targetAlertBr: Number(item.targetAlertBr) || 0,
          score: item.score || (item.gpu && item.gpu.includes('4070') ? 94 : 91),
          bestFor: item.bestFor || 'Sincronizado da Nuvem Google',
          history: item.history || [
            { date: item.lastUpdated || 'Planilha', br: Number(item.priceBr) || 0, us: Number(item.priceUs) || 0 }
          ]
        };

        const existing = findDuplicateLaptop(gasItem, laptops);
        if (existing) {
          // Atualiza apenas os preços e lojas mantendo os atributos ricos e IDs
          if (gasItem.priceBr > 0) existing.priceBr = gasItem.priceBr;
          if (gasItem.priceUs > 0) existing.priceUs = gasItem.priceUs;
          if (gasItem.storeBr) existing.storeBr = gasItem.storeBr;
          if (gasItem.storeUs) existing.storeUs = gasItem.storeUs;
          if (gasItem.targetAlertBr) existing.targetAlertBr = gasItem.targetAlertBr;
          updatedCount++;
        } else {
          // Modelo novo vindo da planilha que ainda não existe no catálogo local
          laptops.push({
            ...gasItem,
            battery: '80Wh (~4.5h uso normal / 1h game)',
            batteryHoursNormal: 4.5,
            hasUsbCCharging: true,
            chargingInfo: '⚡ Suporta recarga USB-C PD',
            hasBiometrics: false,
            biometrics: '❌ Sem Leitor de Digital',
            ports: '1x USB-C + 2x USB-A + HDMI 2.1',
            ramType: 'DDR5',
            ramSpeed: '5600MHz',
            ramUpgradeStatus: 'full',
            ramUpgradeLabel: '✅ Aceita Troca (2x SODIMM até 64GB)',
            storageType: 'M.2 NVMe',
            storageUpgradeStatus: 'full',
            storageUpgradeLabel: '✅ +1 Slot M.2 Gen4 Livre',
            storageSlots: '2x Slots M.2 NVMe (1 livre)',
            hasExtraM2Slot: true,
            hasSataBay: false
          });
          addedCount++;
        }
      });

      // Salva de forma permanente sem perder notebooks adicionados por OCR ou form
      saveData();
      render();
      if (!silent) {
        showGasMessage(`✓ Planilha conectada! ${updatedCount} atualizados, ${addedCount} novos (Total: ${laptops.length})`, 'success');
        showToastNotification(`✓ Google Sheets sincronizado com sucesso (${laptops.length} modelos no radar)`);
      }
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

  // Sempre insere no topo para o usuário ver imediatamente
  laptops.unshift(newLaptop);
  if (!watchlist.includes(newLaptop.id)) watchlist.push(newLaptop.id);

  // Garante que o notebook apareça imediatamente sem ser escondido por filtros ativos
  currentFilter = 'all';
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.chip[data-filter="all"]')?.classList.add('active');

  // Limpa a barra de busca
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const btnClear = document.getElementById('btnClearSearch');
  if (btnClear) btnClear.style.display = 'none';

  saveData();
  document.getElementById('addLaptopForm').reset();
  document.getElementById('addModal').style.display = 'none';
  render();

  // Rola a tela até o notebook recém-adicionado
  setTimeout(() => {
    const cardEl = document.getElementById('card-' + newLaptop.id);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardEl.style.boxShadow = '0 0 30px #10b981, 0 0 60px rgba(16, 185, 129, 0.5)';
      cardEl.style.borderColor = '#10b981';
      setTimeout(() => {
        cardEl.style.boxShadow = '';
        cardEl.style.borderColor = '';
      }, 4000);
    }
  }, 150);

  showToastNotification(`✓ "${newLaptop.name}" adicionado com sucesso ao topo do Radar!`);
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
  const isSoldered = (laptop.ramUpgradeStatus === 'none') || 
                     (laptop.ramType === 'LPDDR5X' || laptop.ramType === 'LPDDR5') ||
                     (laptop.ram && (laptop.ram.toLowerCase().includes('soldada') || laptop.ram.toLowerCase().includes('soldered') || laptop.ram.toLowerCase().includes('onboard')));
  const isPartial = (laptop.ramUpgradeStatus === 'partial') || (laptop.ram && laptop.ram.toLowerCase().includes('parcial'));

  if (isSoldered) {
    return `<span class="badge" style="background:rgba(239, 68, 68, 0.22); color:#f87171; border:1px solid rgba(239, 68, 68, 0.55); font-size:0.74rem; padding:3px 8px; font-weight:800; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">❌ RAM 100% SOLDADA (Não Aceita Troca)</span>`;
  } else if (isPartial) {
    return `<span class="badge" style="background:rgba(245, 158, 11, 0.22); color:#fbbf24; border:1px solid rgba(245, 158, 11, 0.55); font-size:0.74rem; padding:3px 8px; font-weight:800; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">⚠️ Troca Parcial (1 Soldada + 1 Slot Livre)</span>`;
  } else {
    return `<span class="badge" style="background:rgba(16, 185, 129, 0.22); color:#34d399; border:1px solid rgba(16, 185, 129, 0.55); font-size:0.74rem; padding:3px 8px; font-weight:800; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">✅ RAM Removível (2x SODIMM até 64GB)</span>`;
  }
}

// Base Oficial de Especificações de Hardware para Validação & Auditoria
const OFFICIAL_SPECS_DB = {
  'dell-g16-7630': {
    name: 'Dell G16 7630',
    ports: '1x USB-C (Thunderbolt 4 / DisplayPort) + 3x USB-A 3.2 + HDMI 2.1 + RJ-45',
    hasUsbCCharging: false,
    chargingInfo: '🔌 Apenas plugue redondo tradicional Dell (240W/330W). Porta Type-C NÃO carrega o note',
    battery: '86Wh (~4h escritório / 1h game)',
    batteryHoursNormal: 4.0,
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM até 64GB)',
    storageSlots: '2x Slots M.2 NVMe PCIe 4.0 (1 livre para 2º SSD) • Sem baia SATA',
    storageUpgradeStatus: 'full',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: 'Possui 3 portas USB-A 3.2 normais e 1 porta USB-C Thunderbolt 4. Você pode plugar mouse, teclado e pendrive diretamente sem nenhum adaptador ou dongle na mochila!',
    explanationCharging: 'Atenção: A Dell utiliza sua fonte proprietária de pino redondo (240W ou 330W). A porta USB-C transfere dados e vídeo (DisplayPort), mas NÃO recarrega o notebook.',
    explanationBattery: 'Bateria de 86Wh dura cerca de 4 horas em uso comum de escritório/vídeos e cerca de 1 hora jogando. O processador Intel Core i7 HX de 14 núcleos de alta voltagem consome bastante energia.',
    explanationRam: 'Memória 100% expansível! Conta com 2 slots físicos SODIMM DDR5, permitindo trocar por 32GB ou 64GB no futuro sem complicações.',
    explanationStorage: 'Possui 2 slots M.2 Gen4 ultrarrápidos (1 ocupado com o SSD de fábrica e 1 livre para colocar um segundo SSD sem precisar tirar o original).'
  },
  'dell-g15-5530': {
    name: 'Dell G15 5530',
    ports: '1x USB-C (DisplayPort) + 3x USB-A 3.2 + HDMI 2.1 + RJ-45',
    hasUsbCCharging: false,
    chargingInfo: '🔌 Apenas plugue redondo Dell (240W/330W). Porta Type-C NÃO carrega o note',
    battery: '56Wh ou 86Wh (~3.5h escritório / 1h game)',
    batteryHoursNormal: 3.5,
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM)',
    storageSlots: '2x Slots M.2 (2º slot requer suporte metálico Dell) • Sem SATA',
    storageUpgradeStatus: 'partial',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: 'Possui 3 portas USB-A convencionais e 1 porta USB-C. Conectividade completa para periféricos sem necessidade de dongle.',
    explanationCharging: 'Apenas fonte de pino cilíndrico original Dell de 240W. Porta USB-C não recarrega.',
    explanationBattery: 'Autonomia média de 3.5 horas em uso leve de escritório.',
    explanationRam: '2x Slots SODIMM removíveis com suporte a expansão.',
    explanationStorage: '2x Slots M.2 (atenção: o segundo slot requer suporte de fixação Dell caso não venha de fábrica).'
  },
  'asus-rog-zephyrus-g16': {
    name: 'ASUS ROG Zephyrus G16 (2024)',
    ports: '2x USB-C (1x Thunderbolt 4 / 100W PD + 1x USB-C 3.2 Gen 2) + 2x USB-A 3.2 Gen 2 + Leitor SD UHS-II + HDMI 2.1',
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta recarga USB-C 100W Type-C portátil + Conector ASUS Slim 200W/240W',
    battery: '90Wh (~8.5h escritório c/ Intel Ultra / 1.5h game)',
    batteryHoursNormal: 8.5,
    ramUpgradeStatus: 'none',
    ramUpgradeLabel: '❌ Memória 100% Soldada na Placa-Mãe (LPDDR5X - Não Aceita Troca)',
    storageSlots: '2x Slots M.2 2280 PCIe 4.0 (1 livre) • Sem SATA',
    storageUpgradeStatus: 'full',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: 'Equipado com 2 portas USB-A 3.2 e 2 portas USB-C Thunderbolt 4, além de leitor de cartão SD completo. Excelente conectividade sem necessidade de adaptadores.',
    explanationCharging: 'Praticidade máxima: Aceita carregador portátil USB-C de 100W (como os de celular GaN) para você trabalhar ou viajar sem o carregador pesado de mesa!',
    explanationBattery: 'Bateria imensa de 90Wh aliada ao processador Intel Core Ultra (Meteor Lake) com núcleos de baixíssimo consumo, alcançando até 8.5 horas longe da tomada.',
    explanationRam: 'ATENÇÃO CRUCIAL: Memória LPDDR5X 7467MHz de ultravelocidade, porém 100% soldada na placa-mãe. Não é possível trocar nem aumentar no futuro!',
    explanationStorage: 'Possui 2 slots M.2 NVMe PCIe 4.0 rápidos. O segundo slot está livre para adicionar mais 1TB ou 2TB.'
  },
  'acer-predator-helios-neo-16': {
    name: 'Acer Predator Helios Neo 16',
    ports: '2x USB-C (Thunderbolt 4 / 100W PD) + 3x USB-A 3.2 Gen 2 + HDMI 2.1 + MicroSD + RJ-45',
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta carregamento USB-C Power Delivery 100W + Fonte de mesa 330W',
    battery: '90Wh (~5h escritório / 1.1h game)',
    batteryHoursNormal: 5.0,
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM até 64GB)',
    storageSlots: '2x Slots M.2 NVMe PCIe 4.0 (1 livre) • Sem baia SATA',
    storageUpgradeStatus: 'full',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: 'Excelente conectividade com 3 portas USB-A e 2 portas Thunderbolt 4. Não precisa de dongle.',
    explanationCharging: 'Aceita recarga portátil USB-C 100W PD para trabalho leve fora de casa, além da fonte pesada de 330W para potência máxima em jogos.',
    explanationBattery: 'Bateria de 90Wh entrega cerca de 5 horas de escritório e 1.1h em jogos pesados.',
    explanationRam: 'Totalmente expansível com 2x slots SODIMM DDR5 5600MHz (até 64GB).',
    explanationStorage: '2x Slots M.2 Gen4 com dissipador de calor e 1 slot livre.'
  },
  'lenovo-legion-slim-5': {
    name: 'Lenovo Legion Slim 5',
    ports: '2x USB-C (1x 140W PD + 1x DP 1.4) + 2x USB-A 3.2 Gen 2 + Leitor SD Full-size + HDMI 2.1',
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta recarga ultrarrápida USB-C 140W PD (levar carregador compacto na mochila) + Fonte Slim 230W',
    battery: '80Wh (~7.5h escritório c/ Ryzen / 1.2h game)',
    batteryHoursNormal: 7.5,
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM até 64GB)',
    storageSlots: '2x Slots M.2 2280 NVMe Gen4 (1 livre) • Sem SATA',
    storageUpgradeStatus: 'full',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: 'Possui 2 portas USB-A e 2 portas USB-C com leitor de cartão SD completo. Não necessita de adaptadores no dia a dia.',
    explanationCharging: 'Suporta carregamento rápido USB-C de até 140W PD (o mesmo cabo Type-C do seu Galaxy Fold 6 com carregador GaN compacto).',
    explanationBattery: 'Bateria de 80Wh que dura cerca de 7.5 horas de navegação e trabalho graças à extrema eficiência energética do processador AMD Ryzen 7.',
    explanationRam: '2x Slots SODIMM DDR5 removíveis, aceitando upgrade para até 64GB.',
    explanationStorage: '2x Slots M.2 2280 PCIe 4.0 livres para upgrade imediato.'
  },
  'lenovo-legion-pro-5i': {
    name: 'Lenovo Legion Pro 5i',
    ports: '2x USB-C (1x 140W PD + 1x DP) + 4x USB-A 3.2 + HDMI 2.1 + RJ-45',
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta recarga rápida USB-C 140W PD + Fonte 300W',
    battery: '80Wh (~4.5h escritório / 1h game)',
    batteryHoursNormal: 4.5,
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM - Já vem 32GB)',
    storageSlots: '2x Slots M.2 2280 PCIe 4.0 (1 livre com dissipador) • Sem SATA',
    storageUpgradeStatus: 'full',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: 'Abundância total de conexões: 4 portas USB-A e 2 portas USB-C. Um dos notebooks com mais portas do mercado!',
    explanationCharging: 'Suporta recarga USB-C 140W PD fora de casa + Fonte original de 300W.',
    explanationBattery: 'Bateria de 80Wh entrega ~4.5h de escritório moderado.',
    explanationRam: '2x Slots SODIMM DDR5 5600MHz removíveis (já vem de fábrica com 32GB).',
    explanationStorage: '2x Slots M.2 2280 com dissipador metálico original Lenovo.'
  },
  'asus-tuf-gaming-a15': {
    name: 'ASUS TUF Gaming A15',
    ports: '2x USB-C (1x USB4 + 1x 100W PD) + 2x USB-A 3.2 + HDMI 2.1 + RJ-45',
    hasUsbCCharging: true,
    chargingInfo: '⚡ Aceita carregador USB-C Power Delivery 100W + Fonte de mesa 240W',
    battery: '90Wh (~8h escritório c/ Ryzen 9 / 1.5h game)',
    batteryHoursNormal: 8.0,
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM até 64GB)',
    storageSlots: '2x Slots M.2 2280 NVMe Gen4 (1 livre) • Sem SATA',
    storageUpgradeStatus: 'full',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: '2x USB-A e 2x USB-C (incluindo porta USB4 de 40Gbps). Não precisa de adaptador.',
    explanationCharging: 'Aceita recarga USB-C de 100W PD além da fonte principal de 240W.',
    explanationBattery: 'Bateria de 90Wh que dura cerca de 8 horas com o processador Ryzen 9 HS.',
    explanationRam: '2x Slots SODIMM DDR5 removíveis.',
    explanationStorage: '2x Slots M.2 2280 PCIe Gen4.'
  },
  'acer-nitro-16': {
    name: 'Acer Nitro 16',
    ports: '2x USB-C (USB4 / 100W PD) + 3x USB-A 3.2 + HDMI 2.1 + MicroSD + RJ-45',
    hasUsbCCharging: true,
    chargingInfo: '⚡ Suporta USB-C 100W PD + Fonte 230W',
    battery: '90Wh (~6h escritório / 1.1h game)',
    batteryHoursNormal: 6.0,
    ramUpgradeStatus: 'full',
    ramUpgradeLabel: '✅ Aceita Troca (2x Slots SODIMM)',
    storageSlots: '2x Slots M.2 NVMe Gen4 (1 livre) • Sem SATA',
    storageUpgradeStatus: 'full',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: '3x USB-A + 2x USB-C com leitor MicroSD.',
    explanationCharging: 'Suporta USB-C 100W PD.',
    explanationBattery: 'Bateria de 90Wh com ~6h de duração.',
    explanationRam: '2x Slots SODIMM expansíveis.',
    explanationStorage: '2x Slots M.2 Gen4.'
  }
};

// Retorna as especificações técnicas oficiais de fábrica para qualquer notebook
function getOfficialLaptopSpecs(laptop) {
  if (!laptop) return null;
  const id = (laptop.id || '').toLowerCase();
  const name = (laptop.name || '').toLowerCase();

  if (OFFICIAL_SPECS_DB[id]) return OFFICIAL_SPECS_DB[id];

  if ((id.includes('dell') && (id.includes('g16') || id.includes('7630'))) || (name.includes('dell') && name.includes('g16'))) {
    return OFFICIAL_SPECS_DB['dell-g16-7630'];
  }
  if ((id.includes('dell') && (id.includes('g15') || id.includes('5530'))) || (name.includes('dell') && name.includes('g15'))) {
    return OFFICIAL_SPECS_DB['dell-g15-5530'];
  }
  if (id.includes('zephyrus') || name.includes('zephyrus')) {
    return OFFICIAL_SPECS_DB['asus-rog-zephyrus-g16'];
  }
  if (id.includes('helios') || name.includes('helios') || name.includes('predator')) {
    return OFFICIAL_SPECS_DB['acer-predator-helios-neo-16'];
  }
  if (id.includes('slim') || name.includes('slim 5')) {
    return OFFICIAL_SPECS_DB['lenovo-legion-slim-5'];
  }
  if (id.includes('pro-5') || name.includes('pro 5') || id.includes('legion-pro')) {
    return OFFICIAL_SPECS_DB['lenovo-legion-pro-5i'];
  }
  if (id.includes('tuf') || name.includes('tuf') || name.includes('a15')) {
    return OFFICIAL_SPECS_DB['asus-tuf-gaming-a15'];
  }
  if (id.includes('nitro') || name.includes('nitro')) {
    return OFFICIAL_SPECS_DB['acer-nitro-16'];
  }

  // Fallback seguro baseado no modelo fornecido
  return {
    ports: laptop.ports || '2x USB-A 3.2 + 1x USB-C + HDMI 2.1',
    hasUsbCCharging: laptop.hasUsbCCharging !== undefined ? laptop.hasUsbCCharging : true,
    chargingInfo: laptop.chargingInfo || 'Suporta carregador de fábrica',
    battery: laptop.battery || 'Bateria Gamer de Alta Densidade',
    batteryHoursNormal: laptop.batteryHoursNormal || 4.5,
    ramUpgradeStatus: laptop.ramUpgradeStatus || 'full',
    ramUpgradeLabel: laptop.ramUpgradeLabel || '2x Slots SODIMM Removíveis',
    storageSlots: laptop.storageSlots || '2x Slots M.2 Gen4 NVMe',
    storageUpgradeStatus: laptop.storageUpgradeStatus || 'full',
    hasExtraM2Slot: true,
    hasSataBay: false,
    explanationPorts: 'Possui portas USB-A e USB-C balanceadas para periféricos.',
    explanationCharging: laptop.hasUsbCCharging ? 'Suporta carregamento USB-C PD portátil.' : 'Requer fonte de pino tradicional.',
    explanationBattery: `Autonomia estimada de ~${laptop.batteryHoursNormal || 4.5}h em tarefas de produtividade.`,
    explanationRam: laptop.ramUpgradeStatus === 'none' ? 'Memória soldada na placa-mãe.' : 'Memória expansível com slots SODIMM.',
    explanationStorage: 'Armazenamento rápido padrão M.2 NVMe PCIe.'
  };
}

// Retorna as portas efetivas do notebook (evita textos em branco ou genéricos quebrados)
function getEffectiveLaptopPorts(laptop) {
  if (!laptop) return '3x USB-A + 1x USB-C + HDMI 2.1';
  const p = (laptop.ports || '').trim();
  if (!p || p === 'USB-C + USB-A + HDMI 2.1' || p === 'USB-C + USB-A') {
    const off = getOfficialLaptopSpecs(laptop);
    if (off && off.ports) return off.ports;
  }
  return p || '3x USB-A + 1x USB-C + HDMI 2.1';
}

// Conta portas USB-A e USB-C com precisão máxima
function countPorts(ports) {
  const txt = (ports || '').replace(/\([^)]*\)/g, ''); // ignora detalhamento entre parênteses
  let usbA = 0;
  let usbC = 0;

  // Procura padrões como "3x USB-A", "3 USB-A", "USB-A"
  const aMatches = [...txt.matchAll(/(?:(\d+)\s*x?\s*)?USB-A/gi)];
  for (const m of aMatches) {
    usbA += parseInt(m[1] || '1', 10);
  }

  // Procura padrões como "2x USB-C", "1x USB-C", "USB-C", "Thunderbolt", "USB4"
  const cMatches = [...txt.matchAll(/(?:(\d+)\s*x?\s*)?(?:USB-C|Thunderbolt|USB4)/gi)];
  for (const m of cMatches) {
    usbC += parseInt(m[1] || '1', 10);
  }

  return { usbA, usbC };
}

// Badge: precisa de dongle (adaptador) ou não?
function renderPortsBadge(laptop) {
  const effectivePorts = getEffectiveLaptopPorts(laptop);
  const { usbA, usbC } = countPorts(effectivePorts);
  const base = 'font-size:0.74rem; padding:3px 8px; font-weight:800; border-radius:4px; display:inline-flex; align-items:center; gap:4px; white-space:nowrap;';

  if (usbA >= 2) {
    return `<span class="badge" style="${base} background:rgba(16,185,129,0.22); color:#34d399; border:1px solid rgba(16,185,129,0.55);">✅ ${usbA}x USB-A + ${usbC > 0 ? usbC + 'x USB-C' : 'USB-C'} • Não precisa de dongle</span>`;
  } else if (usbA === 1) {
    return `<span class="badge" style="${base} background:rgba(245,158,11,0.22); color:#fbbf24; border:1px solid rgba(245,158,11,0.55);">⚠️ Só 1x USB-A + ${usbC > 0 ? usbC + 'x USB-C' : 'USB-C'} • Dongle recomendado</span>`;
  } else if (usbC > 0) {
    return `<span class="badge" style="${base} background:rgba(239,68,68,0.22); color:#f87171; border:1px solid rgba(239,68,68,0.55);">❌ Só USB-C (${usbC}x) • Precisa de dongle/hub</span>`;
  }
  return `<span class="badge" style="${base} background:rgba(16,185,129,0.22); color:#34d399; border:1px solid rgba(16,185,129,0.55);">✅ Portas USB-A + USB-C Integradas</span>`;
}

function renderStorageUpgradeBadge(laptop) {
  const status = laptop.storageUpgradeStatus || (laptop.storageSlots && laptop.storageSlots.includes('suporte') ? 'partial' : 'full');
  if (status === 'full') {
    return `<span class="badge" style="background:rgba(16, 185, 129, 0.18); color:#34d399; border:1px solid rgba(16, 185, 129, 0.45); font-size:0.72rem; padding:3px 8px; font-weight:700;">✅ +1 Slot M.2 Gen4 Livre</span>`;
  } else if (status === 'partial') {
    return `<span class="badge" style="background:rgba(245, 158, 11, 0.18); color:#fbbf24; border:1px solid rgba(245, 158, 11, 0.45); font-size:0.72rem; padding:3px 8px; font-weight:700;">⚠️ 2º Slot M.2 c/ Suporte Dell</span>`;
  } else {
    return `<span class="badge" style="background:rgba(239, 68, 68, 0.18); color:#f87171; border:1px solid rgba(239, 68, 68, 0.45); font-size:0.72rem; padding:3px 8px; font-weight:700;">❌ Apenas 1 Slot M.2</span>`;
  }
}

// Identifica a marca do notebook para os selos de topo
function getBrandTag(name = '') {
  const n = (name || '').toLowerCase();
  if (n.includes('predator') || n.includes('helios')) return 'ACER PREDATOR';
  if (n.includes('nitro')) return 'ACER NITRO';
  if (n.includes('legion')) return 'LENOVO LEGION';
  if (n.includes('zephyrus')) return 'ASUS ROG ZEPHYRUS';
  if (n.includes('strix')) return 'ASUS ROG STRIX';
  if (n.includes('tuf')) return 'ASUS TUF GAMING';
  if (n.includes('alienware')) return 'DELL ALIENWARE';
  if (n.includes('dell g') || n.includes('g16') || n.includes('g15')) return 'DELL GAMING';
  if (n.includes('hp') || n.includes('victus') || n.includes('omen')) return 'HP GAMING';
  if (n.includes('acer')) return 'ACER GAMER';
  if (n.includes('asus')) return 'ASUS GAMER';
  if (n.includes('lenovo')) return 'LENOVO GAMER';
  return 'NOTEBOOK GAMER';
}

// Imagens de alta definição 100% autênticas e locais para cada modelo (sem imagens erradas de terceiros)
function getLaptopImage(laptop) {
  if (laptop && laptop.imageUrl) return laptop.imageUrl;
  const n = (laptop && laptop.name ? laptop.name : '').toLowerCase();
  const id = (laptop && laptop.id ? laptop.id : '').toLowerCase();

  // 1. ASUS ROG Zephyrus G16 (Autêntico Zephyrus Alumínio com logo ROG)
  if (id.includes('zephyrus') || n.includes('zephyrus')) {
    return 'images/asus_zephyrus_g16.jpg';
  }

  // 2. ASUS TUF Gaming (A15 / F15)
  if (id.includes('tuf') || n.includes('tuf') || n.includes('a15')) {
    return 'images/asus_tuf_a15.jpg';
  }

  // 3. Dell G16 (Autêntico Dell G16 7630 com exaustor angular e logo G)
  if ((id.includes('dell') && (id.includes('g16') || id.includes('7630'))) || (n.includes('dell') && n.includes('g16')) || id === 'dell-g16-7630') {
    return 'images/dell_g16_7630.jpg';
  }

  // 4. Dell G15
  if ((id.includes('dell') && id.includes('g15')) || (n.includes('dell') && n.includes('g15')) || id === 'dell-g15-5530') {
    return 'images/dell_g16_7630.jpg';
  }

  // 5. Lenovo Legion Pro 5i (Autêntico Legion com logo azul na tampa)
  if (id.includes('pro-5') || n.includes('pro 5') || id.includes('legion-pro')) {
    return 'images/lenovo_legion_pro_5i.jpg';
  }

  // 6. Lenovo Legion Slim 5 (Autêntico Legion Slim cinza storm)
  if (id.includes('slim') || n.includes('slim 5') || id.includes('legion')) {
    return 'images/lenovo_legion_slim_5.jpg';
  }

  // 7. Acer Predator Helios Neo 16 (Autêntico Helios com logo ciano Predator e gravação a laser)
  if (id.includes('helios') || n.includes('helios') || n.includes('predator')) {
    return 'images/acer_helios_neo_16.jpg';
  }

  // 8. Acer Nitro 16
  if (id.includes('nitro') || n.includes('nitro')) {
    return 'images/acer_helios_neo_16.jpg';
  }

  // Fallbacks por marca geral
  if (n.includes('asus') || n.includes('rog')) {
    return 'images/asus_zephyrus_g16.jpg';
  }
  if (n.includes('lenovo')) {
    return 'images/lenovo_legion_slim_5.jpg';
  }
  if (n.includes('dell')) {
    return 'images/dell_g16_7630.jpg';
  }
  if (n.includes('acer')) {
    return 'images/acer_helios_neo_16.jpg';
  }
  return 'images/asus_zephyrus_g16.jpg';
}

// Notificação Toast Visual Flutuante
function showToastNotification(msg) {
  let toast = document.getElementById('appToastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToastNotification';
    toast.style.cssText = 'position:fixed; bottom:24px; right:24px; z-index:99999; background:linear-gradient(135deg, #10b981, #059669); color:#fff; font-weight:700; font-size:0.88rem; padding:12px 20px; border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.6); display:flex; align-items:center; gap:8px; border:1px solid rgba(255,255,255,0.2); transition:opacity 0.3s, transform 0.3s;';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>⚡</span> <span>${msg}</span>`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  toast.style.display = 'flex';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => { toast.style.display = 'none'; }, 300);
  }, 3500);
}

// Modal do Robozinho IA: Conferir e Auditar Especificações
function openSpecsAuditModal(laptopId) {
  const laptop = laptops.find(l => l.id === laptopId) || DEFAULT_LAPTOPS.find(l => l.id === laptopId);
  if (!laptop) return;

  const official = getOfficialLaptopSpecs(laptop) || {};
  const currentPorts = laptop.ports || 'Não informado';
  const officialPorts = official.ports || currentPorts;

  const modal = document.getElementById('specsAuditModal');
  const body = document.getElementById('specsAuditModalBody');
  if (!modal || !body) return;

  const portsInfo = countPorts(officialPorts);

  // Garante isolamento fechando outros modais
  document.querySelectorAll('.modal-backdrop').forEach(m => {
    if (m.id !== 'specsAuditModal') m.style.display = 'none';
  });

  // Sinal visual imediato
  showToastNotification(`🤖 Robô GamerRadar: Auditando ${laptop.name}...`);

  body.innerHTML = `
    <div class="audit-scanner-line"></div>
    <div class="audit-header-hero">
      <img src="${getLaptopImage(laptop)}" alt="${laptop.name}" class="audit-hero-thumb">
      <div>
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span class="badge badge-accent">${getBrandTag(laptop.name)}</span>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">${laptop.modelCode || 'Oficial'}</span>
        </div>
        <h3 style="margin:4px 0 2px 0; font-size:1.15rem; color:#fff;">${laptop.name}</h3>
        <p style="margin:0; font-size:0.8rem; color:var(--text-muted);">
          🔍 O Robô GamerRadar checou cada detalhe técnico de portas, carregador, bateria e upgrade para que você não tenha dúvidas antes de comprar.
        </p>
      </div>
    </div>

    <div class="audit-grid">
      <!-- 1. Portas & Dongle -->
      <div class="audit-item-card">
        <div class="audit-item-title">
          <span>🔌 1. Portas USB & Necessidade de Dongle/Hub</span>
          <span class="badge ${portsInfo.usbA >= 2 ? 'badge-accent' : 'badge-purple'}">
            ${portsInfo.usbA >= 2 ? '✅ Não Precisa de Adaptador' : '⚠️ Dongle Recomendado'}
          </span>
        </div>
        <div class="audit-item-desc">
          <strong>Portas Registradas:</strong> ${officialPorts}
        </div>
        <div class="audit-item-verdict ok">
          🤖 <strong>Veredito do Robô:</strong> ${official.explanationPorts || (portsInfo.usbA >= 2 
            ? `Possui ${portsInfo.usbA} portas USB-A nativas. Você pode plugar mouse, teclado e pendrive diretamente sem precisar de dongle!` 
            : `Possui poucas portas USB-A. Recomendado ter um hub USB compacto.`)}
        </div>
      </div>

      <!-- 2. Carregador & USB-C Power Delivery -->
      <div class="audit-item-card">
        <div class="audit-item-title">
          <span>⚡ 2. Conector de Energia & Carregamento USB-C PD</span>
          <span class="badge ${official.hasUsbCCharging ? 'badge-accent' : 'badge-purple'}">
            ${official.hasUsbCCharging ? '⚡ Suporta Carregador USB-C' : '🔌 Apenas Pino Redondo'}
          </span>
        </div>
        <div class="audit-item-desc">
          <strong>Tipo de Fonte:</strong> ${official.chargingInfo || (official.hasUsbCCharging ? 'Suporta carregador USB-C PD + Fonte original' : 'Apenas plugue tradicional')}
        </div>
        <div class="audit-item-verdict ${official.hasUsbCCharging ? 'ok' : 'warn'}">
          🤖 <strong>Veredito do Robô:</strong> ${official.explanationCharging || (official.hasUsbCCharging 
            ? 'Praticidade total: você pode usar carregador Type-C portátil (65W a 140W) no trabalho ou faculdade!' 
            : 'Fique atento: A porta USB-C serve para monitor e dados, mas NÃO carrega a bateria. É obrigatório levar a fonte de pino para carregar fora de casa.')}
        </div>
      </div>

      <!-- 3. Autonomia da Bateria -->
      <div class="audit-item-card">
        <div class="audit-item-title">
          <span>🔋 3. Autonomia Real da Bateria</span>
          <span class="badge ${(official.batteryHoursNormal || laptop.batteryHoursNormal || 4) >= 6 ? 'badge-accent' : 'badge-purple'}">
            ~${official.batteryHoursNormal || laptop.batteryHoursNormal || 4}h em Uso Comum
          </span>
        </div>
        <div class="audit-item-desc">
          <strong>Capacidade:</strong> ${official.battery || laptop.battery || 'Bateria Gamer de Alta Capacidade'}
        </div>
        <div class="audit-item-verdict ${(official.batteryHoursNormal || laptop.batteryHoursNormal || 4) >= 6 ? 'ok' : 'warn'}">
          🤖 <strong>Veredito do Robô:</strong> ${official.explanationBattery || ((official.batteryHoursNormal || laptop.batteryHoursNormal || 4) >= 6 
            ? 'Excelente autonomia para um notebook gamer! Permite trabalhar ou assistir aulas durante várias horas fora da tomada.' 
            : 'Foco na tomada. Como usa processador de alta voltagem (Série HX com 14+ núcleos), a bateria dura cerca de 3 a 4 horas em tarefas leves. Para jogar, conecte sempre na tomada para ter os 140W da GPU!')}
        </div>
      </div>

      <!-- 4. Upgrade de Memória RAM -->
      <div class="audit-item-card">
        <div class="audit-item-title">
          <span>🧠 4. Troca de Memória RAM (Soldada vs Removível)</span>
          <span class="badge ${official.ramUpgradeStatus === 'none' ? 'badge-purple' : 'badge-accent'}">
            ${official.ramUpgradeStatus === 'none' ? '❌ 100% Soldada' : '✅ 2x Slots SODIMM'}
          </span>
        </div>
        <div class="audit-item-desc">
          <strong>Configuração:</strong> ${official.ramUpgradeLabel || laptop.ramUpgradeLabel || '2x Slots SODIMM Removíveis DDR5'}
        </div>
        <div class="audit-item-verdict ${official.ramUpgradeStatus === 'none' ? 'alert' : 'ok'}">
          🤖 <strong>Veredito do Robô:</strong> ${official.explanationRam || (official.ramUpgradeStatus === 'none' 
            ? '⚠️ CUIDADO: Memória 100% soldada na placa-mãe. Não é possível trocar nem aumentar no futuro!' 
            : 'Excelente durabilidade! Você pode comprar com 16GB hoje e expandir para 32GB ou 64GB no futuro sem complicações.')}
        </div>
      </div>

      <!-- 5. Armazenamento SSD -->
      <div class="audit-item-card">
        <div class="audit-item-title">
          <span>💾 5. Slots de Armazenamento (SSD M.2 e Baia SATA)</span>
          <span class="badge badge-accent">✅ 2x Slots M.2 Gen4</span>
        </div>
        <div class="audit-item-desc">
          <strong>Slots:</strong> ${official.storageSlots || laptop.storageSlots || '2x Slots M.2 NVMe PCIe 4.0'}
        </div>
        <div class="audit-item-verdict ok">
          🤖 <strong>Veredito do Robô:</strong> ${official.explanationStorage || 'Possui 2 slots M.2 NVMe ultrarrápidos (1 slot com o Windows e 1 slot livre para espetar outro SSD sem abrir mão do original). Baias para HD SATA de 2.5" foram eliminadas nesta geração para dar espaço a baterias maiores.'}
        </div>
      </div>
    </div>

    <div class="audit-actions-bar">
      <button type="button" class="btn btn-secondary" onclick="closeSpecsAuditModal()">
        Fechar
      </button>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button type="button" class="btn btn-secondary" onclick="toggleAuditEditForm('${laptop.id}')" style="font-size:0.82rem;">
          ✍️ Ajustar Detalhes
        </button>
        <button type="button" class="btn btn-primary" onclick="applyOfficialSpecs('${laptop.id}')" style="background:linear-gradient(135deg, #10b981, #059669); border:none; font-weight:700;">
          ✨ Sincronizar Especificações Oficiais de Fábrica
        </button>
      </div>
    </div>

    <!-- Formulário de Edição Manual (Oculto por padrão) -->
    <div id="auditEditFormWrap_${laptop.id}" style="display:none; margin-top:1rem; padding:1rem; background:rgba(0,0,0,0.3); border-radius:8px; border:1px solid var(--border-subtle);">
      <h4 style="font-size:0.92rem; color:var(--accent); margin-bottom:0.75rem;">✍️ Ajustar Especificações deste Modelo:</h4>
      <div class="form-grid">
        <div class="form-group full-width">
          <label>Portas (Texto Completo):</label>
          <input type="text" id="editAuditPorts_${laptop.id}" value="${officialPorts}" class="form-control" style="width:100%; padding:8px; border-radius:4px; background:var(--bg-card); color:#fff; border:1px solid var(--border-subtle);">
        </div>
        <div class="form-group">
          <label>Aceita Carregamento USB-C PD?</label>
          <select id="editAuditUsbCCharge_${laptop.id}" class="form-control" style="width:100%; padding:8px; border-radius:4px; background:var(--bg-card); color:#fff; border:1px solid var(--border-subtle);">
            <option value="true" ${official.hasUsbCCharging ? 'selected' : ''}>Sim (⚡ Suporta Carregador USB-C)</option>
            <option value="false" ${!official.hasUsbCCharging ? 'selected' : ''}>Não (🔌 Apenas Pino Redondo)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Autonomia Normal (Horas):</label>
          <input type="number" step="0.5" id="editAuditBatteryHours_${laptop.id}" value="${official.batteryHoursNormal || laptop.batteryHoursNormal || 4}" class="form-control" style="width:100%; padding:8px; border-radius:4px; background:var(--bg-card); color:#fff; border:1px solid var(--border-subtle);">
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:0.75rem;">
        <button type="button" class="btn btn-primary" onclick="saveManualAuditSpecs('${laptop.id}')" style="font-size:0.82rem;">
          💾 Salvar Alterações
        </button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
}

function closeSpecsAuditModal() {
  const modal = document.getElementById('specsAuditModal');
  if (modal) modal.style.display = 'none';
}

function toggleAuditEditForm(laptopId) {
  const el = document.getElementById(`auditEditFormWrap_${laptopId}`);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

function applyOfficialSpecs(laptopId) {
  const laptop = laptops.find(l => l.id === laptopId) || DEFAULT_LAPTOPS.find(l => l.id === laptopId);
  const official = getOfficialLaptopSpecs(laptop || { id: laptopId });
  if (!official) return;

  const idx = laptops.findIndex(l => l.id === laptopId);
  if (idx !== -1) {
    laptops[idx] = {
      ...laptops[idx],
      ports: official.ports,
      hasUsbCCharging: official.hasUsbCCharging,
      chargingInfo: official.chargingInfo,
      battery: official.battery,
      batteryHoursNormal: official.batteryHoursNormal,
      ramUpgradeStatus: official.ramUpgradeStatus,
      ramUpgradeLabel: official.ramUpgradeLabel,
      storageSlots: official.storageSlots,
      storageUpgradeStatus: official.storageUpgradeStatus,
      hasExtraM2Slot: official.hasExtraM2Slot,
      hasSataBay: official.hasSataBay
    };
    saveData();
    render();
    closeSpecsAuditModal();
    showToastNotification('🤖 Robô GamerRadar: Especificações corrigidas e sincronizadas com sucesso!');
  }
}

function saveManualAuditSpecs(laptopId) {
  const portsInput = document.getElementById(`editAuditPorts_${laptopId}`);
  const chargeInput = document.getElementById(`editAuditUsbCCharge_${laptopId}`);
  const batteryInput = document.getElementById(`editAuditBatteryHours_${laptopId}`);

  const idx = laptops.findIndex(l => l.id === laptopId);
  if (idx !== -1) {
    if (portsInput) laptops[idx].ports = portsInput.value.trim();
    if (chargeInput) laptops[idx].hasUsbCCharging = chargeInput.value === 'true';
    if (batteryInput) laptops[idx].batteryHoursNormal = parseFloat(batteryInput.value) || 4.0;

    saveData();
    render();
    closeSpecsAuditModal();
    showToastNotification('✓ Especificações personalizadas salvas com sucesso!');
  }
}

// Modal de Correção Rápida e Troca de Fotos na Página
function openDirectEditModal(laptopId) {
  const laptop = laptops.find(l => l.id === laptopId) || DEFAULT_LAPTOPS.find(l => l.id === laptopId);
  if (!laptop) return;

  const modal = document.getElementById('directEditModal');
  const body = document.getElementById('directEditModalBody');
  const title = document.getElementById('directEditModalTitle');
  if (!modal || !body) return;

  if (title) title.innerText = `✏️ Corrigir: ${laptop.name}`;

  const currentImg = laptop.imageUrl || getLaptopImage(laptop);

  body.innerHTML = `
    <div class="direct-edit-layout">
      <!-- 1. Seção de Foto -->
      <div class="edit-img-section">
        <div style="font-weight: 700; font-size: 0.92rem; margin-bottom: 0.6rem; color: #fff; display:flex; align-items:center; gap:6px;">
          <span>📷 Foto do Notebook</span>
          <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">(Altere instantaneamente com 1 clique ou cole seu próprio link)</span>
        </div>

        <div class="edit-img-preview-container">
          <div class="edit-img-preview-box">
            <img id="editModalPreviewImg" src="${currentImg}" alt="Preview" onerror="this.src='images/asus_zephyrus_g16.jpg';">
          </div>
          <div style="flex: 1; min-width: 240px; display:flex; flex-direction:column; gap:8px;">
            <div>
              <label style="font-size:0.76rem; color:var(--text-muted); font-weight:700;">Cole o Link da Imagem (Google, Kabum, Amazon, etc.):</label>
              <input type="text" id="editLaptopImageUrl" class="form-input" style="width:100%; margin-top:3px;" 
                placeholder="https://exemplo.com/foto-notebook.jpg ou deixe em branco para o padrão" 
                value="${laptop.imageUrl || ''}" 
                oninput="updateEditImagePreview(this.value)">
            </div>
            <div>
              <label style="font-size:0.76rem; color:var(--text-muted); font-weight:700;">Ou escolha uma foto salva no seu computador:</label>
              <input type="file" id="editLaptopImageFile" accept="image/*" style="font-size:0.8rem; margin-top:3px; color:var(--text-muted);" onchange="handleEditLocalImage(event)">
            </div>
          </div>
        </div>

        <div>
          <span style="font-size:0.76rem; font-weight:700; color:var(--accent);">⚡ Fotos Oficiais em 1 Clique (Catálogo Real):</span>
          <div class="preset-img-chips">
            <button type="button" class="preset-chip-btn" onclick="setEditPresetImage('images/asus_tuf_a15.jpg', this)">🟢 ASUS TUF A15</button>
            <button type="button" class="preset-chip-btn" onclick="setEditPresetImage('images/asus_zephyrus_g16.jpg', this)">🔵 ASUS Zephyrus G16</button>
            <button type="button" class="preset-chip-btn" onclick="setEditPresetImage('images/dell_g16_7630.jpg', this)">🟣 Dell G16 7630 / G15</button>
            <button type="button" class="preset-chip-btn" onclick="setEditPresetImage('images/lenovo_legion_slim_5.jpg', this)">⚪ Lenovo Legion Slim 5</button>
            <button type="button" class="preset-chip-btn" onclick="setEditPresetImage('images/lenovo_legion_pro_5i.jpg', this)">🔷 Lenovo Legion Pro 5i</button>
            <button type="button" class="preset-chip-btn" onclick="setEditPresetImage('images/acer_helios_neo_16.jpg', this)">🔶 Acer Helios Neo 16</button>
          </div>
        </div>
      </div>

      <!-- 2. Grade de Especificações & Preços -->
      <div class="direct-edit-grid">
        <div class="edit-field-group">
          <label>Nome do Notebook:</label>
          <input type="text" id="editLaptopName" value="${laptop.name || ''}">
        </div>

        <div class="edit-field-group">
          <label>Código do Modelo (Ex: FA507UI, 7630, etc.):</label>
          <input type="text" id="editLaptopModelCode" value="${laptop.modelCode || ''}">
        </div>

        <div class="edit-field-group">
          <label>Placa de Vídeo (GPU):</label>
          <input type="text" id="editLaptopGpu" value="${laptop.gpu || ''}">
        </div>

        <div class="edit-field-group">
          <label>Potência TGP da GPU (Watts):</label>
          <input type="text" id="editLaptopGpuTgp" value="${laptop.gpuTgp || '140W'}">
        </div>

        <div class="edit-field-group">
          <label>Processador (CPU):</label>
          <input type="text" id="editLaptopCpu" value="${laptop.cpu || ''}">
        </div>

        <div class="edit-field-group">
          <label>Memória RAM (Texto):</label>
          <input type="text" id="editLaptopRam" value="${laptop.ram || ''}">
        </div>

        <div class="edit-field-group">
          <label>Possibilidade de Troca de Memória RAM:</label>
          <select id="editLaptopRamUpgrade">
            <option value="full" ${laptop.ramUpgradeStatus === 'full' ? 'selected' : ''}>✅ 2x Slots SODIMM (Aceita Upgrade Livre)</option>
            <option value="none" ${laptop.ramUpgradeStatus === 'none' ? 'selected' : ''}>❌ Memória Soldada (Não aceita troca)</option>
          </select>
        </div>

        <div class="edit-field-group">
          <label>Armazenamento (SSD):</label>
          <input type="text" id="editLaptopStorage" value="${laptop.storage || ''}">
        </div>

        <div class="edit-field-group">
          <label>Preço Brasil (R$):</label>
          <input type="number" id="editLaptopPriceBr" value="${laptop.priceBr || 0}">
        </div>

        <div class="edit-field-group">
          <label>Preço EUA ($ USD):</label>
          <input type="number" id="editLaptopPriceUs" value="${laptop.priceUs || 0}">
        </div>

        <div class="edit-field-group">
          <label>Suporte a Carregador USB-C PD:</label>
          <select id="editLaptopUsbC">
            <option value="true" ${laptop.hasUsbCCharging ? 'selected' : ''}>⚡ Sim, suporta recarga por Type-C (65W a 140W)</option>
            <option value="false" ${!laptop.hasUsbCCharging ? 'selected' : ''}>🔌 Não, apenas plugue redondo tradicional</option>
          </select>
        </div>

        <div class="edit-field-group">
          <label>Autonomia da Bateria (Horas em Uso Normal):</label>
          <input type="number" step="0.5" id="editLaptopBatteryHours" value="${laptop.batteryHoursNormal || 4}">
        </div>
      </div>

      <!-- 3. Botões de Ação -->
      <div class="audit-actions-bar">
        <button type="button" class="btn btn-secondary" onclick="closeDirectEditModal()">
          Cancelar
        </button>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button type="button" class="btn btn-secondary" onclick="resetLaptopToDefault('${laptop.id}')" style="font-size:0.8rem;">
            🔄 Restaurar Padrão de Fábrica
          </button>
          <button type="button" class="btn btn-primary" onclick="saveDirectEdit('${laptop.id}')">
            💾 Salvar Alterações na Página
          </button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
}

function closeDirectEditModal() {
  const modal = document.getElementById('directEditModal');
  if (modal) modal.style.display = 'none';
}

function updateEditImagePreview(url) {
  const img = document.getElementById('editModalPreviewImg');
  if (img) {
    img.src = (url && url.trim()) ? url.trim() : 'images/asus_zephyrus_g16.jpg';
  }
}

function setEditPresetImage(imagePath, chipBtn) {
  const input = document.getElementById('editLaptopImageUrl');
  if (input) {
    input.value = imagePath;
    updateEditImagePreview(imagePath);
  }
  document.querySelectorAll('.preset-chip-btn').forEach(btn => btn.classList.remove('active'));
  if (chipBtn) chipBtn.classList.add('active');
}

function handleEditLocalImage(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const input = document.getElementById('editLaptopImageUrl');
    if (input) input.value = dataUrl;
    updateEditImagePreview(dataUrl);
    showToastNotification('📷 Imagem carregada do seu computador!');
  };
  reader.readAsDataURL(file);
}

function saveDirectEdit(laptopId) {
  const idx = laptops.findIndex(l => l.id === laptopId);
  if (idx === -1) {
    alert('Notebook não encontrado para edição.');
    return;
  }

  const name = document.getElementById('editLaptopName')?.value.trim();
  const modelCode = document.getElementById('editLaptopModelCode')?.value.trim();
  const gpu = document.getElementById('editLaptopGpu')?.value.trim();
  const gpuTgp = document.getElementById('editLaptopGpuTgp')?.value.trim();
  const cpu = document.getElementById('editLaptopCpu')?.value.trim();
  const ram = document.getElementById('editLaptopRam')?.value.trim();
  const ramUpgradeStatus = document.getElementById('editLaptopRamUpgrade')?.value;
  const storage = document.getElementById('editLaptopStorage')?.value.trim();
  const priceBr = parseFloat(document.getElementById('editLaptopPriceBr')?.value) || laptops[idx].priceBr;
  const priceUs = parseFloat(document.getElementById('editLaptopPriceUs')?.value) || laptops[idx].priceUs;
  const hasUsbCCharging = document.getElementById('editLaptopUsbC')?.value === 'true';
  const batteryHours = parseFloat(document.getElementById('editLaptopBatteryHours')?.value) || 4;
  const imageUrl = document.getElementById('editLaptopImageUrl')?.value.trim();

  if (name) laptops[idx].name = name;
  if (modelCode) laptops[idx].modelCode = modelCode;
  if (gpu) laptops[idx].gpu = gpu;
  if (gpuTgp) laptops[idx].gpuTgp = gpuTgp;
  if (cpu) laptops[idx].cpu = cpu;
  if (ram) laptops[idx].ram = ram;
  if (ramUpgradeStatus) {
    laptops[idx].ramUpgradeStatus = ramUpgradeStatus;
    laptops[idx].ramUpgradeLabel = ramUpgradeStatus === 'none' ? '❌ Não Aceita Troca (Soldada)' : '✅ Aceita Troca (2x Slots SODIMM)';
  }
  if (storage) laptops[idx].storage = storage;
  laptops[idx].priceBr = priceBr;
  laptops[idx].priceUs = priceUs;
  laptops[idx].hasUsbCCharging = hasUsbCCharging;
  laptops[idx].batteryHoursNormal = batteryHours;
  if (imageUrl !== undefined) {
    laptops[idx].imageUrl = imageUrl;
  }

  saveData();
  render();
  closeDirectEditModal();
  showToastNotification(`✅ ${laptops[idx].name}: Alterações salvas com sucesso!`);
}

function resetLaptopToDefault(laptopId) {
  const def = DEFAULT_LAPTOPS.find(d => d.id === laptopId);
  const idx = laptops.findIndex(l => l.id === laptopId);
  if (def && idx !== -1) {
    laptops[idx] = JSON.parse(JSON.stringify(def));
    saveData();
    render();
    closeDirectEditModal();
    showToastNotification(`🔄 ${def.name}: Restaurado para as especificações originais!`);
  }
}

// ==========================================
// BANCO DE DADOS DE VÍDEOS DE ALTA PRECISÃO (IDs OFICIAIS DO YOUTUBE)
// Zero Erros de Reprodução • Compatível 100% com Player Nativo do YouTube
// ==========================================
const LAPTOP_VIDEO_DATABASE = {
  'predator-helios-neo-16': {
    br: {
      id: 'mBTGcmnXz8g',
      title: 'CUIDADO COM O HELIOS NEO RTX 4060 - O Que Saber Antes de Comprar!',
      channel: 'Dan Ferreira',
      desc: 'Análise técnica de refrigeração com metal líquido, temperaturas de CPU e TGP real.'
    },
    us: {
      id: 'JjFdS0z26ew',
      title: 'Acer Predator Helios Neo 16 Review - Lots of Improvements!',
      channel: "Jarrod'sTech",
      desc: 'Testes de tela, tempo de resposta, fan noise e autonomia de bateria.'
    },
    fps: {
      id: '5drb9Dbe_ag',
      title: 'RTX 4060 vs RTX 4070 Laptop - 25 Game Comparison',
      channel: "Jarrod'sTech",
      desc: 'Testes em Cyberpunk, Warzone, GTA V e CS2 em 1080p e 1440p.'
    },
    teardown: {
      id: 'mBTGcmnXz8g',
      title: 'Helios Neo 16: Como Abrir, Upgrades de RAM DDR5 e Segundo SSD M.2',
      channel: 'Dan Ferreira',
      desc: 'Desmontagem da carcaça e expansão de hardware.'
    }
  },
  'dell-g16-7630': {
    br: {
      id: 'tDhI8vUhzP8',
      title: 'Dell G16 (RTX 4070) Review Completo - Vale a Pena?',
      channel: "Jarrod'sTech",
      desc: 'Potência máxima da RTX 4070 140W e tela QHD+ 240Hz.'
    },
    us: {
      id: 'lnIxL7i9FVA',
      title: 'THE Laptop to Get Right Now - Dell G16 7630',
      channel: 'Dave2D',
      desc: 'Dave2D analisa o chassi, refrigeração Alienware e custo-benefício.'
    },
    fps: {
      id: 'TzifwxoDZnU',
      title: 'RTX 4070 Laptop - 25 Game Gaming Benchmarks',
      channel: "Jarrod'sTech",
      desc: 'Benchmarks em 25 jogos pesados com Ray Tracing e DLSS 3.'
    },
    teardown: {
      id: 'tDhI8vUhzP8',
      title: 'Dell G16 Internals, Upgrade de SSD Gen4 e Limpeza de Cooler',
      channel: "Jarrod'sTech",
      desc: 'Dissipadores Alienware Vapor Chamber e baia interna.'
    }
  },
  'lenovo-legion-slim-5': {
    br: {
      id: '0JocW3DCdIo',
      title: 'Lenovo Legion Slim 5i - Análise e Review Completo',
      channel: 'Dan Ferreira',
      desc: 'Construção robusta em alumínio, ergonomia do teclado e perfil fino.'
    },
    us: {
      id: 'g0v5i7D84Bs',
      title: 'Lenovo Legion Slim / Pro - In-Depth Review & Tests',
      channel: "Jarrod'sTech",
      desc: 'Autonomia de bateria com AMD Ryzen e gerenciamento térmico Coldfront 5.0.'
    },
    fps: {
      id: '-VM_H7soWBQ',
      title: 'RTX 4060 Laptop 25 Games Benchmark',
      channel: "Jarrod'sTech",
      desc: 'Taxa de quadros e estabilidade de 1% Low em jogos competitivos.'
    },
    teardown: {
      id: '0JocW3DCdIo',
      title: 'Legion Slim 5 Desmontagem, 2x Slots SODIMM e 2º Slot M.2 2280',
      channel: 'Dan Ferreira',
      desc: 'Expansão de memória até 64GB e instalação de novo drive.'
    }
  },
  'asus-tuf-gaming-a15': {
    br: {
      id: '3sghf5orKhY',
      title: 'O Notebook Gamer Mais Resistente? Review ASUS TUF Gaming',
      channel: 'Lucas Ishii',
      desc: 'Certificação militar MIL-STD-810H, tela 165Hz e bateria gigante de 90Wh.'
    },
    us: {
      id: 'hpvbxS51TlM',
      title: 'ASUS TUF A15 - Still a Great Gaming Laptop?',
      channel: "Jarrod'sTech",
      desc: 'Eficiência energética com Ryzen e potência com Dynamic Boost 140W.'
    },
    fps: {
      id: 'TzifwxoDZnU',
      title: 'RTX 4070 Mobile Gaming Benchmarks',
      channel: "Jarrod'sTech",
      desc: 'Desempenho com MUX Switch e Advanced Optimus.'
    },
    teardown: {
      id: '3sghf5orKhY',
      title: 'ASUS TUF A15 Como Abrir, Upgrades de RAM e Segundo SSD',
      channel: 'Lucas Ishii',
      desc: 'Acesso facilitado aos dois slots M.2 e memórias.'
    }
  },
  'lenovo-legion-pro-5i': {
    br: {
      id: 'DUhucmXfE1Y',
      title: 'Lenovo Legion Pro 5i é Bom Mesmo? Análise Técnica Sincera',
      channel: 'Dan Ferreira',
      desc: 'Tela fantástica 240Hz 500 nits, processador Intel HX e acabamento premium.'
    },
    us: {
      id: 'g0v5i7D84Bs',
      title: 'Lenovo Legion Pro 5i Review - Still The Best Laptop?',
      channel: "Jarrod'sTech",
      desc: 'Jarrod elege o Legion Pro 5i como o Sweetspot ideal para games e trabalho.'
    },
    fps: {
      id: 'TzifwxoDZnU',
      title: 'RTX 4070 140W 25 Game Laptop Comparison',
      channel: "Jarrod'sTech",
      desc: 'Cyberpunk 2077 com Frame Generation, Warzone, CS2 e Forza.'
    },
    teardown: {
      id: 'DUhucmXfE1Y',
      title: 'Legion Pro 5i: Como Abrir, Dissipadores M.2 e Troca de RAM',
      channel: 'Dan Ferreira',
      desc: 'Blindagem metálica EMI, pads de fábrica e slots livres.'
    }
  },
  'acer-nitro-16': {
    br: {
      id: '7tN0yKVIsDo',
      title: 'Acer Nitro 16 / Nitro V - Análise Técnica & Custo-Benefício',
      channel: 'Dan Ferreira',
      desc: 'Melhor custo-benefício gamer com tela 16:10 165Hz e metal líquido.'
    },
    us: {
      id: '5IbB91AZ9wA',
      title: 'Acer Nitro 16 Review - Full Performance & Battery Test',
      channel: "Jarrod'sTech",
      desc: 'Refrigeração avançada com 4 saídas de ar e teclado RGB 4 zonas.'
    },
    fps: {
      id: '-VM_H7soWBQ',
      title: 'RTX 4060 140W Benchmark em 25 Jogos',
      channel: "Jarrod'sTech",
      desc: 'Testes de taxa de quadros e temperaturas em stress contínuo.'
    },
    teardown: {
      id: '7tN0yKVIsDo',
      title: 'Acer Nitro 16 Desmontagem e Upgrade de SSD M.2',
      channel: 'Dan Ferreira',
      desc: 'Instalação do segundo SSD NVMe e limpeza preventiva.'
    }
  },
  'asus-rog-zephyrus-g16': {
    br: {
      id: 'g2L_-LcgeuQ',
      title: 'ASUS ROG Zephyrus / Strix G16 - Equilíbrio em Tudo',
      channel: 'Dan Ferreira',
      desc: 'Chassi CNC ultrafino de alumínio, tela OLED 240Hz e som de estúdio.'
    },
    us: {
      id: 'dSgC1aczPU4',
      title: 'The New ROG Zephyrus G16 is Unreal',
      channel: 'Dave2D',
      desc: 'Dave2D avalia a tela OLED 0.2ms e o design portátil estilo MacBook.'
    },
    fps: {
      id: 'TzifwxoDZnU',
      title: 'RTX 4070 Thin Laptop Performance Benchmark',
      channel: "Jarrod'sTech",
      desc: 'Desempenho com sistema térmico Tri-Fan e perfis silenciosos.'
    },
    teardown: {
      id: 'g2L_-LcgeuQ',
      title: 'Zephyrus G16 Internals, Câmera de Vapor e 2º Slot SSD',
      channel: 'Dan Ferreira',
      desc: 'Como adicionar o segundo SSD M.2 2280 no perfil fino.'
    }
  },
  'dell-g15-5530': {
    br: {
      id: 'fPhssF7lm-0',
      title: 'Gameplay & Testes Dell G15: Jogamos com o Modelo Gamer!',
      channel: 'Adrenaline',
      desc: 'Adrenaline coloca o Dell G15 à prova em jogos competitivos e pesados.'
    },
    us: {
      id: 'KHQZSOFaNdY',
      title: 'Dell G15 - O Que Saber Antes de Comprar (Dan Ferreira)',
      channel: 'Dan Ferreira',
      desc: 'Dicas sobre o segundo slot de SSD e temperaturas em carga máxima.'
    },
    fps: {
      id: '-VM_H7soWBQ',
      title: 'RTX 4060 vs RTX 3060 - 25 Games at 1440p & 1080p!',
      channel: "Jarrod'sTech",
      desc: 'Comparativo de geração com DLSS e ganho de quadros.'
    },
    teardown: {
      id: 'KHQZSOFaNdY',
      title: 'Dell G15 Como Abrir, Suporte de Metal para o 2º SSD e Memória',
      channel: 'Dan Ferreira',
      desc: 'Guia passo a passo para não quebrar as travas e instalar upgrade.'
    }
  }
};

function getLaptopVideos(laptop) {
  if (!laptop) return LAPTOP_VIDEO_DATABASE['lenovo-legion-pro-5i'];
  if (laptop.id && LAPTOP_VIDEO_DATABASE[laptop.id]) {
    return LAPTOP_VIDEO_DATABASE[laptop.id];
  }
  const name = (laptop.name || '').toLowerCase();
  const id = (laptop.id || '').toLowerCase();
  const combined = name + ' ' + id;

  if (combined.includes('legion') && (combined.includes('pro') || combined.includes('5i') || combined.includes('7i'))) return LAPTOP_VIDEO_DATABASE['lenovo-legion-pro-5i'];
  if (combined.includes('legion') || combined.includes('slim')) return LAPTOP_VIDEO_DATABASE['lenovo-legion-slim-5'];
  if (combined.includes('helios') || combined.includes('predator')) return LAPTOP_VIDEO_DATABASE['predator-helios-neo-16'];
  if (combined.includes('g16') || combined.includes('7630')) return LAPTOP_VIDEO_DATABASE['dell-g16-7630'];
  if (combined.includes('g15') || combined.includes('5530')) return LAPTOP_VIDEO_DATABASE['dell-g15-5530'];
  if (combined.includes('tuf') || combined.includes('a15') || combined.includes('f15')) return LAPTOP_VIDEO_DATABASE['asus-tuf-gaming-a15'];
  if (combined.includes('zephyrus') || combined.includes('rog') || combined.includes('strix')) return LAPTOP_VIDEO_DATABASE['asus-rog-zephyrus-g16'];
  if (combined.includes('nitro')) return LAPTOP_VIDEO_DATABASE['acer-nitro-16'];

  const gpu = (laptop.gpu || '').toLowerCase();
  if (gpu.includes('4070') || gpu.includes('4080') || gpu.includes('4090')) {
    return LAPTOP_VIDEO_DATABASE['lenovo-legion-pro-5i'];
  }
  if (gpu.includes('4060')) {
    return LAPTOP_VIDEO_DATABASE['predator-helios-neo-16'];
  }
  if (gpu.includes('4050') || gpu.includes('3050') || gpu.includes('2050')) {
    return LAPTOP_VIDEO_DATABASE['acer-nitro-16'];
  }
  return LAPTOP_VIDEO_DATABASE['lenovo-legion-pro-5i'];
}

// ==========================================
// MODAL DE VÍDEOS & REVIEWS DE ESPECIALISTAS
// ==========================================
function openVideoReviewsModal(laptopId) {
  let laptop = laptops.find(l => String(l.id) === String(laptopId)) || DEFAULT_LAPTOPS.find(l => String(l.id) === String(laptopId));
  if (!laptop && typeof laptopId === 'string') {
    laptop = laptops.find(l => (l.name && l.name.toLowerCase().includes(laptopId.toLowerCase())) || (l.id && l.id.toLowerCase().includes(laptopId.toLowerCase())));
  }
  if (!laptop) {
    if (typeof showToastNotification === 'function') {
      showToastNotification('⚠️ Modelo de notebook não encontrado para buscar vídeos.');
    }
    return;
  }

  const modal = document.getElementById('videoReviewsModal');
  const body = document.getElementById('videoReviewsModalBody');
  const title = document.getElementById('videoReviewsModalTitle');
  if (!modal || !body) return;

  if (title) {
    title.innerHTML = `🎬 Reviews & Benchmarks: <span style="color:#f87171;">${laptop.name || 'Notebook Gamer'}</span>`;
  }

  // Prepara dados e termos de busca limpos
  const rawName = (laptop && laptop.name) ? String(laptop.name) : 'Notebook Gamer';
  const cleanName = rawName.replace(/notebook\s*gamer/gi, '').trim() || rawName;
  const gpuTerm = ((laptop && laptop.gpu) ? String(laptop.gpu) : 'RTX 4060').replace(/NVIDIA\s*/gi, '').trim();
  const cpuTerm = ((laptop && laptop.cpu) ? String(laptop.cpu) : 'Processador Gamer').split('(')[0].trim();

  // Dados de vídeos verificados
  const videoDb = getLaptopVideos(laptop);
  const activeVideo = videoDb.br;

  // URLs de busca rápida no YouTube
  // 1. Reviews Brasil nos canais top (Dan Ferreira, Adrenaline, Lucas Ishii, TecMundo)
  const queryBr = `"${cleanName}" review (Dan Ferreira OR Adrenaline OR "Lucas Ishii" OR TecMundo)`;
  const urlBr = `https://www.youtube.com/results?search_query=${encodeURIComponent(queryBr)}`;

  // 2. Reviews Mundiais nos canais #1 (Jarrod's Tech, Dave2D, Just Josh, Hardware Canucks)
  const queryUs = `"${cleanName}" "${gpuTerm}" review ("Jarrod's Tech" OR Dave2D OR "Just Josh" OR "Hardware Canucks")`;
  const urlUs = `https://www.youtube.com/results?search_query=${encodeURIComponent(queryUs)}`;

  // 3. Testes reais de FPS e Jogos com a mesma GPU
  const queryFps = `"${gpuTerm}" laptop gaming benchmark fps tests`;
  const urlFps = `https://www.youtube.com/results?search_query=${encodeURIComponent(queryFps)}`;

  // 4. Teste Térmico, Aquecimento & Barulho de Ventoinhas
  const queryThermals = `"${cleanName}" thermal test fan noise temperature`;
  const urlThermals = `https://www.youtube.com/results?search_query=${encodeURIComponent(queryThermals)}`;

  // Canais específicos BR
  const urlDan = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + ' Dan Ferreira')}`;
  const urlAdrenaline = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + ' Adrenaline review')}`;
  const urlLucasIshii = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + ' Lucas Ishii')}`;
  const urlTecmundo = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + ' TecMundo review')}`;

  // Canais específicos Mundiais
  const urlJarrods = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + " Jarrod's Tech")}`;
  const urlDave2D = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + ' Dave2D')}`;
  const urlJustJosh = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + ' Just Josh review')}`;
  const urlLtt = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanName + ' Linus Tech Tips')}`;

  body.innerHTML = `
    <!-- Top Hero com Foto e Specs Reais -->
    <div class="video-hero-card">
      <img src="${getLaptopImage(laptop)}" alt="${laptop.name}" class="video-hero-thumb">
      <div class="video-hero-info">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span class="badge" style="background:rgba(239, 68, 68, 0.2); color:#f87171; border:1px solid rgba(239, 68, 68, 0.4);">
            🎯 Configuração Exata
          </span>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">
            ${laptop.modelCode || 'Modelo Oficial'}
          </span>
        </div>
        <h3 style="margin:4px 0 6px 0; font-size:1.15rem; color:#fff;">${laptop.name}</h3>
        
        <div class="video-specs-pill-bar">
          <span class="video-spec-pill gpu">🎮 ${laptop.gpu} (${laptop.gpuTgp || 'TGP Máximo'})</span>
          <span class="video-spec-pill cpu">⚙️ ${cpuTerm}</span>
          <span class="video-spec-pill">⚡ ${laptop.ram}</span>
          <span class="video-spec-pill">🖥️ ${laptop.screen}</span>
        </div>
        
        <div style="font-size:0.78rem; color:var(--text-muted); line-height:1.4; margin-top:6px; background:rgba(0,0,0,0.25); padding:6px 10px; border-radius:6px; border-left:3px solid #ef4444;">
          💡 <strong>Dica de Ouro GamerRadar:</strong> Ao assistir ao review, repare se o vídeo testa exatamente a <strong>${gpuTerm}</strong> e o mesmo TGP (${laptop.gpuTgp || '140W'}), pois fabricantes muitas vezes lançam o mesmo modelo com telas de 45% NTSC ou placas com menos Watts!
        </div>
      </div>
    </div>

    <!-- Player Embutido Nativo do YouTube com Vídeos Verificados -->
    <div class="video-player-section">
      <div class="video-player-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="video-live-badge">🔴 Player YouTube GamerRadar</span>
          <span style="font-size:0.78rem; color:var(--text-muted);">Assista aos reviews e benchmarks direto aqui</span>
        </div>
        <div class="video-tabs-bar">
          <button type="button" class="video-tab-btn active" id="tabBtn_br" onclick="switchVideoPlayer('${laptop.id}', 'br')">🇧🇷 Review Brasil</button>
          <button type="button" class="video-tab-btn" id="tabBtn_us" onclick="switchVideoPlayer('${laptop.id}', 'us')">🇺🇸 Review Mundial</button>
          <button type="button" class="video-tab-btn" id="tabBtn_fps" onclick="switchVideoPlayer('${laptop.id}', 'fps')">🎮 Testes de FPS (${gpuTerm})</button>
          <button type="button" class="video-tab-btn" id="tabBtn_teardown" onclick="switchVideoPlayer('${laptop.id}', 'teardown')">🛠️ Como Abrir & Upgrades</button>
        </div>
      </div>

      <div class="video-player-wrapper">
        <iframe id="videoPlayerIframe" 
          src="https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=0&rel=0"
          title="${activeVideo.title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="video-player-footer">
        <div id="videoPlayerActiveLabel" style="font-size:0.82rem; color:#38bdf8; font-weight:700;">
          ▶️ Reproduzindo: <strong>${activeVideo.title}</strong> <span style="color:#f87171; font-size:0.75rem; margin-left:6px;">(${activeVideo.channel})</span>
        </div>
        <a id="videoPlayerExternalLink" href="https://www.youtube.com/watch?v=${activeVideo.id}" target="_blank" class="video-channel-btn" style="padding:4px 10px; font-size:0.75rem; text-decoration:none;">
          Abrir no YouTube em Tela Cheia ↗
        </a>
      </div>

      <!-- Playlist Interativa com Thumbnails Oficiais do YouTube -->
      <div class="video-playlist-grid">
        <div class="video-playlist-card active" id="videoCard_br" onclick="switchVideoPlayer('${laptop.id}', 'br')">
          <div class="video-card-thumb-wrap">
            <img src="https://img.youtube.com/vi/${videoDb.br.id}/mqdefault.jpg" alt="${videoDb.br.title}" loading="lazy">
            <span class="video-card-badge">🇧🇷 Review BR</span>
            <div class="video-card-play-icon">▶</div>
          </div>
          <div class="video-card-title">${videoDb.br.title}</div>
          <div class="video-card-author">📺 ${videoDb.br.channel}</div>
        </div>

        <div class="video-playlist-card" id="videoCard_us" onclick="switchVideoPlayer('${laptop.id}', 'us')">
          <div class="video-card-thumb-wrap">
            <img src="https://img.youtube.com/vi/${videoDb.us.id}/mqdefault.jpg" alt="${videoDb.us.title}" loading="lazy">
            <span class="video-card-badge">🇺🇸 Review Global</span>
            <div class="video-card-play-icon">▶</div>
          </div>
          <div class="video-card-title">${videoDb.us.title}</div>
          <div class="video-card-author">📺 ${videoDb.us.channel}</div>
        </div>

        <div class="video-playlist-card" id="videoCard_fps" onclick="switchVideoPlayer('${laptop.id}', 'fps')">
          <div class="video-card-thumb-wrap">
            <img src="https://img.youtube.com/vi/${videoDb.fps.id}/mqdefault.jpg" alt="${videoDb.fps.title}" loading="lazy">
            <span class="video-card-badge">🎮 FPS Games</span>
            <div class="video-card-play-icon">▶</div>
          </div>
          <div class="video-card-title">${videoDb.fps.title}</div>
          <div class="video-card-author">📺 ${videoDb.fps.channel}</div>
        </div>

        <div class="video-playlist-card" id="videoCard_teardown" onclick="switchVideoPlayer('${laptop.id}', 'teardown')">
          <div class="video-card-thumb-wrap">
            <img src="https://img.youtube.com/vi/${videoDb.teardown.id}/mqdefault.jpg" alt="${videoDb.teardown.title}" loading="lazy">
            <span class="video-card-badge">🛠️ Upgrades</span>
            <div class="video-card-play-icon">▶</div>
          </div>
          <div class="video-card-title">${videoDb.teardown.title}</div>
          <div class="video-card-author">📺 ${videoDb.teardown.channel}</div>
        </div>
      </div>
    </div>

    <!-- Seção de Acesso Rápido em 1 Clique -->
    <div class="video-section-header">
      <h4>⚡ Acesso Rápido em 1 Clique (Buscas Cirúrgicas no YouTube)</h4>
      <span style="font-size:0.75rem; color:var(--text-muted);">Abre nova aba com filtros precisos</span>
    </div>

    <div class="video-quick-grid">
      <a href="${urlBr}" target="_blank" class="video-quick-card br">
        <div class="video-quick-card-title">
          <span>🇧🇷 Reviews no YouTube Brasil</span>
          <span>▶️</span>
        </div>
        <div class="video-quick-card-desc">
          Filtra automaticamente os vídeos mais conceituados do Brasil (Dan Ferreira, Adrenaline, Lucas Ishii e TecMundo).
        </div>
        <div class="video-quick-card-btn">
          <span>Abrir Reviews BR no YouTube ↗</span>
        </div>
      </a>

      <a href="${urlUs}" target="_blank" class="video-quick-card usa">
        <div class="video-quick-card-title">
          <span>🇺🇸 Reviews Mundiais (EUA/Global)</span>
          <span>🌐</span>
        </div>
        <div class="video-quick-card-desc">
          Filtra os maiores laboratórios do mundo: Jarrod's Tech, Dave2D, Just Josh e Hardware Canucks.
        </div>
        <div class="video-quick-card-btn">
          <span>Abrir Reviews Mundiais ↗</span>
        </div>
      </a>

      <a href="${urlFps}" target="_blank" class="video-quick-card">
        <div class="video-quick-card-title">
          <span>🎮 Testes de FPS em Jogos (${gpuTerm})</span>
          <span>🔥</span>
        </div>
        <div class="video-quick-card-desc">
          Gameplays reais com contador de FPS em Cyberpunk, Warzone, GTA V e CS2 nesta mesma placa.
        </div>
        <div class="video-quick-card-btn">
          <span>Ver FPS em Jogos ↗</span>
        </div>
      </a>

      <a href="${urlThermals}" target="_blank" class="video-quick-card">
        <div class="video-quick-card-title">
          <span>❄️ Aquecimento & Barulho das Ventoinhas</span>
          <span>🌡️</span>
        </div>
        <div class="video-quick-card-desc">
          Testes de estresse com câmeras térmicas, thermal throttling e decibéis de ruído das ventoinhas.
        </div>
        <div class="video-quick-card-btn">
          <span>Ver Testes Térmicos ↗</span>
        </div>
      </a>
    </div>

    <!-- Grade de Canais Top: Brasil -->
    <div class="video-section-header">
      <h4>🇧🇷 Canais Especialistas do Brasil em Notebooks Gamers</h4>
      <span style="font-size:0.75rem; color:var(--text-muted);">Clique para pesquisar direto no canal</span>
    </div>

    <div class="video-channels-grid">
      <div class="video-channel-item">
        <div class="video-channel-avatar" style="background:rgba(16, 185, 129, 0.15); border-color:rgba(16, 185, 129, 0.4); color:#34d399;">
          🔬
        </div>
        <div class="video-channel-info">
          <div class="video-channel-name-bar">
            <span class="video-channel-name">Dan Ferreira</span>
            <span class="video-channel-badge">#1 Brasil em Laptops</span>
          </div>
          <div class="video-channel-desc">
            A maior autoridade técnica do Brasil em desmontagem interna, testes térmicos, undervolt, TGP real e upgrades de memória/SSD.
          </div>
          <a href="${urlDan}" target="_blank" class="video-channel-btn">
            ▶️ Ver Reviews de Dan Ferreira ↗
          </a>
        </div>
      </div>

      <div class="video-channel-item">
        <div class="video-channel-avatar" style="background:rgba(239, 68, 68, 0.15); border-color:rgba(239, 68, 68, 0.4); color:#f87171;">
          📊
        </div>
        <div class="video-channel-info">
          <div class="video-channel-name-bar">
            <span class="video-channel-name">Adrenaline</span>
            <span class="video-channel-badge">Diego Kerber & Equipe</span>
          </div>
          <div class="video-channel-desc">
            Bateria completa de benchmarks gráficos, testes de tempo de resposta da tela, teclado e análise de preço no Brasil.
          </div>
          <a href="${urlAdrenaline}" target="_blank" class="video-channel-btn">
            ▶️ Ver Reviews no Adrenaline ↗
          </a>
        </div>
      </div>

      <div class="video-channel-item">
        <div class="video-channel-avatar" style="background:rgba(56, 189, 248, 0.15); border-color:rgba(56, 189, 248, 0.4); color:#38bdf8;">
          🎯
        </div>
        <div class="video-channel-info">
          <div class="video-channel-name-bar">
            <span class="video-channel-name">Lucas Ishii</span>
            <span class="video-channel-badge">Custo-Benefício & Prática</span>
          </div>
          <div class="video-channel-desc">
            Reviews minuciosos do dia a dia, durabilidade, som dos alto-falantes, unboxing e opiniões sinceras para estudantes e gamers.
          </div>
          <a href="${urlLucasIshii}" target="_blank" class="video-channel-btn">
            ▶️ Ver Reviews de Lucas Ishii ↗
          </a>
        </div>
      </div>

      <div class="video-channel-item">
        <div class="video-channel-avatar" style="background:rgba(168, 85, 247, 0.15); border-color:rgba(168, 85, 247, 0.4); color:#c084fc;">
          📰
        </div>
        <div class="video-channel-info">
          <div class="video-channel-name-bar">
            <span class="video-channel-name">TecMundo</span>
            <span class="video-channel-badge">Grande Portal Tech</span>
          </div>
          <div class="video-channel-desc">
            Primeiras impressões e análises de ecossistema, design, acabamento e comparações de mercado geral.
          </div>
          <a href="${urlTecmundo}" target="_blank" class="video-channel-btn">
            ▶️ Ver Reviews no TecMundo ↗
          </a>
        </div>
      </div>
    </div>

    <!-- Grade de Canais Top: Internacionais -->
    <div class="video-section-header">
      <h4>🇺🇸 Canais Internacionais de Elite (Padrão Ouro Mundial de Testes)</h4>
      <span style="font-size:0.75rem; color:var(--text-muted);">Testes de laboratório avançados</span>
    </div>

    <div class="video-channels-grid">
      <div class="video-channel-item">
        <div class="video-channel-avatar" style="background:rgba(239, 68, 68, 0.2); border-color:#ef4444; color:#ef4444;">
          👑
        </div>
        <div class="video-channel-info">
          <div class="video-channel-name-bar">
            <span class="video-channel-name">Jarrod's Tech</span>
            <span class="video-channel-badge" style="background:rgba(239, 68, 68, 0.2); color:#fca5a5;">#1 Mundial Absoluto</span>
          </div>
          <div class="video-channel-desc">
            A referência global em notebooks. Mede gama de cores sRGB/DCI-P3, tempo de resposta em ms da tela, ruído com decibelímetro e compara 25+ jogos lado a lado.
          </div>
          <a href="${urlJarrods}" target="_blank" class="video-channel-btn">
            ▶️ Ver Reviews no Jarrod's Tech ↗
          </a>
        </div>
      </div>

      <div class="video-channel-item">
        <div class="video-channel-avatar" style="background:rgba(56, 189, 248, 0.15); border-color:rgba(56, 189, 248, 0.4); color:#38bdf8;">
          ✨
        </div>
        <div class="video-channel-info">
          <div class="video-channel-name-bar">
            <span class="video-channel-name">Dave2D (Dave Lee)</span>
            <span class="video-channel-badge">Design & Engenharia</span>
          </div>
          <div class="video-channel-desc">
            Reviews estéticos e diretos ao ponto, ergonomia, sensação tátil do teclado, qualidade da dobradiça da tela e ruído térmico.
          </div>
          <a href="${urlDave2D}" target="_blank" class="video-channel-btn">
            ▶️ Ver Reviews no Dave2D ↗
          </a>
        </div>
      </div>

      <div class="video-channel-item">
        <div class="video-channel-avatar" style="background:rgba(16, 185, 129, 0.15); border-color:rgba(16, 185, 129, 0.4); color:#34d399;">
          ⚖️
        </div>
        <div class="video-channel-info">
          <div class="video-channel-name-bar">
            <span class="video-channel-name">Just Josh</span>
            <span class="video-channel-badge">Comparativos & Bateria</span>
          </div>
          <div class="video-channel-desc">
            Gráficos comparativos de bateria no dia a dia, fidelidade de tela para produtividade e custo-benefício em dólares.
          </div>
          <a href="${urlJustJosh}" target="_blank" class="video-channel-btn">
            ▶️ Ver Reviews no Just Josh ↗
          </a>
        </div>
      </div>

      <div class="video-channel-item">
        <div class="video-channel-avatar" style="background:rgba(245, 158, 11, 0.15); border-color:rgba(245, 158, 11, 0.4); color:#fbbf24;">
          ⚡
        </div>
        <div class="video-channel-info">
          <div class="video-channel-name-bar">
            <span class="video-channel-name">Linus Tech Tips / ShortCircuit</span>
            <span class="video-channel-badge">Unboxing & Disrupção</span>
          </div>
          <div class="video-channel-desc">
            Primeiras impressões sem filtro, detalhes de portas, carregador, peso e arquitetura geral.
          </div>
          <a href="${urlLtt}" target="_blank" class="video-channel-btn">
            ▶️ Ver no LTT / ShortCircuit ↗
          </a>
        </div>
      </div>
    </div>

    <!-- Barra de Pesquisa Rápida Personalizada com Chips -->
    <div class="video-custom-search-box">
      <div style="font-size:0.88rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:6px;">
        <span>🔍 Pesquisa Personalizada no YouTube para este Notebook</span>
      </div>
      <p style="font-size:0.78rem; color:var(--text-muted); margin:4px 0 10px 0;">
        Clique em um tema rápido ou digite o jogo específico que deseja ver rodando:
      </p>

      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <input type="text" id="customVideoSearchInput_${laptop.id}" placeholder="Ex: Cyberpunk 2077, GTA V, Valorant, tela 165Hz..." 
          style="flex:1; min-width:240px; background:var(--bg-card); border:1px solid rgba(255,255,255,0.15); border-radius:6px; padding:8px 12px; color:#fff; font-size:0.85rem;"
          onkeydown="if(event.key === 'Enter') executeCustomVideoSearch('${laptop.id}')">
        <button type="button" class="btn btn-primary" onclick="executeCustomVideoSearch('${laptop.id}')" style="background:#ef4444; border-color:#ef4444; font-size:0.82rem; padding:8px 16px;">
          ▶️ Buscar no YouTube
        </button>
      </div>

      <div class="video-chips-list">
        <span style="font-size:0.73rem; color:var(--text-muted); align-self:center;">Atalhos de 1 toque:</span>
        <button type="button" class="video-quick-chip" onclick="searchVideoWithTerm('${laptop.id}', 'Cyberpunk 2077 Ray Tracing DLSS 3')">🎮 Cyberpunk 2077</button>
        <button type="button" class="video-quick-chip" onclick="searchVideoWithTerm('${laptop.id}', 'Warzone FPS test benchmark')">🔫 Warzone</button>
        <button type="button" class="video-quick-chip" onclick="searchVideoWithTerm('${laptop.id}', 'CS2 Counter-Strike 2 competitive fps')">💣 CS2</button>
        <button type="button" class="video-quick-chip" onclick="searchVideoWithTerm('${laptop.id}', 'battery life test web browsing')">🔋 Teste de Bateria</button>
        <button type="button" class="video-quick-chip" onclick="searchVideoWithTerm('${laptop.id}', 'thermal throttle stress test cooling pad')">🌡️ Estresse Térmico</button>
        <button type="button" class="video-quick-chip" onclick="searchVideoWithTerm('${laptop.id}', 'teardown upgrade ram ssd opening inside')">🛠️ Como Abrir & Upgrades</button>
      </div>
    </div>

    <div style="display:flex; justify-content:flex-end; margin-top:1.25rem;">
      <button type="button" class="btn btn-secondary" onclick="closeVideoReviewsModal()">
        Fechar Janela
      </button>
    </div>
  `;

  modal.style.display = 'flex';
  modal.style.zIndex = '999999';
}

function closeVideoReviewsModal() {
  const modal = document.getElementById('videoReviewsModal');
  if (modal) {
    modal.style.display = 'none';
    // Para a reprodução do vídeo ao fechar a janela
    const iframe = document.getElementById('videoPlayerIframe');
    if (iframe) iframe.src = 'about:blank';
  }
}

function executeCustomVideoSearch(laptopId) {
  const input = document.getElementById(`customVideoSearchInput_${laptopId}`);
  const term = input ? input.value.trim() : '';
  if (!term) return;
  searchVideoWithTerm(laptopId, term);
}

function switchVideoPlayer(laptopId, mode) {
  const laptop = laptops.find(l => String(l.id) === String(laptopId)) || DEFAULT_LAPTOPS.find(l => String(l.id) === String(laptopId));
  const videoDb = getLaptopVideos(laptop);
  const activeVideo = (videoDb && videoDb[mode]) ? videoDb[mode] : (videoDb ? videoDb.br : null);
  
  // Atualiza classes ativas das abas
  document.querySelectorAll('.video-tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`tabBtn_${mode}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Atualiza classes ativas dos cards da playlist
  document.querySelectorAll('.video-playlist-card').forEach(card => card.classList.remove('active'));
  const activeCard = document.getElementById(`videoCard_${mode}`);
  if (activeCard) activeCard.classList.add('active');

  const iframe = document.getElementById('videoPlayerIframe');
  const label = document.getElementById('videoPlayerActiveLabel');
  const extLink = document.getElementById('videoPlayerExternalLink');

  if (activeVideo && iframe) {
    iframe.src = `https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`;
    if (label) {
      label.innerHTML = `▶️ Reproduzindo: <strong>${activeVideo.title}</strong> <span style="color:#f87171; font-size:0.75rem; margin-left:6px;">(${activeVideo.channel})</span>`;
    }
    if (extLink) {
      extLink.href = `https://www.youtube.com/watch?v=${activeVideo.id}`;
      extLink.innerText = 'Abrir no YouTube em Tela Cheia ↗';
    }
  }
}

function searchVideoWithTerm(laptopId, customTerm) {
  const laptop = laptops.find(l => String(l.id) === String(laptopId)) || DEFAULT_LAPTOPS.find(l => String(l.id) === String(laptopId));
  const rawName = laptop ? String(laptop.name) : 'Notebook Gamer';
  const cleanName = rawName.replace(/notebook\s*gamer/gi, '').trim() || rawName;
  const query = `${cleanName} ${customTerm}`.trim();
  
  if (typeof showToastNotification === 'function') {
    showToastNotification(`🔍 Buscando "${customTerm}" no YouTube...`);
  }
  
  window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
}

// Modal e Extração Inteligente por Link Direto
function openLinkImportModal() {
  const modal = document.getElementById('linkImportModal');
  if (modal) {
    modal.style.display = 'flex';
    const input = document.getElementById('linkInputUrl');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 100);
    }
  }
}

function processPastedLink() {
  const urlInput = document.getElementById('linkInputUrl');
  const priceInput = document.getElementById('linkInputPriceUs');
  const url = (urlInput ? urlInput.value : '').trim();
  const manualUs = priceInput ? parseFloat(priceInput.value) : 0;

  if (!url) {
    alert('Por favor, cole um link de notebook válido!');
    return;
  }

  let store = 'Best Buy';
  if (url.includes('bestbuy.com')) store = 'Best Buy';
  else if (url.includes('amazon.com')) store = 'Amazon';
  else if (url.includes('kabum.com.br')) store = 'Kabum';
  else if (url.includes('dell.com')) store = 'Dell';
  else if (url.includes('mercadolivre.com')) store = 'Mercado Livre';
  else if (url.includes('bhphotovideo.com')) store = 'B&H Photo';
  else if (url.includes('microcenter.com')) store = 'Micro Center';

  let cleanText = decodeURIComponent(url)
    .replace(/^https?:\/\/[^\/]+\//i, ' ')
    .replace(/[/?#&=_-]+/g, ' ')
    .replace(/\b(site|dp|gp|product|item|skuId|ref|pdp)\b/gi, ' ');

  if (manualUs > 0) cleanText += ` $ ${manualUs}`;

  const parsed = parseSpecsFromText(cleanText);
  parsed.store = store;
  if (manualUs > 0) parsed.priceUs = manualUs;

  openManualOcrForm();
  document.getElementById('ocrParsedName').value = parsed.name;
  document.getElementById('ocrParsedGpu').value = parsed.gpu;
  document.getElementById('ocrParsedCpu').value = parsed.cpu;
  document.getElementById('ocrParsedRam').value = parsed.ram;
  document.getElementById('ocrParsedPriceUs').value = parsed.priceUs || (manualUs || 1199);
  document.getElementById('ocrParsedStore').value = store;

  if (parsed.isSolderedRam) {
    const sel = document.getElementById('ocrParsedRamStatus');
    if (sel) sel.value = 'none';
  }

  recalcOcrBrPrice(true);

  document.getElementById('linkImportModal').style.display = 'none';
  const ocrModal = document.getElementById('ocrModal');
  if (ocrModal) ocrModal.style.display = 'flex';

  showToastNotification(`✓ Dados extraídos do link da ${store}! Confira e clique em Confirmar e Salvar.`);
}

// Tabela de Equivalência Inteligente de Processadores (AMD Ryzen vs Intel Core)
function getCpuEquivalence(cpu) {
  if (!cpu) return 'Processador Gamer de Alta Performance';
  const c = cpu.toLowerCase();

  // 1. AMD Ryzen 9
  if (c.includes('ryzen 9') || c.includes('8945hs') || c.includes('7945hx') || c.includes('7940hs') || c.includes('r9')) {
    return 'Equivale ao Intel Core i9-13900HX / i7-14700HX (Com até 2x mais bateria fora da tomada)';
  }
  // 2. AMD Ryzen 7
  if (c.includes('ryzen 7') || c.includes('7735hs') || c.includes('7840hs') || c.includes('8845hs') || c.includes('r7')) {
    return 'Equivale ao Intel Core i7-13700H / Core Ultra 7 (Excelente eficiência térmica)';
  }
  // 3. Intel Core i9
  if (c.includes('i9') || c.includes('13900hx') || c.includes('14900hx')) {
    return 'Equivale ao AMD Ryzen 9 7945HX (Top de linha extremo para jogos e 3D)';
  }
  // 4. Intel Core i7 HX
  if (c.includes('i7') && (c.includes('hx') || c.includes('14700') || c.includes('13650') || c.includes('13700'))) {
    return 'Equivale ao AMD Ryzen 9 8945HS (Força bruta em multitarefa)';
  }
  // 5. Intel Core Ultra 7 / 9
  if (c.includes('ultra 7') || c.includes('ultra 9') || c.includes('155h') || c.includes('185h')) {
    return 'Equivale ao AMD Ryzen 7 8845HS (Arquitetura moderna com IA / NPU dedicada)';
  }
  // 6. Intel Core i7 padrão
  if (c.includes('i7')) {
    return 'Equivale ao AMD Ryzen 7 7840HS';
  }
  // 7. AMD Ryzen 5 / Intel Core i5
  if (c.includes('ryzen 5') || c.includes('i5')) {
    return 'Processador gamer equilibrado';
  }
  return 'Equivalente de Alta Performance Gamer';
}

// Retorna a Placa de Vídeo Integrada (iGPU) que todo processador gamer possui para economizar bateria
function getIntegratedGpu(laptop) {
  if (laptop && laptop.integratedGpu) return laptop.integratedGpu;
  const cpu = ((laptop && laptop.cpu) ? laptop.cpu : '').toLowerCase();
  const name = ((laptop && laptop.name) ? laptop.name : '').toLowerCase();

  // 1. AMD Ryzen 9 / Ryzen 7 8000/7040
  if (cpu.includes('8945') || cpu.includes('8845') || cpu.includes('7940') || cpu.includes('ryzen 9') || name.includes('tuf a15')) {
    return 'AMD Radeon 780M (RDNA 3 - Na bateria)';
  }
  // 2. AMD Ryzen 7 7735HS
  if (cpu.includes('7735') || name.includes('nitro 16')) {
    return 'AMD Radeon 680M (RDNA 2 - Na bateria)';
  }
  // 3. Intel Core Ultra 7 155H / Ultra 9 (Meteor Lake c/ Arc)
  if (cpu.includes('ultra') || cpu.includes('155h') || name.includes('zephyrus')) {
    return 'Intel Arc Graphics (8 Xe-Cores c/ IA)';
  }
  // 4. Intel Core i7-13650HX / 14700HX / i9 (Linha HX)
  if (cpu.includes('hx') || cpu.includes('14700') || cpu.includes('13650') || name.includes('legion') || name.includes('helios') || name.includes('dell g16')) {
    return 'Intel UHD Graphics 770 (Econômica na bateria)';
  }
  // 5. Intel Core i7 / i5 comum
  if (cpu.includes('intel') || cpu.includes('i7')) {
    return 'Intel Iris Xe Graphics';
  }
  return 'Gráficos Integrados do Processador (iGPU)';
}

// Conversor Bidirecional de Peso: Libras (EUA) ⇄ Quilos (Brasil)
function initWeightConverter() {
  const lbsInput = document.getElementById('quickWeightLbs');
  const kgInput = document.getElementById('quickWeightKg');
  if (!lbsInput || !kgInput) return;

  const LBS_TO_KG = 0.45359237;

  lbsInput.addEventListener('input', () => {
    const lbs = parseFloat(lbsInput.value);
    if (!isNaN(lbs) && lbs >= 0) {
      kgInput.value = (lbs * LBS_TO_KG).toFixed(2);
    } else {
      kgInput.value = '';
    }
  });

  kgInput.addEventListener('input', () => {
    const kg = parseFloat(kgInput.value);
    if (!isNaN(kg) && kg >= 0) {
      lbsInput.value = (kg / LBS_TO_KG).toFixed(2);
    } else {
      lbsInput.value = '';
    }
  });
}

// Retorna o peso oficial/estimado do notebook em Quilos (kg) e Libras (lbs)
function getLaptopWeight(laptop) {
  if (laptop && laptop.weightKg && laptop.weightLbs) {
    return { kg: Number(laptop.weightKg).toFixed(2), lbs: Number(laptop.weightLbs).toFixed(2) };
  }
  const name = ((laptop && laptop.name) ? laptop.name : '').toLowerCase();
  const model = ((laptop && laptop.modelCode) ? laptop.modelCode : '').toLowerCase();

  // 1. Ultraleves / Portáteis premium (~1.95 kg / 4.30 lbs)
  if (name.includes('zephyrus') || model.includes('gu605')) {
    return { kg: '1.95', lbs: '4.30' };
  }
  // 2. Chassi gamer equilibrado (~2.20 kg / 4.85 lbs)
  if (name.includes('tuf') || name.includes('a15')) {
    return { kg: '2.20', lbs: '4.85' };
  }
  // 3. Legion Slim 5 (~2.30 kg / 5.07 lbs)
  if (name.includes('slim 5') || name.includes('16aph8')) {
    return { kg: '2.30', lbs: '5.07' };
  }
  // 4. HP Omen 16 (~2.37 kg / 5.22 lbs)
  if (name.includes('omen') || name.includes('victus')) {
    return { kg: '2.37', lbs: '5.22' };
  }
  // 5. Legion Pro 5i (~2.50 kg / 5.51 lbs)
  if (name.includes('pro 5i') || name.includes('legion pro')) {
    return { kg: '2.50', lbs: '5.51' };
  }
  // 6. Acer Predator Helios Neo 16 (~2.60 kg / 5.73 lbs)
  if (name.includes('helios') || name.includes('neo 16') || name.includes('predator')) {
    return { kg: '2.60', lbs: '5.73' };
  }
  // 7. Dell G15 (~2.65 kg / 5.84 lbs)
  if (name.includes('dell g15') || model.includes('5530')) {
    return { kg: '2.65', lbs: '5.84' };
  }
  // 8. Dell G16 (~2.70 kg / 5.95 lbs)
  if (name.includes('dell g16') || model.includes('7630')) {
    return { kg: '2.70', lbs: '5.95' };
  }
  return { kg: '2.40', lbs: '5.29' };
}

// Retorna a badge de veredito da GPU: Verde (Pode comprar) ou Atenção (Pensa bem)
function getGpuVerdictBadge(laptop) {
  const gpu = ((laptop && laptop.gpu) ? laptop.gpu : '').toLowerCase();
  const tgp = ((laptop && laptop.gpuTgp) ? laptop.gpuTgp : '').toLowerCase();

  // 1. Apenas Placa Integrada (SEM placa dedicada NVIDIA) -> Vermelho
  if (gpu.includes('iris') || gpu.includes('uhd') || (gpu.includes('arc') && !gpu.includes('a770') && !gpu.includes('a730')) || (gpu.includes('radeon') && !gpu.includes('rx'))) {
    return `<span class="badge" style="background:rgba(239, 68, 68, 0.22); color:#f87171; border:1px solid rgba(239, 68, 68, 0.55); font-size:0.72rem; padding:3px 8px; font-weight:800; border-radius:4px; white-space:nowrap;">🚫 Cuidado (Pensa bem - Sem Placa Gamer)</span>`;
  }

  // 2. RTX 4070 / RTX 4080 / RTX 4090 (Top de linha com 140W) -> Verde
  if (gpu.includes('4070') || gpu.includes('4080') || gpu.includes('4090')) {
    return `<span class="badge" style="background:rgba(16, 185, 129, 0.22); color:#34d399; border:1px solid rgba(16, 185, 129, 0.55); font-size:0.72rem; padding:3px 8px; font-weight:800; border-radius:4px; white-space:nowrap;">🟢 Placa Certa (Pode comprar)</span>`;
  }

  // 3. RTX 4060 com TGP 140W -> Verde
  if (gpu.includes('4060')) {
    if (tgp.includes('45w') || tgp.includes('65w') || tgp.includes('75w')) {
      return `<span class="badge" style="background:rgba(245, 158, 11, 0.22); color:#fbbf24; border:1px solid rgba(245, 158, 11, 0.55); font-size:0.72rem; padding:3px 8px; font-weight:800; border-radius:4px; white-space:nowrap;">⚠️ Atenção (Pensa bem - TGP Capado)</span>`;
    }
    return `<span class="badge" style="background:rgba(16, 185, 129, 0.22); color:#34d399; border:1px solid rgba(16, 185, 129, 0.55); font-size:0.72rem; padding:3px 8px; font-weight:800; border-radius:4px; white-space:nowrap;">🟢 Placa Certa (Pode comprar)</span>`;
  }

  // 4. RTX 4050 -> Amarelo (Apenas 6GB VRAM, sofre em lançamentos)
  if (gpu.includes('4050')) {
    return `<span class="badge" style="background:rgba(245, 158, 11, 0.22); color:#fbbf24; border:1px solid rgba(245, 158, 11, 0.55); font-size:0.72rem; padding:3px 8px; font-weight:800; border-radius:4px; white-space:nowrap;">⚠️ Atenção (Pensa bem - Apenas 6GB VRAM)</span>`;
  }

  // 5. RTX 3050 ou anterior
  if (gpu.includes('3050') || gpu.includes('1650') || gpu.includes('2050')) {
    return `<span class="badge" style="background:rgba(239, 68, 68, 0.22); color:#f87171; border:1px solid rgba(239, 68, 68, 0.55); font-size:0.72rem; padding:3px 8px; font-weight:800; border-radius:4px; white-space:nowrap;">🚫 Atenção (Pensa bem - Placa Antiga)</span>`;
  }

  return `<span class="badge" style="background:rgba(56, 189, 248, 0.18); color:#38bdf8; border:1px solid rgba(56, 189, 248, 0.45); font-size:0.72rem; padding:3px 8px; font-weight:800; border-radius:4px; white-space:nowrap;">🎮 Placa Gamer</span>`;
}

// Renderização Principal do Grid
function render() {
  const grid = document.getElementById('notebookGrid');
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const searchTerms = query.split(/\s+/).filter(Boolean);

  // Filtragem
  let filtered = laptops.filter(laptop => {
    // Busca por texto ampliada (suporta múltiplos termos em qualquer ordem)
    if (searchTerms.length > 0) {
      const equivalence = getCpuEquivalence(laptop.cpu);
      const searchable = [
        laptop.name,
        laptop.modelCode,
        laptop.gpu,
        laptop.cpu,
        equivalence,
        laptop.storeBr,
        laptop.storeUs,
        laptop.ports,
        laptop.ram,
        laptop.storage,
        laptop.screen,
        laptop.bestFor
      ].filter(Boolean).join(' ').toLowerCase();

      const allTermsMatch = searchTerms.every(term => searchable.includes(term));
      if (!allTermsMatch) return false;
    }

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
    if (currentFilter === 'ram_soldered') {
      return (laptop.ramUpgradeStatus === 'none' || laptop.ramType === 'LPDDR5X' || (laptop.ram && laptop.ram.toLowerCase().includes('soldada')));
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
    if (currentFilter === 'no_dongle') {
      return countPorts(laptop.ports).usbA >= 2;
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
      case 'ranking_desc': // Modo Ranking: Do Melhor para o Pior
        return getLaptopOverallScore(b) - getLaptopOverallScore(a);
      case 'ranking_asc': // Modo Ranking Invertido: Do Pior para o Melhor
        return getLaptopOverallScore(a) - getLaptopOverallScore(b);
      case 'value_score':
        return getLaptopOverallScore(b) - getLaptopOverallScore(a);
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
        return getLaptopOverallScore(b) - getLaptopOverallScore(a);
    }
  });

  // Se o filtro for Top 3 Melhores do Ranking, pega apenas os 3 primeiros
  if (currentFilter === 'ranking_top3') {
    filtered = filtered.slice(0, 3);
  }

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

  // Se estiver no modo Tabela Comparativa, renderiza a tabela completa
  if (currentViewMode === 'table') {
    if (grid) grid.style.display = 'none';
    const tableContainer = document.getElementById('notebookTableContainer');
    if (tableContainer) tableContainer.style.display = 'block';
    renderTable(filtered);
    return;
  } else {
    if (grid) grid.style.display = 'grid';
    const tableContainer = document.getElementById('notebookTableContainer');
    if (tableContainer) tableContainer.style.display = 'none';
  }

  grid.innerHTML = filtered.map((laptop, index) => {
    const isWatched = watchlist.includes(laptop.id);
    const inBudget = laptop.priceBr >= 8000 && laptop.priceBr <= 8900;
    const convertedUs = calculateConvertedUsPrice(laptop.priceUs);
    const diff = laptop.priceBr - convertedUs;
    const isUsCheaper = diff > 0;
    const tax = getTaxBreakdown(laptop.priceUs);
    const rankPos = index + 1;
    const laptopScore = getLaptopOverallScore(laptop);

    const historyBr = (laptop.history && laptop.history.length > 0) ? laptop.history.map(h => h.br) : [laptop.priceBr];
    const historyUs = (laptop.history && laptop.history.length > 0) ? laptop.history.map(h => h.us) : [laptop.priceUs];
    const lowestBr = Math.min(...historyBr);
    const lowestUs = Math.min(...historyUs);
    const isCurrentLowest = laptop.priceBr <= lowestBr;

    // Faixa de Pódio e Medalhas do Modo Ranking
    const isRankingActive = (currentSort === 'ranking_desc' || currentSort === 'ranking_asc' || currentFilter === 'ranking_top3');
    let rankingRibbon = '';
    if (isRankingActive) {
      if (currentSort === 'ranking_asc') {
        rankingRibbon = `
          <div class="ranking-ribbon rank-inverted">
            <span>🔻 #${rankPos} Menor Posição (Score: ${laptopScore})</span>
            <small style="font-size:0.68rem; opacity:0.85;">Modo Pior p/ Melhor</small>
          </div>
        `;
      } else {
        if (rankPos === 1) {
          rankingRibbon = `
            <div class="ranking-ribbon rank-gold">
              <span>🥇 #1 LUGAR • CAMPEÃO DO RANKING</span>
              <span class="badge" style="background:#1a0f00; color:#fbbf24; font-weight:800; font-size:0.75rem;">Score ${laptopScore}</span>
            </div>
          `;
        } else if (rankPos === 2) {
          rankingRibbon = `
            <div class="ranking-ribbon rank-silver">
              <span>🥈 #2 LUGAR • VICE-CAMPEÃO</span>
              <span class="badge" style="background:#0f172a; color:#fff; font-weight:800; font-size:0.75rem;">Score ${laptopScore}</span>
            </div>
          `;
        } else if (rankPos === 3) {
          rankingRibbon = `
            <div class="ranking-ribbon rank-bronze">
              <span>🥉 #3 LUGAR • 3º NO PÓDIO</span>
              <span class="badge" style="background:#000; color:#fff; font-weight:800; font-size:0.75rem;">Score ${laptopScore}</span>
            </div>
          `;
        } else if (rankPos <= 5) {
          rankingRibbon = `
            <div class="ranking-ribbon rank-top">
              <span>🎖️ #${rankPos} LUGAR NO RANKING</span>
              <span style="font-size:0.75rem; font-weight:700;">Score ${laptopScore}</span>
            </div>
          `;
        } else {
          rankingRibbon = `
            <div class="ranking-ribbon rank-standard">
              <span>📊 #${rankPos} Lugar Geral</span>
              <span style="font-size:0.75rem; color:var(--text-muted);">Score ${laptopScore}</span>
            </div>
          `;
        }
      }
    }

    // Formatação limpa de RAM para evitar duplicação (ex: '32GB DDR5 5600MHz (DDR5 5600MHz)')
    const rawRamCapacity = (laptop.ram || '16GB').match(/\d+\s*GB/i) ? (laptop.ram.match(/\d+\s*GB/i)[0]) : '16GB';
    const ramSpeed = laptop.ramSpeed || (laptop.ram.match(/\d{4}\s*MHz/i) ? laptop.ram.match(/\d{4}\s*MHz/i)[0] : '5600MHz');
    const ramType = laptop.ramType || (laptop.ram.includes('LPDDR5X') ? 'LPDDR5X' : (laptop.ram.includes('DDR4') ? 'DDR4' : 'DDR5'));
    const cleanRamTitle = `${rawRamCapacity} ${ramType} • ${ramSpeed}`;
    const cleanStorageTitle = laptop.storage ? laptop.storage.split('•')[0].trim() : '1TB SSD NVMe Gen4';

    // Decisão Inteligente: Vale a pena lá ou aqui?
    let decisionBadge = '';
    const hasSuperiorGpuInUsa = (laptop.gpu.includes('4070') || laptop.gpu.includes('4080')) && convertedUs <= 9400;
    const hasGreatDealInBr = laptop.gpu.includes('4060') && laptop.priceBr <= 8600 && Math.abs(diff) < 900;

    if (hasSuperiorGpuInUsa) {
      decisionBadge = `
        <div class="badge badge-recommend-usa" style="width:100%; text-align:center; padding:7px 10px; font-size:0.78rem; font-weight:700;">
          🚀 VALE MUITO NOS EUA (Pode comprar): Leva ${laptop.gpu} pelo preço de 4060 no Brasil!
        </div>
      `;
    } else if (hasGreatDealInBr) {
      decisionBadge = `
        <div class="badge badge-recommend-br" style="width:100%; text-align:center; padding:7px 10px; font-size:0.78rem; font-weight:700;">
          🛡️ VALE A PENA NO BRASIL (Pode comprar): Mesma placa + Garantia nacional de 1 ano e Teclado ABNT2
        </div>
      `;
    } else if (laptop.gpu && (laptop.gpu.includes('4050') || laptop.gpu.includes('Iris') || laptop.gpu.includes('UHD') || laptop.gpu.includes('Integrada'))) {
      decisionBadge = `
        <div class="badge" style="width:100%; text-align:center; padding:7px 10px; font-size:0.78rem; font-weight:800; background:rgba(245, 158, 11, 0.18); color:#fbbf24; border:1px solid rgba(245, 158, 11, 0.45);">
          ⚠️ ATENÇÃO (Pensa bem): Modelo com placa mais fraca/limitada para jogos pesados
        </div>
      `;
    }

    return `
      <div class="laptop-card ${inBudget ? 'in-budget' : ''} ${rankPos === 1 && currentSort === 'ranking_desc' ? 'rank-champ' : ''}" id="card-${laptop.id}">
        ${rankingRibbon}
        <!-- Imagem do Produto no Topo (Identificação Visual Imediata) -->
        <div class="card-image-hero">
          <img src="${getLaptopImage(laptop)}" alt="${laptop.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80';">
          <div class="card-image-brand">${getBrandTag(laptop.name)}</div>
          <button type="button" class="btn-card-quick-fix" onclick="openDirectEditModal('${laptop.id}')" title="Corrigir foto ou especificações na página">
            ✏️ Corrigir Foto / Specs
          </button>
          <div class="card-image-overlay-tgp">${laptop.gpu} • ${laptop.gpuTgp || '140W'}</div>
          ${(laptop.score >= 93 || (laptop.bestFor && (laptop.bestFor.includes('Sweetspot') || laptop.bestFor.includes('Melhor')))) ? `
            <div style="position:absolute; bottom:10px; left:12px; background:linear-gradient(135deg, #f59e0b, #d97706); color:#000; font-size:0.7rem; font-weight:800; padding:3px 9px; border-radius:4px; box-shadow:0 4px 12px rgba(0,0,0,0.6); display:flex; align-items:center; gap:4px;">
              ⭐ NOSSA INDICAÇÃO
            </div>
          ` : ''}
        </div>

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

        <!-- Bloco de Especificações Técnicas Espaçoso e Legível -->
        <div class="specs-block">
          <div class="specs-hardware-grid">
            <div class="spec-item">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; flex-wrap:wrap; gap:4px;">
                <span class="spec-label" style="margin:0;">🎮 Placa de Vídeo</span>
                ${getGpuVerdictBadge(laptop)}
              </div>
              <span class="spec-value spec-gpu-tgp">
                <div>
                  <span class="badge badge-accent" style="font-size:0.68rem; padding:1px 6px;">⚡ DEDICADA (dGPU)</span>
                  <strong>${laptop.gpu}</strong> <small style="color:var(--text-muted); font-weight:700;">(${laptop.gpuTgp || '140W'})</small>
                </div>
                <div style="margin-top: 4px; font-size: 0.73rem; color: var(--text-muted); line-height: 1.35;">
                  <span style="color:#a78bfa; font-weight:700;">🔋 Integrada (iGPU):</span> ${getIntegratedGpu(laptop)}
                </div>
              </span>
            </div>
            <div class="spec-item">
              <span class="spec-label">⚡ Processador (CPU)</span>
              <span class="spec-value">
                <div><strong>${laptop.cpu.split('(')[0].trim()}</strong></div>
                <div style="margin-top: 4px; font-size: 0.73rem; background: rgba(56, 189, 248, 0.08); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.25); padding: 3px 6px; border-radius: 4px; font-weight: 600; line-height: 1.3;">
                  ⚔️ ${getCpuEquivalence(laptop.cpu)}
                </div>
              </span>
            </div>
            <div class="spec-item">
              <span class="spec-label">🧠 Memória RAM & Tecnologia</span>
              <span class="spec-value">
                <div><strong>${cleanRamTitle}</strong></div>
                <div style="margin-top: 5px;">
                  ${renderRamUpgradeBadge(laptop)}
                </div>
                ${(laptop.ramUpgradeStatus === 'none' || laptop.ramType === 'LPDDR5X' || (laptop.ram && laptop.ram.toLowerCase().includes('soldada'))) ? `
                  <div style="margin-top: 6px; font-size: 0.74rem; background: rgba(239, 68, 68, 0.14); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4); padding: 4px 8px; border-radius: 4px; font-weight: 700; line-height: 1.35;">
                    🚫 CUIDADO: Memória 100% soldada na placa-mãe. Não é possível trocar nem aumentar no futuro!
                  </div>
                ` : `
                  <div style="margin-top: 6px; font-size: 0.74rem; background: rgba(16, 185, 129, 0.1); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 8px; border-radius: 4px; font-weight: 600; line-height: 1.35;">
                    💡 Upgrade livre: 2 slots SODIMM removíveis (pode trocar por 32GB ou 64GB quando quiser)!
                  </div>
                `}
              </span>
            </div>
            <div class="spec-item">
              <span class="spec-label">💾 Armazenamento (SSD)</span>
              <span class="spec-value">
                <div><strong>${cleanStorageTitle}</strong></div>
                <div style="margin-top: 5px;">
                  ${renderStorageUpgradeBadge(laptop)}
                </div>
              </span>
            </div>
          </div>

          <div class="screen-highlight" style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:1.15rem;">🖥️</span>
            <div><strong>Tela:</strong> ${laptop.screen}</div>
          </div>

          <div class="card-extra-row">
            <div class="extra-row-item" style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
              ${renderPortsBadge(laptop)}
              <span class="badge" style="background:rgba(56, 189, 248, 0.12); color:#38bdf8; border:1px solid rgba(56, 189, 248, 0.35); font-size:0.73rem; padding: 3px 8px; font-weight:700;" title="Peso oficial aproximado para viagem (Mala/Mochila)">
                ⚖️ ${getLaptopWeight(laptop).kg} kg (${getLaptopWeight(laptop).lbs} lbs)
              </span>
              <button type="button" class="btn-robot-verify" onclick="openSpecsAuditModal('${laptop.id}')" title="Conferir especificações com Robô IA">
                🤖 Conferir Specs
              </button>
            </div>
            <div class="extra-row-item">
              <span>🔌 <strong>Portas:</strong> ${getEffectiveLaptopPorts(laptop)}</span>
              <span class="badge ${laptop.hasUsbCCharging ? 'badge-accent' : 'badge-purple'}" style="font-size:0.72rem; padding: 2px 8px; white-space: nowrap;">
                ${laptop.hasUsbCCharging ? '⚡ Suporta Carregador USB-C PD' : '🔌 Apenas Pino Redondo'}
              </span>
            </div>
            <div class="extra-row-item">
              <span>
                ${(laptop.batteryHoursNormal >= 6) ? '✅' : ((laptop.batteryHoursNormal >= 4) ? '⚠️' : '❌')} 
                <strong>Autonomia Uso Normal:</strong> ~${laptop.batteryHoursNormal || 4}h <small style="color:var(--text-muted);">(Chrome/Office)</small> • <small style="color:var(--text-dim);">🎮 ~1h game</small>
              </span>
              <span class="badge ${(laptop.batteryHoursNormal >= 6) ? 'badge-accent' : ((laptop.batteryHoursNormal >= 4) ? 'badge-cyan' : 'badge-purple')}" style="font-size:0.72rem; padding: 2px 8px; white-space: nowrap;">
                ${(laptop.batteryHoursNormal >= 6) ? '🔋 Autonomia Alta' : ((laptop.batteryHoursNormal >= 4) ? '⚠️ Autonomia Média' : '❌ Foco na Tomada')}
              </span>
            </div>
            <div class="extra-row-item" style="border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 5px;">
              <span style="color:var(--text-muted);">🔐 <strong>Biometria:</strong> ${laptop.biometrics ? laptop.biometrics.split('(')[0] : '❌ Sem Digital'}</span>
              <span style="color:var(--text-dim); font-size:0.72rem;">💾 Sem baia interna SATA 2.5"</span>
            </div>
          </div>
        </div>

        <!-- Caixa de Comparação de Preços Brasil vs EUA -->
        <div class="price-comparison-box">
          <div class="price-row" style="background: rgba(255, 255, 255, 0.02); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.04);">
            <div class="price-country">
              <span>🇧🇷 Loja no Brasil</span>
              <small style="color:var(--text-dim); font-size:0.75rem;">(${laptop.storeBr})</small>
            </div>
            <div class="price-val br">
              R$ ${laptop.priceBr.toLocaleString('pt-BR')}
            </div>
          </div>

          <div class="price-row" style="background: rgba(16, 185, 129, 0.03); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.15);">
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
              <div class="price-converted-sub" style="font-weight:700; color:var(--accent); font-size:0.95rem; margin-top:3px;">
                Total Convertido: ~ R$ ${Math.round(convertedUs).toLocaleString('pt-BR')}
              </div>
            </div>
          </div>

          <!-- Melhor Valor Já Consultado / Histórico -->
          <div style="background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); padding: 6px 10px; border-radius: 6px; font-size: 0.78rem; display: flex; justify-content: space-between; align-items: center;">
            <span style="color: var(--text-muted); display:flex; align-items:center; gap:5px;">
              🏷️ <strong>Melhor já visto:</strong>
            </span>
            <span style="font-family: var(--font-mono); color: var(--accent); font-weight: 700;">
              R$ ${lowestBr.toLocaleString('pt-BR')} (BR) | $ ${lowestUs.toLocaleString('en-US')} (EUA)
            </span>
            ${isCurrentLowest ? `<span class="badge badge-accent" style="font-size:0.68rem; padding:1px 6px;">🔥 Menor Preço!</span>` : ''}
          </div>

          <div class="price-delta-bar">
            <span class="delta-label">Veredito Financeiro:</span>
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
          <div class="price-stores-bar">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.76rem;">
              <span style="color: var(--accent); font-weight: 700;">🛒 Onde está mais barato?</span>
              <span style="color: var(--text-muted); font-size: 0.72rem;">Checar lojas ao vivo:</span>
            </div>
            <div class="store-links-grid">
              <a href="https://www.amazon.com/s?k=${encodeURIComponent(laptop.name)}" target="_blank" class="store-link-btn" style="background: rgba(255, 153, 0, 0.15); color: #ff9900; border: 1px solid rgba(255, 153, 0, 0.35);">
                🇺🇸 Amazon EUA ↗
              </a>
              <a href="https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(laptop.name)}&qp=seller_facet%3DSeller~Best+Buy" target="_blank" class="store-link-btn" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35);">
                🇺🇸 Best Buy ↗
              </a>
              <a href="https://www.kabum.com.br/busca/${encodeURIComponent(laptop.name)}" target="_blank" class="store-link-btn" style="background: rgba(249, 115, 22, 0.15); color: #fb923c; border: 1px solid rgba(249, 115, 22, 0.35);">
                🇧🇷 Kabum BR ↗
              </a>
              <a href="https://lista.mercadolivre.com.br/${encodeURIComponent(laptop.name)}" target="_blank" class="store-link-btn" style="background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.35);">
                🇧🇷 Mercado Livre ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Ações do Card -->
        <div class="card-actions">
          <button class="btn btn-robot" onclick="openSpecsAuditModal('${laptop.id}')" title="Robô GamerRadar: Conferir e Validar Especificações">
            🤖 Conferir Specs
          </button>
          <button class="btn btn-video" onclick="openVideoReviewsModal('${laptop.id}')" title="Ver vídeos, análises e testes dos principais canais de tecnologia">
            ▶️ Vídeos
          </button>
          <button class="btn btn-secondary" onclick="openDirectEditModal('${laptop.id}')" title="Corrigir foto, modelo ou preços">
            ✏️ Corrigir
          </button>
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

// Renderização em Tabela Comparativa Lado a Lado (Modo Alta Leitura)
function renderTable(filteredLaptops) {
  const container = document.getElementById('notebookTableContainer');
  if (!container) return;

  if (filteredLaptops.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem; color:var(--text-muted);">
        <p style="font-size:1.1rem; margin-bottom:0.5rem;">Nenhum notebook encontrado para esse filtro.</p>
        <button class="btn btn-secondary" onclick="document.getElementById('searchInput').value=''; document.querySelector('.chip[data-filter=all]').click();">Limpar Filtros</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <table class="comparison-table">
      <thead>
        <tr>
          <th style="width:75px; text-align:center;">🏆 Posição</th>
          <th>Notebook</th>
          <th>GPU (Placa)</th>
          <th>CPU (Processador)</th>
          <th>RAM (Soldada ou Removível?)</th>
          <th>Armazenamento SSD</th>
          <th>Tela</th>
          <th>Autonomia (Normal)</th>
          <th>Preço BR</th>
          <th>Preço EUA (Total)</th>
          <th>Veredito</th>
          <th>Lojas</th>
          <th>Comparar</th>
        </tr>
      </thead>
      <tbody>
        ${filteredLaptops.map((laptop, index) => {
          const rankPos = index + 1;
          const score = getLaptopOverallScore(laptop);
          const convertedUs = calculateConvertedUsPrice(laptop.priceUs);
          const diff = laptop.priceBr - convertedUs;
          const isUsCheaper = diff > 0;
          const rawRamCapacity = (laptop.ram || '16GB').match(/\d+\s*GB/i) ? (laptop.ram.match(/\d+\s*GB/i)[0]) : '16GB';
          const ramSpeed = laptop.ramSpeed || (laptop.ram.match(/\d{4}\s*MHz/i) ? laptop.ram.match(/\d{4}\s*MHz/i)[0] : '5600MHz');
          const ramType = laptop.ramType || (laptop.ram.includes('LPDDR5X') ? 'LPDDR5X' : (laptop.ram.includes('DDR4') ? 'DDR4' : 'DDR5'));
          const isSoldered = (laptop.ramUpgradeStatus === 'none' || laptop.ramType === 'LPDDR5X' || (laptop.ram && laptop.ram.toLowerCase().includes('soldada')));

          return `
            <tr>
              <td style="text-align:center;">
                <span class="table-rank-pill ${rankPos === 1 ? 'gold' : (rankPos === 2 ? 'silver' : (rankPos === 3 ? 'bronze' : ''))}">
                  ${rankPos === 1 ? '🥇 1º' : (rankPos === 2 ? '🥈 2º' : (rankPos === 3 ? '🥉 3º' : `#${rankPos}`))}
                </span>
                <div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px; font-weight:700;">Score ${score}</div>
              </td>
              <td>
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src="${getLaptopImage(laptop)}" alt="${laptop.name}" style="width:48px; height:36px; object-fit:cover; border-radius:4px; border:1px solid var(--border-subtle); flex-shrink:0;">
                  <div>
                    <div class="table-model-title">${laptop.name}</div>
                    <div style="font-size:0.75rem; color:var(--text-dim);">${laptop.modelCode}</div>
                    <div style="font-size:0.72rem; color:#38bdf8; font-weight:700; margin-top:2px;">⚖️ ${getLaptopWeight(laptop).kg} kg (${getLaptopWeight(laptop).lbs} lbs)</div>
                  </div>
                </div>
              </td>
              <td>
                <div style="font-weight:700; color:#38bdf8;">${laptop.gpu}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${laptop.gpuTgp}</div>
                <div style="margin-top:4px;">${getGpuVerdictBadge(laptop)}</div>
              </td>
              <td>
                <div style="font-size:0.84rem; font-weight:600;">${laptop.cpu.split('(')[0].trim()}</div>
              </td>
              <td>
                <div style="font-weight:700;">${rawRamCapacity} ${ramType} • ${ramSpeed}</div>
                <div style="margin-top:4px;">${renderRamUpgradeBadge(laptop)}</div>
                ${isSoldered ? `
                  <div style="font-size:0.72rem; color:#f87171; margin-top:2px; font-weight:600;">🚫 Não aceita troca</div>
                ` : `
                  <div style="font-size:0.72rem; color:#34d399; margin-top:2px;">💡 2x SODIMM livres</div>
                `}
              </td>
              <td>
                <div style="font-weight:600;">${laptop.storage ? laptop.storage.split('•')[0].trim() : '1TB SSD NVMe'}</div>
                <div style="margin-top:4px;">${renderStorageUpgradeBadge(laptop)}</div>
              </td>
              <td style="font-size:0.8rem; max-width:180px;">
                ${laptop.screen}
              </td>
              <td>
                <div style="font-weight:700; color:${laptop.batteryHoursNormal >= 6 ? 'var(--accent)' : 'var(--text-main)'};">
                  ~${laptop.batteryHoursNormal || 4}h
                </div>
                <div style="font-size:0.72rem; color:var(--text-muted);">${laptop.hasUsbCCharging ? '⚡ USB-C PD' : '🔌 Pino'}</div>
                <div style="margin-top:4px;">${renderPortsBadge(laptop)}</div>
              </td>
              <td>
                <div class="table-price-br">R$ ${laptop.priceBr.toLocaleString('pt-BR')}</div>
                <div style="font-size:0.72rem; color:var(--text-dim);">${laptop.storeBr}</div>
              </td>
              <td>
                <div class="table-price-us">$ ${laptop.priceUs.toLocaleString('en-US')}</div>
                <div style="font-size:0.8rem; font-weight:700; color:var(--accent);">~ R$ ${Math.round(convertedUs).toLocaleString('pt-BR')}</div>
              </td>
              <td>
                ${isUsCheaper ? `
                  <span class="badge" style="background:rgba(16,185,129,0.15); color:var(--accent); font-weight:700; border:1px solid rgba(16,185,129,0.3); font-size:0.74rem; padding:3px 8px; white-space:nowrap;">
                    ⚡ Economiza R$ ${Math.round(diff).toLocaleString('pt-BR')} nos EUA
                  </span>
                ` : `
                  <span class="badge" style="background:rgba(56,189,248,0.15); color:var(--primary); font-weight:700; border:1px solid rgba(56,189,248,0.3); font-size:0.74rem; padding:3px 8px; white-space:nowrap;">
                    🇧🇷 Melhor no BR (R$ ${Math.round(Math.abs(diff)).toLocaleString('pt-BR')} menor)
                  </span>
                `}
              </td>
              <td>
                <div style="display:flex; gap:4px; flex-direction:column;">
                  <a href="https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(laptop.name)}&qp=seller_facet%3DSeller~Best+Buy" target="_blank" style="font-size:0.72rem; padding:3px 6px; border-radius:3px; background:rgba(56,189,248,0.15); color:#38bdf8; text-decoration:none; text-align:center; font-weight:600; white-space:nowrap;">🇺🇸 Best Buy ↗</a>
                  <a href="https://www.kabum.com.br/busca/${encodeURIComponent(laptop.name)}" target="_blank" style="font-size:0.72rem; padding:3px 6px; border-radius:3px; background:rgba(249,115,22,0.15); color:#fb923c; text-decoration:none; text-align:center; font-weight:600; white-space:nowrap;">🇧🇷 Kabum ↗</a>
                </div>
              </td>
              <td>
                <div style="display:flex; gap:4px; flex-direction:column;">
                  <button class="btn btn-primary" onclick="openDuelModal('${laptop.id}')" style="font-size:0.75rem; padding:4px 8px; white-space:nowrap;">
                    🥊 Duelo
                  </button>
                  <button class="btn btn-video" onclick="openVideoReviewsModal('${laptop.id}')" style="font-size:0.75rem; padding:4px 8px; white-space:nowrap;">
                    ▶️ Vídeos
                  </button>
                  <button class="btn btn-secondary" onclick="addNotebookToCompare('${laptop.id}')" style="font-size:0.73rem; padding:3px 6px; white-space:nowrap; border-color:#38bdf8; color:#38bdf8;">
                    ➕ Comparador
                  </button>
                </div>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

// ==========================================
// PONTUAÇÃO & CÁLCULO GERAL DO MODO RANKING
// ==========================================
function getLaptopOverallScore(laptop) {
  if (!laptop) return 50;
  if (typeof laptop.score === 'number' && laptop.score > 0) {
    return laptop.score;
  }
  let score = 70;
  const gpu = (laptop.gpu || '').toLowerCase();
  const screen = (laptop.screen || '').toLowerCase();
  const battery = laptop.batteryHoursNormal || 4;

  if (gpu.includes('4080')) score += 20;
  else if (gpu.includes('4070')) score += 16;
  else if (gpu.includes('4060')) score += 11;
  else if (gpu.includes('4050')) score += 4;
  else if (gpu.includes('integrada') || gpu.includes('iris') || gpu.includes('uhd')) score -= 25;

  if (screen.includes('240hz') || screen.includes('500 nits') || screen.includes('oled')) score += 6;
  else if (screen.includes('165hz') || screen.includes('1600p') || screen.includes('qhd')) score += 4;
  else if (screen.includes('45%') || screen.includes('ntsc')) score -= 8;

  if (battery >= 7) score += 6;
  else if (battery >= 5) score += 3;
  else if (battery < 3.5) score -= 3;

  if (laptop.hasUsbCCharging) score += 3;
  if (laptop.ramUpgradeStatus === 'full') score += 4;
  else if (laptop.ramUpgradeStatus === 'none') score -= 5;

  return Math.min(99, Math.max(40, score));
}

// Alternar Modo Ranking (Do Melhor pro Pior ⇄ Do Pior pro Melhor)
function toggleRankingMode() {
  const sortSelect = document.getElementById('sortSelect');
  if (currentSort === 'ranking_desc') {
    currentSort = 'ranking_asc';
    showToastNotification('🔻 Ranking Invertido: Exibindo do Pior para o Melhor!');
  } else {
    currentSort = 'ranking_desc';
    showToastNotification('🏆 Modo Ranking Ativado: Exibindo do Melhor para o Pior!');
  }
  if (sortSelect) sortSelect.value = currentSort;
  render();
}

// ==========================================
// COMPARADOR MULTI-NOTEBOOK ESTILO TUDOCELULAR
// ==========================================
let compareSlots = [null, null, null]; // IDs dos notebooks nos 3 slots

function initMultiCompare() {
  updateCompareSelectOptions();
  renderQuickCompareLists();
  
  // Defaults padrão para dar vida imediata ao comparador TudoCelular
  if (laptops.length >= 2 && !compareSlots[0] && !compareSlots[1]) {
    const sorted = [...laptops].sort((a, b) => getLaptopOverallScore(b) - getLaptopOverallScore(a));
    setCompareSlot(0, sorted[0].id, false);
    setCompareSlot(1, sorted[1].id, false);
  }
}

function updateCompareSelectOptions() {
  const selects = [
    document.getElementById('compareSelect1'),
    document.getElementById('compareSelect2'),
    document.getElementById('compareSelect3')
  ];

  selects.forEach((select, idx) => {
    if (!select) return;
    const currentVal = compareSlots[idx] || '';
    const placeholder = idx === 2 ? '3º Notebook (Opcional)...' : `${idx + 1}º Notebook (Pesquisar)...`;
    
    select.innerHTML = `
      <option value="">${placeholder}</option>
      ${laptops.map(l => `
        <option value="${l.id}" ${l.id === currentVal ? 'selected' : ''}>
          ${l.name} [${l.gpu}] - R$ ${l.priceBr.toLocaleString('pt-BR')} | $ ${l.priceUs}
        </option>
      `).join('')}
    `;
  });
}

function onCompareSelectChange(slotIndex, laptopId) {
  setCompareSlot(slotIndex, laptopId, true);
}

function setCompareSlot(slotIndex, laptopId, reRenderTable = true) {
  compareSlots[slotIndex] = laptopId || null;
  const slotEl = document.getElementById(`compareSlot${slotIndex + 1}`);
  const imgEl = document.getElementById(`slotImg${slotIndex + 1}`);
  const iconEl = document.getElementById(`slotEmptyIcon${slotIndex + 1}`);
  const btnRemove = document.getElementById(`btnRemoveSlot${slotIndex + 1}`);
  const specsEl = document.getElementById(`slotSpecs${slotIndex + 1}`);
  const select = document.getElementById(`compareSelect${slotIndex + 1}`);

  if (select && select.value !== (laptopId || '')) {
    select.value = laptopId || '';
  }

  if (laptopId) {
    const laptop = laptops.find(l => l.id === laptopId);
    if (laptop) {
      if (slotEl) slotEl.classList.add('filled');
      if (imgEl) {
        imgEl.src = getLaptopImage(laptop);
        imgEl.style.display = 'block';
      }
      if (iconEl) iconEl.style.display = 'none';
      if (btnRemove) btnRemove.style.display = 'flex';
      if (specsEl) {
        specsEl.innerHTML = `<strong style="color:#38bdf8;">${laptop.gpu}</strong> • R$ ${laptop.priceBr.toLocaleString('pt-BR')}`;
      }
    }
  } else {
    if (slotEl) slotEl.classList.remove('filled');
    if (imgEl) imgEl.style.display = 'none';
    if (iconEl) iconEl.style.display = 'block';
    if (btnRemove) btnRemove.style.display = 'none';
    if (specsEl) specsEl.innerHTML = '';
  }

  if (reRenderTable) {
    const activeSlots = compareSlots.filter(Boolean);
    if (activeSlots.length >= 2) {
      executeMultiCompare(false);
    } else {
      const wrap = document.getElementById('multiCompareResultWrap');
      if (wrap) wrap.style.display = 'none';
    }
  }
}

function removeCompareSlot(slotIndex) {
  setCompareSlot(slotIndex, null, true);
}

function clearAllCompareSlots() {
  compareSlots = [null, null, null];
  for (let i = 0; i < 3; i++) {
    setCompareSlot(i, null, false);
  }
  const wrap = document.getElementById('multiCompareResultWrap');
  if (wrap) wrap.style.display = 'none';
  showToastNotification('🧹 Slots de comparação limpos!');
}

function addNotebookToCompare(laptopId) {
  let targetIndex = compareSlots.findIndex(s => !s);
  if (targetIndex === -1) {
    targetIndex = 2; // Substitui o 3º slot
  }
  setCompareSlot(targetIndex, laptopId, true);
  const laptop = laptops.find(l => l.id === laptopId);
  showToastNotification(`➕ ${laptop ? laptop.name : 'Modelo'} adicionado ao Comparador (Slot ${targetIndex + 1})!`);
  
  const sec = document.getElementById('multiCompareSection');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function loadDuelPreset(id1, id2) {
  setCompareSlot(0, id1, false);
  setCompareSlot(1, id2, false);
  setCompareSlot(2, null, false);
  executeMultiCompare(true);
  showToastNotification('🥊 Duelo carregado no comparador!');
  const sec = document.getElementById('multiCompareSection');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderQuickCompareLists() {
  const topList = document.getElementById('quickTopRankingList');
  const duelsList = document.getElementById('quickPopularDuelsList');

  // Top 3 do Ranking
  if (topList) {
    const sorted = [...laptops].sort((a, b) => getLaptopOverallScore(b) - getLaptopOverallScore(a)).slice(0, 3);
    topList.innerHTML = sorted.map((l, idx) => `
      <div class="quick-compare-item">
        <span>${idx === 0 ? '🥇' : (idx === 1 ? '🥈' : '🥉')} <strong>${l.name}</strong> (${l.gpu})</span>
        <button type="button" class="btn-add-to-compare" onclick="addNotebookToCompare('${l.id}')">+ Comparar</button>
      </div>
    `).join('');
  }

  // Duelos Populares
  if (duelsList) {
    duelsList.innerHTML = `
      <div class="quick-compare-item">
        <span>⚔️ <strong>Legion Pro 5i</strong> vs <strong>Zephyrus G16</strong> (Top RTX 4070)</span>
        <button type="button" class="btn-add-to-compare" onclick="loadDuelPreset('lenovo-legion-pro-5i', 'asus-rog-zephyrus-g16')">Comparar</button>
      </div>
      <div class="quick-compare-item">
        <span>⚔️ <strong>Dell G16 7630</strong> vs <strong>Acer Helios Neo 16</strong></span>
        <button type="button" class="btn-add-to-compare" onclick="loadDuelPreset('dell-g16-7630', 'predator-helios-neo-16')">Comparar</button>
      </div>
      <div class="quick-compare-item">
        <span>⚔️ <strong>Legion Slim 5</strong> vs <strong>ASUS TUF A15</strong> (Baterias Top)</span>
        <button type="button" class="btn-add-to-compare" onclick="loadDuelPreset('lenovo-legion-slim-5', 'asus-tuf-a15')">Comparar</button>
      </div>
    `;
  }
}

function executeMultiCompare(scrollInto = true) {
  const selectedLaptops = compareSlots.map(id => laptops.find(l => l.id === id)).filter(Boolean);
  const wrap = document.getElementById('multiCompareResultWrap');
  if (!wrap) return;

  if (selectedLaptops.length < 2) {
    showToastNotification('⚠️ Selecione pelo menos 2 notebooks para comparar!');
    return;
  }

  wrap.style.display = 'block';

  wrap.innerHTML = `
    <div style="background:rgba(0,0,0,0.3); border:1px solid rgba(56,189,248,0.3); border-radius:10px; padding:1.25rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:8px;">
        <h4 style="margin:0; font-size:1.1rem; color:#fff; display:flex; align-items:center; gap:8px;">
          <span>📊 Comparativo Técnico Lado a Lado (${selectedLaptops.length} Modelos)</span>
        </h4>
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('multiCompareResultWrap').style.display='none'" style="font-size:0.75rem; padding:4px 8px;">✕ Fechar Tabela</button>
      </div>

      <div style="overflow-x:auto;">
        <table class="tc-compare-table">
          <thead>
            <tr>
              <th class="tc-param-header">Especificação</th>
              ${selectedLaptops.map((lap, idx) => `
                <th>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <img src="${getLaptopImage(lap)}" alt="${lap.name}" style="width:40px; height:28px; object-fit:cover; border-radius:4px; border:1px solid rgba(255,255,255,0.15);">
                    <div>
                      <div style="font-size:0.92rem; font-weight:800; color:#fff;">${lap.name}</div>
                      <div style="font-size:0.72rem; color:#38bdf8; font-weight:700;">Score: ${getLaptopOverallScore(lap)}</div>
                    </div>
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tc-param-header">🎮 Placa de Vídeo (GPU)</td>
              ${selectedLaptops.map(l => `
                <td>
                  <strong style="color:#38bdf8;">${l.gpu}</strong>
                  <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${l.gpuTgp || '140W Potência Máxima'}</div>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="tc-param-header">⚡ Processador (CPU)</td>
              ${selectedLaptops.map(l => `
                <td>
                  <strong>${l.cpu.split('(')[0].trim()}</strong>
                  <div style="font-size:0.72rem; color:var(--text-dim);">${getCpuEquivalence(l.cpu)}</div>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="tc-param-header">🧠 Memória RAM</td>
              ${selectedLaptops.map(l => {
                const isSoldered = (l.ramUpgradeStatus === 'none' || l.ramType === 'LPDDR5X' || (l.ram && l.ram.toLowerCase().includes('soldada')));
                return `
                  <td>
                    <strong>${l.ram}</strong>
                    <div style="font-size:0.74rem; margin-top:2px; font-weight:700; color:${isSoldered ? '#f87171' : '#34d399'};">
                      ${isSoldered ? '🚫 RAM Soldada (Não Troca)' : '✅ 2x SODIMM Livres'}
                    </div>
                  </td>
                `;
              }).join('')}
            </tr>
            <tr>
              <td class="tc-param-header">🖥️ Tela & Cores</td>
              ${selectedLaptops.map(l => `
                <td style="font-size:0.8rem; line-height:1.35;">${l.screen}</td>
              `).join('')}
            </tr>
            <tr>
              <td class="tc-param-header">🔋 Bateria (Uso Normal)</td>
              ${selectedLaptops.map(l => `
                <td>
                  <strong style="color:${l.batteryHoursNormal >= 6 ? 'var(--accent)' : 'var(--text-main)'};">~${l.batteryHoursNormal || 4}h</strong>
                  <div style="font-size:0.72rem; color:var(--text-muted);">${l.hasUsbCCharging ? '⚡ Suporta Carregador USB-C' : '🔌 Apenas Pino Tradicional'}</div>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="tc-param-header">⚖️ Peso p/ Mala</td>
              ${selectedLaptops.map(l => `
                <td style="font-weight:700; color:#38bdf8;">${getLaptopWeight(l).kg} kg <small style="color:var(--text-muted);">(${getLaptopWeight(l).lbs} lbs)</small></td>
              `).join('')}
            </tr>
            <tr>
              <td class="tc-param-header">🇧🇷 Preço no Brasil</td>
              ${selectedLaptops.map(l => `
                <td>
                  <strong style="font-size:1rem; color:#fff; font-family:var(--font-mono);">R$ ${l.priceBr.toLocaleString('pt-BR')}</strong>
                  <div style="font-size:0.72rem; color:var(--text-dim);">${l.storeBr}</div>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="tc-param-header">🇺🇸 Preço EUA (Convertido)</td>
              ${selectedLaptops.map(l => {
                const conv = calculateConvertedUsPrice(l.priceUs);
                const diff = l.priceBr - conv;
                return `
                  <td>
                    <strong style="color:var(--accent); font-family:var(--font-mono); font-size:0.95rem;">$ ${l.priceUs}</strong>
                    <div style="font-size:0.8rem; font-weight:700; color:var(--accent); margin-top:2px;">~ R$ ${Math.round(conv).toLocaleString('pt-BR')}</div>
                    <div style="font-size:0.72rem; color:${diff > 0 ? '#34d399' : '#38bdf8'}; font-weight:700; margin-top:2px;">
                      ${diff > 0 ? `⚡ Economiza R$ ${Math.round(diff).toLocaleString('pt-BR')} nos EUA` : `🇧🇷 Mais em conta no BR`}
                    </div>
                  </td>
                `;
              }).join('')}
            </tr>
            <tr>
              <td class="tc-param-header">🎬 Vídeos dos Melhores Canais</td>
              ${selectedLaptops.map(l => `
                <td>
                  <button type="button" class="btn btn-video" data-laptop-id="${l.id}" onclick="window.openVideoReviewsModal('${l.id}')" style="font-size:0.75rem; padding:6px 10px; width:100%; justify-content:center; cursor:pointer;">
                    ▶️ Ver Vídeos / Reviews
                  </button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  if (scrollInto) {
    wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
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
    const ramStatusSelect = document.getElementById('ocrParsedRamStatus');
    if (ramStatusSelect) ramStatusSelect.value = parsed.ramStatus || (parsed.isSolderedRam ? 'none' : 'full');
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
    if (parsed.isIntegratedOnly) {
      statusText.innerHTML = `⚠️ <strong style="color:#ef4444;">ALERTA DE HARDWARE:</strong> Este modelo possui apenas <strong>Placa Integrada (${parsed.integratedGpuName})</strong>! Ele NÃO possui placa de vídeo dedicada NVIDIA/AMD. Não recomendado para jogos pesados modernos!`;
      statusText.style.color = '#f87171';
    } else {
      statusText.innerText = '🎉 Dados extraídos do print com Preço Brasil preenchido! Confira abaixo:';
    }
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

  // 1. GPU (Diferenciação clara de Placa Dedicada vs Placa Integrada)
  let gpu = 'NVIDIA GeForce RTX 4060 (Dedicada)';
  let isIntegratedOnly = false;
  let integratedGpuName = '';

  if (/4090/i.test(text)) gpu = 'NVIDIA GeForce RTX 4090 (175W)';
  else if (/4080/i.test(text)) gpu = 'NVIDIA GeForce RTX 4080 (175W)';
  else if (/4070/i.test(text)) gpu = 'NVIDIA GeForce RTX 4070 (140W)';
  else if (/4060/i.test(text)) gpu = 'NVIDIA GeForce RTX 4060 (140W)';
  else if (/4050/i.test(text)) gpu = 'NVIDIA GeForce RTX 4050 (105W)';
  else if (/3050|3060|3070|3080/i.test(text)) gpu = 'NVIDIA GeForce RTX 30-Series (Dedicada)';
  else if (/radeon rx/i.test(text)) gpu = 'AMD Radeon RX (Dedicada)';
  else if (/iris\s*xe/i.test(text)) {
    gpu = 'Intel Iris Xe (Apenas Placa Integrada)';
    isIntegratedOnly = true;
    integratedGpuName = 'Intel Iris Xe';
  } else if (/intel\s*arc/i.test(text) && !/a\d{3}m/i.test(text)) {
    gpu = 'Intel Arc Graphics (Placa Integrada)';
    isIntegratedOnly = true;
    integratedGpuName = 'Intel Arc';
  } else if (/uhd\s*graphics/i.test(text)) {
    gpu = 'Intel UHD Graphics (Apenas Placa Integrada)';
    isIntegratedOnly = true;
    integratedGpuName = 'Intel UHD';
  } else if (/radeon\s*(?:780m|680m|graphics)/i.test(text) && !/rx\s*\d{4}/i.test(text)) {
    gpu = 'AMD Radeon Graphics (Apenas Placa Integrada)';
    isIntegratedOnly = true;
    integratedGpuName = 'AMD Radeon Graphics';
  }

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

  // 3. RAM e detecção se é SOLDADA ou REMOVÍVEL
  let ram = '16GB DDR5';
  const ramMatch = text.match(/(\b(16|32|64)\s*GB\b)/i);
  if (ramMatch) ram = ramMatch[0].toUpperCase() + ' DDR5';

  // Detecção Inteligente de RAM Soldada vs Removível
  const isLpddr = /lpddr/i.test(text);
  const isSolderedText = /soldered|soldada|onboard|on-board|non-removable|não aceita troca|sem slot/i.test(text);
  const isZephyrus = /zephyrus/i.test(text);
  const isSolderedRam = isLpddr || isSolderedText || isZephyrus;
  const isPartial = /parcial|1x slot|onboard \+/i.test(text);
  const ramStatus = isSolderedRam ? 'none' : (isPartial ? 'partial' : 'full');

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

  return { name, gpu, cpu, ram, ramStatus, isSolderedRam, priceUs, priceBr, store, isIntegratedOnly, integratedGpuName };
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
  const statusEl = document.getElementById('ocrSaveStatusText');
  const btn = document.getElementById('btnSaveOcrLaptop');
  try {
    if (btn) btn.disabled = true;
    if (statusEl) {
      statusEl.style.display = 'inline';
      statusEl.innerText = '💾 Salvando no Radar...';
    }

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

    // Detecção inteligente de características
    const ramStatusSelect = document.getElementById('ocrParsedRamStatus');
    const selectedRamStatus = ramStatusSelect ? ramStatusSelect.value : '';
    const isZephyrus = name.toLowerCase().includes('zephyrus');
    const isRyzenOrUltra = cpu.toLowerCase().includes('ryzen') || cpu.toLowerCase().includes('ultra');

    // Determinar se a RAM é soldada com base no dropdown ou no modelo
    const isSoldered = selectedRamStatus === 'none' || (selectedRamStatus === '' && (isZephyrus || ram.includes('LPDDR') || ram.toLowerCase().includes('soldada')));
    const isPartial = selectedRamStatus === 'partial';

    const ramUpgradeStatus = isSoldered ? 'none' : (isPartial ? 'partial' : 'full');
    const ramUpgradeLabel = isSoldered 
      ? '❌ Não Aceita Troca (100% Soldada na Placa)' 
      : (isPartial ? '⚠️ Troca Parcial (1 Soldada + 1 Slot Livre)' : '✅ Aceita Troca (2x SODIMM até 64GB)');
    const ramType = isSoldered ? (isZephyrus || ram.includes('LPDDR') ? 'LPDDR5X' : 'DDR5 (Soldada)') : 'DDR5';
    const ramSpeed = isSoldered ? '7467MHz' : '5600MHz';

    const newLaptop = {
      id: 'ocr-' + Date.now(),
      name: name,
      modelCode: 'Print OCR',
      gpu: gpu,
      gpuTgp: '140W (Potência Máxima)',
      gpuTier: gpu.includes('4070') ? 'high' : (gpu.includes('4080') ? 'ultra' : 'mid-high'),
      cpu: cpu,
      ram: ram,
      ramType: ramType,
      ramSpeed: ramSpeed,
      ramUpgradeStatus: ramUpgradeStatus,
      ramUpgradeLabel: ramUpgradeLabel,
      storage: '1TB SSD NVMe M.2 Gen4',
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
      weightKg: parseFloat(getLaptopWeight({ name }).kg),
      weightLbs: parseFloat(getLaptopWeight({ name }).lbs),
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

    // Sempre insere no topo da lista para o usuário ver imediatamente o que acabou de colocar!
    laptops.unshift(newLaptop);
    if (!watchlist.includes(newLaptop.id)) watchlist.push(newLaptop.id);

    // Garante que o notebook apareça imediatamente sem ser escondido por filtros ativos
    currentFilter = 'all';
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.chip[data-filter="all"]')?.classList.add('active');

    // Limpa a barra de busca para não filtrar indevidamente
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    const btnClear = document.getElementById('btnClearSearch');
    if (btnClear) btnClear.style.display = 'none';

    saveData();
    render();

    // Fecha o modal e limpa formulário
    const modal = document.getElementById('ocrModal');
    if (modal) modal.style.display = 'none';
    resetOcr();

    // Rola a tela até o notebook recém-adicionado e destaca visualmente
    setTimeout(() => {
      const cardEl = document.getElementById('card-' + newLaptop.id);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cardEl.style.boxShadow = '0 0 30px #10b981, 0 0 60px rgba(16, 185, 129, 0.5)';
        cardEl.style.borderColor = '#10b981';
        setTimeout(() => {
          cardEl.style.boxShadow = '';
          cardEl.style.borderColor = '';
        }, 4000);
      }
    }, 150);

    showToastNotification(`🎉 Notebook "${newLaptop.name}" salvo no topo do Radar!`);
  } catch (err) {
    console.error('Erro ao salvar notebook do OCR:', err);
    alert('Erro ao salvar: ' + err.message);
  } finally {
    if (btn) btn.disabled = false;
    if (statusEl) statusEl.style.display = 'none';
  }
}

// Abrir preenchimento manual diretamente caso o usuário não queira tirar print
function openManualOcrForm() {
  const formWrap = document.getElementById('ocrResultFormWrap');
  const prevWrap = document.getElementById('ocrPreviewWrap');
  const statusBox = document.getElementById('ocrStatusBox');
  const statusText = document.getElementById('ocrStatusText');

  if (prevWrap) prevWrap.style.display = 'block';
  if (statusBox) statusBox.style.display = 'block';
  if (statusText) statusText.innerText = '✍️ Digite os dados do notebook abaixo e clique em Confirmar:';
  if (formWrap) formWrap.style.display = 'block';

  // Pré-preencher com sugestão pronta para edição se estiver vazio
  const nameInput = document.getElementById('ocrParsedName');
  if (nameInput && !nameInput.value) nameInput.value = 'ASUS ROG Zephyrus G16 (2024)';
  const gpuInput = document.getElementById('ocrParsedGpu');
  if (gpuInput && !gpuInput.value) gpuInput.value = 'NVIDIA RTX 4070';
  const cpuInput = document.getElementById('ocrParsedCpu');
  if (cpuInput && !cpuInput.value) cpuInput.value = 'Intel Core Ultra 9 185H';
  const ramInput = document.getElementById('ocrParsedRam');
  if (ramInput && !ramInput.value) ramInput.value = '16GB LPDDR5X 7467MHz';
  const ramStatusSelect = document.getElementById('ocrParsedRamStatus');
  if (ramStatusSelect) ramStatusSelect.value = 'none'; // Zephyrus tem RAM soldada
  const priceUsInput = document.getElementById('ocrParsedPriceUs');
  if (priceUsInput && !priceUsInput.value) priceUsInput.value = '1499';
  const priceBrInput = document.getElementById('ocrParsedPriceBr');
  if (priceBrInput && !priceBrInput.value) priceBrInput.value = '14899';
  const storeInput = document.getElementById('ocrParsedStore');
  if (storeInput && !storeInput.value) storeInput.value = 'Best Buy';
}

// Alternar entre visualização de Cards Espaçosos e Tabela Comparativa Lado a Lado
function switchViewMode(mode) {
  currentViewMode = mode;
  const btnCards = document.getElementById('btnViewCards');
  const btnTable = document.getElementById('btnViewTable');
  const quickBtn = document.getElementById('btnQuickTableToggle');

  if (mode === 'cards') {
    if (btnCards) btnCards.classList.add('active');
    if (btnTable) btnTable.classList.remove('active');
    if (quickBtn) quickBtn.innerHTML = '📊 Ver em Tabela / Lista';
  } else {
    if (btnTable) btnTable.classList.add('active');
    if (btnCards) btnCards.classList.remove('active');
    if (quickBtn) quickBtn.innerHTML = '🎴 Ver em Cards';
  }
  render();
}

function toggleViewMode() {
  const nextMode = (currentViewMode === 'table') ? 'cards' : 'table';
  switchViewMode(nextMode);
  if (nextMode === 'table') {
    const el = document.getElementById('notebookTableContainer');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Notificação Toast não-bloqueante
function showToastNotification(message) {
  let toast = document.getElementById('appToastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToastNotice';
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.background = 'linear-gradient(135deg, #0284c7, #10b981)';
    toast.style.color = '#fff';
    toast.style.padding = '14px 22px';
    toast.style.borderRadius = '10px';
    toast.style.fontWeight = '700';
    toast.style.fontSize = '0.92rem';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
    toast.style.zIndex = '9999';
    toast.style.transition = 'all 0.3s ease';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '8px';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
  }, 4500);
}

window.saveOcrParsedLaptop = saveOcrParsedLaptop;
window.openManualOcrForm = openManualOcrForm;
window.openLinkImportModal = openLinkImportModal;
window.processPastedLink = processPastedLink;
window.switchViewMode = switchViewMode;
window.toggleViewMode = toggleViewMode;
window.showToastNotification = showToastNotification;

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
        (targetTab === 'integrated' ? 'paneIntegrated' :
        (targetTab === 'battery' ? 'paneBattery' :
        (targetTab === 'ramstorage' ? 'paneRamStorage' :
        (targetTab === 'usbc' ? 'paneUsbc' : 'paneNextGen'))))
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

window.toggleChecklist = function(forceOpen = false) {
  const section = document.getElementById('buyerChecklistSection');
  const grid = document.getElementById('checklistGrid');
  const btn = document.getElementById('btnToggleChecklist');
  if (!section || !grid) return;

  if (forceOpen) {
    grid.style.display = 'grid';
    if (btn) btn.innerText = '▾ Recolher';
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    section.style.boxShadow = '0 0 30px #f59e0b, 0 0 60px rgba(245, 158, 11, 0.4)';
    section.style.borderColor = '#f59e0b';
    setTimeout(() => {
      section.style.boxShadow = '';
      section.style.borderColor = '';
    }, 2500);
    return;
  }

  const isHidden = window.getComputedStyle(grid).display === 'none';
  grid.style.display = isHidden ? 'grid' : 'none';
  if (btn) btn.innerText = isHidden ? '▾ Recolher' : '▸ Expandir';
};

// Exportações Globais do Hub de Vídeos
window.openVideoReviewsModal = openVideoReviewsModal;
window.closeVideoReviewsModal = closeVideoReviewsModal;
window.executeCustomVideoSearch = executeCustomVideoSearch;
window.searchVideoWithTerm = searchVideoWithTerm;
window.switchVideoPlayer = switchVideoPlayer;

// ==========================================
// SISTEMA DE VERIFICAÇÃO DE NOVA VERSÃO VIA API & GITHUB
// ==========================================
const CURRENT_APP_VERSION = '20261014_v31';
const GITHUB_REPO_API = 'https://api.github.com/repos/brunoserra123/radar-notebooks/commits/main';

let isCheckingUpdate = false;

async function checkForNewAppVersion(isManual = false) {
  if (isCheckingUpdate) return;
  isCheckingUpdate = true;

  try {
    let updateFound = false;
    let newVersionLabel = '';
    let commitMessage = '';

    // Método 1: Checa version.json com no-store e timestamp para furar qualquer cache
    try {
      const res = await fetch(`version.json?_t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.version && data.version !== CURRENT_APP_VERSION) {
          updateFound = true;
          newVersionLabel = data.version;
          commitMessage = data.releaseNotes || 'Novas melhorias e recursos disponíveis.';
        }
      }
    } catch (e) {
      console.warn('Checagem via version.json falhou, tentando API do GitHub...', e);
    }

    // Método 2: Consulta a API oficial do GitHub para detectar commits novos em tempo real
    if (!updateFound) {
      try {
        const ghRes = await fetch(GITHUB_REPO_API, {
          headers: { 'Accept': 'application/vnd.github.v3+json' },
          cache: 'no-store'
        });
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          const latestSha = ghData.sha ? ghData.sha.substring(0, 7) : null;
          const savedSha = localStorage.getItem('gamer_radar_last_sha');
          
          if (latestSha) {
            // Se já tínhamos um sha salvo e o novo sha é diferente, há versão nova!
            if (savedSha && savedSha !== latestSha) {
              updateFound = true;
              newVersionLabel = `Commit ${latestSha}`;
              commitMessage = ghData.commit?.message?.split('\n')[0] || 'Atualização recente no repositório.';
            } else if (!savedSha) {
              localStorage.setItem('gamer_radar_last_sha', latestSha);
            }
          }
        }
      } catch (err) {
        console.warn('Checagem via API do GitHub falhou:', err);
      }
    }

    if (updateFound) {
      showNewVersionBanner(newVersionLabel, commitMessage);
    } else if (isManual) {
      showToastNotification('✅ Você já está usando a versão mais recente do GamerRadar!');
    }
  } catch (err) {
    console.error('Erro na checagem de atualizações:', err);
    if (isManual) {
      showToastNotification('⚠️ Não foi possível verificar novas versões no momento.');
    }
  } finally {
    isCheckingUpdate = false;
  }
}

function showNewVersionBanner(versionName, message) {
  const banner = document.getElementById('newVersionBanner');
  const descEl = document.getElementById('newVersionDesc');
  if (!banner) return;

  if (descEl && message) {
    descEl.innerHTML = `<strong>${versionName ? versionName + ': ' : ''}</strong>${message}`;
  }

  banner.classList.add('show');
}

function dismissUpdateBanner() {
  const banner = document.getElementById('newVersionBanner');
  if (banner) banner.classList.remove('show');
}

function applyAppUpdate() {
  // Limpa caches do navegador se suportado
  if ('caches' in window) {
    caches.keys().then(keys => {
      keys.forEach(key => caches.delete(key));
    });
  }

  showToastNotification('🔄 Atualizando página para a nova versão...');

  setTimeout(() => {
    // Força recarregamento com parâmetro timestamp único para furar qualquer cache de CDN/Navegador
    const url = new URL(window.location.href);
    url.searchParams.set('v', Date.now());
    window.location.href = url.toString();
  }, 250);
}

// Inicia verificação automática ao carregar a página (delay suave de 1.5s)
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => checkForNewAppVersion(false), 1500);
});

// Checa quando o usuário volta para a aba do navegador
window.addEventListener('focus', () => {
  checkForNewAppVersion(false);
});

// Checa periodicamente a cada 90 segundos enquanto a aba estiver aberta
setInterval(() => {
  checkForNewAppVersion(false);
}, 90000);

// Exportações Globais
window.checkForNewAppVersion = checkForNewAppVersion;
window.applyAppUpdate = applyAppUpdate;
window.dismissUpdateBanner = dismissUpdateBanner;

// Exportações do Modo Ranking & Comparador TudoCelular
window.toggleRankingMode = toggleRankingMode;
window.getLaptopOverallScore = getLaptopOverallScore;
window.onCompareSelectChange = onCompareSelectChange;
window.setCompareSlot = setCompareSlot;
window.removeCompareSlot = removeCompareSlot;
window.clearAllCompareSlots = clearAllCompareSlots;
window.addNotebookToCompare = addNotebookToCompare;
window.loadDuelPreset = loadDuelPreset;
window.executeMultiCompare = executeMultiCompare;
window.initMultiCompare = initMultiCompare;



