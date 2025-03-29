
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';

const services = [
  {
    id: 1,
    name: 'Box Braids',
    description: 'Tresses avec extensions, durée: 4-6h',
    price: 'À partir de 80€',
    duration: '4-6 heures'
  },
  {
    id: 2,
    name: 'Cornrows',
    description: 'Tresses collées au cuir chevelu, durée: 2-3h',
    price: 'À partir de 60€',
    duration: '2-3 heures'
  },
  {
    id: 3,
    name: 'Twists',
    description: 'Torsades avec ou sans extensions, durée: 3-5h',
    price: 'À partir de 70€',
    duration: '3-5 heures'
  },
  {
    id: 4,
    name: 'Fulani Braids',
    description: 'Tresses inspirées du style Fulani, durée: 4-5h',
    price: 'À partir de 85€',
    duration: '4-5 heures'
  }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
];

const BookingSection: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
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
          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate">Nos Services</h3>
            <div className="grid gap-4">
              {services.map((service) => (
                <Card key={service.id} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-medium text-loveable-brown">{service.name}</h4>
                      <p className="text-muted-foreground mt-1">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-loveable-gold">{service.price}</p>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-secondary rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate">Formulaire de Réservation</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Service</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.name}>{service.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Heure</label>
                <Select>
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
                />
              </div>

              <Button className="w-full bg-loveable-gold hover:bg-loveable-copper text-white">
                Confirmer la réservation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
