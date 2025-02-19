import HankoStarterDashboard from "@/hanko starter components/HankoStarterDashboard";
import HankoStarterHeader from "@/hanko starter components/HankoStarterHeader";
import HankoStarterInfo from "@/hanko starter components/HankoStarterInfo";
import RequireHanko from "@/components/RequireHanko";

export default function Dashboard() {
  return (
    <div>
      <title>Hanko starter dashboard</title>
      <HankoStarterInfo/>
      <RequireHanko redirectTo="/">
        <HankoStarterHeader/>
        <HankoStarterDashboard/>
      </RequireHanko>
    </div>
  );
}
