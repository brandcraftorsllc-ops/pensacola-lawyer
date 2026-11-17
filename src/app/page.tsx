import { HomePage } from "@/components/sections/HomePage";
import { getPageMetadata } from "@/data/route-metadata";

export const metadata = getPageMetadata("/");

export default function Page() {
  return <HomePage />;
}
