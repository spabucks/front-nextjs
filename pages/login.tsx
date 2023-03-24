import SecondHeader from "@/components/layouts/SecondHeader";
import FooterBtn from "@/components/ui/FooterBtn";
import LoginMain from "@/components/sections/LoginMain";
import LoginHeader from "@/components/sections/LoginHeader";
export default function Login() {
  return (
    <>
      <LoginHeader />
      <LoginMain />
      <FooterBtn title={"로그인"}></FooterBtn>
    </>
  );
}
