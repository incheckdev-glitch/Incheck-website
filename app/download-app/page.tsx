import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

const APP_STORE_URL = 'https://apps.apple.com/us/app/incheck-360/id6749851322';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.biners.in_check';

export const metadata: Metadata = {
  title: 'Download the InCheck 360 App',
  description: 'Download the InCheck 360 mobile app for iPhone, iPad and Android devices.',
  alternates: { canonical: '/download-app' },
};

export default function DownloadAppPage() {
  return (
    <>
      <PageHero
        eyebrow="INCHECK 360 MOBILE"
        title="Take daily operations with you."
        text="Download the InCheck 360 app for iPhone, iPad or Android and access your assigned work, operational records and location activity from your mobile device."
        primary="Download for iPhone & iPad"
        primaryHref={APP_STORE_URL}
        secondary="Get it on Google Play"
        secondaryHref={GOOGLE_PLAY_URL}
      >
        <div className="download-app-visual">
          <div className="download-app-phone">
            <div className="download-app-phone-top"><span></span></div>
            <div className="download-app-screen">
              <div className="download-app-brand">InCheck 360</div>
              <strong>Daily operations</strong>
              <small>Everything your team needs, in one place.</small>
              <div className="download-app-screen-card"><span>Checklists & Tasks</span><b>12</b></div>
              <div className="download-app-screen-card"><span>Journal</span><b>Live</b></div>
              <div className="download-app-screen-card"><span>Reference Materials</span><b>Open</b></div>
              <div className="download-app-screen-card"><span>Smart Detectors</span><b>Online</b></div>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="content-section download-app-section">
        <div className="shell">
          <div className="download-app-heading">
            <span className="eyebrow">CHOOSE YOUR DEVICE</span>
            <h2>Install InCheck 360 directly from your app store.</h2>
            <p>Select your device below. You will be taken directly to the official InCheck 360 listing.</p>
          </div>

          <div className="download-store-grid">
            <Reveal>
              <a className="download-store-card official-store-card" href={APP_STORE_URL} target="_blank" rel="noreferrer" aria-label="Download InCheck 360 on the App Store">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="store-badge-image app-store-badge"
                />
                <p>For iPhone and iPad</p>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <a className="download-store-card official-store-card" href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer" aria-label="Get InCheck 360 on Google Play">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="store-badge-image google-play-badge"
                />
                <p>For Android phones and tablets</p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="content-section" style={{background:'#f5f9fd'}}>
        <div className="shell content-grid">
          <Reveal>
            <div>
              <span className="eyebrow">MOBILE OPERATIONS</span>
              <h2>Built for the people doing the work.</h2>
              <p>Use the mobile app to complete assigned checklists, record operational activity, access Reference Materials and stay connected to the workflows configured for your organization.</p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="content-panel">
              <div className="simple-card"><Icon name="check"/><h3>Execute</h3><p>Complete assigned operational checks and recurring tasks from your device.</p></div>
              <div className="simple-card" style={{marginTop:12}}><Icon name="camera"/><h3>Capture evidence</h3><p>Add the notes, photos and supporting evidence required by the workflow.</p></div>
              <div className="simple-card" style={{marginTop:12}}><Icon name="book"/><h3>Access guidance</h3><p>Open current procedures, manuals and Reference Materials when the work is happening.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="download-app-account">
        <div className="shell download-app-account-inner">
          <div>
            <span className="eyebrow light">ALREADY USING INCHECK 360?</span>
            <h2>Your organization provides your account access.</h2>
            <p>Download the app and sign in with the account details provided by your administrator. If you need browser access instead, use the InCheck 360 web platform.</p>
          </div>
          <a className="button primary" href="https://app.incheck360.com/" target="_blank" rel="noreferrer">
            Open Web Platform <Icon name="arrow" size={16}/>
          </a>
        </div>
      </section>
    </>
  );
}
