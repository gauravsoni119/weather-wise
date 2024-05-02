import Layout from "@/components/layout";
import { ReactElement } from "react";

export default function SettingsPage() {
  return <h1>Settings</h1>;
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
