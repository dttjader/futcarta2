import React, { useState } from 'react';
import { Shuffle, Trash2, Users, ArrowDown, ArrowUp, AlertCircle, Save, Download, Trophy, ChevronDown, ChevronUp, RotateCcw, Star } from 'lucide-react';

const PLAYERS = [
  // Brasil 1982
  { id: 25, name: "Waldir Peres", position: "GOL", team: "Brasil 1982", number: 1 },
  { id: 26, name: "Leandro", position: "LAT", team: "Brasil 1982", number: 2 },
  { id: 27, name: "Oscar", position: "ZAG", team: "Brasil 1982", number: 3 },
  { id: 28, name: "Luizinho", position: "ZAG", team: "Brasil 1982", number: 4 },
  { id: 29, name: "Toninho Cerezo", position: "VOL", team: "Brasil 1982", number: 5 },
  { id: 30, name: "Júnior", position: "LAT", team: "Brasil 1982", number: 6 },
  { id: 31, name: "Sócrates", position: "MEI", team: "Brasil 1982", number: 8 },
  { id: 32, name: "Zico", position: "MEI", team: "Brasil 1982", number: 10 },
  { id: 33, name: "Serginho", position: "ATA", team: "Brasil 1982", number: 9 },
  { id: 34, name: "Falcão", position: "MEI", team: "Brasil 1982", number: 5 },
  { id: 35, name: "Éder", position: "ATA", team: "Brasil 1982", number: 11 },
  // Brasil 1970
  { id: 36, name: "Félix", position: "GOL", team: "Brasil 1970", number: 1 },
  { id: 37, name: "Carlos Alberto", position: "LAT", team: "Brasil 1970", number: 4 },
  { id: 38, name: "Brito", position: "ZAG", team: "Brasil 1970", number: 3 },
  { id: 39, name: "Piazza", position: "ZAG", team: "Brasil 1970", number: 2 },
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
  { id: 57, name: "Kléberson", position: "VOL", team: "Brasil 2002", number: 15 },
  // Grêmio 1995
  { id: 58, name: "Danrlei", position: "GOL", team: "Grêmio 1995", number: 1 },
  { id: 59, name: "Arce", position: "LAT", team: "Grêmio 1995", number: 2 },
  { id: 60, name: "Rivarola", position: "ZAG", team: "Grêmio 1995", number: 24 },
  { id: 61, name: "Adilson", position: "ZAG", team: "Grêmio 1995", number: 4 },
  { id: 62, name: "Dinho", position: "VOL", team: "Grêmio 1995", number: 5 },
  { id: 63, name: "Roger", position: "LAT", team: "Grêmio 1995", number: 6 },
  { id: 64, name: "Paulo Nunes", position: "ATA", team: "Grêmio 1995", number: 7 },
  { id: 65, name: "Goiano", position: "VOL", team: "Grêmio 1995", number: 8 },
  { id: 66, name: "Jardel", position: "ATA", team: "Grêmio 1995", number: 16 },
  { id: 67, name: "Carlos Miguel", position: "MEI", team: "Grêmio 1995", number: 11 },
  { id: 68, name: "Arilson", position: "MEI", team: "Grêmio 1995", number: 19 },
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
  { id: 78, name: "Ramiro", position: "MEI", team: "Grêmio 2017", number: 17 },
  { id: 79, name: "Fernandinho", position: "MEI", team: "Grêmio 2017", number: 21 },
  // Grêmio 1977
  { id: 80, name: "Leão", position: "GOL", team: "Grêmio 1977", number: 1 },
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
  { id: 91, name: "Paulo Roberto", position: "LAT", team: "Grêmio 1981", number: 2 },
  { id: 92, name: "Newmar", position: "ZAG", team: "Grêmio 1981", number: 3 },
  { id: 93, name: "De León", position: "ZAG", team: "Grêmio 1981", number: 4 },
  { id: 94, name: "China", position: "VOL", team: "Grêmio 1981", number: 5 },
  { id: 95, name: "Casemiro", position: "LAT", team: "Grêmio 1981", number: 6 },
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
  { id: 109, name: "Lula", position: "ATA", team: "Internacional 1975", number: 11 },
  // Palmeiras 1972
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
  { id: 120, name: "Nelinho", position: "LAT", team: "Outros Jogadores", number: 2 },
  { id: 121, name: "Franz Beckenbauer", position: "ZAG", team: "Outros Jogadores", number: 3 },
  { id: 122, name: "Mauro Galvão", position: "ZAG", team: "Outros Jogadores", number: 4 },
  { id: 123, name: "Zé Carlos", position: "VOL", team: "Outros Jogadores", number: 5 },
  { id: 124, name: "Marinho Chagas", position: "LAT", team: "Outros Jogadores", number: 6 },
  { id: 125, name: "Capitão", position: "ATA", team: "Outros Jogadores", number: 7 },
  { id: 126, name: "Renato Gaúcho", position: "MEI", team: "Outros Jogadores", number: 8 },
  { id: 127, name: "Careca", position: "MEI", team: "Outros Jogadores", number: 9 },
  { id: 128, name: "Zenon", position: "MEI", team: "Outros Jogadores", number: 10 },
  { id: 129, name: "Bozó", position: "ATA", team: "Outros Jogadores", number: 11 }
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
function PlayerCard({ player, actions }) {
  const bg = POSITION_BG[player.position];
  return (
    <div className="ftb-player">
      <span className="ftb-number">#{player.number}</span>
      <span className="ftb-pos-badge" style={{ background: bg }}>{player.position}</span>
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
function PitchView({ mainTeam, formation, onRemove }) {
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
          {row.players.map(p => (
            <div className="pitch-player" key={p.id} onClick={() => onRemove(p)} title={`Remover ${p.name}`}>
              <div className="pitch-avatar" style={{ background: POSITION_BG[p.position] }}>
                {p.position}
              </div>
              <div className="pitch-name">{p.name.split(' ')[0]}</div>
            </div>
          ))}
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

  // ── Computed ────────────────────────────────────────────────────────────────
  const canAddToMain = (player) => {
    const counts = countPositions(mainTeam);
    return (counts[player.position] || 0) < FORMATIONS[formation][player.position];
  };

  const canAddToReserves = (player) => {
    const counts = countPositions(reserves);
    const maxRes = getMaxReservesForFormation(formation);
    return (counts[player.position] || 0) < (maxRes[player.position] || 0);
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
    let available = PLAYERS.filter(p => !isSaved(p) && !used.find(u => u.id === p.id) && !shouldHidePlayer(p));
    if (available.length === 0) {
      setDiscardedThisRound([]);
      let fresh = PLAYERS.filter(p => !isSaved(p) && !mainTeam.find(u=>u.id===p.id) && !reserves.find(u=>u.id===p.id) && !selectedPlayers.find(u=>u.id===p.id) && !shouldHidePlayer(p));
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
    if (!canAddToMain(p)) { alert(`Posição ${POSITION_LABELS[p.position]} já está cheia no esquema ${formation}!`); return; }
    setMainTeam([...mainTeam, p]);
    setSelectedPlayers(selectedPlayers.filter(x=>x.id!==p.id));
  };

  const moveToReserves = (p) => {
    if (!canAddToReserves(p)) { alert(`Banco de reservas para ${POSITION_LABELS[p.position]} já está cheio!`); return; }
    setReserves([...reserves, p]);
    setSelectedPlayers(selectedPlayers.filter(x=>x.id!==p.id));
  };

  const removeFromSelected = (p) => { setSelectedPlayers(selectedPlayers.filter(x=>x.id!==p.id)); setDiscardedThisRound([...discardedThisRound, p]); };
  const removeFromMain = (p) => { setMainTeam(mainTeam.filter(x=>x.id!==p.id)); setSelectedPlayers([...selectedPlayers, p]); };
  const removeFromReserves = (p) => { setReserves(reserves.filter(x=>x.id!==p.id)); setSelectedPlayers([...selectedPlayers, p]); };

  const reset = () => {
    setFormation("4-4-2"); setDiceResult(null); setDrawnPlayers([]);
    setSelectedPlayers([]); setDiscardedThisRound([]); setMainTeam([]); setReserves([]);
  };

  const resetAll = () => {
    if (window.confirm("Tem certeza? Todos os times salvos serão perdidos.")) { reset(); setCompletedTeams([]); }
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
      <style>{css}</style>
      <div className="ftb-root">
        {/* Header */}
        <div className="ftb-hero">
          <div>
            <div className="ftb-logo">⚽ Time<span>Builder</span></div>
            <div className="ftb-subtitle">Montador de Times Lendários</div>
          </div>
          <div style={{ marginLeft:'auto', display:'flex', gap:8, alignItems:'center', flexWrap:'wrap' }}>
            {isTeamComplete && (
              <span className="ftb-complete-badge"><Star size={12}/> Time Completo!</span>
            )}
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
                  <PlayerCard key={p.id} player={p} actions={
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
                  const total = PLAYERS.filter(p => p.position === pos && !savedIds.has(p.id)).length;
                  const used = PLAYERS.filter(p => p.position === pos && usedInSession.has(p.id) && !savedIds.has(p.id)).length;
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
                        <span className="ftb-pos-badge" style={{ background: POSITION_BG[pos], fontSize:'0.65rem', padding:'2px 5px' }}>{pos}</span>
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
                  const canMain = canAddToMain(p);
                  const canRes  = canAddToReserves(p);
                  return (
                    <PlayerCard key={p.id} player={p} actions={
                      <>
                        {canMain && (
                          <button className="ftb-btn btn-main" onClick={()=>moveToMain(p)} title="Titular">
                            <ArrowUp size={11}/> Titular
                          </button>
                        )}
                        {canRes && (
                          <button className="ftb-btn btn-res" onClick={()=>moveToReserves(p)} title="Reserva">
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

            <PitchView mainTeam={mainTeam} formation={formation} onRemove={removeFromMain} />

            {/* Reserves */}
            <div className="ftb-section-title">
              🪑 Reservas ({reserves.length}/{maxReservesTotal})
            </div>
            <div className="ftb-reserves-row">
              {reserves.length === 0
                ? <span className="ftb-empty-hint">Banco vazio</span>
                : reserves.map(p => (
                    <div className="ftb-reserve-chip" key={p.id} onClick={()=>removeFromReserves(p)} title="Devolver">
                      <span className="ftb-pos-badge" style={{ background: POSITION_BG[p.position], fontSize:'0.65rem', padding:'2px 5px' }}>{p.position}</span>
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
                      <div style={{ fontSize:'0.68rem', color: POSITION_BG[pos], letterSpacing:2, marginBottom:4, fontWeight:700, textTransform:'uppercase' }}>
                        ── {POSITION_LABELS[pos]}
                      </div>
                      {inPos.map(p => (
                        <PlayerCard key={p.id} player={p} actions={
                          <button className="ftb-btn btn-remove" onClick={()=>removeFromMain(p)} title="Remover">
                            <Trash2 size={11}/>
                          </button>
                        }/>
                      ))}
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
    </>
  );
}
