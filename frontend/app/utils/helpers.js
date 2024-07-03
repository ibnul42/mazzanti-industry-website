const navItems = [
  { title: 'How it Works', link: '/how-it-works' },
  { title: 'Probate', link: '/probate' },
  { title: 'Stop Foreclosure', link: '/stop-foreclosure' },
  { title: 'Investor Sign Up', link: '/investor-sign' },
  { title: 'About Us', link: '/about-us' },
]

const getHero = async (title) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/admin/hero/single-hero/${title}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return {};
  }

  return res.json();
}

module.exports = {
  navItems,
  getHero
}