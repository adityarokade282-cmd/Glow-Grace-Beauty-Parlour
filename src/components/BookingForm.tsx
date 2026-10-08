import { useState, type FormEvent } from 'react';
import { Calendar, User, Phone, Clock, MessageSquare, CheckCircle2, Loader2, CalendarCheck } from 'lucide-react';
import { services } from '@/data/services';
import { supabase } from '@/lib/supabase';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type FormState = {
  name: string;
  phone: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  phone: '',
  service: '',
  preferred_date: '',
  preferred_time: '',
  message: '',
};

const timeSlots = [
  '09:00 AM – 10:00 AM',
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 01:00 PM',
  '02:00 PM – 03:00 PM',
  '03:00 PM – 04:00 PM',
  '04:00 PM – 05:00 PM',
  '05:00 PM – 06:00 PM',
  '06:00 PM – 07:00 PM',
  '07:00 PM – 08:00 PM',
];

export default function BookingForm() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('appointments').insert({
        name: form.name,
        phone: form.phone,
        service: form.service,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        message: form.message || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us directly.'
      );
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="book" className="section-padding bg-white">
      <div ref={ref} className="mx-auto max-w-5xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rosegold-400" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-500">
              Book Appointment
            </span>
            <span className="h-px w-10 bg-rosegold-400" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold text-charcoal-900 sm:text-5xl">
            Schedule Your <span className="text-gradient-rose">Beauty Session</span>
          </h2>
          <p className="mt-4 text-charcoal-600">
            Fill out the form below and we&apos;ll confirm your appointment via phone. It&apos;s
            quick, easy, and the first step to looking your best.
          </p>
        </div>

        {/* Form / Success */}
        <div className="mt-12 reveal reveal-delay-1">
          {status === 'success' ? (
            <div className="mx-auto max-w-xl rounded-3xl border-2 border-rosegold-200 bg-gradient-to-b from-blush-50 to-white p-10 text-center shadow-lg">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rosegold-500 to-rose-500 animate-scale-in">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-semibold text-charcoal-900">
                Appointment Requested!
              </h3>
              <p className="mt-3 text-charcoal-600">
                Thank you for choosing Glow &amp; Grace Beauty Parlour. We&apos;ve received your
                booking request and will call you shortly to confirm your appointment.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-7 rounded-full bg-gradient-to-r from-rosegold-500 to-rose-500 px-8 py-3 font-semibold text-white shadow-lg shadow-rosegold-500/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-3xl rounded-3xl border border-blush-100 bg-gradient-to-b from-white to-blush-50/30 p-8 shadow-lg sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal-800"
                  >
                    <User className="h-4 w-4 text-rosegold-500" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-blush-200 bg-white px-4 py-3 text-charcoal-900 outline-none transition-all duration-300 placeholder:text-charcoal-300 focus:border-rosegold-400 focus:ring-2 focus:ring-rosegold-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal-800"
                  >
                    <Phone className="h-4 w-4 text-rosegold-500" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-blush-200 bg-white px-4 py-3 text-charcoal-900 outline-none transition-all duration-300 placeholder:text-charcoal-300 focus:border-rosegold-400 focus:ring-2 focus:ring-rosegold-200"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal-800"
                  >
                    <CalendarCheck className="h-4 w-4 text-rosegold-500" />
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-blush-200 bg-white px-4 py-3 text-charcoal-900 outline-none transition-all duration-300 focus:border-rosegold-400 focus:ring-2 focus:ring-rosegold-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} — from {s.startingPrice}
                      </option>
                    ))}
                    <option value="Bridal Consultation">Bridal Consultation</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="preferred_date"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal-800"
                  >
                    <Calendar className="h-4 w-4 text-rosegold-500" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferred_date"
                    name="preferred_date"
                    required
                    min={today}
                    value={form.preferred_date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-blush-200 bg-white px-4 py-3 text-charcoal-900 outline-none transition-all duration-300 focus:border-rosegold-400 focus:ring-2 focus:ring-rosegold-200"
                  />
                </div>

                {/* Time */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="preferred_time"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal-800"
                  >
                    <Clock className="h-4 w-4 text-rosegold-500" />
                    Preferred Time *
                  </label>
                  <select
                    id="preferred_time"
                    name="preferred_time"
                    required
                    value={form.preferred_time}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-blush-200 bg-white px-4 py-3 text-charcoal-900 outline-none transition-all duration-300 focus:border-rosegold-400 focus:ring-2 focus:ring-rosegold-200"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal-800"
                  >
                    <MessageSquare className="h-4 w-4 text-rosegold-500" />
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any specific requests or details you'd like to share..."
                    className="w-full resize-none rounded-xl border border-blush-200 bg-white px-4 py-3 text-charcoal-900 outline-none transition-all duration-300 placeholder:text-charcoal-300 focus:border-rosegold-400 focus:ring-2 focus:ring-rosegold-200"
                  />
                </div>
              </div>

              {status === 'error' && (
                <div className="mt-5 rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-700">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rosegold-500 to-rose-500 px-8 py-4 font-semibold text-white shadow-xl shadow-rosegold-500/25 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Booking Your Appointment...
                  </>
                ) : (
                  <>
                    <CalendarCheck className="h-5 w-5" />
                    Book Appointment
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
