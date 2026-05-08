
const RAW = [["Bướm", "🦋", "côn trùng", "bay nhẹ quanh hoa", "đôi cánh nhiều màu", "lúc nhỏ là sâu xanh", "uống mật hoa ngọt"], ["Mèo", "🐱", "thú cưng", "kêu meo meo", "mắt tròn long lanh", "thích cuộn tròn ngủ", "bắt chuột rất nhanh"], ["Chó", "🐶", "thú cưng", "sủa gâu gâu", "trung thành giữ nhà", "vẫy đuôi mừng bé", "chạy nhảy rất vui"], ["Thỏ", "🐰", "động vật nhỏ", "tai dài xinh xắn", "thích ăn cà rốt", "nhảy nhanh trên cỏ", "lông mềm như bông"], ["Cá", "🐟", "dưới nước", "bơi trong làn nước", "có vây có đuôi", "không đi trên cạn", "thích hồ ao xanh"], ["Chim", "🐦", "trên trời", "hót líu lo vui", "có cánh biết bay", "làm tổ trên cây", "thức dậy sớm mai"], ["Voi", "🐘", "rừng xanh", "thân hình to lớn", "có chiếc vòi dài", "tai rộng như quạt", "bước đi chậm rãi"], ["Sư tử", "🦁", "rừng xanh", "bờm vàng oai vệ", "tiếng gầm vang xa", "được gọi chúa sơn lâm", "mạnh mẽ giữa rừng"], ["Rùa", "🐢", "ao hồ", "mang mai trên lưng", "đi chậm từng bước", "có thể sống lâu", "thích nằm phơi nắng"], ["Gấu", "🐻", "rừng xanh", "thân to lông dày", "thích mật ong ngọt", "ngủ đông thật lâu", "đi bằng bốn chân"], ["Bò", "🐮", "nông trại", "kêu ùm bò vui", "cho sữa trắng thơm", "ăn cỏ ngoài đồng", "hiền lành chăm chỉ"], ["Heo", "🐷", "nông trại", "mũi tròn hồng hồng", "kêu ụt ịt vui", "thích nằm trong chuồng", "ăn khỏe mỗi ngày"], ["Gà", "🐔", "nông trại", "gáy ò ó o", "đẻ trứng cho bé", "bới đất tìm mồi", "có mào đỏ tươi"], ["Vịt", "🦆", "ao hồ", "kêu cạp cạp vui", "bơi trên mặt nước", "chân có màng mỏng", "lông mềm không ướt"], ["Ngựa", "🐴", "đồng cỏ", "chạy nhanh trên đường", "có bờm thật đẹp", "kêu hí vang vang", "chở người đi xa"], ["Cừu", "🐑", "đồng cỏ", "lông xoăn trắng mềm", "kêu be be nhỏ", "ăn cỏ trên đồi", "đi theo cả đàn"], ["Dê", "🐐", "đồi núi", "có râu dưới cằm", "leo núi rất khéo", "kêu be be vui", "thích ăn lá cây"], ["Ong", "🐝", "côn trùng", "bay quanh vườn hoa", "làm mật ngọt thơm", "có sọc vàng đen", "chăm chỉ mỗi ngày"], ["Ếch", "🐸", "ao hồ", "kêu ộp ộp vang", "nhảy xa trên lá", "sống gần bờ ao", "bắt muỗi rất nhanh"], ["Khỉ", "🐵", "rừng xanh", "leo cây rất giỏi", "thích ăn chuối vàng", "nhanh nhẹn tinh nghịch", "đuôi dài đung đưa"], ["Gấu trúc", "🐼", "rừng tre", "lông trắng pha đen", "thích ăn cây tre", "mắt tròn dễ thương", "đi chậm lững thững"], ["Chim cánh cụt", "🐧", "vùng lạnh", "đi lạch bạch vui", "không bay trên trời", "bơi giỏi dưới nước", "mặc áo đen trắng"], ["Cá heo", "🐬", "biển", "bơi nhanh ngoài biển", "thông minh thân thiện", "nhảy lên khỏi sóng", "phát tiếng gọi nhau"], ["Cá voi", "🐋", "biển", "thân hình khổng lồ", "phun nước lên cao", "sống giữa đại dương", "hát bài ca biển"], ["Cá mập", "🦈", "biển", "răng sắc thật nhiều", "bơi mạnh dưới biển", "vây nhô trên sóng", "là thợ săn nhanh"], ["Bạch tuộc", "🐙", "biển", "có tám chiếc tay", "ẩn mình dưới đáy", "phun mực khi sợ", "thân mềm kỳ lạ"], ["Cua", "🦀", "biển", "đi ngang rất vui", "có hai càng kẹp", "sống gần bãi cát", "vỏ cứng bảo vệ"], ["Ốc sên", "🐌", "vườn cây", "mang nhà trên lưng", "bò chậm trên lá", "thích nơi ẩm mát", "để lại vệt dài"], ["Bọ rùa", "🐞", "côn trùng", "áo đỏ chấm đen", "bé xíu trên lá", "giúp vườn thêm xinh", "bay nhẹ khi nắng"], ["Chuồn chuồn", "🌼", "côn trùng", "bay thấp báo mưa", "cánh mỏng trong veo", "đậu trên ngọn cỏ", "bay nhanh bên ao"], ["Kiến", "🐜", "côn trùng", "bé nhỏ chăm làm", "đi thành hàng dài", "tha mồi về tổ", "sống cùng bạn bè"], ["Hươu cao cổ", "🦒", "đồng cỏ", "cổ dài thật cao", "ăn lá trên cây", "đốm vàng trên thân", "bước đi thong thả"], ["Ngựa vằn", "🦓", "đồng cỏ", "áo sọc trắng đen", "chạy trên đồng cỏ", "sống theo bầy đàn", "giống ngựa ngoài xa"], ["Chuột túi", "🦘", "đồng cỏ", "nhảy bằng chân sau", "có túi trước bụng", "mang con nhỏ xinh", "sống nơi xa lạ"], ["Gấu túi", "🐨", "rừng cây", "ôm cây ngủ ngoan", "thích lá bạch đàn", "mặt tròn dễ mến", "sống trên cành cao"], ["Cáo", "🦊", "rừng xanh", "đuôi dài mềm mại", "màu cam thật đẹp", "nhanh trí trong rừng", "đi nhẹ ban đêm"], ["Sói", "🐺", "rừng xanh", "tru dài trong đêm", "sống cùng bầy đàn", "chạy nhanh săn mồi", "giống chó hoang dã"], ["Hươu", "🦌", "rừng xanh", "có sừng trên đầu", "chạy nhẹ qua rừng", "mắt hiền long lanh", "ăn lá và cỏ"], ["Chuột", "🐭", "động vật nhỏ", "bé xíu chạy nhanh", "thích gặm hạt nhỏ", "tai tròn mũi nhọn", "nấp trong góc nhà"], ["Hamster", "🐹", "thú cưng", "má phồng đáng yêu", "chạy trong bánh xe", "ăn hạt bé xinh", "ngủ trong nhà nhỏ"], ["Thiên nga", "🦢", "ao hồ", "cổ dài duyên dáng", "bơi trên mặt hồ", "lông trắng mịn màng", "đẹp như nàng thơ"], ["Công", "🦚", "rừng xanh", "xòe đuôi rực rỡ", "lông màu lấp lánh", "điệu đà khoe sắc", "như chiếc quạt hoa"], ["Cú mèo", "🦉", "ban đêm", "mắt tròn thật to", "thức vào ban đêm", "bay êm không tiếng", "đậu trên cành cây"], ["Vẹt", "🦜", "rừng xanh", "lông màu sặc sỡ", "có thể bắt chước", "nói vài tiếng vui", "đậu trên vai người"], ["Đại bàng", "🦅", "bầu trời", "bay cao trên núi", "mắt nhìn rất xa", "đôi cánh mạnh mẽ", "săn mồi rất giỏi"], ["Cá sấu", "🐊", "sông nước", "răng sắc thật dài", "nằm im dưới nước", "da dày màu xanh", "đuôi khỏe quẫy mạnh"], ["Rắn", "🐍", "rừng xanh", "trườn dài trên đất", "không có chân đi", "lột da khi lớn", "ẩn mình trong cỏ"], ["Thằn lằn", "🦎", "vườn cây", "chạy nhanh trên tường", "đuôi dài nhỏ xinh", "bắt côn trùng bé", "phơi nắng ban ngày"], ["Khủng long", "🦕", "cổ xưa", "sống từ rất lâu", "thân hình to lớn", "nay chỉ còn hóa thạch", "bé thấy trong sách"], ["Hổ", "🐯", "rừng xanh", "áo vằn cam đen", "gầm vang trong rừng", "chạy nhanh mạnh mẽ", "là mèo lớn oai"], ["Báo", "🐆", "rừng xanh", "đốm đen trên mình", "chạy nhanh như gió", "leo cây rất giỏi", "săn mồi ban đêm"], ["Hà mã", "🦛", "sông nước", "miệng to thật rộng", "thích ngâm dưới nước", "thân tròn nặng nề", "sống bên bờ sông"], ["Tê giác", "🦏", "đồng cỏ", "có sừng trên mũi", "da dày chắc khỏe", "bước đi vững vàng", "ăn cỏ ngoài đồng"], ["Lạc đà", "🐫", "sa mạc", "có bướu trên lưng", "đi qua cát nóng", "chịu khát rất lâu", "chở người qua sa mạc"], ["Hồng hạc", "🦩", "ao hồ", "đứng bằng một chân", "lông hồng rực rỡ", "cổ dài cong cong", "sống gần đầm nước"], ["Hải cẩu", "🦭", "biển lạnh", "bơi giỏi dưới nước", "nằm nghỉ trên băng", "thân tròn đáng yêu", "kêu vang bên biển"], ["Sao biển", "⭐", "biển", "hình ngôi sao xinh", "nằm dưới đáy biển", "không chạy không bay", "có năm cánh nhỏ"], ["Sứa", "🪼", "biển", "trong veo mềm mại", "trôi theo làn nước", "có tua dài nhẹ", "như chiếc ô xinh"], ["Nhím", "🦔", "vườn cây", "lưng đầy gai nhỏ", "cuộn tròn khi sợ", "đi chậm ban đêm", "ăn côn trùng bé"], ["Sóc", "🐿️", "rừng cây", "đuôi bông xù xinh", "nhảy nhanh trên cành", "thích hạt dẻ nhỏ", "giấu thức ăn vui"], ["Dơi", "🦇", "ban đêm", "bay khi trời tối", "ngủ treo trên cao", "dùng tai nghe giỏi", "không phải là chim"], ["Gà trống", "🐓", "nông trại", "gáy vang sáng sớm", "mào đỏ trên đầu", "đi quanh sân nhỏ", "đánh thức mọi người"], ["Tôm hùm", "🦞", "biển", "càng to thật khỏe", "vỏ đỏ khi nấu", "sống dưới đáy biển", "bò chậm trong hang"], ["Tôm", "🦐", "sông biển", "thân cong bé nhỏ", "bơi lùi thật nhanh", "có râu dài mảnh", "sống ở ao hồ"], ["Mực", "🦑", "biển", "bơi nhanh dưới nước", "phun mực khi sợ", "có nhiều chiếc tua", "thân mềm thon dài"], ["Bọ cạp", "🦂", "sa mạc", "đuôi cong có nọc", "càng nhỏ phía trước", "bò trên cát nóng", "ẩn mình ban ngày"], ["Nhện", "🕷️", "côn trùng", "giăng tơ thành lưới", "có tám chiếc chân", "bắt mồi rất khéo", "nấp trong góc nhỏ"], ["Muỗi", "🦟", "côn trùng", "bay vo ve nhỏ", "thích nơi ẩm thấp", "chích làm bé ngứa", "bé cần mắc màn"], ["Ruồi", "🪰", "côn trùng", "bay nhanh quanh nhà", "đậu lên đồ ăn", "bé cần giữ sạch", "tiếng vo ve nhỏ"], ["Giun đất", "🪱", "trong đất", "sống trong đất mềm", "không chân vẫn bò", "giúp đất thêm tốt", "thân dài nhỏ xíu"], ["Rái cá", "🦦", "sông nước", "bơi lội rất khéo", "thích ăn cá nhỏ", "nằm ngửa trên nước", "lông mượt đáng yêu"], ["Hải ly", "🦫", "sông nước", "xây đập bằng gỗ", "răng khỏe gặm cây", "đuôi bẹt đặc biệt", "sống gần dòng suối"], ["Gấu mèo", "🦝", "rừng cây", "mặt như đeo kính", "tay nhỏ rất khéo", "thích tìm thức ăn", "đi chơi ban đêm"], ["Chồn hôi", "🦨", "rừng cây", "đuôi bông trắng đen", "khi sợ có mùi", "đi chậm ban đêm", "áo sọc đặc biệt"], ["Lười", "🦥", "rừng cây", "di chuyển rất chậm", "treo mình trên cây", "ngủ nhiều mỗi ngày", "mặt hiền dễ thương"], ["Đười ươi", "🦧", "rừng cây", "tay dài leo giỏi", "lông cam rực rỡ", "thông minh hiền lành", "sống trong rừng sâu"], ["Khỉ đột", "🦍", "rừng xanh", "thân to mạnh mẽ", "ngực rộng vạm vỡ", "sống cùng gia đình", "ăn lá và quả"], ["Lừa", "🫏", "nông trại", "tai dài hơn ngựa", "chở đồ chăm chỉ", "kêu vang ngoài sân", "bước đi bền bỉ"], ["Trâu", "🐃", "đồng ruộng", "sừng cong chắc khỏe", "kéo cày ngoài ruộng", "thích tắm bùn mát", "hiền lành chăm chỉ"], ["Bò rừng", "🦬", "đồng cỏ", "lông dày trước ngực", "đầu to mạnh mẽ", "sống thành đàn lớn", "chạy trên thảo nguyên"], ["Nai sừng tấm", "🫎", "rừng lạnh", "sừng rộng như quạt", "thân cao to lớn", "sống gần hồ nước", "ăn lá cây mềm"], ["Tuần lộc", "🦌", "vùng lạnh", "kéo xe mùa đông", "có sừng xinh đẹp", "sống nơi tuyết trắng", "ăn rêu và cỏ"], ["Lạc đà alpaca", "🦙", "núi cao", "lông mềm bông xù", "mặt hiền dễ mến", "sống theo đàn nhỏ", "thích khí trời mát"], ["Thú mỏ vịt", "🦆", "sông nước", "mỏ giống vịt con", "thân như thú nhỏ", "bơi trong dòng suối", "đẻ trứng rất lạ"], ["Vượn cáo", "🐒", "rừng cây", "đuôi vòng sọc xinh", "nhảy giữa cành cây", "mắt tròn thật to", "sống theo bầy vui"], ["Chồn đất", "🐾", "sa mạc", "đứng thẳng canh chừng", "sống cùng gia đình", "đào hang dưới cát", "mắt nhìn thật nhanh"], ["Linh dương", "🦌", "đồng cỏ", "chạy nhanh như gió", "chân thon nhẹ nhàng", "sừng cong xinh xắn", "sống trên thảo nguyên"], ["Bò yak", "🐂", "núi cao", "lông dài thật dày", "sống nơi lạnh giá", "chở đồ trên núi", "ăn cỏ thung lũng"], ["Đà điểu", "🐦", "đồng cỏ", "chạy nhanh nhất loài chim", "cổ dài chân khỏe", "trứng to thật lớn", "không bay trên trời"], ["Chim kiwi", "🐦", "rừng cây", "mỏ dài tìm mồi", "không bay lên cao", "bé nhỏ ban đêm", "lông mềm màu nâu"], ["Bồ nông", "🐦", "ao hồ", "túi mỏ thật rộng", "bắt cá rất nhanh", "bay qua mặt nước", "sống gần biển hồ"], ["Cò", "🐦", "đồng ruộng", "chân dài mảnh khảnh", "đứng giữa ruộng xanh", "mỏ dài bắt cá", "bay về lúc chiều"], ["Cá ngựa", "🪸", "biển", "hình như chú ngựa", "bơi đứng thật lạ", "sống giữa rong biển", "bé nhỏ dưới nước"], ["Lươn", "🐍", "sông nước", "thân dài trơn bóng", "sống dưới bùn mềm", "bơi uốn như rắn", "không có chân đi"], ["Cá đuối", "🐟", "biển", "thân dẹt như quạt", "bơi nhẹ đáy biển", "đuôi dài phía sau", "trông như cánh bay"], ["San hô", "🪸", "biển", "như vườn dưới nước", "nhiều màu rực rỡ", "là nhà của cá", "sống bám thành cụm"], ["Kỳ nhông", "🦎", "rừng cây", "mào nhọn trên lưng", "thích phơi nắng ấm", "ăn lá cây xanh", "đuôi dài chắc khỏe"], ["Bọ cánh cứng", "🪲", "côn trùng", "vỏ cứng trên lưng", "bò trên thân cây", "có cánh bên trong", "bé nhỏ mà khỏe"], ["Dế", "🦗", "đồng cỏ", "gáy vang trong đêm", "nhảy nhanh trên cỏ", "chân sau rất khỏe", "sống trong hang nhỏ"], ["Cá chép", "🐟", "ao hồ", "bơi lội nhẹ nhàng", "vảy óng ánh đẹp", "sống dưới làn nước", "thường thấy trong ao"]];
const ANIMALS = RAW.map((x, i) => ({
  id: "a" + i,
  name: x[0],
  emoji: x[1],
  habitat: x[2],
  facts: [x[3], x[4], x[5], x[6]],
  videoUrl: "",
  poem: [
    "Bé thấy " + x[3] + ",",
    "Con này có " + x[4] + ",",
    x[5].charAt(0).toUpperCase() + x[5].slice(1) + ",",
    "Bé đoán xem đó là con gì?"
  ],
  desc: x[0] + " là một con vật rất thú vị. Bé có thể nhận ra " + x[0] + " qua đặc điểm: " + x[3] + ", " + x[4] + ". " + x[0] + " thường sống ở " + x[2] + " và có cách sinh hoạt rất riêng."
}));

