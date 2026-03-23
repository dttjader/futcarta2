import React, { useState } from 'react';
import { Shuffle, Trash2, Users, ArrowDown, ArrowUp, AlertCircle, Save, Download, Upload, Trophy, ChevronDown, ChevronUp, RotateCcw, Star } from 'lucide-react';

const PLAYERS = [
  // Brasil 1982
  { id: 25, name: "Waldir Peres", position: "GOL", team: "Brasil 1982", number: 1 },
  { id: 26, name: "Leandro", position: "LAT", team: "Brasil 1982", number: 2 },
  { id: 27, name: "Oscar", position: "ZAG", team: "Brasil 1982", number: 3 },
  { id: 28, name: "Luizinho", position: "ZAG", team: "Brasil 1982", number: 4 },
  { id: 29, name: "Toninho Cerezo", position: "VOL", team: "Brasil 1982", number: 5 },
  { id: 30, name: "Júnior", position: "LAT", position2: "MEI", team: "Brasil 1982", number: 6 },
  { id: 31, name: "Sócrates", position: "MEI", team: "Brasil 1982", number: 8 },
  { id: 32, name: "Zico", position: "MEI", team: "Brasil 1982", number: 10 },
  { id: 33, name: "Serginho", position: "ATA", team: "Brasil 1982", number: 9 },
  { id: 34, name: "Falcão", position: "VOL", position2: "MEI", team: "Brasil 1982", number: 5 },
  { id: 35, name: "Éder", position: "ATA", team: "Brasil 1982", number: 11 },
  // Brasil 1970
  { id: 36, name: "Félix", position: "GOL", team: "Brasil 1970", number: 1 },
  { id: 37, name: "Carlos Alberto", position: "LAT", team: "Brasil 1970", number: 4 },
  { id: 38, name: "Brito", position: "ZAG", team: "Brasil 1970", number: 3 },
  { id: 39, name: "Piazza", position: "ZAG", position2: "VOL", team: "Brasil 1970", number: 2 },
  { id: 40, name: "Everaldo", position: "LAT", team: "Brasil 1970", number: 16 },
  { id: 41, name: "Clodoaldo", position: "VOL", team: "Brasil 1970", number: 5 },
  { id: 42, name: "Gérson", position: "MEI", team: "Brasil 1970", number: 8 },
  { id: 43, name: "Jairzinho", position: "ATA", team: "Brasil 1970", number: 7 },
  { id: 44, name: "Tostão", position: "ATA", team: "Brasil 1970", number: 9 },
  { id: 45, name: "Pelé", position: "MEI", team: "Brasil 1970", number: 10 },
  { id: 46, name: "Rivelino", position: "MEI", team: "Brasil 1970", number: 11 },
  // Brasil 2002
  { id: 47, name: "Marcos", position: "GOL", team: "Brasil 2002", number: 1 },
  { id: 48, name: "Cafu", position: "LAT", team: "Brasil 2002", number: 2 },
  { id: 49, name: "Lúcio", position: "ZAG", team: "Brasil 2002", number: 3 },
  { id: 50, name: "Roque Júnior", position: "ZAG", team: "Brasil 2002", number: 4 },
  { id: 51, name: "Edmílson", position: "ZAG", team: "Brasil 2002", number: 5 },
  { id: 52, name: "Roberto Carlos", position: "LAT", team: "Brasil 2002", number: 6 },
  { id: 53, name: "Gilberto Silva", position: "VOL", team: "Brasil 2002", number: 8 },
  { id: 54, name: "Ronaldo", position: "ATA", team: "Brasil 2002", number: 9 },
  { id: 55, name: "Rivaldo", position: "MEI", team: "Brasil 2002", number: 10 },
  { id: 56, name: "Ronaldinho Gaúcho", position: "ATA", team: "Brasil 2002", number: 11 },
  { id: 57, name: "Kléberson", position: "VOL", position2: "ATA", team: "Brasil 2002", number: 15 },
  // Grêmio 1995
  { id: 58, name: "Danrlei", position: "GOL", team: "Grêmio 1995", number: 1 },
  { id: 59, name: "Arce", position: "LAT", team: "Grêmio 1995", number: 2 },
  { id: 60, name: "Rivarola", position: "ZAG", team: "Grêmio 1995", number: 24 },
  { id: 61, name: "Adilson", position: "ZAG", position2: "VOL", team: "Grêmio 1995", number: 4 },
  { id: 62, name: "Dinho", position: "VOL", team: "Grêmio 1995", number: 5 },
  { id: 63, name: "Roger", position: "LAT", team: "Grêmio 1995", number: 6 },
  { id: 64, name: "Paulo Nunes", position: "ATA", team: "Grêmio 1995", number: 7 },
  { id: 65, name: "Goiano", position: "VOL", team: "Grêmio 1995", number: 8 },
  { id: 66, name: "Jardel", position: "ATA", team: "Grêmio 1995", number: 16 },
  { id: 67, name: "Carlos Miguel", position: "MEI", position2: "LAT", team: "Grêmio 1995", number: 11 },
  { id: 68, name: "Arilson", position: "MEI", position2: "LAT", team: "Grêmio 1995", number: 19 },
  // Grêmio 2017
  { id: 69, name: "Marcelo Grohe", position: "GOL", team: "Grêmio 2017", number: 1 },
  { id: 70, name: "Edilson", position: "LAT", team: "Grêmio 2017", number: 2 },
  { id: 71, name: "Pedro Geromel", position: "ZAG", team: "Grêmio 2017", number: 3 },
  { id: 72, name: "Walter Kannemann", position: "ZAG", team: "Grêmio 2017", number: 4 },
  { id: 73, name: "Michel", position: "MEI", team: "Grêmio 2017", number: 5 },
  { id: 74, name: "Bruno Cortez", position: "LAT", team: "Grêmio 2017", number: 12 },
  { id: 75, name: "Luan", position: "MEI", team: "Grêmio 2017", number: 7 },
  { id: 76, name: "Arthur", position: "MEI", team: "Grêmio 2017", number: 29 },
  { id: 77, name: "Lucas Barrios", position: "ATA", team: "Grêmio 2017", number: 18 },
  { id: 78, name: "Ramiro", position: "VOL", position2: "LAT", team: "Grêmio 2017", number: 17 },
  { id: 79, name: "Fernandinho", position: "MEI", team: "Grêmio 2017", number: 21 },
  // Grêmio 1977
  { id: 80, name: "Corbo", position: "GOL", team: "Grêmio 1977", number: 1 },
  { id: 81, name: "Eurico", position: "LAT", team: "Grêmio 1977", number: 2 },
  { id: 82, name: "Ancheta", position: "ZAG", team: "Grêmio 1977", number: 3 },
  { id: 83, name: "Oberdan", position: "ZAG", team: "Grêmio 1977", number: 4 },
  { id: 84, name: "Vitor Hugo", position: "VOL", team: "Grêmio 1977", number: 5 },
  { id: 85, name: "Ladinho", position: "LAT", team: "Grêmio 1977", number: 6 },
  { id: 86, name: "Tarciso", position: "ATA", team: "Grêmio 1977", number: 7 },
  { id: 87, name: "Yura", position: "MEI", team: "Grêmio 1977", number: 8 },
  { id: 88, name: "André Catimba", position: "ATA", team: "Grêmio 1977", number: 9 },
  { id: 89, name: "Tadeu Ricci", position: "MEI", team: "Grêmio 1977", number: 10 },
  { id: 90, name: "Éder Aleixo", position: "ATA", team: "Grêmio 1977", number: 11 },
  // Grêmio 1981
  { id: 130, name: "Leão", position: "GOL", team: "Grêmio 1981", number: 1 },
  { id: 135, name: "Paulo Roberto", position: "LAT", team: "Grêmio 1981", number: 2 },
  { id: 92, name: "Newmar", position: "ZAG", team: "Grêmio 1981", number: 3 },
  { id: 93, name: "De León", position: "ZAG", team: "Grêmio 1981", number: 4 },
  { id: 94, name: "China", position: "VOL", team: "Grêmio 1981", number: 5 },
  { id: 95, name: "Casemiro", position: "LAT", team: "Grêmio 1981", number: 6 },
  { id: 131, name: "Tarciso", position: "ATA", team: "Grêmio 1981", number: 7 },
  { id: 96, name: "Paulo Isidoro", position: "MEI", team: "Grêmio 1981", number: 8 },
  { id: 97, name: "Baltazar", position: "ATA", team: "Grêmio 1981", number: 9 },
  { id: 98, name: "Vilson Tadei", position: "MEI", team: "Grêmio 1981", number: 10 },
  { id: 99, name: "Odair", position: "ATA", team: "Grêmio 1981", number: 11 },
  // Internacional 1975
  { id: 100, name: "Manga", position: "GOL", team: "Internacional 1975", number: 1 },
  { id: 101, name: "Cláudio Duarte", position: "LAT", team: "Internacional 1975", number: 2 },
  { id: 102, name: "Elias Figueroa", position: "ZAG", team: "Internacional 1975", number: 3 },
  { id: 103, name: "Pontes", position: "ZAG", team: "Internacional 1975", number: 4 },
  { id: 104, name: "Vacaria", position: "LAT", team: "Internacional 1975", number: 6 },
  { id: 105, name: "Valdomiro", position: "ATA", team: "Internacional 1975", number: 7 },
  { id: 106, name: "Batista", position: "MEI", team: "Internacional 1975", number: 8 },
  { id: 107, name: "Flávio Minuano", position: "ATA", team: "Internacional 1975", number: 9 },
  { id: 108, name: "Paulo César Carpegiani", position: "MEI", team: "Internacional 1975", number: 10 },
  { id: 132, name: "Falcão", position: "VOL", position2: "MEI", team: "Internacional 1975", number: 5 },
  { id: 109, name: "Lula", position: "ATA", team: "Internacional 1975", number: 11 },
  // Palmeiras 1972
  { id: 133, name: "Leão", position: "GOL", team: "Palmeiras 1972", number: 1 },
  { id: 134, name: "Eurico", position: "LAT", team: "Palmeiras 1972", number: 2 },
  { id: 110, name: "Luís Pereira", position: "ZAG", team: "Palmeiras 1972", number: 3 },
  { id: 111, name: "Alfredo Mostarda", position: "ZAG", team: "Palmeiras 1972", number: 4 },
  { id: 112, name: "Dudu", position: "VOL", team: "Palmeiras 1972", number: 5 },
  { id: 113, name: "Zeca", position: "LAT", team: "Palmeiras 1972", number: 6 },
  { id: 114, name: "Nei", position: "ATA", team: "Palmeiras 1972", number: 7 },
  { id: 115, name: "Leivinha", position: "MEI", team: "Palmeiras 1972", number: 8 },
  { id: 116, name: "César Maluco", position: "ATA", team: "Palmeiras 1972", number: 9 },
  { id: 117, name: "Ademir da Guia", position: "MEI", team: "Palmeiras 1972", number: 10 },
  { id: 118, name: "Edu Bala", position: "MEI", team: "Palmeiras 1972", number: 11 },
  // Outros Jogadores
  { id: 119, name: "Rogério Ceni", position: "GOL", team: "Outros Jogadores", number: 1 },
  { id: 120, name: "Nelinho", position: "LAT", team: "Outros Jogadores", number: 5 },
  { id: 121, name: "Franz Beckenbauer", position: "ZAG", position2: "VOL", team: "Outros Jogadores", number: 3 },
  { id: 122, name: "Mauro Galvão", position: "ZAG", team: "Outros Jogadores", number: 4 },
  { id: 123, name: "Zé Carlos", position: "VOL", team: "Outros Jogadores", number: 6 },
  { id: 124, name: "Marinho Chagas", position: "LAT", team: "Outros Jogadores", number: 8 },
  { id: 125, name: "Garrincha", position: "MEI", team: "Outros Jogadores", number: 7 },
  { id: 126, name: "Juan", position: "ZAG", team: "Outros Jogadores", number: 2 },
  { id: 127, name: "Dener", position: "MEI", team: "Outros Jogadores", number: 9 },
  { id: 128, name: "Reinaldo", position: "ATA", team: "Outros Jogadores", number: 10 },
  { id: 129, name: "Dirceu", position: "MEI", position2: "ATA", team: "Outros Jogadores", number: 11 },
  // Flamengo 1981
  { id: 136, name: "Raul", position: "GOL", team: "Flamengo 1981", number: 1 },
  { id: 137, name: "Leandro", position: "LAT", team: "Flamengo 1981", number: 2 },
  { id: 138, name: "Marinho", position: "ZAG", team: "Flamengo 1981", number: 3 },
  { id: 139, name: "Mozer", position: "ZAG", team: "Flamengo 1981", number: 4 },
  { id: 140, name: "Júnior", position: "LAT", position2: "MEI", team: "Flamengo 1981", number: 5 },
  { id: 141, name: "Andrade", position: "VOL", team: "Flamengo 1981", number: 6 },
  { id: 142, name: "Adílio", position: "MEI", team: "Flamengo 1981", number: 7 },
  { id: 143, name: "Tita", position: "ATA", position2: "MEI", team: "Flamengo 1981", number: 8 },
  { id: 144, name: "Zico", position: "MEI", position2: "ATA", team: "Flamengo 1981", number: 9 },
  { id: 145, name: "Nunes", position: "ATA", team: "Flamengo 1981", number: 10 },
  { id: 146, name: "Lico", position: "ATA", team: "Flamengo 1981", number: 11 },
  // Grêmio 1983
  { id: 147, name: "Mazaropi", position: "GOL", team: "Grêmio 1983", number: 1 },
  { id: 148, name: "Paulo Roberto", position: "LAT", team: "Grêmio 1983", number: 2 },
  { id: 149, name: "Baidek", position: "ZAG", team: "Grêmio 1983", number: 3 },
  { id: 150, name: "Paulo César Magalhães", position: "LAT", team: "Grêmio 1983", number: 4 },
  { id: 151, name: "China", position: "VOL", team: "Grêmio 1983", number: 5 },
  { id: 152, name: "De León", position: "ZAG", team: "Grêmio 1983", number: 6 },
  { id: 153, name: "Renato Gaúcho", position: "MEI", position2: "ATA", team: "Grêmio 1983", number: 7 },
  { id: 154, name: "Osvaldo", position: "MEI", team: "Grêmio 1983", number: 8 },
  { id: 155, name: "Paulo César Caju", position: "MEI", team: "Grêmio 1983", number: 9 },
  { id: 156, name: "Mário Sérgio", position: "MEI", position2: "ATA", team: "Grêmio 1983", number: 10 },
  { id: 157, name: "Tarciso", position: "ATA", team: "Grêmio 1983", number: 11 },
  // Brasil 1994
  { id: 158, name: "Taffarel", position: "GOL", team: "Brasil 1994", number: 1 },
  { id: 159, name: "Jorginho", position: "LAT", team: "Brasil 1994", number: 2 },
  { id: 160, name: "Branco", position: "LAT", team: "Brasil 1994", number: 6 },
  { id: 161, name: "Aldair", position: "ZAG", team: "Brasil 1994", number: 13 },
  { id: 162, name: "Márcio Santos", position: "ZAG", team: "Brasil 1994", number: 15 },
  { id: 163, name: "Mauro Silva", position: "VOL", team: "Brasil 1994", number: 5 },
  { id: 164, name: "Dunga", position: "VOL", team: "Brasil 1994", number: 8 },
  { id: 165, name: "Zinho", position: "MEI", team: "Brasil 1994", number: 9 },
  { id: 166, name: "Mazinho", position: "LAT", position2: "MEI", team: "Brasil 1994", number: 17 },
  { id: 167, name: "Bebeto", position: "ATA", team: "Brasil 1994", number: 7 },
  { id: 168, name: "Romário", position: "ATA", team: "Brasil 1994", number: 11 },
  // Internacional 2006
  { id: 169, name: "Clemer", position: "GOL", team: "Internacional 2006", number: 1 },
  { id: 170, name: "Ceará", position: "LAT", team: "Internacional 2006", number: 2 },
  { id: 171, name: "Índio", position: "ZAG", team: "Internacional 2006", number: 3 },
  { id: 172, name: "Fabiano Eller", position: "ZAG", team: "Internacional 2006", number: 4 },
  { id: 173, name: "Rubens Cardoso", position: "LAT", team: "Internacional 2006", number: 15 },
  { id: 174, name: "Edinho", position: "VOL", position2: "ZAG", team: "Internacional 2006", number: 8 },
  { id: 175, name: "Wellington Monteiro", position: "VOL", position2: "LAT", team: "Internacional 2006", number: 5 },
  { id: 176, name: "Fernandão", position: "ATA", position2: "MEI", team: "Internacional 2006", number: 9 },
  { id: 177, name: "Iarley", position: "ATA", team: "Internacional 2006", number: 10 },
  { id: 178, name: "Alex", position: "MEI", team: "Internacional 2006", number: 7 },
  { id: 179, name: "Alexandre Pato", position: "ATA", team: "Internacional 2006", number: 11 }
];

