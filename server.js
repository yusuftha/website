import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Mock Database
const users = [];
const products = [
    { id: '1', name: 'Charizard GX (Full Art)', price: 1250.00, image: 'https://images.pokemontcg.io/sm115/SV49_hires.png', category: 'Tekli Kartlar', rarity: 'Nadir', description: 'Shiny Vault serisinden muazzam kondisyonda bir Charizard.' },
    { id: '2', name: 'Lugia Legend (Bottom)', price: 420.00, image: 'https://images.pokemontcg.io/hgss1/114_hires.png', category: 'Tekli Kartlar', rarity: 'Efsanevi', description: 'HGSS döneminden kalma efsanevi Lugia parças.' },
    { id: '3', name: 'Sword & Shield Booster', price: 95.00, image: 'https://picsum.photos/seed/booster/600/800', category: 'Booster Paketleri', rarity: 'Normal', description: 'Garantili hologramlı Sword & Shield booster paket.' },
    { id: '4', name: 'Rayquaza VMAX (Alt Art)', price: 1850.00, image: 'https://images.pokemontcg.io/swsh7/194_hires.png', category: 'Dereceli Kartlar', rarity: 'Gizli Nadir', description: 'Evolving Skies setinin en değerli kartlarından biri.' },
    { id: '5', name: 'Elite Trainer Box', price: 1540.00, image: 'https://picsum.photos/seed/etb/600/800', category: 'Elite Trainer Boxlar', rarity: 'Mühürlü', description: 'İçerisinde 8 paket ve özel koleksiyon aksesuarları.' },
    { id: '6', name: 'Umbreon VMAX (Alt Art)', price: 2100.00, image: 'https://images.pokemontcg.io/swsh7/215_hires.png', category: 'Dereceli Kartlar', rarity: 'Gizli Nadir', description: 'Koleksiyoncuların rüyası, Moonbreon olarak bilinen nadide parça.' }
];
const orders = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'tcg-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Dev mode
}));

// Routes - Auth
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ success: false, message: 'Bu e-posta zaten kayıtlı.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now().toString(), name, email, password: hashedPassword };
    users.push(newUser);
    req.session.userId = newUser.id;
    res.json({ success: true, message: 'Kayıt başarılı.' });
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user.id;
        return res.json({ success: true, message: 'Giriş başarılı.', user: { name: user.name, email: user.email } });
    }
    res.status(401).json({ success: false, message: 'Hatalı e-posta veya şifre.' });
});

app.get('/api/me', (req, res) => {
    const user = users.find(u => u.id === req.session.userId);
    if (user) {
        res.json({ loggedIn: true, user: { name: user.name, email: user.email } });
    } else {
        res.json({ loggedIn: false });
    }
});

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// Routes - Products
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: 'Ürün bulunamadı' });
});

// Routes - Sales
app.post('/api/checkout', (req, res) => {
    if (!req.session.userId) return res.status(401).json({ message: 'Lütfen giriş yapın.' });
    const { cart, address, payment } = req.body;
    const order = {
        id: 'ORD-' + Date.now(),
        userId: req.session.userId,
        items: cart,
        total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
        status: 'Alındı',
        date: new Date()
    };
    orders.push(order);
    res.json({ success: true, message: 'Sipariş başarıyla oluşturuldu.', orderId: order.id });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Boutique TCG Backend running on http://localhost:${PORT}`);
});
