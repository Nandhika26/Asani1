/**
 * ASANI - Platform Marketplace & Jasa Mahasiswa
 * Logic & State Controller
 * Developed for Horizon University Indonesia (Kelompok 6)
 */

// ==================== STATE MANAGEMENT & STORAGE ====================
const STORAGE_KEYS = {
  CAMPUS: 'asani_selected_campus',
  USER: 'asani_current_user',
  LISTINGS: 'asani_custom_listings',
  ORDERS: 'asani_orders_history',
  CHATS: 'asani_chat_history'
};

// Initial Campuses (Reflecting Slide 9 Mockup)
const INITIAL_CAMPUSES = [
  {
    id: 'horizon',
    name: 'Horizon University Karawang',
    address: 'Jl. Pangkal Perjuangan KM. 1 By Pass, Karawang, Jawa Barat',
    icon: '🎓',
    count: '12+ Produk Tersedia',
    defaultSelected: true
  },
  {
    id: 'itb',
    name: 'Institut Teknologi Bandung',
    address: 'Jl. Ganesha No 10, Coblong, Kota Bandung, Jawa Barat',
    icon: '🏛️',
    count: '8+ Produk Tersedia',
    defaultSelected: false
  },
  {
    id: 'ui',
    name: 'Universitas Indonesia',
    address: 'Kampus UI, Pondok Cina, Kota Depok, Jawa Barat',
    icon: '🏫',
    count: '10+ Produk Tersedia',
    defaultSelected: false
  },
  {
    id: 'unpad',
    name: 'Universitas Padjadjaran',
    address: 'Jl. Raya Bandung-Sumedang KM 21, Jatinangor, Sumedang',
    icon: '🌿',
    count: '7+ Produk Tersedia',
    defaultSelected: false
  },
  {
    id: 'ugm',
    name: 'Universitas Gadjah Mada',
    address: 'Bulaksumur, Caturtunggal, Sleman, D.I. Yogyakarta',
    icon: '📖',
    count: '9+ Produk Tersedia',
    defaultSelected: false
  },
  {
    id: 'ipb',
    name: 'Institut Pertanian Bogor',
    address: 'Jl. Raya Dramaga, Babakan, Kec. Dramaga, Bogor',
    icon: '🌱',
    count: '6+ Produk Tersedia',
    defaultSelected: false
  }
];

