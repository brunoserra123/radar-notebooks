/**
 * GamerRadar - Robô Vigia no Google Apps Script (100% Gratuito na Nuvem)
 * 
 * COMO FUNCIONA:
 * 1. Crie uma Planilha no Google Sheets (ex: "Radar Notebooks Gamer").
 * 2. Cole as colunas na Linha 1:
 *    [ID, Nome, GPU, CPU, RAM, Tela, PrecoBR, PrecoUS, LojaBR, LojaUS, UrlBR, UrlUS, AlertaPrecoBR]
 * 3. Vá em Extensões > Apps Script e cole este código.
 * 4. Configure um Acionador (Trigger) para rodar "verificarPrecos()" a cada 4 ou 6 horas.
 * 5. Clique em 'Implantar' > 'Nova implantação' > 'App da Web' para gerar a URL da API que o seu site no GitHub Pages vai ler!
 */

// 1. ENDPOINT PARA O GITHUB PAGES LER OS DADOS EM JSON
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) {
    return ContentService.createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  var headers = data[0];
  var laptops = [];
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var laptop = {
      id: row[0] || ('gas-' + i),
      name: row[1],
      gpu: row[2],
      cpu: row[3],
      ram: row[4],
      screen: row[5],
      priceBr: Number(row[6]) || 0,
      priceUs: Number(row[7]) || 0,
      storeBr: row[8],
      storeUs: row[9],
      urlBr: row[10],
      urlUs: row[11],
      targetAlertBr: Number(row[12]) || 0,
      lastUpdated: row[13] || new Date().toLocaleDateString('pt-BR')
    };
    laptops.push(laptop);
  }
  
  var output = ContentService.createTextOutput(JSON.stringify(laptops));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

// 2. ROBÔ QUE VIGIA PREÇOS AUTOMATICAMENTE (RODA SOZINHO NA NUVEM)
function verificarPrecos() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var userEmail = Session.getActiveUser().getEmail();
  var alertasEnviados = [];

  for (var i = 1; i < data.length; i++) {
    var nome = data[i][1];
    var precoAtualBr = Number(data[i][6]);
    var precoAlvo = Number(data[i][12]);
    var urlBr = data[i][10];

    // Se o preço atual caiu abaixo ou igual ao seu teto de alerta
    if (precoAlvo > 0 && precoAtualBr > 0 && precoAtualBr <= precoAlvo) {
      alertasEnviados.push({
        nome: nome,
        preco: precoAtualBr,
        alvo: precoAlvo,
        link: urlBr
      });
    }
  }

  // Se houver alguma oferta no radar, envia e-mail com aviso imediato!
  if (alertasEnviados.length > 0 && userEmail) {
    var assunto = "🚨 [GamerRadar] Oferta Detectada! Notebook no Preço Alvo!";
    var corpo = "Boas notícias! O robô detectou notebooks que atingiram seu preço-alvo:\n\n";

    for (var j = 0; j < alertasEnviados.length; j++) {
      var item = alertasEnviados[j];
      corpo += "⚡ " + item.nome + "\n";
      corpo += "Preço Atual: R$ " + item.preco + " (Seu alvo era: R$ " + item.alvo + ")\n";
      corpo += "Link: " + item.link + "\n\n";
    }

    corpo += "Acesse seu radar no GitHub Pages para ver o comparativo completo!";
    MailApp.sendEmail(userEmail, assunto, corpo);
    Logger.log("Alerta enviado com sucesso para: " + userEmail);
  }
}

// 3. POPULAR PLANILHA COM OS DADOS RECOMENDADOS INICIAIS
function popularDadosIniciais() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  
  var cabecalho = [
    ["ID", "Nome", "GPU", "CPU", "RAM", "Tela", "PrecoBR", "PrecoUS", "LojaBR", "LojaUS", "UrlBR", "UrlUS", "AlertaPrecoBR", "UltimaAtualizacao"]
  ];
  
  var dados = [
    ["predator-neo-16", "Acer Predator Helios Neo 16", "RTX 4060 (140W)", "i7-14700HX", "16GB DDR5", "16 QHD 165Hz", 8299, 1199, "Kabum / Acer", "Best Buy", "https://kabum.com.br", "https://bestbuy.com", 7999, "Hoje"],
    ["dell-g16", "Dell G16 7630", "RTX 4070 (140W)", "i7-13650HX", "16GB DDR5", "16 QHD 240Hz", 8799, 1299, "Dell BR", "Dell US", "https://dell.com.br", "https://dell.com", 8499, "Hoje"],
    ["legion-slim-5", "Lenovo Legion Slim 5", "RTX 4060 (140W)", "Ryzen 7 8845HS", "16GB DDR5", "16 WQXGA 165Hz", 8499, 1249, "Lenovo BR", "B&H Photo", "https://lenovo.com/br", "https://bhphotovideo.com", 8199, "Hoje"],
    ["asus-tuf-a15", "ASUS TUF Gaming A15", "RTX 4070 (140W)", "Ryzen 9 8945HS", "16GB DDR5", "15.6 WQHD 165Hz", 8699, 1149, "Kabum", "Best Buy", "https://kabum.com.br", "https://bestbuy.com", 8299, "Hoje"],
    ["legion-pro-5i", "Lenovo Legion Pro 5i", "RTX 4070 (140W)", "i7-14700HX", "32GB DDR5", "16 240Hz 500nits", 11499, 1449, "Importação BR", "Micro Center", "https://google.com", "https://microcenter.com", 8500, "Hoje"],
    ["acer-nitro-16", "Acer Nitro 16", "RTX 4060 (140W)", "Ryzen 7 7735HS", "16GB DDR5", "16 165Hz 100% sRGB", 7299, 999, "Kabum", "Amazon US", "https://kabum.com.br", "https://amazon.com", 6999, "Hoje"]
  ];
  
  sheet.getRange(1, 1, 1, cabecalho[0].length).setValues(cabecalho);
  sheet.getRange(2, 1, dados.length, dados[0].length).setValues(dados);
  sheet.getRange(1, 1, 1, cabecalho[0].length).setFontWeight("bold").setBackground("#121824").setFontColor("#38bdf8");
}
