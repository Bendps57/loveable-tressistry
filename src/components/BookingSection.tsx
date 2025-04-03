
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Phone } from 'lucide-react';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
];

const BookingSection: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [phone, setPhone] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const whatsappBaseUrl = "https://wa.me/33613663780";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the date
    const formattedDate = date ? date.toLocaleDateString('fr-FR') : '';
    
    // Prepare WhatsApp message
    const message = encodeURIComponent(
      `Nouvelle réservation:\n` +
      `Date: ${formattedDate}\n` +
      `Heure: ${timeSlot}\n` +
      `Téléphone: ${phone}\n` +
      `Notes: ${notes}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`${whatsappBaseUrl}?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Réservez Votre Session</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planifiez votre rendez-vous en quelques clics et laissez-nous sublimer votre beauté naturelle.
          </p>
          <Separator className="w-24 h-1 bg-loveable-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Services Description */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate">Nos Services</h3>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                Chaque coiffure est unique, tout comme vous ! Plutôt que de vous proposer une liste de services figés, nous préférons échanger avec vous pour comprendre vos envies et trouver la coiffure qui vous correspond parfaitement.
              </p>
              <p className="text-muted-foreground mb-4">
                Que vous souhaitiez des Box Braids, Cornrows, Twists, Fulani Braids ou tout autre style, discutons ensemble de vos attentes et des possibilités.
              </p>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="bg-secondary rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate">Formulaire de Réservation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md">
                    <Phone size={18} />
                  </div>
                  <Input
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    className="rounded-l-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Heure</label>
                <Select onValueChange={setTimeSlot} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisissez une heure" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Informations complémentaires</label>
                <textarea 
                  className="w-full h-24 px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-loveable-gold" 
                  placeholder="Précisez vos attentes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full bg-loveable-gold hover:bg-loveable-copper text-white">
                Confirmer la réservation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