const app = document.getElementById("app");
const fxLayer = document.getElementById("fxLayer");
let index = Number(localStorage.getItem("animal_pro_index") || 0);
let score = Number(localStorage.getItem("animal_pro_score") || 0);
let unlocked = new Set(JSON.parse(localStorage.getItem("animal_pro_unlocked") || "[]"));

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function choicesFor(animal) {
  const wrong = shuffle(ANIMALS.filter(x => x.id !== animal.id)).slice(0, 3);
  return shuffle([animal, ...wrong]);
}

function saveState() {
  localStorage.setItem("animal_pro_score", String(score));
  localStorage.setItem("animal_pro_index", String(index));
  localStorage.setItem("animal_pro_unlocked", JSON.stringify([...unlocked]));
}

function render() {
  const animal = ANIMALS[index % ANIMALS.length];
  const choices = choicesFor(animal);
  app.innerHTML = `
    <section class="screen">
      <header class="top">
        <div>
          <h1>🥚 Bé Đoán Con Vật</h1>
          <p>Trứng thần kỳ • Vuốt lên/xuống • ${index + 1}/100</p>
        </div>
        <div class="score">⭐ ${score}</div>
      </header>

      <div class="mystery">
        <div class="eggWrap" id="eggWrap">
          <div class="egg">
            <div class="crack">
              <svg viewBox="0 0 100 130" fill="none">
                <path d="M50 2 L42 25 L58 42 L45 61 L55 78 L43 100 L50 128" stroke="#7d5a20" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="eggEye">${animal.emoji}</div>
        </div>
        <div class="shadowAnimal" id="shadowAnimal">${animal.emoji}</div>
        <button class="openBtn" id="openBtn">Chạm để trứng nứt</button>
      </div>

      <div class="poemCard">
        ${animal.poem.map((line, i) => `<p style="--d:${i}">${i+1}. ${line}</p>`).join("")}
      </div>

      <div class="answers">
        ${choices.map(c => `<button class="answer" data-id="${c.id}">${c.emoji} ${c.name}</button>`).join("")}
      </div>

      <article class="infoCard hidden" id="infoCard">
        <div class="animalHero">${animal.emoji}</div>
        <h2>${animal.name}</h2>
        <p>${animal.desc}</p>
        <div class="chips">
          <span>🏡 ${animal.habitat}</span>
          <span>📚 Đã mở khóa ${unlocked.size}/100</span>
        </div>
        <div class="cardActions">
          <button class="videoBtn" id="videoBtn">▶ Video 5 giây</button>
          <button class="nextBtn" id="nextBtn">Câu tiếp theo ➜</button>
        </div>
      </article>
    </section>
  `;

  document.getElementById("openBtn").onclick = crackEgg;
  document.querySelectorAll(".answer").forEach(btn => btn.onclick = () => checkAnswer(btn, animal));
  bindSwipe();
}

