export type Photo = {
  src: string;
  alt: string;
  position?: string;
};

// THÔNG TIN CẦN ĐỔI: tên, ngày kỷ niệm và ảnh đều có thể sửa tại file này.
const HER = "Em bé";
const ME = "Anh";

export const issue = {
  masthead: "SIX",
  herName: HER,
  yourName: ME,
  volume: "Vol. 06",
  city: "Ở đâu có hai đứa",
  date: "Ngày kỷ niệm của chúng mình", // Ví dụ: "20.10.2026"
  dateLong: "Happy six months together!", // Ví dụ: "20 tháng 10, 2026"
  price: "6 chiếc ôm",
};

export const music = {
  src: "", // Thêm public/music/our-song.mp3 và đổi thành "/music/our-song.mp3"
  title: "Bài hát của chúng mình",
  artist: "Nhấn ♫ để phát",
};

export const cover = {
  kicker: "Half a year, a whole lot of love",
  photo: {
    src: "", // Thêm public/photos/cover.jpg và đổi thành "/photos/cover.jpg"
    alt: "Bức ảnh hai đứa yêu thích nhất",
    position: "50% 45%",
  } satisfies Photo,
  summary:
    "Sáu tháng trước, anh có một người yêu. Sáu tháng sau, anh có thêm một bạn thân, đồng đội đi ăn và chiếc lý do dễ thương nhất để mỉm cười.",
  photoCredit: `Ảnh bìa chọn bởi ${ME} — trưởng hội mê ${HER}`,
  stats: [
    { number: "06", label: "tháng bên nhau" },
    { number: "180+", label: "ngày đáng yêu*" },
    { number: "∞", label: "điều đang chờ" },
  ],
  statsFootnote: "* Con số minh họa; số ngày thực tế tùy ngày bắt đầu của hai bạn.",
};

export const feature = {
  kicker: "Editor’s Letter · Người viết có thiên vị",
  title: "Lá thư tháng thứ sáu",
  headline: "6 tháng yêu em — anh vẫn chưa hết mê.",
  deck:
    "Một báo cáo dài kỳ về hiện tượng: ngày nào cũng thích cùng một người, nhưng mỗi ngày lại thích nhiều thêm.",
  paragraphs: [
    "Em bé ơi, vậy là tụi mình đã đi cùng nhau tròn sáu tháng rồi đó. Nghe thì chỉ là nửa năm, nhưng với anh, sáu tháng ấy có rất nhiều điều để nhớ: những tin nhắn linh tinh, những cuộc nói chuyện không đầu không cuối và cả những lần chỉ cần nhìn nhau là bật cười.",
    "Anh biết mình không phải nam chính hoàn hảo. Đôi lúc anh ngốc nghếch, hay quên, thỉnh thoảng còn pha trò rất nhạt. Nhưng có một điều anh nghiêm túc: anh luôn muốn lắng nghe em, hiểu em và cùng em làm cho những ngày bình thường trở nên đặc biệt hơn.",
    "Cảm ơn em vì đã cho anh bước vào thế giới của em. Cảm ơn cả những ngày vui lẫn lúc hai đứa có chút khác ý, vì mỗi lần như vậy mình lại có dịp học cách thương nhau tốt hơn. Anh thích chúng mình — không cần hoàn hảo, chỉ cần chân thành.",
    "Nếu em hỏi anh mong điều gì trong sáu tháng tiếp theo, thì câu trả lời là: thêm thật nhiều bữa ăn ngon, nhiều chuyến đi, nhiều cái ôm và nhiều lần được gọi em là người yêu của anh. Happy 6 months, em thương!",
  ],
  pullQuote: "Nửa năm đã qua. Phần hay nhất của chúng mình vẫn còn ở phía trước.",
  pullQuoteNote: "Lời của một bạn trai đang cười rất ngốc",
};

