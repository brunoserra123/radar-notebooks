# ⚡ GamerRadar - Comparador Inteligente de Notebooks (BR vs EUA)

Site e ferramenta inteligente para comparar preços de notebooks gamer entre o Brasil e os EUA, com cálculo de paridade, motor de equivalência técnica e vigia de preços automático via **Google Apps Script** hospedado gratuitamente no **GitHub Pages**.

---

## 🎯 Faixa de Foco: R$ 8.000 a R$ 8.900
- **No Brasil:** Foco em garantir notebooks com **RTX 4060 com TGP máximo (140W)**, refrigeração com metal líquido e telas de alta qualidade (QHD 165Hz / 100% sRGB), como *Acer Predator Helios Neo 16* e *Lenovo Legion Slim 5*, ou caçar promoções pontuais de **RTX 4070** como o *Dell G16*.
- **Nos EUA (US$ 1.250 a US$ 1.550):** O mesmo valor convertido (via conta global Wise/Nomad com 1.1% de IOF) compra notebooks com **RTX 4070 de linha topo** (*Lenovo Legion Pro 5i*, *Asus ROG Strix G16* com 32GB RAM e tela 240Hz).

---

## 🚀 Como Visualizar Agora no seu Computador
Basta dar **dois cliques** no arquivo [`index.html`](file:///c:/Users/brunoserra/Documents/comprar%20notebook%20e%20qual%20comprar/index.html) para abrir direto no seu navegador Chrome, Edge ou Brave! Não precisa instalar nada.

---

## 🌐 Como Publicar no GitHub Pages (100% Gratuito)
1. Crie um novo repositório no seu GitHub (ex: `notebook-radar`).
2. Suba os arquivos desta pasta:
   - `index.html`
   - `styles.css`
   - `app.js`
3. No GitHub, vá em **Settings** > **Pages** (no menu lateral esquerdo).
4. Em **Build and deployment**, selecione **Branch: main** e pasta **/ (root)** e clique em **Save**.
5. Pronto! Em 1 minuto seu site estará online no link:
   `https://seu-usuario.github.io/notebook-radar/`

---

## ☁️ Como Configurar o Robô Vigia no Google Sheets + Apps Script

O arquivo [`google_apps_script.js`](file:///c:/Users/brunoserra/Documents/comprar%20notebook%20e%20qual%20comprar/google_apps_script.js) já está 100% pronto.

### Passo a passo:
1. Abra o [Google Planilhas](https://sheets.new) e crie uma nova planilha.
2. No menu superior, clique em **Extensões** > **Apps Script**.
3. Apague o código que estiver lá e cole todo o conteúdo do arquivo [`google_apps_script.js`](file:///c:/Users/brunoserra/Documents/comprar%20notebook%20e%20qual%20comprar/google_apps_script.js).
4. No topo, selecione a função `popularDadosIniciais` e clique em **Executar** (isso vai preencher a planilha com os dados recomendados automaticamente).
5. **Para ativar o Robô Vigia:**
   - No menu esquerdo do Apps Script, clique no ícone de **Relógio** (Acionadores / Triggers).
   - Clique em **+ Adicionar acionador**.
   - Escolha a função: `verificarPrecos`.
   - Origem do evento: **Baseado no tempo** > **Temporizador por horas** (a cada 4 ou 6 horas).
   - Pronto! O Google vai verificar os preços na nuvem e te mandar um e-mail com aviso se o preço atingir seu alvo!
6. **Para conectar ao seu site no GitHub Pages:**
   - No Apps Script, clique no botão azul **Implantar** > **Nova implantação**.
   - Tipo: **App da Web**.
   - Quem tem acesso: **Qualquer pessoa** (*Anyone*).
   - Clique em **Implantar** e copie a URL gerada (`https://script.google.com/macros/s/.../exec`).
   - No seu site, clique no botão **☁️ Conectar Google Sheets**, cole a URL e clique em Salvar!