const FORMATIONS = {
  "4-4-2": { GOL: 1, LAT: 2, ZAG: 2, VOL: 2, MEI: 2, ATA: 2 },
  "4-3-3": { GOL: 1, LAT: 2, ZAG: 2, VOL: 1, MEI: 2, ATA: 3 },
  "3-5-2": { GOL: 1, LAT: 0, ZAG: 3, VOL: 2, MEI: 3, ATA: 2 },
  "4-2-3-1": { GOL: 1, LAT: 2, ZAG: 2, VOL: 2, MEI: 3, ATA: 1 },
  "3-4-3": { GOL: 1, LAT: 0, ZAG: 3, VOL: 2, MEI: 2, ATA: 3 }
};

const MAX_RESERVES = { GOL: 1, LAT: 1, ZAG: 1, VOL: 1, MEI: 1, ATA: 1 };

const getMaxReservesForFormation = (formation) => {
  if (formation === "3-5-2" || formation === "3-4-3") {
    return { GOL: 1, LAT: 0, ZAG: 1, VOL: 1, MEI: 1, ATA: 1 };
  }
  return MAX_RESERVES;
};

const POSITION_LABELS = {
  GOL: "Goleiro",
  LAT: "Lateral",
  ZAG: "Zagueiro",
  VOL: "Volante",
  MEI: "Meia",
  ATA: "Atacante"
};

const POSITION_BG = {
  GOL: "#f59e0b",
  LAT: "#3b82f6",
  ZAG: "#22c55e",
  VOL: "#a855f7",
  MEI: "#f97316",
  ATA: "#ef4444"
};

const dice_faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

// ── Default theme ─────────────────────────────────────────────────────────────
const DEFAULT_THEME = {
  bgPage:    '#0b0e15',
  bgCard:    '#0f1117',
  bgSurface: '#181c25',
  gold:      '#f5c842',
  posGOL:    '#f59e0b',
  posLAT:    '#3b82f6',
  posZAG:    '#22c55e',
  posVOL:    '#a855f7',
  posMEI:    '#f97316',
  posATA:    '#ef4444',
  // Fonts (scale factor 0.7–1.5, base=1.0)
  fontScale:   1.0,
  fontTitle:   1.0,
  fontBody:    1.0,
  fontBadge:   1.0,
};