// Initial Catalog Items (Reflecting Slides 5, 7, 8)
const INITIAL_LISTINGS = [
  {
    id: 'item-1',
    campusId: 'horizon',
    type: 'fnb',
    subCategory: 'makanan',
    title: 'Nasi Ayam Geprek Sambal Korek (Kantin B)',
    price: 15000,
    priceUnit: '/ porsi',
    icon: '🍗',
    seller: 'Kantin Teh Neneng (Agribisnis \'23)',
    whatsapp: '081234567891',
    desc: 'Ayam krispi gurih dengan sambal bawang korek pedas nampol. Termasuk nasi hangat pulen + lalapan timun. Siap antar ke kelas atau COD di Kantin Gedung B!',
    rating: 4.9,
    sold: 142,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-2',
    campusId: 'horizon',
    type: 'jasa',
    subCategory: 'print',
    title: 'Jasa Print Makalah / Skripsi & Antar ke Kosan',
    price: 500,
    priceUnit: '/ lembar',
    icon: '🖨️',
    seller: 'Fajar (Teknik Industri \'23)',
    whatsapp: '081234567892',
    desc: 'Layanan print hitam putih (Rp 500) dan warna (Rp 1.000). Menggunakan kertas HVS 75/80 gsm. Bisa jilid mika/lakban. Siap COD di perpus atau diantar ke kosan sekitar kampus.',
    rating: 5.0,
    sold: 89,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-3',
    campusId: 'horizon',
    type: 'fnb',
    subCategory: 'makanan',
    title: 'Es Kopi Susu Gula Aren "Mhs Santai" 250ml',
    price: 12000,
    priceUnit: '/ botol',
    icon: '🧃',
    seller: 'Dika (Manajemen \'22)',
    whatsapp: '081234567893',
    desc: 'Kopi susu kekinian racikan mahasiswa, 100% biji kopi Robusta asli dipadukan dengan gula aren organik murni dan fresh milk. Dingin, segar, cocok buat nemenin nugas kuliah!',
    rating: 4.8,
    sold: 210,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-4',
    campusId: 'horizon',
    type: 'jasa',
    subCategory: 'desain',
    title: 'Jasa Desain PPT Kuliah & Infografis Aesthetic',
    price: 25000,
    priceUnit: '/ deck (10 slide)',
    icon: '🎨',
    seller: 'Salsabila (Sistem Informasi \'22)',
    whatsapp: '081234567894',
    desc: 'Buat presentasi kuliahmu memukau dosen! Pengerjaan kilat 24 jam dengan desain modern, visualisasi data, animasi clean, dan siap pakai format .pptx & PDF.',
    rating: 4.95,
    sold: 56,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-5',
    campusId: 'horizon',
    type: 'marketplace',
    subCategory: 'buku',
    title: 'Buku Kalkulus Purcell Edisi 9 (Kondisi 95% Mulus)',
    price: 45000,
    priceUnit: '',
    icon: '📚',
    seller: 'Andi (Teknik Informatika \'21)',
    whatsapp: '081234567895',
    desc: 'Buku wajib mata kuliah Matematika Dasar & Kalkulus. Kondisi buku sangat terawat, bersih tanpa coretan stabilo berlebih. Bonus catatan rumus ringkas tulisan tangan!',
    rating: 5.0,
    sold: 1,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-6',
    campusId: 'horizon',
    type: 'jasa',
    subCategory: 'antar',
    title: 'Jasa Titip (Jastip) Makanan & Stasiun Karawang',
    price: 5000,
    priceUnit: '/ trip',
    icon: '🛵',
    seller: 'Bagus (Hukum \'24)',
    whatsapp: '081234567896',
    desc: 'Mau titip beli makan di luar kampus, fotokopian, atau jemput paket di stasiun/ekspedisi? Hubungi Bagus! Tarif hemat bersahabat sesama mahasiswa.',
    rating: 4.7,
    sold: 73,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-7',
    campusId: 'horizon',
    type: 'fnb',
    subCategory: 'makanan',
    title: 'Dimsum Mentai Mozarella Homemade (Isi 4)',
    price: 18000,
    priceUnit: '/ box',
    icon: '🥟',
    seller: 'Nadia (Akuntansi \'24)',
    whatsapp: '081234567897',
    desc: 'Dimsum ayam udang padat dengan saus mentai gurih dibakar torch dan lelehan keju mozarella. Hangat dan lezat untuk cemilan jeda kuliah!',
    rating: 4.9,
    sold: 65,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-8',
    campusId: 'horizon',
    type: 'jasa',
    subCategory: 'elektronik',
    title: 'Jasa Install Ulang OS & Software Kuliah (Office/SPSS/Matlab)',
    price: 50000,
    priceUnit: '/ laptop',
    icon: '💻',
    seller: 'Rian Pratama (TI \'22)',
    whatsapp: '081234567890',
    desc: 'Laptop lemot atau kena virus? Install ulang Windows 10/11 bersih + aktivasi, install Microsoft Office, PDF Reader, SPSS, Photoshop, VSCode. Bergaransi 1 minggu!',
    rating: 5.0,
    sold: 34,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-9',
    campusId: 'horizon',
    type: 'marketplace',
    subCategory: 'buku',
    title: 'Totebag Kanvas Aesthetic Campus Life (Anti Air)',
    price: 35000,
    priceUnit: '',
    icon: '👜',
    seller: 'Maya (Manajemen Bisnis \'23)',
    whatsapp: '081234567898',
    desc: 'Totebag bahan kanvas tebal waterproof dengan resleting dan saku dalam untuk laptop 14 inch. Sablon kuat bertema kutipan kampus kekinian.',
    rating: 4.8,
    sold: 40,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-10',
    campusId: 'horizon',
    type: 'fnb',
    subCategory: 'makanan',
    title: 'Roti Bakar Bandung Coklat Keju Lumer',
    price: 10000,
    priceUnit: '/ porsi',
    icon: '🍞',
    seller: 'Ormawa Entrepreneur Hub',
    whatsapp: '081234567899',
    desc: 'Roti bakar tebal dengan olesan mentega wangi, meses coklat melimpah, dan parutan keju cheddar gurih. Dijual untuk dana usaha kegiatan kampus.',
    rating: 4.6,
    sold: 95,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-11',
    campusId: 'horizon',
    type: 'marketplace',
    subCategory: 'elektronik',
    title: 'Kalkulator Scientific Casio fx-991EX Original',
    price: 140000,
    priceUnit: '',
    icon: '🧮',
    seller: 'Hendra (Teknik Mesin \'21)',
    whatsapp: '081234567800',
    desc: 'Kalkulator fungsi lengkap untuk matkul Teknik & Sains. Layar LCD resolusi tinggi, dual power solar + baterai. Kondisi tombol prima 100% normal.',
    rating: 4.9,
    sold: 1,
    campus: 'Horizon University Karawang'
  },
  {
    id: 'item-12',
    campusId: 'horizon',
    type: 'jasa',
    subCategory: 'les',
    title: 'Les Privat Tutor Algoritma Pemrograman & Web',
    price: 40000,
    priceUnit: '/ jam',
    icon: '🎓',
    seller: 'Rian Pratama (TI \'22)',
    whatsapp: '081234567890',
    desc: 'Bimbingan santai 1-on-1 belajar Python, C++, HTML, CSS, JavaScript, atau bantuan problem tugas praktikum lab. Tempat di Perpus atau via Google Meet.',
    rating: 5.0,
    sold: 28,
    campus: 'Horizon University Karawang'
  },
  // Sample items for ITB
  {
    id: 'item-itb-1',
    campusId: 'itb',
    type: 'jasa',
    subCategory: 'les',
    title: 'Tutor Kalkulus 1A & Fisika Dasar ITB',
    price: 50000,
    priceUnit: '/ sesi',
    icon: '📐',
    seller: 'Farhan (STEI ITB \'22)',
    whatsapp: '081234567801',
    desc: 'Persiapan UTS & UAS TPB ITB. Pembahasan bank soal 5 tahun terakhir, tips cepat pengerjaan soal ujian.',
    rating: 4.9,
    sold: 45,
    campus: 'Institut Teknologi Bandung'
  },
  {
    id: 'item-itb-2',
    campusId: 'itb',
    type: 'fnb',
    subCategory: 'makanan',
    title: 'Cuanki & Batagor Ganesha Spesial Pedas',
    price: 15000,
    priceUnit: '/ mangkok',
    icon: '🍲',
    seller: 'Kantin Borromeus Squad',
    whatsapp: '081234567802',
    desc: 'Batagor renyah disiram bumbu kacang gurih atau kuah kaldu segar. Bisa dipesan saat jeda kuliah di Lapangan Merah.',
    rating: 4.8,
    sold: 80,
    campus: 'Institut Teknologi Bandung'
  },
  // Sample items for UI
  {
    id: 'item-ui-1',
    campusId: 'ui',
    type: 'marketplace',
    subCategory: 'fashion',
    title: 'Jaket Kuning UI Official Preloved Size M',
    price: 85000,
    priceUnit: '',
    icon: '🧥',
    seller: 'Anisa (FISIP UI \'23)',
    whatsapp: '081234567803',
    desc: 'Jaket Kuning UI original, kondisi 98% seperti baru jarang dipakai. Siap COD di Stasiun UI atau Perpustakaan Kristal.',
    rating: 5.0,
    sold: 1,
    campus: 'Universitas Indonesia'
  },
  {
    id: 'item-ui-2',
    campusId: 'ui',
    type: 'jasa',
    subCategory: 'print',
    title: 'Jasa Proofreading Jurnal & Skripsi Bahasa Inggris',
    price: 15000,
    priceUnit: '/ halaman',
    icon: '📝',
    seller: 'Dimas (FIB UI \'21)',
    whatsapp: '081234567804',
    desc: 'Pemeriksaan grammar TOEFL/IELTS standar publikasi internasional. Cepat & teliti.',
    rating: 5.0,
    sold: 62,
    campus: 'Universitas Indonesia'
  }
];