export const timeline = {
  kicker: "Six Chapters · Love timeline",
  title: "6 tháng, 6 chương",
  intro:
    "Chưa chắc tháng nào cũng là phim ngôn tình, nhưng chắc chắn vai chính đều là hai đứa. Đây là nội dung mẫu: hãy thay mỗi chương bằng một kỷ niệm thật nhé!",
  items: [
    {
      when: "CHƯƠNG 01 · THÁNG ĐẦU TIÊN",
      icon: "🌷",
      title: "Hello, người yêu mới!",
      text: "Tháng đầu tiên: vừa đáng yêu vừa hơi ngại. Hãy điền vào đây câu chuyện ngày chính thức yêu nhau của hai bạn.",
    },
    {
      when: "CHƯƠNG 02 · THÁNG THỨ HAI",
      icon: "🍰",
      title: "Tìm ra thêm vài sở thích",
      text: "Một món ăn, một quán quen hay một thói quen dễ thương. Hãy kể điều anh nhận ra về em trong tháng này.",
    },
    {
      when: "CHƯƠNG 03 · THÁNG THỨ BA",
      icon: "🎞️",
      title: "Một album bắt đầu đầy lên",
      text: "Tới đây hai đứa đã có vài chiếc ảnh để xem đi xem lại. Điền một khoảnh khắc khiến bạn bật cười.",
    },
    {
      when: "CHƯƠNG 04 · THÁNG THỨ TƯ",
      icon: "☕",
      title: "Có nhau trong ngày bình thường",
      text: "Không phải ngày nào cũng phải thật đặc biệt. Điền một buổi hẹn giản dị mà cả hai đều trân trọng.",
    },
    {
      when: "CHƯƠNG 05 · THÁNG THỨ NĂM",
      icon: "🧸",
      title: "Hiểu nhau thêm một chút",
      text: "Tháng này hai đứa có lẽ đã hiểu nhau hơn. Hãy thay dòng này bằng một điều hai bạn cùng học được.",
    },
    {
      when: "CHƯƠNG 06 · TRÒN SÁU THÁNG",
      icon: "💞",
      title: "Và chúng ta vẫn chọn nhau",
      text: "Chính là ngày hôm nay. Nửa năm không quá dài, nhưng đủ để anh biết anh muốn viết tiếp câu chuyện cùng em.",
    },
  ],
};

export const anatomy = {
  kicker: "Hồ sơ mật · Tuyệt đối có thiên vị",
  title: "Người yêu phiên bản 6.0",
  intro:
    `Theo kết quả điều tra của ${ME}, ${HER} có 5 siêu năng lực nguy hiểm cho trái tim. Chạm các con số trên ảnh để xem!`,
  photo: {
    src: "", // Thêm public/photos/anatomy.jpg và đổi thành "/photos/anatomy.jpg"
    alt: "Ảnh chân dung người yêu",
    position: "50% 50%",
  } satisfies Photo,
  ratio: "3 / 4",
  details: [
    { x: 40, y: 24, name: "Đôi mắt", text: "Có năng lực làm anh quên sạch những gì đang định nói." },
    { x: 63, y: 42, name: "Nụ cười", text: "Chỉ số gây thương nhớ vượt quá quy định cho phép." },
    { x: 54, y: 58, name: "Tính cách", text: "Một chút tinh nghịch, một chút đáng yêu, rất nhiều điều khiến anh quý." },
    { x: 23, y: 66, name: "Siêu năng lực", text: "Biến một buổi chiều bình thường thành một ngày anh muốn ghi nhớ." },
    { x: 72, y: 79, name: "Trái tim", text: "Phần đẹp nhất không nằm trong ảnh. Anh may mắn vì được em tin tưởng và yêu thương." },
  ],
  file: [
    { label: "Nữ chính", value: HER },
    { label: "Biệt danh", value: "Em bé / Chiếc bánh bao" },
    { label: "Tình trạng", value: "Đang hẹn hò được 6 tháng" },
    { label: "Chức vụ", value: "Đồng đội ăn ngon của anh" },
    { label: "Sở trường", value: "Khiến anh cười như đồ ngốc" },
    { label: "Điểm yếu", value: "Tạm thời chưa công bố" },
    { label: "Độ đáng yêu", value: "Không đo được" },
    { label: "Ghi chú", value: "Cần yêu thương và lắng nghe mỗi ngày" },
  ],
};