// ── Styles ──────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,400;0,600;1,400&display=swap');

  :root {
    --pitch: #1a6b2f;
    --pitch-light: #1e7d36;
    --grass: #166128;
    --card-bg: #0f1117;
    --surface: #181c25;
    --border: rgba(255,255,255,0.08);
    --gold: #f5c842;
    --text: #e8eaf0;
    --muted: #7a8099;
  }

  .ftb-root {
    font-family: 'Barlow', sans-serif;
    background: #0b0e15;
    color: var(--text);
    min-height: 100vh;
    padding: 0;
  }

  .ftb-hero {
    background: linear-gradient(160deg, #0f1f12 0%, #0b1410 50%, #0e0b18 100%);
    border-bottom: 2px solid var(--gold);
    padding: 28px 32px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    position: sticky;
    top: 0;
    z-index: 50;
    box-shadow: 0 4px 40px rgba(0,0,0,0.7);
  }

  .ftb-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.4rem;
    letter-spacing: 2px;
    color: var(--gold);
    line-height: 1;
  }

  .ftb-logo span {
    color: #fff;
  }

  .ftb-subtitle {
    font-size: 0.75rem;
    color: var(--muted);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .ftb-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 0 60px;
  }

  @media (max-width: 900px) {
    .ftb-body { grid-template-columns: 1fr; }
  }

  .ftb-panel {
    padding: 24px;
    border-right: 1px solid var(--border);
  }
  .ftb-panel:last-child { border-right: none; }

  .ftb-section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 3px;
    color: var(--gold);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ftb-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 12px;
  }

  /* Formation selector */
  .ftb-formations {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .ftb-form-btn {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 8px 18px;
    border-radius: 6px;
    border: 2px solid var(--border);
    background: var(--surface);
    color: var(--muted);
    cursor: pointer;
    transition: all 0.18s;
  }
  .ftb-form-btn:hover { border-color: var(--gold); color: var(--gold); }
  .ftb-form-btn.active {
    background: var(--gold);
    color: #000;
    border-color: var(--gold);
  }

  /* Dice */
  .ftb-dice-area {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .ftb-dice {
    font-size: 4rem;
    cursor: pointer;
    user-select: none;
    filter: drop-shadow(0 0 12px rgba(245,200,66,0.4));
    transition: transform 0.1s;
  }
  .ftb-dice:hover { transform: scale(1.1) rotate(-5deg); }
  .ftb-dice.rolling { animation: diceRoll 0.5s infinite linear; }

  @keyframes diceRoll {
    0%   { transform: rotate(0deg) scale(1); }
    25%  { transform: rotate(90deg) scale(1.1); }
    50%  { transform: rotate(180deg) scale(1); }
    75%  { transform: rotate(270deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1); }
  }

  .ftb-roll-btn {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 2px;
    padding: 12px 28px;
    background: linear-gradient(135deg, #c8a200, var(--gold));
    color: #000;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ftb-roll-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,200,66,0.4); }
  .ftb-roll-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  /* Player cards */
  .ftb-player {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 10px 12px;
    margin-bottom: 8px;
    transition: border-color 0.15s;
  }
  .ftb-player:hover { border-color: rgba(255,255,255,0.2); }

  .ftb-pos-badge {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 0.75rem;
    letter-spacing: 1px;
    padding: 3px 7px;
    border-radius: 4px;
    color: #000;
    min-width: 36px;
    text-align: center;
    font-weight: bold;
  }

  .ftb-number {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.3rem;
    color: var(--muted);
    min-width: 28px;
    text-align: right;
  }

  .ftb-player-info {
    flex: 1;
  }

  .ftb-player-name {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--text);
  }

  .ftb-player-team {
    font-size: 0.72rem;
    color: var(--muted);
    font-style: italic;
  }

  .ftb-actions {
    display: flex;
    gap: 4px;
  }

  .ftb-btn {
    border: none;
    border-radius: 5px;
    padding: 5px 8px;
    cursor: pointer;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.15s;
    display: flex;
    align-items: center;
    gap: 3px;
  }
  .ftb-btn:hover { opacity: 0.85; transform: translateY(-1px); }

  .btn-main  { background: #22c55e; color: #000; }
  .btn-res   { background: #3b82f6; color: #fff; }
  .btn-disc  { background: #374151; color: #9ca3af; }
  .btn-remove { background: #991b1b; color: #fff; }

  /* Pitch view */
  .ftb-pitch {
    background:
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 50%,
        rgba(255,255,255,0.02) 50%,
        rgba(255,255,255,0.02) 100%
      ),
      linear-gradient(180deg, #1a6b2f 0%, #1e7d36 50%, #166128 100%);
    border-radius: 12px;
    border: 2px solid rgba(255,255,255,0.1);
    padding: 16px 12px;
    margin-bottom: 16px;
    min-height: 340px;
    position: relative;
  }

  .pitch-line {
    border-top: 1px solid rgba(255,255,255,0.15);
    width: 60%;
    margin: 0 auto 12px;
  }

  .pitch-row {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .pitch-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    cursor: pointer;
  }

  .pitch-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 0.8rem;
    color: #fff;
    border: 2px solid rgba(255,255,255,0.5);
    box-shadow: 0 3px 10px rgba(0,0,0,0.5);
    transition: transform 0.15s;
  }
  .pitch-avatar:hover { transform: scale(1.12); }

  .pitch-name {
    font-size: 0.6rem;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0,0,0,0.8);
    text-align: center;
    max-width: 52px;
    font-weight: 600;
    line-height: 1.2;
  }

  /* Progress bar */
  .ftb-progress-wrap {
    margin-bottom: 16px;
  }

  .ftb-progress-label {
    display: flex;
    justify-content: space-between;
    font-size: 0.78rem;
    color: var(--muted);
    margin-bottom: 4px;
  }

  .ftb-progress-bar {
    height: 6px;
    background: var(--border);
    border-radius: 99px;
    overflow: hidden;
  }

  .ftb-progress-fill {
    height: 100%;
    border-radius: 99px;
    background: linear-gradient(90deg, #22c55e, var(--gold));
    transition: width 0.4s ease;
  }

  /* Toggle pills */
  .ftb-toggles {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .ftb-toggle {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 5px 12px;
    border-radius: 99px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .ftb-toggle.on {
    border-color: var(--gold);
    color: var(--gold);
    background: rgba(245,200,66,0.08);
  }

  /* Completed teams */
  .ftb-saved-team {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .ftb-saved-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    cursor: pointer;
    transition: background 0.15s;
  }
  .ftb-saved-header:hover { background: rgba(255,255,255,0.03); }

  .ftb-saved-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    letter-spacing: 2px;
    color: var(--gold);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ftb-saved-body {
    padding: 12px 16px;
    border-top: 1px solid var(--border);
  }

  /* Complete badge */
  .ftb-complete-badge {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 2px;
    background: linear-gradient(135deg, #c8a200, var(--gold));
    color: #000;
    padding: 4px 12px;
    border-radius: 99px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  /* Action buttons bar */
  .ftb-action-bar {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .ftb-action-btn {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 1.5px;
    padding: 9px 18px;
    border-radius: 7px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    cursor: pointer;
    transition: all 0.18s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .ftb-action-btn:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.05); }
  .ftb-action-btn.gold { border-color: var(--gold); color: var(--gold); }
  .ftb-action-btn.gold:hover { background: rgba(245,200,66,0.1); }
  .ftb-action-btn.danger { border-color: #ef4444; color: #ef4444; }
  .ftb-action-btn.danger:hover { background: rgba(239,68,68,0.08); }

  /* Reserves row */
  .ftb-reserves-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 12px;
    background: rgba(0,0,0,0.25);
    border-radius: 8px;
    border: 1px dashed var(--border);
    margin-bottom: 12px;
    min-height: 64px;
    align-items: center;
  }

  .ftb-reserve-chip {
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 5px 9px;
    font-size: 0.78rem;
    cursor: pointer;
    transition: border-color 0.15s;
  }
  .ftb-reserve-chip:hover { border-color: rgba(239,68,68,0.5); }

  .ftb-empty-hint {
    color: var(--muted);
    font-size: 0.78rem;
    font-style: italic;
  }
`;

// ── Helpers ──────────────────────────────────────────────────────────────────
function countPositions(team) {
  return team.reduce((acc, p) => { acc[p.position] = (acc[p.position] || 0) + 1; return acc; }, {});
}

// Organises main team into pitch rows
function getPitchRows(mainTeam, formation) {
  const rows = [
    { positions: ["ATA"], label: "Ataque" },
    { positions: ["MEI"], label: "Meio" },
    { positions: ["VOL"], label: "Volante" },
    { positions: ["LAT", "ZAG"], label: "Defesa" },
    { positions: ["GOL"], label: "Goleiro" },
  ];

  return rows.map(row => ({
    ...row,
    players: mainTeam.filter(p => row.positions.includes(p.position))
  })).filter(row => row.players.length > 0);
}

// ── Player Card ───────────────────────────────────────────────────────────────
function PlayerCard({ player, actions, posBg, activePos, onTogglePos }) {
  // activePos: the currently active position for this card (may differ from player.position if toggled)
  const effectivePos = activePos || player.position;
  const bg = (posBg || POSITION_BG)[effectivePos];
  const bg2 = player.position2 ? (posBg || POSITION_BG)[player.position2] : null;

  return (
    <div className="ftb-player">
      <span className="ftb-number">#{player.number}</span>
      <div style={{ display:'flex', flexDirection:'column', gap:3, alignItems:'center' }}>
        <span className="ftb-pos-badge" style={{ background: bg }}>{effectivePos}</span>
        {player.position2 && onTogglePos && (
          <button
            onClick={onTogglePos}
            title={`Alternar para ${effectivePos === player.position ? player.position2 : player.position}`}
            style={{
              background: bg2,
              border: effectivePos === player.position2 ? '2px solid #fff' : '2px solid transparent',
              borderRadius:4, padding:'1px 5px', cursor:'pointer',
              fontSize:'0.6rem', fontFamily:'Bebas Neue', letterSpacing:1,
              color:'#000', opacity: effectivePos === player.position ? 0.55 : 1,
              transition:'all 0.15s', lineHeight:1.4,
            }}
          >
            {player.position2}
          </button>
        )}
      </div>
      <div className="ftb-player-info">
        <div className="ftb-player-name">{player.name}</div>
        <div className="ftb-player-team">{player.team}</div>
      </div>
      <div className="ftb-actions">
        {actions}
      </div>
    </div>
  );
}

// ── Pitch Visual ──────────────────────────────────────────────────────────────
function PitchView({ mainTeam, formation, onRemove, posBg, reserves, onSubstitute }) {
  const rows = getPitchRows(mainTeam, formation);
  if (mainTeam.length === 0) {
    return (
      <div className="ftb-pitch" style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
        <p style={{ color:'rgba(255,255,255,0.25)', fontStyle:'italic', fontSize:'0.85rem' }}>
          Mova jogadores para o time titular para ver o campo
        </p>
      </div>
    );
  }
  return (
    <div className="ftb-pitch">
      <div className="pitch-line" />
      {rows.map((row, ri) => (
        <div className="pitch-row" key={ri}>
          {row.players.map(p => {
            const hasReserve = reserves.some(r => r.position === p.position);
            return (
              <div className="pitch-player" key={p.id} style={{ position:'relative' }}>
                <div className="pitch-avatar" style={{ background: posBg[p.position] }}
                  onClick={() => onRemove(p)} title={`Remover ${p.name}`}>
                  {p.position}
                </div>
                {hasReserve && (
                  <button
                    onClick={(e) => onSubstitute(e, p)}
                    title="Substituir"
                    style={{
                      position:'absolute', top:-6, right:-6,
                      width:18, height:18, borderRadius:'50%',
                      background:'#22c55e', border:'2px solid #0f1117',
                      color:'#000', cursor:'pointer', fontSize:'0.6rem',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      padding:0, lineHeight:1, zIndex:2,
                    }}
                  >⇄</button>
                )}
                <div className="pitch-name">{p.name.split(' ')[0]}</div>
              </div>
            );
          })}
        </div>
      ))}
      <div className="pitch-line" style={{ marginBottom:0, marginTop:8 }} />
    </div>
  );
}

// ── Saved Team Card ───────────────────────────────────────────────────────────
function SavedTeamCard({ team, onDelete, onExport }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="ftb-saved-team">
      <div className="ftb-saved-header" onClick={() => setOpen(!open)}>
        <div className="ftb-saved-title">
          <Trophy size={14} />
          {team.name}
          <span style={{ fontSize:'0.7rem', color:'var(--muted)', fontFamily:'Barlow', fontWeight:400, letterSpacing:0 }}>
            — {team.formation}
          </span>
        </div>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <span style={{ fontSize:'0.7rem', color:'var(--muted)' }}>{team.createdAt}</span>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </div>
      {open && (
        <div className="ftb-saved-body">
          {['GOL','LAT','ZAG','VOL','MEI','ATA'].map(pos => {
            const inPos = team.mainTeam.filter(p => p.position === pos);
            if (!inPos.length) return null;
            return (
              <div key={pos} style={{ marginBottom:8 }}>
                <div style={{ fontSize:'0.7rem', color: POSITION_BG[pos], fontWeight:600, letterSpacing:1, marginBottom:4, textTransform:'uppercase' }}>
                  {POSITION_LABELS[pos]}
                </div>
                {inPos.map(p => (
                  <div key={p.id} style={{ fontSize:'0.82rem', color:'var(--text)', paddingLeft:8, marginBottom:2 }}>
                    #{p.number} {p.name} <span style={{ color:'var(--muted)', fontStyle:'italic' }}>— {p.team}</span>
                  </div>
                ))}
              </div>
            );
          })}
          {team.reserves.length > 0 && (
            <div style={{ marginTop:10 }}>
              <div style={{ fontSize:'0.7rem', color:'#3b82f6', fontWeight:600, letterSpacing:1, marginBottom:4 }}>RESERVAS</div>
              {team.reserves.map(p => (
                <div key={p.id} style={{ fontSize:'0.82rem', color:'var(--text)', paddingLeft:8, marginBottom:2 }}>
                  #{p.number} {p.name} <span style={{ color:'var(--muted)', fontStyle:'italic' }}>— {p.team}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ display:'flex', gap:8, marginTop:12 }}>
            <button className="ftb-action-btn gold" onClick={() => onExport(team)}>
              <Download size={13} /> Exportar
            </button>
            <button className="ftb-action-btn danger" onClick={() => onDelete(team.id)}>
              <Trash2 size={13} /> Remover
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Theme Panel ───────────────────────────────────────────────────────────────
function ThemePanel({ theme, setTheme, onClose }) {
  const [tab, setTab] = useState('cores');
  const set = (key, val) => setTheme(t => ({ ...t, [key]: val }));

  const muted = '#7a8099';
  const border = '1px solid rgba(255,255,255,0.08)';

  const Section = ({ label, children }) => (
    <div style={{ marginBottom:20 }}>
      <div style={{ fontSize:'0.62rem', color:muted, letterSpacing:2.5, textTransform:'uppercase', fontWeight:700, marginBottom:10 }}>{label}</div>
      {children}
    </div>
  );

  const Swatch = ({ label, colorKey }) => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:5 }}>
      <div style={{ position:'relative', width:40, height:40 }}>
        <div style={{ width:40, height:40, borderRadius:9, background:theme[colorKey], border:'2px solid rgba(255,255,255,0.15)', boxShadow:'0 2px 10px rgba(0,0,0,0.5)' }} />
        <input type="color" value={theme[colorKey]} onChange={e => set(colorKey, e.target.value)}
          style={{ position:'absolute', inset:0, opacity:0, cursor:'pointer', width:'100%', height:'100%', border:'none' }} />
      </div>
      <span style={{ fontSize:'0.6rem', color:muted, textAlign:'center', maxWidth:46 }}>{label}</span>
    </div>
  );

  const FontSlider = ({ label, scaleKey, min=0.6, max=1.6, hint }) => {
    const val = theme[scaleKey];
    const pct = ((val - min) / (max - min)) * 100;
    return (
      <div style={{ marginBottom:14 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:5 }}>
          <span style={{ fontSize:'0.78rem', color:'#e8eaf0', fontWeight:600 }}>{label}</span>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            {hint && <span style={{ fontSize:'0.62rem', color:muted, fontStyle:'italic' }}>{hint}</span>}
            <span style={{ fontSize:'0.72rem', color:theme.gold, fontFamily:'Bebas Neue', letterSpacing:1, minWidth:30, textAlign:'right' }}>{Math.round(val * 100)}%</span>
            <button onClick={() => set(scaleKey, DEFAULT_THEME[scaleKey])}
              style={{ background:'none', border:'none', color:muted, cursor:'pointer', fontSize:'0.75rem', padding:'0 2px' }} title="Resetar">↺</button>
          </div>
        </div>
        <div style={{ position:'relative', height:6, borderRadius:99, background:'rgba(255,255,255,0.08)' }}>
          <div style={{ position:'absolute', left:0, top:0, height:'100%', width:`${pct}%`, borderRadius:99, background:`linear-gradient(90deg, ${theme.gold}88, ${theme.gold})`, transition:'width 0.1s' }} />
          <input type="range" min={min} max={max} step={0.05} value={val}
            onChange={e => set(scaleKey, parseFloat(e.target.value))}
            style={{ position:'absolute', inset:0, width:'100%', opacity:0, cursor:'pointer', height:'100%', margin:0 }} />
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:3, fontSize:'0.58rem', color:muted }}>
          <span>Pequeno</span><span>Normal</span><span>Grande</span>
        </div>
      </div>
    );
  };

  const presets = [
    { name:'Dark (padrão)', t:{ bgPage:'#0b0e15', bgCard:'#0f1117', bgSurface:'#181c25', gold:'#f5c842', posGOL:'#f59e0b', posLAT:'#3b82f6', posZAG:'#22c55e', posVOL:'#a855f7', posMEI:'#f97316', posATA:'#ef4444', fontScale:1.0, fontTitle:1.0, fontBody:1.0, fontBadge:1.0 } },
    { name:'Suave', t:{ bgPage:'#1a1f2e', bgCard:'#222840', bgSurface:'#2a3150', gold:'#c9a84c', posGOL:'#b08020', posLAT:'#3567a8', posZAG:'#2e7d52', posVOL:'#7b4fa6', posMEI:'#c2622a', posATA:'#b03030', fontScale:1.0, fontTitle:1.0, fontBody:1.0, fontBadge:1.0 } },
    { name:'Noturno', t:{ bgPage:'#10141c', bgCard:'#161a24', bgSurface:'#1e2330', gold:'#e0b030', posGOL:'#a07820', posLAT:'#2a5090', posZAG:'#1e6040', posVOL:'#603890', posMEI:'#a04a18', posATA:'#903030', fontScale:1.0, fontTitle:1.0, fontBody:1.0, fontBadge:1.0 } },
    { name:'Azul Navy', t:{ bgPage:'#0d1520', bgCard:'#111e2d', bgSurface:'#162438', gold:'#4da6ff', posGOL:'#d4a800', posLAT:'#1a6fd4', posZAG:'#1a8a50', posVOL:'#8040c0', posMEI:'#d46020', posATA:'#c03030', fontScale:1.0, fontTitle:1.0, fontBody:1.0, fontBadge:1.0 } },
    { name:'Verde Campo', t:{ bgPage:'#0a160d', bgCard:'#0f1f13', bgSurface:'#162819', gold:'#ffd700', posGOL:'#e8a000', posLAT:'#2060c0', posZAG:'#1a7040', posVOL:'#7030a0', posMEI:'#d06020', posATA:'#c02020', fontScale:1.0, fontTitle:1.0, fontBody:1.0, fontBadge:1.0 } },
  ];

  const tabStyle = (t) => ({
    flex:1, padding:'8px 0', background:'none', border:'none',
    borderBottom: tab===t ? `2px solid ${theme.gold}` : '2px solid transparent',
    color: tab===t ? theme.gold : muted,
    cursor:'pointer', fontFamily:'Bebas Neue', fontSize:'0.9rem', letterSpacing:2,
    transition:'all 0.15s',
  });

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.65)', zIndex:200, display:'flex', alignItems:'flex-start', justifyContent:'flex-end', padding:'78px 20px 20px' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background:'#181c25', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, width:340, boxShadow:'0 20px 60px rgba(0,0,0,0.8)', display:'flex', flexDirection:'column', maxHeight:'calc(100vh - 100px)' }}>

        {/* Header */}
        <div style={{ padding:'14px 20px', borderBottom:border, display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0 }}>
          <div style={{ fontFamily:'Bebas Neue', fontSize:'1.1rem', letterSpacing:3, color:theme.gold }}>🎨 Cores / Fontes</div>
          <button onClick={onClose} style={{ background:'none', border:'none', color:muted, cursor:'pointer', fontSize:'1.1rem', lineHeight:1 }}>✕</button>
        </div>

        {/* Tabs */}
        <div style={{ display:'flex', borderBottom:border, flexShrink:0 }}>
          <button style={tabStyle('cores')} onClick={() => setTab('cores')}>Cores</button>
          <button style={tabStyle('fontes')} onClick={() => setTab('fontes')}>Fontes</button>
          <button style={tabStyle('presets')} onClick={() => setTab('presets')}>Paletas</button>
        </div>

        {/* Scrollable body */}
        <div style={{ padding:'16px 20px', overflowY:'auto', flex:1 }}>

          {/* ── CORES TAB ── */}
          {tab === 'cores' && <>
            <Section label="Fundos">
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <Swatch label="Página" colorKey="bgPage" />
                <Swatch label="Card" colorKey="bgCard" />
                <Swatch label="Painel" colorKey="bgSurface" />
                <Swatch label="Dourado" colorKey="gold" />
              </div>
            </Section>
            <Section label="Posições">
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <Swatch label="GOL" colorKey="posGOL" />
                <Swatch label="LAT" colorKey="posLAT" />
                <Swatch label="ZAG" colorKey="posZAG" />
                <Swatch label="VOL" colorKey="posVOL" />
                <Swatch label="MEI" colorKey="posMEI" />
                <Swatch label="ATA" colorKey="posATA" />
              </div>
            </Section>
            {/* Mini preview */}
            <div style={{ background:theme.bgCard, border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, padding:12 }}>
              <div style={{ fontSize:'0.6rem', color:muted, letterSpacing:2, textTransform:'uppercase', marginBottom:8 }}>Prévia</div>
              <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:8 }}>
                {Object.entries({ GOL:theme.posGOL, LAT:theme.posLAT, ZAG:theme.posZAG, VOL:theme.posVOL, MEI:theme.posMEI, ATA:theme.posATA }).map(([pos, col]) => (
                  <div key={pos} style={{ background:col, borderRadius:4, padding:'2px 8px', fontSize:'0.72rem', fontFamily:'Bebas Neue', letterSpacing:1, color:'#000' }}>{pos}</div>
                ))}
              </div>
              <div style={{ fontFamily:'Bebas Neue', fontSize:'1rem', color:theme.gold, letterSpacing:2 }}>⚽ Montador de Time</div>
            </div>
          </>}

          {/* ── FONTES TAB ── */}
          {tab === 'fontes' && <>
            <Section label="Escala geral">
              <FontSlider label="Tamanho geral" scaleKey="fontScale" hint="multiplica tudo" />
            </Section>
            <Section label="Ajustes finos">
              <FontSlider label="Títulos e seções" scaleKey="fontTitle" hint="logos, cabeçalhos" />
              <FontSlider label="Textos e nomes" scaleKey="fontBody"  hint="nomes, equipes, labels" />
              <FontSlider label="Badges de posição" scaleKey="fontBadge" hint="GOL, LAT, ZAG..." />
            </Section>
            {/* Font preview */}
            <div style={{ background:theme.bgCard, border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, padding:14 }}>
              <div style={{ fontSize:'0.6rem', color:muted, letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Prévia de fontes</div>
              <div style={{ fontFamily:'Bebas Neue', fontSize:`calc(1.4rem * ${theme.fontScale} * ${theme.fontTitle})`, color:theme.gold, letterSpacing:2, marginBottom:6 }}>
                ⚽ Montador de Time
              </div>
              <div style={{ fontSize:`calc(0.9rem * ${theme.fontScale} * ${theme.fontBody})`, color:'#e8eaf0', fontWeight:600, marginBottom:2 }}>
                Pelé — Brasil 1970
              </div>
              <div style={{ fontSize:`calc(0.72rem * ${theme.fontScale} * ${theme.fontBody})`, color:muted, fontStyle:'italic', marginBottom:8 }}>
                Meia / #10
              </div>
              <div style={{ display:'flex', gap:5 }}>
                {['GOL','LAT','ZAG','VOL','MEI','ATA'].map(pos => (
                  <div key={pos} style={{ background:theme.posGOL, borderRadius:4, padding:'2px 7px', fontSize:`calc(0.75rem * ${theme.fontScale} * ${theme.fontBadge})`, fontFamily:'Bebas Neue', color:'#000' }}>{pos}</div>
                ))}
              </div>
            </div>
          </>}

          {/* ── PALETAS TAB ── */}
          {tab === 'presets' && <>
            <Section label="Paletas predefinidas">
              <div style={{ display:'flex', flexDirection:'column', gap:8, width:'100%' }}>
                {presets.map(p => (
                  <button key={p.name} onClick={() => setTheme(prev => ({ ...prev, ...p.t }))}
                    style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)', borderRadius:8, padding:'10px 14px', cursor:'pointer', color:'#e8eaf0', fontSize:'0.82rem', textAlign:'left', transition:'background 0.15s' }}>
                    <div style={{ display:'flex', gap:4, flexShrink:0 }}>
                      {[p.t.bgSurface, p.t.gold, p.t.posGOL, p.t.posLAT, p.t.posZAG, p.t.posATA].map((c, i) => (
                        <div key={i} style={{ width:11, height:11, borderRadius:'50%', background:c, border:'1px solid rgba(255,255,255,0.15)' }} />
                      ))}
                    </div>
                    {p.name}
                  </button>
                ))}
              </div>
            </Section>
            <div style={{ fontSize:'0.68rem', color:muted, fontStyle:'italic', marginTop:4 }}>
              As paletas substituem apenas as cores, mantendo suas configurações de fonte.
            </div>
          </>}
        </div>

        {/* Footer */}
        <div style={{ padding:'11px 20px', borderTop:border, display:'flex', gap:8, justifyContent:'flex-end', flexShrink:0 }}>
          <button onClick={() => setTheme(prev => ({ ...prev, fontScale:1, fontTitle:1, fontBody:1, fontBadge:1 }))}
            style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)', borderRadius:6, color:muted, cursor:'pointer', padding:'6px 12px', fontSize:'0.72rem' }}>
            ↺ Fontes padrão
          </button>
          <button onClick={() => setTheme(DEFAULT_THEME)}
            style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)', borderRadius:6, color:muted, cursor:'pointer', padding:'6px 12px', fontSize:'0.72rem' }}>
            ↺ Tudo padrão
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Player List Modal ─────────────────────────────────────────────────────────
function PlayerListModal({ customPlayers, setCustomPlayers, disabledTeams, setDisabledTeams, gameStarted, completedTeams, mainTeam, reserves, selectedPlayers, drawnPlayers, discardedThisRound, onClose, posBg }) {
  const [search, setSearch] = useState('');
  const [filterPos, setFilterPos] = useState('');
  const [filterTeam, setFilterTeam] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [addForm, setAddForm] = useState({ name:'', position:'GOL', position2:'', team:'', number:'' });
  const [addError, setAddError] = useState('');
  const [importPreview, setImportPreview] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState(new Set());

  const allTeams = [...new Set(customPlayers.map(p => p.team))].sort();

  const getPlayerStatus = (p) => {
    const savedIds = new Set(completedTeams.flatMap(t => [...t.mainTeam, ...t.reserves].map(x => x.id)));
    if (savedIds.has(p.id)) {
      const teamFound = completedTeams.find(t => [...t.mainTeam, ...t.reserves].some(x => x.id === p.id));
      const role = teamFound?.mainTeam.some(x => x.id === p.id) ? 'Titular' : 'Reserva';
      return { label: `${teamFound?.name} — ${role}`, color: '#f5c842' };
    }
    if (mainTeam.some(x => x.id === p.id)) return { label: 'Titular (time atual)', color: '#22c55e' };
    if (reserves.some(x => x.id === p.id)) return { label: 'Reserva (time atual)', color: '#3b82f6' };
    if (selectedPlayers.some(x => x.id === p.id)) return { label: 'Na mão', color: '#f97316' };
    if (drawnPlayers.some(x => x.id === p.id)) return { label: 'Sorteado agora', color: '#f97316' };
    if (discardedThisRound.some(x => x.id === p.id)) return { label: 'Descartado (rodada)', color: '#6b7280' };
    return { label: 'Disponível no baralho', color: '#22c55e' };
  };

  const filtered = customPlayers.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.team.toLowerCase().includes(search.toLowerCase());
    const matchPos  = !filterPos  || p.position === filterPos;
    const matchTeam = !filterTeam || p.team === filterTeam;
    return matchSearch && matchPos && matchTeam;
  });

  const byTeam = filtered.reduce((acc, p) => {
    acc[p.team] = acc[p.team] || [];
    acc[p.team].push(p);
    return acc;
  }, {});

  const startEdit = (p) => {
    setEditingId(p.id);
    setEditForm({ name: p.name, position: p.position, position2: p.position2 || '', team: p.team, number: p.number });
  };

  const saveEdit = (id) => {
    if (!editForm.name.trim() || !editForm.team.trim() || !editForm.number) return;
    const updated = { ...editForm, number: Number(editForm.number) };
    if (!updated.position2) delete updated.position2;
    setCustomPlayers(customPlayers.map(p => p.id === id ? { ...p, ...updated } : p));
    setEditingId(null);
  };

  const removePlayer = (id) => setCustomPlayers(customPlayers.filter(p => p.id !== id));

  const submitAdd = () => {
    if (!addForm.name.trim()) { setAddError('Nome obrigatório'); return; }
    if (!addForm.team.trim()) { setAddError('Time obrigatório'); return; }
    if (!addForm.number || isNaN(Number(addForm.number))) { setAddError('Número inválido'); return; }
    const newId = Math.max(...customPlayers.map(p => p.id), 200) + 1;
    const newPlayer = { id: newId, name: addForm.name.trim(), position: addForm.position, team: addForm.team.trim(), number: Number(addForm.number) };
    if (addForm.position2) newPlayer.position2 = addForm.position2;
    setCustomPlayers([...customPlayers, newPlayer]);
    setAddForm({ name:'', position:'GOL', position2:'', team:'', number:'' });
    setAddError('');
    setShowAddForm(false);
  };

  const inputStyle = { background:'#0f1117', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, padding:'5px 8px', color:'#e8eaf0', fontSize:'0.82rem', outline:'none' };

  const toggleTeam = (teamName) => {
    setDisabledTeams(prev => {
      const next = new Set(prev);
      if (next.has(teamName)) next.delete(teamName);
      else next.add(teamName);
      return next;
    });
  };

  const enableAllTeams  = () => setDisabledTeams(new Set());
  const disableAllTeams = () => setDisabledTeams(new Set(allTeams));

  // ── CSV / TSV helpers ────────────────────────────────────────────────────────
  // Columns: id, name, position, position2, number, team
  const CSV_HEADERS = ['id','name','position','position2','number','team'];

  const exportCSV = (sep = ',') => {
    const ext = sep === ',' ? 'csv' : 'tsv';
    const escape = (v) => {
      const s = String(v ?? '');
      return s.includes(sep) || s.includes('"') || s.includes('\n') ? `"${s.replace(/"/g,'""')}"` : s;
    };
    const rows = [CSV_HEADERS.join(sep)];
    customPlayers.forEach(p => {
      rows.push([p.id, p.name, p.position, p.position2||'', p.number, p.team].map(escape).join(sep));
    });
    const blob = new Blob([rows.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `jogadores.${ext}`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  // importPreview = { newTeams: [{name, players}], duplicateCount: number, newCount: number, parsedPlayers: [] }

  const parseFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      // Auto-detect separator
      const firstLine = text.split('\n')[0];
      const sep = firstLine.includes('\t') ? '\t' : ',';

      const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length < 2) { alert('Arquivo vazio ou inválido.'); return; }

      // Parse header
      const headers = lines[0].split(sep).map(h => h.replace(/^"|"$/g,'').trim().toLowerCase());
      const col = (row, name) => {
        const i = headers.indexOf(name);
        if (i === -1) return '';
        let v = row[i] ?? '';
        v = String(v).trim();
        if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1,-1).replace(/""/g,'"');
        return v;
      };

      // Parse rows (handle quoted fields with commas)
      const parseRow = (line) => {
        const result = [];
        let cur = '', inQ = false;
        for (let i = 0; i < line.length; i++) {
          const c = line[i];
          if (c === '"') { if (inQ && line[i+1]==='"') { cur+='"'; i++; } else inQ=!inQ; }
          else if (c === sep && !inQ) { result.push(cur); cur=''; }
          else cur += c;
        }
        result.push(cur);
        return result;
      };

      const existingKey = new Set(customPlayers.map(p => `${p.team}||${p.name}`.toLowerCase()));
      const maxId = Math.max(...customPlayers.map(p => p.id), 200);
      let nextId = maxId + 1;

      const incoming = lines.slice(1).map(line => parseRow(line)).filter(row => row.length >= 3);

      // Group incoming by team
      const byTeamMap = {};
      incoming.forEach(row => {
        const name  = col(row, 'name');
        const team  = col(row, 'team');
        const pos   = col(row, 'position').toUpperCase();
        const pos2  = col(row, 'position2').toUpperCase() || undefined;
        const num   = parseInt(col(row, 'number')) || 1;
        const idRaw = parseInt(col(row, 'id'));
        if (!name || !team || !pos) return;

        const key = `${team}||${name}`.toLowerCase();
        const isDup = existingKey.has(key);

        if (!byTeamMap[team]) byTeamMap[team] = { name: team, players: [], dupCount: 0, newCount: 0 };
        if (isDup) {
          byTeamMap[team].dupCount++;
        } else {
          // Assign id: use file id only if not already taken, otherwise auto-assign
          const existingIds = new Set(customPlayers.map(p=>p.id));
          const assignedId = (!isNaN(idRaw) && !existingIds.has(idRaw)) ? idRaw : nextId++;
          const player = { id: assignedId, name, position: pos, number: num, team };
          if (pos2 && pos2 !== pos) player.position2 = pos2;
          byTeamMap[team].newCount++;
          byTeamMap[team].players.push(player);
        }
      });

      const allTeamsInFile = Object.values(byTeamMap);
      const existingTeamNames = new Set(customPlayers.map(p => p.team));
      const newTeams = allTeamsInFile.filter(t => !existingTeamNames.has(t.name) && t.players.length > 0);
      const partialTeams = allTeamsInFile.filter(t => existingTeamNames.has(t.name) && t.players.length > 0);
      const totalDups = allTeamsInFile.reduce((s,t) => s + t.dupCount, 0);
      const totalNew = allTeamsInFile.reduce((s,t) => s + t.players.length, 0);

      setImportPreview({ newTeams, partialTeams, totalDups, totalNew, allTeamsInFile });
      setSelectedTeams(new Set(newTeams.map(t => t.name)));
    };
    reader.readAsText(file);
  };

  const confirmImport = (selectedTeamNames) => {
    const toAdd = importPreview.allTeamsInFile
      .filter(t => selectedTeamNames.has(t.name))
      .flatMap(t => t.players);
    setCustomPlayers(prev => [...prev, ...toAdd]);
    setImportPreview(null);
  };

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:100, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'24px 16px', overflowY:'auto' }}>
      <div style={{ background:'#181c25', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, width:'100%', maxWidth:820 }}>

        {/* Header */}
        <div style={{ padding:'18px 24px', borderBottom:'1px solid rgba(255,255,255,0.08)', display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ fontFamily:'Bebas Neue', fontSize:'1.3rem', letterSpacing:3, color:'var(--gold)', flex:1 }}>
            {gameStarted ? '👁️ Visualizar Jogadores' : '✏️ Editar Lista de Jogadores'}
          </div>
          {!gameStarted && (
            <button
              onClick={() => { setShowAddForm(!showAddForm); setAddError(''); }}
              style={{ ...inputStyle, background: showAddForm ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.05)', border:`1px solid ${showAddForm ? '#22c55e' : 'rgba(255,255,255,0.15)'}`, color: showAddForm ? '#22c55e' : 'var(--text)', cursor:'pointer', padding:'7px 14px', fontFamily:'Bebas Neue', letterSpacing:1, fontSize:'0.85rem', display:'flex', alignItems:'center', gap:6 }}
            >
              + Adicionar Jogador
            </button>
          )}
          {/* Export buttons */}
          <button onClick={() => exportCSV(',')}
            style={{ ...inputStyle, background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.3)', color:'#60a5fa', cursor:'pointer', padding:'7px 12px', fontFamily:'Bebas Neue', letterSpacing:1, fontSize:'0.82rem', display:'flex', alignItems:'center', gap:5 }}
            title="Exportar lista como CSV">
            <Download size={12}/> CSV
          </button>
          <button onClick={() => exportCSV('\t')}
            style={{ ...inputStyle, background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.3)', color:'#60a5fa', cursor:'pointer', padding:'7px 12px', fontFamily:'Bebas Neue', letterSpacing:1, fontSize:'0.82rem', display:'flex', alignItems:'center', gap:5 }}
            title="Exportar lista como TSV">
            <Download size={12}/> TSV
          </button>
          {/* Import button */}
          {!gameStarted && (
            <label style={{ ...inputStyle, background:'rgba(245,200,66,0.1)', border:'1px solid rgba(245,200,66,0.3)', color:'#f5c842', cursor:'pointer', padding:'7px 12px', fontFamily:'Bebas Neue', letterSpacing:1, fontSize:'0.82rem', display:'flex', alignItems:'center', gap:5 }}
              title="Importar jogadores de CSV/TSV">
              <Upload size={12}/> Importar
              <input type="file" accept=".csv,.tsv,.txt" style={{ display:'none' }}
                onChange={e => { if (e.target.files[0]) { parseFile(e.target.files[0]); e.target.value=''; } }}
              />
            </label>
          )}
          <button className="ftb-action-btn danger" onClick={onClose} style={{ padding:'6px 14px' }}>✕ Fechar</button>
        </div>

        {/* Add Player Form */}
        {showAddForm && !gameStarted && (
          <div style={{ padding:'16px 24px', background:'rgba(34,197,94,0.05)', borderBottom:'1px solid rgba(34,197,94,0.15)' }}>
            <div style={{ fontSize:'0.78rem', color:'#22c55e', fontWeight:700, letterSpacing:1, textTransform:'uppercase', marginBottom:10 }}>Novo Jogador</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 90px 90px 80px 1fr 60px', gap:8, alignItems:'end', flexWrap:'wrap' }}>
              <div>
                <div style={{ fontSize:'0.65rem', color:'var(--muted)', marginBottom:4 }}>NOME</div>
                <input style={{ ...inputStyle, width:'100%', boxSizing:'border-box' }} placeholder="Nome do jogador" value={addForm.name} onChange={e => setAddForm({...addForm, name: e.target.value})} />
              </div>
              <div>
                <div style={{ fontSize:'0.65rem', color:'var(--muted)', marginBottom:4 }}>POSIÇÃO 1</div>
                <select style={{ ...inputStyle, width:'100%' }} value={addForm.position} onChange={e => setAddForm({...addForm, position: e.target.value})}>
                  {Object.entries(POSITION_LABELS).map(([k,v]) => <option key={k} value={k}>{k} – {v}</option>)}
                </select>
              </div>
              <div>
                <div style={{ fontSize:'0.65rem', color:'var(--muted)', marginBottom:4 }}>POSIÇÃO 2 <span style={{opacity:0.6, fontSize:'0.55rem'}}>(opcional)</span></div>
                <select style={{ ...inputStyle, width:'100%' }} value={addForm.position2 || ''} onChange={e => setAddForm({...addForm, position2: e.target.value})}>
                  <option value="">— nenhuma —</option>
                  {Object.entries(POSITION_LABELS).map(([k,v]) => <option key={k} value={k}>{k} – {v}</option>)}
                </select>
              </div>
              <div>
                <div style={{ fontSize:'0.65rem', color:'var(--muted)', marginBottom:4 }}>Nº</div>
                <input style={{ ...inputStyle, width:'100%', boxSizing:'border-box' }} placeholder="Ex: 10" type="number" min="1" max="99" value={addForm.number} onChange={e => setAddForm({...addForm, number: e.target.value})} />
              </div>
              <div>
                <div style={{ fontSize:'0.65rem', color:'var(--muted)', marginBottom:4 }}>TIME / ERA</div>
                <input style={{ ...inputStyle, width:'100%', boxSizing:'border-box' }} placeholder="Ex: Flamengo 1981" value={addForm.team} onChange={e => setAddForm({...addForm, team: e.target.value})}
                  list="team-suggestions"
                />
                <datalist id="team-suggestions">
                  {allTeams.map(t => <option key={t} value={t} />)}
                </datalist>
              </div>
              <div>
                <button onClick={submitAdd} style={{ background:'#22c55e', border:'none', borderRadius:6, color:'#000', fontFamily:'Bebas Neue', letterSpacing:1, fontSize:'0.9rem', padding:'7px 12px', cursor:'pointer', width:'100%' }}>
                  Salvar
                </button>
              </div>
            </div>
            {addError && <div style={{ color:'#ef4444', fontSize:'0.72rem', marginTop:6 }}>⚠ {addError}</div>}
          </div>
        )}

        {/* Import Preview / Confirmation */}
        {importPreview && (() => {
          const toggleSel = (name) => setSelectedTeams(prev => { const n=new Set(prev); n.has(name)?n.delete(name):n.add(name); return n; });
          return (
            <div style={{ padding:'16px 24px', background:'rgba(245,200,66,0.05)', borderBottom:'1px solid rgba(245,200,66,0.2)' }}>
              <div style={{ fontFamily:'Bebas Neue', fontSize:'1rem', letterSpacing:2, color:'#f5c842', marginBottom:10 }}>
                📥 Prévia da Importação
              </div>
              {/* Partial teams (team exists, adding new players) */}
              {importPreview.partialTeams.length > 0 && (
                <div style={{ marginBottom:10 }}>
                  <div style={{ fontSize:'0.68rem', color:'#22c55e', letterSpacing:1.5, textTransform:'uppercase', fontWeight:700, marginBottom:6 }}>
                    Times já existentes — novos jogadores serão adicionados
                  </div>
                  {importPreview.partialTeams.map(t => (
                    <div key={t.name} style={{ fontSize:'0.78rem', color:'var(--muted)', paddingLeft:8, marginBottom:3 }}>
                      <span style={{ color:'var(--text)', fontWeight:600 }}>{t.name}</span>
                      {' — '}{t.players.length} novo(s){t.dupCount>0?`, ${t.dupCount} ignorado(s) (já existe)`:''}
                    </div>
                  ))}
                </div>
              )}
              {/* New teams — ask user */}
              {importPreview.newTeams.length > 0 && (
                <div style={{ marginBottom:12 }}>
                  <div style={{ fontSize:'0.68rem', color:'#f5c842', letterSpacing:1.5, textTransform:'uppercase', fontWeight:700, marginBottom:6 }}>
                    Times novos — selecione quais importar
                  </div>
                  {importPreview.newTeams.map(t => (
                    <label key={t.name} style={{ display:'flex', alignItems:'center', gap:8, padding:'5px 8px', background:'rgba(255,255,255,0.03)', borderRadius:6, marginBottom:4, cursor:'pointer' }}>
                      <input type="checkbox" checked={selectedTeams.has(t.name)} onChange={()=>toggleSel(t.name)}
                        style={{ width:14, height:14, cursor:'pointer', accentColor:'#f5c842' }} />
                      <span style={{ fontSize:'0.82rem', color:'var(--text)', fontWeight:600 }}>{t.name}</span>
                      <span style={{ fontSize:'0.72rem', color:'var(--muted)' }}>{t.players.length} jogador(es)</span>
                    </label>
                  ))}
                </div>
              )}
              {/* Summary */}
              <div style={{ fontSize:'0.72rem', color:'var(--muted)', marginBottom:12 }}>
                {importPreview.totalDups > 0 && <span style={{ color:'#6b7280' }}>⚠ {importPreview.totalDups} jogador(es) ignorado(s) (já existem). </span>}
                {importPreview.totalNew > 0 && <span style={{ color:'#22c55e' }}>✓ {importPreview.totalNew} jogador(es) novo(s) disponíveis. </span>}
                {importPreview.newTeams.length > 0 && selectedTeams.size === 0 && <span style={{ color:'#f97316' }}>Selecione ao menos um time novo para importar. </span>}
              </div>
              <div style={{ display:'flex', gap:8 }}>
                <button onClick={() => {
                    const toImport = new Set([
                      ...importPreview.partialTeams.map(t=>t.name),
                      ...selectedTeams
                    ]);
                    confirmImport(toImport);
                  }}
                  disabled={importPreview.partialTeams.length === 0 && selectedTeams.size === 0}
                  style={{ background:'#22c55e', border:'none', borderRadius:6, color:'#000', fontFamily:'Bebas Neue', letterSpacing:1, fontSize:'0.9rem', padding:'7px 16px', cursor:'pointer', opacity: (importPreview.partialTeams.length===0 && selectedTeams.size===0) ? 0.4 : 1 }}>
                  ✓ Confirmar Importação
                </button>
                <button onClick={() => setImportPreview(null)}
                  style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, color:'var(--muted)', fontFamily:'Bebas Neue', letterSpacing:1, fontSize:'0.9rem', padding:'7px 16px', cursor:'pointer' }}>
                  ✕ Cancelar
                </button>
              </div>
            </div>
          );
        })()}

        {/* Filters */}
        <div style={{ padding:'12px 24px', borderBottom:'1px solid rgba(255,255,255,0.06)', display:'flex', flexDirection:'column', gap:8 }}>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
            <input
              placeholder="🔍 Buscar por nome ou time..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ ...inputStyle, flex:1, minWidth:180, padding:'7px 12px' }}
            />
            <select value={filterPos} onChange={e => setFilterPos(e.target.value)} style={{ ...inputStyle, minWidth:130 }}>
              <option value="">Todas as posições</option>
              {Object.entries(POSITION_LABELS).map(([k,v]) => <option key={k} value={k}>{k} – {v}</option>)}
            </select>
            <select value={filterTeam} onChange={e => setFilterTeam(e.target.value)} style={{ ...inputStyle, minWidth:160 }}>
              <option value="">Todos os times</option>
              {allTeams.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            {(search || filterPos || filterTeam) && (
              <button onClick={() => { setSearch(''); setFilterPos(''); setFilterTeam(''); }}
                style={{ ...inputStyle, cursor:'pointer', color:'#f97316', borderColor:'rgba(249,115,22,0.3)', padding:'6px 12px', background:'rgba(249,115,22,0.08)' }}>
                ✕ Limpar
              </button>
            )}
          </div>
          {/* Team enable/disable quick controls */}
          <div style={{ display:'flex', gap:8, alignItems:'center', flexWrap:'wrap' }}>
            <span style={{ fontSize:'0.68rem', color:'var(--muted)', letterSpacing:1, textTransform:'uppercase', fontWeight:700 }}>Times no jogo:</span>
            <button onClick={enableAllTeams}
              style={{ background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.3)', borderRadius:5, color:'#22c55e', cursor:'pointer', padding:'3px 10px', fontSize:'0.72rem', fontFamily:'Bebas Neue', letterSpacing:1 }}>
              ✓ Ativar Todos
            </button>
            <button onClick={disableAllTeams}
              style={{ background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.25)', borderRadius:5, color:'#ef4444', cursor:'pointer', padding:'3px 10px', fontSize:'0.72rem', fontFamily:'Bebas Neue', letterSpacing:1 }}>
              ○ Desativar Todos
            </button>
            {disabledTeams.size > 0 && (
              <span style={{ fontSize:'0.7rem', color:'#ef4444', fontStyle:'italic' }}>
                {disabledTeams.size} time(s) desativado(s) — {customPlayers.filter(p => disabledTeams.has(p.team)).length} jogadores fora do baralho
              </span>
            )}
          </div>
        </div>

        {/* Status legend (game started) */}
        {gameStarted && (
          <div style={{ padding:'10px 24px', display:'flex', gap:14, flexWrap:'wrap', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
            {[
              { color:'#22c55e', label:'Disponível / Titular atual' },
              { color:'#3b82f6', label:'Reserva atual' },
              { color:'#f5c842', label:'Em time salvo' },
              { color:'#f97316', label:'Na mão / Sorteado' },
              { color:'#6b7280', label:'Descartado (rodada)' },
            ].map(s => (
              <div key={s.label} style={{ display:'flex', alignItems:'center', gap:5, fontSize:'0.67rem', color:'var(--muted)' }}>
                <div style={{ width:7, height:7, borderRadius:'50%', background:s.color, flexShrink:0 }} />
                {s.label}
              </div>
            ))}
          </div>
        )}

        {/* Player list */}
        <div style={{ maxHeight:'55vh', overflowY:'auto', padding:'8px 24px 16px' }}>
          {Object.keys(byTeam).length === 0 && (
            <p style={{ color:'var(--muted)', fontStyle:'italic', fontSize:'0.85rem', textAlign:'center', padding:'32px 0' }}>Nenhum jogador encontrado.</p>
          )}
          {Object.entries(byTeam).map(([teamName, players]) => {
            const isDisabled = disabledTeams.has(teamName);
            return (
            <div key={teamName} style={{ marginBottom:18, opacity: isDisabled ? 0.45 : 1, transition:'opacity 0.2s' }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid rgba(255,255,255,0.06)', paddingBottom:5, paddingTop:10, marginBottom:6 }}>
                <span style={{ fontFamily:'Bebas Neue', fontSize:'0.9rem', letterSpacing:2, color: isDisabled ? 'var(--muted)' : 'var(--gold)', flex:1 }}>
                  {teamName} <span style={{ color:'var(--muted)', fontSize:'0.7rem', fontFamily:'Barlow', letterSpacing:0 }}>({players.length})</span>
                  {isDisabled && <span style={{ marginLeft:8, fontSize:'0.62rem', color:'#ef4444', fontFamily:'Barlow', letterSpacing:1, textTransform:'uppercase', fontWeight:700 }}>● Desativado</span>}
                </span>
                <button
                  onClick={() => toggleTeam(teamName)}
                  title={isDisabled ? 'Ativar time no jogo' : 'Desativar time no jogo (sem excluir)'}
                  style={{
                    background: isDisabled ? 'rgba(239,68,68,0.12)' : 'rgba(34,197,94,0.12)',
                    border: `1px solid ${isDisabled ? 'rgba(239,68,68,0.35)' : 'rgba(34,197,94,0.35)'}`,
                    borderRadius:6, padding:'3px 10px', cursor:'pointer',
                    color: isDisabled ? '#ef4444' : '#22c55e',
                    fontFamily:'Bebas Neue', fontSize:'0.72rem', letterSpacing:1,
                    display:'flex', alignItems:'center', gap:5, flexShrink:0,
                    transition:'all 0.15s',
                  }}
                >
                  {isDisabled ? '○ Ativar' : '● Ativo'}
                </button>
              </div>
              {players.map(p => {
                const isEditing = editingId === p.id;
                const status = getPlayerStatus(p);
                return (
                  <div key={p.id} style={{ borderBottom:'1px solid rgba(255,255,255,0.04)', padding:'6px 0' }}>
                    {isEditing ? (
                      /* Inline edit row */
                      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                        <div style={{ display:'grid', gridTemplateColumns:'90px 90px 60px 1fr auto', gap:6, alignItems:'center' }}>
                          <div>
                            <div style={{ fontSize:'0.58rem', color:'#7a8099', marginBottom:2 }}>POSIÇÃO 1</div>
                            <select style={{ ...inputStyle, width:'100%' }} value={editForm.position} onChange={e => setEditForm({...editForm, position: e.target.value})}>
                              {Object.entries(POSITION_LABELS).map(([k,v]) => <option key={k} value={k}>{k}</option>)}
                            </select>
                          </div>
                          <div>
                            <div style={{ fontSize:'0.58rem', color:'#7a8099', marginBottom:2 }}>POSIÇÃO 2 <span style={{opacity:0.6}}>(opcional)</span></div>
                            <select style={{ ...inputStyle, width:'100%' }} value={editForm.position2 || ''} onChange={e => setEditForm({...editForm, position2: e.target.value})}>
                              <option value="">— nenhuma —</option>
                              {Object.entries(POSITION_LABELS).map(([k,v]) => <option key={k} value={k}>{k}</option>)}
                            </select>
                          </div>
                          <input style={{ ...inputStyle }} type="number" min="1" max="99" value={editForm.number} onChange={e => setEditForm({...editForm, number: e.target.value})} placeholder="Nº" />
                          <input style={{ ...inputStyle }} value={editForm.team} onChange={e => setEditForm({...editForm, team: e.target.value})} placeholder="Time" list="team-suggestions-edit" />
                          <datalist id="team-suggestions-edit">{allTeams.map(t => <option key={t} value={t} />)}</datalist>
                          <div style={{ display:'flex', gap:4 }}>
                            <button onClick={() => saveEdit(p.id)} style={{ background:'#22c55e', border:'none', borderRadius:5, color:'#000', fontFamily:'Bebas Neue', fontSize:'0.8rem', padding:'4px 10px', cursor:'pointer' }}>✓</button>
                            <button onClick={() => setEditingId(null)} style={{ background:'#374151', border:'none', borderRadius:5, color:'#9ca3af', fontFamily:'Bebas Neue', fontSize:'0.8rem', padding:'4px 8px', cursor:'pointer' }}>✕</button>
                          </div>
                        </div>
                        <input style={{ ...inputStyle, width:'100%', boxSizing:'border-box' }} value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} placeholder="Nome do jogador" />
                      </div>
                    ) : (
                      /* Normal row */
                      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <div style={{ display:'flex', flexDirection:'column', gap:2, alignItems:'center', flexShrink:0 }}>
                          <span className="ftb-pos-badge" style={{ background: posBg[p.position], fontSize:'0.63rem', padding:'2px 5px' }}>{p.position}</span>
                          {p.position2 && (
                            <span style={{ background: posBg[p.position2], borderRadius:3, padding:'1px 5px', fontSize:'0.58rem', fontFamily:'Bebas Neue', letterSpacing:1, color:'#000', opacity:0.75 }}>{p.position2}</span>
                          )}
                        </div>
                        <span style={{ fontFamily:'Bebas Neue', fontSize:'0.95rem', color:'var(--muted)', minWidth:22, flexShrink:0 }}>#{p.number}</span>
                        <span style={{ flex:1, fontSize:'0.87rem', fontWeight:600 }}>{p.name}</span>
                        {gameStarted ? (
                          <span style={{ fontSize:'0.68rem', color: status.color, fontWeight:600, textAlign:'right' }}>{status.label}</span>
                        ) : (
                          <div style={{ display:'flex', gap:4, flexShrink:0 }}>
                            <button onClick={() => startEdit(p)} style={{ background:'rgba(245,200,66,0.12)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:5, color:'#f5c842', cursor:'pointer', padding:'3px 9px', fontSize:'0.68rem', fontWeight:600 }}>
                              Editar
                            </button>
                            <button onClick={() => removePlayer(p.id)} style={{ background:'rgba(239,68,68,0.12)', border:'1px solid rgba(239,68,68,0.25)', borderRadius:5, color:'#ef4444', cursor:'pointer', padding:'3px 9px', fontSize:'0.68rem', fontWeight:600 }}>
                              Remover
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );})}
        </div>

        {/* Footer */}
        <div style={{ padding:'12px 24px', borderTop:'1px solid rgba(255,255,255,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontSize:'0.75rem', color:'var(--muted)' }}>
            {filtered.length} de {customPlayers.length} jogadores
          </span>
          {!gameStarted && (
            <button className="ftb-action-btn" onClick={() => setCustomPlayers(PLAYERS)} style={{ fontSize:'0.75rem', padding:'6px 14px' }}>
              <RotateCcw size={11}/> Restaurar lista original
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function FootballTeamBuilder() {
  const [formation, setFormation] = useState("4-4-2");
  const [diceResult, setDiceResult] = useState(null);
  const [drawnPlayers, setDrawnPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [discardedThisRound, setDiscardedThisRound] = useState([]);
  const [mainTeam, setMainTeam] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [isRolling, setIsRolling] = useState(false);
  const [hideUnavailablePositions, setHideUnavailablePositions] = useState(true);
  const [hideCompletedPositions, setHideCompletedPositions] = useState(false);
  const [completedTeams, setCompletedTeams] = useState([]);
  const [showCompletedTeams, setShowCompletedTeams] = useState(false);
  const [teamNameInput, setTeamNameInput] = useState('');
  const [namingMode, setNamingMode] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showPlayerList, setShowPlayerList] = useState(false);
  const [customPlayers, setCustomPlayers] = useState(PLAYERS);
  const [disabledTeams, setDisabledTeams] = useState(new Set()); // teams excluded from the deck
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [showTheme, setShowTheme] = useState(false);
  // activePositions: { [playerId]: activePosition } — tracks which position is active for players "Na Mão"
  const [activePositions, setActivePositions] = useState({});
  const [subMenu, setSubMenu] = useState(null); // { titular, x, y }

  // Derived position colors from theme (used everywhere badges appear)
  const posBg = {
    GOL: theme.posGOL, LAT: theme.posLAT, ZAG: theme.posZAG,
    VOL: theme.posVOL, MEI: theme.posMEI, ATA: theme.posATA,
  };

  // Returns the currently active position for a player (may be position2 if toggled)
  const getActivePos = (p) => activePositions[p.id] || p.position;

  // Toggle a player's active position between position and position2
  const togglePos = (p) => {
    if (!p.position2) return;
    setActivePositions(prev => ({
      ...prev,
      [p.id]: prev[p.id] === p.position2 ? p.position : p.position2,
    }));
  };

  // When a player leaves "Na Mão", clear its active position override
  const clearActivePos = (p) => {
    setActivePositions(prev => { const n = {...prev}; delete n[p.id]; return n; });
  };

  // Get eligible reserves for a given titular (same position)
  const getEligibleReserves = (titular) =>
    reserves.filter(r => r.position === titular.position);

  // Swap a titular with a reserve — titular goes to bench, reserve enters field
  const substituir = (titular, reserva) => {
    setMainTeam(prev => prev.map(p => p.id === titular.id ? reserva : p));
    setReserves(prev => prev.map(r => r.id === reserva.id ? titular : r));
    setSubMenu(null);
  };

  // Open substitution menu anchored to the click position
  const openSubMenu = (e, titular) => {
    e.stopPropagation();
    const eligible = getEligibleReserves(titular);
    if (eligible.length === 0) return;
    if (eligible.length === 1) { substituir(titular, eligible[0]); return; }
    const rect = e.currentTarget.getBoundingClientRect();
    setSubMenu({ titular, x: rect.left, y: rect.bottom + 6 });
  };

  // ── Computed ────────────────────────────────────────────────────────────────
  const canAddToMain = (player) => {
    const pos = getActivePos(player);
    const counts = countPositions(mainTeam);
    return (counts[pos] || 0) < (FORMATIONS[formation][pos] || 0);
  };

  const canAddToReserves = (player) => {
    const pos = getActivePos(player);
    const counts = countPositions(reserves);
    const maxRes = getMaxReservesForFormation(formation);
    return (counts[pos] || 0) < (maxRes[pos] || 0);
  };

  const isPositionAvailable = (pos) => FORMATIONS[formation][pos] > 0;

  const isPositionComplete = (pos) => {
    const mc = countPositions(mainTeam);
    const rc = countPositions(reserves);
    const maxRes = getMaxReservesForFormation(formation);
    return (mc[pos] || 0) >= FORMATIONS[formation][pos] && (rc[pos] || 0) >= (maxRes[pos] || 0);
  };

  const shouldHidePlayer = (player) => {
    if (hideUnavailablePositions && !isPositionAvailable(player.position)) return true;
    if (hideCompletedPositions && isPositionComplete(player.position)) return true;
    if (disabledTeams.has(player.team)) return true;
    return false;
  };

  const totalSlots = Object.values(FORMATIONS[formation]).reduce((a, b) => a + b, 0);
  const maxReservesTotal = Object.values(getMaxReservesForFormation(formation)).reduce((a, b) => a + b, 0);
  const filledSlots = mainTeam.length + reserves.length;
  const totalNeeded = totalSlots + maxReservesTotal;
  const progressPct = Math.round((filledSlots / totalNeeded) * 100);

  const isTeamComplete = mainTeam.length === totalSlots && reserves.length === maxReservesTotal;

  // ── Actions ─────────────────────────────────────────────────────────────────
  const rollDice = () => {
    if (drawnPlayers.length > 0) { alert("Resolva os jogadores sorteados antes de rolar novamente!"); return; }
    setGameStarted(true);
    setIsRolling(true);
    let count = 0;
    const iv = setInterval(() => {
      setDiceResult(Math.floor(Math.random() * 6) + 1);
      if (++count > 10) {
        clearInterval(iv);
        const result = Math.floor(Math.random() * 6) + 1;
        setDiceResult(result);
        drawPlayers(result);
        setIsRolling(false);
      }
    }, 100);
  };

  const drawPlayers = (num) => {
    // Jogadores em times já salvos nunca voltam ao baralho
    const savedIds = new Set(completedTeams.flatMap(t => [...t.mainTeam, ...t.reserves].map(p => p.id)));
    const isSaved = (p) => savedIds.has(p.id);

    const used = [...selectedPlayers, ...mainTeam, ...reserves, ...discardedThisRound];
    let available = customPlayers.filter(p => !isSaved(p) && !used.find(u => u.id === p.id) && !shouldHidePlayer(p));
    if (available.length === 0) {
      setDiscardedThisRound([]);
      let fresh = customPlayers.filter(p => !isSaved(p) && !mainTeam.find(u=>u.id===p.id) && !reserves.find(u=>u.id===p.id) && !selectedPlayers.find(u=>u.id===p.id) && !shouldHidePlayer(p));
      const drawn = [...fresh].sort(()=>Math.random()-0.5).slice(0, Math.min(num, fresh.length));
      setDrawnPlayers(drawn);
    } else {
      const drawn = [...available].sort(()=>Math.random()-0.5).slice(0, Math.min(num, available.length));
      setDrawnPlayers(drawn);
    }
  };

  const selectPlayer  = (p) => { setSelectedPlayers([...selectedPlayers, p]); setDrawnPlayers(drawnPlayers.filter(x=>x.id!==p.id)); };
  const discardPlayer = (p) => { setDiscardedThisRound([...discardedThisRound, p]); setDrawnPlayers(drawnPlayers.filter(x=>x.id!==p.id)); };

  const moveToMain = (p) => {
    const pos = getActivePos(p);
    if (!canAddToMain(p)) { alert(`Posição ${POSITION_LABELS[pos]} já está cheia no esquema ${formation}!`); return; }
    // Store the player with the active position as the effective position
    const playerWithPos = pos !== p.position ? { ...p, position: pos, position2: p.position } : p;
    setMainTeam([...mainTeam, playerWithPos]);
    setSelectedPlayers(selectedPlayers.filter(x=>x.id!==p.id));
    clearActivePos(p);
  };

  const moveToReserves = (p) => {
    const pos = getActivePos(p);
    if (!canAddToReserves(p)) { alert(`Banco de reservas para ${POSITION_LABELS[pos]} já está cheio!`); return; }
    const playerWithPos = pos !== p.position ? { ...p, position: pos, position2: p.position } : p;
    setReserves([...reserves, playerWithPos]);
    setSelectedPlayers(selectedPlayers.filter(x=>x.id!==p.id));
    clearActivePos(p);
  };

  const removeFromSelected = (p) => { setSelectedPlayers(selectedPlayers.filter(x=>x.id!==p.id)); setDiscardedThisRound([...discardedThisRound, p]); clearActivePos(p); };
  const removeFromMain = (p) => { setMainTeam(mainTeam.filter(x=>x.id!==p.id)); setSelectedPlayers([...selectedPlayers, p]); };
  const removeFromReserves = (p) => { setReserves(reserves.filter(x=>x.id!==p.id)); setSelectedPlayers([...selectedPlayers, p]); };

  const reset = () => {
    setFormation("4-4-2"); setDiceResult(null); setDrawnPlayers([]);
    setSelectedPlayers([]); setDiscardedThisRound([]); setMainTeam([]); setReserves([]);
    setGameStarted(false); setActivePositions({});
  };

  const resetAll = () => {
    if (window.confirm("Tem certeza? Todos os times salvos serão perdidos.")) {
      reset(); setCompletedTeams([]); setCustomPlayers(PLAYERS);
    }
  };

  const confirmSaveTeam = () => {
    if (mainTeam.length === 0) { alert("Não há time para salvar!"); return; }
    setNamingMode(true);
    setTeamNameInput(`Time ${completedTeams.length + 1}`);
  };

  const doSaveTeam = () => {
    const name = teamNameInput.trim() || `Time ${completedTeams.length + 1}`;
    const newTeam = {
      id: Date.now(), name,
      formation,
      mainTeam: [...mainTeam],
      reserves: [...reserves],
      createdAt: new Date().toLocaleString('pt-BR')
    };
    setCompletedTeams([...completedTeams, newTeam]);
    setMainTeam([]); setReserves([]); setSelectedPlayers([]); setDiscardedThisRound([]);
    setFormation("4-4-2"); setDiceResult(null); setDrawnPlayers([]);
    setNamingMode(false); setTeamNameInput('');
  };

  const deleteCompletedTeam = (id) => setCompletedTeams(completedTeams.filter(t => t.id !== id));

  // ── Export helpers ──────────────────────────────────────────────────────────
  const buildTeamText = (t) => {
    let c = `========================================\n${t.name}\nFormação: ${t.formation} | Criado em: ${t.createdAt}\n========================================\n\nTITULARES (${t.mainTeam.length}):\n`;
    ['GOL','LAT','ZAG','VOL','MEI','ATA'].forEach(pos => {
      const players = t.mainTeam.filter(p=>p.position===pos);
      if (players.length) { c += `\n  ${POSITION_LABELS[pos]}:\n`; players.forEach(p => { c += `    • ${p.name} (#${p.number}) — ${p.team}\n`; }); }
    });
    if (t.reserves.length) {
      c += `\nRESERVAS (${t.reserves.length}):\n`;
      t.reserves.forEach(p => { c += `  • ${p.name} (#${p.number}) — ${POSITION_LABELS[p.position]} — ${p.team}\n`; });
    }
    return c;
  };

  const exportSingleTeam = (t) => {
    const blob = new Blob([buildTeamText(t)], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `${t.name.replace(/\s+/g,'_')}.txt`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  const exportCurrentTeam = () => {
    if (!mainTeam.length && !reserves.length) { alert("Não há jogadores para exportar!"); return; }
    const fakeTeam = { name: "Time Atual", formation, mainTeam, reserves, createdAt: new Date().toLocaleString('pt-BR') };
    exportSingleTeam(fakeTeam);
  };

  const exportAllTeams = () => {
    if (!completedTeams.length) { alert("Não há times salvos para exportar!"); return; }
    const now = new Date();
    let content = `========================================\nEXPORTAÇÃO DE TIMES\n${now.toLocaleString('pt-BR')}\nTotal de times: ${completedTeams.length}\n========================================\n\n`;
    completedTeams.forEach((t, i) => { content += `\n[${i+1}]\n${buildTeamText(t)}\n`; });
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = `todos_os_times_${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}.txt`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{css + `
        :root {
          --gold: ${theme.gold};
          --card-bg: ${theme.bgCard};
          --surface: ${theme.bgSurface};
          --fscale: ${theme.fontScale};
          --ftitle: calc(${theme.fontTitle} * ${theme.fontScale});
          --fbody:  calc(${theme.fontBody}  * ${theme.fontScale});
          --fbadge: calc(${theme.fontBadge} * ${theme.fontScale});
        }
        .ftb-root { background: ${theme.bgPage}; }
        .ftb-hero { background: ${theme.bgPage}; }
        .ftb-complete-badge { background: linear-gradient(135deg, ${theme.gold}aa, ${theme.gold}); }
        .ftb-form-btn.active { background: ${theme.gold}; border-color: ${theme.gold}; }
        .ftb-roll-btn { background: linear-gradient(135deg, ${theme.gold}cc, ${theme.gold}); }
        .ftb-progress-fill { background: linear-gradient(90deg, ${theme.posZAG}, ${theme.gold}); }
        .ftb-action-btn.gold { border-color: ${theme.gold}; color: ${theme.gold}; }
        .ftb-section-title { color: ${theme.gold}; font-size: calc(1.2rem * var(--ftitle)); }
        .ftb-toggle.on { border-color: ${theme.gold}; color: ${theme.gold}; background: ${theme.gold}22; }
        .ftb-saved-title { color: ${theme.gold}; }
        .ftb-logo { color: ${theme.gold}; font-size: calc(2.4rem * var(--ftitle)); }
        .ftb-subtitle { font-size: calc(0.75rem * var(--ftitle)); }
        .ftb-player-name { font-size: calc(0.9rem * var(--fbody)); }
        .ftb-player-team { font-size: calc(0.72rem * var(--fbody)); }
        .ftb-number { font-size: calc(1.3rem * var(--fbody)); }
        .ftb-pos-badge { font-size: calc(0.75rem * var(--fbadge)); }
        .ftb-form-btn { font-size: calc(1rem * var(--ftitle)); }
        .ftb-roll-btn { font-size: calc(1.1rem * var(--ftitle)); }
        .ftb-action-btn { font-size: calc(0.9rem * var(--fbody)); }
        .ftb-progress-label { font-size: calc(0.78rem * var(--fbody)); }
        .ftb-toggle { font-size: calc(0.72rem * var(--fbody)); }
        .pitch-name { font-size: calc(0.6rem * var(--fbody)); }
        .pitch-avatar { font-size: calc(0.8rem * var(--fbadge)); }
      `}</style>
      <div className="ftb-root">
        {/* Header */}
        <div className="ftb-hero">
          <div>
            <div className="ftb-logo">⚽ <span>Montador de Time de Futebol</span></div>
            <div className="ftb-subtitle">Monte seu time dos sonhos com lendas do futebol</div>
          </div>
          <div style={{ marginLeft:'auto', display:'flex', gap:8, alignItems:'center', flexWrap:'wrap' }}>
            {disabledTeams.size > 0 && (
              <span title={`Times desativados: ${[...disabledTeams].join(', ')}`}
                style={{ fontFamily:'Bebas Neue', fontSize:'0.78rem', letterSpacing:1.5, background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.3)', color:'#ef4444', padding:'4px 10px', borderRadius:99, cursor:'default' }}>
                ● {disabledTeams.size} time(s) off
              </span>
            )}
            {isTeamComplete && (
              <span className="ftb-complete-badge"><Star size={12}/> Time Completo!</span>
            )}
            <button className="ftb-action-btn" onClick={() => setShowPlayerList(true)} style={{ borderColor: gameStarted ? 'rgba(255,255,255,0.15)' : '#22c55e', color: gameStarted ? 'var(--muted)' : '#22c55e' }}>
              <Users size={13} /> {gameStarted ? 'Ver Jogadores' : 'Editar Jogadores'}
            </button>
            <button className="ftb-action-btn" onClick={() => setShowTheme(!showTheme)} style={{ borderColor: showTheme ? theme.gold : 'var(--border)', color: showTheme ? theme.gold : 'var(--text)' }}>
              🎨 Cores/Fontes
            </button>
            <button className="ftb-action-btn gold" onClick={confirmSaveTeam} disabled={mainTeam.length===0}>
              <Save size={13} /> Salvar Time
            </button>
            <button className="ftb-action-btn" onClick={exportCurrentTeam}>
              <Download size={13} /> Exportar
            </button>
            <button className="ftb-action-btn danger" onClick={resetAll}>
              <RotateCcw size={13} /> Reiniciar
            </button>
          </div>
        </div>

        {/* Naming Modal */}
        {namingMode && (
          <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', zIndex:100, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ background:'#181c25', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:32, minWidth:320 }}>
              <div style={{ fontFamily:'Bebas Neue', fontSize:'1.4rem', letterSpacing:3, color:'var(--gold)', marginBottom:16 }}>
                Nome do Time
              </div>
              <input
                style={{ width:'100%', background:'#0f1117', border:'1px solid rgba(255,255,255,0.15)', borderRadius:7, padding:'10px 14px', color:'#e8eaf0', fontSize:'0.95rem', outline:'none', marginBottom:16, boxSizing:'border-box' }}
                value={teamNameInput}
                onChange={e => setTeamNameInput(e.target.value)}
                onKeyDown={e => e.key==='Enter' && doSaveTeam()}
                autoFocus
              />
              <div style={{ display:'flex', gap:8 }}>
                <button className="ftb-roll-btn" onClick={doSaveTeam} style={{ flex:1 }}><Save size={14}/> Salvar</button>
                <button className="ftb-action-btn" onClick={() => setNamingMode(false)} style={{ flex:1, justifyContent:'center' }}>Cancelar</button>
              </div>
            </div>
          </div>
        )}

        {/* Theme Panel */}
        {showTheme && <ThemePanel theme={theme} setTheme={setTheme} onClose={() => setShowTheme(false)} />}

        {/* Player List Modal */}
        {showPlayerList && <PlayerListModal
          customPlayers={customPlayers}
          setCustomPlayers={setCustomPlayers}
          disabledTeams={disabledTeams}
          setDisabledTeams={setDisabledTeams}
          gameStarted={gameStarted}
          completedTeams={completedTeams}
          mainTeam={mainTeam}
          reserves={reserves}
          selectedPlayers={selectedPlayers}
          drawnPlayers={drawnPlayers}
          discardedThisRound={discardedThisRound}
          onClose={() => setShowPlayerList(false)}
          posBg={posBg}
        />}

        <div className="ftb-body">
          {/* ── LEFT PANEL: Controls + Sorteio ── */}
          <div className="ftb-panel">

            {/* Formation */}
            <div className="ftb-section-title">Esquema Tático</div>
            <div className="ftb-formations">
              {Object.keys(FORMATIONS).map(f => (
                <button key={f} className={`ftb-form-btn ${formation===f?'active':''}`} onClick={()=>setFormation(f)}>{f}</button>
              ))}
            </div>

            {/* Progress */}
            <div className="ftb-progress-wrap">
              <div className="ftb-progress-label">
                <span>Progresso do time</span>
                <span style={{ color:'var(--gold)' }}>{filledSlots}/{totalNeeded} jogadores</span>
              </div>
              <div className="ftb-progress-bar">
                <div className="ftb-progress-fill" style={{ width:`${progressPct}%` }} />
              </div>
              <div style={{ display:'flex', gap:16, marginTop:6, fontSize:'0.7rem', color:'var(--muted)' }}>
                <span>⚽ Titulares: {mainTeam.length}/{totalSlots}</span>
                <span>🪑 Reservas: {reserves.length}/{maxReservesTotal}</span>
              </div>
            </div>

            {/* Toggles */}
            <div className="ftb-toggles">
              <button className={`ftb-toggle ${hideUnavailablePositions?'on':''}`} onClick={()=>setHideUnavailablePositions(!hideUnavailablePositions)}>
                {hideUnavailablePositions ? '✓' : '○'} Ocultar pos. indisponíveis
              </button>
              <button className={`ftb-toggle ${hideCompletedPositions?'on':''}`} onClick={()=>setHideCompletedPositions(!hideCompletedPositions)}>
                {hideCompletedPositions ? '✓' : '○'} Ocultar pos. completas
              </button>
            </div>

            {/* Dice */}
            <div className="ftb-section-title" style={{ marginTop:8 }}>Sorteio</div>
            <div className="ftb-dice-area">
              <span className={`ftb-dice ${isRolling?'rolling':''}`}>
                {diceResult ? dice_faces[diceResult-1] : '🎲'}
              </span>
              <div>
                {diceResult && !isRolling && (
                  <div style={{ fontSize:'0.8rem', color:'var(--muted)', marginBottom:6 }}>
                    Sorteando <strong style={{ color:'var(--gold)' }}>{diceResult}</strong> jogador(es)
                  </div>
                )}
                <button className="ftb-roll-btn" onClick={rollDice} disabled={isRolling}>
                  <Shuffle size={15} />
                  {isRolling ? 'Rolando...' : 'Rolar Dado'}
                </button>
              </div>
            </div>

            {/* Drawn players */}
            {drawnPlayers.length > 0 && (
              <>
                <div className="ftb-section-title" style={{ color:'#f97316' }}>
                  <AlertCircle size={14} />
                  Sorteados — escolha o destino
                </div>
                {drawnPlayers.map(p => (
                  <PlayerCard key={p.id} player={p} posBg={posBg} actions={
                    <>
                      <button className="ftb-btn btn-main" onClick={()=>selectPlayer(p)}>
                        <ArrowDown size={11}/> Guardar
                      </button>
                      <button className="ftb-btn btn-disc" onClick={()=>discardPlayer(p)}>
                        <Trash2 size={11}/> Descartar
                      </button>
                    </>
                  }/>
                ))}
              </>
            )}

            {/* Position availability panel */}
            {(() => {
              const savedIds = new Set(completedTeams.flatMap(t => [...t.mainTeam, ...t.reserves].map(p => p.id)));
              const usedInSession = new Set([
                ...mainTeam, ...reserves, ...selectedPlayers, ...drawnPlayers,
                ...completedTeams.flatMap(t => [...t.mainTeam, ...t.reserves])
              ].map(p => p.id));
              const allPositions = ['GOL','LAT','ZAG','VOL','MEI','ATA'];
              const rows = allPositions
                .filter(pos => isPositionAvailable(pos))
                .map(pos => {
                  const total = customPlayers.filter(p => p.position === pos && !savedIds.has(p.id)).length;
                  const used = customPlayers.filter(p => p.position === pos && usedInSession.has(p.id) && !savedIds.has(p.id)).length;
                  const avail = total - used;
                  return { pos, avail, total };
                });
              return (
                <div style={{ background:'rgba(0,0,0,0.25)', border:'1px solid var(--border)', borderRadius:8, padding:'10px 12px', marginBottom:16 }}>
                  <div style={{ fontSize:'0.68rem', color:'var(--muted)', letterSpacing:2, textTransform:'uppercase', fontWeight:700, marginBottom:8 }}>
                    Disponíveis no baralho
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                    {rows.map(({ pos, avail, total }) => (
                      <div key={pos} style={{
                        display:'flex', alignItems:'center', gap:5,
                        background: avail === 0 ? 'rgba(239,68,68,0.1)' : 'rgba(0,0,0,0.3)',
                        border: `1px solid ${avail === 0 ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius:6, padding:'4px 8px'
                      }}>
                        <span className="ftb-pos-badge" style={{ background: posBg[pos], fontSize:'0.65rem', padding:'2px 5px' }}>{pos}</span>
                        <span style={{
                          fontFamily:'Bebas Neue', fontSize:'0.9rem',
                          color: avail === 0 ? '#ef4444' : avail <= 2 ? '#f59e0b' : '#22c55e'
                        }}>{avail}</span>
                        <span style={{ fontSize:'0.65rem', color:'var(--muted)' }}>/{total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Selected (holding area) */}
            {selectedPlayers.length > 0 && (
              <>
                <div className="ftb-section-title" style={{ marginTop:8 }}>
                  <Users size={14} /> Na Mão ({selectedPlayers.length})
                </div>
                {selectedPlayers.map(p => {
                  const activePos = getActivePos(p);
                  const canMain = canAddToMain(p);
                  const canRes  = canAddToReserves(p);
                  return (
                    <PlayerCard key={p.id} player={p} posBg={posBg}
                      activePos={activePos}
                      onTogglePos={p.position2 ? () => togglePos(p) : undefined}
                      actions={
                      <>
                        {canMain && (
                          <button className="ftb-btn btn-main" onClick={()=>moveToMain(p)} title={`Titular como ${activePos}`}>
                            <ArrowUp size={11}/> Titular
                          </button>
                        )}
                        {canRes && (
                          <button className="ftb-btn btn-res" onClick={()=>moveToReserves(p)} title={`Reserva como ${activePos}`}>
                            <ArrowDown size={11}/> Banco
                          </button>
                        )}
                        {!canMain && !canRes && (
                          <span style={{ fontSize:'0.68rem', color:'#ef4444', fontWeight:600, padding:'0 4px' }}>Sem vaga</span>
                        )}
                        <button className="ftb-btn btn-remove" onClick={()=>removeFromSelected(p)} title="Descartar">
                          <Trash2 size={11}/>
                        </button>
                      </>
                    }/>
                  );
                })}
              </>
            )}
          </div>

          {/* ── RIGHT PANEL: Field + Reserves ── */}
          <div className="ftb-panel">
            <div className="ftb-section-title">Campo — {formation}</div>

            <PitchView mainTeam={mainTeam} formation={formation} onRemove={removeFromMain} posBg={posBg} reserves={reserves} onSubstitute={openSubMenu} />

            {/* Reserves */}
            <div className="ftb-section-title">
              🪑 Reservas ({reserves.length}/{maxReservesTotal})
            </div>
            <div className="ftb-reserves-row">
              {reserves.length === 0
                ? <span className="ftb-empty-hint">Banco vazio</span>
                : reserves.map(p => (
                    <div className="ftb-reserve-chip" key={p.id} onClick={()=>removeFromReserves(p)} title="Devolver">
                      <span className="ftb-pos-badge" style={{ background: posBg[p.position], fontSize:'0.65rem', padding:'2px 5px' }}>{p.position}</span>
                      <span style={{ fontSize:'0.78rem' }}>{p.name}</span>
                    </div>
                  ))
              }
            </div>

            {/* Main team list */}
            {mainTeam.length > 0 && (
              <>
                <div className="ftb-section-title">Titulares ({mainTeam.length}/{totalSlots})</div>
                {['GOL','LAT','ZAG','VOL','MEI','ATA'].map(pos => {
                  const inPos = mainTeam.filter(p=>p.position===pos);
                  if (!inPos.length) return null;
                  return (
                    <div key={pos} style={{ marginBottom:4 }}>
                      <div style={{ fontSize:'0.68rem', color: posBg[pos], letterSpacing:2, marginBottom:4, fontWeight:700, textTransform:'uppercase' }}>
                        ── {POSITION_LABELS[pos]}
                      </div>
                      {inPos.map(p => {
                        const eligible = getEligibleReserves(p);
                        return (
                          <PlayerCard key={p.id} player={p} posBg={posBg} actions={
                            <>
                              {eligible.length > 0 && (
                                <button className="ftb-btn" onClick={(e)=>openSubMenu(e,p)} title="Substituir"
                                  style={{ background:'#16a34a', color:'#fff', fontSize:'0.8rem', padding:'5px 7px' }}>
                                  ⇄
                                </button>
                              )}
                              <button className="ftb-btn btn-remove" onClick={()=>removeFromMain(p)} title="Remover">
                                <Trash2 size={11}/>
                              </button>
                            </>
                          }/>
                        );
                      })}
                    </div>
                  );
                })}
              </>
            )}

            {/* Saved teams section */}
            <div className="ftb-section-title" style={{ marginTop:24, cursor:'pointer' }} onClick={()=>setShowCompletedTeams(!showCompletedTeams)}>
              <Trophy size={14} /> Times Salvos ({completedTeams.length})
              {showCompletedTeams ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
            </div>

            {showCompletedTeams && (
              <>
                {completedTeams.length === 0
                  ? <p style={{ color:'var(--muted)', fontSize:'0.8rem', fontStyle:'italic' }}>Nenhum time salvo ainda.</p>
                  : (
                    <>
                      <button className="ftb-action-btn gold" style={{ marginBottom:12 }} onClick={exportAllTeams}>
                        <Download size={13}/> Exportar Todos
                      </button>
                      {completedTeams.map(t => (
                        <SavedTeamCard key={t.id} team={t} onDelete={deleteCompletedTeam} onExport={exportSingleTeam}/>
                      ))}
                    </>
                  )
                }
              </>
            )}
          </div>
        </div>
      </div>

      {/* Substitution mini-menu */}
      {subMenu && (
        <>
          {/* Backdrop */}
          <div onClick={() => setSubMenu(null)}
            style={{ position:'fixed', inset:0, zIndex:300 }} />
          {/* Menu */}
          <div style={{
            position:'fixed',
            left: Math.min(subMenu.x, window.innerWidth - 220),
            top: subMenu.y,
            zIndex:301,
            background:'#181c25',
            border:'1px solid rgba(255,255,255,0.15)',
            borderRadius:10,
            boxShadow:'0 8px 32px rgba(0,0,0,0.7)',
            minWidth:200,
            overflow:'hidden',
          }}>
            <div style={{ padding:'8px 12px 6px', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize:'0.62rem', color:'#7a8099', letterSpacing:2, textTransform:'uppercase', fontWeight:700, marginBottom:2 }}>
                Substituir
              </div>
              <div style={{ fontSize:'0.82rem', color:'var(--gold)', fontWeight:600 }}>
                {subMenu.titular.name}
              </div>
            </div>
            <div style={{ padding:'6px 0' }}>
              {getEligibleReserves(subMenu.titular).map(r => (
                <button key={r.id} onClick={() => substituir(subMenu.titular, r)}
                  style={{
                    display:'flex', alignItems:'center', gap:8,
                    width:'100%', background:'none', border:'none',
                    padding:'7px 14px', cursor:'pointer', textAlign:'left',
                    transition:'background 0.12s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.06)'}
                  onMouseLeave={e => e.currentTarget.style.background='none'}
                >
                  <span style={{ background: posBg[r.position], borderRadius:4, padding:'1px 6px', fontFamily:'Bebas Neue', fontSize:'0.7rem', letterSpacing:1, color:'#000', flexShrink:0 }}>
                    {r.position}
                  </span>
                  <div>
                    <div style={{ fontSize:'0.85rem', color:'#e8eaf0', fontWeight:600 }}>{r.name}</div>
                    <div style={{ fontSize:'0.68rem', color:'#7a8099', fontStyle:'italic' }}>{r.team}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
