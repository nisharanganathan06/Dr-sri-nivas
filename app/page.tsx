import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Check,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
} from 'lucide-react';

const registrationDetails = [
  { label: 'Legal name', value: 'SRI NIVAS' },
  { label: 'Constitution', value: 'Proprietorship' },
  { label: 'Registration type', value: 'Regular' },
  { label: 'Registration date', value: '01 October 2024' },
];

const addressLines = [
  'Building No. / Flat No.: D.no 236 (Kasa no.236/2D)',
  'Kaliyamman Nagar Road / Kottupallam palayam',
  'Kurumandur Medu, Kurumanthur',
  'Erode, Tamil Nadu 638457',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-[#17352d]">
      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Sri Nivas home">
            <span className="brand-mark">SN</span>
            <span>
              <strong>Sri Nivas</strong>
              <small>Registered proprietorship</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#profile">Profile</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
            <a className="nav-cta" href="#contact">
              Get in touch <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
          </nav>

          <details className="mobile-nav">
            <summary aria-label="Open navigation">
              <Menu size={20} />
            </summary>
            <div className="mobile-nav-panel">
              <a href="#profile">Profile</a>
              <a href="#location">Location</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </header>

        <section id="top" className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Registered business profile</div>
            <h1>A steady presence in the heart of <em>Erode.</em></h1>
            <p className="hero-description">
              SRI NIVAS is a registered proprietorship based in Kurumandur, Tamil Nadu — grounded in clarity, consistency, and local trust.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#profile">
                Explore profile <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#location">
                Find the address <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-note">
              <ShieldCheck size={18} />
              <span>Verified registration details, presented simply.</span>
            </div>
          </div>

          <div id="contact" className="contact-wrap" aria-label="Direct contact information">
            <div className="contact-card">
              <div className="contact-card-topline">
                <span className="official-seal"><Phone size={19} /></span>
                <span className="contact-status"><span className="status-dot" /> Open to connect</span>
              </div>
              <div className="contact-card-heading">
                <span>Direct contact</span>
                <h2>Let&apos;s start<br />a conversation.</h2>
              </div>
              <p className="contact-card-description">For questions, visits, or more information, reach Sri Nivas directly.</p>
              <div className="contact-links">
                <a href="tel:+917010110485" className="contact-link">
                  <span className="contact-link-icon"><Phone size={17} /></span>
                  <span className="contact-link-copy"><small>Call directly</small><strong>+91 70101 10485</strong></span>
                  <ArrowUpRight size={16} />
                </a>
                <a href="mailto:srinitron@gmail.com" className="contact-link">
                  <span className="contact-link-icon"><Mail size={17} /></span>
                  <span className="contact-link-copy"><small>Email us</small><strong>srinitron@gmail.com</strong></span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="contact-caption">
              <ShieldCheck size={16} />
              <span>Available for direct enquiries</span>
            </div>
          </div>
        </section>

        <section className="stat-band" aria-label="Registration highlights">
          <div className="stat-item">
            <CalendarDays size={19} />
            <div><span>Effective from</span><strong>01 October 2024</strong></div>
          </div>
          <div className="stat-item">
            <Building2 size={19} />
            <div><span>Business structure</span><strong>Proprietorship</strong></div>
          </div>
          <div className="stat-item">
            <MapPin size={19} />
            <div><span>Registered district</span><strong>Erode, Tamil Nadu</strong></div>
          </div>
        </section>

        <section id="profile" className="profile-section">
          <div className="section-intro">
            <div className="eyebrow"><span /> The registered profile</div>
            <h2>Every detail,<br /><em>clearly accounted for.</em></h2>
            <p>
              A straightforward view of the information that defines the business record — from its legal identity to the place it calls home.
            </p>
          </div>

          <div className="details-card">
            <div className="details-card-header">
              <span>Business particulars</span>
              <BadgeCheck size={20} />
            </div>
            <div className="details-list">
              {registrationDetails.map((detail) => (
                <div className="detail-row" key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}
            </div>
            <div className="details-card-footer">
              <Check size={16} />
              <span>Record issued by the jurisdictional authority</span>
            </div>
          </div>
        </section>

        <section id="location" className="location-section">
          <div className="location-pattern" aria-hidden="true" />
          <div className="location-content">
            <div className="eyebrow eyebrow-light"><span /> Principal place of business</div>
            <h2>Rooted in<br /><em>Kurumandur.</em></h2>
            <p>The registered address for SRI NIVAS, located in the Erode district of Tamil Nadu.</p>
          </div>
          <div className="address-card">
            <div className="address-card-top">
              <span className="address-icon"><MapPin size={20} /></span>
              <span>Registered address</span>
            </div>
            <address>
              {addressLines.map((line) => <span key={line}>{line}</span>)}
            </address>
            <div className="address-card-bottom">
              <span>PIN code</span>
              <strong>638457</strong>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-mark">SN</div>
          <div>
            <div className="eyebrow"><span /> A clear record</div>
            <h2>Built on a foundation<br /><em>of trust.</em></h2>
          </div>
          <p>
            Clear information keeps every visit simple, accessible, and easy to understand.
          </p>
        </section>

        <footer className="site-footer">
          <span>© 2024 Sri Nivas</span>
          <span>Registered in Tamil Nadu</span>
          <a href="#top">Back to top <ArrowUpRight size={14} /></a>
        </footer>
      </div>
    </main>
  );
}
