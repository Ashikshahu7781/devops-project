function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;