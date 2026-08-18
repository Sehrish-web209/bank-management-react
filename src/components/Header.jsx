function Header() {
  return (
    <header>
      <h1>Bank Management System
       <span className="profile-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="9" r="3" />
            <path d="M7 18c1.2-2.2 2.8-3.5 5-3.5s3.8 1.3 5 3.5" />
          </svg>
        </span>
      </h1>
      <p>Manage your accounts and transactions</p>
    </header>
  );
}
export default Header;