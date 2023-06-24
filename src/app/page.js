'use client'
export default function Home() {
  const name = () => {
    alert('Please enter')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl uppercase font-bold">hello world</h1>
      <button className="p-5 border rounded font-semibold hover:bg-slate-600 hover:text-white" onClick={name}> click me</button>
    </main>
  );
}
