
const ANIMAL_IMAGES = {
  "Bướm": "assets/animals/butterfly.webp",
  "Mèo": "assets/animals/cat.webp",
  "Chó": "assets/animals/dog.webp",
  "Thỏ": "assets/animals/rabbit.webp",
  "Cá": "assets/animals/fish.webp",
  "Chim": "assets/animals/bird.webp",
  "Voi": "assets/animals/elephant.webp",
  "Sư tử": "assets/animals/lion.webp",
  "Rùa": "assets/animals/turtle.webp",
  "Gấu": "assets/animals/bear.webp",
  "Bò": "assets/animals/cow.webp",
  "Heo": "assets/animals/pig.webp",
  "Gà": "assets/animals/chicken.webp",
  "Vịt": "assets/animals/duck.webp",
  "Ngựa": "assets/animals/horse.webp",
  "Cừu": "assets/animals/sheep.webp",
  "Dê": "assets/animals/goat.webp",
  "Ong": "assets/animals/bee.webp",
  "Ếch": "assets/animals/frog.webp",
  "Khỉ": "assets/animals/monkey.webp",
  "Gấu trúc": "assets/animals/panda.webp",
  "Chim cánh cụt": "assets/animals/penguin.webp",
  "Cá heo": "assets/animals/dolphin.webp",
  "Cá voi": "assets/animals/whale.webp",
  "Cá mập": "assets/animals/shark.webp",
  "Bạch tuộc": "assets/animals/octopus.webp",
  "Cua": "assets/animals/crab.webp",
  "Ốc sên": "assets/animals/snail.webp",
  "Bọ rùa": "assets/animals/ladybug.webp",
  "Chuồn chuồn": "assets/animals/dragonfly.webp",
  "Kiến": "assets/animals/ant.webp",
  "Hươu cao cổ": "assets/animals/giraffe.webp",
  "Ngựa vằn": "assets/animals/zebra.webp",
  "Chuột túi": "assets/animals/kangaroo.webp",
  "Gấu túi": "assets/animals/koala.webp",
  "Cáo": "assets/animals/fox.webp",
  "Sói": "assets/animals/wolf.webp",
  "Hươu": "assets/animals/deer.webp",
  "Chuột": "assets/animals/mouse.webp",
  "Thiên nga": "assets/animals/swan.webp",
  "Công": "assets/animals/peacock.webp",
  "Cú mèo": "assets/animals/owl.webp",
  "Vẹt": "assets/animals/parrot.webp",
  "Đại bàng": "assets/animals/eagle.webp",
  "Cá sấu": "assets/animals/crocodile.webp",
  "Rắn": "assets/animals/snake.webp",
  "Thằn lằn": "assets/animals/lizard.webp",
  "Hổ": "assets/animals/tiger.webp",
  "Báo": "assets/animals/leopard.webp",
  "Hà mã": "assets/animals/hippo.webp",
  "Tê giác": "assets/animals/rhino.webp",
  "Lạc đà": "assets/animals/camel.webp",
  "Hồng hạc": "assets/animals/flamingo.webp",
  "Hải cẩu": "assets/animals/seal.webp",
  "Sao biển": "assets/animals/starfish.webp",
  "Sứa": "assets/animals/jellyfish.webp",
  "Nhím": "assets/animals/porcupine.webp",
  "Sóc": "assets/animals/squirrel.webp",
  "Dơi": "assets/animals/bat.webp",
  "Tôm": "assets/animals/shrimp.webp",
  "Mực": "assets/animals/squid.webp",
  "Nhện": "assets/animals/spider.webp",
  "Muỗi": "assets/animals/mosquito.webp",
  "Ruồi": "assets/animals/fly.webp",
  "Giun đất": "assets/animals/earthworm.webp",
  "Rái cá": "assets/animals/otter.webp",
  "Hải ly": "assets/animals/beaver.webp",
  "Gấu mèo": "assets/animals/raccoon.webp",
  "Lừa": "assets/animals/donkey.webp",
  "Trâu": "assets/animals/buffalo.webp",
  "Tuần lộc": "assets/animals/reindeer.webp",
  "Lạc đà alpaca": "assets/animals/alpaca.webp",
  "Linh dương": "assets/animals/antelope.webp",
  "Đà điểu": "assets/animals/ostrich.webp",
  "Chim kiwi": "assets/animals/kiwi.webp",
  "Cá ngựa": "assets/animals/seahorse.webp",
  "Cá đuối": "assets/animals/manta_ray.webp",
  "San hô": "assets/animals/coral.webp",
  "Kỳ nhông": "assets/animals/iguana.webp",
  "Bọ cánh cứng": "assets/animals/beetle.webp",
  "Cá chép": "assets/animals/fish.webp",
  "Hamster": "assets/animals/hamster.webp",
  "Khủng long": "assets/animals/dinosaur.webp",
  "Gà trống": "assets/animals/rooster.webp",
  "Tôm hùm": "assets/animals/lobster.webp",
  "Bọ cạp": "assets/animals/scorpion.webp",
  "Chồn hôi": "assets/animals/skunk.webp",
  "Lười": "assets/animals/sloth.webp",
  "Đười ươi": "assets/animals/orangutan.webp",
  "Khỉ đột": "assets/animals/gorilla.webp",
  "Bò rừng": "assets/animals/bison.webp",
  "Nai sừng tấm": "assets/animals/moose.webp",
  "Thú mỏ vịt": "assets/animals/platypus.webp",
  "Vượn cáo": "assets/animals/lemur.webp",
  "Chồn đất": "assets/animals/chon_dat.webp",
  "Bò yak": "assets/animals/yak.webp",
  "Bồ nông": "assets/animals/pelican.webp",
  "Cò": "assets/animals/stork.webp",
  "Lươn": "assets/animals/eel.webp",
  "Dế": "assets/animals/cricket.webp"
};

