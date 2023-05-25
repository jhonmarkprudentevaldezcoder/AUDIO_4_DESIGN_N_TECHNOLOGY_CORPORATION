import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css';

export const metadata = {
  title: 'Audio 4 Design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
