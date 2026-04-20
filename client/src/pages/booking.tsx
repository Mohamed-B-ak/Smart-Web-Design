"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, Video, MapPin, X, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
// === LE STYLE CSS ===
// J'ai ajouté des variables CSS pour gérer la direction (flex) selon la langue
const CSS = `
  .booking-root {
    font-family: 'Tajawal', 'Cairo', 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    min-height: 100vh;
    background: #f8f6fb;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1a0a2e;
    /* La direction (RTL/LTR) est gérée par l'attribut html dir */
  }

  .booking-container {
    display: flex;
    width: 100%;
    max-width: 850px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(103, 45, 146, 0.1);
    overflow: hidden;
    border: 1px solid rgba(103, 45, 146, 0.1);
    /* Note: row-reverse place le Main (calendrier) à gauche et Sidebar à droite pour le design par défaut */
  }

  /* Sidebar */
  .booking-sidebar {
    background: linear-gradient(135deg, #672D92, #5a237d);
    color: white;
    padding: 30px 20px;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right; /* Alignement par défaut, écrasé par dir=rtl si arabe */
  }

  .sidebar-detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    font-size: 0.85rem;
    opacity: 0.9;
  }

  .sidebar-icon {
    background: rgba(255,255,255,0.2);
    padding: 6px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }

  /* Main Content */
  .booking-main {
    width: 65%;
    padding: 30px 20px;
    position: relative;
    text-align: right; /* Alignement par défaut */
  }

  .step-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    color: #672D92;
    font-weight: 700;
    font-size: 0.95rem;
  }

  /* Calendar Grid */
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    text-align: center;
  }

  .day-name {
    font-size: 0.75rem;
    color: #8878a0;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .day-btn {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
    color: #1a0a2e;
    font-size: 0.9rem;
  }

  .day-btn:hover:not(:disabled) {
    background: rgba(103, 45, 146, 0.08);
  }

  .day-btn.selected {
    background: #672D92;
    color: white;
    box-shadow: 0 4px 8px rgba(103, 45, 146, 0.3);
  }

  .day-btn:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

 .slots-wrapper {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.3s ease;
}
.slots-wrapper.active {
  max-height: 200px;
  opacity: 1;
}

  .slots-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 10px;
  }

  .slot-btn {
    padding: 6px;
    border: 1px solid rgba(103, 45, 146, 0.2);
    border-radius: 6px;
    background: white;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.2s;
  }

  .slot-btn:hover {
    border-color: #672D92;
    color: #672D92;
  }

  .slot-btn.selected {
    background: #672D92;
    color: white;
    border-color: #672D92;
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .modal-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  .modal-content {
    background: white;
    padding: 25px;
    border-radius: 15px;
    width: 90%;
    max-width: 400px;
    transform: translateY(20px);
    transition: transform 0.3s;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    position: relative;
    text-align: right; /* Alignement par défaut */
  }

  .modal-overlay.open .modal-content {
    transform: translateY(0);
  }

  .input-group {
    margin-bottom: 12px;
  }
  
  .input-label {
    display: block;
    margin-bottom: 4px;
    font-size: 0.85rem;
    color: #4a3a62;
    font-weight: 600;
  }

  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 0.9rem;
    outline: none;
    font-family: inherit;
  }
  
  .form-input:focus {
    border-color: #672D92;
    box-shadow: 0 0 0 3px rgba(103,45,146,0.1);
  }

  .submit-btn {
    width: 100%;
    background: linear-gradient(135deg, #672D92, #7f47ac);
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 10px;
    transition: opacity 0.2s;
    font-family: inherit;
  }

  .submit-btn:hover {
    opacity: 0.9;
  }

  .submit-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  .close-btn {
    position: absolute;
    top: 15px;
    left: 15px; 
    background: none;
    border: none;
    cursor: pointer;
    color: #8878a0;
  }

  @media (max-width: 768px) {
    .booking-container {
      flex-direction: column-reverse !important; /* Mobile: Sidebar bottom */
      margin: 10px;
    }
    .booking-sidebar, .booking-main {
      width: 100%;
      padding: 20px;
    }
  }
`;