// Subcategory mapping for dynamic dropdown
const SUB_CATEGORIES = {
  marketplace: [
    { value: 'buku', label: '📚 Buku & Diktat' },
    { value: 'atk', label: '✏️ ATK & Perlengkapan' },
    { value: 'fashion', label: '👕 Pakaian & Merchandise' },
    { value: 'elektronik', label: '💻 Elektronik & Aksesoris' },
    { value: 'lainnya', label: '📦 Produk Lainnya' }
  ],
  fnb: [
    { value: 'makanan', label: '🍜 Makanan Berat' },
    { value: 'snack', label: '🍪 Snack & Cemilan' },
    { value: 'kopi', label: '☕ Kopi & Minuman' },
    { value: 'catering', label: '🍱 Catering & Bekal' }
  ],
  jasa: [
    { value: 'print', label: '🖨️ Jasa Print & Ketik' },
    { value: 'desain', label: '🎨 Desain Grafis & PPT' },
    { value: 'antar', label: '🛵 Antar Jemput & Jastip' },
    { value: 'les', label: '🎓 Les Privat & Tutor' },
    { value: 'elektronik', label: '💻 Servis Laptop & Gadget' }
  ]
};

// Application State
let appState = {
  currentCampus: null,
  currentUser: {
    name: 'Rian Pratama',
    email: 'rian.pratama@horizon.ac.id',
    major: 'Teknik Informatika \'22',
    campus: 'Horizon University Karawang',
    isLoggedIn: true
  },
  categoryFilter: 'all',     // 'all' | 'marketplace' | 'fnb' | 'jasa'
  subFilter: 'all',          // 'all' | 'makanan' | 'print' etc.
  searchQuery: '',
  sortBy: 'popular',
  activeView: 'home',
  activeDetailItem: null,
  activeChatRecipient: null,
  tempSelectedCampusId: null
};

// Initial Orders Mockup
let appOrders = [
  {
    id: 'ORD-7201',
    itemTitle: 'Nasi Ayam Geprek Sambal Korek (Kantin B)',
    icon: '🍗',
    seller: 'Teh Neneng',
    price: 15000,
    qty: 2,
    total: 30000,
    method: '📍 COD di Kantin Gedung B',
    status: 'Selesai',
    statusCode: 'status-completed',
    date: 'Hari ini, 12:15 WIB'
  }
];

// Initial Chat Threads
let appChatThreads = [
  {
    id: 'chat-1',
    name: 'Teh Neneng (Kantin B)',
    role: 'Penjual Nasi Ayam Geprek',
    avatar: 'TN',
    unread: 1,
    lastTime: '12:30',
    messages: [
      { sender: 'them', text: 'Halo dek Rian! Pesanan ayam gepreknya sudah siap ya di kantin.', time: '12:10' },
      { sender: 'me', text: 'Siap Teh! Ini lagi jalan ke Kantin Gedung B.', time: '12:12' },
      { sender: 'them', text: 'Oke ditunggu ya, sudah dibungkus rapi sambel koreknya dipisah.', time: '12:14' }
    ]
  },
  {
    id: 'chat-2',
    name: 'Fajar (Print Makalah)',
    role: 'Penyedia Jasa Print Skripsi',
    avatar: 'FJ',
    unread: 1,
    lastTime: '10:45',
    messages: [
      { sender: 'them', text: 'Halo kak, untuk file tugas makalahnya mau dijilid mika bening atau lakban hitam?', time: '10:40' },
      { sender: 'me', text: 'Mika bening aja kak yang rapi.', time: '10:42' },
      { sender: 'them', text: 'Siap kak, nanti sore jam 3 bisa COD di Gazebo depan Perpus.', time: '10:45' }
    ]
  },
  {
    id: 'chat-3',
    name: 'Salsabila (Desain PPT)',
    role: 'Penyedia Jasa Desain Grafis',
    avatar: 'SB',
    unread: 0,
    lastTime: 'Kemarin',
    messages: [
      { sender: 'me', text: 'Halo kak Salsa, bisa tolong buatin PPT presentasi 10 slide materi AI?', time: 'Kemarin 19:00' },
      { sender: 'them', text: 'Bisa banget kak! Kirimkan materi draftnya lewat sini atau WA ya.', time: 'Kemarin 19:15' }
    ]
  }
];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initCampus();
  initAuthUI();
  populateCampusModalList();
  renderCatalog();
  renderOrders();
  renderChatThreads();
  setupListingTypeSubcategories();
});