export const sixReasons = {
  kicker: "The Six-Point Report",
  title: "6 điều anh mê ở em",
  intro: "Hội đồng khảo sát chỉ có một người nhưng kết quả rất đáng tin. Bấm vào từng tấm thẻ để mở một bí mật nhé!",
  hint: "Nhấn để lật thẻ ♡",
  items: [
    { emoji: "🌼", front: "Điều số 01", title: "Nụ cười của em", text: "Một ngày đang hơi xám cũng có thể chuyển sang màu hồng chỉ vì em cười." },
    { emoji: "🐣", front: "Điều số 02", title: "Những chuyện linh tinh", text: "Anh thích nghe em kể cả những chuyện nhỏ xíu. Không phải vì nội dung, mà vì người kể." },
    { emoji: "🍜", front: "Điều số 03", title: "Những cuộc hẹn ăn ngon", text: "Đi ăn với em, món nào cũng có vẻ ngon hơn. Trừ những món em giành hết phần anh!" },
    { emoji: "🎀", front: "Điều số 04", title: "Sự đáng yêu rất riêng", text: "Em chẳng cần giống ai cả. Anh thương những điều làm nên chính em." },
    { emoji: "☁️", front: "Điều số 05", title: "Cảm giác bình yên", text: "Chỉ cần được ngồi cạnh em, đôi lúc không cần nói gì nhiều cũng thấy vui." },
    { emoji: "💌", front: "Điều số 06", title: "Vì người ấy là em", text: "Không cần lý do cầu kỳ. Anh thích người đang đọc những dòng này. Hết báo cáo!" },
  ],
};

export const lookbook = {
  kicker: "Photo Diary · 6 Months of Us",
  title: "Những điều muốn giữ lại",
  intro: "Mười tấm ảnh, một nghìn cảm xúc. Chụp có thể hơi rung, nhưng tình cảm thì nét căng.",
  quote: "Không cần mọi bức ảnh đều hoàn hảo. Chỉ cần trong đó có chúng mình.",
  items: [
    { photo: { src: "", alt: "Ảnh kỷ niệm 01", position: "50% 50%" }, place: "Bức ảnh đầu tiên", date: "", note: "Nụ cười trong ngày ấy vẫn đáng nhớ." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 02", position: "50% 50%" }, place: "Một buổi hẹn", date: "", note: "Thêm một chiếc hẹn vào bộ sưu tập." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 03", position: "50% 50%" }, place: "Góc phố quen", date: "", note: "Ở đâu cũng đẹp hơn khi có em." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 04", position: "50% 50%" }, place: "Khoảnh khắc ngốc nghếch", date: "", note: "Chúng mình thực sự có tố chất diễn hài." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 05", position: "50% 50%" }, place: "Bữa ăn hạnh phúc", date: "", note: "Tình yêu đi qua chiếc bụng no." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 06", position: "50% 50%" }, place: "Một ngày bình thường", date: "", note: "Hạnh phúc cũng chỉ đơn giản thế thôi." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 07", position: "50% 50%" }, place: "Tấm hình anh mê nhất", date: "", note: "Đã xem ít nhất một trăm lần (có thể hơn)." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 08", position: "50% 50%" }, place: "Hôm ấy em thật xinh", date: "", note: "À mà hình như hôm nào cũng vậy." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 09", position: "50% 50%" }, place: "Một khoảnh khắc khác", date: "", note: "Cảm ơn vì đã lưu lại ngày ấy." },
    { photo: { src: "", alt: "Ảnh kỷ niệm 10", position: "50% 50%" }, place: "Tấm ảnh mới nhất", date: "", note: "To be continued: Tháng thứ bảy." },
  ] satisfies { photo: Photo; place: string; date: string; note: string }[],
};

export const secretLetter = {
  kicker: "Classified · For Your Eyes Only",
  title: "Mật thư của tháng thứ sáu",
  intro: "Tài liệu tuyệt mật: chỉ cho phép một em bé đáng yêu mở. Vi phạm sẽ bị phạt một cái ôm!",
  closedText: "Hồ sơ tình yêu số 006 · Chỉ dành cho em",
  openButton: "Mở thư bí mật ♡",
  closeButton: "Gấp lại để đọc thêm lần nữa",
  greeting: "Gửi em, người anh thương,",
  paragraphs: [
    "Sáu tháng là 6 lần lật lịch, nhưng là rất nhiều lần anh thấy may mắn vì có em trong cuộc sống. Anh trân trọng cả những kỷ niệm lớn lẫn những cuộc trò chuyện vụn vặt mà hai đứa đã có.",
    "Anh không hứa rằng mọi ngày sắp tới đều dễ dàng. Nhưng anh muốn luôn là người có thể lắng nghe em, cùng em tìm cách giải quyết những chuyện khó và ăn mừng mọi niềm vui nhỏ.",
    "Vậy nên, cảm ơn em vì nửa năm qua. Anh muốn tiếp tục yêu em theo cách dịu dàng, tử tế và vui vẻ hơn mỗi ngày.",
  ],
  postscript: "P.S. Đọc đến đây được quyền yêu cầu một chiếc ôm (không giới hạn thời gian).",
};