function crackEgg() {
  const egg = document.getElementById("eggWrap");
  egg.classList.add("peeking");
  playTinyMagic();
}

function revealEgg() {
  const egg = document.getElementById("eggWrap");
  egg.classList.add("peeking");
  setTimeout(() => {
    egg.classList.add("opened");
    document.getElementById("shadowAnimal").classList.add("show");
  }, 280);
}

function checkAnswer(btn, animal) {
  const ok = btn.dataset.id === animal.id;
  if (ok) {
    btn.classList.add("correct");
    score++;
    unlocked.add(animal.id);
    saveState();
    playWinSound();
    firework();
    revealEgg();
    document.getElementById("infoCard").classList.remove("hidden");
    document.getElementById("nextBtn").onclick = next;
    document.getElementById("videoBtn").onclick = () => showVideo(animal);
    [...document.querySelectorAll(".answer")].forEach(b => b.disabled = true);
    setTimeout(() => showVideo(animal), 850);
  } else {
    btn.classList.add("wrong");
    playBombSound();
    bombFx();
    const old = btn.textContent;
    btn.textContent = "💣 Bé thử lại nhé";
    setTimeout(() => { btn.classList.remove("wrong"); btn.textContent = old; }, 950);
  }
}

function next() {
  index = (index + 1) % ANIMALS.length;
  saveState();
  render();
}