const RAW = [["Bướm", "🦋", "côn trùng", "bay nhẹ quanh hoa", "đôi cánh nhiều màu", "lúc nhỏ là sâu xanh", "uống mật hoa ngọt"], ["Mèo", "🐱", "thú cưng", "kêu meo meo", "mắt tròn long lanh", "thích cuộn tròn ngủ", "bắt chuột rất nhanh"], ["Chó", "🐶", "thú cưng", "sủa gâu gâu", "trung thành giữ nhà", "vẫy đuôi mừng bé", "chạy nhảy rất vui"], ["Thỏ", "🐰", "động vật nhỏ", "tai dài xinh xắn", "thích ăn cà rốt", "nhảy nhanh trên cỏ", "lông mềm như bông"], ["Cá", "🐟", "dưới nước", "bơi trong làn nước", "có vây có đuôi", "không đi trên cạn", "thích hồ ao xanh"], ["Chim", "🐦", "trên trời", "hót líu lo vui", "có cánh biết bay", "làm tổ trên cây", "thức dậy sớm mai"], ["Voi", "🐘", "rừng xanh", "thân hình to lớn", "có chiếc vòi dài", "tai rộng như quạt", "bước đi chậm rãi"], ["Sư tử", "🦁", "rừng xanh", "bờm vàng oai vệ", "tiếng gầm vang xa", "được gọi chúa sơn lâm", "mạnh mẽ giữa rừng"], ["Rùa", "🐢", "ao hồ", "mang mai trên lưng", "đi chậm từng bước", "có thể sống lâu", "thích nằm phơi nắng"], ["Gấu", "🐻", "rừng xanh", "thân to lông dày", "thích mật ong ngọt", "ngủ đông thật lâu", "đi bằng bốn chân"], ["Bò", "🐮", "nông trại", "kêu ùm bò vui", "cho sữa trắng thơm", "ăn cỏ ngoài đồng", "hiền lành chăm chỉ"], ["Heo", "🐷", "nông trại", "mũi tròn hồng hồng", "kêu ụt ịt vui", "thích nằm trong chuồng", "ăn khỏe mỗi ngày"], ["Gà", "🐔", "nông trại", "gáy ò ó o", "đẻ trứng cho bé", "bới đất tìm mồi", "có mào đỏ tươi"], ["Vịt", "🦆", "ao hồ", "kêu cạp cạp vui", "bơi trên mặt nước", "chân có màng mỏng", "lông mềm không ướt"], ["Ngựa", "🐴", "đồng cỏ", "chạy nhanh trên đường", "có bờm thật đẹp", "kêu hí vang vang", "chở người đi xa"], ["Cừu", "🐑", "đồng cỏ", "lông xoăn trắng mềm", "kêu be be nhỏ", "ăn cỏ trên đồi", "đi theo cả đàn"], ["Dê", "🐐", "đồi núi", "có râu dưới cằm", "leo núi rất khéo", "kêu be be vui", "thích ăn lá cây"], ["Ong", "🐝", "côn trùng", "bay quanh vườn hoa", "làm mật ngọt thơm", "có sọc vàng đen", "chăm chỉ mỗi ngày"], ["Ếch", "🐸", "ao hồ", "kêu ộp ộp vang", "nhảy xa trên lá", "sống gần bờ ao", "bắt muỗi rất nhanh"], ["Khỉ", "🐵", "rừng xanh", "leo cây rất giỏi", "thích ăn chuối vàng", "nhanh nhẹn tinh nghịch", "đuôi dài đung đưa"], ["Gấu trúc", "🐼", "rừng tre", "lông trắng pha đen", "thích ăn cây tre", "mắt tròn dễ thương", "đi chậm lững thững"], ["Chim cánh cụt", "🐧", "vùng lạnh", "đi lạch bạch vui", "không bay trên trời", "bơi giỏi dưới nước", "mặc áo đen trắng"], ["Cá heo", "🐬", "biển", "bơi nhanh ngoài biển", "thông minh thân thiện", "nhảy lên khỏi sóng", "phát tiếng gọi nhau"], ["Cá voi", "🐋", "biển", "thân hình khổng lồ", "phun nước lên cao", "sống giữa đại dương", "hát bài ca biển"], ["Cá mập", "🦈", "biển", "răng sắc thật nhiều", "bơi mạnh dưới biển", "vây nhô trên sóng", "là thợ săn nhanh"], ["Bạch tuộc", "🐙", "biển", "có tám chiếc tay", "ẩn mình dưới đáy", "phun mực khi sợ", "thân mềm kỳ lạ"], ["Cua", "🦀", "biển", "đi ngang rất vui", "có hai càng kẹp", "sống gần bãi cát", "vỏ cứng bảo vệ"], ["Ốc sên", "🐌", "vườn cây", "mang nhà trên lưng", "bò chậm trên lá", "thích nơi ẩm mát", "để lại vệt dài"], ["Bọ rùa", "🐞", "côn trùng", "áo đỏ chấm đen", "bé xíu trên lá", "giúp vườn thêm xinh", "bay nhẹ khi nắng"], ["Chuồn chuồn", "🌼", "côn trùng", "bay thấp báo mưa", "cánh mỏng trong veo", "đậu trên ngọn cỏ", "bay nhanh bên ao"], ["Kiến", "🐜", "côn trùng", "bé nhỏ chăm làm", "đi thành hàng dài", "tha mồi về tổ", "sống cùng bạn bè"], ["Hươu cao cổ", "🦒", "đồng cỏ", "cổ dài thật cao", "ăn lá trên cây", "đốm vàng trên thân", "bước đi thong thả"], ["Ngựa vằn", "🦓", "đồng cỏ", "áo sọc trắng đen", "chạy trên đồng cỏ", "sống theo bầy đàn", "giống ngựa ngoài xa"], ["Chuột túi", "🦘", "đồng cỏ", "nhảy bằng chân sau", "có túi trước bụng", "mang con nhỏ xinh", "sống nơi xa lạ"], ["Gấu túi", "🐨", "rừng cây", "ôm cây ngủ ngoan", "thích lá bạch đàn", "mặt tròn dễ mến", "sống trên cành cao"], ["Cáo", "🦊", "rừng xanh", "đuôi dài mềm mại", "màu cam thật đẹp", "nhanh trí trong rừng", "đi nhẹ ban đêm"], ["Sói", "🐺", "rừng xanh", "tru dài trong đêm", "sống cùng bầy đàn", "chạy nhanh săn mồi", "giống chó hoang dã"], ["Hươu", "🦌", "rừng xanh", "có sừng trên đầu", "chạy nhẹ qua rừng", "mắt hiền long lanh", "ăn lá và cỏ"], ["Chuột", "🐭", "động vật nhỏ", "bé xíu chạy nhanh", "thích gặm hạt nhỏ", "tai tròn mũi nhọn", "nấp trong góc nhà"], ["Hamster", "🐹", "thú cưng", "má phồng đáng yêu", "chạy trong bánh xe", "ăn hạt bé xinh", "ngủ trong nhà nhỏ"], ["Thiên nga", "🦢", "ao hồ", "cổ dài duyên dáng", "bơi trên mặt hồ", "lông trắng mịn màng", "đẹp như nàng thơ"], ["Công", "🦚", "rừng xanh", "xòe đuôi rực rỡ", "lông màu lấp lánh", "điệu đà khoe sắc", "như chiếc quạt hoa"], ["Cú mèo", "🦉", "ban đêm", "mắt tròn thật to", "thức vào ban đêm", "bay êm không tiếng", "đậu trên cành cây"], ["Vẹt", "🦜", "rừng xanh", "lông màu sặc sỡ", "có thể bắt chước", "nói vài tiếng vui", "đậu trên vai người"], ["Đại bàng", "🦅", "bầu trời", "bay cao trên núi", "mắt nhìn rất xa", "đôi cánh mạnh mẽ", "săn mồi rất giỏi"], ["Cá sấu", "🐊", "sông nước", "răng sắc thật dài", "nằm im dưới nước", "da dày màu xanh", "đuôi khỏe quẫy mạnh"], ["Rắn", "🐍", "rừng xanh", "trườn dài trên đất", "không có chân đi", "lột da khi lớn", "ẩn mình trong cỏ"], ["Thằn lằn", "🦎", "vườn cây", "chạy nhanh trên tường", "đuôi dài nhỏ xinh", "bắt côn trùng bé", "phơi nắng ban ngày"], ["Khủng long", "🦕", "cổ xưa", "sống từ rất lâu", "thân hình to lớn", "nay chỉ còn hóa thạch", "bé thấy trong sách"], ["Hổ", "🐯", "rừng xanh", "áo vằn cam đen", "gầm vang trong rừng", "chạy nhanh mạnh mẽ", "là mèo lớn oai"], ["Báo", "🐆", "rừng xanh", "đốm đen trên mình", "chạy nhanh như gió", "leo cây rất giỏi", "săn mồi ban đêm"], ["Hà mã", "🦛", "sông nước", "miệng to thật rộng", "thích ngâm dưới nước", "thân tròn nặng nề", "sống bên bờ sông"], ["Tê giác", "🦏", "đồng cỏ", "có sừng trên mũi", "da dày chắc khỏe", "bước đi vững vàng", "ăn cỏ ngoài đồng"], ["Lạc đà", "🐫", "sa mạc", "có bướu trên lưng", "đi qua cát nóng", "chịu khát rất lâu", "chở người qua sa mạc"], ["Hồng hạc", "🦩", "ao hồ", "đứng bằng một chân", "lông hồng rực rỡ", "cổ dài cong cong", "sống gần đầm nước"], ["Hải cẩu", "🦭", "biển lạnh", "bơi giỏi dưới nước", "nằm nghỉ trên băng", "thân tròn đáng yêu", "kêu vang bên biển"], ["Sao biển", "⭐", "biển", "hình ngôi sao xinh", "nằm dưới đáy biển", "không chạy không bay", "có năm cánh nhỏ"], ["Sứa", "🪼", "biển", "trong veo mềm mại", "trôi theo làn nước", "có tua dài nhẹ", "như chiếc ô xinh"], ["Nhím", "🦔", "vườn cây", "lưng đầy gai nhỏ", "cuộn tròn khi sợ", "đi chậm ban đêm", "ăn côn trùng bé"], ["Sóc", "🐿️", "rừng cây", "đuôi bông xù xinh", "nhảy nhanh trên cành", "thích hạt dẻ nhỏ", "giấu thức ăn vui"], ["Dơi", "🦇", "ban đêm", "bay khi trời tối", "ngủ treo trên cao", "dùng tai nghe giỏi", "không phải là chim"], ["Gà trống", "🐓", "nông trại", "gáy vang sáng sớm", "mào đỏ trên đầu", "đi quanh sân nhỏ", "đánh thức mọi người"], ["Tôm hùm", "🦞", "biển", "càng to thật khỏe", "vỏ đỏ khi nấu", "sống dưới đáy biển", "bò chậm trong hang"], ["Tôm", "🦐", "sông biển", "thân cong bé nhỏ", "bơi lùi thật nhanh", "có râu dài mảnh", "sống ở ao hồ"], ["Mực", "🦑", "biển", "bơi nhanh dưới nước", "phun mực khi sợ", "có nhiều chiếc tua", "thân mềm thon dài"], ["Bọ cạp", "🦂", "sa mạc", "đuôi cong có nọc", "càng nhỏ phía trước", "bò trên cát nóng", "ẩn mình ban ngày"], ["Nhện", "🕷️", "côn trùng", "giăng tơ thành lưới", "có tám chiếc chân", "bắt mồi rất khéo", "nấp trong góc nhỏ"], ["Muỗi", "🦟", "côn trùng", "bay vo ve nhỏ", "thích nơi ẩm thấp", "chích làm bé ngứa", "bé cần mắc màn"], ["Ruồi", "🪰", "côn trùng", "bay nhanh quanh nhà", "đậu lên đồ ăn", "bé cần giữ sạch", "tiếng vo ve nhỏ"], ["Giun đất", "🪱", "trong đất", "sống trong đất mềm", "không chân vẫn bò", "giúp đất thêm tốt", "thân dài nhỏ xíu"], ["Rái cá", "🦦", "sông nước", "bơi lội rất khéo", "thích ăn cá nhỏ", "nằm ngửa trên nước", "lông mượt đáng yêu"], ["Hải ly", "🦫", "sông nước", "xây đập bằng gỗ", "răng khỏe gặm cây", "đuôi bẹt đặc biệt", "sống gần dòng suối"], ["Gấu mèo", "🦝", "rừng cây", "mặt như đeo kính", "tay nhỏ rất khéo", "thích tìm thức ăn", "đi chơi ban đêm"], ["Chồn hôi", "🦨", "rừng cây", "đuôi bông trắng đen", "khi sợ có mùi", "đi chậm ban đêm", "áo sọc đặc biệt"], ["Lười", "🦥", "rừng cây", "di chuyển rất chậm", "treo mình trên cây", "ngủ nhiều mỗi ngày", "mặt hiền dễ thương"], ["Đười ươi", "🦧", "rừng cây", "tay dài leo giỏi", "lông cam rực rỡ", "thông minh hiền lành", "sống trong rừng sâu"], ["Khỉ đột", "🦍", "rừng xanh", "thân to mạnh mẽ", "ngực rộng vạm vỡ", "sống cùng gia đình", "ăn lá và quả"], ["Lừa", "🫏", "nông trại", "tai dài hơn ngựa", "chở đồ chăm chỉ", "kêu vang ngoài sân", "bước đi bền bỉ"], ["Trâu", "🐃", "đồng ruộng", "sừng cong chắc khỏe", "kéo cày ngoài ruộng", "thích tắm bùn mát", "hiền lành chăm chỉ"], ["Bò rừng", "🦬", "đồng cỏ", "lông dày trước ngực", "đầu to mạnh mẽ", "sống thành đàn lớn", "chạy trên thảo nguyên"], ["Nai sừng tấm", "🫎", "rừng lạnh", "sừng rộng như quạt", "thân cao to lớn", "sống gần hồ nước", "ăn lá cây mềm"], ["Tuần lộc", "🦌", "vùng lạnh", "kéo xe mùa đông", "có sừng xinh đẹp", "sống nơi tuyết trắng", "ăn rêu và cỏ"], ["Lạc đà alpaca", "🦙", "núi cao", "lông mềm bông xù", "mặt hiền dễ mến", "sống theo đàn nhỏ", "thích khí trời mát"], ["Thú mỏ vịt", "🦆", "sông nước", "mỏ giống vịt con", "thân như thú nhỏ", "bơi trong dòng suối", "đẻ trứng rất lạ"], ["Vượn cáo", "🐒", "rừng cây", "đuôi vòng sọc xinh", "nhảy giữa cành cây", "mắt tròn thật to", "sống theo bầy vui"], ["Chồn đất", "🐾", "sa mạc", "đứng thẳng canh chừng", "sống cùng gia đình", "đào hang dưới cát", "mắt nhìn thật nhanh"], ["Linh dương", "🦌", "đồng cỏ", "chạy nhanh như gió", "chân thon nhẹ nhàng", "sừng cong xinh xắn", "sống trên thảo nguyên"], ["Bò yak", "🐂", "núi cao", "lông dài thật dày", "sống nơi lạnh giá", "chở đồ trên núi", "ăn cỏ thung lũng"], ["Đà điểu", "🐦", "đồng cỏ", "chạy nhanh nhất loài chim", "cổ dài chân khỏe", "trứng to thật lớn", "không bay trên trời"], ["Chim kiwi", "🐦", "rừng cây", "mỏ dài tìm mồi", "không bay lên cao", "bé nhỏ ban đêm", "lông mềm màu nâu"], ["Bồ nông", "🐦", "ao hồ", "túi mỏ thật rộng", "bắt cá rất nhanh", "bay qua mặt nước", "sống gần biển hồ"], ["Cò", "🐦", "đồng ruộng", "chân dài mảnh khảnh", "đứng giữa ruộng xanh", "mỏ dài bắt cá", "bay về lúc chiều"], ["Cá ngựa", "🪸", "biển", "hình như chú ngựa", "bơi đứng thật lạ", "sống giữa rong biển", "bé nhỏ dưới nước"], ["Lươn", "🐍", "sông nước", "thân dài trơn bóng", "sống dưới bùn mềm", "bơi uốn như rắn", "không có chân đi"], ["Cá đuối", "🐟", "biển", "thân dẹt như quạt", "bơi nhẹ đáy biển", "đuôi dài phía sau", "trông như cánh bay"], ["San hô", "🪸", "biển", "như vườn dưới nước", "nhiều màu rực rỡ", "là nhà của cá", "sống bám thành cụm"], ["Kỳ nhông", "🦎", "rừng cây", "mào nhọn trên lưng", "thích phơi nắng ấm", "ăn lá cây xanh", "đuôi dài chắc khỏe"], ["Bọ cánh cứng", "🪲", "côn trùng", "vỏ cứng trên lưng", "bò trên thân cây", "có cánh bên trong", "bé nhỏ mà khỏe"], ["Dế", "🦗", "đồng cỏ", "gáy vang trong đêm", "nhảy nhanh trên cỏ", "chân sau rất khỏe", "sống trong hang nhỏ"], ["Cá chép", "🐟", "ao hồ", "bơi lội nhẹ nhàng", "vảy óng ánh đẹp", "sống dưới làn nước", "thường thấy trong ao"]];
const ANIMALS = RAW.map((x, i) => ({
  id: "a" + i,
  name: x[0],
  emoji: x[1],
  habitat: x[2],
  facts: [x[3], x[4], x[5], x[6]],
  videoUrl: "",
  imageUrl: ANIMAL_IMAGES[x[0]] || "",
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
let eggCracking = false;

const ANIMAL_WOW_FACTS = {
  "Bướm": "Bướm có đôi cánh mỏng như giấy màu. Khi bay quanh hoa, bạn ấy trông như một mảnh cầu vồng nhỏ đang nhảy múa. Bé nhìn kỹ sẽ thấy cánh bướm có nhiều hoa văn rất xinh.",
  "Mèo": "Mèo đi rất nhẹ, nhiều khi bước qua mà mình không nghe thấy. Đôi mắt của mèo sáng lên trong bóng tối, như có hai chiếc đèn nhỏ. Vì vậy ban đêm mèo trông vừa bí ẩn vừa đáng yêu.",
  "Chó": "Chó có chiếc mũi rất giỏi, có thể ngửi thấy nhiều mùi mà mình không nhận ra. Khi vui, bạn ấy vẫy đuôi như đang nói xin chào. Một người bạn bốn chân thật nhiệt tình.",
  "Thỏ": "Thỏ có đôi tai dài như hai chiếc lá mềm. Khi nghe thấy tiếng động, tai thỏ có thể dựng lên rất nhanh. Nhìn thỏ nhảy từng bước nhỏ, bé sẽ thấy như một cục bông đang bật trên cỏ.",
  "Cá": "Cá không đi bộ như mình mà lướt trong nước bằng vây và đuôi. Khi ánh sáng chiếu vào, vảy cá có thể lấp lánh như những đồng xu nhỏ. Dưới mặt nước là cả một thế giới rất khác.",
  "Chim": "Chim thức dậy sớm và hót líu lo như đang gọi ngày mới. Đôi cánh giúp bạn ấy bay từ cành này sang cành khác thật nhẹ. Có khi chỉ nghe tiếng hót thôi, bé đã biết có chim gần đó.",
  "Voi": "Voi có chiếc vòi dài thật tài giỏi. Vòi có thể hút nước, cầm đồ và chào bạn bè. Nhìn to lớn vậy thôi, voi cũng rất thích được ở gần gia đình.",
  "Sư tử": "Sư tử có chiếc bờm xù quanh mặt như một chiếc khăn choàng thật oai. Khi đứng giữa đồng cỏ, bạn ấy trông rất tự tin. Bé nhìn bờm sư tử là nhận ra ngay dáng vẻ đặc biệt của bạn ấy.",
  "Rùa": "Rùa mang theo chiếc mai như một ngôi nhà nhỏ trên lưng. Khi muốn nghỉ, bạn ấy có thể thu mình lại rất gọn. Chậm rãi nhưng bình tĩnh, rùa có cách riêng của mình.",
  "Gấu": "Gấu có thân hình to tròn và bộ lông dày ấm áp. Khi đi, bạn ấy đặt bàn chân xuống rất chắc. Nhìn gấu từ xa, bé có thể thấy dáng đi vừa mạnh mẽ vừa hơi lững thững.",
  "Bò": "Bò thường nhai cỏ rất chậm rãi, như đang thưởng thức bữa ăn thật lâu. Đôi mắt bò hiền và to, nhìn rất bình yên. Ngoài đồng cỏ, bò giống như một bạn chăm chỉ của nông trại.",
  "Heo": "Heo có chiếc mũi tròn rất đáng yêu. Bạn ấy hay dùng mũi hít hít và khám phá xung quanh. Nhìn heo ụt ịt trong chuồng, bé sẽ thấy bạn ấy có vẻ lúc nào cũng bận rộn.",
  "Gà": "Gà có chiếc mào đỏ nổi bật trên đầu như đội một cái mũ nhỏ. Khi đi trong sân, bạn ấy hay bới đất tìm điều thú vị. Tiếng gà làm nông trại nghe rộn ràng hơn hẳn.",
  "Vịt": "Vịt có đôi chân có màng nên bơi trên nước rất khéo. Bộ lông của vịt trơn mượt, nước thường trượt đi rất nhanh. Nhìn vịt lạch bạch lên bờ rồi lại bơi xuống ao thật vui mắt.",
  "Ngựa": "Ngựa có chiếc bờm bay lên khi chạy. Mỗi bước chạy nghe lộc cộc như một nhịp trống nhỏ. Trên đồng cỏ, ngựa trông tự do và nhanh như cơn gió.",
  "Cừu": "Cừu có bộ lông xoăn mềm như một đám mây nhỏ. Khi đứng cạnh nhau, cả đàn cừu nhìn như những cục bông trắng đang di chuyển. Tiếng be be của cừu nghe rất hiền.",
  "Dê": "Dê leo lên chỗ cao rất khéo dù chân không to. Bạn ấy có chiếc râu nhỏ dưới cằm nhìn rất ngộ nghĩnh. Trên đồi, dê như một bạn leo núi tí hon.",
  "Ong": "Ong bay quanh hoa và làm việc rất chăm chỉ. Tiếng vo ve nhỏ của bạn ấy nghe như một chiếc máy bay tí hon. Nhờ ong ghé thăm, khu vườn có thêm nhiều điều vui.",
  "Ếch": "Ếch có đôi chân sau khỏe nên nhảy rất xa so với thân mình. Khi ngồi trên lá sen, bạn ấy trông như một ca sĩ nhỏ bên ao. Tiếng ộp ộp làm buổi tối gần hồ nghe thật đặc biệt.",
  "Khỉ": "Khỉ leo cây nhanh và khéo như đang chơi trò đu dây. Đôi tay của bạn ấy rất linh hoạt, cầm nắm được nhiều thứ. Nhìn khỉ tinh nghịch, bé dễ thấy bạn ấy rất thích khám phá.",
  "Gấu trúc": "Gấu trúc có hai mảng đen quanh mắt như đang đeo kính. Bạn ấy thích ôm tre và ăn rất thong thả. Nhìn gấu trúc ngồi nhấm nháp, bé sẽ thấy đáng yêu như một bạn bông lớn.",
  "Chim cánh cụt": "Chim cánh cụt không bay trên trời, nhưng bơi dưới nước rất khỏe. Khi đi trên băng, bạn ấy lúc lắc như một chiếc bánh ú. Nhìn lù đù vậy mà xuống nước là nhanh bất ngờ.",
  "Cá heo": "Cá heo bơi rất nhanh và thường nhảy lên khỏi mặt nước như đang biểu diễn. Bạn ấy phát ra nhiều âm thanh để gọi nhau. Ngoài biển, cá heo là một bạn rất lanh lợi.",
  "Cá voi": "Cá voi to lớn nhưng di chuyển trong biển rất êm. Khi nổi lên thở, nước có thể phụt lên như một chiếc vòi phun. Giữa đại dương rộng, cá voi giống một người khổng lồ hiền hòa.",
  "Cá mập": "Cá mập có dáng bơi rất mạnh và chiếc vây lưng dễ nhận ra. Bạn ấy lướt trong nước như một chiếc tàu nhỏ. Bé chỉ cần nhìn bóng vây là thấy cá mập thật khác biệt.",
  "Bạch tuộc": "Bạch tuộc có tám chiếc tay mềm mại, tay nào cũng có thể bám rất khéo. Khi cần ẩn nấp, bạn ấy có thể đổi màu như đang chọn áo mới. Dưới biển có nhiều điều bất ngờ lắm.",
  "Cua": "Cua đi ngang nhìn buồn cười như đang nhảy một điệu riêng. Hai chiếc càng của cua giống đôi kìm nhỏ, giúp bạn ấy cầm và tự bảo vệ. Gặp cua, bé thử nhìn cách bạn ấy bước xem có vui không nhé.",
  "Ốc sên": "Ốc sên mang chiếc nhà nhỏ ngay trên lưng. Bạn ấy đi rất chậm, nhưng đi tới đâu cũng để lại một vệt sáng mỏng. Nhìn ốc sên, bé sẽ thấy chậm cũng có vẻ đáng yêu riêng.",
  "Bọ rùa": "Bọ rùa bé xíu nhưng chiếc áo đỏ chấm đen rất nổi bật. Khi bò trên lá xanh, bạn ấy như một hạt nút màu vui mắt. Bé nhìn kỹ sẽ thấy bạn ấy nhỏ mà thật xinh.",
  "Chuồn chuồn": "Chuồn chuồn có đôi cánh mỏng trong veo như kính. Khi bay trên mặt ao, bạn ấy lượn rất nhanh rồi đậu nhẹ lên ngọn cỏ. Nhìn chuồn chuồn, bé có cảm giác mùa hè đang đến gần.",
  "Kiến": "Kiến bé xíu nhưng thường đi thành hàng rất ngay ngắn. Một bạn kiến gặp đường mới là cả nhóm có thể nối nhau đi theo. Nhìn đàn kiến, bé sẽ thấy các bạn nhỏ cũng làm được việc lớn.",
  "Hươu cao cổ": "Hươu cao cổ có chiếc cổ dài giúp nhìn được rất xa. Bạn ấy có thể với tới những chiếc lá cao mà nhiều con khác không chạm được. Trên đồng cỏ, hươu cao cổ giống một chiếc tháp hiền lành.",
  "Ngựa vằn": "Ngựa vằn mặc chiếc áo sọc trắng đen rất dễ nhận ra. Mỗi bạn có những đường sọc hơi khác nhau, như có bộ đồ riêng. Cả đàn đứng cạnh nhau nhìn rất vui mắt.",
  "Chuột túi": "Chuột túi nhảy bằng đôi chân sau khỏe như lò xo. Chiếc đuôi dài giúp bạn ấy giữ thăng bằng khi di chuyển. Nhìn chuột túi bật lên, bé sẽ thấy như đang xem một cú nhún thật cao.",
  "Gấu túi": "Gấu túi thích ôm cành cây và nghỉ ngơi thật lâu. Khuôn mặt tròn và đôi tai bông làm bạn ấy trông rất hiền. Nhìn gấu túi ngủ trên cây, bé có thể thấy bình yên lạ lắm.",
  "Cáo": "Cáo có chiếc đuôi dài mềm như một dải khăn cam. Bạn ấy bước đi nhẹ và nhìn xung quanh rất nhanh. Trong rừng, cáo trông như một bạn nhỏ lanh lợi mặc áo màu nắng.",
  "Sói": "Sói thường sống cùng bầy nên rất biết đi theo nhóm. Khi ngẩng đầu tru, âm thanh vang xa trong đêm. Bé chỉ cần nhìn dáng sói là thấy bạn ấy rất mạnh mẽ và nhanh nhẹn.",
  "Hươu": "Hươu có đôi mắt hiền và bước chân rất nhẹ. Khi chạy qua rừng, bạn ấy như một chiếc lá nâu lướt nhanh. Chiếc sừng trên đầu làm hươu trông thật duyên dáng.",
  "Chuột": "Chuột nhỏ xíu nhưng chạy rất nhanh qua những góc hẹp. Đôi tai tròn và chiếc mũi nhọn giúp bạn ấy trông lúc nào cũng tò mò. Bé nhìn chuột sẽ thấy một bạn bé mà lanh lẹ.",
  "Hamster": "Hamster có đôi má phồng trông như đang cất bí mật nhỏ. Bạn ấy thích chạy trong bánh xe quay vòng vòng. Nhìn hamster chạy, bé có thể thấy năng lượng của bạn ấy thật nhiều.",
  "Thiên nga": "Thiên nga bơi trên mặt hồ rất nhẹ, như đang trượt trên gương. Chiếc cổ dài cong cong làm bạn ấy trông thật duyên dáng. Khi nước lăn tăn quanh thiên nga, cảnh nhìn rất êm.",
  "Công": "Khi công xòe đuôi, phía sau bạn ấy như một chiếc quạt hoa rực rỡ. Mỗi đốm trên đuôi nhìn giống một con mắt nhỏ. Công đi thật chậm như đang khoe bộ áo đẹp nhất.",
  "Cú mèo": "Cú mèo có đôi mắt tròn to, nhìn như hai chiếc nút sáng. Bạn ấy thường thức khi trời tối và bay rất êm. Trên cành cây ban đêm, cú mèo trông vừa nghiêm túc vừa đáng yêu.",
  "Vẹt": "Vẹt có bộ lông nhiều màu như mặc áo lễ hội. Một số bạn vẹt còn bắt chước tiếng người rất vui. Khi vẹt nghiêng đầu nhìn bé, trông như bạn ấy đang hỏi chuyện.",
  "Đại bàng": "Đại bàng có đôi cánh rộng và bay rất cao. Đôi mắt của bạn ấy nhìn xa rất giỏi. Khi dang cánh trên bầu trời, đại bàng trông như một chiếc diều lớn mạnh mẽ.",
  "Cá sấu": "Cá sấu thường nằm rất yên dưới nước, chỉ để lộ mắt và mũi. Chiếc đuôi dài giúp bạn ấy quẫy nước khỏe. Nhìn cá sấu, bé sẽ thấy có những con vật rất giỏi giữ im lặng.",
  "Rắn": "Rắn không có chân nhưng vẫn trườn đi rất mềm mại. Thân rắn uốn cong như một sợi dây đang di chuyển. Nhìn cách rắn đi, bé sẽ thấy cơ thể của mỗi con vật thật khác nhau.",
  "Thằn lằn": "Thằn lằn chạy rất nhanh trên tường và trên đá. Bạn ấy thích phơi nắng để sưởi ấm cơ thể. Chỉ chớp mắt một cái, thằn lằn có thể đã chạy sang chỗ khác rồi.",
  "Khủng long": "Khủng long sống từ thời rất xa xưa, khi bé và ông bà mình đều chưa có mặt. Bây giờ ta biết về khủng long qua hóa thạch và tranh ảnh. Nghĩ đến khủng long giống như mở một cánh cửa về quá khứ.",
  "Hổ": "Hổ có bộ áo vằn cam đen rất nổi bật. Các vằn trên người giúp bạn ấy trông như hòa vào bóng cây. Nhìn hổ, bé sẽ thấy một bạn mèo lớn thật oai.",
  "Báo": "Báo có những đốm trên lông như hạt mưa nhỏ. Thân báo thon và bước đi rất nhẹ. Khi nhìn báo, bé dễ nhớ đến một chiếc áo đốm thật đặc biệt.",
  "Hà mã": "Hà mã thích ngâm mình dưới nước để mát mẻ. Dù thân hình to tròn, bạn ấy vẫn di chuyển trong nước rất thoải mái. Chiếc miệng rộng của hà mã nhìn thật ấn tượng.",
  "Tê giác": "Tê giác có chiếc sừng trên mũi rất dễ nhận ra. Lớp da dày làm bạn ấy trông như mặc áo giáp. Khi bước đi chậm rãi, tê giác nhìn thật vững vàng.",
  "Lạc đà": "Lạc đà có chiếc bướu trên lưng rất lạ mắt. Bạn ấy đi qua cát nóng bằng bước chân chắc chắn. Giữa sa mạc rộng, lạc đà giống một người bạn đường bền bỉ.",
  "Hồng hạc": "Hồng hạc có bộ lông hồng rực và đôi chân dài mảnh. Bạn ấy có thể đứng một chân rất lâu mà vẫn thăng bằng. Nhìn hồng hạc bên đầm nước, bé sẽ thấy như có bông hoa hồng biết đi.",
  "Hải cẩu": "Hải cẩu có thân tròn và bơi dưới nước rất khéo. Khi nằm nghỉ, bạn ấy trông như một chiếc gối mềm trên băng. Đôi mắt đen của hải cẩu nhìn rất hiền.",
  "Sao biển": "Sao biển có hình giống một ngôi sao nằm dưới biển. Bạn ấy không chạy nhanh nhưng có dáng rất đặc biệt. Nhìn sao biển, bé sẽ thấy biển cũng có những ngôi sao của riêng mình.",
  "Sứa": "Sứa mềm và trong veo, trôi nhẹ theo làn nước. Dáng của bạn ấy giống một chiếc ô nhỏ đang bay dưới biển. Khi sứa di chuyển, bé có thể thấy nước như đang múa theo.",
  "Nhím": "Nhím có nhiều chiếc gai nhỏ trên lưng như mặc áo chải tóc. Khi muốn tự bảo vệ, bạn ấy có thể cuộn người lại. Nhìn nhím, bé sẽ thấy một con vật nhỏ cũng có cách rất riêng.",
  "Sóc": "Sóc có chiếc đuôi xù như cây chổi bông. Bạn ấy nhảy giữa các cành cây rất nhanh và khéo. Khi ôm hạt nhỏ, sóc trông như đang giữ một kho báu tí hon.",
  "Dơi": "Dơi ngủ treo ngược rất lạ, như đang tập xiếc trên cao. Khi bay trong đêm, bạn ấy dùng đôi tai rất giỏi để tìm đường. Dơi không phải chim, nhưng vẫn bay được thật hay.",
  "Gà trống": "Gà trống có tiếng gáy vang làm buổi sáng thức dậy. Chiếc mào đỏ và bộ lông nổi bật khiến bạn ấy trông rất tự tin. Đi quanh sân, gà trống như người báo hiệu ngày mới.",
  "Tôm hùm": "Tôm hùm có đôi càng to nhìn rất nổi bật. Lớp vỏ cứng bên ngoài giống một bộ áo bảo vệ. Dưới đáy biển, bạn ấy bò chậm rãi như đang đi dạo.",
  "Tôm": "Tôm có thân cong nhỏ và chiếc râu dài mảnh. Khi bơi, bạn ấy có thể giật lùi rất nhanh. Nhìn tôm trong nước, bé sẽ thấy một dáng bơi rất khác thường.",
  "Mực": "Mực có thân mềm và nhiều chiếc tua nhẹ nhàng. Khi bơi, bạn ấy lướt đi như một mũi tên nhỏ dưới nước. Hình dáng của mực làm biển trông càng kỳ lạ hơn.",
  "Bọ cạp": "Bọ cạp có chiếc đuôi cong như dấu hỏi phía sau. Đôi càng nhỏ phía trước làm bạn ấy trông rất đặc biệt. Trên cát, bọ cạp di chuyển chậm nhưng rất chắc.",
  "Nhện": "Nhện có tám chiếc chân và giăng tơ thành những đường mảnh. Mạng nhện đôi khi long lanh khi có giọt sương. Nhìn kỹ, bé sẽ thấy tấm lưới ấy giống một bức tranh nhỏ.",
  "Muỗi": "Muỗi rất nhỏ và bay phát ra tiếng vo ve. Bạn ấy thích những nơi ẩm và tối. Khi nghe tiếng vo ve, bé nhớ giữ sạch chỗ ngủ và mắc màn cho yên tâm nhé.",
  "Ruồi": "Ruồi bay nhanh và đổi hướng rất bất ngờ. Đôi cánh nhỏ của bạn ấy đập liên tục nên nghe vo ve. Gặp ruồi, bé nhớ đậy đồ ăn để nhà mình sạch hơn.",
  "Giun đất": "Giun đất sống trong đất mềm và không có chân. Bạn ấy bò bằng cách uốn thân rất chậm rãi. Dưới mặt đất, giun là một bạn nhỏ âm thầm làm đất tơi hơn.",
  "Rái cá": "Rái cá bơi rất khéo và có bộ lông mượt. Bạn ấy có thể nằm ngửa trên nước trông rất thư giãn. Nhìn rái cá chơi đùa, bé sẽ thấy nước là sân chơi tuyệt vời.",
  "Hải ly": "Hải ly có chiếc đuôi bẹt rất dễ nhận ra. Bạn ấy nổi tiếng khéo xếp cành cây và gỗ gần dòng nước. Nhìn hải ly làm việc, bé sẽ thấy như một kỹ sư nhỏ bên suối.",
  "Gấu mèo": "Gấu mèo có khuôn mặt như đang đeo một chiếc mặt nạ nhỏ. Đôi tay của bạn ấy rất khéo, hay sờ và khám phá đồ vật. Nhìn gấu mèo, bé dễ nhớ đến một bạn tò mò ban đêm.",
  "Chồn hôi": "Chồn hôi có bộ lông đen trắng rất nổi bật. Khi đi, chiếc đuôi bông của bạn ấy dựng lên nhìn thật lạ. Bạn ấy nhắc bé rằng mỗi con vật đều có cách tự bảo vệ riêng.",
  "Lười": "Lười di chuyển chậm đến mức nhìn như đang quay phim chậm. Bạn ấy thường treo mình trên cây và nghỉ ngơi rất lâu. Nhìn lười, bé có thể học cách bình tĩnh một chút.",
  "Đười ươi": "Đười ươi có đôi tay dài giúp leo cây rất giỏi. Bộ lông cam làm bạn ấy nổi bật giữa rừng xanh. Khi nhìn đười ươi ngồi suy nghĩ, bé có cảm giác bạn ấy rất trầm tĩnh.",
  "Khỉ đột": "Khỉ đột có thân hình to và đôi tay rất khỏe. Nhưng khuôn mặt của bạn ấy có lúc nhìn rất hiền. Trong rừng, khỉ đột thường ở gần gia đình của mình.",
  "Lừa": "Lừa có đôi tai dài hơn ngựa nên rất dễ nhận ra. Bạn ấy bước đi bền bỉ và chăm chỉ. Nhìn lừa chở đồ, bé sẽ thấy sự kiên nhẫn cũng rất đáng quý.",
  "Trâu": "Trâu có đôi sừng cong và thân hình chắc khỏe. Bạn ấy rất thích tắm bùn để mát da. Ngoài đồng ruộng, trâu là hình ảnh quen thuộc và hiền lành.",
  "Bò rừng": "Bò rừng có phần lông trước ngực dày, nhìn như mặc áo choàng. Đầu của bạn ấy to và dáng đứng rất vững. Trên đồng cỏ rộng, bò rừng trông mạnh mẽ như một ngọn đồi nhỏ.",
  "Nai sừng tấm": "Nai sừng tấm có bộ sừng rộng như chiếc quạt lớn. Khi đi gần hồ nước, bạn ấy trông rất cao và chậm rãi. Bộ sừng ấy làm nai sừng tấm thật khó nhầm với bạn khác.",
  "Tuần lộc": "Tuần lộc sống ở nơi lạnh và có bộ sừng xinh đẹp. Trong tranh mùa đông, bạn ấy thường xuất hiện cùng tuyết trắng. Nhìn tuần lộc, bé dễ nghĩ đến những chuyến đi xa thật vui.",
  "Lạc đà alpaca": "Lạc đà alpaca có bộ lông bông xù như áo len mềm. Khuôn mặt của bạn ấy hiền và hơi ngơ ngác rất đáng yêu. Trên núi cao, alpaca giống một cục bông biết đi.",
  "Thú mỏ vịt": "Thú mỏ vịt có chiếc mỏ giống vịt nhưng lại là một bạn thú rất lạ. Bạn ấy bơi trong suối bằng dáng rất khéo. Nhìn thú mỏ vịt, bé sẽ thấy thiên nhiên thích pha trộn điều bất ngờ.",
  "Vượn cáo": "Vượn cáo có chiếc đuôi dài với những vòng sọc rất nổi. Đôi mắt tròn làm bạn ấy trông lúc nào cũng ngạc nhiên. Khi nhảy giữa cành cây, vượn cáo như một bạn diễn xiếc nhỏ.",
  "Chồn đất": "Chồn đất hay đứng thẳng lên để nhìn quanh. Dáng đứng ấy làm bạn ấy giống một người canh gác tí hon. Cả nhóm sống gần nhau nên nhìn rất rộn ràng.",
  "Linh dương": "Linh dương có đôi chân thon và chạy rất nhẹ. Chiếc sừng cong làm dáng bạn ấy thêm duyên. Trên đồng cỏ, linh dương như một nét vẽ nhanh lướt qua.",
  "Bò yak": "Bò yak có bộ lông dài dày để sống ở vùng lạnh. Khi đứng trên núi, bạn ấy trông thật ấm áp và chắc chắn. Bộ lông bay trong gió làm bò yak nhìn rất đặc biệt.",
  "Đà điểu": "Đà điểu không bay nhưng chạy bằng đôi chân dài rất nhanh. Chiếc cổ cao giúp bạn ấy nhìn quanh thật rõ. Khi bước đi, đà điểu trông vừa nghiêm trang vừa buồn cười.",
  "Chim kiwi": "Chim kiwi nhỏ, lông nâu mềm và có chiếc mỏ dài. Bạn ấy không bay cao nhưng tìm đường trên mặt đất rất khéo. Nhìn chim kiwi, bé sẽ thấy không phải chim nào cũng thích bay.",
  "Bồ nông": "Bồ nông có chiếc túi mỏ rộng như một cái võng nhỏ. Khi đứng bên nước, mỏ của bạn ấy nhìn thật nổi bật. Bé chỉ cần nhìn chiếc mỏ là dễ nhận ra bồ nông ngay.",
  "Cò": "Cò có đôi chân dài và dáng đứng rất thanh. Bạn ấy thường đứng giữa ruộng hoặc gần bờ nước để quan sát. Khi cò bay lên, đôi cánh trắng nhìn nhẹ như mây.",
  "Cá ngựa": "Cá ngựa bơi đứng trông như một chú ngựa tí hon dưới nước. Đuôi của bạn ấy có thể bám vào rong biển để khỏi bị dòng nước cuốn đi. Nhỏ xíu mà rất đặc biệt.",
  "Lươn": "Lươn có thân dài trơn và bơi uốn cong như sợi ruy băng. Bạn ấy không có chân nhưng vẫn di chuyển rất khéo dưới nước. Nhìn lươn, bé sẽ thấy dáng bơi thật mềm mại.",
  "Cá đuối": "Cá đuối có thân dẹt rộng như chiếc quạt. Khi bơi, hai bên thân vẫy nhẹ như đôi cánh dưới biển. Nhìn cá đuối lướt qua, bé có thể tưởng tượng một tấm thảm đang bay trong nước.",
  "San hô": "San hô trông như những bông hoa nhiều màu dưới biển. Nhiều bạn cá nhỏ thích bơi quanh san hô như trong một khu vườn. Nhìn san hô, bé sẽ thấy đáy biển cũng có vườn riêng.",
  "Kỳ nhông": "Kỳ nhông có dáng giống thằn lằn lớn và chiếc mào trên lưng rất lạ. Bạn ấy thích nằm phơi nắng cho ấm. Nhìn kỳ nhông, bé dễ nhớ đến một bạn nhỏ mặc áo xanh của rừng.",
  "Bọ cánh cứng": "Bọ cánh cứng có lớp vỏ cứng bóng như áo giáp nhỏ. Bên dưới lớp vỏ ấy là đôi cánh được giấu gọn. Nhỏ xíu mà có bộ đồ thật chắc chắn, lạ ghê.",
  "Dế": "Dế có đôi chân sau khỏe nên nhảy rất nhanh. Buổi tối, tiếng dế gáy nghe như bản nhạc ngoài sân. Bé nghe tiếng dế là biết có một bạn nhỏ đang ở gần cỏ.",
  "Cá chép": "Cá chép bơi nhẹ trong ao với lớp vảy óng ánh. Khi quẫy đuôi, mặt nước gợn thành vòng tròn nhỏ. Nhìn cá chép, bé sẽ thấy ao hồ cũng có những điều lấp lánh."
};


function visualHtml(animal, className, altPrefix = "Ảnh") {
  if (!animal.imageUrl) {
    return `<span class="${className} emojiVisual" aria-label="${animal.name}">${animal.emoji}</span>`;
  }
  return `<img class="${className}" src="${animal.imageUrl}" alt="${altPrefix} ${animal.name}" loading="lazy" decoding="async">`;
}

function answerVisual(animal) {
  return animal.imageUrl
    ? `<img class="answerThumb" src="${animal.imageUrl}" alt="${animal.name}" loading="lazy" decoding="async">`
    : `<span class="answerEmoji">${animal.emoji}</span>`;
}

function wowFactFor(animal) {
  return ANIMAL_WOW_FACTS[animal.name] || `${animal.name} là một con vật rất thú vị. Bé hãy nhìn kỹ ảnh để tìm ra điều đặc biệt của bạn ấy nhé. Biết đâu bé sẽ phát hiện một chi tiết rất vui.`;
}

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
        <div class="eggWrap" id="eggWrap" role="button" tabindex="0" aria-label="Chạm vào trứng để mở">
          <div class="egg">
            <div class="crack">
              <svg viewBox="0 0 100 130" fill="none">
                <path d="M50 2 L42 25 L58 42 L45 61 L55 78 L43 100 L50 128" stroke="#7d5a20" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="eggEye">${visualHtml(animal, "eggPeekImage", "Ảnh hé lộ")}</div>
        </div>
        <div class="shadowAnimal" id="shadowAnimal">${visualHtml(animal, "animalRevealImage", "Ảnh")}</div>
        <p class="eggHint">Chạm vào trứng để mở</p>
      </div>

      <div class="poemCard">
        ${animal.poem.map((line, i) => `<p style="--d:${i}">${i+1}. ${line}</p>`).join("")}
      </div>

      <div class="answers">
        ${choices.map(c => `<button class="answer" data-id="${c.id}">${answerVisual(c)}<span>${c.name}</span></button>`).join("")}
      </div>

      <article class="infoCard hidden" id="infoCard">
        <p class="resultTitle">Đúng rồi!</p>
        <div class="animalHero">${visualHtml(animal, "animalHeroImage", "Ảnh")}</div>
        <h2>${animal.name}</h2>
        <p class="wowFact">${wowFactFor(animal)}</p>
        <div class="chips">
          <span>🏡 ${animal.habitat}</span>
          <span>📚 Đã mở khóa ${unlocked.size}/100</span>
        </div>
        <div class="cardActions">
          <button class="nextBtn" id="nextBtn">Câu tiếp theo ➜</button>
        </div>
      </article>
    </section>
  `;

  eggCracking = false;
  const egg = document.getElementById("eggWrap");
  egg.onclick = crackEgg;
  egg.onkeydown = e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      crackEgg();
    }
  };
  document.querySelectorAll(".answer").forEach(btn => btn.onclick = () => checkAnswer(btn, animal));
  bindSwipe();
}

function crackEgg() {
  const egg = document.getElementById("eggWrap");
  if (!egg || eggCracking || egg.classList.contains("opened")) return;
  eggCracking = true;
  egg.classList.add("hatching");
  playEggCrackSound();
  setTimeout(() => {
    egg.classList.add("peeking");
    egg.classList.remove("hatching");
    eggCracking = false;
  }, 720);
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
    [...document.querySelectorAll(".answer")].forEach(b => b.disabled = true);
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
    : `<div class="videoFallback">${visualHtml(animal, "videoFallbackImage", "Ảnh")}</div>`;
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

function playEggCrackSound() {
  try {
    const ctx = audioCtx(); if (!ctx) return;
    tone(ctx, 520, 0, .06, "triangle", .045);
    tone(ctx, 740, .07, .07, "sine", .035);
    tone(ctx, 980, .16, .09, "triangle", .04);
    tone(ctx, 640, .28, .08, "sine", .03);
  } catch (e) {}
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