function initStorage() {
  const savedCampus = localStorage.getItem(STORAGE_KEYS.CAMPUS);
  if (savedCampus) {
    try {
      appState.currentCampus = JSON.parse(savedCampus);
    } catch (e) {
      appState.currentCampus = INITIAL_CAMPUSES[0];
    }
  } else {
    appState.currentCampus = INITIAL_CAMPUSES[0];
  }

  const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
  if (savedUser) {
    try {
      appState.currentUser = JSON.parse(savedUser);
    } catch (e) {}
  }

  const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
  if (savedOrders) {
    try {
      appOrders = JSON.parse(savedOrders);
    } catch (e) {}
  }

  const savedChats = localStorage.getItem(STORAGE_KEYS.CHATS);
  if (savedChats) {
    try {
      appChatThreads = JSON.parse(savedChats);
    } catch (e) {}
  }
}

function initCampus() {
  updateCampusUI();
}

function updateCampusUI() {
  const cName = appState.currentCampus.name;
  document.getElementById('currentCampusName').textContent = cName;
  document.getElementById('mobileCampusName').textContent = cName;
  document.getElementById('heroCampusBadge').textContent = cName;
  document.getElementById('catalogCampusHighlight').textContent = cName;
  document.getElementById('listingCampus').value = cName;
  document.getElementById('profileCampusTag').textContent = cName;
}

function initAuthUI() {
  const authWrap = document.getElementById('userAuthSection');
  if (appState.currentUser && appState.currentUser.isLoggedIn) {
    authWrap.innerHTML = `
      <div class="user-profile-badge-btn" onclick="navigateTo('profile')" title="Lihat Profil">
        <div class="user-avatar-sm">${getInitials(appState.currentUser.name)}</div>
        <span class="user-badge-name">${appState.currentUser.name.split(' ')[0]}</span>
      </div>
    `;
    document.getElementById('profileUserName').textContent = appState.currentUser.name;
    document.getElementById('profileUserMeta').textContent = `${appState.currentUser.major} • ${appState.currentCampus.name}`;
    document.getElementById('profileEmail').textContent = appState.currentUser.email;
    document.getElementById('profileAvatarLarge').textContent = getInitials(appState.currentUser.name);
  } else {
    authWrap.innerHTML = `
      <button class="btn btn-outline-primary" onclick="openAuthModal()">Masuk / Daftar</button>
    `;
  }
}

