import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Stethoscope,
  Clock,
  Star,
  Activity,
  Users,
} from 'lucide-react';

const services = [
  { icon: Stethoscope, title: 'General Consultation', desc: 'Comprehensive health assessments and personalised treatment plans.' },
  { icon: Heart, title: 'Preventive Care', desc: 'Routine check-ups, screenings, and lifestyle guidance to keep you well.' },
  { icon: Activity, title: 'Chronic Disease Management', desc: 'Ongoing support for diabetes, hypertension, and long-term conditions.' },
  { icon: Users, title: 'Family Medicine', desc: 'Caring for every member of your family, from children to seniors.' },
];

const stats = [
  { icon: CalendarDays, label: 'Years of experience', value: '10+' },
  { icon: Users, label: 'Patients served', value: '5,000+' },
  { icon: Star, label: 'Patient satisfaction', value: '98%' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f7] text-[#1a2e3b]">
      <div className="site-shell">

        {/* ── Header ── */}
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Dr. Sri Nivas home">
            <span className="brand-mark">Dr</span>
            <span>
              <strong>Dr. Sri Nivas</strong>
              <small>MBBS · General Physician</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#location">Location</a>
            <a className="nav-cta" href="#appointment">
              Book appointment <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
          </nav>

          <details className="mobile-nav">
            <summary aria-label="Open navigation"><Menu size={20} /></summary>
            <div className="mobile-nav-panel">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#location">Location</a>
              <a href="#appointment">Book appointment</a>
            </div>
          </details>
        </header>

        {/* ── Hero ── */}
        <section id="top" className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Trusted care in Erode</div>
            <h1>Your health is in <em>caring hands.</em></h1>
            <p className="hero-description">
              Dr. Sri Nivas brings over a decade of compassionate, evidence-based medical care to the people of Erode and the surrounding communities of Tamil Nadu.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#appointment">
                Book a visit <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#services">
                Our services <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-note">
              <ShieldCheck size={18} />
              <span>Registered medical practitioner · Erode, Tamil Nadu</span>
            </div>
          </div>

          {/* Doctor image card */}
          <div className="doctor-card-wrap">
            <div className="doctor-card">
              <div className="doctor-img-placeholder">
                <Image
                  src="/assets/dr.avif"
                  alt="Dr. Sri Nivas"
                  width={600}
                  height={600}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }}
                  priority
                />
              </div>
              <div className="doctor-card-info">
                <strong>Dr. Sri Nivas</strong>
                <span>MBBS · General Physician</span>
                <div className="availability-badge">
                  <span className="status-dot" /> Available today
                </div>
              </div>
            </div>
            <div className="doctor-card-caption">
              <ShieldCheck size={15} />
              <span>Verified medical practitioner</span>
            </div>
          </div>
        </section>

        {/* ── Stats band ── */}
        <section className="stat-band" aria-label="Practice highlights">
          {stats.map(({ icon: Icon, label, value }) => (
            <div className="stat-item" key={label}>
              <Icon size={19} />
              <div><span>{label}</span><strong>{value}</strong></div>
            </div>
          ))}
        </section>

        {/* ── Services ── */}
        <section id="services" className="services-section">
          <div className="section-intro">
            <div className="eyebrow"><span /> What we offer</div>
            <h2>Care that covers <em>every need.</em></h2>
            <p>From routine check-ups to managing complex conditions, Dr. Sri Nivas provides attentive, whole-person care.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, desc }) => (
              <div className="service-card" key={title}>
                <span className="service-icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="about-section">
          <div className="about-pattern" aria-hidden="true" />
          <div className="about-content">
            <div className="eyebrow eyebrow-light"><span /> About the doctor</div>
            <h2>A physician who <em>listens.</em></h2>
            <p>Dr. Sri Nivas has been serving the Erode community with dedication and warmth. His approach combines clinical expertise with genuine empathy — ensuring every patient feels heard, respected, and well cared for.</p>
            <a className="button button-outline" href="#appointment">
              Schedule a consultation <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="about-credentials">
            <div className="credential-card">
              <div className="credential-row"><ShieldCheck size={16} /><span>MBBS — Registered Medical Practitioner</span></div>
              <div className="credential-row"><Clock size={16} /><span>Clinic hours: Mon – Sat, 9 am – 6 pm</span></div>
              <div className="credential-row"><MapPin size={16} /><span>Kurumandur, Erode, Tamil Nadu</span></div>
              <div className="credential-row"><Star size={16} /><span>10+ years of clinical experience</span></div>
            </div>
          </div>
        </section>

        {/* ── Appointment / Contact ── */}
        <section id="appointment" className="appointment-section">
          <div className="section-intro centered">
            <div className="eyebrow"><span /> Get in touch</div>
            <h2>Ready to <em>feel better?</em></h2>
            <p>Reach out to book an appointment or ask any questions. Dr. Sri Nivas and the team are here to help.</p>
          </div>
          <div className="contact-cards">
            <a href="tel:+917010110485" className="contact-action-card">
              <span className="contact-action-icon"><Phone size={22} /></span>
              <div>
                <small>Call the clinic</small>
                <strong>+91 70101 10485</strong>
              </div>
              <ArrowUpRight size={16} className="contact-arrow" />
            </a>
            <a href="mailto:srinitron@gmail.com" className="contact-action-card">
              <span className="contact-action-icon"><Mail size={22} /></span>
              <div>
                <small>Send an email</small>
                <strong>srinitron@gmail.com</strong>
              </div>
              <ArrowUpRight size={16} className="contact-arrow" />
            </a>
          </div>
        </section>

        {/* ── Location ── */}
        <section id="location" className="location-section">
          <div className="location-pattern" aria-hidden="true" />
          <div className="location-content">
            <div className="eyebrow eyebrow-light"><span /> Find the clinic</div>
            <h2>Located in <em>Kurumandur.</em></h2>
            <p>Conveniently situated in the heart of Erode district, Tamil Nadu — easy to reach for patients across the region.</p>
          </div>
          <div className="address-card">
            <div className="address-card-top">
              <span className="address-icon"><MapPin size={20} /></span>
              <span>Clinic address</span>
            </div>
            <address>
              <span>D.no 236 (Kasa no.236/2D)</span>
              <span>Kaliyamman Nagar Road, Kottupallam palayam</span>
              <span>Kurumandur Medu, Kurumanthur</span>
              <span>Erode, Tamil Nadu 638457</span>
            </address>
            <div className="address-card-bottom">
              <span>PIN code</span>
              <strong>638457</strong>
            </div>
          </div>
        </section>

      </div>{/* end .site-shell */}

      <div className="footer-spacer" />

      {/* ── Footer (full-width) ── */}
      <footer className="site-footer">
        <div className="footer-top">

          {/* Brand col */}
          <div className="footer-col footer-brand-col">
            <div className="footer-brand">
              <span className="footer-brand-mark">Dr</span>
              <div>
                <strong>Dr. Sri Nivas</strong>
                <small>MBBS · General Physician</small>
              </div>
            </div>
            <p className="footer-tagline">
              Compassionate, evidence-based medical care for the people of Erode and Tamil Nadu.
            </p>
            <div className="footer-contact-list">
              <a href="tel:+917010110485" className="footer-contact-item">
                <Phone size={14} /><span>+91 70101 10485</span>
              </a>
              <a href="mailto:srinitron@gmail.com" className="footer-contact-item">
                <Mail size={14} /><span>srinitron@gmail.com</span>
              </a>
              <div className="footer-contact-item">
                <Clock size={14} /><span>Mon – Sat, 9 am – 6 pm</span>
              </div>
            </div>
          </div>

          {/* Quick links col */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Quick links</h4>
            <nav className="footer-links">
              <a href="#top">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#appointment">Book appointment</a>
              <a href="#location">Location</a>
            </nav>
          </div>

          {/* Services col */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Services</h4>
            <nav className="footer-links">
              <a href="#services">General Consultation</a>
              <a href="#services">Preventive Care</a>
              <a href="#services">Chronic Disease Management</a>
              <a href="#services">Family Medicine</a>
            </nav>
          </div>

          {/* Map col */}
          <div className="footer-col footer-map-col">
            <h4 className="footer-col-heading">Find us</h4>
            <div className="footer-map-wrap">
              <iframe
                title="Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.345!2d77.7172!3d11.3410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzI3LjYiTiA3N8KwNDMnMDIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Kurumandur+Medu,Kurumanthur,Erode,Tamil+Nadu+638457"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-link"
              >
                <MapPin size={13} /> Open in Google Maps <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2024 Dr. Sri Nivas. All rights reserved.</span>
          <span>Registered medical practitioner · Erode, Tamil Nadu</span>
          <a href="#top" className="footer-back-top">Back to top <ArrowUpRight size={13} /></a>
        </div>
      </footer>

    </main>
  );
}