export default function BookingPage() {
  const { t, tList, lang } = useLanguage();
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock Time Slots
  const timeSlots = ["09:00", "10:00", "11:30", "14:00", "15:30", "16:45"];

  // --- LOGIQUE CALENDRIER ---
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const startDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  // Récupération des mois et jours via le contexte
  const monthNames = tList("booking.months");
  const dayNames = tList("booking.days");

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
    setSelectedSlot(null);
  };

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setName("");
    setEmail("");
  };

  // --- LOGIQUE D'ENVOI VERS GOOGLE SCRIPT ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!selectedDate || !selectedSlot) return;

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXi3ZPC2K89-LQn0Quw8GiCaxZvpJtIWs2uq2D3clEWPLox894eqcmrTh7mJ9TQ5Qb/exec"; 

    const formattedDate = new Date(selectedDate);
    const [hours, minutes] = selectedSlot.split(':');
    formattedDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    const bookingData = {
      name,
      email,
      date: formattedDate.toISOString(), 
      time: selectedSlot,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);

    } catch (error) {
      console.error("Erreur:", error);
      alert(t("booking.error"));
    } finally {
      setIsLoading(false);
    }
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  // Formatage de la date sélectionnée pour l'affichage
  const formattedSelectedDate = selectedDate ? selectedDate.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

  return (
    <>
      <style>{CSS}</style>

      <div className="booking-root">
        {/* layout dynamique: row-reverse pour garder le calendrier à gauche et la sidebar à droite */}
        <div className="booking-container" style={{ flexDirection: lang === 'ar' ? 'row-reverse' : 'row' }}>
          
          {/* Sidebar */}
          <div className="booking-sidebar" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{t("booking.sidebar.title")}</h2>
              <p style={{ opacity: 0.8, lineHeight: '1.4', fontSize: '0.9rem', marginTop: '8px' }}>
                {t("booking.sidebar.desc")}
              </p>
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <div className="sidebar-detail-item">
                <div className="sidebar-icon"><Clock size={16} /></div>
                <span>{t("booking.sidebar.duration")}</span>
              </div>
              <div className="sidebar-detail-item">
                <div className="sidebar-icon"><Video size={16} /></div>
                <span>{t("booking.sidebar.platform")}</span>
              </div>
             
            </div>
          </div>

          {/* Calendar Area */}
          <div className="booking-main" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <div className="step-header">
              <span>{t("booking.step1")}</span>
              <span style={{ fontWeight: 400, color: '#8878a0', fontSize: '0.8rem' }}>
                {formattedSelectedDate}
              </span>
            </div>

            <div className="calendar-header">
              <button onClick={prevMonth} className="day-btn" style={{ width: 28, height: 28 }}><ChevronRight size={16} /></button>
              <h3 style={{ margin: 0, color: '#672D92', fontSize: '1rem' }}>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
              <button onClick={nextMonth} className="day-btn" style={{ width: 28, height: 28 }}><ChevronLeft size={16} /></button>
            </div>

            <div className="calendar-grid">
              {dayNames.map((d, i) => (
                <div key={i} className="day-name">{d}</div>
              ))}
              {Array.from({ length: startDayIndex }).map((_, i) => <div key={`pad-${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth();
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={isPastDate(day)}
                    className={`day-btn ${isSelected ? 'selected' : ''}`}
                  >{day}</button>
                );
              })}
            </div>

            {/* Time Slots */}
            <div className={`slots-wrapper ${selectedDate ? 'active' : ''}`}>
              <div className="step-header">
                <span>{t("booking.step2")}</span>
              </div>
              <div className="slots-grid">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => handleSlotClick(slot)}
                    className={`slot-btn ${selectedSlot === slot ? 'selected' : ''}`}
                  >{slot}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-content" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
          <button onClick={closeModal} className="close-btn"><X size={20} /></button>

          {!isSuccess ? (
            <>
              <h3 style={{ color: '#672D92', marginTop: 0, marginBottom: '15px', fontSize: '1.1rem' }}>{t("booking.confirm_title")}</h3>
              <div style={{ background: '#f4f0fa', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#1a0a2e' }}>
                  {formattedSelectedDate} {t("common.at")} {selectedSlot}
                </p>
                <p style={{ margin: '5px 0 0', fontSize: '0.8rem', color: '#4a3a62' }}>{t("booking.duration_label")}: {t("booking.sidebar.duration")}</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label className="input-label">{t("booking.form.name")}</label>
                  <input type="text" className="form-input" required placeholder={t("booking.form.name_placeholder")} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">
                  <label className="input-label">{t("booking.form.email")}</label>
                  <input type="email" className="form-input" required placeholder={t("booking.form.email_placeholder")} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? t("booking.form.loading") : t("booking.form.submit")}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '15px 0' }}>
              <div style={{ background: '#e6fffa', width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', color: '#00d68f' }}><Check size={28} /></div>
              <h3 style={{ color: '#1a0a2e', margin: '0 0 10px' }}>{t("booking.success_title")}</h3>
              <p style={{ color: '#4a3a62', marginBottom: '20px', fontSize: '0.9rem' }}>{t("booking.success_desc")}</p>
              <button onClick={closeModal} className="submit-btn">{t("booking.done")}</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}