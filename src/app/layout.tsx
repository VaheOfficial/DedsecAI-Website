
import '../../styles/global.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
};

export default RootLayout;