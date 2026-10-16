/* ============================================
   ДАННЫЕ ТЕАТРА
   ============================================ */

const TICKET_BASE_URL = "https://intickets.ru";

const SPECTACLES = [
  {
    id: "nara suoh",
    title: "Наара суох",
    date: "2026-11-02",
    dateLabel: "2 ноября · суббота",
    time: "19:00",
    scene: "Основная сцена",
    age: "12+",
    genre: "Драма",
    poster: "img/posters/kyl-kyys.jpg",
    ticketUrl: TICKET_BASE_URL
  },
  {
    id: "Yrehhe",
    title: "Урэххэ",
    date: "2026-11-08",
    dateLabel: "8 ноября · пятница",
    time: "18:30",
    scene: "Основная сцена",
    age: "16+",
    genre: "Драма",
    poster: "img/posters/mankyary.jpg",
    ticketUrl: TICKET_BASE_URL
  },
  {
    id: "tuyaaryma",
    title: "Тулаайах о5о",
    date: "2026-11-15",
    dateLabel: "15 ноября · пятница",
    time: "19:00",
    scene: "Основная сцена",
    age: "12+",
    genre: "Эпос",
    poster: "img/posters/tuyaaryma.jpg",
    ticketUrl: TICKET_BASE_URL
  },
  {
    id: "sir-simny",
    title: "Сир симнэ",
    date: "2026-11-22",
    dateLabel: "22 ноября · пятница",
    time: "18:00",
    scene: "Малая сцена",
    age: "16+",
    genre: "Современная драма",
    poster: "img/posters/sir-simny.jpg",
    ticketUrl: TICKET_BASE_URL
  },
  {
    id: "nyurgun",
    title: "Нюргун Боотур",
    date: "2026-12-01",
    dateLabel: "1 декабря · вторник",
    time: "19:00",
    scene: "Основная сцена",
    age: "6+",
    genre: "Эпос",
    poster: "img/posters/nyurgun.jpg",
    ticketUrl: TICKET_BASE_URL
  },
  {
    id: "kustuk",
    title: "Кустук",
    date: "2026-12-07",
    dateLabel: "7 декабря · понедельник",
    time: "17:00",
    scene: "Малая сцена",
    age: "6+",
    genre: "Детский",
    poster: "img/posters/kustuk.jpg",
    ticketUrl: TICKET_BASE_URL
  }
];

const ACTORS = [
  { name: "Степанида Борисова", role: "Народная артистка РС(Я)", photo: "img/actors/borisova.jpg" },
  { name: "Ефим Степанов",      role: "Заслуженный артист РФ",   photo: "img/actors/stepanov.jpg" },
  { name: "Марина Попова",      role: "Народная артистка РС(Я)", photo: "img/actors/popova.jpg" },
  { name: "Иннокентий Луковцев", role: "Заслуженный артист РС(Я)", photo: "img/actors/lukovtsev.jpg" }
];

const NEWS = [
  {
    date: "2026-10-20",
    dateLabel: "20 октября 2026",
    title: "Премьера спектакля «Кыыл Кыыс»",
    excerpt: "Новая постановка по мотивам якутского эпоса — на Основной сцене театра.",
    image: "img/news/1.jpg"
  },
  {
    date: "2026-10-12",
    dateLabel: "12 октября 2026",
    title: "Гастроли в Санкт-Петербурге",
    excerpt: "Труппа театра представит три спектакля на сцене Александринского театра.",
    image: "img/news/2.jpg"
  },
  {
    date: "2026-10-05",
    dateLabel: "5 октября 2026",
    title: "Юбилей народной артистки",
    excerpt: "Степанида Борисова отмечает 50-летие творческой деятельности.",
    image: "img/news/3.jpg"
  }
];