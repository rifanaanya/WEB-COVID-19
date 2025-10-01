Anggota Kelompok:
Rifana Anya Septiani
Adli (tidak mengerjakan)
Fadli lubis (tidak mengerjakan)

Bantuan Teman:
Kevin Hendra Bouwmeester

Deskripsi:
Web Kesehatan adalah web tentang informasi covid 19, diweb ini tersedia navbar, bagian tengah web (isi web) dan footer.
tersedia fitur search, login (hanya bisa di klik saja), dark mode, homepage, data covid, pencegahan, virus terkini (belum bisa di klik)
dibagian awal, terdapat Hero tentang covid 19, foto dan jenis covid 19 yang otomatis menggeser ke kiri dan menampilkan penjelasannya bergantian,dibagian tengah web tersedia data covid 19 di Indonesia menggunakan api https://disease.sh/v3/covid-19/historical/indonesia?lastdays=all, disini api memunculkan kasus covid 19, jumlah kematian, dan jumlah sembuh, selain itu, saya juga menambahkan grafik jumlah jumlah kasus, kematian, dan sembuh (datanya otomatis dari api, sama seperti yang jumlah kasus sebelumnya, bedanya hanya versi grafik saja
dibawah dari data covid 19, ada cara pencegahan virus covid 19
dan dibawah pencegahan, alias paling Bawah halaman web, tersedia footer yang berfungsi sebagai footer sebagainya, terdapat informasi kontak yang bisa di klik, dan important links

web ini sangat simple karena dibuat mendadak dan tanpa kerja sama dengan anggota kelompok, jadi bisa dimaklumkan.

Cara Penginstalan:
menggunakan tailwind
npm create vite@latest my-project
cd my-project
npm install tailwindcss @tailwindcss/vite
npm i -d tailwindcss postcss autoprefixer
npx tailwindcss init -p

lalu, disini sayab menggunakan juga react icons, berfungsi untuk menambah ikon dari react, seperti search (kaca pembesar), Instagram, dan lain lain
npm i react-icons
penerapan di codingannya, iconnya saya tambahkan di navbar dan footer saja
import { IoMdSearch } from "react-icons/io";  //ini adalah ikon search di ikon
import { IoIosLogIn } from 'react-icons/io':  //ini adalah ikon login
import { FaCaretDown } from 'react-icons/fa'; //ini adalah ikon panah kebawah, untuk bagian virus terkini

untuk bagian footer nya ini
import {
    FaInstagram,		//ikon ig
    FaLocationArrow		//ikon lokasi
} from "react-icons/fa";

dan ini penginstalan AOS (untuk animasi)
npm i aos
import AOS from "aos";
import "aos/dist/aos.css";	//import di app.jsx

menggunakan react dom
npm i react-dom


Link Demo:
https://web-covid-five.vercel.app/

Anggota Kelompok (sudah disertakan di atas)
