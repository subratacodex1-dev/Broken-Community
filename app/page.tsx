const authMethods = [
  { title: "Email registration", detail: "Create an account with email, password strength guidance, and email verification readiness." },
  { title: "Phone registration", detail: "Register with a mobile number and OTP-style verification flows for trusted access." },
  { title: "Google login", detail: "A familiar OAuth entry point for fast onboarding without sacrificing privacy controls." },
  { title: "Apple login", detail: "Privacy-forward sign-in prepared for Apple identity and relay-friendly account setup." },
  { title: "GitHub login", detail: "Creator and builder-friendly social login for technical communities." },
];

const securityFeatures = [
  "Password recovery",
  "OTP verification",
  "Email verification",
  "Two-factor authentication (2FA)",
  "Session management",
  "Device management",
  "Login history",
];

const loginHistory = [
  { device: "MacBook Pro", location: "Seattle, WA", method: "GitHub", time: "Today, 9:42 AM", status: "Trusted" },
  { device: "iPhone 15", location: "Portland, OR", method: "Apple", time: "Yesterday, 6:15 PM", status: "Verified" },
  { device: "Chrome on Windows", location: "Austin, TX", method: "Email + 2FA", time: "Jul 10, 2026", status: "Reviewed" },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell">
        <nav className="nav" aria-label="Primary navigation">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">BC</span>
            <span>Broken Community</span>
          </div>
          <div className="nav-links">
            <a href="#mission">Mission</a>
            <a href="#auth">Authentication</a>
            <a href="#security">Security</a>
          </div>
        </nav>

        <div className="hero-grid" id="mission">
          <div className="hero-copy">
            <p className="eyebrow">Secure foundation • Responsible AI • Human connection</p>
            <h1>Build meaningful communities where people feel safe to create, share, learn, and heal.</h1>
            <p className="hero-text">
              Broken Community combines the best of video sharing, forums, real-time groups, creator discovery,
              and AI-powered assistance while prioritizing privacy, user safety, and healthy online interactions.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#auth">Explore sign in</a>
              <a className="button secondary" href="#security">View safety layer</a>
            </div>
          </div>

          <aside className="mission-card" aria-label="Platform goal">
            <span className="card-label">Platform goal</span>
            <p>
              Become one of the world&apos;s most trusted community platforms where people can safely connect,
              learn, create, share knowledge, support one another, and build lasting relationships through
              thoughtful design and responsible AI.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-shell auth-section" id="auth">
        <div className="section-heading">
          <p className="eyebrow">Step 1 foundation</p>
          <h2>Authentication built for flexible, trusted onboarding.</h2>
          <p>
            These screens use dummy data for now, giving the product a secure UI foundation before database
            integration is added.
          </p>
        </div>
        <div className="auth-grid">
          {authMethods.map((method) => (
            <article className="feature-card" key={method.title}>
              <div className="feature-icon" aria-hidden="true">✦</div>
              <h3>{method.title}</h3>
              <p>{method.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell security-section" id="security">
        <div className="security-panel">
          <div>
            <p className="eyebrow">Step 2 trust layer</p>
            <h2>Recovery, verification, 2FA, sessions, devices, and login history.</h2>
            <p>
              A safer platform starts by showing members where they are signed in, how they verified, and what
              protections are active across devices.
            </p>
            <div className="security-list">
              {securityFeatures.map((feature) => <span key={feature}>{feature}</span>)}
            </div>
          </div>

          <div className="device-card" aria-label="Example login history">
            <div className="device-card-header">
              <span>Login history</span>
              <strong>3 recent sessions</strong>
            </div>
            {loginHistory.map((item) => (
              <div className="history-row" key={`${item.device}-${item.time}`}>
                <div>
                  <strong>{item.device}</strong>
                  <p>{item.location} • {item.method}</p>
                </div>
                <div className="history-meta">
                  <span>{item.status}</span>
                  <small>{item.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
