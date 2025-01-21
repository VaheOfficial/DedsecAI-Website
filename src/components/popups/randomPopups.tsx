// RandomPopups.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Popup from './popup';

interface PopupData {
  id: number;
  title: string;
  message: string;
  icon: string;
  position: {
    x: number;
    y: number;
  };
    buttons: {
        text: string;
        onClick: () => void;
    }[];
}

const RandomPopups = () => {
  const [popups, setPopups] = useState<PopupData[]>([]);

  // Just some arrays of random values to pick from
const popupPresets = [
    {
        title: 'Dedsec takeover',
        message: 'Are you sure you like what you like?',
        icon: 'info',
        button: [{ text: '#LOL', onClick: () => {} }, { text: 'YES', onClick: () => {} }]
    },
    {
        title: 'Dedsec takeover',
        message: 'Internet fucker has been successfull.',
        icon: 'info',
        button: [{ text: 'OK', onClick: () => {} }]
    },
    {
        title: 'Dedsec takeover',
        message: 'Tales of horror and suspence in the web of doom!!!',
        icon: 'info',
        button: [{ text: '#LOL', onClick: () => {} }]
    },
    {
        title: 'Dont trip over that leash',
        message: 'The dog is not your friend, he is your master!',
        icon: 'info',
        button: [{ text: 'OK', onClick: () => {} }]
    },
    {
        title: 'Dont trip over that leash',
        message: 'warewolves unleashed #lol full moon motherf*****!!!!!!',
        icon: 'info',
        button: [{ text: '#WTF', onClick: () => {} }]
    },
    {
        title: 'Unlink from your freedom',
        message: 'The internet is not your friend!',
        icon: 'info',
        button: [{ text: 'OK', onClick: () => {} }]
    },
    {
        title: "Weak a** passwords detected",
        message: "You're not safe!",
        icon: 'info',
        button: [{ text: 'OK', onClick: () => {} }]
    }

];

// Keep individual arrays for flexibility
const titles = popupPresets.map(p => p.title);
const messages = popupPresets.map(p => p.message);
const icons = popupPresets.map(p => p.icon);
const buttons = popupPresets.map(p => p.button);

  const addRandomPopup = useCallback(() => {
    if (popups.length >= 3) return; // Limit to 3 popups

    // Function to pick a random element from an array
    const getRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

    const randomPreset = getRandom(popupPresets);
    const newPopup: Omit<PopupData, 'position'> = {
      id: Date.now(),
      title: randomPreset.title,
      message: randomPreset.message,
      icon: randomPreset.icon,
      buttons: randomPreset.button
    };

    // Generate random position for popup
    const x = Math.floor(Math.random() * window.innerWidth * 0.5); // Stay within visible area
    const y = Math.floor(Math.random() * window.innerHeight * 0.5);

    setPopups((prev) => [...prev, { ...newPopup, position: { x, y } }]);
  }, [popups]);

  const removePopup = (id: number) => {
    setPopups((prev) => prev.filter((popup) => popup.id !== id));
  };

  // Update the position of a popup by ID (called from the child on drag)
  const updatePopupPosition = useCallback((id: number, x: number, y: number) => {
    setPopups((prevPopups) =>
      prevPopups.map((popup) =>
        popup.id === id ? { ...popup, position: { x, y } } : popup
      )
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      addRandomPopup();
    }, 5000); // Add a popup every 5 seconds

    return () => clearInterval(interval);
  }, [addRandomPopup]);

  return (
    <div className="relative w-full h-screen">
      {popups.map((popup) => (
        <Popup
          key={popup.id}
          title={popup.title}
          message={popup.message}
          buttons={[
            ...popup.buttons,
            {
              text: 'Close',
              onClick: () => removePopup(popup.id),
            },
          ]}
          icon={popup.icon}
          isOpen={true}
          onClose={() => removePopup(popup.id)}
          position={popup.position}
          onDrag={(x, y) => updatePopupPosition(popup.id, x, y)}
        />
      ))}
    </div>
  );
};

export default RandomPopups;