function prev() {
  index = (index - 1 + ANIMALS.length) % ANIMALS.length;
  saveState();
  render();
}

function bindSwipe() {
  let startY = 0;
  let active = false;
  const screen = document.querySelector(".screen");
  screen.addEventListener("pointerdown", e => { startY = e.clientY; active = true; });
  screen.addEventListener("pointerup", e => {
    if (!active) return;
    active = false;
    const dy = e.clientY - startY;
    if (Math.abs(dy) < 80) return;
    if (document.querySelector(".videoModal")) return;
    if (dy < 0) next();
    else prev();
  });
}

function showVideo(animal) {
  const modal = document.createElement("div");
  modal.className = "videoModal";
  const videoHtml = animal.videoUrl
    ? `<video id="animalVideo" src="${animal.videoUrl}" autoplay muted playsinline></video>`
    : `<div class="videoFallback">${animal.emoji}</div>`;
  modal.innerHTML = `
    <div class="videoBox">
      <h2>Video 5 giây: ${animal.name}</h2>
      <div class="videoFrame">${videoHtml}</div>
      <div class="videoTimer"><span></span></div>
      <button class="nextBtn" id="closeVideoBtn">Đóng</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById("closeVideoBtn").onclick = () => modal.remove();
  const v = document.getElementById("animalVideo");
  if (v) {
    v.currentTime = 0;
    v.play().catch(() => {});
    setTimeout(() => { v.pause(); modal.remove(); }, 5000);
  } else {
    setTimeout(() => modal.remove(), 5000);
  }
}

function audioCtx() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  return new Ctx();
}

function tone(ctx, freq, start, dur, type="sine", gain=.08) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
  g.gain.setValueAtTime(0.0001, ctx.currentTime + start);
  g.gain.exponentialRampToValueAtTime(gain, ctx.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
  osc.connect(g); g.connect(ctx.destination);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + dur + 0.03);
}

function playWinSound() {
  const ctx = audioCtx(); if (!ctx) return;
  tone(ctx, 523, 0, .16, "triangle", .09);
  tone(ctx, 659, .12, .18, "triangle", .09);
  tone(ctx, 784, .25, .22, "triangle", .1);
  tone(ctx, 1046, .43, .32, "triangle", .08);
}

function playTinyMagic() {
  const ctx = audioCtx(); if (!ctx) return;
  tone(ctx, 880, 0, .08, "sine", .04);
  tone(ctx, 1320, .08, .12, "sine", .04);
}

function playBombSound() {
  const ctx = audioCtx(); if (!ctx) return;
  tone(ctx, 180, 0, .25, "sawtooth", .08);
  tone(ctx, 120, .22, .35, "sawtooth", .09);
  tone(ctx, 70, .48, .25, "square", .08);
}

function firework() {
  const icons = ["⭐","🌟","✨","💖","🎉","🌈"];
  for (let i=0;i<64;i++) {
    const p = document.createElement("span");
    p.className = "fxStar";
    p.textContent = icons[Math.floor(Math.random()*icons.length)];
    p.style.left = Math.random()*100 + "vw";
    p.style.animationDelay = Math.random()*0.4 + "s";
    p.style.fontSize = (18 + Math.random()*22) + "px";
    fxLayer.appendChild(p);
    setTimeout(() => p.remove(), 1800);
  }
}

function bombFx() {
  const overlay = document.createElement("div");
  overlay.className = "bombOverlay";
  overlay.innerHTML = `<div class="bomb">💣</div>`;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.innerHTML = `<div class="boom">💥</div>`, 1100);
  setTimeout(() => overlay.remove(), 1750);
}

render();