export const roles = {
  kicker: "Tuyển tập nhân vật · Nữ chính độc quyền",
  intro: "Sáu tháng bên nhau, anh phát hiện em có rất nhiều phiên bản khiến anh rung rinh.",
  heading: "Em vừa là…",
  items: [
    { tab: "Em bé", phrase: "Chiếc bánh bao dễ thương", note: "Yêu cầu ôm bất ngờ, mức độ dễ thương gây mất tập trung." },
    { tab: "Bạn thân", phrase: "Đồng đội tám chuyện", note: "Người anh muốn kể ngay khi có chuyện vui hoặc gặp chuyện không ổn." },
    { tab: "Foodie", phrase: "Đối tác ăn uống", note: "Câu hỏi thường trực: 'Ăn gì bây giờ?' — quyết định không dễ nhưng rất vui." },
    { tab: "Siêu sao", phrase: "Nhân vật chính của mọi khung hình", note: "Chỉ cần em xuất hiện, ảnh điện thoại anh tự nhiên có ý nghĩa hơn." },
    { tab: "Người yêu", phrase: "Lựa chọn anh trân trọng", note: "Không phải danh hiệu cho đẹp. Là người anh muốn cùng xây những ngày tiếp theo." },
  ],
};

export const quiz = {
  kicker: "The Couple Lab · Bài kiểm tra không chính thống",
  title: "Hai đứa thuộc hệ cặp đôi nào?",
  intro: "Bốn câu hỏi vui, không đúng sai. Kết quả được tính theo câu trả lời em chọn nhiều nhất nhé!",
  questions: [
    { q: "Một buổi hẹn lý tưởng của tụi mình là…", options: ["Đi dạo và tâm sự", "Chọc nhau cười té ghế", "Ăn hết một con phố", "Lên đường tới nơi mới"] },
    { q: "Tin nhắn nào làm em vui nhất?", options: ["'Anh nhớ em'", "Một meme siêu nhảm", "'Đi ăn không em?'", "'Cuối tuần mình đi chơi nhé'"] },
    { q: "Nếu có một ngày rảnh hoàn toàn, em chọn…", options: ["Ở cạnh nhau đọc sách/xem phim", "Chơi trò thử thách ngớ ngẩn", "Đi food tour", "Một chuyến đi ngắn"] },
    { q: "Sáu tháng tiếp theo, em muốn thêm…", options: ["Thật nhiều cái ôm", "Thật nhiều tiếng cười", "Thật nhiều quán ngon", "Thật nhiều nơi mới"] },
  ],
  results: [
    { title: "Cặp đôi Gấu Bông 🧸", text: "Ấm áp và yêu những điều nhỏ xíu. Hẹn nhau thêm thật nhiều tối bình yên nhé!" },
    { title: "Cặp đôi Sitcom 🤭", text: "Ở bên nhau là có tiếng cười. Anh xin nhận vai nam chính hơi ngốc dài hạn." },
    { title: "Cặp đôi Food Tour 🍰", text: "Ngôn ngữ tình yêu là 'Ăn gì chưa?'. Lập danh sách quán mới ngay thôi!" },
    { title: "Cặp đôi Phiêu Lưu 🧳", text: "Thích khám phá và lưu giữ kỷ niệm. Bản đồ hẹn hò của hai đứa vẫn còn rất dài!" },
  ],
  verdict: "Thông báo từ phòng thí nghiệm: kiểu nào cũng đáng yêu, miễn là hai đứa thích ở cạnh nhau ♡",
};

