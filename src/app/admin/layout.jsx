export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <nav>Admin Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
