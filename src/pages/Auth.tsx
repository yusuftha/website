import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-900 p-10 border border-gray-100 dark:border-zinc-800 shadow-2xl relative overflow-hidden"
      >
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-red" />

        <div className="text-center">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tighter text-dark-gray dark:text-white">
            {isLogin ? 'Tekrar Hoş Geldiniz' : 'Aramıza Katılın'}
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
            {isLogin ? 'Koleksiyoncu dünyasına dönün.' : 'En nadir kartları keşfetmeye başlayın.'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="relative"
                >
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Tam İsim</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      className="block w-full pl-10 pr-3 py-3 border-2 border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800 focus:border-primary-red dark:focus:border-primary-red outline-none transition-colors sm:text-sm font-medium"
                      placeholder="Ash Ketchum"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">E-posta Adresi</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border-2 border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800 focus:border-primary-red dark:focus:border-primary-red outline-none transition-colors sm:text-sm font-medium"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Şifre</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border-2 border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800 focus:border-primary-red dark:focus:border-primary-red outline-none transition-colors sm:text-sm font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-red focus:ring-primary-red border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500 cursor-pointer">
                  Beni Hatırla
                </label>
              </div>

              <div className="text-xs">
                <a href="#" className="font-bold text-primary-red hover:text-dark-gray dark:hover:text-white">
                  Şifremi Unuttum
                </a>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 btn-primary uppercase text-xs tracking-widest font-bold"
            >
              {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest">
              <span className="px-2 bg-white dark:bg-zinc-900 text-gray-500">Veya şununla devam edin</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center py-2.5 px-4 border-2 border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
              <Chrome size={16} />
            </button>
            <button className="flex items-center justify-center py-2.5 px-4 border-2 border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
              <Github size={16} />
            </button>
          </div>
        </div>

        <div className="text-center pt-4">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-primary-red transition-colors"
          >
            {isLogin ? 'Hesabınız yok mu? Hemen Kaydolun' : 'Zaten hesabınız var mı? Giriş Yapın'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
