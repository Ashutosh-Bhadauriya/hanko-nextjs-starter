import HankoStarterHeader from "@/hanko starter components/HankoStarterHeader";
import HankoStarterInfo from "@/hanko starter components/HankoStarterInfo";
import HankoProfile from "@/components/HankoProfile";
import RequireHanko from "@/components/RequireHanko";

export default function Profile() {
  return (
    <div>
      <title>Hanko starter profile</title>
      <HankoStarterInfo/>
      <RequireHanko redirectTo="/">
        <HankoStarterHeader/>
        <HankoProfile/>
      </RequireHanko>
    </div>
  );
}
