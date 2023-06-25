export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="text-4xl text-center my-4 border-b-4 mx-auto w-1/4">
        this is about nav
      </nav>

      {children}
    </section>
  );
}
