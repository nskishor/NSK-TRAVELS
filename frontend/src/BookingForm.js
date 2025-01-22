import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({ name: '', bus: '', seats: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(`Booking confirmed: ${result.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <select
        value={formData.bus}
        onChange={(e) => setFormData({ ...formData, bus: e.target.value })}
      >
        <option value="Bus A">Bus A</option>
        <option value="Bus B">Bus B</option>
      </select>
      <input
        type="number"
        value={formData.seats}
        onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
      />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
