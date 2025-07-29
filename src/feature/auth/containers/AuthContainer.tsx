import LoginSection from "../sections/login";
import RegisterSection from "../sections/register";

export default function AuthContainer() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-16">
      <LoginSection />
      <div className="w-1/3 h-0.5 bg-white"/>
      <RegisterSection />
    </div>
  );
}
