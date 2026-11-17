import Link from "next/link";
import { SITE_PHONE_LINK } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick contact">
      <a href={SITE_PHONE_LINK}>
        <span aria-hidden="true">⌕</span>
        Call Now
      </a>
      <Link href="/case-evaluation">
        <span aria-hidden="true">▣</span>
        Consultation
      </Link>
    </div>
  );
}