function getInitials(name) {
  if (!name) return 'M';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

// ==================== NAVIGATION CONTROLLER ====================
function navigateTo(viewId) {
  appState.activeView = viewId;

  // Views switch
  const views = {
    home: document.getElementById('viewHome'),
    orders: document.getElementById('viewOrders'),
    chat: document.getElementById('viewChat'),
    profile: document.getElementById('viewProfile')
  };

  Object.keys(views).forEach(k => {
    if (k === viewId) {
      views[k].classList.add('active');
    } else {
      views[k].classList.remove('active');
    }
  });

  // Mobile Bottom Nav items update
  const navItems = {
    home: document.getElementById('navHome'),
    orders: document.getElementById('navOrders'),
    chat: document.getElementById('navChat'),
    profile: document.getElementById('navProfile')
  };

  Object.keys(navItems).forEach(k => {
    if (navItems[k]) {
      if (k === viewId) {
        navItems[k].classList.add('active');
      } else {
        navItems[k].classList.remove('active');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewId === 'chat' && appChatThreads.length > 0 && !appState.activeChatRecipient) {
    selectChatThread(appChatThreads[0].id);
  }

  if (viewId === 'orders') {
    renderOrders();
    renderMyListings();
  }
}

// ==================== CATALOG RENDERING & FILTERING ====================
function getCombinedListings() {
  const customListings = JSON.parse(localStorage.getItem(STORAGE_KEYS.LISTINGS) || '[]');
  return [...customListings, ...INITIAL_LISTINGS];
}

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  const emptyState = document.getElementById('emptyState');
  const countBadge = document.getElementById('itemsCountBadge');

  const allItems = getCombinedListings();
  
  // Filter by Campus
  let filtered = allItems.filter(item => {
    if (item.campusId) {
      return item.campusId === appState.currentCampus.id;
    }
    return item.campus.toLowerCase().includes(appState.currentCampus.name.toLowerCase());
  });

  // If specific campus has no items, show default Horizon ones with a note or show empty
  if (filtered.length === 0 && appState.currentCampus.id !== 'horizon') {
    // Show campus specific or fallback
  }

  // Filter by Main Category
  if (appState.categoryFilter !== 'all') {
    filtered = filtered.filter(item => item.type === appState.categoryFilter);
  }

  // Filter by Sub-Category
  if (appState.subFilter !== 'all') {
    filtered = filtered.filter(item => item.subCategory === appState.subFilter);
  }

  // Filter by Search Query
  if (appState.searchQuery.trim() !== '') {
    const q = appState.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.seller.toLowerCase().includes(q) ||
      (item.subCategory && item.subCategory.toLowerCase().includes(q))
    );
  }

  // Sorting
  if (appState.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (appState.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (appState.sortBy === 'newest') {
    filtered.reverse();
  } else {
    // Popular
    filtered.sort((a, b) => (b.sold || 0) - (a.sold || 0));
  }

  countBadge.textContent = `${filtered.length} Item Ditemukan`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(item => {
    const badgeClass = item.type === 'marketplace' ? 'badge-marketplace' : (item.type === 'fnb' ? 'badge-fnb' : 'badge-jasa');
    const typeLabel = item.type === 'marketplace' ? 'Marketplace' : (item.type === 'fnb' ? 'Food & Beverage' : 'Jasa');
    
    return `
      <div class="catalog-item-card" onclick="openDetailModal('${item.id}')">
        <div class="item-thumb-box">
          <span class="item-thumb-icon">${item.icon || '📦'}</span>
          <span class="item-type-badge ${badgeClass}">${typeLabel}</span>
          <span class="item-campus-tag">📍 ${item.campus.split(' ')[0]}</span>
        </div>
        <div class="item-content-body">
          <div class="item-seller-line">
            <span class="seller-avatar-mini">${item.seller.charAt(0)}</span>
            <span>${item.seller}</span>
          </div>
          <h3 class="item-title" title="${item.title}">${item.title}</h3>
          <div class="item-price-row">
            <span class="item-price">Rp ${formatNumber(item.price)}</span>
            <span class="item-unit">${item.priceUnit || ''}</span>
          </div>
          <p class="item-desc-snippet">${item.desc}</p>
          <div class="item-card-actions" onclick="event.stopPropagation()">
            <button class="btn-card-detail" onclick="openDetailModal('${item.id}')">Lihat Detail</button>
            <button class="btn-card-chat" onclick="openChatFromCard('${item.id}')" title="Hubungi Penjual">
              💬 Chat
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterByCategory(cat) {
  appState.categoryFilter = cat;
  
  // Highlight UI reset button if not 'all'
  const resetBtn = document.getElementById('resetCategoryBtn');
  if (cat !== 'all') {
    resetBtn.style.color = '#1d4ed8';
    resetBtn.textContent = `Kategori: ${cat.toUpperCase()} (Klik untuk Reset)`;
  } else {
    resetBtn.style.color = '';
    resetBtn.textContent = 'Lihat Semua (Reset)';
  }

  // Scroll smoothly to catalog
  scrollToCatalog();
  renderCatalog();
}

function filterBySub(sub, btnElem) {
  appState.subFilter = sub;
  
  // Update active pill button
  const pills = document.querySelectorAll('.subfilter-scroll .pill-btn');
  pills.forEach(p => p.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');

  renderCatalog();
}

function handleSearch(query) {
  appState.searchQuery = query;
  const activeTag = document.getElementById('activeQueryTag');
  const queryText = document.getElementById('queryText');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (query.trim() !== '') {
    activeTag.style.display = 'inline-flex';
    queryText.textContent = query;
    if (clearBtn) clearBtn.style.display = 'block';
  } else {
    activeTag.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'none';
  }

  renderCatalog();
}

function clearSearch() {
  document.getElementById('globalSearchInput').value = '';
  const mobileInput = document.querySelector('.mobile-search-container input');
  if (mobileInput) mobileInput.value = '';
  handleSearch('');
}

function handleSortChange(sortVal) {
  appState.sortBy = sortVal;
  renderCatalog();
}

function scrollToCatalog() {
  const el = document.getElementById('catalogSection');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==================== CAMPUS SELECTOR MODAL (Slide 9 Exact Mockup) ====================
function openCampusModal() {
  appState.tempSelectedCampusId = appState.currentCampus.id;
  document.getElementById('campusModal').classList.add('active');
  populateCampusModalList();
}

function closeCampusModal() {
  document.getElementById('campusModal').classList.remove('active');
}

function populateCampusModalList(filterKeyword = '') {
  const grid = document.getElementById('campusGridList');
  let list = INITIAL_CAMPUSES;

  if (filterKeyword.trim() !== '') {
    const kw = filterKeyword.toLowerCase().trim();
    list = list.filter(c => c.name.toLowerCase().includes(kw) || c.address.toLowerCase().includes(kw));
  }

  grid.innerHTML = list.map(c => {
    const isSelected = c.id === appState.tempSelectedCampusId;
    return `
      <div class="campus-item-card ${isSelected ? 'selected' : ''}" onclick="selectCampusCard('${c.id}')">
        <div class="campus-logo-box">${c.icon}</div>
        <h4 class="campus-card-name">${c.name}</h4>
        <p class="campus-card-address">${c.address}</p>
        ${isSelected ? `<span class="campus-card-badge">Dipilih • ${c.count}</span>` : ''}
      </div>
    `;
  }).join('');
}

function filterCampusList(query) {
  populateCampusModalList(query);
}

function selectCampusCard(campusId) {
  appState.tempSelectedCampusId = campusId;
  populateCampusModalList(document.getElementById('campusSearchInput').value);
}

function confirmCampusSelection() {
  const found = INITIAL_CAMPUSES.find(c => c.id === appState.tempSelectedCampusId);
  if (found) {
    appState.currentCampus = found;
    localStorage.setItem(STORAGE_KEYS.CAMPUS, JSON.stringify(found));
    updateCampusUI();
    renderCatalog();
    showToast(`Lokasi kampus dialihkan ke: ${found.name}`, 'success');
  }
  closeCampusModal();
}

// ==================== AUTH MODAL (Slide 9 Exact Mockup) ====================
let isRegisterMode = false;

function openAuthModal() {
  document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('active');
}

function toggleAuthMode() {
  isRegisterMode = !isRegisterMode;
  const modeTitle = document.getElementById('authModeTitle');
  const nameGroup = document.getElementById('nameGroup');
  const submitBtn = document.getElementById('authSubmitBtn');
  const switchPrompt = document.getElementById('authSwitchPrompt');
  const toggleBtn = document.getElementById('authToggleModeBtn');

  if (isRegisterMode) {
    modeTitle.textContent = 'Daftar Akun Mahasiswa Baru';
    nameGroup.style.display = 'block';
    submitBtn.textContent = 'Daftar Sekarang';
    switchPrompt.textContent = 'Sudah punya akun?';
    toggleBtn.textContent = 'Masuk di Sini';
  } else {
    modeTitle.textContent = 'Masuk ke Akun Kampus';
    nameGroup.style.display = 'none';
    submitBtn.textContent = 'Masuk Sekarang';
    switchPrompt.textContent = 'Belum punya akun?';
    toggleBtn.textContent = 'Daftar Sekarang';
  }
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('authEmail').value;
  let name = 'Rian Pratama';

  if (isRegisterMode) {
    name = document.getElementById('authName').value || 'Mahasiswa Baru';
  } else {
    name = email.split('@')[0].replace('.', ' ').toUpperCase();
  }

  appState.currentUser = {
    name: name,
    email: email,
    major: 'Mahasiswa Aktif',
    campus: appState.currentCampus.name,
    isLoggedIn: true
  };

  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(appState.currentUser));
  initAuthUI();
  closeAuthModal();
  showToast(`Selamat datang, ${appState.currentUser.name}!`, 'success');
}

// ==================== ADD LISTING MODAL (Slide 6 Earn & Build) ====================
function openAddListingModal() {
  document.getElementById('listingCampus').value = appState.currentCampus.name;
  setupListingTypeSubcategories();
  document.getElementById('addListingModal').classList.add('active');
}

function closeAddListingModal() {
  document.getElementById('addListingModal').classList.remove('active');
}

function setupListingTypeSubcategories() {
  const typeSelect = document.getElementById('listingType');
  if (!typeSelect) return;
  const currentType = typeSelect.value;
  const subSelect = document.getElementById('listingSubCategory');
  const options = SUB_CATEGORIES[currentType] || [];

  subSelect.innerHTML = options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');
}

function handleListingTypeChange(type) {
  setupListingTypeSubcategories();
}

function pickListingIcon(icon, btnElem) {
  document.getElementById('selectedIcon').value = icon;
  const btns = document.querySelectorAll('#sampleIconsPicker .icon-pick-btn');
  btns.forEach(b => b.classList.remove('active'));
  btnElem.classList.add('active');
}

function handleCreateListing(e) {
  e.preventDefault();

  const newListing = {
    id: 'custom-' + Date.now(),
    campusId: appState.currentCampus.id,
    type: document.getElementById('listingType').value,
    subCategory: document.getElementById('listingSubCategory').value,
    title: document.getElementById('listingTitle').value,
    price: parseInt(document.getElementById('listingPrice').value, 10),
    priceUnit: document.getElementById('listingPriceUnit').value || '',
    desc: document.getElementById('listingDesc').value,
    seller: document.getElementById('listingSeller').value,
    whatsapp: document.getElementById('listingWhatsapp').value,
    campus: appState.currentCampus.name,
    icon: document.getElementById('selectedIcon').value || '📦',
    rating: 5.0,
    sold: 0
  };

  const currentListings = JSON.parse(localStorage.getItem(STORAGE_KEYS.LISTINGS) || '[]');
  currentListings.unshift(newListing);
  localStorage.setItem(STORAGE_KEYS.LISTINGS, JSON.stringify(currentListings));

  closeAddListingModal();
  renderCatalog();
  renderMyListings();
  showToast('Lapak berhasil dipublikasikan ke katalog kampus!', 'success');
  
  // Reset form
  document.getElementById('addListingForm').reset();
}

// ==================== DETAIL MODAL ====================
function openDetailModal(itemId) {
  const allItems = getCombinedListings();
  const item = allItems.find(i => i.id === itemId);
  if (!item) return;

  appState.activeDetailItem = item;

  document.getElementById('detailBigIcon').textContent = item.icon || '📦';
  document.getElementById('detailCategoryPill').textContent = item.type.toUpperCase();
  document.getElementById('detailCampusLocation').textContent = item.campus;
  document.getElementById('detailTitle').textContent = item.title;
  document.getElementById('detailPrice').textContent = `Rp ${formatNumber(item.price)}`;
  document.getElementById('detailUnit').textContent = item.priceUnit || '';
  document.getElementById('detailSellerName').textContent = item.seller;
  document.getElementById('detailSellerAvatar').textContent = item.seller.charAt(0);
  document.getElementById('detailDesc').textContent = item.desc;

  document.getElementById('detailModal').classList.add('active');
}

function closeDetailModal() {
  document.getElementById('detailModal').classList.remove('active');
}

// ==================== ORDER / CHECKOUT MODAL ====================
function openOrderModalFromDetail() {
  if (!appState.activeDetailItem) return;
  closeDetailModal();

  document.getElementById('orderItemTitle').textContent = appState.activeDetailItem.title;
  document.getElementById('orderItemPrice').textContent = `Rp ${formatNumber(appState.activeDetailItem.price)} ${appState.activeDetailItem.priceUnit || ''}`;
  document.getElementById('orderQty').value = 1;
  calculateOrderTotal();

  document.getElementById('orderModal').classList.add('active');
}

function closeOrderModal() {
  document.getElementById('orderModal').classList.remove('active');
}

function calculateOrderTotal() {
  if (!appState.activeDetailItem) return;
  const qty = parseInt(document.getElementById('orderQty').value, 10) || 1;
  const total = appState.activeDetailItem.price * qty;
  document.getElementById('orderTotal').value = `Rp ${formatNumber(total)}`;
}

function handleConfirmOrder(e) {
  e.preventDefault();
  if (!appState.activeDetailItem) return;

  const qty = parseInt(document.getElementById('orderQty').value, 10) || 1;
  const total = appState.activeDetailItem.price * qty;
  const methodSelect = document.getElementById('orderDeliveryMethod');
  const methodText = methodSelect.options[methodSelect.selectedIndex].text;
  const locNotes = document.getElementById('orderLocationNotes').value;

  const newOrder = {
    id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
    itemTitle: appState.activeDetailItem.title,
    icon: appState.activeDetailItem.icon || '📦',
    seller: appState.activeDetailItem.seller,
    price: appState.activeDetailItem.price,
    qty: qty,
    total: total,
    method: `${methodText} (${locNotes})`,
    status: 'Menunggu Konfirmasi',
    statusCode: 'status-pending',
    date: 'Baru saja'
  };

  appOrders.unshift(newOrder);
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(appOrders));

  closeOrderModal();
  showToast('Pesanan berhasil dibuat! Penjual telah menerima notifikasi.', 'success');
  navigateTo('orders');
}

// ==================== CHAT SYSTEM (Slide 7 & 8) ====================
function openChatFromCard(itemId) {
  const allItems = getCombinedListings();
  const item = allItems.find(i => i.id === itemId);
  if (!item) return;

  appState.activeDetailItem = item;
  startChatFromDetail();
}

function startChatFromDetail() {
  if (!appState.activeDetailItem) return;
  closeDetailModal();

  const item = appState.activeDetailItem;
  
  // Find or create chat thread
  let existing = appChatThreads.find(t => t.name.includes(item.seller.split(' ')[0]));
  if (!existing) {
    existing = {
      id: 'chat-' + Date.now(),
      name: item.seller,
      role: `Penjual ${item.title}`,
      avatar: item.seller.charAt(0),
      unread: 0,
      lastTime: 'Baru saja',
      messages: [
        { sender: 'me', text: `Halo kak, saya tertarik dengan "${item.title}". Apakah masih ada?`, time: 'Baru saja' }
      ]
    };
    appChatThreads.unshift(existing);
  } else {
    existing.messages.push({
      sender: 'me',
      text: `Halo kak, saya mau tanya tentang "${item.title}".`,
      time: 'Baru saja'
    });
  }

  saveChats();
  navigateTo('chat');
  selectChatThread(existing.id);

  // Auto seller reply simulation after 1 second
  simulateSellerReply(existing.id, `Halo kak! Masih tersedia kok untuk "${item.title}". Mau janjian COD di kampus atau dikirim kemana ya?`);
}

function renderChatThreads() {
  const listEl = document.getElementById('chatConversationsList');
  if (!listEl) return;

  listEl.innerHTML = appChatThreads.map(thread => {
    const isActive = appState.activeChatRecipient && appState.activeChatRecipient.id === thread.id;
    const lastMsg = thread.messages[thread.messages.length - 1];

    return `
      <div class="chat-thread-item ${isActive ? 'active' : ''}" onclick="selectChatThread('${thread.id}')">
        <div class="thread-avatar">${thread.avatar}</div>
        <div class="thread-info">
          <div class="thread-name">${thread.name}</div>
          <div class="thread-snippet">${lastMsg ? lastMsg.text : 'Belum ada pesan'}</div>
        </div>
        <div class="thread-meta">
          <span class="thread-time">${thread.lastTime}</span>
          ${thread.unread > 0 ? `<span class="unread-count">${thread.unread}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function selectChatThread(threadId) {
  const thread = appChatThreads.find(t => t.id === threadId);
  if (!thread) return;

  appState.activeChatRecipient = thread;
  thread.unread = 0;
  saveChats();

  // Update Active Chat Header
  document.getElementById('activeChatName').textContent = thread.name;
  document.getElementById('activeChatRole').textContent = `${thread.role} • Online`;
  document.getElementById('activeChatAvatar').textContent = thread.avatar;

  renderActiveMessages();
  renderChatThreads();
}

function renderActiveMessages() {
  const bodyEl = document.getElementById('chatMessagesBody');
  if (!appState.activeChatRecipient || !bodyEl) return;

  bodyEl.innerHTML = appState.activeChatRecipient.messages.map(m => `
    <div class="message-bubble ${m.sender === 'me' ? 'bubble-sent' : 'bubble-received'}">
      <div>${m.text}</div>
      <span class="bubble-time">${m.time}</span>
    </div>
  `).join('');

  bodyEl.scrollTop = bodyEl.scrollHeight;
}

function handleSendChat(e) {
  e.preventDefault();
  const input = document.getElementById('chatInputField');
  const text = input.value.trim();
  if (!text || !appState.activeChatRecipient) return;

  sendMessage(text);
  input.value = '';
}

function sendMessage(text) {
  if (!appState.activeChatRecipient) return;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  appState.activeChatRecipient.messages.push({
    sender: 'me',
    text: text,
    time: timeStr
  });

  appState.activeChatRecipient.lastTime = timeStr;
  saveChats();
  renderActiveMessages();
  renderChatThreads();

  // Automated smart reply from seller
  let replyText = 'Baik kak, terima kasih informasinya! Nanti saya kabari lagi begitu siap.';
  const lower = text.toLowerCase();

  if (lower.includes('ada') || lower.includes('ready')) {
    replyText = 'Halo kak, stoknya ready ya! Mau ambil langsung di kampus atau diantar ke kosan?';
  } else if (lower.includes('cod') || lower.includes('perpus') || lower.includes('kantin')) {
    replyText = 'Bisa banget kak! Jam istirahat kuliah nanti kita ketemuan ya di depan Perpustakaan / Kantin.';
  } else if (lower.includes('harga') || lower.includes('nego')) {
    replyText = 'Harganya sudah harga mahasiswa kak, dijamin paling terjangkau se-kampus!';
  } else if (lower.includes('jasa') || lower.includes('waktu')) {
    replyText = 'Estimasi pengerjaan 1 hari kerja kak, file bisa dikirim sekarang ya.';
  }

  simulateSellerReply(appState.activeChatRecipient.id, replyText);
}

function simulateSellerReply(threadId, replyText) {
  setTimeout(() => {
    const thread = appChatThreads.find(t => t.id === threadId);
    if (!thread) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    thread.messages.push({
      sender: 'them',
      text: replyText,
      time: timeStr
    });
    thread.lastTime = timeStr;

    saveChats();
    if (appState.activeChatRecipient && appState.activeChatRecipient.id === threadId) {
      renderActiveMessages();
    } else {
      thread.unread += 1;
    }
    renderChatThreads();
  }, 1000);
}

function sendQuickChip(text) {
  sendMessage(text);
}

function quickMessageCOD() {
  sendMessage('Halo kak, bisa janji temu COD di Gedung Kampus sekarang?');
}

function saveChats() {
  localStorage.setItem(STORAGE_KEYS.CHATS, JSON.stringify(appChatThreads));
}

// ==================== ORDERS & LAPAK SAYA VIEW ====================
function switchOrderTab(tab, btnElem) {
  const tabs = document.querySelectorAll('.orders-tab-nav .order-tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  btnElem.classList.add('active');

  const buyContent = document.getElementById('tabBuyingContent');
  const sellContent = document.getElementById('tabSellingContent');

  if (tab === 'buying') {
    buyContent.classList.add('active');
    sellContent.classList.remove('active');
    renderOrders();
  } else {
    buyContent.classList.remove('active');
    sellContent.classList.add('active');
    renderMyListings();
  }
}

function renderOrders() {
  const listEl = document.getElementById('buyingOrdersList');
  if (!listEl) return;

  if (appOrders.length === 0) {
    listEl.innerHTML = `
      <div class="empty-catalog-state">
        <div class="empty-icon">🛒</div>
        <h3>Belum Ada Pesanan Aktif</h3>
        <p>Anda belum memesan produk atau menggunakan jasa rekan kampus. Yuk jelajahi kebutuhanmu!</p>
        <button class="btn btn-primary" onclick="navigateTo('home')">Jelajahi Beranda</button>
      </div>
    `;
    return;
  }

  listEl.innerHTML = appOrders.map(order => `
    <div class="order-card">
      <div class="order-main-info">
        <div class="order-icon-thumb">${order.icon}</div>
        <div class="order-details">
          <h4>${order.itemTitle}</h4>
          <div class="order-meta-info">
            <span>Penjual: <strong>${order.seller}</strong></span>
            <span>•</span>
            <span>Kuantitas: ${order.qty}x</span>
            <span>•</span>
            <span>Metode: ${order.method}</span>
          </div>
        </div>
      </div>
      <div style="text-align: right;">
        <span class="order-status-badge ${order.statusCode}">${order.status}</span>
        <div style="font-weight: 800; color: #1e3a8a; font-size: 1.1rem; margin-top: 0.35rem;">
          Rp ${formatNumber(order.total)}
        </div>
      </div>
    </div>
  `).join('');
}

function renderMyListings() {
  const listEl = document.getElementById('myListingsContainer');
  if (!listEl) return;

  const customListings = JSON.parse(localStorage.getItem(STORAGE_KEYS.LISTINGS) || '[]');
  // Include preloaded student listings by Rian Pratama
  const studentListings = [
    ...customListings,
    INITIAL_LISTINGS.find(i => i.id === 'item-8'),
    INITIAL_LISTINGS.find(i => i.id === 'item-12')
  ].filter(Boolean);

  document.getElementById('pActiveListings').textContent = studentListings.length;

  if (studentListings.length === 0) {
    listEl.innerHTML = `
      <div class="empty-catalog-state">
        <div class="empty-icon">📦</div>
        <h3>Belum Ada Lapak Aktif</h3>
        <p>Ayo mulai usahamu dari sekarang! Tawarkan produk atau jasamu kepada teman satu kampus.</p>
        <button class="btn btn-primary" onclick="openAddListingModal()">+ Buka Lapak Baru</button>
      </div>
    `;
    return;
  }

  listEl.innerHTML = studentListings.map(item => `
    <div class="order-card">
      <div class="order-main-info">
        <div class="order-icon-thumb">${item.icon || '📦'}</div>
        <div class="order-details">
          <h4>${item.title}</h4>
          <div class="order-meta-info">
            <span>Kategori: <strong>${item.type.toUpperCase()}</strong></span>
            <span>•</span>
            <span>Harga: Rp ${formatNumber(item.price)} ${item.priceUnit || ''}</span>
          </div>
        </div>
      </div>
      <div>
        <span class="order-status-badge status-completed">Lapak Aktif</span>
      </div>
    </div>
  `).join('');
}

// ==================== MODALS 6 & 7 (ABOUT & PILLARS) ====================
function openAboutModal() {
  document.getElementById('aboutModal').classList.add('active');
}

function closeAboutModal() {
  document.getElementById('aboutModal').classList.remove('active');
}

function openPillarModal() {
  document.getElementById('pillarModal').classList.add('active');
}

function closePillarModal() {
  document.getElementById('pillarModal').classList.remove('active');
}

// ==================== UTILS ====================
function formatNumber(num) {
  if (isNaN(num)) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
