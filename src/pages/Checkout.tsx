import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Truck, ShieldCheck, MapPin, ChevronRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
}

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  const [step, setStep] = useState(1);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 1500 ? 0 : 50;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-12 pb-24">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Checkout Flow */}
        <div className="flex-grow space-y-12 lg:w-2/3">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            <span className={step >= 1 ? 'text-primary-red' : ''}>Teslimat</span>
            <ChevronRight size={14} />
            <span className={step >= 2 ? 'text-primary-red' : ''}>Ödeme</span>
            <ChevronRight size={14} />
            <span className={step >= 3 ? 'text-primary-red' : ''}>Onay</span>
          </div>

          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display uppercase mb-6 flex items-center gap-3">
                    <MapPin className="text-primary-red" />
                    Teslimat Bilgileri
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Ad</label>
                        <input type="text" className="w-full bg-gray-50 dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-800 p-4 outline-none focus:border-primary-red" placeholder="Adınız" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Soyad</label>
                        <input type="text" className="w-full bg-gray-50 dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-800 p-4 outline-none focus:border-primary-red" placeholder="Soyadınız" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Adres</label>
                        <textarea className="w-full bg-gray-50 dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-800 p-4 outline-none focus:border-primary-red h-32" placeholder="Mahalle, Sokak, No, Daire..."></textarea>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Şehir</label>
                        <input type="text" className="w-full bg-gray-50 dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-800 p-4 outline-none focus:border-primary-red" placeholder="İstanbul" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Telefon</label>
                        <input type="tel" className="w-full bg-gray-50 dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-800 p-4 outline-none focus:border-primary-red" placeholder="05XX XXX XX XX" />
                    </div>
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="btn-primary w-full md:w-auto px-12 py-4 uppercase text-sm tracking-widest font-bold"
              >
                Ödemeye Geç
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display uppercase mb-6 flex items-center gap-3">
                    <CreditCard className="text-primary-red" />
                    Ödeme Yöntemi
                </h2>
                <div className="space-y-6">
                    <div className="p-6 border-2 border-primary-red bg-primary-red/5 bg-opacity-10 rounded-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest">Kredi / Banka Kartı</h3>
                            <div className="flex gap-2">
                                <div className="w-10 h-6 bg-gray-200 dark:bg-zinc-700 rounded" />
                                <div className="w-10 h-6 bg-gray-200 dark:bg-zinc-700 rounded" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Kart Numarası</label>
                                <input type="text" className="w-full bg-white dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-800 p-4 outline-none focus:border-primary-red" placeholder="XXXX XXXX XXXX XXXX" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Son Kullanma Tarihi</label>
                                <input type="text" className="w-full bg-white dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-800 p-4 outline-none focus:border-primary-red" placeholder="AA / YY" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">CVV</label>
                                <input type="text" className="w-full bg-white dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-800 p-4 outline-none focus:border-primary-red" placeholder="XXX" />
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="btn-outline px-12">Geri</button>
                  <button 
                    onClick={() => setStep(3)}
                    className="btn-primary flex-1 py-4 uppercase text-sm tracking-widest font-bold"
                  >
                    Siparişi Tamamla (${total.toFixed(2)})
                  </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center space-y-6"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                 <ShieldCheck size={48} />
              </div>
              <h2 className="text-4xl font-display uppercase">Siparişiniz Alındı!</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Koleksiyonunuzun en yeni parçaları hazırlanıyor. Sipariş detaylarını e-posta adresinize gönderdik.
              </p>
              <div className="pt-8">
                <Link to="/" className="btn-primary inline-flex px-12">Ana Sayfaya Dön</Link>
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar Summary */}
        {step < 3 && (
           <div className="lg:w-1/3">
             <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-8 sticky top-24">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-primary-red">Sipariş Özeti</h3>
                <div className="space-y-4 mb-8">
                    {cart.map(item => (
                        <div key={item.id} className="flex gap-4 items-center">
                            <div className="w-12 h-16 bg-white dark:bg-zinc-800 p-1 flex-shrink-0 border border-gray-100 dark:border-zinc-800">
                                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-grow">
                                <h4 className="text-[10px] font-bold line-clamp-1 dark:text-white">{item.name}</h4>
                                <p className="text-[10px] text-gray-400">x{item.quantity}</p>
                            </div>
                            <span className="text-[10px] font-bold dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="space-y-4 text-[11px] font-bold uppercase tracking-widest border-t border-gray-200 dark:border-zinc-800 pt-6">
                    <div className="flex justify-between">
                        <span className="text-gray-400">Ara Toplam</span>
                        <span className="dark:text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Kargo</span>
                        <span className="dark:text-white">{shipping === 0 ? 'ÜCRETSİZ' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Vergi (18%)</span>
                        <span className="dark:text-white">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base border-t border-gray-200 dark:border-zinc-800 pt-6 mt-2">
                        <span className="dark:text-white">TOPLAM</span>
                        <span className="text-primary-red">${total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-white dark:bg-zinc-800 border border-dashed border-gray-200 dark:border-zinc-700 space-y-3">
                    <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400 uppercase">
                        <Lock size={12} className="text-green-500" />
                        Güvenli Ödeme
                    </div>
                    <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400 uppercase">
                        <Truck size={12} className="text-primary-red" />
                        Aynı Gün Gönderim
                    </div>
                </div>
             </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