export const coupons = {
  kicker: "6 Months Anniversary Perks",
  title: "Phiếu yêu chiều hợp pháp",
  intro: "Quyền lợi đặc biệt dành cho người đã chịu đựng anh được nửa năm. Em chọn 1 phiếu trước nhé!",
  selectLabel: "Nhận phiếu này",
  selectedIntro: "Em đã chọn",
  copyLabel: "Sao chép để nhắn anh",
  copySuccess: "Đã sao chép! Nhớ nhắn cho anh để chốt lịch nhé ♡",
  copyFailed: "Sao chép tự động chưa được. Em chọn và gửi đoạn bên dưới nhé.",
  items: [
    { emoji: "🍜", title: "Một bữa ăn em chọn", subtitle: "VOUCHER NO. 01", description: "Quán nào, món nào, thời gian nào: cùng nhau chốt lịch. Anh tự nguyện đi cùng và trả phần anh đã hứa!" },
    { emoji: "🎡", title: "Một cuộc hẹn bí mật", subtitle: "VOUCHER NO. 02", description: "Anh lên ý tưởng cho một buổi hẹn bất ngờ, em chỉ cần chọn ngày mình đều rảnh." },
    { emoji: "🧸", title: "Một ngày được cưng", subtitle: "VOUCHER NO. 03", description: "Bao gồm: ôm, lắng nghe, khen xinh và quyền chọn phim. Điều khoản: không hết hạn!" },
  ],
};

export const wishes = {
  kicker: "Wishlist · Month Seven Loading",
  title: "3 điều mình hẹn nhau",
  intro: "Viết ra 3 điều em muốn hai đứa làm trong sáu tháng tiếp theo. Nội dung lưu trên trình duyệt; em cần nhấn chia sẻ hoặc sao chép rồi gửi cho anh nhé.",
  placeholders: ["Một nơi em muốn cùng anh đi…", "Một món ngon hoặc trải nghiệm mình muốn thử…", "Một điều em mong hai đứa cùng làm tốt hơn…"],
  sent: "Danh sách hẹn hò đã sẵn sàng! Nhớ chia sẻ hoặc dán tin nhắn cho anh để anh nhận được nhé.",
  sendTo: "", // Có thể điền link Messenger/Zalo. Không tự gửi nội dung tới người nhận.
};

export const editorialNote = {
  kicker: "From Your Silly Boyfriend",
  title: "Gửi em ở tháng thứ sáu",
  body: [
    "Tờ tạp chí này được in bằng rất nhiều dòng code và một lượng không hề nhỏ tình cảm. Ở đây không có ngôi sao điện ảnh hay người mẫu nổi tiếng; chỉ có em, anh và những ngày chúng mình đã đi qua.",
    "Anh muốn nói cảm ơn em thêm một lần nữa. Anh mong sau khi đóng trang web này lại, hai đứa vẫn luôn dành thời gian cho nhau, nói với nhau điều mình nghĩ, biết xin lỗi khi sai và biết cười cùng nhau mỗi ngày.",
  ],
  ps: "P.S. Hợp đồng yêu đương xin được gia hạn bằng những hành động tử tế mỗi ngày. 🩷",
  signOff: "Thương em,",
  signature: ME,
};

export const colophon = [
  { label: "Nữ chính", value: HER },
  { label: "Bạn trai / Biên tập viên", value: ME },
  { label: "Số đặc biệt", value: "Six Months · One Love" },
  { label: "Phát hành", value: issue.date },
];

export const gate = {
  line: "Bưu kiện tình cảm — tròn 06 tháng",
  hint: "Chạm vào con dấu để mở nửa năm thương nhớ ♡",
};

export const finale = {
  kicker: "The Next Chapter · Chưa phải kết thúc",
  question: "Hết 6 tháng dùng thử, em có muốn gia hạn làm người yêu anh không?",
  yes: "Gia hạn tiếp nè!",
  no: ["Đọc điều khoản đã", "Ơ kìa?", "Chờ em tí", "Nút này biết chạy!", "Bắt nó đi anh", "Cứ chọn từ từ nhé"],
  answer: "Đã gia hạn! ♡",
  answerNote: "Anh hứa tiếp tục là đồng đội tử tế của em: thêm nhiều cuộc hẹn, thêm nhiều tiếng cười, và cùng nhau lớn lên từng chút một.",
};
